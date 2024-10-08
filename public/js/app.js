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
      var deleteBtn = createDeleteButton(i);
      var cell2 = document.createElement("td");
      var itemWeight = createListItemInput("number", "itemWeight", i, "item_weight", listen);
      itemWeight.value = 0;
      itemWeight.classList.add("for-weight");
      itemWeight.classList.add("number-input");
      itemWeight.classList.add("form-control");
      itemWeight.setAttribute('step', '0.01');
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
  this.window.showGearAssignModal = function showGearAssignModal(listId) {
    var table = document.getElementById("add-item-table-body");
    var url = '/get-user-items/' + listId;
    var userItems;
    axios.get(url).then(function (res) {
      var data = res.data;
      userItems = data.userItems;
      if (data.status !== '1') {
        alert(data.msg);
        return;
      }
      for (var i = 0; i < userItems.length; i++) {
        var row = document.createElement("tr");
        var itemNameCell = document.createElement("td");
        var itemCategoryCell = document.createElement("td");
        var itemWeightCell = document.createElement("td");
        var itemUOMCell = document.createElement("td");
        var assignCell = document.createElement("td");
        itemNameCell.innerHTML = userItems[i].item_name;
        itemCategoryCell.innerHTML = userItems[i].item_category;
        itemWeightCell.innerHTML = userItems[i].item_weight;
        itemUOMCell.innerHTML = userItems[i].uom;
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'itemCheckBox-' + i;
        checkbox.name = 'itemIds[]';
        checkbox.value = userItems[i].item_id;
        assignCell.appendChild(checkbox);
        row.appendChild(itemNameCell);
        row.appendChild(itemCategoryCell);
        row.appendChild(itemWeightCell);
        row.appendChild(itemUOMCell);
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
    var listViewInput;
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
      var listViewType = document.createElement("input");
      listViewType.type = "hidden";
      listViewType.id = "listViewType";
      listViewType.value = listByItems;
      listViewInput = listViewType;
      var newRow = document.createElement("input");
      newRow.type = "hidden";
      newRow.id = "newRow-" + finalI;
      newRow.value = true;
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
      var rowUom = document.createElement("input");
      rowUom.type = 'hidden';
      rowUom.id = "uom-" + finalI;
      var radio1 = createRadio("in_ounces", "", "oz", finalI);
      var radioLabel1 = createLabel("OZ", "uom-oz-" + finalI, "oz", finalI);
      var radio2 = createRadio("in_lbs", "", "lbs", finalI);
      var radioLabel2 = createLabel("LBS", "uom-lbs-" + finalI, "lbs", finalI);
      var radio3 = createRadio("in_grams", "", "gram", finalI);
      var radioLabel3 = createLabel("G", "uom-gram-" + finalI, "gram", finalI);
      var radio4 = createRadio("in_kilos", "", "kg", finalI);
      var radioLabel4 = createLabel("KG", "uom-kg-" + finalI, "kg", finalI);
      var radioLabel5 = void 0;
      if (listUOM === "us") {
        rowUom.value = "us";
        radio1.checked = true;
        radioLabel5 = createLabel("OZ", "uom-oz-" + finalI, "oz", finalI, true);
      } else {
        rowUom.value = "metric";
        radio3.checked = true;
        radioLabel5 = createLabel("G", "uom-gram-" + finalI, "gram", finalI, true);
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
      var iconCell = document.createElement("th");
      var icon = document.createElement('i');
      icon.className = 'fas fa-grip-vertical';
      iconCell.appendChild(icon);
      cell1.appendChild(counter);
      cell1.appendChild(newRow);
      cell1.appendChild(itemName);
      cell2.appendChild(itemWeight);
      var selectCell = document.createElement("td");
      var categorySelect = getCategroySelect(finalI, groupCategory);
      selectCell.append(categorySelect);
      cell3.appendChild(rowUom);
      cell3.appendChild(radio1);
      cell3.appendChild(radioLabel1);
      cell3.appendChild(radio2);
      cell3.appendChild(radioLabel2);
      cell3.appendChild(radio3);
      cell3.appendChild(radioLabel3);
      cell3.appendChild(radio4);
      cell3.appendChild(radioLabel4);
      cell4.appendChild(packedAmount);
      cell5.appendChild(totalLineWeight);
      lineUomCell.appendChild(radioLabel5);
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
    var container = document.querySelector('.gear-items-container');
    container.appendChild(listViewInput);
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
  this.window.updateItemUOM = function updateItemUOM(row, element) {
    if (!element || !(element instanceof HTMLElement)) {
      console.error("Invalid element provided to updateListItem.");
      return;
    }
    var uomElement = document.getElementById("uom-".concat(row));
    var itemWeight = document.getElementById("itemWeight-".concat(row)).value;
    var columnName = element.getAttribute('data-column-name');
    var uom = uomElement.value;
    var itemId = document.getElementById("id-".concat(row)).value;
    var label = document.getElementById("line-uom-label-".concat(row));
    var labelHTML;
    var newUOM;
    var url = '/update-item-uom';
    var isNewRow = document.getElementById("newRow-".concat(row)) ? document.getElementById("newRow-".concat(row)).value : false;
    if (itemId.startsWith('new')) {
      return updateListItem(element);
    }
    if (columnName.endsWith('ounces') || columnName.endsWith('lbs')) {
      newUOM = 'us';
    } else {
      newUOM = 'metric';
    }
    var data = getBooleanData(columnName);
    data['id'] = itemId;
    data['newUOM'] = newUOM;
    data['item_weight'] = itemWeight;
    data['isNewRow'] = isNewRow;
    axios.post(url, data).then(function (res) {
      var resData = res.data;
      var item = resData.item;
      if (resData.status === '1') {
        flashBorder(element, true);
        document.getElementById("itemWeight-".concat(row)).value = item['item_weight'];
        document.getElementById("packedAmount-".concat(row)).value = item['amount'];
        document.getElementById("totalLineWeight-".concat(row)).value = item['total_line_weight'];
        uomElement.value = newUOM;
        if (item['in_ounces']) {
          labelHTML = "OZ";
        } else if (item['in_lbs']) {
          labelHTML = "LBS";
        } else if (item['in_grams']) {
          labelHTML = "G";
        } else if (item['in_kilos']) {
          labelHTML = "KG";
        }
        label.innerHTML = labelHTML;
      } else {
        flashBorder(element, false);
        alert(resData.msg || "Update failed, please check your input.");
      }
    })["catch"](function (err) {
      // Enhanced error handling
      flashBorder(element, false);
      alert("Failed to update list item. Please try again later.");
      console.error("Update error:", err);
    });
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
    data['newCategory'] = true;
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
  function flashBorder(element, isSuccess) {
    var columnName = element.getAttribute('data-column-name');
    if (columnName !== 'total_line_weight') {
      element.style.backgroundColor = isSuccess ? '#A8E6CF' : '#F08080';
      // Set a timeout to remove the border after 2 seconds
      setTimeout(function () {
        element.style.backgroundColor = '';
      }, 2000);
    }
  }
  function getBooleanData(columnName) {
    var data = {};
    data["in_ounces"] = false;
    data["in_lbs"] = false;
    data["in_grams"] = false;
    data["in_kilos"] = false;
    data['uom'] = 'us';
    switch (columnName) {
      case "in_ounces":
        data["in_ounces"] = true;
        data['uom'] = 'us';
        break;
      case "in_lbs":
        data["in_lbs"] = true;
        data['uom'] = 'us';
        break;
      case "in_grams":
        data["in_grams"] = true;
        data['uom'] = 'metric';
        break;
      case "in_kilos":
        data["in_kilos"] = true;
        data['uom'] = 'metric';
        break;
      default:
        break;
    }
    return data;
  }
  this.window.updateListItem = function updateListItem(element) {
    var _document$getElementB, _document$getElementB2, _document$getElementB3, _document$getElementB4;
    // Checking if element is a valid DOM element
    if (!element || !(element instanceof HTMLElement)) {
      console.error("Invalid element provided to updateListItem.");
      return;
    }
    var columnName = element.getAttribute("data-column-name");
    var value = element.value;
    var id = element.id;
    var idArr = id.split("-");
    if (idArr.length === 0) {
      console.error("Invalid ID format.");
      return;
    }
    var row = idArr[idArr.length - 1];
    var itemId = document.getElementById("id-" + row);

    // Check if itemId exists
    if (!itemId) {
      console.error("Element with ID 'id-".concat(row, "' not found."));
      return;
    }
    var itemIdValue = itemId.value;
    var listId = ((_document$getElementB = document.getElementById("listId")) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.value) || "";
    var url = "/list-item";
    var data = {};
    var userId = ((_document$getElementB2 = document.getElementById("userId")) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.value) || "";
    var create = true;
    var isMasterList = ((_document$getElementB3 = document.getElementById('isMaster')) === null || _document$getElementB3 === void 0 ? void 0 : _document$getElementB3.value) === 'true';
    var updateCategoryValue = ((_document$getElementB4 = document.getElementById('listViewType')) === null || _document$getElementB4 === void 0 ? void 0 : _document$getElementB4.value) === 'false';
    var isNewRow = document.getElementById("newRow-".concat(row)) ? document.getElementById("newRow-".concat(row)).value : false;
    var uomRadios = document.querySelectorAll(".form-check-input");
    var uomElement;
    uomRadios.forEach(function (uomRadio) {
      if (uomRadio.type == 'radio' && uomRadio.id.endsWith(row) && uomRadio.checked) {
        uomElement = uomRadio;
      }
    });
    var uomColumnName = uomElement.getAttribute("data-column-name");
    if (columnName.startsWith("in_")) {
      data = getBooleanData(columnName);
    } else {
      data = getBooleanData(uomColumnName);
      data[columnName] = value;
    }

    // Assign additional properties to data object

    data["list_id"] = listId;
    data["user_id"] = userId;
    data["id"] = itemIdValue;
    if (updateCategoryValue) {
      var select = document.getElementById('itemCategory-' + row).value;
      data['item_category'] = select;
    }
    if (itemIdValue.startsWith('new')) {
      create = true;
    } else {
      create = false;
      url += '/' + itemIdValue;
      if (isMasterList) {
        data['updateMaster'] = true;
      } else if (isNewRow) {
        data['isNewRow'] = true;
      }
    }
    // console.log('data in update: '+ JSON.stringify(data));
    //POST request
    axios.post(url, data).then(function (res) {
      var resData = res.data;
      if (resData.status === '1') {
        flashBorder(element, true);
        if (create) {
          itemId.value = resData.newId;
        }
        getDeleteBtnData(itemId.value, row);
      } else {
        flashBorder(element, false);
        alert(resData.msg || "Update failed, please check your input.");
      }
    })["catch"](function (err) {
      // Enhanced error handling
      flashBorder(element, false);
      alert("Failed to update list item. Please try again later.");
      console.error("Update error:", err);
    });
    if (!isMasterList) {
      updateTotalListWeights();
    }
  };
  function updateTotalListWeights() {
    var baseWeight = 0;
    var totalPackWeight = 0;
    var maxPackWeight = document.getElementById("maxPackWeight").value;
    var classWarningValue = document.getElementById('classWarningValue').value;
    var uomText = "LBS";
    var listId = document.getElementById('listId').value;
    var url = "/get-pack-data/".concat(listId);
    axios.get(url).then(function (res) {
      var data = res.data;
      var listData = data.listData;
      console.log('list data for pack weights: ' + JSON.stringify(listData));
      if (data.status === '1') {
        baseWeight = listData['baseWeight'];
        totalPackWeight = listData['totalPackWeight'];
        maxPackWeight = listData['maxPackWeight'];
        uomText = listData['weightUom'];
        classWarningValue = listData['classWarningValue'];
        if (+baseWeight > +maxPackWeight) {
          var divElement = document.getElementById("weightWarning-div");
          divElement.innerText = "Base weight (" + baseWeight.toFixed(3) + " " + uomText + ") exceedes the weight for the '" + classWarningValue + "' style of hiking.";
          divElement.style.display = "block";
        } else {
          document.getElementById("weightWarning-div").style.display = "none";
        }
        document.getElementById("baseWeight").value = baseWeight.toFixed(3);
        document.getElementById("totalPackWeight").value = totalPackWeight.toFixed(3);
      } else {
        alert(data.msg);
        return;
      }
    });
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
    select.id = "itemCategory-" + row;
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
    radio.addEventListener("change", function () {
      updateItemUOM(row, radio);
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
      if (res.data.status === '1') {
        flashBorder(element, true);
      } else {
        flashBorder(element, false);
        alert(res.data.msg);
      }
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
              datalabels: false,
              legend: {
                labels: {
                  color: '#fff'
                }
              }
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
    var _document$getElementB5;
    // let isMaster = document.getElementById('isMaster').value;
    var isMaster = ((_document$getElementB5 = document.getElementById('isMaster')) === null || _document$getElementB5 === void 0 ? void 0 : _document$getElementB5.value) === 'true';
    var href = element.getAttribute('data-href');
    var name = element.getAttribute('data-object-name');
    var objectType = element.getAttribute('data-object-type');
    var anchor = document.getElementById('deleteObjectAnchor');
    var modalBody = document.getElementById('deleteModalBody');
    var text = "Are you sure you want to delete ".concat(objectType, " ").concat(name, "?");
    var helperDiv = document.getElementById('deleteHelper');
    var helptext;
    helperDiv.innerText = '';
    if (objectType === 'item:' && isMaster === 'false') {
      var listName = element.getAttribute('data-list-name');
      helptext = "*Deleting an item from this list (".concat(listName, ") will not delete it the 'Your Gear' section.");
      helperDiv.append(helptext);
    } else if (objectType === 'item:' && isMaster === 'true') {
      helptext = "*Deleting an item from the 'Your Gear' section will delete it from all 'Gear Lists'.";
      helperDiv.append(helptext);
    } else if (objectType === 'category:' && isMaster === 'false') {
      text = "Are you sure you want to delete all items in the ".concat(name, " category from this list?");
    } else if (objectType === 'category:' && isMaster === 'true') {
      text = "Are you sure you want to delete all items in the ".concat(name, " category from ALL your lists?");
    } else if (objectType === 'list:') {
      text = "Are you sure you want to delete the ".concat(name, " list?");
    } else {
      helperDiv.style.display = 'none';
    }
    modalBody.innerHTML = text;
    anchor.setAttribute('href', href);
  };
  function removeRow(row) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLFlBQVk7TUFDNUQsSUFBSWlSLFNBQVMsR0FBRzdRLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLDhCQUE4QixDQUFDO01BQ3ZFLE9BQU00USxTQUFTLENBQUNDLFVBQVUsRUFBQztRQUN2QkQsU0FBUyxDQUFDRSxXQUFXLENBQUNGLFNBQVMsQ0FBQ0MsVUFBVSxDQUFDO01BQy9DO0lBRUosQ0FBQyxDQUFDO0VBQ047QUFHSixDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQ2h6Q3dCO0FBQzFCblIsTUFBTSxDQUFDK0MsS0FBSyxHQUFHQSw2Q0FBSztBQUVwQi9DLE1BQU0sQ0FBQytDLEtBQUssQ0FBQ3NPLFFBQVEsQ0FBQ3hFLE9BQU8sQ0FBQ3lFLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLGdCQUFnQjs7Ozs7Ozs7Ozs7QUNIM0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3Nhc3MvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICcuL2Jvb3RzdHJhcCcgO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiYm9vdHN0cmFwXCI7XG4vLyBpbXBvcnQgICdib290c3RyYXAnO1xuaW1wb3J0IFwiQHBvcHBlcmpzL2NvcmVcIjtcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanMvYXV0b1wiO1xuaW1wb3J0IFNvcnRhYmxlIGZyb20gXCJzb3J0YWJsZWpzXCI7XG5jb25zdCBib290c3RyYXAgPSByZXF1aXJlKFwiLi9ib290c3RyYXBcIik7XG5jb25zdCBncmFtQ29udmVydGVyID0gMTAwMDtcbmNvbnN0IG91bmNlQ29udmVydGVyID0gMTY7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICB0aGlzLndpbmRvdy5zaG93UGFzc3dvcmQgPSBmdW5jdGlvbiBzaG93UGFzc3dvcmQoaWQpIHtcbiAgICAgICAgbGV0IHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICBpZiAocGFzc3dvcmQudHlwZSA9PT0gXCJwYXNzd29yZFwiKSB7XG4gICAgICAgICAgICBwYXNzd29yZC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXNzd29yZC50eXBlID0gXCJwYXNzd29yZFwiO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aGlzLndpbmRvdy5hZGRNYXN0ZXJMaXN0SXRlbSA9IGZ1bmN0aW9uIGFkZE1hc3Rlckxpc3RJdGVtKCkge1xuICAgICAgICBsZXQgbnVtYmVyT2ZJdGVtc1RvQWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lc1RvQWRkXCIpO1xuICAgICAgICBsZXQgbGluZXNUb0FkZCA9IDE7XG4gICAgICAgIGlmIChudW1iZXJPZkl0ZW1zVG9BZGQgPT09IG51bGwgfHwgK251bWJlck9mSXRlbXNUb0FkZC52YWx1ZSA8IDEpIHtcbiAgICAgICAgICAgIG51bWJlck9mSXRlbXNUb0FkZC52YWx1ZSA9IGxpbmVzVG9BZGQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaW5lc1RvQWRkID0gK251bWJlck9mSXRlbXNUb0FkZC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXNUb0FkZDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbGlzdEJ5SXRlbXMgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IGxpc3RlbiA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGl0ZW1UYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1pdGVtLXRhYmxlLWJvZHknKTtcbiAgICAgICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBjZWxscyBhbmQgaW5wdXQgZWxlbWVudHMuXG4gICAgICAgICAgICBsZXQgY2VsbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG5cbiAgICAgICAgICAgIGxldCBpdGVtTmFtZSA9IGNyZWF0ZUxpc3RJdGVtSW5wdXQoXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgXCJpdGVtTmFtZVwiLFxuICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAgXCJpdGVtX25hbWVcIixcbiAgICAgICAgICAgICAgICBsaXN0ZW5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpdGVtTmFtZS5wbGFjZWhvbGRlciA9IFwiSXRlbSBOYW1lXCI7XG4gICAgICAgICAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBjZWxsNi5pZCA9IFwiYnRuLXRkLVwiICtpO1xuICAgICAgICAgICAgbGV0IGRlbGV0ZUJ0biA9IGNyZWF0ZURlbGV0ZUJ1dHRvbihpKTtcblxuICAgICAgICAgICAgbGV0IGNlbGwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgbGV0IGl0ZW1XZWlnaHQgPSBjcmVhdGVMaXN0SXRlbUlucHV0KFxuICAgICAgICAgICAgICAgIFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgXCJpdGVtV2VpZ2h0XCIsXG4gICAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgICBcIml0ZW1fd2VpZ2h0XCIsXG4gICAgICAgICAgICAgICAgbGlzdGVuXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaXRlbVdlaWdodC52YWx1ZSA9IDA7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJmb3Itd2VpZ2h0XCIpO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWlucHV0XCIpO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5zZXRBdHRyaWJ1dGUoJ3N0ZXAnLCcwLjAxJyk7XG4gICAgICAgICAgICAvL2l0ZW1XZWlnaHQuc3R5bGUud2lkdGggPSAnNDAlJztcbiAgICAgICAgICAgIGNlbGwyLmNsYXNzTGlzdC5hZGQoXCJudW1iZXItY29sXCIpO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgICAgIHNlbGVjdC5pZCA9IFwidW9tLVwiICsgaTtcbiAgICAgICAgICAgIHNlbGVjdC5uYW1lID0gXCJ1b21bXVwiO1xuICAgICAgICAgICAgc2VsZWN0LnNldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uLW5hbWVcIiwgXCJ1b21cIik7XG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIjtcblxuICAgICAgICAgICAgbGV0IG96T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIGxldCBsYnNPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgbGV0IGdyT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIGxldCBrZ09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBvek9wdGlvbi52YWx1ZSA9IFwiaW5fb3VuY2VzXCI7XG4gICAgICAgICAgICBvek9wdGlvbi50ZXh0ID0gXCJPWlwiO1xuICAgICAgICAgICAgbGJzT3B0aW9uLnZhbHVlICA9ICdpbl9sYnMnO1xuICAgICAgICAgICAgbGJzT3B0aW9uLnRleHQgPSAnTEJTJ1xuXG4gICAgICAgICAgICBnck9wdGlvbi52YWx1ZSA9IFwiaW5fZ3JhbXNcIjtcbiAgICAgICAgICAgIGdyT3B0aW9uLnRleHQgPSBcIkdcIjtcbiAgICAgICAgICAgIGtnT3B0aW9uLnZhbHVlICA9ICdpbl9raWxvcyc7XG4gICAgICAgICAgICBrZ09wdGlvbi50ZXh0ID0gJ0tHJztcbiAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvek9wdGlvbik7XG4gICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQobGJzT3B0aW9uKTtcbiAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChnck9wdGlvbik7XG4gICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQoa2dPcHRpb24pO1xuXG4gICAgICAgICAgICAvL2FwcGVuZCBpbnB1dHMgdG8gY2VsbHMuXG4gICAgICAgICAgICBjZWxsMS5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gICAgICAgICAgICBjZWxsMi5hcHBlbmRDaGlsZChpdGVtV2VpZ2h0KTtcblxuICAgICAgICAgICAgbGV0IHNlbGVjdENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBsZXQgY2F0ZWdvcnlTZWxlY3QgPSBnZXRDYXRlZ3JveVNlbGVjdChpLG51bGwsIGxpc3Rlbik7XG4gICAgICAgICAgICBjYXRlZ29yeVNlbGVjdC5uYW1lID0gJ2l0ZW1DYXRlZ29yeVtdJ1xuICAgICAgICAgICAgc2VsZWN0Q2VsbC5hcHBlbmQoY2F0ZWdvcnlTZWxlY3QpO1xuXG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICAgICAgICAgICAgY2VsbDYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIGNlbGxzIHRvIHRoZSByb3cuXG4gICAgICAgICAgICAvLyByb3cuYXBwZW5kQ2hpbGQoaWNvbkNlbGwpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwxKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChzZWxlY3RDZWxsKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsMyk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDIpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGw2KTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSByb3cgdG8gdGhlIHRhYmxlLlxuICAgICAgICAgICAgaXRlbVRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG5cblxuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdJdGVtQ291bnQnKS52YWx1ZSA9IGxpbmVzVG9BZGQ7XG4gICAgICAgIG51bWJlck9mSXRlbXNUb0FkZC52YWx1ZSA9IDE7XG4gICAgfTtcbiAgICB0aGlzLndpbmRvdy5zaG93TGlzdEFzc2lnbk1vZGFsID0gZnVuY3Rpb24gc2hvd0xpc3RBc3NpZ25Nb2RhbChpdGVtSWQsaXRlbU5hbWUpe1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtSWRmb3JBc3NpZ24nKS52YWx1ZSA9IGl0ZW1JZDtcbiAgICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJJdGVtSWRmb3JBc3NpZ24nKS52YWx1ZSA9IHVzZXJJdGVtSWQ7XG5cbiAgICAgICAgbGV0IHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1hc3NpZ24taXRlbS10YWJsZS1ib2R5XCIpO1xuICAgICAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0Fzc2lnbkl0ZW1Ub0xpc3RNb2RhbExhYmVsJyk7XG4gICAgICAgIGhlYWRlci5pbm5lckhUTUwgPSAnQXNzaWduL1VuYXNzaWduIGl0ZW06ICcraXRlbU5hbWU7XG5cbiAgICAgICAgbGV0IHVybCA9ICcvZ2V0LXVzZXItbGlzdHMvJytpdGVtSWQ7XG4gICAgICAgIGxldCB1c2VyTGlzdHM7XG5cbiAgICAgICAgYXhpb3MuZ2V0KHVybClcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgIHVzZXJMaXN0cyA9IGRhdGEudXNlckxpc3RzO1xuXG4gICAgICAgICAgICBpZihkYXRhLnN0YXR1cyAhPT0gJzEnKXtcbiAgICAgICAgICAgICAgICBhbGVydChkYXRhLm1zZyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJMaXN0cy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgICAgICAgICBsZXQgbGlzdE5hbWVDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgICAgIGxldCBhc3NpZ25DZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuXG4gICAgICAgICAgICAgICAgbGlzdE5hbWVDZWxsLmlubmVySFRNTCA9IHVzZXJMaXN0c1tpXS5uYW1lO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgICAgICAgICBjaGVja2JveC5pZCA9ICdsaXN0Q2hlY2tCb3gtJytpO1xuICAgICAgICAgICAgICAgIGNoZWNrYm94Lm5hbWUgPSAnbGlzdElkc1tdJztcbiAgICAgICAgICAgICAgICBjaGVja2JveC52YWx1ZSA9IHVzZXJMaXN0c1tpXS5pZDtcblxuICAgICAgICAgICAgICAgIGlmKHVzZXJMaXN0c1tpXS5pdGVtQXNzaWduZWQgPT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGFzc2lnbkNlbGwuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChsaXN0TmFtZUNlbGwpO1xuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChhc3NpZ25DZWxsKTtcbiAgICAgICAgICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuICAgIHRoaXMud2luZG93LnNob3dHZWFyQXNzaWduTW9kYWwgPSBmdW5jdGlvbiBzaG93R2VhckFzc2lnbk1vZGFsKGxpc3RJZCl7XG5cbiAgICAgICAgbGV0IHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtaXRlbS10YWJsZS1ib2R5XCIpO1xuXG4gICAgICAgIGxldCB1cmwgPSAnL2dldC11c2VyLWl0ZW1zLycrbGlzdElkO1xuICAgICAgICBsZXQgdXNlckl0ZW1zO1xuXG4gICAgICAgIGF4aW9zLmdldCh1cmwpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICB1c2VySXRlbXMgPSBkYXRhLnVzZXJJdGVtcztcbiAgICAgICAgICAgIGlmKGRhdGEuc3RhdHVzICE9PSAnMScpe1xuICAgICAgICAgICAgICAgIGFsZXJ0KGRhdGEubXNnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXNlckl0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICAgICAgICAgIGxldCBpdGVtTmFtZUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1DYXRlZ29yeUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1XZWlnaHRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgICAgIGxldCBpdGVtVU9NQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgYXNzaWduQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcblxuICAgICAgICAgICAgICAgIGl0ZW1OYW1lQ2VsbC5pbm5lckhUTUwgPSB1c2VySXRlbXNbaV0uaXRlbV9uYW1lO1xuICAgICAgICAgICAgICAgIGl0ZW1DYXRlZ29yeUNlbGwuaW5uZXJIVE1MID0gdXNlckl0ZW1zW2ldLml0ZW1fY2F0ZWdvcnk7XG4gICAgICAgICAgICAgICAgaXRlbVdlaWdodENlbGwuaW5uZXJIVE1MID0gdXNlckl0ZW1zW2ldLml0ZW1fd2VpZ2h0O1xuICAgICAgICAgICAgICAgIGl0ZW1VT01DZWxsLmlubmVySFRNTCA9IHVzZXJJdGVtc1tpXS51b207XG5cblxuICAgICAgICAgICAgICAgIGxldCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgICAgICAgICAgY2hlY2tib3guaWQgPSAnaXRlbUNoZWNrQm94LScraTtcbiAgICAgICAgICAgICAgICBjaGVja2JveC5uYW1lID0gJ2l0ZW1JZHNbXSc7XG4gICAgICAgICAgICAgICAgY2hlY2tib3gudmFsdWUgPSB1c2VySXRlbXNbaV0uaXRlbV9pZDtcbiAgICAgICAgICAgICAgICBhc3NpZ25DZWxsLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblxuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChpdGVtTmFtZUNlbGwpO1xuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChpdGVtQ2F0ZWdvcnlDZWxsKTtcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoaXRlbVdlaWdodENlbGwpO1xuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChpdGVtVU9NQ2VsbCk7XG5cbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoYXNzaWduQ2VsbCk7XG4gICAgICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgdGhpcy53aW5kb3cuYXNzaWduVG9HZWFyTGlzdCA9IGZ1bmN0aW9uIGFzc2lnblRvR2Vhckxpc3QoZWxlbWVudCl7XG4gICAgICAgIGxldCBsaXN0SWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJyk7XG4gICAgICAgIGxldCBpdGVtSWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pdGVtLWlkJyk7XG5cbiAgICAgICAgaWYoIWVsZW1lbnQuY2hlY2tlZCl7XG4gICAgICAgICAgICBsaXN0SWQgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB1cmwgPSAnL2Fzc2lnbi10by1nZWFyLWxpc3QnXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgbGlzdF9pZDogbGlzdElkLFxuICAgICAgICAgICAgaWQ6IGl0ZW1JZFxuICAgICAgICB9O1xuXG5cbiAgICAgICAgYXhpb3MucG9zdCh1cmwsZGF0YSlcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAxKXtcblxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgYWxlcnQocmVzcG9uc2UubXNnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgdGhpcy53aW5kb3cuYWRkTGlzdEl0ZW0gPSBmdW5jdGlvbiBhZGRMaXN0SXRlbShjYXRlZ29yeWNvdW50ZXIgPSBudWxsLCBncm91cENhdGVnb3J5ID0gbnVsbCkge1xuICAgICAgICBsZXQgbnVtYmVyT2ZJdGVtc1RvQWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lc1RvQWRkXCIpO1xuICAgICAgICBsZXQgbGluZXNUb0FkZCA9IDE7XG4gICAgICAgIGxldCBsaXN0Vmlld0lucHV0O1xuICAgICAgICBpZiAobnVtYmVyT2ZJdGVtc1RvQWRkID09PSBudWxsIHx8ICtudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPCAxKSB7XG4gICAgICAgICAgICBudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPSBsaW5lc1RvQWRkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGluZXNUb0FkZCA9ICtudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzVG9BZGQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGxpc3RVT00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbVwiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBmaW5hbElFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaW5hbC1pXCIpO1xuICAgICAgICAgICAgbGV0IGxpc3RCeUl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0QnlJdGVtc1wiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBpdGVtVGFibGU7XG5cbiAgICAgICAgICAgIGlmICgrbGlzdEJ5SXRlbXMgPT0gMSkge1xuICAgICAgICAgICAgICAgIGxpc3RCeUl0ZW1zID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpdGVtVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW0tdGFibGUtYm9keVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGlzdEJ5SXRlbXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsZXQgdGFibGVDYXRlZ29yeSA9IGNhdGVnb3J5Y291bnRlcjtcbiAgICAgICAgICAgICAgICBpdGVtVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgICAgICAgICAgXCJjYXRlZ29yeVRhYmxlLVwiICsgdGFibGVDYXRlZ29yeVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB1c2VySWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJJZFwiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RJZFwiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBmaW5hbEkgPSBmaW5hbElFbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgZmluYWxJRWxlbWVudC52YWx1ZSA9ICtmaW5hbEkgKyAxO1xuXG4gICAgICAgICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICAgICAgcm93LmlkID0gJ3Jvdy0nK2ZpbmFsSTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIGNlbGxzIGFuZCBpbnB1dCBlbGVtZW50cy5cbiAgICAgICAgICAgIGxldCBjZWxsMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgICAgICAgICAgIGNlbGwwLnNjb3BlID0gXCJyb3dcIjtcbiAgICAgICAgICAgIGNlbGwwLmlubmVySFRNTCA9IGZpbmFsSTtcblxuICAgICAgICAgICAgbGV0IGNlbGwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuXG4gICAgICAgICAgICBsZXQgY291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGNvdW50ZXIudHlwZSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICBjb3VudGVyLm5hbWUgPSBcImlkW11cIjtcbiAgICAgICAgICAgIGNvdW50ZXIuaWQgPSBcImlkLVwiICsgZmluYWxJO1xuICAgICAgICAgICAgY291bnRlci52YWx1ZSA9IFwibmV3LVwiICsgZmluYWxJO1xuICAgICAgICAgICAgY291bnRlci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIsIFwiaWRcIik7XG5cbiAgICAgICAgICAgIGxldCBsaXN0Vmlld1R5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBsaXN0Vmlld1R5cGUudHlwZSA9IFwiaGlkZGVuXCI7XG5cbiAgICAgICAgICAgIGxpc3RWaWV3VHlwZS5pZCA9IFwibGlzdFZpZXdUeXBlXCI7XG4gICAgICAgICAgICBsaXN0Vmlld1R5cGUudmFsdWUgPSBsaXN0QnlJdGVtc1xuICAgICAgICAgICAgbGlzdFZpZXdJbnB1dCA9IGxpc3RWaWV3VHlwZTtcblxuICAgICAgICAgICAgbGV0IG5ld1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIG5ld1Jvdy50eXBlID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgIG5ld1Jvdy5pZCA9IFwibmV3Um93LVwiICsgZmluYWxJO1xuICAgICAgICAgICAgbmV3Um93LnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBpdGVtTmFtZSA9IGNyZWF0ZUxpc3RJdGVtSW5wdXQoXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgXCJpdGVtTmFtZVwiLFxuICAgICAgICAgICAgICAgIGZpbmFsSSxcbiAgICAgICAgICAgICAgICBcIml0ZW1fbmFtZVwiXG5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpdGVtTmFtZS5wbGFjZWhvbGRlciA9IFwiSXRlbSBOYW1lXCI7XG4gICAgICAgICAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBjZWxsNi5pZCA9IFwiYnRuLXRkLVwiICsgZmluYWxJO1xuICAgICAgICAgICAgbGV0IGRlbGV0ZUJ0biA9IGNyZWF0ZURlbGV0ZUJ1dHRvbihmaW5hbEkpO1xuICAgICAgICAgICAgbGV0IGNlbGwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuXG4gICAgICAgICAgICBsZXQgaXRlbVdlaWdodCA9IGNyZWF0ZUxpc3RJdGVtSW5wdXQoXG4gICAgICAgICAgICAgICAgXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICBcIml0ZW1XZWlnaHRcIixcbiAgICAgICAgICAgICAgICBmaW5hbEksXG4gICAgICAgICAgICAgICAgXCJpdGVtX3dlaWdodFwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaXRlbVdlaWdodC52YWx1ZSA9IDA7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJmb3Itd2VpZ2h0XCIpO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWlucHV0XCIpO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xuICAgICAgICAgICAgY2VsbDIuY2xhc3NMaXN0LmFkZChcIm51bWJlci1jb2xcIik7XG5cbiAgICAgICAgICAgIGxldCBjZWxsMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGxldCBsaW5lVW9tQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGNlbGwzLmNsYXNzTGlzdC5hZGQoXCJ1b20tdGRcIik7XG4gICAgICAgICAgICBsaW5lVW9tQ2VsbC5jbGFzc0xpc3QuYWRkKFwidW9tLXRkXCIpO1xuICAgICAgICAgICAgbGV0IHJvd1VvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIHJvd1VvbS50eXBlID0gJ2hpZGRlbic7XG4gICAgICAgICAgICByb3dVb20uaWQgPSBcInVvbS1cIiArIGZpbmFsSTtcblxuXG4gICAgICAgICAgICBsZXQgIHJhZGlvMSA9IGNyZWF0ZVJhZGlvKFwiaW5fb3VuY2VzXCIsIFwiXCIsIFwib3pcIiwgZmluYWxJKTtcbiAgICAgICAgICAgIGxldCByYWRpb0xhYmVsMSA9IGNyZWF0ZUxhYmVsKFxuICAgICAgICAgICAgICAgIFwiT1pcIixcbiAgICAgICAgICAgICAgICBcInVvbS1vei1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgICAgICBcIm96XCIsXG4gICAgICAgICAgICAgICAgZmluYWxJXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbGV0IHJhZGlvMiA9IGNyZWF0ZVJhZGlvKFwiaW5fbGJzXCIsIFwiXCIsIFwibGJzXCIsIGZpbmFsSSk7XG4gICAgICAgICAgICBsZXQgcmFkaW9MYWJlbDIgPSBjcmVhdGVMYWJlbChcbiAgICAgICAgICAgICAgICBcIkxCU1wiLFxuICAgICAgICAgICAgICAgIFwidW9tLWxicy1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgICAgICBcImxic1wiLFxuICAgICAgICAgICAgICAgIGZpbmFsSVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxldCAgIHJhZGlvMyA9IGNyZWF0ZVJhZGlvKFwiaW5fZ3JhbXNcIiwgXCJcIiwgXCJncmFtXCIsIGZpbmFsSSk7XG4gICAgICAgICAgICBsZXQgcmFkaW9MYWJlbDMgPSBjcmVhdGVMYWJlbChcbiAgICAgICAgICAgICAgICBcIkdcIixcbiAgICAgICAgICAgICAgICBcInVvbS1ncmFtLVwiICsgZmluYWxJLFxuICAgICAgICAgICAgICAgIFwiZ3JhbVwiLFxuICAgICAgICAgICAgICAgIGZpbmFsSVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxldCByYWRpbzQgPSBjcmVhdGVSYWRpbyhcImluX2tpbG9zXCIsIFwiXCIsIFwia2dcIiwgZmluYWxJKTtcbiAgICAgICAgICAgIGxldCByYWRpb0xhYmVsNCA9IGNyZWF0ZUxhYmVsKFxuICAgICAgICAgICAgICAgIFwiS0dcIixcbiAgICAgICAgICAgICAgICBcInVvbS1rZy1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgICAgICBcImtnXCIsXG4gICAgICAgICAgICAgICAgZmluYWxJXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbGV0IHJhZGlvTGFiZWw1O1xuXG4gICAgICAgICAgICBpZiAobGlzdFVPTSA9PT0gXCJ1c1wiKSB7XG4gICAgICAgICAgICAgICAgcm93VW9tLnZhbHVlID0gXCJ1c1wiO1xuICAgICAgICAgICAgICAgIHJhZGlvMS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByYWRpb0xhYmVsNSA9IGNyZWF0ZUxhYmVsKFxuICAgICAgICAgICAgICAgICAgICBcIk9aXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidW9tLW96LVwiICsgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICBcIm96XCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsSSxcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvd1VvbS52YWx1ZSA9IFwibWV0cmljXCI7XG4gICAgICAgICAgICAgICAgcmFkaW8zLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJhZGlvTGFiZWw1ID0gY3JlYXRlTGFiZWwoXG4gICAgICAgICAgICAgICAgICAgIFwiR1wiLFxuICAgICAgICAgICAgICAgICAgICBcInVvbS1ncmFtLVwiICsgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICBcImdyYW1cIixcbiAgICAgICAgICAgICAgICAgICAgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGNlbGw0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgY2VsbDQuY2xhc3NMaXN0LmFkZChcIm51bWJlci1jb2xcIik7XG4gICAgICAgICAgICBsZXQgcGFja2VkQW1vdW50ID0gY3JlYXRlTGlzdEl0ZW1JbnB1dChcbiAgICAgICAgICAgICAgICBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIFwicGFja2VkQW1vdW50XCIsXG4gICAgICAgICAgICAgICAgZmluYWxJLFxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCJcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHBhY2tlZEFtb3VudC52YWx1ZSA9IDE7XG5cbiAgICAgICAgICAgIHBhY2tlZEFtb3VudC5jbGFzc0xpc3QuYWRkKFwiZm9yLXdlaWdodFwiKTtcbiAgICAgICAgICAgIHBhY2tlZEFtb3VudC5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWlucHV0XCIpO1xuICAgICAgICAgICAgcGFja2VkQW1vdW50LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRyb2xcIik7XG5cbiAgICAgICAgICAgIGxldCBjZWxsNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGNlbGw1LmNsYXNzTGlzdC5hZGQoXCJudW1iZXItY29sXCIpO1xuICAgICAgICAgICAgbGV0IHRvdGFsTGluZVdlaWdodCA9IGNyZWF0ZUxpc3RJdGVtSW5wdXQoXG4gICAgICAgICAgICAgICAgXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICBcInRvdGFsTGluZVdlaWdodFwiLFxuICAgICAgICAgICAgICAgIGZpbmFsSSxcbiAgICAgICAgICAgICAgICBcInRvdGFsX2xpbmVfd2VpZ2h0XCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQudmFsdWUgPSAwO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgICBcImRhdGEtY29sdW1uLW5hbWVcIixcbiAgICAgICAgICAgICAgICBcInRvdGFsX2xpbmVfd2VpZ2h0XCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQuc2V0QXR0cmlidXRlKFwicmVhZG9ubHlcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQuY2xhc3NMaXN0LmFkZChcIm51bWJlci1pbnB1dFwiKTtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJmb3ItdG90YWwtbGlzdC13ZWlnaHRcIik7XG5cbiAgICAgICAgICAgIC8vYXBwZW5kIGlucHV0cyB0byBjZWxscy5cbiAgICAgICAgICAgIGxldCBpY29uQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcblxuICAgICAgICAgICAgbGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgICAgICBpY29uLmNsYXNzTmFtZSA9ICdmYXMgZmEtZ3JpcC12ZXJ0aWNhbCc7XG4gICAgICAgICAgICBpY29uQ2VsbC5hcHBlbmRDaGlsZChpY29uKTtcblxuICAgICAgICAgICAgY2VsbDEuYXBwZW5kQ2hpbGQoY291bnRlcik7XG4gICAgICAgICAgICBjZWxsMS5hcHBlbmRDaGlsZChuZXdSb3cpO1xuICAgICAgICAgICAgY2VsbDEuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgICAgICAgICAgY2VsbDIuYXBwZW5kQ2hpbGQoaXRlbVdlaWdodCk7XG5cbiAgICAgICAgICAgIGxldCBzZWxlY3RDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgbGV0IGNhdGVnb3J5U2VsZWN0ID0gZ2V0Q2F0ZWdyb3lTZWxlY3QoZmluYWxJLCBncm91cENhdGVnb3J5KTtcblxuICAgICAgICAgICAgc2VsZWN0Q2VsbC5hcHBlbmQoY2F0ZWdvcnlTZWxlY3QpO1xuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQocm93VW9tKTtcbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHJhZGlvMSk7XG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChyYWRpb0xhYmVsMSk7XG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChyYWRpbzIpO1xuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbDIpO1xuXG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChyYWRpbzMpO1xuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbDMpO1xuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQocmFkaW80KTtcbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHJhZGlvTGFiZWw0KTtcblxuXG5cbiAgICAgICAgICAgIGNlbGw0LmFwcGVuZENoaWxkKHBhY2tlZEFtb3VudCk7XG4gICAgICAgICAgICBjZWxsNS5hcHBlbmRDaGlsZCh0b3RhbExpbmVXZWlnaHQpO1xuICAgICAgICAgICAgbGluZVVvbUNlbGwuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbDUpO1xuICAgICAgICAgICAgY2VsbDYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIGNlbGxzIHRvIHRoZSByb3cuXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoaWNvbkNlbGwpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwxKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChzZWxlY3RDZWxsKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsMyk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDIpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGw0KTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsNSk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQobGluZVVvbUNlbGwpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGw2KTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSByb3cgdG8gdGhlIHRhYmxlLlxuICAgICAgICAgICAgaXRlbVRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgICAgICAvL2FkZCBmdW5jdGlvbnMgdG8gY2FsY3VsYXRlIGFuZCBjb252ZXJ0IHRvdGFsIHdlaWdodC5cbiAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXJXZWlnaHRDYWxjKGZpbmFsSSk7XG4gICAgICAgIH1cbiAgICAgICAgbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlID0gMTtcblxuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdlYXItaXRlbXMtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0Vmlld0lucHV0KTtcbiAgICB9O1xuXG4gICAgdGhpcy53aW5kb3cudXBkYXRlVU9NID0gZnVuY3Rpb24gdXBkYXRlVU9NKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gXCJ1c1wiKSB7XG4gICAgICAgICAgICB1c1JhZGlvVG9NZXRyaWMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1ldHJpY1JhZGlvVG9VcygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyV2VpZ2h0Q2FsYyhyb3cpIHtcbiAgICAgICAgbGV0IG5lZWRlZEZvcldlaWdodHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvci13ZWlnaHRcIik7XG4gICAgICAgIG5lZWRlZEZvcldlaWdodHMuZm9yRWFjaChmdW5jdGlvbiAobmVlZGVkRm9yV2VpZ2h0KSB7XG4gICAgICAgICAgICBuZWVkZWRGb3JXZWlnaHQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZ2V0TGluZVRvdGFsV2VpZ2h0KHJvdyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy53aW5kb3cuZ2V0TGluZVRvdGFsV2VpZ2h0ID0gZnVuY3Rpb24gZ2V0TGluZVRvdGFsV2VpZ2h0KFxuICAgICAgICByb3csXG4gICAgICAgIGNvbnZlcnQgPSBmYWxzZVxuICAgICkge1xuICAgICAgICBsZXQgd2VpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtV2VpZ2h0LVwiICsgcm93KS52YWx1ZTtcbiAgICAgICAgbGV0IHBhY2tlZEFtb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFja2VkQW1vdW50LVwiICsgcm93KS52YWx1ZTtcbiAgICAgICAgbGV0IHVvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tXCIpO1xuICAgICAgICBsZXQgbGluZVRvdGFsV2VpZ2h0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgICAgXCJ0b3RhbExpbmVXZWlnaHQtXCIgKyByb3dcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgbGluZVRvdGFsID0gMDtcbiAgICAgICAgbGluZVRvdGFsID0gK3dlaWdodCAqICtwYWNrZWRBbW91bnQ7XG4gICAgICAgIGxpbmVUb3RhbCA9IGxpbmVUb3RhbC50b0ZpeGVkKDMpLnJlcGxhY2UoL1suLF0wMCQvLCBcIlwiKTtcbiAgICAgICAgbGluZVRvdGFsV2VpZ2h0RWxlbWVudC52YWx1ZSA9IGxpbmVUb3RhbDtcblxuICAgICAgICB1cGRhdGVMaXN0SXRlbShsaW5lVG90YWxXZWlnaHRFbGVtZW50KTtcbiAgICB9O1xuXG4gICAgdGhpcy53aW5kb3cudXBkYXRlSXRlbVVPTSA9IGZ1bmN0aW9uIHVwZGF0ZUl0ZW1VT00oXG4gICAgICAgIHJvdyxcbiAgICAgICBlbGVtZW50XG4gICAgKSB7XG5cbiAgICAgICAgaWYgKCFlbGVtZW50IHx8ICEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgZWxlbWVudCBwcm92aWRlZCB0byB1cGRhdGVMaXN0SXRlbS5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdW9tRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB1b20tJHtyb3d9YCk7XG4gICAgICAgIGxldCBpdGVtV2VpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGl0ZW1XZWlnaHQtJHtyb3d9YCkudmFsdWU7XG4gICAgICAgIGxldCBjb2x1bW5OYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sdW1uLW5hbWUnKTtcbiAgICAgICAgbGV0IHVvbSA9IHVvbUVsZW1lbnQudmFsdWU7XG4gICAgICAgIGxldCBpdGVtSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaWQtJHtyb3d9YCkudmFsdWU7XG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBsaW5lLXVvbS1sYWJlbC0ke3Jvd31gKTtcbiAgICAgICAgbGV0IGxhYmVsSFRNTDtcbiAgICAgICAgbGV0IG5ld1VPTTtcbiAgICAgICAgbGV0IHVybCA9ICcvdXBkYXRlLWl0ZW0tdW9tJztcbiAgICAgICAgbGV0IGlzTmV3Um93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5ld1Jvdy0ke3Jvd31gKSA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBuZXdSb3ctJHtyb3d9YCkudmFsdWUgOiBmYWxzZTtcblxuICAgICAgICBpZihpdGVtSWQuc3RhcnRzV2l0aCgnbmV3Jykpe1xuICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZUxpc3RJdGVtKGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoY29sdW1uTmFtZS5lbmRzV2l0aCgnb3VuY2VzJykgfHwgY29sdW1uTmFtZS5lbmRzV2l0aCgnbGJzJykpe1xuICAgICAgICAgICAgbmV3VU9NID0gJ3VzJztcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBuZXdVT00gPSAnbWV0cmljJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkYXRhID0gZ2V0Qm9vbGVhbkRhdGEoY29sdW1uTmFtZSk7XG4gICAgICAgIGRhdGFbJ2lkJ10gPSBpdGVtSWQ7XG4gICAgICAgIGRhdGFbJ25ld1VPTSddID0gbmV3VU9NO1xuICAgICAgICBkYXRhWydpdGVtX3dlaWdodCddID0gaXRlbVdlaWdodDtcbiAgICAgICAgZGF0YVsnaXNOZXdSb3cnXSA9IGlzTmV3Um93O1xuXG4gICAgICAgIGF4aW9zLnBvc3QodXJsLCBkYXRhKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzRGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSByZXNEYXRhLml0ZW07XG5cbiAgICAgICAgICAgIGlmIChyZXNEYXRhLnN0YXR1cyA9PT0gJzEnKSB7XG4gICAgICAgICAgICAgICAgZmxhc2hCb3JkZXIoZWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGl0ZW1XZWlnaHQtJHtyb3d9YCkudmFsdWUgPSBpdGVtWydpdGVtX3dlaWdodCddO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwYWNrZWRBbW91bnQtJHtyb3d9YCkudmFsdWUgPSBpdGVtWydhbW91bnQnXTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdG90YWxMaW5lV2VpZ2h0LSR7cm93fWApLnZhbHVlID0gaXRlbVsndG90YWxfbGluZV93ZWlnaHQnXTtcbiAgICAgICAgICAgICAgICB1b21FbGVtZW50LnZhbHVlID0gbmV3VU9NO1xuICAgICAgICAgICAgICAgIGlmKGl0ZW1bJ2luX291bmNlcyddKXtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxIVE1MID0gXCJPWlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKGl0ZW1bJ2luX2xicyddKXtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxIVE1MID0gXCJMQlNcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihpdGVtWydpbl9ncmFtcyddKXtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxIVE1MID0gXCJHXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoaXRlbVsnaW5fa2lsb3MnXSl7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsSFRNTCA9IFwiS0dcIjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSBsYWJlbEhUTUw7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZmxhc2hCb3JkZXIoZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFsZXJ0KHJlc0RhdGEubXNnIHx8IFwiVXBkYXRlIGZhaWxlZCwgcGxlYXNlIGNoZWNrIHlvdXIgaW5wdXQuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgLy8gRW5oYW5jZWQgZXJyb3IgaGFuZGxpbmdcbiAgICAgICAgICAgIGZsYXNoQm9yZGVyKGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgICAgIGFsZXJ0KFwiRmFpbGVkIHRvIHVwZGF0ZSBsaXN0IGl0ZW0uIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlVwZGF0ZSBlcnJvcjpcIiwgZXJyKTtcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuICAgIHRoaXMud2luZG93LmFkZENhdGVnb3J5R3JvdXAgPSBmdW5jdGlvbiBhZGRDYXRlZ29yeUdyb3VwKGxpc3RJZCxjYXRlZ29yeSwgbGlzdFVPTSwgdXNlcklkKXtcblxuICAgICAgICBsZXQgY29sdW1uTmFtZTtcbiAgICAgICAgaWYobGlzdFVPTSA9PT0gJ3VzJyl7XG4gICAgICAgICAgICBjb2x1bW5OYW1lID0gJ2luX291bmNlcyc7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29sdW1uTmFtZSA9ICdpbl9ncmFtcyc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGF0YSA9IGdldEJvb2xlYW5EYXRhKGNvbHVtbk5hbWUpO1xuICAgICAgICBkYXRhWydsaXN0X2lkJ10gPSBsaXN0SWQ7XG4gICAgICAgIGRhdGFbJ3VzZXJfaWQnXSA9IHVzZXJJZDtcbiAgICAgICAgZGF0YVsnaXRlbV9uYW1lJ10gPSAnJztcbiAgICAgICAgZGF0YVsnaXRlbV93ZWlnaHQnXSA9IDA7XG4gICAgICAgIGRhdGFbJ2Ftb3VudCddID0gMTtcbiAgICAgICAgZGF0YVsnaXRlbV9jYXRlZ29yeSddID0gY2F0ZWdvcnk7XG4gICAgICAgIGRhdGFbJ25ld0NhdGVnb3J5J10gPSB0cnVlO1xuICAgICAgICBsZXQgdXJsID0gJy9saXN0LWl0ZW0nXG5cbiAgICAgICAgYXhpb3NcbiAgICAgICAgLnBvc3QodXJsLCBkYXRhKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICByZXMgPSByZXMuZGF0YTtcbiAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09ICcxJyl7XG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBhbGVydChyZXMubXNnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgZnVuY3Rpb24gZmxhc2hCb3JkZXIoZWxlbWVudCwgaXNTdWNjZXNzKSB7XG4gICAgICAgIGxldCBjb2x1bW5OYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sdW1uLW5hbWUnKTtcbiAgICAgICAgaWYoY29sdW1uTmFtZSAhPT0gJ3RvdGFsX2xpbmVfd2VpZ2h0Jyl7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGlzU3VjY2VzcyA/ICcjQThFNkNGJyA6ICcjRjA4MDgwJztcbiAgICAgICAgICAgIC8vIFNldCBhIHRpbWVvdXQgdG8gcmVtb3ZlIHRoZSBib3JkZXIgYWZ0ZXIgMiBzZWNvbmRzXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xuICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRCb29sZWFuRGF0YShjb2x1bW5OYW1lKSB7XG4gICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgIGRhdGFbXCJpbl9vdW5jZXNcIl0gPSBmYWxzZTtcbiAgICAgICAgZGF0YVtcImluX2xic1wiXSA9IGZhbHNlO1xuICAgICAgICBkYXRhW1wiaW5fZ3JhbXNcIl0gPSBmYWxzZTtcbiAgICAgICAgZGF0YVtcImluX2tpbG9zXCJdID0gZmFsc2U7XG4gICAgICAgIGRhdGFbJ3VvbSddID0gJ3VzJztcbiAgICAgICAgc3dpdGNoIChjb2x1bW5OYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiaW5fb3VuY2VzXCI6XG4gICAgICAgICAgICAgICAgZGF0YVtcImluX291bmNlc1wiXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZGF0YVsndW9tJ10gPSAndXMnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImluX2xic1wiOlxuICAgICAgICAgICAgICAgIGRhdGFbXCJpbl9sYnNcIl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGRhdGFbJ3VvbSddID0gJ3VzJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJpbl9ncmFtc1wiOlxuICAgICAgICAgICAgICAgIGRhdGFbXCJpbl9ncmFtc1wiXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZGF0YVsndW9tJ10gPSAnbWV0cmljJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJpbl9raWxvc1wiOlxuICAgICAgICAgICAgICAgIGRhdGFbXCJpbl9raWxvc1wiXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZGF0YVsndW9tJ10gPSAnbWV0cmljJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgdGhpcy53aW5kb3cudXBkYXRlTGlzdEl0ZW0gPSBmdW5jdGlvbiB1cGRhdGVMaXN0SXRlbShlbGVtZW50KSB7XG4gICAgICAgIC8vIENoZWNraW5nIGlmIGVsZW1lbnQgaXMgYSB2YWxpZCBET00gZWxlbWVudFxuICAgICAgICBpZiAoIWVsZW1lbnQgfHwgIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSW52YWxpZCBlbGVtZW50IHByb3ZpZGVkIHRvIHVwZGF0ZUxpc3RJdGVtLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb2x1bW5OYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIpO1xuICAgICAgICBsZXQgdmFsdWUgPSBlbGVtZW50LnZhbHVlO1xuICAgICAgICBsZXQgaWQgPSBlbGVtZW50LmlkO1xuICAgICAgICBsZXQgaWRBcnIgPSBpZC5zcGxpdChcIi1cIik7XG5cbiAgICAgICAgaWYgKGlkQXJyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgSUQgZm9ybWF0LlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByb3cgPSBpZEFycltpZEFyci5sZW5ndGggLSAxXTtcbiAgICAgICAgbGV0IGl0ZW1JZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWQtXCIgKyByb3cpO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIGl0ZW1JZCBleGlzdHNcbiAgICAgICAgaWYgKCFpdGVtSWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVsZW1lbnQgd2l0aCBJRCAnaWQtJHtyb3d9JyBub3QgZm91bmQuYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXRlbUlkVmFsdWUgPSBpdGVtSWQudmFsdWU7XG4gICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RJZFwiKT8udmFsdWUgfHwgXCJcIjtcbiAgICAgICAgbGV0IHVybCA9IFwiL2xpc3QtaXRlbVwiO1xuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICBsZXQgdXNlcklkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VySWRcIik/LnZhbHVlIHx8IFwiXCI7XG4gICAgICAgIGxldCBjcmVhdGUgPSB0cnVlO1xuICAgICAgICBsZXQgaXNNYXN0ZXJMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzTWFzdGVyJyk/LnZhbHVlID09PSAndHJ1ZSc7XG4gICAgICAgIGxldCB1cGRhdGVDYXRlZ29yeVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RWaWV3VHlwZScpPy52YWx1ZSA9PT0gJ2ZhbHNlJztcbiAgICAgICAgbGV0IGlzTmV3Um93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5ld1Jvdy0ke3Jvd31gKSA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBuZXdSb3ctJHtyb3d9YCkudmFsdWUgOiBmYWxzZTtcbiAgICAgICAgbGV0IHVvbVJhZGlvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9ybS1jaGVjay1pbnB1dFwiKTtcbiAgICAgICAgbGV0IHVvbUVsZW1lbnQ7XG5cbiAgICAgICAgdW9tUmFkaW9zLmZvckVhY2goZnVuY3Rpb24gKHVvbVJhZGlvKSB7XG4gICAgICAgICAgICBpZih1b21SYWRpby50eXBlID09ICdyYWRpbycgJiYgdW9tUmFkaW8uaWQuZW5kc1dpdGgocm93KSAmJiB1b21SYWRpby5jaGVja2VkKXtcbiAgICAgICAgICAgICAgICB1b21FbGVtZW50ID0gdW9tUmFkaW87XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgdW9tQ29sdW1uTmFtZSA9IHVvbUVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4tbmFtZVwiKTtcblxuICAgICAgICBpZiAoY29sdW1uTmFtZS5zdGFydHNXaXRoKFwiaW5fXCIpKSB7XG4gICAgICAgICAgICBkYXRhID0gZ2V0Qm9vbGVhbkRhdGEoY29sdW1uTmFtZSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZGF0YSA9IGdldEJvb2xlYW5EYXRhKHVvbUNvbHVtbk5hbWUpO1xuICAgICAgICAgICAgZGF0YVtjb2x1bW5OYW1lXSA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXNzaWduIGFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBkYXRhIG9iamVjdFxuXG4gICAgICAgIGRhdGFbXCJsaXN0X2lkXCJdID0gbGlzdElkO1xuICAgICAgICBkYXRhW1widXNlcl9pZFwiXSA9IHVzZXJJZDtcbiAgICAgICAgZGF0YVtcImlkXCJdID0gaXRlbUlkVmFsdWU7XG4gICAgICAgIGlmKHVwZGF0ZUNhdGVnb3J5VmFsdWUpe1xuICAgICAgICAgICAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtQ2F0ZWdvcnktJytyb3cpLnZhbHVlO1xuICAgICAgICAgICAgZGF0YVsnaXRlbV9jYXRlZ29yeSddID0gc2VsZWN0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGl0ZW1JZFZhbHVlLnN0YXJ0c1dpdGgoJ25ldycpKSB7XG4gICAgICAgICAgICBjcmVhdGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3JlYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB1cmwgKz0gJy8nICsgaXRlbUlkVmFsdWU7XG4gICAgICAgICAgICBpZiAoaXNNYXN0ZXJMaXN0KSB7XG4gICAgICAgICAgICAgICAgZGF0YVsndXBkYXRlTWFzdGVyJ10gPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc05ld1Jvdykge1xuICAgICAgICAgICAgICAgIGRhdGFbJ2lzTmV3Um93J10gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdkYXRhIGluIHVwZGF0ZTogJysgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAvL1BPU1QgcmVxdWVzdFxuICAgICAgICBheGlvcy5wb3N0KHVybCwgZGF0YSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzRGF0YSA9IHJlcy5kYXRhO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzID09PSAnMScpIHtcbiAgICAgICAgICAgICAgICAgICAgZmxhc2hCb3JkZXIoZWxlbWVudCwgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNyZWF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUlkLnZhbHVlID0gcmVzRGF0YS5uZXdJZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBnZXREZWxldGVCdG5EYXRhKGl0ZW1JZC52YWx1ZSwgcm93KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmbGFzaEJvcmRlcihlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KHJlc0RhdGEubXNnIHx8IFwiVXBkYXRlIGZhaWxlZCwgcGxlYXNlIGNoZWNrIHlvdXIgaW5wdXQuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEVuaGFuY2VkIGVycm9yIGhhbmRsaW5nXG4gICAgICAgICAgICAgICAgZmxhc2hCb3JkZXIoZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiRmFpbGVkIHRvIHVwZGF0ZSBsaXN0IGl0ZW0uIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVcGRhdGUgZXJyb3I6XCIsIGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIWlzTWFzdGVyTGlzdCkge1xuICAgICAgICAgICAgdXBkYXRlVG90YWxMaXN0V2VpZ2h0cygpO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgZnVuY3Rpb24gdXBkYXRlVG90YWxMaXN0V2VpZ2h0cygpIHtcbiAgICAgICAgbGV0IGJhc2VXZWlnaHQgPSAwO1xuICAgICAgICBsZXQgdG90YWxQYWNrV2VpZ2h0ID0gMDtcbiAgICAgICAgbGV0IG1heFBhY2tXZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1heFBhY2tXZWlnaHRcIikudmFsdWU7XG4gICAgICAgIGxldCBjbGFzc1dhcm5pbmdWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGFzc1dhcm5pbmdWYWx1ZScpLnZhbHVlO1xuICAgICAgICBsZXQgdW9tVGV4dCA9IFwiTEJTXCI7XG5cbiAgICAgICAgbGV0IGxpc3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0SWQnKS52YWx1ZTtcbiAgICAgICAgbGV0IHVybCA9IGAvZ2V0LXBhY2stZGF0YS8ke2xpc3RJZH1gO1xuXG4gICAgICAgIGF4aW9zLmdldCh1cmwpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICBsZXQgbGlzdERhdGEgPSBkYXRhLmxpc3REYXRhO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xpc3QgZGF0YSBmb3IgcGFjayB3ZWlnaHRzOiAnKyBKU09OLnN0cmluZ2lmeShsaXN0RGF0YSkpO1xuICAgICAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT09ICcxJyl7XG4gICAgICAgICAgICAgICBiYXNlV2VpZ2h0ID0gbGlzdERhdGFbJ2Jhc2VXZWlnaHQnXTtcbiAgICAgICAgICAgICAgIHRvdGFsUGFja1dlaWdodCA9IGxpc3REYXRhWyd0b3RhbFBhY2tXZWlnaHQnXTtcbiAgICAgICAgICAgICAgIG1heFBhY2tXZWlnaHQgPSBsaXN0RGF0YVsnbWF4UGFja1dlaWdodCddO1xuICAgICAgICAgICAgICAgdW9tVGV4dD0gbGlzdERhdGFbJ3dlaWdodFVvbSddO1xuICAgICAgICAgICAgICAgY2xhc3NXYXJuaW5nVmFsdWUgPWxpc3REYXRhWydjbGFzc1dhcm5pbmdWYWx1ZSddXG5cbiAgICAgICAgICAgICAgIGlmICgrYmFzZVdlaWdodCA+ICttYXhQYWNrV2VpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgbGV0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlaWdodFdhcm5pbmctZGl2XCIpO1xuICAgICAgICAgICAgICAgICAgIGRpdkVsZW1lbnQuaW5uZXJUZXh0ID1cIkJhc2Ugd2VpZ2h0IChcIiArICBiYXNlV2VpZ2h0LnRvRml4ZWQoMykgK1wiIFwiICt1b21UZXh0ICtcIikgZXhjZWVkZXMgdGhlIHdlaWdodCBmb3IgdGhlICdcIiArY2xhc3NXYXJuaW5nVmFsdWUrXCInIHN0eWxlIG9mIGhpa2luZy5cIjtcblxuICAgICAgICAgICAgICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWlnaHRXYXJuaW5nLWRpdlwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFzZVdlaWdodFwiKS52YWx1ZSA9IGJhc2VXZWlnaHQudG9GaXhlZCgzKTtcbiAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG90YWxQYWNrV2VpZ2h0XCIpLnZhbHVlID1cbiAgICAgICAgICAgICAgICAgICB0b3RhbFBhY2tXZWlnaHQudG9GaXhlZCgzKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGFsZXJ0KGRhdGEubXNnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9KTtcblxuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVMaXN0SXRlbUlucHV0KFxuICAgICAgICB0eXBlLFxuICAgICAgICBuYW1lQmFzZSxcbiAgICAgICAgcm93LFxuICAgICAgICBjb2x1bW5OYW1lLFxuICAgICAgICBsaXN0ZW4gPSB0cnVlXG4gICAgKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBlbGVtZW50LnR5cGUgPSB0eXBlO1xuICAgICAgICBlbGVtZW50Lm5hbWUgPSBuYW1lQmFzZSArIFwiW11cIjtcbiAgICAgICAgZWxlbWVudC5pZCA9IG5hbWVCYXNlICsgXCItXCIgKyByb3c7XG4gICAgICAgIGVsZW1lbnQudmFsdWUgPSBcIlwiO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uLW5hbWVcIiwgY29sdW1uTmFtZSk7XG4gICAgICAgIGlmKGxpc3Rlbil7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUxpc3RJdGVtKGVsZW1lbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldENhdGVncm95U2VsZWN0KHJvdywgZ3JvdXBDYXRlZ29yeSA9IG51bGwsIGxpc3RlbiA9IHRydWUpIHtcblxuICAgICAgICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgc2VsZWN0LmlkID0gXCJpdGVtQ2F0ZWdvcnktXCIgKyByb3c7XG4gICAgICAgIHNlbGVjdC5uYW1lID0gXCJpdGVtQ2F0ZWdvcnktXCIgKyByb3c7XG4gICAgICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIsIFwiaXRlbV9jYXRlZ29yeVwiKTtcbiAgICAgICAgc2VsZWN0LmNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCI7XG5cbiAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IFwiXCI7XG4gICAgICAgIG9wdGlvbi50ZXh0ID0gXCJDaG9vc2VcIjtcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIGxldCBvcHRpb25MaXN0O1xuXG4gICAgICAgIG9wdGlvbkxpc3QgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2xpc3QtaXRlbS1jYXRlZ29yaWVzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgZXJyb3JcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cblxuICAgICAgICBvcHRpb25MaXN0KCkudGhlbigoZGF0YSkgPT4ge1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBkYXRhW2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gZGF0YVtpXS5jYXRlZ29yeTtcbiAgICAgICAgICAgICAgICBpZiAoZ3JvdXBDYXRlZ29yeSAhPSBudWxsICYmIGRhdGFbaV0udmFsdWUgPT09IGdyb3VwQ2F0ZWdvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZihsaXN0ZW4pe1xuICAgICAgICAgICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUxpc3RJdGVtKHNlbGVjdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIHNlbGVjdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gbWV0cmljUmFkaW9Ub1VzKCkge1xuICAgICAgICBsZXQgaW5wdXRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWV0cmljLXJhZGlvXCIpO1xuICAgICAgICBpbnB1dEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGlucHV0RWxlbWVudCkge1xuICAgICAgICAgICAgbGV0IGlkQXJyID0gaW5wdXRFbGVtZW50LmlkLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgICAgIGxldCB1b20gPSBpZEFyclsxXTtcbiAgICAgICAgICAgIGxldCByb3cgPSBpZEFycltpZEFyci5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50VHlwZSA9IGlucHV0RWxlbWVudC50eXBlO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRUYWcgPSBpbnB1dEVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICBsZXQgbmV3RWxlbWVudDtcblxuICAgICAgICAgICAgaWYgKGVsZW1lbnRUeXBlID09PSBcInJhZGlvXCIgJiYgdW9tID09PSBcImdyYW1cIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVSYWRpbyhcImluX291bmNlc1wiLCBcIk9aXCIsIFwib3pcIiwgcm93LCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFR5cGUgPT09IFwicmFkaW9cIiAmJiB1b20gPT09IFwia2dcIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVSYWRpbyhcImluX2xic1wiLCBcIkxCU1wiLCBcImxic1wiLCByb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VGFnID09PSBcImxhYmVsXCIgJiYgdW9tID09PSBcImdyYW1cIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVMYWJlbChcIk9aXCIsIFwidW9tLW96LVwiICsgcm93LCBcIm96XCIsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUYWcgPT09IFwibGFiZWxcIiAmJiB1b20gPT09IFwia2dcIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVMYWJlbChcIkxCU1wiLCBcInVvbS1sYnMtXCIgKyByb3csIFwibGJzXCIsIHJvdyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuZXdFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKFxuICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdXNSYWRpb1RvTWV0cmljKCkge1xuICAgICAgICBsZXQgaW5wdXRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudXMtcmFkaW9cIik7XG4gICAgICAgIGlucHV0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXRFbGVtZW50KSB7XG4gICAgICAgICAgICBsZXQgaWRBcnIgPSBpbnB1dEVsZW1lbnQuaWQuc3BsaXQoXCItXCIpO1xuICAgICAgICAgICAgbGV0IHVvbSA9IGlkQXJyWzFdO1xuICAgICAgICAgICAgbGV0IHJvdyA9IGlkQXJyW2lkQXJyLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRUeXBlID0gaW5wdXRFbGVtZW50LnR5cGU7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFRhZyA9IGlucHV0RWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBsZXQgbmV3RWxlbWVudDtcblxuICAgICAgICAgICAgaWYgKGVsZW1lbnRUeXBlID09PSBcInJhZGlvXCIgJiYgdW9tID09PSBcIm96XCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlUmFkaW8oXCJpbl9ncmFtc1wiLCBcIkdSXCIsIFwiZ3JhbVwiLCByb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VHlwZSA9PT0gXCJyYWRpb1wiICYmIHVvbSA9PT0gXCJsYnNcIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVSYWRpbyhcImluX2tpbG9zXCIsIFwiS0dcIiwgXCJrZ1wiLCByb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VGFnID09PSBcImxhYmVsXCIgJiYgdW9tID09PSBcIm96XCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlTGFiZWwoXCJHXCIsIFwidW9tLWdyYW0tXCIgKyByb3csIFwiZ3JhbVwiLCByb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VGFnID09PSBcImxhYmVsXCIgJiYgdW9tID09PSBcImxic1wiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZUxhYmVsKFwiS0dcIiwgXCJ1b20ta2ctXCIgKyByb3csIFwia2dcIiwgcm93KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5ld0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQoXG4gICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVSYWRpbyhkYXRhQ29sdW1uTmFtZSwgbGFiZWwsIHVvbSwgcm93KSB7XG4gICAgICAgIGxldCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgcmFkaW8uY2xhc3NOYW1lID1cbiAgICAgICAgICAgIFwiZm9ybS1jaGVjay1pbnB1dFwiICtcbiAgICAgICAgICAgICh1b20gPT09IFwiZ3JhbVwiIHx8IHVvbSA9PT0gXCJrZ1wiID8gXCIgbWV0cmljLXJhZGlvXCIgOiBcIiB1cy1yYWRpb1wiKTtcbiAgICAgICAgcmFkaW8udHlwZSA9IFwicmFkaW9cIjtcbiAgICAgICAgcmFkaW8ubmFtZSA9IFwidW9tLVwiICsgcm93ICsgXCJbXVwiO1xuICAgICAgICByYWRpby5pZCA9IFwidW9tLVwiICsgdW9tICsgXCItXCIgKyByb3c7XG4gICAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uLW5hbWVcIiwgZGF0YUNvbHVtbk5hbWUpO1xuXG4gICAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdXBkYXRlSXRlbVVPTShyb3csIHJhZGlvKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByYWRpbztcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlTGFiZWwoaW5uZXJIdG1sLCBodG1sRm9yLCB1b20sIHJvdywgbGluZUxhYmVsID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBsYWJlbC5jbGFzc05hbWUgPVxuICAgICAgICAgICAgXCJmb3JtLWNoZWNrLWxhYmVsXCIgK1xuICAgICAgICAgICAgKHVvbSA9PT0gXCJncmFtXCIgfHwgdW9tID09PSBcImtnXCIgPyBcIiBtZXRyaWMtcmFkaW9cIiA6IFwiIHVzLXJhZGlvXCIpO1xuICAgICAgICBsYWJlbC5odG1sRm9yID0gaHRtbEZvcjtcbiAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gaW5uZXJIdG1sO1xuICAgICAgICBpZiAoIWxpbmVMYWJlbCkge1xuICAgICAgICAgICAgbGFiZWwuaWQgPSBcInVvbS1cIiArIHVvbSArIFwiLWxhYmVsLVwiICsgcm93O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGFiZWwuaWQgPSBcImxpbmUtdW9tLWxhYmVsLVwiICsgcm93O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH1cblxuICAgIHRoaXMud2luZG93LnVwZGF0ZUxpc3QgPSBmdW5jdGlvbiB1cGRhdGVMaXN0KGVsZW1lbnQsIGxpc3RJZCkge1xuICAgICAgICBsZXQgY29sdW1uTmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4tbmFtZVwiKTtcbiAgICAgICAgbGV0IHZhbHVlID0gZWxlbWVudC52YWx1ZTtcbiAgICAgICAgbGV0IHVybCA9IFwiL2dlYXItbGlzdC9cIiArIGxpc3RJZDtcblxuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICBkYXRhW2NvbHVtbk5hbWVdID0gdmFsdWU7XG5cbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC5wb3N0KHVybCwgZGF0YSwgbGlzdElkKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLnN0YXR1cyA9PT0gJzEnKXtcbiAgICAgICAgICAgICAgICAgICAgZmxhc2hCb3JkZXIoZWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGZsYXNoQm9yZGVyKGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQocmVzLmRhdGEubXNnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gYWxlcnQocmVzLmRhdGEubXNnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiRmFpbGVkIHRvIHVwZGF0ZSBsaXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBpZiAoY29sdW1uTmFtZSA9PT0gXCJzb3J0XCIgfHwgY29sdW1uTmFtZSA9PT0gXCJsaXN0X2NsYXNzXCIgfHwgY29sdW1uTmFtZSA9PT0gJ2xpc3RfaXRlbXMnKSB7XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoZWFkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtLWNvbGxhcHNpYmxlLWhlYWRlclwiKTtcblxuICAgIGhlYWRlcnMuZm9yRWFjaCgoaGVhZGVyKSA9PiB7XG4gICAgICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGhlYWRlci5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICBjb25zdCBhcnJvdyA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKFwiLml0ZW0tYXJyb3dcIik7XG4gICAgICAgICAgICBpZiAoY29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJvcGVuXCIpKSB7XG4gICAgICAgICAgICAgICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IG51bGw7XG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5wYWRkaW5nID0gXCIwIDEwcHhcIjtcbiAgICAgICAgICAgICAgICBhcnJvdy5pbm5lckhUTUwgPSBcIiYjOTY2MFwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5wYWRkaW5nID0gXCIxMHB4XCI7XG4gICAgICAgICAgICAgICAgYXJyb3cuaW5uZXJIVE1MID0gXCImIzk2NTBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBsZXQgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNtYXN0ZXItaXRlbS10YWJsZSBpbnB1dFwiKTtcblxuICAgIGlucHV0cy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICBpbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSk7XG5cbiAgICBsZXQgbGlzdENoYXJ0YnRuID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdENoYXJ0QnRuXCIpO1xuICAgIGlmKGxpc3RDaGFydGJ0biAhPT0gbnVsbCl7XG4gICAgICAgIGRvY3VtZW50IC5nZXRFbGVtZW50QnlJZChcImxpc3RDaGFydEJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IGxpc3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdElkXCIpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IHVybCA9IFwiL2dlYXItbGlzdC1hbmFseXRpY3MvXCIgKyBsaXN0SWQ7XG5cbiAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgLmdldCh1cmwpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2hhcnRTdGF0dXMgPSBDaGFydC5nZXRDaGFydChcImdlYXJDaGFydFwiKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhcnRTdGF0dXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFydFN0YXR1cy5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdlYXJDaGFydFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoYXJ0RGF0YSA9IEpTT04ucGFyc2UocmVzLmRhdGEuY2hhcnREYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZG91Z2hudXRcIiwgLy8gQ2hhcnQgdHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsczogY2hhcnREYXRhLmxhYmVscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsYWJlbDogbGlzdE5hbWUgKyAnQnJlYWsgRG93bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBjaGFydERhdGEud2VpZ2h0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY2hhcnREYXRhLmNvbG9ycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJPZmZzZXQ6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXRvdXQ6IDQ1LCAvLyBBZGp1c3QgdGhlIGN1dG91dCBwZXJjZW50YWdlIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM6IDE1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFsYWJlbHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVSb3RhdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVTY2FsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgYmFzZVdlaWdodCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2VXZWlnaHRcIikudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0b3RhbFBhY2tXZWlnaHQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3RhbFBhY2tXZWlnaHRcIikudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxCYXNlV2VpZ2h0XCIpLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VXZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxUb3RhbFdlaWdodFwiKS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFBhY2tXZWlnaHQ7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgIH1cbiAgICB0aGlzLndpbmRvdy5zaG93Q29udnJzaW9uQWxlcnQgPSBmdW5jdGlvbiBzaG93Q29udnJzaW9uQWxlcnQoKXtcbiAgICAgICAgYWxlcnQoJ0NoYW5naW5nIHRoaXMgdmFsdWUgd2lsbCBhbHNvIHVwZGF0ZSB0aGUgdW5pdHMgb2YgbWVhc3VyZSBhbmQgYXNzb2NpYXRlZCB2YWx1ZXMgZm9yIGFueSBpdGVtIG9uIHRoaXMgZ2VhciBsaXN0LicpO1xuICAgIH1cbiAgICB0aGlzLndpbmRvdy5jb25maXJtRGVsZXRlID0gZnVuY3Rpb24gY29uZmlybURlbGV0ZShlbGVtZW50KSB7XG5cbiAgICAgICAgLy8gbGV0IGlzTWFzdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzTWFzdGVyJykudmFsdWU7XG4gICAgICAgIGxldCBpc01hc3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpc01hc3RlcicpPy52YWx1ZSA9PT0gJ3RydWUnO1xuICAgICAgICBsZXQgaHJlZiA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWhyZWYnKTtcbiAgICAgICAgbGV0IG5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vYmplY3QtbmFtZScpO1xuICAgICAgICBsZXQgb2JqZWN0VHlwZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9iamVjdC10eXBlJyk7XG4gICAgICAgIGxldCBhbmNob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlT2JqZWN0QW5jaG9yJyk7XG4gICAgICAgIGxldCBtb2RhbEJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlTW9kYWxCb2R5Jyk7XG4gICAgICAgIGxldCB0ZXh0ID0gYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgJHtvYmplY3RUeXBlfSAke25hbWV9P2A7XG4gICAgICAgIGxldCBoZWxwZXJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlSGVscGVyJyk7XG4gICAgICAgIGxldCBoZWxwdGV4dDtcbiAgICAgICAgaGVscGVyRGl2LmlubmVyVGV4dCA9ICcnO1xuXG4gICAgICAgIGlmKG9iamVjdFR5cGUgPT09ICdpdGVtOicgJiYgaXNNYXN0ZXIgPT09ICdmYWxzZScpe1xuICAgICAgICAgICAgbGV0IGxpc3ROYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1uYW1lJyk7XG4gICAgICAgICAgICBoZWxwdGV4dCA9IGAqRGVsZXRpbmcgYW4gaXRlbSBmcm9tIHRoaXMgbGlzdCAoJHtsaXN0TmFtZX0pIHdpbGwgbm90IGRlbGV0ZSBpdCB0aGUgJ1lvdXIgR2Vhcicgc2VjdGlvbi5gO1xuICAgICAgICAgICAgaGVscGVyRGl2LmFwcGVuZChoZWxwdGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihvYmplY3RUeXBlID09PSAnaXRlbTonICYmIGlzTWFzdGVyID09PSAndHJ1ZScpe1xuICAgICAgICAgICAgaGVscHRleHQgPSBgKkRlbGV0aW5nIGFuIGl0ZW0gZnJvbSB0aGUgJ1lvdXIgR2Vhcicgc2VjdGlvbiB3aWxsIGRlbGV0ZSBpdCBmcm9tIGFsbCAnR2VhciBMaXN0cycuYDtcbiAgICAgICAgICAgIGhlbHBlckRpdi5hcHBlbmQoaGVscHRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYob2JqZWN0VHlwZSA9PT0gJ2NhdGVnb3J5OicgJiYgaXNNYXN0ZXIgPT09J2ZhbHNlJyl7XG4gICAgICAgICAgICB0ZXh0ID0gYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgYWxsIGl0ZW1zIGluIHRoZSAke25hbWV9IGNhdGVnb3J5IGZyb20gdGhpcyBsaXN0P2A7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihvYmplY3RUeXBlID09PSAnY2F0ZWdvcnk6JyAmJiBpc01hc3RlciA9PT0ndHJ1ZScpe1xuICAgICAgICAgICAgdGV4dCA9IGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIGFsbCBpdGVtcyBpbiB0aGUgJHtuYW1lfSBjYXRlZ29yeSBmcm9tIEFMTCB5b3VyIGxpc3RzP2A7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihvYmplY3RUeXBlID09PSAnbGlzdDonICl7XG4gICAgICAgICAgICB0ZXh0ID0gYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhlICR7bmFtZX0gbGlzdD9gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBoZWxwZXJEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgICAgICBtb2RhbEJvZHkuaW5uZXJIVE1MID0gdGV4dDtcbiAgICAgICAgYW5jaG9yLnNldEF0dHJpYnV0ZSgnaHJlZicsaHJlZik7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVSb3cocm93KXtcblxuICAgICAgICBsZXQgdGFibGVSb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcm93LSR7cm93fWApXG4gICAgICAgICAgICB0YWJsZVJvdy5yZW1vdmUoKTtcblxuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVEZWxldGVCdXR0b24ocm93KSB7XG4gICAgICAgIGxldCBpc01hc3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpc01hc3RlcicpLnZhbHVlO1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLXNtIGJ0bi1kYW5nZXInO1xuICAgICAgICBidXR0b24udGl0bGUgPSAnRGVsZXRlIEl0ZW0nO1xuICAgICAgICBidXR0b24uaWQgPWBkZWxldGVJdGVtQnRuLSR7cm93fWA7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaHJlZicsJycpO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLW9iamVjdC1uYW1lJywnJyk7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtb2JqZWN0LWlkJywnJyk7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtb2JqZWN0LXR5cGUnLCdpdGVtOicpO1xuICAgICAgICBpZihpc01hc3RlciA9PT0gJ2ZhbHNlJyl7XG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtbmFtZScsZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3ROYW1lJykudmFsdWUpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1uYW1lJywnbWFzdGVyJyk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgIGljb24uY2xhc3NOYW1lID0gJ2ZhcyBmYS10cmFzaCc7XG5cbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmVtb3ZlUm93KHJvdyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREZWxldGVCdG5EYXRhKGlkLHJvdyl7XG4gICAgICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGVsZXRlSXRlbUJ0bi0ke3Jvd31gKTtcbiAgICAgICAgbGV0IHVybCA9IGAvbGlzdC1pdGVtLyR7aWR9YDtcblxuICAgICAgICBheGlvc1xuICAgICAgICAuZ2V0KHVybClcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cyAhPSBcIjFcIikge1xuICAgICAgICAgICAgICAgIGFsZXJ0KHJlcy5kYXRhLm1zZyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHJlcy5kYXRhLml0ZW07XG4gICAgICAgICAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWhyZWYnLGAvcmVtb3ZlLWxpc3QtaXRlbS8ke2l0ZW0uaWR9YCk7XG4gICAgICAgICAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLW9iamVjdC1uYW1lJyxpdGVtLml0ZW1fbmFtZSk7XG4gICAgICAgICAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLW9iamVjdC1pZCcsaXRlbS5pZCk7XG4gICAgICAgICAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRvZ2dsZScsXCJtb2RhbFwiKVxuICAgICAgICAgICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1icy10YXJnZXQnLFwiI2RlbGV0ZUFsZXJ0TW9kYWxcIik7XG4gICAgICAgICAgICBkZWxldGVCdG4ub25jbGljayA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgY29uZmlybURlbGV0ZShkZWxldGVCdG4pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICB9KTtcblxuXG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zb3J0YWJsZVwiKS5mb3JFYWNoKGZ1bmN0aW9uICh0YWJsZSkge1xuICAgICAgICBjb25zdCBjYXRlZ29yeUlkID0gdGFibGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1jYXRlZ29yeS1pZFwiKTtcblxuICAgICAgICBuZXcgU29ydGFibGUodGFibGUucXVlcnlTZWxlY3RvcihcInRib2R5XCIpLCB7XG4gICAgICAgICAgICBhbmltYXRpb246IDE1MCxcbiAgICAgICAgICAgIG9uRW5kOiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBuZXcgb3JkZXIgb2YgaXRlbXNcbiAgICAgICAgICAgICAgICBjb25zdCBvcmRlcmVkSWRzID0gW107XG4gICAgICAgICAgICAgICAgdGFibGUucXVlcnlTZWxlY3RvckFsbChcInRyXCIpLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgICAgICAgICAgICBvcmRlcmVkSWRzLnB1c2gocm93LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gU2VuZCB0aGUgbmV3IG9yZGVyIHRvIHRoZSBzZXJ2ZXIgdmlhIEFKQVhcbiAgICAgICAgICAgICAgICB1cGRhdGVJdGVtT3JkZXIoY2F0ZWdvcnlJZCwgb3JkZXJlZElkcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiB1cGRhdGVJdGVtT3JkZXIoY2F0ZWdvcnlJZCwgb3JkZXJlZElkcykge1xuXG4gICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RJZFwiKS52YWx1ZTtcblxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgXCJYLUNTUkYtVE9LRU5cIjogZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpXG4gICAgICAgICAgICAgICAgLmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIiksXG4gICAgICAgICAgICBjYXRlZ29yeV9pZDogY2F0ZWdvcnlJZCxcbiAgICAgICAgICAgIG9yZGVyZWRfaWRzOiBvcmRlcmVkSWRzLFxuICAgICAgICAgICAgbGlzdF9pZDogbGlzdElkLFxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCB1cmwgPSBcIi91cGRhdGUtbGlzdC1vcmRlclwiO1xuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QodXJsLCBkYXRhKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgIT0gXCIxXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQocmVzLmRhdGEubXNnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHNvcnRpbmdTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnRCeVwiKTtcbiAgICAgICAgbGV0IG9wdHMgPSBzb3J0aW5nU2VsZWN0Lm9wdGlvbnMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdHM7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNvcnRpbmdTZWxlY3Qub3B0aW9uc1tpXS52YWx1ZSA9PSBcImRyYWdfZHJvcFwiKSB7XG4gICAgICAgICAgICAgICAgc29ydGluZ1NlbGVjdC5vcHRpb25zW2ldLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBwYXJlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFyZW50LWNvbnRhaW5lcicpO1xuXG4gICAgaWYocGFyZW50Q29udGFpbmVyICE9PSBudWxsICYmIHBhcmVudENvbnRhaW5lciAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgU29ydGFibGUuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJlbnQtY29udGFpbmVyJyksIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogMTUwLFxuICAgICAgICAgICAgaGFuZGxlOiAnLml0ZW0tY29sbGFwc2libGUtaGVhZGVyJyxcbiAgICAgICAgICAgIGdob3N0Q2xhc3M6ICdzb3J0YWJsZS1naG9zdCcsXG4gICAgICAgICAgICBvbkVuZDogZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgICAgIC8vIEFmdGVyIHNvcnRpbmcgaXMgY29tcGxldGVkLCB1cGRhdGUgdGhlIHBvc2l0aW9ucyBpbiB0aGUgZGF0YWJhc2VcbiAgICAgICAgICAgICAgICB1cGRhdGVDYXRlZ29yeU9yZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVDYXRlZ29yeU9yZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IG5ld09yZGVyID0gW107XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcmFnZ2FibGUtY29udGFpbmVyJykuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcblxuICAgICAgICAgICAgbmV3T3JkZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgaXRlbV9jYXRlZ29yeTogaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2F0ZWdvcnktdmFsdWUnKSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeV9vcmRlcjogaW5kZXhcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHVybCA9IFwiL3VwZGF0ZS1jYXRlcm9ncnktb3JkZXJcIjtcbiAgICAgICAgbGV0IGxpc3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdElkXCIpLnZhbHVlO1xuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBcIlgtQ1NSRi1UT0tFTlwiOiBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJylcbiAgICAgICAgICAgICAgICAuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKSxcbiAgICAgICAgICAgIGNhdGVnb3J5X29yZGVyOiBuZXdPcmRlcixcbiAgICAgICAgICAgIGxpc3RfaWQ6IGxpc3RJZCxcbiAgICAgICAgfTtcbiAgICAgICAgLy9icmVhayBvdXQgcG9zdHMgYW5kIGdldCBjYWxscyB0byBvd24gZnVuY3Rpb25zXG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdCh1cmwsIGRhdGEpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzICE9IFwiMVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KHJlcy5kYXRhLm1zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgbGV0IGFzc2lnblRvTGlzdE1vZGFsID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBc3NpZ25JdGVtVG9MaXN0TW9kYWwnKTtcblxuICAgIGlmKGFzc2lnblRvTGlzdE1vZGFsICE9PSB1bmRlZmluZWQgJiYgYXNzaWduVG9MaXN0TW9kYWwgIT09IG51bGwpe1xuXG4gICAgICAgIGFzc2lnblRvTGlzdE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2hpZGUuYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgdGFibGVCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWFzc2lnbi1pdGVtLXRhYmxlLWJvZHknKTtcbiAgICAgICAgICAgIHdoaWxlKHRhYmxlQm9keS5maXJzdENoaWxkKXtcbiAgICAgICAgICAgICAgICB0YWJsZUJvZHkucmVtb3ZlQ2hpbGQodGFibGVCb2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG59KTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG53aW5kb3cuYXhpb3MgPSBheGlvcztcblxud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJNb2RhbCIsIkNoYXJ0IiwiU29ydGFibGUiLCJib290c3RyYXAiLCJyZXF1aXJlIiwiZ3JhbUNvbnZlcnRlciIsIm91bmNlQ29udmVydGVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3dQYXNzd29yZCIsImlkIiwicGFzc3dvcmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkTWFzdGVyTGlzdEl0ZW0iLCJudW1iZXJPZkl0ZW1zVG9BZGQiLCJsaW5lc1RvQWRkIiwibGlzdEJ5SXRlbXMiLCJsaXN0ZW4iLCJpdGVtVGFibGUiLCJyb3ciLCJjcmVhdGVFbGVtZW50IiwiY2VsbDEiLCJpdGVtTmFtZSIsImNyZWF0ZUxpc3RJdGVtSW5wdXQiLCJwbGFjZWhvbGRlciIsImNsYXNzTGlzdCIsImFkZCIsImNlbGw2IiwiZGVsZXRlQnRuIiwiY3JlYXRlRGVsZXRlQnV0dG9uIiwiY2VsbDIiLCJpdGVtV2VpZ2h0Iiwic2V0QXR0cmlidXRlIiwiY2VsbDMiLCJzZWxlY3QiLCJjbGFzc05hbWUiLCJvek9wdGlvbiIsImxic09wdGlvbiIsImdyT3B0aW9uIiwia2dPcHRpb24iLCJ0ZXh0IiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3RDZWxsIiwiY2F0ZWdvcnlTZWxlY3QiLCJnZXRDYXRlZ3JveVNlbGVjdCIsImFwcGVuZCIsInNob3dMaXN0QXNzaWduTW9kYWwiLCJpdGVtSWQiLCJ0YWJsZSIsImhlYWRlciIsImlubmVySFRNTCIsInVybCIsInVzZXJMaXN0cyIsImF4aW9zIiwiZ2V0IiwicmVzIiwiZGF0YSIsInN0YXR1cyIsImFsZXJ0IiwibXNnIiwibGlzdE5hbWVDZWxsIiwiYXNzaWduQ2VsbCIsImNoZWNrYm94IiwiaXRlbUFzc2lnbmVkIiwiY2hlY2tlZCIsInNob3dHZWFyQXNzaWduTW9kYWwiLCJsaXN0SWQiLCJ1c2VySXRlbXMiLCJpdGVtTmFtZUNlbGwiLCJpdGVtQ2F0ZWdvcnlDZWxsIiwiaXRlbVdlaWdodENlbGwiLCJpdGVtVU9NQ2VsbCIsIml0ZW1fbmFtZSIsIml0ZW1fY2F0ZWdvcnkiLCJpdGVtX3dlaWdodCIsInVvbSIsIml0ZW1faWQiLCJhc3NpZ25Ub0dlYXJMaXN0IiwiZWxlbWVudCIsImdldEF0dHJpYnV0ZSIsImxpc3RfaWQiLCJwb3N0IiwicmVzcG9uc2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJhZGRMaXN0SXRlbSIsImNhdGVnb3J5Y291bnRlciIsInVuZGVmaW5lZCIsImdyb3VwQ2F0ZWdvcnkiLCJsaXN0Vmlld0lucHV0IiwibGlzdFVPTSIsImZpbmFsSUVsZW1lbnQiLCJ0YWJsZUNhdGVnb3J5IiwidXNlcklkIiwiZmluYWxJIiwiY2VsbDAiLCJzY29wZSIsImNvdW50ZXIiLCJsaXN0Vmlld1R5cGUiLCJuZXdSb3ciLCJsaW5lVW9tQ2VsbCIsInJvd1VvbSIsInJhZGlvMSIsImNyZWF0ZVJhZGlvIiwicmFkaW9MYWJlbDEiLCJjcmVhdGVMYWJlbCIsInJhZGlvMiIsInJhZGlvTGFiZWwyIiwicmFkaW8zIiwicmFkaW9MYWJlbDMiLCJyYWRpbzQiLCJyYWRpb0xhYmVsNCIsInJhZGlvTGFiZWw1IiwiY2VsbDQiLCJwYWNrZWRBbW91bnQiLCJjZWxsNSIsInRvdGFsTGluZVdlaWdodCIsImljb25DZWxsIiwiaWNvbiIsImFkZEV2ZW50TGlzdGVuZXJXZWlnaHRDYWxjIiwiY29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsInVwZGF0ZVVPTSIsInVzUmFkaW9Ub01ldHJpYyIsIm1ldHJpY1JhZGlvVG9VcyIsIm5lZWRlZEZvcldlaWdodHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibmVlZGVkRm9yV2VpZ2h0IiwiZ2V0TGluZVRvdGFsV2VpZ2h0IiwiY29udmVydCIsIndlaWdodCIsImxpbmVUb3RhbFdlaWdodEVsZW1lbnQiLCJsaW5lVG90YWwiLCJ0b0ZpeGVkIiwicmVwbGFjZSIsInVwZGF0ZUxpc3RJdGVtIiwidXBkYXRlSXRlbVVPTSIsIkhUTUxFbGVtZW50IiwidW9tRWxlbWVudCIsImNvbmNhdCIsImNvbHVtbk5hbWUiLCJsYWJlbCIsImxhYmVsSFRNTCIsIm5ld1VPTSIsImlzTmV3Um93Iiwic3RhcnRzV2l0aCIsImVuZHNXaXRoIiwiZ2V0Qm9vbGVhbkRhdGEiLCJyZXNEYXRhIiwiaXRlbSIsImZsYXNoQm9yZGVyIiwiZXJyIiwiYWRkQ2F0ZWdvcnlHcm91cCIsImNhdGVnb3J5IiwibG9jYXRpb24iLCJyZWxvYWQiLCJpc1N1Y2Nlc3MiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInNldFRpbWVvdXQiLCJfZG9jdW1lbnQkZ2V0RWxlbWVudEIiLCJfZG9jdW1lbnQkZ2V0RWxlbWVudEIyIiwiX2RvY3VtZW50JGdldEVsZW1lbnRCMyIsIl9kb2N1bWVudCRnZXRFbGVtZW50QjQiLCJpZEFyciIsInNwbGl0IiwiaXRlbUlkVmFsdWUiLCJpc01hc3Rlckxpc3QiLCJ1cGRhdGVDYXRlZ29yeVZhbHVlIiwidW9tUmFkaW9zIiwidW9tUmFkaW8iLCJ1b21Db2x1bW5OYW1lIiwibmV3SWQiLCJnZXREZWxldGVCdG5EYXRhIiwidXBkYXRlVG90YWxMaXN0V2VpZ2h0cyIsImJhc2VXZWlnaHQiLCJ0b3RhbFBhY2tXZWlnaHQiLCJtYXhQYWNrV2VpZ2h0IiwiY2xhc3NXYXJuaW5nVmFsdWUiLCJ1b21UZXh0IiwibGlzdERhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiZGl2RWxlbWVudCIsImlubmVyVGV4dCIsImRpc3BsYXkiLCJuYW1lQmFzZSIsIm9wdGlvbiIsIm9wdGlvbkxpc3QiLCJfcmVmIiwiX2NhbGxlZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJ0MCIsInNlbGVjdGVkIiwiaW5wdXRFbGVtZW50cyIsImlucHV0RWxlbWVudCIsImVsZW1lbnRUeXBlIiwiZWxlbWVudFRhZyIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsIm5ld0VsZW1lbnQiLCJwYXJlbnRFbGVtZW50IiwicmVwbGFjZUNoaWxkIiwiZGF0YUNvbHVtbk5hbWUiLCJyYWRpbyIsImlubmVySHRtbCIsImh0bWxGb3IiLCJsaW5lTGFiZWwiLCJ1cGRhdGVMaXN0IiwiaGVhZGVycyIsImNvbnRlbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJhcnJvdyIsImNvbnRhaW5zIiwicmVtb3ZlIiwibWF4SGVpZ2h0IiwicGFkZGluZyIsInNjcm9sbEhlaWdodCIsImlucHV0cyIsImlucHV0IiwiZGlzYWJsZWQiLCJsaXN0Q2hhcnRidG4iLCJjaGFydFN0YXR1cyIsImdldENoYXJ0IiwiZGVzdHJveSIsImN0eCIsImNoYXJ0RGF0YSIsInBhcnNlIiwibXlDaGFydCIsImxhYmVscyIsImRhdGFzZXRzIiwid2VpZ2h0cyIsImNvbG9ycyIsImJvcmRlcldpZHRoIiwiaG92ZXJPZmZzZXQiLCJvcHRpb25zIiwiY3V0b3V0IiwicmFkaXVzIiwibGVnZW5kIiwicGx1Z2lucyIsImRhdGFsYWJlbHMiLCJjb2xvciIsImFuaW1hdGlvbiIsImFuaW1hdGVSb3RhdGUiLCJhbmltYXRlU2NhbGUiLCJ0ZXh0Q29udGVudCIsInNob3dDb252cnNpb25BbGVydCIsImNvbmZpcm1EZWxldGUiLCJfZG9jdW1lbnQkZ2V0RWxlbWVudEI1IiwiaXNNYXN0ZXIiLCJocmVmIiwib2JqZWN0VHlwZSIsImFuY2hvciIsIm1vZGFsQm9keSIsImhlbHBlckRpdiIsImhlbHB0ZXh0IiwibGlzdE5hbWUiLCJyZW1vdmVSb3ciLCJ0YWJsZVJvdyIsImJ1dHRvbiIsInRpdGxlIiwib25jbGljayIsImNhdGVnb3J5SWQiLCJvbkVuZCIsImV2dCIsIm9yZGVyZWRJZHMiLCJ1cGRhdGVJdGVtT3JkZXIiLCJjYXRlZ29yeV9pZCIsIm9yZGVyZWRfaWRzIiwic29ydGluZ1NlbGVjdCIsIm9wdHMiLCJwYXJlbnRDb250YWluZXIiLCJnaG9zdENsYXNzIiwidXBkYXRlQ2F0ZWdvcnlPcmRlciIsIm5ld09yZGVyIiwiaW5kZXgiLCJjYXRlZ29yeV9vcmRlciIsImFzc2lnblRvTGlzdE1vZGFsIiwidGFibGVCb2R5IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiZGVmYXVsdHMiLCJjb21tb24iXSwic291cmNlUm9vdCI6IiJ9