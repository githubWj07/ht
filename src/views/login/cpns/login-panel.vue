<template>
  <div class="login-panel">
    <h1>登录系统</h1>
    <el-tabs v-model="currentTab" type="border-card" stretch>
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <LoginAccount ref="accountRef"/>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <LoginPhone />
      </el-tab-pane>
    </el-tabs>
    <div class="login-control flex">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <div>
        <el-link type="primary">忘记密码</el-link>
      </div>
    </div>
    <el-button type="primary" class="login-btn" @click="handelClick">立即登录</el-button>
  </div>
</template>


<script lang="ts">
import { defineComponent,ref } from "vue";

import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  name: "login-panel",
  components: {
    LoginAccount,
    LoginPhone
  },
  setup(){
    //定义属性
    const isKeepPassword = ref(true);
    const accountRef = ref<InstanceType<typeof LoginAccount>>();
    const currentTab = ref('account');

    //定义方法
    const handelClick = () => {
      if (currentTab.value === 'account'){
        accountRef.value?.loginAction(isKeepPassword.value);
      }else {
        console.log('uir')
      }
      
    }

    return {
      isKeepPassword,
      accountRef,
      currentTab,
      handelClick
    }
  }
});
</script>
<style lang="less" scoped>
.login-panel {
  width: 320px;
  margin: 15% auto 0;
  .login-control {
    justify-content: space-between;
    align-items: center;
  }
}
.login-btn {
  width: 100%;
}
</style>
