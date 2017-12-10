<template>
    <div>
        <headerBar></headerBar>
        <headerForms></headerForms>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from 'vuex';
import headerBar from './headerBar.vue'
import headerForms from './headerForms.vue'
export default {
    name: 'mainHeader',
    // data () {
    //   return {
    //     msg: 'Welcome to Your Vue.js App'
    //   }
    // }
    components:{
        headerBar,
        headerForms
    },
    methods: {
        toggleForm(name) {
            this.$store.commit('toggleForm', name)
        }
    }
}
</script>

<style>

</style>
