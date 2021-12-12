<template>
  <div class="content">
      <HyTable :listData="dataList" 
               :listCount="dataCount" 
               v-bind="contentTableConfig"
               v-model:page="pageInfo"
      >
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

import { defineComponent,computed,ref,watch } from 'vue'
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

    //双向绑定pageInfo
    const pageInfo = ref({
      currentPage: 0,
      pageSize: 10
    })
    
    watch(pageInfo, () => getPageData())

    //发送网络请求（获取user数据）
    const getPageData = (queryInfo:any = {}) => {
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
     
    }

    getPageData()

    //从vuex中获取数据
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    )
    // const userList = computed(() => store.state.system.usersList)
    // const userCount = computed(() => store.state.system.userCount)
    return {
        dataList,
        getPageData,
        dataCount,
        pageInfo
    }
  }
})
</script>

<style scoped></style>
