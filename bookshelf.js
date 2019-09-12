const config = require('./src/Config/index');
const knex = require('knex')(config.database);
const bookshelf = require('bookshelf')(knex);

bookshelf.plugin('registry');

module.exports = bookshelf;