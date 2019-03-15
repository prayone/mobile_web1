<template>
  <div class="px_login">
    <yd-flexbox direction="vertical">
      <yd-flexbox-item>
        <div class="px_logo">
          <img src="/static/img/login_logo.png" alt="朴新网校">
        </div>
      </yd-flexbox-item>
      <yd-flexbox-item>
        <div>
          <yd-cell-group>
            <yd-cell-item>
              <yd-input slot="right"
                        v-model="ruleForm.phone"
                        ref="inputPhone"
                        :show-success-icon="false"
                        :show-error-icon="false"
                        required
                        regex="mobile"
                        placeholder="请输入手机号码"></yd-input>
            </yd-cell-item>
            <yd-cell-item>
              <yd-input slot="right"
                        type="password"
                        v-model="ruleForm.password"
                        ref="inputPassword"
                        required
                        :show-success-icon="false"
                        :show-error-icon="false"
                        placeholder="请输入密码"></yd-input>
            </yd-cell-item>
            <yd-cell-item style="display: none"></yd-cell-item>
            <p slot="bottom" class="px_error" v-html="result"></p>
          </yd-cell-group>
          <yd-button-group>
            <yd-button size="large" class="px_loginBtn" @click.native="clickHander">登录</yd-button>
          </yd-button-group>
          <router-link to="/loginRevise">
            <span class="px_forgetMM">忘记密码?</span>
          </router-link>
        </div>
      </yd-flexbox-item>
      <yd-flexbox-item>
        <div class="px_attention">
          <span class="px_tips"><img src="/static/img/login_tishi.png" alt="提示"></span>
          <span class="px_text">尊敬的用户，您好！朴新网校学习中心当前仅支持已付费用户使用，暂未开放用户自主注册功能。</span>
        </div>
      </yd-flexbox-item>
    </yd-flexbox>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        ruleForm: {
          phone: '',
          password: '',
        },
        result: ''
      }
    },
    methods: {
      clickHander() {
        const inputPhone = this.$refs.inputPhone;
        const errMsg = inputPhone.errorMsg;
        if (errMsg !== '') {
          this.result = '手机号'+ errMsg;
        } else {
          this.result = errMsg;
        }
      }
    }
  }
</script>
<style scoped lang="less">
  .px_login {
    padding: 0 20px;
    .px_logo {
      padding: 101px 162px 64px 0;
      img {
        width: 163px;
        height: 54px;
      }
    }
    .px_error {
      font-size: 14px;
      font-weight:400;
      color:rgba(255,16,16,1);
      line-height: 14px;
      color:#F00;
      padding: 9px 15px;
    }
    .yd-cell-item:first-child {
      margin-bottom: 28px;
    }
    .yd-button {
      padding: 0;
    }
    .yd-btn-block {
      margin-top: 0;
    }
    .px_loginBtn {
      width: 336px;
      height: 50px;
      background:rgba(50,171,252,1);
      border-radius: 4px;
      font-family:PingFangSC-Semibold;
      font-weight:600;
      color:rgba(255,255,255,1);
      font-size: 64px;
    }
    .px_forgetMM {
      float: right;
      margin-top: 15px;
      font-size: 14px;
      font-weight:400;
      color:rgba(50,171,252,1);
      line-height: 16px;
    }
    .px_attention {
      display: flex;
      margin-top: 45px;
      clear: both;
      font-size: 12px;
      font-weight:400;
      color:rgba(204,204,204,1);
      line-height: 20px;
      span {
        display: inline-block;
        flex-wrap: nowrap;
      }
      span.px_tips {
        padding-right: 3px;
        img {
          width: 13px;
          height: 13px;
        }
      }
      span.px_text {
        width: 325px;
        height: auto;
      }
    }
  }
</style>
