<template>
  <div class="wrap">
    <!--<p>-->
    <!--使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <!--<router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
    </p>-->
    <!--路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <mainHeader v-show="headerFooterShouldHide"></mainHeader>
    <!-- <headerForms></headerForms> -->
    <router-view></router-view>
    <mainFooter v-show="headerFooterShouldHide" ></mainFooter>
  </div>
  
</template>

<script>
import mainHeader from "./components/mainHeader.vue";
import mainFooter from "./components/mainFooter.vue";
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  computed: {
    headerFooterShouldHide() {
      console.log(this.$route.path);
      if (this.$route.path == "/login" || this.$route.path == "/signup") {
        return false;
      } else {
        return true;
      }
    }
  },
  components: {
    mainHeader,
    mainFooter
  }
};
</script>

<style>

</style>
