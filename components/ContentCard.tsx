import Link from 'next/link';
import type { ContentMeta } from '@/lib/content';
import styles from './ContentCard.module.css';

type ContentCardProps = {
  item: ContentMeta;
  href: string;
};

export function ContentCard({ item, href }: ContentCardProps) {
  return (
    <article className={styles.card}>
      <p className={styles.kicker}>
        <span>{item.dateLabel}</span>
        <span aria-hidden="true">·</span>
        <span>{item.status}</span>
      </p>
      <h3 className={styles.title}>
        <Link href={href} className={styles.link}>
          {item.title}
        </Link>
      </h3>
      <p className={styles.description}>{item.description}</p>
      <ul className={styles.tags} aria-label="Tags">
        {item.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  );
}
