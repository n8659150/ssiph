<template>
    <div class="rem_sub">
        <label>
            <input type="button" class="loginButton" id="loginButton" :value="buttonText" :disabled="isDisabled" style="opacity: 0.92;" />
        </label>
    </div>
</template>
<script>
export default {
  props: { buttonText: String, isDisabled: Boolean }
};
</script>
<style scoped>

</style>