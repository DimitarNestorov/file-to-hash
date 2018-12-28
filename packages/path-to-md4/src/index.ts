import hashPath, { Encoding } from 'path-to-hash'

export default (path: string, encoding: Encoding = 'hex') => hashPath('md4', path, encoding)
