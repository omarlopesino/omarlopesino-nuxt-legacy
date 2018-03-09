webpackJsonp([1],{

/***/ "7gTT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Navbar__ = __webpack_require__("HwcC");
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    Navbar: __WEBPACK_IMPORTED_MODULE_0__components_Navbar__["a" /* default */]
  }
});

/***/ }),

/***/ "DLCH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_c("nuxt")], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-314f53c6", esExports)
  }
}

/***/ }),

/***/ "HwcC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cfc91daa_hasScoped_false_transformToRequire_video_src_source_src_object_src_embed_src_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Navbar_vue__ = __webpack_require__("a5lK");
var disposed = false
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cfc91daa_hasScoped_false_transformToRequire_video_src_source_src_object_src_embed_src_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Navbar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "components/Navbar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cfc91daa", Component.options)
  } else {
    hotAPI.reload("data-v-cfc91daa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "M2er":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("m/pH");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("5cece86c", content, false, {"sourceMap":false});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"minimize\":true,\"importLoaders\":0,\"alias\":{\"/static\":\"/home/omar/apps/portfolio/static\",\"/assets\":\"/home/omar/apps/portfolio/assets\"}}!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-314f53c6\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./default.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"minimize\":true,\"importLoaders\":0,\"alias\":{\"/static\":\"/home/omar/apps/portfolio/static\",\"/assets\":\"/home/omar/apps/portfolio/assets\"}}!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-314f53c6\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./default.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "Ma2J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_cacheDirectory_false_presets_home_omar_apps_portfolio_node_modules_babel_preset_vue_app_dist_index_common_js_targets_ie_9_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_default_vue__ = __webpack_require__("7gTT");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_314f53c6_hasScoped_false_transformToRequire_video_src_source_src_object_src_embed_src_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_default_vue__ = __webpack_require__("DLCH");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("M2er")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_cacheDirectory_false_presets_home_omar_apps_portfolio_node_modules_babel_preset_vue_app_dist_index_common_js_targets_ie_9_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_default_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_314f53c6_hasScoped_false_transformToRequire_video_src_source_src_object_src_embed_src_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_default_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "layouts/default.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-314f53c6", Component.options)
  } else {
    hotAPI.reload("data-v-314f53c6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "a5lK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    {
      staticClass: "navbar",
      attrs: { role: "navigation", "aria-label": "main navigation" }
    },
    [
      _vm._m(0),
      _c("div", { staticClass: "navbar-menu" }, [
        _c(
          "div",
          { staticClass: "navbar-end" },
          [
            _c(
              "nuxt-link",
              { staticClass: "navbar-item", attrs: { to: "/" } },
              [_vm._v("Home")]
            ),
            _c(
              "nuxt-link",
              { staticClass: "navbar-item", attrs: { to: "/blog" } },
              [_vm._v("Blog")]
            )
          ],
          1
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "navbar-brand" }, [
      _c("a", { staticClass: "navbar-item", attrs: { href: "/" } }, [
        _vm._v("Portfolio")
      ]),
      _c("button", { staticClass: "button navbar-burger" }, [
        _c("span"),
        _c("span"),
        _c("span")
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-cfc91daa", esExports)
  }
}

/***/ }),

/***/ "m/pH":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "html{font-family:Source Sans Pro,Helvetica Neue,Arial,sans-serif}", ""]);

// exports


/***/ })

});