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
                                            
                                            {{productTerritory.model}}
                                            <hiFormCheckBox :title="productTerritory.title" :description="productTerritory.description" :options="productTerritory.options" v-model="productTerritory.model"></hiFormCheckBox>
                                            <hiFormDropDown :title="productType.title" :description="productType.description" :options="productType.options" v-model="productType.model"></hiFormDropDown>
                                            <hiFormDropDown :title="powerVoltage.title" :description="powerVoltage.description" :options="powerVoltage.options" v-model="powerVoltage.model"></hiFormDropDown>
                                            <tr>
                                                <th>
                                                    电源-频率：
                                                </th>
                                                <td>
                                                    50Hz~60Hz
                                                </td>
                                                <td id="adv-setting-6">
                                                    <label for="freq_ctrl_0_a"><input name="freq_ctrl_0_a" id="freq_ctrl_0_a"  v-model="powerFrquency_a" value="-1" class="radio" type="radio">不限</label>
                                                    <label for="freq_ctrl_1_a"><input name="freq_ctrl_1_a" id="freq_ctrl_1_a"  v-model="powerFrquency_a" value="50Hz" class="radio" type="radio">50Hz</label>
                                                    <label for="freq_ctrl_2_a"><input name="freq_ctrl_2_a" id="freq_ctrl_2_a"  v-model="powerFrquency_a" value="50/60Hz" class="radio" type="radio">50/60Hz</label>
                                                    <label for="freq_ctrl_3_a"><input name="freq_ctrl_3_a" id="freq_ctrl_3_a"  v-model="powerFrquency_a" value="60Hz" class="radio" type="radio">60Hz</label>
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
                                                    <label for="phase_ctrl_0_a"><input name="phase_ctrl_0_a" id="phase_ctrl_0_a"  v-model="powerPhase_a" value="-1" class="radio" type="radio">不限</label>
                                                    <label for="phase_ctrl_1_a"><input name="phase_ctrl_1_a" id="phase_ctrl_1_a"  v-model="powerPhase_a" value="1" class="radio" type="radio">单相</label>
                                                    <label for="phase_ctrl_2_a"><input name="phase_ctrl_2_a" id="phase_ctrl_2_a"  v-model="powerPhase_a" value="1/3" class="radio" type="radio">单相或三相</label>
                                                    <label for="phase_ctrl_3_a"><input name="phase_ctrl_3_a" id="phase_ctrl_3_a"  v-model="powerPhase_a" value="3" class="radio" type="radio">三相</label>
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
                                                    <input type="text" v-model="lengliang_a" placeholder="请输入冷量" class="advSelect" />
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
                                                    <select name="refri" class="advSelect" v-model="lengmei_a">
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
                                                    测试工况：
                                                </th>
                                                <td width="215">
                                                    默认为 ASHRAE/T
                                                </td>
                                                <td>
                                                    <select name="refri" class="advSelect" v-model="capMeasCond_a">
                                                        <option value="-1" ng-selected="true">不限</option>
                                                        <option value="ASHRAE/T">ASHRAE/T</option>
                                                        <option value="高效工况">高效工况</option>
                                                        <option value="冷房定格">冷房定格</option>
                                                        <option value="冷房中间">冷房中间</option>
                                                        <option value="暖房定格">暖房定格</option>
                                                        <option value="暖房中间">暖房中间</option>
                                                        <option value="低温制热">低温制热</option>
                                                        <option value="最大制冷">最大制冷</option>
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
                                                    <hiButton v-on:click.native="testInvoke()"></hiButton>
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
import globalConsts from './globalConsts.vue';
import queries from './queries.vue';
export default {
    name: 'advSearchForm',
     data(){
        return {
            powerVoltage_a:'-1',
            powerFrquency_a:'-1',
            powerPhase_a:'-1',
            lengliang_a:'',
            lengliangUnit_a:'W',
            lengmei_a:'-1',
            capMeasCond_a:'-1',
            serverUrl:globalConsts.serverUrl,
            productTerritory:{
                model:['轻商','家用'],
                s:[],
                title:'应用领域：',
                description:'轻商，家用',
                options:[{checked:true,value:"轻商"},{checked:true,value:"家用"}]
            },
            productType:{
                model:'-1',
                title:'产品类型：',
                description:'定速，变频',
                options:[{value:"定速"},{value:"变频"}]
            },
            powerVoltage:{
                model:'-1',
                title:'电源-电压：',
                description:'208V-230V~ 到 380V-415V~',
                options:[{value:"208V-230V~"},{value:"220V-230V~"},{value:"220V-240V~"},{value:"220V/380V"},{value:"220V~"},{value:"230V~"},{value:"380V~"},{value:"380V-415V~"}]
            }
        }
    },
    methods:{
        closeForm(name){
            this.$store.commit('closeForm',name);
        },
        testInvoke(){
            queries.test();
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
