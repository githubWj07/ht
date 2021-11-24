<template>
  <div class="user">
    <PageSearch :searchFormConfig="searchFormConfig"/>
    <PageContent :contentTableConfig="contentTableConfig"></PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
// import HyTable from '@/base-ui/table'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    return {
      searchFormConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped>
.content {border-top: 20px solid #f5f5f5;padding: 20px;}
</style>
