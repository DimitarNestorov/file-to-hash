# file-to-sha384

> Calculates a SHA-384 of a given file

## Install

Using yarn:
```sh
yarn add file-to-sha384
```

or using npm:
```sh
npm install file-to-sha384
```

## Usage in the browser
```javascript
import { blobToSHA384 } from 'file-to-sha384'

const hash = await blobToSHA384(fileInput.files[0])
```

## Usage in node

### For file paths
```javascript
const { pathToSHA384 } = require('file-to-sha384')

const hash = await pathToSHA384('/path/to/file')
```

### For buffers or strings
```javascript
const fs = require('fs')
const { dataToSHA384 } = require('file-to-sha384')

const buffer = fs.readFileSync('/path/to/file')

const hash = dataToSHA384(buffer)
```
