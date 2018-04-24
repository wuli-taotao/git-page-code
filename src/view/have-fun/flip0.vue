<!-- <template lang="html">
  <div class="flip">
    <h1>flip</h1>
    <br>
    <div class="book">
      <div  v-for="(item, index) in pagesData">
        <transition :name="forward?'flip-left-forward':'flip-left'">
          <div class="page leftpage" v-if="item.show">
            <h2>left {{index}}</h2>
          </div>
        </transition>
        <transition :name="forward?'flip-right-forward':'flip-right'">
          <div class="page rightpage" v-if="item.show">
            <h2>right {{index}}</h2>
          </div>
        </transition>
      </div>

    </div>
    <button type="button" name="button" @click="test1">>>>></button>
    <button type="button" name="button" @click="test2"><<<<</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show: true,
      pagesData: [
        {
          show: true,
        },
        {
          show: false,
        },
        {
          show: false,
        },
      ],
      forward: false
    }
  },
  methods:{
    test1(){
      this.forward = false
      for (var i = 0; i < this.pagesData.length-1; i++) {
        if (this.pagesData[i].show) {
          this.pagesData[i].show = false
          this.pagesData[i+1].show = true
          console.log(this.pagesData)
          break
        }
      }
    },
    test2(){
      this.forward = true
      for (var i = this.pagesData.length-1; i > 0; i--) {
        if (this.pagesData[i].show) {
          this.pagesData[i].show = false
          this.pagesData[i-1].show = true
          console.log(this.pagesData)
          break
        }
      }
    }
  }
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






  .flip-right-leave-active, .flip-right-enter-active, .flip-left-leave-active, .flip-left-enter-active{
    transition: all 2s;
  }

  .flip-right-leave-to{
    z-index: 2;
    transform: perspective(600px)  rotateY(-180deg);
  }

  .flip-left-enter{
    z-index: 2;
    transform: perspective(600px)  rotateY(180deg);
  }

  .flip-right--leave-active, .flip-right--enter-active, .flip-left-forward-leave-active, .flip-left-forward-enter-active{
    transition: all 2s;
  }

  .flip-left-forward-leave-to{
    z-index: 3;
    transform: perspective(600px)  rotateY(180deg);
  }

  .flip-right-forward-enter{
    z-index: 2;
    transform: perspective(600px)  rotateY(-180deg);
  }
</style> -->
