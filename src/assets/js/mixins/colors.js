export default {
  props: {
    color: {
      type: String,
      default: () => undefined,
    },
    bgColor: {
      type: String,
      default: () => undefined,
    },
  },
  computed: {
    textColor() {
      return `text-${this.color}`;
    },
    bgColorFromColor() {
      return `bg-${this.color}`;
    },
    borderColorFromColor() {
      return `border-${this.color}`;
    },
    bgColorClass() {
      if (!this.bgColor) {
        return false;
      }
      return `bg-${this.bgColor}`;
    },
  },
};
