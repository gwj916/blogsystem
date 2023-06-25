import Vue from 'vue'
import App from './App.vue'
import './styles/global.less'
import router from './router'
import './mock'
import './api/banner'
import "./bus.js"
import store from './store'
new Vue({
  router,store,
  render: h => h(App),
}).$mount('#app')
