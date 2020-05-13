import Vue from 'vue';
import App from './App.vue';
import router from './router';
import LetusUI from '../dist/letus-ui.umd.min';
import './assets/sass/app.scss';

Vue.config.productionTip = false;

Vue.use(LetusUI);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
