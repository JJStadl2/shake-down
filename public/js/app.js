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
  this.window.addListItem = function addListItem() {
    var finalIElement = document.getElementById('final-i');
    var itemTable = document.getElementById('item-table-body');
    var finalI = finalIElement.value;
    finalIElement.value = +finalI + 1;
    var row = document.createElement("tr");

    // Create cells and input elements

    var cell0 = document.createElement("th");
    cell0.scope = 'row';
    cell0.innerHTML = finalI;
    var cell1 = document.createElement("td");
    var counter = document.createElement("input");
    counter.type = "hidden";
    counter.name = "id[]";
    counter.id = 'id-' + finalI;
    counter.value = finalI;
    counter.setAttribute('data-column-name', 'id');
    var itemName = document.createElement("input");
    itemName.type = "text";
    itemName.name = "itemName[]";
    itemName.id = 'itemName-' + finalI;
    itemName.value = '';
    itemName.setAttribute('data-column-name', 'item_name');
    itemName.placeholder = 'Enter the name of the item';
    // itemName.onclick = '';
    cell1.appendChild(counter);
    cell1.appendChild(itemName);
    var cell2 = document.createElement("td");
    var itemWeight = document.createElement("input");
    itemWeight.type = "number";
    itemWeight.name = "itemWeight[]";
    itemWeight.id = 'itemWeight-' + finalI;
    itemWeight.value = 0;
    itemWeight.setAttribute('data-column-name', 'item_weight');
    cell2.appendChild(itemWeight);
    var cell3 = document.createElement("td");
    var ouncesRadio = document.createElement("input");
    ouncesRadio.className = 'form-check-input';
    ouncesRadio.type = "radio";
    ouncesRadio.name = "uom[]";
    ouncesRadio.id = 'uom-oz-' + finalI;
    ouncesRadio.setAttribute('data-column-name', 'in_ounces');
    ouncesRadio.checked = true;
    var ouncesRadioLabel = document.createElement("label");
    ouncesRadioLabel.className = 'form-check-label oz-radio';
    ouncesRadioLabel.htmlFor = 'uom-oz-' + finalI;
    ouncesRadioLabel.innerHTML = 'Ounces';
    var gramsRadio = document.createElement("input");
    gramsRadio.className = 'form-check-input';
    gramsRadio.type = "radio";
    gramsRadio.name = "uom[]";
    gramsRadio.id = 'uom-gram-' + finalI;
    gramsRadio.setAttribute('data-column-name', 'in_grams');
    var gramsRadioLabel = document.createElement("label");
    gramsRadioLabel.className = 'form-check-label';
    gramsRadioLabel.htmlFor = 'uom-gram-' + finalI;
    gramsRadioLabel.innerHTML = 'Grams';
    cell3.appendChild(ouncesRadio);
    cell3.appendChild(ouncesRadioLabel);
    cell3.appendChild(gramsRadio);
    cell3.appendChild(gramsRadioLabel);

    // let cell4 = document.createElement("td");

    // var cell3 = document.createElement("td");
    // var input3 = document.createElement("input");
    // input3.type = "number";
    // input3.name = "price[]";
    // cell3.appendChild(input3);

    // Append cells to the row
    // row.appendChild(newItemHtml);
    row.appendChild(cell0);
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    // row.appendChild(cell4);

    // Append the row to the table
    itemTable.appendChild(row);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFDOUJSLE9BQU8sQ0FBQ08sS0FBSyxDQUFDRSxPQUFPLEdBQUcsUUFBUTtRQUNoQ1AsS0FBSyxDQUFDeEIsU0FBUyxHQUFHLFFBQVE7TUFHOUIsQ0FBQyxNQUFNO1FBQ0hzQixPQUFPLENBQUNJLFNBQVMsQ0FBQ00sR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUM3QlYsT0FBTyxDQUFDTyxLQUFLLENBQUNDLFNBQVMsR0FBR1IsT0FBTyxDQUFDVyxZQUFZLEdBQUcsSUFBSTtRQUNyRFgsT0FBTyxDQUFDTyxLQUFLLENBQUNFLE9BQU8sR0FBRyxNQUFNO1FBQzlCUCxLQUFLLENBQUN4QixTQUFTLEdBQUcsUUFBUTtNQUM5QjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUVOLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDdEl3QjtBQUMxQmxCLE1BQU0sQ0FBQ29ELEtBQUssR0FBR0EsNkNBQUs7QUFFcEJwRCxNQUFNLENBQUNvRCxLQUFLLENBQUNDLFFBQVEsQ0FBQ2pCLE9BQU8sQ0FBQ2tCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLGdCQUFnQjs7Ozs7Ozs7Ozs7QUNIM0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3Nhc3MvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oZSkge1xuXG4gICAgdGhpcy53aW5kb3cuc2hvd1Bhc3N3b3JkID0gZnVuY3Rpb24gc2hvd1Bhc3N3b3JkKGlkKXtcbiAgICAgICAgICAgIGxldCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgaWYgKHBhc3N3b3JkLnR5cGUgPT09IFwicGFzc3dvcmRcIikge1xuICAgICAgICAgICAgICAgIHBhc3N3b3JkLnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhc3N3b3JkLnR5cGUgPSBcInBhc3N3b3JkXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhpcy53aW5kb3cuYWRkTGlzdEl0ZW0gPSBmdW5jdGlvbiBhZGRMaXN0SXRlbSgpe1xuXG4gICAgICAgIGxldCBmaW5hbElFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmFsLWknKTtcbiAgICAgICAgbGV0IGl0ZW1UYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLXRhYmxlLWJvZHknKTtcbiAgICAgICAgbGV0IGZpbmFsSSA9IGZpbmFsSUVsZW1lbnQudmFsdWU7XG4gICAgICAgIGZpbmFsSUVsZW1lbnQudmFsdWUgPSArZmluYWxJICsgMTtcblxuICAgICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBjZWxscyBhbmQgaW5wdXQgZWxlbWVudHNcblxuICAgICAgICBsZXQgY2VsbDAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gICAgICAgIGNlbGwwLnNjb3BlID0gJ3Jvdyc7XG4gICAgICAgIGNlbGwwLmlubmVySFRNTCA9IGZpbmFsSTtcblxuICAgICAgICBsZXQgY2VsbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG5cbiAgICAgICAgbGV0IGNvdW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGNvdW50ZXIudHlwZSA9IFwiaGlkZGVuXCI7XG4gICAgICAgIGNvdW50ZXIubmFtZSA9IFwiaWRbXVwiO1xuICAgICAgICBjb3VudGVyLmlkID0gJ2lkLScrZmluYWxJO1xuICAgICAgICBjb3VudGVyLnZhbHVlID0gZmluYWxJO1xuICAgICAgICBjb3VudGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1jb2x1bW4tbmFtZScsJ2lkJyk7XG5cbiAgICAgICAgbGV0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBpdGVtTmFtZS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgIGl0ZW1OYW1lLm5hbWUgPSBcIml0ZW1OYW1lW11cIjtcbiAgICAgICAgaXRlbU5hbWUuaWQgPSAnaXRlbU5hbWUtJytmaW5hbEk7XG4gICAgICAgIGl0ZW1OYW1lLnZhbHVlID0gJyc7XG4gICAgICAgIGl0ZW1OYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS1jb2x1bW4tbmFtZScsJ2l0ZW1fbmFtZScpO1xuICAgICAgICBpdGVtTmFtZS5wbGFjZWhvbGRlciA9ICdFbnRlciB0aGUgbmFtZSBvZiB0aGUgaXRlbSc7XG4gICAgICAgIC8vIGl0ZW1OYW1lLm9uY2xpY2sgPSAnJztcbiAgICAgICAgY2VsbDEuYXBwZW5kQ2hpbGQoY291bnRlcik7XG4gICAgICAgIGNlbGwxLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcblxuICAgICAgICBsZXQgY2VsbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIGxldCBpdGVtV2VpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBpdGVtV2VpZ2h0LnR5cGUgPSBcIm51bWJlclwiO1xuICAgICAgICBpdGVtV2VpZ2h0Lm5hbWUgPSBcIml0ZW1XZWlnaHRbXVwiO1xuICAgICAgICBpdGVtV2VpZ2h0LmlkID0gJ2l0ZW1XZWlnaHQtJytmaW5hbEk7XG4gICAgICAgIGl0ZW1XZWlnaHQudmFsdWUgPSAwO1xuICAgICAgICBpdGVtV2VpZ2h0LnNldEF0dHJpYnV0ZSgnZGF0YS1jb2x1bW4tbmFtZScsJ2l0ZW1fd2VpZ2h0Jyk7XG4gICAgICAgIGNlbGwyLmFwcGVuZENoaWxkKGl0ZW1XZWlnaHQpO1xuXG4gICAgICAgIGxldCBjZWxsMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgbGV0IG91bmNlc1JhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBvdW5jZXNSYWRpby5jbGFzc05hbWUgPSAnZm9ybS1jaGVjay1pbnB1dCc7XG4gICAgICAgIG91bmNlc1JhZGlvLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgICAgIG91bmNlc1JhZGlvLm5hbWUgPSBcInVvbVtdXCI7XG4gICAgICAgIG91bmNlc1JhZGlvLmlkID0gJ3VvbS1vei0nK2ZpbmFsSTtcbiAgICAgICAgb3VuY2VzUmFkaW8uc2V0QXR0cmlidXRlKCdkYXRhLWNvbHVtbi1uYW1lJywnaW5fb3VuY2VzJyk7XG4gICAgICAgIG91bmNlc1JhZGlvLmNoZWNrZWQgPSB0cnVlO1xuXG4gICAgICAgIGxldCBvdW5jZXNSYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBvdW5jZXNSYWRpb0xhYmVsLmNsYXNzTmFtZSA9ICdmb3JtLWNoZWNrLWxhYmVsIG96LXJhZGlvJztcbiAgICAgICAgb3VuY2VzUmFkaW9MYWJlbC5odG1sRm9yID0gJ3VvbS1vei0nK2ZpbmFsSTtcbiAgICAgICAgb3VuY2VzUmFkaW9MYWJlbC5pbm5lckhUTUwgPSAnT3VuY2VzJztcblxuICAgICAgICBsZXQgZ3JhbXNSYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgZ3JhbXNSYWRpby5jbGFzc05hbWUgPSAnZm9ybS1jaGVjay1pbnB1dCc7XG4gICAgICAgIGdyYW1zUmFkaW8udHlwZSA9IFwicmFkaW9cIjtcbiAgICAgICAgZ3JhbXNSYWRpby5uYW1lID0gXCJ1b21bXVwiO1xuICAgICAgICBncmFtc1JhZGlvLmlkID0gJ3VvbS1ncmFtLScrZmluYWxJO1xuICAgICAgICBncmFtc1JhZGlvLnNldEF0dHJpYnV0ZSgnZGF0YS1jb2x1bW4tbmFtZScsJ2luX2dyYW1zJyk7XG5cbiAgICAgICAgbGV0IGdyYW1zUmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgZ3JhbXNSYWRpb0xhYmVsLmNsYXNzTmFtZSA9ICdmb3JtLWNoZWNrLWxhYmVsJztcbiAgICAgICAgZ3JhbXNSYWRpb0xhYmVsLmh0bWxGb3IgPSAndW9tLWdyYW0tJytmaW5hbEk7XG4gICAgICAgIGdyYW1zUmFkaW9MYWJlbC5pbm5lckhUTUwgPSAnR3JhbXMnO1xuXG4gICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKG91bmNlc1JhZGlvKTtcbiAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQob3VuY2VzUmFkaW9MYWJlbCk7XG4gICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKGdyYW1zUmFkaW8pO1xuICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChncmFtc1JhZGlvTGFiZWwpO1xuXG4gICAgICAgIC8vIGxldCBjZWxsNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcblxuXG5cblxuICAgICAgICAvLyB2YXIgY2VsbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIC8vIHZhciBpbnB1dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIC8vIGlucHV0My50eXBlID0gXCJudW1iZXJcIjtcbiAgICAgICAgLy8gaW5wdXQzLm5hbWUgPSBcInByaWNlW11cIjtcbiAgICAgICAgLy8gY2VsbDMuYXBwZW5kQ2hpbGQoaW5wdXQzKTtcblxuICAgICAgICAvLyBBcHBlbmQgY2VsbHMgdG8gdGhlIHJvd1xuICAgICAgICAvLyByb3cuYXBwZW5kQ2hpbGQobmV3SXRlbUh0bWwpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDApO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDEpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDIpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDMpO1xuICAgICAgICAvLyByb3cuYXBwZW5kQ2hpbGQoY2VsbDQpO1xuXG4gICAgICAgIC8vIEFwcGVuZCB0aGUgcm93IHRvIHRoZSB0YWJsZVxuICAgICAgICBpdGVtVGFibGUuYXBwZW5kQ2hpbGQocm93KTtcblxuXG5cbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tY29sbGFwc2libGUtaGVhZGVyJyk7XG5cbiAgICBoZWFkZXJzLmZvckVhY2goaGVhZGVyID0+IHtcbiAgICAgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGhlYWRlci5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICBjb25zdCBhcnJvdyA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKCcuZm9ybS1hcnJvdycpO1xuICAgICAgICAgICAgaWYgKGNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IG51bGw7XG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5wYWRkaW5nID0gJzAgMTBweCc7XG4gICAgICAgICAgICAgICAgYXJyb3cuaW5uZXJIVE1MID0gJyYjOTY2MCc7XG5cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLnBhZGRpbmcgPSAnMTBweCc7XG4gICAgICAgICAgICAgICAgYXJyb3cuaW5uZXJIVE1MID0gJyYjOTY1MCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG59KTtcblxuXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xud2luZG93LmF4aW9zID0gYXhpb3M7XG5cbndpbmRvdy5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInNob3dQYXNzd29yZCIsImlkIiwicGFzc3dvcmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidHlwZSIsImFkZExpc3RJdGVtIiwiZmluYWxJRWxlbWVudCIsIml0ZW1UYWJsZSIsImZpbmFsSSIsInZhbHVlIiwicm93IiwiY3JlYXRlRWxlbWVudCIsImNlbGwwIiwic2NvcGUiLCJpbm5lckhUTUwiLCJjZWxsMSIsImNvdW50ZXIiLCJuYW1lIiwic2V0QXR0cmlidXRlIiwiaXRlbU5hbWUiLCJwbGFjZWhvbGRlciIsImFwcGVuZENoaWxkIiwiY2VsbDIiLCJpdGVtV2VpZ2h0IiwiY2VsbDMiLCJvdW5jZXNSYWRpbyIsImNsYXNzTmFtZSIsImNoZWNrZWQiLCJvdW5jZXNSYWRpb0xhYmVsIiwiaHRtbEZvciIsImdyYW1zUmFkaW8iLCJncmFtc1JhZGlvTGFiZWwiLCJoZWFkZXJzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJoZWFkZXIiLCJjb250ZW50IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiYXJyb3ciLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJzdHlsZSIsIm1heEhlaWdodCIsInBhZGRpbmciLCJhZGQiLCJzY3JvbGxIZWlnaHQiLCJheGlvcyIsImRlZmF1bHRzIiwiY29tbW9uIl0sInNvdXJjZVJvb3QiOiIifQ==