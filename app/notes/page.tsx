import type { Metadata } from 'next';
import { ContentCard } from '@/components/ContentCard';
import { PageHeader } from '@/components/PageHeader';
import { getAllContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Notes',
  description:
    'Durable ideas, explanations, and reusable references collected while turning curiosity into capability.',
};

export default async function NotesPage() {
  const notes = await getAllContent('notes');

  return (
    <div className="container page">
      <PageHeader
        eyebrow="Notes"
        title="Durable ideas worth keeping."
        intro="Notes are where Qurio keeps explanations, principles, and reusable references that stay useful beyond a single experiment. They help turn what was learned once into something easier to use again."
      />
      <div className="content-list">
        {notes.map((note) => (
          <ContentCard key={note.slug} item={note} href={`/notes/${note.slug}`} />
        ))}
      </div>
    </div>
  );
}
