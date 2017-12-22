<template>
	<div class="main" style="background:#fafafa;">
		<div class="container">
			<div class="keywords-title">
				<h2 class="back-to-list" ng-click="goBackToList()">
					<i class="back-arrow">
						<</i>返回</h2>
				<span class="title-divider"> | </span>
				<h2>TH508MV-C9EU1
					<span style="font-size:20px;"> 的详情</span>
				</h2>
			</div>
			<div class="list-main">
				<div class="result-wrap">
					<!--<ul class="list-tab-nav">
						<li ng-class="{'tab-active':detailInfo.active}">
							<a href="javascript:void(0)" ng-click="tabActive(detailInfo)">{{'DETAILINFO' | translate}}</a>
						</li>
						<li ng-class="{'tab-active':tmCalc.active}">
							<a href="javascript:void(0)" ng-click="tabActive(tmCalc)">{{'TMCALC' | translate}}</a>
						</li>
						<li ng-class="{'tab-active':performanceTable.active}">
							<a href="javascript:void(0)" ng-click="tabActive(performanceTable)">{{'PERFORMANCETABLE' | translate}}</a>
						</li>
						<li ng-class="{'tab-active':performanceGraph.active}">
							<a href="javascript:void(0)" ng-click="tabActive(performanceGraph)">{{'PERFORMANCEGRAPH' | translate}}</a>
						</li>
						<li ng-class="{'tab-active':techDoc.active}">
							<a href="javascript:void(0)" ng-click="tabActive(techDoc)">{{'TECHDOC' | translate}}</a>
						</li>
						<li ng-class="{'tab-active':dllPage.active}">
							<a href="javascript:void(0)" ng-click="tabActive(dllPage)">{{'DLLPAGE' | translate}}</a>
						</li>
					</ul>-->
					<ul class="list-tab-nav">
						<li :class="{'tab-active':showDetailInfo}">
							<a @click="toggleDetailTabs('detailInfo')" href="javascript:void(0)">详细参数</a>
						</li>
						<li :class="{'tab-active':showTmCalc}">
							<a @click="toggleDetailTabs('tmCalc')" href="javascript:void(0)">定点工况计算</a>
						</li>
						<li :class="{'tab-active':showPerformanceTable}">
							<a @click="toggleDetailTabs('performanceTable')" href="javascript:void(0)">全工况性能表格</a>
						</li>
						<li :class="{'tab-active':showPerformanceGraph}">
							<a @click="toggleDetailTabs('performanceGraph')" href="javascript:void(0)">全工况性能曲线图</a>
						</li>
						<li :class="{'tab-active':showTechDoc}"> 
							<a @click="toggleDetailTabs('techDoc')" href="javascript:void(0)">技术协议书</a>
						</li>
						<li :class="{'tab-active':showDllPage}">
							<a @click="toggleDetailTabs('dllPage')" href="javascript:void(0)">DLL文件下载</a>
						</li>
					</ul>





					<!-- 详细参数 -->
					<!-- <div class="detail-table-body" ng-class="{'scrollable':detailInfo.active}" ng-show="detailInfo.active" style="width:445px;background:none;"> -->
					
					
					<!--<div class="detail-table-body" ng-show="detailInfo.active" style="width:445px;background:none;">-->
					<div class="detail-table-body" style="width:445px;background:none;">
						<table class="tablebox">
							<tbody class="detail-table-body">
								<tr class="list-table-tr">
									<!-- 领域 -->
									<td class="list-table-td detail-td">
										<div>
											<span>
												<!--<b>{{'TERR' | translate}}</b>-->
												<b>领域</b>												
											</span>
										</div>
									</td>
									<td class="list-table-td detail-td">
										<div>
											<!--<span>{{$storage.detailResult.territory | translate}}</span>-->
											<span>轻商</span>
										</div>
									</td>
								</tr>
								<tr class="list-table-tr">
									<!-- 特性 -->
									<td class="list-table-td detail-td">
										<div>
											<span>
												<!--<b>{{'TYPE' | translate}}</b>-->
												<b>特性</b>
											</span>
										</div>
									</td>
									<td class="list-table-td detail-td">
										<div>
											<!--<span>{{$storage.detailResult.productType | translate}}</span>-->
											<span>定速</span>
										</div>
									</td>
								</tr>
								<tr class="list-table-tr">
									<!-- 结构 -->
									<td class="list-table-td detail-td">
										<div>
											<span>
												<!--<b>{{'CYLINDER' | translate}}</b>-->
												<b>结构</b>
											</span>
										</div>
									</td>
									<td class="list-table-td detail-td">
										<div>
											<!--<span>{{'单缸' | translate}}</span>-->
											<span>单缸</span>
										</div>
									</td>
								</tr>
								<tr class="list-table-tr">
									<!-- 电源 -->
									<td class="list-table-td detail-td">
										<div>
											<span>
												<!--<b>{{'POWER' | translate}}</b>-->
												<b>电源</b>
											</span>
										</div>
									</td>
									<td class="list-table-td detail-td">
										<div>
											<!--<span>{{$storage.detailResult.dianyuan}}</span>-->
											<span>380V~/50HZ/3φ</span>
										</div>
									</td>
								</tr>
								<tr class="list-table-tr">
									<!-- 功率 -->
									<!-- <td class="list-table-td detail-td">
										<div>
											<span><b>{{'FREQ' | translate}} (Hz)</b></span>
										</div>
									</td>
									<td class="list-table-td detail-td">
										<div>
											<span>{{$storage.detailResult.powerFrequency}}</span>
										</div>
									</td> -->
									<!-- 电容 -->
									<td class="list-table-td detail-td">
										<div>
											<span>
												<!--<b>{{'CAPACITOR' | translate}} (μF/V)</b>-->
												<b>电容 (μF/V)</b>
											</span>
										</div>
									</td>
									<td class="list-table-td detail-td">
										<div>
											<span>45/450</span>
										</div>
									</td>
								</tr>
								<tr class="list-table-tr">
									<!-- 相数 -->
									<td class="list-table-td detail-td">
										<div>
											<span>
												<!--<b>{{'PHASE' | translate}}</b>-->
												<b>相数</b>
											</span>
										</div>
									</td>
									<td class="list-table-td detail-td">
										<div>
											<span>3</span>
										</div>
									</td>
								</tr>
								<tr class="list-table-tr">
									<!-- 冷媒 -->
									<td class="list-table-td detail-td">
										<div>
											<span>
												<!--<b>{{'REFRI' | translate}}</b>-->
												<b>冷媒</b>
											</span>
										</div>
									</td>
									<td class="list-table-td detail-td">
										<div>
											<!--<span>{{$storage.detailResult.lengmei}}</span>-->
											<span>R22</span>
										</div>
									</td>
								</tr>
								<tr class="list-table-tr">
									<!-- 排气量 -->
									<td class="list-table-td detail-td">
										<div>
											<span>
												<!--<b>{{'DISP' | translate}} (cc/rev)</b>-->
												<b>排气量 (cc/rev)</b>
											</span>
										</div>
									</td>
									<td class="list-table-td detail-td">
										<div>
											<!--<span>{{$storage.detailResult.paiqiliang}}</span>-->
											<span>48.8</span>
										</div>
									</td>
								</tr>
								<tr class="list-table-tr">
									<!-- 冷量 -->
									<td class="list-table-td detail-td">
										<div>
											<span>
												<!--<b>{{'COOLCAP' | translate}}</b>-->
												<b>冷量</b>
											</span>
											<span>
												<b>(w)</b>
											</span>
											<!-- <span ng-show="$storage.BritishSys"><b>(BTU/h)</b></span> -->
										</div>
									</td>
									<td class="list-table-td detail-td">
										<div>
											<!--<span>{{$storage.detailResult.lengliang | lengliangFilter:$storage.britishSystem | numFilter:0}}</span>-->
											<span>8197</span>
										</div>
									</td>
								</tr>
								<tr class="list-table-tr">
									<!-- COP -->
									<td class="list-table-td detail-td">
										<div>
											<span>
												<b>COP</b>
											</span>
											<span>
												<b>(w/w)</b>
											</span>
										</div>
									</td>
									<td class="list-table-td detail-td">
										<div>
											<!--<span>{{$storage.detailResult.cop | copFilter:$storage.britishSystem | numFilter:2}}</span>-->
											<span>3.18</span>
										</div>
									</td>
								</tr>
								<tr class="list-table-tr">
									<!-- 转速 -->
									<td class="list-table-td detail-td">
										<div>
											<span>
												<!--<b>{{'ROTATIONSPD' | translate}}</b>-->
												<b>转速</b>
											</span>
										</div>
									</td>
									<td class="list-table-td detail-td">
										<div>
											<!--<span>{{$storage.detailResult.rotationalSpeed}}</span>-->
											<span>3000</span>
										</div>
									</td>
								</tr>
								<tr class="list-table-tr">
									<!-- 高度 -->
									<td class="list-table-td detail-td">
										<div>
											<span>
												<!--<b>{{'HT' | translate}}</b>-->
												<b>高度</b>
											</span>
											<span>
												<!--<b>{{'(mm)' | heightUnitFilter:$storage.britishSystem}}</b>-->
												<b>(mm)</b>
											</span>
										</div>
									</td>
									<td class="list-table-td detail-td">
										<div>
											<!--<span>{{$storage.detailResult.heightSize | heightFilter:$storage.BritishSys | numFilter:2}}</span>-->
											<span>361.30</span>
										</div>
									</td>
								</tr>
								<tr class="list-table-tr">
									<!-- 测试工况 -->
									<td class="list-table-td detail-td">
										<div>
											<span>
												<!--<b>{{'TM' | translate}}</b>-->
												<b>测试工况</b>
											</span>
										</div>
									</td>
									<td class="list-table-td detail-td">
										<div>
											<!--<span>{{$storage.detailResult.capMeasCond}}</span>-->
											<span>ASHRAE/T</span>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- 定点工况计算 -->


					

					<!-- 性能表格 -->
					<!--<div class="detail-table-body" ng-show="performanceTable.active" style="background:none;">
						<table width="775px;" style="text-align:center;table-layout:fixed;" cellspacing="0" cellpadding="0">
							<tbody>
								<tr>
									<td colspan="10">

										<i class="advanced-setting" style="float:right;margin-top:0;margin-bottom:15px;font-size:14px;">
											<i style="color:#333;font-style:normal;">英制：{{$storage.britishSystem}},输出项：</i>
											<select ng-show="$storage.britishSystem == 'off'" style="width:110px;" class="advSelect" ng-model="constantTypeModel" ng-options="t.value as t.name for t in constantTypes" ng-change="fetchCurveData()">
											</select>
											<select ng-show="$storage.britishSystem == 'on'" style="width:110px;" class="advSelect" ng-model="constantTypeModel" ng-options="t.value as t.name for t in _constantTypes" ng-change="fetchCurveData()">
											</select>
										</i>
									</td>
								</tr>
								<tr class="tm-table">
									<td>
										<b></b>
									</td>
									<td>
										<b>-20.0</b>
									</td>
									<td>
										<b>-15.0</b>
									</td>
									<td>
										<b>-10.0</b>
									</td>
									<td>
										<b>-5.0</b>
									</td>
									<td>
										<b>0.0</b>
									</td>
									<td>
										<b>5.0</b>
									</td>
									<td>
										<b>7.2</b>
									</td>
									<td>
										<b>10</b>
									</td>
									<td>
										<b>12.5</b>
									</td>
								</tr>
								<tr class="tm-table">
									<td>
										<b>30.0</b>
									</td>
									<td>
										{{$storage.performanceCurveResult['30'][0]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['30'][1]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['30'][2]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['30'][3]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['30'][4]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['30'][5]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['30'][6]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['30'][7]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['30'][8]['y']}}
									</td>
								</tr>
								<tr class="tm-table">
									<td>
										<b>35.0</b>
									</td>
									<td>
										{{$storage.performanceCurveResult['35'][0]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['35'][1]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['35'][2]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['35'][3]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['35'][4]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['35'][5]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['35'][6]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['35'][7]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['35'][8]['y']}}
									</td>
								</tr>
								<tr class="tm-table">
									<td>
										<b>40.0</b>
									</td>
									<td>
										{{$storage.performanceCurveResult['40'][0]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['40'][1]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['40'][2]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['40'][3]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['40'][4]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['40'][5]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['40'][6]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['40'][7]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['40'][8]['y']}}
									</td>
								</tr>
								<tr class="tm-table">
									<td>
										<b>45.0</b>
									</td>
									<td>
										{{$storage.performanceCurveResult['45'][0]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['45'][1]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['45'][2]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['45'][3]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['45'][4]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['45'][5]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['45'][6]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['45'][7]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['45'][8]['y']}}
									</td>
								</tr>
								<tr class="tm-table">
									<td>
										<b>50.0</b>
									</td>
									<td>
										{{$storage.performanceCurveResult['50'][0]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['50'][1]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['50'][2]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['50'][3]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['50'][4]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['50'][5]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['50'][6]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['50'][7]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['50'][8]['y']}}
									</td>
								</tr>
								<tr class="tm-table">
									<td>
										<b>54.4</b>
									</td>
									<td>
										{{$storage.performanceCurveResult['54.4'][0]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['54.4'][1]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['54.4'][2]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['54.4'][3]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['54.4'][4]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['54.4'][5]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['54.4'][6]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['54.4'][7]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['54.4'][8]['y']}}
									</td>
								</tr>
								<tr class="tm-table">
									<td>
										<b>60.0</b>
									</td>
									<td>
										{{$storage.performanceCurveResult['60'][0]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['60'][1]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['60'][2]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['60'][3]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['60'][4]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['60'][5]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['60'][6]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['60'][7]['y']}}
									</td>
									<td>
										{{$storage.performanceCurveResult['60'][8]['y']}}
									</td>
								</tr>
							</tbody>
						</table>
					</div>-->
					<!-- 性能曲线图 -->
					<!--<div class="detail-table-body" ng-show="performanceGraph.active">
						<nvd3 options="__options" data="__data" class="with-3d-shadow with-transitions"></nvd3>
					</div>-->
					<!-- 技术协议书 -->
					<!--<div class="detail-table-body" ng-show="techDoc.active" style="width:445px;">
						<div style="width:305px;">
							<span style="display:block;float:left;height:30px;line-height:30px;" class="download-file-name">{{'GETTECDOC' | translate}}</span>
						</div>
					</div>-->
					<!-- dll文件下载 -->
					<!--<div class="detail-table-body" ng-show="dllPage.active" style="width:445px;">
						<div style="width:305px;">
							<span style="display:block;float:left;height:30px;line-height:30px;" class="download-file-name">{{'GETDLLFILE' | translate}}</span>
						</div>
					</div>-->
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
  name: "detailResult",
  data() {
    return {
      //   current: 1,
      //   display: 7
    };
  },
  methods: {
    // pagechange(currentPage) {
    //   this.current = currentPage;
    // },
    // toggleSearchResults(recommended_OR_all) {
    //   this.$store.commit("toggleSearchResults", recommended_OR_all);
    // },
    // async queryById(id) {
    //   let self = this;
    //   let response = await queries.queryById(id);
    //   if (!response) {
    //     return;
    //   } else {
    //     let result = response.data.result;
    //     localStorage.setItem("resultById", JSON.stringify(result));
    //     this.$store.commit("updateResultById", result);
    //     console.log(this.$store.state.resultById);
    //     console.log(localStorage.getItem("resultById"));
    //   }
    // }
    toggleDetailTabs(tabName) {
      this.$store.commit("toggleDetailTabs", tabName);
      //localStorage.setItem("detailTabActive", tabName);
    }
  },
  computed: {
    // recommendedResults() {
    //   return this.searchResults.slice(0, this.display);
    // },
    // currentSearchResults() {
    //   let startIndex = this.display * this.current - this.display;
    //   let endIndex = this.display * this.current;
    //   return this.searchResults.slice(startIndex, endIndex);
    // },
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

  mounted() {
    auth
      .isUserLogin()
      .then(res => this.$store.commit("updateLoginStatus", res.data.result));
    if (!localStorage["searchResults"]) {
      this.$router.push("/login");
    }
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
