<template>
  <div>
    <div><h2>ItemList</h2></div>
    <el-table :data="items" border>
      <el-table-column prop="name" label="Name" sortable />
      <el-table-column prop="price" label="Price" sortable />
    </el-table>
    <!-- <div class="itemList">
      <li v-for="item in items" :key="item.name">
        名前: {{ item.name }} 値段: {{ item.price }} 円
      </li>
    </div> -->
    <div>
      <label>
        名前
        <input
          type="text"
          v-model="newItemName"
          placeholder="商品の名前を入力"
        />
      </label>
      <label>
        価格
        <input
          type="number"
          v-model="newItemPrice"
          placeholder="商品の価格を入力"
        />
      </label>
      <button @click="addItem">add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemList",
  data() {
    return {
      items: [{ name: "aaa", price: 123 }],
      newItemName: "",
      newItemPrice: ""
    };
  },
  methods: {
    addItem() {
      if (this.newItemName != "" && this.newItemPrice != "") {
        this.items.push({
          // selected: false,
          name: this.newItemName,
          price: this.newItemPrice
        });
        (this.newItemName = ""), (this.newItemPrice = "");
      }
    }
  }
};
</script>
