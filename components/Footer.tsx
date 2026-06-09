import Link from 'next/link';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.title}>Qurio</p>
          <p className={styles.copy}>Where curious people learn by building.</p>
        </div>
        <nav aria-label="Footer" className={styles.nav}>
          <Link href="/about">About</Link>
          <Link href="/now">Now</Link>
          <Link href="/notes">Notes</Link>
        </nav>
      </div>
    </footer>
  );
}
