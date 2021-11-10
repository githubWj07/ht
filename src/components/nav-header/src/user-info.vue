<template>
  <div class="">
    <el-dropdown>
        <span class="el-dropdown-link">
            <el-avatar>
              <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" alt="" class="el-avatar">
            </el-avatar>
            <span>{{name}}</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
              <el-dropdown-item>退出登录</el-dropdown-item>
              <el-dropdown-item divided>用户信息</el-dropdown-item>
          </el-dropdown-menu>
        </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent,computed } from 'vue'
import { useStore } from "vuex"

export default defineComponent({
  setup() {
    const stroe = useStore()
    const name = computed(()=> stroe.state.login.userInfo.name)
    return {
        name
    }
  }
})
</script>

<style scoped>
.el-dropdown-link {display: flex;align-items: center;cursor: pointer;}
.el-avatar {width: 30px;height: 30px;border-radius: 100px;margin-right: 5px;}
</style>
