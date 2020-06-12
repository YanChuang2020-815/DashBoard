<template>
  <div class="top-left-cmp">
    <div class="dc-left">
      <dv-border-box-5>
        <div class="main-value"><span>0</span>起</div>
        <div class="compare-value"><span>同比</span>0</div>
        <div class="compare-value"><span>环比</span>0</div>
      </dv-border-box-5>
      <div class="dc-text">
        系统监测正确率
        <dv-decoration-3 style="width:200px;height:20px;" />
      </div>
    </div>
    <div class="dc-right">
      <div class="dc-text">
        当月监测火灾发生次数
        <dv-decoration-3 style="width:200px;height:20px;" />
      </div>
      <dv-border-box-5 :reverse="true">
        <div class="main-value"><span>100</span>%</div>
        <div class="compare-value"><span>监测火灾</span>66起</div>
        <div class="compare-value"><span>实际火灾</span>9起</div>
      </dv-border-box-5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopLeftCmp'
}
</script>

<style lang="less">
.top-left-cmp {
  display: flex;

  .dc-left, .dc-right {
    width: 50%;
  }

  .dv-border-box-5 {
    height: 60%;
  }

  .dc-text {
    display: flex;
    flex-direction: column;
    height: 40%;
    font-size: 20px;
    padding: 20px;
    box-sizing: border-box;
  }

  .dc-left .dc-text {
    align-items: flex-end;
    justify-content: center;
  }

  .dc-right .dc-text {
    justify-content: flex-start;
    padding-top: 20px;
  }

  .dc-left .dv-border-box-5 {
    padding: 30px;
    box-sizing: border-box;
  }

  .dc-right .dv-border-box-5 {
    padding: 40px;
    padding-left: 75px;
    box-sizing: border-box;
  }

  .main-value {
    font-weight: bold;
    font-size: 30px;

    span {
      font-size: 50px;
      color: #00c0ff;
      margin-right: 15px;
    }
  }

  .compare-value {
    height: 35px;
    line-height: 35px;
    font-size: 18px;

    span {
      margin-right: 30px;
    }
  }
}
</style>
