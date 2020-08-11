<template>
  <v-app class="blue lighten-5">
    <!-- 裡面一定要用到不然會報錯(step.3) -->
    <loading
      :active.sync="isLoading"
      is-full-page
      :height="loader_height"
      :width="loader_width"
      color="#039BE5"
    ></loading>
    <Bottom_area :callback="btn_event"></Bottom_area>
    <TabItems :money_data="money" :callback="tab_event"></TabItems>
    <Card :card_data="card"></Card>
  </v-app>
</template>

<script>
//有新的Components這邊要先import(step.1)
import Bottom_area from "@/components/Bottom_area";
import TabItems from "@/components/TabItems";
import Card from "@/components/Card";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import global_ from "../Global";

export default {
  name: "DeliveryHomepage",
  components: {
    //此處要註冊(step.2)
    Bottom_area,
    TabItems,
    Card,
    Loading
  },
  data: () => ({
    money: [
      { money: "4000~5000" },
      { money: "7000~8000" },
      { money: "10000~12000" },
      { money: "15000~20000" },
      { money: "20000 ↑" }
    ],
    card: [],
    isLoading: false,
    loader_height: 128,
    loader_width: 128
  }),
  methods: {
    btn_event(name) {
      global_.current_area = name;
      this.getData();
    },
    tab_event(name) {
      global_.current_money = name;
      this.getData();
    },
    getData() {
      this.isLoading = true;
      // console.log(global_.current_area, global_.current_money);
      // const cors = "https://cors-anywhere.herokuapp.com/"; // use cors-anywhere to fetch api data
      const url = "http://gym.gym141.com/api/info"; // origin api
      this.axios
        .post(
          `${url}`,
          this.Qs.stringify({
            stay_or_delivery: "1",
            area: global_.current_area,
            cost: global_.current_money
          })
        )
        .then(response => {
          this.card = response.data;
          this.isLoading = false;
        })
        .catch(function() {
          // console.log(error);
          // this.isLoading = false;
        });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
