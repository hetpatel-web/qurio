import styles from './PageHeader.module.css';

type PageHeaderProps = {
  title: string;
  intro: string;
  eyebrow?: string;
};

export function PageHeader({ title, intro, eyebrow }: PageHeaderProps) {
  return (
    <header className={styles.header}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h1 className="page-title">{title}</h1>
      <p className={styles.intro}>{intro}</p>
    </header>
  );
}
