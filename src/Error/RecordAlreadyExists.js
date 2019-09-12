const ApiException = require('./ApiException');
class RecordAlreadyExists extends ApiException
{
	constructor(record) {
		super('Record already exists for: ' + record, ApiException.RESOURCE_ALREADY_EXISTS);
	}
	getHttpCode(){
		return 409;
	}
}

module.exports = RecordAlreadyExists;