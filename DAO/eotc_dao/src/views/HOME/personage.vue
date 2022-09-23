<template>
  <div class="personage">
    <header>
      <Right></Right>
    </header>
    <main>
      <van-cell-group inset :border="false">
        <van-cell
          title="总收益(EOTC)"
          :border="false"
          value="收益明细"
          @click="detail"
        />
        <van-cell :title="total" style="font-size: 25px" :border="false" />
      </van-cell-group>
      <List></List>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import Right from "../../components/Nav/right.vue";
import List from "../../components/Nav/List.vue";
import { gettotalincome } from "@/api/earnings";
export default {
  components: { Right, List },
  data() {
    return {
      total: 0,
    };
  },
  created() {
    let walletAddress = localStorage.getItem("myaddress");
    let otype = localStorage.getItem("netType");
    let sign = localStorage.getItem("mysign");

    gettotalincome({
      walletAddress: walletAddress,
      otype: otype,
      sign: sign,
    }).then((res) => {
      console.log(res);
      this.total = res.data.items;
    });
  },
  methods: {
    detail() {
      this.$router.push("/Home_detail");
    },
  },
};
</script>

<style lang="scss" scoped>
.personage {
  width: 100wh;
  background: #070a0e;
  height: 100vh;
  color: #000;
}
.van-cell-group {
  margin: 1rem 1rem;
  .van-cell {
    background: linear-gradient(to left, #54dcff, #2a86ff);
    line-height: 2.5rem;
    color: #fff;
  }
  .van-cell__value {
    color: #fff;
  }
}
</style>