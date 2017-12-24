<template>
<div>
  <div class="loginWrapper">
    <div class="loginLogo">
        <img src="src/images/highly_nobg_cn.png" width="250" height="70" />
    </div>
    <p class="authMessage" v-show="message.length >= 1">{{message}}</p>
    <div class="loginForm">
        <form name="myForm" class="loginPadding">
            <hiLoginRawInput title="用户名" type="text" placeholder="请输入用户名" v-model="userName"></hiLoginRawInput>
            <hiLoginRawInput title="密码" type="password" placeholder="请输入密码" v-model="acctPswd"></hiLoginRawInput>
            <span class="signup"><a id="signup" href="javascript:void(0);">注册用户</a></span>
            <span class="forgot"><a id="iforget" href="javascript:void(0);">忘记密码</a></span>
            <hiLoginButton buttonText="登 录" :isDisabled="shouldBtnDisabled" @click.native="login(userName,acctPswd)"></hiLoginButton>
            <div class="version">{{version}}</div>
        </form>
    </div>
</div>
<loginFooter :footerText="footerText"></loginFooter> 
</div>
</template>

<script>
import queries from "../queries/queries.vue";
import auth from "../auth/auth.vue";
import globalConsts from "../globalConsts/globalConsts.vue";
import loginFooter from "../loginFooter/loginFooter.vue";
export default {
  name: "mainContent",
  components: {
    loginFooter
  },
  data() {
    return {
      message: "",
      userName: "",
      acctPswd: "",
      uNFocused: false,
      pWfocused: false,
      userExist: 1,
      footerText: "2016-2017 海立集团© 版权所有",
      version: "v0.10"
    };
  },
  computed: {
    loginStatus() {
      return localStorage.loginStatus.resultType;
    },
    shouldBtnDisabled() {
      if (this.userName.length <= 5 || this.acctPswd.length <= 5) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    clearMsg() {
      this.message = "";
    },
    gotoHomePage() {
      this.$router.push({ path: "/" });
    },
    boolUser(username) {
      console.log(username);
    },
    login(userName, acctPswd) {
      auth.userLogin(userName, acctPswd).then(
        response => {
          switch (response.data.resultType) {
            // 登录成功，将信息存到本地
            case "0":
              localStorage.setItem("userName", this.userName);
              localStorage.setItem(
                "loginStatus",
                JSON.stringify(response.data)
              );
              localStorage.setItem(
                "userInfo",
                JSON.stringify(response.data.result)
              );
              localStorage.setItem("isLogin", true);
              this.$store.commit(
                "setUserName",
                localStorage.getItem("userName")
              );
              this.message = response.data.message;
              setTimeout(this.gotoHomePage, 1000);
              break;
            default:
              this.message = response.data.message;
              setTimeout(this.clearMsg, 1000);
              break;
          }
        },
        response => {
          this.message = response.data.message;
        }
      );
    }
  }
};
</script>

<style>

</style>
