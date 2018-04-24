<template lang="html">
  <div class="flip">
    <h1>asfd</h1>
    <br>
    <div class="book">
      <div class="page leftpage">
        
      </div>
      <div class="page rightpage">
        
      </div>
    </div>
    <button type="button" name="button" @click="test1">》》》</button>
    <button type="button" name="button" @click="test2">《《《</button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css">
.book{
  position: absolute;
  margin: auto;
  width: 400px;
  height: 300px;
  background: #f1f3e5;
}

.book .page{
  position: absolute;
  width: 200px;
  height: 300px;
  background: #e1e3a5;
  backface-visibility:hidden;

  box-sizing: border-box;
  border: 1px solid #333;
}
.leftpage{
  margin-left: 0;
  transform-origin: 100% 100%;
}
.rightpage{
  margin-left: 200px;
  transform-origin: 0% 100%;
}
</style>
