import type { Metadata } from 'next';
import { ContentCard } from '@/components/ContentCard';
import { PageHeader } from '@/components/PageHeader';
import { getAllContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Experiments',
  description: 'Experiments, tests, and small investigations documented through building.',
};

export default async function ExperimentsPage() {
  const experiments = await getAllContent('experiments');

  return (
    <div className="container page">
      <PageHeader
        eyebrow="Experiments"
        title="Small tests with honest notes."
        intro="Each experiment starts with a question, a constraint, or a hypothesis. The point is to learn fast and document what happened."
      />
      <div className="content-list">
        {experiments.map((experiment) => (
          <ContentCard
            key={experiment.slug}
            item={experiment}
            href={`/experiments/${experiment.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
