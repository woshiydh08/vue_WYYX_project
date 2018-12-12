<template>
  <div class="main">
    <div class="mainInner">
      <div v-for="(tab,index) in tab1List">
        <div class="mainBanner" v-if="tab.ad">
          <img :src="tab.ad.picUrl" alt="" width="100%" height="100%">
        </div>
        <div v-for="(t,i) in  tab.topics">
          <tabItem1 v-if="t.type === 1" :t="t"></tabItem1>
          <tabItem2 v-if="t.type === 0" :t="t"></tabItem2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import tabItem1 from '../../../components/tabItem1/tabItem1'
  import tabItem2 from '../../../components/tabItem2/tabItem2'
  import {mapState} from 'vuex'
  export default {
    name: "Tab1",
    data(){
      return{
        page:1
      }
    },
    computed:{
      ...mapState(['tab1','tab1List']),
    },

    mounted(){
      this.scroll = new BScroll('.main', {
        click: true, // 触发自定义click
        scrollX: true,
        pullUpLoad: {
          threshold: 20
        }
      });
      this.scroll.on('pullingUp', () => {
        this.loadMore(this.page);
        this.page++;
        this.scroll.finishPullUp()
      })
    },
    components:{
      tabItem1,
      tabItem2
    },
    watch:{
      tab1List(n,o){
        this.scroll.refresh();
      }
    },
    methods:{
      loadMore(num){
        this.$store.dispatch('getAuto',{page:num,size:5})
      }
    }
  }
</script>

<style scoped lang="stylus">
  .main
    padding: 1.72rem 0 .98rem 0;
    width 100%
    height 100%
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
</style>
