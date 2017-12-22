<template>
	<div class="main">
		<div class="container">
			<div class="keywords-title">
				<h2>搜索结果</h2>
			</div>
			<div class="list-main">
				<div class="result-wrap">
					<ul class="list-tab-nav">
						<li :class="{'tab-active':showRecommendedResults}">
							<a @click="toggleSearchResults('recommended')" href="javascript:void(0)">推荐结果</a>
						</li>
						<li :class="{'tab-active':showAllResults}">
							<a @click="toggleSearchResults('all')" href="javascript:void(0)">所有结果</a>
						</li>
					</ul>
					<div class="list-search-input-wrapper">
						<input type="text" class="list-search-inputarea" placeholder="在结果中筛选" value="">
					</div>

					<div class="list-table">
						<div class="list-table-header">
							<table class="tablebox">
								<thead class="list-table-thead">
									<tr class="list-table-tr">
										<th class="list-table-th col-wd-150">
											<div>
												<span>名称</span>
											</div>
										</th>
										<th class="list-table-th">
											<div>
												<span>领域</span>
											</div>
										</th>
										<th class="list-table-th">
											<div>
												<span>特性</span>
											</div>
										</th>
										<th class="list-table-th col-wd-175">
											<div>
												<span>电源</span>
											</div>
										</th>
										<th class="list-table-th">
											<div>
												<span>冷量</span>
											</div>
										</th>
										<th class="list-table-th">
											<div>
												<span>排气量</span>
											</div>
										</th>
										<th class="list-table-th">
											<div>
												<span>COP</span>
											</div>
										</th>
										<th class="list-table-th">
											<div>
												<span>冷媒</span>
											</div>
										</th>
										<th class="list-table-th">
											<div>
												<span>测试工况</span>
											</div>
										</th>
									</tr>
								</thead>
							</table>
						</div>
						<div class="list-table-body">
							<table class="tablebox">
								<tbody class="list-table-tbody">
									<!-- <div ng-show="$storage.searchResults.length == 0 || $storage.resultType != 0" style="height:54px;line-height:54px;text-align:center;border-bottom:1px solid #e6ebf2">
											<span style="vertical-align:middle;">{{'NORESULT' | translate}}</span> <a style="font-size:12px;vertical-align:middle"
											 ui-sref="frame.home">{{'SEARCHAGAIN' | translate}}</a>
										</div>
										<div ng-show="(([$storage.recommendedResults] | filter:modelFilter).length == 0) && showRecommended.active == true" style="height:54px;line-height:54px;text-align:center;border-bottom:1px solid #e6ebf2">
											<span style="vertical-align:middle;">{{'NORESULT' | translate}}</span> <a style="font-size:12px;vertical-align:middle">{{'KEYWORDCHECK' | translate}}</a>
										</div>
										<div ng-show="(([$storage.searchResults] | filter:modelFilter).length == 0) && showAll.active == true" style="height:54px;line-height:54px;text-align:center;border-bottom:1px solid #e6ebf2">
											<span style="vertical-align:middle;">{{'NORESULT' | translate}}</span> <a style="font-size:12px;vertical-align:middle">{{'KEYWORDCHECK' | translate}}</a>
										</div> -->
										{{recommendedResults.length}}
									<tr v-show="showRecommendedResults" class="list-table-tr" v-for="(result,key,index) in recommendedResults">
										<!-- 名称 -->
										<td class="list-table-td col-wd-150">
											<div>
												<!-- <span><a ui-sref="frame.detail({id:result.id})">{{result.productName}}</a></span> -->
												<span>
													<a href="javascript:void(0)" @click="queryById(result.id)">{{result.productName}}</a>
												</span>
											</div>
										</td>
										<!-- 领域 -->
										<td class="list-table-td">
											<div>
												<span>{{result.territory}}</span>
											</div>
										</td>
										<!-- 特性 -->
										<td class="list-table-td">
											<div>
												<span>{{result.productType}}</span>
											</div>
										</td>
										<!-- 电源 = 电压+频率+相数 -->
										<td class="list-table-td col-wd-175">
											<div>
												<span>{{result.dianyuan}}</span>
											</div>
										</td>
										<!-- 冷量 -->
										<td class="list-table-td">
											<div>
												<span>{{result.lengliang}}</span>
											</div>
										</td>
										<!-- 排气量 -->
										<td class="list-table-td">
											<div>
												<span>{{result.paiqiliang}}</span>
											</div>
										</td>
										<!-- COP -->
										<td class="list-table-td">
											<div>
												<span>{{result.cop}}</span>
											</div>
										</td>
										<!-- 冷媒 -->
										<td class="list-table-td">
											<div>
												<span>{{result.lengmei}}</span>
											</div>
										</td>
										<!-- 测试工况 -->
										<td class="list-table-td">
											<div>
												<span>{{result.capMeasCond}}</span>
											</div>
										</td>
									</tr>

									<tr v-show="showAllResults" class="list-table-tr" v-for="(result,key,index) in currentSearchResults">
										<!-- 名称 -->
										<td class="list-table-td col-wd-150">
											<div>
												<!-- <span><a ui-sref="frame.detail({id:result.id})">{{result.productName}}</a></span> -->
												<span>
													<a href="javascript:void(0)">{{result.productName}}</a>
												</span>
											</div>
										</td>
										<!-- 领域 -->
										<td class="list-table-td">
											<div>
												<span>{{result.territory}}</span>
											</div>
										</td>
										<!-- 特性 -->
										<td class="list-table-td">
											<div>
												<span>{{result.productType}}</span>
											</div>
										</td>
										<!-- 电源 = 电压+频率+相数 -->
										<td class="list-table-td col-wd-175">
											<div>
												<span>{{result.dianyuan}}</span>
											</div>
										</td>
										<!-- 冷量 -->
										<td class="list-table-td">
											<div>
												<span>{{result.lengliang}}</span>
											</div>
										</td>
										<!-- 排气量 -->
										<td class="list-table-td">
											<div>
												<span>{{result.paiqiliang}}</span>
											</div>
										</td>
										<!-- COP -->
										<td class="list-table-td">
											<div>
												<span>{{result.cop}}</span>
											</div>
										</td>
										<!-- 冷媒 -->
										<td class="list-table-td">
											<div>
												<span>{{result.lengmei}}</span>
											</div>
										</td>
										<!-- 测试工况 -->
										<td class="list-table-td">
											<div>
												<span>{{result.capMeasCond}}</span>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<hiPagination v-show="showAllResults" :total="total" :current-page='current' @pagechange="pagechange"></hiPagination>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from "vuex";
import auth from "./auth.vue";
import queries from "./queries.vue";
export default {
  name: "mainResult",
  data() {
    return {
      current: 1,
      display: 7
    };
  },
  methods: {
    pagechange(currentPage) {
      this.current = currentPage;
    },
    toggleSearchResults(recommended_OR_all) {
      this.$store.commit("toggleSearchResults", recommended_OR_all);
    },
    async queryById(id) {
      let self = this;
      let response = await queries.queryById(id);
      if (!response) {
        return;
      } else {
        let result = response.data.result;
        localStorage.setItem("resultById", JSON.stringify(result));
        this.$store.commit("updateResultById", result);
        console.log(this.$store.state.resultById);
        console.log(localStorage.getItem("resultById"));
				this.$router.push("/result");
      }
    }
  },
  computed: {
    recommendedResults() {
      return this.$store.state.recommendedResults;
		},
		searchResults() {
      return this.$store.state.searchResults;
    },
    currentSearchResults() {
      let startIndex = this.display * this.current - this.display;
      let endIndex = this.display * this.current;
      return this.$store.state.searchResults.slice(startIndex, endIndex);
    },
    showRecommendedResults() {
      return this.$store.state.showRecommendedResults;
    },
    showAllResults() {
      return this.$store.state.showAllResults;
    },
    loginStatus() {
      return this.$store.state.loginStatus;
    },
    total() {
      return this.$store.state.searchResults.length;
    }
  },

  mounted() {
    auth
      .isUserLogin()
      .then(res => this.$store.commit("updateLoginStatus", res.data.result));
    if (!localStorage["searchResults"]) {
      this.$router.push("/login");
    }
		// 刷新页面之后保持状态
		console.log(this.$store.state.showRecommendedResults)
		console.log(this.$store.state.showAllResults)
		this.$store.commit(
      "updateRecommendedResults",
      JSON.parse(localStorage.getItem("recommendedResults"))
    );
    this.$store.commit(
      "updateSearchResults",
      JSON.parse(localStorage.getItem("searchResults"))
    );
  }
};
</script>

<style>

</style>
