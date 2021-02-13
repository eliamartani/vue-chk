<template>
  <div class="sample-styling">
    <div class="sample-styling__result">
      <vue-chk label-position="after" v-model="value"> Custom CSS </vue-chk>
    </div>
  </div>
</template>

<script>
import vueChk from '../../../src/Checkbox'

export default {
  name: 'VueChkSampleStyling',

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
.sample-styling {
  &__result {
    margin: 1rem 0;

    .vue-chk {
      &__check::after {
        background: #4fb1ff;
        border: 0;
        height: 0;
        transition: 0.2s;
        transform: rotate(0deg) translate(-50%, -50%);
        width: 0;
      }

      &__label {
        user-select: none;
      }

      input:checked ~ .vue-chk__check::after {
        height: 12px;
        width: 12px;
      }
    }
  }
}
</style>
