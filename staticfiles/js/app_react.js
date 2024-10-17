"use strict";
(self["webpackChunkpython_webpack_boilerplate"] = self["webpackChunkpython_webpack_boilerplate"] || []).push([["app_react"],{

/***/ "./frontend/src/styles/index.scss":
/*!****************************************!*\
  !*** ./frontend/src/styles/index.scss ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1729141662266
        var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

/***/ }),

/***/ "./frontend/src/application/app_react.tsx":
/*!************************************************!*\
  !*** ./frontend/src/application/app_react.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _components_Topbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Topbar */ "./frontend/src/components/Topbar.tsx");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/index.scss */ "./frontend/src/styles/index.scss");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./frontend/src/components/Footer.tsx");
/* harmony import */ var _components_AnonymousLogin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AnonymousLogin */ "./frontend/src/components/AnonymousLogin.tsx");






var root = document.getElementById('root');
if (root) {
    var rootElement = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(root);
    rootElement.render(null);
}
var topbarRoot = document.getElementById('topbar');
if (topbarRoot) {
    var topbarRootElement = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(topbarRoot);
    topbarRootElement.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Topbar__WEBPACK_IMPORTED_MODULE_2__.Topbar, null));
    // console.log('topbarRoot', topbarRoot)
}
var footerRoot = document.getElementById('footer');
if (footerRoot) {
    var footerRootElement = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(footerRoot);
    footerRootElement.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_4__.Footer, null));
}
var anonymousLoginRoot = document.getElementById('anonymous-login');
if (anonymousLoginRoot) {
    var anonymousLoginRootElement = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(anonymousLoginRoot);
    anonymousLoginRootElement.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_AnonymousLogin__WEBPACK_IMPORTED_MODULE_5__.AnonymousLogin, null));
}


/***/ }),

/***/ "./frontend/src/components/AnonymousLogin.tsx":
/*!****************************************************!*\
  !*** ./frontend/src/components/AnonymousLogin.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnonymousLogin: () => (/* binding */ AnonymousLogin)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_CM_IMG_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/CM-IMG.png */ "./frontend/src/assets/images/CM-IMG.png");


var AnonymousLogin = function () {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "absolute-center" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: _assets_images_CM_IMG_png__WEBPACK_IMPORTED_MODULE_1__, height: 200, width: 200, alt: "Crystal Mind Logo", className: "animate-bounce-slow select-none pointer-events-none" })));
};


/***/ }),

/***/ "./frontend/src/components/Clock.tsx":
/*!*******************************************!*\
  !*** ./frontend/src/components/Clock.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Clock: () => (/* binding */ Clock)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Clock = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Date()), time = _a[0], setTime = _a[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var timer = setInterval(function () {
            setTime(new Date());
        }, 1000);
        return function () { return clearInterval(timer); };
    }, []);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-sm text-gray-500" }, time.toLocaleTimeString());
};


/***/ }),

/***/ "./frontend/src/components/Footer.tsx":
/*!********************************************!*\
  !*** ./frontend/src/components/Footer.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Footer: () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Clock */ "./frontend/src/components/Clock.tsx");


var Footer = function () {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex justify-between w-full h-full items-center" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Clock__WEBPACK_IMPORTED_MODULE_1__.Clock, null),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-sm w-fit h-full text-gray-500" }, "by andygr1n1 for Harvard university")));
};


/***/ }),

/***/ "./frontend/src/components/Topbar.tsx":
/*!********************************************!*\
  !*** ./frontend/src/components/Topbar.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Topbar: () => (/* binding */ Topbar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/space/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");


var Topbar = function () {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__["default"], { className: "flex justify-between flex-col md:flex-row gap-10 md:gap-0 p-5" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-6xl px-2 font-kaushan text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" }, "Crystal Mind"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex gap-2" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_2__["default"], { shape: "round", type: "dashed" }, "Join now"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_2__["default"], { shape: "round", type: "dashed" }, "Login")))));
};


/***/ }),

/***/ "./frontend/src/assets/images/CM-IMG.png":
/*!***********************************************!*\
  !*** ./frontend/src/assets/images/CM-IMG.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "frontend/src/assets/images/CM-IMG.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_antd_es_button_index_js-node_modules_antd_es_space_index_js-node_modules-08cfdc"], () => (__webpack_exec__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=9091&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true"), __webpack_exec__("./node_modules/webpack/hot/dev-server.js"), __webpack_exec__("./frontend/src/application/app_react.tsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RVQsb0VBQUssU0FBUyxFQUFDLG9DQUFvQywwQ0FBMEMsQ0FDM0YsQ0FDVDtBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYd0I7QUFDVztBQUU3QixJQUFNLE1BQU0sR0FBRztJQUNsQixPQUFPLENBQ0g7UUFDSSwyREFBQyw0Q0FBSyxJQUFDLFNBQVMsRUFBQywrREFBK0Q7WUFDNUUsb0VBQUssU0FBUyxFQUFDLHNIQUFzSCxtQkFFL0g7WUFDTixvRUFBSyxTQUFTLEVBQUMsWUFBWTtnQkFDdkIsMkRBQUMsNENBQU0sSUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxRQUFRLGVBRTFCO2dCQUNULDJEQUFDLDRDQUFNLElBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxJQUFJLEVBQUMsUUFBUSxZQUUxQixDQUNQLENBQ0YsQ0FDTixDQUNUO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3B5dGhvbi13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vZnJvbnRlbmQvc3JjL3N0eWxlcy9pbmRleC5zY3NzPzYzM2MiLCJ3ZWJwYWNrOi8vcHl0aG9uLXdlYnBhY2stYm9pbGVycGxhdGUvLi9mcm9udGVuZC9zcmMvYXBwbGljYXRpb24vYXBwX3JlYWN0LnRzeCIsIndlYnBhY2s6Ly9weXRob24td2VicGFjay1ib2lsZXJwbGF0ZS8uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL0Fub255bW91c0xvZ2luLnRzeCIsIndlYnBhY2s6Ly9weXRob24td2VicGFjay1ib2lsZXJwbGF0ZS8uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL0Nsb2NrLnRzeCIsIndlYnBhY2s6Ly9weXRob24td2VicGFjay1ib2lsZXJwbGF0ZS8uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vcHl0aG9uLXdlYnBhY2stYm9pbGVycGxhdGUvLi9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9Ub3BiYXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvY2Fsc0pzb25TdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDE3MjkxNDE2NjIyNjZcbiAgICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7fSk7XG4gICAgICAgIC8vIG9ubHkgaW52YWxpZGF0ZSB3aGVuIGxvY2FscyBjaGFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAhPT0gbG9jYWxzSnNvblN0cmluZ1xuICAgICAgICApIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IGxvY2Fsc0pzb25TdHJpbmc7XG4gICAgICAgICAgY3NzUmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdyZWFjdC1kb20vY2xpZW50J1xuaW1wb3J0IHsgVG9wYmFyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Ub3BiYXInXG5cbmltcG9ydCAnLi4vc3R5bGVzL2luZGV4LnNjc3MnXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcbmltcG9ydCB7IEFub255bW91c0xvZ2luIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Bbm9ueW1vdXNMb2dpbidcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcbmlmIChyb290KSB7XG4gICAgY29uc3Qgcm9vdEVsZW1lbnQgPSBjcmVhdGVSb290KHJvb3QpXG4gICAgcm9vdEVsZW1lbnQucmVuZGVyKG51bGwpXG59XG5jb25zdCB0b3BiYXJSb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvcGJhcicpXG5pZiAodG9wYmFyUm9vdCkge1xuICAgIGNvbnN0IHRvcGJhclJvb3RFbGVtZW50ID0gY3JlYXRlUm9vdCh0b3BiYXJSb290KVxuICAgIHRvcGJhclJvb3RFbGVtZW50LnJlbmRlcig8VG9wYmFyIC8+KVxuICAgIC8vIGNvbnNvbGUubG9nKCd0b3BiYXJSb290JywgdG9wYmFyUm9vdClcbn1cblxuY29uc3QgZm9vdGVyUm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXInKVxuaWYgKGZvb3RlclJvb3QpIHtcbiAgICBjb25zdCBmb290ZXJSb290RWxlbWVudCA9IGNyZWF0ZVJvb3QoZm9vdGVyUm9vdClcbiAgICBmb290ZXJSb290RWxlbWVudC5yZW5kZXIoPEZvb3RlciAvPilcbn1cblxuY29uc3QgYW5vbnltb3VzTG9naW5Sb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fub255bW91cy1sb2dpbicpXG5pZiAoYW5vbnltb3VzTG9naW5Sb290KSB7XG4gICAgY29uc3QgYW5vbnltb3VzTG9naW5Sb290RWxlbWVudCA9IGNyZWF0ZVJvb3QoYW5vbnltb3VzTG9naW5Sb290KVxuICAgIGFub255bW91c0xvZ2luUm9vdEVsZW1lbnQucmVuZGVyKDxBbm9ueW1vdXNMb2dpbiAvPilcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjcnlzdGFsTWluZEltYWdlIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvQ00tSU1HLnBuZydcblxuZXhwb3J0IGNvbnN0IEFub255bW91c0xvZ2luID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUtY2VudGVyXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXtjcnlzdGFsTWluZEltYWdlfVxuICAgICAgICAgICAgICAgIGhlaWdodD17MjAwfVxuICAgICAgICAgICAgICAgIHdpZHRoPXsyMDB9XG4gICAgICAgICAgICAgICAgYWx0PVwiQ3J5c3RhbCBNaW5kIExvZ29cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFuaW1hdGUtYm91bmNlLXNsb3cgc2VsZWN0LW5vbmUgcG9pbnRlci1ldmVudHMtbm9uZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY29uc3QgQ2xvY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUobmV3IERhdGUoKSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZShuZXcgRGF0ZSgpKVxuICAgICAgICB9LCAxMDAwKVxuXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKHRpbWVyKVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+e3RpbWUudG9Mb2NhbGVUaW1lU3RyaW5nKCl9PC9kaXY+XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbG9jayB9IGZyb20gJy4vQ2xvY2snXG5cbmV4cG9ydCBjb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgaC1mdWxsIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPENsb2NrIC8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB3LWZpdCBoLWZ1bGwgdGV4dC1ncmF5LTUwMFwiPmJ5IGFuZHlncjFuMSBmb3IgSGFydmFyZCB1bml2ZXJzaXR5PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJ1dHRvbiwgU3BhY2UgfSBmcm9tICdhbnRkJ1xuXG5leHBvcnQgY29uc3QgVG9wYmFyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8U3BhY2UgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gZmxleC1jb2wgbWQ6ZmxleC1yb3cgZ2FwLTEwIG1kOmdhcC0wIHAtNVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC02eGwgcHgtMiBmb250LWthdXNoYW4gdGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgYmctZ3JhZGllbnQtdG8tciBmcm9tLWluZGlnby01MDAgdmlhLXB1cnBsZS01MDAgdG8tcGluay01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgQ3J5c3RhbCBNaW5kXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2hhcGU9XCJyb3VuZFwiIHR5cGU9XCJkYXNoZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEpvaW4gbm93XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNoYXBlPVwicm91bmRcIiB0eXBlPVwiZGFzaGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvU3BhY2U+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==