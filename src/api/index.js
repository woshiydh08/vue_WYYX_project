/*
与后台交互模块
 */
import ajax from './ajax'
// const BASE = '/api'
const BASE = ''
/**

 * 获取商品列表
 */
export const reqCategory = () => ajax(BASE + '/category')
// 获取推荐页面信息

export const reqMsite = () => ajax(BASE + '/msite')

// 获取轮播图信息
export const reqFocusList = () => ajax(BASE + '/focus_list')

export const reqTab2 = () => ajax(BASE + '/tab2')

/**
 * 获取msite商铺列表(根据经纬度)
 */
// export const reqShops = ({latitude, longitude}) => ajax('/api/shops', {latitude, longitude})
