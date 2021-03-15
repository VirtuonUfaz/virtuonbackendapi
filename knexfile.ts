import dotenv from 'dotenv'
dotenv.config();
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;
const dbConfig = {
  development:{
    client: "postgresql",
    connection: {
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_DATABASE,
    },
    migrations: {
      extension: "ts",
      directory: __dirname + "/src/db/migr",
    },
    seeds: {
      extension: "ts",
      directory: __dirname + "/src/db/seeds",
    },
  },
  production:{
    client: "postgresql",
    connection: {
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_DATABASE,
    },
    migrations: {
      extension: "ts",
      directory: __dirname + "/src/db/migr",
    },
    seeds: {
      extension: "ts",
      directory: __dirname + "/src/db/seeds",
    },
  }
}

export = dbConfig;