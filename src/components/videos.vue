<template>
    <v-container fluid >
    <v-row justify="space-around">
        <v-col   >
        <video-player
          class="video-player vjs-custom-skin"
          
          ref="videoPlayer"
          :playsinline="true"
          :options="{
          sources: [{
          type: 'video/mp4',
          src: 'http://sogo88.org///FileUploads/Lady/aa5a8twt3pp/小泉採.mp4'
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