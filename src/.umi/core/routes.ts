// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/user/zhjian20210728/zhijian/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/layouts/index').default,
    "exact": false,
    "routes": [
      {
        "path": "/pc",
        "component": require('@/pages/pc/home').default,
        "exact": true
      },
      {
        "path": "/pc/aboutus",
        "component": require('@/pages/pc/aboutus').default,
        "exact": true
      },
      {
        "path": "/pc/strategy/list/:page",
        "component": require('@/pages/pc/strategy/list/[page]').default,
        "exact": true
      },
      {
        "path": "/pc/strategy/detail/:id",
        "component": require('@/pages/pc/strategy/detail/[id]').default,
        "exact": true
      },
      {
        "path": "/pc/product/list",
        "component": require('@/pages/pc/product/list/[category]/[page]').default,
        "exact": true
      },
      {
        "path": "/pc/product/list/:category/:page",
        "component": require('@/pages/pc/product/list/[category]/[page]').default,
        "exact": true
      },
      {
        "path": "/pc/product/detail/:id",
        "component": require('@/pages/pc/product/detail/[id]').default,
        "exact": true
      },
      {
        "path": "/wap",
        "component": require('@/pages/wap/home').default,
        "exact": true
      },
      {
        "path": "/wap/aboutus",
        "component": require('@/pages/wap/aboutus').default,
        "exact": true
      },
      {
        "path": "/wap/strategy/list/:page",
        "component": require('@/pages/wap/strategy/list/[page]').default,
        "exact": true
      },
      {
        "path": "/wap/strategy/detail/:id",
        "component": require('@/pages/wap/strategy/detail/[id]').default,
        "exact": true
      },
      {
        "path": "/wap/product/list",
        "component": require('@/pages/wap/product/list/[category]/[page]').default,
        "exact": true
      },
      {
        "path": "/wap/product/list/:category/:page",
        "component": require('@/pages/wap/product/list/[category]/[page]').default,
        "exact": true
      },
      {
        "path": "/wap/product/detail/:id",
        "component": require('@/pages/wap/product/detail/[id]').default,
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
