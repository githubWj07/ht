<template>
  <div class="user">
    <PageSearch 
      :searchFormConfig="searchFormConfig" 
      @resetBtnClick="handleResetClick" 
      @queryBtnClick="handleQueryClick"
    />
    <PageContent 
      ref="PageContentRef"
      :contentTableConfig="contentTableConfig" 
      pageName="users"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
// import HyTable from '@/base-ui/table'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

import { usePageSearch } from '@/hooks/usePageSearch'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    const [ PageContentRef, handleResetClick, handleQueryClick ] = usePageSearch()

    return {
      searchFormConfig,
      contentTableConfig,
      PageContentRef,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped>
.content {border-top: 20px solid #f5f5f5;padding: 20px;}
</style>
