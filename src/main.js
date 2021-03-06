import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import LunchUI from '../index';
import './assets/sass/app.scss';

import Home from './views/Home.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

Vue.use(LunchUI);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
