<template>
  <LuTextInput
    v-bind="$props"
    v-model="tempValue"
    :typingTimeout="0"
    ref="textInput"
    :autoComplete="false"
    @blur="onBlur"
    @focus="onFocus"
  >
    <LuTriangle :color="color" />
    <transition name="grow-fade">
      <ul
        v-show="focus"
        class="lu-select-list elevation-4"
      >
        <li
          v-for="(item, i) in mappedItems"
          :key="`${computedId}-option-label-${i}`"
          class="ph-2"
          @click="selectOption(item.value)"
        >
          {{ item.label }}
        </li>
      </ul>
    </transition>
  </LuTextInput>
</template>

<script>
import colors from '../../assets/js/mixins/colors';
import borders from '../../assets/js/mixins/borders';
import spacing from '../../assets/js/mixins/spacing';
import events from '../../assets/js/mixins/events';
import inputs from './_inputs.mixin';
import validation from './_validation.mixin';
import LuTriangle from './partials/_LuTriangle.vue';
import LuTextInput from './LuTextInput.vue';

export default {
  name: 'LuSelectInput',
  mixins: [colors, borders, spacing, events, inputs, validation],
  components: {
    LuTextInput,
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
    typingTimeout: {
      type: Number,
      default: () => 0,
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
  methods: {
    selectOption(value) {
      this.tempValue = value;
      this.$refs.textInput.tempValue = this.tempValue;
    },
    onBlur(event) {
      const valueExists = this.mappedItems.find(item => item.value === this.tempValue);
      if (!valueExists) {
        this.tempValue = '';
      }
      this.$emit('input', this.tempValue);
      this.$emit('change', this.tempValue);
      this.$emit('blur', event);
      setTimeout(() => {
        this.focus = false;
      }, 100);
    },
  },
};
</script>
