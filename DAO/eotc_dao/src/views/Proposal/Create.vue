<template>
  <div class="meun">
    <header>
      <van-nav-bar
        :border="false"
        title="创建提案"
        @click-left="onClickLeft"
        left-arrow
      />
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
.meun {
  background: #f3f4f5;
  height: 100vh;
}
.van-nav-bar {
  .van-icon {
    color: #000;
  }
  .van-nav-bar__title {
    color: #000;
  }
}

.section {
  margin-top: 1rem;
  padding: 1rem;
  background: #fff;
  height: 100vh;
  .title {
    color: #000;
    margin: 1rem 0;
  }
  .van-field {
    background: #f3f4f5;
    border-radius: 1rem;
    margin-top: 1rem;
  }
}
.van-button {
  background: #fc7542;
  width: 22rem;
  margin-left: 1.2rem;
  position: fixed;
  bottom: 2rem;
  border-radius: 2rem;
}
</style>