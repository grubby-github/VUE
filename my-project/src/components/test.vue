<template>
  <div>
    <h1>{{ msg }}</h1>
    <span v-bind:title="message">
      鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
    <p v-if="seen">现在你看到我了</p>
    <ol>
      <li v-for="todo in todos" :key='todo.key'>
        {{ todo.text }}
      </li>
    </ol>
    <button v-on:click="reverseMessage">反转消息</button>
    <input v-model="message" />
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: 'test12345',
      message: '页面加载于 ' + new Date().toLocaleString(),
      seen: true,
      todos: [
        { key: 1, text: '学习 JavaScript' },
        { key: 2, text: '学习 Vue' },
        { key: 3, text: '整个牛项目' }
      ]
    }
  },
  methods: {
    reverseMessage: function () {
      this.message = '发生反转消息'
      console.log('发生反转消息')
    }
  }
}
</script>
