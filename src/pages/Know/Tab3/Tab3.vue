<template>
  <div class="main">
    <div class="item1" v-for="tab in tab3">
      <div class="title">{{tab.nickname}}</div>
      <div class="content">{{tab.subTitle}}</div>
      <div class="pic">
        <img :src="t.itemUrl" alt=""  v-for="t in tab.itemList">
      </div>
      <div class="see">
        <i class="icon"></i>
        <span class="count">{{tab.readCount}}人看过</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "Tab3",
    computed:{
      ...mapState(['tab3']),
    }
  }
</script>

<style scoped lang="stylus">
  .main
    padding: 1.72rem 0 .98rem 0;
    .item1
      width: 100%;
      background: #fff;
      margin: .2rem 0;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding: .36rem .3rem;
      .title
        width: 100%;
        color: #333;
        font-size: .36rem;
        line-height: .54rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-family: PingFangSC-Regular;
      .content
        font-size: .28rem;
        color: #7F7F7F;
        line-height: .4rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        padding-top: .08rem;
      .pic
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        margin: .24rem 0;
        img
          width: 1.66rem;
          height: 1.66rem;
          border-radius: .04rem;
          overflow: hidden;
          background: #f4f4f4;
          margin-bottom: .08rem;

      .see
        font-size: .22rem;
        color: #999;
        line-height: .32rem;
        margin-top: .18rem;
        .icon
          display: inline-block;
          width: .28rem;
          height: .2rem;
          vertical-align: middle;
          background: url('../img/eye.png') no-repeat 0/100%;
          margin-right: .08rem;
        .count
          display: inline-block;
          vertical-align: middle;
</style>
