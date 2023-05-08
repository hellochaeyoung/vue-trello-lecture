import Vue from 'vue'
import router from "./router";
import App from "./App";

new Vue({
  el: '#app',
  router,
  render: h => h(App) // 요청 url에 따라서 렌더링 되는 부분
})

