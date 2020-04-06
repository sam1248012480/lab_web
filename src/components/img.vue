<template>
  <v-container fluid>
    <v-row justify="space-around">
        <v-col >
        <v-img src="https://picsum.photos/510/300?random" aspect-ratio = '2'></v-img>
        </v-col>
        <v-col >
        <video-player
          class="video-player vjs-custom-skin"
          ref="videoPlayer"
          :playsinline="true"
          :options="{
          sources: [{
          type: 'video/mp4',
          src: require('../../public/video/2019-01-10_0916先偷看一下.mp4')
      }],
          
    }"
  ></video-player>
      </v-col>
    </v-row>
  </v-container>  
</template>

<script>
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'

export default {
  components: {
    videoPlayer
  },
  data () {
    return {

    }
  }
}
</script>



