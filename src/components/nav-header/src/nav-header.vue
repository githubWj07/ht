<template>
    <div class="nav-header flex">
        <i class="fold-menu"
           :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold' "
           @click="handleFoldClick"></i>
           <div class="flex user-info-wrap">
               <div>导航</div>
               <userInfo></userInfo>
           </div>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue"

import userInfo from './user-info.vue'

export default defineComponent({
    components:{
        userInfo
    },
    emits:['foldChange'],
    setup(props, {emit}) {
        const isFold = ref (false)
        const handleFoldClick = () => {
            isFold.value = !isFold.value;
            emit('foldChange', isFold.value)
        }
        return {
            isFold,
            handleFoldClick
        }
    }
})
</script>

<style lang="less" scoped>
.nav-header {
    height: 48px;
    padding: 0;
    margin: 0;
    .fold-menu {
        font-size: 30px;
        cursor: pointer;
    }
    .user-info-wrap {
        padding: 0 20px;
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}

</style>

