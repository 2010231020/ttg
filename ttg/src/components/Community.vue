<template>
  <div>
    <a href="" class="top5 top-bg"/>
    <div class="new content">
      <div class="new" :style="c">
        <h2 class="h2_com">智慧社区</h2>
        <div class="line"/>
        <h3>community</h3>
        <p class="p_com"> 智慧社区是社区管理的一种新理念，是新形势下社会管理创新的一种新模式。
          智慧社区是指充分利用物联网、云计算、移动互联网等新一代信息技术的集成
          应用,为社区居民提供一个安全、舒适、便利的现代化、智慧化生活环境,从而形成基于信息化、
          智能化社会管理与服务的一种新的管理形态的社区。</p>
        <ul class="ul_com">
          <li class="li_com">
            <span class="span1">微信号</span>
            <span class="span2">业主端</span>
            <span>物业通知</span>
            <span>快捷报修</span>
            <span>投诉建议</span>
            <span>社区快报</span>
          </li>
          <li class="li_com">
            <span class="span1">微信企业号</span>
            <span class="span2">物业端</span>
            <span>接收内部消息</span>
            <span>数据报表统计</span>
            <span>回复业主询问</span>
            <span class="span2">政府端</span>
            <span>数据实时监控</span>
            <span>数据报表统计</span>
            <span>大数据分析</span>
            <span class="span2">商户端</span>
            <span>接收订单</span>
            <span>数据报表</span>
          </li>
          <li class="li_com">
            <span class="span1">蜂鸟平台</span>
            <span class="span2">管理端</span>
            <span>社区新闻</span>
            <span>门禁系统</span>
            <span>公告通知</span>
            <span>各类缴费</span>
            <span>生活服务</span>
            <span>活动报名</span>
            <span>快递代收</span>
            <span>报修</span>
            <span>意见收集</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Community"
  }
</script>

<style scoped lang="less">
  @import url(../style/community.less);
</style>
