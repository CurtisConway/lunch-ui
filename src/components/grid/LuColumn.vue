<template>
  <component
    :is="tag"
    :class="defaultClassList"
    :style="columnWidthStyle"
  >
    <slot></slot>
  </component>
</template>

<script>
import responsive from '../../assets/js/mixins/responsive';
import spacing from '../../assets/js/mixins/spacing';
import colors from '../../assets/js/mixins/colors';

export default {
  name: 'LuColumn',
  mixins: [responsive, spacing, colors],
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
      default: () => undefined,
    },
    hAlign: {
      type: String,
      default: () => undefined,
    },
    columnSizes: {
      type: Object,
      default: () => ({
        xs: null,
        sm: null,
        md: null,
        lg: null,
        xl: null,
      }),
    },
    columnWidths: {
      type: [Object, String],
      default: () => ({
        xs: null,
        sm: null,
        md: null,
        lg: null,
        xl: null,
      }),
    },
  },
  computed: {
    defaultClassList() {
      return [
        {
          flex: true,
          'flex-column': true,
          'flex-reverse': this.reverse,
          'flex-wrap': this.wrap,
        },
        this.horizontalAlignmentClasses,
        this.verticalAlignmentClasses,
        this.columnSizeClasses,
        this.marginClasses,
        this.paddingClasses,
        this.bgColorClass,
      ];
    },
    horizontalAlignmentClasses() {
      return {
        'align-h-left': this.hAlign === 'left',
        'align-h-center': this.hAlign === 'center',
        'align-h-right': this.hAlign === 'right',
        'align-h-stretch': this.hAlign === 'stretch',
      };
    },
    verticalAlignmentClasses() {
      return {
        'align-v-top': this.vAlign === 'top',
        'align-v-center': this.vAlign === 'center',
        'align-v-bottom': this.vAlign === 'bottom',
      };
    },
    columnSizeClasses() {
      return Object.keys(this.columnSizes)
        .filter((key) => this.columnSizes[key] != null && this.columnWidths[key] == null)
        .map((size) => `${size}-${this.columnSizes[size]}`);
    },
    columnWidthStyle() {
      if (typeof this.columnWidths === 'string') {
        return {
          flex: `0 0 ${this.columnWidths}`,
          'max-width': this.columnWidths,
          'min-width': this.columnWidths,
        };
      }
      const widths = Object.keys(this.columnWidths)
        .filter((key) => this.columnWidths[key] != null);
      let width;
      if (widths.length > 0) {
        width = this.columnWidths[this.currentBreakpoint];
        if (width) {
          return {
            flex: `0 0 ${width}`,
            'max-width': width,
            'min-width': width,
          };
        }
        return this.findPreviousWidth(this.currentBreakpoint);
      }
      return {};
    },
  },
  methods: {
    findPreviousWidth(breakpoint) {
      const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'];
      const predecessor = breakpoints.indexOf(breakpoint) - 1;

      if (breakpoints[predecessor] != null) {
        const width = this.columnWidths[breakpoints[predecessor]];
        if (width) {
          return {
            flex: `0 0 ${width}`,
            'max-width': width,
            'min-width': width,
          };
        }
        return this.findPreviousWidth(breakpoints[predecessor]);
      }
      return {};
    },
  },
};
</script>
