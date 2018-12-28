const path = require('path')

const puppeteer = require('puppeteer')

const hashes = require('./assets/hashes')

const filePath = path.join(__dirname, 'assets', 'file.png')

const baseUrl = path.join(__dirname, 'assets', 'dist', 'blob.html')
function urlBuilder(packageName, encoding, algorithm) {
	return `file://${baseUrl}?package=${packageName}&encoding=${encoding}&algorithm=${algorithm}`
}

beforeAll(async () => {
	browser = await puppeteer.launch({
		headless: true,
	})
	page = await browser.newPage()
})

afterAll(() => {
	browser.close()
})

describe('blob-to-hash', () => {
	test('hex-sha256', async () => {
		await page.goto(urlBuilder('hash', 'hex', 'sha256'))
		const promise = new Promise(async (resolve) => {
			const name = `callback${Date.now()}`
			await page.exposeFunction(name, result => resolve(result))
			await page.evaluate(`window.callback = window.${name}`)
			;(await page.$('#file')).uploadFile(filePath)
		})
		expect(await promise).toBe(hashes.hex.sha256)
	}, 10000)

	test('base64-sha256', async () => {
		await page.goto(urlBuilder('hash', 'base64', 'sha256'))
		const promise = new Promise(async (resolve) => {
			const name = `callback${Date.now()}`
			await page.exposeFunction(name, result => resolve(result))
			await page.evaluate(`window.callback = window.${name}`)
			;(await page.$('#file')).uploadFile(filePath)
		})
		expect(await promise).toBe(hashes.base64.sha256)
	}, 10000)
})

describe('blob-to-sha1', () => {
	test('hex', async () => {
		await page.goto(urlBuilder('sha1', 'hex'))
		const promise = new Promise(async (resolve) => {
			const name = `callback${Date.now()}`
			await page.exposeFunction(name, result => resolve(result))
			await page.evaluate(`window.callback = window.${name}`)
			;(await page.$('#file')).uploadFile(filePath)
		})
		expect(await promise).toBe(hashes.hex.sha1)
	}, 10000)

	test('base64', async () => {
		await page.goto(urlBuilder('sha1', 'base64'))
		const promise = new Promise(async (resolve) => {
			const name = `callback${Date.now()}`
			await page.exposeFunction(name, result => resolve(result))
			await page.evaluate(`window.callback = window.${name}`)
			;(await page.$('#file')).uploadFile(filePath)
		})
		expect(await promise).toBe(hashes.base64.sha1)
	}, 10000)
})

describe('blob-to-sha256', () => {
	test('hex', async () => {
		await page.goto(urlBuilder('sha256', 'hex'))
		const promise = new Promise(async (resolve) => {
			const name = `callback${Date.now()}`
			await page.exposeFunction(name, result => resolve(result))
			await page.evaluate(`window.callback = window.${name}`)
			;(await page.$('#file')).uploadFile(filePath)
		})
		expect(await promise).toBe(hashes.hex.sha256)
	}, 10000)

	test('base64', async () => {
		await page.goto(urlBuilder('sha256', 'base64'))
		const promise = new Promise(async (resolve) => {
			const name = `callback${Date.now()}`
			await page.exposeFunction(name, result => resolve(result))
			await page.evaluate(`window.callback = window.${name}`)
			;(await page.$('#file')).uploadFile(filePath)
		})
		expect(await promise).toBe(hashes.base64.sha256)
	}, 10000)
})

describe('blob-to-sha384', () => {
	test('hex', async () => {
		await page.goto(urlBuilder('sha384', 'hex'))
		const promise = new Promise(async (resolve) => {
			const name = `callback${Date.now()}`
			await page.exposeFunction(name, result => resolve(result))
			await page.evaluate(`window.callback = window.${name}`)
			;(await page.$('#file')).uploadFile(filePath)
		})
		expect(await promise).toBe(hashes.hex.sha384)
	}, 10000)

	test('base64', async () => {
		await page.goto(urlBuilder('sha384', 'base64'))
		const promise = new Promise(async (resolve) => {
			const name = `callback${Date.now()}`
			await page.exposeFunction(name, result => resolve(result))
			await page.evaluate(`window.callback = window.${name}`)
			;(await page.$('#file')).uploadFile(filePath)
		})
		expect(await promise).toBe(hashes.base64.sha384)
	}, 10000)
})

describe('blob-to-sha512', () => {
	test('hex', async () => {
		await page.goto(urlBuilder('sha512', 'hex'))
		const promise = new Promise(async (resolve) => {
			const name = `callback${Date.now()}`
			await page.exposeFunction(name, result => resolve(result))
			await page.evaluate(`window.callback = window.${name}`)
			;(await page.$('#file')).uploadFile(filePath)
		})
		expect(await promise).toBe(hashes.hex.sha512)
	}, 10000)

	test('base64', async () => {
		await page.goto(urlBuilder('sha512', 'base64'))
		const promise = new Promise(async (resolve) => {
			const name = `callback${Date.now()}`
			await page.exposeFunction(name, result => resolve(result))
			await page.evaluate(`window.callback = window.${name}`)
			;(await page.$('#file')).uploadFile(filePath)
		})
		expect(await promise).toBe(hashes.base64.sha512)
	}, 10000)
})
