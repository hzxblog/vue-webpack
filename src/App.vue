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
      console.log(this.$style);
    }
  }
</script>

<style lang="scss">
  .example {
    color: red;
  }
</style>

