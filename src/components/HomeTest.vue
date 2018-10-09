<template>
  <div class="content">
    <SlidingModule/>
    <div class="community">
      <div class="introduce">
        <h2>腾讯智慧社区</h2>
        <ul>
          <li v-for="c in community">
            <div class="name"><span v-html="c.title"></span><a :href="c.link">点击查看&gt;&gt;</a></div>
            <div class="text" v-html="c.text"></div>
          </li>
        </ul>
      </div>
      <div class="community-bg"></div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import SlidingModule from "../components/SlidingModule";

  var community = [
    {title: '微信公众号', link: 'https://mp.weixin.qq.com/', text: '围绕智慧社区，以微信公众号为主要的手段，实现足不出户便能享受只能快捷的生活'},
    {
      title: '物业企业号',
      link: 'https://work.weixin.qq.com/?from=qyh_redirect',
      text: '业主通过公众号报修，投诉在线处理，智能快捷的同时，也能解决物业与业主之间的矛盾'
    },
    {title: '蜂鸟社区平台', link: 'https://www.haina.com/', text: '通过蜂鸟社区平台实现工单处理、信息维护、通知推送、快递代收等服务'},
  ];
  export default {
    name: "HomeTest",
    components: {SlidingModule},
    data() {
      return {
        community: community,

      }
    }
  }

</script>

<style scoped lang="less">
  @import url(../style/homeTest.less);
</style>
