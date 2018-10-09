<template>
  <div>
    <a href="" class="top4 top-bg"/>
    <div class="new content">
      <span class="new_btn new_left_btn" v-on:click="swap(1)" :class="[temp === 1 ? 'active' : '']">企业介绍</span>
      <span class="new_btn new_right_btn" v-on:click="swap(2)" :class="[temp === 2 ? 'active' : '']">加入我们</span>
      <div class="new_left" v-if="temp===1">
        <h2 class="h2_about">企业介绍</h2>
        <div class="line"/>
        <h3>Enterprise introduction</h3>
        <p class="p1">成都佳荟科技成立于2017年4月14日，是目前成都最大的智慧社区服务提供商。
          与腾讯签订了腾讯智慧社区战略合作协议。佳荟科技一直秉承“以服务创造价值”的经营理念，
          为与我们合作的社区提供稳定优的各类服务.公司依据2016年3月李克强总理政府工作报告“大力推行‘互联网+政务服务’，
          实现部门间数据共享，让居和企业少跑腿、好办事、不添堵、简除烦苛、禁察非法，是人民群众有平等的机会和更大的创造空间”，
          做出调整，做到让社区居民足<br/>不出户便能享受快捷、便利、智能的生活。成都佳慧科技不止是一个企业，同时也<br/>
          是大家的伙伴。</p>
        <p>“为居民提供优质的服务，传播服务理念；提高员工的自身价值，以人为本<br/>
          服务大众”一直以来是成都佳荟科技战略发展的核心，我们队伍具有团队合作、协<br/>作进取、勇于探索的精神。
          “佳荟科技不单是一家公司，更是我们漫漫人生路路上<br/>最信赖的伙伴”这不仅是我们每一个员工的工作准则，
          更是我们全体永无止歇的追<br/>求。</p>
        <div class="img"/>
      </div>
      <div class="new_right" v-if="temp===2">
        <h2 class="h2_about">加入我们</h2>
        <div class="line"/>
        <h3>Join us</h3>
        <ul>
          <li>
            <div class="bg">
              <div class="li_img" :style="{background:`url('${require('../assets/joinus1.png')}') left no-repeat`}"/>
              <p class="p1">工作职责：</p>
              <p>1、渠道项目管理</p>
              <p>2、账户运营指导、内部对接协调</p>
              <p>3、市场开拓及BD</p>
              <p class="p1">职位要求：</p>
              <p>1、大专及以上学历</p>
              <p>2、有1-3年渠道相关工作经验</p>
              <p>3、有项目管理经验，具有一定的市场开拓能力</p>
              <p>4、工作细致认真，务实，有极强的耐心与责任心</p>
            </div>
          </li>
          <li>
            <div class="bg">
              <div class="li_img" :style="{background:`url('${require('../assets/joinus2.png')}') left no-repeat`}"/>
              <p class="p1">工作职责：</p>
              <p>1、负责中心市场开发、拓展工作</p>
              <p>2、兼职人员招聘、培训、管理、保证有效信息的收集</p>
              <p class="p1">职位要求：</p>
              <p>1、大专及以上学历，思维灵活，吃苦耐劳</p>
              <p>2、具独立工作能力和团队合作精神</p>
              <p>3、有市场营销背景或教育行业工作经验优先</p>
            </div>
          </li>
          <li>
            <div class="bg">
              <div class="li_img" :style="{background:`url('${require('../assets/joinus3.png')}') left no-repeat`}"/>
              <p class="p1">工作职责：</p>
              <p>1、独立运营公众号，负责微信账号管理和维护</p>
              <p>2、公众号等渠道广告投放</p>
              <p>3、文案编辑及活动策划</p>
              <p class="p1">职位要求：</p>
              <p>1、大专及以上学历</p>
              <p>2、懂微信营销，公众号运营经历者更加</p>
              <p>3、工作态度认真能吃苦</p>
            </div>
          </li>
          <li>
            <div class="bg">
              <div class="li_img" :style="{background:`url('${require('../assets/joinus4.png')}') left no-repeat`}"/>
              <p class="p1">工作职责：</p>
              <p>1、根据公司战略规划，制定APP产品发展战略</p>
              <p>2、负责市场需求调研，规划整体产品路线</p>
              <p>3、对市场，用户的分析</p>
              <p>4、关注用户对产品各项功能的反聩析</p>
              <p class="p1">职位要求：</p>
              <p>1、大专及以上学历</p>
              <p>2、1-3年工作经验者优先</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "AboutUs",
    data() {
      return{
        temp: 1,
      }
    },
    methods: {
      swap: function (t) {
        console.log(t);
        this.temp = t
      }
    }
  }
</script>

<!--<style scoped>-->

<!--</style>-->
<style scoped lang="less">
  @import url(../style/aboutus.less);
</style>
