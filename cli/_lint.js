const {promisify} = require('util');
const chalk = require('chalk');
const {validate, bundle} = require('swagger-repo');
const {isEmpty, forEach} = require('ramda');

const validatep = promisify(validate);
const log = event => {
	console.log(`
    ${chalk.hex('#DEADED').bold('ID:')} ${event.code}.
    ${chalk.hex('#DEADED').bold('Description:')} ${event.message}.
    ${chalk.hex('#DEADED').bold('Path:')} ${event.path.join(' > ')}.
  `);
};

exports.lint = async () => {
	const source = bundle();
	const results = await validatep(source);

	const containsErrors = !isEmpty(results.errors);
	const containsWarnings = !isEmpty(results.warnings);

	if (containsErrors) {
		console.log(`
    ${chalk.hex('#FF6C45').bold('Errors found:')}`);
		const errors = results.errors;
		forEach(log, errors);
		process.exitCode = 255;
	}

	if (containsWarnings) {
		console.log(`
    ${chalk.hex('#F1C40F').bold('Warnings found:')}`);
		const warnings = results.warnings;
		forEach(log, warnings);
	}
};
