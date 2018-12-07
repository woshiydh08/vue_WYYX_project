/*
vuex的actions模块
 */
import {
  reqCategory,
  reqMsite,
  reqFocusList,
  reqTab2
} from '../api'

import {
  RECEIVE_CATEGORY,
  RECEIVE_MSITE,
  RECEIVE_FOCUSLIST,
  RECEIVE_TAB2

} from './mutation-types'

export default {
  // 异步商品列表
  async getCategory({commit, state}) {
    const result = await reqCategory()
    commit(RECEIVE_CATEGORY, {category: result})
  },

  async getMsite({commit, state}) {
    const result = await reqMsite()
    commit(RECEIVE_MSITE, {msite: result})
  },
  async getFocusList({commit, state},cb) {
    const result = await reqFocusList()
    commit(RECEIVE_FOCUSLIST, {focuslist: result})
    typeof cb==='function' && cb()
  },
  async getTab2({commit, state}) {
    const result = await reqTab2()
    console.log(result);
    commit(RECEIVE_TAB2, {tab2: result.data.result})
  },


}
