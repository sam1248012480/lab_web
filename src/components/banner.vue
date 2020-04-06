<template>
  <v-container class="grey lighten-5" >
    <v-row>
      <v-col>
        <v-img src="https://picsum.photos/510/300?random" aspect-ratio = '2'></v-img>
      </v-col>

      <v-col>

        <div>
            <div class= 'display-1'>米米</div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
        </thead>
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
  </v-container>
</template>


<script>
  export default {
    data: () => ({
      dense: false,
      fixedHeader: false,
      height: 300,
      aa: 2,
      desserts: [
        {
          name: '國別',
          calories: '台?',
        },
        {
          name: '年齡',
          calories: '35',
        },
        {
          name: '體重',
          calories: '75',
        },
        {
          name: '環境',
          calories: '獨棟大樓',
        },
        {
          name: '時間',
          calories: '100',
        },
        {
          name: '定點長鐘',
          calories: '3500',
        },
        {
          name: '編號',
          calories: '111',
        },
        {
          name: '身高',
          calories: '162',
        },
        {
          name: '三圍',
          calories: '???',
        },
        {
          name: '類型',
          calories: '???',
        },
        {
          name: '時間',
          calories: '???',
        },
        
        
        
        
      ],
    }),
  }
</script>