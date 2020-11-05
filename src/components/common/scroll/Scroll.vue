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
    },
    pullUpLoad: {
      type: Boolean,
      default: false
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
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })

    // 监听滚动的位置
    if (this.probeType == 2 || this.probeType == 3){
      // 多一层判断更为严谨
      this.scroll.on('scroll',(position) => {
        this.$emit('scroll',position)
      })
    }


    // 监听scroll滚动到底部
    if (this.pullUpLoad){
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    }
  },
  methods: {
    scrollTo(x, y, time=300){
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    refresh(){
      this.scroll && this.scroll.refresh()
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    }
  }
}
</script>

<style scoped>

</style>
