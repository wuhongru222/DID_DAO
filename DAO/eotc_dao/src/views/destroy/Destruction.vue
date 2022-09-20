<template>
  <div class="dest">
    <header>
      <van-nav-bar :border="false" title="销毁查询" left-arrow />
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
export default {
  data() {
    return {
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
    font-size: 24px;
    font-weight: bold;
  }
  .van-icon {
    color: #000;
  }
}
.van-cell-group {
  margin-top: 15px;
  .van-cell:first-child {
    line-height: 25px;
    margin-bottom: 10px;
  }
  .van-cell {
    line-height: 8px;
  }
  .van-cell:last-child {
    color: #237ff8;
    margin-bottom: 10px;
  }
}
.van-popup {
  height: 100px;
  padding: 15px;
  margin-top: 15px;
}
.van-tag {
  padding: 10px 23px;
  margin: 10px 8px 0;
}
.btn {
  position: fixed;
  bottom: 20px;
  .van-button:first-child {
    width: 100px;
    margin-left: 10px;
    margin-right: 20px;
  }
  .van-button:last-child {
    width: 140px;
  }
}
</style>