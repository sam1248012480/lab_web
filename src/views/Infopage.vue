<template>
  <v-container class="blue lighten-5" fluid>
    <v-row>
      <v-col cols="4" md="4">
        <v-img :src="this.avatar" aspect-ratio="1"></v-img>
      </v-col>

      <v-col>
        <div>
          <div class="display-1">{{this.name}}</div>
          <v-simple-table>
            <template v-slot:default>
              <thead></thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.calories }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-container fluid>
            <v-row>
              <v-col v-for="src in imgs" :key="src.url" class="d-flex child-flex" cols="4">
                <v-card flat tile class="d-flex">
                  <viewer>
                    <div v-if="src.url">
                    <img :src="src.url" style="max-width:100%; max-height:100%;"/>
                    </div>
                    <div v-else>
                    <img :src="src.url" style="display:none;" />
                    </div>
                  </viewer>
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <div v-if="this.video">
      <v-row>
      <v-col>
        <video-player
          class="video-player vjs-custom-skin"
          ref="videoPlayer"
          :playsinline="true"
          :options="{
          sources: [{
          type: 'video/mp4',
          src: this.video
      }],
    }"
        ></video-player>
      </v-col>
    </v-row>
    </div>

    <div v-else>
      <v-row style="display:none;">
      <v-col>
        <video-player
          class="video-player vjs-custom-skin"
          ref="videoPlayer"
          :playsinline="true"
          :options="{
          sources: [{
          type: 'video/mp4',
          src: this.video
      }],
    }"
        ></video-player>
      </v-col>
    </v-row>
    </div>
    
  </v-container>
</template>

   
<script>
import { videoPlayer } from "vue-video-player";
import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";
// import Clickpicture from "@/components/Clickpicture";
export default {
  components: {
    videoPlayer
    // Clickpicture
  },
  data() {
    return {
      desserts: [],
      name: "",
      avatar: "",
      video: "",
      imgs: []
    };
  },

  mounted() {
    // console.log(this.$route.query.id);
    // const cors = "https://cors-anywhere.herokuapp.com/"; // use cors-anywhere to fetch api data
    const url = "http://gym.gym141.com/api/info/" + this.$route.query.id; // origin api url
    this.axios
      .get(`${url}`)
      .then(response => {
        // console.log(response.data); //印資料在Console
        if (response.data.img2===null) {this.url_img2 = null}
        else {this.url_img2 =this.parse_url(response.data.img2)}

        if (response.data.img3===null) {this.url_img3 = null}
        else {this.url_img3 =this.parse_url(response.data.img3)}

        if (response.data.img4===null) {this.url_img4 = null}
        else {this.url_img4 =this.parse_url(response.data.img4)}
        
        if (response.data.video===null) {this.video = null}
        else {this.video = this.parse_url(response.data.video)}

        this.name = response.data.name;
        this.avatar = this.parse_url(response.data.img1);
        this.desserts = [
          {
            name: "年紀",
            calories: response.data.age
          },
          {
            name: "條件(身高/胸圍)",
            calories: response.data.condition
          },
          {
            name: "價格(固定)",
            calories: response.data.cost
          },
          {
            name: "服務地區",
            calories: response.data.area_name
          },
          {
            name: "服務內容",
            calories: response.data.note
          },
          {
            name: "定點或外送",
            calories: response.data.type_value
          }
        ];
        this.imgs = [
          {
            url: this.url_img2
          },
          {
            url: this.url_img3
          },
          {
            url: this.url_img4
          },
        ];
        
      })
      .catch(function() {
        
      });
  },
  methods:{
    parse_url(url){
        var _url = new URL(url)
        return "http://" + _url.hostname + _url.pathname
      }
  }
};
</script>