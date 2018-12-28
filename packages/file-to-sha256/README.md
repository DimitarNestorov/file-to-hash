# file-to-sha256

> Calculates a SHA-256 of a given file

## Install

Using yarn:
```sh
yarn add file-to-sha256
```

or using npm:
```sh
npm install file-to-sha256
```

## Usage in the browser
```javascript
import { blobToSHA256 } from 'file-to-sha256'

const hash = await blobToSHA256(fileInput.files[0])
```

## Usage in node

### For file paths
```javascript
const { pathToSHA256 } = require('file-to-sha256')

const hash = await pathToSHA256('/path/to/file')
```

### For buffers or strings
```javascript
const fs = require('fs')
const { dataToSHA256 } = require('file-to-sha256')

const buffer = fs.readFileSync('/path/to/file')

const hash = dataToSHA256(buffer)
```
