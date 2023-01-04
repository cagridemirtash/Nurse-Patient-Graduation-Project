const { Client } = require("pg");

const db = async () => {
  try {
    const client = new Client({
      user: "postgres",
      host: "127.0.0.1",
      database: "nextDb",
      password: <password>,
      port: 5432,
    });
    await client.connect();
    const res = await client.query("SELECT * FROM users");
    console.log(res.rows);
    await client.end();
  } catch (error) {
    console.log(error);
  }
};

export function db();