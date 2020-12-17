<template>
  <el-card class="links">
    <h2>Save Links</h2>
    <div>
      <li v-for="link in links" :key="link.url">
        URL:
        <el-link :href="link.url" />
        詳細: {{ link.detail }}
        <el-button type="info" size="small" @click="linkDelete(link.url)">
          削除
        </el-button>
      </li>
    </div>
    <el-form ref="newLink" :inline="true" :model="newLink" :rules="inputError">
      <el-form-item label="URL" prop="url">
        <el-input
          v-model="newLink.url"
          type="text"
          placeholder="リンク先のURLを入力"
          name="url"
        />
      </el-form-item>
      <el-form-item label="詳細" prop="detail">
        <el-input
          v-model="newLink.detail"
          type="text"
          name="detail"
          placeholder="リンクの詳細や説明を入力"
        />
      </el-form-item>
      <el-button :disabled="!addOk" type="primary" @click="addLink">
        add
      </el-button>
    </el-form>
  </el-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Form as ElForm } from 'element-ui'

interface Link {
  url: string
  detail: string
}

@Component({
  name: 'SaveLinks',
  components: {}
})
export default class extends Vue {
  newLink: Link = {
    url: '',
    detail: ''
  }

  inputError = {
    url: [{ required: true, message: 'リンク先のURLを入力してください' }]
  }

  links: Link[] = []
  formName = 'newLink'
  isValid = true

  get addOk() {
    if (this.newLink.url === '') return false

    const $form = this.$refs[this.formName] as ElForm
    $form.validate(isValid => {
      this.isValid = isValid
    })
    return this.isValid
  }

  mounted() {
    const localLinks = localStorage.getItem('RozelinAppLinks')
    if (localLinks) this.links = JSON.parse(localLinks)
  }

  addLink() {
    this.links.push({ ...this.newLink })
    localStorage.setItem('RozelinAppLinks', JSON.stringify(this.links))
    this.newLink.url = ''
    this.newLink.detail = ''
  }

  linkDelete(deleteUrl: string) {
    this.links = this.links.filter(link => link.url !== deleteUrl)
    localStorage.setItem('RozelinAppLinks', JSON.stringify(this.links))
  }
}
</script>

<style scoped>
.links {
  width: 80%;
  margin: 0 auto;
}
</style>
