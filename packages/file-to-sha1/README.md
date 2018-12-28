# file-to-sha1

> Calculates a SHA-1 of a given file

## Install

Using yarn:
```sh
yarn add file-to-sha1
```

or using npm:
```sh
npm install file-to-sha1
```

## Usage in the browser
```javascript
import { blobToSHA1 } from 'file-to-sha1'

const hash = await blobToSHA1(fileInput.files[0])
```

## Usage in node

### For file paths
```javascript
const { pathToSHA1 } = require('file-to-sha1')

const hash = await pathToSHA1('/path/to/file')
```

### For buffers or strings
```javascript
const fs = require('fs')
const { dataToSHA1 } = require('file-to-sha1')

const buffer = fs.readFileSync('/path/to/file')

const hash = dataToSHA1(buffer)
```
