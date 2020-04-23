<template>
  <v-container fluid>
    <v-row row wrap>

      <v-col align="center" justify="center"
      v-for="i in area" :key="i.name">
        <v-btn large color="#039BE5" class="white--text">{{i.name}}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    area: [
      { name: "台北" },
      { name: "嘉義" },
      { name: "台中" },
      { name: "雲林" },
      { name: "苗栗" },
      { name: "基隆" },
      { name: "高雄" },
      { name: "屏東" },
      { name: "花蓮" },
      { name: "彰化" },
      { name: "澎湖" },
      { name: "台東" },
      { name: "南投" },
      { name: "宜蘭" },
      { name: "新竹" },
      { name: "金門" }
    ]
  })
};
</script>