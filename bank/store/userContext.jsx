'use client';

import { createContext, useEffect, useState, useRef } from 'react';
// import { Web5 } from '@web5/api';

const userContext = createContext();

const protocolStr = 'https://54codes.xyz/transactions-protocol';

export function UserProvider({ children }) {
  const [foundData, setFoundData] = useState({
    web5: undefined,
    did: undefined,
  });
  const getName = useRef(null)
const [userName, setUserName] = useState('');
  const [allTransactions, setAllTransactions] = useState([]);
  useEffect(() => {
    const hookUpWeb5 = async () => {
      const { Web5 } = await import('@web5/api');
      const { web5, did } = await Web5.connect();

      if (web5 && did) {
        await configureProtocol(web5, did);
        await getAllTransactions(web5, did);
      }
    };

    hookUpWeb5();
  }, []);

  const createProtocolDefinition = () => {
    return {
      protocol: `${protocolStr}`,
      published: true,
      types: {
        transaction: {
          schema: `${protocolStr}/transaction`,
          dataFormats: [`application/json`],
        },
        account_balance: {
          schema: `${protocolStr}/account_balance`,
          dataFormats: [`text/plain`],
        },
        holder: {
          schema: `${protocolStr}/holder`,
          dataFormats: [`text/plain`],
        },
      },
      structure: {
        transaction: {
          $actions: [
            { who: `anyone`, can: `write` },
            { who: `author`, of: `transaction`, can: `read` },
            { who: `recipient`, of: `transaction`, can: `read` },
          ],
        },
        account_balance: {
          $actions: [{ who: `author`, of: `transaction`, can: `read` }],
        },
        holder: {
          $actions: [{ who: `author`, of: `transaction`, can: `read` }],
        },
      },
    };
  };

  const queryProtocolDefinition = async (web5, did) => {
    return await web5.dwn.protocols.query({
      message: {
        filter: {
          protocol: `${protocolStr}`,
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

    if (localProtocolStatus.code !== 200 || localProtocol.length === 0) {
      const { protocol, status } = await installProtocolLocally(
        web5,
        protocolDefinition
      );

      const { status: configureRemoteStatus } = await protocol.send(did);

    } else {
      console.log(`Protocol already installed`);
    }
  };

  const writeToDwn = async (transaction) => {
    const response = await foundData.web5.dwn.records.write({
      data: transaction.transaction,
      message: {
        protocol: `${protocolStr}`,
        protocolPath: `transaction`,
        schema: `${protocolStr}/transaction`,
        recipients: transaction.transaction.recipient,
      },
    });
    return response.record;
  };

  const sendRecord = async (record, recipient) => {
    return await record.send(recipient);
  };

  const getDebitTransactions = async (web5, did) => {
    const response = await web5.dwn.records.query({
      message: {
        filter: {
          protocol: `${protocolStr}`,
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
      // console.log(sentDings, `I sent these transactions`);
      return sentDings;
    } else {
      console.log(`error`, response.status);
    }
  };

  const getCreditTransactions = async (web5, did) => {
    const response = await web5.dwn.records.query({
      from: did,
      message: {
        filter: {
          protocol: `${protocolStr}`,
          schema: `${protocolStr}/transaction`,
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

      // console.log(recievedTransactions, `I received these transactions`);
      return recievedTransactions;
    } else {
      console.log(`error`, response.status);
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
    // const foundTransaction = allTransactions.filter(
    //   (txn) => txn.id === transactionId
    //   // txn.id === transactionId
    // );

    const response = await web5.dwn.records.delete({
      from: foundData.did,
      message: {
        recordId: transactionId,
      },
    });

    console.log(response);
    if (response.status.code === 200) {
      console.log(`Transaction deleted`);
    } else {
      console.log(`error`, response.status);
    }
  };

  const values = {
    foundData,
    allTransactions,
    writeToDwn,
    sendRecord,
    getAllTransactions,
    deleteTransaction,
    getName,
    setUserName,
    userName
    
  };

  return <userContext.Provider value={values}>{children}</userContext.Provider>;
}

export default userContext;
