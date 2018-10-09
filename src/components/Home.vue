<template>
  <div>
    <SlidingModule/>
    <div class="new1 content">
      <div class="new1_left">
        <h1 class="h1_home">腾讯智慧社区</h1>
        <div class="text1"><h2 class="h2_home">微信公众号</h2>
          <div class="button">
            <a href="https://mp.weixin.qq.com/"><span>点击查看》</span></a>
          </div>
          <h3>围绕智慧社区，以微信公众号为主要的手段，实现足不出户便能享受只能快捷的生活</h3>
        </div>
        <div class="text1"><h2 class="h2_home">物业企业号</h2>
          <div class="button">
            <a href="https://work.weixin.qq.com/?from=qyh_redirect"><span>点击查看》</span></a>
          </div>
          <h3>业主通过公众号报修，投诉在线处理，智能快捷的同时，也能解决物业与业主之间的矛盾</h3>
        </div>
        <div class="text1"><h2 class="h2_home">蜂鸟社区平台</h2>
          <div class="button">
            <a href="https://www.haina.com"><span>点击查看》</span></a>
          </div>
          <h3>通过蜂鸟社区平台实现工单处理、信息维护、通知推送、快递代收等服务</h3>
        </div>
      </div>
      <div class="new1_right"></div>
    </div>
    <div class="new2 content">
      <div class="new2_top"/>
      <div class="new2_a">
        <a href="Home.vue">企业动态</a>
        <a href="Home.vue">行业新闻</a>
        <a href="Home.vue">企业活动</a>
      </div>
      <!--<ul class="new2_ul">-->
      <!--<li>-->
      <!--<div class="new2_li">-->
      <!--<div class="li1" :style="{background:`url('${require('../assets/img1.jpg')}') center no-repeat`}">-->
      <!--<a href="Home.vue"><p>热烈祝贺四川雪宝集团牵手四川腾讯海纳..</p></a></div>-->
      <!--<div class="li2">-->
      <!--<p>2018年6月29日，四川雪宝集团董事长与副总裁等人抵达成都腾讯大厦A栋，-->
      <!--与腾讯互联网+项目负责人、海纳社区西南地区负责人关于雪宝集团与腾讯海纳的深度合作进行友好交流，-->
      <!--确定了关于产品研发、社区入驻、后期运营等方面的紧密合作...</p>-->
      <!--</div>-->
      <!--</div>-->
      <!--</li>-->
      <!--<li>-->
      <!--<div class="new2_li">-->
      <!--<div class="li1" :style="{background:`url('${require('../assets/img2.jpg')}') center no-repeat`}">-->
      <!--<a href="Home.vue"><p>李克强总理政府工作报告中提出大力推行“互联网······</p></a></div>-->
      <!--<div class="li2">-->
      <!--<p>“互联网+政务”，实现部门间数据共享，让居民和企业少跑腿、好办事、-->
      <!--不添堵简除烦苛，禁察非法，使人民群众有更平等的······</p>-->
      <!--</div>-->
      <!--</div>-->
      <!--</li>-->
      <!--<li>-->
      <!--<div class="new2_li">-->
      <!--<div class="li1" :style="{background:`url('${require('../assets/img3.jpg')}') center no-repeat`}">-->
      <!--<a href="Home.vue"><p>热烈庆贺！腾讯海纳正式在深圳发布...</p></a></div>-->
      <!--<div class="li2">-->
      <!--<p>2017年12月，腾讯海纳项目正式在深圳市召开发布会，宣布项目正式启动，并且现场颁发城市运营方合作奖，-->
      <!--其中成都市成为腾讯海纳三大标杆合作方之一，同时也标志着成都市智慧社区开启了一个新的时代...</p>-->
      <!--</div>-->
      <!--</div>-->
      <!--</li>-->
      <!--<li>-->
      <!--<div class="new2_li">-->
      <!--<div class="li1" :style="{background:`url('${require('../assets/img4.jpg')}') center no-repeat`}">-->
      <!--<a href="Home.vue"><p>好消息！目前已有875个小区正式进入智慧社区时代</p></a></div>-->
      <!--<div class="li2">-->
      <!--<p>公司成立到现在，通过全公司人员的努力已有875个小区正式进入智慧社区时代.智慧社区是指充分借助互联网、物联网，-->
      <!--涉及到智能楼宇、智能家居、路网监控、智能医院、城市生命线管理、食······</p>-->
      <!--</div>-->
      <!--</div>-->
      <!--</li>-->
      <!--<li>-->
      <!--<div class="new2_li">-->
      <!--<div class="li1" :style="{background:`url('${require('../assets/img5.jpg')}') center no-repeat`}">-->
      <!--<a href="Home.vue"><p>成都推进智慧社区建设的对策建议</p></a></div>-->
      <!--<div class="li2">-->
      <!--<p> 智慧社区是智慧城市的基础“细胞”，是社区未来形态。建设智慧社区，就是围绕服务社区居民，-->
      <!--通过综合利用现代科学技术，为政府、企业、组织等社区参与主体开展社会管理、公······</p>-->
      <!--</div>-->
      <!--</div>-->
      <!--</li>-->
      <!--<li>-->
      <!--<div class="new2_li">-->
      <!--<div class="li1" :style="{background:`url('${require('../assets/img6.jpg')}') center no-repeat`}">-->
      <!--<a href="Home.vue"><p>佳荟科技顺利召开第一届腾讯海纳物业大会...</p></a></div>-->
      <!--<div class="li2">-->
      <!--<p>为了更好的建设成都地区智慧小区，成都佳荟与2017年10月18日召开腾讯海纳第一届物业大会，-->
      <!--现场共邀请100余家物业公司前来参与会议，共同交流成都市未来智慧社区的发展方向...</p>-->
      <!--</div>-->
      <!--</div>-->
      <!--</li>-->
      <!--</ul>-->
      <ul class="new2_ul">
        <li>
          <a href="">
            <div class="bg" :style="{background:`url('${require('../assets/img1.jpg')}') center no-repeat`}">
              <span>热烈祝贺四川雪宝集团牵手四川腾讯海纳..</span></div>
          </a>
          <div class="text">
            2018年6月29日，四川雪宝集团董事长与副总裁等人抵达成都腾讯大厦A栋，
            与腾讯互联网+项目负责人、海纳社区西南地区负责人关于雪宝集团与腾讯海纳的深度合作进行友好交流，
            确定了关于产品研发、社区入驻、后期运营等方面的紧密合作...
          </div>
        </li>
        <li>
          <a href="">
            <div class="bg" :style="{background:`url('${require('../assets/img2.jpg')}') center no-repeat`}">
              <span>李克强总理政府工作报告中提出大力推行“互联网······</span></div>
          </a>
          <div class="text">
            2016年3月李克强总理政府工作报告提出大力推行“互联网+政务”，实现部门间数据共享，让居民和企业少跑腿、好办事、
            不添堵简除烦苛，禁察非法，使人民群众有更平等的······
          </div>
        </li>
        <li>
          <a href="">
            <div class="bg" :style="{background:`url('${require('../assets/img3.jpg')}') center no-repeat`}">
              <span>热烈庆贺！腾讯海纳正式在深圳发布...</span></div>
          </a>
          <div class="text">
            2017年12月，腾讯海纳项目正式在深圳市召开发布会，宣布项目正式启动，并且现场颁发城市运营方合作奖，
            其中成都市成为腾讯海纳三大标杆合作方之一，同时也标志着成都市智慧社区开启了一个新的时代...
          </div>
        </li>
        <li>
          <a href="">
            <div class="bg" :style="{background:`url('${require('../assets/img4.jpg')}') center no-repeat`}">
              <span>好消息！目前已有875个小区正式进入智慧社区时代</span></div>
          </a>
          <div class="text">
            公司成立到现在，通过全公司人员的努力已有875个小区正式进入智慧社区时代.智慧社区是指充分借助互联网、物联网，
            涉及到智能楼宇、智能家居、路网监控、智能医院、城市生命线管理、食······
          </div>
        </li>
        <li>
          <a href="">
            <div class="bg" :style="{background:`url('${require('../assets/img5.jpg')}') center no-repeat`}">
              <span>成都推进智慧社区建设的对策建议</span></div>
          </a>
          <div class="text">
            智慧社区是智慧城市的基础“细胞”，是社区未来形态。建设智慧社区，就是围绕服务社区居民，
            通过综合利用现代科学技术，为政府、企业、组织等社区参与主体开展社会管理、公······
          </div>
        </li>
        <li>
          <a href="">
            <div class="bg" :style="{background:`url('${require('../assets/img6.jpg')}') center no-repeat`}">
              <span>佳荟科技顺利召开第一届腾讯海纳物业大会...</span></div>
          </a>
          <div class="text">
            为了更好的建设成都地区智慧小区，成都佳荟与2017年10月18日召开腾讯海纳第一届物业大会，
            现场共邀请100余家物业公司前来参与会议，共同交流成都市未来智慧社区的发展方向...
          </div>
        </li>
      </ul>
    </div>
    <div class="new3 content">
      <div class="new3_top"/>
      <ul class="new3_ul">
        <li>
          <div class="new3_li" :style="{background:`url('${require('../assets/bg1.jpg')}') center no-repeat`}"></div>
        </li>
        <li>
          <div class="new3_li" :style="{background:`url('${require('../assets/bg2.jpg')}') center no-repeat`}"></div>
        </li>
        <li>
          <div class="new3_li" :style="{background:`url('${require('../assets/bg3.jpg')}') center no-repeat`}"></div>
        </li>
        <li>
          <div class="new3_li" :style="{background:`url('${require('../assets/bg4.jpg')}') center no-repeat`}"></div>
        </li>
        <li>
          <div class="new3_li" :style="{background:`url('${require('../assets/bg5.jpg')}') center no-repeat`}"></div>
        </li>
        <li>
          <div class="new3_li" :style="{background:`url('${require('../assets/bg6.jpg')}') center no-repeat`}"></div>
        </li>
        <li>
          <div class="new3_li" :style="{background:`url('${require('../assets/bg7.jpg')}') center no-repeat`}"></div>
        </li>
        <li>
          <div class="new3_li" :style="{background:`url('${require('../assets/bg8.jpg')}') center no-repeat`}"></div>
        </li>
        <li>
          <div class="new3_li" :style="{background:`url('${require('../assets/bg9.jpg')}') center no-repeat`}"></div>
        </li>
        <li>
          <div class="new3_li" :style="{background:`url('${require('../assets/bg10.jpg')}') center no-repeat`}"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import SlidingModule from "../components/SlidingModule";

  export default {
    name: "Home",
    components: {SlidingModule}
  }

</script>

<style scoped lang="less">
  @import url(../style/home.less);
</style>


