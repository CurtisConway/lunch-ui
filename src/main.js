import Vue from 'vue';
import App from './App.vue';
import router from './router';
import LunchUI from '../index';
import './assets/sass/app.scss';

Vue.config.productionTip = false;

Vue.use(LunchUI);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
