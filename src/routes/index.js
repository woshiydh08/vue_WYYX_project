import Vue from "vue";


const Category = () => import ('../pages/Category/Category.vue')
const Home = () => import ('../pages/Home/Home.vue')
const Know = () => import ('../pages/Know/Know.vue')
const Personal = () => import ('../pages/Personal/Personal.vue')
const ShopCart = () => import ('../pages/ShopCart/ShopCart.vue')


const pathes = ['/msite','/order','search'];

export default[
  {path: '/home', component: Home, meta:{isShow: true}},
  {path: '/category', component: Category, meta:{isShow: true}},
  {path: '/know', component: Know, meta:{isShow: true}},
  {path: '/shopcart', component: ShopCart, meta:{isShow: true}},
  {path: '/personal', component: Personal},


  { path: '/', redirect: '/home' }
]
