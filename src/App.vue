<template>
  <div id="app">
    <div class="example">{{ msg }}</div>
    <img src="@/assets/images/游戏.jpg" alt="">
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Hello world!'
      }
    },
    mounted() {
      console.log(process.env.NODE_ENV);
    }
  }
</script>

<style lang="scss">
  .example {
    color: red;
  }
</style>

