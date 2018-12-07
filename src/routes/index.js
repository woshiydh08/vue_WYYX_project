import Vue from "vue";


const Category = () => import ('../pages/Category/Category.vue')
const Home = () => import ('../pages/Home/Home.vue')
const Know = () => import ('../pages/Know/Know.vue')
const Personal = () => import ('../pages/Personal/Personal.vue')
const ShopCart = () => import ('../pages/ShopCart/ShopCart.vue')

//二级路由
import Recommend from '../pages/Home/Recommend/Recommend'
import CategoryList from '../pages/Category/CategoryList/CategoryList'

import Tab1 from '../pages/Know/Tab1/Tab1'
import Tab2 from '../pages/Know/Tab2/Tab2'
import Tab3 from '../pages/Know/Tab3/Tab3'
import Tab4 from '../pages/Know/Tab4/Tab4'
import Tab5 from '../pages/Know/Tab5/Tab5'



const pathes = ['/msite','/order','search'];

export default[
  {
    path: '/home',
    component: Home,
    meta:{isShow: true},
    children:[
      {
        path: '/home/recommend',
        component: Recommend
      },
      {
        path: '',
        redirect: '/home/recommend'
      }
    ]
    },
  {path: '/category',
    component: Category,
    meta:{isShow: true},
    children:[
      {
        path: '/category/:id',
        component: CategoryList,
        props: true
      },
    ]
  },

  {
    path: '/know',
    component: Know,
    meta:{isShow: true},
    children:[
      {
        path: '/know/tab1',
        component: Tab1,
        props: true
      },
      {
        path: '/know/tab2',
        component: Tab2,
        props: true
      },
      {
        path: '/know/tab3',
        component: Tab3,
        props: true
      },
      {
        path: '/know/tab4',
        component: Tab4,
        props: true
      },
      {
        path: '/know/tab5',
        component: Tab5,
        props: true
      },
    ],

    beforeEnter:(to, from,next) =>{
      var size = (window.innerWidth || document.documentElement.clientWidth) / 750 * 100;
      document.documentElement.style.fontSize = size + "px";
      document.body.style.fontSize = 24 + "px";
      next()
    },
  },
  {path: '/shopcart', component: ShopCart, meta:{isShow: true}},
  {path: '/personal', component: Personal},
  { path: '/', redirect: '/category' }
]


