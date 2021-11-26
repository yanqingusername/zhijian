// @ts-nocheck
// umi.server.js
import '/Users/user/zhjian20210728/zhijian/node_modules/umi/node_modules/regenerator-runtime/runtime.js';
import { format } from 'url';
import renderServer from '/Users/user/zhjian20210728/zhijian/node_modules/umi/node_modules/@umijs/preset-built-in/lib/plugins/features/ssr/templates/renderServer/renderServer.js';
import { stripBasename, cheerio, handleHTML } from '/Users/user/zhjian20210728/zhijian/node_modules/umi/node_modules/@umijs/preset-built-in/lib/plugins/features/ssr/templates/utils.js';
import { IServerRender } from '@umijs/types';

import { ApplyPluginsType, createMemoryHistory } from '/Users/user/zhjian20210728/zhijian/node_modules/umi/node_modules/@umijs/runtime';
import { plugin } from './plugin';
import './pluginRegister';

// origin require module
// https://github.com/webpack/webpack/issues/4175#issuecomment-342931035
const requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : require;

/**
 * server render function
 * @param params
 */
const render: IServerRender = async (params) => {
  let error;
  const {
    origin = '',
    path,
    htmlTemplate = '',
    mountElementId = 'root',
    context = {},
    mode = 'string',
    basename = '/',
    staticMarkup = false,
    forceInitial = false,
    removeWindowInitialProps = false,
    getInitialPropsCtx,
  } = params;
  let manifest = params.manifest;
  const env = 'development';

  let html = htmlTemplate || "\u003C!DOCTYPE html\u003E\n\u003Chtml lang=\"zh-CN\"\u003E\n  \u003Chead\u003E\n    \u003Cmeta charset=\"UTF-8\" \u002F\u003E\n    \u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" \u002F\u003E\n    \u003Cmeta name=\"keywords\" content=\"指间礼物\" \u002F\u003E\n    \u003Cmeta name=\"description\" content=\"指间礼物\" \u002F\u003E\n    \u003Cmeta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\"\n    \u002F\u003E\n    \u003Ctitle\u003E指间礼物\u003C\u002Ftitle\u003E\n    \u003Clink rel=\"icon\" href=\"\u002Ffavicon.ico\" type=\"image\u002Fx-icon\" \u002F\u003E\n    \u003Cscript\u003E\n      var _hmt = _hmt || [];\n      (function () {\n        var hm = document.createElement(\"script\");\n        hm.src = \"https:\u002F\u002Fhm.baidu.com\u002Fhm.js?a8f67055341f98053f02a1eb4e55382a\";\n        var s = document.getElementsByTagName(\"script\")[0];\n        s.parentNode.insertBefore(hm, s);\n      })();\n    \u003C\u002Fscript\u003E\n    \u003Clink rel=\"stylesheet\" href=\"\u002Fumi.css\" \u002F\u003E\n    \u003Cscript\u003E\n      window.routerBase = \"\u002F\";\n    \u003C\u002Fscript\u003E\n    \u003Cscript src=\"\u002F@@\u002FdevScripts.js\"\u003E\u003C\u002Fscript\u003E\n    \u003Cscript\u003E\n      \u002F\u002F! umi version: 3.4.25\n    \u003C\u002Fscript\u003E\n  \u003C\u002Fhead\u003E\n\n  \u003Cbody\u003E\n    \u003Cnoscript\n      \u003E浏览器不允许运行js脚本，请通过修改配置进行调整后，再次访问本网站！\u003C\u002Fnoscript\n    \u003E\n    \u003Cdiv id=\"root\"\u003E\u003C\u002Fdiv\u003E\n\n    \u003Cscript src=\"\u002Fumi.js\"\u003E\u003C\u002Fscript\u003E\n  \u003C\u002Fbody\u003E\n\u003C\u002Fhtml\u003E\n";
  let rootContainer = '';
  try {
    // handle basename
    const location = stripBasename(basename, `${origin}${path}`);
    const { pathname } = location;
    // server history
    const history = createMemoryHistory({
      initialEntries: [format(location)],
    });
    /**
     * beforeRenderServer hook, for polyfill global.*
     */
    await plugin.applyPlugins({
      key: 'ssr.beforeRenderServer',
      type: ApplyPluginsType.event,
      args: {
        env,
        path,
        context,
        history,
        mode,
        location,
      },
      async: true,
    });

    /**
     * routes init and patch only once
     * beforeRenderServer must before routes init avoding require error
     */
    // 主要为后面支持按需服务端渲染，单独用 routes 会全编译
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

    // for renderServer
    const opts = {
      path,
      history,
      pathname,
      getInitialPropsCtx,
      basename,
      context,
      mode,
      plugin,
      staticMarkup,
      routes,
      isServer: process.env.__IS_SERVER,
    }
    const dynamicImport =  false;
    if (dynamicImport && !manifest) {
      try {
        // prerender not work because the manifest generation behind of the prerender
        manifest = requireFunc(`./`);
      } catch (_) {}
    }
    // renderServer get rootContainer
    const { pageHTML, pageInitialProps, routesMatched } = await renderServer(opts);
    rootContainer = pageHTML;
    if (html) {
      // plugin for modify html template
      html = await plugin.applyPlugins({
        key: 'ssr.modifyServerHTML',
        type: ApplyPluginsType.modify,
        initialValue: html,
        args: {
          context,
          cheerio,
          routesMatched,
          dynamicImport,
          manifest
        },
        async: true,
      });
      html = await handleHTML({ html, rootContainer, pageInitialProps, mountElementId, mode, forceInitial, removeWindowInitialProps, routesMatched, dynamicImport, manifest });
    }
  } catch (e) {
    // downgrade into csr
    error = e;
  }
  return {
    rootContainer,
    error,
    html,
  }
}

export default render;
