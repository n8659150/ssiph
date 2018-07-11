<template>
    <div class="copyrights">{{footerText}}</div>
</template>

<script>
export default {
  name: "loginFooter",
  props: ["footerText"]
};
</script>

<style>
.copyrights { 
	position: absolute;
	bottom: 10px;
	width: 100%;
	text-align: center;
	display: block;
}
</style>
