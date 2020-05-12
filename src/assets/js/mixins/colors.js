export default {
  props: {
    color: {
      type: String,
      default: () => 'blue',
    },
  },
  computed: {
    textColor() {
      return `text-${this.color}`;
    },
    bgColor() {
      return `bg-${this.color}`;
    },
    borderColor() {
      return `border-${this.color}`;
    },
  },
};
