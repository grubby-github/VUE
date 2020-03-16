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
        this.$axios.get('http://192.168.1.31:8085/rest/alarm/getAlarmTypeList')
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log('Error! Could not reach the API. :' + error)
          })
      }
    }
  }
}
</script>
