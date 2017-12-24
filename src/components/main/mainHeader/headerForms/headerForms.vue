<template>
    <div class="container">
        <advSearchForm></advSearchForm>
        <contactUsForm></contactUsForm>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from "vuex";
import advSearchForm from "./advSearchForm/advSearchForm.vue";
import contactUsForm from "./contactUsForm/contactUsForm.vue";
export default {
  name: "headerForms",
  components: {
    advSearchForm,
    contactUsForm
  }
};
</script>

<style>

</style>
