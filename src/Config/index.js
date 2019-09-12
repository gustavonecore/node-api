const merge = require('lodash/merge');
const base = require('./base');
const local = require('./local');

let config = null;

function createConfig() {
	if (config !== null) {
		return config;
	}
	return merge({}, base, local);
}

module.exports = createConfig();