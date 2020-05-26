export default {
  props: {
    required: {
      type: Boolean,
      default: () => false,
    },
    rules: {
      type: Array,
      default: () => [],
    },
    errors: {
      type: Array,
      default: () => [],
    },
    success: {
      type: Boolean,
      default: () => false,
    },
    validate: {
      type: Boolean,
      default: () => true,
    },
  },
  data() {
    return {
      successState: this.success,
      errorList: this.errors,
    };
  },
  computed: {
    isValid() {
      return this.errorList.length === 0;
    },
    shouldValidate() {
      return (this.rules.length > 0 || this.errors.length > 0 || !this.isValid) && this.validate;
    },
  },
  methods: {
    validateInput() {
      return new Promise((resolve) => {
        const newErrorList = [...this.errors];
        this.rules.forEach((rule) => {
          const value = rule(this.tempValue);
          if (value !== true) {
            newErrorList.push(value);
          }
        });
        this.errorList = newErrorList;
        if (this.shouldValidate) {
          if (!this.isValid) {
            this.emitFailure();
          } else {
            this.emitSuccess();
          }
        }
        resolve({
          component: this,
          rules: this.rules,
          success: this.successState,
        });
      });
    },
    emitFailure() {
      this.$emit('validation:Error', this.errorList);
      this.successState = false;
    },
    emitSuccess() {
      this.$emit('validation:Success', this.tempValue);
      this.successState = true;
    },
  },
};
