const fs = require('fs')
const { promisify } = require('util')

const writeFile = promisify(fs.writeFile)

const packages = require('./buildOrder.json')

const names = {
	hash: 'given hash',
	md4: 'MD4',
	md5: 'MD5',
	sha1: 'SHA-1',
	sha256: 'SHA-256',
	sha384: 'SHA-384',
	sha512: 'SHA-512',
}

const readmes = {
	blob: fs.readFileSync('./config/README.blob.md', 'utf8'),
	data: fs.readFileSync('./config/README.data.md', 'utf8'),
	file: fs.readFileSync('./config/README.file.md', 'utf8'),
	path: fs.readFileSync('./config/README.path.md', 'utf8'),
}

const algorithmRegex = /^(blob|data|file|path)-to-(.*)$/
packages.forEach((package) => {
	const [ , type, algorithm ] = package.match(algorithmRegex)
	const isHash = algorithm === 'hash'
	const example = isHash ? "'sha256', " : ''
	writeFile(`./packages/${package}/README.md`,
		readmes[type]
			.replace(new RegExp('%HASH-LOWERCASE%', 'g'), algorithm)
			.replace(new RegExp('%HASH-UPPERCASE%', 'g'), isHash ? 'Hash' : algorithm.toUpperCase())
			.replace(new RegExp('%HASH-NAME%', 'g'), names[algorithm])
			.replace(new RegExp('%EXAMPLE-ALGORITHM%', 'g'), example)
	)
})
