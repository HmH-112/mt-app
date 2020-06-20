<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="menuLeave">
      <dt>全部分类</dt>
      <dd v-for="(item,index) in menuList" :key="index" @mouseenter="menuEnter(item)">
        <i :class="item.type"></i>
        {{item.name}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div v-if="curDetail" class="detail" @mouseenter="detailEnter" @mouseleave="detailLeave">
      <template v-for="(item,index) in curDetail.items">
        <h4 :key="index">{{item.title}}</h4>
        <span v-for="item2 in item.items" :key="item2">{{item2}}</span>
      </template>
    </div>
  </div>
</template>
<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      curDetail: null,
      menuList:null,
    };
  },
  created() {
    api.nav().then(res=>{
      // console.log(res)
      this.menuList=res.data.data;
    })
  },
  methods: {
    menuEnter(item) {
      this.curDetail = item;
    },
    menuLeave(){
      this.timer = setTimeout(()=>{
         this.curDetail = null;
      },200);
    },
    detailEnter(){
      clearTimeout(this.timer);
    },
    detailLeave(){
      this.curDetail = null;
    }
  }
};
</script>