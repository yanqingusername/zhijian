exports.ids = [10];
exports.modules = {

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(205);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("84f808c0", content, true, context)
};

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-top1.5164d27.png";

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/baner11.bfe98b0.png";

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/baner22.9da18b1.png";

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/baner6.ac5a8bf.png";

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/baner77.c1fe634.png";

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_recruit_vue_vue_type_style_index_0_id_4a0b27e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(101);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_recruit_vue_vue_type_style_index_0_id_4a0b27e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_recruit_vue_vue_type_style_index_0_id_4a0b27e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_recruit_vue_vue_type_style_index_0_id_4a0b27e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_recruit_vue_vue_type_style_index_0_id_4a0b27e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-4a0b27e6]{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.box-top .logo-top-img[data-v-4a0b27e6],.box-top .logo-top-img img[data-v-4a0b27e6]{width:100%}.box-top .box-input-conten[data-v-4a0b27e6]{padding:28.5px 34.5px 27px 30px;text-align:center}.box-top .box-input-conten h3[data-v-4a0b27e6]{font-size:20px;padding-bottom:22.5px}.box-top .box-input-conten .input-item[data-v-4a0b27e6]{display:flex;justify-content:space-between;padding-bottom:.26rem}.box-top .box-input-conten .input-item div[data-v-4a0b27e6]{font-size:15px;width:35px;display:flex;align-items:center;text-align:left}.box-top .box-input-conten .input-item input[data-v-4a0b27e6],.box-top .box-input-conten .input-item select[data-v-4a0b27e6]{border:.02rem solid #dcdcdc;height:40px;border-radius:.13rem;flex:1;padding-left:.24rem;margin-left:10px;color:#8e8e8e;font-family:PingFang SC;font-size:15px;background-color:#fff;outline:none}.box-top .box-input-conten button[data-v-4a0b27e6]{width:100%;height:40px;background:linear-gradient(180deg,#f99725,#f8c142);border:none;color:#fff;border-radius:20px;margin-top:30px;margin-bottom:27px;font-size:18px;outline:none}.box-top .box-img[data-v-4a0b27e6]{width:100%;padding:.66rem .4rem;background-color:#f8c142;box-sizing:border-box}.box-top .box-img img[data-v-4a0b27e6]{width:100%;padding-bottom:15px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/recruit.vue?vue&type=template&id=4a0b27e6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"box-top"},[_vm._ssrNode("<div class=\"logo-top-img\" data-v-4a0b27e6><img"+(_vm._ssrAttr("src",__webpack_require__(199)))+" alt data-v-4a0b27e6></div> <div class=\"box-img\" data-v-4a0b27e6><img"+(_vm._ssrAttr("src",__webpack_require__(200)))+" alt data-v-4a0b27e6> <img"+(_vm._ssrAttr("src",__webpack_require__(201)))+" alt data-v-4a0b27e6> <img"+(_vm._ssrAttr("src",__webpack_require__(202)))+" alt data-v-4a0b27e6> <a href=\"tel:0731-89575976\" data-v-4a0b27e6><img"+(_vm._ssrAttr("src",__webpack_require__(203)))+" alt data-v-4a0b27e6></a></div> "),_vm._ssrNode("<div class=\"box-input-conten\" data-v-4a0b27e6>","</div>",[_vm._ssrNode("<h3 data-v-4a0b27e6>加入蜂乐购优选</h3> <div class=\"input-item\" data-v-4a0b27e6><div data-v-4a0b27e6>姓名</div><input type=\"text\" placeholder=\"请输入\""+(_vm._ssrAttr("value",(_vm.name1)))+" data-v-4a0b27e6></div> <div class=\"input-item\" data-v-4a0b27e6><div data-v-4a0b27e6>电话</div><input type=\"text\" placeholder=\"请输入\""+(_vm._ssrAttr("value",(_vm.phone1)))+" data-v-4a0b27e6></div> "),_vm._ssrNode("<div class=\"input-item\" data-v-4a0b27e6>","</div>",[_vm._ssrNode("<div data-v-4a0b27e6>申请类型</div>"),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.type_id1),expression:"type_id1"}],attrs:{"name":"cars"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.type_id1=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.type),function(item){return _c('option',{key:item.key,domProps:{"value":item.key}},[_vm._v(_vm._s(item.val))])}),0)],2),_vm._ssrNode(" <button data-v-4a0b27e6>立即申请</button> <span style=\"color: #F63400; font-size:15px;\" data-v-4a0b27e6>注：提交申请后，请等待平台审核，通过后（将以短信形式通知）即可成为店主/驿站站长。</span>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/recruit.vue?vue&type=template&id=4a0b27e6&scoped=true&

// EXTERNAL MODULE: ./api/recru.js
var recru = __webpack_require__(53);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/recruit.vue?vue&type=script&lang=js&
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
//
//
//
//

/* harmony default export */ var recruitvue_type_script_lang_js_ = ({
  head: {
    title: '蜂乐购优选招募店主、驿站站长！',
    script: [{
      src: "https://res2.wx.qq.com/open/js/jweixin-1.6.0.js"
    }]
  },
  name: 'home',

  data() {
    return {
      name1: '',
      phone1: '',
      type: [],
      type_id1: '0',
      id: "0"
    };
  },

  async created() {
    const res = await Object(recru["d" /* recruit */])();

    if (res.data.code == 1) {
      this.type = res.data.data;
    }
  },

  async mounted() {
    if (false) {}

    var localUrl = encodeURIComponent(window.location.href.split('?')[0]);
    const {
      data
    } = await Object(recru["h" /* recruitshare */])({
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
        title: '蜂乐购优选招募店主、驿站站长！',
        // 分享标题
        link: 'https://www.jiunidu.com/recruit',
        // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: 'https://image.jiunidu.com/web/dianzhu_20210521.png',
        // 分享图标,用绝对路径
        success: function () {// 用户点击了分享后执行的回调函数
        }
      });
      wx.updateAppMessageShareData({
        //分享到微信好友
        title: '蜂乐购优选招募店主、驿站站长！',
        // 分享标题
        link: 'https://www.jiunidu.com/recruit',
        // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: 'https://image.jiunidu.com/web/dianzhu_20210521.png',
        // 分享图标
        desc: '招募店主、驿站站长、全小区给你赚钱',
        //分享描述
        success: function () {// 设置成功
        }
      });
    });
    this.id = this.getParams("userId");
  },

  methods: {
    async apply(id) {
      const res = await Object(recru["f" /* recruitadd */])({
        name: this.name1,
        phone: this.phone1,
        type: this.type_id1,
        share_user_id: this.id
      });

      if (res.data.code === 1) {
        this.name1 = this.phone1 = '';
        this.type_id1 = '0';
        this.id = "0";
        alert(res.data.msg);
      } else {
        alert(res.data.msg);
      }
    },

    getParams(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);

      if (r != null) {
        return r[2]; // decodeURIComponent(r[2])
      }

      return "0";
    }

  }
});
// CONCATENATED MODULE: ./pages/recruit.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_recruitvue_type_script_lang_js_ = (recruitvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/recruit.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(204)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_recruitvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4a0b27e6",
  "531e6944"
  
)

/* harmony default export */ var recruit = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=recruit.js.map