import Vue from "vue";


const Home = () => import ('../pages/Home/Home.vue')
const Category = () => import ('../pages/Category/Category.vue')
const Know = () => import ('../pages/Know/Know.vue')
const ShopCart = () => import ('../pages/ShopCart/ShopCart.vue')
const Login = () => import ('../pages/Login/Login.vue')
const Personal = () => import('../pages/Personal/Personal.vue')
const Search = () => import('../pages/Search/Search.vue')

//二级路由
import Recommend from '../pages/Home/Recommend/Recommend'
import CategoryList from '../pages/Category/CategoryList/CategoryList'

import Tab1 from '../pages/Know/Tab1/Tab1'
import Tab2 from '../pages/Know/Tab2/Tab2'
import Tab3 from '../pages/Know/Tab3/Tab3'
import Tab4 from '../pages/Know/Tab4/Tab4'
import Tab5 from '../pages/Know/Tab5/Tab5'


// 2级未登录页面,选择邮箱或手机
import LoginSelect from '../pages/Login/Method/LoginSelect'

// 2级登录页面的logo
import LoginMethod from '../pages/Login/Method/LoginMethod'

//电话邮箱登录3级页面
import Phone from '../pages/Login/Method/Phone'
import Email from '../pages/Login/Method/Email'




export default[
  {
    path: '/home',
    component: Home,
    meta:{isShow: true},
    children:[
      {
        path: '/home/recommend',
        component: Recommend,
        meta:{isShow: true},
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
    // meta:{isShow: true},
    children:[
      {
        path: '/know/tab1',
        component: Tab1,
        props: true,
        // meta:{isShow: true}
      },
      {
        path: '/know/tab2',
        component: Tab2,
        props: true,
        // meta:{isShow: true},
      },
      {
        path: '/know/tab3',
        component: Tab3,
        props: true,
        // meta:{isShow: true},
      },
      {
        path: '/know/tab4',
        component: Tab4,
        props: true,
        // meta:{isShow: true},
      },
      {
        path: '/know/tab5',
        component: Tab5,
        props: true,
        // meta:{isShow: true},
      },
      { path: '/know', redirect: '/know/tab1' }
    ],

    beforeEnter:(to, from,next) =>{
      var size = (window.innerWidth || document.documentElement.clientWidth) / 750 * 100;
      document.documentElement.style.fontSize = size + "px";
      document.body.style.fontSize = 24 + "px";
      next()
    },
  },
  {
    path: '/shopcart',
    component: ShopCart,
    meta:{isShow: true}
  },
  {
    path: '/login',
    component: Login,
    children:[
      {
        path: '/login/login',
        component: LoginSelect,
        props: true,
      },
      {
        path: '/login/login_method',
        component: LoginMethod,
        props: true,
        children:[
          {
            path: '/login/login_method/phone',
            component: Phone,
            props: true,
          },
          {
            path: '/login/login_method/email',
            component: Email,
            props: true,
          }
        ]
      },
      {
        path: '/login',
        redirect: '/login/login'
      }

    ]
  },
  {
    path: '/personal',
    component: Personal,
    meta:{isShow: true},
    beforeEnter: (to, from, next) => {
      if(Vue.store.state.user._id){
        next()
      }else {
        next('/login')
      }
    }
  },
  {
    path: '/search',
    component: Search,
  },
  { path: '/', redirect: '/home' }
]



