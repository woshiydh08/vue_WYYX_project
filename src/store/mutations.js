/*
vuex的mutations模块
 */
import Vue from 'vue'
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
  [RECEIVE_USER] (state, {user}) {
    state.user = user
  },
  [RESET_USER] (state) {
    state.user = {}
  },
}
