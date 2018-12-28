import hashPath, { Encoding } from 'path-to-hash'

export default (path: string, encoding: Encoding = 'hex') => hashPath('md5', path, encoding)
