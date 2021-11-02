<template>
    <div class="nav-menu">
       <div class="flex nav-logo-wrap">
           <img src="~assets/img/logo.svg" alt="" class="nav-logo">
           <span>vue3+ts</span>
       </div>
    </div>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
   components: {
      
   }
})
</script>

<style lang="less" scoped>
.nav-logo-wrap {
    margin: 14px 0 14px 20px;
    color: #fff;
    .nav-logo {
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }
}
    
</style>

