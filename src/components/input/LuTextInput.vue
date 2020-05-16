<template>
  <div :class="defaultClassList">
    <LuText tag="label" size="subtitle" :class="labelClassList">
      {{ label }}
    </LuText>
    <input
      ref="inputElement"
      :type="inputType"
      v-model="valueInterface"
      @change="onChange"
      @focus="onFocus"
      @blur="onBlur"
    >
    <transition name="grow-fade">
      <LuErrorList :errors="errorList" v-if="!isValid && focus"/>
    </transition>
  </div>
</template>

<script>
import './LuInput.scss';
import LuText from '../text/LuText.vue';
import LuErrorList from './partials/_LuErrorList.vue';
import colors from '../../assets/js/mixins/colors';
import borders from '../../assets/js/mixins/borders';
import spacing from '../../assets/js/mixins/spacing';
import events from '../../assets/js/mixins/events';
import inputStyles from './_input-styles.mixin';
import validation from './_validation.mixin';

export default {
  name: 'LuTextInput',
  mixins: [colors, borders, spacing, events, inputStyles, validation],
  components: {
    LuText,
    LuErrorList,
  },
  props: {
    type: {
      type: String,
      default: () => 'text',
    },
    label: {
      type: String,
      default: () => '',
    },
    value: {
      type: String,
      default: () => '',
    },
    color: {
      type: String,
      default: () => 'black',
    },
    persistentLabel: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      changeTimeout: 0,
      tempValue: '',
      focus: false,
    };
  },
  computed: {
    valueInterface: {
      get() {
        return this.value;
      },
      set(value) {
        clearTimeout(this.changeTimeout);
        this.tempValue = value;
        this.changeTimeout = setTimeout(async () => {
          if (this.shouldValidate) {
            await this.validateInput();
          }
          this.$emit('input', value);
        }, 500);
      },
    },
    defaultClassList() {
      return [
        'lu-form-group',
        this.paddingClasses,
        this.marginClasses,
        this.colorClass,
        this.inputStyleClasses,
      ];
    },
    colorClass() {
      if (!this.isValid) {
        return ['text-red', 'border-red'];
      }
      if (this.successState) {
        return ['text-green', 'border-green'];
      }
      return [this.textColor, this.borderColorFromColor];
    },
    labelClassList() {
      return {
        focus: this.focus || this.value.length > 0,
        persistent: this.persistentLabel,
      };
    },
    inputType() {
      if (['text', 'password'].includes(this.type)) {
        return this.type;
      }
      return 'text';
    },
  },
  methods: {
    onFocus(event) {
      this.focus = true;
      this.emitEvent(event);
    },
    async onBlur(event) {
      this.focus = false;
      clearTimeout(this.changeTimeout);
      if (this.tempValue !== this.value) {
        if (this.shouldValidate) {
          await this.validateInput();
        }
        this.$emit('input', this.tempValue);
      }
      this.emitEvent(event);
    },
    onChange(event) {
      this.emitEvent(event);
    },
  },
};
</script>
