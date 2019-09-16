// Update with your config settings.
const dotenv = require('dotenv');
dotenv.config();

module.exports = {

  development: {
    client: 'mysql',
    connection: {
		host : process.env.DB_HOST,
		user : process.env.DB_USERNAME,
		password : process.env.DB_PASSWORD,
		database : process.env.DB_NAME,
		charset  : 'utf8'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    }
  }

};
