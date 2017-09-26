const {promisify} = require('util');
const chalk = require('chalk');
const {validate, bundle} = require('swagger-repo');
const {isEmpty, forEach} = require('ramda');
const {red, magenta, yellow} = require('../constants').cli.colors;

const validatep = promisify(validate);
const log = event => {
	console.log(`
    ${chalk.hex(magenta).bold('ID:')} ${event.code}.
    ${chalk.hex(magenta).bold('Description:')} ${event.message}.
    ${chalk.hex(magenta).bold('Path:')} ${event.path.join(' > ')}.
  `);
};

const lint = async () => {
	const source = bundle();
	const results = await validatep(source);

	const containsErrors = !isEmpty(results.errors);
	const containsWarnings = !isEmpty(results.warnings);

	if (containsErrors) {
		console.log(`
    ${chalk.hex(red).bold('Errors found:')}`);
		const errors = results.errors;
		forEach(log, errors);
		process.exitCode = 255;
	}

	if (containsWarnings) {
		console.log(`
    ${chalk.hex(yellow).bold('Warnings found:')}`);
		const warnings = results.warnings;
		forEach(log, warnings);
	}
};

module.exports = lint;
