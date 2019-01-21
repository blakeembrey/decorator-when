# Decorator When

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

> Simple decorator for short-cutting method execution.

## Installation

```sh
npm install decorator-when --save
```

## Usage

```js
import { when } from "decorator-when";

class Demo {
  @when(Demo.prototype.should)
  method() {
    s.apply(this, arguments);
  }
  should() {
    return Math.random() > 0.5;
  }
}

new Demo().method();
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/decorator-when.svg?style=flat
[npm-url]: https://npmjs.org/package/decorator-when
[downloads-image]: https://img.shields.io/npm/dm/decorator-when.svg?style=flat
[downloads-url]: https://npmjs.org/package/decorator-when
[travis-image]: https://img.shields.io/travis/blakeembrey/decorator-when.svg?style=flat
[travis-url]: https://travis-ci.org/blakeembrey/decorator-when
[coveralls-image]: https://img.shields.io/coveralls/blakeembrey/decorator-when.svg?style=flat
[coveralls-url]: https://coveralls.io/r/blakeembrey/decorator-when?branch=master
