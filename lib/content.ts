import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import type { Metadata } from 'next';
import React from 'react';
import remarkGfm from 'remark-gfm';

export const collections = ['experiments', 'builds', 'notes'] as const;
export const statuses = ['idea', 'active', 'complete', 'paused', 'archived'] as const;

export type CollectionName = (typeof collections)[number];
export type ContentStatus = (typeof statuses)[number];

type RawFrontmatter = {
  title?: unknown;
  description?: unknown;
  date?: unknown;
  status?: unknown;
  tags?: unknown;
};

export type Frontmatter = {
  title: string;
  description: string;
  date: string;
  status: ContentStatus;
  tags: string[];
};

export type ContentMeta = Frontmatter & {
  slug: string;
  dateLabel: string;
};

type ContentEntry = ContentMeta & {
  content: React.ReactNode;
};

const rootContentDirectory = path.join(process.cwd(), 'content');

const mdxComponents = {
  a: (props: React.ComponentProps<'a'>) =>
    React.createElement('a', { ...props, className: 'inline-link' }),
  blockquote: (props: React.ComponentProps<'blockquote'>) =>
    React.createElement('blockquote', props),
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(date));
}

function resolveCollectionPath(collection: CollectionName) {
  return path.join(rootContentDirectory, collection);
}

function normalizeDate(date: string | Date) {
  if (date instanceof Date) {
    return date.toISOString().slice(0, 10);
  }

  return date;
}

function failFrontmatter(entryPath: string, message: string): never {
  throw new Error(`Invalid frontmatter in ${entryPath}: ${message}`);
}

function validateStringField(value: unknown, field: keyof RawFrontmatter, entryPath: string) {
  if (typeof value !== 'string' || value.trim().length === 0) {
    failFrontmatter(entryPath, `"${field}" must be a non-empty string.`);
  }

  return value.trim();
}

function validateDateField(value: unknown, entryPath: string) {
  if (!(typeof value === 'string' || value instanceof Date)) {
    failFrontmatter(entryPath, '"date" must be a string or Date.');
  }

  const normalizedDate = normalizeDate(value);
  const timestamp = Date.parse(normalizedDate);

  if (Number.isNaN(timestamp)) {
    failFrontmatter(entryPath, '"date" must be a valid date.');
  }

  return new Date(timestamp).toISOString().slice(0, 10);
}

function validateStatusField(value: unknown, entryPath: string): ContentStatus {
  if (typeof value !== 'string') {
    failFrontmatter(entryPath, `"status" must be one of: ${statuses.join(', ')}.`);
  }

  if (!statuses.includes(value as ContentStatus)) {
    failFrontmatter(entryPath, `"status" must be one of: ${statuses.join(', ')}.`);
  }

  return value as ContentStatus;
}

function validateTagsField(value: unknown, entryPath: string) {
  if (!Array.isArray(value) || value.length === 0) {
    failFrontmatter(entryPath, '"tags" must be a non-empty array of strings.');
  }

  const tags = value.map((tag) => {
    if (typeof tag !== 'string' || tag.trim().length === 0) {
      failFrontmatter(entryPath, '"tags" must contain only non-empty strings.');
    }

    return tag.trim();
  });

  return tags;
}

function parseFrontmatter(frontmatter: RawFrontmatter, entryPath: string): Frontmatter {
  return {
    title: validateStringField(frontmatter.title, 'title', entryPath),
    description: validateStringField(frontmatter.description, 'description', entryPath),
    date: validateDateField(frontmatter.date, entryPath),
    status: validateStatusField(frontmatter.status, entryPath),
    tags: validateTagsField(frontmatter.tags, entryPath),
  };
}

async function readDirectory(collection: CollectionName) {
  const directory = resolveCollectionPath(collection);
  return fs.readdir(directory);
}

async function readFile(collectionPath: string, slug: string) {
  const filePath = path.join(collectionPath, `${slug}.mdx`);
  return fs.readFile(filePath, 'utf8');
}

function mapMeta(slug: string, frontmatter: RawFrontmatter, entryPath: string): ContentMeta {
  const parsedFrontmatter = parseFrontmatter(frontmatter, entryPath);

  return {
    title: parsedFrontmatter.title,
    description: parsedFrontmatter.description,
    status: parsedFrontmatter.status,
    tags: parsedFrontmatter.tags,
    date: parsedFrontmatter.date,
    slug,
    dateLabel: formatDate(parsedFrontmatter.date),
  };
}

export async function getAllContent(collection: CollectionName) {
  const collectionPath = resolveCollectionPath(collection);
  const filenames = await readDirectory(collection);

  const items = await Promise.all(
    filenames
      .filter((filename) => filename.endsWith('.mdx'))
      .map(async (filename) => {
        const slug = filename.replace(/\.mdx$/, '');
        const source = await readFile(collectionPath, slug);
        const { data } = matter(source);
        return mapMeta(slug, data as RawFrontmatter, `${collection}/${filename}`);
      }),
  );

  return items.sort((left, right) => Date.parse(right.date) - Date.parse(left.date));
}

export async function getLatestContent(collection: CollectionName) {
  const items = await getAllContent(collection);
  return items[0] ?? null;
}

export async function getContentBySlug(collection: CollectionName, slug: string) {
  const collectionPath = resolveCollectionPath(collection);
  const source = await readFile(collectionPath, slug);
  const { content, frontmatter } = await compileMDX<RawFrontmatter>({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  const parsedFrontmatter = parseFrontmatter(frontmatter, `${collection}/${slug}.mdx`);

  return {
    title: parsedFrontmatter.title,
    description: parsedFrontmatter.description,
    status: parsedFrontmatter.status,
    tags: parsedFrontmatter.tags,
    date: parsedFrontmatter.date,
    slug,
    dateLabel: formatDate(parsedFrontmatter.date),
    content,
  } satisfies ContentEntry;
}

export async function getStaticSlugs(collection: CollectionName) {
  const items = await getAllContent(collection);
  return items.map((item) => ({ slug: item.slug }));
}

export async function getNowContent() {
  const filePath = path.join(rootContentDirectory, 'now', 'current.mdx');
  const source = await fs.readFile(filePath, 'utf8');
  const { content, frontmatter } = await compileMDX<RawFrontmatter>({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  parseFrontmatter(frontmatter, 'now/current.mdx');

  return content;
}

export function buildEntryMetadata(entry: ContentMeta, basePath: string): Metadata {
  return {
    title: entry.title,
    description: entry.description,
    openGraph: {
      title: entry.title,
      description: entry.description,
      type: 'article',
      url: `${basePath}/${entry.slug}`,
    },
  };
}
