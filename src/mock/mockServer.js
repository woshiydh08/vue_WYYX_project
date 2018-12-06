import Mock from 'mockjs'
import msite from './msite.json'
import category from './category'
import shiwu from './shiwu'

// console.log('mockServer')
// 指定监听的url和对应的json数据模板
Mock.mock('/category', {
  code: 0,
  data: category
})

Mock.mock('/msite', {code: 0, data: msite})
Mock.mock('/focus_list', {code: 0, data: msite.focusList})
Mock.mock('/cateList', {code: 0, data: msite.cateList})



