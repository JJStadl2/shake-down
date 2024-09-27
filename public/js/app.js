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
      var deleteBtn = document.createElement("a");
      deleteBtn.id = "deleteBtn-" + i;
      deleteBtn.className = "btn btn-primary btn-sm  py-2";
      deleteBtn.innerHTML = "x";
      var cell2 = document.createElement("td");
      var itemWeight = createListItemInput("number", "itemWeight", i, "item_weight", listen);
      itemWeight.value = 0;
      itemWeight.classList.add("for-weight");
      itemWeight.classList.add("number-input");
      itemWeight.classList.add("form-control");
      itemWeight.style.width = '40%';
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
      var icon = document.createElementNS(svgNamespace, "svg");
      icon.setAttribute("width", "16");
      icon.setAttribute("height", "16");
      icon.setAttribute("fill", "currentColor");
      icon.setAttribute("class", "bi bi-grip-vertical");
      icon.setAttribute("viewBox", "0 0 16 16");

      // Create the <path> element
      var path = document.createElementNS(svgNamespace, "path");
      path.setAttribute("d", "M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0");

      // Append the path to the SVG
      icon.appendChild(path);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly4vcmVzb3VyY2VzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zYXNzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAnLi9ib290c3RyYXAnIDtcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcImJvb3RzdHJhcFwiO1xuLy8gaW1wb3J0ICAnYm9vdHN0cmFwJztcbmltcG9ydCBcIkBwb3BwZXJqcy9jb3JlXCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzL2F1dG9cIjtcbmltcG9ydCBTb3J0YWJsZSBmcm9tIFwic29ydGFibGVqc1wiO1xuY29uc3QgYm9vdHN0cmFwID0gcmVxdWlyZShcIi4vYm9vdHN0cmFwXCIpO1xuY29uc3QgZ3JhbUNvbnZlcnRlciA9IDEwMDA7XG5jb25zdCBvdW5jZUNvbnZlcnRlciA9IDE2O1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgdGhpcy53aW5kb3cuc2hvd1Bhc3N3b3JkID0gZnVuY3Rpb24gc2hvd1Bhc3N3b3JkKGlkKSB7XG4gICAgICAgIGxldCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgaWYgKHBhc3N3b3JkLnR5cGUgPT09IFwicGFzc3dvcmRcIikge1xuICAgICAgICAgICAgcGFzc3dvcmQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFzc3dvcmQudHlwZSA9IFwicGFzc3dvcmRcIjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhpcy53aW5kb3cuYWRkTWFzdGVyTGlzdEl0ZW0gPSBmdW5jdGlvbiBhZGRNYXN0ZXJMaXN0SXRlbSgpIHtcbiAgICAgICAgbGV0IG51bWJlck9mSXRlbXNUb0FkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZXNUb0FkZFwiKTtcbiAgICAgICAgbGV0IGxpbmVzVG9BZGQgPSAxO1xuICAgICAgICBpZiAobnVtYmVyT2ZJdGVtc1RvQWRkID09PSBudWxsIHx8ICtudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPCAxKSB7XG4gICAgICAgICAgICBudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPSBsaW5lc1RvQWRkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGluZXNUb0FkZCA9ICtudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzVG9BZGQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGxpc3RCeUl0ZW1zID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBsaXN0ZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBpdGVtVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtaXRlbS10YWJsZS1ib2R5Jyk7XG4gICAgICAgICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgY2VsbHMgYW5kIGlucHV0IGVsZW1lbnRzLlxuICAgICAgICAgICAgbGV0IGNlbGwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuXG4gICAgICAgICAgICBsZXQgaXRlbU5hbWUgPSBjcmVhdGVMaXN0SXRlbUlucHV0KFxuICAgICAgICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgICAgICAgIFwiaXRlbU5hbWVcIixcbiAgICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICAgIFwiaXRlbV9uYW1lXCIsXG4gICAgICAgICAgICAgICAgbGlzdGVuXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaXRlbU5hbWUucGxhY2Vob2xkZXIgPSBcIkl0ZW0gTmFtZVwiO1xuICAgICAgICAgICAgaXRlbU5hbWUuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcblxuICAgICAgICAgICAgbGV0IGNlbGw2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgY2VsbDYuaWQgPSBcImJ0bi10ZC1cIiAraTtcbiAgICAgICAgICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5pZCA9IFwiZGVsZXRlQnRuLVwiICsgaTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5jbGFzc05hbWUgPSBcImJ0biBidG4tcHJpbWFyeSBidG4tc20gIHB5LTJcIjtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5pbm5lckhUTUwgPSBcInhcIjtcblxuXG4gICAgICAgICAgICBsZXQgY2VsbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBsZXQgaXRlbVdlaWdodCA9IGNyZWF0ZUxpc3RJdGVtSW5wdXQoXG4gICAgICAgICAgICAgICAgXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICBcIml0ZW1XZWlnaHRcIixcbiAgICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICAgIFwiaXRlbV93ZWlnaHRcIixcbiAgICAgICAgICAgICAgICBsaXN0ZW5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LnZhbHVlID0gMDtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQuY2xhc3NMaXN0LmFkZChcImZvci13ZWlnaHRcIik7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJudW1iZXItaW5wdXRcIik7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRyb2xcIik7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LnN0eWxlLndpZHRoID0gJzQwJSc7XG4gICAgICAgICAgICBjZWxsMi5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWNvbFwiKTtcblxuICAgICAgICAgICAgbGV0IGNlbGwzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgICAgICBzZWxlY3QuaWQgPSBcInVvbS1cIiArIGk7XG4gICAgICAgICAgICBzZWxlY3QubmFtZSA9IFwidW9tW11cIjtcbiAgICAgICAgICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIsIFwidW9tXCIpO1xuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCI7XG5cbiAgICAgICAgICAgIGxldCBvek9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBsZXQgbGJzT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIGxldCBnck9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBsZXQga2dPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgb3pPcHRpb24udmFsdWUgPSBcImluX291bmNlc1wiO1xuICAgICAgICAgICAgb3pPcHRpb24udGV4dCA9IFwiT1pcIjtcbiAgICAgICAgICAgIGxic09wdGlvbi52YWx1ZSAgPSAnaW5fbGJzJztcbiAgICAgICAgICAgIGxic09wdGlvbi50ZXh0ID0gJ0xCUydcblxuICAgICAgICAgICAgZ3JPcHRpb24udmFsdWUgPSBcImluX2dyYW1zXCI7XG4gICAgICAgICAgICBnck9wdGlvbi50ZXh0ID0gXCJHXCI7XG4gICAgICAgICAgICBrZ09wdGlvbi52YWx1ZSAgPSAnaW5fa2lsb3MnO1xuICAgICAgICAgICAga2dPcHRpb24udGV4dCA9ICdLRyc7XG4gICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3pPcHRpb24pO1xuICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKGxic09wdGlvbik7XG4gICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQoZ3JPcHRpb24pO1xuICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKGtnT3B0aW9uKTtcblxuICAgICAgICAgICAgLy9hcHBlbmQgaW5wdXRzIHRvIGNlbGxzLlxuICAgICAgICAgICAgY2VsbDEuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgICAgICAgICAgY2VsbDIuYXBwZW5kQ2hpbGQoaXRlbVdlaWdodCk7XG5cbiAgICAgICAgICAgIGxldCBzZWxlY3RDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgbGV0IGNhdGVnb3J5U2VsZWN0ID0gZ2V0Q2F0ZWdyb3lTZWxlY3QoaSxudWxsLCBsaXN0ZW4pO1xuICAgICAgICAgICAgY2F0ZWdvcnlTZWxlY3QubmFtZSA9ICdpdGVtQ2F0ZWdvcnlbXSdcbiAgICAgICAgICAgIHNlbGVjdENlbGwuYXBwZW5kKGNhdGVnb3J5U2VsZWN0KTtcblxuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgICAgICAgICAgIGNlbGw2LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgICAgICAgICAgIC8vIEFwcGVuZCBjZWxscyB0byB0aGUgcm93LlxuICAgICAgICAgICAgLy8gcm93LmFwcGVuZENoaWxkKGljb25DZWxsKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsMSk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoc2VsZWN0Q2VsbCk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDMpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwyKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsNik7XG5cbiAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgcm93IHRvIHRoZSB0YWJsZS5cbiAgICAgICAgICAgIGl0ZW1UYWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuXG5cbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3SXRlbUNvdW50JykudmFsdWUgPSBsaW5lc1RvQWRkO1xuICAgICAgICBudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPSAxO1xuICAgIH07XG4gICAgdGhpcy53aW5kb3cuc2hvd0xpc3RBc3NpZ25Nb2RhbCA9IGZ1bmN0aW9uIHNob3dMaXN0QXNzaWduTW9kYWwoaXRlbUlkLGl0ZW1OYW1lKXtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbUlkZm9yQXNzaWduJykudmFsdWUgPSBpdGVtSWQ7XG4gICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VySXRlbUlkZm9yQXNzaWduJykudmFsdWUgPSB1c2VySXRlbUlkO1xuXG4gICAgICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtYXNzaWduLWl0ZW0tdGFibGUtYm9keVwiKTtcbiAgICAgICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBc3NpZ25JdGVtVG9MaXN0TW9kYWxMYWJlbCcpO1xuICAgICAgICBoZWFkZXIuaW5uZXJIVE1MID0gJ0Fzc2lnbi9VbmFzc2lnbiBpdGVtOiAnK2l0ZW1OYW1lO1xuXG4gICAgICAgIGxldCB1cmwgPSAnL2dldC11c2VyLWxpc3RzLycraXRlbUlkO1xuICAgICAgICBsZXQgdXNlckxpc3RzO1xuXG4gICAgICAgIGF4aW9zLmdldCh1cmwpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICB1c2VyTGlzdHMgPSBkYXRhLnVzZXJMaXN0cztcblxuICAgICAgICAgICAgaWYoZGF0YS5zdGF0dXMgIT09ICcxJyl7XG4gICAgICAgICAgICAgICAgYWxlcnQoZGF0YS5tc2cpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1c2VyTGlzdHMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgICAgICAgICAgbGV0IGxpc3ROYW1lQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgYXNzaWduQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcblxuICAgICAgICAgICAgICAgIGxpc3ROYW1lQ2VsbC5pbm5lckhUTUwgPSB1c2VyTGlzdHNbaV0ubmFtZTtcblxuICAgICAgICAgICAgICAgIGxldCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgICAgICAgICAgY2hlY2tib3guaWQgPSAnbGlzdENoZWNrQm94LScraTtcbiAgICAgICAgICAgICAgICBjaGVja2JveC5uYW1lID0gJ2xpc3RJZHNbXSc7XG4gICAgICAgICAgICAgICAgY2hlY2tib3gudmFsdWUgPSB1c2VyTGlzdHNbaV0uaWQ7XG5cbiAgICAgICAgICAgICAgICBpZih1c2VyTGlzdHNbaV0uaXRlbUFzc2lnbmVkID09IHRydWUpe1xuICAgICAgICAgICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhc3NpZ25DZWxsLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQobGlzdE5hbWVDZWxsKTtcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoYXNzaWduQ2VsbCk7XG4gICAgICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgIH1cbiAgICB0aGlzLndpbmRvdy5hc3NpZ25Ub0dlYXJMaXN0ID0gZnVuY3Rpb24gYXNzaWduVG9HZWFyTGlzdChlbGVtZW50KXtcbiAgICAgICAgbGV0IGxpc3RJZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtaWQnKTtcbiAgICAgICAgbGV0IGl0ZW1JZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWl0ZW0taWQnKTtcblxuICAgICAgICBpZighZWxlbWVudC5jaGVja2VkKXtcbiAgICAgICAgICAgIGxpc3RJZCA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHVybCA9ICcvYXNzaWduLXRvLWdlYXItbGlzdCdcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBsaXN0X2lkOiBsaXN0SWQsXG4gICAgICAgICAgICBpZDogaXRlbUlkXG4gICAgICAgIH07XG5cblxuICAgICAgICBheGlvcy5wb3N0KHVybCxkYXRhKVxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IDEpe1xuXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBhbGVydChyZXNwb25zZS5tc2cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICB0aGlzLndpbmRvdy5hZGRMaXN0SXRlbSA9IGZ1bmN0aW9uIGFkZExpc3RJdGVtKGNhdGVnb3J5Y291bnRlciA9IG51bGwsIGdyb3VwQ2F0ZWdvcnkgPSBudWxsKSB7XG4gICAgICAgIGxldCBudW1iZXJPZkl0ZW1zVG9BZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmVzVG9BZGRcIik7XG4gICAgICAgIGxldCBsaW5lc1RvQWRkID0gMTtcbiAgICAgICAgaWYgKG51bWJlck9mSXRlbXNUb0FkZCA9PT0gbnVsbCB8fCArbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlIDwgMSkge1xuICAgICAgICAgICAgbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlID0gbGluZXNUb0FkZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpbmVzVG9BZGQgPSArbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lc1RvQWRkOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBsaXN0VU9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b21cIikudmFsdWU7XG4gICAgICAgICAgICBsZXQgZmluYWxJRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmluYWwtaVwiKTtcbiAgICAgICAgICAgIGxldCBsaXN0QnlJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdEJ5SXRlbXNcIikudmFsdWU7XG4gICAgICAgICAgICBsZXQgaXRlbVRhYmxlO1xuXG4gICAgICAgICAgICBpZiAoK2xpc3RCeUl0ZW1zID09IDEpIHtcbiAgICAgICAgICAgICAgICBsaXN0QnlJdGVtcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgaXRlbVRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtLXRhYmxlLWJvZHlcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxpc3RCeUl0ZW1zID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IHRhYmxlQ2F0ZWdvcnkgPSBjYXRlZ29yeWNvdW50ZXI7XG4gICAgICAgICAgICAgICAgaXRlbVRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgICAgICAgICAgIFwiY2F0ZWdvcnlUYWJsZS1cIiArIHRhYmxlQ2F0ZWdvcnlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdXNlcklkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VySWRcIikudmFsdWU7XG4gICAgICAgICAgICBsZXQgbGlzdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0SWRcIikudmFsdWU7XG4gICAgICAgICAgICBsZXQgZmluYWxJID0gZmluYWxJRWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgIGZpbmFsSUVsZW1lbnQudmFsdWUgPSArZmluYWxJICsgMTtcblxuICAgICAgICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgICAgIHJvdy5pZCA9ICdyb3ctJytmaW5hbEk7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBjZWxscyBhbmQgaW5wdXQgZWxlbWVudHMuXG4gICAgICAgICAgICBsZXQgY2VsbDAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gICAgICAgICAgICBjZWxsMC5zY29wZSA9IFwicm93XCI7XG4gICAgICAgICAgICBjZWxsMC5pbm5lckhUTUwgPSBmaW5hbEk7XG5cbiAgICAgICAgICAgIGxldCBjZWxsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcblxuICAgICAgICAgICAgbGV0IGNvdW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBjb3VudGVyLnR5cGUgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgY291bnRlci5uYW1lID0gXCJpZFtdXCI7XG4gICAgICAgICAgICBjb3VudGVyLmlkID0gXCJpZC1cIiArIGZpbmFsSTtcbiAgICAgICAgICAgIGNvdW50ZXIudmFsdWUgPSBcIm5ldy1cIiArIGZpbmFsSTtcbiAgICAgICAgICAgIGNvdW50ZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4tbmFtZVwiLCBcImlkXCIpO1xuXG4gICAgICAgICAgICBsZXQgdXBkYXRlTWFzdGVyTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIHVwZGF0ZU1hc3Rlckxpc3QudHlwZSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICB1cGRhdGVNYXN0ZXJMaXN0Lm5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdXBkYXRlTWFzdGVyTGlzdC5pZCA9IFwidXBkYXRlTWFzdGVyLVwiK2ZpbmFsSTtcbiAgICAgICAgICAgIHVwZGF0ZU1hc3Rlckxpc3QudmFsdWUgPSBcInRydWVcIjtcblxuXG4gICAgICAgICAgICBsZXQgaXRlbU5hbWUgPSBjcmVhdGVMaXN0SXRlbUlucHV0KFxuICAgICAgICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgICAgICAgIFwiaXRlbU5hbWVcIixcbiAgICAgICAgICAgICAgICBmaW5hbEksXG4gICAgICAgICAgICAgICAgXCJpdGVtX25hbWVcIlxuXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaXRlbU5hbWUucGxhY2Vob2xkZXIgPSBcIkl0ZW0gTmFtZVwiO1xuICAgICAgICAgICAgaXRlbU5hbWUuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcblxuICAgICAgICAgICAgbGV0IGNlbGw2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgY2VsbDYuaWQgPSBcImJ0bi10ZC1cIiArIGZpbmFsSTtcbiAgICAgICAgICAgIGxldCBkZWxldGVCdG4gPSBjcmVhdGVEZWxldGVCdXR0b24oZmluYWxJKTtcbiAgICAgICAgICAgIGxldCBjZWxsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcblxuICAgICAgICAgICAgbGV0IGl0ZW1XZWlnaHQgPSBjcmVhdGVMaXN0SXRlbUlucHV0KFxuICAgICAgICAgICAgICAgIFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgXCJpdGVtV2VpZ2h0XCIsXG4gICAgICAgICAgICAgICAgZmluYWxJLFxuICAgICAgICAgICAgICAgIFwiaXRlbV93ZWlnaHRcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQudmFsdWUgPSAwO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKFwiZm9yLXdlaWdodFwiKTtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQuY2xhc3NMaXN0LmFkZChcIm51bWJlci1pbnB1dFwiKTtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcbiAgICAgICAgICAgIGNlbGwyLmNsYXNzTGlzdC5hZGQoXCJudW1iZXItY29sXCIpO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBsZXQgbGluZVVvbUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBjZWxsMy5jbGFzc0xpc3QuYWRkKFwidW9tLXRkXCIpO1xuICAgICAgICAgICAgbGluZVVvbUNlbGwuY2xhc3NMaXN0LmFkZChcInVvbS10ZFwiKTtcbiAgICAgICAgICAgIGxldCByYWRpbzE7XG4gICAgICAgICAgICBsZXQgcmFkaW8yO1xuICAgICAgICAgICAgbGV0IHJhZGlvTGFiZWwxO1xuICAgICAgICAgICAgbGV0IHJhZGlvTGFiZWwyO1xuICAgICAgICAgICAgbGV0IHJhZGlvTGFiZWwzO1xuXG4gICAgICAgICAgICBpZiAobGlzdFVPTSA9PT0gXCJ1c1wiKSB7XG4gICAgICAgICAgICAgICAgcmFkaW8xID0gY3JlYXRlUmFkaW8oXCJpbl9vdW5jZXNcIiwgXCJcIiwgXCJvelwiLCBmaW5hbEkpO1xuICAgICAgICAgICAgICAgIHJhZGlvTGFiZWwxID0gY3JlYXRlTGFiZWwoXG4gICAgICAgICAgICAgICAgICAgIFwiT1pcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ1b20tb3otXCIgKyBmaW5hbEksXG4gICAgICAgICAgICAgICAgICAgIFwib3pcIixcbiAgICAgICAgICAgICAgICAgICAgZmluYWxJXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByYWRpbzIgPSBjcmVhdGVSYWRpbyhcImluX2xic1wiLCBcIlwiLCBcImxic1wiLCBmaW5hbEkpO1xuICAgICAgICAgICAgICAgIHJhZGlvTGFiZWwyID0gY3JlYXRlTGFiZWwoXG4gICAgICAgICAgICAgICAgICAgIFwiTEJTXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidW9tLWxicy1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgICAgICAgICAgXCJsYnNcIixcbiAgICAgICAgICAgICAgICAgICAgZmluYWxJXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByYWRpb0xhYmVsMyA9IGNyZWF0ZUxhYmVsKFxuICAgICAgICAgICAgICAgICAgICBcIk9aXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidW9tLW96LVwiICsgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICBcIm96XCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsSSxcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJhZGlvMSA9IGNyZWF0ZVJhZGlvKFwiaW5fZ3JhbXNcIiwgXCJcIiwgXCJncmFtXCIsIGZpbmFsSSk7XG4gICAgICAgICAgICAgICAgcmFkaW9MYWJlbDEgPSBjcmVhdGVMYWJlbChcbiAgICAgICAgICAgICAgICAgICAgXCJHXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidW9tLWdyYW0tXCIgKyBmaW5hbEksXG4gICAgICAgICAgICAgICAgICAgIFwiZ3JhbVwiLFxuICAgICAgICAgICAgICAgICAgICBmaW5hbElcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJhZGlvMiA9IGNyZWF0ZVJhZGlvKFwiaW5fa2lsb3NcIiwgXCJcIiwgXCJrZ1wiLCBmaW5hbEkpO1xuICAgICAgICAgICAgICAgIHJhZGlvTGFiZWwyID0gY3JlYXRlTGFiZWwoXG4gICAgICAgICAgICAgICAgICAgIFwiS0dcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ1b20ta2ctXCIgKyBmaW5hbEksXG4gICAgICAgICAgICAgICAgICAgIFwia2dcIixcbiAgICAgICAgICAgICAgICAgICAgZmluYWxJXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByYWRpb0xhYmVsMyA9IGNyZWF0ZUxhYmVsKFxuICAgICAgICAgICAgICAgICAgICBcIkdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ1b20tZ3JhbS1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgICAgICAgICAgXCJncmFtXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsSSxcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBjZWxsNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGNlbGw0LmNsYXNzTGlzdC5hZGQoXCJudW1iZXItY29sXCIpO1xuICAgICAgICAgICAgbGV0IHBhY2tlZEFtb3VudCA9IGNyZWF0ZUxpc3RJdGVtSW5wdXQoXG4gICAgICAgICAgICAgICAgXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICBcInBhY2tlZEFtb3VudFwiLFxuICAgICAgICAgICAgICAgIGZpbmFsSSxcbiAgICAgICAgICAgICAgICBcImFtb3VudFwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcGFja2VkQW1vdW50LnZhbHVlID0gMTtcblxuICAgICAgICAgICAgcGFja2VkQW1vdW50LmNsYXNzTGlzdC5hZGQoXCJmb3Itd2VpZ2h0XCIpO1xuICAgICAgICAgICAgcGFja2VkQW1vdW50LmNsYXNzTGlzdC5hZGQoXCJudW1iZXItaW5wdXRcIik7XG4gICAgICAgICAgICBwYWNrZWRBbW91bnQuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcblxuICAgICAgICAgICAgbGV0IGNlbGw1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgY2VsbDUuY2xhc3NMaXN0LmFkZChcIm51bWJlci1jb2xcIik7XG4gICAgICAgICAgICBsZXQgdG90YWxMaW5lV2VpZ2h0ID0gY3JlYXRlTGlzdEl0ZW1JbnB1dChcbiAgICAgICAgICAgICAgICBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIFwidG90YWxMaW5lV2VpZ2h0XCIsXG4gICAgICAgICAgICAgICAgZmluYWxJLFxuICAgICAgICAgICAgICAgIFwidG90YWxfbGluZV93ZWlnaHRcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC52YWx1ZSA9IDA7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgICAgIFwiZGF0YS1jb2x1bW4tbmFtZVwiLFxuICAgICAgICAgICAgICAgIFwidG90YWxfbGluZV93ZWlnaHRcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC5zZXRBdHRyaWJ1dGUoXCJyZWFkb25seVwiLCB0cnVlKTtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWlucHV0XCIpO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRyb2xcIik7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQuY2xhc3NMaXN0LmFkZChcImZvci10b3RhbC1saXN0LXdlaWdodFwiKTtcblxuICAgICAgICAgICAgLy9hcHBlbmQgaW5wdXRzIHRvIGNlbGxzLlxuXG4gICAgICAgICAgICAvLyBEZWZpbmUgdGhlIFNWRyBuYW1lc3BhY2VcbiAgICAgICAgICAgIGNvbnN0IHN2Z05hbWVzcGFjZSA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbiAgICAgICAgICAgIGxldCBpY29uQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyBTVkcgZWxlbWVudFxuICAgICAgICAgICAgbGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTmFtZXNwYWNlLCBcInN2Z1wiKTtcbiAgICAgICAgICAgIGljb24uc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxNlwiKTtcbiAgICAgICAgICAgIGljb24uc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMTZcIik7XG4gICAgICAgICAgICBpY29uLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJjdXJyZW50Q29sb3JcIik7XG4gICAgICAgICAgICBpY29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYmkgYmktZ3JpcC12ZXJ0aWNhbFwiKTtcbiAgICAgICAgICAgIGljb24uc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAxNiAxNlwiKTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSA8cGF0aD4gZWxlbWVudFxuICAgICAgICAgICAgbGV0IHBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTmFtZXNwYWNlLCBcInBhdGhcIik7XG4gICAgICAgICAgICBwYXRoLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgICBcImRcIixcbiAgICAgICAgICAgICAgICBcIk03IDJhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbTMgMGExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBNNyA1YTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMG0zIDBhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwTTcgOGExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBtMyAwYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMG0tMyAzYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMG0zIDBhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbS0zIDNhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbTMgMGExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBcIlxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSBwYXRoIHRvIHRoZSBTVkdcbiAgICAgICAgICAgIGljb24uYXBwZW5kQ2hpbGQocGF0aCk7XG5cbiAgICAgICAgICAgIC8vIC8vIEFwcGVuZCB0aGUgU1ZHIGljb24gdG8gdGhlIGNlbGxcbiAgICAgICAgICAgIGljb25DZWxsLmFwcGVuZENoaWxkKGljb24pO1xuXG4gICAgICAgICAgICBjZWxsMS5hcHBlbmRDaGlsZChjb3VudGVyKTtcbiAgICAgICAgICAgIGNlbGwxLmFwcGVuZENoaWxkKHVwZGF0ZU1hc3Rlckxpc3QpO1xuICAgICAgICAgICAgY2VsbDEuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgICAgICAgICAgY2VsbDIuYXBwZW5kQ2hpbGQoaXRlbVdlaWdodCk7XG5cbiAgICAgICAgICAgIGxldCBzZWxlY3RDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgbGV0IGNhdGVnb3J5U2VsZWN0ID0gZ2V0Q2F0ZWdyb3lTZWxlY3QoZmluYWxJLCBncm91cENhdGVnb3J5KTtcblxuICAgICAgICAgICAgc2VsZWN0Q2VsbC5hcHBlbmQoY2F0ZWdvcnlTZWxlY3QpO1xuXG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChyYWRpbzEpO1xuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbDEpO1xuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQocmFkaW8yKTtcbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHJhZGlvTGFiZWwyKTtcblxuICAgICAgICAgICAgY2VsbDQuYXBwZW5kQ2hpbGQocGFja2VkQW1vdW50KTtcbiAgICAgICAgICAgIGNlbGw1LmFwcGVuZENoaWxkKHRvdGFsTGluZVdlaWdodCk7XG4gICAgICAgICAgICBsaW5lVW9tQ2VsbC5hcHBlbmRDaGlsZChyYWRpb0xhYmVsMyk7XG4gICAgICAgICAgICBjZWxsNi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgY2VsbHMgdG8gdGhlIHJvdy5cbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChpY29uQ2VsbCk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDEpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHNlbGVjdENlbGwpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwzKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsMik7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDQpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGw1KTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChsaW5lVW9tQ2VsbCk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDYpO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIHJvdyB0byB0aGUgdGFibGUuXG4gICAgICAgICAgICBpdGVtVGFibGUuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgICAgIC8vYWRkIGZ1bmN0aW9ucyB0byBjYWxjdWxhdGUgYW5kIGNvbnZlcnQgdG90YWwgd2VpZ2h0LlxuICAgICAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcldlaWdodENhbGMoZmluYWxJKTtcbiAgICAgICAgfVxuICAgICAgICBudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPSAxO1xuICAgIH07XG5cbiAgICB0aGlzLndpbmRvdy51cGRhdGVVT00gPSBmdW5jdGlvbiB1cGRhdGVVT00odmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBcInVzXCIpIHtcbiAgICAgICAgICAgIHVzUmFkaW9Ub01ldHJpYygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWV0cmljUmFkaW9Ub1VzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJXZWlnaHRDYWxjKHJvdykge1xuICAgICAgICBsZXQgbmVlZGVkRm9yV2VpZ2h0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yLXdlaWdodFwiKTtcbiAgICAgICAgbmVlZGVkRm9yV2VpZ2h0cy5mb3JFYWNoKGZ1bmN0aW9uIChuZWVkZWRGb3JXZWlnaHQpIHtcbiAgICAgICAgICAgIG5lZWRlZEZvcldlaWdodC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBnZXRMaW5lVG90YWxXZWlnaHQocm93KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLndpbmRvdy5nZXRMaW5lVG90YWxXZWlnaHQgPSBmdW5jdGlvbiBnZXRMaW5lVG90YWxXZWlnaHQoXG4gICAgICAgIHJvdyxcbiAgICAgICAgY29udmVydCA9IGZhbHNlXG4gICAgKSB7XG4gICAgICAgIGxldCB3ZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1XZWlnaHQtXCIgKyByb3cpLnZhbHVlO1xuICAgICAgICBsZXQgcGFja2VkQW1vdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWNrZWRBbW91bnQtXCIgKyByb3cpLnZhbHVlO1xuICAgICAgICBsZXQgdW9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b21cIik7XG4gICAgICAgIGxldCBsaW5lVG90YWxXZWlnaHRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgICBcInRvdGFsTGluZVdlaWdodC1cIiArIHJvd1xuICAgICAgICApO1xuXG4gICAgICAgIGxldCBsaW5lVG90YWwgPSAwO1xuICAgICAgICBsaW5lVG90YWwgPSArd2VpZ2h0ICogK3BhY2tlZEFtb3VudDtcbiAgICAgICAgbGluZVRvdGFsID0gbGluZVRvdGFsLnRvRml4ZWQoMykucmVwbGFjZSgvWy4sXTAwJC8sIFwiXCIpO1xuICAgICAgICBsaW5lVG90YWxXZWlnaHRFbGVtZW50LnZhbHVlID0gbGluZVRvdGFsO1xuXG4gICAgICAgIHVwZGF0ZUxpc3RJdGVtKGxpbmVUb3RhbFdlaWdodEVsZW1lbnQpO1xuICAgIH07XG4gICAgdGhpcy53aW5kb3cuY29udmVydE1lYXN1cmVtZW50ID0gZnVuY3Rpb24gY29udmVydE1lYXN1cmVtZW50KFxuICAgICAgICByb3csXG4gICAgICAgIGNvbnZlcnQgPSBmYWxzZVxuICAgICkge1xuICAgICAgICBsZXQgbGlzdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RJZCcpLnZhbHVlO1xuICAgICAgICBsZXQgdW9tO1xuICAgICAgICBsZXQgaXNNYXN0ZXJMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzTWFzdGVyJykudmFsdWU7XG5cbiAgICAgICAgaWYoaXNNYXN0ZXJMaXN0ID09PSAndHJ1ZScpe1xuICAgICAgICAgICAgdW9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b20tXCIrcm93KS52YWx1ZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB1b20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbVwiKS52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmKGxpc3RJZCA9PSAnbWFzdGVyJyl7XG4gICAgICAgIC8vICAgICB1b20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1cIityb3cpLnZhbHVlO1xuICAgICAgICAvLyB9ZWxzZXtcbiAgICAgICAgLy8gICAgIHVvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tXCIpLnZhbHVlO1xuICAgICAgICAvLyB9XG4gICAgICAgIGxldCB3ZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1XZWlnaHQtXCIgKyByb3cpO1xuICAgICAgICBsZXQgcGFja2VkQW1vdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWNrZWRBbW91bnQtXCIgKyByb3cpLnZhbHVlO1xuICAgICAgICBsZXQgdG90YWxXZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdGFsTGluZVdlaWdodC1cIiArIHJvdyk7XG4gICAgICAgIGxldCB0b3RhbExpbmVXZWlnaHRWYWx1ZSA9IDA7XG4gICAgICAgIGxldCB3ZWlnaHRWYWx1ZSA9IHdlaWdodC52YWx1ZTtcbiAgICAgICAgbGV0IHNtYWxsO1xuICAgICAgICBsZXQgbGFyZ2U7XG4gICAgICAgIGxldCBlbGVtZW50O1xuICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmUtdW9tLWxhYmVsLVwiICsgcm93KTtcbiAgICAgICAgbGV0IGxhYmVsSFRNTDtcblxuICAgICAgICBpZiAodW9tID09PSBcInVzXCIpIHtcbiAgICAgICAgICAgIHNtYWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b20tb3otXCIgKyByb3cpO1xuICAgICAgICAgICAgbGFyZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1sYnMtXCIgKyByb3cpO1xuICAgICAgICAgICAgaWYgKHNtYWxsLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB3ZWlnaHRWYWx1ZSA9ICt3ZWlnaHRWYWx1ZSAqIDE2O1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBzbWFsbDtcbiAgICAgICAgICAgICAgICBsYWJlbEhUTUwgPSBcIk9aXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdlaWdodFZhbHVlID0gK3dlaWdodFZhbHVlIC8gMTY7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGxhcmdlO1xuICAgICAgICAgICAgICAgIGxhYmVsSFRNTCA9IFwiTEJTXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzbWFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tLWdyYW0tXCIgKyByb3cpO1xuICAgICAgICAgICAgbGFyZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1rZy1cIiArIHJvdyk7XG5cbiAgICAgICAgICAgIGlmIChzbWFsbC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0VmFsdWUgPSArd2VpZ2h0VmFsdWUgKiAxMDAwO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBzbWFsbDtcbiAgICAgICAgICAgICAgICBsYWJlbEhUTUwgPSBcIkdcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0VmFsdWUgPSArd2VpZ2h0VmFsdWUgLyAxMDAwO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBsYXJnZTtcbiAgICAgICAgICAgICAgICBsYWJlbEhUTUwgPSBcIktHXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0b3RhbExpbmVXZWlnaHRWYWx1ZSA9ICt3ZWlnaHRWYWx1ZSAqICtwYWNrZWRBbW91bnQ7XG4gICAgICAgIHdlaWdodC52YWx1ZSA9IHdlaWdodFZhbHVlLnRvRml4ZWQoMykucmVwbGFjZSgvWy4sXTAwJC8sIFwiXCIpO1xuICAgICAgICB0b3RhbFdlaWdodC52YWx1ZSA9IHRvdGFsTGluZVdlaWdodFZhbHVlXG4gICAgICAgICAgICAudG9GaXhlZCgzKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1suLF0wMCQvLCBcIlwiKTtcbiAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gbGFiZWxIVE1MO1xuICAgICAgICB1cGRhdGVMaXN0SXRlbShlbGVtZW50KTtcbiAgICAgICAgdXBkYXRlTGlzdEl0ZW0od2VpZ2h0KTtcbiAgICAgICAgdXBkYXRlTGlzdEl0ZW0odG90YWxXZWlnaHQpO1xuICAgIH07XG4gICAgdGhpcy53aW5kb3cuYWRkQ2F0ZWdvcnlHcm91cCA9IGZ1bmN0aW9uIGFkZENhdGVnb3J5R3JvdXAobGlzdElkLGNhdGVnb3J5LCBsaXN0VU9NLCB1c2VySWQpe1xuXG4gICAgICAgIGxldCBjb2x1bW5OYW1lO1xuICAgICAgICBpZihsaXN0VU9NID09PSAndXMnKXtcbiAgICAgICAgICAgIGNvbHVtbk5hbWUgPSAnaW5fb3VuY2VzJztcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb2x1bW5OYW1lID0gJ2luX2dyYW1zJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkYXRhID0gZ2V0Qm9vbGVhbkRhdGEoY29sdW1uTmFtZSk7XG4gICAgICAgIGRhdGFbJ2xpc3RfaWQnXSA9IGxpc3RJZDtcbiAgICAgICAgZGF0YVsndXNlcl9pZCddID0gdXNlcklkO1xuICAgICAgICBkYXRhWydpdGVtX25hbWUnXSA9ICcnO1xuICAgICAgICBkYXRhWydpdGVtX3dlaWdodCddID0gMDtcbiAgICAgICAgZGF0YVsnYW1vdW50J10gPSAxO1xuICAgICAgICBkYXRhWydpdGVtX2NhdGVnb3J5J10gPSBjYXRlZ29yeTtcbiAgICAgICAgbGV0IHVybCA9ICcvbGlzdC1pdGVtJ1xuXG4gICAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KHVybCwgZGF0YSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgcmVzID0gcmVzLmRhdGE7XG4gICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAnMScpe1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgYWxlcnQocmVzLm1zZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEJvb2xlYW5EYXRhKGNvbHVtbk5hbWUpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgZGF0YVtcImluX291bmNlc1wiXSA9IGZhbHNlO1xuICAgICAgICBkYXRhW1wiaW5fbGJzXCJdID0gZmFsc2U7XG4gICAgICAgIGRhdGFbXCJpbl9ncmFtc1wiXSA9IGZhbHNlO1xuICAgICAgICBkYXRhW1wiaW5fa2lsb3NcIl0gPSBmYWxzZTtcbiAgICAgICAgc3dpdGNoIChjb2x1bW5OYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiaW5fb3VuY2VzXCI6XG4gICAgICAgICAgICAgICAgZGF0YVtcImluX291bmNlc1wiXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaW5fbGJzXCI6XG4gICAgICAgICAgICAgICAgZGF0YVtcImluX2xic1wiXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaW5fZ3JhbXNcIjpcbiAgICAgICAgICAgICAgICBkYXRhW1wiaW5fZ3JhbXNcIl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImluX2tpbG9zXCI6XG4gICAgICAgICAgICAgICAgZGF0YVtcImluX2tpbG9zXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIHRoaXMud2luZG93LnVwZGF0ZUxpc3RJdGVtID0gZnVuY3Rpb24gdXBkYXRlTGlzdEl0ZW0oZWxlbWVudCkge1xuXG5cbiAgICAgICAgbGV0IGNvbHVtbk5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uLW5hbWVcIik7XG4gICAgICAgIGxldCB2YWx1ZSA9IGVsZW1lbnQudmFsdWU7XG4gICAgICAgIGxldCBpZCA9IGVsZW1lbnQuaWQ7XG4gICAgICAgIGxldCBpZEFyciA9IGlkLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgbGV0IGFyckxlbmd0aCA9IGlkQXJyLmxlbmd0aDtcbiAgICAgICAgbGV0IHJvdyA9IGlkQXJyW2Fyckxlbmd0aCAtIDFdO1xuICAgICAgICBsZXQgaXRlbUlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZC1cIiArIHJvdyk7XG4gICAgICAgIGxldCBpdGVtSWRWYWx1ZSA9IGl0ZW1JZC52YWx1ZTtcbiAgICAgICAgbGV0IGxpc3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdElkXCIpLnZhbHVlO1xuICAgICAgICBsZXQgdXJsID0gXCIvbGlzdC1pdGVtXCI7XG4gICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgIGxldCB1c2VySWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJJZFwiKS52YWx1ZTtcbiAgICAgICAgbGV0IHVwZGF0ZU1hc3RlciA9IG51bGw7XG4gICAgICAgIGxldCBjcmVhdGUgPSB0cnVlO1xuICAgICAgICBsZXQgaXNNYXN0ZXJMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzTWFzdGVyJykudmFsdWU7XG4gICAgICAgIC8vIGxldCBpbnB1dFJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3ctJytyb3cpO1xuICAgICAgICAvLyBsZXQgaW5wdXRzQW5kU2VsZWN0cyA9IGlucHV0Um93LnF1ZXJ5U2VsZWN0b3IoJyB0ZCBpbnB1dCwgdGQgc2VsZWN0Jyk7XG4gICAgICAgIC8vIGlucHV0c0FuZFNlbGVjdHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgIGRhdGFbY29sdW1uTmFtZV0gPSB2YWx1ZTtcblxuICAgICAgICBpZiAoY29sdW1uTmFtZS5zdWJzdHJpbmcoMCwgMykgPT09IFwiaW5fXCIpIHtcbiAgICAgICAgICAgIGRhdGEgPSBnZXRCb29sZWFuRGF0YShjb2x1bW5OYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbXCJsaXN0X2lkXCJdID0gbGlzdElkO1xuICAgICAgICBkYXRhW1widXNlcl9pZFwiXSA9IHVzZXJJZDtcbiAgICAgICAgZGF0YVtcImlkXCJdID0gaXRlbUlkVmFsdWU7XG4gICAgICAgIGlmKGl0ZW1JZFZhbHVlLnN1YnN0cmluZygwLDMpICE9PSAnbmV3Jyl7XG4gICAgICAgICAgICBjcmVhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHVybCA9IHVybCArJy8nKyBpdGVtSWRWYWx1ZTtcbiAgICAgICAgICAgIHVwZGF0ZU1hc3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGVNYXN0ZXItJytyb3cpO1xuICAgICAgICAgICAgaWYodXBkYXRlTWFzdGVyICE9PSBudWxsKXtcbiAgICAgICAgICAgICAgICB1cGRhdGVNYXN0ZXIgPSB1cGRhdGVNYXN0ZXIudmFsdWU7XG4gICAgICAgICAgICAgICAgZGF0YVsndXBkYXRlTWFzdGVyJ10gPSB1cGRhdGVNYXN0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QodXJsLCBkYXRhLCBpdGVtSWQpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBsZXQgcmVzRGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgIGlmKHJlc0RhdGEuc3RhdHVzICE9PSAnMScpe1xuICAgICAgICAgICAgICAgICAgICBhbGVydChyZXNEYXRhLm1zZyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoY3JlYXRlKXtcbiAgICAgICAgICAgICAgICAgICAgaXRlbUlkLnZhbHVlID0gcmVzRGF0YS5uZXdJZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZ2V0RGVsZXRlQnRuRGF0YShpdGVtSWQudmFsdWUscm93KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiRmFpbGVkIHRvIHVwZGF0ZSBsaXN0IGl0ZW0uIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGlmKGlzTWFzdGVyTGlzdCA9PT0gJ2ZhbHNlJyl7XG4gICAgICAgICAgICB1cGRhdGVUb3RhbExpc3RXZWlnaHRzKCk7XG4gICAgICAgIH1cblxuXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRvdGFsTGlzdFdlaWdodHMoKSB7XG4gICAgICAgIGxldCB3ZWlnaHRzRm9yUFcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvci10b3RhbC1saXN0LXdlaWdodFwiKTtcbiAgICAgICAgbGV0IGJhc2VXZWlnaHQgPSAwO1xuICAgICAgICBsZXQgdG90YWxQYWNrV2VpZ2h0ID0gMDtcbiAgICAgICAgbGV0IG1heFBhY2tXZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1heFBhY2tXZWlnaHRcIikudmFsdWU7XG4gICAgICAgIGxldCBjbGFzc1dhcm5pbmdWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGFzc1dhcm5pbmdWYWx1ZScpLnZhbHVlO1xuICAgICAgICBsZXQgdW9tVGV4dCA9IFwiTEJTXCI7XG4gICAgICAgIHdlaWdodHNGb3JQVy5mb3JFYWNoKGZ1bmN0aW9uICh3ZWlnaHRGb3JQVykge1xuICAgICAgICAgICAgbGV0IGlkID0gd2VpZ2h0Rm9yUFcuaWQ7XG4gICAgICAgICAgICBsZXQgaWRBcnIgPSBpZC5zcGxpdChcIi1cIik7XG4gICAgICAgICAgICBsZXQgYXJyTGVuZ3RoID0gaWRBcnIubGVuZ3RoO1xuICAgICAgICAgICAgbGV0IHJvdyA9IGlkQXJyW2Fyckxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgbGV0IHBhY2tlZEFtb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgICAgICAgIFwicGFja2VkQW1vdW50LVwiICsgcm93XG4gICAgICAgICAgICApLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGNvbnZlcnRlciA9IDE7XG4gICAgICAgICAgICBsZXQgcm93V2VpZ2h0ID0gMDtcbiAgICAgICAgICAgIGxldCBpdGVtV2VpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtV2VpZ2h0LVwiICsgcm93KS52YWx1ZTtcbiAgICAgICAgICAgIGxldCB1b20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbVwiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBpdGVtQ2F0ZWdvcnlFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgICAgICAgXCJpdGVtQ2F0ZWdvcnktXCIgKyByb3dcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGxldCBpdGVtQ2F0ZWdvcnkgPSBcIlwiO1xuICAgICAgICAgICAgaWYgKGl0ZW1DYXRlZ29yeUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpdGVtQ2F0ZWdvcnkgPSBpdGVtQ2F0ZWdvcnlFbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXRlbUNhdGVnb3J5ID09PSB1bmRlZmluZWQgfHwgaXRlbUNhdGVnb3J5ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaXRlbUNhdGVnb3J5ID0gXCJcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHVvbSA9PT0gXCJ1c1wiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tLW96LVwiICsgcm93KS5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnRlciA9IG91bmNlQ29udmVydGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdW9tVGV4dCA9IFwiS0dcIjtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tLWdyYW0tXCIgKyByb3cpLmNoZWNrZWQgPT09IHRydWVcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgY29udmVydGVyID0gZ3JhbUNvbnZlcnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJvd1dlaWdodCA9ICtwYWNrZWRBbW91bnQgKiAoK2l0ZW1XZWlnaHQgLyBjb252ZXJ0ZXIpO1xuICAgICAgICAgICAgdG90YWxQYWNrV2VpZ2h0ID0gdG90YWxQYWNrV2VpZ2h0ICsgcm93V2VpZ2h0O1xuXG4gICAgICAgICAgICBpZiAoaXRlbUNhdGVnb3J5ICE9PSBcImNvbnN1bWFibGVzXCIpIHtcbiAgICAgICAgICAgICAgICBiYXNlV2VpZ2h0ID0gYmFzZVdlaWdodCArIHJvd1dlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCtiYXNlV2VpZ2h0ID4gK21heFBhY2tXZWlnaHQpIHtcbiAgICAgICAgICAgIGxldCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWlnaHRXYXJuaW5nLWRpdlwiKTtcbiAgICAgICAgICAgIGRpdkVsZW1lbnQuaW5uZXJUZXh0ID1cIkJhc2Ugd2VpZ2h0IChcIiArICBiYXNlV2VpZ2h0LnRvRml4ZWQoMykgK1wiIFwiICt1b21UZXh0ICtcIikgZXhjZWVkZXMgdGhlIHdlaWdodCBmb3IgdGhlICdcIiArY2xhc3NXYXJuaW5nVmFsdWUrXCInIHN0eWxlIG9mIGhpa2luZy5cIjtcblxuICAgICAgICAgICAgZGl2RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWlnaHRXYXJuaW5nLWRpdlwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2VXZWlnaHRcIikudmFsdWUgPSBiYXNlV2VpZ2h0LnRvRml4ZWQoMyk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG90YWxQYWNrV2VpZ2h0XCIpLnZhbHVlID1cbiAgICAgICAgICAgIHRvdGFsUGFja1dlaWdodC50b0ZpeGVkKDMpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVMaXN0SXRlbUlucHV0KFxuICAgICAgICB0eXBlLFxuICAgICAgICBuYW1lQmFzZSxcbiAgICAgICAgcm93LFxuICAgICAgICBjb2x1bW5OYW1lLFxuICAgICAgICBsaXN0ZW4gPSB0cnVlXG4gICAgKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBlbGVtZW50LnR5cGUgPSB0eXBlO1xuICAgICAgICBlbGVtZW50Lm5hbWUgPSBuYW1lQmFzZSArIFwiW11cIjtcbiAgICAgICAgZWxlbWVudC5pZCA9IG5hbWVCYXNlICsgXCItXCIgKyByb3c7XG4gICAgICAgIGVsZW1lbnQudmFsdWUgPSBcIlwiO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uLW5hbWVcIiwgY29sdW1uTmFtZSk7XG4gICAgICAgIGlmKGxpc3Rlbil7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUxpc3RJdGVtKGVsZW1lbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldENhdGVncm95U2VsZWN0KHJvdywgZ3JvdXBDYXRlZ29yeSA9IG51bGwsIGxpc3RlbiA9IHRydWUpIHtcblxuICAgICAgICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgc2VsZWN0LmlkID0gXCJJdGVtQ2F0ZWdvcnktXCIgKyByb3c7XG4gICAgICAgIHNlbGVjdC5uYW1lID0gXCJpdGVtQ2F0ZWdvcnktXCIgKyByb3c7XG4gICAgICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIsIFwiaXRlbV9jYXRlZ29yeVwiKTtcbiAgICAgICAgc2VsZWN0LmNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCI7XG5cbiAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IFwiXCI7XG4gICAgICAgIG9wdGlvbi50ZXh0ID0gXCJDaG9vc2VcIjtcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIGxldCBvcHRpb25MaXN0O1xuXG4gICAgICAgIG9wdGlvbkxpc3QgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2xpc3QtaXRlbS1jYXRlZ29yaWVzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgZXJyb3JcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cblxuICAgICAgICBvcHRpb25MaXN0KCkudGhlbigoZGF0YSkgPT4ge1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBkYXRhW2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gZGF0YVtpXS5jYXRlZ29yeTtcbiAgICAgICAgICAgICAgICBpZiAoZ3JvdXBDYXRlZ29yeSAhPSBudWxsICYmIGRhdGFbaV0udmFsdWUgPT09IGdyb3VwQ2F0ZWdvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZihsaXN0ZW4pe1xuICAgICAgICAgICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUxpc3RJdGVtKHNlbGVjdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIHNlbGVjdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gbWV0cmljUmFkaW9Ub1VzKCkge1xuICAgICAgICBsZXQgaW5wdXRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWV0cmljLXJhZGlvXCIpO1xuICAgICAgICBpbnB1dEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGlucHV0RWxlbWVudCkge1xuICAgICAgICAgICAgbGV0IGlkQXJyID0gaW5wdXRFbGVtZW50LmlkLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgICAgIGxldCB1b20gPSBpZEFyclsxXTtcbiAgICAgICAgICAgIGxldCByb3cgPSBpZEFycltpZEFyci5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50VHlwZSA9IGlucHV0RWxlbWVudC50eXBlO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRUYWcgPSBpbnB1dEVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICBsZXQgbmV3RWxlbWVudDtcblxuICAgICAgICAgICAgaWYgKGVsZW1lbnRUeXBlID09PSBcInJhZGlvXCIgJiYgdW9tID09PSBcImdyYW1cIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVSYWRpbyhcImluX291bmNlc1wiLCBcIk9aXCIsIFwib3pcIiwgcm93LCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFR5cGUgPT09IFwicmFkaW9cIiAmJiB1b20gPT09IFwia2dcIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVSYWRpbyhcImluX2xic1wiLCBcIkxCU1wiLCBcImxic1wiLCByb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VGFnID09PSBcImxhYmVsXCIgJiYgdW9tID09PSBcImdyYW1cIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVMYWJlbChcIk9aXCIsIFwidW9tLW96LVwiICsgcm93LCBcIm96XCIsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUYWcgPT09IFwibGFiZWxcIiAmJiB1b20gPT09IFwia2dcIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVMYWJlbChcIkxCU1wiLCBcInVvbS1sYnMtXCIgKyByb3csIFwibGJzXCIsIHJvdyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuZXdFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKFxuICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdXNSYWRpb1RvTWV0cmljKCkge1xuICAgICAgICBsZXQgaW5wdXRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudXMtcmFkaW9cIik7XG4gICAgICAgIGlucHV0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXRFbGVtZW50KSB7XG4gICAgICAgICAgICBsZXQgaWRBcnIgPSBpbnB1dEVsZW1lbnQuaWQuc3BsaXQoXCItXCIpO1xuICAgICAgICAgICAgbGV0IHVvbSA9IGlkQXJyWzFdO1xuICAgICAgICAgICAgbGV0IHJvdyA9IGlkQXJyW2lkQXJyLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRUeXBlID0gaW5wdXRFbGVtZW50LnR5cGU7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFRhZyA9IGlucHV0RWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBsZXQgbmV3RWxlbWVudDtcblxuICAgICAgICAgICAgaWYgKGVsZW1lbnRUeXBlID09PSBcInJhZGlvXCIgJiYgdW9tID09PSBcIm96XCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlUmFkaW8oXCJpbl9ncmFtc1wiLCBcIkdSXCIsIFwiZ3JhbVwiLCByb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VHlwZSA9PT0gXCJyYWRpb1wiICYmIHVvbSA9PT0gXCJsYnNcIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVSYWRpbyhcImluX2tpbG9zXCIsIFwiS0dcIiwgXCJrZ1wiLCByb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VGFnID09PSBcImxhYmVsXCIgJiYgdW9tID09PSBcIm96XCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlTGFiZWwoXCJHXCIsIFwidW9tLWdyYW0tXCIgKyByb3csIFwiZ3JhbVwiLCByb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VGFnID09PSBcImxhYmVsXCIgJiYgdW9tID09PSBcImxic1wiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZUxhYmVsKFwiS0dcIiwgXCJ1b20ta2ctXCIgKyByb3csIFwia2dcIiwgcm93KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5ld0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQoXG4gICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVSYWRpbyhkYXRhQ29sdW1uTmFtZSwgbGFiZWwsIHVvbSwgcm93KSB7XG4gICAgICAgIGxldCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgcmFkaW8uY2xhc3NOYW1lID1cbiAgICAgICAgICAgIFwiZm9ybS1jaGVjay1pbnB1dFwiICtcbiAgICAgICAgICAgICh1b20gPT09IFwiZ3JhbVwiIHx8IHVvbSA9PT0gXCJrZ1wiID8gXCIgbWV0cmljLXJhZGlvXCIgOiBcIiB1cy1yYWRpb1wiKTtcbiAgICAgICAgcmFkaW8udHlwZSA9IFwicmFkaW9cIjtcbiAgICAgICAgcmFkaW8ubmFtZSA9IFwidW9tLVwiICsgcm93ICsgXCJbXVwiO1xuICAgICAgICByYWRpby5pZCA9IFwidW9tLVwiICsgdW9tICsgXCItXCIgKyByb3c7XG4gICAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uLW5hbWVcIiwgZGF0YUNvbHVtbk5hbWUpO1xuXG4gICAgICAgIGlmICh1b20gPT09IFwiZ3JhbVwiIHx8IHVvbSA9PT0gXCJvelwiKSB7XG4gICAgICAgICAgICByYWRpby5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnZlcnRNZWFzdXJlbWVudChyb3cpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJhZGlvO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVMYWJlbChpbm5lckh0bWwsIGh0bWxGb3IsIHVvbSwgcm93LCBsaW5lTGFiZWwgPSBmYWxzZSkge1xuICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxhYmVsLmNsYXNzTmFtZSA9XG4gICAgICAgICAgICBcImZvcm0tY2hlY2stbGFiZWxcIiArXG4gICAgICAgICAgICAodW9tID09PSBcImdyYW1cIiB8fCB1b20gPT09IFwia2dcIiA/IFwiIG1ldHJpYy1yYWRpb1wiIDogXCIgdXMtcmFkaW9cIik7XG4gICAgICAgIGxhYmVsLmh0bWxGb3IgPSBodG1sRm9yO1xuICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSBpbm5lckh0bWw7XG4gICAgICAgIGlmICghbGluZUxhYmVsKSB7XG4gICAgICAgICAgICBsYWJlbC5pZCA9IFwidW9tLVwiICsgdW9tICsgXCItbGFiZWwtXCIgKyByb3c7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYWJlbC5pZCA9IFwibGluZS11b20tbGFiZWwtXCIgKyByb3c7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgfVxuXG4gICAgdGhpcy53aW5kb3cudXBkYXRlTGlzdCA9IGZ1bmN0aW9uIHVwZGF0ZUxpc3QoZWxlbWVudCwgbGlzdElkKSB7XG4gICAgICAgIGxldCBjb2x1bW5OYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIpO1xuICAgICAgICBsZXQgdmFsdWUgPSBlbGVtZW50LnZhbHVlO1xuICAgICAgICBsZXQgdXJsID0gXCIvZ2Vhci1saXN0L1wiICsgbGlzdElkO1xuXG4gICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgIGRhdGFbY29sdW1uTmFtZV0gPSB2YWx1ZTtcblxuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QodXJsLCBkYXRhLCBsaXN0SWQpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gYWxlcnQocmVzLmRhdGEubXNnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiRmFpbGVkIHRvIHVwZGF0ZSBsaXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBpZiAoY29sdW1uTmFtZSA9PT0gXCJzb3J0XCIgfHwgY29sdW1uTmFtZSA9PT0gXCJsaXN0X2NsYXNzXCIgfHwgY29sdW1uTmFtZSA9PT0gJ2xpc3RfaXRlbXMnKSB7XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoZWFkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtLWNvbGxhcHNpYmxlLWhlYWRlclwiKTtcblxuICAgIGhlYWRlcnMuZm9yRWFjaCgoaGVhZGVyKSA9PiB7XG4gICAgICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGhlYWRlci5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICBjb25zdCBhcnJvdyA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKFwiLml0ZW0tYXJyb3dcIik7XG4gICAgICAgICAgICBpZiAoY29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJvcGVuXCIpKSB7XG4gICAgICAgICAgICAgICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IG51bGw7XG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5wYWRkaW5nID0gXCIwIDEwcHhcIjtcbiAgICAgICAgICAgICAgICBhcnJvdy5pbm5lckhUTUwgPSBcIiYjOTY2MFwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5wYWRkaW5nID0gXCIxMHB4XCI7XG4gICAgICAgICAgICAgICAgYXJyb3cuaW5uZXJIVE1MID0gXCImIzk2NTBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBsZXQgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNtYXN0ZXItaXRlbS10YWJsZSBpbnB1dFwiKTtcblxuICAgIGlucHV0cy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICBpbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSk7XG5cbiAgICBsZXQgbGlzdENoYXJ0YnRuID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdENoYXJ0QnRuXCIpO1xuICAgIGlmKGxpc3RDaGFydGJ0biAhPT0gbnVsbCl7XG4gICAgICAgIGRvY3VtZW50IC5nZXRFbGVtZW50QnlJZChcImxpc3RDaGFydEJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IGxpc3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdElkXCIpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IHVybCA9IFwiL2dlYXItbGlzdC1hbmFseXRpY3MvXCIgKyBsaXN0SWQ7XG5cbiAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgLmdldCh1cmwpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2hhcnRTdGF0dXMgPSBDaGFydC5nZXRDaGFydChcImdlYXJDaGFydFwiKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhcnRTdGF0dXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFydFN0YXR1cy5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdlYXJDaGFydFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoYXJ0RGF0YSA9IEpTT04ucGFyc2UocmVzLmRhdGEuY2hhcnREYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZG91Z2hudXRcIiwgLy8gQ2hhcnQgdHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsczogY2hhcnREYXRhLmxhYmVscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsYWJlbDogbGlzdE5hbWUgKyAnQnJlYWsgRG93bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBjaGFydERhdGEud2VpZ2h0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY2hhcnREYXRhLmNvbG9ycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJPZmZzZXQ6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXRvdXQ6IDQ1LCAvLyBBZGp1c3QgdGhlIGN1dG91dCBwZXJjZW50YWdlIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM6IDE1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFsYWJlbHM6IGZhbHNlLCAvLyBSZW1vdmluZyB0aGlzIGxpbmUgc2hvd3MgdGhlIGRhdGFsYWJlbHMgYWdhaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlUm90YXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlU2NhbGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhc2VXZWlnaHQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNlV2VpZ2h0XCIpLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdG90YWxQYWNrV2VpZ2h0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG90YWxQYWNrV2VpZ2h0XCIpLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsQmFzZVdlaWdodFwiKS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlV2VpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsVG90YWxXZWlnaHRcIikudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxQYWNrV2VpZ2h0O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgdGhpcy53aW5kb3cuc2hvd0NvbnZyc2lvbkFsZXJ0ID0gZnVuY3Rpb24gc2hvd0NvbnZyc2lvbkFsZXJ0KCl7XG4gICAgICAgIGFsZXJ0KCdDaGFuZ2luZyB0aGlzIHZhbHVlIHdpbGwgYWxzbyB1cGRhdGUgdGhlIHVuaXRzIG9mIG1lYXN1cmUgYW5kIGFzc29jaWF0ZWQgdmFsdWVzIGZvciBhbnkgaXRlbSBvbiB0aGlzIGdlYXIgbGlzdC4nKTtcbiAgICB9XG4gICAgdGhpcy53aW5kb3cuY29uZmlybURlbGV0ZSA9IGZ1bmN0aW9uIGNvbmZpcm1EZWxldGUoZWxlbWVudCkge1xuXG4gICAgICAgIGxldCBpc01hc3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpc01hc3RlcicpLnZhbHVlO1xuICAgICAgICBsZXQgaHJlZiA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWhyZWYnKTtcbiAgICAgICAgbGV0IG5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vYmplY3QtbmFtZScpO1xuICAgICAgICBsZXQgb2JqZWN0VHlwZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9iamVjdC10eXBlJyk7XG4gICAgICAgIGxldCBhbmNob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlT2JqZWN0QW5jaG9yJyk7XG4gICAgICAgIGxldCBtb2RhbEJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlTW9kYWxCb2R5Jyk7XG4gICAgICAgIGxldCB0ZXh0ID0gYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgJHtvYmplY3RUeXBlfSAke25hbWV9P2A7XG4gICAgICAgIGxldCBoZWxwZXJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlSGVscGVyJyk7XG4gICAgICAgIGhlbHBlckRpdi5pbm5lclRleHQgPSAnJztcblxuXG4gICAgICAgIGlmKG9iamVjdFR5cGUgPT09ICdpdGVtOicgJiYgaXNNYXN0ZXIgPT09ICdmYWxzZScpe1xuICAgICAgICAgICAgbGV0IGxpc3ROYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1uYW1lJyk7XG4gICAgICAgICAgICBsZXQgaGVscHRleHQgPSBgKkRlbGV0aW5nIGFuIGl0ZW0gZnJvbSB0aGlzIGxpc3QgKCR7bGlzdE5hbWV9KSB3aWxsIG5vdCBkZWxldGUgaXQgdGhlICdZb3VyIEdlYXInIHNlY3Rpb24uYDtcbiAgICAgICAgICAgIGhlbHBlckRpdi5hcHBlbmQoaGVscHRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYob2JqZWN0VHlwZSA9PT0gJ2l0ZW06JyAmJiBpc01hc3RlciA9PT0gJ3RydWUnKXtcbiAgICAgICAgICAgIGxldCBsaXN0TmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtbmFtZScpO1xuICAgICAgICAgICAgbGV0IGhlbHB0ZXh0ID0gYCpEZWxldGluZyBhbiBpdGVtIGZyb20gdGhlICdZb3VyIEdlYXInIHNlY3Rpb24gd2lsbCBkZWxldGUgaXQgZnJvbSBhbGwgJ0dlYXIgTGlzdHMnLmA7XG4gICAgICAgICAgICBoZWxwZXJEaXYuYXBwZW5kKGhlbHB0ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgaGVscGVyRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgICAgbW9kYWxCb2R5LmlubmVySFRNTCA9IHRleHQ7XG4gICAgICAgIGFuY2hvci5zZXRBdHRyaWJ1dGUoJ2hyZWYnLGhyZWYpO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlUm93KHJvdyl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbiByZW1vdmUgcm93Jyk7XG4gICAgICAgIGxldCB0YWJsZVJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByb3ctJHtyb3d9YClcbiAgICAgICAgICAgIHRhYmxlUm93LnJlbW92ZSgpO1xuXG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZURlbGV0ZUJ1dHRvbihyb3cpIHtcbiAgICAgICAgbGV0IGlzTWFzdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzTWFzdGVyJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gJ2J0biBidG4tc20gYnRuLWRhbmdlcic7XG4gICAgICAgIGJ1dHRvbi50aXRsZSA9ICdEZWxldGUgSXRlbSc7XG4gICAgICAgIGJ1dHRvbi5pZCA9YGRlbGV0ZUl0ZW1CdG4tJHtyb3d9YDtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1ocmVmJywnJyk7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtb2JqZWN0LW5hbWUnLCcnKTtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1vYmplY3QtaWQnLCcnKTtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1vYmplY3QtdHlwZScsJ2l0ZW06Jyk7XG4gICAgICAgIGlmKGlzTWFzdGVyID09PSAnZmFsc2UnKXtcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1uYW1lJyxkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdE5hbWUnKS52YWx1ZSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1saXN0LW5hbWUnLCdtYXN0ZXInKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgaWNvbi5jbGFzc05hbWUgPSAnZmFzIGZhLXRyYXNoJztcblxuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZW1vdmVSb3cocm93KTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERlbGV0ZUJ0bkRhdGEoaWQscm93KXtcbiAgICAgICAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZWxldGVJdGVtQnRuLSR7cm93fWApO1xuICAgICAgICBsZXQgdXJsID0gYC9saXN0LWl0ZW0vJHtpZH1gO1xuXG4gICAgICAgIGF4aW9zXG4gICAgICAgIC5nZXQodXJsKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzICE9IFwiMVwiKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQocmVzLmRhdGEubXNnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBpdGVtID0gcmVzLmRhdGEuaXRlbTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaHJlZicsYC9yZW1vdmUtbGlzdC1pdGVtLyR7aXRlbS5pZH1gKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtb2JqZWN0LW5hbWUnLGl0ZW0uaXRlbV9uYW1lKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtb2JqZWN0LWlkJyxpdGVtLmlkKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdG9nZ2xlJyxcIm1vZGFsXCIpXG4gICAgICAgICAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRhcmdldCcsXCIjZGVsZXRlQWxlcnRNb2RhbFwiKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBjb25maXJtRGVsZXRlKGRlbGV0ZUJ0bik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KGVycik7XG4gICAgICAgIH0pO1xuXG5cbiAgICB9XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNvcnRhYmxlXCIpLmZvckVhY2goZnVuY3Rpb24gKHRhYmxlKSB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5SWQgPSB0YWJsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNhdGVnb3J5LWlkXCIpO1xuXG4gICAgICAgIG5ldyBTb3J0YWJsZSh0YWJsZS5xdWVyeVNlbGVjdG9yKFwidGJvZHlcIiksIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogMTUwLFxuICAgICAgICAgICAgb25FbmQ6IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIG5ldyBvcmRlciBvZiBpdGVtc1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yZGVyZWRJZHMgPSBbXTtcbiAgICAgICAgICAgICAgICB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwidHJcIikuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICAgICAgICAgIG9yZGVyZWRJZHMucHVzaChyb3cuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBTZW5kIHRoZSBuZXcgb3JkZXIgdG8gdGhlIHNlcnZlciB2aWEgQUpBWFxuICAgICAgICAgICAgICAgIHVwZGF0ZUl0ZW1PcmRlcihjYXRlZ29yeUlkLCBvcmRlcmVkSWRzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIHVwZGF0ZUl0ZW1PcmRlcihjYXRlZ29yeUlkLCBvcmRlcmVkSWRzKSB7XG5cbiAgICAgICAgbGV0IGxpc3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdElkXCIpLnZhbHVlO1xuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBcIlgtQ1NSRi1UT0tFTlwiOiBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJylcbiAgICAgICAgICAgICAgICAuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKSxcbiAgICAgICAgICAgIGNhdGVnb3J5X2lkOiBjYXRlZ29yeUlkLFxuICAgICAgICAgICAgb3JkZXJlZF9pZHM6IG9yZGVyZWRJZHMsXG4gICAgICAgICAgICBsaXN0X2lkOiBsaXN0SWQsXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHVybCA9IFwiL3VwZGF0ZS1saXN0LW9yZGVyXCI7XG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdCh1cmwsIGRhdGEpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cyAhPSBcIjFcIikge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChyZXMuZGF0YS5tc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBsZXQgc29ydGluZ1NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydEJ5XCIpO1xuICAgICAgICBsZXQgb3B0cyA9IHNvcnRpbmdTZWxlY3Qub3B0aW9ucy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0czsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc29ydGluZ1NlbGVjdC5vcHRpb25zW2ldLnZhbHVlID09IFwiZHJhZ19kcm9wXCIpIHtcbiAgICAgICAgICAgICAgICBzb3J0aW5nU2VsZWN0Lm9wdGlvbnNbaV0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHBhcmVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJlbnQtY29udGFpbmVyJyk7XG5cbiAgICBpZihwYXJlbnRDb250YWluZXIgIT09IG51bGwgJiYgcGFyZW50Q29udGFpbmVyICE9PSB1bmRlZmluZWQpe1xuICAgICAgICBTb3J0YWJsZS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcmVudC1jb250YWluZXInKSwge1xuICAgICAgICAgICAgYW5pbWF0aW9uOiAxNTAsXG4gICAgICAgICAgICBoYW5kbGU6ICcuaXRlbS1jb2xsYXBzaWJsZS1oZWFkZXInLFxuICAgICAgICAgICAgZ2hvc3RDbGFzczogJ3NvcnRhYmxlLWdob3N0JyxcbiAgICAgICAgICAgIG9uRW5kOiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAgICAgLy8gQWZ0ZXIgc29ydGluZyBpcyBjb21wbGV0ZWQsIHVwZGF0ZSB0aGUgcG9zaXRpb25zIGluIHRoZSBkYXRhYmFzZVxuICAgICAgICAgICAgICAgIHVwZGF0ZUNhdGVnb3J5T3JkZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNhdGVnb3J5T3JkZXIoKSB7XG5cbiAgICAgICAgY29uc3QgbmV3T3JkZXIgPSBbXTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyYWdnYWJsZS1jb250YWluZXInKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuXG4gICAgICAgICAgICBuZXdPcmRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICBpdGVtX2NhdGVnb3J5OiBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1jYXRlZ29yeS12YWx1ZScpLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5X29yZGVyOiBpbmRleFxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdXJsID0gXCIvdXBkYXRlLWNhdGVyb2dyeS1vcmRlclwiO1xuICAgICAgICBsZXQgbGlzdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0SWRcIikudmFsdWU7XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIFwiWC1DU1JGLVRPS0VOXCI6IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKVxuICAgICAgICAgICAgICAgIC5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpLFxuICAgICAgICAgICAgY2F0ZWdvcnlfb3JkZXI6IG5ld09yZGVyLFxuICAgICAgICAgICAgbGlzdF9pZDogbGlzdElkLFxuICAgICAgICB9O1xuICAgICAgICAvL2JyZWFrIG91dCBwb3N0cyBhbmQgZ2V0IGNhbGxzIHRvIG93biBmdW5jdGlvbnNcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC5wb3N0KHVybCwgZGF0YSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgIT0gXCIxXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQocmVzLmRhdGEubXNnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBsZXQgYXNzaWduVG9MaXN0TW9kYWwgPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0Fzc2lnbkl0ZW1Ub0xpc3RNb2RhbCcpO1xuXG4gICAgaWYoYXNzaWduVG9MaXN0TW9kYWwgIT09IHVuZGVmaW5lZCAmJiBhc3NpZ25Ub0xpc3RNb2RhbCAhPT0gbnVsbCl7XG5cbiAgICAgICAgYXNzaWduVG9MaXN0TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignaGlkZS5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCB0YWJsZUJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtYXNzaWduLWl0ZW0tdGFibGUtYm9keScpO1xuICAgICAgICAgICAgd2hpbGUodGFibGVCb2R5LmZpcnN0Q2hpbGQpe1xuICAgICAgICAgICAgICAgIHRhYmxlQm9keS5yZW1vdmVDaGlsZCh0YWJsZUJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG53aW5kb3cuYXhpb3MgPSBheGlvcztcblxud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJNb2RhbCIsIkNoYXJ0IiwiU29ydGFibGUiLCJib290c3RyYXAiLCJyZXF1aXJlIiwiZ3JhbUNvbnZlcnRlciIsIm91bmNlQ29udmVydGVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3dQYXNzd29yZCIsImlkIiwicGFzc3dvcmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkTWFzdGVyTGlzdEl0ZW0iLCJudW1iZXJPZkl0ZW1zVG9BZGQiLCJsaW5lc1RvQWRkIiwibGlzdEJ5SXRlbXMiLCJsaXN0ZW4iLCJpdGVtVGFibGUiLCJyb3ciLCJjcmVhdGVFbGVtZW50IiwiY2VsbDEiLCJpdGVtTmFtZSIsImNyZWF0ZUxpc3RJdGVtSW5wdXQiLCJwbGFjZWhvbGRlciIsImNsYXNzTGlzdCIsImFkZCIsImNlbGw2IiwiZGVsZXRlQnRuIiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwiY2VsbDIiLCJpdGVtV2VpZ2h0Iiwic3R5bGUiLCJ3aWR0aCIsImNlbGwzIiwic2VsZWN0Iiwic2V0QXR0cmlidXRlIiwib3pPcHRpb24iLCJsYnNPcHRpb24iLCJnck9wdGlvbiIsImtnT3B0aW9uIiwidGV4dCIsImFwcGVuZENoaWxkIiwic2VsZWN0Q2VsbCIsImNhdGVnb3J5U2VsZWN0IiwiZ2V0Q2F0ZWdyb3lTZWxlY3QiLCJhcHBlbmQiLCJzaG93TGlzdEFzc2lnbk1vZGFsIiwiaXRlbUlkIiwidGFibGUiLCJoZWFkZXIiLCJ1cmwiLCJ1c2VyTGlzdHMiLCJheGlvcyIsImdldCIsInJlcyIsImRhdGEiLCJzdGF0dXMiLCJhbGVydCIsIm1zZyIsImxpc3ROYW1lQ2VsbCIsImFzc2lnbkNlbGwiLCJjaGVja2JveCIsIml0ZW1Bc3NpZ25lZCIsImNoZWNrZWQiLCJhc3NpZ25Ub0dlYXJMaXN0IiwiZWxlbWVudCIsImxpc3RJZCIsImdldEF0dHJpYnV0ZSIsImxpc3RfaWQiLCJwb3N0IiwicmVzcG9uc2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJhZGRMaXN0SXRlbSIsImNhdGVnb3J5Y291bnRlciIsInVuZGVmaW5lZCIsImdyb3VwQ2F0ZWdvcnkiLCJsaXN0VU9NIiwiZmluYWxJRWxlbWVudCIsInRhYmxlQ2F0ZWdvcnkiLCJ1c2VySWQiLCJmaW5hbEkiLCJjZWxsMCIsInNjb3BlIiwiY291bnRlciIsInVwZGF0ZU1hc3Rlckxpc3QiLCJjcmVhdGVEZWxldGVCdXR0b24iLCJsaW5lVW9tQ2VsbCIsInJhZGlvMSIsInJhZGlvMiIsInJhZGlvTGFiZWwxIiwicmFkaW9MYWJlbDIiLCJyYWRpb0xhYmVsMyIsImNyZWF0ZVJhZGlvIiwiY3JlYXRlTGFiZWwiLCJjZWxsNCIsInBhY2tlZEFtb3VudCIsImNlbGw1IiwidG90YWxMaW5lV2VpZ2h0Iiwic3ZnTmFtZXNwYWNlIiwiaWNvbkNlbGwiLCJpY29uIiwiY3JlYXRlRWxlbWVudE5TIiwicGF0aCIsImFkZEV2ZW50TGlzdGVuZXJXZWlnaHRDYWxjIiwidXBkYXRlVU9NIiwidXNSYWRpb1RvTWV0cmljIiwibWV0cmljUmFkaW9Ub1VzIiwibmVlZGVkRm9yV2VpZ2h0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuZWVkZWRGb3JXZWlnaHQiLCJnZXRMaW5lVG90YWxXZWlnaHQiLCJjb252ZXJ0Iiwid2VpZ2h0IiwidW9tIiwibGluZVRvdGFsV2VpZ2h0RWxlbWVudCIsImxpbmVUb3RhbCIsInRvRml4ZWQiLCJyZXBsYWNlIiwidXBkYXRlTGlzdEl0ZW0iLCJjb252ZXJ0TWVhc3VyZW1lbnQiLCJpc01hc3Rlckxpc3QiLCJ0b3RhbFdlaWdodCIsInRvdGFsTGluZVdlaWdodFZhbHVlIiwid2VpZ2h0VmFsdWUiLCJzbWFsbCIsImxhcmdlIiwibGFiZWwiLCJsYWJlbEhUTUwiLCJhZGRDYXRlZ29yeUdyb3VwIiwiY2F0ZWdvcnkiLCJjb2x1bW5OYW1lIiwiZ2V0Qm9vbGVhbkRhdGEiLCJsb2NhdGlvbiIsInJlbG9hZCIsImVyciIsImlkQXJyIiwic3BsaXQiLCJhcnJMZW5ndGgiLCJpdGVtSWRWYWx1ZSIsInVwZGF0ZU1hc3RlciIsInN1YnN0cmluZyIsInJlc0RhdGEiLCJuZXdJZCIsImdldERlbGV0ZUJ0bkRhdGEiLCJ1cGRhdGVUb3RhbExpc3RXZWlnaHRzIiwid2VpZ2h0c0ZvclBXIiwiYmFzZVdlaWdodCIsInRvdGFsUGFja1dlaWdodCIsIm1heFBhY2tXZWlnaHQiLCJjbGFzc1dhcm5pbmdWYWx1ZSIsInVvbVRleHQiLCJ3ZWlnaHRGb3JQVyIsImNvbnZlcnRlciIsInJvd1dlaWdodCIsIml0ZW1DYXRlZ29yeUVsZW1lbnQiLCJpdGVtQ2F0ZWdvcnkiLCJkaXZFbGVtZW50IiwiaW5uZXJUZXh0IiwiZGlzcGxheSIsIm5hbWVCYXNlIiwib3B0aW9uIiwib3B0aW9uTGlzdCIsIl9yZWYiLCJfY2FsbGVlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInQwIiwic2VsZWN0ZWQiLCJpbnB1dEVsZW1lbnRzIiwiaW5wdXRFbGVtZW50IiwiZWxlbWVudFR5cGUiLCJlbGVtZW50VGFnIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwibmV3RWxlbWVudCIsInBhcmVudEVsZW1lbnQiLCJyZXBsYWNlQ2hpbGQiLCJkYXRhQ29sdW1uTmFtZSIsInJhZGlvIiwiaW5uZXJIdG1sIiwiaHRtbEZvciIsImxpbmVMYWJlbCIsInVwZGF0ZUxpc3QiLCJoZWFkZXJzIiwiY29udGVudCIsIm5leHRFbGVtZW50U2libGluZyIsImFycm93IiwicXVlcnlTZWxlY3RvciIsImNvbnRhaW5zIiwicmVtb3ZlIiwibWF4SGVpZ2h0IiwicGFkZGluZyIsInNjcm9sbEhlaWdodCIsImlucHV0cyIsImlucHV0IiwiZGlzYWJsZWQiLCJsaXN0Q2hhcnRidG4iLCJjaGFydFN0YXR1cyIsImdldENoYXJ0IiwiZGVzdHJveSIsImN0eCIsImNoYXJ0RGF0YSIsIkpTT04iLCJwYXJzZSIsIm15Q2hhcnQiLCJsYWJlbHMiLCJkYXRhc2V0cyIsIndlaWdodHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvcnMiLCJib3JkZXJXaWR0aCIsImhvdmVyT2Zmc2V0Iiwib3B0aW9ucyIsImN1dG91dCIsInJhZGl1cyIsImxlZ2VuZCIsInBsdWdpbnMiLCJkYXRhbGFiZWxzIiwiYW5pbWF0aW9uIiwiYW5pbWF0ZVJvdGF0ZSIsImFuaW1hdGVTY2FsZSIsInRleHRDb250ZW50Iiwic2hvd0NvbnZyc2lvbkFsZXJ0IiwiY29uZmlybURlbGV0ZSIsImlzTWFzdGVyIiwiaHJlZiIsIm9iamVjdFR5cGUiLCJhbmNob3IiLCJtb2RhbEJvZHkiLCJjb25jYXQiLCJoZWxwZXJEaXYiLCJsaXN0TmFtZSIsImhlbHB0ZXh0IiwicmVtb3ZlUm93IiwidGFibGVSb3ciLCJidXR0b24iLCJ0aXRsZSIsIm9uY2xpY2siLCJpdGVtIiwiaXRlbV9uYW1lIiwiY2F0ZWdvcnlJZCIsIm9uRW5kIiwiZXZ0Iiwib3JkZXJlZElkcyIsInVwZGF0ZUl0ZW1PcmRlciIsImNhdGVnb3J5X2lkIiwib3JkZXJlZF9pZHMiLCJzb3J0aW5nU2VsZWN0Iiwib3B0cyIsInBhcmVudENvbnRhaW5lciIsImdob3N0Q2xhc3MiLCJ1cGRhdGVDYXRlZ29yeU9yZGVyIiwibmV3T3JkZXIiLCJpbmRleCIsIml0ZW1fY2F0ZWdvcnkiLCJjYXRlZ29yeV9vcmRlciIsImFzc2lnblRvTGlzdE1vZGFsIiwidGFibGVCb2R5IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiZGVmYXVsdHMiLCJjb21tb24iXSwic291cmNlUm9vdCI6IiJ9