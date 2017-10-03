<template>
    <div class="header">
    <div class="container">
        <ul class="nav">
            <li style="float:left" class="highly_group"><a style="display:block;width:30px;height:45px;"></a></li>
            <li id="logout" style="float:right"><a href="javascript:void(0)">[登 出]</a></li>
            <li style="float:right">你 好，<a>李 暘</a></li>
            <li id="board" style="float:right"><a href="javascript:void(0)" @click="toggleForm('contactUsOpened')">联系我们</a></li>
            <li id="advancedSearch" style="float:right"><a href="javascript:void(0)" @click="toggleForm('advSearchOpened')">高级搜索</a></li>
        </ul>
    </div>
    </div>
</template>

<script>
import {mapGetters,mapActions,mapMutations,mapState} from 'vuex';　
export default {
  name: 'mainHeader',
  // data () {
  //   return {
  //     msg: 'Welcome to Your Vue.js App'
  //   }
  // }
  methods:{
    toggleForm(name){
        this.$store.commit('toggleForm',name)
    }
  }
}
</script>

<style>

</style>
