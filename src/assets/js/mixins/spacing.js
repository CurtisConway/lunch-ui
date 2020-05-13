export default {
  props: [
    'ma', 'mv', 'mt', 'mb', 'mh', 'ml', 'mr',
    'pa', 'pv', 'pt', 'pb', 'ph', 'pl', 'pr',
  ],
  computed: {
    marginClass() {
      const classes = [];
      Object.keys(this.$props)
        .filter((key) => key.length <= 2 && key.includes('m'))
        .forEach((prop) => {
          if (this[prop]) {
            classes.push(`${prop}${`-${this[prop]}`}`);
          }
        });
      return classes;
    },
    paddingClass() {
      const classes = [];
      Object.keys(this.$props)
        .filter((key) => key.length <= 2 && key.includes('p'))
        .forEach((prop) => {
          if (this[prop]) {
            classes.push(`${prop}${`-${this[prop]}`}`);
          }
        });
      return classes;
    },
  },
};
