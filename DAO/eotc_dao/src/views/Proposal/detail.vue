<template>
  <div class="meun">
    <header>
      <white :title="title"></white>
    </header>
    <main class="box">
      <div class="one_an">
        <div>将提案提交门槛降低至 5 万</div>
        <div class="piao">
          <span
            ><div class="ion"></div>
            进行中</span
          ><span>0xsd…8888提议</span>
        </div>
      </div>
      <div class="jindu">
        <div class="tou">
          投票进度
          <span class="hui">创建于2022年6月26日</span>
        </div>
        <div>共20人参与</div>
        <van-progress
          track-color="#fff"
          :percentage="20"
          color="#00B87A"
          :show-pivot="false"
          stroke-width="12"
        />
        <div class="num"><span style="color: #00b87a">20</span>/99</div>
        <div>该提案需要99人投票才能取得进展，作者可以随时终止</div>
      </div>
      <div class="xiang">
        <div class="tou">提案详情</div>
        <div class="wen">
          为了降低这些门槛，需要签订新的合同。我们选择使用与Dharma原始提案相同的智能合约代码，并带有这些新值。为此，我们部署了一个新合约，其中包含以下更改：GovernorAlpha
          proposalThreshold已从 修改为 ，即从 1% 修改为
          0.25%。10_000_000e182_500_000e18
          添加了一个公共功能，允许合同在执行后对合同主张所有权。__acceptAdmin()TimelocksetPendingAdmin
          timelock现在被声明为，而不是在合同构建期间通过分配给存储插槽，因为它们的值在部署后不可修改（并且使用将需要一个主要的Solidity版本凸起和对已经经过良好审核的代码进行相应的重构）。uniconstantimmutable
          我们认为，该提案是朝着UNI治理的正确方向迈出的保守一步，并且创造了一个更容易获得的治理生态系统。我们希望这是Fish.vote可以参与的众多改进中的第一个。
        </div>
      </div>
      <div class="ti">
        <div class="tou">
          对此提案
          <van-button type="default" size="small" v-if="radio == ''"
            >投票</van-button
          ><van-button type="info" size="small" v-else>投票</van-button>
        </div>
        <van-radio-group v-model="radio">
          <van-radio name="1">赞成</van-radio>
          <van-radio name="2">反对</van-radio>
        </van-radio-group>
      </div>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import white from "@/components/Nav/white.vue";
export default {
  components: { white },
  data() {
    return {
      title: "详情",
      radio: "",
    };
  },
  watch: {
    radio: function (val) {
      this.radio = val;
    },
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

.box {
  background: #fff;
  height: 100vh;
}
.one_an {
  margin: 1rem;
  padding: 1rem 0 0;
  line-height: 2rem;
  font-size: 1rem;
  .piao {
    display: flex;
    color: #9296a2;
    font-size: 1rem;
    justify-content: space-between;
    .ion {
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background: #237ff8;
    }
  }
}
.jindu {
  width: 20.5rem;
  height: 205px;
  background: #f3f4f5;
  border-radius: 0.5rem;
  margin: 0 auto;
  padding: 1rem;
  color: #000;
  .hui {
    color: #999999;
    font-size: 0.5rem;
  }
  .van-progress {
    margin: 1rem 0;
  }
  .num {
    font-size: 20pt;
    color: #878888;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
}
.tou {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #cccccc;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}
.xiang {
  color: #000;
  width: 20.5rem;
  background: #f3f4f5;
  border-radius: 0.5rem;
  margin: 1rem auto 0;
  line-height: 2rem;
  padding: 1rem;
  .wen {
    color: #666666;
  }
}
.ti {
  color: #000;
  width: 20.5rem;
  background: #f3f4f5;
  border-radius: 0.5rem;
  margin: 1rem auto 1rem;
  padding: 1rem;
  .van-button {
    width: 5rem;
    padding: 0.3rem 1.5rem;
    border-radius: 0.5rem;
    position: relative;
    top: -0.5rem;
  }
  .van-radio-group {
    .van-radio {
      margin: 1rem 0 0.1rem;
    }
  }
}
</style>