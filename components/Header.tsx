import Link from 'next/link';
import styles from './Header.module.css';

const navigation = [
  { href: '/about', label: 'About' },
  { href: '/now', label: 'Now' },
  { href: '/experiments', label: 'Experiments' },
  { href: '/builds', label: 'Builds' },
  { href: '/notes', label: 'Notes' },
];

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.wordmark}>
          Qurio
        </Link>
        <nav aria-label="Primary" className={styles.nav}>
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
