# Examples <!-- omit in toc -->

- [vue-chk](#vue-chk)
  - [Boolean](#boolean)
  - [String](#string)
  - [Position](#position)
  - [Styling](#styling)
- [vue-chk-list](#vue-chk-list)
  - [List of string](#list-of-string)
  - [List of objects](#list-of-objects)

## vue-chk

### Boolean

#### Sample <!-- omit in toc -->

<ClientOnly>
  <vue-chk-sample-boolean />
</ClientOnly>

#### Code example <!-- omit in toc -->

```javascript
props() {
  return {
    value: false
  }
}
```

```html
<vue-chk label-position="after" v-model="value">
  Value is {{ String(value) }}
</vue-chk>
```

### String

#### Sample <!-- omit in toc -->

<ClientOnly>
  <vue-chk-sample-string />
</ClientOnly>

#### Code example <!-- omit in toc -->

```javascript
props() {
  return {
    value: ''
  }
}
```

```html
<vue-chk
  label-position="after"
  v-model="value"
  value-true="checked"
  value-false="unchecked"
>
  Value is {{ String(value) }}
</vue-chk>
```

### Position

#### Sample <!-- omit in toc -->

<ClientOnly>
  <vue-chk-sample-position />
</ClientOnly>

#### Code example <!-- omit in toc -->

```javascript
props() {
  return {
    position: 'after',
    value: false
  }
}
```

```html
<vue-chk
  :label-position="position"
  v-model="value"
>
  Positioning {{ position }}
</vue-chk>
```

### Styling

#### Sample <!-- omit in toc -->

<ClientOnly>
  <vue-chk-sample-styling />
</ClientOnly>

#### Code example <!-- omit in toc -->

```javascript
props() {
  return {
    value: false
  }
}
```

```html
<vue-chk v-model="value">
  Custom CSS
</vue-chk>
```

```css
.vue-chk .vue-chk__check::after {
  background: #4fb1ff;
  border: 0;
  height: 0;
  transition: 0.2s;
  transform: rotate(0deg) translate(-50%, -50%);
  width: 0;
}

.vue-chk input:checked ~ .vue-chk__check::after {
  height: 12px;
  width: 12px;
}
```

## vue-chk-list

### List of string

#### Sample <!-- omit in toc -->

<ClientOnly>
  <vue-chk-sample-list-string />
</ClientOnly>

#### Code example <!-- omit in toc -->

```javascript
props() {
  return {
    value: ['Bulldog'],
    values: ['Pug', 'Bulldog', 'Golden Retriever']
  }
}
```

```html
<vue-chk-list
  v-model="value"
  :list="values"
/>

<p>Selected items:</p>

<ul>
  <li
    v-for="(item, index) in value"
    :key="index"
  >
    {{ item }}
  </li>
</ul>
```

### List of objects

#### Sample <!-- omit in toc -->

<ClientOnly>
  <vue-chk-sample-list-object />
</ClientOnly>

#### Code example <!-- omit in toc -->

```javascript
props() {
  return {
    value: [],
    values: [
      {
        id: 1,
        description: 'Pug'
      },
      {
        id: 2,
        description: 'Bulldog'
      },
      {
        id: 3,
        description: 'Golden Retriever'
      }
    ]
  }
}
```

```html
<vue-chk-list
  v-model="value"
  :list="values"
>
  <template
    slot="item--slot"
    slot-scope="{ item }"
  >
    {{ item.description }}
  </template>
</vue-chk-list>

<p>Selected items:</p>

<ul>
  <li
    v-for="(item, index) in value"
    :key="index"
  >
    {{ item }}
  </li>
</ul>
```
