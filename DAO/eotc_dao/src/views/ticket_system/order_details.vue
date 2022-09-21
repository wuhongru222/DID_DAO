<template>
  <div class="order">
    <header>
      <white :title="title"></white>
    </header>
    <main>
      <van-cell-group inset>
        <van-cell title="类型" title-style="color:#999;" value="功能建议" />
        <van-cell
          title="提交时间"
          title-style="color:#999;"
          value="2022-07-15 18:56:45"
        />
        <van-cell
          title="提交人"
          title-style="color:#999;"
          value="陈都(458956)"
        />
        <van-cell
          title="联系方式"
          title-style="color:#999;"
          value="13157864585"
        />
      </van-cell-group>
      <van-cell-group inset class="group">
        <van-cell title="问题描述" title-style="color:#999;" :border="false" />
        <van-cell title="想查看订单时异常退出" />
      </van-cell-group>
      <van-cell-group inset class="tu">
        <van-image width="60" height="60" src="./assets/image/leaf.jpg" />
        <van-image width="60" height="60" src="./assets/image/leaf.jpg" />
      </van-cell-group>
    </main>
    <footer>
      <van-button round type="info">更进处理</van-button>
    </footer>
  </div>
</template>

<script>
import white from "../../components/Nav/white.vue";
export default {
  components: { white },
  data() {
    return {
      title: "工单详情",
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
.order {
  position: relative;
  background: #f3f4f5;
  height: 100vh;
}

.van-cell-group {
  margin-top: 1rem;
  color: #999;
  padding: 0.8rem 0.2rem;
  .van-cell {
    font-size: 16px;
  }
  .van-cell__value {
    color: #333;
  }
}
.group {
  .van-cell {
    font-size: 16px;
    line-height: 0.8rem;
  }
}
.tu {
  .van-image {
    margin: 0 0.4rem;
  }
}
.van-button {
  width: 22rem;
  position: absolute;
  bottom: 1rem;
  right: 0;
  left: 0;
  margin: 0 auto;
  bottom: 20px;
}
</style>