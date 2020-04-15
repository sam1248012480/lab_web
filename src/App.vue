<template>
  <v-app class="grey lighten-4">
    <NavBar></NavBar>
    <!-- 裡面一定要用到不然會報錯(step.3) -->
    <Carousels></Carousels>
    <Bottom_area></Bottom_area>
    <Card></Card>

    <bannerr></bannerr>
    <imgd></imgd>
    <videoo></videoo>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "@/components/Navbar";
//有新的Components這邊要先import(step.1)
import Carousels from "@/components/Carousels";
import Bottom_area from "@/components/Bottom_area";
import Card from "@/components/Card";
import imgd from "@/components/img";

import bannerr from "@/components/banner";
import videoo from "@/components/videos";

export default {
  name: "App",

  components: {
    NavBar,
    //此處要註冊(step.2)
    Carousels,
    Bottom_area,
    Card,
    imgd,
    videoo,
    bannerr
  },

  data: () => ({})
};
</script>
