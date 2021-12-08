<template>
  <div class="page-search">
    <hy-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h3 class="form-tit">高级搜索</h3> 
      </template>  
      <template #footer>
        <div class="form-btns">
          <el-button type="" icon="el-icon-refresh" @click="handleResetClick"> 重置</el-button>
          <el-button type="primary" icon="el-icon-search" @click="handleQueryClick">搜索</el-button>
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
  emits:['resetBtnClick','queryBtnClick'],
  setup(props, { emit }) {

    //双向绑定的属性由配置文件field来决定
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData:any = {}
    for ( const item of formItems){
      formOriginData[item.field] = ''
    }

    // const formData = ref({
    //   id: '',
    //   name: '',
    //   password: '',
    //   sport: '',
    //   createTime: ''
    // })

    const formData = ref(formOriginData)

    //当用户点击重置
    const handleResetClick = () => {
      formData.value = formOriginData
      emit('resetBtnClick')
    }

    //当用户点击搜索
    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
      console.log('sousuo')
    }

    return {
      formData,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped>
.form-tit {text-align: center;}
.form-btns {text-align: right;padding:0 40px 20px 0;}
</style>
