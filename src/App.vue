<template>
  <div id="app">
    <Head/>
    <router-view/>
    <Foot/>
  </div>
</template>

<script>
  import Head from "./components/Head";
  import Foot from "./components/Foot";
  export default {
    name: 'App',
    components: {Head,Foot}
  }
</script>

<style lang="less">
  @import url(./App.less);
</style>
