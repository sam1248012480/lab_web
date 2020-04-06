<template>
  <video-player
    class="video-player vjs-custom-skin"
    ref="videoPlayer"
    :playsinline="true"
    :options="{
      sources: [{
        type: 'video/mp4',
        src: 'http://localhost/videoplayback.mp4'
      }],
      poster: 'http://localhost/mp4.PNG'
    }"
  ></video-player>
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