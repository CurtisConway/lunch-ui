<template>
  <LuColumn
    :tag="tag"
    :class="defaultClassList"
    :vAlign="vAlign"
    :hAlign="hAlign"
  >
    <slot></slot>
  </LuColumn>
</template>

<script>
import spacing from '../../assets/js/mixins/spacing';
import elevation from '../../assets/js/mixins/elevation';
import borders from '../../assets/js/mixins/borders';
import LuColumn from '../grid/LuColumn.vue';
import colors from '../../assets/js/mixins/colors';

export default {
  name: 'LuCard',
  mixins: [spacing, elevation, borders, colors],
  components: {
    LuColumn,
  },
  props: {
    tag: {
      type: String,
      default: () => 'div',
    },
    elevation: {
      type: [String, Number],
      default: () => 4,
    },
    vAlign: {
      type: String,
      default: () => undefined,
    },
    hAlign: {
      type: String,
      default: () => undefined,
    },
  },
  computed: {
    defaultClassList() {
      return [
        'lu-card',
        this.paddingClasses,
        this.marginClasses,
        this.elevationClass,
        this.borderClasses,
        this.bgColorClass,
      ];
    },
  },
};
</script>
