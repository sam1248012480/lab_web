<template>
  <nav>
    <v-toolbar text class="elevation-1 grey darken-4">
      <v-toolbar-title class="text-uppercase">
        <v-btn class="font-weight-light yellow--text" outlined="true" to="/">Gym</v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="yellow" to="infopage"> 
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
