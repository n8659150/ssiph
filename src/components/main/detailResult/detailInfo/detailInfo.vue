<template>
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
											<span>{{resultById['territory']}}</span>
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
											<span>{{resultById['productType']}}</span>
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
											<span>{{resultById['dianyuan']}}</span>
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
											<span>{{resultById['powerPhase']}}</span>
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
											<span>{{resultById['lengmei']}}</span>
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
											<span>{{resultById['paiqiliang']}}</span>
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
											<span>{{resultById['lengliang']}}</span>
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
											<span>{{resultById['cop']}}</span>
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
											<span>{{resultById['rotationalSpeed']}}</span>
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
											<span>{{resultById['heightSize']}}</span>
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
											<span>{{resultById['capMeasCond']}}</span>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
</template>

<script>
export default {
  name: "detailInfo",
  computed: {
    resultById(){
		return this.$store.state.resultById;
	}
  },
  methods: {
  }
};
</script>

<style>

</style>
