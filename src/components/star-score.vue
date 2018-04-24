<template lang="html">
  <div class="star-score">
    <h1>star-score</h1>
    <img src="../../static/img/movie/source/star.png"
         v-for="(item, index) in (new Array(5))"
         :style="(index<score)?'':'filter: grayscale(100%)'"/>
  </div>
</template>

<script>
export default {
  props: {
    score: {
      default: 3
    }
  }
}
</script>

<style lang="css">
  .star-score{
    width: 350px;
    height: 100px;
    
  }
  .star-score img{
    transition: .5s;
    width: 60px;
  }
</style>
