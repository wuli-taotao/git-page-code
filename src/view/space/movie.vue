<template lang="html">
  <div class="movie">
    <div class="film">
      <div class="side left">
        <div class="hole" v-for="item in (new Array(27))"></div>
      </div>

      <div class="pictrues">
          <div v-for = "item in movieData" >
            <div class="pictrue" @click = "checkBrief(item)">
              <img :src="'../../../static/img/movie/' + item + '.png'" alt="">
            </div>
          </div>
      </div>

      <div class="side right">
        <div class="hole" v-for="item in (new Array(27))"></div>
      </div>
    </div>

    <div class="movie-brief">
      <movieBrief :movieName = "movieName"></movieBrief>
    </div>
  </div>
</template>

<script>
import movieBrief from './movie-brief'
export default {
  components: {
    movieBrief
  },
  data() {
    return {
      movieName: '',
      movieData: [
        'ReadyPlayerOne',
        'MonsterHunt2',
        'OceansEleven',
        'Zootopia',
        'GuardiansOfTheGalaxy',
        'IronMan3',
        'Thor3'
      ]
    }
  },
  methods: {
    checkBrief(movieName){
      this.movieName = movieName
    }
  }
}
</script>

<style lang="css">
.movie{
  padding-top: 50px;
}

.film{
  position: fixed;
  left: 20px;
  top: 0;
  width: 300px;
  height: 100vh;
  background: #3338;
}
.side{
  float: left;
  width: 30px;
  height: 100%;
  background: #3338;
}
.hole{
  margin: 15px 7px;
  width: 16px;
  height: 16px;
  background: #fff;
}

.pictrues{
  float: left;
  height: 100%;
  width: 240px;
  overflow: scroll;
}
.pictrue{
  margin: 16px 8px;
  width: 224px;
  height: 126px;
  background: #fff;
  overflow: hidden;
}
.pictrue img {
  width: 100%;
}

.movie-brief{
  margin-left: 400px;
  width: 900px;
  height: 700px;
  background: #3693;
}
</style>
