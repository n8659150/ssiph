<template>
  <div class="main">
    <div class="container">
      <div class="search_index">
        <a class="logo logo_cn"></a>
        <div class="search_bar">
          <input type="text" v-model="keywords" class="search_key" placeholder="输入图号或机种名搜索" />
          <button class="search_btn" @click="fuzzyQuery()"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import queries from "./queries.vue";
import globalConsts from "./globalConsts.vue";
import auth from "./auth.vue";
export default {
  name: "mainContent",
  data() {
    return {
      keywords: ""
    };
  },
  methods: {
    fuzzyQuery() {
      // var fullUrl = globalConsts.serverUrl + globalConsts.globalSearch + "fuzzyQuery=" + this.keywords;
      let self = this;
      queries.fuzzyQuery(self.keywords).then(
        function successCallback(response) {
          console.log("搜索执行成功！");
          console.log(response.data.result);
          localStorage.setItem(
            "searchResults",
            JSON.stringify(response.data.result)
          );
          self.$router.push("/list");
        },
        function errorCallback(response) {
          console.log("搜索执行失败！");
          console.log(response);
        }
      );
      // console.log(queries.fuzzyQuery(this.keywords));
    }
  },
  mounted() {
    auth
      .isUserLogin()
      .then(res => console.log(res.data), res => console.log(res));
      if (localStorage.length === 0) {
		    this.$router.push('/login')
	    }
  }

};
</script>

<style>

</style>
