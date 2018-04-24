<template lang="html">
  <div class="">
    <h1>brief</h1>
    <h1>{{movieName}}</h1>
    <h1>{{briefData[movieName].index}}</h1>
    <starScore class="starScore" :score = "briefData[movieName].score"></starScore>
  </div>
</template>

<script>
import starScore from '@/components/star-score'
export default {
  components: {
    starScore
  },
  props: {
    movieName: {
      default: ''
    }
  },
  data() {
    return {
      briefData: {
        'ReadyPlayerOne': {
          index: 1,
          score: 5
        },
        'MonsterHunt2': {
          index: 2,
          score: 1
        },
        'OceansEleven': {
          index: 3,
          score: 3
        },
        'Zootopia': {
          index: 4,
          score: 3
        },
        'GuardiansOfTheGalaxy': {
          index: 5,
          score: 5
        },
        'IronMan3': {
          index: 6,
          score: 4
        },
        'Thor3': {
          index: 7,
          score: 5
        }
      }
    }
  }
}
</script>

<style lang="css">
.starScore{
  margin: 0 auto;
}
</style>
