<template>
  <div>
    <div><h2>todoList</h2></div>
    <div class="todoList" id="todo-list">
      <li v-for="task in tasks" :key="task.name">
        タスク: {{ task.name }} 期限: {{ task.date }} まで 状態:
        {{ task.status }}
        <button @click="TaskComplete(task.number)">完了</button>
        <button @click="TaskDelete(task.number)">削除</button>
      </li>
    </div>
    <div>
      <label>
        タスク
        <input
          type="text"
          v-model="newTaskName"
          placeholder="タスクの名前を入力"
          :class="{
            'has-error': noName
          }"
        />
      </label>
      <label>
        期限
        <input
          type="date"
          v-model="newTaskDate"
          :class="{ 'has-error': noDate }"
        />
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
    <div v-show="noName" class="error-message">
      タスクの名前を入力してください。
    </div>
    <div v-show="noDate" class="error-message">
      タスクの期限を入力してください。
    </div>
  </div>
</template>

<script>
export default {
  name: "todoList",
  data() {
    return {
      tasks: [],
      newTaskNumber: 0,
      newTaskName: "",
      newTaskDate: "",
      newTaskStatus: "",
      noName: false,
      noDate: false
    };
  },
  methods: {
    addTask() {
      if (this.newTaskName === "" && this.newTaskDate === "") {
        this.noName = true;
        this.noDate = true;
      } else if (this.newTaskName != "" && this.newTaskDate === "") {
        this.noName = false;
        this.noDate = true;
      } else if (this.newTaskName === "" && this.newTaskDate != "") {
        this.noName = true;
        this.noDate = false;
      }
      if (this.newTaskName != "" && this.newTaskDate != "") {
        this.noName = false;
        this.noDate = false;
        if (this.newTaskStatus === "") {
          this.newTaskStatus = "未完";
        }
        this.tasks.push({
          number: this.newTaskNumber,
          name: this.newTaskName,
          date: this.newTaskDate,
          status: this.newTaskStatus
        });
        this.newTaskNumber++,
          (this.newTaskName = ""),
          (this.newTaskDate = ""),
          (this.newTaskStatus = "");
      }
    },
    TaskComplete(task_id) {
      for (let i = 0; i < this.tasks.length; i++) {
        const index = this.tasks[i].number;
        if (index == task_id) {
          this.tasks[i] = { ...this.tasks[i], status: "完了" };
        }
      }
      this.newTaskName = "0";
      this.newTaskName = "";
    },
    TaskDelete(task_id) {
      this.tasks = this.tasks.filter(x => x.number !== task_id);
    }
  }
};
</script>

<style>
.has-error {
  border: solid 1px rgb(250, 0, 0);
}
.error-message {
  color: rgb(250, 0, 0);
}
</style>
