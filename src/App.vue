<template>
  <div id="app">
    <keep-alive exclude="Detail"> <!--將讀取過的頁面資訊存於CACHE中，當返回頁面時，直接從CACHE拿，就不會再加載一次資訊-->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
