'use client';

import { useContext } from 'react';
import { IoTrashOutline } from 'react-icons/io5';

import styles from './page.module.css';

import userContext from '../../store/userContext';
import formatDate from '../../utils/formatDate';

function page() {
  const { allTransactions, foundData, deleteTransaction } =
    useContext(userContext);

  console.log(allTransactions);

  return (
    <section>
      <div className={`container ${styles.container}`}>
        <h1>All Transactions</h1>

        <table className="full-width">
          <thead>
            <tr className={`grid ${styles.thead}`}>
              <th>Note</th>
              <th>Amount</th>
              <th>From</th>
              <th>To</th>
              <th>Timestamp</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allTransactions.map((txn, index) => (
              <tr key={index} className={`grid ${styles.tr}`}>
                <td>{txn.note.slice(0, 20)}...</td>
                <td>{txn.amount}</td>
                <td>{txn.sender.slice(0, 20)}...</td>
                <td>
                  {txn.recipient === foundData.did
                    ? 'Me'
                    : `${txn.recipient.slice(0, 20)}...`}
                </td>
                <td>{formatDate(txn.timestamp)}</td>
                <td>
                  <button
                    onClick={() =>
                      deleteTransaction(foundData.web5, foundData.did, txn.id)
                    }
                  >
                    <IoTrashOutline />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default page;
