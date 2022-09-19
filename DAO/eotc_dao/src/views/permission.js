import router from'../router'
import store from '../store'
import {getToken} from '../utils/auth'

NProgress.configure({ showSpinner: false })

const whiteList = []

router.beforeEach((to, from, next) => {
  NProgress.start()
  let token = getToken()
  if (token) {
    to.meta.title && store.dispatch('settings/setTitle', to.meta.title)
    /* has token*/
    if (to.path === '/loginBlank') {

      next({ path: '/' })
      NProgress.done()

    }
     else if (store.getters.roles.length === 0) {
      store.dispatch('GenerateRoutes').then(accessRoutes => {
      // 根据roles权限生成可访问的路由表

      router.addRoutes(accessRoutes) // 动态添加可访问路由表

      next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
      })
    }
     else {
      next()
    }
  } else {
    // 没有token
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next()
    } else {
      // next(`/login?redirect=${to.fullPath}`) // 否则全部重定向到登录页
      location.href = ENV.singleSignOnUrl;
      NProgress.done()
    }
  }

  // console.log(to,next)
})

router.afterEach(() => {
  NProgress.done()
})
