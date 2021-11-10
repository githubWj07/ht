<template>
    <div>
        <el-container class="menu-contaniner">
            <el-aside :width="isCollapse? '60px' : '210px' " class="menu-aside">
                <NavMenu :collapse="isCollapse" />
            </el-aside>
            <el-container>
                <el-header class="menu-header">
                    <NavHeader @foldChange = "handlerFoldChange"></NavHeader>
                </el-header>
                <el-main class="menu-main">
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import { defineComponent, ref} from "vue"
import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'

export default defineComponent({
   components: {
       NavMenu,
       NavHeader
   },
   setup(){
       const isCollapse = ref(false)
       const handlerFoldChange = (isFold) => {
        //    console.log(isFold)
           isCollapse.value = isFold
       }

       return {
           isCollapse,
           handlerFoldChange
       }
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
    }
    .menu-main {
        background-color: #f0f2f5;
    }
}
</style>

