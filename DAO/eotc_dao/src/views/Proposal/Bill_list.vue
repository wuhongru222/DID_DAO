<template>
  <div>
    <header>
      <van-nav-bar :border="false" title="我的提案" left-arrow />
      <div class="bj"></div>
      <!-- <van-panel title="将UNI提案提交门槛降低至2万"> </van-panel> -->
      <div>
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
    </header>
    <main></main>
    <footer>
      <van-button icon="plus" block type="info" @click="createAn"
        >创建提案</van-button
      >
    </footer>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
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
<style lang="scss" scope>
.van-nav-bar {
  .van-icon {
    color: #000;
  }
}
.bj {
  background: #f3f4f5;
  height: 10pt;
}
.one_an {
  margin: 16px;
  border-bottom: 1px solid #eeeeee;
  line-height: 25pt;
  font-size: 16px;
  .piao {
    display: flex;
    color: #9296a2;
    font-size: 14px;
    justify-content: space-between;
    .ion {
      display: inline-block;
      width: 7pt;
      height: 7pt;
      border-radius: 50%;
      background: #fc7542;
    }
    .ion1 {
      display: inline-block;
      width: 7pt;
      height: 7pt;
      border-radius: 50%;
      background: #00b87a;
    }
  }
}
.van-button {
  width: 345px;
  position: fixed;
  margin-left: 16px;
  bottom: 30px;
  border-radius: 25px;
}
</style>

