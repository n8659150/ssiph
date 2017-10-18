// 主页头部表单及按钮
import hiButtonComponent from './hiFormButton/hiFormButton.vue'
import tMTable from './testModeTable/testModeTable.vue'
import hiFormDropDown from './hiFormDropDown/hiFormDropDown.vue'
import hiFormCheckBox from './hiFormCheckBox/hiFormCheckBox.vue'
import hiFormRadioSet from './hiFormRadioSet/hiFormRadioSet.vue'
import hiFormRawInput from './hiFormRawInput/hiFormRawInput.vue'
// 注册/登录页输入框
import hiLoginRawInput from './hiLoginRawInput/hiLoginRawInput.vue'
import hiLoginButton from './hiLoginButton/hiLoginButton.vue'
const highlyUI = {
    install: function (Vue) {
        Vue.component('hiButton', hiButtonComponent);
        Vue.component('testModeTable', tMTable);
        Vue.component('hiFormDropDown', hiFormDropDown);
        Vue.component('hiFormCheckBox', hiFormCheckBox);
        Vue.component('hiFormRadioSet', hiFormRadioSet);
        Vue.component('hiFormRawInput', hiFormRawInput);
        Vue.component('hiLoginRawInput', hiLoginRawInput);
        Vue.component('hiLoginButton', hiLoginButton);
    }
};

export default highlyUI