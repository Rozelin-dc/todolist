<template>
  <el-card class="card">
    <h2>todoList</h2>
    <div id="todo-list">
      <li v-for="task in tasks" :key="task.name">
        タスク: {{ task.name }} 期限: {{ task.date }} まで 状態:
        {{ task.status }}
        <el-button
          type="success"
          size="small"
          @click="TaskComplete(task.number)"
        >
          完了
        </el-button>
        <el-button type="info" size="small" @click="TaskDelete(task.number)">
          削除
        </el-button>
      </li>
    </div>
    <el-form :inline="true" ref="newTask" :model="newTask" :rules="inputError">
      <el-form-item label="タスク" prop="name">
        <el-input
          type="text"
          v-model="newTask.name"
          placeholder="タスクの名前を入力"
          name="name"
        />
      </el-form-item>
      <el-form-item label="期限" prop="date">
        <el-input type="date" v-model="newTask.date" name="date" />
      </el-form-item>
      <el-form-item label="状態" prop="status">
        <el-input
          type="text"
          v-model="newTask.status"
          name="status"
          placeholder="タスクの状態を入力"
        />
      </el-form-item>
      <el-button :disabled="!addOk" @click="addTask" type="primary">
        add
      </el-button>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: "todoList",
  data() {
    return {
      tasks: [],
      newTaskNumber: 0,
      formName: "newTask",
      isValid: true,
      newTask: {
        name: "",
        date: "",
        status: ""
      },
      inputError: {
        name: { required: true, message: "タスクの名前を入力してください。" },
        date: { required: true, message: "タスクの期限を入力してください。" },
        status: { type: "text" }
      }
    };
  },
  methods: {
    addTask() {
      if (this.newTask.status == "") {
        this.newTask.status = "未完";
      }
      this.tasks.push({
        number: this.newTaskNumber,
        name: this.newTask.name,
        date: this.newTask.date,
        status: this.newTask.status
      });
      this.newTaskNumber++,
        (this.newTask.name = ""),
        (this.newTask.date = ""),
        (this.newTask.status = "");
    },
    TaskComplete(task_id) {
      for (let i = 0; i < this.tasks.length; i++) {
        const index = this.tasks[i].number;
        if (index == task_id) {
          this.tasks[i] = { ...this.tasks[i], status: "完了" };
        }
      }
      this.newTask.name = "0";
      this.newTask.name = "";
    },
    TaskDelete(task_id) {
      this.tasks = this.tasks.filter(x => x.number !== task_id);
    }
  },
  computed: {
    addOk: function() {
      if (this.newTask.name !== "" && this.newTask.date !== "") return true;
      else return false;
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
