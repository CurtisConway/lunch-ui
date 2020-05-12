<template>
  <component
    :is="getTagName"
    :to="to || $attrs.href"
    :class="defaultClassList"
    :style="defaultStyleList"
  >
    <slot></slot>
  </component>
</template>

<script>
import './LuButton.scss';
import colors from '../../assets/js/mixins/colors';

export default {
  name: 'LuButton',
  mixins: [colors],
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
    color: {
      type: String,
      default: () => 'blue',
    },
    type: {
      type: String,
      default: () => 'solid',
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
      const classes = [];
      classes.push({
        'lu-button': true,
        large: this.size === 'large',
        small: this.size === 'small',
        fluid: !this.size,
      });
      if (this.type === 'outline') {
        classes.push(this.textColor);
        classes.push(this.borderColor);
      } else if (this.type === 'text') {
        classes.push(this.textColor);
      } else {
        classes.push(this.bgColor);
        classes.push(this.borderColor);
      }
      return classes;
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
