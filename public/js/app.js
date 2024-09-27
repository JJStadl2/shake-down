"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js/auto */ "./node_modules/chart.js/auto/auto.js");
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/modular/sortable.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// import './bootstrap' ;

// import  'bootstrap';



var bootstrap = __webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");
var gramConverter = 1000;
var ounceConverter = 16;
window.addEventListener("DOMContentLoaded", function (e) {
  this.window.showPassword = function showPassword(id) {
    var password = document.getElementById(id);
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };
  this.window.addMasterListItem = function addMasterListItem() {
    var numberOfItemsToAdd = document.getElementById("linesToAdd");
    var linesToAdd = 1;
    if (numberOfItemsToAdd === null || +numberOfItemsToAdd.value < 1) {
      numberOfItemsToAdd.value = linesToAdd;
    } else {
      linesToAdd = +numberOfItemsToAdd.value;
    }
    for (var i = 0; i < linesToAdd; i++) {
      var listByItems = true;
      var listen = false;
      var itemTable = document.getElementById('modal-item-table-body');
      var row = document.createElement("tr");

      // Create cells and input elements.
      var cell1 = document.createElement("td");
      var itemName = createListItemInput("text", "itemName", i, "item_name", listen);
      itemName.placeholder = "Item Name";
      itemName.classList.add("form-control");
      var cell6 = document.createElement("td");
      cell6.id = "btn-td-" + i;
      // let deleteBtn = document.createElement("a");
      // deleteBtn.id = "deleteBtn-" + i;
      // deleteBtn.className = "btn btn-primary btn-sm  py-2";
      // deleteBtn.innerHTML = "x";
      var deleteBtn = createDeleteButton(i);
      var cell2 = document.createElement("td");
      var itemWeight = createListItemInput("number", "itemWeight", i, "item_weight", listen);
      itemWeight.value = 0;
      itemWeight.classList.add("for-weight");
      itemWeight.classList.add("number-input");
      itemWeight.classList.add("form-control");
      //itemWeight.style.width = '40%';
      cell2.classList.add("number-col");
      var cell3 = document.createElement("td");
      var select = document.createElement("select");
      select.id = "uom-" + i;
      select.name = "uom[]";
      select.setAttribute("data-column-name", "uom");
      select.className = "form-control";
      var ozOption = document.createElement("option");
      var lbsOption = document.createElement("option");
      var grOption = document.createElement("option");
      var kgOption = document.createElement("option");
      ozOption.value = "in_ounces";
      ozOption.text = "OZ";
      lbsOption.value = 'in_lbs';
      lbsOption.text = 'LBS';
      grOption.value = "in_grams";
      grOption.text = "G";
      kgOption.value = 'in_kilos';
      kgOption.text = 'KG';
      select.appendChild(ozOption);
      select.appendChild(lbsOption);
      select.appendChild(grOption);
      select.appendChild(kgOption);

      //append inputs to cells.
      cell1.appendChild(itemName);
      cell2.appendChild(itemWeight);
      var selectCell = document.createElement("td");
      var categorySelect = getCategroySelect(i, null, listen);
      categorySelect.name = 'itemCategory[]';
      selectCell.append(categorySelect);
      cell3.appendChild(select);
      cell6.appendChild(deleteBtn);

      // Append cells to the row.
      // row.appendChild(iconCell);
      row.appendChild(cell1);
      row.appendChild(selectCell);
      row.appendChild(cell3);
      row.appendChild(cell2);
      row.appendChild(cell6);

      // Append the row to the table.
      itemTable.appendChild(row);
    }
    document.getElementById('newItemCount').value = linesToAdd;
    numberOfItemsToAdd.value = 1;
  };
  this.window.showListAssignModal = function showListAssignModal(itemId, itemName) {
    document.getElementById('itemIdforAssign').value = itemId;
    // document.getElementById('userItemIdforAssign').value = userItemId;

    var table = document.getElementById("modal-assign-item-table-body");
    var header = document.getElementById('AssignItemToListModalLabel');
    header.innerHTML = 'Assign/Unassign item: ' + itemName;
    var url = '/get-user-lists/' + itemId;
    var userLists;
    axios.get(url).then(function (res) {
      var data = res.data;
      userLists = data.userLists;
      if (data.status !== '1') {
        alert(data.msg);
        return;
      }
      for (var i = 0; i < userLists.length; i++) {
        var row = document.createElement("tr");
        var listNameCell = document.createElement("td");
        var assignCell = document.createElement("td");
        listNameCell.innerHTML = userLists[i].name;
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'listCheckBox-' + i;
        checkbox.name = 'listIds[]';
        checkbox.value = userLists[i].id;
        if (userLists[i].itemAssigned == true) {
          checkbox.checked = true;
        }
        assignCell.appendChild(checkbox);
        row.appendChild(listNameCell);
        row.appendChild(assignCell);
        table.appendChild(row);
      }
    });
  };
  this.window.assignToGearList = function assignToGearList(element) {
    var listId = element.getAttribute('data-list-id');
    var itemId = element.getAttribute('data-item-id');
    if (!element.checked) {
      listId = '';
    }
    var url = '/assign-to-gear-list';
    var data = {
      list_id: listId,
      id: itemId
    };
    axios.post(url, data).then(function (response) {
      response = response.data;
      if (response.status == 1) {} else {
        alert(response.msg);
      }
    }, function (error) {
      console.log(error);
    });
  };
  this.window.addListItem = function addListItem() {
    var categorycounter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var groupCategory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var numberOfItemsToAdd = document.getElementById("linesToAdd");
    var linesToAdd = 1;
    if (numberOfItemsToAdd === null || +numberOfItemsToAdd.value < 1) {
      numberOfItemsToAdd.value = linesToAdd;
    } else {
      linesToAdd = +numberOfItemsToAdd.value;
    }
    for (var i = 0; i < linesToAdd; i++) {
      var listUOM = document.getElementById("uom").value;
      var finalIElement = document.getElementById("final-i");
      var listByItems = document.getElementById("listByItems").value;
      var itemTable = void 0;
      if (+listByItems == 1) {
        listByItems = true;
        itemTable = document.getElementById("item-table-body");
      } else {
        listByItems = false;
        var tableCategory = categorycounter;
        itemTable = document.getElementById("categoryTable-" + tableCategory);
      }
      var userId = document.getElementById("userId").value;
      var listId = document.getElementById("listId").value;
      var finalI = finalIElement.value;
      finalIElement.value = +finalI + 1;
      var row = document.createElement("tr");
      row.id = 'row-' + finalI;

      // Create cells and input elements.
      var cell0 = document.createElement("th");
      cell0.scope = "row";
      cell0.innerHTML = finalI;
      var cell1 = document.createElement("td");
      var counter = document.createElement("input");
      counter.type = "hidden";
      counter.name = "id[]";
      counter.id = "id-" + finalI;
      counter.value = "new-" + finalI;
      counter.setAttribute("data-column-name", "id");
      var updateMasterList = document.createElement("input");
      updateMasterList.type = "hidden";
      updateMasterList.name = "";
      updateMasterList.id = "updateMaster-" + finalI;
      updateMasterList.value = "true";
      var itemName = createListItemInput("text", "itemName", finalI, "item_name");
      itemName.placeholder = "Item Name";
      itemName.classList.add("form-control");
      var cell6 = document.createElement("td");
      cell6.id = "btn-td-" + finalI;
      var deleteBtn = createDeleteButton(finalI);
      var cell2 = document.createElement("td");
      var itemWeight = createListItemInput("number", "itemWeight", finalI, "item_weight");
      itemWeight.value = 0;
      itemWeight.classList.add("for-weight");
      itemWeight.classList.add("number-input");
      itemWeight.classList.add("form-control");
      cell2.classList.add("number-col");
      var cell3 = document.createElement("td");
      var lineUomCell = document.createElement("td");
      cell3.classList.add("uom-td");
      lineUomCell.classList.add("uom-td");
      var radio1 = void 0;
      var radio2 = void 0;
      var radioLabel1 = void 0;
      var radioLabel2 = void 0;
      var radioLabel3 = void 0;
      if (listUOM === "us") {
        radio1 = createRadio("in_ounces", "", "oz", finalI);
        radioLabel1 = createLabel("OZ", "uom-oz-" + finalI, "oz", finalI);
        radio2 = createRadio("in_lbs", "", "lbs", finalI);
        radioLabel2 = createLabel("LBS", "uom-lbs-" + finalI, "lbs", finalI);
        radioLabel3 = createLabel("OZ", "uom-oz-" + finalI, "oz", finalI, true);
      } else {
        radio1 = createRadio("in_grams", "", "gram", finalI);
        radioLabel1 = createLabel("G", "uom-gram-" + finalI, "gram", finalI);
        radio2 = createRadio("in_kilos", "", "kg", finalI);
        radioLabel2 = createLabel("KG", "uom-kg-" + finalI, "kg", finalI);
        radioLabel3 = createLabel("G", "uom-gram-" + finalI, "gram", finalI, true);
      }
      var cell4 = document.createElement("td");
      cell4.classList.add("number-col");
      var packedAmount = createListItemInput("number", "packedAmount", finalI, "amount");
      packedAmount.value = 1;
      packedAmount.classList.add("for-weight");
      packedAmount.classList.add("number-input");
      packedAmount.classList.add("form-control");
      var cell5 = document.createElement("td");
      cell5.classList.add("number-col");
      var totalLineWeight = createListItemInput("number", "totalLineWeight", finalI, "total_line_weight");
      totalLineWeight.value = 0;
      totalLineWeight.setAttribute("data-column-name", "total_line_weight");
      totalLineWeight.setAttribute("readonly", true);
      totalLineWeight.classList.add("number-input");
      totalLineWeight.classList.add("form-control");
      totalLineWeight.classList.add("for-total-list-weight");

      //append inputs to cells.

      // Define the SVG namespace
      var svgNamespace = "http://www.w3.org/2000/svg";
      var iconCell = document.createElement("th");
      // Create a new SVG element
      // let icon = document.createElementNS(svgNamespace, "svg");
      // icon.setAttribute("width", "16");
      // icon.setAttribute("height", "16");
      // icon.setAttribute("fill", "currentColor");
      // icon.setAttribute("class", "bi bi-grip-vertical");
      // icon.setAttribute("viewBox", "0 0 16 16");
      // <i class="fas fa-grip-vertical"></i>

      // Create the <path> element
      // let path = document.createElementNS(svgNamespace, "path");
      // path.setAttribute(
      //     "d",
      //     "M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      // );

      // Append the path to the SVG
      // icon.appendChild(path);

      var icon = document.createElement('i');
      icon.className = 'fas fa-grip-vertical';

      // // Append the SVG icon to the cell
      iconCell.appendChild(icon);
      cell1.appendChild(counter);
      cell1.appendChild(updateMasterList);
      cell1.appendChild(itemName);
      cell2.appendChild(itemWeight);
      var selectCell = document.createElement("td");
      var categorySelect = getCategroySelect(finalI, groupCategory);
      selectCell.append(categorySelect);
      cell3.appendChild(radio1);
      cell3.appendChild(radioLabel1);
      cell3.appendChild(radio2);
      cell3.appendChild(radioLabel2);
      cell4.appendChild(packedAmount);
      cell5.appendChild(totalLineWeight);
      lineUomCell.appendChild(radioLabel3);
      cell6.appendChild(deleteBtn);

      // Append cells to the row.
      row.appendChild(iconCell);
      row.appendChild(cell1);
      row.appendChild(selectCell);
      row.appendChild(cell3);
      row.appendChild(cell2);
      row.appendChild(cell4);
      row.appendChild(cell5);
      row.appendChild(lineUomCell);
      row.appendChild(cell6);

      // Append the row to the table.
      itemTable.appendChild(row);
      //add functions to calculate and convert total weight.
      addEventListenerWeightCalc(finalI);
    }
    numberOfItemsToAdd.value = 1;
  };
  this.window.updateUOM = function updateUOM(value) {
    if (value !== "us") {
      usRadioToMetric();
    } else {
      metricRadioToUs();
    }
  };
  function addEventListenerWeightCalc(row) {
    var neededForWeights = document.querySelectorAll(".for-weight");
    neededForWeights.forEach(function (neededForWeight) {
      neededForWeight.addEventListener("change", function () {
        getLineTotalWeight(row);
      });
    });
  }
  this.window.getLineTotalWeight = function getLineTotalWeight(row) {
    var convert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var weight = document.getElementById("itemWeight-" + row).value;
    var packedAmount = document.getElementById("packedAmount-" + row).value;
    var uom = document.getElementById("uom");
    var lineTotalWeightElement = document.getElementById("totalLineWeight-" + row);
    var lineTotal = 0;
    lineTotal = +weight * +packedAmount;
    lineTotal = lineTotal.toFixed(3).replace(/[.,]00$/, "");
    lineTotalWeightElement.value = lineTotal;
    updateListItem(lineTotalWeightElement);
  };
  this.window.convertMeasurement = function convertMeasurement(row) {
    var convert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var listId = document.getElementById('listId').value;
    var uom;
    var isMasterList = document.getElementById('isMaster').value;
    if (isMasterList === 'true') {
      uom = document.getElementById("uom-" + row).value;
    } else {
      uom = document.getElementById("uom").value;
    }

    // if(listId == 'master'){
    //     uom = document.getElementById("uom-"+row).value;
    // }else{
    //     uom = document.getElementById("uom").value;
    // }
    var weight = document.getElementById("itemWeight-" + row);
    var packedAmount = document.getElementById("packedAmount-" + row).value;
    var totalWeight = document.getElementById("totalLineWeight-" + row);
    var totalLineWeightValue = 0;
    var weightValue = weight.value;
    var small;
    var large;
    var element;
    var label = document.getElementById("line-uom-label-" + row);
    var labelHTML;
    if (uom === "us") {
      small = document.getElementById("uom-oz-" + row);
      large = document.getElementById("uom-lbs-" + row);
      if (small.checked === true) {
        weightValue = +weightValue * 16;
        element = small;
        labelHTML = "OZ";
      } else {
        weightValue = +weightValue / 16;
        element = large;
        labelHTML = "LBS";
      }
    } else {
      small = document.getElementById("uom-gram-" + row);
      large = document.getElementById("uom-kg-" + row);
      if (small.checked === true) {
        weightValue = +weightValue * 1000;
        element = small;
        labelHTML = "G";
      } else {
        weightValue = +weightValue / 1000;
        element = large;
        labelHTML = "KG";
      }
    }
    totalLineWeightValue = +weightValue * +packedAmount;
    weight.value = weightValue.toFixed(3).replace(/[.,]00$/, "");
    totalWeight.value = totalLineWeightValue.toFixed(3).replace(/[.,]00$/, "");
    label.innerHTML = labelHTML;
    updateListItem(element);
    updateListItem(weight);
    updateListItem(totalWeight);
  };
  this.window.addCategoryGroup = function addCategoryGroup(listId, category, listUOM, userId) {
    var columnName;
    if (listUOM === 'us') {
      columnName = 'in_ounces';
    } else {
      columnName = 'in_grams';
    }
    var data = getBooleanData(columnName);
    data['list_id'] = listId;
    data['user_id'] = userId;
    data['item_name'] = '';
    data['item_weight'] = 0;
    data['amount'] = 1;
    data['item_category'] = category;
    var url = '/list-item';
    axios.post(url, data).then(function (res) {
      res = res.data;
      if (res.status === '1') {
        location.reload();
      } else {
        alert(res.msg);
      }
    })["catch"](function (err) {});
  };
  function getBooleanData(columnName) {
    var data = {};
    data["in_ounces"] = false;
    data["in_lbs"] = false;
    data["in_grams"] = false;
    data["in_kilos"] = false;
    switch (columnName) {
      case "in_ounces":
        data["in_ounces"] = true;
        break;
      case "in_lbs":
        data["in_lbs"] = true;
        break;
      case "in_grams":
        data["in_grams"] = true;
        break;
      case "in_kilos":
        data["in_kilos"] = true;
        break;
      default:
        break;
    }
    return data;
  }
  this.window.updateListItem = function updateListItem(element) {
    var columnName = element.getAttribute("data-column-name");
    var value = element.value;
    var id = element.id;
    var idArr = id.split("-");
    var arrLength = idArr.length;
    var row = idArr[arrLength - 1];
    var itemId = document.getElementById("id-" + row);
    var itemIdValue = itemId.value;
    var listId = document.getElementById("listId").value;
    var url = "/list-item";
    var data = {};
    var userId = document.getElementById("userId").value;
    var updateMaster = null;
    var create = true;
    var isMasterList = document.getElementById('isMaster').value;
    // let inputRow = document.getElementById('row-'+row);
    // let inputsAndSelects = inputRow.querySelector(' td input, td select');
    // inputsAndSelects.forEach(element => {
    //     console.log(element);
    // });

    data[columnName] = value;
    if (columnName.substring(0, 3) === "in_") {
      data = getBooleanData(columnName);
    }
    data["list_id"] = listId;
    data["user_id"] = userId;
    data["id"] = itemIdValue;
    if (itemIdValue.substring(0, 3) !== 'new') {
      create = false;
      url = url + '/' + itemIdValue;
      updateMaster = document.getElementById('updateMaster-' + row);
      if (updateMaster !== null) {
        updateMaster = updateMaster.value;
        data['updateMaster'] = updateMaster;
      }
    }
    axios.post(url, data, itemId).then(function (res) {
      var resData = res.data;
      if (resData.status !== '1') {
        alert(resData.msg);
        return;
      }
      if (create) {
        itemId.value = resData.newId;
      }
      getDeleteBtnData(itemId.value, row);
    })["catch"](function (err) {
      alert("Failed to update list item. Please try again later.");
      console.error(err);
    });
    if (isMasterList === 'false') {
      updateTotalListWeights();
    }
  };
  function updateTotalListWeights() {
    var weightsForPW = document.querySelectorAll(".for-total-list-weight");
    var baseWeight = 0;
    var totalPackWeight = 0;
    var maxPackWeight = document.getElementById("maxPackWeight").value;
    var classWarningValue = document.getElementById('classWarningValue').value;
    var uomText = "LBS";
    weightsForPW.forEach(function (weightForPW) {
      var id = weightForPW.id;
      var idArr = id.split("-");
      var arrLength = idArr.length;
      var row = idArr[arrLength - 1];
      var packedAmount = document.getElementById("packedAmount-" + row).value;
      var converter = 1;
      var rowWeight = 0;
      var itemWeight = document.getElementById("itemWeight-" + row).value;
      var uom = document.getElementById("uom").value;
      var itemCategoryElement = document.getElementById("itemCategory-" + row);
      var itemCategory = "";
      if (itemCategoryElement) {
        itemCategory = itemCategoryElement.value;
      }
      if (itemCategory === undefined || itemCategory === null) {
        itemCategory = "";
      }
      if (uom === "us") {
        if (document.getElementById("uom-oz-" + row).checked === true) {
          converter = ounceConverter;
        }
      } else {
        uomText = "KG";
        if (document.getElementById("uom-gram-" + row).checked === true) {
          converter = gramConverter;
        }
      }
      rowWeight = +packedAmount * (+itemWeight / converter);
      totalPackWeight = totalPackWeight + rowWeight;
      if (itemCategory !== "consumables") {
        baseWeight = baseWeight + rowWeight;
      }
    });
    if (+baseWeight > +maxPackWeight) {
      var divElement = document.getElementById("weightWarning-div");
      divElement.innerText = "Base weight (" + baseWeight.toFixed(3) + " " + uomText + ") exceedes the weight for the '" + classWarningValue + "' style of hiking.";
      divElement.style.display = "block";
    } else {
      document.getElementById("weightWarning-div").style.display = "none";
    }
    document.getElementById("baseWeight").value = baseWeight.toFixed(3);
    document.getElementById("totalPackWeight").value = totalPackWeight.toFixed(3);
  }
  function createListItemInput(type, nameBase, row, columnName) {
    var listen = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
    var element = document.createElement("input");
    element.type = type;
    element.name = nameBase + "[]";
    element.id = nameBase + "-" + row;
    element.value = "";
    element.setAttribute("data-column-name", columnName);
    if (listen) {
      element.addEventListener("change", function () {
        updateListItem(element);
      });
    }
    return element;
  }
  function getCategroySelect(row) {
    var groupCategory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var listen = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var select = document.createElement("select");
    select.id = "ItemCategory-" + row;
    select.name = "itemCategory-" + row;
    select.setAttribute("data-column-name", "item_category");
    select.className = "form-control";
    var option = document.createElement("option");
    option.value = "";
    option.text = "Choose";
    select.appendChild(option);
    var optionList;
    optionList = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios.get("/list-item-categories");
            case 3:
              response = _context.sent;
              return _context.abrupt("return", response.data);
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              // handle error
              console.log(_context.t0);
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 7]]);
      }));
      return function optionList() {
        return _ref.apply(this, arguments);
      };
    }();
    optionList().then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var _option = document.createElement("option");
        _option.value = data[i].value;
        _option.text = data[i].category;
        if (groupCategory != null && data[i].value === groupCategory) {
          _option.selected = true;
        }
        select.appendChild(_option);
      }
    });
    if (listen) {
      select.addEventListener("change", function () {
        updateListItem(select);
      });
    }
    return select;
  }
  function metricRadioToUs() {
    var inputElements = document.querySelectorAll(".metric-radio");
    inputElements.forEach(function (inputElement) {
      var idArr = inputElement.id.split("-");
      var uom = idArr[1];
      var row = idArr[idArr.length - 1];
      var elementType = inputElement.type;
      var elementTag = inputElement.tagName.toLowerCase();
      var newElement;
      if (elementType === "radio" && uom === "gram") {
        newElement = createRadio("in_ounces", "OZ", "oz", row, true);
      } else if (elementType === "radio" && uom === "kg") {
        newElement = createRadio("in_lbs", "LBS", "lbs", row);
      } else if (elementTag === "label" && uom === "gram") {
        newElement = createLabel("OZ", "uom-oz-" + row, "oz", row);
      } else if (elementTag === "label" && uom === "kg") {
        newElement = createLabel("LBS", "uom-lbs-" + row, "lbs", row);
      }
      if (newElement) {
        inputElement.parentElement.replaceChild(newElement, inputElement);
      }
    });
  }
  function usRadioToMetric() {
    var inputElements = document.querySelectorAll(".us-radio");
    inputElements.forEach(function (inputElement) {
      var idArr = inputElement.id.split("-");
      var uom = idArr[1];
      var row = idArr[idArr.length - 1];
      var elementType = inputElement.type;
      var elementTag = inputElement.tagName.toLowerCase();
      var newElement;
      if (elementType === "radio" && uom === "oz") {
        newElement = createRadio("in_grams", "GR", "gram", row);
      } else if (elementType === "radio" && uom === "lbs") {
        newElement = createRadio("in_kilos", "KG", "kg", row);
      } else if (elementTag === "label" && uom === "oz") {
        newElement = createLabel("G", "uom-gram-" + row, "gram", row);
      } else if (elementTag === "label" && uom === "lbs") {
        newElement = createLabel("KG", "uom-kg-" + row, "kg", row);
      }
      if (newElement) {
        inputElement.parentElement.replaceChild(newElement, inputElement);
      }
    });
  }
  function createRadio(dataColumnName, label, uom, row) {
    var radio = document.createElement("input");
    radio.className = "form-check-input" + (uom === "gram" || uom === "kg" ? " metric-radio" : " us-radio");
    radio.type = "radio";
    radio.name = "uom-" + row + "[]";
    radio.id = "uom-" + uom + "-" + row;
    radio.setAttribute("data-column-name", dataColumnName);
    if (uom === "gram" || uom === "oz") {
      radio.checked = true;
    }
    radio.addEventListener("change", function () {
      convertMeasurement(row);
    });
    return radio;
  }
  function createLabel(innerHtml, htmlFor, uom, row) {
    var lineLabel = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var label = document.createElement("label");
    label.className = "form-check-label" + (uom === "gram" || uom === "kg" ? " metric-radio" : " us-radio");
    label.htmlFor = htmlFor;
    label.innerHTML = innerHtml;
    if (!lineLabel) {
      label.id = "uom-" + uom + "-label-" + row;
    } else {
      label.id = "line-uom-label-" + row;
    }
    return label;
  }
  this.window.updateList = function updateList(element, listId) {
    var columnName = element.getAttribute("data-column-name");
    var value = element.value;
    var url = "/gear-list/" + listId;
    var data = {};
    data[columnName] = value;
    axios.post(url, data, listId).then(function (res) {
      // alert(res.data.msg);
    })["catch"](function (err) {
      alert("Failed to update list. Please try again later.");
    });
    if (columnName === "sort" || columnName === "list_class" || columnName === 'list_items') {
      location.reload();
    }
  };
  var headers = document.querySelectorAll(".item-collapsible-header");
  headers.forEach(function (header) {
    header.addEventListener("click", function () {
      var content = header.nextElementSibling;
      var arrow = header.querySelector(".item-arrow");
      if (content.classList.contains("open")) {
        content.classList.remove("open");
        content.style.maxHeight = null;
        content.style.padding = "0 10px";
        arrow.innerHTML = "&#9660";
      } else {
        content.classList.add("open");
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.padding = "10px";
        arrow.innerHTML = "&#9650";
      }
    });
  });
  var inputs = document.querySelectorAll("#master-item-table input");
  inputs.forEach(function (input) {
    input.disabled = true;
  });
  var listChartbtn = document.getElementById("listChartBtn");
  if (listChartbtn !== null) {
    document.getElementById("listChartBtn").addEventListener("click", function () {
      var listId = document.getElementById("listId").value;
      var url = "/gear-list-analytics/" + listId;
      axios.get(url).then(function (res) {
        var chartStatus = chart_js_auto__WEBPACK_IMPORTED_MODULE_1__["default"].getChart("gearChart");
        if (chartStatus != undefined) {
          chartStatus.destroy();
        }
        var ctx = document.getElementById("gearChart");
        var chartData = JSON.parse(res.data.chartData);
        var myChart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, {
          type: "doughnut",
          // Chart type
          data: {
            labels: chartData.labels,
            datasets: [{
              // label: listName + 'Break Down',
              data: chartData.weights,
              backgroundColor: chartData.colors,
              borderWidth: 1,
              hoverOffset: 4
            }]
          },
          options: {
            cutout: 45,
            // Adjust the cutout percentage here
            radius: 150,
            legend: {
              display: false
            },
            plugins: {
              datalabels: false // Removing this line shows the datalabels again
            },
            animation: {
              animateRotate: true,
              animateScale: true
            }
          }
        });
        var baseWeight = document.getElementById("baseWeight").value;
        var totalPackWeight = document.getElementById("totalPackWeight").value;
        document.getElementById("modalBaseWeight").textContent = baseWeight;
        document.getElementById("modalTotalWeight").textContent = totalPackWeight;
      })["catch"](function (err) {
        alert(err);
      });
    });
  }
  this.window.showConvrsionAlert = function showConvrsionAlert() {
    alert('Changing this value will also update the units of measure and associated values for any item on this gear list.');
  };
  this.window.confirmDelete = function confirmDelete(element) {
    var isMaster = document.getElementById('isMaster').value;
    var href = element.getAttribute('data-href');
    var name = element.getAttribute('data-object-name');
    var objectType = element.getAttribute('data-object-type');
    var anchor = document.getElementById('deleteObjectAnchor');
    var modalBody = document.getElementById('deleteModalBody');
    var text = "Are you sure you want to delete ".concat(objectType, " ").concat(name, "?");
    var helperDiv = document.getElementById('deleteHelper');
    helperDiv.innerText = '';
    if (objectType === 'item:' && isMaster === 'false') {
      var listName = element.getAttribute('data-list-name');
      var helptext = "*Deleting an item from this list (".concat(listName, ") will not delete it the 'Your Gear' section.");
      helperDiv.append(helptext);
    } else if (objectType === 'item:' && isMaster === 'true') {
      var _listName = element.getAttribute('data-list-name');
      var _helptext = "*Deleting an item from the 'Your Gear' section will delete it from all 'Gear Lists'.";
      helperDiv.append(_helptext);
    } else {
      helperDiv.style.display = 'none';
    }
    modalBody.innerHTML = text;
    anchor.setAttribute('href', href);
  };
  function removeRow(row) {
    console.log('in remove row');
    var tableRow = document.getElementById("row-".concat(row));
    tableRow.remove();
  }
  function createDeleteButton(row) {
    var isMaster = document.getElementById('isMaster').value;
    var button = document.createElement('button');
    button.className = 'btn btn-sm btn-danger';
    button.title = 'Delete Item';
    button.id = "deleteItemBtn-".concat(row);
    button.setAttribute('data-href', '');
    button.setAttribute('data-object-name', '');
    button.setAttribute('data-object-id', '');
    button.setAttribute('data-object-type', 'item:');
    if (isMaster === 'false') {
      button.setAttribute('data-list-name', document.getElementById('listName').value);
    } else {
      button.setAttribute('data-list-name', 'master');
    }
    var icon = document.createElement('i');
    icon.className = 'fas fa-trash';
    button.appendChild(icon);
    button.onclick = function () {
      removeRow(row);
    };
    return button;
  }
  function getDeleteBtnData(id, row) {
    var deleteBtn = document.getElementById("deleteItemBtn-".concat(row));
    var url = "/list-item/".concat(id);
    axios.get(url).then(function (res) {
      if (res.data.status != "1") {
        alert(res.data.msg);
        return;
      }
      var item = res.data.item;
      deleteBtn.setAttribute('data-href', "/remove-list-item/".concat(item.id));
      deleteBtn.setAttribute('data-object-name', item.item_name);
      deleteBtn.setAttribute('data-object-id', item.id);
      deleteBtn.setAttribute('data-bs-toggle', "modal");
      deleteBtn.setAttribute('data-bs-target', "#deleteAlertModal");
      deleteBtn.onclick = function () {
        confirmDelete(deleteBtn);
      };
    })["catch"](function (err) {
      alert(err);
    });
  }
  document.querySelectorAll(".sortable").forEach(function (table) {
    var categoryId = table.getAttribute("data-category-id");
    new sortablejs__WEBPACK_IMPORTED_MODULE_2__["default"](table.querySelector("tbody"), {
      animation: 150,
      onEnd: function onEnd(evt) {
        // Get the new order of items
        var orderedIds = [];
        table.querySelectorAll("tr").forEach(function (row) {
          orderedIds.push(row.getAttribute("data-id"));
        });

        // Send the new order to the server via AJAX
        updateItemOrder(categoryId, orderedIds);
      }
    });
  });
  function updateItemOrder(categoryId, orderedIds) {
    var listId = document.getElementById("listId").value;
    var data = {
      "Content-Type": "application/json",
      "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
      category_id: categoryId,
      ordered_ids: orderedIds,
      list_id: listId
    };
    var url = "/update-list-order";
    axios.post(url, data).then(function (res) {
      if (res.data.status != "1") {
        alert(res.data.msg);
      }
    })["catch"](function (err) {
      alert(err);
    });
    var sortingSelect = document.getElementById("sortBy");
    var opts = sortingSelect.options.length;
    for (var i = 0; i < opts; i++) {
      if (sortingSelect.options[i].value == "drag_drop") {
        sortingSelect.options[i].selected = true;
        break;
      }
    }
  }
  var parentContainer = document.querySelector('.parent-container');
  if (parentContainer !== null && parentContainer !== undefined) {
    sortablejs__WEBPACK_IMPORTED_MODULE_2__["default"].create(document.querySelector('.parent-container'), {
      animation: 150,
      handle: '.item-collapsible-header',
      ghostClass: 'sortable-ghost',
      onEnd: function onEnd(evt) {
        // After sorting is completed, update the positions in the database
        updateCategoryOrder();
      }
    });
  }
  function updateCategoryOrder() {
    var newOrder = [];
    document.querySelectorAll('.draggable-container').forEach(function (item, index) {
      newOrder.push({
        item_category: item.getAttribute('data-category-value'),
        category_order: index
      });
    });
    var url = "/update-caterogry-order";
    var listId = document.getElementById("listId").value;
    var data = {
      "Content-Type": "application/json",
      "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
      category_order: newOrder,
      list_id: listId
    };
    //break out posts and get calls to own functions
    axios.post(url, data).then(function (res) {
      if (res.data.status != "1") {
        alert(res.data.msg);
      }
    })["catch"](function (err) {
      alert(err);
    });
  }
  var assignToListModal = document.getElementById('AssignItemToListModal');
  if (assignToListModal !== undefined && assignToListModal !== null) {
    assignToListModal.addEventListener('hide.bs.modal', function () {
      var tableBody = document.getElementById('modal-assign-item-table-body');
      while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
      }
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUM7SUFFN0RBLGlCQUFpQixDQUFDMVAsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLFlBQVk7TUFDNUQsSUFBSTJQLFNBQVMsR0FBR3ZQLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLDhCQUE4QixDQUFDO01BQ3ZFLE9BQU1zUCxTQUFTLENBQUNDLFVBQVUsRUFBQztRQUN2QkQsU0FBUyxDQUFDRSxXQUFXLENBQUNGLFNBQVMsQ0FBQ0MsVUFBVSxDQUFDO01BQy9DO0lBRUosQ0FBQyxDQUFDO0VBQ047QUFFSixDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQ3hzQ3dCO0FBQzFCN1AsTUFBTSxDQUFDK0MsS0FBSyxHQUFHQSw2Q0FBSztBQUVwQi9DLE1BQU0sQ0FBQytDLEtBQUssQ0FBQ2dOLFFBQVEsQ0FBQzdFLE9BQU8sQ0FBQzhFLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLGdCQUFnQjs7Ozs7Ozs7Ozs7QUNIM0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3Nhc3MvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICcuL2Jvb3RzdHJhcCcgO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiYm9vdHN0cmFwXCI7XG4vLyBpbXBvcnQgICdib290c3RyYXAnO1xuaW1wb3J0IFwiQHBvcHBlcmpzL2NvcmVcIjtcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanMvYXV0b1wiO1xuaW1wb3J0IFNvcnRhYmxlIGZyb20gXCJzb3J0YWJsZWpzXCI7XG5jb25zdCBib290c3RyYXAgPSByZXF1aXJlKFwiLi9ib290c3RyYXBcIik7XG5jb25zdCBncmFtQ29udmVydGVyID0gMTAwMDtcbmNvbnN0IG91bmNlQ29udmVydGVyID0gMTY7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICB0aGlzLndpbmRvdy5zaG93UGFzc3dvcmQgPSBmdW5jdGlvbiBzaG93UGFzc3dvcmQoaWQpIHtcbiAgICAgICAgbGV0IHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICBpZiAocGFzc3dvcmQudHlwZSA9PT0gXCJwYXNzd29yZFwiKSB7XG4gICAgICAgICAgICBwYXNzd29yZC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXNzd29yZC50eXBlID0gXCJwYXNzd29yZFwiO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aGlzLndpbmRvdy5hZGRNYXN0ZXJMaXN0SXRlbSA9IGZ1bmN0aW9uIGFkZE1hc3Rlckxpc3RJdGVtKCkge1xuICAgICAgICBsZXQgbnVtYmVyT2ZJdGVtc1RvQWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lc1RvQWRkXCIpO1xuICAgICAgICBsZXQgbGluZXNUb0FkZCA9IDE7XG4gICAgICAgIGlmIChudW1iZXJPZkl0ZW1zVG9BZGQgPT09IG51bGwgfHwgK251bWJlck9mSXRlbXNUb0FkZC52YWx1ZSA8IDEpIHtcbiAgICAgICAgICAgIG51bWJlck9mSXRlbXNUb0FkZC52YWx1ZSA9IGxpbmVzVG9BZGQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaW5lc1RvQWRkID0gK251bWJlck9mSXRlbXNUb0FkZC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXNUb0FkZDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbGlzdEJ5SXRlbXMgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IGxpc3RlbiA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGl0ZW1UYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1pdGVtLXRhYmxlLWJvZHknKTtcbiAgICAgICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBjZWxscyBhbmQgaW5wdXQgZWxlbWVudHMuXG4gICAgICAgICAgICBsZXQgY2VsbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG5cbiAgICAgICAgICAgIGxldCBpdGVtTmFtZSA9IGNyZWF0ZUxpc3RJdGVtSW5wdXQoXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgXCJpdGVtTmFtZVwiLFxuICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAgXCJpdGVtX25hbWVcIixcbiAgICAgICAgICAgICAgICBsaXN0ZW5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpdGVtTmFtZS5wbGFjZWhvbGRlciA9IFwiSXRlbSBOYW1lXCI7XG4gICAgICAgICAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBjZWxsNi5pZCA9IFwiYnRuLXRkLVwiICtpO1xuICAgICAgICAgICAgLy8gbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICAgICAgLy8gZGVsZXRlQnRuLmlkID0gXCJkZWxldGVCdG4tXCIgKyBpO1xuICAgICAgICAgICAgLy8gZGVsZXRlQnRuLmNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbSAgcHktMlwiO1xuICAgICAgICAgICAgLy8gZGVsZXRlQnRuLmlubmVySFRNTCA9IFwieFwiO1xuICAgICAgICAgICAgbGV0IGRlbGV0ZUJ0biA9IGNyZWF0ZURlbGV0ZUJ1dHRvbihpKTtcblxuXG4gICAgICAgICAgICBsZXQgY2VsbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBsZXQgaXRlbVdlaWdodCA9IGNyZWF0ZUxpc3RJdGVtSW5wdXQoXG4gICAgICAgICAgICAgICAgXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICBcIml0ZW1XZWlnaHRcIixcbiAgICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICAgIFwiaXRlbV93ZWlnaHRcIixcbiAgICAgICAgICAgICAgICBsaXN0ZW5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LnZhbHVlID0gMDtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQuY2xhc3NMaXN0LmFkZChcImZvci13ZWlnaHRcIik7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJudW1iZXItaW5wdXRcIik7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRyb2xcIik7XG4gICAgICAgICAgICAvL2l0ZW1XZWlnaHQuc3R5bGUud2lkdGggPSAnNDAlJztcbiAgICAgICAgICAgIGNlbGwyLmNsYXNzTGlzdC5hZGQoXCJudW1iZXItY29sXCIpO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgICAgIHNlbGVjdC5pZCA9IFwidW9tLVwiICsgaTtcbiAgICAgICAgICAgIHNlbGVjdC5uYW1lID0gXCJ1b21bXVwiO1xuICAgICAgICAgICAgc2VsZWN0LnNldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uLW5hbWVcIiwgXCJ1b21cIik7XG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIjtcblxuICAgICAgICAgICAgbGV0IG96T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIGxldCBsYnNPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgbGV0IGdyT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIGxldCBrZ09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBvek9wdGlvbi52YWx1ZSA9IFwiaW5fb3VuY2VzXCI7XG4gICAgICAgICAgICBvek9wdGlvbi50ZXh0ID0gXCJPWlwiO1xuICAgICAgICAgICAgbGJzT3B0aW9uLnZhbHVlICA9ICdpbl9sYnMnO1xuICAgICAgICAgICAgbGJzT3B0aW9uLnRleHQgPSAnTEJTJ1xuXG4gICAgICAgICAgICBnck9wdGlvbi52YWx1ZSA9IFwiaW5fZ3JhbXNcIjtcbiAgICAgICAgICAgIGdyT3B0aW9uLnRleHQgPSBcIkdcIjtcbiAgICAgICAgICAgIGtnT3B0aW9uLnZhbHVlICA9ICdpbl9raWxvcyc7XG4gICAgICAgICAgICBrZ09wdGlvbi50ZXh0ID0gJ0tHJztcbiAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvek9wdGlvbik7XG4gICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQobGJzT3B0aW9uKTtcbiAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChnck9wdGlvbik7XG4gICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQoa2dPcHRpb24pO1xuXG4gICAgICAgICAgICAvL2FwcGVuZCBpbnB1dHMgdG8gY2VsbHMuXG4gICAgICAgICAgICBjZWxsMS5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gICAgICAgICAgICBjZWxsMi5hcHBlbmRDaGlsZChpdGVtV2VpZ2h0KTtcblxuICAgICAgICAgICAgbGV0IHNlbGVjdENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBsZXQgY2F0ZWdvcnlTZWxlY3QgPSBnZXRDYXRlZ3JveVNlbGVjdChpLG51bGwsIGxpc3Rlbik7XG4gICAgICAgICAgICBjYXRlZ29yeVNlbGVjdC5uYW1lID0gJ2l0ZW1DYXRlZ29yeVtdJ1xuICAgICAgICAgICAgc2VsZWN0Q2VsbC5hcHBlbmQoY2F0ZWdvcnlTZWxlY3QpO1xuXG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICAgICAgICAgICAgY2VsbDYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIGNlbGxzIHRvIHRoZSByb3cuXG4gICAgICAgICAgICAvLyByb3cuYXBwZW5kQ2hpbGQoaWNvbkNlbGwpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwxKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChzZWxlY3RDZWxsKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsMyk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDIpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGw2KTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSByb3cgdG8gdGhlIHRhYmxlLlxuICAgICAgICAgICAgaXRlbVRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG5cblxuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdJdGVtQ291bnQnKS52YWx1ZSA9IGxpbmVzVG9BZGQ7XG4gICAgICAgIG51bWJlck9mSXRlbXNUb0FkZC52YWx1ZSA9IDE7XG4gICAgfTtcbiAgICB0aGlzLndpbmRvdy5zaG93TGlzdEFzc2lnbk1vZGFsID0gZnVuY3Rpb24gc2hvd0xpc3RBc3NpZ25Nb2RhbChpdGVtSWQsaXRlbU5hbWUpe1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtSWRmb3JBc3NpZ24nKS52YWx1ZSA9IGl0ZW1JZDtcbiAgICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJJdGVtSWRmb3JBc3NpZ24nKS52YWx1ZSA9IHVzZXJJdGVtSWQ7XG5cbiAgICAgICAgbGV0IHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1hc3NpZ24taXRlbS10YWJsZS1ib2R5XCIpO1xuICAgICAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0Fzc2lnbkl0ZW1Ub0xpc3RNb2RhbExhYmVsJyk7XG4gICAgICAgIGhlYWRlci5pbm5lckhUTUwgPSAnQXNzaWduL1VuYXNzaWduIGl0ZW06ICcraXRlbU5hbWU7XG5cbiAgICAgICAgbGV0IHVybCA9ICcvZ2V0LXVzZXItbGlzdHMvJytpdGVtSWQ7XG4gICAgICAgIGxldCB1c2VyTGlzdHM7XG5cbiAgICAgICAgYXhpb3MuZ2V0KHVybClcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgIHVzZXJMaXN0cyA9IGRhdGEudXNlckxpc3RzO1xuXG4gICAgICAgICAgICBpZihkYXRhLnN0YXR1cyAhPT0gJzEnKXtcbiAgICAgICAgICAgICAgICBhbGVydChkYXRhLm1zZyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJMaXN0cy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgICAgICAgICBsZXQgbGlzdE5hbWVDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgICAgIGxldCBhc3NpZ25DZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuXG4gICAgICAgICAgICAgICAgbGlzdE5hbWVDZWxsLmlubmVySFRNTCA9IHVzZXJMaXN0c1tpXS5uYW1lO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgICAgICAgICBjaGVja2JveC5pZCA9ICdsaXN0Q2hlY2tCb3gtJytpO1xuICAgICAgICAgICAgICAgIGNoZWNrYm94Lm5hbWUgPSAnbGlzdElkc1tdJztcbiAgICAgICAgICAgICAgICBjaGVja2JveC52YWx1ZSA9IHVzZXJMaXN0c1tpXS5pZDtcblxuICAgICAgICAgICAgICAgIGlmKHVzZXJMaXN0c1tpXS5pdGVtQXNzaWduZWQgPT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGFzc2lnbkNlbGwuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChsaXN0TmFtZUNlbGwpO1xuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChhc3NpZ25DZWxsKTtcbiAgICAgICAgICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuICAgIHRoaXMud2luZG93LmFzc2lnblRvR2Vhckxpc3QgPSBmdW5jdGlvbiBhc3NpZ25Ub0dlYXJMaXN0KGVsZW1lbnQpe1xuICAgICAgICBsZXQgbGlzdElkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcpO1xuICAgICAgICBsZXQgaXRlbUlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaXRlbS1pZCcpO1xuXG4gICAgICAgIGlmKCFlbGVtZW50LmNoZWNrZWQpe1xuICAgICAgICAgICAgbGlzdElkID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdXJsID0gJy9hc3NpZ24tdG8tZ2Vhci1saXN0J1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIGxpc3RfaWQ6IGxpc3RJZCxcbiAgICAgICAgICAgIGlkOiBpdGVtSWRcbiAgICAgICAgfTtcblxuXG4gICAgICAgIGF4aW9zLnBvc3QodXJsLGRhdGEpXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXNwb25zZSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0gMSl7XG5cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGFsZXJ0KHJlc3BvbnNlLm1zZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHRoaXMud2luZG93LmFkZExpc3RJdGVtID0gZnVuY3Rpb24gYWRkTGlzdEl0ZW0oY2F0ZWdvcnljb3VudGVyID0gbnVsbCwgZ3JvdXBDYXRlZ29yeSA9IG51bGwpIHtcbiAgICAgICAgbGV0IG51bWJlck9mSXRlbXNUb0FkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZXNUb0FkZFwiKTtcbiAgICAgICAgbGV0IGxpbmVzVG9BZGQgPSAxO1xuICAgICAgICBpZiAobnVtYmVyT2ZJdGVtc1RvQWRkID09PSBudWxsIHx8ICtudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPCAxKSB7XG4gICAgICAgICAgICBudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPSBsaW5lc1RvQWRkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGluZXNUb0FkZCA9ICtudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzVG9BZGQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGxpc3RVT00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbVwiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBmaW5hbElFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaW5hbC1pXCIpO1xuICAgICAgICAgICAgbGV0IGxpc3RCeUl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0QnlJdGVtc1wiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBpdGVtVGFibGU7XG5cbiAgICAgICAgICAgIGlmICgrbGlzdEJ5SXRlbXMgPT0gMSkge1xuICAgICAgICAgICAgICAgIGxpc3RCeUl0ZW1zID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpdGVtVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW0tdGFibGUtYm9keVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGlzdEJ5SXRlbXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsZXQgdGFibGVDYXRlZ29yeSA9IGNhdGVnb3J5Y291bnRlcjtcbiAgICAgICAgICAgICAgICBpdGVtVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgICAgICAgICAgXCJjYXRlZ29yeVRhYmxlLVwiICsgdGFibGVDYXRlZ29yeVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB1c2VySWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJJZFwiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RJZFwiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBmaW5hbEkgPSBmaW5hbElFbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgZmluYWxJRWxlbWVudC52YWx1ZSA9ICtmaW5hbEkgKyAxO1xuXG4gICAgICAgICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICAgICAgcm93LmlkID0gJ3Jvdy0nK2ZpbmFsSTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIGNlbGxzIGFuZCBpbnB1dCBlbGVtZW50cy5cbiAgICAgICAgICAgIGxldCBjZWxsMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgICAgICAgICAgIGNlbGwwLnNjb3BlID0gXCJyb3dcIjtcbiAgICAgICAgICAgIGNlbGwwLmlubmVySFRNTCA9IGZpbmFsSTtcblxuICAgICAgICAgICAgbGV0IGNlbGwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuXG4gICAgICAgICAgICBsZXQgY291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGNvdW50ZXIudHlwZSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICBjb3VudGVyLm5hbWUgPSBcImlkW11cIjtcbiAgICAgICAgICAgIGNvdW50ZXIuaWQgPSBcImlkLVwiICsgZmluYWxJO1xuICAgICAgICAgICAgY291bnRlci52YWx1ZSA9IFwibmV3LVwiICsgZmluYWxJO1xuICAgICAgICAgICAgY291bnRlci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIsIFwiaWRcIik7XG5cbiAgICAgICAgICAgIGxldCB1cGRhdGVNYXN0ZXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgdXBkYXRlTWFzdGVyTGlzdC50eXBlID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgIHVwZGF0ZU1hc3Rlckxpc3QubmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB1cGRhdGVNYXN0ZXJMaXN0LmlkID0gXCJ1cGRhdGVNYXN0ZXItXCIrZmluYWxJO1xuICAgICAgICAgICAgdXBkYXRlTWFzdGVyTGlzdC52YWx1ZSA9IFwidHJ1ZVwiO1xuXG5cbiAgICAgICAgICAgIGxldCBpdGVtTmFtZSA9IGNyZWF0ZUxpc3RJdGVtSW5wdXQoXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgXCJpdGVtTmFtZVwiLFxuICAgICAgICAgICAgICAgIGZpbmFsSSxcbiAgICAgICAgICAgICAgICBcIml0ZW1fbmFtZVwiXG5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpdGVtTmFtZS5wbGFjZWhvbGRlciA9IFwiSXRlbSBOYW1lXCI7XG4gICAgICAgICAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBjZWxsNi5pZCA9IFwiYnRuLXRkLVwiICsgZmluYWxJO1xuICAgICAgICAgICAgbGV0IGRlbGV0ZUJ0biA9IGNyZWF0ZURlbGV0ZUJ1dHRvbihmaW5hbEkpO1xuICAgICAgICAgICAgbGV0IGNlbGwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuXG4gICAgICAgICAgICBsZXQgaXRlbVdlaWdodCA9IGNyZWF0ZUxpc3RJdGVtSW5wdXQoXG4gICAgICAgICAgICAgICAgXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICBcIml0ZW1XZWlnaHRcIixcbiAgICAgICAgICAgICAgICBmaW5hbEksXG4gICAgICAgICAgICAgICAgXCJpdGVtX3dlaWdodFwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaXRlbVdlaWdodC52YWx1ZSA9IDA7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJmb3Itd2VpZ2h0XCIpO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWlucHV0XCIpO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xuICAgICAgICAgICAgY2VsbDIuY2xhc3NMaXN0LmFkZChcIm51bWJlci1jb2xcIik7XG5cbiAgICAgICAgICAgIGxldCBjZWxsMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGxldCBsaW5lVW9tQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGNlbGwzLmNsYXNzTGlzdC5hZGQoXCJ1b20tdGRcIik7XG4gICAgICAgICAgICBsaW5lVW9tQ2VsbC5jbGFzc0xpc3QuYWRkKFwidW9tLXRkXCIpO1xuICAgICAgICAgICAgbGV0IHJhZGlvMTtcbiAgICAgICAgICAgIGxldCByYWRpbzI7XG4gICAgICAgICAgICBsZXQgcmFkaW9MYWJlbDE7XG4gICAgICAgICAgICBsZXQgcmFkaW9MYWJlbDI7XG4gICAgICAgICAgICBsZXQgcmFkaW9MYWJlbDM7XG5cbiAgICAgICAgICAgIGlmIChsaXN0VU9NID09PSBcInVzXCIpIHtcbiAgICAgICAgICAgICAgICByYWRpbzEgPSBjcmVhdGVSYWRpbyhcImluX291bmNlc1wiLCBcIlwiLCBcIm96XCIsIGZpbmFsSSk7XG4gICAgICAgICAgICAgICAgcmFkaW9MYWJlbDEgPSBjcmVhdGVMYWJlbChcbiAgICAgICAgICAgICAgICAgICAgXCJPWlwiLFxuICAgICAgICAgICAgICAgICAgICBcInVvbS1vei1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgICAgICAgICAgXCJvelwiLFxuICAgICAgICAgICAgICAgICAgICBmaW5hbElcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJhZGlvMiA9IGNyZWF0ZVJhZGlvKFwiaW5fbGJzXCIsIFwiXCIsIFwibGJzXCIsIGZpbmFsSSk7XG4gICAgICAgICAgICAgICAgcmFkaW9MYWJlbDIgPSBjcmVhdGVMYWJlbChcbiAgICAgICAgICAgICAgICAgICAgXCJMQlNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ1b20tbGJzLVwiICsgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICBcImxic1wiLFxuICAgICAgICAgICAgICAgICAgICBmaW5hbElcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJhZGlvTGFiZWwzID0gY3JlYXRlTGFiZWwoXG4gICAgICAgICAgICAgICAgICAgIFwiT1pcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ1b20tb3otXCIgKyBmaW5hbEksXG4gICAgICAgICAgICAgICAgICAgIFwib3pcIixcbiAgICAgICAgICAgICAgICAgICAgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmFkaW8xID0gY3JlYXRlUmFkaW8oXCJpbl9ncmFtc1wiLCBcIlwiLCBcImdyYW1cIiwgZmluYWxJKTtcbiAgICAgICAgICAgICAgICByYWRpb0xhYmVsMSA9IGNyZWF0ZUxhYmVsKFxuICAgICAgICAgICAgICAgICAgICBcIkdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ1b20tZ3JhbS1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgICAgICAgICAgXCJncmFtXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsSVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmFkaW8yID0gY3JlYXRlUmFkaW8oXCJpbl9raWxvc1wiLCBcIlwiLCBcImtnXCIsIGZpbmFsSSk7XG4gICAgICAgICAgICAgICAgcmFkaW9MYWJlbDIgPSBjcmVhdGVMYWJlbChcbiAgICAgICAgICAgICAgICAgICAgXCJLR1wiLFxuICAgICAgICAgICAgICAgICAgICBcInVvbS1rZy1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgICAgICAgICAgXCJrZ1wiLFxuICAgICAgICAgICAgICAgICAgICBmaW5hbElcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJhZGlvTGFiZWwzID0gY3JlYXRlTGFiZWwoXG4gICAgICAgICAgICAgICAgICAgIFwiR1wiLFxuICAgICAgICAgICAgICAgICAgICBcInVvbS1ncmFtLVwiICsgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICBcImdyYW1cIixcbiAgICAgICAgICAgICAgICAgICAgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGNlbGw0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgY2VsbDQuY2xhc3NMaXN0LmFkZChcIm51bWJlci1jb2xcIik7XG4gICAgICAgICAgICBsZXQgcGFja2VkQW1vdW50ID0gY3JlYXRlTGlzdEl0ZW1JbnB1dChcbiAgICAgICAgICAgICAgICBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIFwicGFja2VkQW1vdW50XCIsXG4gICAgICAgICAgICAgICAgZmluYWxJLFxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBwYWNrZWRBbW91bnQudmFsdWUgPSAxO1xuXG4gICAgICAgICAgICBwYWNrZWRBbW91bnQuY2xhc3NMaXN0LmFkZChcImZvci13ZWlnaHRcIik7XG4gICAgICAgICAgICBwYWNrZWRBbW91bnQuY2xhc3NMaXN0LmFkZChcIm51bWJlci1pbnB1dFwiKTtcbiAgICAgICAgICAgIHBhY2tlZEFtb3VudC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBjZWxsNS5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWNvbFwiKTtcbiAgICAgICAgICAgIGxldCB0b3RhbExpbmVXZWlnaHQgPSBjcmVhdGVMaXN0SXRlbUlucHV0KFxuICAgICAgICAgICAgICAgIFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgXCJ0b3RhbExpbmVXZWlnaHRcIixcbiAgICAgICAgICAgICAgICBmaW5hbEksXG4gICAgICAgICAgICAgICAgXCJ0b3RhbF9saW5lX3dlaWdodFwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LnZhbHVlID0gMDtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgXCJkYXRhLWNvbHVtbi1uYW1lXCIsXG4gICAgICAgICAgICAgICAgXCJ0b3RhbF9saW5lX3dlaWdodFwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LnNldEF0dHJpYnV0ZShcInJlYWRvbmx5XCIsIHRydWUpO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJudW1iZXItaW5wdXRcIik7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC5jbGFzc0xpc3QuYWRkKFwiZm9yLXRvdGFsLWxpc3Qtd2VpZ2h0XCIpO1xuXG4gICAgICAgICAgICAvL2FwcGVuZCBpbnB1dHMgdG8gY2VsbHMuXG5cbiAgICAgICAgICAgIC8vIERlZmluZSB0aGUgU1ZHIG5hbWVzcGFjZVxuICAgICAgICAgICAgY29uc3Qgc3ZnTmFtZXNwYWNlID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuICAgICAgICAgICAgbGV0IGljb25DZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IFNWRyBlbGVtZW50XG4gICAgICAgICAgICAvLyBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOYW1lc3BhY2UsIFwic3ZnXCIpO1xuICAgICAgICAgICAgLy8gaWNvbi5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjE2XCIpO1xuICAgICAgICAgICAgLy8gaWNvbi5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIxNlwiKTtcbiAgICAgICAgICAgIC8vIGljb24uc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcImN1cnJlbnRDb2xvclwiKTtcbiAgICAgICAgICAgIC8vIGljb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJiaSBiaS1ncmlwLXZlcnRpY2FsXCIpO1xuICAgICAgICAgICAgLy8gaWNvbi5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDE2IDE2XCIpO1xuICAgICAgICAgICAgLy8gPGkgY2xhc3M9XCJmYXMgZmEtZ3JpcC12ZXJ0aWNhbFwiPjwvaT5cblxuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSA8cGF0aD4gZWxlbWVudFxuICAgICAgICAgICAgLy8gbGV0IHBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTmFtZXNwYWNlLCBcInBhdGhcIik7XG4gICAgICAgICAgICAvLyBwYXRoLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgIC8vICAgICBcImRcIixcbiAgICAgICAgICAgIC8vICAgICBcIk03IDJhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbTMgMGExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBNNyA1YTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMG0zIDBhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwTTcgOGExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBtMyAwYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMG0tMyAzYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMG0zIDBhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbS0zIDNhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbTMgMGExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBcIlxuICAgICAgICAgICAgLy8gKTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSBwYXRoIHRvIHRoZSBTVkdcbiAgICAgICAgICAgIC8vIGljb24uYXBwZW5kQ2hpbGQocGF0aCk7XG5cbiAgICAgICAgICAgIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICAgICAgaWNvbi5jbGFzc05hbWUgPSAnZmFzIGZhLWdyaXAtdmVydGljYWwnO1xuXG4gICAgICAgICAgICAvLyAvLyBBcHBlbmQgdGhlIFNWRyBpY29uIHRvIHRoZSBjZWxsXG4gICAgICAgICAgICBpY29uQ2VsbC5hcHBlbmRDaGlsZChpY29uKTtcblxuICAgICAgICAgICAgY2VsbDEuYXBwZW5kQ2hpbGQoY291bnRlcik7XG4gICAgICAgICAgICBjZWxsMS5hcHBlbmRDaGlsZCh1cGRhdGVNYXN0ZXJMaXN0KTtcbiAgICAgICAgICAgIGNlbGwxLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIGNlbGwyLmFwcGVuZENoaWxkKGl0ZW1XZWlnaHQpO1xuXG4gICAgICAgICAgICBsZXQgc2VsZWN0Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGxldCBjYXRlZ29yeVNlbGVjdCA9IGdldENhdGVncm95U2VsZWN0KGZpbmFsSSwgZ3JvdXBDYXRlZ29yeSk7XG5cbiAgICAgICAgICAgIHNlbGVjdENlbGwuYXBwZW5kKGNhdGVnb3J5U2VsZWN0KTtcblxuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQocmFkaW8xKTtcbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHJhZGlvTGFiZWwxKTtcbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHJhZGlvMik7XG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChyYWRpb0xhYmVsMik7XG5cbiAgICAgICAgICAgIGNlbGw0LmFwcGVuZENoaWxkKHBhY2tlZEFtb3VudCk7XG4gICAgICAgICAgICBjZWxsNS5hcHBlbmRDaGlsZCh0b3RhbExpbmVXZWlnaHQpO1xuICAgICAgICAgICAgbGluZVVvbUNlbGwuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbDMpO1xuICAgICAgICAgICAgY2VsbDYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIGNlbGxzIHRvIHRoZSByb3cuXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoaWNvbkNlbGwpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwxKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChzZWxlY3RDZWxsKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsMyk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDIpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGw0KTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsNSk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQobGluZVVvbUNlbGwpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGw2KTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSByb3cgdG8gdGhlIHRhYmxlLlxuICAgICAgICAgICAgaXRlbVRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgICAgICAvL2FkZCBmdW5jdGlvbnMgdG8gY2FsY3VsYXRlIGFuZCBjb252ZXJ0IHRvdGFsIHdlaWdodC5cbiAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXJXZWlnaHRDYWxjKGZpbmFsSSk7XG4gICAgICAgIH1cbiAgICAgICAgbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlID0gMTtcbiAgICB9O1xuXG4gICAgdGhpcy53aW5kb3cudXBkYXRlVU9NID0gZnVuY3Rpb24gdXBkYXRlVU9NKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gXCJ1c1wiKSB7XG4gICAgICAgICAgICB1c1JhZGlvVG9NZXRyaWMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1ldHJpY1JhZGlvVG9VcygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyV2VpZ2h0Q2FsYyhyb3cpIHtcbiAgICAgICAgbGV0IG5lZWRlZEZvcldlaWdodHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvci13ZWlnaHRcIik7XG4gICAgICAgIG5lZWRlZEZvcldlaWdodHMuZm9yRWFjaChmdW5jdGlvbiAobmVlZGVkRm9yV2VpZ2h0KSB7XG4gICAgICAgICAgICBuZWVkZWRGb3JXZWlnaHQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZ2V0TGluZVRvdGFsV2VpZ2h0KHJvdyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy53aW5kb3cuZ2V0TGluZVRvdGFsV2VpZ2h0ID0gZnVuY3Rpb24gZ2V0TGluZVRvdGFsV2VpZ2h0KFxuICAgICAgICByb3csXG4gICAgICAgIGNvbnZlcnQgPSBmYWxzZVxuICAgICkge1xuICAgICAgICBsZXQgd2VpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtV2VpZ2h0LVwiICsgcm93KS52YWx1ZTtcbiAgICAgICAgbGV0IHBhY2tlZEFtb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFja2VkQW1vdW50LVwiICsgcm93KS52YWx1ZTtcbiAgICAgICAgbGV0IHVvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tXCIpO1xuICAgICAgICBsZXQgbGluZVRvdGFsV2VpZ2h0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgICAgXCJ0b3RhbExpbmVXZWlnaHQtXCIgKyByb3dcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgbGluZVRvdGFsID0gMDtcbiAgICAgICAgbGluZVRvdGFsID0gK3dlaWdodCAqICtwYWNrZWRBbW91bnQ7XG4gICAgICAgIGxpbmVUb3RhbCA9IGxpbmVUb3RhbC50b0ZpeGVkKDMpLnJlcGxhY2UoL1suLF0wMCQvLCBcIlwiKTtcbiAgICAgICAgbGluZVRvdGFsV2VpZ2h0RWxlbWVudC52YWx1ZSA9IGxpbmVUb3RhbDtcblxuICAgICAgICB1cGRhdGVMaXN0SXRlbShsaW5lVG90YWxXZWlnaHRFbGVtZW50KTtcbiAgICB9O1xuICAgIHRoaXMud2luZG93LmNvbnZlcnRNZWFzdXJlbWVudCA9IGZ1bmN0aW9uIGNvbnZlcnRNZWFzdXJlbWVudChcbiAgICAgICAgcm93LFxuICAgICAgICBjb252ZXJ0ID0gZmFsc2VcbiAgICApIHtcbiAgICAgICAgbGV0IGxpc3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0SWQnKS52YWx1ZTtcbiAgICAgICAgbGV0IHVvbTtcbiAgICAgICAgbGV0IGlzTWFzdGVyTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpc01hc3RlcicpLnZhbHVlO1xuXG4gICAgICAgIGlmKGlzTWFzdGVyTGlzdCA9PT0gJ3RydWUnKXtcbiAgICAgICAgICAgIHVvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tLVwiK3JvdykudmFsdWU7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdW9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b21cIikudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZihsaXN0SWQgPT0gJ21hc3Rlcicpe1xuICAgICAgICAvLyAgICAgdW9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b20tXCIrcm93KS52YWx1ZTtcbiAgICAgICAgLy8gfWVsc2V7XG4gICAgICAgIC8vICAgICB1b20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbVwiKS52YWx1ZTtcbiAgICAgICAgLy8gfVxuICAgICAgICBsZXQgd2VpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtV2VpZ2h0LVwiICsgcm93KTtcbiAgICAgICAgbGV0IHBhY2tlZEFtb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFja2VkQW1vdW50LVwiICsgcm93KS52YWx1ZTtcbiAgICAgICAgbGV0IHRvdGFsV2VpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3RhbExpbmVXZWlnaHQtXCIgKyByb3cpO1xuICAgICAgICBsZXQgdG90YWxMaW5lV2VpZ2h0VmFsdWUgPSAwO1xuICAgICAgICBsZXQgd2VpZ2h0VmFsdWUgPSB3ZWlnaHQudmFsdWU7XG4gICAgICAgIGxldCBzbWFsbDtcbiAgICAgICAgbGV0IGxhcmdlO1xuICAgICAgICBsZXQgZWxlbWVudDtcbiAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lLXVvbS1sYWJlbC1cIiArIHJvdyk7XG4gICAgICAgIGxldCBsYWJlbEhUTUw7XG5cbiAgICAgICAgaWYgKHVvbSA9PT0gXCJ1c1wiKSB7XG4gICAgICAgICAgICBzbWFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tLW96LVwiICsgcm93KTtcbiAgICAgICAgICAgIGxhcmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b20tbGJzLVwiICsgcm93KTtcbiAgICAgICAgICAgIGlmIChzbWFsbC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0VmFsdWUgPSArd2VpZ2h0VmFsdWUgKiAxNjtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gc21hbGw7XG4gICAgICAgICAgICAgICAgbGFiZWxIVE1MID0gXCJPWlwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3ZWlnaHRWYWx1ZSA9ICt3ZWlnaHRWYWx1ZSAvIDE2O1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBsYXJnZTtcbiAgICAgICAgICAgICAgICBsYWJlbEhUTUwgPSBcIkxCU1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc21hbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1ncmFtLVwiICsgcm93KTtcbiAgICAgICAgICAgIGxhcmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b20ta2ctXCIgKyByb3cpO1xuXG4gICAgICAgICAgICBpZiAoc21hbGwuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHdlaWdodFZhbHVlID0gK3dlaWdodFZhbHVlICogMTAwMDtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gc21hbGw7XG4gICAgICAgICAgICAgICAgbGFiZWxIVE1MID0gXCJHXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdlaWdodFZhbHVlID0gK3dlaWdodFZhbHVlIC8gMTAwMDtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gbGFyZ2U7XG4gICAgICAgICAgICAgICAgbGFiZWxIVE1MID0gXCJLR1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdG90YWxMaW5lV2VpZ2h0VmFsdWUgPSArd2VpZ2h0VmFsdWUgKiArcGFja2VkQW1vdW50O1xuICAgICAgICB3ZWlnaHQudmFsdWUgPSB3ZWlnaHRWYWx1ZS50b0ZpeGVkKDMpLnJlcGxhY2UoL1suLF0wMCQvLCBcIlwiKTtcbiAgICAgICAgdG90YWxXZWlnaHQudmFsdWUgPSB0b3RhbExpbmVXZWlnaHRWYWx1ZVxuICAgICAgICAgICAgLnRvRml4ZWQoMylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bLixdMDAkLywgXCJcIik7XG4gICAgICAgIGxhYmVsLmlubmVySFRNTCA9IGxhYmVsSFRNTDtcbiAgICAgICAgdXBkYXRlTGlzdEl0ZW0oZWxlbWVudCk7XG4gICAgICAgIHVwZGF0ZUxpc3RJdGVtKHdlaWdodCk7XG4gICAgICAgIHVwZGF0ZUxpc3RJdGVtKHRvdGFsV2VpZ2h0KTtcbiAgICB9O1xuICAgIHRoaXMud2luZG93LmFkZENhdGVnb3J5R3JvdXAgPSBmdW5jdGlvbiBhZGRDYXRlZ29yeUdyb3VwKGxpc3RJZCxjYXRlZ29yeSwgbGlzdFVPTSwgdXNlcklkKXtcblxuICAgICAgICBsZXQgY29sdW1uTmFtZTtcbiAgICAgICAgaWYobGlzdFVPTSA9PT0gJ3VzJyl7XG4gICAgICAgICAgICBjb2x1bW5OYW1lID0gJ2luX291bmNlcyc7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29sdW1uTmFtZSA9ICdpbl9ncmFtcyc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGF0YSA9IGdldEJvb2xlYW5EYXRhKGNvbHVtbk5hbWUpO1xuICAgICAgICBkYXRhWydsaXN0X2lkJ10gPSBsaXN0SWQ7XG4gICAgICAgIGRhdGFbJ3VzZXJfaWQnXSA9IHVzZXJJZDtcbiAgICAgICAgZGF0YVsnaXRlbV9uYW1lJ10gPSAnJztcbiAgICAgICAgZGF0YVsnaXRlbV93ZWlnaHQnXSA9IDA7XG4gICAgICAgIGRhdGFbJ2Ftb3VudCddID0gMTtcbiAgICAgICAgZGF0YVsnaXRlbV9jYXRlZ29yeSddID0gY2F0ZWdvcnk7XG4gICAgICAgIGxldCB1cmwgPSAnL2xpc3QtaXRlbSdcblxuICAgICAgICBheGlvc1xuICAgICAgICAucG9zdCh1cmwsIGRhdGEpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIHJlcyA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gJzEnKXtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGFsZXJ0KHJlcy5tc2cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG5cbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcblxuICAgICAgICB9KTtcblxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRCb29sZWFuRGF0YShjb2x1bW5OYW1lKSB7XG4gICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgIGRhdGFbXCJpbl9vdW5jZXNcIl0gPSBmYWxzZTtcbiAgICAgICAgZGF0YVtcImluX2xic1wiXSA9IGZhbHNlO1xuICAgICAgICBkYXRhW1wiaW5fZ3JhbXNcIl0gPSBmYWxzZTtcbiAgICAgICAgZGF0YVtcImluX2tpbG9zXCJdID0gZmFsc2U7XG4gICAgICAgIHN3aXRjaCAoY29sdW1uTmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcImluX291bmNlc1wiOlxuICAgICAgICAgICAgICAgIGRhdGFbXCJpbl9vdW5jZXNcIl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImluX2xic1wiOlxuICAgICAgICAgICAgICAgIGRhdGFbXCJpbl9sYnNcIl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImluX2dyYW1zXCI6XG4gICAgICAgICAgICAgICAgZGF0YVtcImluX2dyYW1zXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJpbl9raWxvc1wiOlxuICAgICAgICAgICAgICAgIGRhdGFbXCJpbl9raWxvc1wiXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICB0aGlzLndpbmRvdy51cGRhdGVMaXN0SXRlbSA9IGZ1bmN0aW9uIHVwZGF0ZUxpc3RJdGVtKGVsZW1lbnQpIHtcblxuXG4gICAgICAgIGxldCBjb2x1bW5OYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIpO1xuICAgICAgICBsZXQgdmFsdWUgPSBlbGVtZW50LnZhbHVlO1xuICAgICAgICBsZXQgaWQgPSBlbGVtZW50LmlkO1xuICAgICAgICBsZXQgaWRBcnIgPSBpZC5zcGxpdChcIi1cIik7XG4gICAgICAgIGxldCBhcnJMZW5ndGggPSBpZEFyci5sZW5ndGg7XG4gICAgICAgIGxldCByb3cgPSBpZEFyclthcnJMZW5ndGggLSAxXTtcbiAgICAgICAgbGV0IGl0ZW1JZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWQtXCIgKyByb3cpO1xuICAgICAgICBsZXQgaXRlbUlkVmFsdWUgPSBpdGVtSWQudmFsdWU7XG4gICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RJZFwiKS52YWx1ZTtcbiAgICAgICAgbGV0IHVybCA9IFwiL2xpc3QtaXRlbVwiO1xuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICBsZXQgdXNlcklkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VySWRcIikudmFsdWU7XG4gICAgICAgIGxldCB1cGRhdGVNYXN0ZXIgPSBudWxsO1xuICAgICAgICBsZXQgY3JlYXRlID0gdHJ1ZTtcbiAgICAgICAgbGV0IGlzTWFzdGVyTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpc01hc3RlcicpLnZhbHVlO1xuICAgICAgICAvLyBsZXQgaW5wdXRSb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm93LScrcm93KTtcbiAgICAgICAgLy8gbGV0IGlucHV0c0FuZFNlbGVjdHMgPSBpbnB1dFJvdy5xdWVyeVNlbGVjdG9yKCcgdGQgaW5wdXQsIHRkIHNlbGVjdCcpO1xuICAgICAgICAvLyBpbnB1dHNBbmRTZWxlY3RzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICBkYXRhW2NvbHVtbk5hbWVdID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKGNvbHVtbk5hbWUuc3Vic3RyaW5nKDAsIDMpID09PSBcImluX1wiKSB7XG4gICAgICAgICAgICBkYXRhID0gZ2V0Qm9vbGVhbkRhdGEoY29sdW1uTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW1wibGlzdF9pZFwiXSA9IGxpc3RJZDtcbiAgICAgICAgZGF0YVtcInVzZXJfaWRcIl0gPSB1c2VySWQ7XG4gICAgICAgIGRhdGFbXCJpZFwiXSA9IGl0ZW1JZFZhbHVlO1xuICAgICAgICBpZihpdGVtSWRWYWx1ZS5zdWJzdHJpbmcoMCwzKSAhPT0gJ25ldycpe1xuICAgICAgICAgICAgY3JlYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB1cmwgPSB1cmwgKycvJysgaXRlbUlkVmFsdWU7XG4gICAgICAgICAgICB1cGRhdGVNYXN0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlTWFzdGVyLScrcm93KTtcbiAgICAgICAgICAgIGlmKHVwZGF0ZU1hc3RlciAhPT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgdXBkYXRlTWFzdGVyID0gdXBkYXRlTWFzdGVyLnZhbHVlO1xuICAgICAgICAgICAgICAgIGRhdGFbJ3VwZGF0ZU1hc3RlciddID0gdXBkYXRlTWFzdGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC5wb3N0KHVybCwgZGF0YSwgaXRlbUlkKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuXG4gICAgICAgICAgICAgICAgbGV0IHJlc0RhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICBpZihyZXNEYXRhLnN0YXR1cyAhPT0gJzEnKXtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQocmVzRGF0YS5tc2cpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGNyZWF0ZSl7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1JZC52YWx1ZSA9IHJlc0RhdGEubmV3SWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGdldERlbGV0ZUJ0bkRhdGEoaXRlbUlkLnZhbHVlLHJvdyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChcIkZhaWxlZCB0byB1cGRhdGUgbGlzdCBpdGVtLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBpZihpc01hc3Rlckxpc3QgPT09ICdmYWxzZScpe1xuICAgICAgICAgICAgdXBkYXRlVG90YWxMaXN0V2VpZ2h0cygpO1xuICAgICAgICB9XG5cblxuICAgIH07XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVUb3RhbExpc3RXZWlnaHRzKCkge1xuICAgICAgICBsZXQgd2VpZ2h0c0ZvclBXID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3ItdG90YWwtbGlzdC13ZWlnaHRcIik7XG4gICAgICAgIGxldCBiYXNlV2VpZ2h0ID0gMDtcbiAgICAgICAgbGV0IHRvdGFsUGFja1dlaWdodCA9IDA7XG4gICAgICAgIGxldCBtYXhQYWNrV2VpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXhQYWNrV2VpZ2h0XCIpLnZhbHVlO1xuICAgICAgICBsZXQgY2xhc3NXYXJuaW5nVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xhc3NXYXJuaW5nVmFsdWUnKS52YWx1ZTtcbiAgICAgICAgbGV0IHVvbVRleHQgPSBcIkxCU1wiO1xuICAgICAgICB3ZWlnaHRzRm9yUFcuZm9yRWFjaChmdW5jdGlvbiAod2VpZ2h0Rm9yUFcpIHtcbiAgICAgICAgICAgIGxldCBpZCA9IHdlaWdodEZvclBXLmlkO1xuICAgICAgICAgICAgbGV0IGlkQXJyID0gaWQuc3BsaXQoXCItXCIpO1xuICAgICAgICAgICAgbGV0IGFyckxlbmd0aCA9IGlkQXJyLmxlbmd0aDtcbiAgICAgICAgICAgIGxldCByb3cgPSBpZEFyclthcnJMZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGxldCBwYWNrZWRBbW91bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgICAgICBcInBhY2tlZEFtb3VudC1cIiArIHJvd1xuICAgICAgICAgICAgKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBjb252ZXJ0ZXIgPSAxO1xuICAgICAgICAgICAgbGV0IHJvd1dlaWdodCA9IDA7XG4gICAgICAgICAgICBsZXQgaXRlbVdlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXRlbVdlaWdodC1cIiArIHJvdykudmFsdWU7XG4gICAgICAgICAgICBsZXQgdW9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b21cIikudmFsdWU7XG4gICAgICAgICAgICBsZXQgaXRlbUNhdGVnb3J5RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgICAgICAgIFwiaXRlbUNhdGVnb3J5LVwiICsgcm93XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBsZXQgaXRlbUNhdGVnb3J5ID0gXCJcIjtcbiAgICAgICAgICAgIGlmIChpdGVtQ2F0ZWdvcnlFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaXRlbUNhdGVnb3J5ID0gaXRlbUNhdGVnb3J5RWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGl0ZW1DYXRlZ29yeSA9PT0gdW5kZWZpbmVkIHx8IGl0ZW1DYXRlZ29yeSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGl0ZW1DYXRlZ29yeSA9IFwiXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh1b20gPT09IFwidXNcIikge1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1vei1cIiArIHJvdykuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb252ZXJ0ZXIgPSBvdW5jZUNvbnZlcnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVvbVRleHQgPSBcIktHXCI7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1ncmFtLVwiICsgcm93KS5jaGVja2VkID09PSB0cnVlXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnRlciA9IGdyYW1Db252ZXJ0ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByb3dXZWlnaHQgPSArcGFja2VkQW1vdW50ICogKCtpdGVtV2VpZ2h0IC8gY29udmVydGVyKTtcbiAgICAgICAgICAgIHRvdGFsUGFja1dlaWdodCA9IHRvdGFsUGFja1dlaWdodCArIHJvd1dlaWdodDtcblxuICAgICAgICAgICAgaWYgKGl0ZW1DYXRlZ29yeSAhPT0gXCJjb25zdW1hYmxlc1wiKSB7XG4gICAgICAgICAgICAgICAgYmFzZVdlaWdodCA9IGJhc2VXZWlnaHQgKyByb3dXZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICgrYmFzZVdlaWdodCA+ICttYXhQYWNrV2VpZ2h0KSB7XG4gICAgICAgICAgICBsZXQgZGl2RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VpZ2h0V2FybmluZy1kaXZcIik7XG4gICAgICAgICAgICBkaXZFbGVtZW50LmlubmVyVGV4dCA9XCJCYXNlIHdlaWdodCAoXCIgKyAgYmFzZVdlaWdodC50b0ZpeGVkKDMpICtcIiBcIiArdW9tVGV4dCArXCIpIGV4Y2VlZGVzIHRoZSB3ZWlnaHQgZm9yIHRoZSAnXCIgK2NsYXNzV2FybmluZ1ZhbHVlK1wiJyBzdHlsZSBvZiBoaWtpbmcuXCI7XG5cbiAgICAgICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VpZ2h0V2FybmluZy1kaXZcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNlV2VpZ2h0XCIpLnZhbHVlID0gYmFzZVdlaWdodC50b0ZpeGVkKDMpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdGFsUGFja1dlaWdodFwiKS52YWx1ZSA9XG4gICAgICAgICAgICB0b3RhbFBhY2tXZWlnaHQudG9GaXhlZCgzKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlTGlzdEl0ZW1JbnB1dChcbiAgICAgICAgdHlwZSxcbiAgICAgICAgbmFtZUJhc2UsXG4gICAgICAgIHJvdyxcbiAgICAgICAgY29sdW1uTmFtZSxcbiAgICAgICAgbGlzdGVuID0gdHJ1ZVxuICAgICkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgZWxlbWVudC50eXBlID0gdHlwZTtcbiAgICAgICAgZWxlbWVudC5uYW1lID0gbmFtZUJhc2UgKyBcIltdXCI7XG4gICAgICAgIGVsZW1lbnQuaWQgPSBuYW1lQmFzZSArIFwiLVwiICsgcm93O1xuICAgICAgICBlbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIsIGNvbHVtbk5hbWUpO1xuICAgICAgICBpZihsaXN0ZW4pe1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVMaXN0SXRlbShlbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRDYXRlZ3JveVNlbGVjdChyb3csIGdyb3VwQ2F0ZWdvcnkgPSBudWxsLCBsaXN0ZW4gPSB0cnVlKSB7XG5cbiAgICAgICAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgIHNlbGVjdC5pZCA9IFwiSXRlbUNhdGVnb3J5LVwiICsgcm93O1xuICAgICAgICBzZWxlY3QubmFtZSA9IFwiaXRlbUNhdGVnb3J5LVwiICsgcm93O1xuICAgICAgICBzZWxlY3Quc2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4tbmFtZVwiLCBcIml0ZW1fY2F0ZWdvcnlcIik7XG4gICAgICAgIHNlbGVjdC5jbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiO1xuXG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgICBvcHRpb24udGV4dCA9IFwiQ2hvb3NlXCI7XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICBsZXQgb3B0aW9uTGlzdDtcblxuICAgICAgICBvcHRpb25MaXN0ID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcIi9saXN0LWl0ZW0tY2F0ZWdvcmllc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIGVycm9yXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG5cbiAgICAgICAgb3B0aW9uTGlzdCgpLnRoZW4oKGRhdGEpID0+IHtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gZGF0YVtpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IGRhdGFbaV0uY2F0ZWdvcnk7XG4gICAgICAgICAgICAgICAgaWYgKGdyb3VwQ2F0ZWdvcnkgIT0gbnVsbCAmJiBkYXRhW2ldLnZhbHVlID09PSBncm91cENhdGVnb3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYobGlzdGVuKXtcbiAgICAgICAgICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVMaXN0SXRlbShzZWxlY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHJldHVybiBzZWxlY3Q7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1ldHJpY1JhZGlvVG9VcygpIHtcbiAgICAgICAgbGV0IGlucHV0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1ldHJpYy1yYWRpb1wiKTtcbiAgICAgICAgaW5wdXRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxldCBpZEFyciA9IGlucHV0RWxlbWVudC5pZC5zcGxpdChcIi1cIik7XG4gICAgICAgICAgICBsZXQgdW9tID0gaWRBcnJbMV07XG4gICAgICAgICAgICBsZXQgcm93ID0gaWRBcnJbaWRBcnIubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBsZXQgZWxlbWVudFR5cGUgPSBpbnB1dEVsZW1lbnQudHlwZTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50VGFnID0gaW5wdXRFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgbGV0IG5ld0VsZW1lbnQ7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50VHlwZSA9PT0gXCJyYWRpb1wiICYmIHVvbSA9PT0gXCJncmFtXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlUmFkaW8oXCJpbl9vdW5jZXNcIiwgXCJPWlwiLCBcIm96XCIsIHJvdywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUeXBlID09PSBcInJhZGlvXCIgJiYgdW9tID09PSBcImtnXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlUmFkaW8oXCJpbl9sYnNcIiwgXCJMQlNcIiwgXCJsYnNcIiwgcm93KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFRhZyA9PT0gXCJsYWJlbFwiICYmIHVvbSA9PT0gXCJncmFtXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlTGFiZWwoXCJPWlwiLCBcInVvbS1vei1cIiArIHJvdywgXCJvelwiLCByb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VGFnID09PSBcImxhYmVsXCIgJiYgdW9tID09PSBcImtnXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlTGFiZWwoXCJMQlNcIiwgXCJ1b20tbGJzLVwiICsgcm93LCBcImxic1wiLCByb3cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmV3RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZChcbiAgICAgICAgICAgICAgICAgICAgbmV3RWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVzUmFkaW9Ub01ldHJpYygpIHtcbiAgICAgICAgbGV0IGlucHV0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnVzLXJhZGlvXCIpO1xuICAgICAgICBpbnB1dEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGlucHV0RWxlbWVudCkge1xuICAgICAgICAgICAgbGV0IGlkQXJyID0gaW5wdXRFbGVtZW50LmlkLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgICAgIGxldCB1b20gPSBpZEFyclsxXTtcbiAgICAgICAgICAgIGxldCByb3cgPSBpZEFycltpZEFyci5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50VHlwZSA9IGlucHV0RWxlbWVudC50eXBlO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRUYWcgPSBpbnB1dEVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgbGV0IG5ld0VsZW1lbnQ7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50VHlwZSA9PT0gXCJyYWRpb1wiICYmIHVvbSA9PT0gXCJvelwiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZVJhZGlvKFwiaW5fZ3JhbXNcIiwgXCJHUlwiLCBcImdyYW1cIiwgcm93KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFR5cGUgPT09IFwicmFkaW9cIiAmJiB1b20gPT09IFwibGJzXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlUmFkaW8oXCJpbl9raWxvc1wiLCBcIktHXCIsIFwia2dcIiwgcm93KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFRhZyA9PT0gXCJsYWJlbFwiICYmIHVvbSA9PT0gXCJvelwiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZUxhYmVsKFwiR1wiLCBcInVvbS1ncmFtLVwiICsgcm93LCBcImdyYW1cIiwgcm93KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFRhZyA9PT0gXCJsYWJlbFwiICYmIHVvbSA9PT0gXCJsYnNcIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVMYWJlbChcIktHXCIsIFwidW9tLWtnLVwiICsgcm93LCBcImtnXCIsIHJvdyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuZXdFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKFxuICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlUmFkaW8oZGF0YUNvbHVtbk5hbWUsIGxhYmVsLCB1b20sIHJvdykge1xuICAgICAgICBsZXQgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHJhZGlvLmNsYXNzTmFtZSA9XG4gICAgICAgICAgICBcImZvcm0tY2hlY2staW5wdXRcIiArXG4gICAgICAgICAgICAodW9tID09PSBcImdyYW1cIiB8fCB1b20gPT09IFwia2dcIiA/IFwiIG1ldHJpYy1yYWRpb1wiIDogXCIgdXMtcmFkaW9cIik7XG4gICAgICAgIHJhZGlvLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgICAgIHJhZGlvLm5hbWUgPSBcInVvbS1cIiArIHJvdyArIFwiW11cIjtcbiAgICAgICAgcmFkaW8uaWQgPSBcInVvbS1cIiArIHVvbSArIFwiLVwiICsgcm93O1xuICAgICAgICByYWRpby5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIsIGRhdGFDb2x1bW5OYW1lKTtcblxuICAgICAgICBpZiAodW9tID09PSBcImdyYW1cIiB8fCB1b20gPT09IFwib3pcIikge1xuICAgICAgICAgICAgcmFkaW8uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb252ZXJ0TWVhc3VyZW1lbnQocm93KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByYWRpbztcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlTGFiZWwoaW5uZXJIdG1sLCBodG1sRm9yLCB1b20sIHJvdywgbGluZUxhYmVsID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBsYWJlbC5jbGFzc05hbWUgPVxuICAgICAgICAgICAgXCJmb3JtLWNoZWNrLWxhYmVsXCIgK1xuICAgICAgICAgICAgKHVvbSA9PT0gXCJncmFtXCIgfHwgdW9tID09PSBcImtnXCIgPyBcIiBtZXRyaWMtcmFkaW9cIiA6IFwiIHVzLXJhZGlvXCIpO1xuICAgICAgICBsYWJlbC5odG1sRm9yID0gaHRtbEZvcjtcbiAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gaW5uZXJIdG1sO1xuICAgICAgICBpZiAoIWxpbmVMYWJlbCkge1xuICAgICAgICAgICAgbGFiZWwuaWQgPSBcInVvbS1cIiArIHVvbSArIFwiLWxhYmVsLVwiICsgcm93O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGFiZWwuaWQgPSBcImxpbmUtdW9tLWxhYmVsLVwiICsgcm93O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH1cblxuICAgIHRoaXMud2luZG93LnVwZGF0ZUxpc3QgPSBmdW5jdGlvbiB1cGRhdGVMaXN0KGVsZW1lbnQsIGxpc3RJZCkge1xuICAgICAgICBsZXQgY29sdW1uTmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4tbmFtZVwiKTtcbiAgICAgICAgbGV0IHZhbHVlID0gZWxlbWVudC52YWx1ZTtcbiAgICAgICAgbGV0IHVybCA9IFwiL2dlYXItbGlzdC9cIiArIGxpc3RJZDtcblxuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICBkYXRhW2NvbHVtbk5hbWVdID0gdmFsdWU7XG5cbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC5wb3N0KHVybCwgZGF0YSwgbGlzdElkKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGFsZXJ0KHJlcy5kYXRhLm1zZyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChcIkZhaWxlZCB0byB1cGRhdGUgbGlzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNvbHVtbk5hbWUgPT09IFwic29ydFwiIHx8IGNvbHVtbk5hbWUgPT09IFwibGlzdF9jbGFzc1wiIHx8IGNvbHVtbk5hbWUgPT09ICdsaXN0X2l0ZW1zJykge1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGVhZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbS1jb2xsYXBzaWJsZS1oZWFkZXJcIik7XG5cbiAgICBoZWFkZXJzLmZvckVhY2goKGhlYWRlcikgPT4ge1xuICAgICAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBoZWFkZXIubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgY29uc3QgYXJyb3cgPSBoZWFkZXIucXVlcnlTZWxlY3RvcihcIi5pdGVtLWFycm93XCIpO1xuICAgICAgICAgICAgaWYgKGNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BlblwiKSkge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUucGFkZGluZyA9IFwiMCAxMHB4XCI7XG4gICAgICAgICAgICAgICAgYXJyb3cuaW5uZXJIVE1MID0gXCImIzk2NjBcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUucGFkZGluZyA9IFwiMTBweFwiO1xuICAgICAgICAgICAgICAgIGFycm93LmlubmVySFRNTCA9IFwiJiM5NjUwXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgbGV0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbWFzdGVyLWl0ZW0tdGFibGUgaW5wdXRcIik7XG5cbiAgICBpbnB1dHMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgaW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgbGV0IGxpc3RDaGFydGJ0biA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RDaGFydEJ0blwiKTtcbiAgICBpZihsaXN0Q2hhcnRidG4gIT09IG51bGwpe1xuICAgICAgICBkb2N1bWVudCAuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0Q2hhcnRCdG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RJZFwiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCB1cmwgPSBcIi9nZWFyLWxpc3QtYW5hbHl0aWNzL1wiICsgbGlzdElkO1xuXG4gICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAgIC5nZXQodXJsKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoYXJ0U3RhdHVzID0gQ2hhcnQuZ2V0Q2hhcnQoXCJnZWFyQ2hhcnRcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXJ0U3RhdHVzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnRTdGF0dXMuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZWFyQ2hhcnRcIik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGFydERhdGEgPSBKU09OLnBhcnNlKHJlcy5kYXRhLmNoYXJ0RGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRvdWdobnV0XCIsIC8vIENoYXJ0IHR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IGNoYXJ0RGF0YS5sYWJlbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGFiZWw6IGxpc3ROYW1lICsgJ0JyZWFrIERvd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogY2hhcnREYXRhLndlaWdodHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNoYXJ0RGF0YS5jb2xvcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyT2Zmc2V0OiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3V0b3V0OiA0NSwgLy8gQWRqdXN0IHRoZSBjdXRvdXQgcGVyY2VudGFnZSBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiAxNTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhbGFiZWxzOiBmYWxzZSwgLy8gUmVtb3ZpbmcgdGhpcyBsaW5lIHNob3dzIHRoZSBkYXRhbGFiZWxzIGFnYWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZVJvdGF0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZVNjYWxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBiYXNlV2VpZ2h0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFzZVdlaWdodFwiKS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvdGFsUGFja1dlaWdodCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdGFsUGFja1dlaWdodFwiKS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbEJhc2VXZWlnaHRcIikudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVdlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbFRvdGFsV2VpZ2h0XCIpLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsUGFja1dlaWdodDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuICAgIHRoaXMud2luZG93LnNob3dDb252cnNpb25BbGVydCA9IGZ1bmN0aW9uIHNob3dDb252cnNpb25BbGVydCgpe1xuICAgICAgICBhbGVydCgnQ2hhbmdpbmcgdGhpcyB2YWx1ZSB3aWxsIGFsc28gdXBkYXRlIHRoZSB1bml0cyBvZiBtZWFzdXJlIGFuZCBhc3NvY2lhdGVkIHZhbHVlcyBmb3IgYW55IGl0ZW0gb24gdGhpcyBnZWFyIGxpc3QuJyk7XG4gICAgfVxuICAgIHRoaXMud2luZG93LmNvbmZpcm1EZWxldGUgPSBmdW5jdGlvbiBjb25maXJtRGVsZXRlKGVsZW1lbnQpIHtcblxuICAgICAgICBsZXQgaXNNYXN0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXNNYXN0ZXInKS52YWx1ZTtcbiAgICAgICAgbGV0IGhyZWYgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1ocmVmJyk7XG4gICAgICAgIGxldCBuYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb2JqZWN0LW5hbWUnKTtcbiAgICAgICAgbGV0IG9iamVjdFR5cGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vYmplY3QtdHlwZScpO1xuICAgICAgICBsZXQgYW5jaG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZU9iamVjdEFuY2hvcicpO1xuICAgICAgICBsZXQgbW9kYWxCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZU1vZGFsQm9keScpO1xuICAgICAgICBsZXQgdGV4dCA9IGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlICR7b2JqZWN0VHlwZX0gJHtuYW1lfT9gO1xuICAgICAgICBsZXQgaGVscGVyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZUhlbHBlcicpO1xuICAgICAgICBoZWxwZXJEaXYuaW5uZXJUZXh0ID0gJyc7XG5cblxuICAgICAgICBpZihvYmplY3RUeXBlID09PSAnaXRlbTonICYmIGlzTWFzdGVyID09PSAnZmFsc2UnKXtcbiAgICAgICAgICAgIGxldCBsaXN0TmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtbmFtZScpO1xuICAgICAgICAgICAgbGV0IGhlbHB0ZXh0ID0gYCpEZWxldGluZyBhbiBpdGVtIGZyb20gdGhpcyBsaXN0ICgke2xpc3ROYW1lfSkgd2lsbCBub3QgZGVsZXRlIGl0IHRoZSAnWW91ciBHZWFyJyBzZWN0aW9uLmA7XG4gICAgICAgICAgICBoZWxwZXJEaXYuYXBwZW5kKGhlbHB0ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKG9iamVjdFR5cGUgPT09ICdpdGVtOicgJiYgaXNNYXN0ZXIgPT09ICd0cnVlJyl7XG4gICAgICAgICAgICBsZXQgbGlzdE5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0LW5hbWUnKTtcbiAgICAgICAgICAgIGxldCBoZWxwdGV4dCA9IGAqRGVsZXRpbmcgYW4gaXRlbSBmcm9tIHRoZSAnWW91ciBHZWFyJyBzZWN0aW9uIHdpbGwgZGVsZXRlIGl0IGZyb20gYWxsICdHZWFyIExpc3RzJy5gO1xuICAgICAgICAgICAgaGVscGVyRGl2LmFwcGVuZChoZWxwdGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGhlbHBlckRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICAgIG1vZGFsQm9keS5pbm5lckhUTUwgPSB0ZXh0O1xuICAgICAgICBhbmNob3Iuc2V0QXR0cmlidXRlKCdocmVmJyxocmVmKTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVJvdyhyb3cpe1xuICAgICAgICBjb25zb2xlLmxvZygnaW4gcmVtb3ZlIHJvdycpO1xuICAgICAgICBsZXQgdGFibGVSb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcm93LSR7cm93fWApXG4gICAgICAgICAgICB0YWJsZVJvdy5yZW1vdmUoKTtcblxuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVEZWxldGVCdXR0b24ocm93KSB7XG4gICAgICAgIGxldCBpc01hc3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpc01hc3RlcicpLnZhbHVlO1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLXNtIGJ0bi1kYW5nZXInO1xuICAgICAgICBidXR0b24udGl0bGUgPSAnRGVsZXRlIEl0ZW0nO1xuICAgICAgICBidXR0b24uaWQgPWBkZWxldGVJdGVtQnRuLSR7cm93fWA7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaHJlZicsJycpO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLW9iamVjdC1uYW1lJywnJyk7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtb2JqZWN0LWlkJywnJyk7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtb2JqZWN0LXR5cGUnLCdpdGVtOicpO1xuICAgICAgICBpZihpc01hc3RlciA9PT0gJ2ZhbHNlJyl7XG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtbmFtZScsZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3ROYW1lJykudmFsdWUpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1uYW1lJywnbWFzdGVyJyk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgIGljb24uY2xhc3NOYW1lID0gJ2ZhcyBmYS10cmFzaCc7XG5cbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmVtb3ZlUm93KHJvdyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREZWxldGVCdG5EYXRhKGlkLHJvdyl7XG4gICAgICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGVsZXRlSXRlbUJ0bi0ke3Jvd31gKTtcbiAgICAgICAgbGV0IHVybCA9IGAvbGlzdC1pdGVtLyR7aWR9YDtcblxuICAgICAgICBheGlvc1xuICAgICAgICAuZ2V0KHVybClcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cyAhPSBcIjFcIikge1xuICAgICAgICAgICAgICAgIGFsZXJ0KHJlcy5kYXRhLm1zZyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHJlcy5kYXRhLml0ZW07XG4gICAgICAgICAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWhyZWYnLGAvcmVtb3ZlLWxpc3QtaXRlbS8ke2l0ZW0uaWR9YCk7XG4gICAgICAgICAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLW9iamVjdC1uYW1lJyxpdGVtLml0ZW1fbmFtZSk7XG4gICAgICAgICAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLW9iamVjdC1pZCcsaXRlbS5pZCk7XG4gICAgICAgICAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRvZ2dsZScsXCJtb2RhbFwiKVxuICAgICAgICAgICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1icy10YXJnZXQnLFwiI2RlbGV0ZUFsZXJ0TW9kYWxcIik7XG4gICAgICAgICAgICBkZWxldGVCdG4ub25jbGljayA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgY29uZmlybURlbGV0ZShkZWxldGVCdG4pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICB9KTtcblxuXG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zb3J0YWJsZVwiKS5mb3JFYWNoKGZ1bmN0aW9uICh0YWJsZSkge1xuICAgICAgICBjb25zdCBjYXRlZ29yeUlkID0gdGFibGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1jYXRlZ29yeS1pZFwiKTtcblxuICAgICAgICBuZXcgU29ydGFibGUodGFibGUucXVlcnlTZWxlY3RvcihcInRib2R5XCIpLCB7XG4gICAgICAgICAgICBhbmltYXRpb246IDE1MCxcbiAgICAgICAgICAgIG9uRW5kOiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBuZXcgb3JkZXIgb2YgaXRlbXNcbiAgICAgICAgICAgICAgICBjb25zdCBvcmRlcmVkSWRzID0gW107XG4gICAgICAgICAgICAgICAgdGFibGUucXVlcnlTZWxlY3RvckFsbChcInRyXCIpLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgICAgICAgICAgICBvcmRlcmVkSWRzLnB1c2gocm93LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gU2VuZCB0aGUgbmV3IG9yZGVyIHRvIHRoZSBzZXJ2ZXIgdmlhIEFKQVhcbiAgICAgICAgICAgICAgICB1cGRhdGVJdGVtT3JkZXIoY2F0ZWdvcnlJZCwgb3JkZXJlZElkcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiB1cGRhdGVJdGVtT3JkZXIoY2F0ZWdvcnlJZCwgb3JkZXJlZElkcykge1xuXG4gICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RJZFwiKS52YWx1ZTtcblxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgXCJYLUNTUkYtVE9LRU5cIjogZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpXG4gICAgICAgICAgICAgICAgLmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIiksXG4gICAgICAgICAgICBjYXRlZ29yeV9pZDogY2F0ZWdvcnlJZCxcbiAgICAgICAgICAgIG9yZGVyZWRfaWRzOiBvcmRlcmVkSWRzLFxuICAgICAgICAgICAgbGlzdF9pZDogbGlzdElkLFxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCB1cmwgPSBcIi91cGRhdGUtbGlzdC1vcmRlclwiO1xuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QodXJsLCBkYXRhKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgIT0gXCIxXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQocmVzLmRhdGEubXNnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHNvcnRpbmdTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnRCeVwiKTtcbiAgICAgICAgbGV0IG9wdHMgPSBzb3J0aW5nU2VsZWN0Lm9wdGlvbnMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdHM7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNvcnRpbmdTZWxlY3Qub3B0aW9uc1tpXS52YWx1ZSA9PSBcImRyYWdfZHJvcFwiKSB7XG4gICAgICAgICAgICAgICAgc29ydGluZ1NlbGVjdC5vcHRpb25zW2ldLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBwYXJlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFyZW50LWNvbnRhaW5lcicpO1xuXG4gICAgaWYocGFyZW50Q29udGFpbmVyICE9PSBudWxsICYmIHBhcmVudENvbnRhaW5lciAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgU29ydGFibGUuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJlbnQtY29udGFpbmVyJyksIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogMTUwLFxuICAgICAgICAgICAgaGFuZGxlOiAnLml0ZW0tY29sbGFwc2libGUtaGVhZGVyJyxcbiAgICAgICAgICAgIGdob3N0Q2xhc3M6ICdzb3J0YWJsZS1naG9zdCcsXG4gICAgICAgICAgICBvbkVuZDogZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgICAgIC8vIEFmdGVyIHNvcnRpbmcgaXMgY29tcGxldGVkLCB1cGRhdGUgdGhlIHBvc2l0aW9ucyBpbiB0aGUgZGF0YWJhc2VcbiAgICAgICAgICAgICAgICB1cGRhdGVDYXRlZ29yeU9yZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVDYXRlZ29yeU9yZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IG5ld09yZGVyID0gW107XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcmFnZ2FibGUtY29udGFpbmVyJykuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcblxuICAgICAgICAgICAgbmV3T3JkZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgaXRlbV9jYXRlZ29yeTogaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2F0ZWdvcnktdmFsdWUnKSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeV9vcmRlcjogaW5kZXhcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHVybCA9IFwiL3VwZGF0ZS1jYXRlcm9ncnktb3JkZXJcIjtcbiAgICAgICAgbGV0IGxpc3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdElkXCIpLnZhbHVlO1xuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBcIlgtQ1NSRi1UT0tFTlwiOiBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJylcbiAgICAgICAgICAgICAgICAuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKSxcbiAgICAgICAgICAgIGNhdGVnb3J5X29yZGVyOiBuZXdPcmRlcixcbiAgICAgICAgICAgIGxpc3RfaWQ6IGxpc3RJZCxcbiAgICAgICAgfTtcbiAgICAgICAgLy9icmVhayBvdXQgcG9zdHMgYW5kIGdldCBjYWxscyB0byBvd24gZnVuY3Rpb25zXG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdCh1cmwsIGRhdGEpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzICE9IFwiMVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KHJlcy5kYXRhLm1zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgbGV0IGFzc2lnblRvTGlzdE1vZGFsID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBc3NpZ25JdGVtVG9MaXN0TW9kYWwnKTtcblxuICAgIGlmKGFzc2lnblRvTGlzdE1vZGFsICE9PSB1bmRlZmluZWQgJiYgYXNzaWduVG9MaXN0TW9kYWwgIT09IG51bGwpe1xuXG4gICAgICAgIGFzc2lnblRvTGlzdE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2hpZGUuYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgdGFibGVCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWFzc2lnbi1pdGVtLXRhYmxlLWJvZHknKTtcbiAgICAgICAgICAgIHdoaWxlKHRhYmxlQm9keS5maXJzdENoaWxkKXtcbiAgICAgICAgICAgICAgICB0YWJsZUJvZHkucmVtb3ZlQ2hpbGQodGFibGVCb2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xud2luZG93LmF4aW9zID0gYXhpb3M7XG5cbndpbmRvdy5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiTW9kYWwiLCJDaGFydCIsIlNvcnRhYmxlIiwiYm9vdHN0cmFwIiwicmVxdWlyZSIsImdyYW1Db252ZXJ0ZXIiLCJvdW5jZUNvbnZlcnRlciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaG93UGFzc3dvcmQiLCJpZCIsInBhc3N3b3JkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZE1hc3Rlckxpc3RJdGVtIiwibnVtYmVyT2ZJdGVtc1RvQWRkIiwibGluZXNUb0FkZCIsImxpc3RCeUl0ZW1zIiwibGlzdGVuIiwiaXRlbVRhYmxlIiwicm93IiwiY3JlYXRlRWxlbWVudCIsImNlbGwxIiwiaXRlbU5hbWUiLCJjcmVhdGVMaXN0SXRlbUlucHV0IiwicGxhY2Vob2xkZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJjZWxsNiIsImRlbGV0ZUJ0biIsImNyZWF0ZURlbGV0ZUJ1dHRvbiIsImNlbGwyIiwiaXRlbVdlaWdodCIsImNlbGwzIiwic2VsZWN0Iiwic2V0QXR0cmlidXRlIiwiY2xhc3NOYW1lIiwib3pPcHRpb24iLCJsYnNPcHRpb24iLCJnck9wdGlvbiIsImtnT3B0aW9uIiwidGV4dCIsImFwcGVuZENoaWxkIiwic2VsZWN0Q2VsbCIsImNhdGVnb3J5U2VsZWN0IiwiZ2V0Q2F0ZWdyb3lTZWxlY3QiLCJhcHBlbmQiLCJzaG93TGlzdEFzc2lnbk1vZGFsIiwiaXRlbUlkIiwidGFibGUiLCJoZWFkZXIiLCJpbm5lckhUTUwiLCJ1cmwiLCJ1c2VyTGlzdHMiLCJheGlvcyIsImdldCIsInJlcyIsImRhdGEiLCJzdGF0dXMiLCJhbGVydCIsIm1zZyIsImxpc3ROYW1lQ2VsbCIsImFzc2lnbkNlbGwiLCJjaGVja2JveCIsIml0ZW1Bc3NpZ25lZCIsImNoZWNrZWQiLCJhc3NpZ25Ub0dlYXJMaXN0IiwiZWxlbWVudCIsImxpc3RJZCIsImdldEF0dHJpYnV0ZSIsImxpc3RfaWQiLCJwb3N0IiwicmVzcG9uc2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJhZGRMaXN0SXRlbSIsImNhdGVnb3J5Y291bnRlciIsInVuZGVmaW5lZCIsImdyb3VwQ2F0ZWdvcnkiLCJsaXN0VU9NIiwiZmluYWxJRWxlbWVudCIsInRhYmxlQ2F0ZWdvcnkiLCJ1c2VySWQiLCJmaW5hbEkiLCJjZWxsMCIsInNjb3BlIiwiY291bnRlciIsInVwZGF0ZU1hc3Rlckxpc3QiLCJsaW5lVW9tQ2VsbCIsInJhZGlvMSIsInJhZGlvMiIsInJhZGlvTGFiZWwxIiwicmFkaW9MYWJlbDIiLCJyYWRpb0xhYmVsMyIsImNyZWF0ZVJhZGlvIiwiY3JlYXRlTGFiZWwiLCJjZWxsNCIsInBhY2tlZEFtb3VudCIsImNlbGw1IiwidG90YWxMaW5lV2VpZ2h0Iiwic3ZnTmFtZXNwYWNlIiwiaWNvbkNlbGwiLCJpY29uIiwiYWRkRXZlbnRMaXN0ZW5lcldlaWdodENhbGMiLCJ1cGRhdGVVT00iLCJ1c1JhZGlvVG9NZXRyaWMiLCJtZXRyaWNSYWRpb1RvVXMiLCJuZWVkZWRGb3JXZWlnaHRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm5lZWRlZEZvcldlaWdodCIsImdldExpbmVUb3RhbFdlaWdodCIsImNvbnZlcnQiLCJ3ZWlnaHQiLCJ1b20iLCJsaW5lVG90YWxXZWlnaHRFbGVtZW50IiwibGluZVRvdGFsIiwidG9GaXhlZCIsInJlcGxhY2UiLCJ1cGRhdGVMaXN0SXRlbSIsImNvbnZlcnRNZWFzdXJlbWVudCIsImlzTWFzdGVyTGlzdCIsInRvdGFsV2VpZ2h0IiwidG90YWxMaW5lV2VpZ2h0VmFsdWUiLCJ3ZWlnaHRWYWx1ZSIsInNtYWxsIiwibGFyZ2UiLCJsYWJlbCIsImxhYmVsSFRNTCIsImFkZENhdGVnb3J5R3JvdXAiLCJjYXRlZ29yeSIsImNvbHVtbk5hbWUiLCJnZXRCb29sZWFuRGF0YSIsImxvY2F0aW9uIiwicmVsb2FkIiwiZXJyIiwiaWRBcnIiLCJzcGxpdCIsImFyckxlbmd0aCIsIml0ZW1JZFZhbHVlIiwidXBkYXRlTWFzdGVyIiwic3Vic3RyaW5nIiwicmVzRGF0YSIsIm5ld0lkIiwiZ2V0RGVsZXRlQnRuRGF0YSIsInVwZGF0ZVRvdGFsTGlzdFdlaWdodHMiLCJ3ZWlnaHRzRm9yUFciLCJiYXNlV2VpZ2h0IiwidG90YWxQYWNrV2VpZ2h0IiwibWF4UGFja1dlaWdodCIsImNsYXNzV2FybmluZ1ZhbHVlIiwidW9tVGV4dCIsIndlaWdodEZvclBXIiwiY29udmVydGVyIiwicm93V2VpZ2h0IiwiaXRlbUNhdGVnb3J5RWxlbWVudCIsIml0ZW1DYXRlZ29yeSIsImRpdkVsZW1lbnQiLCJpbm5lclRleHQiLCJzdHlsZSIsImRpc3BsYXkiLCJuYW1lQmFzZSIsIm9wdGlvbiIsIm9wdGlvbkxpc3QiLCJfcmVmIiwiX2NhbGxlZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJ0MCIsInNlbGVjdGVkIiwiaW5wdXRFbGVtZW50cyIsImlucHV0RWxlbWVudCIsImVsZW1lbnRUeXBlIiwiZWxlbWVudFRhZyIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsIm5ld0VsZW1lbnQiLCJwYXJlbnRFbGVtZW50IiwicmVwbGFjZUNoaWxkIiwiZGF0YUNvbHVtbk5hbWUiLCJyYWRpbyIsImlubmVySHRtbCIsImh0bWxGb3IiLCJsaW5lTGFiZWwiLCJ1cGRhdGVMaXN0IiwiaGVhZGVycyIsImNvbnRlbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJhcnJvdyIsInF1ZXJ5U2VsZWN0b3IiLCJjb250YWlucyIsInJlbW92ZSIsIm1heEhlaWdodCIsInBhZGRpbmciLCJzY3JvbGxIZWlnaHQiLCJpbnB1dHMiLCJpbnB1dCIsImRpc2FibGVkIiwibGlzdENoYXJ0YnRuIiwiY2hhcnRTdGF0dXMiLCJnZXRDaGFydCIsImRlc3Ryb3kiLCJjdHgiLCJjaGFydERhdGEiLCJKU09OIiwicGFyc2UiLCJteUNoYXJ0IiwibGFiZWxzIiwiZGF0YXNldHMiLCJ3ZWlnaHRzIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JzIiwiYm9yZGVyV2lkdGgiLCJob3Zlck9mZnNldCIsIm9wdGlvbnMiLCJjdXRvdXQiLCJyYWRpdXMiLCJsZWdlbmQiLCJwbHVnaW5zIiwiZGF0YWxhYmVscyIsImFuaW1hdGlvbiIsImFuaW1hdGVSb3RhdGUiLCJhbmltYXRlU2NhbGUiLCJ0ZXh0Q29udGVudCIsInNob3dDb252cnNpb25BbGVydCIsImNvbmZpcm1EZWxldGUiLCJpc01hc3RlciIsImhyZWYiLCJvYmplY3RUeXBlIiwiYW5jaG9yIiwibW9kYWxCb2R5IiwiY29uY2F0IiwiaGVscGVyRGl2IiwibGlzdE5hbWUiLCJoZWxwdGV4dCIsInJlbW92ZVJvdyIsInRhYmxlUm93IiwiYnV0dG9uIiwidGl0bGUiLCJvbmNsaWNrIiwiaXRlbSIsIml0ZW1fbmFtZSIsImNhdGVnb3J5SWQiLCJvbkVuZCIsImV2dCIsIm9yZGVyZWRJZHMiLCJ1cGRhdGVJdGVtT3JkZXIiLCJjYXRlZ29yeV9pZCIsIm9yZGVyZWRfaWRzIiwic29ydGluZ1NlbGVjdCIsIm9wdHMiLCJwYXJlbnRDb250YWluZXIiLCJnaG9zdENsYXNzIiwidXBkYXRlQ2F0ZWdvcnlPcmRlciIsIm5ld09yZGVyIiwiaW5kZXgiLCJpdGVtX2NhdGVnb3J5IiwiY2F0ZWdvcnlfb3JkZXIiLCJhc3NpZ25Ub0xpc3RNb2RhbCIsInRhYmxlQm9keSIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImRlZmF1bHRzIiwiY29tbW9uIl0sInNvdXJjZVJvb3QiOiIifQ==