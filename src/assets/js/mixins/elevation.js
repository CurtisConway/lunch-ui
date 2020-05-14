export default {
  props: {
    elevation: {
      type: [String, Number],
      default: () => 2,
    },
  },
  computed: {
    elevationClass() {
      return `elevation-${this.elevation}`;
    },
  },
};
