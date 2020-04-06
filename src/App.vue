<template>
  <v-app class="grey lighten-4">
    <NavBar></NavBar>
    <bannerr></bannerr>
    <imgd></imgd>
    
    <tablee></tablee>
    

    <v-content>
     <router-view></router-view>
    </v-content>
    
  </v-app>
</template>

<script>
import NavBar from '@/components/Navbar'
import imgd from '@/components/img'
import tablee from '@/components/table'
import bannerr from '@/components/banner'


export default {
  name: 'App',

  components: {
    NavBar,imgd,bannerr,tablee
  },

  data: () => ({
    //
  }),
};
</script>
