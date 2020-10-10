<template>
  <div class="vue-chk-list">
    <label
      v-for="(item, index) in list"
      :key="`vue-chk-${index}`"
      class="vue-chk"
    >
      <slot name="item--slot" :item="item">
        {{ item }}
      </slot>
      <input
        v-model="addedList"
        :value="item"
        :checked="contains(item)"
        type="checkbox"
        @change="handleClick"
      />
      <span class="vue-chk__check"></span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
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
