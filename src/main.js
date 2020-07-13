import Vue from 'vue'
import App from './App.vue'

import './assets/common.less'

import dataV from '@jiaminghi/data-view'

import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css' // videoJs的样式
// import 'vue-video-player/src/custom-theme.css' //vue-video-player的样式
import 'videojs-flash' // 引入才能播放rtmp视屏
// import 'videojs-contrib-hls' // 引入才能播放m3u8文件
Vue.use(VideoPlayer)

Vue.config.productionTip = false

Vue.use(dataV)

new Vue({
  render: h => h(App)
}).$mount('#app')
