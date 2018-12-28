import hashBlob, { Encoding } from 'blob-to-hash'

export default (file: File, encoding: Encoding = 'hex') => hashBlob('sha512', file, encoding)
