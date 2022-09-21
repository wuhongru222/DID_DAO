<template>
  <div class="vanpopup1">
    <van-popup
      v-model="temp_app"
      :overlay="true"
      position="left"
      :style="{ height: '100%', width: '90%' }"
    >
      <ul class="uls1">
        <li v-for="item in etot" :key="item.index" @click="DaoClick">
          {{ item.vaule }} <van-icon name="guide-o" />
        </li>
      </ul>
    </van-popup>
  </div>
</template>

<script>
import { loadweb3 } from "../../../utils/web3";
export default {
  props: ["show"],
  data() {
    return {
      temp_app: false,
      etot: [
        { vaule: "国际化" },
        { vaule: "标准化" },
        { vaule: "国际化2" },
        { vaule: "国际化3" },
        { vaule: "国际化4" },
        { vaule: "国际化5" },
        { vaule: "国际化6" },
        { vaule: "国际化7" },
        { vaule: "DAO" },
        { vaule: "国际9" },
        { vaule: "国际化0" },
      ],
    };
  },
  watch: {
    show: {
      // this.$emit('temp_app', val);
      handler: function (val) {
        this.temp_app = val;
      },
      immediate: true,
      deep: true,
    },
  },
  mounted() {
    loadweb3()
  },
  methods: {
    DaoClick(){

    }
    // ww1(){
    //     this.shows=this.show
    // }
  },
};
</script>

<style>
</style>