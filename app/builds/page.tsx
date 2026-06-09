import type { Metadata } from 'next';
import { ContentCard } from '@/components/ContentCard';
import { PageHeader } from '@/components/PageHeader';
import { getAllContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Builds',
  description: 'Project write-ups, build logs, and infrastructure notes.',
};

export default async function BuildsPage() {
  const builds = await getAllContent('builds');

  return (
    <div className="container page">
      <PageHeader
        eyebrow="Builds"
        title="Projects in progress and in practice."
        intro="This section covers longer-running builds, infrastructure work, and project decisions that are easier to understand when written down."
      />
      <div className="content-list">
        {builds.map((build) => (
          <ContentCard key={build.slug} item={build} href={`/builds/${build.slug}`} />
        ))}
      </div>
    </div>
  );
}
