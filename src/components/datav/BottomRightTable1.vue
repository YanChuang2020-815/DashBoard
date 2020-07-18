<template>
  <div class="bottom-right-table-1">
    <dv-border-box-6>
      <div class="table-name">
        <img src="./img/icon1.png" />温度异常记录
      </div>

      <dv-scroll-board :config="config" />
    </dv-border-box-6>
  </div>
</template>

<script>
export default {
  name: 'BottomRightTable1',
  data () {
    return {
      config: {
        data: [
          ['56℃', '时间：2020-06-12 17:23:06'],
          ['41℃', '时间：2020-06-19 12:51:48'],
          ['46℃', '时间：2020-06-20 10:20:55'],
          ['42℃', '时间：2020-06-20 16:45:27'],
          ['50℃', '时间：2020-06-25 07:16:38'],
          ['45℃', '时间：2020-06-28 15:00:08'],
          ['46℃', '时间：2020-06-28 18:34:29'],
          ['52℃', '时间：2020-06-30 14:45:35'],
          ['48℃', '时间：2020-07-03 17:49:19'],
          ['64℃', '时间：2020-07-10 19:26:53'],
          ['52℃', '时间：2020-07-13 09:52:39'],
          ['39℃', '时间：2020-07-15 20:39:50'],
          ['56℃', '时间：2020-07-16 11:04:56'],
          ['45℃', '时间：2020-07-16 16:46:28']
        ],
        index: true,
        columnWidth: [30, 60],
        align: ['center'],
        oddRowBGC: 'rgba(9, 37, 50, 0.4)',
        evenRowBGC: 'rgba(10, 32, 50, 0.3)'
      }
    }
  }
}
</script>

<style lang="less">
.bottom-right-table-1 {
  width: calc(~"25% + 10px");
  height: 100%;
  margin: 0 -5px;

  .border-box-content {
    padding: 20px;
    box-sizing: border-box;
  }

  .table-name {
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;

    img {
      width: 40px;
      height: 40px;
      margin-right: 5px;
    }
  }

  .dv-scroll-board {
    height: calc(~"100% - 60px");
  }
}
</style>
