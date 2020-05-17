import LuText from '../text/LuText.vue';
import LuErrorList from './partials/_LuErrorList.vue';

export default {
  components: {
    LuText,
    LuErrorList,
  },
  props: {
    elementId: {
      type: String,
      default: () => undefined,
    },
    value: {
      type: String,
      default: () => undefined,
    },
    label: {
      type: String,
      default: () => '',
    },
    inputStyle: {
      type: String,
      default: () => 'outline',
    },
    persistentLabel: {
      type: Boolean,
      default: () => false,
    },
    color: {
      type: String,
      default: () => 'black',
    },
    typingTimeout: {
      type: Number,
      default: () => 500,
    },
    autoComplete: {
      type: Boolean,
      default: () => true,
    },
  },
  data() {
    return {
      changeTimeout: 0,
      tempValue: this.value,
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
        this.changeTimeout = setTimeout(() => {
          this.validateInput();
          this.$emit('input', value);
        }, this.typingTimeout);
      },
    },
    defaultClassList() {
      return [
        'lu-form-group',
        this.paddingClasses,
        this.marginClasses,
        this.colorClass,
        this.inputStyleClasses,
        {
          focus: this.focus,
        },
      ];
    },
    colorClass() {
      if (!this.isValid && this.shouldValidate) {
        return ['text-red', 'border-red'];
      }
      if ((this.successState && this.shouldValidate) || this.success) {
        return ['text-green', 'border-green'];
      }
      return [this.textColor, this.borderColorFromColor];
    },
    labelClassList() {
      const isPersistent = this.focus
        || (this.value != null && this.value.length > 0)
        || (this.tempValue != null && this.tempValue.length > 0)
        || this.persistentLabel;
      return {
        persistent: isPersistent,
      };
    },
    computedId() {
      return this.elementId || `input-${this._uid}`;
    },
    inputStyleClasses() {
      return {
        'lu-input-outline': this.inputStyle === 'outline',
        'lu-input-solo': this.inputStyle === 'solo',
        'lu-input-solid': this.inputStyle === 'solid',
        'lu-input-underline': this.inputStyle === 'underline',
        'elevation-3': this.inputStyle === 'solo',
      };
    },
  },
  methods: {
    onFocus(event) {
      this.focus = true;
      this.emitEvent(event);
    },
    onBlur(event) {
      clearTimeout(this.changeTimeout);
      if (this.tempValue !== this.value) {
        this.validateInput();
        this.$emit('input', this.tempValue);
      }
      this.emitEvent(event);

      setTimeout(() => {
        this.focus = false;
      }, 100);
    },
    onChange(event) {
      this.emitEvent(event);
    },
  },
};
