# Hasvalue

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Greenkeeper badge](https://badges.greenkeeper.io/blakeembrey/hasvalue.svg)](https://greenkeeper.io/)

> Check if a value exists at a nested property path.

## Installation

```sh
npm install hasvalue --save
```

## Usage

```js
import { has } from 'hasvalue'

const obj = { a: { b: { c: 10 } } }

has(obj, ['a', 'b', 'c']) //=> true
```

## License

Apache 2.0

[npm-image]: https://img.shields.io/npm/v/hasvalue.svg?style=flat
[npm-url]: https://npmjs.org/package/hasvalue
[downloads-image]: https://img.shields.io/npm/dm/hasvalue.svg?style=flat
[downloads-url]: https://npmjs.org/package/hasvalue
[travis-image]: https://img.shields.io/travis/blakeembrey/hasvalue.svg?style=flat
[travis-url]: https://travis-ci.org/blakeembrey/hasvalue
[coveralls-image]: https://img.shields.io/coveralls/blakeembrey/hasvalue.svg?style=flat
[coveralls-url]: https://coveralls.io/r/blakeembrey/hasvalue?branch=master
