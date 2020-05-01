<template>
  <!-- <v-row row wrap>
  <v-col aling="center" justify="center">-->
  <v-card>
    <v-tabs centered dark background-color="teal darken-3" show-arrows>
      <v-tabs-slider color="teal lighten-3"></v-tabs-slider>

      <v-tab v-for="i in money_data" :key="i.money" @click="tab_click(i)">{{ i.money }}</v-tab>
    </v-tabs>
  </v-card>
  <!-- </v-col>
  </v-row>-->
</template>

<script>
export default {
  data: () => ({}),
  props: {
    money_data: {
      type: Array,
      required: true
    },
    callback: {
      type: Function
    }
  },
  methods: {
    tab_click(i) {
      if (this.callback) {
        this.callback(i.money);
      }
    }
  }
};
</script>