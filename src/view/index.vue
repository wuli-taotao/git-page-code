<template lang="html">
  <div class="index">
    <div class="nav-box">
      <div class="band">
        <h1>&ltTao/&gt</h1>
        <!-- <h2 style="text-align: left">function Tao(){<br>
          return ['html', 'css', 'javascript']<br>
        }</h2> -->
      </div>
      <div class="links">
        <div class="link" v-for = "item in linkArr">
          <router-link :to="{ name: item.link, params: {} }"><span style="color:#fff;text-decoration: underline;">{{item.name}}</span></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      linkArr: [
        {
          name: '技术博客',
          link: 'technicalBlog'
        },
        {
          name: '我的空间',
          link: 'space'
        },
        {
          name: '找点乐子',
          link: 'haveFun'
        },
        {
          name: '关于我',
          link: 'introduction'
        },
        {
          name: 'test',
          link: 'comTest'
        }
      ]
    }
  }
}
</script>

<style lang="css">
.nav-box{
  width: 100%;
  height: 35vh;
  /* background: #3cccc4; */
  /* background: #38bdae; */
  background: linear-gradient(45deg, #38bdae, #3cccc4, #39c3c5)
}
.band{
  height: 30vh;
  color: #fff;
}
.band h1{
  font-size: 120px;
  line-height: 30vh;
}
.links{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
}
.link{
  color: #fff;
  width: 100px;
  text-align: center;
}
</style>
