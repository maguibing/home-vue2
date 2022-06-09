<template>
  <div>
    <div id="container"></div>
    <div class="aaaa  animate__animated  animate__slideInLeft"></div>
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
      const wow = new this.$wow({
        boxClass: 'wow',
        animateClass: 'animate',
        offset: 0,
        mobile: true,
        live: true
      })
      wow.init()
    })
  }
}
</script>

<style scoped>
.aaaa {
  margin: 200px auto;
  width: 100px;
  background-color: red;
  height: 100px;
}
</style>