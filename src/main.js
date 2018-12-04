//主要引入
import Vue from 'vue'
import router from './router/index'


import VueLazyload from 'vue-lazyload'



import {Button} from 'mint-ui'

import App from './App.vue'

import './filters'  //时间处理工具
import './mock/mockServer'  // 加载这个模块即可
import loading from './common/imgs/loading.gif'

Vue.use(VueLazyload, { // 内部会定义一个全局的指令: lazy
  loading
})


// 注册全局组件(映射成标签)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router
})
