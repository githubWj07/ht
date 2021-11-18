<template>
  <div class="user">
    <PageSearch :searchFormConfig="searchFormConfig"/>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import PageSearch from '@/components/page-search'

import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch
  },
  setup() {
    
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped>
.form-tit {text-align: center;}
.form-btns {text-align: right;padding:0 40px 20px 0;}
</style>
