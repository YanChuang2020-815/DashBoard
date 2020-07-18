<template>
  <div class="bottom-left-chart-2">
    <div class="header-name">当前烟感状态</div>
    <div class="details-value"><span>无烟</span></div>
    <div class="header-name">当前湿度</div>
    <dv-decoration-9 class="showValue" style="width:150px;height:150px;">30%</dv-decoration-9>
  </div>
</template>

<script>
export default {
  name: 'BottomLeftChart2',
  data () {
    return {
    }
  }
}
</script>

<style lang="less">
.bottom-left-chart-2 {
  .header-name {
    height: 120px;
    line-height: 150px;
    font-size: 20px;
    text-align: center;
  }
  .showValue {
    left:80px;
    top:6px;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: #00c0ff;
    height: 150px;
    weight:150px;
  }
  .details-value {
    height: 40px;
    font-size: 30px;
    font-weight: bold;
    text-align: center;

    span {
      color: #00c0ff;
      font-size: 45px;
    }
  }

  .dv-charts-container {
    height: calc(~"100% - 190px");
  }
}
</style>
