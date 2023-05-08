<template>
  <div id="app">
<!--    <a href="/">Home</a>
    <a href="/login">Login</a>-->
<!--    <router-link to="/">Home</router-link>
    <router-link to="/login">Login</router-link>-->
    <Navbar />
    <router-view></router-view> <!-- 라우팅에 따라 컴포넌트가 바뀌는 부분 -->
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: 'app',
  components: { Navbar },
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
