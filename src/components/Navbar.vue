<template>
  <nav>
    <v-toolbar text class="elevation-1 grey darken-4">
      <v-toolbar-title class="text-uppercase">
        <v-btn class="font-weight-light yellow--text" outlined="true" to="/">Gym</v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-text class="font-weight-light yellow--text justify-center" outlined="true" to="/">
        全年無休 營業時間 :
        <br />PM12:00 ~ AM3:00
      </v-toolbar-text>

      <v-spacer></v-spacer>
      <v-btn text color="yellow" to="Infopage">
        <!--按鈕連結-->
        <span>管理登入</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
