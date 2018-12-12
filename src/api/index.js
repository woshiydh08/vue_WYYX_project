/*
与后台交互模块
 */
import ajax from './ajax'
import qs from 'qs'
const BASE = ''
const BASE5000 = '/api'
const BASE163 = '/163'
/**

 * 获取商品列表
 */
export const reqCategory = () => ajax(BASE + '/category')
// 获取推荐页面信息

export const reqMsite = () => ajax(BASE + '/msite')

// 获取轮播图信息
export const reqFocusList = () => ajax(BASE + '/focus_list')

export const reqTab1 = () => ajax(BASE + '/tab1')
export const reqTab2 = () => ajax(BASE + '/tab2')
export const reqTab3 = () => ajax(BASE + '/tab3')
export const reqTab4 = () => ajax(BASE + '/tab4')
export const reqTab5 = () => ajax(BASE + '/tab5')
export const reqKeyword = () => ajax(BASE + '/keyword')
// 获取识物tab信息
export const reqTabs = () => ajax(BASE163 + '/topic/v1/find/getTabs.json')
export const reqTab1List = () => ajax(BASE163 + '/topic/v1/find/recManual.json')


// [6、用户名密码登陆](#6用户名密码登陆)<br/>
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE5000+'/login_pwd', {name, pwd, captcha}, 'POST')

// [7、发送短信验证码](#7发送短信验证码)<br/>
export const reqSendCode = (phone) => ajax(BASE5000 + '/sendcode', {phone})

// [8、手机号验证码登陆](#8手机号验证码登陆)<br/>
export const reqSmsLogin = (phone, code) => ajax(BASE5000 + '/login_sms', {phone, code}, 'POST')

// [10、用户登出](#10用户登出)<br/>
export const reqLogout = () => ajax(BASE5000 + '/logout')

export const reqFuzzyMsg = (keywordPrefix) => ajax(BASE163 + '/xhr/search/searchAutoComplete.json', {keywordPrefix}, 'POST')


