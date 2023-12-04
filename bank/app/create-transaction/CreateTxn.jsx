import React from 'react';

function CreateTxn() {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="amount">Amount</label>
          <input type="number" name="amount" id="amount" />
        </div>

        <div>
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
          </select>
        </div>

        <div>
          <label htmlFor="Sender">Sender</label>
          <input type="text" name="sender" id="sender" />
        </div>

        <div>
          <label htmlFor="recipient">Recipient</label>
          <input type="text" name="recipient" id="recipient" />
        </div>

        <div>
          <label htmlFor="note">Note</label>
          <textarea name="note" id="note" />
        </div>
      </form>
    </div>
  );
}

export default CreateTxn;
