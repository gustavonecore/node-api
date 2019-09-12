module.exports = {
	database: {
		client: 'mysql',
        connection: {
            host     : 'db',
            user     : 'root',
            password : 'root',
            database : 'oss',
            charset  : 'utf8'
        }
	},
	paths:{
		handlers: __dirname + '/../Handler/',
		commands: __dirname + '/../Command/',
		controllers: __dirname + '/../Http/Controller/',
	},
	host: '127.0.0.1',
	port: 3000,
	middlewares:[
		__dirname + '/../Http/Middleware/AuthMiddleware.js',
	],
}