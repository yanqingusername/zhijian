export default [
  {
    page: 'home',
    name: '首页',
    url: '/',
  },
  {
    page: 'product',
    name: '指间商城',
    url: '/product/list',
  },
  {
    page: 'strategy',
    name: '礼物攻略',
    url: '/strategy/list/1',
  },
  {
    page: 'aboutus',
    name: '关于我们',
    url: '/aboutus',
    items: [
      {
        page: 'culture',
        name: '公司文化',
        url: '/aboutus#culture',
      },
      {
        page: 'intro',
        name: '企业简介',
        url: '/aboutus#intro',
      },
      {
        page: 'business',
        name: '公司业务',
        url: '/aboutus#business',
      },
      {
        page: 'advantage',
        name: '我们的优势',
        url: '/aboutus#advantage',
      },
      {
        page: 'contactus',
        name: '联系我们',
        url: '/aboutus#contactus',
      },
      {
        page: 'joinus',
        name: '加入我们',
        url: '/aboutus#joinus',
      },
    ],
  },
];
