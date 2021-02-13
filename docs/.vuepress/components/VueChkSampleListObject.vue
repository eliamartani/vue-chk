<template>
  <div class="sample-list-object">
    <vue-chk-list v-model="value" :list="values">
      <template slot="item--slot" slot-scope="{ item }">
        {{ item.description }}
      </template>
    </vue-chk-list>

    <p>Selected items:</p>

    <ul>
      <li v-for="(item, index) in value" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import CheckboxList from '../../../src/CheckboxList'

export default {
  name: 'VueChkSampleListObject',

  components: {
    'vue-chk-list': CheckboxList
  },

  data() {
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
}
</script>

<style lang="scss">
.sample-list-object {
  .vue-chk {
    & + .vue-chk {
      margin-top: 0.5rem;
    }
  }
  .vue-chk-list {
    display: flex;
    flex-direction: column;
    margin: 0.5rem 0;
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
