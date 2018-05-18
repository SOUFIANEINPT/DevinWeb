// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VeeValidate from 'vee-validate'
import axios from 'axios';
import VueFlashMessage from 'vue-flash-message';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
Vue.use(VeeValidate)
Vue.config.productionTip = false
Vue.use(VueFlashMessage);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
