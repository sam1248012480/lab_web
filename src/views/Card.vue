<template>
  
   
    

    <div class="Cardlist">
      <!-- <v-container class="my-5"> -->
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
            <v-card text class="text-xs-center ma-3">
              <v-responsive class="pt-4">
                <!-- <v-container fluid> -->
                  <v-img :src="person.img" aspect-ratio="0.9"> </v-img>
                <!-- </v-container> -->
              </v-responsive>
              <v-card-text>
                <div class="subheading">{{ person.name }}</div>
                <div class="grey--text">{{ person.introduce }}</div>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="grey">
                  <v-icon small left>message</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      <!-- </v-container> -->
    </div>
  
</template>

<script>
export default {
  name: "Card",
  components: {},
  data() {
    return {
      team: [
        { name: "Gary", introduce: "hello i am gary", img: "/image/1.jpg" },
        { name: "Mary", introduce: "hello i am Mary", img: "/image/2.png" },
        { name: "Hsu", introduce: "hello i am Hsu", img: "/image/3.png" },
        { name: "Lin", introduce: "hello i am Lin", img: "/image/4.jpg" },
        { name: "Cheng", introduce: "hello i am Cheng", img: "/image/5.jpg" },
      ],
      items:[
          {text:"首頁",icon:"email"},
          {text:"介紹",icon:"introduce"},
      ],
    };
  },
};
</script>
