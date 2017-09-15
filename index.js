const http = require('http');
const connect = require('connect');
const swaggerManager = require('swagger-repo');
const {constants} = require('./constants');

const app = connect();
app.use(swaggerManager.swaggerEditorMiddleware());
const {DEFAULT_PORT} = constants;

exports.liveEditorServer = async function (port = DEFAULT_PORT) {
	try {
		await http.createServer(app).listen(port);
	} catch (err) {
		console.log(err);
	}
};
