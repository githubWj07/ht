<template>
    <div>
        <el-container class="menu-contaniner">
            <el-aside width="210px" class="menu-aside">
                <NavMenu></NavMenu>
            </el-aside>
            <el-container>
                <el-header class="menu-header">
                    <NavHeader></NavHeader>
                </el-header>
                <el-main class="menu-main">Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import { defineComponent } from "vue"
import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'

export default defineComponent({
   components: {
       NavMenu,
       NavHeader
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

