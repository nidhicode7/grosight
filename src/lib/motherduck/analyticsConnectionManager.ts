import { MDConnection } from '@motherduck/wasm-client';
import { getMotherDuckConfig } from './config';

let connection: ReturnType<typeof MDConnection.create> | null = null;
let connectionPromise: Promise<ReturnType<typeof MDConnection.create>> | null = null;

//Adds lazy implementation to the connection initialization using promise, rather than initializing it immediately.
//Useful in scenarios where multiple components might simultaneously attempt to use the connection.

export const initializeConnection = async () => {
  const config = getMotherDuckConfig();
  
  if (!config.token) {
    throw new Error('MotherDuck token not provided');
  }

  if (!connection && !connectionPromise) {
    connectionPromise = (async () => {
      const conn = MDConnection.create({
        mdToken: config.token,
      });
      await conn.isInitialized();
      connection = conn;
      return conn;
    })();
  }

  return connectionPromise;
};

export const getConnection = async () => {
  if (!connection) {
    return initializeConnection();
  }
  return connection;
};

export const closeConnection = async () => {
  if (connection) {
    await connection.close();
    connection = null;
    connectionPromise = null;
  }
};