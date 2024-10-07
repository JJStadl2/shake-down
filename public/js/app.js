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
  // this.window.convertMeasurement = function convertMeasurement(
  //     row,
  //     convert = false
  // ) {
  //     let listId = document.getElementById('listId').value;
  //     let uom =  document.getElementById("uom-"+row).value;
  //     let isMasterList = document.getElementById('isMaster').value;

  //     // if(isMasterList === 'true'){
  //     //     uom = document.getElementById("uom-"+row).value;
  //     // }else{
  //     //     uom = document.getElementById("uom").value;
  //     // }

  //     // if(listId == 'master'){
  //     //     uom = document.getElementById("uom-"+row).value;
  //     // }else{
  //     //     uom = document.getElementById("uom").value;
  //     // }
  //     let weight = document.getElementById("itemWeight-" + row);
  //     let packedAmount = document.getElementById("packedAmount-" + row).value;
  //     let totalWeight = document.getElementById("totalLineWeight-" + row);
  //     let totalLineWeightValue = 0;
  //     let weightValue = weight.value;
  //     let small;
  //     let large;
  //     let element;
  //     let label = document.getElementById("line-uom-label-" + row);
  //     let labelHTML;

  //     if (uom === "us") {
  //         small = document.getElementById("uom-oz-" + row);
  //         large = document.getElementById("uom-lbs-" + row);
  //         if (small.checked === true) {
  //             weightValue = +weightValue * 16;
  //             element = small;
  //             labelHTML = "OZ";
  //         } else {
  //             weightValue = +weightValue / 16;
  //             element = large;
  //             labelHTML = "LBS";
  //         }
  //     } else {
  //         small = document.getElementById("uom-gram-" + row);
  //         large = document.getElementById("uom-kg-" + row);

  //         if (small.checked === true) {
  //             weightValue = +weightValue * 1000;
  //             element = small;
  //             labelHTML = "G";
  //         } else {
  //             weightValue = +weightValue / 1000;
  //             element = large;
  //             labelHTML = "KG";
  //         }
  //     }

  //     totalLineWeightValue = +weightValue * +packedAmount;
  //     weight.value = weightValue.toFixed(3).replace(/[.,]00$/, "");
  //     totalWeight.value = totalLineWeightValue
  //         .toFixed(3)
  //         .replace(/[.,]00$/, "");
  //     label.innerHTML = labelHTML;
  //     updateListItem(element);
  //     updateListItem(weight);
  //     updateListItem(totalWeight);
  // };
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
      if (uomRadio.type == 'radio' && uomRadio.checked) {
        uomElement = uomRadio;
      }
    });
    var uomColumnName = uomElement.getAttribute("data-column-name");
    // data[columnName] = value;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUtoTSxTQUFTLElBQUlnTSxpQkFBaUIsS0FBSyxJQUFJLEVBQUM7SUFFN0RBLGlCQUFpQixDQUFDdFEsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLFlBQVk7TUFDNUQsSUFBSXVRLFNBQVMsR0FBR25RLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLDhCQUE4QixDQUFDO01BQ3ZFLE9BQU1rUSxTQUFTLENBQUNDLFVBQVUsRUFBQztRQUN2QkQsU0FBUyxDQUFDRSxXQUFXLENBQUNGLFNBQVMsQ0FBQ0MsVUFBVSxDQUFDO01BQy9DO0lBRUosQ0FBQyxDQUFDO0VBQ047QUFFSixDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQ3J6Q3dCO0FBQzFCelEsTUFBTSxDQUFDK0MsS0FBSyxHQUFHQSw2Q0FBSztBQUVwQi9DLE1BQU0sQ0FBQytDLEtBQUssQ0FBQzROLFFBQVEsQ0FBQ3hFLE9BQU8sQ0FBQ3lFLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLGdCQUFnQjs7Ozs7Ozs7Ozs7QUNIM0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3Nhc3MvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICcuL2Jvb3RzdHJhcCcgO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiYm9vdHN0cmFwXCI7XG4vLyBpbXBvcnQgICdib290c3RyYXAnO1xuaW1wb3J0IFwiQHBvcHBlcmpzL2NvcmVcIjtcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanMvYXV0b1wiO1xuaW1wb3J0IFNvcnRhYmxlIGZyb20gXCJzb3J0YWJsZWpzXCI7XG5jb25zdCBib290c3RyYXAgPSByZXF1aXJlKFwiLi9ib290c3RyYXBcIik7XG5jb25zdCBncmFtQ29udmVydGVyID0gMTAwMDtcbmNvbnN0IG91bmNlQ29udmVydGVyID0gMTY7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICB0aGlzLndpbmRvdy5zaG93UGFzc3dvcmQgPSBmdW5jdGlvbiBzaG93UGFzc3dvcmQoaWQpIHtcbiAgICAgICAgbGV0IHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICBpZiAocGFzc3dvcmQudHlwZSA9PT0gXCJwYXNzd29yZFwiKSB7XG4gICAgICAgICAgICBwYXNzd29yZC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXNzd29yZC50eXBlID0gXCJwYXNzd29yZFwiO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aGlzLndpbmRvdy5hZGRNYXN0ZXJMaXN0SXRlbSA9IGZ1bmN0aW9uIGFkZE1hc3Rlckxpc3RJdGVtKCkge1xuICAgICAgICBsZXQgbnVtYmVyT2ZJdGVtc1RvQWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lc1RvQWRkXCIpO1xuICAgICAgICBsZXQgbGluZXNUb0FkZCA9IDE7XG4gICAgICAgIGlmIChudW1iZXJPZkl0ZW1zVG9BZGQgPT09IG51bGwgfHwgK251bWJlck9mSXRlbXNUb0FkZC52YWx1ZSA8IDEpIHtcbiAgICAgICAgICAgIG51bWJlck9mSXRlbXNUb0FkZC52YWx1ZSA9IGxpbmVzVG9BZGQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaW5lc1RvQWRkID0gK251bWJlck9mSXRlbXNUb0FkZC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXNUb0FkZDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbGlzdEJ5SXRlbXMgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IGxpc3RlbiA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGl0ZW1UYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1pdGVtLXRhYmxlLWJvZHknKTtcbiAgICAgICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBjZWxscyBhbmQgaW5wdXQgZWxlbWVudHMuXG4gICAgICAgICAgICBsZXQgY2VsbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG5cbiAgICAgICAgICAgIGxldCBpdGVtTmFtZSA9IGNyZWF0ZUxpc3RJdGVtSW5wdXQoXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgXCJpdGVtTmFtZVwiLFxuICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAgXCJpdGVtX25hbWVcIixcbiAgICAgICAgICAgICAgICBsaXN0ZW5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpdGVtTmFtZS5wbGFjZWhvbGRlciA9IFwiSXRlbSBOYW1lXCI7XG4gICAgICAgICAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBjZWxsNi5pZCA9IFwiYnRuLXRkLVwiICtpO1xuICAgICAgICAgICAgbGV0IGRlbGV0ZUJ0biA9IGNyZWF0ZURlbGV0ZUJ1dHRvbihpKTtcblxuICAgICAgICAgICAgbGV0IGNlbGwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgbGV0IGl0ZW1XZWlnaHQgPSBjcmVhdGVMaXN0SXRlbUlucHV0KFxuICAgICAgICAgICAgICAgIFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgXCJpdGVtV2VpZ2h0XCIsXG4gICAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgICBcIml0ZW1fd2VpZ2h0XCIsXG4gICAgICAgICAgICAgICAgbGlzdGVuXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaXRlbVdlaWdodC52YWx1ZSA9IDA7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJmb3Itd2VpZ2h0XCIpO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWlucHV0XCIpO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xuICAgICAgICAgICAgLy9pdGVtV2VpZ2h0LnN0eWxlLndpZHRoID0gJzQwJSc7XG4gICAgICAgICAgICBjZWxsMi5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWNvbFwiKTtcblxuICAgICAgICAgICAgbGV0IGNlbGwzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgICAgICBzZWxlY3QuaWQgPSBcInVvbS1cIiArIGk7XG4gICAgICAgICAgICBzZWxlY3QubmFtZSA9IFwidW9tW11cIjtcbiAgICAgICAgICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIsIFwidW9tXCIpO1xuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCI7XG5cbiAgICAgICAgICAgIGxldCBvek9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBsZXQgbGJzT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIGxldCBnck9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBsZXQga2dPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgb3pPcHRpb24udmFsdWUgPSBcImluX291bmNlc1wiO1xuICAgICAgICAgICAgb3pPcHRpb24udGV4dCA9IFwiT1pcIjtcbiAgICAgICAgICAgIGxic09wdGlvbi52YWx1ZSAgPSAnaW5fbGJzJztcbiAgICAgICAgICAgIGxic09wdGlvbi50ZXh0ID0gJ0xCUydcblxuICAgICAgICAgICAgZ3JPcHRpb24udmFsdWUgPSBcImluX2dyYW1zXCI7XG4gICAgICAgICAgICBnck9wdGlvbi50ZXh0ID0gXCJHXCI7XG4gICAgICAgICAgICBrZ09wdGlvbi52YWx1ZSAgPSAnaW5fa2lsb3MnO1xuICAgICAgICAgICAga2dPcHRpb24udGV4dCA9ICdLRyc7XG4gICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3pPcHRpb24pO1xuICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKGxic09wdGlvbik7XG4gICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQoZ3JPcHRpb24pO1xuICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKGtnT3B0aW9uKTtcblxuICAgICAgICAgICAgLy9hcHBlbmQgaW5wdXRzIHRvIGNlbGxzLlxuICAgICAgICAgICAgY2VsbDEuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgICAgICAgICAgY2VsbDIuYXBwZW5kQ2hpbGQoaXRlbVdlaWdodCk7XG5cbiAgICAgICAgICAgIGxldCBzZWxlY3RDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgbGV0IGNhdGVnb3J5U2VsZWN0ID0gZ2V0Q2F0ZWdyb3lTZWxlY3QoaSxudWxsLCBsaXN0ZW4pO1xuICAgICAgICAgICAgY2F0ZWdvcnlTZWxlY3QubmFtZSA9ICdpdGVtQ2F0ZWdvcnlbXSdcbiAgICAgICAgICAgIHNlbGVjdENlbGwuYXBwZW5kKGNhdGVnb3J5U2VsZWN0KTtcblxuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgICAgICAgICAgIGNlbGw2LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgICAgICAgICAgIC8vIEFwcGVuZCBjZWxscyB0byB0aGUgcm93LlxuICAgICAgICAgICAgLy8gcm93LmFwcGVuZENoaWxkKGljb25DZWxsKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsMSk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoc2VsZWN0Q2VsbCk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDMpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwyKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsNik7XG5cbiAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgcm93IHRvIHRoZSB0YWJsZS5cbiAgICAgICAgICAgIGl0ZW1UYWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuXG5cbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3SXRlbUNvdW50JykudmFsdWUgPSBsaW5lc1RvQWRkO1xuICAgICAgICBudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPSAxO1xuICAgIH07XG4gICAgdGhpcy53aW5kb3cuc2hvd0xpc3RBc3NpZ25Nb2RhbCA9IGZ1bmN0aW9uIHNob3dMaXN0QXNzaWduTW9kYWwoaXRlbUlkLGl0ZW1OYW1lKXtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbUlkZm9yQXNzaWduJykudmFsdWUgPSBpdGVtSWQ7XG4gICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VySXRlbUlkZm9yQXNzaWduJykudmFsdWUgPSB1c2VySXRlbUlkO1xuXG4gICAgICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtYXNzaWduLWl0ZW0tdGFibGUtYm9keVwiKTtcbiAgICAgICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBc3NpZ25JdGVtVG9MaXN0TW9kYWxMYWJlbCcpO1xuICAgICAgICBoZWFkZXIuaW5uZXJIVE1MID0gJ0Fzc2lnbi9VbmFzc2lnbiBpdGVtOiAnK2l0ZW1OYW1lO1xuXG4gICAgICAgIGxldCB1cmwgPSAnL2dldC11c2VyLWxpc3RzLycraXRlbUlkO1xuICAgICAgICBsZXQgdXNlckxpc3RzO1xuXG4gICAgICAgIGF4aW9zLmdldCh1cmwpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICB1c2VyTGlzdHMgPSBkYXRhLnVzZXJMaXN0cztcblxuICAgICAgICAgICAgaWYoZGF0YS5zdGF0dXMgIT09ICcxJyl7XG4gICAgICAgICAgICAgICAgYWxlcnQoZGF0YS5tc2cpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1c2VyTGlzdHMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgICAgICAgICAgbGV0IGxpc3ROYW1lQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgYXNzaWduQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcblxuICAgICAgICAgICAgICAgIGxpc3ROYW1lQ2VsbC5pbm5lckhUTUwgPSB1c2VyTGlzdHNbaV0ubmFtZTtcblxuICAgICAgICAgICAgICAgIGxldCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgICAgICAgICAgY2hlY2tib3guaWQgPSAnbGlzdENoZWNrQm94LScraTtcbiAgICAgICAgICAgICAgICBjaGVja2JveC5uYW1lID0gJ2xpc3RJZHNbXSc7XG4gICAgICAgICAgICAgICAgY2hlY2tib3gudmFsdWUgPSB1c2VyTGlzdHNbaV0uaWQ7XG5cbiAgICAgICAgICAgICAgICBpZih1c2VyTGlzdHNbaV0uaXRlbUFzc2lnbmVkID09IHRydWUpe1xuICAgICAgICAgICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhc3NpZ25DZWxsLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQobGlzdE5hbWVDZWxsKTtcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoYXNzaWduQ2VsbCk7XG4gICAgICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgIH1cbiAgICB0aGlzLndpbmRvdy5hc3NpZ25Ub0dlYXJMaXN0ID0gZnVuY3Rpb24gYXNzaWduVG9HZWFyTGlzdChlbGVtZW50KXtcbiAgICAgICAgbGV0IGxpc3RJZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtaWQnKTtcbiAgICAgICAgbGV0IGl0ZW1JZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWl0ZW0taWQnKTtcblxuICAgICAgICBpZighZWxlbWVudC5jaGVja2VkKXtcbiAgICAgICAgICAgIGxpc3RJZCA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHVybCA9ICcvYXNzaWduLXRvLWdlYXItbGlzdCdcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBsaXN0X2lkOiBsaXN0SWQsXG4gICAgICAgICAgICBpZDogaXRlbUlkXG4gICAgICAgIH07XG5cblxuICAgICAgICBheGlvcy5wb3N0KHVybCxkYXRhKVxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IDEpe1xuXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBhbGVydChyZXNwb25zZS5tc2cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICB0aGlzLndpbmRvdy5hZGRMaXN0SXRlbSA9IGZ1bmN0aW9uIGFkZExpc3RJdGVtKGNhdGVnb3J5Y291bnRlciA9IG51bGwsIGdyb3VwQ2F0ZWdvcnkgPSBudWxsKSB7XG4gICAgICAgIGxldCBudW1iZXJPZkl0ZW1zVG9BZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmVzVG9BZGRcIik7XG4gICAgICAgIGxldCBsaW5lc1RvQWRkID0gMTtcbiAgICAgICAgbGV0IGxpc3RWaWV3SW5wdXQ7XG4gICAgICAgIGlmIChudW1iZXJPZkl0ZW1zVG9BZGQgPT09IG51bGwgfHwgK251bWJlck9mSXRlbXNUb0FkZC52YWx1ZSA8IDEpIHtcbiAgICAgICAgICAgIG51bWJlck9mSXRlbXNUb0FkZC52YWx1ZSA9IGxpbmVzVG9BZGQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaW5lc1RvQWRkID0gK251bWJlck9mSXRlbXNUb0FkZC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXNUb0FkZDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbGlzdFVPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tXCIpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGZpbmFsSUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbmFsLWlcIik7XG4gICAgICAgICAgICBsZXQgbGlzdEJ5SXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RCeUl0ZW1zXCIpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGl0ZW1UYWJsZTtcblxuICAgICAgICAgICAgaWYgKCtsaXN0QnlJdGVtcyA9PSAxKSB7XG4gICAgICAgICAgICAgICAgbGlzdEJ5SXRlbXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGl0ZW1UYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXRlbS10YWJsZS1ib2R5XCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsaXN0QnlJdGVtcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxldCB0YWJsZUNhdGVnb3J5ID0gY2F0ZWdvcnljb3VudGVyO1xuICAgICAgICAgICAgICAgIGl0ZW1UYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgICAgICAgICAgICBcImNhdGVnb3J5VGFibGUtXCIgKyB0YWJsZUNhdGVnb3J5XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHVzZXJJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcklkXCIpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGxpc3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdElkXCIpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGZpbmFsSSA9IGZpbmFsSUVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICBmaW5hbElFbGVtZW50LnZhbHVlID0gK2ZpbmFsSSArIDE7XG5cbiAgICAgICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgICAgICByb3cuaWQgPSAncm93LScrZmluYWxJO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgY2VsbHMgYW5kIGlucHV0IGVsZW1lbnRzLlxuICAgICAgICAgICAgbGV0IGNlbGwwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgICAgICAgICAgY2VsbDAuc2NvcGUgPSBcInJvd1wiO1xuICAgICAgICAgICAgY2VsbDAuaW5uZXJIVE1MID0gZmluYWxJO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG5cbiAgICAgICAgICAgIGxldCBjb3VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgY291bnRlci50eXBlID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgIGNvdW50ZXIubmFtZSA9IFwiaWRbXVwiO1xuICAgICAgICAgICAgY291bnRlci5pZCA9IFwiaWQtXCIgKyBmaW5hbEk7XG4gICAgICAgICAgICBjb3VudGVyLnZhbHVlID0gXCJuZXctXCIgKyBmaW5hbEk7XG4gICAgICAgICAgICBjb3VudGVyLnNldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uLW5hbWVcIiwgXCJpZFwiKTtcblxuICAgICAgICAgICAgbGV0IGxpc3RWaWV3VHlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGxpc3RWaWV3VHlwZS50eXBlID0gXCJoaWRkZW5cIjtcblxuICAgICAgICAgICAgbGlzdFZpZXdUeXBlLmlkID0gXCJsaXN0Vmlld1R5cGVcIjtcbiAgICAgICAgICAgIGxpc3RWaWV3VHlwZS52YWx1ZSA9IGxpc3RCeUl0ZW1zXG4gICAgICAgICAgICBsaXN0Vmlld0lucHV0ID0gbGlzdFZpZXdUeXBlO1xuXG4gICAgICAgICAgICBsZXQgbmV3Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgbmV3Um93LnR5cGUgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgbmV3Um93LmlkID0gXCJuZXdSb3ctXCIgKyBmaW5hbEk7XG4gICAgICAgICAgICBuZXdSb3cudmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IGl0ZW1OYW1lID0gY3JlYXRlTGlzdEl0ZW1JbnB1dChcbiAgICAgICAgICAgICAgICBcInRleHRcIixcbiAgICAgICAgICAgICAgICBcIml0ZW1OYW1lXCIsXG4gICAgICAgICAgICAgICAgZmluYWxJLFxuICAgICAgICAgICAgICAgIFwiaXRlbV9uYW1lXCJcblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGl0ZW1OYW1lLnBsYWNlaG9sZGVyID0gXCJJdGVtIE5hbWVcIjtcbiAgICAgICAgICAgIGl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRyb2xcIik7XG5cbiAgICAgICAgICAgIGxldCBjZWxsNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGNlbGw2LmlkID0gXCJidG4tdGQtXCIgKyBmaW5hbEk7XG4gICAgICAgICAgICBsZXQgZGVsZXRlQnRuID0gY3JlYXRlRGVsZXRlQnV0dG9uKGZpbmFsSSk7XG4gICAgICAgICAgICBsZXQgY2VsbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG5cbiAgICAgICAgICAgIGxldCBpdGVtV2VpZ2h0ID0gY3JlYXRlTGlzdEl0ZW1JbnB1dChcbiAgICAgICAgICAgICAgICBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIFwiaXRlbVdlaWdodFwiLFxuICAgICAgICAgICAgICAgIGZpbmFsSSxcbiAgICAgICAgICAgICAgICBcIml0ZW1fd2VpZ2h0XCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LnZhbHVlID0gMDtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQuY2xhc3NMaXN0LmFkZChcImZvci13ZWlnaHRcIik7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJudW1iZXItaW5wdXRcIik7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRyb2xcIik7XG4gICAgICAgICAgICBjZWxsMi5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWNvbFwiKTtcblxuICAgICAgICAgICAgbGV0IGNlbGwzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgbGV0IGxpbmVVb21DZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgY2VsbDMuY2xhc3NMaXN0LmFkZChcInVvbS10ZFwiKTtcbiAgICAgICAgICAgIGxpbmVVb21DZWxsLmNsYXNzTGlzdC5hZGQoXCJ1b20tdGRcIik7XG4gICAgICAgICAgICBsZXQgcm93VW9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgcm93VW9tLnR5cGUgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIHJvd1VvbS5pZCA9IFwidW9tLVwiICsgZmluYWxJO1xuXG5cbiAgICAgICAgICAgIGxldCAgcmFkaW8xID0gY3JlYXRlUmFkaW8oXCJpbl9vdW5jZXNcIiwgXCJcIiwgXCJvelwiLCBmaW5hbEkpO1xuICAgICAgICAgICAgbGV0IHJhZGlvTGFiZWwxID0gY3JlYXRlTGFiZWwoXG4gICAgICAgICAgICAgICAgXCJPWlwiLFxuICAgICAgICAgICAgICAgIFwidW9tLW96LVwiICsgZmluYWxJLFxuICAgICAgICAgICAgICAgIFwib3pcIixcbiAgICAgICAgICAgICAgICBmaW5hbElcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsZXQgcmFkaW8yID0gY3JlYXRlUmFkaW8oXCJpbl9sYnNcIiwgXCJcIiwgXCJsYnNcIiwgZmluYWxJKTtcbiAgICAgICAgICAgIGxldCByYWRpb0xhYmVsMiA9IGNyZWF0ZUxhYmVsKFxuICAgICAgICAgICAgICAgIFwiTEJTXCIsXG4gICAgICAgICAgICAgICAgXCJ1b20tbGJzLVwiICsgZmluYWxJLFxuICAgICAgICAgICAgICAgIFwibGJzXCIsXG4gICAgICAgICAgICAgICAgZmluYWxJXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbGV0ICAgcmFkaW8zID0gY3JlYXRlUmFkaW8oXCJpbl9ncmFtc1wiLCBcIlwiLCBcImdyYW1cIiwgZmluYWxJKTtcbiAgICAgICAgICAgIGxldCByYWRpb0xhYmVsMyA9IGNyZWF0ZUxhYmVsKFxuICAgICAgICAgICAgICAgIFwiR1wiLFxuICAgICAgICAgICAgICAgIFwidW9tLWdyYW0tXCIgKyBmaW5hbEksXG4gICAgICAgICAgICAgICAgXCJncmFtXCIsXG4gICAgICAgICAgICAgICAgZmluYWxJXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbGV0IHJhZGlvNCA9IGNyZWF0ZVJhZGlvKFwiaW5fa2lsb3NcIiwgXCJcIiwgXCJrZ1wiLCBmaW5hbEkpO1xuICAgICAgICAgICAgbGV0IHJhZGlvTGFiZWw0ID0gY3JlYXRlTGFiZWwoXG4gICAgICAgICAgICAgICAgXCJLR1wiLFxuICAgICAgICAgICAgICAgIFwidW9tLWtnLVwiICsgZmluYWxJLFxuICAgICAgICAgICAgICAgIFwia2dcIixcbiAgICAgICAgICAgICAgICBmaW5hbElcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsZXQgcmFkaW9MYWJlbDU7XG5cbiAgICAgICAgICAgIGlmIChsaXN0VU9NID09PSBcInVzXCIpIHtcbiAgICAgICAgICAgICAgICByb3dVb20udmFsdWUgPSBcInVzXCI7XG4gICAgICAgICAgICAgICAgcmFkaW8xLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJhZGlvTGFiZWw1ID0gY3JlYXRlTGFiZWwoXG4gICAgICAgICAgICAgICAgICAgIFwiT1pcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ1b20tb3otXCIgKyBmaW5hbEksXG4gICAgICAgICAgICAgICAgICAgIFwib3pcIixcbiAgICAgICAgICAgICAgICAgICAgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcm93VW9tLnZhbHVlID0gXCJtZXRyaWNcIjtcbiAgICAgICAgICAgICAgICByYWRpbzMuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmFkaW9MYWJlbDUgPSBjcmVhdGVMYWJlbChcbiAgICAgICAgICAgICAgICAgICAgXCJHXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidW9tLWdyYW0tXCIgKyBmaW5hbEksXG4gICAgICAgICAgICAgICAgICAgIFwiZ3JhbVwiLFxuICAgICAgICAgICAgICAgICAgICBmaW5hbEksXG4gICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgY2VsbDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBjZWxsNC5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWNvbFwiKTtcbiAgICAgICAgICAgIGxldCBwYWNrZWRBbW91bnQgPSBjcmVhdGVMaXN0SXRlbUlucHV0KFxuICAgICAgICAgICAgICAgIFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgXCJwYWNrZWRBbW91bnRcIixcbiAgICAgICAgICAgICAgICBmaW5hbEksXG4gICAgICAgICAgICAgICAgXCJhbW91bnRcIlxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgcGFja2VkQW1vdW50LnZhbHVlID0gMTtcblxuICAgICAgICAgICAgcGFja2VkQW1vdW50LmNsYXNzTGlzdC5hZGQoXCJmb3Itd2VpZ2h0XCIpO1xuICAgICAgICAgICAgcGFja2VkQW1vdW50LmNsYXNzTGlzdC5hZGQoXCJudW1iZXItaW5wdXRcIik7XG4gICAgICAgICAgICBwYWNrZWRBbW91bnQuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcblxuICAgICAgICAgICAgbGV0IGNlbGw1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgY2VsbDUuY2xhc3NMaXN0LmFkZChcIm51bWJlci1jb2xcIik7XG4gICAgICAgICAgICBsZXQgdG90YWxMaW5lV2VpZ2h0ID0gY3JlYXRlTGlzdEl0ZW1JbnB1dChcbiAgICAgICAgICAgICAgICBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIFwidG90YWxMaW5lV2VpZ2h0XCIsXG4gICAgICAgICAgICAgICAgZmluYWxJLFxuICAgICAgICAgICAgICAgIFwidG90YWxfbGluZV93ZWlnaHRcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC52YWx1ZSA9IDA7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgICAgIFwiZGF0YS1jb2x1bW4tbmFtZVwiLFxuICAgICAgICAgICAgICAgIFwidG90YWxfbGluZV93ZWlnaHRcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC5zZXRBdHRyaWJ1dGUoXCJyZWFkb25seVwiLCB0cnVlKTtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWlucHV0XCIpO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRyb2xcIik7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQuY2xhc3NMaXN0LmFkZChcImZvci10b3RhbC1saXN0LXdlaWdodFwiKTtcblxuICAgICAgICAgICAgLy9hcHBlbmQgaW5wdXRzIHRvIGNlbGxzLlxuICAgICAgICAgICAgbGV0IGljb25DZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuXG4gICAgICAgICAgICBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgICAgIGljb24uY2xhc3NOYW1lID0gJ2ZhcyBmYS1ncmlwLXZlcnRpY2FsJztcbiAgICAgICAgICAgIGljb25DZWxsLmFwcGVuZENoaWxkKGljb24pO1xuXG4gICAgICAgICAgICBjZWxsMS5hcHBlbmRDaGlsZChjb3VudGVyKTtcbiAgICAgICAgICAgIGNlbGwxLmFwcGVuZENoaWxkKG5ld1Jvdyk7XG4gICAgICAgICAgICBjZWxsMS5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gICAgICAgICAgICBjZWxsMi5hcHBlbmRDaGlsZChpdGVtV2VpZ2h0KTtcblxuICAgICAgICAgICAgbGV0IHNlbGVjdENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBsZXQgY2F0ZWdvcnlTZWxlY3QgPSBnZXRDYXRlZ3JveVNlbGVjdChmaW5hbEksIGdyb3VwQ2F0ZWdvcnkpO1xuXG4gICAgICAgICAgICBzZWxlY3RDZWxsLmFwcGVuZChjYXRlZ29yeVNlbGVjdCk7XG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChyb3dVb20pO1xuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQocmFkaW8xKTtcbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHJhZGlvTGFiZWwxKTtcbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHJhZGlvMik7XG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChyYWRpb0xhYmVsMik7XG5cbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHJhZGlvMyk7XG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChyYWRpb0xhYmVsMyk7XG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChyYWRpbzQpO1xuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbDQpO1xuXG5cblxuICAgICAgICAgICAgY2VsbDQuYXBwZW5kQ2hpbGQocGFja2VkQW1vdW50KTtcbiAgICAgICAgICAgIGNlbGw1LmFwcGVuZENoaWxkKHRvdGFsTGluZVdlaWdodCk7XG4gICAgICAgICAgICBsaW5lVW9tQ2VsbC5hcHBlbmRDaGlsZChyYWRpb0xhYmVsNSk7XG4gICAgICAgICAgICBjZWxsNi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgY2VsbHMgdG8gdGhlIHJvdy5cbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChpY29uQ2VsbCk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDEpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHNlbGVjdENlbGwpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwzKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsMik7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDQpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGw1KTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChsaW5lVW9tQ2VsbCk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDYpO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIHJvdyB0byB0aGUgdGFibGUuXG4gICAgICAgICAgICBpdGVtVGFibGUuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgICAgIC8vYWRkIGZ1bmN0aW9ucyB0byBjYWxjdWxhdGUgYW5kIGNvbnZlcnQgdG90YWwgd2VpZ2h0LlxuICAgICAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcldlaWdodENhbGMoZmluYWxJKTtcbiAgICAgICAgfVxuICAgICAgICBudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPSAxO1xuXG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2Vhci1pdGVtcy1jb250YWluZXInKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RWaWV3SW5wdXQpO1xuICAgIH07XG5cbiAgICB0aGlzLndpbmRvdy51cGRhdGVVT00gPSBmdW5jdGlvbiB1cGRhdGVVT00odmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBcInVzXCIpIHtcbiAgICAgICAgICAgIHVzUmFkaW9Ub01ldHJpYygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWV0cmljUmFkaW9Ub1VzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJXZWlnaHRDYWxjKHJvdykge1xuICAgICAgICBsZXQgbmVlZGVkRm9yV2VpZ2h0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yLXdlaWdodFwiKTtcbiAgICAgICAgbmVlZGVkRm9yV2VpZ2h0cy5mb3JFYWNoKGZ1bmN0aW9uIChuZWVkZWRGb3JXZWlnaHQpIHtcbiAgICAgICAgICAgIG5lZWRlZEZvcldlaWdodC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBnZXRMaW5lVG90YWxXZWlnaHQocm93KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLndpbmRvdy5nZXRMaW5lVG90YWxXZWlnaHQgPSBmdW5jdGlvbiBnZXRMaW5lVG90YWxXZWlnaHQoXG4gICAgICAgIHJvdyxcbiAgICAgICAgY29udmVydCA9IGZhbHNlXG4gICAgKSB7XG4gICAgICAgIGxldCB3ZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1XZWlnaHQtXCIgKyByb3cpLnZhbHVlO1xuICAgICAgICBsZXQgcGFja2VkQW1vdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWNrZWRBbW91bnQtXCIgKyByb3cpLnZhbHVlO1xuICAgICAgICBsZXQgdW9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b21cIik7XG4gICAgICAgIGxldCBsaW5lVG90YWxXZWlnaHRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgICBcInRvdGFsTGluZVdlaWdodC1cIiArIHJvd1xuICAgICAgICApO1xuXG4gICAgICAgIGxldCBsaW5lVG90YWwgPSAwO1xuICAgICAgICBsaW5lVG90YWwgPSArd2VpZ2h0ICogK3BhY2tlZEFtb3VudDtcbiAgICAgICAgbGluZVRvdGFsID0gbGluZVRvdGFsLnRvRml4ZWQoMykucmVwbGFjZSgvWy4sXTAwJC8sIFwiXCIpO1xuICAgICAgICBsaW5lVG90YWxXZWlnaHRFbGVtZW50LnZhbHVlID0gbGluZVRvdGFsO1xuXG4gICAgICAgIHVwZGF0ZUxpc3RJdGVtKGxpbmVUb3RhbFdlaWdodEVsZW1lbnQpO1xuICAgIH07XG4gICAgLy8gdGhpcy53aW5kb3cuY29udmVydE1lYXN1cmVtZW50ID0gZnVuY3Rpb24gY29udmVydE1lYXN1cmVtZW50KFxuICAgIC8vICAgICByb3csXG4gICAgLy8gICAgIGNvbnZlcnQgPSBmYWxzZVxuICAgIC8vICkge1xuICAgIC8vICAgICBsZXQgbGlzdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RJZCcpLnZhbHVlO1xuICAgIC8vICAgICBsZXQgdW9tID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tLVwiK3JvdykudmFsdWU7XG4gICAgLy8gICAgIGxldCBpc01hc3Rlckxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXNNYXN0ZXInKS52YWx1ZTtcblxuICAgIC8vICAgICAvLyBpZihpc01hc3Rlckxpc3QgPT09ICd0cnVlJyl7XG4gICAgLy8gICAgIC8vICAgICB1b20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1cIityb3cpLnZhbHVlO1xuICAgIC8vICAgICAvLyB9ZWxzZXtcbiAgICAvLyAgICAgLy8gICAgIHVvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tXCIpLnZhbHVlO1xuICAgIC8vICAgICAvLyB9XG5cbiAgICAvLyAgICAgLy8gaWYobGlzdElkID09ICdtYXN0ZXInKXtcbiAgICAvLyAgICAgLy8gICAgIHVvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tLVwiK3JvdykudmFsdWU7XG4gICAgLy8gICAgIC8vIH1lbHNle1xuICAgIC8vICAgICAvLyAgICAgdW9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b21cIikudmFsdWU7XG4gICAgLy8gICAgIC8vIH1cbiAgICAvLyAgICAgbGV0IHdlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXRlbVdlaWdodC1cIiArIHJvdyk7XG4gICAgLy8gICAgIGxldCBwYWNrZWRBbW91bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhY2tlZEFtb3VudC1cIiArIHJvdykudmFsdWU7XG4gICAgLy8gICAgIGxldCB0b3RhbFdlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG90YWxMaW5lV2VpZ2h0LVwiICsgcm93KTtcbiAgICAvLyAgICAgbGV0IHRvdGFsTGluZVdlaWdodFZhbHVlID0gMDtcbiAgICAvLyAgICAgbGV0IHdlaWdodFZhbHVlID0gd2VpZ2h0LnZhbHVlO1xuICAgIC8vICAgICBsZXQgc21hbGw7XG4gICAgLy8gICAgIGxldCBsYXJnZTtcbiAgICAvLyAgICAgbGV0IGVsZW1lbnQ7XG4gICAgLy8gICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZS11b20tbGFiZWwtXCIgKyByb3cpO1xuICAgIC8vICAgICBsZXQgbGFiZWxIVE1MO1xuXG4gICAgLy8gICAgIGlmICh1b20gPT09IFwidXNcIikge1xuICAgIC8vICAgICAgICAgc21hbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1vei1cIiArIHJvdyk7XG4gICAgLy8gICAgICAgICBsYXJnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tLWxicy1cIiArIHJvdyk7XG4gICAgLy8gICAgICAgICBpZiAoc21hbGwuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgIC8vICAgICAgICAgICAgIHdlaWdodFZhbHVlID0gK3dlaWdodFZhbHVlICogMTY7XG4gICAgLy8gICAgICAgICAgICAgZWxlbWVudCA9IHNtYWxsO1xuICAgIC8vICAgICAgICAgICAgIGxhYmVsSFRNTCA9IFwiT1pcIjtcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgd2VpZ2h0VmFsdWUgPSArd2VpZ2h0VmFsdWUgLyAxNjtcbiAgICAvLyAgICAgICAgICAgICBlbGVtZW50ID0gbGFyZ2U7XG4gICAgLy8gICAgICAgICAgICAgbGFiZWxIVE1MID0gXCJMQlNcIjtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIHNtYWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b20tZ3JhbS1cIiArIHJvdyk7XG4gICAgLy8gICAgICAgICBsYXJnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tLWtnLVwiICsgcm93KTtcblxuICAgIC8vICAgICAgICAgaWYgKHNtYWxsLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAvLyAgICAgICAgICAgICB3ZWlnaHRWYWx1ZSA9ICt3ZWlnaHRWYWx1ZSAqIDEwMDA7XG4gICAgLy8gICAgICAgICAgICAgZWxlbWVudCA9IHNtYWxsO1xuICAgIC8vICAgICAgICAgICAgIGxhYmVsSFRNTCA9IFwiR1wiO1xuICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICB3ZWlnaHRWYWx1ZSA9ICt3ZWlnaHRWYWx1ZSAvIDEwMDA7XG4gICAgLy8gICAgICAgICAgICAgZWxlbWVudCA9IGxhcmdlO1xuICAgIC8vICAgICAgICAgICAgIGxhYmVsSFRNTCA9IFwiS0dcIjtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIHRvdGFsTGluZVdlaWdodFZhbHVlID0gK3dlaWdodFZhbHVlICogK3BhY2tlZEFtb3VudDtcbiAgICAvLyAgICAgd2VpZ2h0LnZhbHVlID0gd2VpZ2h0VmFsdWUudG9GaXhlZCgzKS5yZXBsYWNlKC9bLixdMDAkLywgXCJcIik7XG4gICAgLy8gICAgIHRvdGFsV2VpZ2h0LnZhbHVlID0gdG90YWxMaW5lV2VpZ2h0VmFsdWVcbiAgICAvLyAgICAgICAgIC50b0ZpeGVkKDMpXG4gICAgLy8gICAgICAgICAucmVwbGFjZSgvWy4sXTAwJC8sIFwiXCIpO1xuICAgIC8vICAgICBsYWJlbC5pbm5lckhUTUwgPSBsYWJlbEhUTUw7XG4gICAgLy8gICAgIHVwZGF0ZUxpc3RJdGVtKGVsZW1lbnQpO1xuICAgIC8vICAgICB1cGRhdGVMaXN0SXRlbSh3ZWlnaHQpO1xuICAgIC8vICAgICB1cGRhdGVMaXN0SXRlbSh0b3RhbFdlaWdodCk7XG4gICAgLy8gfTtcbiAgICB0aGlzLndpbmRvdy51cGRhdGVJdGVtVU9NID0gZnVuY3Rpb24gdXBkYXRlSXRlbVVPTShcbiAgICAgICAgcm93LFxuICAgICAgIGVsZW1lbnRcbiAgICApIHtcblxuICAgICAgICBpZiAoIWVsZW1lbnQgfHwgIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSW52YWxpZCBlbGVtZW50IHByb3ZpZGVkIHRvIHVwZGF0ZUxpc3RJdGVtLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB1b21FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHVvbS0ke3Jvd31gKTtcbiAgICAgICAgbGV0IGl0ZW1XZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaXRlbVdlaWdodC0ke3Jvd31gKS52YWx1ZTtcbiAgICAgICAgbGV0IGNvbHVtbk5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jb2x1bW4tbmFtZScpO1xuICAgICAgICBsZXQgdW9tID0gdW9tRWxlbWVudC52YWx1ZTtcbiAgICAgICAgbGV0IGl0ZW1JZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpZC0ke3Jvd31gKS52YWx1ZTtcbiAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGxpbmUtdW9tLWxhYmVsLSR7cm93fWApO1xuICAgICAgICBsZXQgbGFiZWxIVE1MO1xuICAgICAgICBsZXQgbmV3VU9NO1xuICAgICAgICBsZXQgdXJsID0gJy91cGRhdGUtaXRlbS11b20nO1xuICAgICAgICBsZXQgaXNOZXdSb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbmV3Um93LSR7cm93fWApID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5ld1Jvdy0ke3Jvd31gKS52YWx1ZSA6IGZhbHNlO1xuXG4gICAgICAgIGlmKGl0ZW1JZC5zdGFydHNXaXRoKCduZXcnKSl7XG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlTGlzdEl0ZW0oZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihjb2x1bW5OYW1lLmVuZHNXaXRoKCdvdW5jZXMnKSB8fCBjb2x1bW5OYW1lLmVuZHNXaXRoKCdsYnMnKSl7XG4gICAgICAgICAgICBuZXdVT00gPSAndXMnO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIG5ld1VPTSA9ICdtZXRyaWMnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRhdGEgPSBnZXRCb29sZWFuRGF0YShjb2x1bW5OYW1lKTtcbiAgICAgICAgZGF0YVsnaWQnXSA9IGl0ZW1JZDtcbiAgICAgICAgZGF0YVsnbmV3VU9NJ10gPSBuZXdVT007XG4gICAgICAgIGRhdGFbJ2l0ZW1fd2VpZ2h0J10gPSBpdGVtV2VpZ2h0O1xuICAgICAgICBkYXRhWydpc05ld1JvdyddID0gaXNOZXdSb3c7XG5cbiAgICAgICAgYXhpb3MucG9zdCh1cmwsIGRhdGEpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGxldCByZXNEYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IHJlc0RhdGEuaXRlbTtcblxuICAgICAgICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzID09PSAnMScpIHtcbiAgICAgICAgICAgICAgICBmbGFzaEJvcmRlcihlbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaXRlbVdlaWdodC0ke3Jvd31gKS52YWx1ZSA9IGl0ZW1bJ2l0ZW1fd2VpZ2h0J107XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBhY2tlZEFtb3VudC0ke3Jvd31gKS52YWx1ZSA9IGl0ZW1bJ2Ftb3VudCddO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0b3RhbExpbmVXZWlnaHQtJHtyb3d9YCkudmFsdWUgPSBpdGVtWyd0b3RhbF9saW5lX3dlaWdodCddO1xuICAgICAgICAgICAgICAgIHVvbUVsZW1lbnQudmFsdWUgPSBuZXdVT007XG4gICAgICAgICAgICAgICAgaWYoaXRlbVsnaW5fb3VuY2VzJ10pe1xuICAgICAgICAgICAgICAgICAgICBsYWJlbEhUTUwgPSBcIk9aXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoaXRlbVsnaW5fbGJzJ10pe1xuICAgICAgICAgICAgICAgICAgICBsYWJlbEhUTUwgPSBcIkxCU1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKGl0ZW1bJ2luX2dyYW1zJ10pe1xuICAgICAgICAgICAgICAgICAgICBsYWJlbEhUTUwgPSBcIkdcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihpdGVtWydpbl9raWxvcyddKXtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxIVE1MID0gXCJLR1wiO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxhYmVsLmlubmVySFRNTCA9IGxhYmVsSFRNTDtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmbGFzaEJvcmRlcihlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWxlcnQocmVzRGF0YS5tc2cgfHwgXCJVcGRhdGUgZmFpbGVkLCBwbGVhc2UgY2hlY2sgeW91ciBpbnB1dC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAvLyBFbmhhbmNlZCBlcnJvciBoYW5kbGluZ1xuICAgICAgICAgICAgZmxhc2hCb3JkZXIoZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICAgICAgYWxlcnQoXCJGYWlsZWQgdG8gdXBkYXRlIGxpc3QgaXRlbS4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIik7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVXBkYXRlIGVycm9yOlwiLCBlcnIpO1xuICAgICAgICB9KTtcblxuICAgIH07XG4gICAgdGhpcy53aW5kb3cuYWRkQ2F0ZWdvcnlHcm91cCA9IGZ1bmN0aW9uIGFkZENhdGVnb3J5R3JvdXAobGlzdElkLGNhdGVnb3J5LCBsaXN0VU9NLCB1c2VySWQpe1xuXG4gICAgICAgIGxldCBjb2x1bW5OYW1lO1xuICAgICAgICBpZihsaXN0VU9NID09PSAndXMnKXtcbiAgICAgICAgICAgIGNvbHVtbk5hbWUgPSAnaW5fb3VuY2VzJztcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb2x1bW5OYW1lID0gJ2luX2dyYW1zJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkYXRhID0gZ2V0Qm9vbGVhbkRhdGEoY29sdW1uTmFtZSk7XG4gICAgICAgIGRhdGFbJ2xpc3RfaWQnXSA9IGxpc3RJZDtcbiAgICAgICAgZGF0YVsndXNlcl9pZCddID0gdXNlcklkO1xuICAgICAgICBkYXRhWydpdGVtX25hbWUnXSA9ICcnO1xuICAgICAgICBkYXRhWydpdGVtX3dlaWdodCddID0gMDtcbiAgICAgICAgZGF0YVsnYW1vdW50J10gPSAxO1xuICAgICAgICBkYXRhWydpdGVtX2NhdGVnb3J5J10gPSBjYXRlZ29yeTtcbiAgICAgICAgbGV0IHVybCA9ICcvbGlzdC1pdGVtJ1xuXG4gICAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KHVybCwgZGF0YSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgcmVzID0gcmVzLmRhdGE7XG4gICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAnMScpe1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgYWxlcnQocmVzLm1zZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuICAgIGZ1bmN0aW9uIGZsYXNoQm9yZGVyKGVsZW1lbnQsIGlzU3VjY2Vzcykge1xuICAgICAgICBsZXQgY29sdW1uTmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbHVtbi1uYW1lJyk7XG4gICAgICAgIGlmKGNvbHVtbk5hbWUgIT09ICd0b3RhbF9saW5lX3dlaWdodCcpe1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBpc1N1Y2Nlc3MgPyAnI0E4RTZDRicgOiAnI0YwODA4MCc7XG4gICAgICAgICAgICAvLyBTZXQgYSB0aW1lb3V0IHRvIHJlbW92ZSB0aGUgYm9yZGVyIGFmdGVyIDIgc2Vjb25kc1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcbiAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Qm9vbGVhbkRhdGEoY29sdW1uTmFtZSkge1xuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICBkYXRhW1wiaW5fb3VuY2VzXCJdID0gZmFsc2U7XG4gICAgICAgIGRhdGFbXCJpbl9sYnNcIl0gPSBmYWxzZTtcbiAgICAgICAgZGF0YVtcImluX2dyYW1zXCJdID0gZmFsc2U7XG4gICAgICAgIGRhdGFbXCJpbl9raWxvc1wiXSA9IGZhbHNlO1xuICAgICAgICBkYXRhWyd1b20nXSA9ICd1cyc7XG4gICAgICAgIHN3aXRjaCAoY29sdW1uTmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcImluX291bmNlc1wiOlxuICAgICAgICAgICAgICAgIGRhdGFbXCJpbl9vdW5jZXNcIl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGRhdGFbJ3VvbSddID0gJ3VzJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJpbl9sYnNcIjpcbiAgICAgICAgICAgICAgICBkYXRhW1wiaW5fbGJzXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBkYXRhWyd1b20nXSA9ICd1cyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaW5fZ3JhbXNcIjpcbiAgICAgICAgICAgICAgICBkYXRhW1wiaW5fZ3JhbXNcIl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGRhdGFbJ3VvbSddID0gJ21ldHJpYyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaW5fa2lsb3NcIjpcbiAgICAgICAgICAgICAgICBkYXRhW1wiaW5fa2lsb3NcIl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGRhdGFbJ3VvbSddID0gJ21ldHJpYyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIHRoaXMud2luZG93LnVwZGF0ZUxpc3RJdGVtID0gZnVuY3Rpb24gdXBkYXRlTGlzdEl0ZW0oZWxlbWVudCkge1xuICAgICAgICAvLyBDaGVja2luZyBpZiBlbGVtZW50IGlzIGEgdmFsaWQgRE9NIGVsZW1lbnRcbiAgICAgICAgaWYgKCFlbGVtZW50IHx8ICEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgZWxlbWVudCBwcm92aWRlZCB0byB1cGRhdGVMaXN0SXRlbS5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY29sdW1uTmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4tbmFtZVwiKTtcbiAgICAgICAgbGV0IHZhbHVlID0gZWxlbWVudC52YWx1ZTtcbiAgICAgICAgbGV0IGlkID0gZWxlbWVudC5pZDtcbiAgICAgICAgbGV0IGlkQXJyID0gaWQuc3BsaXQoXCItXCIpO1xuXG4gICAgICAgIGlmIChpZEFyci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIElEIGZvcm1hdC5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcm93ID0gaWRBcnJbaWRBcnIubGVuZ3RoIC0gMV07XG4gICAgICAgIGxldCBpdGVtSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlkLVwiICsgcm93KTtcblxuICAgICAgICAvLyBDaGVjayBpZiBpdGVtSWQgZXhpc3RzXG4gICAgICAgIGlmICghaXRlbUlkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFbGVtZW50IHdpdGggSUQgJ2lkLSR7cm93fScgbm90IGZvdW5kLmApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGl0ZW1JZFZhbHVlID0gaXRlbUlkLnZhbHVlO1xuICAgICAgICBsZXQgbGlzdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0SWRcIik/LnZhbHVlIHx8IFwiXCI7XG4gICAgICAgIGxldCB1cmwgPSBcIi9saXN0LWl0ZW1cIjtcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgbGV0IHVzZXJJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcklkXCIpPy52YWx1ZSB8fCBcIlwiO1xuICAgICAgICBsZXQgY3JlYXRlID0gdHJ1ZTtcbiAgICAgICAgbGV0IGlzTWFzdGVyTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpc01hc3RlcicpPy52YWx1ZSA9PT0gJ3RydWUnO1xuICAgICAgICBsZXQgdXBkYXRlQ2F0ZWdvcnlWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0Vmlld1R5cGUnKT8udmFsdWUgPT09ICdmYWxzZSc7XG4gICAgICAgIGxldCBpc05ld1JvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBuZXdSb3ctJHtyb3d9YCkgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbmV3Um93LSR7cm93fWApLnZhbHVlIDogZmFsc2U7XG4gICAgICAgIGxldCB1b21SYWRpb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcm0tY2hlY2staW5wdXRcIik7XG4gICAgICAgIGxldCB1b21FbGVtZW50O1xuXG4gICAgICAgIHVvbVJhZGlvcy5mb3JFYWNoKGZ1bmN0aW9uICh1b21SYWRpbykge1xuICAgICAgICAgICAgaWYodW9tUmFkaW8udHlwZSA9PSAncmFkaW8nICYmIHVvbVJhZGlvLmNoZWNrZWQpe1xuICAgICAgICAgICAgICAgIHVvbUVsZW1lbnQgPSB1b21SYWRpbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGxldCB1b21Db2x1bW5OYW1lID0gdW9tRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIpO1xuICAgICAgICAvLyBkYXRhW2NvbHVtbk5hbWVdID0gdmFsdWU7XG5cblxuICAgICAgICBpZiAoY29sdW1uTmFtZS5zdGFydHNXaXRoKFwiaW5fXCIpKSB7XG4gICAgICAgICAgICBkYXRhID0gZ2V0Qm9vbGVhbkRhdGEoY29sdW1uTmFtZSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZGF0YSA9IGdldEJvb2xlYW5EYXRhKHVvbUNvbHVtbk5hbWUpO1xuICAgICAgICAgICAgZGF0YVtjb2x1bW5OYW1lXSA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXNzaWduIGFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBkYXRhIG9iamVjdFxuXG4gICAgICAgIGRhdGFbXCJsaXN0X2lkXCJdID0gbGlzdElkO1xuICAgICAgICBkYXRhW1widXNlcl9pZFwiXSA9IHVzZXJJZDtcbiAgICAgICAgZGF0YVtcImlkXCJdID0gaXRlbUlkVmFsdWU7XG4gICAgICAgIGlmKHVwZGF0ZUNhdGVnb3J5VmFsdWUpe1xuICAgICAgICAgICAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtQ2F0ZWdvcnktJytyb3cpLnZhbHVlO1xuICAgICAgICAgICAgZGF0YVsnaXRlbV9jYXRlZ29yeSddID0gc2VsZWN0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGl0ZW1JZFZhbHVlLnN0YXJ0c1dpdGgoJ25ldycpKSB7XG4gICAgICAgICAgICBjcmVhdGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3JlYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB1cmwgKz0gJy8nICsgaXRlbUlkVmFsdWU7XG4gICAgICAgICAgICBpZiAoaXNNYXN0ZXJMaXN0KSB7XG4gICAgICAgICAgICAgICAgZGF0YVsndXBkYXRlTWFzdGVyJ10gPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc05ld1Jvdykge1xuICAgICAgICAgICAgICAgIGRhdGFbJ2lzTmV3Um93J10gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdkYXRhIGluIHVwZGF0ZTogJysgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAvL1BPU1QgcmVxdWVzdFxuICAgICAgICBheGlvcy5wb3N0KHVybCwgZGF0YSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzRGF0YSA9IHJlcy5kYXRhO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzID09PSAnMScpIHtcbiAgICAgICAgICAgICAgICAgICAgZmxhc2hCb3JkZXIoZWxlbWVudCwgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNyZWF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUlkLnZhbHVlID0gcmVzRGF0YS5uZXdJZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBnZXREZWxldGVCdG5EYXRhKGl0ZW1JZC52YWx1ZSwgcm93KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmbGFzaEJvcmRlcihlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KHJlc0RhdGEubXNnIHx8IFwiVXBkYXRlIGZhaWxlZCwgcGxlYXNlIGNoZWNrIHlvdXIgaW5wdXQuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEVuaGFuY2VkIGVycm9yIGhhbmRsaW5nXG4gICAgICAgICAgICAgICAgZmxhc2hCb3JkZXIoZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiRmFpbGVkIHRvIHVwZGF0ZSBsaXN0IGl0ZW0uIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVcGRhdGUgZXJyb3I6XCIsIGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIWlzTWFzdGVyTGlzdCkge1xuICAgICAgICAgICAgdXBkYXRlVG90YWxMaXN0V2VpZ2h0cygpO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgZnVuY3Rpb24gdXBkYXRlVG90YWxMaXN0V2VpZ2h0cygpIHtcbiAgICAgICAgbGV0IGJhc2VXZWlnaHQgPSAwO1xuICAgICAgICBsZXQgdG90YWxQYWNrV2VpZ2h0ID0gMDtcbiAgICAgICAgbGV0IG1heFBhY2tXZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1heFBhY2tXZWlnaHRcIikudmFsdWU7XG4gICAgICAgIGxldCBjbGFzc1dhcm5pbmdWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGFzc1dhcm5pbmdWYWx1ZScpLnZhbHVlO1xuICAgICAgICBsZXQgdW9tVGV4dCA9IFwiTEJTXCI7XG5cbiAgICAgICAgbGV0IGxpc3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0SWQnKS52YWx1ZTtcbiAgICAgICAgbGV0IHVybCA9IGAvZ2V0LXBhY2stZGF0YS8ke2xpc3RJZH1gO1xuXG4gICAgICAgIGF4aW9zLmdldCh1cmwpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICBsZXQgbGlzdERhdGEgPSBkYXRhLmxpc3REYXRhO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xpc3QgZGF0YSBmb3IgcGFjayB3ZWlnaHRzOiAnKyBKU09OLnN0cmluZ2lmeShsaXN0RGF0YSkpO1xuICAgICAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT09ICcxJyl7XG4gICAgICAgICAgICAgICBiYXNlV2VpZ2h0ID0gbGlzdERhdGFbJ2Jhc2VXZWlnaHQnXTtcbiAgICAgICAgICAgICAgIHRvdGFsUGFja1dlaWdodCA9IGxpc3REYXRhWyd0b3RhbFBhY2tXZWlnaHQnXTtcbiAgICAgICAgICAgICAgIG1heFBhY2tXZWlnaHQgPSBsaXN0RGF0YVsnbWF4UGFja1dlaWdodCddO1xuICAgICAgICAgICAgICAgdW9tVGV4dD0gbGlzdERhdGFbJ3dlaWdodFVvbSddO1xuICAgICAgICAgICAgICAgY2xhc3NXYXJuaW5nVmFsdWUgPWxpc3REYXRhWydjbGFzc1dhcm5pbmdWYWx1ZSddXG5cbiAgICAgICAgICAgICAgIGlmICgrYmFzZVdlaWdodCA+ICttYXhQYWNrV2VpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgbGV0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlaWdodFdhcm5pbmctZGl2XCIpO1xuICAgICAgICAgICAgICAgICAgIGRpdkVsZW1lbnQuaW5uZXJUZXh0ID1cIkJhc2Ugd2VpZ2h0IChcIiArICBiYXNlV2VpZ2h0LnRvRml4ZWQoMykgK1wiIFwiICt1b21UZXh0ICtcIikgZXhjZWVkZXMgdGhlIHdlaWdodCBmb3IgdGhlICdcIiArY2xhc3NXYXJuaW5nVmFsdWUrXCInIHN0eWxlIG9mIGhpa2luZy5cIjtcblxuICAgICAgICAgICAgICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWlnaHRXYXJuaW5nLWRpdlwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFzZVdlaWdodFwiKS52YWx1ZSA9IGJhc2VXZWlnaHQudG9GaXhlZCgzKTtcbiAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG90YWxQYWNrV2VpZ2h0XCIpLnZhbHVlID1cbiAgICAgICAgICAgICAgICAgICB0b3RhbFBhY2tXZWlnaHQudG9GaXhlZCgzKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGFsZXJ0KGRhdGEubXNnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9KTtcblxuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVMaXN0SXRlbUlucHV0KFxuICAgICAgICB0eXBlLFxuICAgICAgICBuYW1lQmFzZSxcbiAgICAgICAgcm93LFxuICAgICAgICBjb2x1bW5OYW1lLFxuICAgICAgICBsaXN0ZW4gPSB0cnVlXG4gICAgKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBlbGVtZW50LnR5cGUgPSB0eXBlO1xuICAgICAgICBlbGVtZW50Lm5hbWUgPSBuYW1lQmFzZSArIFwiW11cIjtcbiAgICAgICAgZWxlbWVudC5pZCA9IG5hbWVCYXNlICsgXCItXCIgKyByb3c7XG4gICAgICAgIGVsZW1lbnQudmFsdWUgPSBcIlwiO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uLW5hbWVcIiwgY29sdW1uTmFtZSk7XG4gICAgICAgIGlmKGxpc3Rlbil7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUxpc3RJdGVtKGVsZW1lbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldENhdGVncm95U2VsZWN0KHJvdywgZ3JvdXBDYXRlZ29yeSA9IG51bGwsIGxpc3RlbiA9IHRydWUpIHtcblxuICAgICAgICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgc2VsZWN0LmlkID0gXCJpdGVtQ2F0ZWdvcnktXCIgKyByb3c7XG4gICAgICAgIHNlbGVjdC5uYW1lID0gXCJpdGVtQ2F0ZWdvcnktXCIgKyByb3c7XG4gICAgICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIsIFwiaXRlbV9jYXRlZ29yeVwiKTtcbiAgICAgICAgc2VsZWN0LmNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCI7XG5cbiAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IFwiXCI7XG4gICAgICAgIG9wdGlvbi50ZXh0ID0gXCJDaG9vc2VcIjtcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIGxldCBvcHRpb25MaXN0O1xuXG4gICAgICAgIG9wdGlvbkxpc3QgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2xpc3QtaXRlbS1jYXRlZ29yaWVzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgZXJyb3JcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cblxuICAgICAgICBvcHRpb25MaXN0KCkudGhlbigoZGF0YSkgPT4ge1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBkYXRhW2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gZGF0YVtpXS5jYXRlZ29yeTtcbiAgICAgICAgICAgICAgICBpZiAoZ3JvdXBDYXRlZ29yeSAhPSBudWxsICYmIGRhdGFbaV0udmFsdWUgPT09IGdyb3VwQ2F0ZWdvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZihsaXN0ZW4pe1xuICAgICAgICAgICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUxpc3RJdGVtKHNlbGVjdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIHNlbGVjdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gbWV0cmljUmFkaW9Ub1VzKCkge1xuICAgICAgICBsZXQgaW5wdXRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWV0cmljLXJhZGlvXCIpO1xuICAgICAgICBpbnB1dEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGlucHV0RWxlbWVudCkge1xuICAgICAgICAgICAgbGV0IGlkQXJyID0gaW5wdXRFbGVtZW50LmlkLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgICAgIGxldCB1b20gPSBpZEFyclsxXTtcbiAgICAgICAgICAgIGxldCByb3cgPSBpZEFycltpZEFyci5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50VHlwZSA9IGlucHV0RWxlbWVudC50eXBlO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRUYWcgPSBpbnB1dEVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICBsZXQgbmV3RWxlbWVudDtcblxuICAgICAgICAgICAgaWYgKGVsZW1lbnRUeXBlID09PSBcInJhZGlvXCIgJiYgdW9tID09PSBcImdyYW1cIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVSYWRpbyhcImluX291bmNlc1wiLCBcIk9aXCIsIFwib3pcIiwgcm93LCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFR5cGUgPT09IFwicmFkaW9cIiAmJiB1b20gPT09IFwia2dcIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVSYWRpbyhcImluX2xic1wiLCBcIkxCU1wiLCBcImxic1wiLCByb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VGFnID09PSBcImxhYmVsXCIgJiYgdW9tID09PSBcImdyYW1cIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVMYWJlbChcIk9aXCIsIFwidW9tLW96LVwiICsgcm93LCBcIm96XCIsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUYWcgPT09IFwibGFiZWxcIiAmJiB1b20gPT09IFwia2dcIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVMYWJlbChcIkxCU1wiLCBcInVvbS1sYnMtXCIgKyByb3csIFwibGJzXCIsIHJvdyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuZXdFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKFxuICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdXNSYWRpb1RvTWV0cmljKCkge1xuICAgICAgICBsZXQgaW5wdXRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudXMtcmFkaW9cIik7XG4gICAgICAgIGlucHV0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXRFbGVtZW50KSB7XG4gICAgICAgICAgICBsZXQgaWRBcnIgPSBpbnB1dEVsZW1lbnQuaWQuc3BsaXQoXCItXCIpO1xuICAgICAgICAgICAgbGV0IHVvbSA9IGlkQXJyWzFdO1xuICAgICAgICAgICAgbGV0IHJvdyA9IGlkQXJyW2lkQXJyLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRUeXBlID0gaW5wdXRFbGVtZW50LnR5cGU7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFRhZyA9IGlucHV0RWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBsZXQgbmV3RWxlbWVudDtcblxuICAgICAgICAgICAgaWYgKGVsZW1lbnRUeXBlID09PSBcInJhZGlvXCIgJiYgdW9tID09PSBcIm96XCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlUmFkaW8oXCJpbl9ncmFtc1wiLCBcIkdSXCIsIFwiZ3JhbVwiLCByb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VHlwZSA9PT0gXCJyYWRpb1wiICYmIHVvbSA9PT0gXCJsYnNcIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVSYWRpbyhcImluX2tpbG9zXCIsIFwiS0dcIiwgXCJrZ1wiLCByb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VGFnID09PSBcImxhYmVsXCIgJiYgdW9tID09PSBcIm96XCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlTGFiZWwoXCJHXCIsIFwidW9tLWdyYW0tXCIgKyByb3csIFwiZ3JhbVwiLCByb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VGFnID09PSBcImxhYmVsXCIgJiYgdW9tID09PSBcImxic1wiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZUxhYmVsKFwiS0dcIiwgXCJ1b20ta2ctXCIgKyByb3csIFwia2dcIiwgcm93KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5ld0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQoXG4gICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVSYWRpbyhkYXRhQ29sdW1uTmFtZSwgbGFiZWwsIHVvbSwgcm93KSB7XG4gICAgICAgIGxldCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgcmFkaW8uY2xhc3NOYW1lID1cbiAgICAgICAgICAgIFwiZm9ybS1jaGVjay1pbnB1dFwiICtcbiAgICAgICAgICAgICh1b20gPT09IFwiZ3JhbVwiIHx8IHVvbSA9PT0gXCJrZ1wiID8gXCIgbWV0cmljLXJhZGlvXCIgOiBcIiB1cy1yYWRpb1wiKTtcbiAgICAgICAgcmFkaW8udHlwZSA9IFwicmFkaW9cIjtcbiAgICAgICAgcmFkaW8ubmFtZSA9IFwidW9tLVwiICsgcm93ICsgXCJbXVwiO1xuICAgICAgICByYWRpby5pZCA9IFwidW9tLVwiICsgdW9tICsgXCItXCIgKyByb3c7XG4gICAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uLW5hbWVcIiwgZGF0YUNvbHVtbk5hbWUpO1xuXG4gICAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdXBkYXRlSXRlbVVPTShyb3csIHJhZGlvKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByYWRpbztcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlTGFiZWwoaW5uZXJIdG1sLCBodG1sRm9yLCB1b20sIHJvdywgbGluZUxhYmVsID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBsYWJlbC5jbGFzc05hbWUgPVxuICAgICAgICAgICAgXCJmb3JtLWNoZWNrLWxhYmVsXCIgK1xuICAgICAgICAgICAgKHVvbSA9PT0gXCJncmFtXCIgfHwgdW9tID09PSBcImtnXCIgPyBcIiBtZXRyaWMtcmFkaW9cIiA6IFwiIHVzLXJhZGlvXCIpO1xuICAgICAgICBsYWJlbC5odG1sRm9yID0gaHRtbEZvcjtcbiAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gaW5uZXJIdG1sO1xuICAgICAgICBpZiAoIWxpbmVMYWJlbCkge1xuICAgICAgICAgICAgbGFiZWwuaWQgPSBcInVvbS1cIiArIHVvbSArIFwiLWxhYmVsLVwiICsgcm93O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGFiZWwuaWQgPSBcImxpbmUtdW9tLWxhYmVsLVwiICsgcm93O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH1cblxuICAgIHRoaXMud2luZG93LnVwZGF0ZUxpc3QgPSBmdW5jdGlvbiB1cGRhdGVMaXN0KGVsZW1lbnQsIGxpc3RJZCkge1xuICAgICAgICBsZXQgY29sdW1uTmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4tbmFtZVwiKTtcbiAgICAgICAgbGV0IHZhbHVlID0gZWxlbWVudC52YWx1ZTtcbiAgICAgICAgbGV0IHVybCA9IFwiL2dlYXItbGlzdC9cIiArIGxpc3RJZDtcblxuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICBkYXRhW2NvbHVtbk5hbWVdID0gdmFsdWU7XG5cbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC5wb3N0KHVybCwgZGF0YSwgbGlzdElkKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLnN0YXR1cyA9PT0gJzEnKXtcbiAgICAgICAgICAgICAgICAgICAgZmxhc2hCb3JkZXIoZWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGZsYXNoQm9yZGVyKGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQocmVzLmRhdGEubXNnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gYWxlcnQocmVzLmRhdGEubXNnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiRmFpbGVkIHRvIHVwZGF0ZSBsaXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBpZiAoY29sdW1uTmFtZSA9PT0gXCJzb3J0XCIgfHwgY29sdW1uTmFtZSA9PT0gXCJsaXN0X2NsYXNzXCIgfHwgY29sdW1uTmFtZSA9PT0gJ2xpc3RfaXRlbXMnKSB7XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoZWFkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtLWNvbGxhcHNpYmxlLWhlYWRlclwiKTtcblxuICAgIGhlYWRlcnMuZm9yRWFjaCgoaGVhZGVyKSA9PiB7XG4gICAgICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGhlYWRlci5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICBjb25zdCBhcnJvdyA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKFwiLml0ZW0tYXJyb3dcIik7XG4gICAgICAgICAgICBpZiAoY29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJvcGVuXCIpKSB7XG4gICAgICAgICAgICAgICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IG51bGw7XG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5wYWRkaW5nID0gXCIwIDEwcHhcIjtcbiAgICAgICAgICAgICAgICBhcnJvdy5pbm5lckhUTUwgPSBcIiYjOTY2MFwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5wYWRkaW5nID0gXCIxMHB4XCI7XG4gICAgICAgICAgICAgICAgYXJyb3cuaW5uZXJIVE1MID0gXCImIzk2NTBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBsZXQgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNtYXN0ZXItaXRlbS10YWJsZSBpbnB1dFwiKTtcblxuICAgIGlucHV0cy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICBpbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSk7XG5cbiAgICBsZXQgbGlzdENoYXJ0YnRuID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdENoYXJ0QnRuXCIpO1xuICAgIGlmKGxpc3RDaGFydGJ0biAhPT0gbnVsbCl7XG4gICAgICAgIGRvY3VtZW50IC5nZXRFbGVtZW50QnlJZChcImxpc3RDaGFydEJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IGxpc3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdElkXCIpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IHVybCA9IFwiL2dlYXItbGlzdC1hbmFseXRpY3MvXCIgKyBsaXN0SWQ7XG5cbiAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgLmdldCh1cmwpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2hhcnRTdGF0dXMgPSBDaGFydC5nZXRDaGFydChcImdlYXJDaGFydFwiKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhcnRTdGF0dXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFydFN0YXR1cy5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdlYXJDaGFydFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoYXJ0RGF0YSA9IEpTT04ucGFyc2UocmVzLmRhdGEuY2hhcnREYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZG91Z2hudXRcIiwgLy8gQ2hhcnQgdHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsczogY2hhcnREYXRhLmxhYmVscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsYWJlbDogbGlzdE5hbWUgKyAnQnJlYWsgRG93bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBjaGFydERhdGEud2VpZ2h0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY2hhcnREYXRhLmNvbG9ycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJPZmZzZXQ6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXRvdXQ6IDQ1LCAvLyBBZGp1c3QgdGhlIGN1dG91dCBwZXJjZW50YWdlIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM6IDE1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFsYWJlbHM6IGZhbHNlLCAvLyBSZW1vdmluZyB0aGlzIGxpbmUgc2hvd3MgdGhlIGRhdGFsYWJlbHMgYWdhaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlUm90YXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlU2NhbGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhc2VXZWlnaHQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNlV2VpZ2h0XCIpLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdG90YWxQYWNrV2VpZ2h0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG90YWxQYWNrV2VpZ2h0XCIpLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsQmFzZVdlaWdodFwiKS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlV2VpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsVG90YWxXZWlnaHRcIikudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxQYWNrV2VpZ2h0O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgdGhpcy53aW5kb3cuc2hvd0NvbnZyc2lvbkFsZXJ0ID0gZnVuY3Rpb24gc2hvd0NvbnZyc2lvbkFsZXJ0KCl7XG4gICAgICAgIGFsZXJ0KCdDaGFuZ2luZyB0aGlzIHZhbHVlIHdpbGwgYWxzbyB1cGRhdGUgdGhlIHVuaXRzIG9mIG1lYXN1cmUgYW5kIGFzc29jaWF0ZWQgdmFsdWVzIGZvciBhbnkgaXRlbSBvbiB0aGlzIGdlYXIgbGlzdC4nKTtcbiAgICB9XG4gICAgdGhpcy53aW5kb3cuY29uZmlybURlbGV0ZSA9IGZ1bmN0aW9uIGNvbmZpcm1EZWxldGUoZWxlbWVudCkge1xuXG4gICAgICAgIGxldCBpc01hc3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpc01hc3RlcicpLnZhbHVlO1xuICAgICAgICBsZXQgaHJlZiA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWhyZWYnKTtcbiAgICAgICAgbGV0IG5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vYmplY3QtbmFtZScpO1xuICAgICAgICBsZXQgb2JqZWN0VHlwZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9iamVjdC10eXBlJyk7XG4gICAgICAgIGxldCBhbmNob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlT2JqZWN0QW5jaG9yJyk7XG4gICAgICAgIGxldCBtb2RhbEJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlTW9kYWxCb2R5Jyk7XG4gICAgICAgIGxldCB0ZXh0ID0gYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgJHtvYmplY3RUeXBlfSAke25hbWV9P2A7XG4gICAgICAgIGxldCBoZWxwZXJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlSGVscGVyJyk7XG4gICAgICAgIGxldCBoZWxwdGV4dDtcbiAgICAgICAgaGVscGVyRGl2LmlubmVyVGV4dCA9ICcnO1xuXG5cbiAgICAgICAgaWYob2JqZWN0VHlwZSA9PT0gJ2l0ZW06JyAmJiBpc01hc3RlciA9PT0gJ2ZhbHNlJyl7XG4gICAgICAgICAgICBsZXQgbGlzdE5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0LW5hbWUnKTtcbiAgICAgICAgICAgIGhlbHB0ZXh0ID0gYCpEZWxldGluZyBhbiBpdGVtIGZyb20gdGhpcyBsaXN0ICgke2xpc3ROYW1lfSkgd2lsbCBub3QgZGVsZXRlIGl0IHRoZSAnWW91ciBHZWFyJyBzZWN0aW9uLmA7XG4gICAgICAgICAgICBoZWxwZXJEaXYuYXBwZW5kKGhlbHB0ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKG9iamVjdFR5cGUgPT09ICdpdGVtOicgJiYgaXNNYXN0ZXIgPT09ICd0cnVlJyl7XG4gICAgICAgICAgICBoZWxwdGV4dCA9IGAqRGVsZXRpbmcgYW4gaXRlbSBmcm9tIHRoZSAnWW91ciBHZWFyJyBzZWN0aW9uIHdpbGwgZGVsZXRlIGl0IGZyb20gYWxsICdHZWFyIExpc3RzJy5gO1xuICAgICAgICAgICAgaGVscGVyRGl2LmFwcGVuZChoZWxwdGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihvYmplY3RUeXBlID09PSAnY2F0ZWdvcnk6JyAmJiBpc01hc3RlciA9PT0nZmFsc2UnKXtcbiAgICAgICAgICAgIHRleHQgPSBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBhbGwgaXRlbXMgaW4gdGhlICR7bmFtZX0gY2F0ZWdvcnkgZnJvbSB0aGlzIGxpc3Q/YDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKG9iamVjdFR5cGUgPT09ICdjYXRlZ29yeTonICYmIGlzTWFzdGVyID09PSd0cnVlJyl7XG4gICAgICAgICAgICB0ZXh0ID0gYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgYWxsIGl0ZW1zIGluIHRoZSAke25hbWV9IGNhdGVnb3J5IGZyb20gQUxMIHlvdXIgbGlzdHM/YDtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgaGVscGVyRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgICAgbW9kYWxCb2R5LmlubmVySFRNTCA9IHRleHQ7XG4gICAgICAgIGFuY2hvci5zZXRBdHRyaWJ1dGUoJ2hyZWYnLGhyZWYpO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlUm93KHJvdyl7XG5cbiAgICAgICAgbGV0IHRhYmxlUm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHJvdy0ke3Jvd31gKVxuICAgICAgICAgICAgdGFibGVSb3cucmVtb3ZlKCk7XG5cbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlRGVsZXRlQnV0dG9uKHJvdykge1xuICAgICAgICBsZXQgaXNNYXN0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXNNYXN0ZXInKS52YWx1ZTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAnYnRuIGJ0bi1zbSBidG4tZGFuZ2VyJztcbiAgICAgICAgYnV0dG9uLnRpdGxlID0gJ0RlbGV0ZSBJdGVtJztcbiAgICAgICAgYnV0dG9uLmlkID1gZGVsZXRlSXRlbUJ0bi0ke3Jvd31gO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWhyZWYnLCcnKTtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1vYmplY3QtbmFtZScsJycpO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLW9iamVjdC1pZCcsJycpO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLW9iamVjdC10eXBlJywnaXRlbTonKTtcbiAgICAgICAgaWYoaXNNYXN0ZXIgPT09ICdmYWxzZScpe1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1saXN0LW5hbWUnLGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0TmFtZScpLnZhbHVlKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtbmFtZScsJ21hc3RlcicpO1xuICAgICAgICB9XG5cblxuICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICBpY29uLmNsYXNzTmFtZSA9ICdmYXMgZmEtdHJhc2gnO1xuXG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJlbW92ZVJvdyhyb3cpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBidXR0b247XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGVsZXRlQnRuRGF0YShpZCxyb3cpe1xuICAgICAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRlbGV0ZUl0ZW1CdG4tJHtyb3d9YCk7XG4gICAgICAgIGxldCB1cmwgPSBgL2xpc3QtaXRlbS8ke2lkfWA7XG5cbiAgICAgICAgYXhpb3NcbiAgICAgICAgLmdldCh1cmwpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgIT0gXCIxXCIpIHtcbiAgICAgICAgICAgICAgICBhbGVydChyZXMuZGF0YS5tc2cpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGl0ZW0gPSByZXMuZGF0YS5pdGVtO1xuICAgICAgICAgICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1ocmVmJyxgL3JlbW92ZS1saXN0LWl0ZW0vJHtpdGVtLmlkfWApO1xuICAgICAgICAgICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1vYmplY3QtbmFtZScsaXRlbS5pdGVtX25hbWUpO1xuICAgICAgICAgICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1vYmplY3QtaWQnLGl0ZW0uaWQpO1xuICAgICAgICAgICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1icy10b2dnbGUnLFwibW9kYWxcIilcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdGFyZ2V0JyxcIiNkZWxldGVBbGVydE1vZGFsXCIpO1xuICAgICAgICAgICAgZGVsZXRlQnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGNvbmZpcm1EZWxldGUoZGVsZXRlQnRuKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgYWxlcnQoZXJyKTtcbiAgICAgICAgfSk7XG5cblxuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc29ydGFibGVcIikuZm9yRWFjaChmdW5jdGlvbiAodGFibGUpIHtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlJZCA9IHRhYmxlLmdldEF0dHJpYnV0ZShcImRhdGEtY2F0ZWdvcnktaWRcIik7XG5cbiAgICAgICAgbmV3IFNvcnRhYmxlKHRhYmxlLnF1ZXJ5U2VsZWN0b3IoXCJ0Ym9keVwiKSwge1xuICAgICAgICAgICAgYW5pbWF0aW9uOiAxNTAsXG4gICAgICAgICAgICBvbkVuZDogZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgbmV3IG9yZGVyIG9mIGl0ZW1zXG4gICAgICAgICAgICAgICAgY29uc3Qgb3JkZXJlZElkcyA9IFtdO1xuICAgICAgICAgICAgICAgIHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0clwiKS5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJlZElkcy5wdXNoKHJvdy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIFNlbmQgdGhlIG5ldyBvcmRlciB0byB0aGUgc2VydmVyIHZpYSBBSkFYXG4gICAgICAgICAgICAgICAgdXBkYXRlSXRlbU9yZGVyKGNhdGVnb3J5SWQsIG9yZGVyZWRJZHMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gdXBkYXRlSXRlbU9yZGVyKGNhdGVnb3J5SWQsIG9yZGVyZWRJZHMpIHtcblxuICAgICAgICBsZXQgbGlzdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0SWRcIikudmFsdWU7XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIFwiWC1DU1JGLVRPS0VOXCI6IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKVxuICAgICAgICAgICAgICAgIC5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpLFxuICAgICAgICAgICAgY2F0ZWdvcnlfaWQ6IGNhdGVnb3J5SWQsXG4gICAgICAgICAgICBvcmRlcmVkX2lkczogb3JkZXJlZElkcyxcbiAgICAgICAgICAgIGxpc3RfaWQ6IGxpc3RJZCxcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgdXJsID0gXCIvdXBkYXRlLWxpc3Qtb3JkZXJcIjtcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC5wb3N0KHVybCwgZGF0YSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzICE9IFwiMVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KHJlcy5kYXRhLm1zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBzb3J0aW5nU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0QnlcIik7XG4gICAgICAgIGxldCBvcHRzID0gc29ydGluZ1NlbGVjdC5vcHRpb25zLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRzOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzb3J0aW5nU2VsZWN0Lm9wdGlvbnNbaV0udmFsdWUgPT0gXCJkcmFnX2Ryb3BcIikge1xuICAgICAgICAgICAgICAgIHNvcnRpbmdTZWxlY3Qub3B0aW9uc1tpXS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcGFyZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcmVudC1jb250YWluZXInKTtcblxuICAgIGlmKHBhcmVudENvbnRhaW5lciAhPT0gbnVsbCAmJiBwYXJlbnRDb250YWluZXIgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIFNvcnRhYmxlLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFyZW50LWNvbnRhaW5lcicpLCB7XG4gICAgICAgICAgICBhbmltYXRpb246IDE1MCxcbiAgICAgICAgICAgIGhhbmRsZTogJy5pdGVtLWNvbGxhcHNpYmxlLWhlYWRlcicsXG4gICAgICAgICAgICBnaG9zdENsYXNzOiAnc29ydGFibGUtZ2hvc3QnLFxuICAgICAgICAgICAgb25FbmQ6IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgICAgICAvLyBBZnRlciBzb3J0aW5nIGlzIGNvbXBsZXRlZCwgdXBkYXRlIHRoZSBwb3NpdGlvbnMgaW4gdGhlIGRhdGFiYXNlXG4gICAgICAgICAgICAgICAgdXBkYXRlQ2F0ZWdvcnlPcmRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQ2F0ZWdvcnlPcmRlcigpIHtcblxuICAgICAgICBjb25zdCBuZXdPcmRlciA9IFtdO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJhZ2dhYmxlLWNvbnRhaW5lcicpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG5cbiAgICAgICAgICAgIG5ld09yZGVyLnB1c2goe1xuICAgICAgICAgICAgICAgIGl0ZW1fY2F0ZWdvcnk6IGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWNhdGVnb3J5LXZhbHVlJyksXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlfb3JkZXI6IGluZGV4XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCB1cmwgPSBcIi91cGRhdGUtY2F0ZXJvZ3J5LW9yZGVyXCI7XG4gICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RJZFwiKS52YWx1ZTtcblxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgXCJYLUNTUkYtVE9LRU5cIjogZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpXG4gICAgICAgICAgICAgICAgLmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIiksXG4gICAgICAgICAgICBjYXRlZ29yeV9vcmRlcjogbmV3T3JkZXIsXG4gICAgICAgICAgICBsaXN0X2lkOiBsaXN0SWQsXG4gICAgICAgIH07XG4gICAgICAgIC8vYnJlYWsgb3V0IHBvc3RzIGFuZCBnZXQgY2FsbHMgdG8gb3duIGZ1bmN0aW9uc1xuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QodXJsLCBkYXRhKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cyAhPSBcIjFcIikge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChyZXMuZGF0YS5tc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGxldCBhc3NpZ25Ub0xpc3RNb2RhbCA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQXNzaWduSXRlbVRvTGlzdE1vZGFsJyk7XG5cbiAgICBpZihhc3NpZ25Ub0xpc3RNb2RhbCAhPT0gdW5kZWZpbmVkICYmIGFzc2lnblRvTGlzdE1vZGFsICE9PSBudWxsKXtcblxuICAgICAgICBhc3NpZ25Ub0xpc3RNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdoaWRlLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IHRhYmxlQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1hc3NpZ24taXRlbS10YWJsZS1ib2R5Jyk7XG4gICAgICAgICAgICB3aGlsZSh0YWJsZUJvZHkuZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICAgICAgdGFibGVCb2R5LnJlbW92ZUNoaWxkKHRhYmxlQm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbndpbmRvdy5heGlvcyA9IGF4aW9zO1xuXG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIk1vZGFsIiwiQ2hhcnQiLCJTb3J0YWJsZSIsImJvb3RzdHJhcCIsInJlcXVpcmUiLCJncmFtQ29udmVydGVyIiwib3VuY2VDb252ZXJ0ZXIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2hvd1Bhc3N3b3JkIiwiaWQiLCJwYXNzd29yZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRNYXN0ZXJMaXN0SXRlbSIsIm51bWJlck9mSXRlbXNUb0FkZCIsImxpbmVzVG9BZGQiLCJsaXN0QnlJdGVtcyIsImxpc3RlbiIsIml0ZW1UYWJsZSIsInJvdyIsImNyZWF0ZUVsZW1lbnQiLCJjZWxsMSIsIml0ZW1OYW1lIiwiY3JlYXRlTGlzdEl0ZW1JbnB1dCIsInBsYWNlaG9sZGVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2VsbDYiLCJkZWxldGVCdG4iLCJjcmVhdGVEZWxldGVCdXR0b24iLCJjZWxsMiIsIml0ZW1XZWlnaHQiLCJjZWxsMyIsInNlbGVjdCIsInNldEF0dHJpYnV0ZSIsImNsYXNzTmFtZSIsIm96T3B0aW9uIiwibGJzT3B0aW9uIiwiZ3JPcHRpb24iLCJrZ09wdGlvbiIsInRleHQiLCJhcHBlbmRDaGlsZCIsInNlbGVjdENlbGwiLCJjYXRlZ29yeVNlbGVjdCIsImdldENhdGVncm95U2VsZWN0IiwiYXBwZW5kIiwic2hvd0xpc3RBc3NpZ25Nb2RhbCIsIml0ZW1JZCIsInRhYmxlIiwiaGVhZGVyIiwiaW5uZXJIVE1MIiwidXJsIiwidXNlckxpc3RzIiwiYXhpb3MiLCJnZXQiLCJyZXMiLCJkYXRhIiwic3RhdHVzIiwiYWxlcnQiLCJtc2ciLCJsaXN0TmFtZUNlbGwiLCJhc3NpZ25DZWxsIiwiY2hlY2tib3giLCJpdGVtQXNzaWduZWQiLCJjaGVja2VkIiwiYXNzaWduVG9HZWFyTGlzdCIsImVsZW1lbnQiLCJsaXN0SWQiLCJnZXRBdHRyaWJ1dGUiLCJsaXN0X2lkIiwicG9zdCIsInJlc3BvbnNlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiYWRkTGlzdEl0ZW0iLCJjYXRlZ29yeWNvdW50ZXIiLCJ1bmRlZmluZWQiLCJncm91cENhdGVnb3J5IiwibGlzdFZpZXdJbnB1dCIsImxpc3RVT00iLCJmaW5hbElFbGVtZW50IiwidGFibGVDYXRlZ29yeSIsInVzZXJJZCIsImZpbmFsSSIsImNlbGwwIiwic2NvcGUiLCJjb3VudGVyIiwibGlzdFZpZXdUeXBlIiwibmV3Um93IiwibGluZVVvbUNlbGwiLCJyb3dVb20iLCJyYWRpbzEiLCJjcmVhdGVSYWRpbyIsInJhZGlvTGFiZWwxIiwiY3JlYXRlTGFiZWwiLCJyYWRpbzIiLCJyYWRpb0xhYmVsMiIsInJhZGlvMyIsInJhZGlvTGFiZWwzIiwicmFkaW80IiwicmFkaW9MYWJlbDQiLCJyYWRpb0xhYmVsNSIsImNlbGw0IiwicGFja2VkQW1vdW50IiwiY2VsbDUiLCJ0b3RhbExpbmVXZWlnaHQiLCJpY29uQ2VsbCIsImljb24iLCJhZGRFdmVudExpc3RlbmVyV2VpZ2h0Q2FsYyIsImNvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJ1cGRhdGVVT00iLCJ1c1JhZGlvVG9NZXRyaWMiLCJtZXRyaWNSYWRpb1RvVXMiLCJuZWVkZWRGb3JXZWlnaHRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm5lZWRlZEZvcldlaWdodCIsImdldExpbmVUb3RhbFdlaWdodCIsImNvbnZlcnQiLCJ3ZWlnaHQiLCJ1b20iLCJsaW5lVG90YWxXZWlnaHRFbGVtZW50IiwibGluZVRvdGFsIiwidG9GaXhlZCIsInJlcGxhY2UiLCJ1cGRhdGVMaXN0SXRlbSIsInVwZGF0ZUl0ZW1VT00iLCJIVE1MRWxlbWVudCIsInVvbUVsZW1lbnQiLCJjb25jYXQiLCJjb2x1bW5OYW1lIiwibGFiZWwiLCJsYWJlbEhUTUwiLCJuZXdVT00iLCJpc05ld1JvdyIsInN0YXJ0c1dpdGgiLCJlbmRzV2l0aCIsImdldEJvb2xlYW5EYXRhIiwicmVzRGF0YSIsIml0ZW0iLCJmbGFzaEJvcmRlciIsImVyciIsImFkZENhdGVnb3J5R3JvdXAiLCJjYXRlZ29yeSIsImxvY2F0aW9uIiwicmVsb2FkIiwiaXNTdWNjZXNzIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzZXRUaW1lb3V0IiwiX2RvY3VtZW50JGdldEVsZW1lbnRCIiwiX2RvY3VtZW50JGdldEVsZW1lbnRCMiIsIl9kb2N1bWVudCRnZXRFbGVtZW50QjMiLCJfZG9jdW1lbnQkZ2V0RWxlbWVudEI0IiwiaWRBcnIiLCJzcGxpdCIsIml0ZW1JZFZhbHVlIiwiaXNNYXN0ZXJMaXN0IiwidXBkYXRlQ2F0ZWdvcnlWYWx1ZSIsInVvbVJhZGlvcyIsInVvbVJhZGlvIiwidW9tQ29sdW1uTmFtZSIsIm5ld0lkIiwiZ2V0RGVsZXRlQnRuRGF0YSIsInVwZGF0ZVRvdGFsTGlzdFdlaWdodHMiLCJiYXNlV2VpZ2h0IiwidG90YWxQYWNrV2VpZ2h0IiwibWF4UGFja1dlaWdodCIsImNsYXNzV2FybmluZ1ZhbHVlIiwidW9tVGV4dCIsImxpc3REYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImRpdkVsZW1lbnQiLCJpbm5lclRleHQiLCJkaXNwbGF5IiwibmFtZUJhc2UiLCJvcHRpb24iLCJvcHRpb25MaXN0IiwiX3JlZiIsIl9jYWxsZWUiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwidDAiLCJzZWxlY3RlZCIsImlucHV0RWxlbWVudHMiLCJpbnB1dEVsZW1lbnQiLCJlbGVtZW50VHlwZSIsImVsZW1lbnRUYWciLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJuZXdFbGVtZW50IiwicGFyZW50RWxlbWVudCIsInJlcGxhY2VDaGlsZCIsImRhdGFDb2x1bW5OYW1lIiwicmFkaW8iLCJpbm5lckh0bWwiLCJodG1sRm9yIiwibGluZUxhYmVsIiwidXBkYXRlTGlzdCIsImhlYWRlcnMiLCJjb250ZW50IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiYXJyb3ciLCJjb250YWlucyIsInJlbW92ZSIsIm1heEhlaWdodCIsInBhZGRpbmciLCJzY3JvbGxIZWlnaHQiLCJpbnB1dHMiLCJpbnB1dCIsImRpc2FibGVkIiwibGlzdENoYXJ0YnRuIiwiY2hhcnRTdGF0dXMiLCJnZXRDaGFydCIsImRlc3Ryb3kiLCJjdHgiLCJjaGFydERhdGEiLCJwYXJzZSIsIm15Q2hhcnQiLCJsYWJlbHMiLCJkYXRhc2V0cyIsIndlaWdodHMiLCJjb2xvcnMiLCJib3JkZXJXaWR0aCIsImhvdmVyT2Zmc2V0Iiwib3B0aW9ucyIsImN1dG91dCIsInJhZGl1cyIsImxlZ2VuZCIsInBsdWdpbnMiLCJkYXRhbGFiZWxzIiwiYW5pbWF0aW9uIiwiYW5pbWF0ZVJvdGF0ZSIsImFuaW1hdGVTY2FsZSIsInRleHRDb250ZW50Iiwic2hvd0NvbnZyc2lvbkFsZXJ0IiwiY29uZmlybURlbGV0ZSIsImlzTWFzdGVyIiwiaHJlZiIsIm9iamVjdFR5cGUiLCJhbmNob3IiLCJtb2RhbEJvZHkiLCJoZWxwZXJEaXYiLCJoZWxwdGV4dCIsImxpc3ROYW1lIiwicmVtb3ZlUm93IiwidGFibGVSb3ciLCJidXR0b24iLCJ0aXRsZSIsIm9uY2xpY2siLCJpdGVtX25hbWUiLCJjYXRlZ29yeUlkIiwib25FbmQiLCJldnQiLCJvcmRlcmVkSWRzIiwidXBkYXRlSXRlbU9yZGVyIiwiY2F0ZWdvcnlfaWQiLCJvcmRlcmVkX2lkcyIsInNvcnRpbmdTZWxlY3QiLCJvcHRzIiwicGFyZW50Q29udGFpbmVyIiwiZ2hvc3RDbGFzcyIsInVwZGF0ZUNhdGVnb3J5T3JkZXIiLCJuZXdPcmRlciIsImluZGV4IiwiaXRlbV9jYXRlZ29yeSIsImNhdGVnb3J5X29yZGVyIiwiYXNzaWduVG9MaXN0TW9kYWwiLCJ0YWJsZUJvZHkiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJkZWZhdWx0cyIsImNvbW1vbiJdLCJzb3VyY2VSb290IjoiIn0=