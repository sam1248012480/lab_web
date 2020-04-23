<template>
  <v-carousel
    cycle="true"
    interval="2000"
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <!-- cycle可以打開interval可調整時間(毫秒)|height 為螢幕高 -->
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        },
        {
          src: "http://linemm.com/uploads/allimg/160229/1-1602291A6030-L.png"
        }
      ],
      slides: ["每頁設定1", "2", "3", "4", "5", "6"]
    };
  }
};
</script>