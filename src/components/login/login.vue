<template>
<div>
  <div class="loginWrapper">
    <div class="loginLogo">
        <img src="~@/images/highly_nobg_cn.png" width="250" height="70" />
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
import queries from "@/helpers/queries/queries.vue";
import auth from "@/helpers/auth/auth.vue";
import globalConsts from "@/helpers/globalConsts/globalConsts.vue";
import loginFooter from "./loginFooter/loginFooter.vue";
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
      auth
        .userLogin(userName, acctPswd)
        .then(response => response.json())
        .then(
          response => {
            // switch (response.data.resultType) {
            //   // 登录成功，将信息存到本地
            //   case "0":
            //     localStorage.setItem("userName", this.userName);
            //     localStorage.setItem(
            //       "loginStatus",
            //       JSON.stringify(response.data)
            //     );
            //     localStorage.setItem(
            //       "userInfo",
            //       JSON.stringify(response.data.result)
            //     );
            //     localStorage.setItem("isLogin", true);
            //     this.$store.commit(
            //       "setUserName",
            //       localStorage.getItem("userName")
            //     );
            //     this.message = response.data.message;
            //     setTimeout(this.gotoHomePage, 1000);
            //     break;
            //   default:
            //     this.message = response.data.message;
            //     setTimeout(this.clearMsg, 1000);
            //     break;
            // }
            switch (response.resultType) {
              // 登录成功，将信息存到本地
              case "0":
                localStorage.setItem("userName", this.userName);
                localStorage.setItem("loginStatus", JSON.stringify(response));
                localStorage.setItem(
                  "userInfo",
                  JSON.stringify(response.result)
                );
                localStorage.setItem("isLogin", true);
                this.$store.commit(
                  "setUserName",
                  localStorage.getItem("userName")
                );
                this.message = response.message;
                setTimeout(this.gotoHomePage, 1000);
                break;
              default:
                this.message = response.message;
                setTimeout(this.clearMsg, 1000);
                break;
            }
          }
          // response => {
          //   this.message = response.data.message;
          // }
        );
    }
  }
};
</script>

<style>
.loginWrapper {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 403px;
  /*margin: 0 auto;*/
  height: 375px;
  /*margin-top: 98px;*/
}

.loginLogo {
  text-align: center;
  /*margin-bottom: 25px;*/
  margin-bottom: 20px;
  width: 390px;
}
.loginLogo_marginfix {
  margin-bottom: 10px !important;
}
.loginForm {
  background: url("~@/images/login_form_bg.png") no-repeat;
  background: url("~@/images/login_form_bg.png") no-repeat\9;
  height: 302px;
  overflow: hidden;
}

.loginPadding {
  padding: 28px 47px 20px 47px;
}

.loginForm h2 {
  color: #4f5d80;
  /*text-transform: uppercase;*/
  font-size: 14px;
  height: 19px;
  font-weight: normal;
  margin-bottom: 6px;
}

.loginForm input.txt_input {
  width: 295px;
  height: 36px;
  border: 1px solid #cad2db;
  /*background: url(../../images/txt_input_bg.gif) no-repeat;*/
  padding: 0 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  line-height: 36px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #717171;
  font-family: Arial;
}

.loginForm span.signup {
  font-size: 12px;
  height: 16px;
  float: left;
  margin-top: 5px;
  margin-bottom: 20px;
}

.loginForm span.forgot {
  font-size: 12px;
  height: 16px;
  float: right;
  margin-top: 5px;
  margin-bottom: 20px;
}

.loginForm span.login {
  font-size: 12px;
  float: right;
  margin-bottom: 15px;
}
.loginForm .version {
  float: right;
  margin-top: 12px;
  color: #333;
  font-size: 11px;
}
.rem_sub input.loginButton {
  width: 309px;
  height: 32px;
  background-color: #0071bf;
  /*background:url("../../images/btn_bg.png") repeat-x;*/
  border: none;
  color: #fff;
  padding-bottom: 2px;
  font-size: 16px;
  font-weight: bold;
}
.loginForm span.enVer {
  font-size: 12px;
  float: right;
  margin-top: 10px;
}

.enVer {
  float: right;
  margin-right: 25px;
}
</style>
