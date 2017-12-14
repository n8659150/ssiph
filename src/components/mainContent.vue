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
        if(!response) {
          return 
        } else {
          let result = response.data.result
          localStorage.setItem(
            "searchResults",
            JSON.stringify(response.data.result)
          );
          this.$router.push("/list");
        }
    }
  },
  mounted() {
    (async function loginCheck(self) {
      let response = await auth.isUserLogin();
      if(!response) {
        return
      } else {
        (response.data.resultType === '1')?(self.$router.push('/login')):(console.log(response.data.message))
      }
      
    })(this)
    
  }

};
</script>

<style>

</style>
