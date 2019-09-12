const fs = require('fs');
const path = require('path');
const isDirectory = dir => fs.lstatSync(dir).isDirectory();
const HandlerNotFoundException = require('./Error/Hex/HandlerNotFoundException');

const walkSync = file =>
	(isDirectory(file) ? fs.readdirSync(file).map(f => walkSync(path.join(file, f))) : file);

class CommandBus
{
	constructor(container) {
		this.container = container;
		this.handlers = walkSync(container.config.paths.handlers);
	}
	handle(command) {
		const handlerName = `${command.constructor.name.replace('Command', 'Handler')}.js`;
		const handlerPath = this.handlers.find(handler => {
			return handler[0].endsWith(handlerName);
		});

		if (!handlerPath || handlerPath.length === 0) {
			throw new HandlerNotFoundException(handlerName);
		}

		const handlerClass = require(handlerPath[0]);
		const handler = new handlerClass(this.container);

		return handler.handle(command);
	}
}

module.exports = CommandBus;