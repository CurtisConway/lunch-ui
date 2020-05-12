import Vue from 'vue';
import App from './App.vue';
import router from './router';
import responsive from './assets/js/mixins/responsive';

Vue.config.productionTip = false;

const TestingApp = new Vue({
  router,
  render: (h) => h(App),
  data: {
    currentBreakpoint: responsive.getCurrentBreakpoint(),
  },
}).$mount('#app');

window.addEventListener('resize', () => {
  TestingApp.$root.currentBreakpoint = responsive.getCurrentBreakpoint();
});
