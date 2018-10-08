import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AboutUs from '@/components/AboutUs'
import NewsInformation from '@/components/NewsInformation'
import Community from '@/components/Community'
import ContactUs from '@/components/ContactUs'
import SlidingModule from '@/components/SlidingModule'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/aboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/newsInformation',
      name: 'NewsInformation',
      component: NewsInformation
    },
    {
      path: '/community',
      name: 'Community',
      component: Community
    },
    {
      path: '/contactUs',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/slidingModule',
      name: 'SlidingModule',
      component: SlidingModule
    }
  ]
})
