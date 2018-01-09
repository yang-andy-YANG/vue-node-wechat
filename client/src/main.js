// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto'
import Vue from 'vue'
import App from './App'
import router from './router'
import Icon from 'vue-awesome/components/Icon'
import i18n from './i18n'
import store from './store/'
import { getLang } from "./assets/js/utils"
import VueSweetAlert from 'vue-sweetalert'
import {isProduction} from '@/config/env'

Vue.config.productionTip = false;

// globally (in your main .js file)
Vue.component('icon', Icon);

Vue.use(VueSweetAlert)

getLang(); //window.lang

if(isProduction) {
  window.console.log = function(){    
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  template: '<App/>',
  components: { App }
});
