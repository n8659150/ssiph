import hiButtonComponent from './button/button.vue'
import tMTable from './testModeTable/testModeTable.vue'
import hiFormDropDown from './hiFormDropDown/hiFormDropDown.vue'
import hiFormCheckBox from './hiFormCheckBox/hiFormCheckBox.vue'

const highlyUI = {
    install:function(Vue){
        Vue.component('hiButton',hiButtonComponent);
        Vue.component('testModeTable',tMTable);
        Vue.component('hiFormDropDown',hiFormDropDown);
        Vue.component('hiFormCheckBox',hiFormCheckBox);
    }
};

export default highlyUI