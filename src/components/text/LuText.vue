<template>
  <component :is="tag">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'LuText',
  props: {
    tag: {
      type: String,
      default: () => 'p',
    },
  },
};
</script>
