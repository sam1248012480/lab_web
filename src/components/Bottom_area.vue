<template>
  <v-container fluid>
    <v-row row wrap>
      <v-col align="center" justify="center" v-for="i in area_data" :key="i.name">
        <div v-if="i.clicked">
          <v-btn large :color="clicked_color" class="white--text" @click="btn_click(i)">{{i.name}}</v-btn>
        </div>
        <div v-else>
          <v-btn large :color="default_color" class="white--text" @click="btn_click(i)">{{i.name}}</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    default_color: "teal darken-3",
    clicked_color: "#039BE5",
    area_data: [
      { name: "台北", clicked: true },
      { name: "嘉義", clicked: false },
      { name: "台中", clicked: false },
      { name: "雲林", clicked: false },
      { name: "苗栗", clicked: false },
      { name: "基隆", clicked: false },
      { name: "高雄", clicked: false },
      { name: "屏東", clicked: false },
      { name: "台南", clicked: false },
      { name: "花蓮", clicked: false },
      { name: "彰化", clicked: false },
      { name: "澎湖", clicked: false },
      { name: "台東", clicked: false },
      { name: "南投", clicked: false },
      { name: "宜蘭", clicked: false },
      { name: "新竹", clicked: false },
      { name: "金門", clicked: false }
    ]
  }),
  props: {
    // area_data: {
    //   type: Array,
    //   required: true
    // },
    callback: {
      type: Function
    }
  },
  methods: {
    btn_click(i) {
      this.area_data = this.area_data.map(obj => {
        if (obj.clicked) {
          obj.clicked = false;
        }
        return obj;
      });
      if (this.callback) {
        this.callback(i.name);
        i.clicked = true;
        this.current_click = i;
      }
    }
  }
};
</script>