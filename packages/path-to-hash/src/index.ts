import { readFile } from 'fs'

import dataToHash, { Encoding, Algorithm } from 'data-to-hash'

export { Encoding } from 'data-to-hash'

export default function hashPath(
	algorithm: Algorithm,
	path: string,
	encoding: Encoding = 'hex'
): Promise<string> {
	return new Promise((resolve, reject) => {
		readFile(path, (error, buffer) => {
			error && reject(error)

			try {
				resolve(dataToHash(algorithm, buffer, encoding))
			} catch (error) {
				reject(error)
			}
		})
	})
}
