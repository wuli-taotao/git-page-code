<template lang="html">
  <div class="buildings">
    <div class="" v-for = "item in buildingData">
      <div class="building">
        <div class="top" :style="'width:' + item.length + 'px;height:' + item.width + 'px; background:' + item.topColor + ';'"></div>
        <div class="left" :style="'width:' + item.length + 'px;height:' + item.height + 'px; background:linear-gradient(' + item.leftColor + ' 60%, transparent;'"></div>
        <div class="right" :style="'width:' + item.width + 'px;height:' + item.height + 'px; background:linear-gradient(' + item.rightColor + ' 60%, transparent;'"></div>
      </div>
    </div>

    <div class="box">
      <div class="back"></div>
      <div class="front"></div>
      <div class="top"></div>
      <div class="bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buildingData: [
        {
          length: 100,
          width: 200,
          hright: 300,
          topColor: '#fff6',
          leftColor: '#f3f6',
          right: '#3ff6'
        },
        {
          length: 200,
          width: 100,
          hright: 400,
          topColor: '#fff6',
          leftColor: '#f3f6',
          right: '#3ff6'
        },
        {
          length: 100,
          width: 200,
          hright: 300,
          topColor: '#fff6',
          leftColor: '#f3f6',
          right: '#3ff6'
        },
        {
          length: 100,
          width: 100,
          hright: 300,
          topColor: '#fff6',
          leftColor: '#f3f6',
          right: '#3ff6'
        },
      ]
    }
  }
}
</script>

<style lang="css">
.buildings{
  position: absolute;
  top: 150px;
  width: 100%;
  height: 600px;
  background: linear-gradient(#2a0190, #2a0190aa)
}
.building{
  float: left;
  margin-right: -100px;
}
.building .top {
  width: 100px;
  height: 200px;
  background: #fff6;
  transform-origin: right bottom;
  transform:  rotateX(70deg) rotateZ(45deg) ;
}
.building .left {
  float: left;
  width: 100px;
  height: 300px;
  background: linear-gradient(#f3f6 60%, #f3f0);
  transform-origin: right top;
  transform:  rotateX(20deg) rotateY(45deg);
}
.building .right {
  float: left;
  width: 200px;
  height: 320px;
  background: linear-gradient(#3ff6 60%, #3ff0);
  transform-origin: left top;
  transform: rotateX(20deg) rotateY(-45deg);
}

.box{
  position: absolute;
  right: 100px;
  top: 100px;
  width: 200px;
  height: 200px;
  background: #fff;
/* perspective: 500; */
transform-style: preserve-3d;
transform: rotateX(-20deg) rotateY(-20deg);
  /* animation:mymove 1s infinite alternate; */
}

.box .back {
  position: absolute;
  width: 100px;
  height: 100px;
  background: #3338;
  transform: translateZ(50px) rotateX(180deg);
  animation: spin 6s infinite;
  transform-style: preserve-3d;
}
.box .front {
  position: absolute;
  width: 100px;
  height: 100px;
  background: #3338;
  transform: translateZ(50px);
  animation: spin 6s infinite;
  transform-style: preserve-3d;
}
.box .top {
  position: absolute;
  width: 100px;
  height: 100px;
  background: #3338;
  transform: rotateX(90deg) translateZ(50px);
  animation: spin 6s infinite;
  transform-style: preserve-3d;
}
.box .bottom {
  position: absolute;
  width: 100px;
  height: 100px;
  background: #3338;
  transform: rotateX(-90deg) translateZ(50px);
  animation: spin 6s infinite;
  transform-style: preserve-3d;
}


@-webkit-keyframes spin
       {
           from
           {
               -webkit-transform: translateZ(-10em) rotateX(0) rotateY(0deg);
               transform: translateZ(-10em) rotateX(0) rotateY(0deg);
           }

           to
           {
               -webkit-transform: translateZ(-10em) rotateX(360deg) rotateY(360deg);
               transform: translateZ(-10em) rotateX(360deg) rotateY(360deg);
           }
       }


@keyframes mymove
{
from {left:0px;}
to {left:200px;}
}
</style>
