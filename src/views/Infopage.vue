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
                <tr v-for="item in desserts" :key="item.aa">
                  <td>{{ item.name }}</td>
                  <td>{{ item.calories }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </v-col>
    </v-row>

    <v-row justify="space-around">
      <v-col cols="3" md="3">
        <v-img
          src="https://instagram.frmq2-2.fna.fbcdn.net/v/t51.2885-15/e35/33102682_133926010807761_8907972298883989504_n.jpg?_nc_ht=instagram.frmq2-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=GYd1hsfNce8AX8TD1JR&oh=0dcb71ab922a591f8fbaa967e3ef48b8&oe=5EBA6A0B"
          aspect-ratio="1"
        ></v-img>
      </v-col>
      <v-col cols="3" md="3">
        <v-img
          src="https://instagram.frmq2-1.fna.fbcdn.net/v/t51.2885-15/e35/32359053_1748181835270702_4491973812325187584_n.jpg?_nc_ht=instagram.frmq2-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=UlLUN5zLcAwAX_T9dwC&oh=941fa231553df88e5484a9af8d963fb1&oe=5EBAD76B"
          aspect-ratio="1"
        ></v-img>
      </v-col>
      <v-col cols="3" md="3">
        <v-img
          src="https://instagram.frmq2-2.fna.fbcdn.net/v/t51.2885-15/e35/32233075_567321030290575_3045565007560441856_n.jpg?_nc_ht=instagram.frmq2-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=CAoYVNrOqVgAX_jdMzY&oh=6bcef31a4fb50ec7caafc290459917bc&oe=5EBC6027"
          aspect-ratio="1"
        ></v-img>
      </v-col>
      <v-col cols="3" md="3">
        <v-img
          src="https://instagram.frmq2-2.fna.fbcdn.net/v/t51.2885-15/e35/31290461_212833709322687_2491188745164816384_n.jpg?_nc_ht=instagram.frmq2-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=_cznVTUsRGMAX9JlZn5&oh=4311d43a430e8ef7f2faa49a4321664f&oe=5EBD4DB0"
          aspect-ratio="1"
        ></v-img>
      </v-col>
    </v-row>

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

  data: () => ({
    dense: false,
    fixedHeader: false,
    height: 300,
    aa: 2,
    desserts: [
      {
        name: "國別",
        calories: "台?"
      },
      {
        name: "年齡",
        calories: "35"
      },
      {
        name: "體重",
        calories: "75"
      },
      {
        name: "環境",
        calories: "獨棟大樓"
      },
      {
        name: "時間",
        calories: "100"
      },
      {
        name: "定點長鐘",
        calories: "3500"
      },
      {
        name: "編號",
        calories: "111"
      },
      {
        name: "身高",
        calories: "162"
      },
      {
        name: "三圍",
        calories: "???"
      },
      {
        name: "類型",
        calories: "???"
      },
      {
        name: "時間",
        calories: "???"
      }
    ]
  })
};
</script>