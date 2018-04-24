<template lang="html">
  <div class="space-index">
    <h1>space-index</h1>
    <div class="cut-smoke-box">
      <router-link :to="{ name: 'cutSmoke', params: {} }">
        <div class="cut-smoke">
          <h3>cut-smoke</h3>
          <h3>{{spaceTime}} hours</h3>
        </div>
      </router-link>
    </div>

    <div class="movie-box">
      <router-link :to="{ name: 'movie', params: {} }">
        <div class="cut-smoke">
          <h3>movie</h3>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      spaceTime: 0,
    }
  },
  mounted(){
    this.spaceTime = (((new Date()).getTime() - 1522533600000)/3600000).toFixed(1)
  }
}
</script>

<style lang="css">
  .space-index{
    margin: 0;
    height: 100vh;
  }

  .cut-smoke-box{
    margin-left: 100px;
    margin-top: 50px;
    width: 200px;
  }
  .cut-smoke{

    border: 1px solid #8883;
    border-radius: 10px;
    transform: rotate(-15deg);
  }

  .movie-box{
    margin-left: 100px;
    margin-top: 50px;
    width: 200px;
  }
</style>
