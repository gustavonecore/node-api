class BaseMiddleware{
	constructor(container){
		this.container = container;
	}
	handle(req, response, next){
		next(req, response);
	}
}

module.exports = BaseMiddleware;