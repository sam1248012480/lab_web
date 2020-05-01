<template>
  <v-container fluid>
    <v-row row wrap>
      <v-col align="center" justify="center" v-for="i in area_data" :key="i.name">
        <v-btn large color="#039BE5" class="white--text" @click="btn_click(i)">{{i.name}}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    area_data: {
      type: Array,
      required: true
    },
    callback: {
      type: Function
    }
  },
  methods: {
    btn_click(i) {
      if (this.callback) {
        this.callback(i.name);
      }
    }
  }
};
</script>