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
// import auth from "../../auth/auth.vue";
import queries from "@/helpers/queries/queries.vue";
export default {
	name: "mainResult",
	data() {
		return {
			current: 1,
			display: 7,
			performanceCurveDataInit:{"45":[{"x":-20,"y":0},{"x":-15,"y":0},{"x":-10,"y":0},{"x":-5,"y":0},{"x":0,"y":0},{"x":5,"y":0},{"x":7.2,"y":0},{"x":10,"y":0},{"x":12.5,"y":0}],"35":[{"x":-20,"y":0},{"x":-15,"y":0},{"x":-10,"y":0},{"x":-5,"y":0},{"x":0,"y":0},{"x":5,"y":0},{"x":7.2,"y":0},{"x":10,"y":0},{"x":12.5,"y":0}],"60":[{"x":-20,"y":0},{"x":-15,"y":0},{"x":-10,"y":0},{"x":-5,"y":0},{"x":0,"y":0},{"x":5,"y":0},{"x":7.2,"y":0},{"x":10,"y":0},{"x":12.5,"y":0}],"50":[{"x":-20,"y":0},{"x":-15,"y":0},{"x":-10,"y":0},{"x":-5,"y":0},{"x":0,"y":0},{"x":5,"y":0},{"x":7.2,"y":0},{"x":10,"y":0},{"x":12.5,"y":0}],"40":[{"x":-20,"y":0},{"x":-15,"y":0},{"x":-10,"y":0},{"x":-5,"y":0},{"x":0,"y":0},{"x":5,"y":0},{"x":7.2,"y":0},{"x":10,"y":0},{"x":12.5,"y":0}],"30":[{"x":-20,"y":0},{"x":-15,"y":0},{"x":-10,"y":0},{"x":-5,"y":0},{"x":0,"y":0},{"x":5,"y":0},{"x":7.2,"y":0},{"x":10,"y":0},{"x":12.5,"y":0}],"54.4":[{"x":-20,"y":0},{"x":-15,"y":0},{"x":-10,"y":0},{"x":-5,"y":0},{"x":0,"y":0},{"x":5,"y":0},{"x":7.2,"y":0},{"x":10,"y":0},{"x":12.5,"y":0}],"65":[{"x":-20,"y":0},{"x":-15,"y":0},{"x":-10,"y":0},{"x":-5,"y":0},{"x":0,"y":0},{"x":5,"y":0},{"x":7.2,"y":0},{"x":10,"y":0},{"x":12.5,"y":0}]}
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
			// let response = await queries.queryById(id);
			let response = await queries.queryById(id).then(response => response.json());
			if (!response) {
				return;
			} else {
				// let result = response.data.result;
				let result = response;

				// 同时获取全性能曲线数据
				let performanceCurveModel = { "productName": result['productName'], "constantType": "CoolingCapacity", "productType": "定速", "f": "60" }
				let performanceCurveParams = queries.paramsParser(performanceCurveModel)
				// let curveDataResponse = await queries.performanceCurve(performanceCurveParams);
				let curveDataResponse = await queries.performanceCurve(performanceCurveParams).then(response => response.json());
				// let performanceCurve = curveDataResponse.data
				let performanceCurve = curveDataResponse

				console.log(performanceCurve);
				localStorage.setItem("resultById", JSON.stringify(result));
				this.$store.commit("updateResultById", result);
				localStorage.setItem("performanceCurveData", JSON.stringify(performanceCurve));
				if (performanceCurve.resultType == "0") {
					console.log("性能曲线有数据");
					this.$store.commit("updatePerformanceCurve", performanceCurve);
				} else {
					console.log("性能曲线无数据");
					this.$store.commit("updatePerformanceCurve",self.performanceCurveDataInit);
				}
				// console.log(this.$store.state.resultById);
				// console.log(localStorage.getItem("resultById"));
				this.$router.push({path: '/result/' + id});
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
		// auth
		// 	.isUserLogin()
		// 	.then(res => this.$store.commit("updateLoginStatus", res.data.result));
		// if (!localStorage["searchResults"]) {
		// 	this.$router.push("/login");
		// }
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
.keywords-title {
	/*margin: 0 20px;*/
    font-size: 0;
    min-height: 62px;
    line-height: 62px;
    position: relative
}

.keywords-title h2{
	color: #000;
	display: inline-block;
    vertical-align: middle;
    font-size: 22px;
    font-weight: 400;
    /*margin-right: 20px;*/
    /*max-width: 70%;*/
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

.list-main:after {
    display: table;
    content: "";
    clear: both
}
.result-wrap {
	margin-bottom:15px
}


.list-tab-nav {
	margin-bottom: 20px;
	padding: 0;
    height: auto;
    line-height: normal;
    border-bottom: 1px solid #d6d8dc
}
.list-tab-nav li {
	display:inline-block;
	position:relative;
	margin-top:0;
	margin-bottom:-1px;
	margin-left: 20px
}

.list-tab-nav > li:first-child {
	margin-left: 0
}

.list-tab-nav li a {
	display: block;
	font-size: 14px;
	text-align: center;
	border: 0;
    padding: 0 15px 3px;
    background-color: transparent;
    color: #74777c;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 45px;
    line-height: 50px
}

.list-tab-nav li.tab-active a {
	margin-bottom: 0;
    padding-bottom: 0;
    color: #0071bf;
    border-bottom: 3px solid #0071bf
}

/*
.list-search-input {
	float: right;
    width: 224px;
	height: 27px;
    box-sizing: border-box;
    border: 1px solid #d1d2d3;
    border-radius: 3px;
    padding-right: 24px
}

.list-search-input-wrap {
	position: relative;
	height: 100%
}*/
.list-search-inputarea {
    box-sizing: border-box;
	font-size:12px;
    height: 27px;
    line-height: 15px;
    width: 190px;
    resize: none;
    vertical-align: top;
    border-radius: 3px 0 0 3px;
    padding: 5px 10px;
    overflow: hidden;
    outline: 0;
    white-space: nowrap;
	display: inline-block;
	float:right;
	border: 1px solid #d1d2d3
}
.list-search-input-wrapper {
	width:100%;
	overflow:hidden;
}

/*.list-search-input .search-btn {
	width: 25px;
    height: 25px;
    background: url(../../images/searchIcon.png) no-repeat center;
	position: absolute;
    top: 0;
    right: 0;
	overflow: hidden;   
	border: 0;
	cursor: pointer;
	outline: 0
}*/

.list-table {
	background-color:#fff;
	margin:28px 0
}

.list-table-header {
	background-color: #f6f8fa;
}
.tablebox {
	border-collapse: collapse;
    border-spacing: 0;
    table-layout: fixed;
    width: 100%;
    position: relative
}

.list-table-thead {
	color: #454951;
    font-size: 14px;
    font-weight: 700;
    line-height: 30px;
    margin-right: 0;
    width: 100%;
    background-color: #f6f8fa;
    border-bottom: 1px solid #d1d5de;
    border-top: 1px solid #d1d5de
}

.list-table-thead .list-table-tr {
	background-color:#f6f8fa;
	outline: 0
}

.list-table-th {
	text-align: left;
    vertical-align: middle;
    padding: 0;
    font-size: 0;
	overflow: hidden
}

.list-table-th .unitStyle {
	font-size:13px;
	margin-left:3px;
}

.list-table-th:first-child {
	padding-left:20px;
}

.list-table-th div,.list-table-td div {
	display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
	margin:5px 0;
    box-sizing: border-box;
	height: 30px;
    position: relative;
    color: #454a51;
	font-weight: bold
}
.list-table-td div {
	font-weight: normal;
}
.list-table-th div span,.list-table-td div span {
	display: inline-block;
    max-width: 100%;
	line-height:30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}
/* 英语版 结果列表 表头英文单词显示不下，需要调整行高 */
.line-height-fix {
	line-height:15px !important;
	white-space:normal !important;
	max-width:initial !important;
}
.text-align-fix {
	text-align:center !important;
}
/* 固定列宽为150 */

.list-table-th.col-wd-150,.list-table-td.col-wd-150 {
	width:150px;
}
/* 固定列宽为175 */
.list-table-th.col-wd-175,.list-table-td.col-wd-175 {
	width:175px;
}

.list-table-body {
	/*min-height: 272px;*/
	min-height:384px;
	overflow-y: visible;
	border-bottom:1px solid #d1d5de;
}

.list-table-body {
	background:#fff;
}

.list-table-body .list-table-tr:hover {
	background-color:#EAF3FD!important;
}

.list-table-td {
	line-height: 23px;
	border-bottom: 1px solid #e6ebf2;
    color: #454a51;
    font-size: 0;
    line-height: 19px;
    padding-bottom: 6px;
    padding-top: 6px;
    text-align: left;
    vertical-align: middle;
    height: 42px
}
.list-table-td div span a {
	vertical-align: middle;
    color: #2277da;
    text-decoration: none;
}

.list-table-td:first-child {
	padding-left:20px;
}

</style>
