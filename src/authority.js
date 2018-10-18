import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import router from './router/router'
import store from './store'
import {
  getToken
} from './utils'
NProgress.configure({
  showSpinner: false
}) // NProgress Configuration

// permission judge function
function hasPermission(roles, permissionRoles) {
  debugger
  if (roles.indexOf('admin') >= 0) return true // admin permission passed directly
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

const whiteList = ['/loginWrap', '/registerWrap'] // no redirect whitelist

router.beforeEach((to, from, next) => {
  debugger
  NProgress.start() // start progress bar
  console.log(getToken())
  if (getToken()) { // determine if there has token
    /* has token*/
    if (to.path === '/loginWrap') {
      next()
      NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    } else {
      if (store.state.user.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
        store.dispatch('getUserInfo', {
          token: store.state.user.token
        }).then(res => { // 拉取user_info
          const info = JSON.parse(res.text)
          const roles = info.roles // note: roles must be a array! such as: ['editor','develop']
          store.dispatch('GenerateRoutes', {//问题出在这一步 进入了catch
            roles
          }).then(() => { // 根据roles权限生成可访问的路由表
            debugger
            router.addRoutes(store.state.authority.addRouters) // 动态添加可访问路由表
           next({ ...to,
             replace: true
           })
          
          })
        }).catch((err) => {
          console.log('拉取用户信息失败')
        /*   store.dispatch('FedLogOut').then(() => {
            this.$Modal.error({
              content: err.currentAuthority
            })
            next({
              path: '/'
            })
          }) */
        })
      } else {
        console.log('已经存在用户角色的情况')
        console.log()
        // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
        if (hasPermission(store.state.user.roles, to.meta.roles)) {
          next()
        } 
      }
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next('/loginWrap') // 否则全部重定向到登录页
      NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
