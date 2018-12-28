import hashData, { Data, Encoding } from 'data-to-hash'

export default (data: Data, encoding: Encoding = 'hex') => hashData('md4', data, encoding)
