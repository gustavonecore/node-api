class ApiException extends Error
{
	constructor(message, errorCode){
		super();
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, this.constructor);
		} else {
			this.stack = (new Error()).stack;
		}
		this.message = message;
		this.code = errorCode;
	}
	getHttpCode(){
		return 500;
	}
}

ApiException.RESOURCE_NOT_FOUND = 0;
ApiException.RESOURCE_ALREADY_EXISTS = 1;

module.exports = ApiException;