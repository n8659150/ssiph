<template>
<div>
  <div class="signupWrapper">
    <div class="loginLogo">
        <img src="~@/images/highly_nobg_cn.png" width="250" height="70" />
    </div>
    <p class="authMessage" v-show="message.length >= 1">{{message}}</p>
    <div class="signupForm">
        <form name="myForm" class="signupPadding">
            <hiLoginRawInput title="用户名" type="text" placeholder="长度5~16个字符" v-model="userName"></hiLoginRawInput>
            <hiLoginRawInput title="密码" type="password" placeholder="长度5~16个字符" v-model="acctPswd"></hiLoginRawInput>
            <hiLoginRawInput title="确认密码" type="password" placeholder="请确认密码" v-model="confirmPswd"></hiLoginRawInput>
            <hiLoginRawInput title="邮箱地址" type="email" placeholder="推荐使用163邮箱" v-model="email"></hiLoginRawInput>
            <hiLoginRawInput title="公司名称" type="text" placeholder="请输入完整公司名" v-model="companyName"></hiLoginRawInput>
            <hiLoginRawInput title="职位" type="text" placeholder="请输入职位名称"></hiLoginRawInput>
            <hiLoginRawInput title="手机号码" type="text" placeholder="海外手机请加区号" v-model="mobilePhone"></hiLoginRawInput>
            <hiLoginDropDown title="性别" :options="genderOption" v-model="gender"></hiLoginDropDown>
            <!-- <span class="signup"><a id="signup" href="javascript:void(0);">注册用户</a></span> --><span>{{shouldBtnDisabled}}</span>
            <span class="login"><router-link to="/login" id="iforget" >我有账号，直接登录</router-link></span>
            <hiLoginButton buttonText="注册新用户" :isDisabled="shouldBtnDisabled" @click.native="register()"></hiLoginButton>
        </form>
    </div>
</div>
<signupFooter :footerText="footerText"></signupFooter> 
</div>
</template>

<script>
import queries from "@/helpers/queries/queries.vue";
import auth from "@/helpers/auth/auth.vue";
import globalConsts from "@/helpers/globalConsts/globalConsts.vue";
import signupFooter from "./signupFooter/signupFooter.vue";
export default {
  name: "signup",
  components: {
    signupFooter
  },
  data() {
    return {
      message: "",
      userName: "",
      acctPswd: "",
      confirmPswd:"",
      email:"",
      companyName:"",
      mobilePhone:"",
      gender:0,
      uNFocused: false,
      pWfocused: false,
      userExist: 1,
      footerText: "2017-2018 海立集团© 版权所有",
      genderOption:[
          { name: "男", value: 0 },
          { name: "女", value: 1 }
      ],
      authParams:{}
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
    gotoLoginPage() {
      this.$router.push('/login')
    },
    boolUser(username) {
      console.log(username);
    },
    register(params) {
      this.authParams['userName'] = auth.setParams(this.userName);
      this.authParams['acctPswd'] = auth.setParams(this.acctPswd);
      this.authParams['emailAddress'] = auth.setParams(this.email);
      this.authParams['company'] = auth.setParams(this.companyName);
      this.authParams['mobilePhone'] = auth.setParams(this.mobilePhone);
      this.authParams['birthday'] = '1970-1-1';
      this.authParams['gender'] = auth.setParams(this.gender);
      console.log(this.authParams);
      let registerParams = auth.paramsParser(this.authParams);
      auth.register(registerParams).then(
            (response) => {
                console.log("用户注册，执行成功");
                console.log(response.data.resultType);
                this.message = response.data.message;
                if (response.data.resultType == 0) {
                   setTimeout(this.gotoLoginPage, 2000);
                }
            },
            (response) => {
                console.log("检测用户是否已注册，执行失败！");
                this.message = "注册失败，请检查网络连接";
            })
      // auth.userLogin(userName, acctPswd).then(
      //   response => {
      //     switch (response.data.resultType) {
      //       // 登录成功，将信息存到本地
      //       case "0":
      //         localStorage.setItem("userName", this.userName);
      //         localStorage.setItem(
      //           "loginStatus",
      //           JSON.stringify(response.data)
      //         );
      //         localStorage.setItem(
      //           "userInfo",
      //           JSON.stringify(response.data.result)
      //         );
      //         localStorage.setItem("isLogin", true);
      //         this.$store.commit(
      //           "setUserName",
      //           localStorage.getItem("userName")
      //         );
      //         this.message = response.data.message;
      //         setTimeout(this.gotoHomePage, 1000);
      //         break;
      //       default:
      //         this.message = response.data.message;
      //         setTimeout(this.clearMsg, 1000);
      //         break;
      //     }
      //   },
      //   response => {
      //     this.message = response.data.message;
      //   }
      // );
    }
  }
};
</script>

<style>
.signupWrapper {
  position: absolute;
  /*top:30%;*/
  top: 25%;
  left: 50%;
  margin-top: -180.5px;
  margin-left: -201.5px;
  width: 403px;
  /*margin: 0 auto;*/
  height: 720px;
  /*margin-top: 98px;*/
}

.loginLogo {
	text-align: center;
	/*margin-bottom: 25px;*/
	margin-bottom: 20px;
	width: 390px;
}

.loginLogo_marginfix {
	margin-bottom:10px !important;
}

.signupForm {
  background: url("../../images/signup_form_bg.png") no-repeat;
  background: url("../../images/signup_form_bg.png") no-repeat\9;
  height: 720px;
  overflow: hidden;
}

.signupErrorMsg {
  color: red;
  display: inline-block;
  margin-bottom: 5px;
}

.signupPadding {
  padding: 28px 40px 20px 40px;
}
/*.selectGender {
	display:inline-block;
	margin-top:4px;
	margin-bottom:10px;
	padding-right:20px;
}*/

/*.selectGender input[type="radio"] {
	margin:0 5px;
}*/

.signupForm h2 {
  color: #4f5d80;
  font-size: 14px;
  height: 19px;
  font-weight: normal;
  margin-bottom: 6px;
}
.requiredIcon {
  display: inline-block;
  color: red;
  font-size: 18px;
  margin-left: 5px;
  vertical-align: middle;
}

.signupForm input.txt_input {
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
.signupForm select.gender_select {
  width: 307px;
  height: 36px;
  border: 1px solid #cad2db;
  /* background: url(../../images/txt_input_bg.gif) no-repeat; */
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

.signupForm select.birth_select {
  width: 70px;
  height: 36px;
  border: 1px solid #cad2db;
  /* background: url(../../images/txt_input_bg.gif) no-repeat; */
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
.signupForm select.width_50 {
  width: 50px !important;
}
.signupForm span.signup {
  font-size: 12px;
  float: left;
  height: 16px;
  margin-bottom: 15px;
}

.signupForm span.login {
  font-size: 12px;
  float: right;
  margin-bottom: 15px;
}
.normalPosition {
  position: static !important;
}
.signupForm .version {
	float: right;
	margin-top:12px;
	color: #333;
	font-size:11px;
}
</style>
