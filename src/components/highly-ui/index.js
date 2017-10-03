import hiButtonComponent from './button/button.vue'
import tMTable from './testModeTable/testModeTable.vue'

const highlyUI = {
    install:function(Vue){
        Vue.component('hiButton',hiButtonComponent);
        Vue.component('testModeTable',tMTable);
    }
};

export default highlyUI