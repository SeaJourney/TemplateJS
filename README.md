# TemplateJS ![MIT License](https://img.shields.io/badge/License-MIT-green.svg) ![release](https://shields.io/github/v/release/SeaJourney/node-server)
A small JavaScript library that allows you to set all or a select amount of objects or tables to have default properties. This allows for quick and easy JS object template use which is really helpful when wanting to write code quickly and fast.

# Usage
To use this library download the [latest release](https://github.com/SeaJourney/TemplateJS/releases/tag/v1.0.1), to import this into HTML or JavaScript do the following:
### Library
##### JavaScript
```js
import { template } from './template.js';
```
##### HTML
```html
<script src="template.js"></script>
<script src="template.min.js"></script>
```
### Reference
```js
import { template } from './template.js';
const object = {};

const templateVariable = {
  isObject: true
}

template(templateVariable);

console.log(object); // Output {isObject: true}
```
