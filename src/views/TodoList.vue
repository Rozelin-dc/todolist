<template>
  <el-card class="card">
    <h2>Todo List</h2>
    <!-- <li v-for="task in tasks" :key="task.number">
      タスク: {{ task.name }} 期限: {{ task.date }} まで 状態:
      {{ task.status }}
      <el-button
        type="success"
        size="small"
        @click="taskComplete(task.number)"
      >
        完了
      </el-button>
      <el-button type="info" size="small" @click="taskDelete(task.number)">
        削除
      </el-button>
    </li> -->
    <el-table :data="tasks" border style="width: 100%">
      <el-table-column align="center">
        <!-- slot-scope="~~" がないと、checkbox の表示がリアルタイムで更新されない -->
        <el-checkbox
          v-if="selected && scope"
          slot="header"
          v-model="isSelectedAll"
          slot-scope="scope"
          :indeterminate="isIndeterminate"
          :disabled="tasks.length === 0"
        />
        <el-checkbox
          v-if="selected"
          v-model="selected[scope.row.number]"
          slot-scope="scope"
        />
      </el-table-column>
      <el-table-column prop="name" label="タスク" />
      <el-table-column prop="date" label="期限" />
      <el-table-column prop="status" label="状態" />
      <el-table-column label="完了/削除">
        <template slot-scope="scope">
          <el-button
            type="success"
            size="small"
            @click="taskComplete(scope.row.number)"
          >
            完了
          </el-button>
          <el-button
            type="info"
            size="small"
            @click="taskDelete(scope.row.number)"
          >
            削除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="button-wrapper">
      <el-button type="success" size="small" @click="taskCompleteBulk">
        まとめて完了
      </el-button>
      <el-button type="info" size="small" @click="taskDeleteBulk">
        まとめて削除
      </el-button>
    </div>
    <el-divider />
    <el-form ref="newTask" :inline="true" :model="newTask" :rules="inputError">
      <el-form-item label="タスク" prop="name">
        <el-input
          v-model="newTask.name"
          type="text"
          placeholder="タスクの名前を入力"
          name="name"
        />
      </el-form-item>
      <el-form-item label="期限" prop="date">
        <el-input v-model="newTask.date" type="date" name="date" />
        <!-- <el-date-picker v-model="newTaskDate" name="date" /> -->
      </el-form-item>
      <el-form-item label="状態" prop="status">
        <el-input
          v-model="newTask.status"
          type="text"
          name="status"
          placeholder="タスクの状態を入力"
        />
      </el-form-item>
      <el-button :disabled="!addOk" type="primary" @click="addTask">
        add
      </el-button>
    </el-form>
  </el-card>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { Form as ElForm } from 'element-ui'

interface Task {
  number: number
  name: string
  date: string
  status: string
}

@Component({
  name: 'TodoList',
  components: {}
})
export default class extends Vue {
  inputError = {
    name: [{ required: true, message: 'タスクの名前を入力してください。' }],
    date: [
      {
        required: true,
        message: 'タスクの期限を入力してください。'
      }
    ]
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

  /** タスクの番号をキー、選択されているかを値に持つ */
  selected: Record<number, boolean> | null = null

  get addOk() {
    if (this.newTask.date === '') return false

    const $form = this.$refs[this.formName] as ElForm
    $form.validate(isValid => {
      this.isValid = isValid
    })
    return this.isValid
  }

  /** 全て 選択/未選択 のとき false でそれ以外 true */
  get isIndeterminate() {
    if (this.selected === null) return false
    return !(
      this.tasks.every(task => this.selected![task.number]) ||
      this.tasks.every(task => !this.selected![task.number])
    )
  }

  get isSelectedAll() {
    if (this.selected === null) return false
    if (this.tasks.length === 0) return false
    return this.tasks.every(task => this.selected![task.number])
  }

  set isSelectedAll(e: boolean) {
    if (this.selected === null) return
    this.tasks
      .filter(task => this.selected![task.number] !== e)
      .forEach(task => {
        this.selected![task.number] = e
      })
  }

  mounted() {
    const localTask = localStorage.getItem('RozelinAppTasks')
    if (localTask) this.tasks = JSON.parse(localTask)
  }

  addTask() {
    if (this.newTask.status === '') {
      this.newTask.status = '未完'
    }
    this.tasks.push({
      ...this.newTask,
      number: this.newTaskNumber
    })
    localStorage.setItem('RozelinAppTasks', JSON.stringify(this.tasks))
    this.newTaskNumber++
    this.newTask.name = ''
    this.newTask.date = ''
    this.newTask.status = ''
  }

  taskComplete(taskId: number) {
    for (let i = 0; i < this.tasks.length; i++) {
      const index = this.tasks[i].number
      if (index === taskId) {
        this.tasks[i] = { ...this.tasks[i], status: '完了' }
        break
      }
    }
    localStorage.setItem('RozelinAppTasks', JSON.stringify(this.tasks))
    this.newTask.name = '0'
    this.newTask.name = ''
  }

  taskDelete(taskId: number) {
    this.tasks = this.tasks.filter(task => task.number !== taskId)
    localStorage.setItem('RozelinAppTasks', JSON.stringify(this.tasks))
  }

  taskCompleteBulk() {
    this.tasks.forEach(task => {
      if (this.selected![task.number]) task.status = '完了'
    })
    localStorage.setItem('RozelinAppTasks', JSON.stringify(this.tasks))
  }

  taskDeleteBulk() {
    this.tasks = this.tasks.filter(task => !this.selected![task.number])
    localStorage.setItem('RozelinAppTasks', JSON.stringify(this.tasks))
  }

  @Watch('tasks')
  setSelected() {
    this.selected = Object.fromEntries(
      this.tasks.map(task => [task.number, false])
    )
  }
}
</script>

<style scoped>
.card {
  width: 80%;
  margin: 0 auto;
}

.button-wrapper {
  float: left;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
