<template>
  <component
    :is="tag"
    :class="defaultClassList"
    :style="defaultStyleList"
  >
    <slot></slot>
  </component>
</template>

<script>
import './LuText.scss';
import colors from '../../assets/js/mixins/colors';
import spacing from '../../assets/js/mixins/spacing';

export default {
  name: 'LuText',
  mixins: [colors, spacing],
  props: {
    tag: {
      type: String,
      default: () => 'p',
    },
    transform: {
      type: String,
      default: () => undefined,
    },
    size: {
      type: [String, Number],
      default: () => 'body',
    },
    color: {
      type: String,
      default: () => 'black',
    },
    bold: {
      type: Boolean,
      default: () => false,
    },
    italic: {
      type: Boolean,
      default: () => false,
    },
    underline: {
      type: Boolean,
      default: () => false,
    },
    align: {
      type: String,
      default: () => 'left',
    },
  },
  computed: {
    defaultClassList() {
      return [
        'lu-text',
        this.textColor,
        this.textTransformClass,
        this.marginClasses,
        this.paddingClasses,
        this.textSizeClass,
        this.textAlignClass,
        {
          'text-bold': this.bold,
          'text-italic': this.italic,
          'text-underline': this.underline,
        },
      ];
    },
    defaultStyleList() {
      return [
        this.textSizeStyle,
      ];
    },
    textTransformClass() {
      const transforms = {
        uppercase: 'text-uppercase',
        capitalize: 'text-capitalize',
      };
      return transforms[this.transform] || '';
    },
    textSizeClass() {
      if (typeof this.size === 'number') {
        return false;
      }
      return `text-${this.size}`;
    },
    textSizeStyle() {
      if (typeof this.size !== 'number') {
        return false;
      }
      return { 'font-size': `${this.size}px` };
    },
    textAlignClass() {
      return {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
      }[this.align];
    },
  },
};
</script>
