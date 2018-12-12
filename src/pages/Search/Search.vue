<template>
    <div class="searchBody">
      <div class="searchWrapper">
        <div class="searchInner">
          <form action="" class="searchIptWrap">
            <div class="searchIpt">
              <i class="searchIcon"></i>
              <input type="text" v-model="searchVal">
              <i class="cleanIcon" @click="clean"></i>
            </div>
          </form>
          <div class="cancel" @click="$router.replace('/home')">取消</div>
        </div>
      </div>
      <div class="fuzzyUl" v-if="fuzzymsg">
        <div class="item" v-for="item in fuzzymsg">
          <div class="text">{{item}}</div>
        </div>
      </div>
      <div class="hot">
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {reqSearchVal} from '../../api/index'
  export default {
      name: "Search",
    data(){
        return{
          searchVal:''
        }
    },
    mounted(){
      this.$store.dispatch('getKeyword')
    },
    methods:{
      clean(){
        this.searchVal = ''
      }
    },
    computed:{
      ...mapState(['fuzzymsg','keyword'])
    },
    watch:{
      searchVal: function (newQuestion) {
        console.log(newQuestion);
        this.$store.dispatch('getFuzzyMsg',newQuestion)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .searchBody
    width 100%
    height 100%
    background-color: #f4f4f4
    .searchWrapper
      z-index: 1;
      position: relative;
      background-color: #fff;
      height: 1.16rem;
      .searchInner
        padding: 0 .4rem;
        z-index: 1;
        width: 10rem;
        margin: auto;
        overflow: hidden;
        position: relative;
        height: 1.17333rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .searchIptWrap
          flex: 1;

          .searchIpt
            display flex
            align-items center
            justify-content center
            padding-top: 0;
            padding-left: .26667rem;
            padding-bottom: 0;
            border: 0;
            background-color: #f4f4f4;
            height: .74667rem;
            border-radius: 4px
            .searchIcon
              margin-right: .21333rem;
              display: inline-block;
              vertical-align: middle;
              background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
              background-repeat: no-repeat;
              background-size: 100% 100%;
              width: .37333rem;
              height: .37333rem;
            input
              line-height: .53333rem;
              padding-left: .02667rem;
              flex: 1;
              font-size: .37333rem;
              border: none;
              color: rgba(0,0,0,.8);
              background-color: transparent;
              outline none
            .cleanIcon
              width: .66667rem;
              height: .66667rem;
              background-size: 100%;
              background-repeat: no-repeat;
              vertical-align: middle;
              background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/clearIpt-f71b83e3c2.png);
              display: inline-block;
        .cancel
          margin-left: .4rem;
          font-size: .37333rem;
    .fuzzyUl
      z-index: 1;
      position: relative;
      display: block;
      padding-left: .4rem;
      background-color: #fff;
      .item
        height: 1.2rem;
        font-size: .37333rem;
        border-bottom #7e8c8d 0.001rem solid
        .text
          padding-top 0.2rem
    .hot
      background-color: #f4f4f4;
      position: relative;
      z-index: 1;
</style>
