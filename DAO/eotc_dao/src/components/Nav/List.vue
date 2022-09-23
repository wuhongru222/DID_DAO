<template>
  <div class="content">
    <div class="audit">
      <van-cell
        title="我的提案"
        :border="false"
        is-link
        @click="auditing('Bill_list')"
      >
        <template #icon>
          <i class="iconfont icon-xinshouyindao icon_left"></i>
        </template>
      </van-cell>
      <van-cell
        title="工单系统"
        :border="false"
        is-link
        @click="auditing('pending')"
      >
        <template #icon>
          <i class="iconfont icon-changjianwenti icon_left"></i>
        </template>
      </van-cell>
      <van-cell
        title="销毁查询"
        :border="false"
        is-link
        @click="auditing('Destruction')"
      >
        <template #icon>
          <i class="iconfont icon-lianxiwomen icon_left"></i>
        </template>
      </van-cell>
      <van-cell title="风险解除" :border="false" is-link @click="auditing()">
        <template #icon>
          <i class="iconfont icon-lianxiwomen icon_left"></i>
        </template>
      </van-cell>
      <van-cell title="仲裁" :border="false" is-link @click="auditing()">
        <template #icon>
          <i class="iconfont icon-lianxiwomen icon_left"></i>
        </template>
      </van-cell>
      <van-cell title="审核" :border="false" is-link @click="auditing()">
        <template #icon>
          <i class="iconfont icon-lianxiwomen icon_left"></i>
        </template>
      </van-cell>
      <van-cell title="反馈结果" :border="false" is-link @click="auditing()">
        <template #icon>
          <i class="iconfont icon-fankuijianyi icon_left"></i>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    auditing(name) {
      this.$router.push({ name: name });
    },
  },
};
</script>

<style lang="scss" scoped>
.audit {
  .van-cell {
    background: #000;
    color: #fff;
    line-height: 2rem;
  }
}
</style>
