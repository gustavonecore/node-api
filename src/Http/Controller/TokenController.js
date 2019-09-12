
const BaseController = require('./BaseController');
const Token = require('../../Model/Token');

/**
 * Handle token requests
 */
class TokenController extends BaseController
{
	/**
	 * List existing tokens
	 * @param {*} request
	 * @returns Object
	 */
	async getCollection(request){
		let tokens = await Token.fetchAll();
		return this.json({ tokens });
	}
}

module.exports = TokenController;