<template>
  <div class="sample-boolean">
    <div class="sample-boolean__result">
      <vue-chk label-position="after" v-model="value">
        Value is {{ String(this.value) }}
      </vue-chk>
    </div>
  </div>
</template>

<script>
import vueChk from '../../../src/Checkbox'

export default {
  name: 'VueChkSampleBoolean',

  components: {
    'vue-chk': vueChk
  },

  data() {
    return {
      value: false
    }
  }
}
</script>

<style lang="scss">
.sample-boolean {
  &__result {
    margin: 1rem 0;

    .vue-chk__label {
      user-select: none;
    }
  }
}
</style>
