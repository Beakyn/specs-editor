const {exec} = require('child_process');
const {promisify} = require('util');
const chalk = require('chalk');

const execp = promisify(exec);

exports.bundle = async function (destinationPath = 'spec/index.yaml') {
	try {
		await execp(`swagger-repo bundle --yaml -o ${destinationPath}`);
		console.log(`
      API Specs successfully written at: ${chalk.hex('#DEADED').underline(destinationPath)}
      Have a great time writing docs @ ${chalk.rgb(255, 108, 69).bold('Beakyn Company')} 🚀 .
    `);
	} catch (err) {
		console.log(err);
	}
};
