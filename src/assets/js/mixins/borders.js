export default {
  props: {
    ba: {
      type: Number,
      default: () => 0,
    },
    bh: {
      type: Number,
      default: () => 0,
    },
    bv: {
      type: Number,
      default: () => 0,
    },
    bt: {
      type: Number,
      default: () => 0,
    },
    bb: {
      type: Number,
      default: () => 0,
    },
    bl: {
      type: Number,
      default: () => 0,
    },
    br: {
      type: Number,
      default: () => 0,
    },
    borderStyle: {
      type: String,
      default: () => 'solid',
    },
    borderRadius: {
      type: [Number, String],
      default: () => undefined,
    },
    borderColor: {
      type: String,
      default: () => undefined,
    },
  },
  computed: {
    borderClasses() {
      return [
        this.widthClasses,
        this.styleClass,
        this.radiusClass,
        this.colorClass,
      ];
    },
    styleClass() {
      if (!this.widthClasses.length) {
        return false;
      }
      return `b-${this.borderStyle}`;
    },
    radiusClass() {
      if (!this.borderRadius) {
        return false;
      }
      return `rad-${this.borderRadius}`;
    },
    widthClasses() {
      const classes = [];
      Object.keys(this.$props)
        .filter((key) => key.length <= 2 && key.includes('b'))
        .forEach((prop) => {
          if (this[prop]) {
            classes.push(`${prop}${`-${this[prop]}`}`);
          }
        });
      return classes;
    },
    colorClass() {
      if (!this.widthClasses.length) {
        return false;
      }
      return `border-${this.borderColor}`;
    },
  },
};
