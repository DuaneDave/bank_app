'use client';

import { UserProvider } from '@/store/userContext';

function LayoutProvider({ children }) {
  return (
    <UserProvider>
      <main>{children}</main>
    </UserProvider>
  );
}

export default LayoutProvider;
