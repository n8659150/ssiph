<template>
    <div class="container">
        <advSearchForm></advSearchForm>
        <contactUsForm></contactUsForm>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from 'vuex';
import advSearchForm from './advSearchForm.vue'
import contactUsForm from './contactUsForm.vue'
export default {
    name: 'headerForms',
    components: {
        advSearchForm,
        contactUsForm
    }
}
  // data () {
  //   return {
  //     msg: 'Welcome to Your Vue.js App'
  //   }
  // }

</script>

<style>

</style>
