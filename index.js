const http = require('http');
const connect = require('connect');
const swaggerManager = require('swagger-repo');
const {defaultPort} = require('./constants');

const app = connect();
app.use(swaggerManager.swaggerEditorMiddleware());

exports.liveEditorServer = async function (port = defaultPort) {
	try {
		await http.createServer(app).listen(port);
	} catch (err) {
		console.log(err);
	}
};
