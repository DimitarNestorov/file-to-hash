import hashPath, { Encoding } from 'path-to-hash'

export default (path: string, encoding: Encoding = 'hex') => hashPath('sha256', path, encoding)
