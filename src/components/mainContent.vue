<template>
  <div class="main">
    <div class="container">
      <div class="search_index">
        <a class="logo logo_cn"></a>
        <div class="search_bar">
          <input type="text" v-model="keywords" class="search_key" @click="fakeLogin()" placeholder="输入图号或机种名搜索" />
          <button class="search_btn" @click="fuzzyQuery()"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import queries from './queries.vue';
import globalConsts from './globalConsts.vue'
export default {
  name: 'mainContent',
  data() {
    return {
      keywords: ''
    }
  },
  methods: {
    fakeLogin() {
      // 模拟登录
      var loginUrl = 'http://210.13.98.37:8080/hpiss/user/login.action?loginName=useradmin&acctPswd=useradmin'
      this.$http.jsonp(loginUrl, { jsonp: "callback" }).then(
        function successCallback(response) {
          console.log("登录成功");
          // console.log(localStorage.searchResults)
          console.log(response.data);
        },
        function errorCallback(response) {
          console.log("登录失败！");
          console.log(response);
        });
    },
    fuzzyQuery() {
      // var fullUrl = globalConsts.serverUrl + globalConsts.globalSearch + "fuzzyQuery=" + this.keywords;
        queries.fuzzyQuery(this.keywords).then(
          function successCallback(response) {
            console.log("搜索执行成功！");
            localStorage.searchResults = response.data.result;
            console.log(localStorage.searchResults)
          },
          function errorCallback(response) {
            console.log("搜索执行失败！");
            console.log(response);
          });
      // console.log(queries.fuzzyQuery(this.keywords));
    }
  }

}
</script>

<style>

</style>
