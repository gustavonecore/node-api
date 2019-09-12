const BaseController = require('./BaseController');
const CreateSettingCommand = require('../../Command/Setting/CreateSettingCommand');

/**
 * Handle setting requests
 */
class SettingController extends BaseController
{
	/**
	 * Create a new setting
	 * @param {*} request
	 * @returns Object
	 */
	async postCollection(request){
		const setting = await this.bus.handle(new CreateSettingCommand(1, 'test', 'test', 1000));
		return this.json({ setting });
	}
}

module.exports = SettingController;