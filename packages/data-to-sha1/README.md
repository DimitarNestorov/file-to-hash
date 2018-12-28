# data-to-sha1

> Calculates a SHA-1 of a given buffer/string

## Install

Using yarn:
```sh
yarn add data-to-sha1
```

or using npm:
```sh
npm install data-to-sha1
```

## Usage

```javascript
const fs = require('fs')
const dataToSHA1 = require('data-to-sha1')

const buffer = fs.readFileSync('/path/to/file')

const hash = dataToSHA1(buffer)
```
