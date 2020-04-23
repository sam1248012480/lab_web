<template>
  <v-app class="grey lighten-4">
    <!-- 裡面一定要用到不然會報錯(step.3) -->
    <!-- <Carousels></Carousels> -->
    <Bottom_area></Bottom_area>
    <TabItems_delivery></TabItems_delivery>
    <Card></Card>
  </v-app>
</template>

<script>
//有新的Components這邊要先import(step.1)
// import Carousels from "@/components/Carousels";
import Bottom_area from "@/components/Bottom_area";
import TabItems_delivery from "@/components/TabItems_delivery";
import Card from "@/components/Card";

export default {
  name: "DeliveryHomepage",

  components: {
    //此處要註冊(step.2)
    // Carousels,
    Bottom_area,
    TabItems_delivery,
    Card
  },

  data: () => ({})
};
</script>
