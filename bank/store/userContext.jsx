'use client';

import { createContext, useEffect, useState } from 'react';
import { Web5 } from '@web5/api';

const userContext = createContext();

export function UserProvider({ children }) {
  const [foundData, setFoundData] = useState({
    web5: undefined,
    did: undefined,
  });
  const [transactionShape, setTransactionShape] = useState({
    sender: '',
    recipient: '',
    amount: '',
    timestamp: '',
  });

  useEffect(() => {
    const hookUpWeb5 = async () => {
      const { web5, did } = await Web5.connect();

      setFoundData({ web5, did });

      if (web5 && did) {
        await configureProtocol(web5, did);
        await getAllTransactions(web5, did);
      }
    };

    hookUpWeb5();
  }, []);

  const createProtocolDefinition = () => {
    return {
      protocol: 'https://54codes.xyz/transactions-protocol',
      published: true,
      types: {
        transaction: {
          schema: 'https://54codes.xyz/transactions-protocol/transaction',
          dataFormats: ['application/json'],
        },
        account_balance: {
          schema: 'https://54codes.xyz/transactions-protocol/account_balance',
          dataFormats: ['text/plain'],
        },
        holder: {
          schema: 'https://54codes.xyz/transactions-protocol/holder',
          dataFormats: ['text/plain'],
        },
      },
      structure: {
        transaction: {
          $actions: [
            { who: 'anyone', can: 'write' },
            { who: 'author', of: 'transaction', can: 'read' },
            { who: 'recipient', of: 'transaction', can: 'read' },
          ],
        },
        account_balance: {
          $actions: [{ who: 'author', can: 'read' }],
        },
        holder: {
          $actions: [{ who: 'author', can: 'read' }],
        },
      },
    };
  };

  const queryProtocolDefinition = async (web5, did) => {
    return await web5.dwn.protocols.query({
      message: {
        filter: {
          protocol: 'https://54codes.xyz/transactions-protocol',
        },
      },
    });
  };

  const installProtocolLocally = async (web5, protocolDefinition) => {
    return await web5.dwn.protocols.configure({
      message: {
        definition: protocolDefinition,
      },
    });
  };

  const configureProtocol = async (web5, did) => {
    const protocolDefinition = await createProtocolDefinition();

    const { protocols: localProtocol, status: localProtocolStatus } =
      await queryForProtocol(web5);

    console.log({ localProtocol, localProtocolStatus });

    if (localProtocolStatus.code !== 200 || localProtocol.length === 0) {
      const { protocol, status } = await installProtocolLocally(
        web5,
        protocolDefinition
      );

      console.log('Protocol installed locally', protocol, status);

      const { status: configureRemoteStatus } = await protocol.send(did);

      console.log(
        'Did the protocol install on the remote DWN?',
        configureRemoteStatus
      );
    } else {
      console.log('Protocol already installed');
    }
  };

  //  read the transaction shape which would be set from the user input and then foward to the submit function to create a txn
  const constructTransaction = () => {
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();

    const transaction = {
      sender: myDid,
      recipient: transactionShape.recipient,
      amount: amountValue,
      timestamp: `${currentDate} ${currentTime}`,
    };

    return transaction;
  };

  const writeToDwn = async (ding) => {
    const { record } = await foundData.web5.dwn.records.write({
      message: {
        protocol: 'https://54codes.xyz/transactions-protocol',
        protocolPath: 'transaction',
        schema: 'https://54codes.xyz/transactions-protocol/transaction',
        data: ding,
        recipients: transactionShape.recipient,
      },
    });

    return record;
  };

  const sendRecord = async (record) => {
    return await record.send(transactionShape.recipient);
  };

  const getDebitTransactions = async (web5, did) => {
    const response = await web5.dwn.records.query({
      message: {
        filter: {
          protocol: 'https://blackgirlbytes.dev/dinger-chat-protocol',
        },
      },
    });

    if (response.status.code === 200) {
      const sentDings = await Promise.all(
        response.records.map(async (record) => {
          const data = await record.data.json();
          return data;
        })
      );
      console.log(sentDings, 'I sent these dings');
      return sentDings;
    } else {
      console.log('error', response.status);
    }
  };

  const getCreditTransactions = async (web5, did) => {
    const response = await web5.dwn.records.query({
      from: did,
      message: {
        filter: {
          protocol: 'https://blackgirlbytes.dev/dinger-chat-protocol',
          schema: 'https://blackgirlbytes.dev/ding',
        },
      },
    });

    if (response.status.code === 200) {
      const recievedTransactions = await Promise.all(
        response.records.map(async (record) => {
          const data = await record.data.json();
          return data;
        })
      );
      console.log(recievedTransactions, 'I received these dings');
      return recievedTransactions;
    } else {
      console.log('error', response.status);
    }
  };

  const getAllTransactions = async (web5, did) => {
    const debitTransactions = await getDebitTransactions(web5, did);
    const creditTransactions = await getCreditTransactions(web5, did);

    const transactions = [
      ...(debitTransactions || []),
      ...(creditTransactions || []),
    ];

    //  create a global state for transactions
  };

  const values = {
    foundData,
    transactionShape,
    setTransactionShape,
  };

  return <userContext.Provider value={{}}>{children}</userContext.Provider>;
}

export default userContext;
