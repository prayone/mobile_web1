import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      meta:{
        requireAuth:false,
        aliasName:'首页'
      },
      component: resolve => require(['@/components/Index'], resolve),
    },
    {
      path:'/login',
      name:'login',
      component:resolve => require(['@/components/login/LoginCom'],resolve),
      meta:{
        requireAuth:false,
        aliasName:'登录'
      }
    },
    {
      path: '/learnDetails',
      name: 'learnDetails',
      component: resolve => require(['@/components/study/LearningDetails'], resolve),
      meta:
        {
          requireAuth: false,
          aliasName: '课程详情'
        }
    },
    {
      path:'/homePage',
      name:'homePage',
      component:resolve => require(['@/components/homePage'],resolve),
      meta:{
        requireAuth:false,
        aliasName:'选课'
      }
    },
    {
      path:'/study',
      name:'study',
      component:resolve => require(['@/components/study'],resolve),
      meta:{
        requireAuth:false,
        aliasName:'我的课程'
      }
    },
    {
      path:'/mine',
      name:'mine',
      component:resolve => require(['@/components/mine'],resolve),
      meta:{
        requireAuth:false,
        aliasName:'我的'
      }
    },
    {
    path: '/loginRevise',
    name: 'loginRevise',
    component: resolve => require(['@/components/login/LoginRevise.vue'], resolve),
    meta: {
      requireAuth:false,
      aliasName: '修改密码'
      }
    },
    {
      path:'/personInfo',
      name:'personInfo',
      component:resolve => require(['@/components/personInfo'],resolve),
      meta:{
        requireAuth:false,
        aliasName:'个人信息'
      }
    },
    {
      path:'/order',
      name:'order',
      component:resolve => require(['@/components/order'],resolve),
      meta:{
        requireAuth:false,
        aliasName:'我的订单'
      }
    },
    {
      path:'/attendClass',
      name:'attendClass',
      component:resolve => require(['@/components/attendClass'],resolve),
      meta:{
        requireAuth:false,
        aliasName:'如何上课'
      }
    },
    {
      path:'/editUserName',
      name:'editUserName',
      component:resolve => require(['@/components/editUserName'],resolve),
      meta:{
        requireAuth:false,
        aliasName:'修改昵称'
      }
    },
    {
      path:'/addressManage',
      name:'addressManage',
      component:resolve => require(['@/components/addressManage'],resolve),
      meta:{
        requireAuth:false,
        aliasName:'地址管理'
      }
    },
    {
      path:'/editAddress',
      name:'editAddress',
      component:resolve => require(['@/components/editAddress'],resolve),
      meta:{
        requireAuth:false,
        aliasName:'编辑地址'
      }
    },
    {
      path:'/test',
      name:'test',
      component:resolve => require(['@/components/test'],resolve),
      meta:{
        requireAuth:false,
        aliasName:'test'
      }
    },
  ]
})
