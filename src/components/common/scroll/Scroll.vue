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
  props: {
    probeType: {
      type: Number,
      default: 0
    }
  },
  data(){
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType
    })

    // 监听滚动的位置
    this.scroll.on('scroll',(position) => {
      this.$emit('scroll',position)
    })
  },
  methods: {
    scrollTo(x, y, time=300){
      this.scroll.scrollTo(x, y, time)
    }
  }
}
</script>

<style scoped>

</style>
