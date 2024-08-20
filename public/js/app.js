"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

window.addEventListener("DOMContentLoaded", function () {
  function showPassword(id) {
    console.log('id in show password: ' + id);
    var password = document.getElementById(id);
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

/***/ "./resources/sass/app.sass":
/*!*********************************!*\
  !*** ./resources/sass/app.sass ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/sass/app.sass")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2pzL2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFxQjtBQUNyQkEsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFXO0VBRW5ELFNBQVNDLFlBQVlBLENBQUNDLEVBQUUsRUFBQztJQUNyQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsdUJBQXVCLEdBQUNGLEVBQUUsQ0FBQztJQUN2QyxJQUFJRyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDTCxFQUFFLENBQUM7SUFDMUMsSUFBSUcsUUFBUSxDQUFDRyxJQUFJLEtBQUssVUFBVSxFQUFFO01BQzFCSCxRQUFRLENBQUNHLElBQUksR0FBRyxNQUFNO0lBQzlCLENBQUMsTUFBTTtNQUNISCxRQUFRLENBQUNHLElBQUksR0FBRyxVQUFVO0lBQzlCO0VBQ0o7QUFDSixDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQ1p3QjtBQUMxQlQsTUFBTSxDQUFDVSxLQUFLLEdBQUdBLDZDQUFLO0FBRXBCVixNQUFNLENBQUNVLEtBQUssQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLENBQUNDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLGdCQUFnQjs7Ozs7Ozs7Ozs7QUNIM0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3Nhc3MvYXBwLnNhc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICBmdW5jdGlvbiBzaG93UGFzc3dvcmQoaWQpe1xuICAgICAgICBjb25zb2xlLmxvZygnaWQgaW4gc2hvdyBwYXNzd29yZDogJytpZCk7XG4gICAgICAgIGxldCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgaWYgKHBhc3N3b3JkLnR5cGUgPT09IFwicGFzc3dvcmRcIikge1xuICAgICAgICAgICAgICAgIHBhc3N3b3JkLnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhc3N3b3JkLnR5cGUgPSBcInBhc3N3b3JkXCI7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG53aW5kb3cuYXhpb3MgPSBheGlvcztcblxud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaG93UGFzc3dvcmQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJwYXNzd29yZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0eXBlIiwiYXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iXSwic291cmNlUm9vdCI6IiJ9