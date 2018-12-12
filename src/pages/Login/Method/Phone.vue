<template>
  <div class="content">
    <input type="text" class="num" placeholder="请输入手机号码" maxlength="11" v-model="phoneNumber">
    <div class="line"></div>
    <div class="msg">
      <input type="text" class="code" placeholder="请输入短信验证码" maxlength="6" v-model="code">
      <button @click="getCode">获取验证码</button>
    </div>
    <div class="line"></div>
    <div class="err" v-show="errorMessage">{{errorMessage}}</div>
    <div class="other">
      <div class="question">遇到问题</div>
      <div class="loginForPWD"  @click="$router.replace('/login/login_method/email')">使用邮箱登录</div>
    </div>
    <div class="login"  @click="handleLogin">登录</div>
    <div class="otherFun" @click="$router.replace('/login')">其他登录</div>
  </div>
</template>

<script>
  import {Toast, MessageBox} from 'mint-ui'
  import {reqSendCode, reqPwdLogin, reqSmsLogin} from '../../../api/index'

  export default {
    name: "PhoneLogin",
    data(){
      return{
        phoneNumber:'',
        errorMessage:'',
        code:'',
      }
    },
    computed:{
      isRightNumber(){
        return /^1\d{10}$/.test(this.phoneNumber)
      }
    },
    methods:{
      //发送验证码
      async getCode(){
        if(this.isRightNumber){
          console.log("发送验证码中");
          const result = await reqSendCode(this.phoneNumber)
          if(result.code === 0){
            Toast('发送验证码成功')
          }else {
            MessageBox.alert("发送验证失败")
          }
        }else {
          return MessageBox.alert('手机号码格式不正确')
        }

      },

      async handleLogin(){
        const {phoneNumber, code, isRightNumber} = this

        if(!this.isRightNumber){
          return MessageBox.alert('手机号码格式不正确')
        }
        if(this.code.length !== 6){
          return MessageBox.alert('验证码格式不正确')
        }
        console.log(phoneNumber, code);
        let  result = await reqSmsLogin(phoneNumber, code);

        if(result.code ===0 ){
          // 保存user
          const user = result.data
          this.$store.dispatch('saveUser',user)
          this.$router.replace('/personal')
          MessageBox.alert('登录成功')
        }else {
          MessageBox.alert('登录请求失败')
        }

      }
    }
  }
</script>

<style scoped lang="stylus">
    .content
      padding: 0 0.555556rem;
      position: relative;
      padding-top: 1.6rem;
      /*display flex*/
      /*justify-content center */
      .num, .code
        width: 8.27rem;
        height: 0.6rem;
        font-size: 0.4rem;
        line-height: 0.6rem;
        margin: 0.39rem 0;
        padding-left: 0;
        -webkit-tap-highlight-color: transparent;
        letter-spacing: normal;
        outline none
      .line
        width 100%
        height 1px
        background-color #f3f3f3
      .err
        color: red !important;
        font-size: 0.4rem;
        line-height: 0.6rem;
        width 100%
        text-align center
      .msg
        display flex
        justify-content center
        align-content center
        .code
          width: 8.27rem;
          height: 0.6rem;
          font-size: 0.4rem;
          line-height: 0.6rem;
          margin: 0.39rem 0;
          padding-left: 0;
          -webkit-tap-highlight-color: transparent;
          letter-spacing: normal;
          outline none
        button
          flex-shrink 0
          display: block;
          width: 2.3rem;
          height: 0.75rem;
          text-align: center;
          color: #333;
          font-size: 14px;
          background: #fff;
          line-height: 0.75rem;
          border: 1px solid #7F7F7F;
          border-radius: 4px;
          margin-top: 0.28rem;
          &on
            color: #333;

      .other
        height: 0.582rem;
        line-height: 0.582rem;
        padding: 0.533rem 0 2.24rem;
        display flex
        justify-content space-between
        .question
          float: left !important;
          height: 0.6rem;
          text-decoration: none;
          cursor: pointer;
          color: #7f7f7f !important;
          font-size: 0.4rem;
          line-height: 0.6rem;

        .loginForPWD
          background: none;
          color: #333;
          font-size: 0.4rem;
          height: 0.6rem;
          padding: 0;
          line-height: 0.6rem;

      .login
        margin-bottom: .42667rem;
        border-radius: 2px
        display: block;
        width: 100%;
        height: 1.25333rem;
        line-height: 1.25333rem;
        vertical-align: middle;
        text-align: center;
        font-size: .37333rem;
        color: #fff;
        border: 1px solid #b4282d;
        background-color: #b4282d;
        overflow: hidden;
      .otherFun
        margin-bottom: .42667rem;
        border-radius: 2px;
        display: block;
        width: 100%;
        height: 1.25333rem;
        line-height: 1.25333rem;
        border: 1px solid #b4282d;
        color: #b4282d;
        background-color: transparent;
        vertical-align: middle;
        text-align: center;
        font-size: .37333rem;
        overflow: hidden;
</style>
