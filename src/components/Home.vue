<template>
    <div>
        <mainHeader></mainHeader>
        <headerForms></headerForms>
        <mainContent></mainContent>
        <mainFooter></mainFooter>
    </div>
</template>

<script>
import mainHeader from "./mainHeader.vue";
import headerForms from "./headerForms.vue";
import mainContent from "./mainContent.vue";
import mainFooter from "./mainFooter.vue";
export default {
  name: "home",
  components: {
    mainHeader,
    headerForms,
    mainContent,
    mainFooter
  }
};
</script>

<style>

</style>
