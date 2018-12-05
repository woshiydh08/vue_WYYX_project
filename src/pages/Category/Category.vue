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
    </div>
</template>

<script>
  export default {
    name: "Category"
  }
</script>

<style scoped lang="stylus">
  header
    position: fixed
    left: 0
    top: 0
    z-index: 5
    width: 100%
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
</style>
