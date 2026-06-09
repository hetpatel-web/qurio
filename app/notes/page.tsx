import type { Metadata } from 'next';
import { ContentCard } from '@/components/ContentCard';
import { PageHeader } from '@/components/PageHeader';
import { getAllContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Notes',
  description: 'Reading notes, reflections, and short ideas captured while learning by building.',
};

export default async function NotesPage() {
  const notes = await getAllContent('notes');

  return (
    <div className="container page">
      <PageHeader
        eyebrow="Notes"
        title="Thoughts worth keeping."
        intro="Shorter notes for ideas, principles, and reflections that shape how I approach building and learning."
      />
      <div className="content-list">
        {notes.map((note) => (
          <ContentCard key={note.slug} item={note} href={`/notes/${note.slug}`} />
        ))}
      </div>
    </div>
  );
}
