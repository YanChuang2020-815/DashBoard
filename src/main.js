import Vue from 'vue'
import App from './App.vue'

import './assets/common.less'

import dataV from '@jiaminghi/data-view'

import Video from 'video.js'
import 'video.js/dist/video-js.css'

Vue.prototype.$video = Video

Vue.config.productionTip = false

Vue.use(dataV)

new Vue({
  render: h => h(App)
}).$mount('#app')
