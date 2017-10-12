import hiButtonComponent from './button/button.vue'
import tMTable from './testModeTable/testModeTable.vue'
import hiFormDropDown from './hiFormDropDown/hiFormDropDown.vue'
import hiFormCheckBox from './hiFormCheckBox/hiFormCheckBox.vue'
import hiFormRadioSet from './hiFormRadioSet/hiFormRadioSet.vue'
import hiFormRawInput from './hiFormRawInput/hiFormRawInput.vue'

const highlyUI = {
    install: function (Vue) {
        Vue.component('hiButton', hiButtonComponent);
        Vue.component('testModeTable', tMTable);
        Vue.component('hiFormDropDown', hiFormDropDown);
        Vue.component('hiFormCheckBox', hiFormCheckBox);
        Vue.component('hiFormRadioSet', hiFormRadioSet);
        Vue.component('hiFormRawInput', hiFormRawInput);

    }
};

export default highlyUI