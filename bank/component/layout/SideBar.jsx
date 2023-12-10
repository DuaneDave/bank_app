'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './layout.module.css';

const links = [
  { href: '/', label: 'My Profile' },
  { href: '/create-transaction', label: 'Create Transaction' },
  { href: '/debit', label: 'View Debits' },
  { href: '/credit', label: 'View Credits' },
  { href: '/all-transanctions', label: 'All transactions' },
  { href: '/balance', label: 'View Balance' },
];

function SideBar() {
  const pathName = usePathname();

  return (
    <aside>
      <nav className={`full-height flex flex-col ${styles.sideBar}`}>
        <Link href="/">54Banking</Link>

        <ul className={`flex flex-col ${styles.navItems}`}>
          {links.map(({ href, label }) => (
            <li
              key={href}
              className={`${pathName === href ? styles.active : ''}`}
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default SideBar;
