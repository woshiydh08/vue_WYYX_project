<template>
  <div class="cateList">
    <div class="banner">
      <div class="cnt"></div>
    </div>
    <div class="cateListInner">
      <ul>
        <li>
          <div class="cateImgWrapper">
            <img src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png?imageView&quality=85&thumbnail=144x144" alt="">
          </div>
          <div class="name">三十转场</div>
        </li>

        <li>
          <div class="cateImgWrapper">
            <img src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png?imageView&quality=85&thumbnail=144x144" alt="">
          </div>
          <div class="name">三十转场</div>
        </li>

        <li>
          <div class="cateImgWrapper">
            <img src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png?imageView&quality=85&thumbnail=144x144" alt="">
          </div>
          <div class="name">三十转场</div>
        </li><li>
        <div class="cateImgWrapper">
          <img src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png?imageView&quality=85&thumbnail=144x144" alt="">
        </div>
        <div class="name">三十转场</div>
      </li>
      </ul>
    </div>
  </div>

</template>

<script>
  import {mapState} from "vuex"

  export default {
    name: "CategoryList",
    props:['item'],
    mounted(){
      console.log(this.$route);
      console.log(this.item);
    },
    computed:{
      ...mapState(["msite"]),
      imgU(){
        const id = this.$route.query.id;
        console.log(this.$route);
        console.log(id);
        const imgU = this.msite.tagList.filter((tag)=>{
          return tag.id == id
        });
        return imgU[0].appListPicUrl
      }
    }

    }
</script>

<style scoped lang="stylus">
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
