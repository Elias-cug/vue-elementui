import Vue from 'vue'
import ElementUI from 'element-ui'
import router from './router'
import App from './App.vue'

require('../mock')

// 样式
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/base.css'
import './assets/css/layout.css'
import './assets/css/topo.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
