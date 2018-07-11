<template>
	<div class="main" style="background:#fafafa;">
		<div class="container">
			<div class="keywords-title">
				<h2 class="back-to-list" @click="navigateTo('/list')">
					<i class="back-arrow">
						<</i>
							返回
				</h2>

				<span class="title-divider"> | </span>
				<h2>{{resultById['productName']}}
					<span style="font-size:20px;"> 的详情</span>
				</h2>
			</div>
			<div class="list-main">
				<div class="result-wrap">
					<detailResultTab></detailResultTab>

					<!-- 详细参数 -->
					<!-- <div class="detail-table-body" ng-class="{'scrollable':detailInfo.active}" ng-show="detailInfo.active" style="width:445px;background:none;"> -->

					<!--<div class="detail-table-body" ng-show="detailInfo.active" style="width:445px;background:none;">-->
					<detailInfo v-show="showDetailInfo"></detailInfo>
					<!-- 定点工况计算 -->
					<tmCalc v-show="showTmCalc" :constantTypeModel="constantTypeModel" :constantTypes="constantTypes"></tmCalc>
					<!-- 全性能表格 -->
					<performanceCurve :showTable="showPerformanceTable" :showGraph="showPerformanceGraph" :constantTypeModel="constantTypeModel" :constantTypes="constantTypes"></performanceCurve>
					<!-- 全性能曲线-折线图 -->
					<!-- <performanceGraph v-show="showPerformanceGraph"></performanceGraph> -->
					<!-- 技术协议书 -->
					<techDoc v-show="showTechDoc"></techDoc>
					<!-- dll文件下载 -->
					<dllPage v-show="showDllPage"></dllPage>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from "vuex";
// import auth from "../../auth/auth.vue";
// import queries from "../../queries/queries.vue";
import detailResultTab from "./detailResultTab/detailResultTab.vue";
import detailInfo from "./detailInfo/detailInfo.vue";
import tmCalc from "./tmCalc/tmCalc.vue";
import performanceCurve from "./performanceCurve/performanceCurve.vue";
// import performanceGraph from "./performanceGraph/performanceGraph.vue";
import techDoc from "./techDoc/techDoc.vue";
import dllPage from "./dllPage/dllPage.vue";


export default {
	name: "detailResult",
	data() {
		return {
			//   current: 1,
			//   display: 7
			constantTypeModel: 'CoolingCapacity',
			constantTypes: [{ name: '制冷量(w)', value: 'CoolingCapacity' }, { name: '功率(w)', value: 'Input' }, { name: '流量(kg/h)', value: 'MassFlowRate' }, { name: '电流(A)', value: 'Current' }]
			// _constantTypes: [{ name: '制冷量(btu/h)', value: 'CoolingCapacity', unit: '(btu/h)' }, { name: '功率(w)', value: 'Input', unit: '(w)' }, { name: '流量(lb/h)', value: 'MassFlowRate' }, { name: '电流(A)', value: 'Current', unit: '(A)' }]

		};
	},
	methods: {
		navigateTo(path) {
			this.$router.push(path);
		}

	},
	computed: {
		showDetailInfo() {
			return this.$store.state.detailTabs.detailInfo;
		},
		showTmCalc() {
			return this.$store.state.detailTabs.tmCalc;
		},
		showPerformanceTable() {
			return this.$store.state.detailTabs.performanceTable;
		},
		showPerformanceGraph() {
			return this.$store.state.detailTabs.performanceGraph;
		},
		showTechDoc() {
			return this.$store.state.detailTabs.techDoc;
		},
		showDllPage() {
			return this.$store.state.detailTabs.dllPage;
		},
		resultById() {
			return this.$store.state.resultById;
		},
		performanceCurve() {
			return this.$store.state.performanceCurve;
		}
		// showAllResults() {
		//   return this.$store.state.showAllResults;
		// },
		// loginStatus() {
		//   return this.$store.state.loginStatus;
		// },
		// searchResults() {
		//   return this.$store.state.searchResults;
		// },
		// total() {
		//   return this.$store.state.searchResults.length;
		// }
	},
	components: {
		detailResultTab,
		detailInfo,
		tmCalc,
		performanceCurve,
		techDoc,
		dllPage
	},
	mounted() {
		// auth
		// 	.isUserLogin()
		// 	.then(res => this.$store.commit("updateLoginStatus", res.data.result));
		// if (!localStorage["searchResults"]) {
		// 	this.$router.push("/login");
		// }
		this.$store.commit(
			"updateResultById",
			JSON.parse(localStorage.getItem("resultById"))
		);
		
		this.$store.commit(
			"updatePerformanceCurve",
			JSON.parse(localStorage.getItem("performanceCurveData"))
		);
		
		// 刷新页面之后保持状态

		//   this.$store.commit(
		//     "toggleDetailTabs",
		//     localStorage.getItem("detailTabActive")
		//   );
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
