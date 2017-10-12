import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import mainContent from './components/mainContent.vue'
import highlyUI from './components/highly-ui/'
Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(highlyUI)


// const Foo = { template: '<div>foo</div>' };
// const Bar = { template: '<div>bar</div>' };

// vuex store
const store = new Vuex.Store({
  state: {
    advSearchOpened: false,//高级搜索 
    contactUsOpened: false //联系我们
  },
  mutations: {
    // toggleAdvSearch(state) {
    //   state.advSearchOpened = !state.advSearchOpened
    // },
    // closeAdvSearch(state) {
    //   state.advSearchOpened = false;
    // },
    // toggleContactUs(state) {
    //   state.contactUsOpened = !state.contactUsOpened
    // },
    // closeContactUs(state) {
    //   state.contactUsOpened = false;
    // },
    toggleForm(state, name) {
      state[name] = !state[name];
    },
    closeForm(state, name) {
      state[name] = false;
    }
  }
})

// router config
const routes = [
  { path: '/', component: mainContent }
  // { path: '/bar', component: Bar }
];
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
