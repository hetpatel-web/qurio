import type { Metadata } from 'next';
import { ContentCard } from '@/components/ContentCard';
import { PageHeader } from '@/components/PageHeader';
import { getAllContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Experiments',
  description:
    'Focused tests that turn questions, constraints, and hypotheses into evidence through real attempts.',
};

export default async function ExperimentsPage() {
  const experiments = await getAllContent('experiments');

  return (
    <div className="container page">
      <PageHeader
        eyebrow="Experiments"
        title="Focused tests that turn questions into evidence."
        intro="Experiments are the shortest loop in Qurio. Each one starts with a question, a constraint, or a hypothesis, then records what happened clearly enough to guide the next attempt."
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
