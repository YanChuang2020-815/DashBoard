<template>
    <div>
      <!-- app-socket没有视图，放在页面最后即可 -->
      <Web-Socket
          ref="socket"
          url="ws://127.0.0.1:8990/ws"
          autoReconnect
          @onOpen="socketOnOpen"
          @onMessage="socketOnMessage"
          @onError="socketOnError"
          @onClose="socketOnClose"
      />
  </div>
</template>

<script>
export default {
  name: 'WebSocketExample',
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
