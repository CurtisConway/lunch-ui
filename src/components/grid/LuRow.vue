<template>
  <component
    :is="tag"
    :class="defaultClassList"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'LuRow',
  props: {
    tag: {
      type: String,
      default: () => 'div',
    },
    reverse: {
      type: Boolean,
      default: () => false,
    },
    wrap: {
      type: Boolean,
      default: () => false,
    },
    vAlign: {
      type: String,
      default: () => 'center',
    },
    hAlign: {
      type: String,
      default: () => 'left',
    },
  },
  computed: {
    defaultClassList() {
      return [
        {
          flex: true,
          'flex-row': true,
          'flex-reverse': this.reverse,
          'flex-wrap': this.wrap,
        },
        this.horizontalAlignmentClasses,
        this.verticalAlignmentClasses,
      ];
    },
    horizontalAlignmentClasses() {
      return {
        'align-h-left': this.hAlign === 'left',
        'align-h-center': this.hAlign === 'center',
        'align-h-right': this.hAlign === 'right',
      };
    },
    verticalAlignmentClasses() {
      return {
        'align-v-top': this.vAlign === 'top',
        'align-v-center': this.vAlign === 'center',
        'align-v-bottom': this.vAlign === 'bottom',
      };
    },
  },
};
</script>
