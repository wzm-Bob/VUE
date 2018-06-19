import Vue from 'vue'
import VueRouter from 'vue-router'

const IndexPage = r => require.ensure([], () => r(require('../pages/index')), 'IndexPage')
const register = r => require.ensure([], () => r(require('../pages/register')), 'register')
const NewView = r => require.ensure([], () => r(require('../pages/newView')), 'NewView')
const DetailPage = r => require.ensure([], () => r(require('../pages/detail')), 'DetailPage')
const OrderListPage = r => require.ensure([], () => r(require('../pages/orderList')), 'OrderListPage')
const DetailAnaPage = r => require.ensure([], () => r(require('../pages/detail/analysis')), 'DetailAnaPage')
const DetailCouPage = r => require.ensure([], () => r(require('../pages/detail/count')), 'DetailCouPage')
const DetailForPage = r => require.ensure([], () => r(require('../pages/detail/forecast')), 'DetailForPage')
const DetailPubPage = r => require.ensure([], () => r(require('../pages/detail/publish')), 'DetailPubPage')

Vue.use(VueRouter)

export default new VueRouter({
  // mode: 'history',
  mode: 'hash',
  routes: [{
      path: '/',
      name: 'IndexPage',
     // redirect: '/',
      component: IndexPage
    },
    {
      path: '/orderList',
      component: OrderListPage
    },
    {
      path: '/newView',
      component: NewView
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/analysis',
      children: [{
          path: 'analysis',
          component: DetailAnaPage
        },
        {
          path: 'count',
          component: DetailCouPage
        },
        {
          path: 'forecast',
          component: DetailForPage
        },
        {
          path: 'publish',
          component: DetailPubPage
        }
      ]
    }
  ]
})
