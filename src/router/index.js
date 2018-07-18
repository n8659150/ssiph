import Vue from 'vue'
import Router from 'vue-router'
import mainContent from '@/components/main/mainContent/mainContent'
import login from '@/components/login/login'
import signup from '@/components/signup/signup'
import mainResult from '@/components/main/mainResult/mainResult'
import detailResult from '@/components/main/detailResult/detailResult'
import auth from "@/helpers/auth/auth.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', name: 'home', component: mainContent,
      beforeEnter: (to, from, next) => {
        auth
          .isUserLogin()
          .then(
          res =>
            res.data.resultType === "1" ? next({ path: '/login' }) : console.log(res.data),
          res => console.log(res)
          );
        if (localStorage.length === 0) {
          next({ path: '/login' })
        }
        next()
      }
    },
    {
      path: '/list', name: 'list', component: mainResult,
      beforeEnter: (to, from, next) => {
        auth
          .isUserLogin()
          .then(
          res =>
            res.data.resultType === "1" ? next({ path: '/login' }) : console.log(res.data),
          res => console.log(res)
          );
        if (localStorage.length === 0) {
          next({ path: '/login' })
        }
        next()
      }
    },
    { path: '/login', name: 'login', component: login },
    { path: '/signup', name: 'singup', component: signup },
    {
      path: '/result/:id', name: 'result', component: detailResult,
      beforeEnter: (to, from, next) => {
        auth
          .isUserLogin()
          .then(
          res =>
            res.data.resultType === "1" ? next({ path: '/login' }) : console.log(res.data),
          res => console.log(res)
          );
        if (localStorage.length === 0) {
          next({ path: '/login' })
        }
        next()
      }
    }
  ]
})
