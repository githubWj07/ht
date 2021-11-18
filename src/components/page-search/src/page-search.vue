<template>
  <div class="page-search">
    <hy-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h3 class="form-tit">高级搜索</h3> 
      </template>  
      <template #footer>
        <div class="form-btns">
          <el-button type="" icon="el-icon-refresh"> 重置</el-button>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </template>  
    </hy-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HyForm from '@/base-ui/form'

export default defineComponent({
  name: 'page-search',
  props: {
      searchFormConfig:{
          type: Object,
          required: true
      }
  },
  components: {
    HyForm
  },
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return {
      formData
    }
  }
})
</script>

<style scoped>
.form-tit {text-align: center;}
.form-btns {text-align: right;padding:0 40px 20px 0;}
</style>
