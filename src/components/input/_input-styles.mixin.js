export default {
  props: {
    inputStyle: {
      type: String,
      default: () => 'outline',
    },
  },
  computed: {
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
};
