<template>
  <div class="revise_pwd">
    <div class="pwd_input">
      <div class="pwd_item">
        <input type="text" v-model="pwd.oldPwd" placeholder="原始密码"  v-if="openEyes"/>
        <input type="password" v-model="pwd.oldPwd" placeholder="原始密码" v-else/>
        <div class="pwd-icon" @click="handleClickEyes">
          <img src="/static/img/open_eye.png" alt="openEyes" v-if="openEyes">
          <img src="/static/img/close_eye.png" alt="openEyes" v-else>
        </div>
      </div>
      <div class="pwd_item">
        <input type="text" v-model="pwd.newPwd" placeholder="请输入新密码" @focus="handleClickNewPwd"/>
      </div>
      <div class="pwd_item">
        <input type="text" v-model="confirmPwd" placeholder="确认密码" @focus="handleClickConfirmPwd"/>
      </div>
    </div>
    <div class="pwd_save" @click="handlSaveInfo" :class="isSave ? 'pwd_saveYes' : 'pwd_saveNo'">
      <div class="pwd_btn">保存</div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        pwd: {
          oldPwd: '',       // 原始密码
          newPwd: '',       // 新密码
        },
        confirmPwd: '',   // 确认密码
        openEyes: false,    // 原始密码显示不可见
        isSave: false,      // 是否可以保存修改
      }
    },
    watch: {
      confirmPwd(value) {
        this.confirmPwd = value;
        if (this.pwd.oldPwd !== '' && this.pwd.newPwd !== '' && this.confirmPwd !== '') {
          this.isSave = true;
        } else {
          this.isSave = false;
        }
      }
    },
    methods: {
      // 原始密码是否显示可见
      handleClickEyes() {
        this.openEyes = !this.openEyes;
      },

      // 新密码获取焦点事件
      handleClickNewPwd() {
        if(this.pwd.oldPwd === '') {
          this.$dialog.confirm({
            mes: '请先输入原始密码！',
            opts: [
              {
                txt: '确定',
                color: true,
                callback: () => {
                  // this.$dialog.toast({mes: '你点了确定', timeout: 1000});
                }
              }
            ]
          });
        }
      },

      // 确认密码获取焦点事件
      handleClickConfirmPwd() {
        if(this.pwd.oldPwd === '') {
          this.$dialog.confirm({
            mes: '请先输入原始密码！',
            opts: [
              {
                txt: '确定',
                color: true,
                callback: () => {}
              }
            ]
          });
        } else if (this.pwd.newPwd === '') {
          this.$dialog.confirm({
            mes: '请先输入新密码！',
            opts: [
              {
                txt: '确定',
                color: true,
                callback: () => {}
              }
            ]
          });
        }
      },

      // 保存密码
      handlSaveInfo() {

      },
    },
  }
</script>
<style scoped lang="less">
  .revise_pwd {
    .pwd_title {
      display: flex;
      padding: 10px 15px;
      border-bottom: 1px solid #E6E6E6;
      span {
        width: 24px;
        height: 24px;
        display: inline-block;
        img {
          width: 100%;
          height: 100%;
        }
      }
      h5 {
        font-size:18px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(34,34,34,1);
        line-height:25px;
        margin: 0 auto;
      }
    }
    .pwd_input {
      padding: 0 15px;
      .pwd_item {
        display: flex;
        border-bottom: 1px solid #E6E6E6;
        padding-bottom: 22px;
        padding-top: 19px;
        input {
          width: 95%;
        }
        .pwd-icon {
          width: 20px;
          height: 20px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .pwd_save {
      width:345px;
      height:45px;
      border-radius:4px;
      margin: 0 auto;
      text-align: center;
      margin-top: 50px;
      .pwd_btn {
        font-size:16px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:45px;
      }
    }
    .pwd_saveYes {
      background:rgba(50,171,252,1);
    }
    .pwd_saveNo {
      background:rgba(221,221,221,1);
    }
  }
</style>
