<template>
  <label class="vue-chk">
    <slot />
    <input type="checkbox" :checked="checked" @change="handleClick" />
    <span class="vue-chk__check"></span>
  </label>
</template>

<script>
export default {
  props: {
    value: {
      required: true,
      type: Date | Number | String | Boolean
    },
    valueFalse: {
      default: null,
      required: false,
      type: Date | Number | String | Boolean
    },
    valueTrue: {
      default: null,
      required: false,
      type: Date | Number | String | Boolean
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
      if (!this.value || this.value === this.valueFalse) {
        return this.valueTrue || this.oldValue
      }

      return this.value
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
