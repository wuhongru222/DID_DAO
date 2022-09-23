<template>
  <div class="nav">
    <div><van-icon :name="shouw ? 'cross' : 'bars'" color="#fff" /></div>
    <div><img src="../../assets/eotc@2x.png" width="28px" height="28px" /></div>
    <div><van-icon name="manager-o" color="#fff" /></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shouw: false,
    };
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.nav {
  background: #141e27;
  display: flex;
  justify-content: space-around;
  align-content: center;
  line-height: 30px;
  div {
    padding: 10px 10px 0px;
  }
}
</style>