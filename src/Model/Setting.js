const bookshelf = require('../../bookshelf');
const Model = bookshelf.Model;

class Setting extends Model
{
	get tableName() {
		return 'setting';
    }
}

module.exports = bookshelf.model('Setting', Setting);