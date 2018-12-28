# data-to-sha384

> Calculates a SHA-384 of a given buffer/string

## Install

Using yarn:
```sh
yarn add data-to-sha384
```

or using npm:
```sh
npm install data-to-sha384
```

## Usage

```javascript
const fs = require('fs')
const dataToSHA384 = require('data-to-sha384')

const buffer = fs.readFileSync('/path/to/file')

const hash = dataToSHA384(buffer)
```
