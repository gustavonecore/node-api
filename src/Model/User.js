const bookshelf = require('../../bookshelf');
const Model = bookshelf.Model;

class User extends Model
{
	get tableName() {
		return 'user';
	}

	tokens() {
		return this.hasMany('Token');
	}
}

module.exports = bookshelf.model('User', User);