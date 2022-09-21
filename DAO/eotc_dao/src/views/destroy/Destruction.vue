<template>
  <div class="dest">
    <header>
      <white :title="title"></white>
    </header>
    <main>
      <van-search
        v-model="value"
        show-action
        shape="round"
        placeholder="输入关键词查询"
      >
        <template #action>
          <div @click="showPopup">筛选</div>
        </template>
      </van-search>
      <van-cell-group inset>
        <van-cell title="游戏消耗" value="2022年7月27日" />
        <van-cell title="49027EOTC" :border="false" />
        <van-cell title="销毁查询地址:" :border="false" />
        <van-cell title="T9yD14Nj9j7xAB4dbGeiX9h8unkKLxmGkn" :border="false" />
      </van-cell-group>
      <van-cell-group inset>
        <van-cell title="游戏消耗" value="2022年7月27日" />
        <van-cell title="49027EOTC" :border="false" />
        <van-cell title="销毁查询地址:" :border="false" />
        <van-cell title="T9yD14Nj9j7xAB4dbGeiX9h8unkKLxmGkn" :border="false" />
      </van-cell-group>
      <van-cell-group inset>
        <van-cell title="游戏消耗" value="2022年7月27日" />
        <van-cell title="49027EOTC" :border="false" />
        <van-cell title="销毁查询地址:" :border="false" />
        <van-cell title="T9yD14Nj9j7xAB4dbGeiX9h8unkKLxmGkn" :border="false" />
      </van-cell-group>
      <van-popup
        v-model="show"
        position="right"
        :style="{ height: '730px', width: '70%' }"
      >
        <div>筛选时间</div>
        <div>
          <van-tag round type="primary" color="#eee" text-color="#666666"
            >本周</van-tag
          >
          <van-tag round type="primary" color="#eee" text-color="#666666"
            >本月</van-tag
          >
          <van-tag round type="primary" color="#eee" text-color="#666666"
            >自定义</van-tag
          >
        </div>
        <div class="btn">
          <van-button round type="default">重置</van-button>
          <van-button round type="info">确定</van-button>
        </div>
      </van-popup>
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
      title: "销毁查询",
      value: "",
      show: false,
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.dest {
  background: #f3f4f5;
  height: 100vh;
}
.van-nav-bar {
  .van-nav-bar__title {
    color: #000;
  }
  .van-icon {
    color: #000;
  }
}
.van-cell-group {
  margin-top: 1rem;
  .van-cell:first-child {
    line-height: 1.5rem;
    margin-bottom: 0.3rem;
  }
  .van-cell {
    line-height: 0.5rem;
  }
  .van-cell:last-child {
    color: #237ff8;
    margin-bottom: 0.5rem;
  }
}
.van-popup {
  height: 20rem;
  padding: 1rem;
  margin-top: 2rem;
}
.van-tag {
  padding: 0.5rem 1.3rem;
  margin: 1rem 0.6rem 0;
}
.btn {
  position: fixed;
  bottom: 1rem;
  .van-button:first-child {
    width: 6rem;
    margin-left: 1rem;
    margin-right: 1.2rem;
  }
  .van-button:last-child {
    width: 8.5rem;
  }
}
</style>