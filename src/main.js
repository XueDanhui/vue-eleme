// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import sellers from 'components/sellers/sellers';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/sellers', component: sellers }
];

const router = new VueRouter({
  linkActiveClass: 'active',
  routes // （缩写）相当于 routes: routes
});

 /* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  created () {
     this.$router.push('/goods'); // 页面加载时跳转
  }
});
