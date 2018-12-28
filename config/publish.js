const { execSync } = require('child_process')

function buildPackage(package) {
	process.stdout.write(execSync(`cd ./packages/${package} && yarn publish --access public`))
}

const buildOrder = require('./buildOrder.json')

buildOrder.forEach(buildPackage)
