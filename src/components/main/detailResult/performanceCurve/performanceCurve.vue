<template>
	<div class="detail-table-body" style="background:none;">
		<table width="775px;" style="text-align:center;table-layout:fixed;" cellspacing="0" cellpadding="0" v-show="showTable">
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
		<!-- <div class="detail-table-body" style="width:635px;background:none;"> -->
		<div id="performanceGraph" style="width:635px;" v-show="showGraph"></div>
		<!-- </div> -->
	</div>
	
</template>

<script>
import queries from "@/helpers/queries/queries.vue";
import HighCharts from "highcharts";
export default {
  name: "performanceCurve",
  data() {
    return {
      // for table
      constantTypeModel: "CoolingCapacity",
      // for graph
      option: {
        chart: {
          type: "line" //指定图表的类型，默认是折线图（line）
        },
        title: {
          text: "" //指定图表标题
        },
        // colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00',
        // 	'#24CBE5'],
        xAxis: {
          // labels:{step:1},
          // min: -20,
          // max: 15,
          category: [-20, -15, -10, -5, 0, 5, 7.2, 10, 12.5], //指定x轴分组
          allowDecimals: true,
          tickAmount: 8
        },
        yAxis: {
          title: {
            text: "冷量(W)" //指定y轴的标题
          }
        },
        // plotOptions: {
        // 	column: {
        // 		colorByPoint: true
        // 	},
        // },
        series: []
      }
    };
  },
  computed: {
    performanceCurveResult() {
      return this.$store.state.performanceCurve;
    }
  },
  methods: {
    async fetchCurveData(constantType) {
			//如果没有获取全性能曲线数据则直接跳出该函数
			if(!this.$store.state.performanceCurve["45"][0]['y']) return 
      // 获取全性能曲线数据
      let productName = this.$store.state.resultById["productName"];
      let performanceCurveModel = {
        productName: productName,
        constantType: constantType,
        productType: "定速",
        f: "60"
      };
      let performanceCurveParams = queries.paramsParser(performanceCurveModel);
      let curveDataResponse = await queries.performanceCurve(
        performanceCurveParams
      );
      let performanceCurve = curveDataResponse.data;
      localStorage.setItem(
        "performanceCurveData",
        JSON.stringify(performanceCurve)
      );
      performanceCurve.resultType == "0"
        ? (console.log("性能曲线有数据"),
          this.$store.commit("updatePerformanceCurve", performanceCurve))
        : (console.log("性能曲线无数据"),
          this.$store.commit(
            "updatePerformanceCurve",
            self.performanceCurveDataInit
          ));
      this.bindData();
      HighCharts.chart("performanceGraph", this.option);
    },
    bindData() {
      let results = [
        {
          //指定数据列
          name: "30.0℃",
          // data: [{"x":-20,"y":4266.74},{"x":-15,"y":5246.39},{"x":-10,"y":6454.57},{"x":-5,"y":7830.04},{"x":0,"y":9423.6},{"x":5,"y":11258.02},{"x":7.2,"y":12147.34},{"x":10,"y":13356.08},{"x":12.5,"y":14511.09}]
          data: this.$store.state.performanceCurve["30"]
          // data: [{
          // 	y: 1000,
          // 	color: "red"
          // }, 5000, 4000, 5000, 2000]
        },
        {
          name: "35.0℃",
          data: this.$store.state.performanceCurve["35"]
        },
        {
          name: "40.0℃",
          data: this.$store.state.performanceCurve["40"]
        },
        {
          name: "45.0℃",
          data: this.$store.state.performanceCurve["45"]
        },
        {
          name: "50.0℃",
          data: this.$store.state.performanceCurve["50"]
        },
        {
          name: "54.4℃",
          data: this.$store.state.performanceCurve["54.4"]
        },
        {
          name: "60.0℃",
          data: this.$store.state.performanceCurve["60"]
        },
        {
          name: "65.0℃",
          data: this.$store.state.performanceCurve["65"]
        }
      ];
      this.option.series = [];
      for (let i = 0; i < results.length; i++) {
        this.option.series.push(results[i]);
      }
    },
    refreshGraph() {
      this.$store.commit(
        "updatePerformanceCurve",
        JSON.parse(localStorage.getItem("performanceCurveData"))
      );
      this.bindData();
      HighCharts.chart("performanceGraph", this.option);
    }
  },

  mounted() {
    this.refreshGraph();
  },
  props: { constantTypes: Array, showTable: Boolean, showGraph: Boolean }
};
</script>

<style>
</style>
