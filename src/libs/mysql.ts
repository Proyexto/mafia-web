import serverlessMysql from "serverless-mysql";

export const mysql = serverlessMysql({
  config: {
    host: process.env.conn_HOST,
    user: process.env.conn_USER,
    password: process.env.conn_PASS,
    port: parseInt(process.env.conn_PORT as string),
    database: process.env.conn_DB_NAME,
  },
});
