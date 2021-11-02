<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-row>
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
    </el-row>
    <el-checkbox v-model="checked1" disabled>Disabled</el-checkbox>
    <el-checkbox v-model="checked2">Not disabled</el-checkbox>
  </div>
</template>
<script lang="ts">
import { defineComponent,ref } from "vue";

export default defineComponent({
  name: "About",
  components: {
  },
  setup() {
    const checked1 = ref(false)
    const checked2 = ref(true)
    return {
      checked1,
      checked2,
    }
  }
});
</script>

