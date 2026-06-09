import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { getNowContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Now',
  description: 'What Het is currently learning, building, exploring, and reviewing.',
};

export default async function NowPage() {
  const content = await getNowContent();

  return (
    <div className="container page">
      <PageHeader
        eyebrow="Now"
        title="Current focus."
        intro="A lightweight snapshot of what I am learning, building, and thinking through right now."
      />
      <article className="prose">{content}</article>
    </div>
  );
}
