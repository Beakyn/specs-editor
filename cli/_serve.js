const open = require('opn');
const chalk = require('chalk');
const {liveEditorServer} = require('../');
const {cli, defaultPort} = require('../constants');

const {red, magenta} = cli.colors;

const serve = async function (port = defaultPort) {
	try {
		console.log(`
    API Specs Editor now running on port: ${chalk.hex(magenta).underline(port)}
    Have a great time writing docs @ ${chalk.hex(red).bold('Beakyn Company')} 🚀 .
    `);
		await liveEditorServer(port);
		await open(`http://localhost:${port}`);
	} catch (err) {
		console.log(err);
	}
};

module.exports = serve;
