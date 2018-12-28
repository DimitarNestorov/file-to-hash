const path = require('path')

const hashPath = require('path-to-hash').default

const pathToMD4 = require('path-to-md4').default
const pathToMD5 = require('path-to-md5').default

const pathToSHA1 = require('path-to-sha1').default
const pathToSHA256 = require('path-to-sha256').default
const pathToSHA384 = require('path-to-sha384').default
const pathToSHA512 = require('path-to-sha512').default

const hashes = require('./assets/hashes')

const filePath = path.join(__dirname, 'assets', 'file.png')

describe('path-to-hash', () => {
	test('hex-sha256', async () => {
		expect(await hashPath('sha256', filePath, 'hex')).toBe(hashes.hex.sha256)
	})

	test('base64-sha256', async () => {
		expect(await hashPath('sha256', filePath, 'base64')).toBe(hashes.base64.sha256)
	})
})

describe('path-to-md4', () => {
	test('hex', async () => {
		expect(await pathToMD4(filePath, 'hex')).toBe(hashes.hex.md4)
	})

	test('base64', async () => {
		expect(await pathToMD4(filePath, 'base64')).toBe(hashes.base64.md4)
	})
})

describe('path-to-md5', () => {
	test('hex', async () => {
		expect(await pathToMD5(filePath, 'hex')).toBe(hashes.hex.md5)
	})

	test('base64', async () => {
		expect(await pathToMD5(filePath, 'base64')).toBe(hashes.base64.md5)
	})
})

describe('path-to-sha1', () => {
	test('hex', async () => {
		expect(await pathToSHA1(filePath, 'hex')).toBe(hashes.hex.sha1)
	})

	test('base64', async () => {
		expect(await pathToSHA1(filePath, 'base64')).toBe(hashes.base64.sha1)
	})
})

describe('path-to-sha256', () => {
	test('hex', async () => {
		expect(await pathToSHA256(filePath, 'hex')).toBe(hashes.hex.sha256)
	})

	test('base64', async () => {
		expect(await pathToSHA256(filePath, 'base64')).toBe(hashes.base64.sha256)
	})
})

describe('path-to-sha384', () => {
	test('hex', async () => {
		expect(await pathToSHA384(filePath, 'hex')).toBe(hashes.hex.sha384)
	})

	test('base64', async () => {
		expect(await pathToSHA384(filePath, 'base64')).toBe(hashes.base64.sha384)
	})
})

describe('path-to-sha512', () => {
	test('hex', async () => {
		expect(await pathToSHA512(filePath, 'hex')).toBe(hashes.hex.sha512)
	})

	test('base64', async () => {
		expect(await pathToSHA512(filePath, 'base64')).toBe(hashes.base64.sha512)
	})
})
