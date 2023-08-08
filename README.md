# TemplateJS
A small JavaScript library that allows you to set all or a select amount of objects or tables to have default properties. This allows for quick and easy JS object template use which is really helpful when wanting to write code quickly and fast.

# Usage
To use the library first download the files from the latest release and then import the template.js and the template.min.js into your local environment in a library folder or whatever location you want to use, after this in any JS file you want to use this just reference the following:
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

console.log(object); // The output should say 'isObject: true' because it inherited the property from the template variable.
```
