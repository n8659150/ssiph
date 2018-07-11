<script type="text/javascript">
const serverUrl = 'http://172.18.88.189:8080/';
// const serverUrl = "http://210.13.98.37:8080/";
// 用户唯一性判断
const booleanUser = "hpiss/user/boolearnUser.action?";
// 用户注册
const insertUser = "hpiss/user/insertUser.action?";
// 用户登录
const login = "hpiss/user/login.action?";
// 用户登出
const logout = "hpiss/user/logout.action?";
// 用户session是否有效
const isLogin = "hpiss/user/isLogin.action?";
// 提交用户留言
const insertContactInfo = "hpiss/user/insertContactInfo.json?";
// 获取满足指定条件的机种信息
const showProducts = "hpiss/products/showProducts.json?";
// 获取系统中所有机种型号
const showProductNames = "hpiss/products/showProductNames.json?";
// 模糊查询（全局查询）
const globalSearch = "hpiss/products/globalSearch.json?";
// 根据id查询机种信息
const getProductsById = "hpiss/products/getProductsById.json?";
// 全性能曲线计算
const getCalcResult = "hpiss/calculation/getCalcResult.json?";

export default {
  serverUrl,
  booleanUser,
  insertUser,
  login,
  logout,
  isLogin,
  insertContactInfo,
  showProducts,
  showProductNames,
  globalSearch,
  getProductsById,
  getCalcResult
};
</script>
