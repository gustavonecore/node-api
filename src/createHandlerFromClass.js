const BaseController = require('./Http/Controller/BaseController');
const BaseMiddleware = require('./Http/Middleware/BaseMiddleware');

const createHandlerFromClass = (classInstance) => new Proxy (classInstance, {
	get(target, propKey) {
		return (request, response, next) => {
			if (typeof target[propKey] !== 'function') {
				next(new Error(`Action"${propKey}" not found.`));
			}

			if (target instanceof BaseController){
				const result = target[propKey](request);
				response.set('Content-Type', 'application/json');
				if (result instanceof global.Promise) {
					result.then(({ body, statusCode }) => response.status(statusCode).json(body))
						.catch(e => next(e));
				} else {
					response.status(result.statusCode).json(result.body || {});
				}
			}
			else if (target instanceof BaseMiddleware){
				target[propKey](request, response, next);
			}
		};
	}
});

module.exports = createHandlerFromClass;