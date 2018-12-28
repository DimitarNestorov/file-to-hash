# data-to-sha512

> Calculates a SHA-512 of a given buffer/string

## Install

Using yarn:
```sh
yarn add data-to-sha512
```

or using npm:
```sh
npm install data-to-sha512
```

## Usage

```javascript
const fs = require('fs')
const dataToSHA512 = require('data-to-sha512')

const buffer = fs.readFileSync('/path/to/file')

const hash = dataToSHA512(buffer)
```
