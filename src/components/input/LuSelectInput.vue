<template>
  <div :class="defaultClassList">
    <LuText
      tag="label"
      :for="computedId"
      size="subtitle"
      :class="labelClassList"
    >
      {{ label }}<span v-if="required">*</span>
    </LuText>
    <select
      ref="inputElement"
      :id="computedId"
      v-model="valueInterface"
      :multiple="multiple"
      @change="onChange"
      @focus="onFocus"
      @blur="onBlur"
    >
      <option
        v-for="(item, i) in mappedItems"
        :key="`${computedId}-option-${i}`"
        :value="item.value"
      >
        {{ item.label }}
      </option>
    </select>
    <LuTriangle :color="color" />
    <transition name="grow-fade">
      <LuErrorList :errors="errorList" v-if="!isValid && focus" />
    </transition>
  </div>
</template>

<script>
import colors from '../../assets/js/mixins/colors';
import borders from '../../assets/js/mixins/borders';
import spacing from '../../assets/js/mixins/spacing';
import events from '../../assets/js/mixins/events';
import inputs from './_inputs.mixin';
import validation from './_validation.mixin';
import LuTriangle from './partials/_LuTriangle.vue';

export default {
  name: 'LuSelectInput',
  mixins: [colors, borders, spacing, events, inputs, validation],
  components: {
    LuTriangle,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    multiple: {
      type: Boolean,
      default: () => false,
    },
    value: {
      type: [String, Array],
      default: () => undefined,
    },
  },
  computed: {
    mappedItems() {
      return this.items.map((item, index) => {
        if (typeof item === 'string') {
          return {
            label: item,
            value: item,
          };
        }
        if (typeof item === 'object') {
          return {
            label: item.label || 'N/A',
            value: item.value || index,
          };
        }
        return {
          label: 'N/A',
          value: index,
        };
      });
    },
  },
};
</script>
