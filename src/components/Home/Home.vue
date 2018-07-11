<template>
    <div>
        <mainHeader></mainHeader>
        <headerForms></headerForms>
        <mainContent></mainContent>
        <mainFooter></mainFooter>
    </div>
</template>

<script>
import mainHeader from "../main/mainHeader/mainHeader.vue";
import headerForms from "../main/mainHeader/headerForms/headerForms.vue";
import mainContent from "../main/mainContent/mainContent.vue";
import mainFooter from "../main/mainFooter/mainFooter.vue";
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
