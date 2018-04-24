<template lang="html">
  <div class="have-fun">
    <!-- <h1>have-fun</h1> -->
    <div class="button-out" @click = "buttonOn = !buttonOn">
      <div :class="['button-shadow', buttonOn?'':'button-shadow-hover']">
        <div class="button">
            <img src="../../../static/img/switch.png" :style="buttonOn?'filter: drop-shadow(1px 1px 1px #3336) grayscale(100%)':''">
        </div>
      </div>
    </div>

    <br>
    <router-link :to="{ name: 'flip', params: {} }">flip</router-link>

    <div class="rotate">
      flip-3d
    </div>

    <br>
    <div class="huan">

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      buttonOn: false
    }
  }
}
</script>

<style lang="css">
  .have-fun{
    padding-top: 100px;
  }
  .button-out{
    transform: scale(0.5, 0.5);
    width: 160px;
    height: 160px;
    margin: 0 auto;

    background: linear-gradient(#cecece, #ebebeb);
    border-radius: 80px;
    border: 1px solid #cecece;
  }
  .button-shadow{
    width: 130px;
    height: 110px;
    margin: 15px auto;

    background: linear-gradient(#f3edf1, #b3ad9e);
    border-radius: 65px;

    box-shadow: 0 8px 10px 0 #3336;
    transition: .4s;
    padding-top: 20px;
  }
  .button-shadow-hover{
    box-shadow: 0 3px 8px 0 #3338;
  }
  .button{
    margin: 0px auto;
    width: 90px;
    height: 90px;
    background: linear-gradient(#ccc7bc, #d2cbc3);
    border-radius: 50px;

  }
  .button img{
    width: 50px;
    transform: translateY(16px);
    /* filter: drop-shadow(10px 10px 13px 0 #333); */
    filter: drop-shadow(1px 1px 1px #3336);
    transition: .4s;
  }

  .rotate{
    color: #fff;
    font-size: 40px;
    line-height: 100px;
    margin-left: 300px;
    width: 300px;
    height: 100px;
    background: #348;

    transition: .8s;
  }
  .rotate:hover{
    transform: perspective(300px) rotateX(180deg) rotateY(180deg) rotateZ(90deg);
  }

  .huan{
    margin: 0 auto;
    width: 200px;
    height: 200px;
    background: #38c;
    border-radius: 110px;
    border: 5px dashed #000;
    transition: 3s;
  }
  .huan:hover{
    background: #c83;
    border: 5px dashed #000;
    transform: rotate(360deg);
  }
</style>
