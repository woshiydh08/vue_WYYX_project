<template>
  <div class="main">
    <iframe src="https://m.you.163.com/topic/static/look/index" frameborder="0" allowtransparency="true" name="mframe2"></iframe>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "Tab4",
    computed:{
      ...mapState(['tab4']),
    }
  }
</script>

<style scoped lang="stylus">
  .main
    padding: 1.72rem 0 .98rem 0;
    height 20rem
    width 100%
    iframe
      display: block;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      overflow-x: hidden;

</style>
