<template>
  <div>
    <div id="container"></div>
    <div class="AAAcontainer wow animate__animated animate__slideInLeft" data-wow-duration="2s" data-wow-delay="1s"></div>

    <div class="container">
      <div class="round"></div>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 800px;
  height: 400px;
  background-color: #11a8cd;
  margin: 200px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container .round {
  width: 220px;
  height: 220px;
  background: transparent url("../assets/images/round.png") no-repeat center
    local;
}
</style>
<script>
import E from "wangeditor"
export default {
  data () {
    return {

    }
  },

  mounted () {
    this.$nextTick(() => {
      const editor = new E("#container")
      editor.config.height = 400
      editor.create()

      // wow.js
      const wow = new this.$wow({
        boxClass: 'wow',
        animateClass: 'animate',
        offset: 0,
        mobile: true,
        live: false
      })
      wow.init()
    })
  }
}
</script>