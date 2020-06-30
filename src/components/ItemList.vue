<template>
  <div>
    <div>ItemList</div>
    <div v-for="item in items" :key="item.name">
      <div class="item">
        <div class="name">名前: {{ item.name }}</div>
        <div class="price">{{ item.price }} 円</div>
      </div>
    </div>
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
      items: [
        { name: "たまご", price: 100 },
        { name: "りんご", price: 160 }
      ],
      newItemName: "",
      newItemPrice: ""
    };
  },
  methods: {
    addItem() {
      if (this.newItemName != "" && this.newItemPrice != "") {
        this.items.push({ name: this.newItemName, price: this.newItemPrice });
        (this.newItemName = ""), (this.newItemPrice = "");
      }
    }
  }
};
</script>
