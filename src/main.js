// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import VuePaginate from 'vue-paginate'
import HighCharts from 'highcharts'
import highlyUI from './components/highly-ui/'
// import d3 from 'd3'
// import Faker from 'Faker'
// import _ from 'lodash'
// import VueNvd3 from 'vue-nvd3-charts'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VuePaginate)
Vue.use(highlyUI)
Vue.use(HighCharts)
// Vue.use(d3)
// Vue.use(_)
// Vue.use(VueNvd3)


Vue.config.productionTip = false

/* eslint-disable no-new */


// vuex store
const store = new Vuex.Store({
  state: {
    // headerFooterShouldHide:false,
    advSearchOpened: false,//高级搜索 
    contactUsOpened: false, //联系我们
    showRecommendedResults: true, //展示推荐机种 / 展示所有机种
    showAllResults: false,
    username: '',
    recommendedResults: '',
    searchResults: '',
    resultById: '',
    performanceCurve: { "45": [{ "x": -20, "y": 0 }, { "x": -15, "y": 0 }, { "x": -10, "y": 0 }, { "x": -5, "y": 0 }, { "x": 0, "y": 0 }, { "x": 5, "y": 0 }, { "x": 7.2, "y": 0 }, { "x": 10, "y": 0 }, { "x": 12.5, "y": 0 }], "35": [{ "x": -20, "y": 0 }, { "x": -15, "y": 0 }, { "x": -10, "y": 0 }, { "x": -5, "y": 0 }, { "x": 0, "y": 0 }, { "x": 5, "y": 0 }, { "x": 7.2, "y": 0 }, { "x": 10, "y": 0 }, { "x": 12.5, "y": 0 }], "60": [{ "x": -20, "y": 0 }, { "x": -15, "y": 0 }, { "x": -10, "y": 0 }, { "x": -5, "y": 0 }, { "x": 0, "y": 0 }, { "x": 5, "y": 0 }, { "x": 7.2, "y": 0 }, { "x": 10, "y": 0 }, { "x": 12.5, "y": 0 }], "50": [{ "x": -20, "y": 0 }, { "x": -15, "y": 0 }, { "x": -10, "y": 0 }, { "x": -5, "y": 0 }, { "x": 0, "y": 0 }, { "x": 5, "y": 0 }, { "x": 7.2, "y": 0 }, { "x": 10, "y": 0 }, { "x": 12.5, "y": 0 }], "40": [{ "x": -20, "y": 0 }, { "x": -15, "y": 0 }, { "x": -10, "y": 0 }, { "x": -5, "y": 0 }, { "x": 0, "y": 0 }, { "x": 5, "y": 0 }, { "x": 7.2, "y": 0 }, { "x": 10, "y": 0 }, { "x": 12.5, "y": 0 }], "30": [{ "x": -20, "y": 0 }, { "x": -15, "y": 0 }, { "x": -10, "y": 0 }, { "x": -5, "y": 0 }, { "x": 0, "y": 0 }, { "x": 5, "y": 0 }, { "x": 7.2, "y": 0 }, { "x": 10, "y": 0 }, { "x": 12.5, "y": 0 }], "54.4": [{ "x": -20, "y": 0 }, { "x": -15, "y": 0 }, { "x": -10, "y": 0 }, { "x": -5, "y": 0 }, { "x": 0, "y": 0 }, { "x": 5, "y": 0 }, { "x": 7.2, "y": 0 }, { "x": 10, "y": 0 }, { "x": 12.5, "y": 0 }], "65": [{ "x": -20, "y": 0 }, { "x": -15, "y": 0 }, { "x": -10, "y": 0 }, { "x": -5, "y": 0 }, { "x": 0, "y": 0 }, { "x": 5, "y": 0 }, { "x": 7.2, "y": 0 }, { "x": 10, "y": 0 }, { "x": 12.5, "y": 0 }] },
    detailTabs: {
      detailInfo: true,
      tmCalc: false,
      performanceTable: false,
      performanceGraph: false,
      techDoc: false,
      dllPage: false
    }

  },
  mutations: {
    setUserName(state, username) {
      state.username = username;
    },
    // setPassWord(state,password) {
    //   state.password = password;
    // },
    updateLoginStatus(state, loginStatus) {
      state.loginStatus = loginStatus
    },
    updateRecommendedResults(state, recommendedResults) {
      state.recommendedResults = recommendedResults
    },
    updateSearchResults(state, searchResults) {
      state.searchResults = searchResults
    },
    updateResultById(state, resultById) {
      state.resultById = resultById
    },
    updatePerformanceCurve(state, performanceCurve) {
      state.performanceCurve = performanceCurve
    },
    toggleForm(state, name) {
      state[name] = !state[name];
    },
    closeForm(state, name) {
      state[name] = false;
    },
    toggleSearchResults(state, whichOne) {
      state.showRecommendedResults = false;
      state.showAllResults = false;
      (whichOne === 'recommended') ? state.showRecommendedResults = true : state.showAllResults = true;
    },
    toggleDetailTabs(state, whichOne) {
      // detailInfo:true,
      // tmCalc:false,
      // performanceTable:false,
      // performanceGraph:false,
      // techDoc:false,
      // dllPage:false
      for (let detailTab in state.detailTabs) {
        state.detailTabs[detailTab] = false
      }
      switch (whichOne) {
        case "detailInfo":
          state.detailTabs.detailInfo = true
          break
        case "tmCalc":
          state.detailTabs.tmCalc = true
          break
        case "performanceTable":
          state.detailTabs.performanceTable = true
          break
        case "performanceGraph":
          state.detailTabs.performanceGraph = true
          break
        case "techDoc":
          state.detailTabs.techDoc = true
          break
        case "dllPage":
          state.detailTabs.dllPage = true
          break
        default:
          state.detailTabs.detailInfo = true

      }

    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// new Vue({
//   el: '#app',
//   router,
//   store,
//   render: h => h(App)
// })
