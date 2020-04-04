<template>
  <v-app class="grey lighten-4">
    <NavBar></NavBar>
    <v-content>
     <router-view></router-view>
    </v-content>
    
  </v-app>
</template>

<script>
import NavBar from '@/components/Navbar'

export default {
  name: 'App',

  components: {
    NavBar
  },

  data: () => ({
    //
  }),
};
</script>
