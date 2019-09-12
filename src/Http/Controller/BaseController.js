class BaseController {
	constructor(container){
		this.container = container;
		this.bus = this.container.bus;
	}
	json(data, statusCode = 200) {
		return {
			body: { data },
			statusCode,
		};
	}
}

module.exports = BaseController;