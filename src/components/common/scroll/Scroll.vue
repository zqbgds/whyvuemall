<template>
<!--  这里如果我们用查看元素的的方式去拿到这个wrapper容易和其他元素冲突，所以利用ref去拿-->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "Scroll",
  data(){
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true
    })
  }
}
</script>

<style scoped>

</style>
