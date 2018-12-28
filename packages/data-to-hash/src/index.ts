import { createHash } from 'crypto'

export type Data = string | Buffer | NodeJS.TypedArray | DataView
export type Encoding = 'latin1' | 'hex' | 'base64'
export type Algorithm = 'md4' | 'md5' | 'sha1' | 'sha224' | 'sha256' | 'sha384' | 'sha512' | 'ripemd' | 'ripemd160' | 'rmd160'

export default function hashData(
	algorithm: Algorithm,
	data: Data,
	encoding: Encoding = 'hex'
): string {
	return createHash(algorithm).update(data).digest(encoding)
}
