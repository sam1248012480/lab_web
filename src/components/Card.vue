<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xl2 lg2 md3 sm3 xs6 v-for="person in card_data" :key="person.name">
        <v-card class="mx-auto">
          <v-img :src="person.img" aspect-ratio="0.9"></v-img>
          <v-card-title>{{person.name}}</v-card-title>
          <v-card-subtitle>{{person.cost}}</v-card-subtitle>
          <v-card-actions>
            <v-btn color="green" text to="/Infopage">去看看</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>
            </div>
          </v-expand-transition>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    show: false
  }),
  props: {
    card_data: {
      type: Array,
      required: true
    }
  }
};
</script>