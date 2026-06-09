import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'About',
  description: 'Why Qurio exists, who Het is, and what this digital garden is for.',
};

export default function AboutPage() {
  return (
    <div className="container page">
      <PageHeader
        eyebrow="About"
        title="A place for practical curiosity."
        intro="Qurio is where I document experiments, projects, and lessons learned through building."
      />

      <article className="prose">
        <h2>Who Het is</h2>
        <p>
          I&apos;m Het. I like learning by making things, testing ideas in small pieces, and
          writing down what actually happened instead of what I expected to happen.
        </p>

        <h2>Why Qurio exists</h2>
        <p>
          Qurio exists because too much learning advice is abstract, polished, or detached
          from real work. I wanted a calmer place to keep track of experiments, working
          systems, unfinished thoughts, and the kinds of notes that become useful later.
        </p>

        <h2>The core philosophy</h2>
        <p>
          The best way to learn is to try. That means building small things, noticing what
          breaks, adjusting the approach, and documenting both the wins and the friction.
          Curiosity matters, but action is what turns it into understanding.
        </p>

        <h2>What visitors can expect</h2>
        <p>
          You&apos;ll find experiment logs, build notes, learning notes, and current areas of
          focus. Some entries will be tidy. Some will be rough. The standard is usefulness,
          not polish.
        </p>
        <p>
          If the site does its job well, you leave with one reaction: <em>Let me try that.</em>
        </p>
      </article>
    </div>
  );
}
