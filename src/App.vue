<template>
  <v-app class="grey lighten-4">
    <NavBar></NavBar>

    <fab
      position="bottom-right"
      bg-color="#3DAD75"
      main-icon="chat"
      :actions="fabActions"
      @Line="Line"
      @WeChat="WeChat"
      fixed-tooltip
    ></fab>
    <!-- 裡面一定要用到不然會報錯(step.3) -->

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "@/components/Navbar";
import fab from "vue-fab";

//有新的Components這邊要先import(step.1)
export default {
  name: "App",

  components: {
    NavBar,
    fab
    //此處要註冊(step.2)
  },

  data: () => ({
    fabActions: [
      {
        name: "Line",
        icon: "call_made",
        tooltip: "Line"
      },
      {
        name: "WeChat",
        icon: "call_made",
        tooltip: "WeChat"
      }
    ]
  }),
  methods: {
    Line() {
      console.log("Line");
    },
    WeChat() {
      console.log("WeChat");
    }
  }
};
</script>
