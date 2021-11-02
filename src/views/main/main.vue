<template>
    <div>
        <el-container class="menu-contaniner">
            <el-aside width="210px" class="menu-aside">
                <NavMenu></NavMenu>
            </el-aside>
            <el-container>
                <el-header class="menu-header">Header</el-header>
                <el-main class="menu-main">Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import { defineComponent } from "vue"
import NavMenu from '@/components/nav-menu'

export default defineComponent({
   components: {
       NavMenu
   }
})
</script>

<style lang="less" scoped>
.menu-contaniner {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    .menu-aside {
        background-color: #001529;
    }
    .menu-header {
        height: 48px;
        line-height: 48px;
    }
    .menu-main {
        background-color: #f0f2f5;
    }
}
</style>

