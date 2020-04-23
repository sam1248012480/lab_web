<template>
  <div>
    <v-simple-table :dense="dense" :fixed-header="fixedHeader" :height="height">
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
</template>

<script>
export default {
  data: () => ({
    dense: false,
    fixedHeader: false,
    height: 300,
    desserts: [
      {
        name: "服務地區",
        calories: "台中"
      },
      {
        name: "服務模式",
        calories: "一對一"
      },
      {
        name: "可陪合",
        calories: "????"
      },
      {
        name: "不???",
        calories: "???"
      },
      {
        name: "加價餐點",
        calories: "???"
      },
      {
        name: "商品優惠",
        calories: ""
      }
    ]
  })
};
</script>