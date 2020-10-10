# vue-chk

Custom checkbox made simple at its best.

![Simple example](https://raw.githubusercontent.com/eliamartani/vue-chk/master/doc/chk.png 'Simple example')

## Install

```bash
npm install vue-chk
# or yarn vue-chk
```

## Usage

### Single checkbox

Globally:

```javascript
import chk from 'vue-chk'

Vue.component('vue-chk', chk)
```

or inside component:

```javascript
import chk from 'vue-chk'

export default {
  components: {
    'vue-chk': chk
    // async way:
    // 'vue-chk': () => import('vue-chk')
  }
}
```

After that:

```html
<vue-chk v-model="prop">Check me</vue-chk>
```

#### Prop

v-model: `Boolean`, `Date`, `String`, `Number` <-- it's reactive 💪

### Checkbox list

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
  <template slot="item--slot" slot-scope="item">{{ item.label }}</template>
</vue-chk-list>
```

#### Prop

- v-model: `Array` object where all checked items are saved
- list: `Array` object with its items to be showed

#### Slot

The list offers the possibility to customize what will be shown, its slot is named `item--slot` with its scope representing an item inside the `list` property

```html
<template slot="item--slot" slot-scope="item">{{ item.label }}</template>
```

## API

`@input` (totally optional): Triggers when checkbox is clicked

## Customizing

You do it, only few css were added to make it work.

## License

[MIT](LICENSE)
