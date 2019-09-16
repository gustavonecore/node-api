const { createContainer, asValue, asFunction, asClass } = require('awilix');
const config = require('./index');
const routes = require('./routes');
const CommandBus = require('../CommandBus');
const Application = require('../Application');
const Logger = require('../Logger');

const container = createContainer();

container.register({
	config: asValue(config),
	routes: asValue(routes),
	bus: asClass(CommandBus).singleton(),
	application: asClass(Application).singleton(),
	logger: asValue(Logger),
});

module.exports = container;