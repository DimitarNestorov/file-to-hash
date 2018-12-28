# data-to-hash

> Calculates a given hash of a given buffer/string

## Install

Using yarn:
```sh
yarn add data-to-hash
```

or using npm:
```sh
npm install data-to-hash
```

## Usage

```javascript
const fs = require('fs')
const dataToHash = require('data-to-hash')

const buffer = fs.readFileSync('/path/to/file')

const hash = dataToHash('sha256', buffer)
```
