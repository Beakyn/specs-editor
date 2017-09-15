#!/usr/bin/env node
const meow = require('meow');
const open = require('opn');
const chalk = require('chalk');
const {constants} = require('./constants');
const {liveEditorServer} = require('./');

const cli = meow(`
	Commands:

		$ bkn-specs-editor
			Serves documentation editor.

	Examples:

	  	$ bkn-specs-editor
				API Specs Editor now running on port: 9001
				Have a great time writing docs @ BEAKYN COMPANY

			Adding paths to spec
			Adding definitions to spec

	Options:
		-p, --port     Port to listen on (default: 3001)
		-h, --help     Brings you here :)
	`,
	{
		alias: {
			p: 'port',
			h: 'help'
		}
	}
);

const {port} = cli.flags;
const {DEFAULT_PORT} = constants;

const serve = async function (port = DEFAULT_PORT) {
	try {
		console.log(`
      API Specs Editor now running on port: ${chalk.hex('#DEADED').underline(port)}
      Have a great time writing docs @ ${chalk.rgb(255, 108, 69).bold('BEAKYN COMPANY')}
    `);
		await liveEditorServer(port);
		await open(`http://localhost:${port}`);
	} catch (err) {
		console.log(err);
	}
};

serve(port);
