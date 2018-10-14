import {
  custormRoute,
  commonRoute
} from '../../router/router'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasAuth(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.indexOf(role) >= 0)
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param custormRoute
 * @param roles
 */
function filterCustormRoute(custormRoute, roles) {
  const tempRouters = custormRoute.filter(route => {
    if (hasAuth(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterCustormRoute(route.children, roles)
      }
      return true
    }
    return false
  })
  return tempRouters
}

const permission = {
  state: {
    routers: commonRoute,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = commonRoute.concat(routers)
    }
  },
  actions: {
    GenerateRoutes({
      commit
    }, data) {
      return new Promise(resolve => {
        const {
          roles
        } = data
        let tempRouters
        if (roles.indexOf('admin') >= 0) {
          tempRouters = custormRoute
        } else {
          tempRouters = filterCustormRoute(custormRoute, roles)
        }
        commit('SET_ROUTERS', tempRouters)
        resolve()
      })
    }
  }
}

export default permission
