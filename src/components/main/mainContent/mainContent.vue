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
import queries from "@/helpers/queries/queries.vue";
import globalConsts from "@/helpers/globalConsts/globalConsts.vue";
// import auth from "../../auth/auth.vue";
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
    // auth
    //   .isUserLogin()
    //   .then(
    //     res =>
    //       res.data.resultType === "1" ? this.$router.push("/login") : console.log(res.data),
    //     res => console.log(res)
    //   );
    // if (localStorage.length === 0) {
    //   this.$router.push("/login");
    // }
  }
};
</script>

<style>
.search_index {
	margin-top: 214px
}

.search_index .logo {
	display: block;
	margin: 0 auto 45px;
	/*width: 135px;*/
	/*background: url(../../images/highly_nobg_cn.png) center top no-repeat;
	background: url(../../images/highly_nobg_cn.png) center top no-repeat\9;*/
	
}
.search_index .logo_cn {
	background: url("~@/images/highly_nobg_cn.png") center top no-repeat !important;
	background: url("~@/images/highly_nobg_cn.png") center top no-repeat\9;
	background-size: contain !important;
	width: 250px;
	height: 70px;
}

.search_index .logo_en {
	background: url("~@/images/highly_nobg_en.png") center top no-repeat!important;
	background: url("~@/images/highly_nobg_en.png") center top no-repeat\9;
	background-size: contain !important;
	width: 300px;
	height: 80px;
}
.search_index .search_bar {
	margin: 0 auto;
	padding: 0;
	width: 668px;
	height: 50px;
	background: 0 0
}

.search_index .search_bar .drop_menu .drop_menu_toggle,.search_index .search_bar .drop_menu a {
	padding: 0 21px 0 20px;
	min-width: 40px;
	line-height: 48px
}

.search_index .search_bar .search_key {
	width: 586px;
	height: 48px;
	border-color: #0071bf;
	line-height: 48px
}

.search_index .search_bar .search_btn {
	margin-left: 0;
	height: 50px
}

/*.search_index .search_bar .search_btn:hover {
	background-color: #317ef3
}*/

.search_bar {
	min-width: 30px;
	line-height: 38px
}

.search_bar .search_key {
	float: left;
	margin-left: -1px;
	padding: 0 10px;
	width: 320px;
	height: 38px;
	outline: 0;
	border: 1px solid #dfdfdf;
	line-height: 38px
}

.search_bar .search_btn {
	width: 60px;
	height: 40px;
	outline: 0;
	border: none;
	background: #0071bf url("~@/images/searchIcon.png") center no-repeat;
	background: #0071bf url("~@/images/searchIcon.png") center no-repeat\9;
	color: #fff;
	font-size: 14px;
	cursor: pointer
}

/*.search_bar .search_btn:hover {
	background-color: #317ef3
}*/

</style>
