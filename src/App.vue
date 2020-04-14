<template>
  <v-app class="grey lighten-4">
    <NavBar></NavBar>
    <bannerr></bannerr>
    <imgd></imgd>
    <videoo></videoo>

    

    <v-content>
     <router-view></router-view>
    </v-content>
    
  </v-app>
</template>

<script>
import NavBar from '@/components/Navbar'
import imgd from '@/components/img'

import bannerr from '@/components/banner'
import videoo from '@/components/videos'


export default {
  name: 'App',

  components: {
    NavBar,imgd,videoo,bannerr
  },

  data: () => ({
    //
  }),
};
</script>
