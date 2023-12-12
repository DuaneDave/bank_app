'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './layout.module.css';

const links = [
  { href: '/my_profile', label: 'My Profile' },
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
        <button><Link href="/">WEB5-BANK</Link></button>

        <ul className={`flex flex-col ${styles.navItems}`}>
          {links.map(({ href, label }) => (
            <button  
            key={href}
            className={`${pathName === href ? styles.active : ''}`}>
              <li>
              <Link href={href}>{label}</Link>
            </li>
            </button>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default SideBar;
