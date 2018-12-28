const { execSync } = require('child_process')

function buildPackage(package) {
	process.stdout.write(execSync(`cd ./packages/${package} && yarn run build`))
}

const buildOrder = require('./buildOrder.json')

buildOrder.forEach(buildPackage)
