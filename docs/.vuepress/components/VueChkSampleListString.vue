<template>
  <div class="sample-list-string">
    <vue-chk-list v-model="value" :list="values" />

    <p>Selected items:</p>

    <ul>
      <li v-for="(item, index) in value" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import CheckboxList from '../../../src/CheckboxList'

export default {
  name: 'VueChkSampleListString',

  components: {
    'vue-chk-list': CheckboxList
  },

  data() {
    return {
      value: ['Bulldog'],
      values: ['Pug', 'Bulldog', 'Golden Retriever']
    }
  }
}
</script>

<style lang="scss">
.sample-list-string {
  --input-checked-color: #fb8b8b;

  .vue-chk {
    & + .vue-chk {
      margin-top: 0.5rem;
    }
  }
  .vue-chk-list {
    display: flex;
    flex-direction: column;
    margin: 0.5rem 0;
    max-width: 250px;
  }

  li {
    margin: 0;
  }

  p {
    margin: 0;
  }

  ul {
    margin: 0;
  }
}
</style>
