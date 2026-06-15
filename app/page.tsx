import type { Metadata } from 'next';
import Link from 'next/link';
import { ContentCard } from '@/components/ContentCard';
import { getLatestContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Turn Curiosity Into Capability',
  description:
    'Qurio is a practical learning system and public digital garden for turning questions into experiments, experiments into artifacts, and artifacts into shared learning.',
};

export default async function HomePage() {
  const [latestExperiment, latestBuild, latestNote] = await Promise.all([
    getLatestContent('experiments'),
    getLatestContent('builds'),
    getLatestContent('notes'),
  ]);

  return (
    <div className="container">
      <section className="hero" aria-labelledby="home-title">
        <p className="eyebrow">Turn Curiosity Into Capability</p>
        <div className="split">
          <div>
            <h1 id="home-title">
              A place for turning questions into experiments, and experiments into
              capability.
            </h1>
            <p>
              Qurio helps people move from curiosity to action and from action to
              confidence.
            </p>
          </div>
          <div className="callout">
            <p>
              Qurio is a public digital garden of experiments, builds, notes, and
              reflections from learning by doing.
            </p>
            <p>
              It is for curious people, self-directed learners, and anyone who wants
              practical proof that they can figure things out.
            </p>
            <p>
              Qurio exists for the moment when curiosity is real, but action feels
              uncertain.
            </p>
            <p>
              The goal is not to look like an expert. The goal is to show the real
              process clearly enough that someone else thinks,{' '}
              <strong>&quot;Let me try that.&quot;</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="section home-detail" aria-labelledby="what-title">
        <div className="split split-equal">
          <div className="prose">
            <h2 id="what-title" className="section-title">
              What Qurio Is
            </h2>
            <p>
              Qurio is a practical learning system and public digital garden for
              turning questions into experiments, experiments into artifacts, and
              artifacts into shared learning.
            </p>
            <p>
              It documents the honest process of trying, building, documenting, and
              improving instead of presenting polished certainty after the fact.
            </p>
            <p>
              <Link href="/now" className="inline-link">
                See what I&apos;m focused on right now
              </Link>
              .
            </p>
          </div>
          <div className="prose">
            <h2 id="works-title" className="section-title">
              How Qurio Works
            </h2>
            <ol className="loop-list" aria-label="Qurio learning loop">
              <li>Question</li>
              <li>Experiment</li>
              <li>Build</li>
              <li>Document</li>
              <li>Reflect</li>
              <li>Improve</li>
            </ol>
            <p className="loop-note">
              Each step should leave behind something useful: a note, an experiment
              log, a build log, a checklist, or a clearer next step.
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
