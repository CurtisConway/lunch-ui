export default {
  props: {
    elementId: {
      type: String,
      default: () => undefined,
    },
    value: {
      type: String,
      default: () => '',
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
        this.changeTimeout = setTimeout(() => {
          this.validateInput();
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
      if (!this.isValid && this.shouldValidate) {
        return ['text-red', 'border-red'];
      }
      if ((this.successState && this.shouldValidate) || this.success) {
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
      this.focus = false;
      clearTimeout(this.changeTimeout);
      if (this.tempValue !== this.value) {
        this.validateInput();
        this.$emit('input', this.tempValue);
      }
      this.emitEvent(event);
    },
    onChange(event) {
      this.emitEvent(event);
    },
  },
};
