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
    var listUOM = document.getElementById('list-uom').value;
    var finalIElement = document.getElementById('final-i');
    var itemTable = document.getElementById('item-table-body');
    var finalI = finalIElement.value;
    finalIElement.value = +finalI + 1;
    console.log('list uom in js: ' + listUOM);
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

    //for radios on click-> getConversionRate();.
    //add pounds and kilos?
    //set total label on click
    var cell3 = document.createElement("td");
    if (listUOM === 'us') {
      var ouncesRadio = document.createElement("input");
      ouncesRadio.className = 'form-check-input';
      ouncesRadio.type = "radio";
      ouncesRadio.name = "uom-" + finalI + "[]";
      ouncesRadio.id = 'uom-oz-' + finalI;
      ouncesRadio.setAttribute('data-column-name', 'in_ounces');
      ouncesRadio.checked = true;
      var ouncesRadioLabel = document.createElement("label");
      ouncesRadioLabel.className = 'form-check-label oz-radio';
      ouncesRadioLabel.htmlFor = 'uom-oz-' + finalI;
      ouncesRadioLabel.innerHTML = 'OZ';
      var poundsRadio = document.createElement("input");
      poundsRadio.className = 'form-check-input';
      poundsRadio.type = "radio";
      poundsRadio.name = "uom-" + finalI + "[]";
      poundsRadio.id = 'uom-lbs-' + finalI;
      poundsRadio.setAttribute('data-column-name', 'in_pounds');
      var poundsRadioLabel = document.createElement("label");
      poundsRadioLabel.className = 'form-check-label oz-radio';
      poundsRadioLabel.htmlFor = 'uom-lbs-' + finalI;
      poundsRadioLabel.innerHTML = 'LBS';
      cell3.appendChild(ouncesRadio);
      cell3.appendChild(ouncesRadioLabel);
      cell3.appendChild(poundsRadio);
      cell3.appendChild(poundsRadioLabel);
    } else {
      var gramsRadio = document.createElement("input");
      gramsRadio.className = 'form-check-input';
      gramsRadio.type = "radio";
      gramsRadio.name = "uom-" + finalI + "[]";
      gramsRadio.id = 'uom-gram-' + finalI;
      gramsRadio.setAttribute('data-column-name', 'in_grams');
      var gramsRadioLabel = document.createElement("label");
      gramsRadioLabel.className = 'form-check-label';
      gramsRadioLabel.htmlFor = 'uom-gram-' + finalI;
      gramsRadioLabel.innerHTML = 'Grams';
      var kilosRadio = document.createElement("input");
      kilosRadio.className = 'form-check-input';
      kilosRadio.type = "radio";
      kilosRadio.name = "uom-" + finalI + "[]";
      kilosRadio.id = 'uom-kilo-' + finalI;
      kilosRadio.setAttribute('data-column-name', 'in_grams');
      var kilosRadioLabel = document.createElement("label");
      kilosRadioLabel.className = 'form-check-label';
      kilosRadioLabel.htmlFor = 'uom-kg-' + finalI;
      kilosRadioLabel.innerHTML = 'KG';
      cell3.appendChild(gramsRadio);
      cell3.appendChild(gramsRadioLabel);
      cell3.appendChild(kilosRadio);
      cell3.appendChild(kilosRadioLabel);
    }

    //on change update and run total line calc.
    var cell4 = document.createElement("td");
    var packedAmount = document.createElement("input");
    packedAmount.type = "number";
    packedAmount.name = "packedAmount[]";
    packedAmount.id = 'packedAmount-' + finalI;
    packedAmount.value = 1;
    packedAmount.setAttribute('data-column-name', 'amount');
    cell4.appendChild(packedAmount);
    var cell5 = document.createElement("td");
    var totalLineWeight = document.createElement("input");
    totalLineWeight.type = "number";
    totalLineWeight.name = "totalLineWeight[]";
    totalLineWeight.id = 'totalLineWeight-' + finalI;
    totalLineWeight.value = 0; //getLineTotalWeight();
    totalLineWeight.setAttribute('data-column-name', 'total_line_weight'); //add to DB
    cell5.appendChild(totalLineWeight);

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
    row.appendChild(cell4);
    row.appendChild(cell5);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxNQUFNLEVBQUk7SUFDdEJBLE1BQU0sQ0FBQ2pELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO01BQ25DLElBQU1rRCxPQUFPLEdBQUdELE1BQU0sQ0FBQ0Usa0JBQWtCO01BQ3pDLElBQU1DLEtBQUssR0FBR0gsTUFBTSxDQUFDSSxhQUFhLENBQUMsYUFBYSxDQUFDO01BQ2pELElBQUlILE9BQU8sQ0FBQ0ksU0FBUyxDQUFDQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDcENMLE9BQU8sQ0FBQ0ksU0FBUyxDQUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2hDTixPQUFPLENBQUNPLEtBQUssQ0FBQ0MsU0FBUyxHQUFHLElBQUk7UUFDOUJSLE9BQU8sQ0FBQ08sS0FBSyxDQUFDRSxPQUFPLEdBQUcsUUFBUTtRQUNoQ1AsS0FBSyxDQUFDaEMsU0FBUyxHQUFHLFFBQVE7TUFHOUIsQ0FBQyxNQUFNO1FBQ0g4QixPQUFPLENBQUNJLFNBQVMsQ0FBQ00sR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUM3QlYsT0FBTyxDQUFDTyxLQUFLLENBQUNDLFNBQVMsR0FBR1IsT0FBTyxDQUFDVyxZQUFZLEdBQUcsSUFBSTtRQUNyRFgsT0FBTyxDQUFDTyxLQUFLLENBQUNFLE9BQU8sR0FBRyxNQUFNO1FBQzlCUCxLQUFLLENBQUNoQyxTQUFTLEdBQUcsUUFBUTtNQUM5QjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUVOLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDak13QjtBQUMxQnJCLE1BQU0sQ0FBQytELEtBQUssR0FBR0EsNkNBQUs7QUFFcEIvRCxNQUFNLENBQUMrRCxLQUFLLENBQUNDLFFBQVEsQ0FBQ2pCLE9BQU8sQ0FBQ2tCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLGdCQUFnQjs7Ozs7Ozs7Ozs7QUNIM0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3Nhc3MvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oZSkge1xuXG4gICAgdGhpcy53aW5kb3cuc2hvd1Bhc3N3b3JkID0gZnVuY3Rpb24gc2hvd1Bhc3N3b3JkKGlkKXtcbiAgICAgICAgICAgIGxldCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgaWYgKHBhc3N3b3JkLnR5cGUgPT09IFwicGFzc3dvcmRcIikge1xuICAgICAgICAgICAgICAgIHBhc3N3b3JkLnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhc3N3b3JkLnR5cGUgPSBcInBhc3N3b3JkXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhpcy53aW5kb3cuYWRkTGlzdEl0ZW0gPSBmdW5jdGlvbiBhZGRMaXN0SXRlbSgpe1xuXG4gICAgICAgIGxldCBsaXN0VU9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QtdW9tJykudmFsdWU7XG4gICAgICAgIGxldCBmaW5hbElFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmFsLWknKTtcbiAgICAgICAgbGV0IGl0ZW1UYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLXRhYmxlLWJvZHknKTtcbiAgICAgICAgbGV0IGZpbmFsSSA9IGZpbmFsSUVsZW1lbnQudmFsdWU7XG4gICAgICAgIGZpbmFsSUVsZW1lbnQudmFsdWUgPSArZmluYWxJICsgMTtcbiAgICAgICAgY29uc29sZS5sb2coJ2xpc3QgdW9tIGluIGpzOiAnICtsaXN0VU9NKTtcblxuXG4gICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGNlbGxzIGFuZCBpbnB1dCBlbGVtZW50c1xuXG4gICAgICAgIGxldCBjZWxsMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgICAgICAgY2VsbDAuc2NvcGUgPSAncm93JztcbiAgICAgICAgY2VsbDAuaW5uZXJIVE1MID0gZmluYWxJO1xuXG4gICAgICAgIGxldCBjZWxsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcblxuICAgICAgICBsZXQgY291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgY291bnRlci50eXBlID0gXCJoaWRkZW5cIjtcbiAgICAgICAgY291bnRlci5uYW1lID0gXCJpZFtdXCI7XG4gICAgICAgIGNvdW50ZXIuaWQgPSAnaWQtJytmaW5hbEk7XG4gICAgICAgIGNvdW50ZXIudmFsdWUgPSBmaW5hbEk7XG4gICAgICAgIGNvdW50ZXIuc2V0QXR0cmlidXRlKCdkYXRhLWNvbHVtbi1uYW1lJywnaWQnKTtcblxuICAgICAgICBsZXQgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGl0ZW1OYW1lLnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgaXRlbU5hbWUubmFtZSA9IFwiaXRlbU5hbWVbXVwiO1xuICAgICAgICBpdGVtTmFtZS5pZCA9ICdpdGVtTmFtZS0nK2ZpbmFsSTtcbiAgICAgICAgaXRlbU5hbWUudmFsdWUgPSAnJztcbiAgICAgICAgaXRlbU5hbWUuc2V0QXR0cmlidXRlKCdkYXRhLWNvbHVtbi1uYW1lJywnaXRlbV9uYW1lJyk7XG4gICAgICAgIGl0ZW1OYW1lLnBsYWNlaG9sZGVyID0gJ0VudGVyIHRoZSBuYW1lIG9mIHRoZSBpdGVtJztcbiAgICAgICAgLy8gaXRlbU5hbWUub25jbGljayA9ICcnO1xuICAgICAgICBjZWxsMS5hcHBlbmRDaGlsZChjb3VudGVyKTtcbiAgICAgICAgY2VsbDEuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuXG4gICAgICAgIGxldCBjZWxsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgbGV0IGl0ZW1XZWlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGl0ZW1XZWlnaHQudHlwZSA9IFwibnVtYmVyXCI7XG4gICAgICAgIGl0ZW1XZWlnaHQubmFtZSA9IFwiaXRlbVdlaWdodFtdXCI7XG4gICAgICAgIGl0ZW1XZWlnaHQuaWQgPSAnaXRlbVdlaWdodC0nK2ZpbmFsSTtcbiAgICAgICAgaXRlbVdlaWdodC52YWx1ZSA9IDA7XG4gICAgICAgIGl0ZW1XZWlnaHQuc2V0QXR0cmlidXRlKCdkYXRhLWNvbHVtbi1uYW1lJywnaXRlbV93ZWlnaHQnKTtcbiAgICAgICAgY2VsbDIuYXBwZW5kQ2hpbGQoaXRlbVdlaWdodCk7XG5cbiAgICAgICAgLy9mb3IgcmFkaW9zIG9uIGNsaWNrLT4gZ2V0Q29udmVyc2lvblJhdGUoKTsuXG4gICAgICAgIC8vYWRkIHBvdW5kcyBhbmQga2lsb3M/XG4gICAgICAgIC8vc2V0IHRvdGFsIGxhYmVsIG9uIGNsaWNrXG4gICAgICAgIGxldCBjZWxsMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgaWYobGlzdFVPTSA9PT0gJ3VzJyl7XG5cbiAgICAgICAgICAgIGxldCBvdW5jZXNSYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIG91bmNlc1JhZGlvLmNsYXNzTmFtZSA9ICdmb3JtLWNoZWNrLWlucHV0JztcbiAgICAgICAgICAgIG91bmNlc1JhZGlvLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgICAgICAgICBvdW5jZXNSYWRpby5uYW1lID0gXCJ1b20tXCIrZmluYWxJK1wiW11cIjtcbiAgICAgICAgICAgIG91bmNlc1JhZGlvLmlkID0gJ3VvbS1vei0nK2ZpbmFsSTtcbiAgICAgICAgICAgIG91bmNlc1JhZGlvLnNldEF0dHJpYnV0ZSgnZGF0YS1jb2x1bW4tbmFtZScsJ2luX291bmNlcycpO1xuICAgICAgICAgICAgb3VuY2VzUmFkaW8uY2hlY2tlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGxldCBvdW5jZXNSYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICAgICAgb3VuY2VzUmFkaW9MYWJlbC5jbGFzc05hbWUgPSAnZm9ybS1jaGVjay1sYWJlbCBvei1yYWRpbyc7XG4gICAgICAgICAgICBvdW5jZXNSYWRpb0xhYmVsLmh0bWxGb3IgPSAndW9tLW96LScrZmluYWxJO1xuICAgICAgICAgICAgb3VuY2VzUmFkaW9MYWJlbC5pbm5lckhUTUwgPSAnT1onO1xuXG4gICAgICAgICAgICBsZXQgcG91bmRzUmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBwb3VuZHNSYWRpby5jbGFzc05hbWUgPSAnZm9ybS1jaGVjay1pbnB1dCc7XG4gICAgICAgICAgICBwb3VuZHNSYWRpby50eXBlID0gXCJyYWRpb1wiO1xuICAgICAgICAgICAgcG91bmRzUmFkaW8ubmFtZSA9IFwidW9tLVwiK2ZpbmFsSStcIltdXCI7XG4gICAgICAgICAgICBwb3VuZHNSYWRpby5pZCA9ICd1b20tbGJzLScrZmluYWxJO1xuICAgICAgICAgICAgcG91bmRzUmFkaW8uc2V0QXR0cmlidXRlKCdkYXRhLWNvbHVtbi1uYW1lJywnaW5fcG91bmRzJyk7XG5cbiAgICAgICAgICAgIGxldCBwb3VuZHNSYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICAgICAgcG91bmRzUmFkaW9MYWJlbC5jbGFzc05hbWUgPSAnZm9ybS1jaGVjay1sYWJlbCBvei1yYWRpbyc7XG4gICAgICAgICAgICBwb3VuZHNSYWRpb0xhYmVsLmh0bWxGb3IgPSAndW9tLWxicy0nK2ZpbmFsSTtcbiAgICAgICAgICAgIHBvdW5kc1JhZGlvTGFiZWwuaW5uZXJIVE1MID0gJ0xCUyc7XG5cbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKG91bmNlc1JhZGlvKTtcbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKG91bmNlc1JhZGlvTGFiZWwpO1xuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQocG91bmRzUmFkaW8pO1xuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQocG91bmRzUmFkaW9MYWJlbCk7XG5cbiAgICAgICAgfWVsc2V7XG5cbiAgICAgICAgICAgIGxldCBncmFtc1JhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgZ3JhbXNSYWRpby5jbGFzc05hbWUgPSAnZm9ybS1jaGVjay1pbnB1dCc7XG4gICAgICAgICAgICBncmFtc1JhZGlvLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgICAgICAgICBncmFtc1JhZGlvLm5hbWUgPSBcInVvbS1cIitmaW5hbEkrXCJbXVwiO1xuICAgICAgICAgICAgZ3JhbXNSYWRpby5pZCA9ICd1b20tZ3JhbS0nK2ZpbmFsSTtcbiAgICAgICAgICAgIGdyYW1zUmFkaW8uc2V0QXR0cmlidXRlKCdkYXRhLWNvbHVtbi1uYW1lJywnaW5fZ3JhbXMnKTtcblxuICAgICAgICAgICAgbGV0IGdyYW1zUmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgICAgIGdyYW1zUmFkaW9MYWJlbC5jbGFzc05hbWUgPSAnZm9ybS1jaGVjay1sYWJlbCc7XG4gICAgICAgICAgICBncmFtc1JhZGlvTGFiZWwuaHRtbEZvciA9ICd1b20tZ3JhbS0nK2ZpbmFsSTtcbiAgICAgICAgICAgIGdyYW1zUmFkaW9MYWJlbC5pbm5lckhUTUwgPSAnR3JhbXMnO1xuXG4gICAgICAgICAgICBsZXQga2lsb3NSYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGtpbG9zUmFkaW8uY2xhc3NOYW1lID0gJ2Zvcm0tY2hlY2staW5wdXQnO1xuICAgICAgICAgICAga2lsb3NSYWRpby50eXBlID0gXCJyYWRpb1wiO1xuICAgICAgICAgICAga2lsb3NSYWRpby5uYW1lID0gXCJ1b20tXCIrZmluYWxJK1wiW11cIjtcbiAgICAgICAgICAgIGtpbG9zUmFkaW8uaWQgPSAndW9tLWtpbG8tJytmaW5hbEk7XG4gICAgICAgICAgICBraWxvc1JhZGlvLnNldEF0dHJpYnV0ZSgnZGF0YS1jb2x1bW4tbmFtZScsJ2luX2dyYW1zJyk7XG5cbiAgICAgICAgICAgIGxldCBraWxvc1JhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgICAgICBraWxvc1JhZGlvTGFiZWwuY2xhc3NOYW1lID0gJ2Zvcm0tY2hlY2stbGFiZWwnO1xuICAgICAgICAgICAga2lsb3NSYWRpb0xhYmVsLmh0bWxGb3IgPSAndW9tLWtnLScrZmluYWxJO1xuICAgICAgICAgICAga2lsb3NSYWRpb0xhYmVsLmlubmVySFRNTCA9ICdLRyc7XG5cbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKGdyYW1zUmFkaW8pO1xuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQoZ3JhbXNSYWRpb0xhYmVsKTtcbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKGtpbG9zUmFkaW8pO1xuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQoa2lsb3NSYWRpb0xhYmVsKTtcblxuICAgICAgICB9XG5cblxuICAgICAgICAvL29uIGNoYW5nZSB1cGRhdGUgYW5kIHJ1biB0b3RhbCBsaW5lIGNhbGMuXG4gICAgICAgIGxldCBjZWxsNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgbGV0IHBhY2tlZEFtb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgcGFja2VkQW1vdW50LnR5cGUgPSBcIm51bWJlclwiO1xuICAgICAgICBwYWNrZWRBbW91bnQubmFtZSA9IFwicGFja2VkQW1vdW50W11cIjtcbiAgICAgICAgcGFja2VkQW1vdW50LmlkID0gJ3BhY2tlZEFtb3VudC0nK2ZpbmFsSTtcbiAgICAgICAgcGFja2VkQW1vdW50LnZhbHVlID0gMTtcbiAgICAgICAgcGFja2VkQW1vdW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jb2x1bW4tbmFtZScsJ2Ftb3VudCcpO1xuICAgICAgICBjZWxsNC5hcHBlbmRDaGlsZChwYWNrZWRBbW91bnQpO1xuXG4gICAgICAgIGxldCBjZWxsNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgbGV0IHRvdGFsTGluZVdlaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdG90YWxMaW5lV2VpZ2h0LnR5cGUgPSBcIm51bWJlclwiO1xuICAgICAgICB0b3RhbExpbmVXZWlnaHQubmFtZSA9IFwidG90YWxMaW5lV2VpZ2h0W11cIjtcbiAgICAgICAgdG90YWxMaW5lV2VpZ2h0LmlkID0gJ3RvdGFsTGluZVdlaWdodC0nK2ZpbmFsSTtcbiAgICAgICAgdG90YWxMaW5lV2VpZ2h0LnZhbHVlID0gMDsvL2dldExpbmVUb3RhbFdlaWdodCgpO1xuICAgICAgICB0b3RhbExpbmVXZWlnaHQuc2V0QXR0cmlidXRlKCdkYXRhLWNvbHVtbi1uYW1lJywndG90YWxfbGluZV93ZWlnaHQnKTsvL2FkZCB0byBEQlxuICAgICAgICBjZWxsNS5hcHBlbmRDaGlsZCh0b3RhbExpbmVXZWlnaHQpO1xuXG5cblxuICAgICAgICAvLyB2YXIgY2VsbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIC8vIHZhciBpbnB1dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIC8vIGlucHV0My50eXBlID0gXCJudW1iZXJcIjtcbiAgICAgICAgLy8gaW5wdXQzLm5hbWUgPSBcInByaWNlW11cIjtcbiAgICAgICAgLy8gY2VsbDMuYXBwZW5kQ2hpbGQoaW5wdXQzKTtcblxuICAgICAgICAvLyBBcHBlbmQgY2VsbHMgdG8gdGhlIHJvd1xuICAgICAgICAvLyByb3cuYXBwZW5kQ2hpbGQobmV3SXRlbUh0bWwpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDApO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDEpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDIpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDMpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDQpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDUpO1xuXG4gICAgICAgIC8vIEFwcGVuZCB0aGUgcm93IHRvIHRoZSB0YWJsZVxuICAgICAgICBpdGVtVGFibGUuYXBwZW5kQ2hpbGQocm93KTtcblxuXG5cbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tY29sbGFwc2libGUtaGVhZGVyJyk7XG5cbiAgICBoZWFkZXJzLmZvckVhY2goaGVhZGVyID0+IHtcbiAgICAgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGhlYWRlci5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICBjb25zdCBhcnJvdyA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKCcuZm9ybS1hcnJvdycpO1xuICAgICAgICAgICAgaWYgKGNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IG51bGw7XG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5wYWRkaW5nID0gJzAgMTBweCc7XG4gICAgICAgICAgICAgICAgYXJyb3cuaW5uZXJIVE1MID0gJyYjOTY2MCc7XG5cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLnBhZGRpbmcgPSAnMTBweCc7XG4gICAgICAgICAgICAgICAgYXJyb3cuaW5uZXJIVE1MID0gJyYjOTY1MCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG59KTtcblxuXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xud2luZG93LmF4aW9zID0gYXhpb3M7XG5cbndpbmRvdy5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInNob3dQYXNzd29yZCIsImlkIiwicGFzc3dvcmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidHlwZSIsImFkZExpc3RJdGVtIiwibGlzdFVPTSIsInZhbHVlIiwiZmluYWxJRWxlbWVudCIsIml0ZW1UYWJsZSIsImZpbmFsSSIsImNvbnNvbGUiLCJsb2ciLCJyb3ciLCJjcmVhdGVFbGVtZW50IiwiY2VsbDAiLCJzY29wZSIsImlubmVySFRNTCIsImNlbGwxIiwiY291bnRlciIsIm5hbWUiLCJzZXRBdHRyaWJ1dGUiLCJpdGVtTmFtZSIsInBsYWNlaG9sZGVyIiwiYXBwZW5kQ2hpbGQiLCJjZWxsMiIsIml0ZW1XZWlnaHQiLCJjZWxsMyIsIm91bmNlc1JhZGlvIiwiY2xhc3NOYW1lIiwiY2hlY2tlZCIsIm91bmNlc1JhZGlvTGFiZWwiLCJodG1sRm9yIiwicG91bmRzUmFkaW8iLCJwb3VuZHNSYWRpb0xhYmVsIiwiZ3JhbXNSYWRpbyIsImdyYW1zUmFkaW9MYWJlbCIsImtpbG9zUmFkaW8iLCJraWxvc1JhZGlvTGFiZWwiLCJjZWxsNCIsInBhY2tlZEFtb3VudCIsImNlbGw1IiwidG90YWxMaW5lV2VpZ2h0IiwiaGVhZGVycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaGVhZGVyIiwiY29udGVudCIsIm5leHRFbGVtZW50U2libGluZyIsImFycm93IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwic3R5bGUiLCJtYXhIZWlnaHQiLCJwYWRkaW5nIiwiYWRkIiwic2Nyb2xsSGVpZ2h0IiwiYXhpb3MiLCJkZWZhdWx0cyIsImNvbW1vbiJdLCJzb3VyY2VSb290IjoiIn0=