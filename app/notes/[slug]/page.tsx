import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  buildEntryMetadata,
  getContentBySlug,
  getStaticSlugs,
  type CollectionName,
} from '@/lib/content';

const collection: CollectionName = 'notes';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getStaticSlugs(collection);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const { slug } = await params;
    const entry = await getContentBySlug(collection, slug);
    return buildEntryMetadata(entry, '/notes');
  } catch {
    return {
      title: 'Note',
    };
  }
}

export const dynamicParams = false;

export default async function NoteEntryPage({ params }: PageProps) {
  try {
    const { slug } = await params;
    const entry = await getContentBySlug(collection, slug);

    return (
      <div className="container page">
        <article className="prose">
          <header>
            <p className="eyebrow">Note</p>
            <h1 className="page-title">{entry.title}</h1>
            <p>{entry.description}</p>
            <dl className="content-meta">
              <div>
                <dt className="sr-only">Date</dt>
                <dd>{entry.dateLabel}</dd>
              </div>
              <div>
                <dt className="sr-only">Status</dt>
                <dd>{entry.status}</dd>
              </div>
            </dl>
            <ul className="tag-list" aria-label="Tags">
              {entry.tags.map((tag) => (
                <li key={tag} className="tag">
                  {tag}
                </li>
              ))}
            </ul>
          </header>
          {entry.content}
        </article>
      </div>
    );
  } catch {
    notFound();
  }
}
