<template>
    <div class="tab-control">
      <div v-for="(item,index) in titles"
           class="tab-control-item" @click="itemClick(index)"
           :class="{active:index === currentIndex}">
        <span>{{item}}</span>
      </div>
    </div>
</template>

<script>
    export default {
      name: "TabControl",
      props: {
        titles: {
          type: Array,
          default(){
            return []
          }
        }
      },
      data(){
        return {
          currentIndex:0,
          isActive:false
        }
      },
      methods:{
        itemClick(index){
          this.currentIndex = index
        }
      }
    }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    background-color: #fff;
  }
  .tab-control-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
  }
  .active{
    color: var(--color-high-text);

  }
  .active span{
    padding: 5px;
    border-bottom: 3px solid var(--color-high-text);
  }
</style>
