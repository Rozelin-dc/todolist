<template>
  <div>
    <div><h2>todoList</h2></div>
    <div class="todoList" id="todo-list">
      <li v-for="task in tasks" :key="task.name">
        タスク: {{ task.name }} 期限: {{ task.date }} まで 状態:
        {{ task.status }}
        <button @click="TaskComplete(task.id)">完了</button>
        <button @click="TaskDelete(task.id)">削除</button>
      </li>
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
        期限
        <input type="date" v-model="newTaskDate" />
      </label>
      <label>
        状態
        <input
          type="text"
          v-model="newTaskStatus"
          placeholder="タスクの状態を入力"
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
      tasks: [],
      newTaskId: 0,
      newTaskName: "",
      newTaskDate: "",
      newTaskStatus: ""
    };
  },
  methods: {
    addTask() {
      if (this.newTaskName != "" && this.newTaskDate != "") {
        if (this.newTaskStatus === "") {
          this.newTaskStatus = "未完";
        }
        this.tasks.push({
          id: this.newTaskId,
          name: this.newTaskName,
          date: this.newTaskDate,
          status: this.newTaskStatus
        });
        this.newTaskId++,
          (this.newTaskName = ""),
          (this.newTaskDate = ""),
          (this.newTaskStatus = "");
      }
    },
    TaskComplete(task_id) {
      this.tasks[task_id] = { ...this.tasks[task_id], status: "完了" };
      this.newTaskName = "0";
      this.newTaskName = "";
    },
    TaskDelete(task_id) {
      let clone = { ...this.tasks };
      delete clone[task_id];
      this.tasks = clone;
    }
  }
};
</script>
