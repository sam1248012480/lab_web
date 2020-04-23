<template>
  <!-- <v-row row wrap>
    <v-col aling="center" justify="center"> -->
      <v-card>
        <v-tabs centered dark background-color="teal darken-3" show-arrows>
          <v-tabs-slider color="teal lighten-3"></v-tabs-slider>

          <v-tab v-for="i in money_number" :key="i.money">{{ i.money }}</v-tab>
        </v-tabs>
      </v-card>
    <!-- </v-col>
  </v-row> -->
</template>

<script>
export default {
  data: () => ({
    money_number: [
      {
        money: "4000~5000"
      },
      {
        money: "7000~8000"
      },
      {
        money: "10000~12000"
      },
      {
        money: "15000~20000"
      },
      {
        money: "20000 ↑"
      }
    ]
  })
};
</script>