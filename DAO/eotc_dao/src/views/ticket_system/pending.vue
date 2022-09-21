<template>
  <div class="home">
    <header>
      <white :title="title"></white>
    </header>
    <main>
      <van-tabs v-model="activeName">
        <!-- 待处理 -->
        <van-tab title="待处理" name="a">
          <div class="tag">
            <van-tag round plain type="primary">全部</van-tag>
            <van-tag round type="primary" color="#fff" text-color="#000"
              >功能建议</van-tag
            >
            <van-tag round type="primary" color="#fff" text-color="#000"
              >BUG反馈</van-tag
            >
          </div>
          <van-cell-group inset>
            <van-cell title="BUG反馈" value="2022-07-15 18:56:45" />
            <van-cell title="提交人:陈都(458956)" :border="false" />
            <van-cell
              title="想查看订单时异常退出想查看订单时异常…"
              :border="false"
            />
            <van-button
              class="dai"
              round
              size="small"
              type="info"
              @click="chuli()"
              >去处理</van-button
            >
          </van-cell-group>
          <van-cell-group inset>
            <van-cell title="功能建议" value="2022-07-15 18:56:45" />
            <van-cell title="提交人:陈都(458956)" :border="false" />
            <van-cell
              title="想查看订单时异常退出想查看订单时异常…"
              :border="false"
            />
            <van-button
              class="dai"
              round
              size="small"
              type="info"
              @click="chuli()"
              >去处理</van-button
            >
          </van-cell-group>
        </van-tab>
        <!-- 处理中 -->
        <van-tab title="处理中" name="b">
          <van-cell-group class="chu" inset>
            <van-cell title="BUG反馈" value="2022-07-15 18:56:45" />
            <van-cell title="提交人:陈都(458956)" :border="false" />
            <van-cell
              title="想查看订单时异常退出想查看订单时异常…"
              :border="false"
            />
            <div class="btn">
              <van-button round size="small" color="#FDE9E9" class="red"
                >取消处理</van-button
              >
              <van-button round size="small" color="#E8F2FF"
                >更进处理中</van-button
              >
            </div>
          </van-cell-group>
          <van-cell-group class="chu" inset>
            <van-cell title="功能建议" value="2022-07-15 18:56:45" />
            <van-cell title="提交人:陈都(458956)" :border="false" />
            <van-cell
              title="想查看订单时异常退出想查看订单时异常…"
              :border="false"
            />
            <div class="btn">
              <van-button round size="small" color="#FDE9E9" class="red"
                >取消处理</van-button
              >
              <van-button round size="small" color="#E8F2FF"
                >更进处理中</van-button
              >
            </div>
          </van-cell-group>
        </van-tab>
        <!-- 已处理 -->
        <van-tab title="已处理" name="c">
          <van-cell-group class="finish" inset>
            <van-cell title="BUG反馈" value="2022-07-15 18:56:45" />
            <van-cell title="提交人:陈都(458956)" :border="false" />
            <van-cell
              title="想查看订单时异常退出想查看订单时异常…"
              :border="false"
            />
            <van-cell class="yi" title="已完成处理" />
          </van-cell-group>
        </van-tab>
      </van-tabs>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import white from "../../components/Nav/white.vue";
export default {
  components: { white },
  data() {
    return {
      title: "工单系统",
      activeName: "a",
    };
  },
  methods: {
    chuli() {
      this.$router.push("/order_details");
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  background: #f3f4f5;
  height: 100vh;
}

.van-tabs {
  :deep .van-tabs__nav {
    .van-tabs__line {
      background-color: #237df4;
    }
    .van-tab__text {
      color: #000;
      font-weight: bold;
    }
  }
}
.tag {
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
  .van-tag {
    display: inline-block;
    padding: 0.4rem 1.5rem;
  }
}
.van-cell-group {
  margin-top: 1rem;
  .van-cell:first-child {
    line-height: 1.4rem;
    margin-bottom: 0.5rem;
  }
  .van-cell {
    line-height: 0.7rem;
  }
  .dai {
    float: right;
    margin: 0.5rem 0.7rem 0.9rem 0;
    padding: 0 1.4rem;
  }
}
.chu {
  .btn {
    margin: 1rem 0 1rem;
    display: flex;
    justify-content: space-around;
    .van-button {
      font-size: 14px;
      padding: 0.2rem 2.3rem;
    }
  }
  .red {
    .van-button__text {
      color: #e52a2a;
    }
  }
  .van-button__text {
    color: #237ff8;
  }
}
.finish {
  .yi {
    .van-cell__title {
      color: #00b87a;
      font-weight: bold;
    }
  }
}
</style>