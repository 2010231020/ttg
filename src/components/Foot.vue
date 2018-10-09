<template>
    <div class="foot">
      <div class="WeChat">
        <div>
          <img src="../assets/wechat-bg.png" alt="">
          <p>请使用微信扫描上方二维码</p>
        </div>
      </div>
      <ul class="content">
        <li v-for="(f,index) in footData">
          <div class="title" v-html="f.title"></div>
          <p v-for="c in f.classification"><a :href="c.link" v-html="c.text"></a></p>
        </li>
        <li class="special">
          <div class="title">客服电话</div>
          <i></i>
          <p>全国统一服务热线</p>
          <p>854-2255-888</p>
        </li>
        <li class="foot-icon"></li>
      </ul>
      <div class="remarks">版权所有@成都佳荟科技有限公司   蜀ICP备090251545号</div>
    </div>
</template>

<script>
    var footData = [
      {title: '关于我们', classification:[{link:'',text:'企业概况'},{link:'',text:'人才招聘'},{link:'',text:'合作社区'}]},
      {title: '新闻动态', classification:[{link:'',text:'企业新闻'},{link:'',text:'行业新闻'},{link:'',text:'企业活动'}]},
      {title: '智慧社区',classification:[{link:'',text:'微信公众号'},{link:'',text:'物业企业号'},{link:'',text:'蜂鸟社区平台'}]},
      {title: '联系我们',classification:[{link:'',text:'公司地址'},{link:'',text:'联系方式'}]},
    ];
    export default {
      name: "Foot",
      data() {
        return {
          footData: footData,

        }
      }
    }
</script>

<style scoped lang="less">
  @import url(../style/foot.less);
</style>
