<template>
	<div class="detail-table-body" ng-show="dllPage.active" style="width:445px;">
		<div style="width:305px;">
			<!-- <span style="display:block;float:left;height:30px;line-height:30px;" class="download-file-name">{{ $storage.detailResult.dllAssyRoute | getFileNameFromUrl }}</span>						
							<span style="display:block;float:right;margin-top:0;" class="advanced-setting"><input type="button" class="advanced-search-btn" style="border-top:1px solid #38f;border-bottom:1px solid #38f;border-left:none;border-right:none;margin:0;" value="{{'DOWNLOAD' | translate}}" ng-disabled="$storage.isAuthed !== 1"></button></span> -->
			<span style="display:block;float:left;height:30px;line-height:30px;" class="download-file-name">请发邮件至 chanpin@shec.com.cn 联系产品经理获取最新版dll文件</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "dllPage",
	data() {
		return {

		}
	},
	computed: {
	},
	methods: {

	}
};
</script>

<style>

</style>
