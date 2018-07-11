<template>
  <div class="footer">
    www.highly.cc
    <div class="icp">
      沪ICP证00000号 沪ICP备10000000号 沪公网安备10000000000号
    </div>
  </div>
</template>

<script>
export default {
  name: "mainFooter"
};
</script>

<style>
@media all and (max-height:835px){ 
	.footer {
		display:none
	}
	.detail-table-body {
		height:500px !important;
	}
}
@media all and (min-height:836px){
	.footer {
		padding: 23px 0;
		background: #333;
		color: #6d6d6d;
		text-align: center;
		font-size: 12px;
		line-height: 24px;
		position: absolute;
		bottom: 0;
		width: 100%;
	}
} 
@media all and (min-height:836px) and (max-height:959px){ 
	.detail-table-body {
		height:545px !important;
	}
}
@media all and (min-height:960px){ 
	.detail-table-body {
		height:auto !important;
		overflow-y: visible !important;
	}
}
</style>
