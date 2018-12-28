# file-to-hash

> Calculates a given hash of a given file

## Install

Using yarn:
```sh
yarn add file-to-hash
```

or using npm:
```sh
npm install file-to-hash
```

## Usage in the browser
```javascript
import { blobToHash } from 'file-to-hash'

const hash = await blobToHash('sha256', fileInput.files[0])
```

## Usage in node

### For file paths
```javascript
const { pathToHash } = require('file-to-hash')

const hash = await pathToHash('sha256', '/path/to/file')
```

### For buffers or strings
```javascript
const fs = require('fs')
const { dataToHash } = require('file-to-hash')

const buffer = fs.readFileSync('/path/to/file')

const hash = dataToHash('sha256', buffer)
```
