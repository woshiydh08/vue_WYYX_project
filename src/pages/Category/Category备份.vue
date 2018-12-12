<template>
  <div>
    <header>
      <div class="header-item">
        <div class="search">
          <i class="icon"></i>
          <span class="placeholder">搜索商品, 共19973款好物</span>
        </div>
      </div>
    </header>
    <div class="cateNav">
      <ul class="cateNavVert">
        <li class="item" :class="{on:false}" v-for="(item , index) in category.data" :key="index" :item="item">
          <router-link :to="{path:'category',query: {id : item.id}}">{{item.name}}</router-link>
        </li>
      </ul>
    </div>
    <div class="cateList">
      <div class="banner"></div>
      <div class="cateListInner">
      <!--右侧列表-->
        <ul v-if="listID[0]">
          <li v-for="item in listID[0].subCateList">
            <div class="cateImgWrapper" @click="show">
              <img :src="item.bannerUrl" alt="">
            </div>
            <div class="name">{{item.name}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "Category",
    mounted(){
      this.$store.dispatch('getCategory')
      this.$store.dispatch('getMsite')
    },
    computed:{
      ...mapState(['category']),
      //获取当前页面的数组
      listID(){
        if(this.category){
          const id = this.$route.query.id;
          let newArr = this.category.data.filter((arr)=>{
            return arr.id == id
          });
          return newArr
        }
      },
      //确定当前类型
      listType(){

      }

    },
    methods:{
      show(){
        console.log(this.listID);
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"

  header
    position: fixed
    left: 0
    top: 0
    z-index: 5
    width: 100%
    bottom-border-1px(#d9d9d9)
    .header-item
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      -moz-align-items: center;
      align-items: center;
      height: 1.17333rem;
      padding: 0 .4rem;
      background-color: #fff;
      position: relative;
      .search
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        height: .74667rem;
        font-size: .37333rem;
        background-color: #ededed;
        border-radius: .10667rem;
        flex-grow 1
        .icon
          display: inline-block;
          vertical-align: middle;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: .37333rem;
          height: .37333rem;
          margin-right: .13333rem;
        .placeholder
          color: #666;
  .cateNav
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 4;
    width: 2.16rem;
    background-color: #fff;
    border-right 1px solid #d9d9d9
    .cateNavVert
      padding: 1.17333rem 0
      padding-bottom: 1.84rem;
      .item
        display: block;
        color: #333;
        font-size: .37333rem;
        line-height: .66667rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin-top: .53333rem;
        text-align: center;


  .cateList
    margin-left: 2.16rem;
    padding: .4rem .4rem .28rem;
    background-color #fff
    .banner
      position: relative;
      width: 100%;
      height: 2.56rem;
      display: table;
      margin-bottom: .42667rem;
      background: center no-repeat #f4f4f4;
      background-size: cover;
      border-radius: 4px;
      background-image:url(http://yanxuan.nosdn.127.net/52855d9a0c1f738f26ac125913af0012.jpg?imageView&thumbnail=0x196&quality=75);
      .cnt
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        font-size: .37333rem;
        color: #fff;
    .cateListInner
      margin-bottom: 0;
      ul
        width 100%
        display flex
        flex-wrap wrap
        li
          display: block;
          margin-right: .40333rem;
          font-size: 0;
          width: 1.92rem;
          vertical-align: top;
          .cateImgWrapper
            width: 1.92rem;
            height: 1.92rem;
            background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/water-d839a69b0d.png) center no-repeat;
            img
              display: block;
              width: 100%;
              background: #fff;
              height: 100%;
          .name
            height: .96rem;
            font-size: .32rem;
            text-align: center;
            line-height: .48rem;
            display: block;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
</style>
<!--`/category/${item.id}`-->
<!--{name:'`/category/${item.id}`', params: {id: item.id,item}-->
