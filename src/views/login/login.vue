<template>
  <div class="login">
   <LoginPanel />
  </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import LoginPanel from "./cpns/login-panel.vue";

    export default defineComponent({
        name: "login",
        components: {
            LoginPanel
        }
    });
</script>

<style lang="less" scoped>
    .login{text-align: center;}
</style>
