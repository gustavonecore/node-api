module.exports = {
	host: process.env.API_URL,
	port: process.env.API_PORT,

	database: {
		client: 'mysql',
        connection: {
            host : process.env.DB_HOST,
            user : process.env.DB_USERNAME,
            password : process.env.DB_PASSWORD,
            database : process.env.DB_NAME,
            charset  : 'utf8'
        }
	},
	paths:{
		handlers: __dirname + '/../Handler/',
		commands: __dirname + '/../Command/',
		controllers: __dirname + '/../Http/Controller/',
	},
	middlewares:[
		__dirname + '/../Http/Middleware/AuthMiddleware.js',
	],
}