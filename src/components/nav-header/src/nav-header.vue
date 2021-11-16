<template>
    <div class="nav-header flex">
        <i class="fold-menu"
           :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold' "
           @click="handleFoldClick">
        </i>
        <div class="flex user-info-wrap">
            <NavBreadcrumb :breadcrumbs="breadcrumbs"></NavBreadcrumb>
            <UserInfo></UserInfo>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue"
import UserInfo from './user-info.vue'
import NavBreadcrumb,{IBreadcrumb} from "@/base-ui/breadcrumb"

import { useStore} from '@/store'
import { useRoute} from 'vue-router'
import { pathMapBreadcrumds } from '@/utils/map-menus'

export default defineComponent({
    components:{
        UserInfo,
        NavBreadcrumb
    },
    emits:['foldChange'],
    setup(props, {emit}) {
        const isFold = ref (false)
        const handleFoldClick = () => {
            isFold.value = !isFold.value;
            emit('foldChange', isFold.value)
        }
        //面包屑
        const store = useStore()
        const breadcrumbs = computed(() => {
            const userMenus = store.state.login.userMenus
            const route = useRoute()
            const currentPath = route.path
            return pathMapBreadcrumds(userMenus,currentPath)
        }) 

        return {
            isFold,
            handleFoldClick,
            breadcrumbs
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

