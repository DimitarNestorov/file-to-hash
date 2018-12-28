import blobToHash from 'blob-to-hash'
import blobToSha1 from 'blob-to-sha1'
import blobToSha256 from 'blob-to-sha256'
import blobToSha384 from 'blob-to-sha384'
import blobToSha512 from 'blob-to-sha512'

const packages = {
	sha1: blobToSha1,
	sha256: blobToSha256,
	sha384: blobToSha384,
	sha512: blobToSha512,
}

const params = new URLSearchParams(location.search)
const package = params.get('package')
const algorithm = params.get('algorithm')
const encoding = params.get('encoding')

window.file.addEventListener('change', () => {
	const blob = window.file.files[0]

	if (package === 'hash') {
		blobToHash(algorithm, blob, encoding).then(window.callback)
	} else {
		packages[package](blob, encoding).then(window.callback)
	}
})
