# data-to-md4

> Calculates a MD4 of a given buffer/string

## Install

Using yarn:
```sh
yarn add data-to-md4
```

or using npm:
```sh
npm install data-to-md4
```

## Usage

```javascript
const fs = require('fs')
const dataToMD4 = require('data-to-md4')

const buffer = fs.readFileSync('/path/to/file')

const hash = dataToMD4(buffer)
```
