<template>
  <div id="nav">
    <el-config-provider :locale="locale">
      <router-view />
    </el-config-provider>
  </div>
</template>
<script>
  import { defineComponent } from 'vue'
  import { ElConfigProvider } from 'element-plus'

  import zhCn from 'element-plus/lib/locale/lang/zh-cn'

  export default defineComponent({
    components: {
      ElConfigProvider,
    },
    setup() {
      return {
        locale: zhCn,
      }
    },
  })
</script>
<style lang="less">
</style>
