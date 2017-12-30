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
					<performanceTable v-show="showPerformanceTable" :constantTypeModel="constantTypeModel" :constantTypes="constantTypes"></performanceTable>
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
import auth from "../../auth/auth.vue";
import queries from "../../queries/queries.vue";
import detailResultTab from "./detailResultTab/detailResultTab.vue";
import detailInfo from "./detailInfo/detailInfo.vue";
import tmCalc from "./tmCalc/tmCalc.vue";
import performanceTable from "./performanceTable/performanceTable.vue";
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
		performanceTable,
		techDoc,
		dllPage
	},
	mounted() {
		auth
			.isUserLogin()
			.then(res => this.$store.commit("updateLoginStatus", res.data.result));
		if (!localStorage["searchResults"]) {
			this.$router.push("/login");
		}
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

</style>
