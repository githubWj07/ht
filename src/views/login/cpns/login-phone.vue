<template>
  <div class="login-account">
   <el-form :rules="rules" :model="phone">
       <el-form-item label="手机号" prop="num">
           <el-input v-model="phone.num" />
       </el-form-item>
       <el-form-item label="验证码" prop="code">
           <div class="flex">
                <el-input v-model="phone.code"/>
                <el-button type="primary" size="mini" class="code-btn">获取验证码</el-button>
           </div>
       </el-form-item>
   </el-form>
  </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
       setup(){
           const phone = {
               num:'',
               code:''
           }

           const rules = {
               num: [
                   {
                       required: true,
                       message: '请输入手机号',
                       trigger: 'blur'
                   },
                   {
                       pattern: /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/,
                       message: '请输入正确的手机号',
                       trigger: 'blur'
                   }
               ],
               code: [
                   {
                       required: true,
                       message: '请输入验证码',
                       trigger: 'blur'
                   }
               ]
           }

           return {
               phone,
               rules
           }
       }
    });
</script>

<style lang="less" scoped>
.code-btn {margin-left: 10px;}
</style>
