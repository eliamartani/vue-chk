<template>
  <label
    class="vue-chk"
    :class="{'vue-chk--checked': value}"
    @click.prevent="$emit('input', !value)"
  >
    <slot />
    <input type="checkbox" :checked="value" />
    <span class="vue-chk__check"></span>
  </label>
</template>

<script>
export default {
  props: {
    value: {
      required: true,
      type: Boolean
    }
  }
}
</script>

<style>
.vue-chk {
  cursor: pointer;
  display: block;
  height: 20px;
  margin-bottom: 12px;
  padding-left: 25px;
  position: relative;
  user-select: none;
}

.vue-chk input {
  cursor: pointer;
  height: 0;
  opacity: 0;
  position: absolute;
  width: 0;
}

.vue-chk__check {
  border: 1px solid #eee;
  height: 18px;
  left: 0;
  position: absolute;
  top: 0;
  width: 18px;
}

.vue-chk__check::after {
  content: '';
  opacity: 0;
  position: absolute;
  transition: opacity 0.08s;
}

.vue-chk input:checked ~ .vue-chk__check::after {
  opacity: 1;
}

.vue-chk .vue-chk__check::after {
  border: solid #4fb1ff;
  border-width: 0 3px 3px 0;
  height: 10px;
  left: 6px;
  top: 1px;
  transform: rotate(45deg);
  width: 4px;
}
</style>
