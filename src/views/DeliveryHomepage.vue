<template>
  <v-app class="grey lighten-4">
    <!-- 裡面一定要用到不然會報錯(step.3) -->
    <!-- <Carousels></Carousels> -->
    <Bottom_area :area_data="area" :callback="btn_event"></Bottom_area>
    <TabItems :money_data="money" :callback="tab_event"></TabItems>
    <Card :card_data="card"></Card>
  </v-app>
</template>

<script>
//有新的Components這邊要先import(step.1)
// import Carousels from "@/components/Carousels";
import Bottom_area from "@/components/Bottom_area";
import TabItems from "@/components/TabItems";
import Card from "@/components/Card";

export default {
  name: "DeliveryHomepage",
  components: {
    //此處要註冊(step.2)
    // Carousels,
    Bottom_area,
    TabItems,
    Card
  },
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
    ],
    money: [
      { money: "4000~5000" },
      { money: "7000~8000" },
      { money: "10000~12000" },
      { money: "15000~20000" },
      { money: "20000 ↑" }
    ],
    card: [],
    current_area: "台北",
    current_money: "4000~5000"
  }),
  methods: {
    btn_event(name) {
      this.current_area = name;
      this.getData();
    },
    tab_event(name) {
      this.current_money = name;
      this.getData();
    },
    getData() {
      console.log(this.current_area, this.current_money);
      const cors = "https://cors-anywhere.herokuapp.com/"; // use cors-anywhere to fetch api data
      const url = "http://140.125.45.160:8000/info"; // origin api url
      this.axios
        .post(
          `${cors}${url}`,
          this.Qs.stringify({
            stay_or_delivery: "1",
            area: this.current_area,
            cost: this.current_money
          })
        )
        .then(response => {
          // console.log(response) //印資料在Console
          this.card = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
