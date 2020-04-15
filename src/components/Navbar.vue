<template>
  <nav>
    
    <v-toolbar  text class=elevation-1>
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer" ></v-app-bar-nav-icon> -->
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">健身房</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="grey">
        <span>管理登入</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>

    <!-- <v-navigation-drawer
      app
      v-model="drawer"
      class="indigo"
      dark
      fixed
      temporary -->
    <!-- > -->
    <!-- <v-list>
        <v-list-tile v-for="link in links" :key="link.text" :link ="link.route">
          <v-list-tile-action>
            <v-icon class="white--text" large>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-titile class="white--text">{{
              link.text
            }}</v-list-tile-titile>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->

    
    <v-navigation-drawer v-model="drawer"  temporary app  class="mt-10 elevation-1 indigo" style="top:25px">
      <v-list dense nav>
        <v-list-item v-for="link in links" :key="link.text" :to="link.route">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      toolbar:true,  
      drawer: false,
      clipped:false,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        {icon: 'mdi-view-dashboard',text:'Home',route:'/home'},
        {icon: 'mdi-view-dashboard',text:'Page1',route:'/page'},
      ],
    };
  },
};
</script>
