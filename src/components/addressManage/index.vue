<template>
  <div class="addressManage">
    <div class="addrList" @click="editAddr">
      <div class="addr">
        <p class="name">安琪拉</p>
        <p class="phone">18888888888</p>
      </div>
      <div class="address">
        <p class="address_name">北京朝阳区四环到五环之间 朝阳区亚运村大屯里小区106 号楼第22层2847</p>
        <p class="icon"></p>
      </div>
    </div>
    <div class="btn">
      + 新增收货地址
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  methods:{
    editAddr(){
      this.$router.push({
        path:'editAddress'
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .addressManage{
    padding:15px 18px;
    .addrList{
      border-bottom: 1px solid #e6e6e6;
      padding:14px 0;
      .addr{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 15px;
        color:#222;
        font-weight: 700;
        .name{
          margin-right: 21px;
        }
      }
      .address{
        font-size: 12px;
        color:#999;
        padding-top:7px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        .address_name{
          flex:1;
        }
        .icon{
          margin-left:40px;
          width: 23px;
          height: 23px;
          background: url(../../../static/img/icon_edit_wp.png) center center no-repeat;
          background-size: 100% 100%;
        }
      }
    }
    .btn{
      position: fixed;
      left:50%;
      margin-left:-170px;
      bottom:20px;
      width: 340px;
      height: 45px;
      background: #32ABFC;
      text-align: center;
      line-height: 45px;
      color: #fff;
    }
  }
</style>


