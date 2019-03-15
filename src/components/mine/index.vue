<template>
  <div class="homePage">
    <tabbar :active_mine='true' mine_icon='static/img/mine_active.png'></tabbar>
    <div class="personInfo" @click="editInfo">
      <div class="headerInfo">
        <div class="header_img">
          <img src="../../../static/img/banner001.jpg" alt="">
        </div>
        <div class="header_info">
          <p class="userName">安琪拉安琪拉安琪拉安琪拉安琪拉安琪拉安琪拉安琪拉</p>
          <p class="grade">二年级</p>
        </div>
      </div>
      <div class="arrow"></div>
    </div>
    <div class="itemList">
      <div class="item" v-for="(item,index) in itemList" :key="index" @click="handle(item.sort)">
        <p class="text">{{item.text}}</p>
        <p class="arrow"></p>
      </div>
    </div>
    <yd-popup v-model="phonePopup" position="center" width="80%">
      <div class="phoneCont">
        <div class="phoneNum">
            010-62621652
        </div> 
        <div class="phone_btn">
          <p class="cancle" @click="phonePopup = false">取消</p>
          <a href="tel:010-62621652" class="call">呼叫</a>
        </div>
      </div>
    </yd-popup>
  </div>
</template>
<script>
import tabbar from '../base/tabbar'
export default {
  components:{
    tabbar
  },
  data(){
    return{
      itemList:[
        {text:'我的课程',sort:'wdkc'},
        {text:'我的订单',sort:'wddd'},
        {text:'如何上课',sort:'rhsk'},
        {text:'客服中心',sort:'kfzx'},
        {text:'关于朴新网校',sort:'gypxwx'},
      ],
      phonePopup:false
    }
  },
  methods:{
    editInfo(){
      this.$router.push({
        path:'personInfo'
      })
    },
    handle(sort){
      if(sort == 'wddd'){
        this.$router.push({
          path:'order'
        })
      } else if(sort == 'kfzx'){
        this.phonePopup = true
      } else if(sort == 'rhsk'){
        this.$router.push({
          path:'attendClass'
        })
      } else if(sort == 'wdkc'){
        this.$router.push({
          path:'study'
        })
      } else if(sort == 'gypxwx'){
        this.$router.push({
          path:'/'
        })
      }
    },
  }
}
</script>
<style lang="less" scoped>
  .homePage{
    .arrow{
      width: 18px;
      height: 18px;
      background: url('../../../static/img/arrow_wp.png');
      background-size: 100% 100%;
    }
    .personInfo{
      border-radius:0 0 26px 26px;
      box-shadow: 0px 5px 14px #f3f3f3;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding:26px 15px;
      margin-bottom:10px;
      .headerInfo{
        display: flex;
        justify-content: center;
        align-items: center;
        .header_img{
          margin-right:20px;
          width: 72px;
          height: 72px;
          img{
            width: 100%;
            height: 100%;
            border-radius: 100%;
          }
        }
        .header_info{
          .userName{
            color: #333333;
            font-size: 20px;
            font-weight: 600;
            color:#333;
            max-width: 180px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;  //溢出不换行
          }
          .grade{
            color: #999;
            font-size: 16px;
            margin-top:10px;
          }
        }
      }
      
    }
    .itemList{
      padding:0 15px;
      .item{
        padding:18px 0;
        font-size: 16px;
        color: #333333;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom:1px solid #f5f5f5;
      }
    }
    .phoneCont{
      background: #fff;
      border-radius: 10px;
      .phoneNum{
        text-align: center;
        padding: 19px 0;
        color: #000;
        font-size: 20px;
        border-bottom: 1px solid #dfdfdf;
      }
      .phone_btn{
        overflow: hidden;
        display: flex;
        align-items: center;
        font-size: 17px;
        color:#0099FF;
        .cancle{
          width: 48%;
          text-align: center;
          border-right:1px solid #f2f2f2;
          padding:16px 0;
        }
        .call{
          width: 48%;
          text-align: center;
          padding:16px 0;
        }
      }
    }
  }
</style>


