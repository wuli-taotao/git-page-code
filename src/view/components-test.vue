<template lang="html">
  <div class="components-test">
    <calendar></calendar>
  </div>
</template>

<script>
import calendar from "@/components/building"
export default {
  components: {
    calendar
  },
  data() {
    return {
      // newDate: new Date()
    }
  },

}
</script>

<style lang="css">
.components-test{
  width: 100%;
  height: 100vh;
  /* background: #3456; */
}
</style>
