const Client = require('pg').Client
const cliente = new Client({
    user: "postgres",
    password: "458356ju",
    host: "localhost",
    port: 5432,
    database: "Sustyle",

})