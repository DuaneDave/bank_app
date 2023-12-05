'use client';

import { useContext } from 'react';


import userContext from '../store/userContext';

export default function Home() {
  const as = useContext(userContext);

  console.log(as);

  return (
    <main>
      <div className={`container`}>sbcjks</div>
    </main>
  );
}
