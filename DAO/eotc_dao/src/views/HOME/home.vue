<template>
  <div class="home">
    <header>
    <van-row class="header">
  <van-col span="8"><van-icon name="bars" color="white" /></van-col>
  <van-col span="8"><img src="./assets/image/eotc.png" alt=""></van-col>
  <van-col span="8" ><van-icon name="manager-o"  color="white"/></van-col>
</van-row>
    </header>
    <main></main>
    <footer></footer>
  </div>
</template>

<script>
export default {
name:'home',
  data(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped>
  .home{
    background: #070A0E;
    height: 100vh;
    width: 100%;
  }
  .header{
    display: flex;

  }
</style>