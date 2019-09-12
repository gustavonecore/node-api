class CreateSettingCommand
{
	constructor(entityId, entityName, name, value) {
		this.entityId = entityId;
		this.entityName = entityName;
		this.name = name;
		this.value = value;
	}
	getEntityId() {
		return this.entityId;
	}
	getEntityName() {
		return this.entityName;
	}
	getName() {
		return this.name;
	}
	getValue() {
		return this.value;
	}
}

module.exports = CreateSettingCommand;