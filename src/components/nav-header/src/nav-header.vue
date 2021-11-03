<template>
    <div class="nav-header">
        <i class="fold-menu"
           :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold' "
           @click="handleFoldClick"></i>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue"

export default defineComponent({
   setup() {
        const isFold = ref (false)
        const handleFoldClick = () => {
            isFold.value = !isFold.value
        }
        return {
            isFold,
            handleFoldClick
        }
   }
})
</script>

<style lang="less" scoped>
.fold-menu {
    font-size: 30px;
    cursor: pointer;
}
</style>

