export default [
  {
    path: '/',
    component: '@/layouts/index',
    exact: false,
    routes: [
      {
        path: '/pc',
        component: '@/pages/pc/home',
      },
      {
        path: '/pc/aboutus',
        component: '@/pages/pc/aboutus',
      },
      {
        path: '/pc/strategy/list/:page',
        component: '@/pages/pc/strategy/list/[page]',
      },
      {
        path: '/pc/strategy/detail/:id',
        component: '@/pages/pc/strategy/detail/[id]',
      },
      {
        path: '/pc/product/list',
        component: '@/pages/pc/product/list/[category]/[page]',
      },
      {
        path: '/pc/product/list/:category/:page',
        component: '@/pages/pc/product/list/[category]/[page]',
      },
      {
        path: '/pc/product/detail/:id',
        component: '@/pages/pc/product/detail/[id]',
      },
      {
        path: '/wap',
        component: '@/pages/wap/home',
      },
      {
        path: '/wap/aboutus',
        component: '@/pages/wap/aboutus',
      },
      {
        path: '/wap/strategy/list/:page',
        component: '@/pages/wap/strategy/list/[page]',
      },
      {
        path: '/wap/strategy/detail/:id',
        component: '@/pages/wap/strategy/detail/[id]',
      },
      {
        path: '/wap/product/list',
        component: '@/pages/wap/product/list/[category]/[page]',
      },
      {
        path: '/wap/product/list/:category/:page',
        component: '@/pages/wap/product/list/[category]/[page]',
      },
      {
        path: '/wap/product/detail/:id',
        component: '@/pages/wap/product/detail/[id]',
      },
    ],
  },
];
