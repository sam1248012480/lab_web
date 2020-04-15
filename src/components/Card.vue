<template>
<v-container>
  <v-layout row wrap>
    <v-flex xl2 lg2 md3 sm3 xs6 v-for="person in team" :key="person.name">
      <v-card class="mx-auto">
        <v-img :src="person.img" aspect-ratio="0.9"></v-img>
        <v-card-title>{{person.name}}</v-card-title>
        <v-card-subtitle>{{person.introduce}}</v-card-subtitle>
        <v-card-actions>
          <v-btn color="green" text>去看看</v-btn>
          <v-spacer></v-spacer>
          
        </v-card-actions>
        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            
          </div>
        </v-expand-transition>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>

</template>

<script>
export default {
  data: () => ({
    show: false,

    team: [
      {
        name: "Gary",
        introduce: " hello i am gary",
        img: "http://linemm.com/uploads/allimg/180706/1-1PF60JI30-L.jpg"
      },
      {
        name: "Mary",
        introduce: " hello i am Mary",
        img: "http://linemm.com/uploads/allimg/151216/12.png"
      },
      {
        name: "Hsu",
        introduce: " hello i am Hsu",
        img: "http://linemm.com/uploads/allimg/151230/1-1512301423360-L.jpg"
      },
      {
        name: "Lin",
        introduce: " hello i am Lin",
        img: "http://linemm.com/uploads/allimg/180706/1-1PF60K1430-L.jpg"
      },
      {
        name: "Lili",
        introduce: " hello i am Lin",
        img: "http://linemm.com/uploads/allimg/180917/1-1P91G023110-L.jpg"
      },
      {
        name: "Aser",
        introduce: " hello i am Lin",
        img: "http://linemm.com/uploads/allimg/151216/3.png"
      },
      {
        name: "Nini",
        introduce: " hello i am Lin",
        img: "http://linemm.com/uploads/allimg/151229/1-1512291612550-L.jpg"
      },
      {
        name: "Crriy",
        introduce: " hello i am Lin",
        img: "http://linemm.com/uploads/allimg/180723/1-1PH31013200-L.jpg"
      },
      {
        name: "Juir",
        introduce: " hello i am Mary",
        img: "http://linemm.com/uploads/allimg/160229/1-1602291A6030-L.png"
      }
    ]
  })
};
</script>