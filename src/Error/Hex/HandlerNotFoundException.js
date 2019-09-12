class HandlerNotFoundException extends Error
{
	constructor(name) {
		super();
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, this.constructor);
		} else {
			this.stack = (new Error()).stack;
		}

		this.message = 'Handler not found for: ' + name;
	}
}

module.exports = HandlerNotFoundException;