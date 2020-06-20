<template>
  <el-row class="m-header m-header-topbar">
    <el-col :span="10">
      <geo />
    </el-col>
    <el-col :span="14">
      <m-nav />
    </el-col>
  </el-row>
</template>
<script>
import geo from "./geo";
import MNav from "./nav";
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    geo,
    // eslint-disable-next-line vue/no-unused-components
    MNav
  }
};
</script>
