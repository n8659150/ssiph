import tMTableComponent from './testModeTable.vue'

const tMTable = {
    install:function(Vue){
        Vue.component('testModeTable',tMTableComponent)
    }
};
export default tMTable

