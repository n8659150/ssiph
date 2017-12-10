<script type="text/javascript">
// const colorListLength = 20
// function getRandColor () {
//   var tem = Math.round(Math.random() * colorListLength)
//   return colorList[tem]
// }

import globalConsts from './globalConsts.vue'
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
// 空参数过滤
function setParams (value){
    if(value === null || value === undefined || value == -1 || value.length == 0){
        console.log("value is null")
        return;
    }
    if (value.hasOwnProperty("push")){
        if (value.length == 1){
            console.log(value[0]);
            return value[0];
        } else {
            return value.split(",").join(",");
        }
    } else {
        return value;
    }
}
// 参数转换
function paramsParser(paramlist){
    var registerParams = [];
    for (var key in paramlist) {
        if(paramlist[key] === null || paramlist[key] === undefined || paramlist[key] == -1){
            continue;
        }
        var temp = key + '=' + paramlist[key];
        registerParams.push(temp);
    }
    return registerParams
}

// 全局搜索
function fuzzyQuery(keyword){
    var fullUrl = globalConsts.serverUrl + globalConsts.globalSearch + "fuzzyQuery=" + keyword;
    return Vue.http.jsonp(fullUrl, { jsonp: "callback" })
}
function queryById(id){
    var fullUrl = globalConsts.serverUrl + globalConsts.getProductsById + "id=" + id + "&callback=JSON_CALLBACK";
    return this.$http.jsonp(fullUrl)
}

// 高级搜索
function advQuery(params){
    var fullUrl  = globalConsts.serverUrl + globalConsts.showProducts + params.join('&') + "&callback=JSON_CALLBACK";
    return $http.jsonp(fullUrl)
}
// 提交用户留言和信息给产品经理
function toPM(params){
    var fullUrl = globalConsts.serverUrl + globalConsts.insertContactInfo + params.join('&') + "&callback=JSON_CALLBACK";
    return $http.jsonp(fullUrl)
}
// 全性能曲线 , 20170928 - 共3个必选参数，目前只带机种名称，其余2个暂时写死。
function performanceCurve(params){
    var fullUrl = globalConsts.serverUrl + globalConsts.getCalcResult + params.join('&') + "&callback=JSON_CALLBACK";
    return $http.jsonp(fullUrl) 
}
// 获取DLL文件和技术协议书的文件名
function getFileNameFromURL(url) {
    if(url.length == 0) return 
    var result = url.split('/');
    return result[result.length -1]
    
}

function test() {
  alert("yes I am invoked");
}
export default
{ 
  fuzzyQuery,
  queryById,
  paramsParser,
  setParams,
  advQuery,
  toPM,
  performanceCurve,
  getFileNameFromURL,
  test
}
</script>
