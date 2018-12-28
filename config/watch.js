const stream = require('stream');

const concurrently = require('concurrently')

const buildOrder = require('./buildOrder')

const echoStream = new stream.Writable();
echoStream._write = function (chunk, _encoding, done) {
	// Removing console clear
	process.stdout.write(chunk.toString().replace("\x1B\x63", ""), done)
}

concurrently(
	buildOrder.map(package => ({
		command: `cd ./packages/${package} && yarn run watch`,
		name: package,
	})),
	{
		outputStream: echoStream,
		prefix: 'name',
		killOthers: ['failure', 'success'],
		restartTries: 3,
	},
)
