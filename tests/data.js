const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

const hashData = require('data-to-hash').default

const dataToMD4 = require('data-to-md4').default
const dataToMD5 = require('data-to-md5').default

const dataToSHA1 = require('data-to-sha1').default
const dataToSHA256 = require('data-to-sha256').default
const dataToSHA384 = require('data-to-sha384').default
const dataToSHA512 = require('data-to-sha512').default

const hashes = require('./assets/hashes')

const filePath = path.join(__dirname, 'assets', 'file.png')
const readFile = promisify(fs.readFile)

beforeAll(async () => {
	data = await readFile(filePath)
})

describe('data-to-hash', () => {
	test('hex-sha256', () => {
		expect(hashData('sha256', data, 'hex')).toBe(hashes.hex.sha256)
	})

	test('base64-sha256', () => {
		expect(hashData('sha256', data, 'base64')).toBe(hashes.base64.sha256)
	})
})

describe('data-to-md4', () => {
	test('hex', () => {
		expect(dataToMD4(data, 'hex')).toBe(hashes.hex.md4)
	})

	test('base64', () => {
		expect(dataToMD4(data, 'base64')).toBe(hashes.base64.md4)
	})
})

describe('data-to-md5', () => {
	test('hex', () => {
		expect(dataToMD5(data, 'hex')).toBe(hashes.hex.md5)
	})

	test('base64', () => {
		expect(dataToMD5(data, 'base64')).toBe(hashes.base64.md5)
	})
})

describe('data-to-sha1', () => {
	test('hex', () => {
		expect(dataToSHA1(data, 'hex')).toBe(hashes.hex.sha1)
	})

	test('base64', () => {
		expect(dataToSHA1(data, 'base64')).toBe(hashes.base64.sha1)
	})
})

describe('data-to-sha256', () => {
	test('hex', () => {
		expect(dataToSHA256(data, 'hex')).toBe(hashes.hex.sha256)
	})

	test('base64', () => {
		expect(dataToSHA256(data, 'base64')).toBe(hashes.base64.sha256)
	})
})

describe('data-to-sha384', () => {
	test('hex', () => {
		expect(dataToSHA384(data, 'hex')).toBe(hashes.hex.sha384)
	})

	test('base64', () => {
		expect(dataToSHA384(data, 'base64')).toBe(hashes.base64.sha384)
	})
})

describe('data-to-sha512', () => {
	test('hex', () => {
		expect(dataToSHA512(data, 'hex')).toBe(hashes.hex.sha512)
	})

	test('base64', () => {
		expect(dataToSHA512(data, 'base64')).toBe(hashes.base64.sha512)
	})
})
