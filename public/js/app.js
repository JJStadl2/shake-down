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
    if (!isMaster) {
      console.log('is master: ' + isMaster);
    }
    var href = element.getAttribute('data-href');
    var name = element.getAttribute('data-object-name');
    var objectType = element.getAttribute('data-object-type');
    var anchor = document.getElementById('deleteObjectAnchor');
    var modalBody = document.getElementById('deleteModalBody');
    var text = "Are you sure you want to delete ".concat(objectType, " ").concat(name, "?");
    var helperDiv = document.getElementById('deleteHelper');
    var helptext;
    helperDiv.innerText = '';
    if (name == '' || name === null || name === undefined) {
      text = "Are you sure?";
    }
    if (objectType === 'item:' && isMaster === false) {
      var listName = element.getAttribute('data-list-name');
      helptext = "*Deleting an item from this list (".concat(listName, ") will not delete it the 'Your Gear' section.");
      helperDiv.append(helptext);
    } else if (objectType === 'item:' && isMaster === true) {
      helptext = "*Deleting an item from the 'Your Gear' section will delete it from all 'Gear Lists'.";
      helperDiv.append(helptext);
    } else if (objectType === 'category:' && isMaster === false) {
      text = "Are you sure you want to delete all items in the ".concat(name, " category from this list?");
    } else if (objectType === 'category:' && isMaster === true) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztJQUNkLENBQUMsQ0FBQztFQUVWO0VBRUEsSUFBSStILGlCQUFpQixHQUFJNVEsUUFBUSxDQUFDQyxjQUFjLENBQUMsdUJBQXVCLENBQUM7RUFFekUsSUFBRzJRLGlCQUFpQixLQUFLL0wsU0FBUyxJQUFJK0wsaUJBQWlCLEtBQUssSUFBSSxFQUFDO0lBRTdEQSxpQkFBaUIsQ0FBQ2hSLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxZQUFZO01BQzVELElBQUlpUixTQUFTLEdBQUc3USxRQUFRLENBQUNDLGNBQWMsQ0FBQyw4QkFBOEIsQ0FBQztNQUN2RSxPQUFNNFEsU0FBUyxDQUFDQyxVQUFVLEVBQUM7UUFDdkJELFNBQVMsQ0FBQ0UsV0FBVyxDQUFDRixTQUFTLENBQUNDLFVBQVUsQ0FBQztNQUMvQztJQUVKLENBQUMsQ0FBQztFQUNOO0FBR0osQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUN0ekN3QjtBQUMxQm5SLE1BQU0sQ0FBQytDLEtBQUssR0FBR0EsNkNBQUs7QUFFcEIvQyxNQUFNLENBQUMrQyxLQUFLLENBQUNzTyxRQUFRLENBQUN4RSxPQUFPLENBQUN5RSxNQUFNLENBQUMsa0JBQWtCLENBQUMsR0FBRyxnQkFBZ0I7Ozs7Ozs7Ozs7O0FDSDNFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zYXNzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAnLi9ib290c3RyYXAnIDtcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcImJvb3RzdHJhcFwiO1xuLy8gaW1wb3J0ICAnYm9vdHN0cmFwJztcbmltcG9ydCBcIkBwb3BwZXJqcy9jb3JlXCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzL2F1dG9cIjtcbmltcG9ydCBTb3J0YWJsZSBmcm9tIFwic29ydGFibGVqc1wiO1xuY29uc3QgYm9vdHN0cmFwID0gcmVxdWlyZShcIi4vYm9vdHN0cmFwXCIpO1xuY29uc3QgZ3JhbUNvbnZlcnRlciA9IDEwMDA7XG5jb25zdCBvdW5jZUNvbnZlcnRlciA9IDE2O1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgdGhpcy53aW5kb3cuc2hvd1Bhc3N3b3JkID0gZnVuY3Rpb24gc2hvd1Bhc3N3b3JkKGlkKSB7XG4gICAgICAgIGxldCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgaWYgKHBhc3N3b3JkLnR5cGUgPT09IFwicGFzc3dvcmRcIikge1xuICAgICAgICAgICAgcGFzc3dvcmQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFzc3dvcmQudHlwZSA9IFwicGFzc3dvcmRcIjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhpcy53aW5kb3cuYWRkTWFzdGVyTGlzdEl0ZW0gPSBmdW5jdGlvbiBhZGRNYXN0ZXJMaXN0SXRlbSgpIHtcbiAgICAgICAgbGV0IG51bWJlck9mSXRlbXNUb0FkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZXNUb0FkZFwiKTtcbiAgICAgICAgbGV0IGxpbmVzVG9BZGQgPSAxO1xuICAgICAgICBpZiAobnVtYmVyT2ZJdGVtc1RvQWRkID09PSBudWxsIHx8ICtudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPCAxKSB7XG4gICAgICAgICAgICBudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPSBsaW5lc1RvQWRkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGluZXNUb0FkZCA9ICtudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzVG9BZGQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGxpc3RCeUl0ZW1zID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBsaXN0ZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBpdGVtVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtaXRlbS10YWJsZS1ib2R5Jyk7XG4gICAgICAgICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgY2VsbHMgYW5kIGlucHV0IGVsZW1lbnRzLlxuICAgICAgICAgICAgbGV0IGNlbGwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuXG4gICAgICAgICAgICBsZXQgaXRlbU5hbWUgPSBjcmVhdGVMaXN0SXRlbUlucHV0KFxuICAgICAgICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgICAgICAgIFwiaXRlbU5hbWVcIixcbiAgICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICAgIFwiaXRlbV9uYW1lXCIsXG4gICAgICAgICAgICAgICAgbGlzdGVuXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaXRlbU5hbWUucGxhY2Vob2xkZXIgPSBcIkl0ZW0gTmFtZVwiO1xuICAgICAgICAgICAgaXRlbU5hbWUuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcblxuICAgICAgICAgICAgbGV0IGNlbGw2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgY2VsbDYuaWQgPSBcImJ0bi10ZC1cIiAraTtcbiAgICAgICAgICAgIGxldCBkZWxldGVCdG4gPSBjcmVhdGVEZWxldGVCdXR0b24oaSk7XG5cbiAgICAgICAgICAgIGxldCBjZWxsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGxldCBpdGVtV2VpZ2h0ID0gY3JlYXRlTGlzdEl0ZW1JbnB1dChcbiAgICAgICAgICAgICAgICBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIFwiaXRlbVdlaWdodFwiLFxuICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAgXCJpdGVtX3dlaWdodFwiLFxuICAgICAgICAgICAgICAgIGxpc3RlblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQudmFsdWUgPSAwO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKFwiZm9yLXdlaWdodFwiKTtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQuY2xhc3NMaXN0LmFkZChcIm51bWJlci1pbnB1dFwiKTtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQuc2V0QXR0cmlidXRlKCdzdGVwJywnMC4wMScpO1xuICAgICAgICAgICAgLy9pdGVtV2VpZ2h0LnN0eWxlLndpZHRoID0gJzQwJSc7XG4gICAgICAgICAgICBjZWxsMi5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWNvbFwiKTtcblxuICAgICAgICAgICAgbGV0IGNlbGwzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgICAgICBzZWxlY3QuaWQgPSBcInVvbS1cIiArIGk7XG4gICAgICAgICAgICBzZWxlY3QubmFtZSA9IFwidW9tW11cIjtcbiAgICAgICAgICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIsIFwidW9tXCIpO1xuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCI7XG5cbiAgICAgICAgICAgIGxldCBvek9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBsZXQgbGJzT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIGxldCBnck9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBsZXQga2dPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgb3pPcHRpb24udmFsdWUgPSBcImluX291bmNlc1wiO1xuICAgICAgICAgICAgb3pPcHRpb24udGV4dCA9IFwiT1pcIjtcbiAgICAgICAgICAgIGxic09wdGlvbi52YWx1ZSAgPSAnaW5fbGJzJztcbiAgICAgICAgICAgIGxic09wdGlvbi50ZXh0ID0gJ0xCUydcblxuICAgICAgICAgICAgZ3JPcHRpb24udmFsdWUgPSBcImluX2dyYW1zXCI7XG4gICAgICAgICAgICBnck9wdGlvbi50ZXh0ID0gXCJHXCI7XG4gICAgICAgICAgICBrZ09wdGlvbi52YWx1ZSAgPSAnaW5fa2lsb3MnO1xuICAgICAgICAgICAga2dPcHRpb24udGV4dCA9ICdLRyc7XG4gICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3pPcHRpb24pO1xuICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKGxic09wdGlvbik7XG4gICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQoZ3JPcHRpb24pO1xuICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKGtnT3B0aW9uKTtcblxuICAgICAgICAgICAgLy9hcHBlbmQgaW5wdXRzIHRvIGNlbGxzLlxuICAgICAgICAgICAgY2VsbDEuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgICAgICAgICAgY2VsbDIuYXBwZW5kQ2hpbGQoaXRlbVdlaWdodCk7XG5cbiAgICAgICAgICAgIGxldCBzZWxlY3RDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgbGV0IGNhdGVnb3J5U2VsZWN0ID0gZ2V0Q2F0ZWdyb3lTZWxlY3QoaSxudWxsLCBsaXN0ZW4pO1xuICAgICAgICAgICAgY2F0ZWdvcnlTZWxlY3QubmFtZSA9ICdpdGVtQ2F0ZWdvcnlbXSdcbiAgICAgICAgICAgIHNlbGVjdENlbGwuYXBwZW5kKGNhdGVnb3J5U2VsZWN0KTtcblxuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgICAgICAgICAgIGNlbGw2LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgICAgICAgICAgIC8vIEFwcGVuZCBjZWxscyB0byB0aGUgcm93LlxuICAgICAgICAgICAgLy8gcm93LmFwcGVuZENoaWxkKGljb25DZWxsKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsMSk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoc2VsZWN0Q2VsbCk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDMpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwyKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsNik7XG5cbiAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgcm93IHRvIHRoZSB0YWJsZS5cbiAgICAgICAgICAgIGl0ZW1UYWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuXG5cbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3SXRlbUNvdW50JykudmFsdWUgPSBsaW5lc1RvQWRkO1xuICAgICAgICBudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPSAxO1xuICAgIH07XG4gICAgdGhpcy53aW5kb3cuc2hvd0xpc3RBc3NpZ25Nb2RhbCA9IGZ1bmN0aW9uIHNob3dMaXN0QXNzaWduTW9kYWwoaXRlbUlkLGl0ZW1OYW1lKXtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbUlkZm9yQXNzaWduJykudmFsdWUgPSBpdGVtSWQ7XG4gICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VySXRlbUlkZm9yQXNzaWduJykudmFsdWUgPSB1c2VySXRlbUlkO1xuXG4gICAgICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtYXNzaWduLWl0ZW0tdGFibGUtYm9keVwiKTtcbiAgICAgICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBc3NpZ25JdGVtVG9MaXN0TW9kYWxMYWJlbCcpO1xuICAgICAgICBoZWFkZXIuaW5uZXJIVE1MID0gJ0Fzc2lnbi9VbmFzc2lnbiBpdGVtOiAnK2l0ZW1OYW1lO1xuXG4gICAgICAgIGxldCB1cmwgPSAnL2dldC11c2VyLWxpc3RzLycraXRlbUlkO1xuICAgICAgICBsZXQgdXNlckxpc3RzO1xuXG4gICAgICAgIGF4aW9zLmdldCh1cmwpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICB1c2VyTGlzdHMgPSBkYXRhLnVzZXJMaXN0cztcblxuICAgICAgICAgICAgaWYoZGF0YS5zdGF0dXMgIT09ICcxJyl7XG4gICAgICAgICAgICAgICAgYWxlcnQoZGF0YS5tc2cpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1c2VyTGlzdHMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgICAgICAgICAgbGV0IGxpc3ROYW1lQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgYXNzaWduQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcblxuICAgICAgICAgICAgICAgIGxpc3ROYW1lQ2VsbC5pbm5lckhUTUwgPSB1c2VyTGlzdHNbaV0ubmFtZTtcblxuICAgICAgICAgICAgICAgIGxldCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgICAgICAgICAgY2hlY2tib3guaWQgPSAnbGlzdENoZWNrQm94LScraTtcbiAgICAgICAgICAgICAgICBjaGVja2JveC5uYW1lID0gJ2xpc3RJZHNbXSc7XG4gICAgICAgICAgICAgICAgY2hlY2tib3gudmFsdWUgPSB1c2VyTGlzdHNbaV0uaWQ7XG5cbiAgICAgICAgICAgICAgICBpZih1c2VyTGlzdHNbaV0uaXRlbUFzc2lnbmVkID09IHRydWUpe1xuICAgICAgICAgICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhc3NpZ25DZWxsLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQobGlzdE5hbWVDZWxsKTtcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoYXNzaWduQ2VsbCk7XG4gICAgICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgIH1cbiAgICB0aGlzLndpbmRvdy5zaG93R2VhckFzc2lnbk1vZGFsID0gZnVuY3Rpb24gc2hvd0dlYXJBc3NpZ25Nb2RhbChsaXN0SWQpe1xuXG4gICAgICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLWl0ZW0tdGFibGUtYm9keVwiKTtcblxuICAgICAgICBsZXQgdXJsID0gJy9nZXQtdXNlci1pdGVtcy8nK2xpc3RJZDtcbiAgICAgICAgbGV0IHVzZXJJdGVtcztcblxuICAgICAgICBheGlvcy5nZXQodXJsKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgdXNlckl0ZW1zID0gZGF0YS51c2VySXRlbXM7XG4gICAgICAgICAgICBpZihkYXRhLnN0YXR1cyAhPT0gJzEnKXtcbiAgICAgICAgICAgICAgICBhbGVydChkYXRhLm1zZyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJJdGVtcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbU5hbWVDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgICAgIGxldCBpdGVtQ2F0ZWdvcnlDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgICAgIGxldCBpdGVtV2VpZ2h0Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbVVPTUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICAgICAgbGV0IGFzc2lnbkNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG5cbiAgICAgICAgICAgICAgICBpdGVtTmFtZUNlbGwuaW5uZXJIVE1MID0gdXNlckl0ZW1zW2ldLml0ZW1fbmFtZTtcbiAgICAgICAgICAgICAgICBpdGVtQ2F0ZWdvcnlDZWxsLmlubmVySFRNTCA9IHVzZXJJdGVtc1tpXS5pdGVtX2NhdGVnb3J5O1xuICAgICAgICAgICAgICAgIGl0ZW1XZWlnaHRDZWxsLmlubmVySFRNTCA9IHVzZXJJdGVtc1tpXS5pdGVtX3dlaWdodDtcbiAgICAgICAgICAgICAgICBpdGVtVU9NQ2VsbC5pbm5lckhUTUwgPSB1c2VySXRlbXNbaV0udW9tO1xuXG5cbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICAgICAgICAgIGNoZWNrYm94LmlkID0gJ2l0ZW1DaGVja0JveC0nK2k7XG4gICAgICAgICAgICAgICAgY2hlY2tib3gubmFtZSA9ICdpdGVtSWRzW10nO1xuICAgICAgICAgICAgICAgIGNoZWNrYm94LnZhbHVlID0gdXNlckl0ZW1zW2ldLml0ZW1faWQ7XG4gICAgICAgICAgICAgICAgYXNzaWduQ2VsbC5hcHBlbmRDaGlsZChjaGVja2JveCk7XG5cbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoaXRlbU5hbWVDZWxsKTtcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoaXRlbUNhdGVnb3J5Q2VsbCk7XG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGl0ZW1XZWlnaHRDZWxsKTtcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoaXRlbVVPTUNlbGwpO1xuXG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGFzc2lnbkNlbGwpO1xuICAgICAgICAgICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHRoaXMud2luZG93LmFzc2lnblRvR2Vhckxpc3QgPSBmdW5jdGlvbiBhc3NpZ25Ub0dlYXJMaXN0KGVsZW1lbnQpe1xuICAgICAgICBsZXQgbGlzdElkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcpO1xuICAgICAgICBsZXQgaXRlbUlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaXRlbS1pZCcpO1xuXG4gICAgICAgIGlmKCFlbGVtZW50LmNoZWNrZWQpe1xuICAgICAgICAgICAgbGlzdElkID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdXJsID0gJy9hc3NpZ24tdG8tZ2Vhci1saXN0J1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIGxpc3RfaWQ6IGxpc3RJZCxcbiAgICAgICAgICAgIGlkOiBpdGVtSWRcbiAgICAgICAgfTtcblxuXG4gICAgICAgIGF4aW9zLnBvc3QodXJsLGRhdGEpXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXNwb25zZSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0gMSl7XG5cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGFsZXJ0KHJlc3BvbnNlLm1zZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHRoaXMud2luZG93LmFkZExpc3RJdGVtID0gZnVuY3Rpb24gYWRkTGlzdEl0ZW0oY2F0ZWdvcnljb3VudGVyID0gbnVsbCwgZ3JvdXBDYXRlZ29yeSA9IG51bGwpIHtcbiAgICAgICAgbGV0IG51bWJlck9mSXRlbXNUb0FkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZXNUb0FkZFwiKTtcbiAgICAgICAgbGV0IGxpbmVzVG9BZGQgPSAxO1xuICAgICAgICBsZXQgbGlzdFZpZXdJbnB1dDtcbiAgICAgICAgaWYgKG51bWJlck9mSXRlbXNUb0FkZCA9PT0gbnVsbCB8fCArbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlIDwgMSkge1xuICAgICAgICAgICAgbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlID0gbGluZXNUb0FkZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpbmVzVG9BZGQgPSArbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lc1RvQWRkOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBsaXN0VU9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b21cIikudmFsdWU7XG4gICAgICAgICAgICBsZXQgZmluYWxJRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmluYWwtaVwiKTtcbiAgICAgICAgICAgIGxldCBsaXN0QnlJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdEJ5SXRlbXNcIikudmFsdWU7XG4gICAgICAgICAgICBsZXQgaXRlbVRhYmxlO1xuXG4gICAgICAgICAgICBpZiAoK2xpc3RCeUl0ZW1zID09IDEpIHtcbiAgICAgICAgICAgICAgICBsaXN0QnlJdGVtcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgaXRlbVRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtLXRhYmxlLWJvZHlcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxpc3RCeUl0ZW1zID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IHRhYmxlQ2F0ZWdvcnkgPSBjYXRlZ29yeWNvdW50ZXI7XG4gICAgICAgICAgICAgICAgaXRlbVRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgICAgICAgICAgIFwiY2F0ZWdvcnlUYWJsZS1cIiArIHRhYmxlQ2F0ZWdvcnlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdXNlcklkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VySWRcIikudmFsdWU7XG4gICAgICAgICAgICBsZXQgbGlzdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0SWRcIikudmFsdWU7XG4gICAgICAgICAgICBsZXQgZmluYWxJID0gZmluYWxJRWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgIGZpbmFsSUVsZW1lbnQudmFsdWUgPSArZmluYWxJICsgMTtcblxuICAgICAgICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgICAgIHJvdy5pZCA9ICdyb3ctJytmaW5hbEk7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBjZWxscyBhbmQgaW5wdXQgZWxlbWVudHMuXG4gICAgICAgICAgICBsZXQgY2VsbDAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gICAgICAgICAgICBjZWxsMC5zY29wZSA9IFwicm93XCI7XG4gICAgICAgICAgICBjZWxsMC5pbm5lckhUTUwgPSBmaW5hbEk7XG5cbiAgICAgICAgICAgIGxldCBjZWxsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcblxuICAgICAgICAgICAgbGV0IGNvdW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBjb3VudGVyLnR5cGUgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgY291bnRlci5uYW1lID0gXCJpZFtdXCI7XG4gICAgICAgICAgICBjb3VudGVyLmlkID0gXCJpZC1cIiArIGZpbmFsSTtcbiAgICAgICAgICAgIGNvdW50ZXIudmFsdWUgPSBcIm5ldy1cIiArIGZpbmFsSTtcbiAgICAgICAgICAgIGNvdW50ZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4tbmFtZVwiLCBcImlkXCIpO1xuXG4gICAgICAgICAgICBsZXQgbGlzdFZpZXdUeXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgbGlzdFZpZXdUeXBlLnR5cGUgPSBcImhpZGRlblwiO1xuXG4gICAgICAgICAgICBsaXN0Vmlld1R5cGUuaWQgPSBcImxpc3RWaWV3VHlwZVwiO1xuICAgICAgICAgICAgbGlzdFZpZXdUeXBlLnZhbHVlID0gbGlzdEJ5SXRlbXNcbiAgICAgICAgICAgIGxpc3RWaWV3SW5wdXQgPSBsaXN0Vmlld1R5cGU7XG5cbiAgICAgICAgICAgIGxldCBuZXdSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBuZXdSb3cudHlwZSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICBuZXdSb3cuaWQgPSBcIm5ld1Jvdy1cIiArIGZpbmFsSTtcbiAgICAgICAgICAgIG5ld1Jvdy52YWx1ZSA9IHRydWU7XG4gICAgICAgICAgICBsZXQgaXRlbU5hbWUgPSBjcmVhdGVMaXN0SXRlbUlucHV0KFxuICAgICAgICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgICAgICAgIFwiaXRlbU5hbWVcIixcbiAgICAgICAgICAgICAgICBmaW5hbEksXG4gICAgICAgICAgICAgICAgXCJpdGVtX25hbWVcIlxuXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaXRlbU5hbWUucGxhY2Vob2xkZXIgPSBcIkl0ZW0gTmFtZVwiO1xuICAgICAgICAgICAgaXRlbU5hbWUuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcblxuICAgICAgICAgICAgbGV0IGNlbGw2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgY2VsbDYuaWQgPSBcImJ0bi10ZC1cIiArIGZpbmFsSTtcbiAgICAgICAgICAgIGxldCBkZWxldGVCdG4gPSBjcmVhdGVEZWxldGVCdXR0b24oZmluYWxJKTtcbiAgICAgICAgICAgIGxldCBjZWxsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcblxuICAgICAgICAgICAgbGV0IGl0ZW1XZWlnaHQgPSBjcmVhdGVMaXN0SXRlbUlucHV0KFxuICAgICAgICAgICAgICAgIFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgXCJpdGVtV2VpZ2h0XCIsXG4gICAgICAgICAgICAgICAgZmluYWxJLFxuICAgICAgICAgICAgICAgIFwiaXRlbV93ZWlnaHRcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQudmFsdWUgPSAwO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKFwiZm9yLXdlaWdodFwiKTtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQuY2xhc3NMaXN0LmFkZChcIm51bWJlci1pbnB1dFwiKTtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcbiAgICAgICAgICAgIGNlbGwyLmNsYXNzTGlzdC5hZGQoXCJudW1iZXItY29sXCIpO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBsZXQgbGluZVVvbUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBjZWxsMy5jbGFzc0xpc3QuYWRkKFwidW9tLXRkXCIpO1xuICAgICAgICAgICAgbGluZVVvbUNlbGwuY2xhc3NMaXN0LmFkZChcInVvbS10ZFwiKTtcbiAgICAgICAgICAgIGxldCByb3dVb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICByb3dVb20udHlwZSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgcm93VW9tLmlkID0gXCJ1b20tXCIgKyBmaW5hbEk7XG5cblxuICAgICAgICAgICAgbGV0ICByYWRpbzEgPSBjcmVhdGVSYWRpbyhcImluX291bmNlc1wiLCBcIlwiLCBcIm96XCIsIGZpbmFsSSk7XG4gICAgICAgICAgICBsZXQgcmFkaW9MYWJlbDEgPSBjcmVhdGVMYWJlbChcbiAgICAgICAgICAgICAgICBcIk9aXCIsXG4gICAgICAgICAgICAgICAgXCJ1b20tb3otXCIgKyBmaW5hbEksXG4gICAgICAgICAgICAgICAgXCJvelwiLFxuICAgICAgICAgICAgICAgIGZpbmFsSVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxldCByYWRpbzIgPSBjcmVhdGVSYWRpbyhcImluX2xic1wiLCBcIlwiLCBcImxic1wiLCBmaW5hbEkpO1xuICAgICAgICAgICAgbGV0IHJhZGlvTGFiZWwyID0gY3JlYXRlTGFiZWwoXG4gICAgICAgICAgICAgICAgXCJMQlNcIixcbiAgICAgICAgICAgICAgICBcInVvbS1sYnMtXCIgKyBmaW5hbEksXG4gICAgICAgICAgICAgICAgXCJsYnNcIixcbiAgICAgICAgICAgICAgICBmaW5hbElcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsZXQgICByYWRpbzMgPSBjcmVhdGVSYWRpbyhcImluX2dyYW1zXCIsIFwiXCIsIFwiZ3JhbVwiLCBmaW5hbEkpO1xuICAgICAgICAgICAgbGV0IHJhZGlvTGFiZWwzID0gY3JlYXRlTGFiZWwoXG4gICAgICAgICAgICAgICAgXCJHXCIsXG4gICAgICAgICAgICAgICAgXCJ1b20tZ3JhbS1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgICAgICBcImdyYW1cIixcbiAgICAgICAgICAgICAgICBmaW5hbElcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsZXQgcmFkaW80ID0gY3JlYXRlUmFkaW8oXCJpbl9raWxvc1wiLCBcIlwiLCBcImtnXCIsIGZpbmFsSSk7XG4gICAgICAgICAgICBsZXQgcmFkaW9MYWJlbDQgPSBjcmVhdGVMYWJlbChcbiAgICAgICAgICAgICAgICBcIktHXCIsXG4gICAgICAgICAgICAgICAgXCJ1b20ta2ctXCIgKyBmaW5hbEksXG4gICAgICAgICAgICAgICAgXCJrZ1wiLFxuICAgICAgICAgICAgICAgIGZpbmFsSVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxldCByYWRpb0xhYmVsNTtcblxuICAgICAgICAgICAgaWYgKGxpc3RVT00gPT09IFwidXNcIikge1xuICAgICAgICAgICAgICAgIHJvd1VvbS52YWx1ZSA9IFwidXNcIjtcbiAgICAgICAgICAgICAgICByYWRpbzEuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmFkaW9MYWJlbDUgPSBjcmVhdGVMYWJlbChcbiAgICAgICAgICAgICAgICAgICAgXCJPWlwiLFxuICAgICAgICAgICAgICAgICAgICBcInVvbS1vei1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgICAgICAgICAgXCJvelwiLFxuICAgICAgICAgICAgICAgICAgICBmaW5hbEksXG4gICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3dVb20udmFsdWUgPSBcIm1ldHJpY1wiO1xuICAgICAgICAgICAgICAgIHJhZGlvMy5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByYWRpb0xhYmVsNSA9IGNyZWF0ZUxhYmVsKFxuICAgICAgICAgICAgICAgICAgICBcIkdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ1b20tZ3JhbS1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgICAgICAgICAgXCJncmFtXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsSSxcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBjZWxsNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGNlbGw0LmNsYXNzTGlzdC5hZGQoXCJudW1iZXItY29sXCIpO1xuICAgICAgICAgICAgbGV0IHBhY2tlZEFtb3VudCA9IGNyZWF0ZUxpc3RJdGVtSW5wdXQoXG4gICAgICAgICAgICAgICAgXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICBcInBhY2tlZEFtb3VudFwiLFxuICAgICAgICAgICAgICAgIGZpbmFsSSxcbiAgICAgICAgICAgICAgICBcImFtb3VudFwiXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBwYWNrZWRBbW91bnQudmFsdWUgPSAxO1xuXG4gICAgICAgICAgICBwYWNrZWRBbW91bnQuY2xhc3NMaXN0LmFkZChcImZvci13ZWlnaHRcIik7XG4gICAgICAgICAgICBwYWNrZWRBbW91bnQuY2xhc3NMaXN0LmFkZChcIm51bWJlci1pbnB1dFwiKTtcbiAgICAgICAgICAgIHBhY2tlZEFtb3VudC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBjZWxsNS5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWNvbFwiKTtcbiAgICAgICAgICAgIGxldCB0b3RhbExpbmVXZWlnaHQgPSBjcmVhdGVMaXN0SXRlbUlucHV0KFxuICAgICAgICAgICAgICAgIFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgXCJ0b3RhbExpbmVXZWlnaHRcIixcbiAgICAgICAgICAgICAgICBmaW5hbEksXG4gICAgICAgICAgICAgICAgXCJ0b3RhbF9saW5lX3dlaWdodFwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LnZhbHVlID0gMDtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgXCJkYXRhLWNvbHVtbi1uYW1lXCIsXG4gICAgICAgICAgICAgICAgXCJ0b3RhbF9saW5lX3dlaWdodFwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LnNldEF0dHJpYnV0ZShcInJlYWRvbmx5XCIsIHRydWUpO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJudW1iZXItaW5wdXRcIik7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC5jbGFzc0xpc3QuYWRkKFwiZm9yLXRvdGFsLWxpc3Qtd2VpZ2h0XCIpO1xuXG4gICAgICAgICAgICAvL2FwcGVuZCBpbnB1dHMgdG8gY2VsbHMuXG4gICAgICAgICAgICBsZXQgaWNvbkNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG5cbiAgICAgICAgICAgIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICAgICAgaWNvbi5jbGFzc05hbWUgPSAnZmFzIGZhLWdyaXAtdmVydGljYWwnO1xuICAgICAgICAgICAgaWNvbkNlbGwuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICAgICAgICAgIGNlbGwxLmFwcGVuZENoaWxkKGNvdW50ZXIpO1xuICAgICAgICAgICAgY2VsbDEuYXBwZW5kQ2hpbGQobmV3Um93KTtcbiAgICAgICAgICAgIGNlbGwxLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIGNlbGwyLmFwcGVuZENoaWxkKGl0ZW1XZWlnaHQpO1xuXG4gICAgICAgICAgICBsZXQgc2VsZWN0Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGxldCBjYXRlZ29yeVNlbGVjdCA9IGdldENhdGVncm95U2VsZWN0KGZpbmFsSSwgZ3JvdXBDYXRlZ29yeSk7XG5cbiAgICAgICAgICAgIHNlbGVjdENlbGwuYXBwZW5kKGNhdGVnb3J5U2VsZWN0KTtcbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHJvd1VvbSk7XG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChyYWRpbzEpO1xuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbDEpO1xuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQocmFkaW8yKTtcbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHJhZGlvTGFiZWwyKTtcblxuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQocmFkaW8zKTtcbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHJhZGlvTGFiZWwzKTtcbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHJhZGlvNCk7XG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChyYWRpb0xhYmVsNCk7XG5cblxuXG4gICAgICAgICAgICBjZWxsNC5hcHBlbmRDaGlsZChwYWNrZWRBbW91bnQpO1xuICAgICAgICAgICAgY2VsbDUuYXBwZW5kQ2hpbGQodG90YWxMaW5lV2VpZ2h0KTtcbiAgICAgICAgICAgIGxpbmVVb21DZWxsLmFwcGVuZENoaWxkKHJhZGlvTGFiZWw1KTtcbiAgICAgICAgICAgIGNlbGw2LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgICAgICAgICAgIC8vIEFwcGVuZCBjZWxscyB0byB0aGUgcm93LlxuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGljb25DZWxsKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsMSk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoc2VsZWN0Q2VsbCk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDMpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwyKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsNCk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDUpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGxpbmVVb21DZWxsKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsNik7XG5cbiAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgcm93IHRvIHRoZSB0YWJsZS5cbiAgICAgICAgICAgIGl0ZW1UYWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICAgICAgLy9hZGQgZnVuY3Rpb25zIHRvIGNhbGN1bGF0ZSBhbmQgY29udmVydCB0b3RhbCB3ZWlnaHQuXG4gICAgICAgICAgICBhZGRFdmVudExpc3RlbmVyV2VpZ2h0Q2FsYyhmaW5hbEkpO1xuICAgICAgICB9XG4gICAgICAgIG51bWJlck9mSXRlbXNUb0FkZC52YWx1ZSA9IDE7XG5cbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZWFyLWl0ZW1zLWNvbnRhaW5lcicpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdFZpZXdJbnB1dCk7XG4gICAgfTtcblxuICAgIHRoaXMud2luZG93LnVwZGF0ZVVPTSA9IGZ1bmN0aW9uIHVwZGF0ZVVPTSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgIT09IFwidXNcIikge1xuICAgICAgICAgICAgdXNSYWRpb1RvTWV0cmljKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZXRyaWNSYWRpb1RvVXMoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcldlaWdodENhbGMocm93KSB7XG4gICAgICAgIGxldCBuZWVkZWRGb3JXZWlnaHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3Itd2VpZ2h0XCIpO1xuICAgICAgICBuZWVkZWRGb3JXZWlnaHRzLmZvckVhY2goZnVuY3Rpb24gKG5lZWRlZEZvcldlaWdodCkge1xuICAgICAgICAgICAgbmVlZGVkRm9yV2VpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGdldExpbmVUb3RhbFdlaWdodChyb3cpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMud2luZG93LmdldExpbmVUb3RhbFdlaWdodCA9IGZ1bmN0aW9uIGdldExpbmVUb3RhbFdlaWdodChcbiAgICAgICAgcm93LFxuICAgICAgICBjb252ZXJ0ID0gZmFsc2VcbiAgICApIHtcbiAgICAgICAgbGV0IHdlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXRlbVdlaWdodC1cIiArIHJvdykudmFsdWU7XG4gICAgICAgIGxldCBwYWNrZWRBbW91bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhY2tlZEFtb3VudC1cIiArIHJvdykudmFsdWU7XG4gICAgICAgIGxldCB1b20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbVwiKTtcbiAgICAgICAgbGV0IGxpbmVUb3RhbFdlaWdodEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgIFwidG90YWxMaW5lV2VpZ2h0LVwiICsgcm93XG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IGxpbmVUb3RhbCA9IDA7XG4gICAgICAgIGxpbmVUb3RhbCA9ICt3ZWlnaHQgKiArcGFja2VkQW1vdW50O1xuICAgICAgICBsaW5lVG90YWwgPSBsaW5lVG90YWwudG9GaXhlZCgzKS5yZXBsYWNlKC9bLixdMDAkLywgXCJcIik7XG4gICAgICAgIGxpbmVUb3RhbFdlaWdodEVsZW1lbnQudmFsdWUgPSBsaW5lVG90YWw7XG5cbiAgICAgICAgdXBkYXRlTGlzdEl0ZW0obGluZVRvdGFsV2VpZ2h0RWxlbWVudCk7XG4gICAgfTtcblxuICAgIHRoaXMud2luZG93LnVwZGF0ZUl0ZW1VT00gPSBmdW5jdGlvbiB1cGRhdGVJdGVtVU9NKFxuICAgICAgICByb3csXG4gICAgICAgZWxlbWVudFxuICAgICkge1xuXG4gICAgICAgIGlmICghZWxlbWVudCB8fCAhKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIGVsZW1lbnQgcHJvdmlkZWQgdG8gdXBkYXRlTGlzdEl0ZW0uXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHVvbUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdW9tLSR7cm93fWApO1xuICAgICAgICBsZXQgaXRlbVdlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpdGVtV2VpZ2h0LSR7cm93fWApLnZhbHVlO1xuICAgICAgICBsZXQgY29sdW1uTmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbHVtbi1uYW1lJyk7XG4gICAgICAgIGxldCB1b20gPSB1b21FbGVtZW50LnZhbHVlO1xuICAgICAgICBsZXQgaXRlbUlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGlkLSR7cm93fWApLnZhbHVlO1xuICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbGluZS11b20tbGFiZWwtJHtyb3d9YCk7XG4gICAgICAgIGxldCBsYWJlbEhUTUw7XG4gICAgICAgIGxldCBuZXdVT007XG4gICAgICAgIGxldCB1cmwgPSAnL3VwZGF0ZS1pdGVtLXVvbSc7XG4gICAgICAgIGxldCBpc05ld1JvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBuZXdSb3ctJHtyb3d9YCkgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbmV3Um93LSR7cm93fWApLnZhbHVlIDogZmFsc2U7XG5cbiAgICAgICAgaWYoaXRlbUlkLnN0YXJ0c1dpdGgoJ25ldycpKXtcbiAgICAgICAgICAgIHJldHVybiB1cGRhdGVMaXN0SXRlbShlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGNvbHVtbk5hbWUuZW5kc1dpdGgoJ291bmNlcycpIHx8IGNvbHVtbk5hbWUuZW5kc1dpdGgoJ2xicycpKXtcbiAgICAgICAgICAgIG5ld1VPTSA9ICd1cyc7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbmV3VU9NID0gJ21ldHJpYyc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGF0YSA9IGdldEJvb2xlYW5EYXRhKGNvbHVtbk5hbWUpO1xuICAgICAgICBkYXRhWydpZCddID0gaXRlbUlkO1xuICAgICAgICBkYXRhWyduZXdVT00nXSA9IG5ld1VPTTtcbiAgICAgICAgZGF0YVsnaXRlbV93ZWlnaHQnXSA9IGl0ZW1XZWlnaHQ7XG4gICAgICAgIGRhdGFbJ2lzTmV3Um93J10gPSBpc05ld1JvdztcblxuICAgICAgICBheGlvcy5wb3N0KHVybCwgZGF0YSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc0RhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgIGxldCBpdGVtID0gcmVzRGF0YS5pdGVtO1xuXG4gICAgICAgICAgICBpZiAocmVzRGF0YS5zdGF0dXMgPT09ICcxJykge1xuICAgICAgICAgICAgICAgIGZsYXNoQm9yZGVyKGVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpdGVtV2VpZ2h0LSR7cm93fWApLnZhbHVlID0gaXRlbVsnaXRlbV93ZWlnaHQnXTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGFja2VkQW1vdW50LSR7cm93fWApLnZhbHVlID0gaXRlbVsnYW1vdW50J107XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRvdGFsTGluZVdlaWdodC0ke3Jvd31gKS52YWx1ZSA9IGl0ZW1bJ3RvdGFsX2xpbmVfd2VpZ2h0J107XG4gICAgICAgICAgICAgICAgdW9tRWxlbWVudC52YWx1ZSA9IG5ld1VPTTtcbiAgICAgICAgICAgICAgICBpZihpdGVtWydpbl9vdW5jZXMnXSl7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsSFRNTCA9IFwiT1pcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihpdGVtWydpbl9sYnMnXSl7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsSFRNTCA9IFwiTEJTXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoaXRlbVsnaW5fZ3JhbXMnXSl7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsSFRNTCA9IFwiR1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKGl0ZW1bJ2luX2tpbG9zJ10pe1xuICAgICAgICAgICAgICAgICAgICBsYWJlbEhUTUwgPSBcIktHXCI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gbGFiZWxIVE1MO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZsYXNoQm9yZGVyKGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhbGVydChyZXNEYXRhLm1zZyB8fCBcIlVwZGF0ZSBmYWlsZWQsIHBsZWFzZSBjaGVjayB5b3VyIGlucHV0LlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIC8vIEVuaGFuY2VkIGVycm9yIGhhbmRsaW5nXG4gICAgICAgICAgICBmbGFzaEJvcmRlcihlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgICAgICBhbGVydChcIkZhaWxlZCB0byB1cGRhdGUgbGlzdCBpdGVtLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVcGRhdGUgZXJyb3I6XCIsIGVycik7XG4gICAgICAgIH0pO1xuXG4gICAgfTtcbiAgICB0aGlzLndpbmRvdy5hZGRDYXRlZ29yeUdyb3VwID0gZnVuY3Rpb24gYWRkQ2F0ZWdvcnlHcm91cChsaXN0SWQsY2F0ZWdvcnksIGxpc3RVT00sIHVzZXJJZCl7XG5cbiAgICAgICAgbGV0IGNvbHVtbk5hbWU7XG4gICAgICAgIGlmKGxpc3RVT00gPT09ICd1cycpe1xuICAgICAgICAgICAgY29sdW1uTmFtZSA9ICdpbl9vdW5jZXMnO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvbHVtbk5hbWUgPSAnaW5fZ3JhbXMnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRhdGEgPSBnZXRCb29sZWFuRGF0YShjb2x1bW5OYW1lKTtcbiAgICAgICAgZGF0YVsnbGlzdF9pZCddID0gbGlzdElkO1xuICAgICAgICBkYXRhWyd1c2VyX2lkJ10gPSB1c2VySWQ7XG4gICAgICAgIGRhdGFbJ2l0ZW1fbmFtZSddID0gJyc7XG4gICAgICAgIGRhdGFbJ2l0ZW1fd2VpZ2h0J10gPSAwO1xuICAgICAgICBkYXRhWydhbW91bnQnXSA9IDE7XG4gICAgICAgIGRhdGFbJ2l0ZW1fY2F0ZWdvcnknXSA9IGNhdGVnb3J5O1xuICAgICAgICBkYXRhWyduZXdDYXRlZ29yeSddID0gdHJ1ZTtcbiAgICAgICAgbGV0IHVybCA9ICcvbGlzdC1pdGVtJ1xuXG4gICAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KHVybCwgZGF0YSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgcmVzID0gcmVzLmRhdGE7XG4gICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAnMScpe1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgYWxlcnQocmVzLm1zZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuICAgIGZ1bmN0aW9uIGZsYXNoQm9yZGVyKGVsZW1lbnQsIGlzU3VjY2Vzcykge1xuICAgICAgICBsZXQgY29sdW1uTmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbHVtbi1uYW1lJyk7XG4gICAgICAgIGlmKGNvbHVtbk5hbWUgIT09ICd0b3RhbF9saW5lX3dlaWdodCcpe1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBpc1N1Y2Nlc3MgPyAnI0E4RTZDRicgOiAnI0YwODA4MCc7XG4gICAgICAgICAgICAvLyBTZXQgYSB0aW1lb3V0IHRvIHJlbW92ZSB0aGUgYm9yZGVyIGFmdGVyIDIgc2Vjb25kc1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcbiAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Qm9vbGVhbkRhdGEoY29sdW1uTmFtZSkge1xuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICBkYXRhW1wiaW5fb3VuY2VzXCJdID0gZmFsc2U7XG4gICAgICAgIGRhdGFbXCJpbl9sYnNcIl0gPSBmYWxzZTtcbiAgICAgICAgZGF0YVtcImluX2dyYW1zXCJdID0gZmFsc2U7XG4gICAgICAgIGRhdGFbXCJpbl9raWxvc1wiXSA9IGZhbHNlO1xuICAgICAgICBkYXRhWyd1b20nXSA9ICd1cyc7XG4gICAgICAgIHN3aXRjaCAoY29sdW1uTmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcImluX291bmNlc1wiOlxuICAgICAgICAgICAgICAgIGRhdGFbXCJpbl9vdW5jZXNcIl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGRhdGFbJ3VvbSddID0gJ3VzJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJpbl9sYnNcIjpcbiAgICAgICAgICAgICAgICBkYXRhW1wiaW5fbGJzXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBkYXRhWyd1b20nXSA9ICd1cyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaW5fZ3JhbXNcIjpcbiAgICAgICAgICAgICAgICBkYXRhW1wiaW5fZ3JhbXNcIl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGRhdGFbJ3VvbSddID0gJ21ldHJpYyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaW5fa2lsb3NcIjpcbiAgICAgICAgICAgICAgICBkYXRhW1wiaW5fa2lsb3NcIl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGRhdGFbJ3VvbSddID0gJ21ldHJpYyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIHRoaXMud2luZG93LnVwZGF0ZUxpc3RJdGVtID0gZnVuY3Rpb24gdXBkYXRlTGlzdEl0ZW0oZWxlbWVudCkge1xuICAgICAgICAvLyBDaGVja2luZyBpZiBlbGVtZW50IGlzIGEgdmFsaWQgRE9NIGVsZW1lbnRcbiAgICAgICAgaWYgKCFlbGVtZW50IHx8ICEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgZWxlbWVudCBwcm92aWRlZCB0byB1cGRhdGVMaXN0SXRlbS5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY29sdW1uTmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4tbmFtZVwiKTtcbiAgICAgICAgbGV0IHZhbHVlID0gZWxlbWVudC52YWx1ZTtcbiAgICAgICAgbGV0IGlkID0gZWxlbWVudC5pZDtcbiAgICAgICAgbGV0IGlkQXJyID0gaWQuc3BsaXQoXCItXCIpO1xuXG4gICAgICAgIGlmIChpZEFyci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIElEIGZvcm1hdC5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcm93ID0gaWRBcnJbaWRBcnIubGVuZ3RoIC0gMV07XG4gICAgICAgIGxldCBpdGVtSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlkLVwiICsgcm93KTtcblxuICAgICAgICAvLyBDaGVjayBpZiBpdGVtSWQgZXhpc3RzXG4gICAgICAgIGlmICghaXRlbUlkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFbGVtZW50IHdpdGggSUQgJ2lkLSR7cm93fScgbm90IGZvdW5kLmApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGl0ZW1JZFZhbHVlID0gaXRlbUlkLnZhbHVlO1xuICAgICAgICBsZXQgbGlzdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0SWRcIik/LnZhbHVlIHx8IFwiXCI7XG4gICAgICAgIGxldCB1cmwgPSBcIi9saXN0LWl0ZW1cIjtcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgbGV0IHVzZXJJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcklkXCIpPy52YWx1ZSB8fCBcIlwiO1xuICAgICAgICBsZXQgY3JlYXRlID0gdHJ1ZTtcbiAgICAgICAgbGV0IGlzTWFzdGVyTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpc01hc3RlcicpPy52YWx1ZSA9PT0gJ3RydWUnO1xuICAgICAgICBsZXQgdXBkYXRlQ2F0ZWdvcnlWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0Vmlld1R5cGUnKT8udmFsdWUgPT09ICdmYWxzZSc7XG4gICAgICAgIGxldCBpc05ld1JvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBuZXdSb3ctJHtyb3d9YCkgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbmV3Um93LSR7cm93fWApLnZhbHVlIDogZmFsc2U7XG4gICAgICAgIGxldCB1b21SYWRpb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcm0tY2hlY2staW5wdXRcIik7XG4gICAgICAgIGxldCB1b21FbGVtZW50O1xuXG4gICAgICAgIHVvbVJhZGlvcy5mb3JFYWNoKGZ1bmN0aW9uICh1b21SYWRpbykge1xuICAgICAgICAgICAgaWYodW9tUmFkaW8udHlwZSA9PSAncmFkaW8nICYmIHVvbVJhZGlvLmlkLmVuZHNXaXRoKHJvdykgJiYgdW9tUmFkaW8uY2hlY2tlZCl7XG4gICAgICAgICAgICAgICAgdW9tRWxlbWVudCA9IHVvbVJhZGlvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHVvbUNvbHVtbk5hbWUgPSB1b21FbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uLW5hbWVcIik7XG5cbiAgICAgICAgaWYgKGNvbHVtbk5hbWUuc3RhcnRzV2l0aChcImluX1wiKSkge1xuICAgICAgICAgICAgZGF0YSA9IGdldEJvb2xlYW5EYXRhKGNvbHVtbk5hbWUpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGRhdGEgPSBnZXRCb29sZWFuRGF0YSh1b21Db2x1bW5OYW1lKTtcbiAgICAgICAgICAgIGRhdGFbY29sdW1uTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFzc2lnbiBhZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gZGF0YSBvYmplY3RcblxuICAgICAgICBkYXRhW1wibGlzdF9pZFwiXSA9IGxpc3RJZDtcbiAgICAgICAgZGF0YVtcInVzZXJfaWRcIl0gPSB1c2VySWQ7XG4gICAgICAgIGRhdGFbXCJpZFwiXSA9IGl0ZW1JZFZhbHVlO1xuICAgICAgICBpZih1cGRhdGVDYXRlZ29yeVZhbHVlKXtcbiAgICAgICAgICAgIGxldCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbUNhdGVnb3J5LScrcm93KS52YWx1ZTtcbiAgICAgICAgICAgIGRhdGFbJ2l0ZW1fY2F0ZWdvcnknXSA9IHNlbGVjdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpdGVtSWRWYWx1ZS5zdGFydHNXaXRoKCduZXcnKSkge1xuICAgICAgICAgICAgY3JlYXRlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNyZWF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdXJsICs9ICcvJyArIGl0ZW1JZFZhbHVlO1xuICAgICAgICAgICAgaWYgKGlzTWFzdGVyTGlzdCkge1xuICAgICAgICAgICAgICAgIGRhdGFbJ3VwZGF0ZU1hc3RlciddID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNOZXdSb3cpIHtcbiAgICAgICAgICAgICAgICBkYXRhWydpc05ld1JvdyddID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZGF0YSBpbiB1cGRhdGU6ICcrIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgLy9QT1NUIHJlcXVlc3RcbiAgICAgICAgYXhpb3MucG9zdCh1cmwsIGRhdGEpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc0RhdGEgPSByZXMuZGF0YTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXNEYXRhLnN0YXR1cyA9PT0gJzEnKSB7XG4gICAgICAgICAgICAgICAgICAgIGZsYXNoQm9yZGVyKGVsZW1lbnQsIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjcmVhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1JZC52YWx1ZSA9IHJlc0RhdGEubmV3SWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZ2V0RGVsZXRlQnRuRGF0YShpdGVtSWQudmFsdWUsIHJvdyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZmxhc2hCb3JkZXIoZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBhbGVydChyZXNEYXRhLm1zZyB8fCBcIlVwZGF0ZSBmYWlsZWQsIHBsZWFzZSBjaGVjayB5b3VyIGlucHV0LlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBFbmhhbmNlZCBlcnJvciBoYW5kbGluZ1xuICAgICAgICAgICAgICAgIGZsYXNoQm9yZGVyKGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhbGVydChcIkZhaWxlZCB0byB1cGRhdGUgbGlzdCBpdGVtLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVXBkYXRlIGVycm9yOlwiLCBlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFpc01hc3Rlckxpc3QpIHtcbiAgICAgICAgICAgIHVwZGF0ZVRvdGFsTGlzdFdlaWdodHMoKTtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRvdGFsTGlzdFdlaWdodHMoKSB7XG4gICAgICAgIGxldCBiYXNlV2VpZ2h0ID0gMDtcbiAgICAgICAgbGV0IHRvdGFsUGFja1dlaWdodCA9IDA7XG4gICAgICAgIGxldCBtYXhQYWNrV2VpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXhQYWNrV2VpZ2h0XCIpLnZhbHVlO1xuICAgICAgICBsZXQgY2xhc3NXYXJuaW5nVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xhc3NXYXJuaW5nVmFsdWUnKS52YWx1ZTtcbiAgICAgICAgbGV0IHVvbVRleHQgPSBcIkxCU1wiO1xuXG4gICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdElkJykudmFsdWU7XG4gICAgICAgIGxldCB1cmwgPSBgL2dldC1wYWNrLWRhdGEvJHtsaXN0SWR9YDtcblxuICAgICAgICBheGlvcy5nZXQodXJsKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgbGV0IGxpc3REYXRhID0gZGF0YS5saXN0RGF0YTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsaXN0IGRhdGEgZm9yIHBhY2sgd2VpZ2h0czogJysgSlNPTi5zdHJpbmdpZnkobGlzdERhdGEpKTtcbiAgICAgICAgICAgIGlmKGRhdGEuc3RhdHVzID09PSAnMScpe1xuICAgICAgICAgICAgICAgYmFzZVdlaWdodCA9IGxpc3REYXRhWydiYXNlV2VpZ2h0J107XG4gICAgICAgICAgICAgICB0b3RhbFBhY2tXZWlnaHQgPSBsaXN0RGF0YVsndG90YWxQYWNrV2VpZ2h0J107XG4gICAgICAgICAgICAgICBtYXhQYWNrV2VpZ2h0ID0gbGlzdERhdGFbJ21heFBhY2tXZWlnaHQnXTtcbiAgICAgICAgICAgICAgIHVvbVRleHQ9IGxpc3REYXRhWyd3ZWlnaHRVb20nXTtcbiAgICAgICAgICAgICAgIGNsYXNzV2FybmluZ1ZhbHVlID1saXN0RGF0YVsnY2xhc3NXYXJuaW5nVmFsdWUnXVxuXG4gICAgICAgICAgICAgICBpZiAoK2Jhc2VXZWlnaHQgPiArbWF4UGFja1dlaWdodCkge1xuICAgICAgICAgICAgICAgICAgIGxldCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWlnaHRXYXJuaW5nLWRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICBkaXZFbGVtZW50LmlubmVyVGV4dCA9XCJCYXNlIHdlaWdodCAoXCIgKyAgYmFzZVdlaWdodC50b0ZpeGVkKDMpICtcIiBcIiArdW9tVGV4dCArXCIpIGV4Y2VlZGVzIHRoZSB3ZWlnaHQgZm9yIHRoZSAnXCIgK2NsYXNzV2FybmluZ1ZhbHVlK1wiJyBzdHlsZSBvZiBoaWtpbmcuXCI7XG5cbiAgICAgICAgICAgICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VpZ2h0V2FybmluZy1kaXZcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2VXZWlnaHRcIikudmFsdWUgPSBiYXNlV2VpZ2h0LnRvRml4ZWQoMyk7XG4gICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdGFsUGFja1dlaWdodFwiKS52YWx1ZSA9XG4gICAgICAgICAgICAgICAgICAgdG90YWxQYWNrV2VpZ2h0LnRvRml4ZWQoMyk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBhbGVydChkYXRhLm1zZyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlTGlzdEl0ZW1JbnB1dChcbiAgICAgICAgdHlwZSxcbiAgICAgICAgbmFtZUJhc2UsXG4gICAgICAgIHJvdyxcbiAgICAgICAgY29sdW1uTmFtZSxcbiAgICAgICAgbGlzdGVuID0gdHJ1ZVxuICAgICkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgZWxlbWVudC50eXBlID0gdHlwZTtcbiAgICAgICAgZWxlbWVudC5uYW1lID0gbmFtZUJhc2UgKyBcIltdXCI7XG4gICAgICAgIGVsZW1lbnQuaWQgPSBuYW1lQmFzZSArIFwiLVwiICsgcm93O1xuICAgICAgICBlbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIsIGNvbHVtbk5hbWUpO1xuICAgICAgICBpZihsaXN0ZW4pe1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVMaXN0SXRlbShlbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRDYXRlZ3JveVNlbGVjdChyb3csIGdyb3VwQ2F0ZWdvcnkgPSBudWxsLCBsaXN0ZW4gPSB0cnVlKSB7XG5cbiAgICAgICAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgIHNlbGVjdC5pZCA9IFwiaXRlbUNhdGVnb3J5LVwiICsgcm93O1xuICAgICAgICBzZWxlY3QubmFtZSA9IFwiaXRlbUNhdGVnb3J5LVwiICsgcm93O1xuICAgICAgICBzZWxlY3Quc2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4tbmFtZVwiLCBcIml0ZW1fY2F0ZWdvcnlcIik7XG4gICAgICAgIHNlbGVjdC5jbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiO1xuXG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgICBvcHRpb24udGV4dCA9IFwiQ2hvb3NlXCI7XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICBsZXQgb3B0aW9uTGlzdDtcblxuICAgICAgICBvcHRpb25MaXN0ID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcIi9saXN0LWl0ZW0tY2F0ZWdvcmllc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIGVycm9yXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG5cbiAgICAgICAgb3B0aW9uTGlzdCgpLnRoZW4oKGRhdGEpID0+IHtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gZGF0YVtpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IGRhdGFbaV0uY2F0ZWdvcnk7XG4gICAgICAgICAgICAgICAgaWYgKGdyb3VwQ2F0ZWdvcnkgIT0gbnVsbCAmJiBkYXRhW2ldLnZhbHVlID09PSBncm91cENhdGVnb3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYobGlzdGVuKXtcbiAgICAgICAgICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVMaXN0SXRlbShzZWxlY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHJldHVybiBzZWxlY3Q7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1ldHJpY1JhZGlvVG9VcygpIHtcbiAgICAgICAgbGV0IGlucHV0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1ldHJpYy1yYWRpb1wiKTtcbiAgICAgICAgaW5wdXRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxldCBpZEFyciA9IGlucHV0RWxlbWVudC5pZC5zcGxpdChcIi1cIik7XG4gICAgICAgICAgICBsZXQgdW9tID0gaWRBcnJbMV07XG4gICAgICAgICAgICBsZXQgcm93ID0gaWRBcnJbaWRBcnIubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBsZXQgZWxlbWVudFR5cGUgPSBpbnB1dEVsZW1lbnQudHlwZTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50VGFnID0gaW5wdXRFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgbGV0IG5ld0VsZW1lbnQ7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50VHlwZSA9PT0gXCJyYWRpb1wiICYmIHVvbSA9PT0gXCJncmFtXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlUmFkaW8oXCJpbl9vdW5jZXNcIiwgXCJPWlwiLCBcIm96XCIsIHJvdywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUeXBlID09PSBcInJhZGlvXCIgJiYgdW9tID09PSBcImtnXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlUmFkaW8oXCJpbl9sYnNcIiwgXCJMQlNcIiwgXCJsYnNcIiwgcm93KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFRhZyA9PT0gXCJsYWJlbFwiICYmIHVvbSA9PT0gXCJncmFtXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlTGFiZWwoXCJPWlwiLCBcInVvbS1vei1cIiArIHJvdywgXCJvelwiLCByb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VGFnID09PSBcImxhYmVsXCIgJiYgdW9tID09PSBcImtnXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlTGFiZWwoXCJMQlNcIiwgXCJ1b20tbGJzLVwiICsgcm93LCBcImxic1wiLCByb3cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmV3RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZChcbiAgICAgICAgICAgICAgICAgICAgbmV3RWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVzUmFkaW9Ub01ldHJpYygpIHtcbiAgICAgICAgbGV0IGlucHV0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnVzLXJhZGlvXCIpO1xuICAgICAgICBpbnB1dEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGlucHV0RWxlbWVudCkge1xuICAgICAgICAgICAgbGV0IGlkQXJyID0gaW5wdXRFbGVtZW50LmlkLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgICAgIGxldCB1b20gPSBpZEFyclsxXTtcbiAgICAgICAgICAgIGxldCByb3cgPSBpZEFycltpZEFyci5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50VHlwZSA9IGlucHV0RWxlbWVudC50eXBlO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRUYWcgPSBpbnB1dEVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgbGV0IG5ld0VsZW1lbnQ7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50VHlwZSA9PT0gXCJyYWRpb1wiICYmIHVvbSA9PT0gXCJvelwiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZVJhZGlvKFwiaW5fZ3JhbXNcIiwgXCJHUlwiLCBcImdyYW1cIiwgcm93KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFR5cGUgPT09IFwicmFkaW9cIiAmJiB1b20gPT09IFwibGJzXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlUmFkaW8oXCJpbl9raWxvc1wiLCBcIktHXCIsIFwia2dcIiwgcm93KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFRhZyA9PT0gXCJsYWJlbFwiICYmIHVvbSA9PT0gXCJvelwiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZUxhYmVsKFwiR1wiLCBcInVvbS1ncmFtLVwiICsgcm93LCBcImdyYW1cIiwgcm93KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFRhZyA9PT0gXCJsYWJlbFwiICYmIHVvbSA9PT0gXCJsYnNcIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVMYWJlbChcIktHXCIsIFwidW9tLWtnLVwiICsgcm93LCBcImtnXCIsIHJvdyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuZXdFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKFxuICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlUmFkaW8oZGF0YUNvbHVtbk5hbWUsIGxhYmVsLCB1b20sIHJvdykge1xuICAgICAgICBsZXQgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHJhZGlvLmNsYXNzTmFtZSA9XG4gICAgICAgICAgICBcImZvcm0tY2hlY2staW5wdXRcIiArXG4gICAgICAgICAgICAodW9tID09PSBcImdyYW1cIiB8fCB1b20gPT09IFwia2dcIiA/IFwiIG1ldHJpYy1yYWRpb1wiIDogXCIgdXMtcmFkaW9cIik7XG4gICAgICAgIHJhZGlvLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgICAgIHJhZGlvLm5hbWUgPSBcInVvbS1cIiArIHJvdyArIFwiW11cIjtcbiAgICAgICAgcmFkaW8uaWQgPSBcInVvbS1cIiArIHVvbSArIFwiLVwiICsgcm93O1xuICAgICAgICByYWRpby5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIsIGRhdGFDb2x1bW5OYW1lKTtcblxuICAgICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHVwZGF0ZUl0ZW1VT00ocm93LCByYWRpbyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmFkaW87XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxhYmVsKGlubmVySHRtbCwgaHRtbEZvciwgdW9tLCByb3csIGxpbmVMYWJlbCA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgbGFiZWwuY2xhc3NOYW1lID1cbiAgICAgICAgICAgIFwiZm9ybS1jaGVjay1sYWJlbFwiICtcbiAgICAgICAgICAgICh1b20gPT09IFwiZ3JhbVwiIHx8IHVvbSA9PT0gXCJrZ1wiID8gXCIgbWV0cmljLXJhZGlvXCIgOiBcIiB1cy1yYWRpb1wiKTtcbiAgICAgICAgbGFiZWwuaHRtbEZvciA9IGh0bWxGb3I7XG4gICAgICAgIGxhYmVsLmlubmVySFRNTCA9IGlubmVySHRtbDtcbiAgICAgICAgaWYgKCFsaW5lTGFiZWwpIHtcbiAgICAgICAgICAgIGxhYmVsLmlkID0gXCJ1b20tXCIgKyB1b20gKyBcIi1sYWJlbC1cIiArIHJvdztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhYmVsLmlkID0gXCJsaW5lLXVvbS1sYWJlbC1cIiArIHJvdztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9XG5cbiAgICB0aGlzLndpbmRvdy51cGRhdGVMaXN0ID0gZnVuY3Rpb24gdXBkYXRlTGlzdChlbGVtZW50LCBsaXN0SWQpIHtcbiAgICAgICAgbGV0IGNvbHVtbk5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uLW5hbWVcIik7XG4gICAgICAgIGxldCB2YWx1ZSA9IGVsZW1lbnQudmFsdWU7XG4gICAgICAgIGxldCB1cmwgPSBcIi9nZWFyLWxpc3QvXCIgKyBsaXN0SWQ7XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgZGF0YVtjb2x1bW5OYW1lXSA9IHZhbHVlO1xuXG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdCh1cmwsIGRhdGEsIGxpc3RJZClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5zdGF0dXMgPT09ICcxJyl7XG4gICAgICAgICAgICAgICAgICAgIGZsYXNoQm9yZGVyKGVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBmbGFzaEJvcmRlcihlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KHJlcy5kYXRhLm1zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGFsZXJ0KHJlcy5kYXRhLm1zZyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChcIkZhaWxlZCB0byB1cGRhdGUgbGlzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNvbHVtbk5hbWUgPT09IFwic29ydFwiIHx8IGNvbHVtbk5hbWUgPT09IFwibGlzdF9jbGFzc1wiIHx8IGNvbHVtbk5hbWUgPT09ICdsaXN0X2l0ZW1zJykge1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGVhZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbS1jb2xsYXBzaWJsZS1oZWFkZXJcIik7XG5cbiAgICBoZWFkZXJzLmZvckVhY2goKGhlYWRlcikgPT4ge1xuICAgICAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBoZWFkZXIubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgY29uc3QgYXJyb3cgPSBoZWFkZXIucXVlcnlTZWxlY3RvcihcIi5pdGVtLWFycm93XCIpO1xuICAgICAgICAgICAgaWYgKGNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BlblwiKSkge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUucGFkZGluZyA9IFwiMCAxMHB4XCI7XG4gICAgICAgICAgICAgICAgYXJyb3cuaW5uZXJIVE1MID0gXCImIzk2NjBcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUucGFkZGluZyA9IFwiMTBweFwiO1xuICAgICAgICAgICAgICAgIGFycm93LmlubmVySFRNTCA9IFwiJiM5NjUwXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgbGV0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbWFzdGVyLWl0ZW0tdGFibGUgaW5wdXRcIik7XG5cbiAgICBpbnB1dHMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgaW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgbGV0IGxpc3RDaGFydGJ0biA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RDaGFydEJ0blwiKTtcbiAgICBpZihsaXN0Q2hhcnRidG4gIT09IG51bGwpe1xuICAgICAgICBkb2N1bWVudCAuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0Q2hhcnRCdG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RJZFwiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCB1cmwgPSBcIi9nZWFyLWxpc3QtYW5hbHl0aWNzL1wiICsgbGlzdElkO1xuXG4gICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAgIC5nZXQodXJsKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoYXJ0U3RhdHVzID0gQ2hhcnQuZ2V0Q2hhcnQoXCJnZWFyQ2hhcnRcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXJ0U3RhdHVzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnRTdGF0dXMuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZWFyQ2hhcnRcIik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGFydERhdGEgPSBKU09OLnBhcnNlKHJlcy5kYXRhLmNoYXJ0RGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRvdWdobnV0XCIsIC8vIENoYXJ0IHR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IGNoYXJ0RGF0YS5sYWJlbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGFiZWw6IGxpc3ROYW1lICsgJ0JyZWFrIERvd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogY2hhcnREYXRhLndlaWdodHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNoYXJ0RGF0YS5jb2xvcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyT2Zmc2V0OiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3V0b3V0OiA0NSwgLy8gQWRqdXN0IHRoZSBjdXRvdXQgcGVyY2VudGFnZSBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiAxNTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhbGFiZWxzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmYnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlUm90YXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlU2NhbGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhc2VXZWlnaHQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNlV2VpZ2h0XCIpLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdG90YWxQYWNrV2VpZ2h0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG90YWxQYWNrV2VpZ2h0XCIpLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsQmFzZVdlaWdodFwiKS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlV2VpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsVG90YWxXZWlnaHRcIikudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxQYWNrV2VpZ2h0O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgdGhpcy53aW5kb3cuc2hvd0NvbnZyc2lvbkFsZXJ0ID0gZnVuY3Rpb24gc2hvd0NvbnZyc2lvbkFsZXJ0KCl7XG4gICAgICAgIGFsZXJ0KCdDaGFuZ2luZyB0aGlzIHZhbHVlIHdpbGwgYWxzbyB1cGRhdGUgdGhlIHVuaXRzIG9mIG1lYXN1cmUgYW5kIGFzc29jaWF0ZWQgdmFsdWVzIGZvciBhbnkgaXRlbSBvbiB0aGlzIGdlYXIgbGlzdC4nKTtcbiAgICB9XG4gICAgdGhpcy53aW5kb3cuY29uZmlybURlbGV0ZSA9IGZ1bmN0aW9uIGNvbmZpcm1EZWxldGUoZWxlbWVudCkge1xuXG4gICAgICAgIC8vIGxldCBpc01hc3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpc01hc3RlcicpLnZhbHVlO1xuICAgICAgICBsZXQgaXNNYXN0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXNNYXN0ZXInKT8udmFsdWUgPT09ICd0cnVlJztcbiAgICAgICAgaWYoIWlzTWFzdGVyKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpcyBtYXN0ZXI6ICcrIGlzTWFzdGVyKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaHJlZiA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWhyZWYnKTtcbiAgICAgICAgbGV0IG5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vYmplY3QtbmFtZScpO1xuICAgICAgICBsZXQgb2JqZWN0VHlwZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9iamVjdC10eXBlJyk7XG4gICAgICAgIGxldCBhbmNob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlT2JqZWN0QW5jaG9yJyk7XG4gICAgICAgIGxldCBtb2RhbEJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlTW9kYWxCb2R5Jyk7XG4gICAgICAgIGxldCB0ZXh0ID0gYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgJHtvYmplY3RUeXBlfSAke25hbWV9P2A7XG4gICAgICAgIGxldCBoZWxwZXJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlSGVscGVyJyk7XG4gICAgICAgIGxldCBoZWxwdGV4dDtcbiAgICAgICAgaGVscGVyRGl2LmlubmVyVGV4dCA9ICcnO1xuICAgICAgICBpZihuYW1lID09ICcnIHx8IG5hbWUgPT09IG51bGwgfHwgbmFtZSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHRleHQgPSBgQXJlIHlvdSBzdXJlP2A7XG4gICAgICAgIH1cbiAgICAgICAgaWYob2JqZWN0VHlwZSA9PT0gJ2l0ZW06JyAmJiBpc01hc3RlciA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgbGV0IGxpc3ROYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1uYW1lJyk7XG4gICAgICAgICAgICBoZWxwdGV4dCA9IGAqRGVsZXRpbmcgYW4gaXRlbSBmcm9tIHRoaXMgbGlzdCAoJHtsaXN0TmFtZX0pIHdpbGwgbm90IGRlbGV0ZSBpdCB0aGUgJ1lvdXIgR2Vhcicgc2VjdGlvbi5gO1xuICAgICAgICAgICAgaGVscGVyRGl2LmFwcGVuZChoZWxwdGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihvYmplY3RUeXBlID09PSAnaXRlbTonICYmIGlzTWFzdGVyID09PSB0cnVlKXtcbiAgICAgICAgICAgIGhlbHB0ZXh0ID0gYCpEZWxldGluZyBhbiBpdGVtIGZyb20gdGhlICdZb3VyIEdlYXInIHNlY3Rpb24gd2lsbCBkZWxldGUgaXQgZnJvbSBhbGwgJ0dlYXIgTGlzdHMnLmA7XG4gICAgICAgICAgICBoZWxwZXJEaXYuYXBwZW5kKGhlbHB0ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKG9iamVjdFR5cGUgPT09ICdjYXRlZ29yeTonICYmIGlzTWFzdGVyID09PWZhbHNlKXtcbiAgICAgICAgICAgIHRleHQgPSBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBhbGwgaXRlbXMgaW4gdGhlICR7bmFtZX0gY2F0ZWdvcnkgZnJvbSB0aGlzIGxpc3Q/YDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKG9iamVjdFR5cGUgPT09ICdjYXRlZ29yeTonICYmIGlzTWFzdGVyID09PXRydWUpe1xuICAgICAgICAgICAgdGV4dCA9IGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIGFsbCBpdGVtcyBpbiB0aGUgJHtuYW1lfSBjYXRlZ29yeSBmcm9tIEFMTCB5b3VyIGxpc3RzP2A7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihvYmplY3RUeXBlID09PSAnbGlzdDonICl7XG4gICAgICAgICAgICB0ZXh0ID0gYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhlICR7bmFtZX0gbGlzdD9gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBoZWxwZXJEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuXG4gICAgICAgIG1vZGFsQm9keS5pbm5lckhUTUwgPSB0ZXh0O1xuICAgICAgICBhbmNob3Iuc2V0QXR0cmlidXRlKCdocmVmJyxocmVmKTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVJvdyhyb3cpe1xuXG4gICAgICAgIGxldCB0YWJsZVJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByb3ctJHtyb3d9YClcbiAgICAgICAgICAgIHRhYmxlUm93LnJlbW92ZSgpO1xuXG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZURlbGV0ZUJ1dHRvbihyb3cpIHtcbiAgICAgICAgbGV0IGlzTWFzdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzTWFzdGVyJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gJ2J0biBidG4tc20gYnRuLWRhbmdlcic7XG4gICAgICAgIGJ1dHRvbi50aXRsZSA9ICdEZWxldGUgSXRlbSc7XG4gICAgICAgIGJ1dHRvbi5pZCA9YGRlbGV0ZUl0ZW1CdG4tJHtyb3d9YDtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1ocmVmJywnJyk7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtb2JqZWN0LW5hbWUnLCcnKTtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1vYmplY3QtaWQnLCcnKTtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1vYmplY3QtdHlwZScsJ2l0ZW06Jyk7XG4gICAgICAgIGlmKGlzTWFzdGVyID09PSAnZmFsc2UnKXtcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1uYW1lJyxkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdE5hbWUnKS52YWx1ZSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1saXN0LW5hbWUnLCdtYXN0ZXInKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgaWNvbi5jbGFzc05hbWUgPSAnZmFzIGZhLXRyYXNoJztcblxuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZW1vdmVSb3cocm93KTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERlbGV0ZUJ0bkRhdGEoaWQscm93KXtcbiAgICAgICAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZWxldGVJdGVtQnRuLSR7cm93fWApO1xuICAgICAgICBsZXQgdXJsID0gYC9saXN0LWl0ZW0vJHtpZH1gO1xuXG4gICAgICAgIGF4aW9zXG4gICAgICAgIC5nZXQodXJsKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzICE9IFwiMVwiKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQocmVzLmRhdGEubXNnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBpdGVtID0gcmVzLmRhdGEuaXRlbTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaHJlZicsYC9yZW1vdmUtbGlzdC1pdGVtLyR7aXRlbS5pZH1gKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtb2JqZWN0LW5hbWUnLGl0ZW0uaXRlbV9uYW1lKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtb2JqZWN0LWlkJyxpdGVtLmlkKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdG9nZ2xlJyxcIm1vZGFsXCIpXG4gICAgICAgICAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRhcmdldCcsXCIjZGVsZXRlQWxlcnRNb2RhbFwiKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBjb25maXJtRGVsZXRlKGRlbGV0ZUJ0bik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KGVycik7XG4gICAgICAgIH0pO1xuXG5cbiAgICB9XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNvcnRhYmxlXCIpLmZvckVhY2goZnVuY3Rpb24gKHRhYmxlKSB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5SWQgPSB0YWJsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNhdGVnb3J5LWlkXCIpO1xuXG4gICAgICAgIG5ldyBTb3J0YWJsZSh0YWJsZS5xdWVyeVNlbGVjdG9yKFwidGJvZHlcIiksIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogMTUwLFxuICAgICAgICAgICAgb25FbmQ6IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIG5ldyBvcmRlciBvZiBpdGVtc1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yZGVyZWRJZHMgPSBbXTtcbiAgICAgICAgICAgICAgICB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwidHJcIikuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICAgICAgICAgIG9yZGVyZWRJZHMucHVzaChyb3cuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBTZW5kIHRoZSBuZXcgb3JkZXIgdG8gdGhlIHNlcnZlciB2aWEgQUpBWFxuICAgICAgICAgICAgICAgIHVwZGF0ZUl0ZW1PcmRlcihjYXRlZ29yeUlkLCBvcmRlcmVkSWRzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIHVwZGF0ZUl0ZW1PcmRlcihjYXRlZ29yeUlkLCBvcmRlcmVkSWRzKSB7XG5cbiAgICAgICAgbGV0IGxpc3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdElkXCIpLnZhbHVlO1xuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBcIlgtQ1NSRi1UT0tFTlwiOiBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJylcbiAgICAgICAgICAgICAgICAuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKSxcbiAgICAgICAgICAgIGNhdGVnb3J5X2lkOiBjYXRlZ29yeUlkLFxuICAgICAgICAgICAgb3JkZXJlZF9pZHM6IG9yZGVyZWRJZHMsXG4gICAgICAgICAgICBsaXN0X2lkOiBsaXN0SWQsXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHVybCA9IFwiL3VwZGF0ZS1saXN0LW9yZGVyXCI7XG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdCh1cmwsIGRhdGEpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cyAhPSBcIjFcIikge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChyZXMuZGF0YS5tc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBsZXQgc29ydGluZ1NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydEJ5XCIpO1xuICAgICAgICBsZXQgb3B0cyA9IHNvcnRpbmdTZWxlY3Qub3B0aW9ucy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0czsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc29ydGluZ1NlbGVjdC5vcHRpb25zW2ldLnZhbHVlID09IFwiZHJhZ19kcm9wXCIpIHtcbiAgICAgICAgICAgICAgICBzb3J0aW5nU2VsZWN0Lm9wdGlvbnNbaV0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHBhcmVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJlbnQtY29udGFpbmVyJyk7XG5cbiAgICBpZihwYXJlbnRDb250YWluZXIgIT09IG51bGwgJiYgcGFyZW50Q29udGFpbmVyICE9PSB1bmRlZmluZWQpe1xuICAgICAgICBTb3J0YWJsZS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcmVudC1jb250YWluZXInKSwge1xuICAgICAgICAgICAgYW5pbWF0aW9uOiAxNTAsXG4gICAgICAgICAgICBoYW5kbGU6ICcuaXRlbS1jb2xsYXBzaWJsZS1oZWFkZXInLFxuICAgICAgICAgICAgZ2hvc3RDbGFzczogJ3NvcnRhYmxlLWdob3N0JyxcbiAgICAgICAgICAgIG9uRW5kOiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAgICAgLy8gQWZ0ZXIgc29ydGluZyBpcyBjb21wbGV0ZWQsIHVwZGF0ZSB0aGUgcG9zaXRpb25zIGluIHRoZSBkYXRhYmFzZVxuICAgICAgICAgICAgICAgIHVwZGF0ZUNhdGVnb3J5T3JkZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNhdGVnb3J5T3JkZXIoKSB7XG5cbiAgICAgICAgY29uc3QgbmV3T3JkZXIgPSBbXTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyYWdnYWJsZS1jb250YWluZXInKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuXG4gICAgICAgICAgICBuZXdPcmRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICBpdGVtX2NhdGVnb3J5OiBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1jYXRlZ29yeS12YWx1ZScpLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5X29yZGVyOiBpbmRleFxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdXJsID0gXCIvdXBkYXRlLWNhdGVyb2dyeS1vcmRlclwiO1xuICAgICAgICBsZXQgbGlzdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0SWRcIikudmFsdWU7XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIFwiWC1DU1JGLVRPS0VOXCI6IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKVxuICAgICAgICAgICAgICAgIC5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpLFxuICAgICAgICAgICAgY2F0ZWdvcnlfb3JkZXI6IG5ld09yZGVyLFxuICAgICAgICAgICAgbGlzdF9pZDogbGlzdElkLFxuICAgICAgICB9O1xuICAgICAgICAvL2JyZWFrIG91dCBwb3N0cyBhbmQgZ2V0IGNhbGxzIHRvIG93biBmdW5jdGlvbnNcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC5wb3N0KHVybCwgZGF0YSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgIT0gXCIxXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQocmVzLmRhdGEubXNnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBsZXQgYXNzaWduVG9MaXN0TW9kYWwgPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0Fzc2lnbkl0ZW1Ub0xpc3RNb2RhbCcpO1xuXG4gICAgaWYoYXNzaWduVG9MaXN0TW9kYWwgIT09IHVuZGVmaW5lZCAmJiBhc3NpZ25Ub0xpc3RNb2RhbCAhPT0gbnVsbCl7XG5cbiAgICAgICAgYXNzaWduVG9MaXN0TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignaGlkZS5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCB0YWJsZUJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtYXNzaWduLWl0ZW0tdGFibGUtYm9keScpO1xuICAgICAgICAgICAgd2hpbGUodGFibGVCb2R5LmZpcnN0Q2hpbGQpe1xuICAgICAgICAgICAgICAgIHRhYmxlQm9keS5yZW1vdmVDaGlsZCh0YWJsZUJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbn0pO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbndpbmRvdy5heGlvcyA9IGF4aW9zO1xuXG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIk1vZGFsIiwiQ2hhcnQiLCJTb3J0YWJsZSIsImJvb3RzdHJhcCIsInJlcXVpcmUiLCJncmFtQ29udmVydGVyIiwib3VuY2VDb252ZXJ0ZXIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2hvd1Bhc3N3b3JkIiwiaWQiLCJwYXNzd29yZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRNYXN0ZXJMaXN0SXRlbSIsIm51bWJlck9mSXRlbXNUb0FkZCIsImxpbmVzVG9BZGQiLCJsaXN0QnlJdGVtcyIsImxpc3RlbiIsIml0ZW1UYWJsZSIsInJvdyIsImNyZWF0ZUVsZW1lbnQiLCJjZWxsMSIsIml0ZW1OYW1lIiwiY3JlYXRlTGlzdEl0ZW1JbnB1dCIsInBsYWNlaG9sZGVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2VsbDYiLCJkZWxldGVCdG4iLCJjcmVhdGVEZWxldGVCdXR0b24iLCJjZWxsMiIsIml0ZW1XZWlnaHQiLCJzZXRBdHRyaWJ1dGUiLCJjZWxsMyIsInNlbGVjdCIsImNsYXNzTmFtZSIsIm96T3B0aW9uIiwibGJzT3B0aW9uIiwiZ3JPcHRpb24iLCJrZ09wdGlvbiIsInRleHQiLCJhcHBlbmRDaGlsZCIsInNlbGVjdENlbGwiLCJjYXRlZ29yeVNlbGVjdCIsImdldENhdGVncm95U2VsZWN0IiwiYXBwZW5kIiwic2hvd0xpc3RBc3NpZ25Nb2RhbCIsIml0ZW1JZCIsInRhYmxlIiwiaGVhZGVyIiwiaW5uZXJIVE1MIiwidXJsIiwidXNlckxpc3RzIiwiYXhpb3MiLCJnZXQiLCJyZXMiLCJkYXRhIiwic3RhdHVzIiwiYWxlcnQiLCJtc2ciLCJsaXN0TmFtZUNlbGwiLCJhc3NpZ25DZWxsIiwiY2hlY2tib3giLCJpdGVtQXNzaWduZWQiLCJjaGVja2VkIiwic2hvd0dlYXJBc3NpZ25Nb2RhbCIsImxpc3RJZCIsInVzZXJJdGVtcyIsIml0ZW1OYW1lQ2VsbCIsIml0ZW1DYXRlZ29yeUNlbGwiLCJpdGVtV2VpZ2h0Q2VsbCIsIml0ZW1VT01DZWxsIiwiaXRlbV9uYW1lIiwiaXRlbV9jYXRlZ29yeSIsIml0ZW1fd2VpZ2h0IiwidW9tIiwiaXRlbV9pZCIsImFzc2lnblRvR2Vhckxpc3QiLCJlbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwibGlzdF9pZCIsInBvc3QiLCJyZXNwb25zZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImFkZExpc3RJdGVtIiwiY2F0ZWdvcnljb3VudGVyIiwidW5kZWZpbmVkIiwiZ3JvdXBDYXRlZ29yeSIsImxpc3RWaWV3SW5wdXQiLCJsaXN0VU9NIiwiZmluYWxJRWxlbWVudCIsInRhYmxlQ2F0ZWdvcnkiLCJ1c2VySWQiLCJmaW5hbEkiLCJjZWxsMCIsInNjb3BlIiwiY291bnRlciIsImxpc3RWaWV3VHlwZSIsIm5ld1JvdyIsImxpbmVVb21DZWxsIiwicm93VW9tIiwicmFkaW8xIiwiY3JlYXRlUmFkaW8iLCJyYWRpb0xhYmVsMSIsImNyZWF0ZUxhYmVsIiwicmFkaW8yIiwicmFkaW9MYWJlbDIiLCJyYWRpbzMiLCJyYWRpb0xhYmVsMyIsInJhZGlvNCIsInJhZGlvTGFiZWw0IiwicmFkaW9MYWJlbDUiLCJjZWxsNCIsInBhY2tlZEFtb3VudCIsImNlbGw1IiwidG90YWxMaW5lV2VpZ2h0IiwiaWNvbkNlbGwiLCJpY29uIiwiYWRkRXZlbnRMaXN0ZW5lcldlaWdodENhbGMiLCJjb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwidXBkYXRlVU9NIiwidXNSYWRpb1RvTWV0cmljIiwibWV0cmljUmFkaW9Ub1VzIiwibmVlZGVkRm9yV2VpZ2h0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuZWVkZWRGb3JXZWlnaHQiLCJnZXRMaW5lVG90YWxXZWlnaHQiLCJjb252ZXJ0Iiwid2VpZ2h0IiwibGluZVRvdGFsV2VpZ2h0RWxlbWVudCIsImxpbmVUb3RhbCIsInRvRml4ZWQiLCJyZXBsYWNlIiwidXBkYXRlTGlzdEl0ZW0iLCJ1cGRhdGVJdGVtVU9NIiwiSFRNTEVsZW1lbnQiLCJ1b21FbGVtZW50IiwiY29uY2F0IiwiY29sdW1uTmFtZSIsImxhYmVsIiwibGFiZWxIVE1MIiwibmV3VU9NIiwiaXNOZXdSb3ciLCJzdGFydHNXaXRoIiwiZW5kc1dpdGgiLCJnZXRCb29sZWFuRGF0YSIsInJlc0RhdGEiLCJpdGVtIiwiZmxhc2hCb3JkZXIiLCJlcnIiLCJhZGRDYXRlZ29yeUdyb3VwIiwiY2F0ZWdvcnkiLCJsb2NhdGlvbiIsInJlbG9hZCIsImlzU3VjY2VzcyIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwic2V0VGltZW91dCIsIl9kb2N1bWVudCRnZXRFbGVtZW50QiIsIl9kb2N1bWVudCRnZXRFbGVtZW50QjIiLCJfZG9jdW1lbnQkZ2V0RWxlbWVudEIzIiwiX2RvY3VtZW50JGdldEVsZW1lbnRCNCIsImlkQXJyIiwic3BsaXQiLCJpdGVtSWRWYWx1ZSIsImlzTWFzdGVyTGlzdCIsInVwZGF0ZUNhdGVnb3J5VmFsdWUiLCJ1b21SYWRpb3MiLCJ1b21SYWRpbyIsInVvbUNvbHVtbk5hbWUiLCJuZXdJZCIsImdldERlbGV0ZUJ0bkRhdGEiLCJ1cGRhdGVUb3RhbExpc3RXZWlnaHRzIiwiYmFzZVdlaWdodCIsInRvdGFsUGFja1dlaWdodCIsIm1heFBhY2tXZWlnaHQiLCJjbGFzc1dhcm5pbmdWYWx1ZSIsInVvbVRleHQiLCJsaXN0RGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkaXZFbGVtZW50IiwiaW5uZXJUZXh0IiwiZGlzcGxheSIsIm5hbWVCYXNlIiwib3B0aW9uIiwib3B0aW9uTGlzdCIsIl9yZWYiLCJfY2FsbGVlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInQwIiwic2VsZWN0ZWQiLCJpbnB1dEVsZW1lbnRzIiwiaW5wdXRFbGVtZW50IiwiZWxlbWVudFR5cGUiLCJlbGVtZW50VGFnIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwibmV3RWxlbWVudCIsInBhcmVudEVsZW1lbnQiLCJyZXBsYWNlQ2hpbGQiLCJkYXRhQ29sdW1uTmFtZSIsInJhZGlvIiwiaW5uZXJIdG1sIiwiaHRtbEZvciIsImxpbmVMYWJlbCIsInVwZGF0ZUxpc3QiLCJoZWFkZXJzIiwiY29udGVudCIsIm5leHRFbGVtZW50U2libGluZyIsImFycm93IiwiY29udGFpbnMiLCJyZW1vdmUiLCJtYXhIZWlnaHQiLCJwYWRkaW5nIiwic2Nyb2xsSGVpZ2h0IiwiaW5wdXRzIiwiaW5wdXQiLCJkaXNhYmxlZCIsImxpc3RDaGFydGJ0biIsImNoYXJ0U3RhdHVzIiwiZ2V0Q2hhcnQiLCJkZXN0cm95IiwiY3R4IiwiY2hhcnREYXRhIiwicGFyc2UiLCJteUNoYXJ0IiwibGFiZWxzIiwiZGF0YXNldHMiLCJ3ZWlnaHRzIiwiY29sb3JzIiwiYm9yZGVyV2lkdGgiLCJob3Zlck9mZnNldCIsIm9wdGlvbnMiLCJjdXRvdXQiLCJyYWRpdXMiLCJsZWdlbmQiLCJwbHVnaW5zIiwiZGF0YWxhYmVscyIsImNvbG9yIiwiYW5pbWF0aW9uIiwiYW5pbWF0ZVJvdGF0ZSIsImFuaW1hdGVTY2FsZSIsInRleHRDb250ZW50Iiwic2hvd0NvbnZyc2lvbkFsZXJ0IiwiY29uZmlybURlbGV0ZSIsIl9kb2N1bWVudCRnZXRFbGVtZW50QjUiLCJpc01hc3RlciIsImhyZWYiLCJvYmplY3RUeXBlIiwiYW5jaG9yIiwibW9kYWxCb2R5IiwiaGVscGVyRGl2IiwiaGVscHRleHQiLCJsaXN0TmFtZSIsInJlbW92ZVJvdyIsInRhYmxlUm93IiwiYnV0dG9uIiwidGl0bGUiLCJvbmNsaWNrIiwiY2F0ZWdvcnlJZCIsIm9uRW5kIiwiZXZ0Iiwib3JkZXJlZElkcyIsInVwZGF0ZUl0ZW1PcmRlciIsImNhdGVnb3J5X2lkIiwib3JkZXJlZF9pZHMiLCJzb3J0aW5nU2VsZWN0Iiwib3B0cyIsInBhcmVudENvbnRhaW5lciIsImdob3N0Q2xhc3MiLCJ1cGRhdGVDYXRlZ29yeU9yZGVyIiwibmV3T3JkZXIiLCJpbmRleCIsImNhdGVnb3J5X29yZGVyIiwiYXNzaWduVG9MaXN0TW9kYWwiLCJ0YWJsZUJvZHkiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJkZWZhdWx0cyIsImNvbW1vbiJdLCJzb3VyY2VSb290IjoiIn0=