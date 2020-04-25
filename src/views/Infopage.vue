<template>
  <v-container class="grey lighten-5" fluid>
    <v-row>
      <v-col cols="4" md="4">
        <v-img
          src="https://instagram.frmq2-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/92505606_543970509652618_998397044031841983_n.jpg?_nc_ht=instagram.frmq2-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=H6lTjSv5LBgAX8cJiWh&oh=6b7d0c3af1a40550094cb659574ebf6d&oe=5EBC4B36"
          aspect-ratio="1"
        ></v-img>
      </v-col>

      <v-col>
        <div>
          <div class="display-1">米米</div>
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

    <viewer>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-container fluid>
              <v-row>
                <v-col v-for="src in imgs" :key="src.url" class="d-flex child-flex" cols="4">
                  <v-card flat tile class="d-flex">
                    <img :src="src.url" style="width:100%; height:100%;" />
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
    </viewer>

    <v-row justify="space-around">
      <v-col>
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
import { videoPlayer } from "vue-video-player";
import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";

export default {
  components: {
    videoPlayer
  },

  data: () => ({
    dense: false,
    fixedHeader: false,
    height: 300,
    aa: 2,
    desserts: [
      {
        name: "名稱",
        calories: "米米"
      },
      {
        name: "年紀",
        calories: "0"
      },
      {
        name: "條件(身高/胸圍)",
        calories: "0"
      },
      {
        name: "價格(固定)",
        calories: "10000000"
      },
      {
        name: "服務地區",
        calories: "台灣"
      },
      {
        name: "服務內容",
        calories: "0"
      },
      {
        name: "定點或外送",
        calories: "外送"
      }
    ],
    imgs: [
      {
        url:
          "https://instagram.frmq2-2.fna.fbcdn.net/v/t51.2885-15/e35/33102682_133926010807761_8907972298883989504_n.jpg?_nc_ht=instagram.frmq2-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=GYd1hsfNce8AX8TD1JR&oh=0dcb71ab922a591f8fbaa967e3ef48b8&oe=5EBA6A0B"
      },
      {
        url:
          "https://instagram.frmq2-1.fna.fbcdn.net/v/t51.2885-15/e35/32359053_1748181835270702_4491973812325187584_n.jpg?_nc_ht=instagram.frmq2-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=UlLUN5zLcAwAX_T9dwC&oh=941fa231553df88e5484a9af8d963fb1&oe=5EBAD76B"
      },
      {
        url:
          "https://instagram.frmq2-2.fna.fbcdn.net/v/t51.2885-15/e35/32233075_567321030290575_3045565007560441856_n.jpg?_nc_ht=instagram.frmq2-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=CAoYVNrOqVgAX_jdMzY&oh=6bcef31a4fb50ec7caafc290459917bc&oe=5EBC6027"
      }
    ]
  })
};
</script>