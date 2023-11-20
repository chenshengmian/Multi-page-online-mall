(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/generateOrder/generateOrder"],{

/***/ 1075:
/*!*************************************************************************************************!*\
  !*** D:/Onlineshopping/Onlineshopping/main.js?{"page":"pages%2FgenerateOrder%2FgenerateOrder"} ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _generateOrder = _interopRequireDefault(__webpack_require__(/*! ./pages/generateOrder/generateOrder.vue */ 1076));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_generateOrder.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 1076:
/*!******************************************************************************!*\
  !*** D:/Onlineshopping/Onlineshopping/pages/generateOrder/generateOrder.vue ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generateOrder_vue_vue_type_template_id_0b0832ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateOrder.vue?vue&type=template&id=0b0832ba& */ 1077);
/* harmony import */ var _generateOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateOrder.vue?vue&type=script&lang=js& */ 1079);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _generateOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _generateOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _generateOrder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generateOrder.vue?vue&type=style&index=0&lang=css& */ 1081);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _generateOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _generateOrder_vue_vue_type_template_id_0b0832ba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _generateOrder_vue_vue_type_template_id_0b0832ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _generateOrder_vue_vue_type_template_id_0b0832ba___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/generateOrder/generateOrder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1077:
/*!*************************************************************************************************************!*\
  !*** D:/Onlineshopping/Onlineshopping/pages/generateOrder/generateOrder.vue?vue&type=template&id=0b0832ba& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_generateOrder_vue_vue_type_template_id_0b0832ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./generateOrder.vue?vue&type=template&id=0b0832ba& */ 1078);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_generateOrder_vue_vue_type_template_id_0b0832ba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_generateOrder_vue_vue_type_template_id_0b0832ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_generateOrder_vue_vue_type_template_id_0b0832ba___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_generateOrder_vue_vue_type_template_id_0b0832ba___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 1078:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Onlineshopping/Onlineshopping/pages/generateOrder/generateOrder.vue?vue&type=template&id=0b0832ba& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    myDrawer: function () {
      return __webpack_require__.e(/*! import() | components/my-drawer/my-drawer */ "components/my-drawer/my-drawer").then(__webpack_require__.bind(null, /*! @/components/my-drawer/my-drawer.vue */ 1105))
    },
    generateOrder: function () {
      return __webpack_require__.e(/*! import() | components/generate-order/generate-order */ "components/generate-order/generate-order").then(__webpack_require__.bind(null, /*! @/components/generate-order/generate-order.vue */ 1196))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var m0 = _vm.$t("genorder.PaymentConfirm")
  var m1 = _vm.$t("genorder.Paymentpassword")
  var m2 = _vm.$t("genorder.PaymentCancel")
  var m3 = _vm.$t("genorder.PaymentConfirm")
  var m4 = _vm.$t("menu.home")
  var m5 = _vm.disable ? _vm.$t("menu.ewallets") : null
  var m6 = _vm.$t("menu.ewallethistory")
  var m7 = _vm.$t("menu.ewalletwithdrawals")
  var m8 = _vm.$t("menu.ewalletwithdrawalstatus")
  var m9 = _vm.$t("menu.bonuseshelp")
  var m10 = _vm.disable ? _vm.$t("menu.shopping") : null
  var m11 = _vm.$t("home.address")
  var m12 = _vm.$t("menu.allCommodities")
  var m13 = _vm.$t("menu.shoppinghistory")
  var m14 = _vm.$t("menu.architecturediagram")
  var m15 = _vm.$t("menu.announcementtable")
  var m16 = _vm.$t("menu.newloginPassword")
  var m17 = _vm.$t("menu.newEwallectPassword")
  var m18 = _vm.$t("menu.logoff")
  var m19 = _vm.$t("home.Settings")
  var m20 = _vm.$t("home.Selectlanguage")
  var m21 = _vm.$t("locale.en")
  var m22 = _vm.$t("locale.zhHans")
  var m23 = _vm.$t("locale.zhHant")
  if (!_vm._isMounted) {
    _vm.e0 = function ($event) {
      _vm.dialogVisible = false
    }
  }
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        m0: m0,
        m1: m1,
        m2: m2,
        m3: m3,
        m4: m4,
        m5: m5,
        m6: m6,
        m7: m7,
        m8: m8,
        m9: m9,
        m10: m10,
        m11: m11,
        m12: m12,
        m13: m13,
        m14: m14,
        m15: m15,
        m16: m16,
        m17: m17,
        m18: m18,
        m19: m19,
        m20: m20,
        m21: m21,
        m22: m22,
        m23: m23,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 1079:
/*!*******************************************************************************************************!*\
  !*** D:/Onlineshopping/Onlineshopping/pages/generateOrder/generateOrder.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_generateOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./generateOrder.vue?vue&type=script&lang=js& */ 1080);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_generateOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_generateOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_generateOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_generateOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_generateOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1080:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Onlineshopping/Onlineshopping/pages/generateOrder/generateOrder.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 255));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 257));
var _methods;
var MyDrawer = function MyDrawer() {
  __webpack_require__.e(/*! require.ensure | components/my-drawer/my-drawer */ "components/my-drawer/my-drawer").then((function () {
    return resolve(__webpack_require__(/*! @/components/my-drawer/my-drawer.vue */ 1105));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var GenerateOrder = function GenerateOrder() {
  __webpack_require__.e(/*! require.ensure | components/generate-order/generate-order */ "components/generate-order/generate-order").then((function () {
    return resolve(__webpack_require__(/*! @/components/generate-order/generate-order.vue */ 1196));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  components: {
    MyDrawer: MyDrawer,
    GenerateOrder: GenerateOrder
  },
  data: function data() {
    return {
      footesr: uni.getStorageSync('footer'),
      name: uni.getStorageSync('name'),
      centerDialogVisible: false,
      isCollapse: false,
      disable: true,
      drawerVisible: false,
      drawerVisibletwo: false,
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      drawerSize: '60%',
      screenWidth: 0,
      // option1: true,
      // option2: false,
      index: '1',
      classp: true,
      isblock: false,
      baColr: '#F2F2F2',
      hColr: '#FFFFFF',
      footbg: '#FAFAFA',
      topColor: '#FFFFFF',
      drawbg: '#FFFFFF',
      nodeid: '',
      todatail: {},
      maindisable: false,
      username: '',
      width: '30%',
      tanccontent: '<p>这是一段包含HTML标签的内容</p>',
      type: 0,
      radio: uni.getLocale(),
      orderid: 1,
      dialogVisible: false,
      orid: '',
      vapass: '',
      diawidth: '30%'
    };
  },
  onLoad: function onLoad(param) {
    // console.log(param)
    this.orderid = Number(param.orderid);
  },
  mounted: function mounted() {
    uni.setNavigationBarTitle({
      title: uni.getStorageSync('name')
    });
    this.login();
    // console.log(uni.getStorageSync('tokenArray'))
    this.getScreenWidth(); // 初始化获取屏幕宽度和缩放比例
    window.addEventListener('resize', this.handleResize); // 监听窗口大小变化
  },
  // onShow() {
  // 	this.login()
  // 	this.getScreenWidth(); // 初始化获取屏幕宽度和缩放比例
  // 	window.addEventListener('resize', this.handleResize); // 监听窗口大小变化
  // },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.handleResize); // 移除监听事件
  },

  methods: (_methods = {
    handelpay: function handelpay() {
      var _this = this;
      if (_this.vapass == '') {
        _this.$message(_this.$t('pass.enteryourpassword'));
      } else {
        var newarr = {
          'id': _this.orid,
          'password': _this.vapass
        };
        _this.$axios.post('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.order.pay', newarr).then(function (res) {
          console.log(res);
          var status = res.status;
          if (status == 1) {
            _this.dialogVisible = false;
            _this.vapass = '';
            _this.$router.go(0);
          } else if (status == 0) {
            var message = res.result.message;
            _this.$message(message);
          }
        }).catch(function (err) {
          console.log(err);
        });
      }
    },
    payStatus: function payStatus(param) {
      var id = param.id,
        status = param.status;
      this.dialogVisible = status;
      this.orid = id;
    },
    handleshoppingAddress: function handleshoppingAddress() {
      uni.navigateTo({
        url: '/pages/shippingAddress/shippingAddress'
      });
    }
  }, (0, _defineProperty2.default)(_methods, "handleshoppingAddress", function handleshoppingAddress() {
    uni.navigateTo({
      url: '/pages/shippingAddress/shippingAddress'
    });
  }), (0, _defineProperty2.default)(_methods, "handleClose", function handleClose(param) {
    this.drawerVisible = param;
  }), (0, _defineProperty2.default)(_methods, "handleLangChange", function handleLangChange(str) {
    // console.log(str)
    uni.setLocale(str);
    if (str == 'en') {
      uni.setStorageSync('textlang', 2);
    } else if (str == 'zh-Hans') {
      uni.setStorageSync('textlang', 0);
    } else {
      uni.setStorageSync('textlang', 1);
    }
    this.$i18n.locale = str;
    this.drawerVisibletwo = false;
    this.$router.go(0);
  }), (0, _defineProperty2.default)(_methods, "handleshopping", function handleshopping() {
    uni.navigateTo({
      url: '/pages/shopping/shopping'
    });
  }), (0, _defineProperty2.default)(_methods, "hanldeChangepass", function hanldeChangepass() {
    uni.navigateTo({
      url: '/pages/login-password/login-password'
    });
  }), (0, _defineProperty2.default)(_methods, "hanldeChangeEwalletspass", function hanldeChangeEwalletspass() {
    uni.navigateTo({
      url: '/pages/wallet-password/wallet-password'
    });
  }), (0, _defineProperty2.default)(_methods, "handlepurchasehistory", function handlepurchasehistory() {
    // console.log(111)
    uni.navigateTo({
      url: '/pages/wallet-records/wallet-records'
    });
  }), (0, _defineProperty2.default)(_methods, "handleperson", function handleperson() {
    uni.navigateTo({
      url: '/pages/personalPage/personalPage'
    });
  }), (0, _defineProperty2.default)(_methods, "handlewithdraw", function handlewithdraw() {
    uni.navigateTo({
      url: '/pages/withdraw-money/withdraw-money'
    });
  }), (0, _defineProperty2.default)(_methods, "handlewithdrawStatus", function handlewithdrawStatus() {
    uni.navigateTo({
      url: '/pages/withdrawal-status/withdrawal-status'
    });
  }), (0, _defineProperty2.default)(_methods, "handlebonus", function handlebonus() {
    uni.navigateTo({
      url: '/pages/bonus-description/bonus-description'
    });
  }), (0, _defineProperty2.default)(_methods, "handlekycgo", function handlekycgo() {
    uni.navigateTo({
      url: '/pages/know-yourCustomer/know-yourCustomer'
    });
  }), (0, _defineProperty2.default)(_methods, "handlebinarytree", function handlebinarytree() {
    uni.navigateTo({
      url: '/pages/binary-tree/binary-tree'
    });
  }), (0, _defineProperty2.default)(_methods, "handleannucement", function handleannucement() {
    uni.navigateTo({
      url: '/pages/announcement-table/announcement-table'
    });
  }), (0, _defineProperty2.default)(_methods, "handleCustomButton", function handleCustomButton() {
    this.$print(this.$refs.print);
  }), (0, _defineProperty2.default)(_methods, "handleProduct", function handleProduct() {
    uni.navigateTo({
      url: '/pages/product-purchase/product-purchase'
    });
  }), (0, _defineProperty2.default)(_methods, "handlepurchase", function handlepurchase() {
    uni.navigateTo({
      url: '/pages/purchase-history/purchase-history'
    });
  }), (0, _defineProperty2.default)(_methods, "login", function login() {
    var _this2 = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var self;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              self = _this2;
              _context.next = 3;
              return _this2.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member').then(function (res) {
                // console.log('登录状态',res)
                var status = res.status,
                  _res$result = res.result,
                  avatar = _res$result.avatar,
                  nickname = _res$result.nickname,
                  adstatus = _res$result.adstatus,
                  mobile = _res$result.mobile;
                uni.setStorageSync('mobile', mobile);
                self.username = nickname;
                // console.log('登录状态',res)
                if (adstatus == 0) {
                  self.centerDialogVisible = false;
                } else {
                  self.centerDialogVisible = true;
                }
                if (status == 100) {
                  self.$message({
                    message: _this2.$t('home.loginstatus'),
                    center: true
                  });
                  uni.navigateTo({
                    url: '/pages/userLogin/userLogin'
                  });
                } else {
                  // self.maindisable = true
                }
                self.circleUrl = avatar;
              }).catch(function (err) {
                console.log(err);
              });
            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }), (0, _defineProperty2.default)(_methods, "logOff", function logOff() {
    this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.account.logout').then(function (res) {});
    uni.clearStorageSync();
    uni.navigateTo({
      url: '/pages/userLogin/userLogin'
    });
  }), (0, _defineProperty2.default)(_methods, "showDrawer", function showDrawer() {
    // console.log(111)
    this.drawerVisible = !this.drawerVisible;
  }), (0, _defineProperty2.default)(_methods, "showDrawerleft", function showDrawerleft() {
    this.drawerVisibletwo = !this.drawerVisibletwo;
  }), (0, _defineProperty2.default)(_methods, "handleDrawerClose", function handleDrawerClose() {
    this.isblock = false;
  }), (0, _defineProperty2.default)(_methods, "changeStatus", function changeStatus() {
    var self = this;
    self.isCollapse = !self.isCollapse;
    self.disable = !self.disable;
    self.classp = !self.classp;
  }), (0, _defineProperty2.default)(_methods, "getScreenWidth", function getScreenWidth() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 990) {
      this.drawerSize = '60%';
      this.width = '90%';
      this.diawidth = '90%';
    } else {
      this.drawerSize = '15%';
      this.width = '30%';
      this.diawidth = '30%';
    }
  }), (0, _defineProperty2.default)(_methods, "handleResize", function handleResize() {
    var newScreenWidth = window.innerWidth;
    if (newScreenWidth !== this.screenWidth) {
      this.screenWidth = newScreenWidth;
      console.log(newScreenWidth);
      if (newScreenWidth <= 990) {
        this.drawerSize = '60%';
        this.width = '90%';
        this.diawidth = '90%';
      } else {
        this.drawerSize = '15%';
        this.width = '30%';
        this.diawidth = '30%';
      }
    }
  }), _methods)
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 1081:
/*!***************************************************************************************************************!*\
  !*** D:/Onlineshopping/Onlineshopping/pages/generateOrder/generateOrder.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_generateOrder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./generateOrder.vue?vue&type=style&index=0&lang=css& */ 1082);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_generateOrder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_generateOrder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_generateOrder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_generateOrder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_generateOrder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1082:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Onlineshopping/Onlineshopping/pages/generateOrder/generateOrder.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[1075,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/generateOrder/generateOrder.js.map