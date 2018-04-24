<template lang="html">
  <transition name="introduction">
  <div class="introduction" @mousewheel="wheel">
    <transition name="slide">
      <div class="page page1" v-if = "showpage1">
        page1
      </div>
    </transition>
    <transition name="slide">
      <div class="page page2" v-if = "showpage2">
        page2
      </div>
    </transition>
    <transition name="slide">
      <div class="page page3" v-if = "showpage3">
        page3
      </div>
    </transition>
    <transition name="slide">
      <div class="page page4" v-if = "showpage4">
        page4
      </div>
    </transition>

    <div class="sign">
      <div class="sign-button" v-for = "(item, index) in signArr" :style="item?'background:#fff':''" @click="jump(index)">

      </div>
    </div>

    <div class="slide-button-container">
      <button class="slide-button"  @click = "slide">
        slide
      </button>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  data(){
    return{
      canSlide: true,
      signArr: [true, false, false, false],
      showpage1: true,
      showpage2: false,
      showpage3: false,
      showpage4: false
    }
  },
  methods: {
    slide(){
      let temp = this.showpage4
      this.showpage4 = this.showpage3
      this.showpage3 = this.showpage2
      this.showpage2 = this.showpage1
      this.showpage1 = temp

      this.signArr[0] = this.showpage1
      this.signArr[1] = this.showpage2
      this.signArr[2] = this.showpage3
      this.signArr[3] = this.showpage4
    },
    jump(index){
      this.signArr = [false, false, false, false]
      this.signArr[index] = true

      this.showpage1 = this.signArr[0]
      this.showpage2 = this.signArr[1]
      this.showpage3 = this.signArr[2]
      this.showpage4 = this.signArr[3]
    },
    wheel(event){
      // console.log(event.wheelDelta);
      if (event.wheelDelta < 0) {
        if (this.canSlide) {
          this.slide()
          this.canSlide = false
          let sto = setTimeout(() => {
            this.canSlide = true
          }, 1000)
        }
      }
    }
  },
  mounted(){
    // let int = setInterval(this.slide, 5000)
    // window.onscroll = function(){
    //   console.log('///');
    // }
  }
}
</script>

<style lang="css">
.introduction{
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
.introduction .page{
  position: absolute;
  width: 100%;
  height: 100vh;
}
.introduction .page1{
  background: #3cccc4;
}
.introduction .page2{
  background: #f9da78;
}
.introduction .page3{
  background: #f983ab;
}
.introduction .page4{
  background: #bbb5f2;
}
.slide-button-container{
  position: fixed;
  bottom: 20px;
  width: 100%;
  height: 40px;
  /* background: #fff3; */
}
.slide-button{
  width: 50px;
  margin: 0 auto;
  background: transparent;
  border: 0;
  outline:none;
}
.sign{
  position: absolute;
  top: 40vh;
  left: 20px;
  width: 10px;
  height: 10vh;
  /* background: #fff6; */
}
.sign-button{
  margin-bottom: 10px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: #fff8;
}

.slide-enter-active, .slide-leave-active{
  transition: all .8s;
}
.slide-enter{
  transform: translateY(100%);
}
.slide-leave-to{
  transform: translateY(-100%);
}

.introduction-enter-active, .introduction-leave-active{
  transform-origin: 0% 0%;
  transition: 1s;
}
.introduction-enter{
  transform: scaleY(0.35);
  /* opacity: 0; */
}
.introduction-leave-to{
  /* transform: translateY(-65%); */
  opacity: 0;
}
</style>
