<template>
  <div class="bottom-right-table-2">
    <dv-border-box-6>
      <div class="table-name">
        <img src="./img/icon2.png" />湿度异常记录
      </div>

      <dv-scroll-board :config="config" />
    </dv-border-box-6>
  </div>
</template>

<script>
export default {
  name: 'BottomRightTable2',
  data () {
    return {
      config: {
        data: [
          ['28%', '时间：2020-06-12 17:23:06'],
          ['41%', '时间：2020-06-19 12:51:48'],
          ['38%', '时间：2020-06-20 10:20:55'],
          ['47%', '时间：2020-06-20 16:45:27'],
          ['32%', '时间：2020-06-25 07:16:38'],
          ['52%', '时间：2020-06-28 15:00:08'],
          ['37%', '时间：2020-06-28 18:34:29'],
          ['25%', '时间：2020-06-30 14:45:35'],
          ['48%', '时间：2020-07-03 17:49:19'],
          ['32%', '时间：2020-07-10 19:26:53'],
          ['38%', '时间：2020-07-13 09:52:39'],
          ['40%', '时间：2020-07-15 20:39:50'],
          ['36%', '时间：2020-07-16 11:04:56'],
          ['30%', '时间：2020-07-16 16:46:28']
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
.bottom-right-table-2 {
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
