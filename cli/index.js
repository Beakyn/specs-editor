#!/usr/bin/env node
const meow = require('meow');
const chalk = require('chalk');
const {red, magenta} = require('../constants').cli.colors;
const serve = require('./_serve');
const bundle = require('./_bundle');
const lint = require('./_lint');

const cli = meow(`

  ${chalk.hex(red).bold('Commands:')}

    ${chalk.hex(magenta).bold('$ bkn-specs-editor serve')}

      ${chalk.hex(red).bold('Description:')} Serves documentation editor.

      ${chalk.hex(red).bold('Options:')}
        -p, --port     Port to listen on (default: 3001)

    ${chalk.hex(magenta).bold('$ bkn-specs-editor bundle')}

      ${chalk.hex(red).bold('Description:')} Bundles the multi-file Swagger spec into one.

      ${chalk.hex(red).bold('Options:')}
        -d, --dest    The output file path (default: 'spec/index.json')
        -f, --format  The output file format (default: '.json')

    ${chalk.hex(magenta).bold('$ bkn-specs-editor lint')}

      ${chalk.hex(red).bold('Description:')} Validates the current spec.
	`,
	{
		alias: {
			p: 'port',
			d: 'dest',
			f: 'format',
			h: 'help'
		}
	}
);

switch (cli.input[0]) {
	case 'serve':
		const {port} = cli.flags;
		serve(port);
		break;
	case 'bundle':
		const {dest, format} = cli.flags;
		bundle(dest, format);
		break;
	case 'lint':
		lint();
		break;
	default:
		console.log(`
    ${chalk.hex(red).bold('Bad command 😓 ')}.
    Try running ${chalk.hex(magenta).bold('$ bkn-specs-editor --help')} to get instructions 📃 .
    `);
}
