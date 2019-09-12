const Setting = require('../../Model/Setting');
const { ResourceAlreadyExistsError } = require('../../Error/Api/index');

class CreateSettingHandler
{
	constructor(container) {
		this.bus = container.bus;
	}
	async handle(command) {
		const exists =  await new Setting({
			entity_id: command.getEntityId(),
			entity_name: command.getEntityName(),
			name: command.getName(),
		}).fetch();

		if (exists){
			throw new ResourceAlreadyExistsError('Setting entity: ' + command.getEntityName() + ' ' + command.getEntityId() + ' with name: ' + command.getName());
		}

		return new Setting({
			entity_id: command.getEntityId(),
			entity_name: command.getEntityName(),
			name: command.getName(),
			value: command.getValue(),
		}).save();
	}
}

module.exports = CreateSettingHandler;