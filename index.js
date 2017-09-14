const http = require('http');
const connect = require('connect');
const swaggerManager = require('swagger-repo');
const chalk = require('chalk');

const app = connect();
app.use(swaggerManager.swaggerEditorMiddleware());

const PORT = 3001;

exports.liveEditorServer = async function ({port = PORT} = {}) {
	try {
		await http.createServer(app).listen(port);
		console.log(`
      		API Specs Editor now running on port: ${chalk.hex('#DEADED').underline(port)}
      		Have a great time writing docs @ ${chalk.rgb(255, 108, 69).bold('BEAKYN COMPANY')}
    	`);
	} catch (err) {
		console.log(err);
	}
};
