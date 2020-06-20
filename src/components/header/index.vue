<template>
  <div class="m-header">
    <el-row :span="24">
        <top-bar /> 
    </el-row>
    <el-row>
        <search-bar /> 
    </el-row>
  </div>
</template>

<script>
import topBar from "./topBar";
import searchBar from "./searchBar";
export default {
  components: {
      // eslint-disable-next-line vue/no-unused-components
      topBar,
      // eslint-disable-next-line vue/no-unused-components
      searchBar,
  }
};
</script>

<style lang="scss">
@import "@/assets/css/public/header/index.scss";
</style>