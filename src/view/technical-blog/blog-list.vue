<template lang="html">
  <div class="blog-list">
    <h1>technical-blog</h1>
    <div class="blog-brief-container">
      <div v-for="(item, index) in blogListArr">
        <router-link :to="{ name: 'blogPage', params: {index: index} }">
          <div class="blog-brief">
            blog{{index}}
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      blogListArr: [0,1,2,3,4,5]
    }
  }
}
</script>

<style lang="css">
.blog-brief-container{
  width: 60%;
  margin: 0 auto;
}
.blog-brief{
  margin-top: 40px;
  width: 100%;
  height: 200px;
  background: #3456;
  border-radius: 10px;
  transition: .3s;
}
.blog-brief:hover{
  box-shadow: 2px 2px 20px 0px #3338;
}
</style>
