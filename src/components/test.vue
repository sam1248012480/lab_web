<template>
<viewer >
  <v-row>
    <v-col cols="12" >
      <v-card >
        <v-container fluid>
          <v-row>
            <v-col
              v-for="src in imgs"
              :key="src.url" 
              class="d-flex child-flex"
              cols="4"
            >
              <v-card flat tile class="d-flex">
                  <img
                  :src="src.url" 
                  style="width:100%; height:100%;"
                  >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
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
</template>

<script>
export default {
  data () {
    return {
      imgs: [
       {
          url: 'https://instagram.frmq2-2.fna.fbcdn.net/v/t51.2885-15/e35/33102682_133926010807761_8907972298883989504_n.jpg?_nc_ht=instagram.frmq2-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=GYd1hsfNce8AX8TD1JR&oh=0dcb71ab922a591f8fbaa967e3ef48b8&oe=5EBA6A0B',
          title: '图片1'
        },
        {
          url: 'https://instagram.frmq2-1.fna.fbcdn.net/v/t51.2885-15/e35/32359053_1748181835270702_4491973812325187584_n.jpg?_nc_ht=instagram.frmq2-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=UlLUN5zLcAwAX_T9dwC&oh=941fa231553df88e5484a9af8d963fb1&oe=5EBAD76B',
          title: '图片2'
        },
        {
          url: 'https://instagram.frmq2-2.fna.fbcdn.net/v/t51.2885-15/e35/32233075_567321030290575_3045565007560441856_n.jpg?_nc_ht=instagram.frmq2-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=CAoYVNrOqVgAX_jdMzY&oh=6bcef31a4fb50ec7caafc290459917bc&oe=5EBC6027',
          title: '图片3'
        }
      ]
    }
  },
}
</script>