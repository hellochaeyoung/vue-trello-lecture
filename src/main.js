import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 컴포넌트 생성
const Login = { template: '<div>Login Page</div>' }
const NotFound = { template: '<div>Page not found</div>' }

// 2. vue router를 사용해 라우팅 맵 생성
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: App },
    { path: '/login', component: Login },
    { path: '*', component: NotFound } // url이 매칭되지 않으면 보여주는 컴포넌트
  ]
})


/*// 1. 라우팅 맵을 자바스크립트 객체로 생성, 경로에 따라 컴포넌트로 라우팅 되도록
const routes = {
  '/': App,
  '/login': Login
}*/

new Vue({
  el: '#app',
  /*computed: {
    VueComponent() {
      return routes[window.location.pathname] || NotFound
    }
  },*/
  router,
  render: h => h({template: '<router-view></router-view>'})
})

