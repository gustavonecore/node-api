const BaseMiddleware = require('./BaseMiddleware');

class AuthMiddleware extends BaseMiddleware
{
	handle(req, res, next){
		var accessToken = req.query.access_token ? req.query.access_token : null;
		accessToken = accessToken ? accessToken : req.header('x-access-token');

		if (accessToken){
			req.user = {id: 1, name: 'Testing middlewares'};
		}

		next();
	}
}

module.exports = AuthMiddleware;