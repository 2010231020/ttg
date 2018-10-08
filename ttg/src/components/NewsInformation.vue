<template>
  <div>
    <a href="" class="top6 top-bg"/>
    <div class="new content">
      <h1>你现在的位置：<a class="a1" href="">首页</a></h1>
      <div class="nav-btn">
        <span class="new_btn new_left_btn" v-on:click="swap(1)" :class="[temp === 1 ? 'active' : '']">企业新闻</span>
        <span class="new_btn new_middle_btn" v-on:click="swap(2)" :class="[temp === 2 ? 'active' : '']">行业新闻</span>
        <span class="new_btn new_right_btn" v-on:click="swap(3)" :class="[temp === 3 ? 'active' : '']">企业活动</span>
      </div>
       <div v-if="temp===1">
         <h2 class="h2_new">企业新闻</h2>
         <h3>...Enterprise News...</h3>
         <ul class="ul_new">
           <li class="li_new" :style="{background:`url('${require('../assets/new1.jpg')}') center no-repeat`}">
             <div class="bg">
               <h5 class="h5_new">沈阳分公司成立了</h5>
               <p class="p_new">根据市场需求，公司把握时机在沈阳成立了沈阳家喵科技有限公司。
                 同样和社区合作以公众号为主要的手段来实现“互联网+智慧社区”······</p>
             </div>
           </li>
           <li class="li_new" :style="{background:`url('${require('../assets/new2.jpg')}') center no-repeat`}">
             <div class="bg">
               <h5 class="h5_new">好消息！目前已有875个小区正式进入智慧社区时代</h5>
               <p class="p_new">公司成立到现在，通过全公司人员的努力已有875个小区正式进入智慧社区时代.智慧社区是指充分借助互联网、
                 物联网，涉及到智能楼宇、智能家居、路网监控、智能医院、城市生命线管理、食品药品管理、票证管理、家庭护理、
                 个人健康与数······</p>
             </div>
           </li>
           <li class="li_new" :style="{background:`url('${require('../assets/new3.jpg')}') center no-repeat`}">
             <div class="bg">
               <h5 class="h5_new">驿站超市正式在公众号中上线了</h5>
               <p class="p_new">为了更好的服务社区，实现智慧社区，公司正式让新鲜时令水果在社区群众零距离接触。
                 微信公众号轻松下单，新鲜水果立即从蓉城附近水果基地出发，轻松送到你手中······</p>
             </div>
           </li>
           <li class="li_new" :style="{background:`url('${require('../assets/new4.jpg')}') center no-repeat`}">
             <div class="bg">
               <h5 class="h5_new">佳荟科技与腾讯签订战略合作协议</h5>
               <p class="p_new">2016李克强总理政府工作报告及2016两会马化腾的讲话，两者都对“互联网+智慧社区”
                 做出具体看法4月我公司正式与腾讯签订智慧社区战略合作协议······</p>
             </div>
           </li>
         </ul>
       </div>
        <div v-if="temp===2">
          <h2 class="h2_new">行业新闻</h2>
          <h3>...INDUSTRY NEWS...</h3>
          <ul class="ul_new">
            <li class="li_new" :style="{background:`url('${require('../assets/new5.jpg')}') center no-repeat`}">
              <div class="bg">
                <h5 class="h5_new">成都推进智慧社区建设的对策建议</h5>
                <p class="p_new">智慧社区是智慧城市的基础“细胞”，是社区未来形态。建设智慧社区，就是围绕服务社区居民，
                  通过综合利用现代科学技术，为政府、企业、组织等社区参与主体开展社会管理、公息安全、政务信息等方面加强保障，
                  按照平台功能制定······</p>
              </div>
            </li>
            <li class="li_new" :style="{background:`url('${require('../assets/new6.jpg')}') center no-repeat`}">
              <div class="bg">
                <h5 class="h5_new">“智慧天府、数字成都”智慧城市国际论坛在成都举行</h5>
                <p class="p_new">8月4日，以“智慧城市引领智慧生活”为主题的“智慧天府、数字成都”智慧城市国际论坛在成都举行。
                  各路嘉宾齐聚成都，共同探讨智慧城市群的建设、管理、策略与方法，
                  以及大数据、物联网在智慧城市建设中的应用······</p>
              </div>
            </li>
            <li class="li_new" :style="{background:`url('${require('../assets/new7.jpg')}') center no-repeat`}">
              <div class="bg">
                <h5 class="h5_new">第三届“互联网+智慧法院”论坛在成都开幕</h5>
                <p class="p_new">4月13日，由最高人民法院应用法学研究所互联网司法研究中心和新浪网联合主办、
                  四川省成都市中级人民法院承办的第三届“互联网+智慧法院”论坛在成都开幕。本届论坛聚焦司法改革背景下
                  的法院互联网应用方向、智慧法院建设和人工智能的司法应用技术等前沿领域······</p>
              </div>
            </li>
            <li class="li_new" :style="{background:`url('${require('../assets/new8.jpg')}') center no-repeat`}">
              <div class="bg">
                <h5 class="h5_new">李克强总理政府关于智慧社区工作报告</h5>
                <p class="p_new">2016年3月李克强总理政府工作报告提出大力推行“互联网+政务”，
                  实现部门间数据共享，让居民和企业少跑腿、好办事······</p>
              </div>
            </li>
          </ul>
        </div>
       <div v-if="temp===3">
         <h2 class="h2_new">企业活动</h2>
         <h3>...ACTIVITY...</h3>
         <ul class="ul_new2">
           <li class="li_new2">
             <div class="bg1" :style="{background:`url('${require('../assets/new9.jpg')}') center no-repeat`}"/>
             <div class="bg2">
               <h5 class="h5_new2">boss威武！全员一起与《战狼2》共战非洲</h5>
               <p class="p_new2">《战狼2》自开播以来席卷整个中国电影市场，是今年中国的主流电影。
                 公司为缓解平时的工作压力让我们能劳逸结合，boss大人请我们全体······</p>
             </div>
           </li>
           <li class="li_new2">
             <div class="bg1" :style="{background:`url('${require('../assets/new10.jpg')}') center no-repeat`}"/>
             <div class="bg2">
               <h5 class="h5_new2">天气这么热，我们一起去阿坝米兰罗避暑吧</h5>
               <p class="p_new2">自从进入三伏天以来，成都的天气越来越热，大成都的人们统统都向周边的避暑胜地去避暑去了。
                 我们也不能落于人后啊。今天我们公司全员去阿坝米兰罗避暑了······</p>
             </div>
           </li>
           <li class="li_new2">
             <div class="bg1" :style="{background:`url('${require('../assets/new11.jpg')}') center no-repeat`}"/>
             <div class="bg2">
               <h5 class="h5_new2">开黑吧，天美开黑进行时</h5>
               <p class="p_new2">今天是个充满惊喜的时间，我们公司居然来到了传说中的天美工作室。不开黑那还等什么啊······</p>
             </div>
           </li>
           <li class="li_new2">
             <div class="bg1" :style="{background:`url('${require('../assets/new12.jpg')}') center no-repeat`}"/>
             <div class="bg2">
               <h5 class="h5_new2">敬老院义务活动</h5>
               <p class="p_new2">百善孝为先，今天在公司的组织下，我们来到成都周边的一个敬老院进行义工服务······</p>
             </div>
           </li>
           <li class="li_new2">
             <div class="bg1" :style="{background:`url('${require('../assets/new13.jpg')}') center no-repeat`}"/>
             <div class="bg2">
               <h5 class="h5_new2">快过来，小姐姐都在这</h5>
               <p class="p_new2">漂亮的小姐姐，帅气的小哥哥哪里跑，还不快到我的碗里来，成都漫展的我们······</p>
             </div>
           </li>
           <li class="li_new2">
             <div class="bg1" :style="{background:`url('${require('../assets/new14.jpg')}') center no-repeat`}"/>
             <div class="bg2">
               <h5 class="h5_new2">国宝国宝快到我这来</h5>
               <p class="p_new2">平时工作繁忙我们怎能忘记减压呢，在成都我们可算是近水楼台先得月啊，
                 国宝熊猫我们萌萌哒的减压······</p>
             </div>
           </li>
         </ul>
       </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NewsInformation",
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

<style scoped lang="less">
  @import url(../style/newinformation.less);
</style>
