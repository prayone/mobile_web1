<template>
  <div class="tabbar">
    <yd-tabbar fixed class='navbar_' active-color='#39C0FF' color='#888888'>
        <yd-tabbar-item title="首页" link="homePage" :active='active_homePage'>
            <img class='homePage_icon' slot="icon" :src="homePage_icon">
        </yd-tabbar-item>
        <yd-tabbar-item title="学习" link="study" :active='active_study'>
            <img class='study_icon' slot="icon" :src="study_icon">
        </yd-tabbar-item>
        <yd-tabbar-item title="我的" link="mine" :active='active_mine'>
            <img class='mine_icon' slot="icon" :src="mine_icon">
        </yd-tabbar-item>
    </yd-tabbar>
  </div>
</template>
<script>
export default {
  props:{
    active_homePage:{
        type:Boolean,
        default:false
    },
    active_study:{
        type:Boolean,
        default:false
    },
    active_mine:{
        type:Boolean,
        default:false
    },
    homePage_icon:{
        type:String,
        default:'static/img/homePage.png'
    },
    study_icon:{
        type:String,
        default:'static/img/study.png'
    },
    mine_icon:{
        type:String,
        default:'static/img/mine.png'
    },
  },
  data(){
    return {
      homePage_title:'首页',
      study_title:'学习',
      mine_title:'我的',
    }
  },
  methods:{                                                                           
    
  }
}
</script>
<style lang="less" scoped>
  .homePage_icon{
    width: 18px;
    height: 20px;
  }
  img{
      margin:5px 0;
    }
  .study_icon{
    width: 22px;
    height: 22px;
  }
  .mine_icon{
    width: 22px;
    height: 22px;
  }
</style>
<style>
  .navbar_{
    border-top: 1px solid #efefef!important;
  }
</style>



