<template>
	<div class="detail-table-body" style="width:445px;background:none;">
		<table class="tablebox" style="table-layout:auto;">
			<tbody class="detail-table-body">
				<tr class="list-table-tr">
					<!-- 蒸发温度 -->
					<td class="list-table-td">
						<div>
							<span>
								<b>蒸发温度</b>
							</span>
						</div>
					</td>
					<td class="list-table-td">
						<div>
							<span><input type="text" style="height:20px;" /></span>
						</div>
					</td>
				</tr>
				<tr class="list-table-tr">
					<!-- 冷凝温度 -->
					<td class="list-table-td">
						<div>
							<span>
								<b>冷凝温度</b>
							</span>
						</div>
					</td>
					<td class="list-table-td">
						<div>
							<span><input type="text" style="height:20px;" /></span>
						</div>
					</td>
				</tr>
				<tr class="list-table-tr">
					<!-- 过热度 -->
					<td class="list-table-td">
						<div>
							<span>
								<b>过热度</b>
							</span>
						</div>
					</td>
					<td class="list-table-td">
						<div>
							<span><input type="text" style="height:20px;" /></span>
						</div>
					</td>
				</tr>
				<tr class="list-table-tr">
					<!-- 过冷度 -->
					<td class="list-table-td">
						<div>
							<span>
								<b>过冷度</b>
							</span>
						</div>
					</td>
					<td class="list-table-td">
						<div>
							<span><input type="text" style="height:20px;" /></span>
						</div>
					</td>
				</tr>
				<tr class="list-table-tr">
					<!-- 输出项 -->
					<td class="list-table-td">
						<div>
							<span>
								<b>输出项</b>
							</span>
						</div>
					</td>
					<td class="list-table-td">
						<div>
							<span>
								<select v-model="constantTypeModel">
									<option v-for="constantType in constantTypes" :value="constantType.value">
										{{ constantType.name }}
									</option>
								</select>

								<!--<select ng-show="$storage.britishSystem == 'on'" style="height:24px;width:174px;" class="advSelect" ng-model="constantTypeModel"  ng-options="t.value as t.name for t in _constantTypes"
															ng-change="">
															</select>-->
							</span>
						</div>
					</td>
				</tr>
				<tr class="list-table-tr" style="width:200px;">
					<!-- 计算按钮 -->
					<td class="list-table-td">
						<div>
							<span>
								<b></b>
							</span>
						</div>
					</td>
					<td class="list-table-td">
						<div>
							<span class="advanced-setting" style="margin:0;">
								<!--<input type="button" class="advanced-search-btn" style="border-top: 1px solid #38f;border-bottom: 1px solid #38f;border-left: none;border-right: none;" ng-click="calcTMResult()" value="{{'CALCULATION' | translate}}" />-->
								<input type="button" @click="calcTMResult()" class="advanced-search-btn" style="border-top: 1px solid #38f;border-bottom: 1px solid #38f;border-left: none;border-right: none;" value="计 算" />
							</span>
						</div>
					</td>
				</tr>
				<!--<tr class="list-table-tr" ng-show="tmCalcResult !== 0">-->
				<tr class="list-table-tr" v-show="tmCalcResult !== 0">
					<!-- 结果 -->
					<td class="list-table-td">
						<div>
							<!--<span><b>{{'RESULTCALC' | translate}}</b></span>-->
							<span>
								<b>计算结果</b>
							</span>
						</div>
					</td>
					<td class="list-table-td">
						<div>
							<span>
								{{tmCalcResult}}
							</span>
							<span>
								(w)
							</span>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	name: "tmCalc",
	data() {
		return {
			constantTypeModel: 'CoolingCapacity',
			// constantTypes: [{ name: '制冷量(w)', value: 'CoolingCapacity' }, { name: '功率(w)', value: 'Input' }, { name: '流量(kg/h)', value: 'MassFlowRate' }, { name: '电流(A)', value: 'Current' }],
			// _constantTypes: [{ name: '制冷量(btu/h)', value: 'CoolingCapacity', unit: '(btu/h)' }, { name: '功率(w)', value: 'Input', unit: '(w)' }, { name: '流量(lb/h)', value: 'MassFlowRate' }, { name: '电流(A)', value: 'Current', unit: '(A)' }],
			tmCalcResult: 0
		}
	},
	computed: {
	},
	methods: {
		calcTMResult() {
			this.tmCalcResult = (10000 * (Math.random() + 1)).toFixed(2);
		}

	},
	props: { constantTypes: Array}
};
</script>

<style>

</style>
