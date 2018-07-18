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
.rem_sub {
    clear:both;
}
.rem_sub input.loginButton {
	width: 309px;
	height: 32px;
	background-color: #0071bf;
	/*background:url("../../images/btn_bg.png") repeat-x;*/
	border: none;
	color: #FFF;
	padding-bottom: 2px;
	font-size: 16px;
	font-weight: bold;
}
</style>