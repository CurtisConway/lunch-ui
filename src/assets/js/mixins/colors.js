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
      if (this.color) {
        return `text-${this.color}`;
      }
      return false;
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
