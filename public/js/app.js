"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

window.addEventListener("DOMContentLoaded", function (e) {
  this.window.showPassword = function showPassword(id) {
    var password = document.getElementById(id);
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };
  var headers = document.querySelectorAll('.form-collapsible-header');
  headers.forEach(function (header) {
    header.addEventListener('click', function () {
      var content = header.nextElementSibling;
      var arrow = header.querySelector('.form-arrow');
      if (content.classList.contains('open')) {
        content.classList.remove('open');
        content.style.maxHeight = null;
        content.style.padding = '0 10px';
        arrow.innerHTML = '&#9660';
      } else {
        content.classList.add('open');
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.padding = '10px';
        arrow.innerHTML = '&#9650';
      }
    });
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2pzL2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFxQjtBQUNyQkEsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxVQUFTQyxDQUFDLEVBQUU7RUFFcEQsSUFBSSxDQUFDRixNQUFNLENBQUNHLFlBQVksR0FBRyxTQUFTQSxZQUFZQSxDQUFDQyxFQUFFLEVBQUM7SUFDNUMsSUFBSUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQ0gsRUFBRSxDQUFDO0lBQzlDLElBQUlDLFFBQVEsQ0FBQ0csSUFBSSxLQUFLLFVBQVUsRUFBRTtNQUMxQkgsUUFBUSxDQUFDRyxJQUFJLEdBQUcsTUFBTTtJQUM5QixDQUFDLE1BQU07TUFDSEgsUUFBUSxDQUFDRyxJQUFJLEdBQUcsVUFBVTtJQUM5QjtFQUNKLENBQUM7RUFFRCxJQUFNQyxPQUFPLEdBQUdILFFBQVEsQ0FBQ0ksZ0JBQWdCLENBQUMsMEJBQTBCLENBQUM7RUFFckVELE9BQU8sQ0FBQ0UsT0FBTyxDQUFDLFVBQUFDLE1BQU0sRUFBSTtJQUN0QkEsTUFBTSxDQUFDWCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtNQUNuQyxJQUFNWSxPQUFPLEdBQUdELE1BQU0sQ0FBQ0Usa0JBQWtCO01BQ3pDLElBQU1DLEtBQUssR0FBR0gsTUFBTSxDQUFDSSxhQUFhLENBQUMsYUFBYSxDQUFDO01BQ2pELElBQUlILE9BQU8sQ0FBQ0ksU0FBUyxDQUFDQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDcENMLE9BQU8sQ0FBQ0ksU0FBUyxDQUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2hDTixPQUFPLENBQUNPLEtBQUssQ0FBQ0MsU0FBUyxHQUFHLElBQUk7UUFDOUJSLE9BQU8sQ0FBQ08sS0FBSyxDQUFDRSxPQUFPLEdBQUcsUUFBUTtRQUNoQ1AsS0FBSyxDQUFDUSxTQUFTLEdBQUcsUUFBUTtNQUc5QixDQUFDLE1BQU07UUFDSFYsT0FBTyxDQUFDSSxTQUFTLENBQUNPLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDN0JYLE9BQU8sQ0FBQ08sS0FBSyxDQUFDQyxTQUFTLEdBQUdSLE9BQU8sQ0FBQ1ksWUFBWSxHQUFHLElBQUk7UUFDckRaLE9BQU8sQ0FBQ08sS0FBSyxDQUFDRSxPQUFPLEdBQUcsTUFBTTtRQUM5QlAsS0FBSyxDQUFDUSxTQUFTLEdBQUcsUUFBUTtNQUM5QjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUVOLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDbEN3QjtBQUMxQnZCLE1BQU0sQ0FBQzBCLEtBQUssR0FBR0EsNkNBQUs7QUFFcEIxQixNQUFNLENBQUMwQixLQUFLLENBQUNDLFFBQVEsQ0FBQ2xCLE9BQU8sQ0FBQ21CLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLGdCQUFnQjs7Ozs7Ozs7Ozs7QUNIM0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3Nhc3MvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oZSkge1xuXG4gICAgdGhpcy53aW5kb3cuc2hvd1Bhc3N3b3JkID0gZnVuY3Rpb24gc2hvd1Bhc3N3b3JkKGlkKXtcbiAgICAgICAgICAgIGxldCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgaWYgKHBhc3N3b3JkLnR5cGUgPT09IFwicGFzc3dvcmRcIikge1xuICAgICAgICAgICAgICAgIHBhc3N3b3JkLnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhc3N3b3JkLnR5cGUgPSBcInBhc3N3b3JkXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tY29sbGFwc2libGUtaGVhZGVyJyk7XG5cbiAgICBoZWFkZXJzLmZvckVhY2goaGVhZGVyID0+IHtcbiAgICAgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGhlYWRlci5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICBjb25zdCBhcnJvdyA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKCcuZm9ybS1hcnJvdycpO1xuICAgICAgICAgICAgaWYgKGNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IG51bGw7XG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5wYWRkaW5nID0gJzAgMTBweCc7XG4gICAgICAgICAgICAgICAgYXJyb3cuaW5uZXJIVE1MID0gJyYjOTY2MCc7XG5cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLnBhZGRpbmcgPSAnMTBweCc7XG4gICAgICAgICAgICAgICAgYXJyb3cuaW5uZXJIVE1MID0gJyYjOTY1MCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG59KTtcblxuXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xud2luZG93LmF4aW9zID0gYXhpb3M7XG5cbndpbmRvdy5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInNob3dQYXNzd29yZCIsImlkIiwicGFzc3dvcmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidHlwZSIsImhlYWRlcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImhlYWRlciIsImNvbnRlbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJhcnJvdyIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsInN0eWxlIiwibWF4SGVpZ2h0IiwicGFkZGluZyIsImlubmVySFRNTCIsImFkZCIsInNjcm9sbEhlaWdodCIsImF4aW9zIiwiZGVmYXVsdHMiLCJjb21tb24iXSwic291cmNlUm9vdCI6IiJ9