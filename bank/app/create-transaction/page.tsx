'use client';

import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

import styles from './page.module.css';

function page() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section>
      <div
        className={`full-height container flex flex-col center ${styles.createContainer}`}
      >
        <h1>Create Transaction</h1>

        <button className="flex align-y">
          Create Transaction
          <FiPlus />
        </button>
      </div>
    </section>
  );
}

export default page;
