<template>
  <!-- 制作一个框架包裹slider -->
  <div style="width:100%;height:592px;margin-top: 20px;min-width: 1200px">
    <!-- 配置slider组件 -->
    <slider ref="slider" :options="options" @slide='slide' @tap='onMouseOver' @init='onInit'>
      <!-- 直接使用slideritem slot -->
      <slideritem v-for="(item,index) in someList" :key="index" :style="item.style">
        <router-link style="width: 100%;height: 100%" :to="item.link"/>
      </slideritem>
      <!-- 设置loading,可自定义 -->
      <div slot="loading">loading...</div>
    </slider>
  </div>
</template>
<script>
  import {slider, slideritem} from 'vue-concise-slider'// import slider components
  export default {
    name: 'SlidingModule',
    data() {
      return {
        //Image list
        someList: [],
        //Sliding configuration [obj]
        options: {
          currentPage: 0,
          thresholdDistance: 500,
          thresholdTime: 1000,
          autoplay: 5000,
          loop: true,
          direction: 'horizontal',
          loopedSlides: 1,
          slidesToScroll: 1,
          timingFunction: 'ease',
          speed: 1000
        }
      }
    },
    components: {
      slider,
      slideritem
    },
    mounted() {
      let that = this
        that.someList = [
          {
            html: '',
            style: {
              background: `url(${require("../assets/banner1.jpg")}) no-repeat`,
              backgroundSize: '100% 100%',
              cursor: 'pointer'
            },
            link: '/'
          },
          {
            html: '',
            style: {
              background: `url(${require("../assets/banner2.jpg")}) no-repeat`,
              backgroundSize: '100% 100%',
              cursor: 'pointer'
            },
            link: '/aboutUs'
          },
          {
            html: '',
            style: {
              background: `url(${require("../assets/banner3.jpg")}) no-repeat`,
              backgroundSize: '100% 100%',
              cursor: 'pointer'
            },
            link: '/contactUs'
          }
        ]
    },
    methods: {
      // Listener event
      slide(data) {
        console.log('slide', data)
      },
      onTap(data) {
        console.log('tap', data)
      },
      onInit(data) {
        console.log(data)
      },
      onMouseOver(data) {
        console.log('over', data)
      }
    }
  }
</script>
