const express = require('express');
const bodyParser = require('body-parser');
const ExceptionHandlerMiddleware = require('./Http/Middleware/ExceptionHandlerMiddleware');
const createHandlerFromClass = require('./createHandlerFromClass');

class Application
{
	constructor(container) {
		this.container = container;
		this.config = container.config;
		this.routes = container.routes;
		this.init();
	}
	init(){
		this.configureExpressApp();
		this.configureMiddlewares();
		this.configureControllers();
		this.configureErrorHandler();
	}
	configureErrorHandler(){
		this.app.use((new ExceptionHandlerMiddleware(this.container)).handle);
	}
	configureMiddlewares(){
		this.config.middlewares.map(path => {
			const middlewareClass = require(path);
			const middlewareInstance = new middlewareClass(this.container);
			const middleware = createHandlerFromClass(middlewareInstance);
			this.app.use(middleware.handle);
		});
	}
	configureControllers(){
		this.routes.map(route => {
			const [controllerName, action] = route.handler.split("::");
			const controllerPath = this.config.paths.controllers + controllerName;
			const controller = require(controllerPath);

			if (!controller){
				throw new Error('Controller was not loaded: ' + controllerName);
			}

			const handler = createHandlerFromClass(new controller(this.container));

			this.addRoute(route.method, route.uri, handler[action]);
		});
	}
	configureExpressApp(){
		if (this.app){
			throw new Error('Application is already configured');
		}

		this.app = express();
		this.app.use(bodyParser.urlencoded({ extended: true }));
		this.app.use(bodyParser.json());
	}
	getRouteHandler(handler){
		return function(req, res, next){
			handler(req, res, next).catch(e => {
				ExceptionHandlerMiddleware.handle(e, req, res, next);
			});
		}
	}
	addRoute(method, uri, handler){
		this.app[method](uri, handler);
	}
	run(){
		this.app.listen(this.config.port, () => {
			// TODO : Add a logger class for this
			console.log('listening on ', this.config.port);
		});
	}
}

module.exports = Application;