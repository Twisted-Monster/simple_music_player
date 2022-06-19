import Vue from 'vue'
import App from './App.vue'
import '@/mobile/flexible' //自动适应宽度，改变html的font-size
import '@/styles/reset.css' //初始化标签默认的样式
import router from '@/router' //导入路由对象
Vue.config.productionTip = false

import { NavBar } from 'vant'
Vue.use(NavBar)
import { Tabbar, TabbarItem } from 'vant'
Vue.use(Tabbar)
Vue.use(TabbarItem)
import { Col, Row } from 'vant'
Vue.use(Col)
Vue.use(Row)
import { Image as VanImage } from 'vant'
Vue.use(VanImage)
import { Cell, CellGroup, Icon } from 'vant'
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Icon)
import { Search } from 'vant';
Vue.use(Search);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
