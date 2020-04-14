<template>

  <v-container class="grey lighten-5" >
    <v-row>
      <v-col cols="4" md="4">
        <v-img src="https://instagram.frmq2-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/92505606_543970509652618_998397044031841983_n.jpg?_nc_ht=instagram.frmq2-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=H6lTjSv5LBgAX8cJiWh&oh=6b7d0c3af1a40550094cb659574ebf6d&oe=5EBC4B36" aspect-ratio = '1'></v-img>
      </v-col>

      <v-col >

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