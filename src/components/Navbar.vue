<template>
  <nav>
    <v-toolbar text class="elevation-1 grey darken-4" cols="12" sm="5">
      <v-toolbar-title class="text-uppercase" >
        <v-btn height="30" width="10" class="font-weight-light yellow--text"  outlined to="/">Home</v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-title class="font-weight-light yellow--text text-align:center"  style="font-size:13px" outlined to="/" align="center">
        GYM 全年無休 營業時間:
        <br />PM12:00-AM3:00
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn text color="yellow" href="http://140.125.45.155/admin" height="30" width="10">
        <!--按鈕連結-->
        <span>登入</span>
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
