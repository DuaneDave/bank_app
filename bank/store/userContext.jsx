'use client';

import { createContext, useEffect, useState } from 'react';
import { Web5 } from '@web5/api';

const userContext = createContext();

export function UserProvider({ children }) {
  const [foundData, setFoundData] = useState({
    web5: undefined,
    did: undefined,
  });
  const [allTransactions, setAllTransactions] = useState([]);

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
          $actions: [{ who: 'author', of: 'transaction', can: 'read' }],
        },
        holder: {
          $actions: [{ who: 'author', of: 'transaction', can: 'read' }],
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
      await queryProtocolDefinition(web5);

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

  const writeToDwn = async (transaction) => {
    const response = await foundData.web5.dwn.records.write({
      data: transaction.transaction,
      message: {
        protocol: 'https://54codes.xyz/transactions-protocol',
        protocolPath: 'transaction',
        schema: 'https://54codes.xyz/transactions-protocol/transaction',
        recipients: transaction.transaction.recipient,
      },
    });

    console.log(response);
    return response.record;
  };

  const sendRecord = async (record, recipient) => {
    return await record.send(recipient);
  };

  const getDebitTransactions = async (web5, did) => {
    const response = await web5.dwn.records.query({
      message: {
        filter: {
          protocol: 'https://54codes.xyz/transactions-protocol',
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
      // console.log(sentDings, 'I sent these transactions');
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
          protocol: 'https://54codes.xyz/transactions-protocol',
          schema: 'https://54codes.xyz/transactions-protocol/transaction',
        },
      },
    });

    if (response.status.code === 200) {
      const recievedTransactions = await Promise.all(
        response.records.map(async (record) => {
          console.log(record)
          const data = await record.data.json();
          return data;
        })
      );

      // console.log(recievedTransactions, 'I received these transactions');
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

    setAllTransactions(transactions);
  };

  const deleteTransaction = async (web5, did, transactionId) => {
    const foundTransaction = allTransactions.filter(
      (txn) => txn.id === transactionId
    );

    console.log(foundTransaction);

    const response = await web5.dwn.records.delete({
      message: {
        recordId: transactionId,
      },
    });

    console.log(response)
    if (response.status.code === 200) {
      console.log('Transaction deleted');
    } else {
      console.log('error', response.status);
    }
  };

  const values = {
    foundData,
    allTransactions,
    writeToDwn,
    sendRecord,
    getAllTransactions,
    deleteTransaction,
  };

  return <userContext.Provider value={values}>{children}</userContext.Provider>;
}

export default userContext;
