// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import firebase from 'firebase'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(VueSidebarMenu)
//Vue.use(BootstrapVue)
Vue.config.productionTip = false
let app = null;
//checando se o usuario esta logado ou não
firebase.auth().onAuthStateChanged(() => {
  app = new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })


})
/* eslint-disable no-new */
