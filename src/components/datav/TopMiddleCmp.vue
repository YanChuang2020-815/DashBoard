<template>
  <div class="top-middle-cmp">
    <div class="chart-name">
      摄像头实时视频
      <dv-decoration-3 style="width:200px;height:20px;" />
    </div>
    <div class="filmvideo" style="margin: 20 auto;width: 600px;height: 300px;">
      <video
          id="my-video"
          class="video-js vjs-default-skin box"
          controls
          preload="auto"
      >
          <source
            src="http://192.168.1.4:8080/live/stream.m3u8"
            type="application/x-mpegURL"
          />
      </video>
    </div>
  </div>
</template>

<script>
import videojs from 'video.js'
import 'videojs-contrib-hls'
export default {
  name: 'TopMiddleCmp',
  data () {
    return {
    }
  },
  mounted () {
    videojs('my-video',
      function () {
        this.play()
      })
  }
}
</script>

<style lang="less">
.top-middle-cmp {
  position: relative;
  padding: 0 50px;
  box-sizing: border-box;
}
</style>
<style scoped>
.box {
    width: 580px;
    height: 320px;
}
</style>
