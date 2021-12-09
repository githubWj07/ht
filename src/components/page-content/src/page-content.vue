<template>
  <div class="content">
      <HyTable :listData="userList" v-bind="contentTableConfig">
        <!-- header中的插槽 -->
        <template #headerHandler>
          <el-button type="primary" size="mini">新建用户</el-button>
          <el-button icon="el-icon-refresh" size="mini"></el-button>
        </template>

        <!-- 列表中的插槽 -->
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
</template>

<script lang="ts">
import HyTable from '@/base-ui/table'

import { defineComponent,computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'content',
  components: {
      HyTable
  },
  props:{
      contentTableConfig:{
          type: Object,
          require: true
      },
      pageName: {
        type: String,
        required: true
      }
  },
  setup(props) {
    const store = useStore()
    
    //发送网络请求（获取user数据）
    const getPageData = (queryInfo:any = {}) => {
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: 0,
          size: 10,
          ...queryInfo
        }
      })
     
    }

    getPageData()

    //从vuex中获取数据
    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)
    return {
        userList,
        getPageData
    }
  }
})
</script>

<style scoped></style>
