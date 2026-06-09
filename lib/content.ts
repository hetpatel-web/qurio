import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import type { Metadata } from 'next';
import React from 'react';

export const collections = ['experiments', 'builds', 'notes'] as const;

export type CollectionName = (typeof collections)[number];

export type Frontmatter = {
  title: string;
  description: string;
  date: string;
  status: string;
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

async function readDirectory(collection: CollectionName) {
  const directory = resolveCollectionPath(collection);
  return fs.readdir(directory);
}

async function readFile(collectionPath: string, slug: string) {
  const filePath = path.join(collectionPath, `${slug}.mdx`);
  return fs.readFile(filePath, 'utf8');
}

function mapMeta(slug: string, frontmatter: Frontmatter): ContentMeta {
  return {
    ...frontmatter,
    slug,
    dateLabel: formatDate(frontmatter.date),
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
        return mapMeta(slug, data as Frontmatter);
      }),
  );

  return items.sort((left, right) => right.date.localeCompare(left.date));
}

export async function getLatestContent(collection: CollectionName) {
  const items = await getAllContent(collection);
  return items[0] ?? null;
}

export async function getContentBySlug(collection: CollectionName, slug: string) {
  const collectionPath = resolveCollectionPath(collection);
  const source = await readFile(collectionPath, slug);
  const { content, frontmatter } = await compileMDX<Frontmatter>({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
    },
  });

  return {
    ...mapMeta(slug, frontmatter),
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
  const { content } = await compileMDX({
    source,
    components: mdxComponents,
  });

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
