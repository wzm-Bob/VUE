import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const commonRoute = [{
  path: '/',
  name: 'loginLayout',
  component: r => require.ensure([], () => r(require('../pages/loginlayout')), 'loginLayout'),
  children: [{
      path: 'loginWrap',
      component: r => require.ensure([], () => r(require('../pages/loginwrap')), 'loginWrap')
    },
    {
      path: 'registerWrap',
      component: r => require.ensure([], () => r(require('../pages/registerwrap')), 'registerWrap')
    },
    {
      path: 'registerSuccess',
      component: r => require.ensure([], () => r(require('../pages/registersuccess')), 'registerSuccess')
    }
  ]
}]



export default new Router({
  routes: commonRoute
})
export const custormRoute = [{
  path: '/IndexPage',
  name: 'IndexPage',
  component: r => require.ensure([], () => r(require('../pages/indexpage')), 'IndexPage'),
  /*redirect: '/IndexPage/analysis',*/
  redirect: {
    name: 'analysis'
  },
  children: [{
      name: 'analysis',
      path: 'analysis',
      component: r => require.ensure([], () => r(require('../pages/dashboard/analysis')), 'analysis')
    },
    {
      name: 'monitor',
      path: 'monitor',
      component: r => require.ensure([], () => r(require('../pages/dashboard/monitor')), 'monitor')
    },
    {
      name: 'workplace',
      path: 'workplace',
      component: r => require.ensure([], () => r(require('../pages/dashboard/workplace')), 'workplace')
    }
  ]
}]
