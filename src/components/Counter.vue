<template>
  <div>
    <div>{{ countMessage }}</div>
    <button @click="count++">( ﾟ∀ﾟ)ｱﾊﾊ八八ﾉヽﾉヽﾉヽﾉ ＼ / ＼/ ＼</button>
    <button @click="count = 0">＼(゜ロ＼)(／ロ゜)／</button>
  </div>
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
