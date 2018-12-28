# file-to-sha512

> Calculates a SHA-512 of a given file

## Install

Using yarn:
```sh
yarn add file-to-sha512
```

or using npm:
```sh
npm install file-to-sha512
```

## Usage in the browser
```javascript
import { blobToSHA512 } from 'file-to-sha512'

const hash = await blobToSHA512(fileInput.files[0])
```

## Usage in node

### For file paths
```javascript
const { pathToSHA512 } = require('file-to-sha512')

const hash = await pathToSHA512('/path/to/file')
```

### For buffers or strings
```javascript
const fs = require('fs')
const { dataToSHA512 } = require('file-to-sha512')

const buffer = fs.readFileSync('/path/to/file')

const hash = dataToSHA512(buffer)
```
