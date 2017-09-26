const {exec} = require('child_process');
const {promisify} = require('util');
const chalk = require('chalk');
const {red, magenta} = require('../constants').cli.colors;

const execp = promisify(exec);

const bundle = async function (destinationPath = 'spec/index.json', format = 'json') {
	try {
    (format === 'json')
      ? await execp(`swagger-repo bundle -o ${destinationPath}`)
      : await execp(`swagger-repo bundle --yaml -o ${destinationPath}`);
		console.log(`
    API Specs successfully written at: ${chalk.hex(magenta).underline(destinationPath)}
    Have a great time writing docs @ ${chalk.hex(red).bold('Beakyn Company')} 🚀 .
    `);
	} catch (err) {
		console.log(err);
	}
};

module.exports = bundle;
