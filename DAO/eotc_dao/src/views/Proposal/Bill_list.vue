<template>
  <div class="meun">
    <header class="me">
      <white :title="title"></white>
    </header>
    <main>
      <div class="box">
        <div class="one_an" @click="detail">
          <div>将UNI提案提交门槛降低至2万</div>
          <div class="piao">
            <span>1000票</span
            ><span
              ><div class="ion"></div>
              未通过</span
            >
          </div>
        </div>
        <div class="one_an">
          <div>创建一个NFT农场-抵押UNI并赚取NFT</div>
          <div class="piao">
            <span>10票</span
            ><span
              ><div class="ion1"></div>
              已通过</span
            >
          </div>
        </div>
        <div class="one_an">
          <div>帮助支持GNSH项目</div>
          <div class="piao">
            <span>10票</span
            ><span
              ><div class="ion"></div>
              未通过</span
            >
          </div>
        </div>
        <div class="one_an">
          <div>帮助支持GNSH项目</div>
          <div class="piao">
            <span>10票</span
            ><span
              ><div class="ion1"></div>
              已通过</span
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
export default {
  components: { white },
  name: "home",
  data() {
    return {
      title: "我的提案",
    };
  },
  async created() {},
  methods: {
    createAn() {
      this.$router.push("/Create");
    },
    detail() {
      this.$router.push("/detail");
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
    .ion1 {
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background: #00b87a;
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

