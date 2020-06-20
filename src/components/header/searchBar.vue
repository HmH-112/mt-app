<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团" />
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="searchWord"
            @focus="focus"
            @blur="blur"
            @input="input"
            placeholder="请输入内容"
          ></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="item in hotPlaceList" :key="item">
              <router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="item in searchList" :key="item">
              <router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a :href="`#${item}`" v-for="item in suggestList" :key="item">{{item}}</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      searchWord: "",
      isFocus: false,
      hotPlaceList: null,
      searchList: null,
      suggestList: null
    };
  },
  created() {
    api.searchHotWords().then(res => {
      // eslint-disable-next-line no-console
      this.hotPlaceList = res.data.data;
      this.suggestList = res.data.data;
    });
  },
  computed: {
    // eslint-disable-next-line vue/no-dupe-keys
    isHotPlace() {
      return this.isFocus && !this.searchWord;
    },
    // eslint-disable-next-line vue/no-dupe-keys
    isSearchList() {
      return this.isFocus && this.searchWord;
    }
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      setTimeout(() => {
        this.isFocus = false;
      }, 200);
    },
    input() {
      api.search().then(res => {
        this.searchList = res.data.data.list.splice(0, 4).filter(item => {
          return item.includes(this.searchWord);
        });
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/public/header/search.scss";
</style>