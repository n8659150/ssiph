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
    async fuzzyQuery() {
      let response = await queries.fuzzyQuery(this.keywords);
      if (!response) {
        return;
      } else {
        let result = response.data.result;
        localStorage.setItem("recommendedResults",JSON.stringify(result.slice(0,7)))
        localStorage.setItem("searchResults", JSON.stringify(result));
        this.$store.commit("updateRecommendedResults",JSON.parse(localStorage.getItem('recommendedResults')))
        this.$store.commit("updateSearchResults", JSON.parse(localStorage.getItem('searchResults')));
        this.$router.push("/list");
      }
    }
  },
  mounted() {
    auth
      .isUserLogin()
      .then(
        res =>
          res.data.resultType === "1" ? this.$router.push("/login") : res.data,
        res => console.log(res)
      );
    if (localStorage.length === 0) {
      this.$router.push("/login");
    }
  }
};
</script>

<style>

</style>
