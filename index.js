const container = require('./src/Config/container');
const application = container.resolve('application');
application.run();