<template>
  <div>
    <input v-model="message" />
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
  </div>
</template>

<script>
export default {
  name: 'computed',
  data () {
    return {
      message: 'Hello'
    }
  },
  computed: {
    reversedMessage: {
      // getter
      get: function () {
        return this.message.split('').reverse().join('')
      },
      // setter
      set: function (newValue) {
        console.log('set:' + newValue)
      }
    }
  }
}
</script>
