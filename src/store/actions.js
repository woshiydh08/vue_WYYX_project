/*
vuex的actions模块
 */
import {
  reqCategory,
  reqMsite,
  reqFocusList,
  reqTabs,
  reqTab1,
  reqTab2,
  reqTab3,
  reqTab4,
  reqTab5,
  reqTab1List,
  reqAuto,
  // reqTab2List,
  // reqTab3List,
  // reqTab5List,
  reqSendCode,
  reqLogout,
  reqFuzzyMsg,
  reqKeyword,

} from '../api'

import {
  RECEIVE_CATEGORY,
  RECEIVE_MSITE,
  RECEIVE_FOCUSLIST,
  RECEIVE_TAB1,
  RECEIVE_TAB2,
  RECEIVE_TAB3,
  RECEIVE_TAB4,
  RECEIVE_TAB5,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_FUZZYMSG,
  RECEIVE_KEYWORD,
  RECEIVE_TABS,
  RECEIVE_TAB1_LIST,
  RECEIVE_AUTO


} from './mutation-types'

export default {
  // 异步商品列表
  async getCategory({commit, state},cb) {
    const result = await reqCategory()
    commit(RECEIVE_CATEGORY, {category: result})
    cb()
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

  async getTabs({commit, state}) {
    const result = await reqTabs()
    console.log(result);
    commit(RECEIVE_TABS, {tabs: result.data})
  },

  async getTab1({commit, state}) {
    const result = await reqTab1()
    commit(RECEIVE_TAB1, {tab1: result.data})
  },
  async getTab2({commit, state}) {
    const result = await reqTab2()
    commit(RECEIVE_TAB2, {tab2: result.data.result})
  },
  async getTab3({commit, state}) {
    const result = await reqTab3()
    commit(RECEIVE_TAB3, {tab3: result.data.result})
  },

  async getTab5({commit, state}) {
    const result = await reqTab5()
    commit(RECEIVE_TAB5, {tab5: result.data.result})
  },

  async getTab1List({commit, state},cb) {
    const result = await reqTab1List()
    commit(RECEIVE_TAB1_LIST, {tab1List: result.data})
    cb&&cb();
  },
  async getAuto({commit, state},{page,size}) {
    const result = await reqAuto({page,size})
    commit(RECEIVE_AUTO, {autoMessage: result.data.result})
  },



  //发送验证码
  async SendCode({commit, state}) {
    const result = await reqSendCode()
    commit(RECEIVE_TAB5, {Code: result.data.result})
  },

  saveUser({commit}, user) {
    commit(RECEIVE_USER, {user})
  },

  // 请求登出的异步action
  async logout ({commit}) {
    const result = await reqLogout()
    if(result.code===0) {
      commit(RESET_USER)
    }
  },
  //获取模糊搜索信息
  async getFuzzyMsg ({commit},val) {
    const result = await reqFuzzyMsg(val)
    console.log(result.data);
    commit(RECEIVE_FUZZYMSG, {FuzzyMsg: result.data})

  },
  async getKeyword({commit, state}) {
    const result = await reqKeyword()
    console.log(result.data);
    commit(RECEIVE_KEYWORD, {keyword: result.data.data})
  },

}
