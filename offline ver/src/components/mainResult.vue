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
									<tr v-show="showRecommendedResults" class="list-table-tr" v-for="(result,key,index) in recommendedResults" :key="key">
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


									<tr v-show="showAllResults" class="list-table-tr" v-for="(result,key,index) in currentSearchResults" :key="key">
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
					<!--<paginate-links for="results" :limit="2" :show-step-links="true"></paginate-links>-->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from 'vuex';
export default {
	name: 'mainResult',
	data() {
		return {
			searchResults: JSON.parse(localStorage.getItem('searchResults')),
			current: 1,
			total: JSON.parse(localStorage.getItem('searchResults')).length,
			display: 7,
		}
	},
	components: {
	},
	methods: {
		pagechange(currentPage) {
			this.current = currentPage
		},
		toggleSearchResults(recommended_OR_all){
			this.$store.commit('toggleSearchResults', recommended_OR_all)
		}
	},
	computed: {
		recommendedResults() {
			return this.searchResults.slice(0,this.display);
		},
		currentSearchResults() {
			let startIndex = this.display * this.current - this.display;
			let endIndex = this.display * this.current
			return this.searchResults.slice(startIndex, endIndex);
		},
		showRecommendedResults() {
            return this.$store.state.showRecommendedResults
        },
		showAllResults() {
            return this.$store.state.showAllResults
        }
	}
}
</script>

<style>

</style>
