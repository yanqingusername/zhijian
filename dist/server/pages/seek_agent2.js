exports.ids = [13];
exports.modules = {

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(222);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6e2e9566", content, true, context)
};

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/agent_banner.fc928a6.png";

/***/ }),

/***/ 212:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABYCAMAAABoDuGUAAAAM1BMVEVHcEz7tgb6tgb5tAb6tgb7tgb6tQb7tQb6tgf6tQb7tAf6tQf6tgb6tAb6tQb/sg/6tQechI+0AAAAEHRSTlMAbZ8bwa/T44NXPyyRTvMI2vIbmgAAAlpJREFUWMPtmNuSgyAMhguEcBR9/6ddRXfbWgJBudmZ5qozdT4ghz+Bx+NrX7thTpu7iMkdP/SyLEa7O6wVYaw6WJvp8yJ88zsBJCzLC00JfGL5h1w+TUtI+cfUCZvNQlsv7GFplpl7YYqG2f5wShKm+mGBYsmLmTZqY6TX9LUiiOM2tuZaGhPKt5p6y7Hr1f55UH9DO+DEirdUzYyI5K/GpkEOe/jzIRO4cd7f1DJcQQUcpxmOVqDuzVWkcTU3oCqfJgayehzXZvFL4dNf5jJNFA4FiGAunHSiPDT1RyGQLWTql6NS3htHpLHqbpZJ7A189iKe/Ia9DjOvy8+WH9JSB1HV1XzXIbdAqjz1BBc+ZZyeYQrNKG0fIxz5ByKxZ4VCJCFnS6QScLXAlzCZt2QrCoecRsSFlcdIR62rdsdQMORubM8MqatCPrFC+RctVYUhf7Sb2i3G8+dh14RphiSeVLDS/FRj3HmrmXwOFbnNqjgknmsmAO+cntfYiM2lmeuyt94hOfGMbZh3dGoLVpa9wEReXzBaMrRhU1bCwIgAtmEua1c57NC7M5f9XL7U4gWYYu1MUwFI8OffKa9f9hlwMgMfXpqdJbJ+CIb/XaXo5rDLmaXTLLJuvZ4neo6j2YuxgXNtD9zpGqM4vp2oZDT8h4fDJQH507Jslyb/aaKmjrYyHZTnKvrjJWHt/zTzpuxnFBANu9Ex7ku9Nx+XxrHWBJGdKFOd3r3uYcnW60uwyEWxLrFeSGy5D2zHfVh5Z6MGQLPZKe2kuPi6tIvKagigZbTO3wF97b/YDz2OsAtFYzrVAAAAAElFTkSuQmCC"

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/join.5ed669f.png";

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cart.9c684c5.png";

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABECAMAAAAhiEISAAAANlBMVEVHcEz/tA36tgb6tgb6tgb7tgb7tAf7tAX6tQb7tgb6tgb6tQb5tAf7tgb7tAX6tQb6tQb6tQcFHo/gAAAAEXRSTlMACYrCWHpJGdSxn+Imajb47daZSSMAAAIUSURBVFjD7VjZkoQgDBwu5VT4/59dd2pWIUBA5GW3th+nrGjS6U4yr9c/fivWueEWvQtmmJsTljgWPvB6exzOUhNiqOVZripkkGI081XIUMQ+lPmm91AH4+ReOK5CA+ZG5laY0IFdL71NF3rBHGk2nQy34KlFm86H+6i25qLCIGRBlETI8ACZKFcTnoLxOKAOEyDdFVCGKbg+Us0JKK8a+skBD2sxEwK6pHH407y9yCyLPsi8rOvVDfKNjIYBBRrUIfLB1JRI270JZ6MiHpwp7QnIGRO2c+qdRHDE999DIqMKac2MiJXH8dlpGKTLxDMiNn08J9eC22RDojBmMiJ+ONTnLw5t0mQQZgM5qrW5fhUeZc9WiUhepuqZwf3lbUaFciT9aiwqOvAxnOaEmXQ5IS3RGWG7V71aU0LRVfYX4Eqebv2iK/gc8E3ZXL6B6IAoYK4VJ9w2THSq711R6VTWfGleS2c1fkBLzZdU/igUytfRkvEyIiuqj+u1I7l+PIRnblN61DTN5nztNeg3hDjYmrAwEU3R5mDTcgNfXHTNN1KaBNJ8wAj2ksDgt9Mb8vw+NTxa3XJLgofi/IhdkZfXhzOwuPJdt+Lm2Th9VDaQqL97nkLFRr4Itz5sOGMElc/A1paEZPYWLiTC3bxx09oz0eXlg7cpOm3uX8/dRNRXs6GNECWofyB1Yp/wpw1odUXt60/gC/E2lE+18cYaAAAAAElFTkSuQmCC"

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABEBAMAAADZ6s51AAAAMFBMVEVHcEz6tQb6swn8swT7tgb6twf6tQb6tQb7tAb6tQb6tQb7tgb6tgf6tgb/tQ76tQfaGCZ8AAAAD3RSTlMA5isXqF/wU0C/1W+CmAxtWunpAAABxUlEQVRIx+2WPUwCMRTHG84PQCTBuDiJTi4GZhcxxlkWAokkJjoRB1jMjbA4GtkcgckRJ+NCYHfgJhcHmUycDCiGO4dnv67cVaRdJf6H67X9vbb32nuvCM2aonsxLCUWAqKYpH0Z24VJ+pCxxETsUw/rzyD2psKM8wxWV4Xdwe8aY/OghSX0sJoWFgQtLAxwkMkcFRXYMTikUGFFGBHfKbAIQF0Dw2e7ooE9g43UWABgoIHh3y6lgV0BxDWwJv8Tp2P4dLxrYHinLA0MLy2pgXVhKPZsCnYIo02qLQWm0D82BSs8tZpq7Axva9A3buHBtRtjNt38RQ9F7WoSVkVG/p4eFjdlULslP9ZH0UeAG89wKRTI57idwEZoh9Qt8dUOMvDrNYt7AqsiutovkbQGaIMUHRrRGNYGKLFFQDLkzhldJ8WQzspy1ivuDrPeToRjFf7SIx02O9sXWXeyqpE1zTLpXmANt8v4sSKCKvdEnXrPNHNuME4Ru54couuiocyH96eXF9db0vASNsdaS3I6t/xYgDtVuhzQ6OhVmzSejOssBdhy7iP+deKeBprlTn9cQbYba2lvnfjXSapvOJeN1fRfuIl9AzXYZ/XJp6NZAAAAAElFTkSuQmCC"

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/team.cf889fc.png";

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAyCAMAAADWQ11hAAAAP1BMVEVHcEwTuQ8Q0AoXtxIcpBcWuhEQ0AoWuxEVvBEZshMWuxEZrxQSyQwaqxYTxQ0UwA4YshMZtBMbqBYRzQsbpBdtwP6bAAAACnRSTlMAHdn/5LjpkXVAexuQXgAAAhRJREFUSMftVu2CgiAQvFQOBAQ2eP9nvWXl0/TM6v7daLEfMGVOI19f/7iC2ywE54wNwzfCe4/vwzAwxrkQ8+2cYBacxXW/45txMR9TMO2fh2Y7VDc+aK8beKSscal1M/TA+ysUxhhrMmq0i7ZtRcPC7cswvNLId1Bp7HgVUCJbabx14NIZkRKIZy6kEVKce9Y3NF5Lp64DJN7PlgZhpFuuwElD6ypN0YKRo1vuZ1jcKE1Z09H4qjJtrBzxwhV+JC4KIayL8SJglNa0AsRXQ5NbKCitjd4Ai9TIqS6TTPdtqir1rm71USNij+YFNPLr5F1H81Bc4zazBzRX8XGaD/01P0QzvoN9Gjg3BziggQQHG7SF5ByQXYSsAqNK03mKS20oVViNhpZWT1r9BqCnUWtXxaDEGRRFh+ka61Bp1DtoadAF0BdSowsWOihTZcilGFaaja/hd4d4N3p90D0CcqEOW5p7dEYYzwWHdOiR8YhnpUnWCHEKHvKUKs6BZLcNTbirrdTwqkBCCkhxUI4ChSsrTVBpAqzvI+Q8F2tnLBmlS2h+G3gdzU+sSHXo/NH8FSkNYoIvR1FsrFVqrtJLWbOjKFpaWnXU4qbQZAtv9zcPz0T15LNT9LstMZFy7ksesi6Wcm4SPCdx29v7hfqADYeP3tQJ7Jdt5MzZFM4wMT7Pz+yLZ9oXT4S4jkD74vmZffE//gA/Wix0AOUv8dwAAAAASUVORK5CYII="

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABkBAMAAADJZFuKAAAAKlBMVEVHcEwWuxEWuRAcpBcQ0AkWuxERzQsWuhEYtBIaqxUSxwwUwQ4ZsBQbphcHGO2LAAAABnRSTlMAhizMvF1/+/H8AAADP0lEQVRIx+2WrW7dMBTHb/cE68fQSDdpD1BdNFipaGx9goEpICVljpSBMbtqwOAsJdJAFeBLWpQqIYWxFLCpyCDv0vNhpzf35natVA1M/Ts59vH5+ZDYx5nNXjSbvfqwvXf0KQJ9vTg6fPN+HfhM0WXFh8cjYq+MpnSxMyDvamNiY8oyBpUGHvahu9pnZKtZLEyzMPVikKnRAWOumHnbrKm6H74mRjyoU2KuEwkSUiaJUNDJRIpEJBKnVXJJzIlCtSpD0yroswwNTZ9/ISY6yTrb4bOu88gzUXytJ/WzjgYGqOqsX5GTNUbuGcQWibKaorqVqfHTI2aD/gOmjGAHRTFYGEblMhOTytJEJiopjqb0k8yUJMgAEO9DlEEG0F/EwMbknRlDKw1v1jgm13gG1uA6tJwHIUqHZMhzv8cNpQpj1BIzoZjYh5nH5CHVzNBxogPFA5Y/Z4vAjGKGgdAx09Q1Hra64TPaMAseTfDZAcJHiWywhzguBY+Z4djSWkQwBfa4YIWZ1DMzKapqhreBB3t0U2YqrjhpeKuKDVEVM+QLwQEhGgHJqhRSCZy8HGoUJPVdKhAEK3gp16iUAZghrqIFFfY4Ol2rddW40A15NlXCdKkePqZmCiGngnKZgXIqJ5SwfB4osUIoXAclN8EUChqUYwUT34lR4CuVJFBppWIJcHEOIswgEYIYkzIMcTrkCXE1oRVG/QMGrhCVdRlcKFkLpoWuo0sFBp7h2wPmu67tMhhhowfHNwODfte2Hg+3Dgzam6U8m/QUxnZ5nuMll9NFRyanxwbGIoQNHqs7C+osrLK5zu0PYsZ3n+UupxcaM7nGRdqizcmBmNWWED2VZ1XPzhTQdIGvds5p7bQryGrnGeeFFLEFIs5Rz0yv+wJa76j1/PIArvLfzCACaRjCaOF6HoANjBdlo55fSrvCTOrJjMtbFQ6+Ul2xznRyrQR1dsS003Xlmx0Y5wsFlBP8E8PKICQXk8wzbupYhQpxxky7EkY/Q0OHLezn9q97Pn/wXPA33dLrOzoPzh//37v10YX9gJuj1442CdqD/eH/eXf4qiPd7oz/w+erH+r24Hjqf353TuTtfL498T//og26A3UOGkA/sdmmAAAAAElFTkSuQmCC"

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/agent_long.45dc2d1.png";

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_seek_agent2_vue_vue_type_style_index_0_id_37767296_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(104);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_seek_agent2_vue_vue_type_style_index_0_id_37767296_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_seek_agent2_vue_vue_type_style_index_0_id_37767296_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_seek_agent2_vue_vue_type_style_index_0_id_37767296_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_seek_agent2_vue_vue_type_style_index_0_id_37767296_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(48);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(60);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-37767296]{box-sizing:border-box}#cnzz_stat_icon_1278659783[data-v-37767296]{    display:none}image[data-v-37767296]{vertical-align:middle}.banner[data-v-37767296]{width:100%}.main[data-v-37767296]{text-align:left;position:relative;margin-top:-50px;box-sizing:border-box;padding:0 15px 35px;background-color:#f5f5f5;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");box-shadow:0 -5px 16px #23a61e}.main .main-item[data-v-37767296]{padding:26px 15px;margin-bottom:15px;background:#fff;box-shadow:0 3px 5px 0 rgba(2,66,1,.26);border-radius:20px}.main .main-item .title[data-v-37767296]{margin:0 auto 23px;font-size:18px;font-weight:800;position:relative;text-align:center}.main .main-item .title[data-v-37767296]:before{position:absolute;transform:translate(-50%,-30%);content:\"\";width:20px;height:20px;border-radius:50%;background-color:rgba(243,177,24,.35)}.main .main-item .title[data-v-37767296]:after{position:absolute;transform:translate(-35%,70%);content:\"\";width:15px;height:15px;border-radius:50%;background-color:rgba(243,177,24,.6)}.pattern .video[data-v-37767296]{width:100%;height:auto;border-radius:4px}.pattern .selftInfo[data-v-37767296]{margin-top:25px;font-family:PingFang SC}.goodDot p[data-v-37767296],.pattern .selftInfo[data-v-37767296]{font-size:14px;color:#272725;line-height:24px}.goodDot p[data-v-37767296]{margin-bottom:12px}.condition[data-v-37767296]{padding:5px}.condition>div[data-v-37767296]{font-size:14px;color:#272725;line-height:24px;display:flex;align-items:flex-start;margin-bottom:15px}.condition>div[data-v-37767296]:last-child{margin-bottom:8px}.condition>div img[data-v-37767296]{width:20px;height:auto;margin-right:12px}.earnings[data-v-37767296]{font-size:14px;color:#272725;line-height:24px}.earnings .columMap[data-v-37767296]{display:flex;align-items:flex-end;justify-content:space-around;padding:0 20px;margin-bottom:18px}.earnings .columMap div[data-v-37767296]{display:flex;flex-direction:column;align-items:center}.earnings .columMap div img[data-v-37767296]{width:35px;height:auto;margin:5px auto}.earnings .annotation[data-v-37767296]{margin-top:24px;color:#24a520;text-align:center}.form[data-v-37767296]{padding:0 15px;color:#24a520;font-size:14px;line-height:24px}.form .form-item[data-v-37767296]{margin-bottom:10px;margin-top:10px}.form .form-item input[data-v-37767296]{margin-top:5px;width:100%;outline:none;border:none;line-height:35px;background-color:#eee;border-radius:5px;padding-left:10px}.form .form-item .select-item[data-v-37767296]{display:flex;align-items:center;margin-top:10px;margin-bottom:15px}.form .form-item .select-item .select[data-v-37767296]{min-width:120px;text-align:center;color:#272725;line-height:40px;height:40px;flex:auto}.form .form-item .select-item span[data-v-37767296]{width:20%;margin-left:17px}.form .commit[data-v-37767296]{border:none;outline:none;background-color:#24a520;color:#fff;text-align:center;line-height:40px;border-radius:20px;width:90%;margin:6px 5%;font-size:16px}.site[data-v-37767296]{font-size:14px;color:#272725;line-height:24px}.site .mapContainer[data-v-37767296]{width:100%;height:175px;margin-bottom:26px}.site p[data-v-37767296]{margin-bottom:5px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/seek_agent2.vue?vue&type=template&id=37767296&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"root"},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(211)))+" alt=\"零售新分口 创业新机遇\" class=\"banner\" data-v-37767296> "),_vm._ssrNode("<div class=\"main\" data-v-37767296>","</div>",[_vm._ssrNode("<div class=\"main-item\" data-v-37767296><h3 class=\"title\" data-v-37767296>业务模式</h3> <div class=\"content pattern\" data-v-37767296><video controls=\"controls\" preload=\"auto\" x5-video-player-type=\"true\" webkit-playsinline=\"yes\""+(_vm._ssrAttr("poster",__webpack_require__(52)))+(_vm._ssrAttr("src",__webpack_require__(51)))+" class=\"video\" data-v-37767296></video> <p class=\"selftInfo\" data-v-37767296>蜂乐购优选区域会员制社交电商平台，以县-镇-村代理模式，将城市工业品配送到各乡镇居民处，让乡镇用户购物更加便捷、实惠；另一方面，将各乡镇优质农产品、本地特产等，集中汇总到平台进行售卖，让城市用户能买到纯正的本地农特产品。从根本上促进本地城乡产品的流通，让城乡用户都能享受到平台所带来的便利，同时也能让合伙人得到更多的收益，互利共赢。</p></div></div> <div class=\"main-item\" data-v-37767296><h3 class=\"title\" data-v-37767296>加盟优势</h3> <div class=\"content goodDot\" data-v-37767296><p data-v-37767296>1、振兴乡村经济，促进城乡商品流通</p> <p data-v-37767296>2、以用户为中心精准定位，精准引流</p> <p data-v-37767296>3、以村、镇、社区为基点服务站，降低物流成本(市内)</p> <p data-v-37767296>4、经营灵活，多渠道开花（全国）</p> <p data-v-37767296>5、平台+商户模式,商品基数大、涵盖宽、真正多快好省</p> <p data-v-37767296>6、分区保护，小投入、大保障</p> <p data-v-37767296>7、技术赋能，快速发展</p> <p data-v-37767296>8、应国策，顺民心，把握趋势，一飞冲天</p></div></div> <div class=\"main-item\" data-v-37767296><h3 class=\"title\" data-v-37767296>加盟条件</h3> <div class=\"content condition\" data-v-37767296><div data-v-37767296><img"+(_vm._ssrAttr("src",__webpack_require__(212)))+" alt=\"资金\" srcset data-v-37767296> 0元加盟，超大福利\n        </div> <div data-v-37767296><img"+(_vm._ssrAttr("src",__webpack_require__(213)))+" alt=\"资金\" srcset data-v-37767296> 有实体店或者零售业从业经验者\n        </div> <div data-v-37767296><img"+(_vm._ssrAttr("src",__webpack_require__(214)))+" alt=\"资金\" srcset data-v-37767296> 有互联网从业经验\n        </div> <div data-v-37767296><img"+(_vm._ssrAttr("src",__webpack_require__(215)))+" alt=\"资金\" srcset data-v-37767296> 具备一定管理经验、商务和经营管理能力\n        </div> <div data-v-37767296><img"+(_vm._ssrAttr("src",__webpack_require__(216)))+" alt=\"资金\" srcset data-v-37767296> 有物流从业经验或者愿意努力创业者\n        </div> <div data-v-37767296><img"+(_vm._ssrAttr("src",__webpack_require__(217)))+" alt=\"资金\" srcset data-v-37767296> 县、镇级的合伙人要有（注册）独立的贸易公司\n        </div></div></div> <div class=\"main-item\" data-v-37767296><h3 class=\"title\" data-v-37767296>预计收益</h3> <div class=\"content earnings\" data-v-37767296><div class=\"columMap\" data-v-37767296><div data-v-37767296><div data-v-37767296>6.8万/年</div> <img"+(_vm._ssrAttr("src",__webpack_require__(218)))+" alt srcset data-v-37767296> <div data-v-37767296>行政村</div></div> <div data-v-37767296><div data-v-37767296>47万/年</div> <img"+(_vm._ssrAttr("src",__webpack_require__(219)))+" alt srcset data-v-37767296> <div data-v-37767296>镇公司</div></div> <div data-v-37767296><div data-v-37767296>600万/年</div> <img"+(_vm._ssrAttr("src",__webpack_require__(220)))+" alt srcset data-v-37767296> <div data-v-37767296>县公司</div></div></div> <p data-v-37767296>优秀县级代理公司，可直接享有分公司决策权，更有机会获得总公司市场发展的百万红利。</p> <p class=\"annotation\" data-v-37767296>注：具体收益明细可报名及电话咨询招商负责人</p></div></div> "),_vm._ssrNode("<div class=\"main-item\" data-v-37767296>","</div>",[_vm._ssrNode("<h3 class=\"title\" data-v-37767296>立即报名</h3> "),_vm._ssrNode("<div class=\"content form\" data-v-37767296>","</div>",[_vm._ssrNode("<div class=\"form-item\" data-v-37767296><div class=\"laber\" data-v-37767296>*姓名</div> <input type=\"text\" name=\"userName\" placeholder=\"请输入姓名\""+(_vm._ssrAttr("value",(_vm.username)))+" data-v-37767296></div> <div class=\"form-item\" data-v-37767296><div class=\"laber\" data-v-37767296>*手机号码</div> <input type=\"tel\" name=\"userName\" placeholder=\"请输入手机号码\""+(_vm._ssrAttr("value",(_vm.userTel)))+" data-v-37767296></div> <div class=\"form-item\" data-v-37767296><div class=\"laber\" data-v-37767296>公司名称</div> <input type=\"text\" name=\"userName\" placeholder=\"请输入公司名称\""+(_vm._ssrAttr("value",(_vm.firmName)))+" data-v-37767296></div> "),_vm._ssrNode("<div class=\"form-item\" data-v-37767296>","</div>",[_vm._ssrNode("<div class=\"laber\" data-v-37767296>*意向代理城市</div> "),_vm._ssrNode("<div class=\"select-item\" data-v-37767296>","</div>",[_c('DropDownList',{staticClass:"select",attrs:{"dataList":_vm.provincesList,"align":"left","placeholder":"请选择省"},on:{"change":_vm.onProvincesChange}}),_vm._ssrNode(" <span data-v-37767296>省</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"select-item\" data-v-37767296>","</div>",[_c('DropDownList',{staticClass:"select",attrs:{"disabled":_vm.cityList.length == 0,"dataList":_vm.cityList,"align":"left","placeholder":"请选择市"},on:{"change":_vm.onCityChange}}),_vm._ssrNode(" <span data-v-37767296>市</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"select-item\" data-v-37767296>","</div>",[_c('DropDownList',{staticClass:"select",attrs:{"disabled":_vm.countyList.length == 0,"dataList":_vm.countyList,"align":"left","placeholder":"请选择区/县"},on:{"change":_vm.onCountyChange}}),_vm._ssrNode(" <span data-v-37767296>区/县</span>")],2)],2),_vm._ssrNode(" <div class=\"form-item\" data-v-37767296><div class=\"laber\" data-v-37767296>*详细地址</div> <input type=\"textarea\" name=\"userName\" placeholder=\"请输入详细地址\""+(_vm._ssrAttr("value",(_vm.siteDetail)))+" data-v-37767296> <div style=\"font-size: 12px\" data-v-37767296>注：加*为必填项</div></div> <button class=\"commit\" data-v-37767296>立即提交</button>")],2)],2),_vm._ssrNode(" <div class=\"main-item\" data-v-37767296><h3 class=\"title\" data-v-37767296>公司地址</h3> <div class=\"content site\" data-v-37767296><div id=\"mapContainer\" class=\"mapContainer\" data-v-37767296></div> <p data-v-37767296>公司地址：长沙高新开发区文轩路27号麓谷钰园F2栋20层2012号房</p> <p data-v-37767296>\n          招募热线：\n          <a href=\"tel:13487773477\" data-v-37767296>13487773477</a></p> <p data-v-37767296>招募联系人：钟先生</p></div></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/seek_agent2.vue?vue&type=template&id=37767296&scoped=true&

// EXTERNAL MODULE: ./api/agent.js
var agent = __webpack_require__(49);

// EXTERNAL MODULE: ./api/base.js
var base = __webpack_require__(12);

// EXTERNAL MODULE: ./utils/city_code.js
var city_code = __webpack_require__(57);

// EXTERNAL MODULE: ./components/mg_select.vue + 4 modules
var mg_select = __webpack_require__(61);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/seek_agent2.vue?vue&type=script&lang=js&
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

/**
 * 注: 此页面只为移动端服务, 在pc模式下会导致页面失去比例
 * 招商h5页
 */




/* harmony default export */ var seek_agent2vue_type_script_lang_js_ = ({
  head: {
    script: [{
      src: "https://webapi.amap.com/maps?v=1.4.5&key=1e83fc87d44ee15162d8b207e44dd4fb"
    }]
  },
  components: {
    DropDownList: mg_select["a" /* default */]
  },

  data() {
    return {
      username: "",
      // 用户姓名
      userTel: "",
      // 联系电话
      firmName: "",
      // 公司名称
      siteDetail: "",
      // 详细地址
      province_code: "",
      // 省 code
      city_code: "",
      // --- 市 code
      district_code: "",
      // 县/区 code
      provincesList: [],
      // 省列表
      cityList: [],
      // --- 市 列表
      countyList: [] // -- 县/区列表

    };
  },

  mounted() {
    // 获取所有的省份
    if (false) {}

    this.getCity().then(res => {
      if (res.code === 1000) {
        this.provincesList = res.data;
      } else {
        alert("网络出现故障!");
      }
    });

    if (false) {}
  },

  methods: {
    commit() {
      if (!this.username) {
        alert("姓名不能为空");
        return;
      }

      if (!this.userTel) {
        alert("手机号码不能为空");
        return;
      }

      if (!this.province_code || !this.city_code || !this.district_code) {
        alert("请填写完整代理城市");
        return;
      }

      Object(agent["a" /* commitAgent */])({
        user_name: this.username,
        // 姓名
        user_tel: this.userTel,
        // 联系电话
        province_code: this.province_code,
        // 省 code
        city_code: this.city_code,
        // -- 市 code
        district_code: this.district_code,
        // 县/区 code
        address_detail: this.siteDetail,
        // 详细地址
        business_name: this.firmName,
        // 公司名称
        code_type: 14,
        // 固定值
        from: "h5" // h5版本的招商提交页

      }).then(res => {
        if (res.data.code === 1000) {
          alert("提交成功,1-3个工作日联系您！");
        } else {
          alert(res.data.message);
        }
      });
    },

    getCity(code = "") {
      return Object(base["d" /* getCity */])({
        code
      }).then(res => res.data);
    },

    onProvincesChange(val) {
      let code = val.value.code; // 改变省的时候, 重置市的code码以及队列

      if (this.province_code != code) {
        this.city_code = "";
        this.district_code = "";
        this.cityList = [];
        this.countyList = [];
      }

      this.province_code = code;
      this.getCity(code).then(res => {
        if (res.code === 1000) {
          this.cityList = res.data;
        } else {
          alert("网络出现故障!");
        }
      });
    },

    onCityChange(val) {
      let code = val.value.code; // 改变市的时候, 重置县/区的code码

      if (this.city_code != code) {
        this.district_code = "";
        this.countyList = [];
      }

      this.city_code = code;
      this.getCity(code).then(res => {
        if (res.code === 1000) {
          this.countyList = res.data;
        } else {
          alert("网络出现故障!");
        }
      });
    },

    onCountyChange(val) {
      let code = val.value.code;
      this.district_code = code;
    },

    getMap() {
      // AMap是高德地图的构造函数，这里.Map是创建地图，.Marker是创建坐标点   28.2076936875,112.8821611404
      let mapObj = new AMap.Map("mapContainer", {
        //'container'是对应页面盒子的id
        resizeEnable: true,
        //自适应大小
        zoom: 17,
        //初始视窗
        center: [112.8821611404, 28.2076936875] //中心点

      });
      new AMap.Marker({
        map: mapObj,
        position: new AMap.LngLat("112.8821611404", "28.2076936875") //此处根据页面数据可以直接传入经纬度进行描点

      });
    }

  }
});
// CONCATENATED MODULE: ./pages/seek_agent2.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_seek_agent2vue_type_script_lang_js_ = (seek_agent2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/seek_agent2.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(221)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_seek_agent2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "37767296",
  "019b4a94"
  
)

/* harmony default export */ var seek_agent2 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return commitAgent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getProgressList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getProgressDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return recruitshare; });
/* harmony import */ var _requestH5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);

 // 提交申请代理商

const commitAgent = val => Object(_requestH5__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('/home/partner/add', val, 'post'); // 获取扶农进展列表

const getProgressList = val => Object(_requestH5__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('/home/article/helping_agriculture_list', val, 'get'); // 获取扶农进展详情

const getProgressDetail = val => Object(_requestH5__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('/home/article/helping_agriculture_detail', val, 'get');
const recruitshare = val => Object(_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('/company/recruit/share', val, 'post');

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("48dd12a8", content, true, context)
};

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "videos/showVideo.6ca3800.mp4";

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/video_default.228f8b2.jpg";

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = ({
  "provinces": [{
    "name": "北京市",
    "level": "1",
    "code": "1100",
    "cities": [{
      "name": "北京市",
      "level": "1",
      "code": "1100"
    }]
  }, {
    "name": "天津市",
    "level": "1",
    "code": "1200",
    "cities": [{
      "name": "天津市",
      "level": "1",
      "code": "1200"
    }]
  }, {
    "name": "河北省",
    "level": "1",
    "code": "1300",
    "cities": [{
      "name": "石家庄市",
      "level": "2",
      "code": "1301"
    }, {
      "name": "唐山市",
      "level": "3",
      "code": "1302"
    }, {
      "name": "秦皇岛市",
      "level": "3",
      "code": "1303"
    }, {
      "name": "邯郸市",
      "level": "3",
      "code": "1304"
    }, {
      "name": "邢台市",
      "level": "3",
      "code": "1305"
    }, {
      "name": "保定市",
      "level": "3",
      "code": "1306"
    }, {
      "name": "张家口市",
      "level": "3",
      "code": "1307"
    }, {
      "name": "承德市",
      "level": "3",
      "code": "1308"
    }, {
      "name": "沧州市",
      "level": "3",
      "code": "1309"
    }, {
      "name": "廊坊市",
      "level": "3",
      "code": "1310"
    }, {
      "name": "衡水市",
      "level": "3",
      "code": "1311"
    }]
  }, {
    "name": "山西省",
    "level": "1",
    "code": "1400",
    "cities": [{
      "name": "太原市",
      "level": "2",
      "code": "1401"
    }, {
      "name": "大同市",
      "level": "3",
      "code": "1402"
    }, {
      "name": "阳泉市",
      "level": "3",
      "code": "1403"
    }, {
      "name": "长治市",
      "level": "3",
      "code": "1404"
    }, {
      "name": "晋城市",
      "level": "3",
      "code": "1405"
    }, {
      "name": "朔州市",
      "level": "3",
      "code": "1406"
    }, {
      "name": "晋中市",
      "level": "3",
      "code": "1407"
    }, {
      "name": "运城市",
      "level": "3",
      "code": "1408"
    }, {
      "name": "忻州市",
      "level": "3",
      "code": "1409"
    }, {
      "name": "临汾市",
      "level": "3",
      "code": "1410"
    }, {
      "name": "吕梁市",
      "level": "3",
      "code": "1411"
    }]
  }, {
    "name": "内蒙古自治区",
    "level": "1",
    "code": "1500",
    "cities": [{
      "name": "呼和浩特市",
      "level": "2",
      "code": "1501"
    }, {
      "name": "包头市",
      "level": "3",
      "code": "1502"
    }, {
      "name": "乌海市",
      "level": "3",
      "code": "1503"
    }, {
      "name": "赤峰市",
      "level": "3",
      "code": "1504"
    }, {
      "name": "通辽市",
      "level": "3",
      "code": "1505"
    }, {
      "name": "鄂尔多斯市",
      "level": "3",
      "code": "1506"
    }, {
      "name": "呼伦贝尔市",
      "level": "3",
      "code": "1507"
    }, {
      "name": "巴彦淖尔市",
      "level": "3",
      "code": "1508"
    }, {
      "name": "乌兰察布市",
      "level": "3",
      "code": "1509"
    }, {
      "name": "兴安盟",
      "level": "3",
      "code": "1522"
    }, {
      "name": "锡林郭勒盟",
      "level": "3",
      "code": "1525"
    }, {
      "name": "阿拉善盟",
      "level": "3",
      "code": "1529"
    }]
  }, {
    "name": "辽宁省",
    "level": "1",
    "code": "2100",
    "cities": [{
      "name": "沈阳市",
      "level": "2",
      "code": "2101"
    }, {
      "name": "大连市",
      "level": "3",
      "code": "2102"
    }, {
      "name": "鞍山市",
      "level": "3",
      "code": "2103"
    }, {
      "name": "抚顺市",
      "level": "3",
      "code": "2104"
    }, {
      "name": "本溪市",
      "level": "3",
      "code": "2105"
    }, {
      "name": "丹东市",
      "level": "3",
      "code": "2106"
    }, {
      "name": "锦州市",
      "level": "3",
      "code": "2107"
    }, {
      "name": "营口市",
      "level": "3",
      "code": "2108"
    }, {
      "name": "阜新市",
      "level": "3",
      "code": "2109"
    }, {
      "name": "辽阳市",
      "level": "3",
      "code": "2110"
    }, {
      "name": "盘锦市",
      "level": "3",
      "code": "2111"
    }, {
      "name": "铁岭市",
      "level": "3",
      "code": "2112"
    }, {
      "name": "朝阳市",
      "level": "3",
      "code": "2113"
    }, {
      "name": "葫芦岛市",
      "level": "3",
      "code": "2114"
    }]
  }, {
    "name": "吉林省",
    "level": "1",
    "code": "2200",
    "cities": [{
      "name": "长春市",
      "level": "2",
      "code": "2201"
    }, {
      "name": "吉林市",
      "level": "3",
      "code": "2202"
    }, {
      "name": "四平市",
      "level": "3",
      "code": "2203"
    }, {
      "name": "辽源市",
      "level": "3",
      "code": "2204"
    }, {
      "name": "通化市",
      "level": "3",
      "code": "2205"
    }, {
      "name": "白山市",
      "level": "3",
      "code": "2206"
    }, {
      "name": "松原市",
      "level": "3",
      "code": "2207"
    }, {
      "name": "白城市",
      "level": "3",
      "code": "2208"
    }, {
      "name": "延边朝鲜族自治州",
      "level": "3",
      "code": "2224"
    }]
  }, {
    "name": "黑龙江省",
    "level": "1",
    "code": "2300",
    "cities": [{
      "name": "哈尔滨市",
      "level": "2",
      "code": "2301"
    }, {
      "name": "齐齐哈尔市",
      "level": "3",
      "code": "2302"
    }, {
      "name": "鸡西市",
      "level": "3",
      "code": "2303"
    }, {
      "name": "鹤岗市",
      "level": "3",
      "code": "2304"
    }, {
      "name": "双鸭山市",
      "level": "3",
      "code": "2305"
    }, {
      "name": "大庆市",
      "level": "3",
      "code": "2306"
    }, {
      "name": "伊春市",
      "level": "3",
      "code": "2307"
    }, {
      "name": "佳木斯市",
      "level": "3",
      "code": "2308"
    }, {
      "name": "七台河市",
      "level": "3",
      "code": "2309"
    }, {
      "name": "牡丹江市",
      "level": "3",
      "code": "2310"
    }, {
      "name": "黑河市",
      "level": "3",
      "code": "2311"
    }, {
      "name": "绥化市",
      "level": "3",
      "code": "2312"
    }, {
      "name": "大兴安岭地区",
      "level": "3",
      "code": "2327"
    }]
  }, {
    "name": "上海市",
    "level": "1",
    "code": "3100",
    "cities": [{
      "name": "上海市",
      "level": "1",
      "code": "3100"
    }]
  }, {
    "name": "江苏省",
    "level": "1",
    "code": "3200",
    "cities": [{
      "name": "南京市",
      "level": "2",
      "code": "3201"
    }, {
      "name": "无锡市",
      "level": "3",
      "code": "3202"
    }, {
      "name": "徐州市",
      "level": "3",
      "code": "3203"
    }, {
      "name": "常州市",
      "level": "3",
      "code": "3204"
    }, {
      "name": "苏州市",
      "level": "3",
      "code": "3205"
    }, {
      "name": "南通市",
      "level": "3",
      "code": "3206"
    }, {
      "name": "连云港市",
      "level": "3",
      "code": "3207"
    }, {
      "name": "淮安市",
      "level": "3",
      "code": "3208"
    }, {
      "name": "盐城市",
      "level": "3",
      "code": "3209"
    }, {
      "name": "扬州市",
      "level": "3",
      "code": "3210"
    }, {
      "name": "镇江市",
      "level": "3",
      "code": "3211"
    }, {
      "name": "泰州市",
      "level": "3",
      "code": "3212"
    }, {
      "name": "宿迁市",
      "level": "3",
      "code": "3213"
    }]
  }, {
    "name": "浙江省",
    "level": "1",
    "code": "3300",
    "cities": [{
      "name": "杭州市",
      "level": "2",
      "code": "3301"
    }, {
      "name": "宁波市",
      "level": "3",
      "code": "3302"
    }, {
      "name": "温州市",
      "level": "3",
      "code": "3303"
    }, {
      "name": "嘉兴市",
      "level": "3",
      "code": "3304"
    }, {
      "name": "湖州市",
      "level": "3",
      "code": "3305"
    }, {
      "name": "绍兴市",
      "level": "3",
      "code": "3306"
    }, {
      "name": "金华市",
      "level": "3",
      "code": "3307"
    }, {
      "name": "衢州市",
      "level": "3",
      "code": "3308"
    }, {
      "name": "舟山市",
      "level": "3",
      "code": "3309"
    }, {
      "name": "台州市",
      "level": "3",
      "code": "3310"
    }, {
      "name": "丽水市",
      "level": "3",
      "code": "3311"
    }]
  }, {
    "name": "安徽省",
    "level": "1",
    "code": "3400",
    "cities": [{
      "name": "合肥市",
      "level": "2",
      "code": "3401"
    }, {
      "name": "芜湖市",
      "level": "3",
      "code": "3402"
    }, {
      "name": "蚌埠市",
      "level": "3",
      "code": "3403"
    }, {
      "name": "淮南市",
      "level": "3",
      "code": "3404"
    }, {
      "name": "马鞍山市",
      "level": "3",
      "code": "3405"
    }, {
      "name": "淮北市",
      "level": "3",
      "code": "3406"
    }, {
      "name": "铜陵市",
      "level": "3",
      "code": "3407"
    }, {
      "name": "安庆市",
      "level": "3",
      "code": "3408"
    }, {
      "name": "黄山市",
      "level": "3",
      "code": "3410"
    }, {
      "name": "滁州市",
      "level": "3",
      "code": "3411"
    }, {
      "name": "阜阳市",
      "level": "3",
      "code": "3412"
    }, {
      "name": "宿州市",
      "level": "3",
      "code": "3413"
    }, {
      "name": "巢湖市",
      "level": "3",
      "code": "3414"
    }, {
      "name": "六安市",
      "level": "3",
      "code": "3415"
    }, {
      "name": "亳州市",
      "level": "3",
      "code": "3416"
    }, {
      "name": "池州市",
      "level": "3",
      "code": "3417"
    }, {
      "name": "宣城市",
      "level": "3",
      "code": "3418"
    }]
  }, {
    "name": "福建省",
    "level": "1",
    "code": "3500",
    "cities": [{
      "name": "福州市",
      "level": "2",
      "code": "3501"
    }, {
      "name": "厦门市",
      "level": "3",
      "code": "3502"
    }, {
      "name": "莆田市",
      "level": "3",
      "code": "3503"
    }, {
      "name": "三明市",
      "level": "3",
      "code": "3504"
    }, {
      "name": "泉州市",
      "level": "3",
      "code": "3505"
    }, {
      "name": "漳州市",
      "level": "3",
      "code": "3506"
    }, {
      "name": "南平市",
      "level": "3",
      "code": "3507"
    }, {
      "name": "龙岩市",
      "level": "3",
      "code": "3508"
    }, {
      "name": "宁德市",
      "level": "3",
      "code": "3509"
    }]
  }, {
    "name": "江西省",
    "level": "1",
    "code": "3600",
    "cities": [{
      "name": "南昌市",
      "level": "2",
      "code": "3601"
    }, {
      "name": "景德镇市",
      "level": "3",
      "code": "3602"
    }, {
      "name": "萍乡市",
      "level": "3",
      "code": "3603"
    }, {
      "name": "九江市",
      "level": "3",
      "code": "3604"
    }, {
      "name": "新余市",
      "level": "3",
      "code": "3605"
    }, {
      "name": "鹰潭市",
      "level": "3",
      "code": "3606"
    }, {
      "name": "赣州市",
      "level": "3",
      "code": "3607"
    }, {
      "name": "吉安市",
      "level": "3",
      "code": "3608"
    }, {
      "name": "宜春市",
      "level": "3",
      "code": "3609"
    }, {
      "name": "抚州市",
      "level": "3",
      "code": "3610"
    }, {
      "name": "上饶市",
      "level": "3",
      "code": "3611"
    }]
  }, {
    "name": "山东省",
    "level": "1",
    "code": "3700",
    "cities": [{
      "name": "济南市",
      "level": "2",
      "code": "3701"
    }, {
      "name": "青岛市",
      "level": "3",
      "code": "3702"
    }, {
      "name": "淄博市",
      "level": "3",
      "code": "3703"
    }, {
      "name": "枣庄市",
      "level": "3",
      "code": "3704"
    }, {
      "name": "东营市",
      "level": "3",
      "code": "3705"
    }, {
      "name": "烟台市",
      "level": "3",
      "code": "3706"
    }, {
      "name": "潍坊市",
      "level": "3",
      "code": "3707"
    }, {
      "name": "济宁市",
      "level": "3",
      "code": "3708"
    }, {
      "name": "泰安市",
      "level": "3",
      "code": "3709"
    }, {
      "name": "威海市",
      "level": "3",
      "code": "3710"
    }, {
      "name": "日照市",
      "level": "3",
      "code": "3711"
    }, {
      "name": "莱芜市",
      "level": "3",
      "code": "3712"
    }, {
      "name": "临沂市",
      "level": "3",
      "code": "3713"
    }, {
      "name": "德州市",
      "level": "3",
      "code": "3714"
    }, {
      "name": "聊城市",
      "level": "3",
      "code": "3715"
    }, {
      "name": "滨州市",
      "level": "3",
      "code": "3716"
    }, {
      "name": "菏泽市",
      "level": "3",
      "code": "3717"
    }]
  }, {
    "name": "河南省",
    "level": "1",
    "code": "4100",
    "cities": [{
      "name": "郑州市",
      "level": "2",
      "code": "4101"
    }, {
      "name": "开封市",
      "level": "3",
      "code": "4102"
    }, {
      "name": "洛阳市",
      "level": "3",
      "code": "4103"
    }, {
      "name": "平顶山市",
      "level": "3",
      "code": "4104"
    }, {
      "name": "安阳市",
      "level": "3",
      "code": "4105"
    }, {
      "name": "鹤壁市",
      "level": "3",
      "code": "4106"
    }, {
      "name": "新乡市",
      "level": "3",
      "code": "4107"
    }, {
      "name": "焦作市",
      "level": "3",
      "code": "4108"
    }, {
      "name": "濮阳市",
      "level": "3",
      "code": "4109"
    }, {
      "name": "许昌市",
      "level": "3",
      "code": "4110"
    }, {
      "name": "漯河市",
      "level": "3",
      "code": "4111"
    }, {
      "name": "三门峡市",
      "level": "3",
      "code": "4112"
    }, {
      "name": "南阳市",
      "level": "3",
      "code": "4113"
    }, {
      "name": "商丘市",
      "level": "3",
      "code": "4114"
    }, {
      "name": "信阳市",
      "level": "3",
      "code": "4115"
    }, {
      "name": "周口市",
      "level": "3",
      "code": "4116"
    }, {
      "name": "驻马店市",
      "level": "3",
      "code": "4117"
    }]
  }, {
    "name": "湖北省",
    "level": "1",
    "code": "4200",
    "cities": [{
      "name": "武汉市",
      "level": "2",
      "code": "4201"
    }, {
      "name": "黄石市",
      "level": "3",
      "code": "4202"
    }, {
      "name": "十堰市",
      "level": "3",
      "code": "4203"
    }, {
      "name": "宜昌市",
      "level": "3",
      "code": "4205"
    }, {
      "name": "襄樊市",
      "level": "3",
      "code": "4206"
    }, {
      "name": "鄂州市",
      "level": "3",
      "code": "4207"
    }, {
      "name": "荆门市",
      "level": "3",
      "code": "4208"
    }, {
      "name": "孝感市",
      "level": "3",
      "code": "4209"
    }, {
      "name": "荆州市",
      "level": "3",
      "code": "4210"
    }, {
      "name": "黄冈市",
      "level": "3",
      "code": "4211"
    }, {
      "name": "咸宁市",
      "level": "3",
      "code": "4212"
    }, {
      "name": "随州市",
      "level": "3",
      "code": "4213"
    }, {
      "name": "恩施土家族苗族自治州",
      "level": "3",
      "code": "4228"
    }]
  }, {
    "name": "湖南省",
    "level": "1",
    "code": "4300",
    "cities": [{
      "name": "长沙市",
      "level": "2",
      "code": "4301"
    }, {
      "name": "株洲市",
      "level": "3",
      "code": "4302"
    }, {
      "name": "湘潭市",
      "level": "3",
      "code": "4303"
    }, {
      "name": "衡阳市",
      "level": "3",
      "code": "4304"
    }, {
      "name": "邵阳市",
      "level": "3",
      "code": "4305"
    }, {
      "name": "岳阳市",
      "level": "3",
      "code": "4306"
    }, {
      "name": "常德市",
      "level": "3",
      "code": "4307"
    }, {
      "name": "张家界市",
      "level": "3",
      "code": "4308"
    }, {
      "name": "益阳市",
      "level": "3",
      "code": "4309"
    }, {
      "name": "郴州市",
      "level": "3",
      "code": "4310"
    }, {
      "name": "永州市",
      "level": "3",
      "code": "4311"
    }, {
      "name": "怀化市",
      "level": "3",
      "code": "4312"
    }, {
      "name": "娄底市",
      "level": "3",
      "code": "4313"
    }, {
      "name": "湘西土家族苗族自治州",
      "level": "3",
      "code": "4331"
    }]
  }, {
    "name": "广东省",
    "level": "1",
    "code": "4400",
    "cities": [{
      "name": "广州市",
      "level": "2",
      "code": "4401"
    }, {
      "name": "韶关市",
      "level": "3",
      "code": "4402"
    }, {
      "name": "深圳市",
      "level": "3",
      "code": "4403"
    }, {
      "name": "珠海市",
      "level": "3",
      "code": "4404"
    }, {
      "name": "汕头市",
      "level": "3",
      "code": "4405"
    }, {
      "name": "佛山市",
      "level": "3",
      "code": "4406"
    }, {
      "name": "江门市",
      "level": "3",
      "code": "4407"
    }, {
      "name": "湛江市",
      "level": "3",
      "code": "4408"
    }, {
      "name": "茂名市",
      "level": "3",
      "code": "4409"
    }, {
      "name": "肇庆市",
      "level": "3",
      "code": "4412"
    }, {
      "name": "惠州市",
      "level": "3",
      "code": "4413"
    }, {
      "name": "梅州市",
      "level": "3",
      "code": "4414"
    }, {
      "name": "汕尾市",
      "level": "3",
      "code": "4415"
    }, {
      "name": "河源市",
      "level": "3",
      "code": "4416"
    }, {
      "name": "阳江市",
      "level": "3",
      "code": "4417"
    }, {
      "name": "清远市",
      "level": "3",
      "code": "4418"
    }, {
      "name": "东莞市",
      "level": "3",
      "code": "4419"
    }, {
      "name": "中山市",
      "level": "3",
      "code": "4420"
    }, {
      "name": "潮州市",
      "level": "3",
      "code": "4451"
    }, {
      "name": "揭阳市",
      "level": "3",
      "code": "4452"
    }, {
      "name": "云浮市",
      "level": "3",
      "code": "4453"
    }]
  }, {
    "name": "广西壮族自治区",
    "level": "1",
    "code": "4500",
    "cities": [{
      "name": "南宁市",
      "level": "2",
      "code": "4501"
    }, {
      "name": "柳州市",
      "level": "3",
      "code": "4502"
    }, {
      "name": "桂林市",
      "level": "3",
      "code": "4503"
    }, {
      "name": "梧州市",
      "level": "3",
      "code": "4504"
    }, {
      "name": "北海市",
      "level": "3",
      "code": "4505"
    }, {
      "name": "防城港市",
      "level": "3",
      "code": "4506"
    }, {
      "name": "钦州市",
      "level": "3",
      "code": "4507"
    }, {
      "name": "贵港市",
      "level": "3",
      "code": "4508"
    }, {
      "name": "玉林市",
      "level": "3",
      "code": "4509"
    }, {
      "name": "百色市",
      "level": "3",
      "code": "4510"
    }, {
      "name": "贺州市",
      "level": "3",
      "code": "4511"
    }, {
      "name": "河池市",
      "level": "3",
      "code": "4512"
    }, {
      "name": "来宾市",
      "level": "3",
      "code": "4513"
    }, {
      "name": "崇左市",
      "level": "3",
      "code": "4514"
    }]
  }, {
    "name": "海南省",
    "level": "1",
    "code": "4600",
    "cities": [{
      "name": "海口市",
      "level": "2",
      "code": "4601"
    }, {
      "name": "三亚市",
      "level": "3",
      "code": "4602"
    }]
  }, {
    "name": "重庆市",
    "level": "1",
    "code": "5000",
    "cities": [{
      "name": "重庆市",
      "level": "1",
      "code": "5000"
    }]
  }, {
    "name": "四川省",
    "level": "1",
    "code": "5100",
    "cities": [{
      "name": "成都市",
      "level": "2",
      "code": "5101"
    }, {
      "name": "自贡市",
      "level": "3",
      "code": "5103"
    }, {
      "name": "攀枝花市",
      "level": "3",
      "code": "5104"
    }, {
      "name": "泸州市",
      "level": "3",
      "code": "5105"
    }, {
      "name": "德阳市",
      "level": "3",
      "code": "5106"
    }, {
      "name": "绵阳市",
      "level": "3",
      "code": "5107"
    }, {
      "name": "广元市",
      "level": "3",
      "code": "5108"
    }, {
      "name": "遂宁市",
      "level": "3",
      "code": "5109"
    }, {
      "name": "内江市",
      "level": "3",
      "code": "5110"
    }, {
      "name": "乐山市",
      "level": "3",
      "code": "5111"
    }, {
      "name": "南充市",
      "level": "3",
      "code": "5113"
    }, {
      "name": "眉山市",
      "level": "3",
      "code": "5114"
    }, {
      "name": "宜宾市",
      "level": "3",
      "code": "5115"
    }, {
      "name": "广安市",
      "level": "3",
      "code": "5116"
    }, {
      "name": "达州市",
      "level": "3",
      "code": "5117"
    }, {
      "name": "雅安市",
      "level": "3",
      "code": "5118"
    }, {
      "name": "巴中市",
      "level": "3",
      "code": "5119"
    }, {
      "name": "资阳市",
      "level": "3",
      "code": "5120"
    }, {
      "name": "阿坝藏族羌族自治州",
      "level": "3",
      "code": "5132"
    }, {
      "name": "甘孜藏族自治州",
      "level": "3",
      "code": "5133"
    }, {
      "name": "凉山彝族自治州",
      "level": "3",
      "code": "5134"
    }]
  }, {
    "name": "贵州省",
    "level": "1",
    "code": "5200",
    "cities": [{
      "name": "贵阳市",
      "level": "2",
      "code": "5201"
    }, {
      "name": "六盘水市",
      "level": "3",
      "code": "5202"
    }, {
      "name": "遵义市",
      "level": "3",
      "code": "5203"
    }, {
      "name": "安顺市",
      "level": "3",
      "code": "5204"
    }, {
      "name": "铜仁地区",
      "level": "3",
      "code": "5222"
    }, {
      "name": "黔西南布依族苗族自治州",
      "level": "3",
      "code": "5223"
    }, {
      "name": "毕节地区",
      "level": "3",
      "code": "5224"
    }, {
      "name": "黔东南苗族侗族自治州",
      "level": "3",
      "code": "5226"
    }, {
      "name": "黔南布依族苗族自治州",
      "level": "3",
      "code": "5227"
    }]
  }, {
    "name": "云南省",
    "level": "1",
    "code": "5300",
    "cities": [{
      "name": "昆明市",
      "level": "2",
      "code": "5301"
    }, {
      "name": "曲靖市",
      "level": "3",
      "code": "5303"
    }, {
      "name": "玉溪市",
      "level": "3",
      "code": "5304"
    }, {
      "name": "保山市",
      "level": "3",
      "code": "5305"
    }, {
      "name": "昭通市",
      "level": "3",
      "code": "5306"
    }, {
      "name": "丽江市",
      "level": "3",
      "code": "5307"
    }, {
      "name": "普洱市",
      "level": "3",
      "code": "5308"
    }, {
      "name": "临沧市",
      "level": "3",
      "code": "5309"
    }, {
      "name": "楚雄彝族自治州",
      "level": "3",
      "code": "5323"
    }, {
      "name": "红河哈尼族彝族自治州",
      "level": "3",
      "code": "5325"
    }, {
      "name": "文山壮族苗族自治州",
      "level": "3",
      "code": "5326"
    }, {
      "name": "西双版纳傣族自治州",
      "level": "3",
      "code": "5328"
    }, {
      "name": "大理白族自治州",
      "level": "3",
      "code": "5329"
    }, {
      "name": "德宏傣族景颇族自治州",
      "level": "3",
      "code": "5331"
    }, {
      "name": "怒江傈僳族自治州",
      "level": "3",
      "code": "5333"
    }, {
      "name": "迪庆藏族自治州",
      "level": "3",
      "code": "5334"
    }]
  }, {
    "name": "西藏自治区",
    "level": "1",
    "code": "5400",
    "cities": [{
      "name": "拉萨市",
      "level": "2",
      "code": "5401"
    }, {
      "name": "昌都地区",
      "level": "3",
      "code": "5421"
    }, {
      "name": "山南地区",
      "level": "3",
      "code": "5422"
    }, {
      "name": "日喀则地区",
      "level": "3",
      "code": "5423"
    }, {
      "name": "那曲地区",
      "level": "3",
      "code": "5424"
    }, {
      "name": "阿里地区",
      "level": "3",
      "code": "5425"
    }, {
      "name": "林芝地区",
      "level": "3",
      "code": "5426"
    }]
  }, {
    "name": "陕西省",
    "level": "1",
    "code": "6100",
    "cities": [{
      "name": "西安市",
      "level": "2",
      "code": "6101"
    }, {
      "name": "铜川市",
      "level": "3",
      "code": "6102"
    }, {
      "name": "宝鸡市",
      "level": "3",
      "code": "6103"
    }, {
      "name": "咸阳市",
      "level": "3",
      "code": "6104"
    }, {
      "name": "渭南市",
      "level": "3",
      "code": "6105"
    }, {
      "name": "延安市",
      "level": "3",
      "code": "6106"
    }, {
      "name": "汉中市",
      "level": "3",
      "code": "6107"
    }, {
      "name": "榆林市",
      "level": "3",
      "code": "6108"
    }, {
      "name": "安康市",
      "level": "3",
      "code": "6109"
    }, {
      "name": "商洛市",
      "level": "3",
      "code": "6110"
    }]
  }, {
    "name": "甘肃省",
    "level": "1",
    "code": "6200",
    "cities": [{
      "name": "兰州市",
      "level": "2",
      "code": "6201"
    }, {
      "name": "嘉峪关市",
      "level": "3",
      "code": "6202"
    }, {
      "name": "金昌市",
      "level": "3",
      "code": "6203"
    }, {
      "name": "白银市",
      "level": "3",
      "code": "6204"
    }, {
      "name": "天水市",
      "level": "3",
      "code": "6205"
    }, {
      "name": "武威市",
      "level": "3",
      "code": "6206"
    }, {
      "name": "张掖市",
      "level": "3",
      "code": "6207"
    }, {
      "name": "平凉市",
      "level": "3",
      "code": "6208"
    }, {
      "name": "酒泉市",
      "level": "3",
      "code": "6209"
    }, {
      "name": "庆阳市",
      "level": "3",
      "code": "6210"
    }, {
      "name": "定西市",
      "level": "3",
      "code": "6211"
    }, {
      "name": "陇南市",
      "level": "3",
      "code": "6212"
    }, {
      "name": "临夏回族自治州",
      "level": "3",
      "code": "6229"
    }, {
      "name": "甘南藏族自治州",
      "level": "3",
      "code": "6230"
    }]
  }, {
    "name": "青海省",
    "level": "1",
    "code": "6300",
    "cities": [{
      "name": "西宁市",
      "level": "2",
      "code": "6301"
    }, {
      "name": "海东地区",
      "level": "3",
      "code": "6321"
    }, {
      "name": "海北藏族自治州",
      "level": "3",
      "code": "6322"
    }, {
      "name": "黄南藏族自治州",
      "level": "3",
      "code": "6323"
    }, {
      "name": "海南藏族自治州",
      "level": "3",
      "code": "6325"
    }, {
      "name": "果洛藏族自治州",
      "level": "3",
      "code": "6326"
    }, {
      "name": "玉树藏族自治州",
      "level": "3",
      "code": "6327"
    }, {
      "name": "海西蒙古族藏族自治州",
      "level": "3",
      "code": "6328"
    }]
  }, {
    "name": "宁夏回族自治区",
    "level": "1",
    "code": "6400",
    "cities": [{
      "name": "银川市",
      "level": "2",
      "code": "6401"
    }, {
      "name": "石嘴山市",
      "level": "3",
      "code": "6402"
    }, {
      "name": "吴忠市",
      "level": "3",
      "code": "6403"
    }, {
      "name": "固原市",
      "level": "3",
      "code": "6404"
    }, {
      "name": "中卫市",
      "level": "3",
      "code": "6405"
    }]
  }, {
    "name": "新疆维吾尔自治区",
    "level": "1",
    "code": "6500",
    "cities": [{
      "name": "乌鲁木齐市",
      "level": "2",
      "code": "6501"
    }, {
      "name": "克拉玛依市",
      "level": "3",
      "code": "6502"
    }, {
      "name": "吐鲁番地区",
      "level": "3",
      "code": "6521"
    }, {
      "name": "哈密地区",
      "level": "3",
      "code": "6522"
    }, {
      "name": "昌吉回族自治州",
      "level": "3",
      "code": "6523"
    }, {
      "name": "博尔塔拉蒙古自治州",
      "level": "3",
      "code": "6527"
    }, {
      "name": "巴音郭楞蒙古自治州",
      "level": "3",
      "code": "6528"
    }, {
      "name": "阿克苏地区",
      "level": "3",
      "code": "6529"
    }, {
      "name": "克孜勒苏柯尔克孜自治州",
      "level": "3",
      "code": "6530"
    }, {
      "name": "喀什地区",
      "level": "3",
      "code": "6531"
    }, {
      "name": "和田地区",
      "level": "3",
      "code": "6532"
    }, {
      "name": "伊犁哈萨克自治州",
      "level": "3",
      "code": "6540"
    }, {
      "name": "塔城地区",
      "level": "3",
      "code": "6542"
    }, {
      "name": "阿勒泰地区",
      "level": "3",
      "code": "6543"
    }]
  }, {
    "name": "台湾省",
    "level": "1",
    "code": "7100",
    "cities": [{
      "name": "台湾省",
      "level": "1",
      "code": "7100"
    }]
  }, {
    "name": "香港特别行政区",
    "level": "1",
    "code": "8100",
    "cities": [{
      "name": "香港特别行政区",
      "level": "1",
      "code": "8100"
    }]
  }, {
    "name": "澳门特别行政区",
    "level": "1",
    "code": "8200",
    "cities": [{
      "name": "澳门特别行政区",
      "level": "1",
      "code": "8200"
    }]
  }]
});

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_mg_select_vue_vue_type_style_index_0_id_ac7130aa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_mg_select_vue_vue_type_style_index_0_id_ac7130aa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_mg_select_vue_vue_type_style_index_0_id_ac7130aa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_mg_select_vue_vue_type_style_index_0_id_ac7130aa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_mg_select_vue_vue_type_style_index_0_id_ac7130aa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".zq-drop-list[data-v-ac7130aa]{display:inline-block;min-width:100px;position:relative}.zq-drop-list span[data-v-ac7130aa]{display:block;height:100%;background:#f1f1f1;font-size:14px;border-radius:4px;padding-left:10px;position:relative}.zq-drop-list span i[data-v-ac7130aa]{position:absolute;right:12px;top:50%;transform:translateY(-25%);width:0;height:0;border:6px solid transparent;border-top-color:#c1bfbf}.zq-drop-list ul[data-v-ac7130aa]{position:absolute;z-index:20;top:100%;left:0;width:100%;margin:0;padding:0;border:1px solid #f1f1f1;border-radius:4px;overflow:scroll}.zq-drop-list ul li[data-v-ac7130aa]{list-style:none;font-size:14px;padding-left:10px;border-bottom:1px solid #f1f1f1;background:#fff}.zq-drop-list ul li[data-v-ac7130aa]:last-child{border-bottom:none}.zq-drop-list ul li[data-v-ac7130aa]:hover{background:#f6f6f6}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/main_bg.66145c7.png";

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/mg_select.vue?vue&type=template&id=ac7130aa&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"zq-drop-list",style:(("text-align:" + _vm.align + "; ")),on:{"mouseover":function($event){return _vm.onDplOver($event)},"mouseout":function($event){return _vm.onDplOut($event)}}},[_vm._ssrNode("<span"+(_vm._ssrStyle(null,_vm.disabled ? 'color: #C1BFBF' : ( _vm.activeIndex >= 0  ? '' : 'color: #757575'), null))+" data-v-ac7130aa>"+_vm._ssrEscape("\n    "+_vm._s(_vm.dplLable)+"\n    ")+"<i data-v-ac7130aa></i></span>"),_c('ul',{directives:[{name:"dpl",rawName:"v-dpl"}],style:(("max-height:" + _vm.size + "00%"))},[_vm._ssrNode((_vm._ssrList((_vm.dataList),function(item,index){return ("<li data-v-ac7130aa>"+_vm._ssrEscape(_vm._s(item[_vm.labelProperty]))+"</li>")})))])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/mg_select.vue?vue&type=template&id=ac7130aa&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/mg_select.vue?vue&type=script&lang=js&
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
/* harmony default export */ var mg_selectvue_type_script_lang_js_ = ({
  name: "DropDownList",

  data() {
    return {
      activeIndex: -1
    };
  },

  props: {
    dataList: {
      // 遍历数据
      type: [Array, Object],

      default() {
        return [{
          name: "选项一"
        }, {
          name: "选项二"
        }];
      }

    },
    labelProperty: {
      // prop键名
      type: String,

      default() {
        return "name";
      }

    },
    placeholder: {
      // 默认提示
      type: String,

      default() {
        return "请输入";
      }

    },
    align: {
      // 对齐方式
      type: String,
      default: () => "center"
    },
    size: {
      // 显示个数
      type: [Number, String],
      default: () => 4
    },
    disabled: {
      type: Boolean,
      default: () => false
    }
  },
  directives: {
    dpl: {
      bind(el) {
        el.style.display = "none";
      }

    }
  },
  methods: {
    onDplOver(event) {
      // 禁用状态不允许操作
      if (this.disabled) return;
      console.dir(event.currentTarget.childNodes);
      let ul = event.currentTarget.childNodes[1];
      ul.style.display = "block";
    },

    onDplOut(event) {
      // 禁用状态不允许操作
      if (this.disabled) return;
      let ul = event.currentTarget.childNodes[1];
      ul.style.display = "none";
    },

    onLiClick(index) {
      // 禁用状态不允许操作
      if (this.disabled) return;
      let path = event.path || event.composedPath && event.composedPath(); //兼容火狐和safari

      path[1].style.display = "none";
      this.activeIndex = index;
      this.$emit("change", {
        index: index,
        value: this.dataList[index]
      });
    }

  },
  computed: {
    dplLable() {
      return this.dataList[this.activeIndex] ? this.dataList[this.activeIndex][this.labelProperty] : this.placeholder;
    }

  },
  watch: {
    dataList() {
      // 当遍历数据发生更替时, 重置下拉菜单
      this.activeIndex = -1;
    }

  }
});
// CONCATENATED MODULE: ./components/mg_select.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_mg_selectvue_type_script_lang_js_ = (mg_selectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/mg_select.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(58)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_mg_selectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ac7130aa",
  "3817c86d"
  
)

/* harmony default export */ var mg_select = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=seek_agent2.js.map