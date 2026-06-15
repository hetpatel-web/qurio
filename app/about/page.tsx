import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Why Qurio exists, what it stands for, and how it turns curiosity into capability through experiments, builds, notes, and reflection.',
};

export default function AboutPage() {
  return (
    <div className="container page">
      <PageHeader
        eyebrow="About Qurio"
        title="A place for turning curiosity into capability."
        intro="Qurio is a practical learning system and public digital garden for documenting the real process of figuring things out."
      />

      <article className="prose">
        <h2>Why Qurio exists</h2>
        <p>Qurio exists to help people prove to themselves that they can figure things out.</p>
        <p>
          We live in a world with more information than ever, but information alone
          does not create capability. Many people stay stuck because they consume
          more than they create, wait until they feel ready, fear making mistakes,
          or believe they need permission before starting.
        </p>
        <p>
          Qurio is built around a simple idea: curiosity becomes useful when it
          turns into action.
        </p>

        <h2>The problem Qurio is exploring</h2>
        <p>The real gap is not access to knowledge. The real gap is between curiosity and action.</p>
        <p>
          Qurio exists for the moment when curiosity is real, but action feels
          uncertain. It is a response to passive helplessness: the belief that you
          need certainty, expertise, or permission before you can begin.
        </p>

        <h2>The core philosophy</h2>
        <p>
          The best way to learn is to try. That means asking questions, running
          small experiments, building useful things, documenting what happened,
          reflecting on the result, and improving the next attempt.
        </p>
        <p>The loop is:</p>
        <p>
          <strong>Question → Experiment → Build → Document → Reflect → Improve</strong>
        </p>
        <p>
          Curiosity starts the process. Action creates experience. Reflection turns
          experience into understanding. Repetition builds capability.
        </p>

        <h2>What Qurio documents</h2>
        <p>
          Qurio captures experiments, builds, notes, journal entries, and lessons
          learned from real work. Some entries are technical. Some are reflective.
          Some are unfinished. The standard is usefulness, not polish.
        </p>
        <p>
          The goal is not to present polished certainty after the fact. The goal is
          to make the process visible enough that someone else can learn from it,
          adapt it, and try something of their own.
        </p>

        <h2>Who Het is</h2>
        <p>
          I&apos;m Het. I like learning by making things, testing ideas in small
          pieces, and writing down what actually happened instead of only what I
          expected to happen.
        </p>
        <p>
          Qurio is where I turn scattered learning into durable artifacts: notes,
          experiments, build logs, reflections, and practical discoveries that can
          help my future self and other curious people.
        </p>

        <h2>What visitors can expect</h2>
        <p>
          You&apos;ll find experiment logs, build notes, technical explanations,
          current areas of focus, and reflections from learning by doing. The work
          may not always be polished, but it should be honest, practical, and
          useful.
        </p>
        <p>
          If Qurio does its job well, you leave with one reaction:{' '}
          <em>Let me try that.</em>
        </p>
      </article>
    </div>
  );
}
