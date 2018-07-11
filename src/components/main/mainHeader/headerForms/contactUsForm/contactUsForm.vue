<template>
    <!-- 联系我们 -->
    <div class="filterLayer filterPanel" v-show="contactUsOpened" id="boardPanel" style="top:0;opacity:1">
        <span class="filterPanelClose close closeIconBg" title="关闭" id="filterPanelClose" @click="closeForm('contactUsOpened')"></span>
        <div class="filterPanelWrapper">
            <div class="filterTab">
                <ul class="filterTabRow">
                    <li class="item cur" data-tabid="advanced">联系我们</li>
                </ul>
                <div class="filterTabContent">
                    <div class="item cur" id="advanced">
                        <div class="advanced-setting">
                            <form name="contactForm">
                                <div class="result-setting">
                                    <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                            <tr>
                                                <th>
                                                    应用领域
                                                </th>
                                                <td>
                                                    轻商，家用
                                                </td>
                                                <td>
                                                    <span>
                                                        <input type="checkbox" />
                                                        <span style="margin-left:5px;margin-right:10px;">轻商</span>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    产品类型
                                                </th>
                                                <td>
                                                    定速，变频
                                                </td>
                                                <td>
                                                    <select name="productType_c" class="advSelect" v-model="productType_c">
                                                        <option value="-1">不限</option>
                                                        <option value="定速">定速</option>
                                                        <option value="变频">变频</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    电源-电压：
                                                </th>
                                                <td>
                                                    208V~230V~ 至 380V~415V~
                                                </td>
                                                <td>
                                                    <select name="powerVoltage_c" class="advSelect" v-model="powerVoltage_c">
                                                        <option value="-1">不限</option>
                                                        <option value="208V~230V~">208V~230V~</option>
                                                        <option value="220V/380V">220V/380V</option>
                                                        <option value="220V~">220V~</option>
                                                        <option value="220V~230V~">220V~230V~</option>
                                                        <option value="220V~240V~">220V~240V~</option>
                                                        <option value="230V~">230V~</option>
                                                        <option value="380V~">380V~</option>
                                                        <option value="380V~415V~">380V~415V~</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    电源-频率：
                                                </th>
                                                <td>
                                                    50Hz~60Hz
                                                </td>
                                                <td id="adv-setting-6">
                                                    <label for="freq_ctrl_0_c"><input name="freq_ctrl_0_c" id="freq_ctrl_0_c" v-model="powerFrquency_c" value="-1" class="radio" type="radio">不限</label>
                                                    <label for="freq_ctrl_1_c"><input name="freq_ctrl_1_c" id="freq_ctrl_1_c" v-model="powerFrquency_c" value="50Hz" class="radio" type="radio">50Hz</label>
                                                    <label for="freq_ctrl_2_c"><input name="freq_ctrl_2_c" id="freq_ctrl_2_c" v-model="powerFrquency_c" value="50/60Hz" class="radio" type="radio">50/60Hz</label>
                                                    <label for="freq_ctrl_3_c"><input name="freq_ctrl_3_c" id="freq_ctrl_3_c" v-model="powerFrquency_c" value="60Hz" class="radio" type="radio">60Hz</label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    电源-相数：
                                                </th>
                                                <td>
                                                    单相, 单相或三相, 三相
                                                </td>
                                                <!-- 电源-相数 radio型 -->
                                                <td id="adv-setting-6">
                                                    <label for="phase_ctrl_0_c"><input name="phase_ctrl_0_c" id="phase_ctrl_0_c" v-model="powerPhase_c" value="-1" class="radio" type="radio">不限</label>
                                                    <label for="phase_ctrl_1_c"><input name="phase_ctrl_1_c" id="phase_ctrl_1_c" v-model="powerPhase_c" value="1" class="radio" type="radio">单相</label>
                                                    <label for="phase_ctrl_2_c"><input name="phase_ctrl_2_c" id="phase_ctrl_2_c" v-model="powerPhase_c" value="1/3" class="radio" type="radio">单相或三相</label>
                                                    <label for="phase_ctrl_3_c"><input name="phase_ctrl_3_c" id="phase_ctrl_3_c" v-model="powerPhase_c" value="3" class="radio" type="radio">三相</label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th width="250">
                                                    冷量：
                                                </th>
                                                <td width="215">
                                                    7000~16000
                                                </td>
                                                <td>
                                                    <input type="text" placeholder="请输入冷量" v-model="lengliang_c" style="width:196px;padding-left:6px;" />
                                                    <span>
                                                        <select v-model="lengliangUnit_c" class="advSelect" style="width:60px;">
                                                            <option value="W">W</option>
                                                            <option value="BTU/h">BTU/h</option>
                                                        </select>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th width="250">
                                                    排气量：
                                                </th>
                                                <td width="215">
                                                    1~100
                                                </td>
                                                <td>
                                                    <input type="text" placeholder="请输入排气量" v-model="paiqiliang_c" style="width:271px;padding-left:6px;" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th width="250">
                                                    冷媒类型：
                                                </th>
                                                <td width="215">
                                                    R410A,R134a,R22,R32,R290
                                                </td>
                                                <td>
                                                    <select name="_refri" class="advSelect" v-model="lengmei_c">
                                                        <option value="-1">不限</option>
                                                        <option value="R410A">R410A</option>
                                                        <option value="R134A">R134A</option>
                                                        <option value="R22">R22</option>
                                                        <option value="R32">R32</option>
                                                        <option value="R290">R290</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th width="250">
                                                    转速：
                                                </th>
                                                <td width="215">
                                                    请输入您期望的转速
                                                </td>
                                                <td>
                                                    <input type="text" placeholder="请输入转速" v-model="rotationalSpeed_c" style="width:271px;padding-left:6px;" />
                                                </td>
                                            </tr>

                                            <tr>
                                                <th width="250">
                                                    高度：
                                                </th>
                                                <td width="215">
                                                    请输入您期望的压缩机高度
                                                </td>
                                                <td>
                                                    <input type="text" placeholder="请输入压缩机高度" v-model="heightSize_c" style="width:196px;padding-left:6px;" />
                                                    <span>
                                                        <select v-model="heightSizeUnit_c" class="advSelect" style="width:60px;">
                                                            <option value="mm">mm</option>
                                                            <option value="in">in</option>
                                                        </select>
                                                    </span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th width="250">
                                                    测试工况：
                                                </th>
                                                <td width="215">
                                                    默认为ASHRAE/T
                                                </td>
                                                <td>
                                                    <select name="capMeasCond_c" class="advSelect" v-model="capMeasCond_c">
                                                        <option value="-1">不限</option>
                                                        <option value="ASHRAE/T">ASHRAE/T</option>
                                                        <option value="高效工况">高效工况</option>
                                                        <option value="冷房定格">冷房定格</option>
                                                        <option value="冷房定格(1)">冷房定格(1)</option>
                                                        <option value="冷房定格(2)">冷房定格(2)</option>
                                                        <option value="冷房定格(3)">冷房定格(3)</option>
                                                        <option value="冷房定格(4)">冷房定格(4)</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <table width="575px;" style="table-layout:fixed;margin-left:175px;" cellspacing="0" cellpadding="0">
                                    <tbody>
                                        <tr>
                                            <th width="75">
                                                请您留言：
                                            </th>
                                            <td width="215">
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="6" style="font-size:15px;height:35px;line-height:35px;">
                                                <textarea name="_comments" id="" cols="69" rows="8" ng-minlength="10" placeholder="请输入至少5个汉字" style="margin-left:8px;padding:5px;" required></textarea>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="6" id="adv-setting-7" style="text-align:right;">
                                                <div style="padding-top:10px">
                                                    <input type="button" class="advanced-search-btn" style="border-top:1px solid #38f;border-bottom:1px solid #38f;border-left:none;border-right:none;margin:0;" value="提交">
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 联系我们 结束 -->
</template>
<script>
export default {
  name: "contactUsForm",
  data() {
    return {
      productType_c: "-1",
      powerVoltage_c: "-1",
      powerFrquency_c: "-1",
      powerPhase_c: "-1",
      paiqiliang_c: "",
      lengliang_c: "",
      lengliangUnit_c: "W",
      lengmei_c: "-1",
      rotationalSpeed_c: "",
      heightSize_c: "",
      heightSizeUnit_c: "mm",
      capMeasCond_c: "-1"
    };
  },
  methods: {
    closeForm(name) {
      this.$store.commit("closeForm", name);
    }
  },
  computed: {
    contactUsOpened() {
      return this.$store.state.contactUsOpened;
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
