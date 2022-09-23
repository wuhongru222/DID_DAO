<template>
  <div class="detail">
    <header>
      <white :title="title"></white>
      <van-row class="title">
        <van-col span="8">收益数量</van-col>
        <van-col span="8">收益来源</van-col>
        <van-col span="8">收益时间</van-col>
      </van-row>
    </header>
    <main class="box">
      <van-row v-for="(item, index) in personageArr" :key="index">
        <van-col span="8">{{ item.eotc }}</van-col>
        <van-col span="8">
          <span v-if="item.type == 0">处理工单</span>
          <span v-if="item.type == 1">处理仲裁</span>
          <span v-if="item.type == 2">处理审核</span>
        </van-col>
        <van-col span="8">2022.05.24 22:21</van-col>
      </van-row>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import white from "../../components/Nav/white.vue";
import { getincome } from "@/api/earnings";
export default {
  components: { white },
  data() {
    return {
      title: "收益详情",
      page: 1,
      itemsPerPage: 10,
      personageArr: [],
    };
  },
  created() {
    let walletAddress = localStorage.getItem("myaddress");
    let otype = localStorage.getItem("netType");
    let sign = localStorage.getItem("mysign");

    getincome(
      {
        walletAddress: walletAddress,
        otype: otype,
        sign: sign,
      },
      this.page,
      this.itemsPerPage
    ).then((res) => {
      this.personageArr = res.data.items;
      console.log(this.personageArr);
    });
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.detail {
  background: #f3f4f5;
  height: 100vh;
}
.title {
  color: #999;
  text-align: center;
  line-height: 3rem;
}
.box {
  background: #fff;
  height: 100vh;
  color: #666666;
  text-align: center;
  .van-row {
    line-height: 3rem;
    font-size: 14px;
    border-bottom: 1px solid #f3f4f5;
  }
}
</style>