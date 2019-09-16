const dotenv = require('dotenv');
dotenv.config();

const container = require('./src/Config/container');
const application = container.resolve('application');
application.run();