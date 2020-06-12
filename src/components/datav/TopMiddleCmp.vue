<template>
  <div class="top-middle-cmp">
    <div class="chart-name">
      摄像头实时视频
      <dv-decoration-3 style="width:200px;height:20px;" />
    </div>
    <div class="filmvideo" style="margin: 20 auto;width: 600px;height: 320px;">
      <video
        id="myVideo"
        class="video-js"
      >
      <source
        src="http://220.161.87.62:8800/hls/1/index.m3u8"
        type="application/x-mpegURL"
      >
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopMiddleCmp',
  data () {
    return {
    }
  },
  mounted () {
    this.initVideo()
  },
  methods: {
    initVideo () {
      // 初始化视频方法
      let myPlayer = this.$video('#myVideo', {
      // 确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
        controls: true,
        // 自动播放属性,muted:静音播放
        autoplay: 'muted',
        // 建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
        preload: 'auto',
        // 设置视频播放器的显示宽度（以像素为单位）
        width: '600px',
        // 设置视频播放器的显示高度（以像素为单位）
        height: '320px'
      })
    }
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
