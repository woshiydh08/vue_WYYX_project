/*
vuex的mutations模块
 */
import Vue from 'vue'
import {
  RECEIVE_CATEGORY,
  RECEIVE_MSITE,
  RECEIVE_FOCUSLIST
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

}
