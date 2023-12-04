import Link from 'next/link';

function Header() {
  return (
    <aside>
      <nav>
        <Link href="/">54Banking</Link>

        <ul>
          <li>
            <Link href="/create-transaction">Create Transaction</Link>
          </li>
          <li>
            <Link href="/debit">View Debits</Link>
          </li>
          <li>
            <Link href="/credit">View Credits</Link>
          </li>
          <li>
            <Link href="/balance">View Balance</Link>
          </li>
          <li>
            <Link href="/profile">My Profile</Link>
          </li>
        </ul>

        <div>
          <span />
          Hello user
        </div>
      </nav>
    </aside>
  );
}

export default Header;
