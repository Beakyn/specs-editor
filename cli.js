#!/usr/bin/env node
const meow = require('meow');
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

liveEditorServer(cli.flags);
