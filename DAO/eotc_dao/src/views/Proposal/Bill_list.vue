<template>
  <div class="meun">
    <header class="me">
      <white :title="title"></white>
    </header>
    <main>
      <div class="box">
        <div
          class="one_an"
          @click="detail(item.proposalId)"
          v-for="(item, index) in List"
          :key="index"
        >
          <div>{{ item.title }}</div>
          <div class="piao">
            <span>{{ item.total }}票</span>
            <span v-if="item.state == 0"
              ><div class="ion"></div>
              未通过</span
            >
            <span v-if="item.state == 1"
              ><div class="ion two"></div>
              已通过</span
            >
            <span v-if="item.state == 2"
              ><div class="ion three"></div>
              进行中</span
            >
            <span v-if="item.state == 3"
              ><div class="ion fhire"></div>
              已终止</span
            >
          </div>
        </div>
      </div>
    </main>
    <footer>
      <van-button icon="plus" block type="info" @click="createAn"
        >创建提案</van-button
      >
    </footer>
  </div>
</template>

<script>
import white from "@/components/Nav/white.vue";
import { getmyprops } from "@/api/Proposal";
export default {
  components: { white },
  name: "home",
  data() {
    return {
      title: "我的提案",
      query: {
        walletAddress: localStorage.getItem("myaddress"),
        otype: localStorage.getItem("netType"),
        sign: localStorage.getItem("mysign"),
      },
      List: [],
    };
  },
  created() {
    getmyprops(this.query).then((res) => {
      this.List = res.data.items;
      console.log(this.List);
    });
  },
  methods: {
    createAn() {
      this.$router.push("/Create");
    },
    detail(id) {
      this.$router.push({ path: "/detail", query: { proposalId: id } });
    },
  },
};
</script>
<style lang="scss" scoped>
.meun {
  height: 100vh;
  background: #f3f4f5;
  margin-bottom: 1rem;
  position: relative;
}
.box {
  background: #fff;
  height: 100vh;
  border-radius: 0.5rem;
}
.one_an {
  color: #000;
  margin: 1rem;
  border-bottom: 1px solid #eeeeee;
  line-height: 2rem;
  font-size: 16px;
  .piao {
    display: flex;
    color: #9296a2;
    font-size: 12.8px;
    justify-content: space-between;
    .ion {
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background: #fc7542;
    }
    .two {
      background: #00b87a;
    }
    .three {
      background: #237ff8;
    }
    .fhire {
      background: #999999;
    }
  }
}
.van-button {
  width: 22rem;
  position: absolute;
  bottom: 1rem;
  right: 0;
  left: 0;
  margin: 0 auto;
  border-radius: 10rem;
}
</style>

