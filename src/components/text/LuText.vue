<template>
  <component :is="tag" :class="defaultClassList">
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
  },
  computed: {
    defaultClassList() {
      return [
        'lu-text',
        this.textColor,
        this.textTransformClass,
        this.marginClass,
        this.paddingClass,
      ];
    },
    textTransformClass() {
      const transforms = {
        uppercase: 'text-uppercase',
        capitalize: 'text-capitalize',
      };
      return transforms[this.transform] || '';
    },
  },
};
</script>
