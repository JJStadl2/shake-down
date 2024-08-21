"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

document.addEventListener("DOMContentLoaded", function (e) {
  console.log('ready');
  function showPasswordText() {
    console.log('id in show password: ');
    var password = document.getElementById('inputPassword');
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  }
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");

window.axios = axios__WEBPACK_IMPORTED_MODULE_0__["default"];
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/sass/app.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2pzL2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFxQjtBQUNyQkEsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxVQUFTQyxDQUFDLEVBQUU7RUFDdERDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztFQUNwQixTQUFTQyxnQkFBZ0JBLENBQUEsRUFBRTtJQUN2QkYsT0FBTyxDQUFDQyxHQUFHLENBQUMsdUJBQXVCLENBQUM7SUFDcEMsSUFBSUUsUUFBUSxHQUFHTixRQUFRLENBQUNPLGNBQWMsQ0FBQyxlQUFlLENBQUM7SUFDdkQsSUFBSUQsUUFBUSxDQUFDRSxJQUFJLEtBQUssVUFBVSxFQUFFO01BQzFCRixRQUFRLENBQUNFLElBQUksR0FBRyxNQUFNO0lBQzlCLENBQUMsTUFBTTtNQUNIRixRQUFRLENBQUNFLElBQUksR0FBRyxVQUFVO0lBQzlCO0VBQ0o7QUFDSixDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQ1p3QjtBQUMxQkUsTUFBTSxDQUFDRCxLQUFLLEdBQUdBLDZDQUFLO0FBRXBCQyxNQUFNLENBQUNELEtBQUssQ0FBQ0UsUUFBUSxDQUFDQyxPQUFPLENBQUNDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLGdCQUFnQjs7Ozs7Ozs7Ozs7QUNIM0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3Nhc3MvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbihlKSB7XG4gICAgY29uc29sZS5sb2coJ3JlYWR5Jyk7XG4gICAgZnVuY3Rpb24gc2hvd1Bhc3N3b3JkVGV4dCgpe1xuICAgICAgICBjb25zb2xlLmxvZygnaWQgaW4gc2hvdyBwYXNzd29yZDogJyk7XG4gICAgICAgIGxldCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFBhc3N3b3JkJyk7XG4gICAgICAgIGlmIChwYXNzd29yZC50eXBlID09PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgICAgICAgICAgICBwYXNzd29yZC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXNzd29yZC50eXBlID0gXCJwYXNzd29yZFwiO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cblxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbndpbmRvdy5heGlvcyA9IGF4aW9zO1xuXG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJzaG93UGFzc3dvcmRUZXh0IiwicGFzc3dvcmQiLCJnZXRFbGVtZW50QnlJZCIsInR5cGUiLCJheGlvcyIsIndpbmRvdyIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiJdLCJzb3VyY2VSb290IjoiIn0=