# vue-chk

Custom checkbox made simple at its best.

![Simple example](https://raw.githubusercontent.com/eliamartani/vue-chk/master/doc/chk.png 'Simple example')

## Install

```bash
npm install vue-chk
# or yarn vue-chk
```

## Usage

Globally:

```javascript
import chk from 'vue-chk'

Vue.component('vue-chk', chk)
```

or individually:

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
<vue-chk v-model="prop"></vue-chk>

<vue-chk v-model="prop">With text</vue-chk>
```

## Prop

v-model: `Boolean` <-- it's reactive 💪

## API

`@input` (totally optional): Triggers when checkbox is clicked

## Customizing

You do it, only few css were added to make it work.

## TODO

- [ ] Possibility to work with lists
- [ ] Add tests
- [ ] Add types other than boolean

## License

[MIT](LICENSE)
