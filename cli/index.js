#!/usr/bin/env node
const meow = require('meow');
const chalk = require('chalk');
const {serve} = require('./_serve');
const {bundle} = require('./_bundle');

const cli = meow(`

  ${chalk.rgb(255, 108, 69).bold('Commands:')}
    ${chalk.hex('#DEADED').bold('$ bkn-specs-editor serve')}

      ${chalk.rgb(255, 108, 69).bold('Description:')} Serves documentation editor.

      ${chalk.rgb(255, 108, 69).bold('Options:')}
        -p, --port     Port to listen on (default: 3001)

    ${chalk.hex('#DEADED').bold('$ bkn-specs-editor bundle')}

      ${chalk.rgb(255, 108, 69).bold('Description:')} Bundles the multi-file Swagger spec into one.

      ${chalk.rgb(255, 108, 69).bold('Options:')}
        -d, --dest    The output file path (default: 'spec/index.json')
        -f, --format  The output file format (default: '.json')

    ${chalk.rgb(255, 108, 69).bold('Options(General):')}
      -h, --help      Brings you here :)

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
	default:
		console.log(`
      ${chalk.rgb(255, 108, 69).bold('Bad command 😓 ')}.
      Try running ${chalk.hex('#DEADED').bold('$ bkn-specs-editor --help')} to get instructions 📃 .
    `);
}
