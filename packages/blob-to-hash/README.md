# blob-to-hash

> Calculates a given hash of a given blob

## Install

Using yarn:
```sh
yarn add blob-to-hash
```

or using npm:
```sh
npm install blob-to-hash
```

## Usage
```javascript
import blobToHash from 'blob-to-hash'

const hash = await blobToHash('sha256', fileInput.files[0])
```
