<template>
  <div class="sample-string">
    <div class="sample-string__result">
      <vue-chk
        label-position="after"
        v-model="value"
        :value-true="valueTrue"
        :value-false="valueFalse"
      >
        Value is {{ String(value) }}
      </vue-chk>
    </div>

    <div class="sample-string__filters">
      <label>
        True:
        <input type="text" name="valueTrue" v-model="valueTrue" />
      </label>

      <label>
        False:
        <input type="text" name="valueFalse" v-model="valueFalse" />
      </label>

      <label>
        Value:
        <input type="text" name="value" readonly v-model="value" />
      </label>
    </div>
  </div>
</template>

<script>
import vueChk from '../../../src/Checkbox'

export default {
  name: 'VueChkSampleString',

  components: {
    'vue-chk': vueChk
  },

  data() {
    return {
      value: '',
      valueTrue: 'checked',
      valueFalse: 'unchecked'
    }
  }
}
</script>

<style lang="scss">
.sample-string {
  &__result {
    margin: 1rem 0;

    .vue-chk__label {
      user-select: none;
    }
  }
  &__filters {
    display: flex;
    flex-direction: row;

    input {
      box-sizing: border-box;
      font-size: 16px;
      padding: 5px 10px;
      width: 100%;
    }
    label + label {
      margin-left: 1rem;
    }
  }
}
</style>
