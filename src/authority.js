import router from './router/router'
import store from './store'
import { getToken } from './utils' 

// permission judge function
function isHasAuth(roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true // admin permission passed directly
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

// const whiteList = ['/loginWrap', '/authredirect'] // no redirect whitelist
router.beforeEach((to, from, next) => {
  debugger
  if (getToken()) { // determine if there has token
    if (to.path === '/loginWrap') {
      next('/loginWrap')
      return false
    } else {
      if (store.state.user.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
        store.dispatch('getUserInfo', {
          token: store.state.user.token
        }).then(res => { // 拉取user_info
          debugger
          const info = JSON.parse(res.text)
          const roles = info.roles // note: roles must be a array! such as: ['editor','develop']
          store.dispatch('GenerateRoutes', {
            roles
          }).then(() => { // 根据roles权限生成可访问的路由表
            debugger
            router.addRoutes(store.state.addRouters) // 动态添加可访问路由表
            next({ ...to,
              replace: true
            }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
          })
        }).catch((err) => {
          debugger
          store.dispatch('FedLogOut').then(() => {
            this.$Modal.error({
              content: err.currentAuthority
            })
            next({
              path: '/'
            })
          })
        })
      } else {
        // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
        if (isHasAuth(store.state.roles, to.meta.roles)) {
          next() //
        } else {
          next({
            path: '/401',
            replace: true,
            query: {
              noGoBack: true
            }
          })
        }
      }
    }
  } else {
    next('/loginWrap') // 否则全部重定向到登录页
  }
})

/*router.afterEach(() => {
  //NProgress.done() // finish progress bar
})*/
