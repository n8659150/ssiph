<script type="text/javascript">
import globalConsts from "./globalConsts.vue";
import Vue from "vue";
import VueResource from "vue-resource";
Vue.use(VueResource);
// 用户查重
function boolUser(username) {
  var fullUrl =
    globalConsts.serverUrl + globalConsts.booleanUser + "userName=" + username;
  return Vue.http.jsonp(fullUrl, { jsonp: "callback" });
}
// 注册
function register(params) {
  var fullUrl =
    globalConsts.serverUrl + globalConsts.insertUser + params.join("&");
  return Vue.http.jsonp(fullUrl, { jsonp: "callback" });
}
// 登录
function userLogin(username, password) {
  var fullUrl =
    globalConsts.serverUrl +
    globalConsts.login +
    "loginName=" +
    username +
    "&acctPswd=" +
    password;
  return Vue.http.jsonp(fullUrl, { jsonp: "callback" });
}
// 登出
function userLogout(username, password) {
  var fullUrl =
    globalConsts.serverUrl +
    globalConsts.logout +
    "loginName=" +
    username +
    "&acctPswd=" +
    password;
  return Vue.http.jsonp(fullUrl, { jsonp: "callback" });
}

// session 验证
function isUserLogin() {
  var fullUrl = globalConsts.serverUrl + globalConsts.isLogin;
  return Vue.http.jsonp(fullUrl, { jsonp: "callback" });
}

export default {
  boolUser,
  register,
  userLogin,
  userLogout,
  isUserLogin
};
</script>
