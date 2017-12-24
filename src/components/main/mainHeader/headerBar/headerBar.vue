<template>
    <div class="header">
        <div class="container">
            <ul class="nav">
                <li style="float:left" class="highly_group">
                    <!-- <a style="display:block;width:30px;height:45px;"></a> -->
                    <router-link style="display:block;width:30px;height:45px;" to="/"></router-link>
                </li>
                <li id="logout" style="float:right">
                    <a href="javascript:void(0)" @click="logout()">[登 出]</a>
                </li>
                <li style="float:right">你 好，
                    <a>{{username}}</a>
                </li>
                <li id="board" style="float:right">
                    <a href="javascript:void(0)" @click="toggleForm('contactUsOpened')">联系我们</a>
                </li>
                <li id="advancedSearch" style="float:right">
                    <a href="javascript:void(0)" @click="toggleForm('advSearchOpened')">高级搜索</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import auth from "../../../auth/auth.vue";
export default {
  name: "headerBar",
  methods: {
    toggleForm(name) {
      this.$store.commit("toggleForm", name);
    },
    logout() {
      let self = this;
      auth.userLogout(self.$store.userName, self.$store.passWord).then(
        function successCallback(response) {
          self.$router.push({ path: "/login" });
          localStorage.clear();
        },
        function errorCallback(response) {
          console.log(response);
        }
      );
    }
  },
  computed: {
    username() {
      return this.$store.state.username;
    },
    showAll() {
      return this.$store.state.showAllResults
    }
  },
  mounted() {
    this.$store.commit("setUserName", localStorage.getItem("userName"));
  }
};
</script>

<style>

</style>
