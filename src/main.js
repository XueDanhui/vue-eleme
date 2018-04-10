// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

// 如果要new一个对象，需要赋给一个变量，而实例化一个vue不需要赋值，下面这行注释的作用是让eslint不对下面的代码做检查
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});
