import hashPath, { Encoding } from 'path-to-hash'

export default (path: string, encoding: Encoding = 'hex') => hashPath('sha512', path, encoding)
