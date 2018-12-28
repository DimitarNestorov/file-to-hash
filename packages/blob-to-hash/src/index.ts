enum Algorithm {
	sha1 = 'SHA-1',
	sha256 = 'SHA-256',
	sha384 = 'SHA-384',
	sha512 = 'SHA-512',
}

export type Encoding = 'base64' | 'hex'

export default function hashBlob(
	algorithm: 'sha1' | 'sha256' | 'sha384' | 'sha512',
	blob: Blob,
	encoding: Encoding = 'hex'
): Promise<string> {
	return new Promise((resolve, reject) => {
		const fileReader = new FileReader()

		fileReader.addEventListener('load', () => {
			crypto.subtle.digest(Algorithm[algorithm], fileReader.result as ArrayBuffer).then((buffer) => {
				const typedArray = new Uint8Array(buffer)
				if (encoding === 'hex') {
					resolve(
						Array.prototype.map.call(
							typedArray,
							(x: number) => ('00' + x.toString(16)).slice(-2)
						).join('')
					)
				} else { // encoding === 'base64'
					resolve(btoa(String.fromCharCode.apply(null, typedArray)))
				}
			})
		})
		fileReader.addEventListener('error', () => {
			reject(fileReader.error)
		})

		fileReader.readAsArrayBuffer(blob)
	})
}
