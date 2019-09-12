const BaseMiddleware = require('./BaseMiddleware');
const { ApiError } = require('../../Error/Api/index');

class ExceptionHandlerMiddleware extends BaseMiddleware
{
	handle(error, req, response, next){
		let body = {
			message: 'Unhandled error',
			code: -1,
		};

		if (error instanceof ApiError){
			body = {
				message: error.message,
				code: error.errorCode
			};
			response.status(error.code);
		}
		else{
			console.error(error);
		}

		response.json(body);
	}
}

module.exports = ExceptionHandlerMiddleware;