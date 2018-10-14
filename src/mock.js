//引入mockjs
const Mock = require('mockjs')

    Mock.mock('/api/login/account',(req, res) => {
        debugger
      const {
        password,
        user,
       // type
      } =  JSON.parse(req.body);
      if (password === '888888' && user === 'admin') {
        return {
          status: 'ok',
          token: 'admin',
          roles: ['admin'],
          currentAuthority: 'admin',
          introduction: '超级管理员',
        }
      }
      if (password === '123456' && user === 'user') {
        return {
          status: 'ok',
          token: 'user',
          roles: ['user'],
          currentAuthority: 'user',
          introduction: '普通用户',
        }
      }
      if (password === '1234' && user === '17797592879') {
        return {
          status: 'ok',
          token: 'user',
          roles: ['user'],
          currentAuthority: 'user',
          introduction: '普通用户',
        }
      }
    return {
            status: 'error',
            currentAuthority: 'guest',
          }

    })
     Mock.mock('/api/getinfo', (req, res) => {
       debugger
       const {
         token
         // type
       } = JSON.parse(req.body);
       if (token === 'admin') {
         return {
           status: 'ok',
           token: 'admin',
           roles: ['admin'],
           currentAuthority: 'admin',
           introduction: '超级管理员',
         }
       }
       if (token ==='user') {
         return {
           status: 'ok',
           token: 'user',
           roles: ['user'],
           currentAuthority: 'user',
           introduction: '普通用户',
         }
       }
       return {
         status: 'error',
         currentAuthority: '无法识别当前角色',
       }

     })
    Mock.mock('/api/register', (req, res) => {
      console.log(...req.body)
      return {
        status: 'ok',
        currentAuthority: 'user',
      }
    })
    Mock.mock('/api/menu/data', (req, res) => {
      return {
        menuData: [
          {
            name: "dashboard",
            icon: "ios-speedometer-outline",
            path: "dashboard",
            children: [{
                name: "分析页",
                path: "analysis",
                link: "/indexPage/analysis"
              },
              {
                name: "监控页",
                path: "monitor",
                link: "/indexPage/monitor"
              },
              {
                name: "工作台",
                path: "workplace",
                link: "/indexPage/workplace"
                // hideInBreadcrumb: true,
                // hideInMenu: true,
              }
            ]
          },
          {
            name: "表单页",
            icon: "ios-speedometer-outline",
            path: "form",
            children: [{
                name: "基础表单",
                path: "basic-form"
              },
              {
                name: "分步表单",
                path: "step-form"
              },
              {
                name: "高级表单",
                authority: "admin",
                path: "advanced-form"
              }
            ]
          },
          {
            name: "列表页",
            icon: "ios-speedometer-outline",
            path: "list",
            children: [{
                name: "查询表格",
                path: "table-list"
              },
              {
                name: "标准列表",
                path: "basic-list"
              },
              {
                name: "卡片列表",
                path: "card-list"
              },
              {
                name: "搜索列表",
                path: "search",
                children: [{
                    name: "搜索列表（文章）",
                    path: "articles"
                  },
                  {
                    name: "搜索列表（项目）",
                    path: "projects"
                  },
                  {
                    name: "搜索列表（应用）",
                    path: "applications"
                  }
                ]
              }
            ]
          },
          {
            name: "详情页",
            icon: "ios-speedometer-outline",
            path: "profile",
            children: [{
                name: "基础详情页",
                path: "basic"
              },
              {
                name: "高级详情页",
                path: "advanced",
                authority: "admin"
              }
            ]
          },
          {
            name: "结果页",
            icon: "ios-speedometer-outline",
            path: "result",
            children: [{
                name: "成功",
                path: "success"
              },
              {
                name: "失败",
                path: "fail"
              }
            ]
          },
          {
            name: "异常页",
            icon: "ios-speedometer-outline",
            path: "exception",
            children: [{
                name: "403",
                path: "403"
              },
              {
                name: "404",
                path: "404"
              },
              {
                name: "500",
                path: "500"
              },
              {
                name: "触发异常",
                path: "trigger",
                hideInMenu: true
              }
            ]
          },
          {
            name: "账户",
            icon: "ios-speedometer-outline",
            path: "user",
            authority: "guest",
            children: [{
                name: "登录",
                path: "login"
              },
              {
                name: "注册",
                path: "register"
              },
              {
                name: "注册结果",
                path: "register-result"
              }
            ]
          }
        ]
      }
    })
