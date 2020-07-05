<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="teal">
        <strong class="subheading">Welcome to GYM</strong>

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon @click="footer_click(icon)">
          <span class="iconify" :data-icon="icon" data-inline="false"></span>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} 
      
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    wechat_info: "",
    line_info: "",
    icons: ["mdi-wechat", "fa-brands:line"]
  }),
  mounted() {
    // const cors = "https://cors-anywhere.herokuapp.com/"; // use cors-anywhere to fetch api data
    const url = "http://gym.gym141.com/api/offo"; // origin api url
    this.axios
      .get(`${url}`)
      .then(response => {
        this.wechat_info = response.data[0].wechat_info;
        this.line_info = response.data[0].line_info;
      })
      .catch(function() {
        // console.log(error);
      });
  },
  methods: {
    footer_click(icon) {
      if (icon.includes("line")) {
        if(this.line_info != "")
          window.location.href(this.line_info);
      } else {
        if(this.wechat_info != "")
          window.location.href(this.wechat_info);
      }
    }
  }
};
</script>

<style>
.iconify {
  width: 30px;
  height: 30px;
}
</style>