<template>
  <div class="user">
    <PageSearch :searchFormConfig="searchFormConfig"/>
    <div class="content">
      <HyTable 
        :listData="userList" 
        :propList="propList" 
        :showIndexColumn="showIndexColumn" 
        :showSelectColumn="showSelectColumn"
      >
        <template #status="scope">
          <el-button plain size="mini" :type="scope.row.enable ? 'success' : 'danger' " >
            {{scope.row.enable ? '启用' : '禁用'}}
          </el-button>
        </template>
        <template #handler>
          <el-button size="mini" type="text">编辑</el-button>
          <el-button size="mini" type="text">删除</el-button>
        </template>
      </HyTable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

import PageSearch from '@/components/page-search'
import HyTable from '@/base-ui/table'

import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    HyTable
  },
  setup() {
    const store = useStore()
    
    //获取user数据
    store.dispatch('system/getPageListAction', {
      pageUrl:'/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)

    const propList = [
      {prop:'id',label:'ID'},
      {prop:'name',label:'用户名'},
      {prop:'realname',label:'真实姓名'},
      {prop:'cellphone',label:'手机号码'},
      {prop:'enable',label:'状态',slotName:'status'},
      {prop:'createAt',label:'创建时间',slotName:'createAt'},
      {prop:'updateAt',label:'更新时间',slotName:'updateAt'},
      {label:'操作',minWidth:'120',slotName:'handler'}
    ]
    //是否显示序号
    const showIndexColumn = true
    //是否显示复选框
    const showSelectColumn = true
    return {
      searchFormConfig,
      userList,
      propList,
      showIndexColumn,
      showSelectColumn
    }
  }
})
</script>

<style scoped>
.content {border-top: 20px solid #f5f5f5;padding: 20px;}
</style>
