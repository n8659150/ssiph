<template>
  <div class="main">
    <div class="container">
      <div class="search_index">
        <a class="logo logo_cn"></a>
        <div class="search_bar">
          <!-- <input type="text" v-model="keywords" class="search_key" @click="fakeLogin()" placeholder="输入图号或机种名搜索" /> -->
          <input type="text" v-model="keywords" class="search_key" placeholder="输入图号或机种名搜索" />
          <button class="search_btn" @click="fuzzyQuery()"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import queries from './queries.vue';
import globalConsts from './globalConsts.vue'
import auth from './auth.vue'
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
      var loginUrl = 'http://172.18.88.189:8080/hpiss/user/login.action?loginName=useradmin&acctPswd=useradmin'
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
        let self = this;
        queries.localFuzzyQuery(self.keywords)
        .then(res => res.json())
        .then(data => {
          console.log(data.result)
          localStorage.setItem('searchResults',JSON.stringify(data.result));
          self.$router.push('/list')
          }
        )
    }
    // fuzzyQuery() {
    //   // var fullUrl = globalConsts.serverUrl + globalConsts.globalSearch + "fuzzyQuery=" + this.keywords;
    //     let self = this;
    //     queries.fuzzyQuery(self.keywords).then(
    //       function successCallback(response) {
    //         console.log("搜索执行成功！");
    //         console.log(response.data.result)
    //         localStorage.setItem('searchResults',JSON.stringify(response.data.result));
    //         self.$router.push('/list')

    //       },
    //       function errorCallback(response) {
    //         console.log("搜索执行失败！");
    //         console.log(response);
    //       });
    //   // console.log(queries.fuzzyQuery(this.keywords));
    // }
  },
  mounted(){
    let isOnline = auth.localIsUserLogin('useradmin');
    console.log(isOnline);
    // isOnline?(console.log('still online')):(this.$router.push('/login'));
  }

}
</script>

<style>

</style>
