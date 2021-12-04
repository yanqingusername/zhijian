exports.ids = [12];
exports.modules = {

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(210);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("606dac8a", content, true, context)
};

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_seek_agent_vue_vue_type_style_index_0_id_587ac0c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_seek_agent_vue_vue_type_style_index_0_id_587ac0c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_seek_agent_vue_vue_type_style_index_0_id_587ac0c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_seek_agent_vue_vue_type_style_index_0_id_587ac0c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_seek_agent_vue_vue_type_style_index_0_id_587ac0c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-587ac0c0]{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.box-top .logo-top-img[data-v-587ac0c0],.box-top .logo-top-img img[data-v-587ac0c0]{width:100%}.box-top .box-input-conten[data-v-587ac0c0]{padding:28.5px 34.5px 27px 30px;text-align:center}.box-top .box-input-conten h3[data-v-587ac0c0]{font-size:20px;padding-bottom:22.5px}.box-top .box-input-conten .input-item[data-v-587ac0c0]{display:flex;justify-content:space-between;padding-bottom:.26rem}.box-top .box-input-conten .input-item div[data-v-587ac0c0]{font-size:15px;width:35px;display:flex;align-items:center;text-align:left}.box-top .box-input-conten .input-item input[data-v-587ac0c0],.box-top .box-input-conten .input-item select[data-v-587ac0c0]{border:.02rem solid #dcdcdc;height:40px;border-radius:.13rem;flex:1;padding-left:.24rem;margin-left:10px;color:#8e8e8e;font-family:PingFang SC;font-size:15px;background-color:#fff;outline:none}.box-top .box-input-conten .info[data-v-587ac0c0]{font-size:10px}.box-top .box-input-conten .info span[data-v-587ac0c0]{color:red;padding-right:4px}.box-top .box-input-conten button[data-v-587ac0c0]{width:100%;height:40px;background:#ff6900;border:none;color:#fff;border-radius:20px;margin-top:30px;margin-bottom:27px;font-size:18px;outline:none}.box-top .box-img[data-v-587ac0c0]{width:100%;padding:.66rem .4rem;background-image:linear-gradient(#d11500,#ff6900);box-sizing:border-box;margin-top:-2px}.box-top .box-img img[data-v-587ac0c0]{width:100%;padding-bottom:15px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/seek_agent.vue?vue&type=template&id=587ac0c0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"box-top"},[_vm._ssrNode("\n    页面更新中.....\n")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/seek_agent.vue?vue&type=template&id=587ac0c0&scoped=true&

// EXTERNAL MODULE: ./api/recru.js
var recru = __webpack_require__(53);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/seek_agent.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var seek_agentvue_type_script_lang_js_ = ({
  head: {
    title: '区域会员制，社交电商平台',
    script: [{
      src: "https://res2.wx.qq.com/open/js/jweixin-1.6.0.js"
    }]
  },
  name: 'home',

  data() {
    return {
      name2: '',
      phone2: '',
      type: [],
      type_id2: '3'
    };
  },

  async created() {
    const res = await Object(recru["e" /* recruit_ */])();

    if (res.data.code == 1) {
      this.type = res.data.data;
    }
  },

  async mounted() {
    if (false) {}

    var localUrl = encodeURIComponent(window.location.href.split('?')[0]);
    const {
      data
    } = await Object(recru["i" /* recruitshare_ */])({
      url: localUrl
    });
    wx.config({
      debug: false,
      // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: 'wx74a82c2291be2790',
      // 必填，公众号的唯一标识
      timestamp: data.data.timestamp,
      // 必填，生成签名的时间戳
      nonceStr: data.data.nonceStr,
      // 必填，生成签名的随机串
      signature: data.data.signature,
      // 必填，签名
      jsApiList: ["updateAppMessageShareData", "updateTimelineShareData"] // 必填，需要使用的JS接口列表，根据引入的微信js版本不同，jsApi名字不同，具体请看文档

    });
    wx.ready(function () {
      wx.updateTimelineShareData({
        //分享到朋友圈
        title: '区域会员制社交电商平台',
        // 分享标题
        link: 'https://www.jiunidu.com/seek_agent',
        // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: 'https://image.jiunidu.com/web/zsh5_20210303.png',
        // 分享图标,用绝对路径
        success: function () {// 用户点击了分享后执行的回调函数
        }
      });
      wx.updateAppMessageShareData({
        //分享到微信好友
        title: '区域会员制社交电商平台',
        // 分享标题
        link: 'https://www.jiunidu.com/seek_agent',
        // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: 'https://image.jiunidu.com/web/zsh5_20210303.png',
        // 分享图标
        desc: '整合本地商业资源，培养区域私域流量',
        //分享描述
        success: function () {// 设置成功
        }
      });
    });
  },

  methods: {
    async apply(id) {
      const res = await Object(recru["g" /* recruitadd_ */])({
        name: this.name2,
        phone: this.phone2,
        type: this.type_id2
      });

      if (res.data.code === 1) {
        this.name2 = this.phone2 = '';
        this.type_id2 = '3';
        alert(res.data.msg);
      } else {
        alert(res.data.msg);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/seek_agent.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_seek_agentvue_type_script_lang_js_ = (seek_agentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/seek_agent.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(209)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_seek_agentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "587ac0c0",
  "106b1ee4"
  
)

/* harmony default export */ var seek_agent = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return recruit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return recruitadd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return recruitshare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return recruit_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return recruitadd_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return recruitshare_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return meet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return meet1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return meet_add; });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

const recruit = val => Object(_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('/company/recruit/ajax');
const recruitadd = val => Object(_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('/company/recruit/add', val, 'post');
const recruitshare = val => Object(_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('/company/recruit/share', val, 'post');
const recruit_ = val => Object(_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('/company/recruit/ajax_1');
const recruitadd_ = val => Object(_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('/company/recruit/add_1', val, 'post');
const recruitshare_ = val => Object(_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('/company/recruit/share_1', val, 'post');
const meet = val => Object(_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('/company/meet/share', val, 'post');
const meet1 = val => Object(_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('/company/meet/share_1', val, 'post'); // 招募

const meet_add = val => Object(_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('/company/meet/add', val, 'post');

/***/ })

};;
//# sourceMappingURL=seek_agent.js.map