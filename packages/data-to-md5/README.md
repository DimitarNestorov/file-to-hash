# data-to-md5

> Calculates a MD5 of a given buffer/string

## Install

Using yarn:
```sh
yarn add data-to-md5
```

or using npm:
```sh
npm install data-to-md5
```

## Usage

```javascript
const fs = require('fs')
const dataToMD5 = require('data-to-md5')

const buffer = fs.readFileSync('/path/to/file')

const hash = dataToMD5(buffer)
```
