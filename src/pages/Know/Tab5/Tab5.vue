<template>
  <div class="main">
    <div class="item2" v-for="tab in tab5">
      <div class="title">{{tab.subTitle}}</div>
      <div class="pic">
        <img :src="tab.picUrl" alt="" width="100%" height="100%">
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "Tab5",
    computed:{
      ...mapState(['tab5']),
    }
  }
</script>

<style scoped lang="stylus">
  .main
    height 100%
    padding: 1.72rem 0 .98rem 0;
    .item2
      width: 100%;
      background: #fff;
      margin: .2rem 0;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding: .36rem .3rem;
      .userName
        font-size: .28rem;
        color: #333;
        line-height: .36rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display flex
        justify-content flex-start
        align-items center
        margin-bottom: .24rem;
        .ava
          width: .56rem;
          height: .56rem;
          overflow: hidden;
          border-radius: 50%;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          border: .01rem solid #d9d9d9;
          margin-right: .12rem;
          img
            width: 0.56rem;
            height: 0.56rem;
            border-radius 50%
        .name
          display: inline-block;
          vertical-align: middle;

      .title
        font-size: .36rem;
        color: #333;
        line-height: .52rem;
        margin: -.08rem 0 .16rem 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        font-family: PingFangSC-Regular;
      .pic
        width: 6.9rem;
        height: 3.76rem;
        position: relative;
        margin-bottom: .2rem;
        overflow: hidden;
        border-radius: .08rem;


</style>
