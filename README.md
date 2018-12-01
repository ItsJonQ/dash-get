# (Tiny) get

[![Build Status](https://travis-ci.org/ItsJonQ/tiny-get.svg?branch=master)](https://travis-ci.org/ItsJonQ/tiny-get)

> A tiny get function', similar to Lodash.get

## ✨ Features

- **Zero dependencies**!
- Super tiny, at ~350 bytes gzipped
- Works just like [Lodash.get](https://lodash.com/docs/4.17.11#get)
- Ultra speedy! Check out the [performance tests](https://codesandbox.io/s/48052km1q7)

## 🔧 Installation

Add `tiny-get` to your project via `npm install`:

```
npm install --save tiny-get
```

## 🕹 Usage

You can easily retrieve a value from a (deeply) nested object with `tiny-get`, like so:

```js
import get from 'tiny-get'

const someObject = {...}

const deeplyNestedValue = get(someObject, 'the.path.to.the.nested.value')
// value
```

The path could also be an `Array`:

```js
const someObject = {...}

const deeplyNestedValue = get(someObject, ['the', 'path', 'to', 'the', 'nested', 'value'])
// value
```

## 🎬 API

#### `get(obj, path, fallback)`

| Argument | Type                     | Description                                                           |
| -------- | ------------------------ | --------------------------------------------------------------------- |
| obj      | `Object`                 | The object to get the value from.                                     |
| path     | `Array<string>`/`string` | The path to the value.                                                |
| fallback | `any``                   | The fallback value, in case the desired value could not be retrieved. |

## 🤔 Why an npm module tho?

You totally don't have to `npm install` this. This exists for convenience purposes 😊.

In fact, it's encouraged that you add the `get` code to your code base! One less depenency to install and manage.

Here it is!

```js
function get(obj, path, fallback) {
  if (!obj || !path) return fallback;
  var paths = Array.isArray(path) ? path : path.split(".");
  return paths.reduce(function(acc, path) {
    if (acc === undefined) return fallback;
    var value = acc[path];
    return value !== undefined ? value : fallback;
  }, obj);
}
```

## ❤️ Thanks

Thanks to [@knicklabs](https://github.com/knicklabs) for pairing with me on this one!
