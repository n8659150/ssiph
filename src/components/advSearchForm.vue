<template>
    <!-- 高级搜索 -->
    <div class="filterLayer filterPanel" v-show="advSearchOpened" id="filterPanel" style="top:0;opacity:1">
        <span class="filterPanelClose close closeIconBg" title="关闭" id="filterPanelClose" @click="closeForm('advSearchOpened')"></span>
        <div class="filterPanelWrapper">
            <div class="filterTab">
                <ul class="filterTabRow">
                    <li class="item cur" data-tabid="advanced" href="#advanced">高级搜索</li>
                </ul>
                <div class="filterTabContent">
                    <div class="item cur" id="advanced">
                        <div class="advanced-setting">
                            <form name="advSearchForm">
                                <div class="result-setting">
                                    <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                            <hiFormCheckBox :title="productTerritory.title" :description="productTerritory.description" :options="productTerritory.options" v-model="models.productTerritory">
                                            </hiFormCheckBox>
                                            <hiFormDropDown :title="productType.title" :description="productType.description" :options="productType.options" v-model="models.productType">
                                            </hiFormDropDown>
                                            <hiFormDropDown :title="powerVoltage.title" :description="powerVoltage.description" :options="powerVoltage.options" v-model="models.powerVoltage">
                                            </hiFormDropDown>
                                            <hiFormRadioSet name="_powerFrequency" :title="powerFrequency.title" :description="powerFrequency.description" :options="powerFrequency.options" v-model="models.powerFrequency">
                                            </hiFormRadioSet>
                                            <hiFormRadioSet name="_powerPhase" :title="powerPhase.title" :description="powerPhase.description" :options="powerPhase.options" v-model="models.powerPhase">
                                            </hiFormRadioSet>
                                            <hiFormRawInput :title="lengliang.title" :description="lengliang.description" :placeholder="lengliang.placeholder" lengliangUnit="W" v-model="models.lengliang">
                                            </hiFormRawInput>
                                            <hiFormDropDown :title="lengmei.title" :description="lengmei.description" :options="lengmei.options" v-model="models.lengmei">
                                            </hiFormDropDown>
                                            <hiFormDropDown :title="capMeasCond.title" :description="capMeasCond.description" :options="capMeasCond.options" :customizedStyle="capMeasCond.customizedStyle" v-model="models.capMeasCond">
                                            </hiFormDropDown>
                                            <hiFormDropDown :title="unitSystem.title" :description="unitSystem.description" :options="unitSystem.options" :customizedStyle="unitSystem.customizedStyle" v-model="models.unitSystem">
                                            </hiFormDropDown>
                                            <tr>
                                                <th>
                                                    &nbsp;
                                                </th>
                                                <td>
                                                    &nbsp;
                                                </td>
                                                <td id="adv-setting-7">
                                                    <hiButton buttonText="高级搜索" v-on:click.native="advQuery()"></hiButton>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <testModeTable></testModeTable>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 高级搜索 结束 -->
</template>
<script>
import globalConsts from "./globalConsts.vue";
import queries from "./queries.vue";
export default {
  name: "advSearchForm",
  data() {
    return {
      powerVoltage_a: "-1",
      powerFrquency_a: "-1",
      powerPhase_a: "-1",
      lengliang_a: "",
      lengliangUnit_a: "W",
      lengmei_a: "-1",
      capMeasCond_a: "-1",
      serverUrl: globalConsts.serverUrl,
      models: {
        productTerritory: ["轻商", "家用"],
        productType: "-1",
        powerVoltage: "-1",
        powerFrequency: "-1",
        powerPhase: "-1",
        lengliang: "",
        lengmei: "-1",
        capMeasCond: "-1",
        unitSystem: "off"
      },
      productTerritory: {
        title: "应用领域：",
        description: "轻商，家用",
        options: [
          { name: "轻商", checked: true, value: "轻商" },
          { name: "家用", checked: true, value: "家用" }
        ]
      },
      productType: {
        title: "产品类型：",
        description: "定速，变频",
        options: [
          { name: "不限", value: "-1" },
          { name: "定速", value: "定速" },
          { name: "变频", value: "变频" }
        ]
      },
      powerVoltage: {
        title: "电源-电压：",
        description: "208V-230V~ 到 380V-415V~",
        options: [
          { name: "不限", value: "-1" },
          { name: "208V-230V~", value: "208V-230V~" },
          { name: "220V-230V~", value: "220V-230V~" },
          { name: "220V-240V~", value: "220V-240V~" },
          { name: "220V-380V~", value: "220V/380V" },
          { name: "220V~", value: "220V~" },
          { name: "230V~", value: "230V~" },
          { name: "380V~", value: "380V~" },
          { name: "380V-415V~", value: "380V-415V~" }
        ]
      },
      powerFrequency: {
        title: "电源-频率：",
        description: "50Hz~60Hz",
        options: [
          { name: "不限", checked: true, value: "-1" },
          { name: "50Hz", checked: false, value: "50Hz" },
          { name: "50/60Hz", checked: false, value: "50/60Hz" },
          { name: "60Hz", checked: false, value: "60Hz" }
        ]
      },
      powerPhase: {
        title: "电源-相数：",
        description: "单相, 单相或三相, 三相",
        options: [
          { name: "不限", checked: true, value: "-1" },
          { name: "单相", checked: false, value: "1" },
          { name: "单相或三相", checked: false, value: "1/3" },
          { name: "三相", checked: false, value: "3" }
        ]
      },
      lengliang: {
        title: "冷量：",
        description: "7000-16000",
        placeholder: "请输入冷量"
      },
      lengmei: {
        title: "冷媒类型：",
        description: "R410A,R134a,R22,R32,R290",
        options: [
          { name: "不限", value: "-1" },
          { name: "R410A", value: "R410A" },
          { name: "R134A", value: "R134A" },
          { name: "R22", value: "R22" },
          { name: "R32", value: "R32" },
          { name: "R410a", value: "R410a" }
        ]
      },
      capMeasCond: {
        title: "测试工况：",
        description: "默认为 ASHRAE/T",
        options: [
          { name: "不限", value: "-1" },
          { name: "ASHRAE/T", value: "ASHRAE/T" },
          { name: "高效工况", value: "高效工况" },
          { name: "冷房定格", value: "冷房定格" },
          { name: "冷房中间", value: "冷房中间" },
          { name: "暖房定格", value: "暖房定格" },
          { name: "暖房中间", value: "暖房中间" },
          { name: "低温制热", value: "低温制热" },
          { name: "最大制冷", value: "最大制冷" }
        ]
      },
      unitSystem: {
        title: " 单位系统：",
        description: "英制 或 公制",
        customizedStyle: "width:50px;",
        options: [{ name: "公制", value: "off" }, { name: "英制", value: "on" }]
      }
    };
  },
  methods: {
    closeForm(name) {
      this.$store.commit("closeForm", name);
    },
    async advQuery() {
      // 应用领域可能是多选，检查参数是否是列表，是列表就以逗号隔开
      this.models["productTerritory"] = queries.splitArrayParams(
        this.models["productTerritory"]
      );
      let advParams = queries.paramsParser(this.models);
      let response = await queries.advQuery(advParams);
      if (!response) {
        return;
      } else {
        this.closeForm("advSearchOpened");
        let result = response.data.result;
        
        // localStorage.setItem("searchResults", JSON.stringify(result));
        // this.$store.commit("updateSearchResults", result);
        // this.$router.push("/list");
        localStorage.setItem("recommendedResults",JSON.stringify(result.slice(0,7)))
        localStorage.setItem("searchResults", JSON.stringify(result));
        this.$store.commit("updateRecommendedResults",JSON.parse(localStorage.getItem('recommendedResults')))
        this.$store.commit("updateSearchResults", JSON.parse(localStorage.getItem('searchResults')));
        this.$router.push("/list");
      }
    }
  },
  computed: {
    advSearchOpened() {
      return this.$store.state.advSearchOpened;
    }
  }
};
// data () {
//   return {
//     msg: 'Welcome to Your Vue.js App'
//   }
// }
</script>

<style>

</style>
