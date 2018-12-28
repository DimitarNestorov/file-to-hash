# file-to-%HASH-LOWERCASE%

> Calculates a %HASH-NAME% of a given file

## Install

Using yarn:
```sh
yarn add file-to-%HASH-LOWERCASE%
```

or using npm:
```sh
npm install file-to-%HASH-LOWERCASE%
```

## Usage in the browser
```javascript
import { blobTo%HASH-UPPERCASE% } from 'file-to-%HASH-LOWERCASE%'

const hash = await blobTo%HASH-UPPERCASE%(%EXAMPLE-ALGORITHM%fileInput.files[0])
```

## Usage in node

### For file paths
```javascript
const { pathTo%HASH-UPPERCASE% } = require('file-to-%HASH-LOWERCASE%')

const hash = await pathTo%HASH-UPPERCASE%(%EXAMPLE-ALGORITHM%'/path/to/file')
```

### For buffers or strings
```javascript
const fs = require('fs')
const { dataTo%HASH-UPPERCASE% } = require('file-to-%HASH-LOWERCASE%')

const buffer = fs.readFileSync('/path/to/file')

const hash = dataTo%HASH-UPPERCASE%(%EXAMPLE-ALGORITHM%buffer)
```
