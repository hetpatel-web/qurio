import type { Metadata } from 'next';
import { ContentCard } from '@/components/ContentCard';
import { PageHeader } from '@/components/PageHeader';
import { getAllContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Builds',
  description:
    'Longer-running projects and systems developed across multiple sessions, with decisions and progress documented along the way.',
};

export default async function BuildsPage() {
  const builds = await getAllContent('builds');

  return (
    <div className="container page">
      <PageHeader
        eyebrow="Builds"
        title="Larger projects developed over time."
        intro="Builds are where Qurio follows systems, projects, and infrastructure work across multiple sessions. They hold the longer arc: the problem, the approach, the decisions, the progress, and what changed while building."
      />
      <div className="content-list">
        {builds.map((build) => (
          <ContentCard key={build.slug} item={build} href={`/builds/${build.slug}`} />
        ))}
      </div>
    </div>
  );
}
