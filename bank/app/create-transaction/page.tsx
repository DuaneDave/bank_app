'use client';

import { useState, useContext } from 'react';
import { FiPlus } from 'react-icons/fi';

import styles from './page.module.css';

import CreateTxn from './CreateTxn';
import userContext from '../../store/userContext';

function page() {
  const [isVisible, setIsVisible] = useState(false);
  const { foundData } = useContext(userContext);

  return (
    <section>
      <div
        className={`full-height container flex flex-col center ${styles.createContainer}`}
      >
        <h1>Create Transaction</h1>

        <button className="flex align-y" onClick={() => setIsVisible(true)}>
          Create Transaction
          <FiPlus />
        </button>

        {isVisible && <CreateTxn onClose={() => setIsVisible(false)} />}
      </div>
    </section>
  );
}

export default page;
