/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Images/logo.jpg */ \"./src/Images/logo.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Images/heart.png */ \"./src/Images/heart.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\r\\nbody {\\r\\n  box-sizing: border-box;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  font-family: 'Quicksand', 'Courier New', Courier, monospace;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background: #fafafa;\\r\\n}\\r\\n\\r\\nh5 {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  height: 100vh;\\r\\n  max-width: 60rem;\\r\\n  margin: 0 auto;\\r\\n  display: grid;\\r\\n  grid-template-columns: 0.3fr 2.4fr 0.3fr;\\r\\n  grid-template-rows: 0.3fr 2.4fr 0.3fr;\\r\\n  gap: 0.125rem 0.0125rem;\\r\\n  grid-auto-flow: row;\\r\\n  grid-template-areas:\\r\\n    '. header .'\\r\\n    '. main .'\\r\\n    '. footer .';\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  width: 150px;\\r\\n  height: 100px;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-position: 50% 50%;\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: contain;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  grid-area: header;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  border-bottom: 2px #dbdbdb solid;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  grid-area: footer;\\r\\n  display: flex;\\r\\n  justify-content: flex-start;\\r\\n  align-items: center;\\r\\n  border-top: 2px #dbdbdb solid;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  margin-top: 1rem;\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr 1fr;\\r\\n  grid-template-rows: 1fr 1fr 1fr;\\r\\n  gap: 0.5rem 0.5rem;\\r\\n  grid-auto-flow: row;\\r\\n  grid-template-areas:\\r\\n    '. . .'\\r\\n    '. . .'\\r\\n    '. . .';\\r\\n  grid-area: main;\\r\\n}\\r\\n\\r\\n.nav-bar-list {\\r\\n  padding: 0;\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\nli {\\r\\n  margin-left: 5rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nli:hover {\\r\\n  border-bottom: 2px solid #333;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n/* card foods styles */\\r\\n\\r\\n.card-food {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1.4fr 0.6fr;\\r\\n  grid-template-rows: 2fr 0.4fr 0.2fr;\\r\\n  gap: 0;\\r\\n  grid-template-areas:\\r\\n    'card-img card-img card-img'\\r\\n    'card-title card-title card-title'\\r\\n    'btn-recipe . btn-liked';\\r\\n  border: #dbdbdb 1px solid;\\r\\n}\\r\\n\\r\\n.card-img {\\r\\n  overflow: hidden;\\r\\n  box-sizing: border-box;\\r\\n  grid-area: card-img;\\r\\n}\\r\\n\\r\\n.img-food {\\r\\n  width: 100%;\\r\\n  min-height: 250px;\\r\\n  object-fit: cover;\\r\\n}\\r\\n\\r\\n.card-title {\\r\\n  grid-area: card-title;\\r\\n  display: flex;\\r\\n  justify-content: flex-start;\\r\\n  align-items: flex-start;\\r\\n  padding: 0.2rem;\\r\\n}\\r\\n\\r\\n.btn-recipe {\\r\\n  grid-area: btn-recipe;\\r\\n  display: flex;\\r\\n  justify-content: flex-start;\\r\\n  align-items: flex-end;\\r\\n  padding: 0.2rem;\\r\\n}\\r\\n\\r\\n.btn-recipe button {\\r\\n  background: rgb(221, 21, 21);\\r\\n  border: none;\\r\\n  color: white;\\r\\n  font-weight: bold;\\r\\n  padding: 0.1rem 0.4rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.btn-liked {\\r\\n  grid-area: btn-liked;\\r\\n  display: flex;\\r\\n  justify-content: flex-end;\\r\\n  align-items: flex-end;\\r\\n  padding: 0.2rem;\\r\\n}\\r\\n\\r\\n.likes-count {\\r\\n  margin: 1px;\\r\\n}\\r\\n\\r\\n.btn-liked button {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n  background-repeat: no-repeat;\\r\\n  background-color: white;\\r\\n  background-size: 50%;\\r\\n  background-position: 50% 50%;\\r\\n  color: rgb(221, 21, 21);\\r\\n  font-weight: bold;\\r\\n  padding: 15px;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.popup button {\\r\\n  padding: 5px;\\r\\n  background-color: rgb(166, 161, 163);\\r\\n  border-top: 1px;\\r\\n  border-left: 1px;\\r\\n}\\r\\n\\r\\n.btn-liked button:hover {\\r\\n  background-size: 90%;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.popupCont {\\r\\n  height: 100vh;\\r\\n  width: 100vw;\\r\\n  backdrop-filter: blur(3px);\\r\\n  top: 0;\\r\\n  position: fixed;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  border-radius: 15% 0% 15% 0%;\\r\\n  background-color: rgba(218, 87, 172, 0.85);\\r\\n  width: 50vw;\\r\\n  height: 80vh;\\r\\n  position: fixed;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  padding: 30px 50px;\\r\\n  backdrop-filter: blur(10px);\\r\\n  box-shadow: 3px 3px rgb(139, 131, 135);\\r\\n}\\r\\n\\r\\n.popup p {\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.date {\\r\\n  text-align: right;\\r\\n}\\r\\n\\r\\n.comment {\\r\\n  border-bottom: 1px solid #333;\\r\\n  width: 90%;\\r\\n}\\r\\n\\r\\n.popup h4 {\\r\\n  color: rgb(99, 236, 190);\\r\\n}\\r\\n\\r\\n.popup img {\\r\\n  max-width: 100%;\\r\\n  max-height: 100%;\\r\\n  border-radius: 15% 0% 15% 0%;\\r\\n}\\r\\n\\r\\n#cont {\\r\\n  display: flex;\\r\\n  gap: 30px;\\r\\n  height: 40%;\\r\\n}\\r\\n\\r\\n#img {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-around;\\r\\n  width: 50%;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n#ins {\\r\\n  width: 50%;\\r\\n  height: 40%;\\r\\n}\\r\\n\\r\\n.content {\\r\\n  height: 200px;\\r\\n  overflow-y: auto;\\r\\n}\\r\\n\\r\\nform {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  border: rgb(94, 109, 104) 2px solid;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\n.commentSection {\\r\\n  height: 40%;\\r\\n  overflow-y: auto;\\r\\n}\\r\\n\\r\\n.popup button:hover {\\r\\n  background-color: #333;\\r\\n  color: #fafafa;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.popup ::-webkit-scrollbar {\\r\\n  width: 10px;\\r\\n}\\r\\n\\r\\n.popup ::-webkit-scrollbar-track {\\r\\n  background: #f1f1f1;\\r\\n}\\r\\n\\r\\n.popup ::-webkit-scrollbar-thumb {\\r\\n  background: #888;\\r\\n}\\r\\n\\r\\n.Closebtn {\\r\\n  position: absolute;\\r\\n  right: -36px;\\r\\n  top: -12px;\\r\\n  width: 32px;\\r\\n  height: 32px;\\r\\n  opacity: 2;\\r\\n}\\r\\n\\r\\n.Closebtn:hover {\\r\\n  opacity: 5;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack_boilerplate/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack_boilerplate/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://webpack_boilerplate/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack_boilerplate/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack_boilerplate/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack_boilerplate/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack_boilerplate/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack_boilerplate/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack_boilerplate/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack_boilerplate/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack_boilerplate/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Likes&Comments.js":
/*!*******************************!*\
  !*** ./src/Likes&Comments.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getlikes\": () => (/* binding */ getlikes),\n/* harmony export */   \"postcomments\": () => (/* binding */ postcomments),\n/* harmony export */   \"postlikes\": () => (/* binding */ postlikes)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n// eslint-disable-next-line import/no-cycle\r\n\r\n\r\nconst projectID = 'oHdQExR6DIJGa8S6fY1E';\r\nconst likesLink = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${projectID}/likes/`;\r\n\r\nconst getlikes = async () => {\r\n  const response = await fetch(likesLink);\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\r\nconst postlikes = async (id) => {\r\n  const request = new Request(likesLink);\r\n  const response = await fetch(request, {\r\n    method: 'POST', // *GET, POST, PUT, DELETE, etc.\r\n    mode: 'cors', // no-cors, *cors, same-origin\r\n    body: JSON.stringify({ item_id: `${id}` }),\r\n    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached\r\n    credentials: 'same-origin', // include, *same-origin, omit\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n  });\r\n  return response;\r\n};\r\n\r\nconst postcomments = async (id, username, comment) => {\r\n  const postfix = 'comments';\r\n  const idUrl = _index_js__WEBPACK_IMPORTED_MODULE_0__.InvolveURL + postfix;\r\n  await fetch(idUrl, {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      \"item_id\": id,\r\n      \"username\": username,\r\n      \"comment\": comment,\r\n    }),\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  });  \r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ postlikes, getlikes, postcomments });\n\n//# sourceURL=webpack://webpack_boilerplate/./src/Likes&Comments.js?");

/***/ }),

/***/ "./src/getFoodList.js":
/*!****************************!*\
  !*** ./src/getFoodList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getData),\n/* harmony export */   \"itemCounter\": () => (/* binding */ itemCounter)\n/* harmony export */ });\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ \"./src/popup.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _Likes_Comments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Likes&Comments.js */ \"./src/Likes&Comments.js\");\n/* eslint-disable import/no-cycle */\r\n\r\n\r\n\r\n\r\nconst getPopupData = async (arr) => {\r\n  const urlD = _index_js__WEBPACK_IMPORTED_MODULE_1__.urlDetails + arr.idMeal;\r\n  const request = new Request(urlD);\r\n  const response = await fetch(request);\r\n  const responseJson = await response.json();\r\n  const responsInfo = responseJson.meals;// getting food data list\r\n  (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(responsInfo); // passing that response to display the data.\r\n};\r\n\r\nconst itemCounter = (foodSelected, arr) => {\r\n  foodSelected.innerHTML = `${foodSelected.textContent} (${arr.length})`;\r\n};\r\n\r\nconst UIData = (arr, foodSelected) => {\r\n  const board = document.querySelector('.container-food-cards');\r\n  board.innerHTML = '';\r\n  itemCounter(foodSelected, arr);\r\n  // item count\r\n\r\n  arr.forEach((food) => {\r\n    const item = document.createElement('div');\r\n    item.classList.add('card-food');\r\n    item.innerHTML = `\r\n        <div class=\"card-title\">\r\n          <h5>${food.strMeal}</h5>\r\n        </div>\r\n        <div class=\"btn-recipe\">\r\n          <button type=\"button\">Recipe</button>\r\n        </div>\r\n        <div class=\"btn-liked\">\r\n          <button type=\"button\"></button> \r\n          <p class=\"likes-count\"></p>\r\n        </div>\r\n        <div class=\"card-img\">\r\n         <img src=\"${food.strMealThumb}\" class=\"img-food\">        \r\n        </div>     \r\n    `;\r\n    const btnrecipe = item.querySelector('.btn-recipe');\r\n    const btnlike = item.querySelector('.btn-liked');\r\n    const printLike = (data) => {\r\n      const likesReturned = data.find(\r\n        (element) => element.item_id === food.idMeal,\r\n      );\r\n      const likesCount = item.querySelector('.likes-count');\r\n      likesCount.innerHTML = likesReturned !== undefined\r\n        ? `${likesReturned.likes + 1}`\r\n        : '0';\r\n    };\r\n    (0,_Likes_Comments_js__WEBPACK_IMPORTED_MODULE_2__.getlikes)()\r\n      .then(printLike);\r\n\r\n    btnlike.addEventListener('click', async () => {\r\n      await (0,_Likes_Comments_js__WEBPACK_IMPORTED_MODULE_2__.postlikes)(food.idMeal);\r\n      (0,_Likes_Comments_js__WEBPACK_IMPORTED_MODULE_2__.getlikes)()\r\n        .then(printLike);\r\n    });\r\n    board.appendChild(item);\r\n\r\n    btnrecipe.addEventListener('click', () => {\r\n      getPopupData(food);\r\n    });\r\n  });\r\n};\r\n\r\n// function to get images and title\r\nconst getData = async (url, foodSelected) => {\r\n  const request = new Request(url);\r\n  const response = await fetch(request);\r\n  const responseJson = await response.json();\r\n  const responsInfo = responseJson.meals;// getting food data list\r\n  UIData(responsInfo, foodSelected); // passing that response to display the data.\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack_boilerplate/./src/getFoodList.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InvolveURL\": () => (/* binding */ InvolveURL),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"urlDetails\": () => (/* binding */ urlDetails)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _getFoodList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getFoodList.js */ \"./src/getFoodList.js\");\n/* eslint-disable import/no-cycle */\r\n\r\n\r\n\r\n// api links\r\nconst InvolveURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/oHdQExR6DIJGa8S6fY1E/';\r\nconst allBeefURL = 'https:///www.themealdb.com/api/json/v1/1/filter.php?c=Beef';\r\nconst urlDetails = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';\r\nconst allPastaURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=pasta';\r\nconst allSeafoodURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';\r\nconst [liBeefElement, liPastaElement, liSeafoodElement] = document.querySelectorAll('li');\r\nlet foodSelected = liBeefElement;\r\n\r\nliBeefElement.addEventListener('click', () => {\r\n  foodSelected = liBeefElement;\r\n  foodSelected.textContent = 'Beef';\r\n  liPastaElement.textContent = 'Pasta';\r\n  liSeafoodElement.textContent = 'Seafood';\r\n  (0,_getFoodList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(allBeefURL, foodSelected);\r\n});\r\n\r\nliPastaElement.addEventListener('click', () => {\r\n  foodSelected = liPastaElement;\r\n  foodSelected.textContent = 'Pasta';\r\n  liBeefElement.textContent = 'Beef';\r\n  liSeafoodElement.textContent = 'Seafood';\r\n  (0,_getFoodList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(allPastaURL, foodSelected);\r\n});\r\n\r\nliSeafoodElement.addEventListener('click', () => {\r\n  foodSelected = liSeafoodElement;\r\n  foodSelected.textContent = 'Seafood';\r\n  liBeefElement.textContent = 'Beef';\r\n  liPastaElement.textContent = 'Past';\r\n  (0,_getFoodList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(allSeafoodURL, foodSelected);\r\n});\r\n\r\n(0,_getFoodList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(allBeefURL, foodSelected);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allBeefURL);\r\n\r\n\n\n//# sourceURL=webpack://webpack_boilerplate/./src/index.js?");

/***/ }),

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _Likes_Comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Likes&Comments.js */ \"./src/Likes&Comments.js\");\n/* eslint-disable import/no-cycle */\r\n\r\n\r\n\r\nconst fillComments = (obj) => {\r\n  const commentsCounter = document.createElement('h5');\r\n  if (obj.length !== undefined) {\r\n    const postfix = ' Comments';\r\n    commentsCounter.textContent = obj.length + postfix;\r\n    // const popup = document.querySelector('.popup');\r\n    const commentSection = document.querySelector('.commentSection');\r\n    commentSection.appendChild(commentsCounter);\r\n  }\r\n  for (let i = 0; i < obj.length; i += 1) {\r\n    const comment = document.createElement('div');\r\n    comment.classList = 'comment';\r\n    comment.innerHTML = `\r\n    <h4>${obj[i].username}</h4>\r\n    <p>${obj[i].comment}</br></br><p class=\"date\">${obj[i].creation_date}</p></p>\r\n    `;\r\n    const commentSection = document.querySelector('.commentSection');\r\n    commentSection.appendChild(comment);\r\n  }\r\n};\r\n\r\nasync function getComments(id) {\r\n  const postfix = 'comments?item_id=';\r\n  const idUrl = _index_js__WEBPACK_IMPORTED_MODULE_0__.InvolveURL + postfix + id;\r\n  const response = await fetch(idUrl);\r\n  const comments = await response.json();\r\n  fillComments(comments);\r\n}\r\n\r\nconst popupData = (arr) => {\r\n  const popup = document.createElement('div');\r\n  const popupCont = document.createElement('div');\r\n  popupCont.classList = 'popupCont';\r\n  popup.classList = 'popup';\r\n  popup.innerHTML = `\r\n  <button type=\"button\" class=\"Closebtn\" id=\"close\">X</button>\r\n  <div id=\"cont\">\r\n  <div id=\"img\">\r\n  <img src=\"${arr[0].strMealThumb}\" id=\"food\">\r\n  </div>\r\n  <div id=\"ins\">\r\n  <h4>Instructions</h4>\r\n  <p class=\"content\">${arr[0].strInstructions}</p>\r\n  </div>\r\n  </div>\r\n  <div class=\"commentSection\">\r\n  </div>\r\n  <form><h4>Leave a comment</h4>  \r\n  <input type=\"text\" value\"submit\" id=\"user\" placeholder=\"Your name\" required/>\r\n  <input type=\"text\" value\"submit\" id=\"comment\" placeholder=\"Your insights\" required/>\r\n  <button type=\"button\" id=\"submit\">Comment</button>\r\n  </form>\r\n`;\r\n  const body = document.querySelector('body');\r\n  popupCont.appendChild(popup);\r\n  body.appendChild(popupCont);\r\n  const submit = document.getElementById('submit');\r\n  submit.addEventListener('click', async (e) => {\r\n    const user = document.getElementById('user').value;\r\n    const comment = document.getElementById('comment').value;\r\n    if ((user.length < 1) || (comment.length < 1)) {\r\n      e.preventDefault();\r\n      const alert = document.createElement('p');\r\n      alert.textContent = 'Please fill both fields.';\r\n      const form = document.querySelector('form');\r\n      form.appendChild(alert);\r\n    } else {\r\n      await (0,_Likes_Comments_js__WEBPACK_IMPORTED_MODULE_1__.postcomments)(arr[0].idMeal, user, comment);\r\n      getComments(arr[0].idMeal);\r\n      const commentSection = document.querySelector('.commentSection');\r\n      commentSection.innerHTML = ``;\r\n      const form = document.querySelector('form');\r\n      form.reset();\r\n    }\r\n  });\r\n  const close = document.querySelector('#close');\r\n  close.addEventListener('click', () => {\r\n    body.removeChild(popupCont);\r\n  });\r\n  getComments(arr[0].idMeal);\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupData);\n\n//# sourceURL=webpack://webpack_boilerplate/./src/popup.js?");

/***/ }),

/***/ "./src/Images/heart.png":
/*!******************************!*\
  !*** ./src/Images/heart.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3de56e6a2c3650571a46.png\";\n\n//# sourceURL=webpack://webpack_boilerplate/./src/Images/heart.png?");

/***/ }),

/***/ "./src/Images/logo.jpg":
/*!*****************************!*\
  !*** ./src/Images/logo.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3f9697cc8e0b26f66aa7.jpg\";\n\n//# sourceURL=webpack://webpack_boilerplate/./src/Images/logo.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;