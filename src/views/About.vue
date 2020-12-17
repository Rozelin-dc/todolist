<template>
  <div class="about">
    <h1>This is an about page.</h1>
    Vue.jsとTypeScriptで作ったWeb上で動く簡単なアプリです
    <br />
    view on
    <el-link href="https://github.com/Rozelin-dc/SimpleApp" type="primary">
      Git Hub
    </el-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'About',
  components: {}
})
export default class extends Vue {}
</script>
