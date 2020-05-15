export default {
  methods: {
    emitEvent(event) {
      if (this.disabled) {
        return false;
      }
      return this.$emit(event.type, event);
    },
  },
};
