<template>
  <div class="vue-chk-list">
    <label
      v-for="(item, index) in list"
      :key="`vue-chk-${index}`"
      class="vue-chk"
      :class="{
        'vue-chk--before': labelPosition === 'before'
      }"
    >
      <input
        v-model="addedList"
        :value="item"
        :checked="contains(item)"
        type="checkbox"
        @change="handleClick"
      />

      <span class="vue-chk__check"></span>

      <span class="vue-chk__label">
        <slot name="item--slot" :item="item">
          {{ item }}
        </slot>
      </span>
    </label>
  </div>
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
    list: {
      required: true,
      type: Array
    },
    value: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      addedList: this.value
    }
  },
  methods: {
    contains(item) {
      return this.addedList.includes(item)
    },
    handleClick() {
      this.$emit('input', this.addedList)
    }
  }
}
</script>
