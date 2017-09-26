<template>
    <div class="container">
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
                                                <tr>
                                                    <th>
                                                        应用领域：
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
                                                        产品类型：
                                                    </th>
                                                    <td>
                                                        定速，变频
                                                    </td>
                                                    <td>
                                                        <select name="productType" class="advSelect">
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
                                                        208V-230V~ 到 380V-415V~
                                                    </td>
                                                    <td>
                                                        <select name="powerVoltage" class="advSelect">
                                                            <option value="-1">不限</option>
                                                            <option value="208V-230V~">208V-230V~</option>
                                                            <option value="220V-230V~">220V-230V~</option>
                                                            <option value="220V-240V~">220V-240V~</option>
                                                            <option value="220V/380V">220V/380V</option>
                                                            <option value="220V~">220V~</option>
                                                            <option value="230V~">230V~</option>
                                                            <option value="380V~">380V~</option>
                                                            <option value="380V-415V~">380V-415V~</option>
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
                                                        <label for="freq_ctrl_0"><input name="freq_ctrl" id="freq_ctrl_0" value="-1" class="radio" type="radio">不限</label>
                                                        <label for="freq_ctrl_1"><input name="freq_ctrl" id="freq_ctrl_1" value="50Hz" class="radio" type="radio">50Hz</label>
                                                        <label for="freq_ctrl_2"><input name="freq_ctrl" id="freq_ctrl_2" value="50/60Hz" class="radio" type="radio">50/60Hz</label>
                                                        <label for="freq_ctrl_3"><input name="freq_ctrl" id="freq_ctrl_3" value="60Hz" class="radio" type="radio">60Hz</label>
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
                                                        <label for="phase_ctrl_0"><input name="phase_ctrl" id="phase_ctrl_0" value="-1" class="radio" type="radio">不限}}</label>
                                                        <label for="phase_ctrl_1"><input name="phase_ctrl" id="phase_ctrl_1" value="1" class="radio" type="radio">单相</label>
                                                        <label for="phase_ctrl_2"><input name="phase_ctrl" id="phase_ctrl_2" value="1/3" class="radio" type="radio">单相或三相</label>
                                                        <label for="phase_ctrl_3"><input name="phase_ctrl" id="phase_ctrl_3" value="3" class="radio" type="radio">三相</label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th width="250">
                                                        冷量：
                                                    </th>
                                                    <td width="215">
                                                        <span>7000~16000
                                                            <span class="unitStyle">W</span>
                                                        </span>
                                                        <!--<span ng-show="britishSystem == 'on'">23884~54592 <span class="unitStyle">BTU/h</span></span>-->
                                                    </td>
                                                    <td>
                                                        <input type="text" placeholder="请输入冷量" class="advSelect" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th width="250">
                                                        冷媒类型
                                                    </th>
                                                    <td width="215">
                                                        R410A,R134a,R22,R32,R290
                                                    </td>
                                                    <td>
                                                        <select name="refri" class="advSelect">
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
                                                        测试工况
                                                    </th>
                                                    <td width="215">
                                                        默认为 ASHRAE/T
                                                    </td>
                                                    <td>
                                                        <select name="refri" class="advSelect">
                                                            <option value="-1" ng-selected="true">不限</option>
                                                            <option value="ASHRAE/T">ASHRAE/T</option>
                                                            <option value="高效工况">高效工况</option>
                                                            <option value="冷房定格">冷房定格'</option>
                                                            <option value="冷房中间">冷房中间'</option>
                                                            <option value="暖房定格">暖房定格'</option>
                                                            <option value="暖房中间">暖房中间'</option>
                                                            <option value="低温制热">低温制热'</option>
                                                            <option value="最大制冷">最大制冷'</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th width="250">
                                                        单位系统：
                                                    </th>
                                                    <td width="215">
                                                        <span>公制 或 英制</span>
                                                    </td>
                                                    <td>
                                                        <span>
                                                            <select name="" class="advSelect" style="width:60px;" id="">
                                                                <option value="off">公制</option>
                                                                <option value="on">英制</option>
                                                            </select>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        &nbsp;
                                                    </th>
                                                    <td>
                                                        &nbsp;
                                                    </td>
                                                    <td id="adv-setting-7">
                                                        <div style="padding-top:10px">
                                                            <input type="button" class="advanced-search-btn" style="border-top:1px solid #38f;border-bottom:1px solid #38f;border-left:none;border-right:none" value="高级搜索">
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <table width="575px;" style="text-align:center;table-layout:fixed;margin-left:175px;" cellspacing="0" cellpadding="0">
                                        <tbody>
                                            <tr>
                                                <td colspan="6" style="background:#f3f3f3;border-top:1px solid #ddd;font-size:15px;height:35px;line-height:35px;">
                                                    <b>变频压缩机测试工况参数表'</b>
                                                </td>
                                            </tr>
                                            <tr class="tm-table">
                                                <td>
                                                    <b>TESTMODE</b>
                                                </td>
                                                <td>
                                                    <b>冷凝温度</b>
                                                </td>
                                                <td>
                                                    <b>蒸发温度</b>
                                                </td>
                                                <td>
                                                    <b>过冷度</b>
                                                </td>
                                                <td>
                                                    <b>过热度</b>
                                                </td>
                                                <td>
                                                    <b>环境温度</b>
                                                </td>
                                            </tr>
                                            <tr class="tm-table">
                                                <td>
                                                    <b>ASHRAE/T</b>
                                                </td>
                                                <td>
                                                    54.4
                                                </td>
                                                <td>
                                                    7.2
                                                </td>
                                                <td>
                                                    8.3
                                                </td>
                                                <td>
                                                    27.8
                                                </td>
                                                <td>
                                                    35
                                                </td>
                                            </tr>
                                            <tr class="tm-table">
                                                <td>
                                                    <b>'高效工况</b>
                                                </td>
                                                <td>
                                                    46
                                                </td>
                                                <td>
                                                    7.2
                                                </td>
                                                <td>
                                                    8.3
                                                </td>
                                                <td>
                                                    11.1
                                                </td>
                                                <td>
                                                    35
                                                </td>
                                            </tr>
                                            <tr class="tm-table">
                                                <td>
                                                    <b>'冷房定格</b>
                                                </td>
                                                <td>
                                                    45
                                                </td>
                                                <td>
                                                    7.2
                                                </td>
                                                <td>
                                                    8.3
                                                </td>
                                                <td>
                                                    11.1
                                                </td>
                                                <td>
                                                    35
                                                </td>
                                            </tr>
                                            <tr class="tm-table">
                                                <td>
                                                    <b>'冷房中间</b>
                                                </td>
                                                <td>
                                                    40
                                                </td>
                                                <td>
                                                    15
                                                </td>
                                                <td>
                                                    8.3
                                                </td>
                                                <td>
                                                    11.1
                                                </td>
                                                <td>
                                                    35
                                                </td>
                                            </tr>
                                            <tr class="tm-table">
                                                <td>
                                                    <b>'暖房定格</b>
                                                </td>
                                                <td>
                                                    50
                                                </td>
                                                <td>
                                                    -2
                                                </td>
                                                <td>
                                                    8.3
                                                </td>
                                                <td>
                                                    12.1
                                                </td>
                                                <td>
                                                    7
                                                </td>
                                            </tr>
                                            <tr class="tm-table">
                                                <td>
                                                    <b>'暖房中间</b>
                                                </td>
                                                <td>
                                                    35
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    8.3
                                                </td>
                                                <td>
                                                    13.1
                                                </td>
                                                <td>
                                                    7
                                                </td>
                                            </tr>
                                            <tr class="tm-table">
                                                <td>
                                                    <b>'低温制热</b>
                                                </td>
                                                <td>
                                                    55
                                                </td>
                                                <td>
                                                    -6.8
                                                </td>
                                                <td>
                                                    8.3
                                                </td>
                                                <td>
                                                    12.1
                                                </td>
                                                <td>
                                                    7
                                                </td>
                                            </tr>
                                            <tr class="tm-table">
                                                <td>
                                                    <b>最大制冷</b>
                                                </td>
                                                <td>
                                                    55
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    8.3
                                                </td>
                                                <td>
                                                    11.1
                                                </td>
                                                <td>
                                                    35
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
        <!-- 高级搜索 结束 -->
    </div>
</template>

<script>
import {mapGetters,mapActions,mapMutations,mapState} from 'vuex';　
export default {
    name: 'headerForms',
    methods:{
        closeForm(name){
            this.$store.commit('closeForm',name);
        }
    },
    computed:{
        advSearchOpened(){
            return this.$store.state.advSearchOpened
        }
    }
}
  // data () {
  //   return {
  //     msg: 'Welcome to Your Vue.js App'
  //   }
  // }

</script>

<style>

</style>
