<template>
  <el-card class="card">
    <h2>Σ(･ω･ﾉ)ﾉ！</h2>
    <div>{{ countMessage }}</div>
    <el-button type="success" @click="count++">
      ( ﾟ∀ﾟ)ｱﾊﾊ八八ﾉヽﾉヽﾉヽﾉ ＼ / ＼/ ＼
    </el-button>
    <el-button type="info" @click="count = 0">
      ＼(゜ロ＼)(／ロ゜)／
    </el-button>
  </el-card>
</template>

<script>
export default {
  name: "counter",
  data() {
    return {
      count: 0
    };
  },
  computed: {
    countMessage() {
      return "ｲｴｰｲヽ(^o^)丿: " + this.count;
    }
  }
};
</script>

<style>
.card {
  width: 80%;
  margin: 0 auto;
}
</style>
