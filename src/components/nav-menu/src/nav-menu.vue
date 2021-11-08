<template>
    <div class="nav-menu">
        <div class="flex nav-logo-wrap">
           <img src="~assets/img/logo.svg" alt="" class="nav-logo">
           <span v-if="!collapse">vue3+ts</span>
        </div>
        <el-menu 
            default-active="1" 
            class="el-menu-vertical" 
            :collapse="collapse"
            background-color="#0c2135" 
            text-color="#b7bdc3"
            active-text-color="#0a60bd"
        >
           <template v-for="item in userMenus" :key="item.id">
               <!-- 二级菜单 -->
               <template v-if="item.type ===1">
                   <!-- 二级菜单可展开的标题 -->
                    <el-sub-menu :index="item.id + ''">
                        <template #title>
                            <i v-if="item.icon" :class="item.icon"></i>
                            <span>{{ item.name }}</span>
                        </template>
                        <!-- 遍历里面的item -->
                       <template v-for="subitem in item.children" :key="subitem.id">
                            <el-menu-item :index="subitem.id + ''" @click="handleMenuItemClick(subitem)">
                                <i v-if="subitem.icon" :class="subitem.icon"></i>
                                <span>{{ subitem.name }}</span>
                            </el-menu-item>
                        </template>
                    </el-sub-menu>
               </template>
               <!-- 一级菜单 -->
                <template v-else-if="item.type ===2">
                    <el-menu-item :index="item.id + ''">
                        <i v-if="item.icon" :class="item.icon"></i>
                        <span>{{ item.name }}</span>
                    </el-menu-item>
               </template>
           </template>
      </el-menu>
    </div>
</template>

<script>
import { defineComponent, computed } from "vue"
import { useStore } from "vuex"
import { useRouter } from 'vue-router'

export default defineComponent({
    props: {
        collapse:{
            type: Boolean,
            default: false
        }
    },
    setup() {
        const store = useStore()
        const userMenus = computed(() => store.state.login.userMenus)
        const router = useRouter()

        const handleMenuItemClick = (item) => {
            router.push({
                path: item.url ?? '/not-found'
            })
        }

        return {
            userMenus,
            router,
            handleMenuItemClick
        }
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
.el-menu-item:hover {
    color: #fff;
}
.el-menu-item.is-active {
    background-color: #0a60bd;
    color: #fff;
}
.el-menu {
    border-right: none;
}

</style>


