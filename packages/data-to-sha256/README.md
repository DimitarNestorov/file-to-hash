# data-to-sha256

> Calculates a SHA-256 of a given buffer/string

## Install

Using yarn:
```sh
yarn add data-to-sha256
```

or using npm:
```sh
npm install data-to-sha256
```

## Usage

```javascript
const fs = require('fs')
const dataToSHA256 = require('data-to-sha256')

const buffer = fs.readFileSync('/path/to/file')

const hash = dataToSHA256(buffer)
```
