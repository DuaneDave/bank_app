import { useContext, useState } from 'react';

import styles from './page.module.css';

import userContext from '../../store/userContext';

function CreateTxn({ onClose }) {
  const [transactionShape, setTransactionShape] = useState({
    recipient: '',
    amount: '',
    type: '',
    note: '',
  });
  const { foundData, writeToDwn, sendRecord, getAllTransactions } =
    useContext(userContext);

  console.log(foundData.did);

  const handleSubmission = async (e) => {
    e.preventDefault();

    if (
      !transactionShape.recipient ||
      !transactionShape.amount ||
      !transactionShape.type
    )
      return;

    const transaction = {
      transaction: {
        sender: foundData.did,
        ...transactionShape,
        timestamp: new Date().toISOString(),
      },
      account_balance: '0.00',
      holder: foundData.did,
    };

    console.log(transaction);

    const record = await writeToDwn(transaction);

    await sendRecord(record);
    await getAllTransactions(foundData.web5, foundData.did);

    setTransactionShape({
      recipient: '',
      amount: '',
      type: '',
      note: '',
    });
  };

  return (
    <div
      className={`full-height full-width flex center ${styles.modal}`}
      onClick={onClose}
    >
      <form
        className="flex flex-col align-x"
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmission}
      >
        <div className={`grid ${styles.inputField}`}>
          <div className="flex flex-col">
            <label htmlFor="amount">Amount</label>
            <input
              className="full-width"
              type="number"
              name="amount"
              id="amount"
              placeholder="0.00"
              value={transactionShape.amount}
              onChange={(e) =>
                setTransactionShape({
                  ...transactionShape,
                  amount: e.target.value,
                })
              }
            />
          </div>

          <div className={`flex flex-col`}>
            <label htmlFor="type">Type</label>
            <div className={`full-width ${styles.select}`}>
              <select
                className={`full-width`}
                name="type"
                id="type"
                value={transactionShape.type}
                onChange={(e) =>
                  setTransactionShape({
                    ...transactionShape,
                    type: e.target.value,
                  })
                }
              >
                <option value="...">...</option>
                <option value="credit">Credit</option>
                <option value="debit">Debit</option>
              </select>
            </div>
          </div>
        </div>

        <div className={`grid ${styles.inputField}`}>
          <div className={`flex flex-col `}>
            <label htmlFor="Sender">Sender</label>
            <input
              className="full-width"
              type="text"
              name="sender"
              id="sender"
              value={foundData.did}
              readOnly
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="recipient">Recipient</label>
            <input
              className="full-width"
              type="text"
              name="recipient"
              id="recipient"
              placeholder="did:web:54codes.xyz:alice"
              value={transactionShape.recipient}
              onChange={(e) =>
                setTransactionShape({
                  ...transactionShape,
                  recipient: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div className={`flex flex-col`}>
          <label htmlFor="note">Note</label>
          <textarea
            className={`full-width ${styles.textArea}`}
            name="note"
            id="note"
            placeholder="This is a note"
            value={transactionShape.note}
            onChange={(e) =>
              setTransactionShape({
                ...transactionShape,
                note: e.target.value,
              })
            }
          />
        </div>

        <button>Create Transaction</button>
      </form>
    </div>
  );
}

export default CreateTxn;
