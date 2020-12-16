<template>
  <el-card class="card">
    <h2>todoList</h2>
    <div id="todo-list">
      <li v-for="task in tasks" :key="task.number">
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

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Form as ElForm } from 'element-ui'

interface Task {
  number: number,
  name: string,
  date: string,
  status: string
}

@Component({
  name: 'TodoList',
  components: {}
})
export default class extends Vue {
  inputError = {
    name: { required: true, message: 'タスクの名前を入力してください。' },
    date: { required: true, message: 'タスクの期限を入力してください。' },
    status: { type: 'text' }
  }

  newTask = {
    name: '',
    date: '',
    status: ''
  }

  tasks: Task[] = []
  newTaskNumber = 0
  formName = 'newTask'
  isValid = true

  get addOk() {
    if (this.newTask.date === '') return false

    const $form = this.$refs[this.formName] as ElForm
    $form.validate(isValid => {
      this.isValid = isValid
    })
    return this.isValid
  }

  addTask() {
    if (this.newTask.status === '') {
      this.newTask.status = '未完'
    }
    this.tasks.push({
      ...this.newTask,
      number: this.newTaskNumber,
    })
    this.newTaskNumber ++
    this.newTask.name = ''
    this.newTask.date = ''
    this.newTask.status = ''
  }

  TaskComplete(taskId: number) {
    for (let i = 0; i < this.tasks.length; i++) {
      const index = this.tasks[i].number
      if (index === taskId) {
        this.tasks[i] = { ...this.tasks[i], status: '完了' }
        break
      }
    }
    this.newTask.name = '0'
    this.newTask.name = ''
  }

  TaskDelete(taskId: number) {
    this.tasks = this.tasks.filter(task => task.number !== taskId)
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 80%;
  margin: 0 auto;
}
</style>