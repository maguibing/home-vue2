<template>
  <div>
    <div id="container"></div>
    <div class="AAAcontainer wow animate__animated animate__slideInLeft" data-wow-duration="2s" data-wow-delay="1s"></div>
  </div>
</template>


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

<style scoped>
.AAAcontainer {
  margin: 200px auto;
  width: 100px;
  background-color: red;
  height: 100px;
}
</style>