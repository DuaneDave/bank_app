'use client';

import { UserProvider } from '../../store/userContext';

import styles from './layout.module.css';

import SideBar from './SideBar';

function LayoutProvider({ children }) {
  return (
    <UserProvider>
      <main className={`grid ${styles.layout_wrapper}`}>
        <SideBar />
        {children}
      </main>
    </UserProvider>
  );
}

export default LayoutProvider;
