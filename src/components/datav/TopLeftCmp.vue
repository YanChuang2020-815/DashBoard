<template>
  <div class="top-left-cmp">
    <div class="dc-left">
      <dv-border-box-5>
        <div class="main-value"><span>{{totalPerMonth}}</span>起</div>
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
        <div class="compare-value"><span>监测火灾</span>14起</div>
        <div class="compare-value"><span>实际火灾</span>14起</div>
      </dv-border-box-5>
    </div>
    <div>
      <!-- app-socket没有视图，放在页面最后即可 -->
      <App-Socket
          ref="socket"
          url="ws://127.0.0.1:8990/ws"
          autoReconnect
          @onOpen="socketOnOpen"
          @onMessage="socketOnMessage"
          @onError="socketOnError"
          @onClose="socketOnClose"
      />
  </div>
  </div>
</template>

<script>
import AppSocket from './pub-websocket'

export default {
  name: 'TopLeftCmp',
  components: {
    AppSocket
  },
  data () {
    return {
      totalPerMonth: 14
    }
  },
  methods: {
    socketOnOpen () {
      console.log('ws连接成功')
      var msg = {
        'content': '创建连接',
        'sendTime': 1557906140981,
        'spreadType': 'INITIAL',
        'groupId': 'group0003',
        'clientId': 'client0001',
        'sendClientId': 'client0001'
      }
      this.socketSend(msg)
    },
    socketOnMessage (evt) {
      console.log('ws来消息了：', evt)
      this.totalPerMonth = evt.content.value
    },
    socketOnError (err) {
      console.log('ws连接错误：', err)
    },
    socketOnClose () {
      console.log('ws连接关闭')
    },
    socketSend (msg) {
      this.$refs.socket.send(msg)
    },
    socketClose () {
      this.$refs.socket.close()
    }
  },
  // 个别场景中(Index组件中就用到了)，子组件层级不确定，又想调用本组件中的socket来发送消息
  // 可通过依赖注入，将本组件中的方法注入到子组件，子组件通过inject即可调用该方法
  provide () {
    return {
      socketSend: this.socketSend
    }
  }
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
