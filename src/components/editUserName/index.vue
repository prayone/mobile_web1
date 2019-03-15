<template>
  <div class="editUserName">
    <div class="all">
      <div class="allInput">
        <p class="userName">昵称</p>
        <input type="text" placeholder="请输入昵称" v-model="userName">
      </div>
      <span class="icon" @click="clear"></span>
    </div>
    <div class="btn">
      保存
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      userName:''
    }
  },
  methods:{
    clear(){
      this.userName = ''
    }
  }
}
</script>
<style lang="less" scoped>
  .editUserName{
    padding:40px 25px 0 20px;
    .all{
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom:1px solid #f2f2f2;
      padding-bottom:20px;
      .allInput{
        flex:1;
        display: flex;
        justify-content: flex-start;
        .userName{
          font-size: 16px;
          color:#888;
          margin-right:20px;
        }
      }
      .icon{
        width: 15px;
        height: 15px;
        background: url(../../../static/img/login_del.png) center center no-repeat;
        background-size: 100% 100%;
      }
    }
    .btn{
      margin:70px auto;
      width: 340px;
      height: 45px;
      background: #32ABFC;
      text-align: center;
      line-height: 45px;
      color: #fff;
      border-radius: 5px;
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



