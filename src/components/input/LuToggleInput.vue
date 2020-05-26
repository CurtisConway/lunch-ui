<template>
  <div :class="[defaultClassList, 'lu-toggle-input']">
    <LuText
      tag="label"
      :for="computedId"
      size="subtitle"
    >
      {{ label }}
    </LuText>
    <input
      ref="inputElement"
      :id="computedId"
      type="checkbox"
      :class="bgColorFromColor"
      v-model="valueInterface"
      :checked="valueInterface"
      @change="onChange"
      @focus="onFocus"
      @blur="onBlur"
    >
    <slot :focus="focus"></slot>
  </div>
</template>

<script>
import colors from '../../assets/js/mixins/colors';
import borders from '../../assets/js/mixins/borders';
import spacing from '../../assets/js/mixins/spacing';
import events from '../../assets/js/mixins/events';
import validation from './_validation.mixin';
import inputs from './_inputs.mixin';

export default {
  name: 'LuToggleInput',
  mixins: [colors, borders, spacing, events, inputs, validation],
  props: {
    value: {
      type: Boolean,
      default: () => false,
    },
    validate: {
      type: Boolean,
      default: () => false,
    },
  },
  computed: {
    defaultClassList() {
      return [
        'lu-form-group',
        this.paddingClasses,
        this.marginClasses,
        this.colorClass,
        {
          focus: this.focus,
        },
      ];
    },
  },
};
</script>
