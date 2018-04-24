<template lang="html">
  <div class="blog-page">
    <h1>blog-page</h1>
    <h1>{{$route.params.index}}</h1>
  </div>
</template>

<script>
export default {
  mounted(){
    console.log(this.$route.params.index);
  }
}
</script>

<style lang="css">
</style>
