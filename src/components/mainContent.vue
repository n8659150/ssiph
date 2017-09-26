<template>
  <div class="main">
    <div class="container">
      <div class="search_index">
        <a class="logo logo_cn"></a>
        <div class="search_bar">
          <input type="text" class="search_key" placeholder="" />
          <button class="search_btn"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainContent',
  // data () {
  //   return {
  //     msg: 'Welcome to Your Vue.js App'
  //   }
  // },
 computed:{
   advSearchOpened(){
     return this.$store.state.advSearchOpened
   }
 }
}
</script>

<style>

</style>
