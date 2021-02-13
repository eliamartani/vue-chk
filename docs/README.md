---
home: true
footer: Made by Eliamar Tani with ❤️
---

Custom checkbox made simple at its best.

## Table of Contents <!-- omit in toc -->

- [Install](#install)
- [Vue-Chk](#vue-chk)
  - [Usage](#usage)
  - [Property](#property)
- [Vue-Chk-List](#vue-chk-list)
  - [Usage](#usage-1)
  - [Properties](#properties)
  - [Slot](#slot)
- [API](#api)
- [Customizing](#customizing)
- [License](#license)

## Install

NPM:

```bash
npm install vue-chk
```

Yarn:

```bash
yarn vue-chk
```

## Vue-Chk

### Usage

Globally:

```javascript
import chk from 'vue-chk'

Vue.component('vue-chk', chk)
```

or inside component:

```javascript
import VueChk from 'vue-chk'

export default {
  components: {
    'vue-chk': VueChk
  }
}
```

Asynchronously:

```javascript
export default {
  components: {
    'vue-chk': () => import('vue-chk')
  }
}
```

After that:

```html
<vue-chk v-model="prop">Check me</vue-chk>
```

### Property

v-model: `Boolean`, `Date`, `String`, `Number`

## Vue-Chk-List

### Usage

Globally:

```javascript
import { CheckboxList } from 'vue-chk'

Vue.component('vue-chk-list', CheckboxList)
```

or inside component:

```javascript
import { CheckboxList } from 'vue-chk'

export default {
  components: {
    'vue-chk-list': CheckboxList
  }
}
```

After that:

```html
<vue-chk-list v-model="values" :list="items" />

<!-- or -->

<vue-chk-list v-model="values" :list="items">
  <template slot="item--slot" slot-scope="{ item }">{{ item.label }}</template>
</vue-chk-list>
```

### Properties

- v-model: `Array` object where all checked items are saved
- list: `Array` object with its items to be showed

### Slot

The list offers the possibility to customize what will be shown, its slot is named `item--slot` with its scope representing an item inside the `list` property

```html
<template slot="item--slot" slot-scope="{ item }">{{ item.label }}</template>
```

## API

`@input` (totally optional): Triggers when checkbox is clicked

## Customizing

You do it, only a few css were added to make it work.

## License

[MIT](LICENSE)
