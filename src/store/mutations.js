/*
vuex的mutations模块
 */
import Vue from 'vue'
import {
  RECEIVE_CATEGORY,
  RECEIVE_MSITE,
  RECEIVE_FOCUSLIST,
  RECEIVE_TABS,
  RECEIVE_TAB1,
  RECEIVE_TAB2,
  RECEIVE_TAB3,
  RECEIVE_TAB4,
  RECEIVE_TAB5,
  RECEIVE_TAB1_LIST,
  RECEIVE_AUTO,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_FUZZYMSG,
  RECEIVE_KEYWORD
} from './mutation-types'

export default {
  [RECEIVE_CATEGORY](state, {category}) {
    state.category = category;
  },
  [RECEIVE_MSITE](state, {msite}) {
    state.msite = msite
  },
  [RECEIVE_FOCUSLIST](state, {focuslist}) {
    state.focuslist = focuslist
  },
  [RECEIVE_TABS](state, {tabs}) {
    state.tabs = tabs
  },
  [RECEIVE_TAB1](state, {tab1}) {
    state.tab1 = tab1
  },
  [RECEIVE_TAB2](state, {tab2}) {
    state.tab2 = tab2
  },
  [RECEIVE_TAB3](state, {tab3}) {
    state.tab3 = tab3
  },
  [RECEIVE_TAB4](state, {tab4}) {
    state.tab4 = tab4
  },
  [RECEIVE_TAB5](state, {tab5}) {
    state.tab5 = tab5
  },
  [RECEIVE_TAB1_LIST](state, {tab1List}) {
    state.tab1List = tab1List
  },
  [RECEIVE_AUTO](state,{autoMessage}){
    console.log("push执行");
    state.tab1List.push(...autoMessage)
  },



  [RECEIVE_USER] (state, {user}) {
    state.user = user
  },
  [RESET_USER] (state) {
    state.user = {}
  },
  //模糊搜索
  [RECEIVE_FUZZYMSG] (state, {FuzzyMsg}) {
    state.fuzzymsg = FuzzyMsg
  },
  [RECEIVE_KEYWORD] (state, {keyword}) {
    state.keyword = keyword
  },

}
