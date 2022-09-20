<template>
  <div class="home">
    <header>
      <van-nav-bar
        @click-left="onClickLeft"
        :border="false"
        title="详情"
        left-arrow
      />
      <div class="bj"></div>
    </header>
    <main>
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
export default {
  data() {
    return {
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
      background: #237ff8;
    }
  }
}
.jindu {
  width: 335px;
  height: 205px;
  background: #f3f4f5;
  border-radius: 10px;
  margin: 0 auto;
  padding: 15px;

  .hui {
    color: #999999;
    font-size: 14px;
  }
  .van-progress {
    margin: 10px 0;
  }
  .num {
    font-size: 20pt;
    color: #878888;
    margin-top: 15px;
    margin-bottom: 15px;
  }
}
.tou {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #cccccc;
  padding-bottom: 12px;
  margin-bottom: 10px;
}
.xiang {
  width: 335px;
  background: #f3f4f5;
  border-radius: 10px;
  margin: 15px auto 0;
  line-height: 30px;
  padding: 15px;
  .wen {
    color: #666666;
  }
}
.ti {
  width: 335px;
  background: #f3f4f5;
  border-radius: 10px;
  margin: 15px auto 20px;
  padding: 15px;
  .van-button {
    width: 80px;
    padding: 3px 15px;
    border-radius: 5px;
    position: relative;
    top: -5px;
  }
  .van-radio-group {
    .van-radio {
      margin: 20px 0 5px;
    }
  }
}
</style>