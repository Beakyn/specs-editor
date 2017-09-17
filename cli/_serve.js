const open = require('opn');
const chalk = require('chalk');
const {constants} = require('../constants');
const {liveEditorServer} = require('../');

const {DEFAULT_PORT} = constants;

exports.serve = async function (port = DEFAULT_PORT) {
	try {
		console.log(`
      API Specs Editor now running on port: ${chalk.hex('#DEADED').underline(port)}
      Have a great time writing docs @ ${chalk.rgb(255, 108, 69).bold('Beakyn Company')} 🚀 .
      `);
		await liveEditorServer(port);
		await open(`http://localhost:${port}`);
	} catch (err) {
		console.log(err);
	}
};
