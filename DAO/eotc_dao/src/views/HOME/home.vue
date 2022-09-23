<template>
  <div>
    <van-row class="home">
      <van-col span="3" class="header">
        <van-row>
          <van-col @click="chufa" span="2"
            ><van-icon :name="shouw ? 'cross' : 'bars'" color="white" />
          </van-col>
          <van-col class="vancol2" span="20"
            ><img src="./assets/image/eotc.png" alt=""
          /></van-col>
          <van-col span="2"
            ><van-icon @click="personage" name="manager-o" color="white"
          /></van-col>
        </van-row>
      </van-col>

      <van-col span="11" class="main1">
        <main>
          <van-row class="rowa">
            <van-col span="12" class="imgs2">
              <van-image
                class="vanimg"
                width="100"
                height="100"
                src="https://img01.yzcdn.cn/vant/cat.jpeg"
              />
            </van-col>
            <van-col style="width: 100%" span="4">
              <h2 class="h2">{{ daojn }}</h2>
            </van-col>
            <van-col class="vancol5" span="4" style="width: 100%">
              <p class="pp1">{{ dao1 }}</p>
            </van-col>
            <van-col span="4" class="vanhh">
              <van-button type="info" round size="normal">创建提案</van-button>
            </van-col>
          </van-row>
          <Tanchu-vue :show="shouw"></Tanchu-vue>
        </main>
      </van-col>
      <van-col span="8" class="main2">
        <div class="newtian">
          <van-row>
            <van-col span="19"><span>最新提案</span></van-col>
            <van-col @click="newgengduo" span="5"
              ><span @click="me">查看更多 ></span></van-col
            >
          </van-row>
        </div>
        <ChuangKou></ChuangKou>
        <div class="dibu2">
          <p class="pp1">{{ dibu2 }}</p>
        </div>
      </van-col>
      <van-col span="2" class="foot">
        <van-row style="width: 100%; height: 100%">
          <van-col span="15" class="span22">
            <!-- <van-icon name="chat-o" color="#ee0a24" /> -->
            <span>&copy;</span>
            <span style="font-size: 0.14em; margin-left: 0.2rem"
              >2022年EOTC版权所有。</span
            >
          </van-col>
          <van-col span="9" class="dropdown">
            <van-dropdown-menu direction="up">
              <van-dropdown-item v-model="value1" :options="option1" />
            </van-dropdown-menu>
          </van-col>
        </van-row>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import TanchuVue from "./components/tanchu.vue";
import ChuangKou from "./components/chuangkou.vue";
export default {
  components: { TanchuVue, ChuangKou },
  name: "home",
  data() {
    return {
      shouw: false,
      daojn: "EOTC DAO",
      dao1: "围绕EOTC所有去中去化业务建立的团队 允许任何成员做出决定，参加治理",
      dibu2: "提交提案最低门槛为持有10000EOTC",
      value1: 0,
      option1: [
        { text: "中文", value: 0 },
        { text: "英文", value: 1 },
        { text: "日语", value: 2 },
      ],
    };
  },
  // mounted(){
  //   console.log(1111111)
  //   this.shouw=false
  // },
  methods: {
    chufa() {
      this.shouw = !this.shouw;
    },
    newgengduo() {
      console.log("查看更多");
    },
    personage() {
      this.$router.push("/personage");
    },
    me() {
      this.$router.push("/Bill_list");
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  background: #070a0e;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}
.header {
  width: 100%;
  padding: 1rem 1rem 0 1rem;
}
.vancol2 {
  text-align: center;
}
</style>