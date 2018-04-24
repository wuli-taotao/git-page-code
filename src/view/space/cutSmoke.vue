<template lang="html">
  <div class="">
    <!-- <h1>cut somke</h1> -->
    <h1>自 {{startTime}} 到 现在</h1>
    <h1>我已经摆脱香烟 {{spaceHours}} 小时</h1>
    <h1>也就是 {{spaceDays}} 天</h1>
  </div>
</template>

<script>
import timeUtils from "@/utils/timeUtils"
export default {
  data(){
    return{
      startTime: 0,
      spaceHours: 0,
      spaceDays: 0
    }
  },
  mounted(){
    this.startTime = timeUtils.dateToString(new Date(1522533600000)) + ' ' + timeUtils.timeToString(new Date(1522533600000))
    this.spaceHours = (((new Date()).getTime() - 1522533600000)/3600000).toFixed(1)
    this.spaceDays = (((new Date()).getTime() - 1522533600000)/(3600000*24)).toFixed(1)
  }
}
</script>

<style lang="css">
  .b1{
    width: 300px;
    height: 250px;
    background: #345;
    padding: 25px 0;
    border-radius: 150px;
  }
  .b2{
    margin: 0 auto;
    width: 250px;
    height: 200px;
    background: #dec;
    padding: 25px 0;
    border-radius: 150px;
  }
  .b3{
    margin: 0 auto;
    width: 200px;
    height: 200px;
    background: #678;
    border-radius: 150px;
  }
</style>
