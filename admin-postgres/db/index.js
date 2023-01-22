const { Client } = require("pg");
const client = new Client({
    user: "postgres",
    database: "admindb",
    password: "root",
    port: 5432,
    host: "localhost",
});

client.connect();

module.exports = client;


