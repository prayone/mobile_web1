<template>
  <div class="editAddress">
    <div class="allInput">
      <p class="textInfo">收货人</p>
      <input type="text" placeholder="请填写收货人姓名" v-model="userName">
    </div>
    <div class="allInput">
      <p class="textInfo">手机号码</p>
      <input type="text" placeholder="请填写收货人手机号" v-model="phone">
    </div>
    <div class="allInput" @click="cityPopup = true">
      <p class="textInfo">所在地区</p>
      <input type="text" placeholder="请选择所在地区" v-model="cityAddress" readonly>
    </div>
    <div class="allInput">
      <p class="textInfo">详细地址</p>
      <input type="text" placeholder="街道、楼牌号等" v-model="addrDetail">
    </div>
    <div class="btn">
      保存
    </div>
     <!-- 省市区 -->
    <yd-cityselect v-model="cityPopup" :callback="result1" :items="district"></yd-cityselect>
  </div>
</template>
<script>
import District from 'ydui-district/dist/jd_province_city_area_id';
export default {
  data(){
    return {
      userName:'',
      phone:'',
      cityAddress:'',
      phone:'',
      cityPopup:false,
      addrDetail:'',
      district: District
    }
  },
  methods:{
    result1(ret) {
        this.cityAddress = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
    },
  }
}
</script>
<style lang="less" scoped>
  .editAddress{
      padding: 0 16px;
    .allInput{
      flex:1;
      display: flex;
      justify-content: flex-start;
      border-bottom: 1px solid #e6e6e6;
      padding:18px 0;
      .textInfo{
        font-size: 16px;
        color:#888;
        margin-right:20px;
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
<style>
input::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color: #ccc;
}
input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color:  #ccc;
}
input::-moz-placeholder { /* Mozilla Firefox 19+ */
   color:  #ccc;
}
input:-ms-input-placeholder { /* Internet Explorer 10-11 */
   color:  #ccc;
}
</style>


