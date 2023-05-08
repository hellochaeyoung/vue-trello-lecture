<template>
  <div id="app">
    여기서부터 코드를 시작합니다!
    <router-view></router-view> <!-- 라우팅에 따라 컴포넌트가 바뀌는 부분 -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
