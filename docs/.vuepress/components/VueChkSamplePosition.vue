<template>
  <div class="sample-position">
    <div class="sample-position__result">
      <vue-chk :label-position="position" v-model="value">
        Positioning {{ position }}
      </vue-chk>
    </div>

    <div class="sample-position__filters">
      <label>
        Position
        <select name="labelPosition" v-model="position">
          <option value="after">After</option>
          <option value="before">Before</option>
        </select>
      </label>
    </div>
  </div>
</template>

<script>
import vueChk from '../../../src/Checkbox'

export default {
  name: 'VueChkSamplePosition',

  components: {
    'vue-chk': vueChk
  },

  data() {
    return {
      value: false,
      position: 'after'
    }
  }
}
</script>

<style lang="scss">
.sample-position {
  &__filters {
    max-width: 200px;

    select {
      box-sizing: border-box;
      font-size: 16px;
      padding: 5px 10px;
      width: 100%;
    }
  }
  &__result {
    margin: 1rem 0;

    .vue-chk__label {
      user-select: none;
    }
  }
}
</style>
