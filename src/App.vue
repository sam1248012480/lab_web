<template>
  <v-app class="grey lighten-4">
    <NavBar></NavBar>
<<<<<<< HEAD
    <bannerr></bannerr>
    <imgd></imgd>
    <videoo></videoo>
    <test></test>
=======
    <!-- 裡面一定要用到不然會報錯(step.3) -->
>>>>>>> 6d0fcee316e0734c4557db884efb9728399416b6

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
<<<<<<< HEAD
import NavBar from '@/components/Navbar'
import imgd from '@/components/img'
import bannerr from '@/components/banner'
import videoo from '@/components/videos'
import test from '@/components/test'


=======
import NavBar from "@/components/Navbar";
//有新的Components這邊要先import(step.1)
>>>>>>> 6d0fcee316e0734c4557db884efb9728399416b6
export default {
  name: "App",

  components: {
<<<<<<< HEAD
    NavBar,imgd,videoo,bannerr,test
=======
    NavBar
    //此處要註冊(step.2)
>>>>>>> 6d0fcee316e0734c4557db884efb9728399416b6
  },

  data: () => ({})
};
</script>
