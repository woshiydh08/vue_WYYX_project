<template>
  <div class="main">
    <div class="mainBanner" v-if="tab1.ad">
      <img :src="tab1.ad.picUrl" alt="" width="100%" height="100%">
    </div>
    <div v-for="tab in tab1.topics">
      <div class="item1" v-if="tab.type === 1">
        <div class="itemBox">
          <div class="left">
            <div class="userName">
            <span class="ava">
              <img :src="tab.avatar" alt="" >
            </span>
              <span class="name">{{tab.nickname}}</span>
            </div>
            <div class="title">{{tab.subTitle}}</div>
            <div class="desc">{{tab.title}}</div>
            <div class="count">
              <i class="icon"></i>
              <span class="see">{{tab.readCount}}人看过</span>
            </div>
          </div>
          <div class="right">
            <img :src="tab.picUrl" alt="" width="100%" height="100%">
          </div>
        </div>
      </div>
      <div class="item2" v-if="tab.type === 0">
        <div class="userName">
            <span class="ava">
              <img :src="tab.avatar" alt="" >
            </span>
          <span class="name">{{tab.nickname}}</span>
        </div>
        <div class="title">{{tab.subTitle}}</div>
        <div class="pic">
          <img :src="tab.picUrl" alt="" width="100%" height="100%">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "Tab1",
    computed:{
      ...mapState(['tab1','tab1List']),
    }
  }
</script>

<style scoped lang="stylus">
  .main
    padding: 1.72rem 0 .98rem 0;
    .mainBanner
      width: 100%;
      background: #fff;
      margin: .2rem 0;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding: .36rem .3rem;
      img
        width: 6.9rem;
        height: 3.76rem;
        position: relative;
        overflow: hidden;
        border-radius: .08rem;
    .item1
      position: relative;
      padding: .32rem .3rem;
      width: 100%;
      background: #fff;
      margin: .2rem 0;
      .itemBox
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        .left
          width: 4rem;
          position relative
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
            width: 100%;
            font-size: .36rem;
            color: #333;
            line-height: .44rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            padding-top: .32rem;
            font-family: PingFangSC-Regular;
          .desc
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: .28rem;
            line-height: .4rem;
            padding-top: .08rem;
            color: #7f7f7f;
          .count
            left: .3rem;
            bottom: .26rem;
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
        .right
          width: 2.72rem;
          height: 2.72rem;
          position: relative;
          overflow: hidden;
          border-radius: .08rem;
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
