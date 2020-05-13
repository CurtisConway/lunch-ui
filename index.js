import Components from './src/components';

export default {
  install(Vue, options) {
    Object.keys(Components)
      .forEach((key) => {
        Vue.component(
          Components[key].name,
          Components[key],
        );
      });
  },
};
