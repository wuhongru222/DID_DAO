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
            ><van-icon name="manager-o" color="white"
          /></van-col>
        </van-row>
      </van-col>

      <van-col span="11" class="main1">
        <main>
          <van-row class="rowa"> 
            <van-col span="12" class="imgs2">
              <van-image class="vanimg"
                width="100"
                height="100"
                src="https://img01.yzcdn.cn/vant/cat.jpeg"
              />
            </van-col>
            <van-col style="width:100%" span="4">
              <h2 class="h2">{{daojn}}</h2>
            </van-col>
            <van-col class="vancol5" span="4" style="width:100%">
             <p class="pp1">{{dao1}}</p>
            </van-col>
            <van-col span="4" class="vanhh">
              <van-button type="info"  round size="normal">创建提案</van-button>
            </van-col>
          </van-row>
          <Tanchu-vue :show="shouw"></Tanchu-vue>
        </main>
      </van-col>
      <van-col span="8" class="main2">
        <div class="newtian"></div>
      </van-col>
      <van-col span="2"></van-col>
    </van-row>
  </div>
</template>

<script>
import TanchuVue from "./components/tanchu.vue";
export default {
  components: { TanchuVue },
  name: "home",
  data() {
    return {
      shouw: false,
      daojn:'EOTC DAO',
      dao1:'围绕EOTC所有去中去化业务建立的团队 允许任何成员做出决定，参加治理'
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
 
}
.vancol2 {
  text-align: center;
}
</style>