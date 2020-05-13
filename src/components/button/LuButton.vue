<template>
  <component
    ref="wrapper"
    :is="getTagName"
    :to="to || $attrs.href"
    :class="defaultClassList"
    :style="defaultStyleList"
    :disabled="disabled"
  >
    <slot></slot>
  </component>
</template>

<script>
import './LuButton.scss';
import colors from '../../assets/js/mixins/colors';
import event from '../../assets/js/mixins/event';
import spacing from '../../assets/js/mixins/spacing';

export default {
  name: 'LuButton',
  mixins: [colors, event, spacing],
  inheritAttrs: true,
  props: {
    to: {
      type: [String, Object],
      default: () => undefined,
    },
    size: {
      type: [String, Number],
      default: () => undefined,
    },
    color: {
      type: String,
      default: () => 'blue',
    },
    type: {
      type: String,
      default: () => 'solid',
    },
    short: {
      type: Boolean,
      default: () => false,
    },
    disabled: {
      type: Boolean,
      default: () => false,
    },
  },
  mounted() {
    this.$el.addEventListener('click', this.emitEvent);
  },
  computed: {
    getTagName() {
      if (this.to != null || this.$attrs.href != null) {
        return 'router-link';
      }

      return 'button';
    },
    defaultClassList() {
      return [
        'lu-button',
        ...this.marginClasses,
        ...this.paddingClasses,
        ...this.typeClasses,
        {
          large: this.size === 'large',
          small: this.size === 'small',
          fluid: !this.size,
          disabled: this.disabled,
          short: this.short,
        },
      ];
    },
    defaultStyleList() {
      const styles = {};
      if (typeof this.size === 'number') {
        styles['max-width'] = `${this.size}px`;
        styles.width = `${this.size}px`;
      }
      return styles;
    },
    typeClasses() {
      const classes = [];
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
  },
};
</script>
