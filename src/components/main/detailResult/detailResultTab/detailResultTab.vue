<template>
  <ul class="list-tab-nav">
    <li :class="{'tab-active':showDetailInfo}">
      <a @click="toggleDetailTabs('detailInfo')" href="javascript:void(0)">详细参数</a>
    </li>
    <li :class="{'tab-active':showTmCalc}">
      <a @click="toggleDetailTabs('tmCalc')" href="javascript:void(0)">定点工况计算</a>
    </li>
    <li :class="{'tab-active':showPerformanceTable}">
      <a @click="toggleDetailTabs('performanceTable')" href="javascript:void(0)">全工况性能表格</a>
    </li>
    <li :class="{'tab-active':showPerformanceGraph}">
      <a @click="toggleDetailTabs('performanceGraph')" href="javascript:void(0)">全工况性能曲线图</a>
    </li>
    <li :class="{'tab-active':showTechDoc}">
      <a @click="toggleDetailTabs('techDoc')" href="javascript:void(0)">技术协议书</a>
    </li>
    <li :class="{'tab-active':showDllPage}">
      <a @click="toggleDetailTabs('dllPage')" href="javascript:void(0)">DLL文件下载</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "detailResultTab",
  computed: {
    showDetailInfo() {
      return this.$store.state.detailTabs.detailInfo;
    },
    showTmCalc() {
      return this.$store.state.detailTabs.tmCalc;
    },
    showPerformanceTable() {
      return this.$store.state.detailTabs.performanceTable;
    },
    showPerformanceGraph() {
      return this.$store.state.detailTabs.performanceGraph;
    },
    showTechDoc() {
      return this.$store.state.detailTabs.techDoc;
    },
    showDllPage() {
      return this.$store.state.detailTabs.dllPage;
    }
  },
  methods: {
    toggleDetailTabs(tabName) {
      this.$store.commit("toggleDetailTabs", tabName);
      //localStorage.setItem("detailTabActive", tabName);
    }
  }
};
</script>

<style>

</style>
