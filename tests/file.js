describe('file-to-hash', () => {
	test('exports correctly', () => {
		expect(require('blob-to-hash').default).toBe(require('file-to-hash').blobToHash)
		expect(require('blob-to-hash').default).toBe(require('file-to-hash').hashBlob)

		expect(require('data-to-hash').default).toBe(require('file-to-hash').dataToHash)
		expect(require('data-to-hash').default).toBe(require('file-to-hash').hashData)

		expect(require('path-to-hash').default).toBe(require('file-to-hash').pathToHash)
		expect(require('path-to-hash').default).toBe(require('file-to-hash').hashPath)
	})
})

describe('file-to-sha1', () => {
	test('exports correctly', () => {
		expect(require('blob-to-sha1').default).toBe(require('file-to-sha1').blobToSHA1)
		expect(require('blob-to-sha1').default).toBe(require('file-to-sha1').blobToSha1)
		expect(require('blob-to-sha1').default).toBe(require('file-to-sha1').sha1Blob)

		expect(require('data-to-sha1').default).toBe(require('file-to-sha1').dataToSHA1)
		expect(require('data-to-sha1').default).toBe(require('file-to-sha1').dataToSha1)
		expect(require('data-to-sha1').default).toBe(require('file-to-sha1').sha1Data)

		expect(require('path-to-sha1').default).toBe(require('file-to-sha1').pathToSHA1)
		expect(require('path-to-sha1').default).toBe(require('file-to-sha1').pathToSha1)
		expect(require('path-to-sha1').default).toBe(require('file-to-sha1').sha1Path)
	})
})

describe('file-to-sha256', () => {
	test('exports correctly', () => {
		expect(require('blob-to-sha256').default).toBe(require('file-to-sha256').blobToSHA256)
		expect(require('blob-to-sha256').default).toBe(require('file-to-sha256').blobToSha256)
		expect(require('blob-to-sha256').default).toBe(require('file-to-sha256').sha256Blob)

		expect(require('data-to-sha256').default).toBe(require('file-to-sha256').dataToSHA256)
		expect(require('data-to-sha256').default).toBe(require('file-to-sha256').dataToSha256)
		expect(require('data-to-sha256').default).toBe(require('file-to-sha256').sha256Data)

		expect(require('path-to-sha256').default).toBe(require('file-to-sha256').pathToSHA256)
		expect(require('path-to-sha256').default).toBe(require('file-to-sha256').pathToSha256)
		expect(require('path-to-sha256').default).toBe(require('file-to-sha256').sha256Path)
	})
})

describe('file-to-sha384', () => {
	test('exports correctly', () => {
		expect(require('blob-to-sha384').default).toBe(require('file-to-sha384').blobToSHA384)
		expect(require('blob-to-sha384').default).toBe(require('file-to-sha384').blobToSha384)
		expect(require('blob-to-sha384').default).toBe(require('file-to-sha384').sha384Blob)

		expect(require('data-to-sha384').default).toBe(require('file-to-sha384').dataToSHA384)
		expect(require('data-to-sha384').default).toBe(require('file-to-sha384').dataToSha384)
		expect(require('data-to-sha384').default).toBe(require('file-to-sha384').sha384Data)

		expect(require('path-to-sha384').default).toBe(require('file-to-sha384').pathToSHA384)
		expect(require('path-to-sha384').default).toBe(require('file-to-sha384').pathToSha384)
		expect(require('path-to-sha384').default).toBe(require('file-to-sha384').sha384Path)
	})
})

describe('file-to-sha512', () => {
	test('exports correctly', () => {
		expect(require('blob-to-sha512').default).toBe(require('file-to-sha512').blobToSHA512)
		expect(require('blob-to-sha512').default).toBe(require('file-to-sha512').blobToSha512)
		expect(require('blob-to-sha512').default).toBe(require('file-to-sha512').sha512Blob)

		expect(require('data-to-sha512').default).toBe(require('file-to-sha512').dataToSHA512)
		expect(require('data-to-sha512').default).toBe(require('file-to-sha512').dataToSha512)
		expect(require('data-to-sha512').default).toBe(require('file-to-sha512').sha512Data)

		expect(require('path-to-sha512').default).toBe(require('file-to-sha512').pathToSHA512)
		expect(require('path-to-sha512').default).toBe(require('file-to-sha512').pathToSha512)
		expect(require('path-to-sha512').default).toBe(require('file-to-sha512').sha512Path)
	})
})
