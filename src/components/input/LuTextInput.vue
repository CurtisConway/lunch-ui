<template>
  <div :class="defaultClassList">
    <LuText tag="label" size="subtitle" :class="labelClassList">
      {{ label }}
    </LuText>
    <input
      :type="inputType"
      v-model="valueInterface"
      @focus="onFocus"
      @blur="onBlur"
    >
    <transition name="grow-fade">
      <LuErrorList :errors="errorList" v-show="errorState && focus"/>
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

export default {
  name: 'LuTextInput',
  mixins: [colors, borders, spacing, events],
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
    errors: {
      type: Array,
      default: () => [],
    },
    success: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      changeTimeout: 0,
      tempValue: '',
      focus: false,
      errorState: this.errors.length > 0,
      errorList: this.errors,
      successState: this.success,
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
        this.changeTimeout = setTimeout(() => {
          this.$emit('input', value);
        }, 500);
      },
    },
    defaultClassList() {
      return [
        'lu-form-group',
        this.paddingClasses,
        this.marginClasses,
        this.borderClasses,
        this.colorClass,
      ];
    },
    colorClass() {
      if (this.errorState) {
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
    onBlur(event) {
      this.focus = false;
      clearTimeout(this.changeTimeout);
      if (this.tempValue) {
        this.$emit('input', this.tempValue);
      }
      this.emitEvent(event);
    },
  },
};
</script>
