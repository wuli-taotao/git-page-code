<template lang="html">
  <div class="calendar">
    <h1>calendar</h1>
    <br>
    <h2>{{date.years}}</h2>
  </div>
</template>

<script>
import timeUtils from "@/utils/timeUtils.js"
export default {
  props: {
    // newDate: Date
  },
  data() {
    return {
      date: {
        years: (() => {
          return (new Date()).getFullYear()
        })()
      }
    }
  },
  mounted() {
    // console.log(typeof timeUtils.dateToString);
  }
}
</script>

<style lang="css">
</style>
