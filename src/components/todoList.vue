<template>
  <div>
    <div>todoList</div>
    <div v-for="task in tasks" :key="task.name">
      <div class="todo">
        <div class="name">タスク: {{ task.name }}</div>
        <div class="date">{{ task.date }} まで</div>
      </div>
    </div>
    <div>
      <label>
        タスク
        <input
          type="text"
          v-model="newTaskName"
          placeholder="タスクの名前を入力"
        />
      </label>
      <label>
        価格
        <input
          type="date"
          v-model="newTaskDate"
          placeholder="タスクの期限を入力"
        />
      </label>
      <button @click="addTask">add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "todoList",
  data() {
    return {
      tasks: [
        { name: "たまご", price: 100 },
        { name: "りんご", price: 160 }
      ],
      newTaskName: "",
      newTaskDate: ""
    };
  },
  methods: {
    addTask() {
      if (this.newTaskName != "" && this.newTaskDate != "") {
        this.items.push({ name: this.newTaskName, price: this.newTaskDate });
        (this.newTaskName = ""), (this.newTaskPrice = "");
      }
    }
  }
};
</script>
