<template>
	<div class="detail-table-body" style="background:none;">
		<table width="775px;" style="text-align:center;table-layout:fixed;" cellspacing="0" cellpadding="0">
			<tbody>
				<tr>
					<td colspan="10">
						<i class="advanced-setting" style="float:right;margin-top:0;margin-bottom:15px;font-size:14px;">
							<!--<i style="color:#333;font-style:normal;">输出项：</i>-->
							<!--<select ng-show="$storage.britishSystem == 'off'" style="width:110px;" class="advSelect" ng-model="constantTypeModel" ng-options="t.value as t.name for t in constantTypes" ng-change="fetchCurveData()">
								</select>-->
							<select v-model="constantTypeModel" @change="fetchCurveData(constantTypeModel)">
								<option v-for="constantType in constantTypes" :value="constantType.value">
									{{ constantType.name }}
								</option>
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
						{{performanceCurveResult['30'][0]['y']}}
					</td>
					<td>
						{{performanceCurveResult['30'][1]['y']}}
					</td>
					<td>
						{{performanceCurveResult['30'][2]['y']}}
					</td>
					<td>
						{{performanceCurveResult['30'][3]['y']}}
					</td>
					<td>
						{{performanceCurveResult['30'][4]['y']}}
					</td>
					<td>
						{{performanceCurveResult['30'][5]['y']}}
					</td>
					<td>
						{{performanceCurveResult['30'][6]['y']}}
					</td>
					<td>
						{{performanceCurveResult['30'][7]['y']}}
					</td>
					<td>
						{{performanceCurveResult['30'][8]['y']}}
					</td>
				</tr>
				<tr class="tm-table">
					<td>
						<b>35.0</b>
					</td>
					<td>
						{{performanceCurveResult['35'][0]['y']}}
					</td>
					<td>
						{{performanceCurveResult['35'][1]['y']}}
					</td>
					<td>
						{{performanceCurveResult['35'][2]['y']}}
					</td>
					<td>
						{{performanceCurveResult['35'][3]['y']}}
					</td>
					<td>
						{{performanceCurveResult['35'][4]['y']}}
					</td>
					<td>
						{{performanceCurveResult['35'][5]['y']}}
					</td>
					<td>
						{{performanceCurveResult['35'][6]['y']}}
					</td>
					<td>
						{{performanceCurveResult['35'][7]['y']}}
					</td>
					<td>
						{{performanceCurveResult['35'][8]['y']}}
					</td>
				</tr>
				<tr class="tm-table">
					<td>
						<b>40.0</b>
					</td>
					<td>
						{{performanceCurveResult['40'][0]['y']}}
					</td>
					<td>
						{{performanceCurveResult['40'][1]['y']}}
					</td>
					<td>
						{{performanceCurveResult['40'][2]['y']}}
					</td>
					<td>
						{{performanceCurveResult['40'][3]['y']}}
					</td>
					<td>
						{{performanceCurveResult['40'][4]['y']}}
					</td>
					<td>
						{{performanceCurveResult['40'][5]['y']}}
					</td>
					<td>
						{{performanceCurveResult['40'][6]['y']}}
					</td>
					<td>
						{{performanceCurveResult['40'][7]['y']}}
					</td>
					<td>
						{{performanceCurveResult['40'][8]['y']}}
					</td>
				</tr>
				<tr class="tm-table">
					<td>
						<b>45.0</b>
					</td>
					<td>
						{{performanceCurveResult['45'][0]['y']}}
					</td>
					<td>
						{{performanceCurveResult['45'][1]['y']}}
					</td>
					<td>
						{{performanceCurveResult['45'][2]['y']}}
					</td>
					<td>
						{{performanceCurveResult['45'][3]['y']}}
					</td>
					<td>
						{{performanceCurveResult['45'][4]['y']}}
					</td>
					<td>
						{{performanceCurveResult['45'][5]['y']}}
					</td>
					<td>
						{{performanceCurveResult['45'][6]['y']}}
					</td>
					<td>
						{{performanceCurveResult['45'][7]['y']}}
					</td>
					<td>
						{{performanceCurveResult['45'][8]['y']}}
					</td>
				</tr>
				<tr class="tm-table">
					<td>
						<b>50.0</b>
					</td>
					<td>
						{{performanceCurveResult['50'][0]['y']}}
					</td>
					<td>
						{{performanceCurveResult['50'][1]['y']}}
					</td>
					<td>
						{{performanceCurveResult['50'][2]['y']}}
					</td>
					<td>
						{{performanceCurveResult['50'][3]['y']}}
					</td>
					<td>
						{{performanceCurveResult['50'][4]['y']}}
					</td>
					<td>
						{{performanceCurveResult['50'][5]['y']}}
					</td>
					<td>
						{{performanceCurveResult['50'][6]['y']}}
					</td>
					<td>
						{{performanceCurveResult['50'][7]['y']}}
					</td>
					<td>
						{{performanceCurveResult['50'][8]['y']}}
					</td>
				</tr>
				<tr class="tm-table">
					<td>
						<b>54.4</b>
					</td>
					<td>
						{{performanceCurveResult['54.4'][0]['y']}}
					</td>
					<td>
						{{performanceCurveResult['54.4'][1]['y']}}
					</td>
					<td>
						{{performanceCurveResult['54.4'][2]['y']}}
					</td>
					<td>
						{{performanceCurveResult['54.4'][3]['y']}}
					</td>
					<td>
						{{performanceCurveResult['54.4'][4]['y']}}
					</td>
					<td>
						{{performanceCurveResult['54.4'][5]['y']}}
					</td>
					<td>
						{{performanceCurveResult['54.4'][6]['y']}}
					</td>
					<td>
						{{performanceCurveResult['54.4'][7]['y']}}
					</td>
					<td>
						{{performanceCurveResult['54.4'][8]['y']}}
					</td>
				</tr>
				<tr class="tm-table">
					<td>
						<b>60.0</b>
					</td>
					<td>
						{{performanceCurveResult['60'][0]['y']}}
					</td>
					<td>
						{{performanceCurveResult['60'][1]['y']}}
					</td>
					<td>
						{{performanceCurveResult['60'][2]['y']}}
					</td>
					<td>
						{{performanceCurveResult['60'][3]['y']}}
					</td>
					<td>
						{{performanceCurveResult['60'][4]['y']}}
					</td>
					<td>
						{{performanceCurveResult['60'][5]['y']}}
					</td>
					<td>
						{{performanceCurveResult['60'][6]['y']}}
					</td>
					<td>
						{{performanceCurveResult['60'][7]['y']}}
					</td>
					<td>
						{{performanceCurveResult['60'][8]['y']}}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import queries from "../../../queries/queries.vue";
export default {
	name: "performanceTable",
	data() {
		return {
			constantTypeModel:'CoolingCapacity'
		}
	},
	computed: {
		performanceCurveResult() {
			return this.$store.state.performanceCurve
		}
	},
	methods: {
		async fetchCurveData(constantType){
			// 获取全性能曲线数据
			let productName = this.$store.state.resultById['productName']
			let performanceCurveModel = { "productName": productName, "constantType": constantType, "productType": "定速", "f": "60" }
			let performanceCurveParams = queries.paramsParser(performanceCurveModel)
			let curveDataResponse = await queries.performanceCurve(performanceCurveParams);
			let performanceCurve = curveDataResponse.data;
			console.log(performanceCurve);
		}
	},
	props: { constantTypes: Array }
};
</script>

<style>

</style>
