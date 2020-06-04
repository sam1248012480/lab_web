<template>
  <v-app class="grey lighten-4">
    <NavBar></NavBar>
    <!-- 裡面一定要用到不然會報錯(step.3) -->
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
//有新的Components這邊要先import(step.1)
export default {
  name: "App",

  components: {
    NavBar,
    Footer
    //此處要註冊(step.2)
  },

  data: () => ({})
};
</script>
