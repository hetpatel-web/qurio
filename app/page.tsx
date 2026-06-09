import Link from 'next/link';
import { ContentCard } from '@/components/ContentCard';
import { getLatestContent } from '@/lib/content';

export default async function HomePage() {
  const [latestExperiment, latestBuild, latestNote] = await Promise.all([
    getLatestContent('experiments'),
    getLatestContent('builds'),
    getLatestContent('notes'),
  ]);

  return (
    <div className="container">
      <section className="hero" aria-labelledby="home-title">
        <p className="eyebrow">Digital Garden</p>
        <div className="split">
          <div>
            <h1 id="home-title">Qurio</h1>
            <p>Curiosity turned into action.</p>
          </div>
          <div className="callout">
            <p>
              Qurio is where I document experiments, projects, notes, and lessons learned
              through building.
            </p>
            <p>
              The goal is simple: make learning visible, honest, and useful enough that
              someone else thinks, <strong>&quot;Let me try that.&quot;</strong>
            </p>
            <p>
              <Link href="/now" className="inline-link">
                See what I&apos;m focused on right now
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="latest-title">
        <h2 id="latest-title" className="section-title">
          Latest entries
        </h2>
        <div className="grid">
          {latestExperiment ? (
            <ContentCard item={latestExperiment} href={`/experiments/${latestExperiment.slug}`} />
          ) : null}
          {latestBuild ? (
            <ContentCard item={latestBuild} href={`/builds/${latestBuild.slug}`} />
          ) : null}
          {latestNote ? (
            <ContentCard item={latestNote} href={`/notes/${latestNote.slug}`} />
          ) : null}
        </div>
      </section>
    </div>
  );
}
