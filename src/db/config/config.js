require("dotenv").config();

module.exports = {
  development: {
    dialect: process.env.DB_DIALECT || "mysql", // Default to MySQL
    username: process.env.MYSQL_USER || "root", // MySQL username
    password: process.env.MYSQL_PASSWORD || "root_password", // MySQL password
    database: process.env.MYSQL_DATABASE || "passthesalt", // MySQL database name
    host: process.env.MYSQL_HOST || "127.0.0.1", // MySQL host
  },
  test: {
    dialect: "mysql",
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
  },
  production: {
    dialect: "postgres",
    use_env_variable: process.env.POSTGRES_URL, // If using environment variable for production
  },
};
