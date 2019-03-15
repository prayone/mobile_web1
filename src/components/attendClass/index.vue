<template>
  <div class="attendClass">
    <div class="att_imgs">
      <img v-lazy="'/static/img/attendClass01.png'" alt="">
    </div>
    <div class="att_imgs">
      <img v-lazy="'/static/img/attendClass02.png'" alt="">
    </div>
    <div class="att_imgs">
      <img v-lazy="'/static/img/attendClass03.png'" alt="">
    </div>
    <div class="att_imgs">
      <img v-lazy ="'/static/img/attendClass04.png'" alt="">
    </div>
    <div class="att_imgs">
      <img v-lazy ="'/static/img/attendClass05.png'" alt="">
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
  .attendClass {
    .att_imgs {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
</style>

