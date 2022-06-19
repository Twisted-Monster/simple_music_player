import Vue from 'vue'
import App from './App.vue'
import '@/mobile/flexible'//自动适应宽度，改变html的font-size
import '@/styles/reset.css'//初始化标签

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
