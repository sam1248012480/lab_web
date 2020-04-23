<template>
  <v-app class="grey lighten-4">
    <!-- 裡面一定要用到不然會報錯(step.3) -->

    <Bottom_area></Bottom_area>
    <TabItems></TabItems>
    <Card></Card>
  </v-app>
</template>

<script>
//有新的Components這邊要先import(step.1)

import Bottom_area from "@/components/Bottom_area";
import TabItems from "@/components/TabItems";
import Card from "@/components/Card";

export default {
  name: "StayHomepage",

  components: {
    //此處要註冊(step.2)
    Bottom_area,
    TabItems,
    Card
  },

  data: () => ({})
};
</script>
