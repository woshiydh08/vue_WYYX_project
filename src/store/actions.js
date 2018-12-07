/*
vuex的actions模块
 */
import {
  reqCategory,
  reqMsite,
  reqFocusList,
  reqTab1,
  reqTab2,
  reqTab3,
  reqTab4,
  reqTab5,
  reqSendCode,
  reqLogout
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
  RESET_USER

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
  async getTab4({commit, state}) {
    const result = await reqTab4()
    commit(RECEIVE_TAB4, {tab4: result.data})
  },
  async getTab5({commit, state}) {
    const result = await reqTab5()
    commit(RECEIVE_TAB5, {tab5: result.data.result})
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

}
