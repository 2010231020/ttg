<template>
  <header class="header content">
    <img src="../assets/logo.png" alt="">
    <ul>
      <li>
        <router-link to="/">
          首页
        </router-link>
      </li>
      <li>
        <router-link to="/AboutUs">
          关于我们
        </router-link>
      </li>
      <li>
        <router-link to="/Community">
          智慧社区
        </router-link>
      </li>
      <li>
        <router-link to="/NewsInformation">
          新闻动态
        </router-link>
      </li>
      <li>
        <router-link to="/ContactUs">
          联系我们
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style lang="less">
  @import url(../style/header.less);
</style>
