<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{nav.title}}</dt>
      <dd
        v-for="(item,index) in nav.list"
        :class="{'active': kind === item.tab}"
        :data-type="item.tab"
        :key="index"
      >{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item,index) in list" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.sub_title">{{item.sub_title}}</div>
            <div class="price-info" v-if="item.rentNum && item.price_info.current_price">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price_info.current_price}}</span>
              </span>
              <span class="old-price">门市价¥{{item.price_info.old_price}}</span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
            <div class="price-info" v-else-if="!item.rentNum">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">抢光了</span>
              </span>
            </div>
            <div class="price-info" v-else>
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price_info.avg_price}}</span>
              </span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
import api from "@/api/index.js";
export default {
  created() {
    api.resultsByKeywords().then(res => {
      // eslint-disable-next-line no-console
      console.log(res)
      this.resultsData = res.data.data;
    });
  },
  data() {
    return {
      kind: "",
      resultsData: {},
      list: [
        {
          image:
            "//p1.meituan.net/msmerchant/c0d56c76a615b73e31e639f83f61b95f136928.jpg@368w_208h_1e_1c",
          title: "幸福西饼蛋糕（朝阳店）",
          sub_title: "天天好吃花镜1个，约850克，圆形",
          price_info: {
            current_price: 139,
            old_price: 189
          },
          rentNum: 10,
          address: "朝阳区"
        },
        {
          image:
            "//p1.meituan.net/msmerchant/88e7a2161a7f2315bf31e441cc81a310943864.jpg@368w_208h_1e_1c",
          title: "théATRE 茶聚场（王府中環店）",
          sub_title: "蛋糕6选1,约6英寸，圆形",
          price_info: {
            current_price: null,
            old_price: null,
            avg_price: 18,
            units: "人"
          },
          rentNum: 10,
          address: "王府井/东单"
        },
        {
          image:
            "//p0.meituan.net/mogu/fc091566222b23c51857ab4316633e43370925.jpg@368w_208h_1e_1c",
          title: "祈年8号中餐厅",
          sub_title: "单人奢华点心自助",
          price_info: {
            current_price: 128,
            old_price: 138
          },
          rentNum: 10,
          address: "崇文门新世界"
        },
        {
          image:
            "//p1.meituan.net/poi/697cf6a6e1785559a7bb31d0bf03c649110592.jpg@368w_208h_1e_1c",
          title: "北京饭店诺金东33餐厅",
          sub_title: "桌餐A，建议8-10人使用",
          price_info: {
            current_price: 3000,
            old_price: 4266
          },
          rentNum: 10,
          address: "王府井/东单"
        },
        {
          image:
            "//p0.meituan.net/msmerchant/c08c616aa835bc7cebdc3bd17184afef312214.jpg@368w_208h_1e_1c",
          title: "丰泽园饭店（王府井店）",
          sub_title: "2人套餐，提供免费WiFi",
          price_info: {
            current_price: 268,
            old_price: 342
          },
          address: "王府井/东单"
        },
        {
          image:
            "//p1.meituan.net/msmerchant/ffc59e20e7d6d7c0d519ec187938f6bd128055.jpg@368w_208h_1e_1c",
          title: "御石1416·烤鸭店（国瑞城店）",
          sub_title: "单人商务餐",
          price_info: {
            current_price: 68,
            old_price: 84
          },
          rentNum: 10,
          address: "崇文门"
        }
      ]
    };
  },
  props: ["nav"],
  methods: {
    over(e) {
      // eslint-disable-next-line no-unused-vars
      const dom = e.target;
      // eslint-disable-next-line no-unused-vars
      const tagName = dom.tagName.toLowerCase();
      if (tagName !== "dd") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");
      //   动态获取数据
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>