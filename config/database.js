import { Sequelize } from "sequelize";

// create connection to postgres database expensy
const db = new Sequelize("expensy", "postgres", "alejandro", {
    host: "expensy.culrjeksk20i.us-east-1.rds.amazonaws.com",
    dialect: "postgres",
    logging: false
});

export default db;
