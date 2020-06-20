<template>
  <div class="page-changeCity">
    <el-row>
      <province />
    </el-row>
    <el-row>
      <hot title="热门城市：" :list="hotList" />
    </el-row>
    <el-row>
      <hot title="最近访问：" :list="rencentList" />
    </el-row>
    <el-row>
      <category />
    </el-row>
  </div>
</template>

<script>
import Province from "@/components/changeCity/province";
import Hot from "@/components/changeCity/hot";
import Category from "@/components/changeCity/category";
import api from "@/api/index.js";
export default {
  data() {
    return {
      hotList: [
        "大连",
        "沈阳",
        "葫芦岛",
        "锦州",
        "鞍山",
        "铁岭",
        "朝阳",
        "灯塔",
        "凤城",
        "盖州"
      ],
      rencentList: ["北京", "天津"]
    };
  },
  created() {
    api.hot().then(res => {
      this.hotList = res.data.data.map(item => {
        return item.name;
      });
    });
    api.recents().then(res => {
      this.rencentList = res.data.data.map(item => {
        return item.name;
      });
    });
  },
  components: {
    Province,
    Hot,
    Category
  }
};
</script>