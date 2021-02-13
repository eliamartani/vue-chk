<template>
  <label
    class="vue-chk"
    :class="{
      'vue-chk--before': labelPosition === 'before'
    }"
  >
    <input type="checkbox" :checked="checked" @change="handleClick" />

    <span class="vue-chk__check"></span>

    <span class="vue-chk__label">
      <slot />
    </span>
  </label>
</template>

<script>
export default {
  props: {
    labelPosition: {
      default: 'after',
      required: false,
      type: String,
      validator: (value) => ['after', 'before'].includes(value)
    },
    value: {
      default: null,
      required: false,
      type: [Date, Number, String, Boolean]
    },
    valueFalse: {
      default: null,
      required: false,
      type: [Date, Number, String, Boolean]
    },
    valueTrue: {
      default: null,
      required: false,
      type: [Date, Number, String, Boolean]
    }
  },
  data() {
    return {
      checked: !!this.value,
      oldValue: this.value
    }
  },
  computed: {
    isBoolean() {
      return typeof this.value === 'boolean'
    },
    valueWhenFalse() {
      if (this.isBoolean) {
        return false
      }

      return this.valueFalse
    },
    valueWhenTrue() {
      if (this.isBoolean) {
        return true
      }

      return this.valueTrue || this.oldValue
    }
  },
  watch: {
    valueFalse() {
      if (!this.checked) {
        this.$emit('input', this.valueWhenFalse)
      }
    },
    valueTrue() {
      if (this.checked) {
        this.$emit('input', this.valueWhenTrue)
      }
    }
  },
  methods: {
    handleClick() {
      this.checked = !this.checked

      this.$emit(
        'input',
        this.checked ? this.valueWhenTrue : this.valueWhenFalse
      )
    }
  }
}
</script>

<style lang="scss">
@import './Checkbox';
</style>
