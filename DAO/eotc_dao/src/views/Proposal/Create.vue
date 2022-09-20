<template>
  <div>
    <header>
      <van-nav-bar
        :border="false"
        title="创建提案"
        @click-left="onClickLeft"
        left-arrow
      />
      <div class="bj"></div>
    </header>
    <main class="section">
      <div class="title">提案标题</div>
      <van-field v-model="value" placeholder="请输入提案标题…" />
      <div class="title">提案概述</div>
      <van-field
        v-model="message"
        rows="5"
        autosize
        type="textarea"
        placeholder="描述您的提案…"
      />
    </main>
    <footer>
      <van-button block type="warning"
        >您必须持有10000EOTC才能提交提案</van-button
      >
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      message: "",
    };
  },
  methods: {
    onClickLeft() {
      history.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.van-nav-bar {
  .van-icon {
    color: #000;
  }
}
.bj {
  background: #f3f4f5;
  height: 10pt;
}
.section {
  margin: 0 16px;
  .title {
    margin: 20px 0 0;
  }
  .van-field {
    background: #f3f4f5;
    border-radius: 10px;
    margin-top: 10px;
  }
}
.van-button {
  background: #fc7542;
  width: 345px;
  margin-left: 20px;
  position: fixed;
  bottom: 30px;
  border-radius: 25px;
}
</style>