function ApiError(){};

ApiError.prototype = new Error();
ApiError.prototype.name = 'ApiError';
ApiError.prototype.constructor = ApiError;
ApiError.RESOURCE_NOT_FOUND = 0;
ApiError.RESOURCE_ALREADY_EXISTS = 1;

/**
 * Helper class to create new Error Types based on HTTP errors
 */
function createApiError(name, init) {
	function E(message, code, ...args) {
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, this.constructor);
		} else {
			this.stack = (new Error()).stack;
		}

		this.message = message;
		this.code = code;
		this.toJSON = () => ({ code: this.code, message: this.message, stack: this.stack });

		if (init) {
			init.apply(this, [message, code, ...args]);
		}
	}

	E.prototype = new ApiError();
	E.prototype.name = name;
	E.prototype.constructor = E;

	return E;
}

module.exports.ApiError = ApiError;

module.exports.ResourceNotFoundError = createApiError('ResourceNotFoundError', function(message) {
	this.message = message || 'Resource not found';
	this.code = 404;
	this.errorCode = ApiError.RESOURCE_NOT_FOUND;
});

module.exports.ResourceAlreadyExistsError = createApiError('ResourceAlreadyExistsError', function(message) {
	this.message = message || 'Resource already exists';
	this.code = 419;
	this.errorCode = ApiError.RESOURCE_ALREADY_EXISTS;
});