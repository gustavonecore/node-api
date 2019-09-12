const bookshelf = require('../../bookshelf');
const Model = bookshelf.Model;

class Token extends Model
{
	get tableName() {
		return 'token';
    }

    user() {
		return this.belongsTo('User');
	}
}

module.exports = bookshelf.model('Token', Token);