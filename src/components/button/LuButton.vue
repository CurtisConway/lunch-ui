<template>
  <component
    :is="getTagName"
    :to="to || $attrs.href"
    :class="['lu-button', defaultClassList]"
    :style="defaultStyleList"
  >
    <slot></slot>
  </component>
</template>

<script>
import './LuButton.scss';

export default {
  name: 'LuButton',
  inheritAttrs: true,
  props: {
    to: {
      type: [String, Location],
      default: () => undefined,
    },
    size: {
      type: [String, Number],
      default: () => '',
    },
  },
  computed: {
    getTagName() {
      if (this.to != null || this.$attrs.href != null) {
        return 'router-link';
      }

      return 'button';
    },
    defaultClassList() {
      return {
        large: this.size === 'large',
        small: this.size === 'small',
        fluid: !this.size,
      };
    },
    defaultStyleList() {
      const styles = {};
      if (typeof this.size === 'number') {
        styles['max-width'] = `${this.size}px`;
        styles.width = `${this.size}px`;
      }
      return styles;
    },
  },
};
</script>
