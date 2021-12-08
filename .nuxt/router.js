import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3b717640 = () => interopDefault(import('../pages/cooperation.vue' /* webpackChunkName: "pages/cooperation" */))
const _12fa9dde = () => interopDefault(import('../pages/news.vue' /* webpackChunkName: "pages/news" */))
const _a2e6e5ce = () => interopDefault(import('../pages/we.vue' /* webpackChunkName: "pages/we" */))
const _0ce55ed7 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cooperation",
    component: _3b717640,
    name: "cooperation"
  }, {
    path: "/news",
    component: _12fa9dde,
    name: "news"
  }, {
    path: "/we",
    component: _a2e6e5ce,
    name: "we"
  }, {
    path: "/",
    component: _0ce55ed7,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
