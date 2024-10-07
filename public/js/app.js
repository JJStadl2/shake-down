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
    element.style.backgroundColor = isSuccess ? '#A8E6CF' : '#F08080';
    // Set a timeout to remove the border after 2 seconds
    setTimeout(function () {
      element.style.backgroundColor = '';
    }, 2000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxTQUFTLEdBQUduUSxRQUFRLENBQUNDLGNBQWMsQ0FBQyw4QkFBOEIsQ0FBQztNQUN2RSxPQUFNa1EsU0FBUyxDQUFDQyxVQUFVLEVBQUM7UUFDdkJELFNBQVMsQ0FBQ0UsV0FBVyxDQUFDRixTQUFTLENBQUNDLFVBQVUsQ0FBQztNQUMvQztJQUVKLENBQUMsQ0FBQztFQUNOO0FBRUosQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUNqekN3QjtBQUMxQnpRLE1BQU0sQ0FBQytDLEtBQUssR0FBR0EsNkNBQUs7QUFFcEIvQyxNQUFNLENBQUMrQyxLQUFLLENBQUM0TixRQUFRLENBQUN4RSxPQUFPLENBQUN5RSxNQUFNLENBQUMsa0JBQWtCLENBQUMsR0FBRyxnQkFBZ0I7Ozs7Ozs7Ozs7O0FDSDNFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zYXNzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAnLi9ib290c3RyYXAnIDtcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcImJvb3RzdHJhcFwiO1xuLy8gaW1wb3J0ICAnYm9vdHN0cmFwJztcbmltcG9ydCBcIkBwb3BwZXJqcy9jb3JlXCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzL2F1dG9cIjtcbmltcG9ydCBTb3J0YWJsZSBmcm9tIFwic29ydGFibGVqc1wiO1xuY29uc3QgYm9vdHN0cmFwID0gcmVxdWlyZShcIi4vYm9vdHN0cmFwXCIpO1xuY29uc3QgZ3JhbUNvbnZlcnRlciA9IDEwMDA7XG5jb25zdCBvdW5jZUNvbnZlcnRlciA9IDE2O1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgdGhpcy53aW5kb3cuc2hvd1Bhc3N3b3JkID0gZnVuY3Rpb24gc2hvd1Bhc3N3b3JkKGlkKSB7XG4gICAgICAgIGxldCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgaWYgKHBhc3N3b3JkLnR5cGUgPT09IFwicGFzc3dvcmRcIikge1xuICAgICAgICAgICAgcGFzc3dvcmQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFzc3dvcmQudHlwZSA9IFwicGFzc3dvcmRcIjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhpcy53aW5kb3cuYWRkTWFzdGVyTGlzdEl0ZW0gPSBmdW5jdGlvbiBhZGRNYXN0ZXJMaXN0SXRlbSgpIHtcbiAgICAgICAgbGV0IG51bWJlck9mSXRlbXNUb0FkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZXNUb0FkZFwiKTtcbiAgICAgICAgbGV0IGxpbmVzVG9BZGQgPSAxO1xuICAgICAgICBpZiAobnVtYmVyT2ZJdGVtc1RvQWRkID09PSBudWxsIHx8ICtudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPCAxKSB7XG4gICAgICAgICAgICBudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPSBsaW5lc1RvQWRkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGluZXNUb0FkZCA9ICtudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzVG9BZGQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGxpc3RCeUl0ZW1zID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBsaXN0ZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBpdGVtVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtaXRlbS10YWJsZS1ib2R5Jyk7XG4gICAgICAgICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgY2VsbHMgYW5kIGlucHV0IGVsZW1lbnRzLlxuICAgICAgICAgICAgbGV0IGNlbGwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuXG4gICAgICAgICAgICBsZXQgaXRlbU5hbWUgPSBjcmVhdGVMaXN0SXRlbUlucHV0KFxuICAgICAgICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgICAgICAgIFwiaXRlbU5hbWVcIixcbiAgICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICAgIFwiaXRlbV9uYW1lXCIsXG4gICAgICAgICAgICAgICAgbGlzdGVuXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaXRlbU5hbWUucGxhY2Vob2xkZXIgPSBcIkl0ZW0gTmFtZVwiO1xuICAgICAgICAgICAgaXRlbU5hbWUuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcblxuICAgICAgICAgICAgbGV0IGNlbGw2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgY2VsbDYuaWQgPSBcImJ0bi10ZC1cIiAraTtcbiAgICAgICAgICAgIGxldCBkZWxldGVCdG4gPSBjcmVhdGVEZWxldGVCdXR0b24oaSk7XG5cbiAgICAgICAgICAgIGxldCBjZWxsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGxldCBpdGVtV2VpZ2h0ID0gY3JlYXRlTGlzdEl0ZW1JbnB1dChcbiAgICAgICAgICAgICAgICBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIFwiaXRlbVdlaWdodFwiLFxuICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAgXCJpdGVtX3dlaWdodFwiLFxuICAgICAgICAgICAgICAgIGxpc3RlblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQudmFsdWUgPSAwO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKFwiZm9yLXdlaWdodFwiKTtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQuY2xhc3NMaXN0LmFkZChcIm51bWJlci1pbnB1dFwiKTtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcbiAgICAgICAgICAgIC8vaXRlbVdlaWdodC5zdHlsZS53aWR0aCA9ICc0MCUnO1xuICAgICAgICAgICAgY2VsbDIuY2xhc3NMaXN0LmFkZChcIm51bWJlci1jb2xcIik7XG5cbiAgICAgICAgICAgIGxldCBjZWxsMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGxldCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICAgICAgc2VsZWN0LmlkID0gXCJ1b20tXCIgKyBpO1xuICAgICAgICAgICAgc2VsZWN0Lm5hbWUgPSBcInVvbVtdXCI7XG4gICAgICAgICAgICBzZWxlY3Quc2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4tbmFtZVwiLCBcInVvbVwiKTtcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiO1xuXG4gICAgICAgICAgICBsZXQgb3pPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgbGV0IGxic09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBsZXQgZ3JPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgbGV0IGtnT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIG96T3B0aW9uLnZhbHVlID0gXCJpbl9vdW5jZXNcIjtcbiAgICAgICAgICAgIG96T3B0aW9uLnRleHQgPSBcIk9aXCI7XG4gICAgICAgICAgICBsYnNPcHRpb24udmFsdWUgID0gJ2luX2xicyc7XG4gICAgICAgICAgICBsYnNPcHRpb24udGV4dCA9ICdMQlMnXG5cbiAgICAgICAgICAgIGdyT3B0aW9uLnZhbHVlID0gXCJpbl9ncmFtc1wiO1xuICAgICAgICAgICAgZ3JPcHRpb24udGV4dCA9IFwiR1wiO1xuICAgICAgICAgICAga2dPcHRpb24udmFsdWUgID0gJ2luX2tpbG9zJztcbiAgICAgICAgICAgIGtnT3B0aW9uLnRleHQgPSAnS0cnO1xuICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG96T3B0aW9uKTtcbiAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChsYnNPcHRpb24pO1xuICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKGdyT3B0aW9uKTtcbiAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChrZ09wdGlvbik7XG5cbiAgICAgICAgICAgIC8vYXBwZW5kIGlucHV0cyB0byBjZWxscy5cbiAgICAgICAgICAgIGNlbGwxLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIGNlbGwyLmFwcGVuZENoaWxkKGl0ZW1XZWlnaHQpO1xuXG4gICAgICAgICAgICBsZXQgc2VsZWN0Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGxldCBjYXRlZ29yeVNlbGVjdCA9IGdldENhdGVncm95U2VsZWN0KGksbnVsbCwgbGlzdGVuKTtcbiAgICAgICAgICAgIGNhdGVnb3J5U2VsZWN0Lm5hbWUgPSAnaXRlbUNhdGVnb3J5W10nXG4gICAgICAgICAgICBzZWxlY3RDZWxsLmFwcGVuZChjYXRlZ29yeVNlbGVjdCk7XG5cbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gICAgICAgICAgICBjZWxsNi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgY2VsbHMgdG8gdGhlIHJvdy5cbiAgICAgICAgICAgIC8vIHJvdy5hcHBlbmRDaGlsZChpY29uQ2VsbCk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDEpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHNlbGVjdENlbGwpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwzKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsMik7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDYpO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIHJvdyB0byB0aGUgdGFibGUuXG4gICAgICAgICAgICBpdGVtVGFibGUuYXBwZW5kQ2hpbGQocm93KTtcblxuXG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0l0ZW1Db3VudCcpLnZhbHVlID0gbGluZXNUb0FkZDtcbiAgICAgICAgbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlID0gMTtcbiAgICB9O1xuICAgIHRoaXMud2luZG93LnNob3dMaXN0QXNzaWduTW9kYWwgPSBmdW5jdGlvbiBzaG93TGlzdEFzc2lnbk1vZGFsKGl0ZW1JZCxpdGVtTmFtZSl7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1JZGZvckFzc2lnbicpLnZhbHVlID0gaXRlbUlkO1xuICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlckl0ZW1JZGZvckFzc2lnbicpLnZhbHVlID0gdXNlckl0ZW1JZDtcblxuICAgICAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWFzc2lnbi1pdGVtLXRhYmxlLWJvZHlcIik7XG4gICAgICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQXNzaWduSXRlbVRvTGlzdE1vZGFsTGFiZWwnKTtcbiAgICAgICAgaGVhZGVyLmlubmVySFRNTCA9ICdBc3NpZ24vVW5hc3NpZ24gaXRlbTogJytpdGVtTmFtZTtcblxuICAgICAgICBsZXQgdXJsID0gJy9nZXQtdXNlci1saXN0cy8nK2l0ZW1JZDtcbiAgICAgICAgbGV0IHVzZXJMaXN0cztcblxuICAgICAgICBheGlvcy5nZXQodXJsKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgdXNlckxpc3RzID0gZGF0YS51c2VyTGlzdHM7XG5cbiAgICAgICAgICAgIGlmKGRhdGEuc3RhdHVzICE9PSAnMScpe1xuICAgICAgICAgICAgICAgIGFsZXJ0KGRhdGEubXNnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXNlckxpc3RzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICAgICAgICAgIGxldCBsaXN0TmFtZUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICAgICAgbGV0IGFzc2lnbkNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG5cbiAgICAgICAgICAgICAgICBsaXN0TmFtZUNlbGwuaW5uZXJIVE1MID0gdXNlckxpc3RzW2ldLm5hbWU7XG5cbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICAgICAgICAgIGNoZWNrYm94LmlkID0gJ2xpc3RDaGVja0JveC0nK2k7XG4gICAgICAgICAgICAgICAgY2hlY2tib3gubmFtZSA9ICdsaXN0SWRzW10nO1xuICAgICAgICAgICAgICAgIGNoZWNrYm94LnZhbHVlID0gdXNlckxpc3RzW2ldLmlkO1xuXG4gICAgICAgICAgICAgICAgaWYodXNlckxpc3RzW2ldLml0ZW1Bc3NpZ25lZCA9PSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYXNzaWduQ2VsbC5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGxpc3ROYW1lQ2VsbCk7XG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGFzc2lnbkNlbGwpO1xuICAgICAgICAgICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgdGhpcy53aW5kb3cuYXNzaWduVG9HZWFyTGlzdCA9IGZ1bmN0aW9uIGFzc2lnblRvR2Vhckxpc3QoZWxlbWVudCl7XG4gICAgICAgIGxldCBsaXN0SWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJyk7XG4gICAgICAgIGxldCBpdGVtSWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pdGVtLWlkJyk7XG5cbiAgICAgICAgaWYoIWVsZW1lbnQuY2hlY2tlZCl7XG4gICAgICAgICAgICBsaXN0SWQgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB1cmwgPSAnL2Fzc2lnbi10by1nZWFyLWxpc3QnXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgbGlzdF9pZDogbGlzdElkLFxuICAgICAgICAgICAgaWQ6IGl0ZW1JZFxuICAgICAgICB9O1xuXG5cbiAgICAgICAgYXhpb3MucG9zdCh1cmwsZGF0YSlcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAxKXtcblxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgYWxlcnQocmVzcG9uc2UubXNnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgdGhpcy53aW5kb3cuYWRkTGlzdEl0ZW0gPSBmdW5jdGlvbiBhZGRMaXN0SXRlbShjYXRlZ29yeWNvdW50ZXIgPSBudWxsLCBncm91cENhdGVnb3J5ID0gbnVsbCkge1xuICAgICAgICBsZXQgbnVtYmVyT2ZJdGVtc1RvQWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lc1RvQWRkXCIpO1xuICAgICAgICBsZXQgbGluZXNUb0FkZCA9IDE7XG4gICAgICAgIGxldCBsaXN0Vmlld0lucHV0O1xuICAgICAgICBpZiAobnVtYmVyT2ZJdGVtc1RvQWRkID09PSBudWxsIHx8ICtudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPCAxKSB7XG4gICAgICAgICAgICBudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPSBsaW5lc1RvQWRkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGluZXNUb0FkZCA9ICtudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzVG9BZGQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGxpc3RVT00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbVwiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBmaW5hbElFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaW5hbC1pXCIpO1xuICAgICAgICAgICAgbGV0IGxpc3RCeUl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0QnlJdGVtc1wiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBpdGVtVGFibGU7XG5cbiAgICAgICAgICAgIGlmICgrbGlzdEJ5SXRlbXMgPT0gMSkge1xuICAgICAgICAgICAgICAgIGxpc3RCeUl0ZW1zID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpdGVtVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW0tdGFibGUtYm9keVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGlzdEJ5SXRlbXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsZXQgdGFibGVDYXRlZ29yeSA9IGNhdGVnb3J5Y291bnRlcjtcbiAgICAgICAgICAgICAgICBpdGVtVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgICAgICAgICAgXCJjYXRlZ29yeVRhYmxlLVwiICsgdGFibGVDYXRlZ29yeVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB1c2VySWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJJZFwiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RJZFwiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBmaW5hbEkgPSBmaW5hbElFbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgZmluYWxJRWxlbWVudC52YWx1ZSA9ICtmaW5hbEkgKyAxO1xuXG4gICAgICAgICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICAgICAgcm93LmlkID0gJ3Jvdy0nK2ZpbmFsSTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIGNlbGxzIGFuZCBpbnB1dCBlbGVtZW50cy5cbiAgICAgICAgICAgIGxldCBjZWxsMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgICAgICAgICAgIGNlbGwwLnNjb3BlID0gXCJyb3dcIjtcbiAgICAgICAgICAgIGNlbGwwLmlubmVySFRNTCA9IGZpbmFsSTtcblxuICAgICAgICAgICAgbGV0IGNlbGwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuXG4gICAgICAgICAgICBsZXQgY291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGNvdW50ZXIudHlwZSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICBjb3VudGVyLm5hbWUgPSBcImlkW11cIjtcbiAgICAgICAgICAgIGNvdW50ZXIuaWQgPSBcImlkLVwiICsgZmluYWxJO1xuICAgICAgICAgICAgY291bnRlci52YWx1ZSA9IFwibmV3LVwiICsgZmluYWxJO1xuICAgICAgICAgICAgY291bnRlci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIsIFwiaWRcIik7XG5cbiAgICAgICAgICAgIGxldCBsaXN0Vmlld1R5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBsaXN0Vmlld1R5cGUudHlwZSA9IFwiaGlkZGVuXCI7XG5cbiAgICAgICAgICAgIGxpc3RWaWV3VHlwZS5pZCA9IFwibGlzdFZpZXdUeXBlXCI7XG4gICAgICAgICAgICBsaXN0Vmlld1R5cGUudmFsdWUgPSBsaXN0QnlJdGVtc1xuICAgICAgICAgICAgbGlzdFZpZXdJbnB1dCA9IGxpc3RWaWV3VHlwZTtcblxuICAgICAgICAgICAgbGV0IG5ld1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIG5ld1Jvdy50eXBlID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgIG5ld1Jvdy5pZCA9IFwibmV3Um93LVwiICsgZmluYWxJO1xuICAgICAgICAgICAgbmV3Um93LnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBpdGVtTmFtZSA9IGNyZWF0ZUxpc3RJdGVtSW5wdXQoXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgXCJpdGVtTmFtZVwiLFxuICAgICAgICAgICAgICAgIGZpbmFsSSxcbiAgICAgICAgICAgICAgICBcIml0ZW1fbmFtZVwiXG5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpdGVtTmFtZS5wbGFjZWhvbGRlciA9IFwiSXRlbSBOYW1lXCI7XG4gICAgICAgICAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBjZWxsNi5pZCA9IFwiYnRuLXRkLVwiICsgZmluYWxJO1xuICAgICAgICAgICAgbGV0IGRlbGV0ZUJ0biA9IGNyZWF0ZURlbGV0ZUJ1dHRvbihmaW5hbEkpO1xuICAgICAgICAgICAgbGV0IGNlbGwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuXG4gICAgICAgICAgICBsZXQgaXRlbVdlaWdodCA9IGNyZWF0ZUxpc3RJdGVtSW5wdXQoXG4gICAgICAgICAgICAgICAgXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICBcIml0ZW1XZWlnaHRcIixcbiAgICAgICAgICAgICAgICBmaW5hbEksXG4gICAgICAgICAgICAgICAgXCJpdGVtX3dlaWdodFwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaXRlbVdlaWdodC52YWx1ZSA9IDA7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJmb3Itd2VpZ2h0XCIpO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWlucHV0XCIpO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xuICAgICAgICAgICAgY2VsbDIuY2xhc3NMaXN0LmFkZChcIm51bWJlci1jb2xcIik7XG5cbiAgICAgICAgICAgIGxldCBjZWxsMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGxldCBsaW5lVW9tQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGNlbGwzLmNsYXNzTGlzdC5hZGQoXCJ1b20tdGRcIik7XG4gICAgICAgICAgICBsaW5lVW9tQ2VsbC5jbGFzc0xpc3QuYWRkKFwidW9tLXRkXCIpO1xuICAgICAgICAgICAgbGV0IHJvd1VvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIHJvd1VvbS50eXBlID0gJ2hpZGRlbic7XG4gICAgICAgICAgICByb3dVb20uaWQgPSBcInVvbS1cIiArIGZpbmFsSTtcblxuXG4gICAgICAgICAgICBsZXQgIHJhZGlvMSA9IGNyZWF0ZVJhZGlvKFwiaW5fb3VuY2VzXCIsIFwiXCIsIFwib3pcIiwgZmluYWxJKTtcbiAgICAgICAgICAgIGxldCByYWRpb0xhYmVsMSA9IGNyZWF0ZUxhYmVsKFxuICAgICAgICAgICAgICAgIFwiT1pcIixcbiAgICAgICAgICAgICAgICBcInVvbS1vei1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgICAgICBcIm96XCIsXG4gICAgICAgICAgICAgICAgZmluYWxJXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbGV0IHJhZGlvMiA9IGNyZWF0ZVJhZGlvKFwiaW5fbGJzXCIsIFwiXCIsIFwibGJzXCIsIGZpbmFsSSk7XG4gICAgICAgICAgICBsZXQgcmFkaW9MYWJlbDIgPSBjcmVhdGVMYWJlbChcbiAgICAgICAgICAgICAgICBcIkxCU1wiLFxuICAgICAgICAgICAgICAgIFwidW9tLWxicy1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgICAgICBcImxic1wiLFxuICAgICAgICAgICAgICAgIGZpbmFsSVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxldCAgIHJhZGlvMyA9IGNyZWF0ZVJhZGlvKFwiaW5fZ3JhbXNcIiwgXCJcIiwgXCJncmFtXCIsIGZpbmFsSSk7XG4gICAgICAgICAgICBsZXQgcmFkaW9MYWJlbDMgPSBjcmVhdGVMYWJlbChcbiAgICAgICAgICAgICAgICBcIkdcIixcbiAgICAgICAgICAgICAgICBcInVvbS1ncmFtLVwiICsgZmluYWxJLFxuICAgICAgICAgICAgICAgIFwiZ3JhbVwiLFxuICAgICAgICAgICAgICAgIGZpbmFsSVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxldCByYWRpbzQgPSBjcmVhdGVSYWRpbyhcImluX2tpbG9zXCIsIFwiXCIsIFwia2dcIiwgZmluYWxJKTtcbiAgICAgICAgICAgIGxldCByYWRpb0xhYmVsNCA9IGNyZWF0ZUxhYmVsKFxuICAgICAgICAgICAgICAgIFwiS0dcIixcbiAgICAgICAgICAgICAgICBcInVvbS1rZy1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgICAgICBcImtnXCIsXG4gICAgICAgICAgICAgICAgZmluYWxJXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbGV0IHJhZGlvTGFiZWw1O1xuXG4gICAgICAgICAgICBpZiAobGlzdFVPTSA9PT0gXCJ1c1wiKSB7XG4gICAgICAgICAgICAgICAgcm93VW9tLnZhbHVlID0gXCJ1c1wiO1xuICAgICAgICAgICAgICAgIHJhZGlvMS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByYWRpb0xhYmVsNSA9IGNyZWF0ZUxhYmVsKFxuICAgICAgICAgICAgICAgICAgICBcIk9aXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidW9tLW96LVwiICsgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICBcIm96XCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsSSxcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvd1VvbS52YWx1ZSA9IFwibWV0cmljXCI7XG4gICAgICAgICAgICAgICAgcmFkaW8zLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJhZGlvTGFiZWw1ID0gY3JlYXRlTGFiZWwoXG4gICAgICAgICAgICAgICAgICAgIFwiR1wiLFxuICAgICAgICAgICAgICAgICAgICBcInVvbS1ncmFtLVwiICsgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICBcImdyYW1cIixcbiAgICAgICAgICAgICAgICAgICAgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGNlbGw0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgY2VsbDQuY2xhc3NMaXN0LmFkZChcIm51bWJlci1jb2xcIik7XG4gICAgICAgICAgICBsZXQgcGFja2VkQW1vdW50ID0gY3JlYXRlTGlzdEl0ZW1JbnB1dChcbiAgICAgICAgICAgICAgICBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIFwicGFja2VkQW1vdW50XCIsXG4gICAgICAgICAgICAgICAgZmluYWxJLFxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCJcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHBhY2tlZEFtb3VudC52YWx1ZSA9IDE7XG5cbiAgICAgICAgICAgIHBhY2tlZEFtb3VudC5jbGFzc0xpc3QuYWRkKFwiZm9yLXdlaWdodFwiKTtcbiAgICAgICAgICAgIHBhY2tlZEFtb3VudC5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWlucHV0XCIpO1xuICAgICAgICAgICAgcGFja2VkQW1vdW50LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRyb2xcIik7XG5cbiAgICAgICAgICAgIGxldCBjZWxsNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGNlbGw1LmNsYXNzTGlzdC5hZGQoXCJudW1iZXItY29sXCIpO1xuICAgICAgICAgICAgbGV0IHRvdGFsTGluZVdlaWdodCA9IGNyZWF0ZUxpc3RJdGVtSW5wdXQoXG4gICAgICAgICAgICAgICAgXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICBcInRvdGFsTGluZVdlaWdodFwiLFxuICAgICAgICAgICAgICAgIGZpbmFsSSxcbiAgICAgICAgICAgICAgICBcInRvdGFsX2xpbmVfd2VpZ2h0XCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQudmFsdWUgPSAwO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgICBcImRhdGEtY29sdW1uLW5hbWVcIixcbiAgICAgICAgICAgICAgICBcInRvdGFsX2xpbmVfd2VpZ2h0XCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQuc2V0QXR0cmlidXRlKFwicmVhZG9ubHlcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQuY2xhc3NMaXN0LmFkZChcIm51bWJlci1pbnB1dFwiKTtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJmb3ItdG90YWwtbGlzdC13ZWlnaHRcIik7XG5cbiAgICAgICAgICAgIC8vYXBwZW5kIGlucHV0cyB0byBjZWxscy5cbiAgICAgICAgICAgIGxldCBpY29uQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcblxuICAgICAgICAgICAgbGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgICAgICBpY29uLmNsYXNzTmFtZSA9ICdmYXMgZmEtZ3JpcC12ZXJ0aWNhbCc7XG4gICAgICAgICAgICBpY29uQ2VsbC5hcHBlbmRDaGlsZChpY29uKTtcblxuICAgICAgICAgICAgY2VsbDEuYXBwZW5kQ2hpbGQoY291bnRlcik7XG4gICAgICAgICAgICBjZWxsMS5hcHBlbmRDaGlsZChuZXdSb3cpO1xuICAgICAgICAgICAgY2VsbDEuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgICAgICAgICAgY2VsbDIuYXBwZW5kQ2hpbGQoaXRlbVdlaWdodCk7XG5cbiAgICAgICAgICAgIGxldCBzZWxlY3RDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgbGV0IGNhdGVnb3J5U2VsZWN0ID0gZ2V0Q2F0ZWdyb3lTZWxlY3QoZmluYWxJLCBncm91cENhdGVnb3J5KTtcblxuICAgICAgICAgICAgc2VsZWN0Q2VsbC5hcHBlbmQoY2F0ZWdvcnlTZWxlY3QpO1xuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQocm93VW9tKTtcbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHJhZGlvMSk7XG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChyYWRpb0xhYmVsMSk7XG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChyYWRpbzIpO1xuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbDIpO1xuXG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChyYWRpbzMpO1xuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbDMpO1xuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQocmFkaW80KTtcbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHJhZGlvTGFiZWw0KTtcblxuXG5cbiAgICAgICAgICAgIGNlbGw0LmFwcGVuZENoaWxkKHBhY2tlZEFtb3VudCk7XG4gICAgICAgICAgICBjZWxsNS5hcHBlbmRDaGlsZCh0b3RhbExpbmVXZWlnaHQpO1xuICAgICAgICAgICAgbGluZVVvbUNlbGwuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbDUpO1xuICAgICAgICAgICAgY2VsbDYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIGNlbGxzIHRvIHRoZSByb3cuXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoaWNvbkNlbGwpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwxKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChzZWxlY3RDZWxsKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsMyk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDIpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGw0KTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsNSk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQobGluZVVvbUNlbGwpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGw2KTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSByb3cgdG8gdGhlIHRhYmxlLlxuICAgICAgICAgICAgaXRlbVRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgICAgICAvL2FkZCBmdW5jdGlvbnMgdG8gY2FsY3VsYXRlIGFuZCBjb252ZXJ0IHRvdGFsIHdlaWdodC5cbiAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXJXZWlnaHRDYWxjKGZpbmFsSSk7XG4gICAgICAgIH1cbiAgICAgICAgbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlID0gMTtcblxuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdlYXItaXRlbXMtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0Vmlld0lucHV0KTtcbiAgICB9O1xuXG4gICAgdGhpcy53aW5kb3cudXBkYXRlVU9NID0gZnVuY3Rpb24gdXBkYXRlVU9NKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gXCJ1c1wiKSB7XG4gICAgICAgICAgICB1c1JhZGlvVG9NZXRyaWMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1ldHJpY1JhZGlvVG9VcygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyV2VpZ2h0Q2FsYyhyb3cpIHtcbiAgICAgICAgbGV0IG5lZWRlZEZvcldlaWdodHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvci13ZWlnaHRcIik7XG4gICAgICAgIG5lZWRlZEZvcldlaWdodHMuZm9yRWFjaChmdW5jdGlvbiAobmVlZGVkRm9yV2VpZ2h0KSB7XG4gICAgICAgICAgICBuZWVkZWRGb3JXZWlnaHQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZ2V0TGluZVRvdGFsV2VpZ2h0KHJvdyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy53aW5kb3cuZ2V0TGluZVRvdGFsV2VpZ2h0ID0gZnVuY3Rpb24gZ2V0TGluZVRvdGFsV2VpZ2h0KFxuICAgICAgICByb3csXG4gICAgICAgIGNvbnZlcnQgPSBmYWxzZVxuICAgICkge1xuICAgICAgICBsZXQgd2VpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtV2VpZ2h0LVwiICsgcm93KS52YWx1ZTtcbiAgICAgICAgbGV0IHBhY2tlZEFtb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFja2VkQW1vdW50LVwiICsgcm93KS52YWx1ZTtcbiAgICAgICAgbGV0IHVvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tXCIpO1xuICAgICAgICBsZXQgbGluZVRvdGFsV2VpZ2h0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgICAgXCJ0b3RhbExpbmVXZWlnaHQtXCIgKyByb3dcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgbGluZVRvdGFsID0gMDtcbiAgICAgICAgbGluZVRvdGFsID0gK3dlaWdodCAqICtwYWNrZWRBbW91bnQ7XG4gICAgICAgIGxpbmVUb3RhbCA9IGxpbmVUb3RhbC50b0ZpeGVkKDMpLnJlcGxhY2UoL1suLF0wMCQvLCBcIlwiKTtcbiAgICAgICAgbGluZVRvdGFsV2VpZ2h0RWxlbWVudC52YWx1ZSA9IGxpbmVUb3RhbDtcblxuICAgICAgICB1cGRhdGVMaXN0SXRlbShsaW5lVG90YWxXZWlnaHRFbGVtZW50KTtcbiAgICB9O1xuICAgIC8vIHRoaXMud2luZG93LmNvbnZlcnRNZWFzdXJlbWVudCA9IGZ1bmN0aW9uIGNvbnZlcnRNZWFzdXJlbWVudChcbiAgICAvLyAgICAgcm93LFxuICAgIC8vICAgICBjb252ZXJ0ID0gZmFsc2VcbiAgICAvLyApIHtcbiAgICAvLyAgICAgbGV0IGxpc3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0SWQnKS52YWx1ZTtcbiAgICAvLyAgICAgbGV0IHVvbSA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1cIityb3cpLnZhbHVlO1xuICAgIC8vICAgICBsZXQgaXNNYXN0ZXJMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzTWFzdGVyJykudmFsdWU7XG5cbiAgICAvLyAgICAgLy8gaWYoaXNNYXN0ZXJMaXN0ID09PSAndHJ1ZScpe1xuICAgIC8vICAgICAvLyAgICAgdW9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b20tXCIrcm93KS52YWx1ZTtcbiAgICAvLyAgICAgLy8gfWVsc2V7XG4gICAgLy8gICAgIC8vICAgICB1b20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbVwiKS52YWx1ZTtcbiAgICAvLyAgICAgLy8gfVxuXG4gICAgLy8gICAgIC8vIGlmKGxpc3RJZCA9PSAnbWFzdGVyJyl7XG4gICAgLy8gICAgIC8vICAgICB1b20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1cIityb3cpLnZhbHVlO1xuICAgIC8vICAgICAvLyB9ZWxzZXtcbiAgICAvLyAgICAgLy8gICAgIHVvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tXCIpLnZhbHVlO1xuICAgIC8vICAgICAvLyB9XG4gICAgLy8gICAgIGxldCB3ZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1XZWlnaHQtXCIgKyByb3cpO1xuICAgIC8vICAgICBsZXQgcGFja2VkQW1vdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWNrZWRBbW91bnQtXCIgKyByb3cpLnZhbHVlO1xuICAgIC8vICAgICBsZXQgdG90YWxXZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdGFsTGluZVdlaWdodC1cIiArIHJvdyk7XG4gICAgLy8gICAgIGxldCB0b3RhbExpbmVXZWlnaHRWYWx1ZSA9IDA7XG4gICAgLy8gICAgIGxldCB3ZWlnaHRWYWx1ZSA9IHdlaWdodC52YWx1ZTtcbiAgICAvLyAgICAgbGV0IHNtYWxsO1xuICAgIC8vICAgICBsZXQgbGFyZ2U7XG4gICAgLy8gICAgIGxldCBlbGVtZW50O1xuICAgIC8vICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmUtdW9tLWxhYmVsLVwiICsgcm93KTtcbiAgICAvLyAgICAgbGV0IGxhYmVsSFRNTDtcblxuICAgIC8vICAgICBpZiAodW9tID09PSBcInVzXCIpIHtcbiAgICAvLyAgICAgICAgIHNtYWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b20tb3otXCIgKyByb3cpO1xuICAgIC8vICAgICAgICAgbGFyZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1sYnMtXCIgKyByb3cpO1xuICAgIC8vICAgICAgICAgaWYgKHNtYWxsLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAvLyAgICAgICAgICAgICB3ZWlnaHRWYWx1ZSA9ICt3ZWlnaHRWYWx1ZSAqIDE2O1xuICAgIC8vICAgICAgICAgICAgIGVsZW1lbnQgPSBzbWFsbDtcbiAgICAvLyAgICAgICAgICAgICBsYWJlbEhUTUwgPSBcIk9aXCI7XG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgIHdlaWdodFZhbHVlID0gK3dlaWdodFZhbHVlIC8gMTY7XG4gICAgLy8gICAgICAgICAgICAgZWxlbWVudCA9IGxhcmdlO1xuICAgIC8vICAgICAgICAgICAgIGxhYmVsSFRNTCA9IFwiTEJTXCI7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICBzbWFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tLWdyYW0tXCIgKyByb3cpO1xuICAgIC8vICAgICAgICAgbGFyZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1rZy1cIiArIHJvdyk7XG5cbiAgICAvLyAgICAgICAgIGlmIChzbWFsbC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgLy8gICAgICAgICAgICAgd2VpZ2h0VmFsdWUgPSArd2VpZ2h0VmFsdWUgKiAxMDAwO1xuICAgIC8vICAgICAgICAgICAgIGVsZW1lbnQgPSBzbWFsbDtcbiAgICAvLyAgICAgICAgICAgICBsYWJlbEhUTUwgPSBcIkdcIjtcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgd2VpZ2h0VmFsdWUgPSArd2VpZ2h0VmFsdWUgLyAxMDAwO1xuICAgIC8vICAgICAgICAgICAgIGVsZW1lbnQgPSBsYXJnZTtcbiAgICAvLyAgICAgICAgICAgICBsYWJlbEhUTUwgPSBcIktHXCI7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICB0b3RhbExpbmVXZWlnaHRWYWx1ZSA9ICt3ZWlnaHRWYWx1ZSAqICtwYWNrZWRBbW91bnQ7XG4gICAgLy8gICAgIHdlaWdodC52YWx1ZSA9IHdlaWdodFZhbHVlLnRvRml4ZWQoMykucmVwbGFjZSgvWy4sXTAwJC8sIFwiXCIpO1xuICAgIC8vICAgICB0b3RhbFdlaWdodC52YWx1ZSA9IHRvdGFsTGluZVdlaWdodFZhbHVlXG4gICAgLy8gICAgICAgICAudG9GaXhlZCgzKVxuICAgIC8vICAgICAgICAgLnJlcGxhY2UoL1suLF0wMCQvLCBcIlwiKTtcbiAgICAvLyAgICAgbGFiZWwuaW5uZXJIVE1MID0gbGFiZWxIVE1MO1xuICAgIC8vICAgICB1cGRhdGVMaXN0SXRlbShlbGVtZW50KTtcbiAgICAvLyAgICAgdXBkYXRlTGlzdEl0ZW0od2VpZ2h0KTtcbiAgICAvLyAgICAgdXBkYXRlTGlzdEl0ZW0odG90YWxXZWlnaHQpO1xuICAgIC8vIH07XG4gICAgdGhpcy53aW5kb3cudXBkYXRlSXRlbVVPTSA9IGZ1bmN0aW9uIHVwZGF0ZUl0ZW1VT00oXG4gICAgICAgIHJvdyxcbiAgICAgICBlbGVtZW50XG4gICAgKSB7XG5cbiAgICAgICAgaWYgKCFlbGVtZW50IHx8ICEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgZWxlbWVudCBwcm92aWRlZCB0byB1cGRhdGVMaXN0SXRlbS5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdW9tRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB1b20tJHtyb3d9YCk7XG4gICAgICAgIGxldCBpdGVtV2VpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGl0ZW1XZWlnaHQtJHtyb3d9YCkudmFsdWU7XG4gICAgICAgIGxldCBjb2x1bW5OYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sdW1uLW5hbWUnKTtcbiAgICAgICAgbGV0IHVvbSA9IHVvbUVsZW1lbnQudmFsdWU7XG4gICAgICAgIGxldCBpdGVtSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaWQtJHtyb3d9YCkudmFsdWU7XG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBsaW5lLXVvbS1sYWJlbC0ke3Jvd31gKTtcbiAgICAgICAgbGV0IGxhYmVsSFRNTDtcbiAgICAgICAgbGV0IG5ld1VPTTtcbiAgICAgICAgbGV0IHVybCA9ICcvdXBkYXRlLWl0ZW0tdW9tJztcbiAgICAgICAgbGV0IGlzTmV3Um93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5ld1Jvdy0ke3Jvd31gKSA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBuZXdSb3ctJHtyb3d9YCkudmFsdWUgOiBmYWxzZTtcblxuICAgICAgICBpZihpdGVtSWQuc3RhcnRzV2l0aCgnbmV3Jykpe1xuICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZUxpc3RJdGVtKGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoY29sdW1uTmFtZS5lbmRzV2l0aCgnb3VuY2VzJykgfHwgY29sdW1uTmFtZS5lbmRzV2l0aCgnbGJzJykpe1xuICAgICAgICAgICAgbmV3VU9NID0gJ3VzJztcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBuZXdVT00gPSAnbWV0cmljJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkYXRhID0gZ2V0Qm9vbGVhbkRhdGEoY29sdW1uTmFtZSk7XG4gICAgICAgIGRhdGFbJ2lkJ10gPSBpdGVtSWQ7XG4gICAgICAgIGRhdGFbJ25ld1VPTSddID0gbmV3VU9NO1xuICAgICAgICBkYXRhWydpdGVtX3dlaWdodCddID0gaXRlbVdlaWdodDtcbiAgICAgICAgZGF0YVsnaXNOZXdSb3cnXSA9IGlzTmV3Um93O1xuXG4gICAgICAgIGF4aW9zLnBvc3QodXJsLCBkYXRhKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzRGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSByZXNEYXRhLml0ZW07XG5cbiAgICAgICAgICAgIGlmIChyZXNEYXRhLnN0YXR1cyA9PT0gJzEnKSB7XG4gICAgICAgICAgICAgICAgZmxhc2hCb3JkZXIoZWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGl0ZW1XZWlnaHQtJHtyb3d9YCkudmFsdWUgPSBpdGVtWydpdGVtX3dlaWdodCddO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwYWNrZWRBbW91bnQtJHtyb3d9YCkudmFsdWUgPSBpdGVtWydhbW91bnQnXTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdG90YWxMaW5lV2VpZ2h0LSR7cm93fWApLnZhbHVlID0gaXRlbVsndG90YWxfbGluZV93ZWlnaHQnXTtcbiAgICAgICAgICAgICAgICB1b21FbGVtZW50LnZhbHVlID0gbmV3VU9NO1xuICAgICAgICAgICAgICAgIGlmKGl0ZW1bJ2luX291bmNlcyddKXtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxIVE1MID0gXCJPWlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKGl0ZW1bJ2luX2xicyddKXtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxIVE1MID0gXCJMQlNcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihpdGVtWydpbl9ncmFtcyddKXtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxIVE1MID0gXCJHXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoaXRlbVsnaW5fa2lsb3MnXSl7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsSFRNTCA9IFwiS0dcIjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSBsYWJlbEhUTUw7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZmxhc2hCb3JkZXIoZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFsZXJ0KHJlc0RhdGEubXNnIHx8IFwiVXBkYXRlIGZhaWxlZCwgcGxlYXNlIGNoZWNrIHlvdXIgaW5wdXQuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgLy8gRW5oYW5jZWQgZXJyb3IgaGFuZGxpbmdcbiAgICAgICAgICAgIGZsYXNoQm9yZGVyKGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgICAgIGFsZXJ0KFwiRmFpbGVkIHRvIHVwZGF0ZSBsaXN0IGl0ZW0uIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlVwZGF0ZSBlcnJvcjpcIiwgZXJyKTtcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuICAgIHRoaXMud2luZG93LmFkZENhdGVnb3J5R3JvdXAgPSBmdW5jdGlvbiBhZGRDYXRlZ29yeUdyb3VwKGxpc3RJZCxjYXRlZ29yeSwgbGlzdFVPTSwgdXNlcklkKXtcblxuICAgICAgICBsZXQgY29sdW1uTmFtZTtcbiAgICAgICAgaWYobGlzdFVPTSA9PT0gJ3VzJyl7XG4gICAgICAgICAgICBjb2x1bW5OYW1lID0gJ2luX291bmNlcyc7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29sdW1uTmFtZSA9ICdpbl9ncmFtcyc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGF0YSA9IGdldEJvb2xlYW5EYXRhKGNvbHVtbk5hbWUpO1xuICAgICAgICBkYXRhWydsaXN0X2lkJ10gPSBsaXN0SWQ7XG4gICAgICAgIGRhdGFbJ3VzZXJfaWQnXSA9IHVzZXJJZDtcbiAgICAgICAgZGF0YVsnaXRlbV9uYW1lJ10gPSAnJztcbiAgICAgICAgZGF0YVsnaXRlbV93ZWlnaHQnXSA9IDA7XG4gICAgICAgIGRhdGFbJ2Ftb3VudCddID0gMTtcbiAgICAgICAgZGF0YVsnaXRlbV9jYXRlZ29yeSddID0gY2F0ZWdvcnk7XG4gICAgICAgIGxldCB1cmwgPSAnL2xpc3QtaXRlbSdcblxuICAgICAgICBheGlvc1xuICAgICAgICAucG9zdCh1cmwsIGRhdGEpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIHJlcyA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gJzEnKXtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGFsZXJ0KHJlcy5tc2cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG5cbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcblxuICAgICAgICB9KTtcblxuICAgIH1cbiAgICBmdW5jdGlvbiBmbGFzaEJvcmRlcihlbGVtZW50LCBpc1N1Y2Nlc3MpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBpc1N1Y2Nlc3MgPyAnI0E4RTZDRicgOiAnI0YwODA4MCc7XG4gICAgICAgIC8vIFNldCBhIHRpbWVvdXQgdG8gcmVtb3ZlIHRoZSBib3JkZXIgYWZ0ZXIgMiBzZWNvbmRzXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEJvb2xlYW5EYXRhKGNvbHVtbk5hbWUpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgZGF0YVtcImluX291bmNlc1wiXSA9IGZhbHNlO1xuICAgICAgICBkYXRhW1wiaW5fbGJzXCJdID0gZmFsc2U7XG4gICAgICAgIGRhdGFbXCJpbl9ncmFtc1wiXSA9IGZhbHNlO1xuICAgICAgICBkYXRhW1wiaW5fa2lsb3NcIl0gPSBmYWxzZTtcbiAgICAgICAgZGF0YVsndW9tJ10gPSAndXMnO1xuICAgICAgICBzd2l0Y2ggKGNvbHVtbk5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJpbl9vdW5jZXNcIjpcbiAgICAgICAgICAgICAgICBkYXRhW1wiaW5fb3VuY2VzXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBkYXRhWyd1b20nXSA9ICd1cyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaW5fbGJzXCI6XG4gICAgICAgICAgICAgICAgZGF0YVtcImluX2xic1wiXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZGF0YVsndW9tJ10gPSAndXMnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImluX2dyYW1zXCI6XG4gICAgICAgICAgICAgICAgZGF0YVtcImluX2dyYW1zXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBkYXRhWyd1b20nXSA9ICdtZXRyaWMnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImluX2tpbG9zXCI6XG4gICAgICAgICAgICAgICAgZGF0YVtcImluX2tpbG9zXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBkYXRhWyd1b20nXSA9ICdtZXRyaWMnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICB0aGlzLndpbmRvdy51cGRhdGVMaXN0SXRlbSA9IGZ1bmN0aW9uIHVwZGF0ZUxpc3RJdGVtKGVsZW1lbnQpIHtcbiAgICAgICAgLy8gQ2hlY2tpbmcgaWYgZWxlbWVudCBpcyBhIHZhbGlkIERPTSBlbGVtZW50XG4gICAgICAgIGlmICghZWxlbWVudCB8fCAhKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIGVsZW1lbnQgcHJvdmlkZWQgdG8gdXBkYXRlTGlzdEl0ZW0uXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbHVtbk5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uLW5hbWVcIik7XG4gICAgICAgIGxldCB2YWx1ZSA9IGVsZW1lbnQudmFsdWU7XG4gICAgICAgIGxldCBpZCA9IGVsZW1lbnQuaWQ7XG4gICAgICAgIGxldCBpZEFyciA9IGlkLnNwbGl0KFwiLVwiKTtcblxuICAgICAgICBpZiAoaWRBcnIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSW52YWxpZCBJRCBmb3JtYXQuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJvdyA9IGlkQXJyW2lkQXJyLmxlbmd0aCAtIDFdO1xuICAgICAgICBsZXQgaXRlbUlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZC1cIiArIHJvdyk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgaXRlbUlkIGV4aXN0c1xuICAgICAgICBpZiAoIWl0ZW1JZCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRWxlbWVudCB3aXRoIElEICdpZC0ke3Jvd30nIG5vdCBmb3VuZC5gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpdGVtSWRWYWx1ZSA9IGl0ZW1JZC52YWx1ZTtcbiAgICAgICAgbGV0IGxpc3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdElkXCIpPy52YWx1ZSB8fCBcIlwiO1xuICAgICAgICBsZXQgdXJsID0gXCIvbGlzdC1pdGVtXCI7XG4gICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgIGxldCB1c2VySWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJJZFwiKT8udmFsdWUgfHwgXCJcIjtcbiAgICAgICAgbGV0IGNyZWF0ZSA9IHRydWU7XG4gICAgICAgIGxldCBpc01hc3Rlckxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXNNYXN0ZXInKT8udmFsdWUgPT09ICd0cnVlJztcbiAgICAgICAgbGV0IHVwZGF0ZUNhdGVnb3J5VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdFZpZXdUeXBlJyk/LnZhbHVlID09PSAnZmFsc2UnO1xuICAgICAgICBsZXQgaXNOZXdSb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbmV3Um93LSR7cm93fWApID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5ld1Jvdy0ke3Jvd31gKS52YWx1ZSA6IGZhbHNlO1xuICAgICAgICBsZXQgdW9tUmFkaW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtLWNoZWNrLWlucHV0XCIpO1xuICAgICAgICBsZXQgdW9tRWxlbWVudDtcblxuICAgICAgICB1b21SYWRpb3MuZm9yRWFjaChmdW5jdGlvbiAodW9tUmFkaW8pIHtcbiAgICAgICAgICAgIGlmKHVvbVJhZGlvLnR5cGUgPT0gJ3JhZGlvJyAmJiB1b21SYWRpby5jaGVja2VkKXtcbiAgICAgICAgICAgICAgICB1b21FbGVtZW50ID0gdW9tUmFkaW87XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgdW9tQ29sdW1uTmFtZSA9IHVvbUVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4tbmFtZVwiKTtcbiAgICAgICAgLy8gZGF0YVtjb2x1bW5OYW1lXSA9IHZhbHVlO1xuXG5cbiAgICAgICAgaWYgKGNvbHVtbk5hbWUuc3RhcnRzV2l0aChcImluX1wiKSkge1xuICAgICAgICAgICAgZGF0YSA9IGdldEJvb2xlYW5EYXRhKGNvbHVtbk5hbWUpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGRhdGEgPSBnZXRCb29sZWFuRGF0YSh1b21Db2x1bW5OYW1lKTtcbiAgICAgICAgICAgIGRhdGFbY29sdW1uTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFzc2lnbiBhZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gZGF0YSBvYmplY3RcblxuICAgICAgICBkYXRhW1wibGlzdF9pZFwiXSA9IGxpc3RJZDtcbiAgICAgICAgZGF0YVtcInVzZXJfaWRcIl0gPSB1c2VySWQ7XG4gICAgICAgIGRhdGFbXCJpZFwiXSA9IGl0ZW1JZFZhbHVlO1xuICAgICAgICBpZih1cGRhdGVDYXRlZ29yeVZhbHVlKXtcbiAgICAgICAgICAgIGxldCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbUNhdGVnb3J5LScrcm93KS52YWx1ZTtcbiAgICAgICAgICAgIGRhdGFbJ2l0ZW1fY2F0ZWdvcnknXSA9IHNlbGVjdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpdGVtSWRWYWx1ZS5zdGFydHNXaXRoKCduZXcnKSkge1xuICAgICAgICAgICAgY3JlYXRlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNyZWF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdXJsICs9ICcvJyArIGl0ZW1JZFZhbHVlO1xuICAgICAgICAgICAgaWYgKGlzTWFzdGVyTGlzdCkge1xuICAgICAgICAgICAgICAgIGRhdGFbJ3VwZGF0ZU1hc3RlciddID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNOZXdSb3cpIHtcbiAgICAgICAgICAgICAgICBkYXRhWydpc05ld1JvdyddID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZGF0YSBpbiB1cGRhdGU6ICcrIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgLy9QT1NUIHJlcXVlc3RcbiAgICAgICAgYXhpb3MucG9zdCh1cmwsIGRhdGEpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc0RhdGEgPSByZXMuZGF0YTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXNEYXRhLnN0YXR1cyA9PT0gJzEnKSB7XG4gICAgICAgICAgICAgICAgICAgIGZsYXNoQm9yZGVyKGVsZW1lbnQsIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjcmVhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1JZC52YWx1ZSA9IHJlc0RhdGEubmV3SWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZ2V0RGVsZXRlQnRuRGF0YShpdGVtSWQudmFsdWUsIHJvdyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZmxhc2hCb3JkZXIoZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBhbGVydChyZXNEYXRhLm1zZyB8fCBcIlVwZGF0ZSBmYWlsZWQsIHBsZWFzZSBjaGVjayB5b3VyIGlucHV0LlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBFbmhhbmNlZCBlcnJvciBoYW5kbGluZ1xuICAgICAgICAgICAgICAgIGZsYXNoQm9yZGVyKGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhbGVydChcIkZhaWxlZCB0byB1cGRhdGUgbGlzdCBpdGVtLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVXBkYXRlIGVycm9yOlwiLCBlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFpc01hc3Rlckxpc3QpIHtcbiAgICAgICAgICAgIHVwZGF0ZVRvdGFsTGlzdFdlaWdodHMoKTtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRvdGFsTGlzdFdlaWdodHMoKSB7XG4gICAgICAgIGxldCBiYXNlV2VpZ2h0ID0gMDtcbiAgICAgICAgbGV0IHRvdGFsUGFja1dlaWdodCA9IDA7XG4gICAgICAgIGxldCBtYXhQYWNrV2VpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXhQYWNrV2VpZ2h0XCIpLnZhbHVlO1xuICAgICAgICBsZXQgY2xhc3NXYXJuaW5nVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xhc3NXYXJuaW5nVmFsdWUnKS52YWx1ZTtcbiAgICAgICAgbGV0IHVvbVRleHQgPSBcIkxCU1wiO1xuXG4gICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdElkJykudmFsdWU7XG4gICAgICAgIGxldCB1cmwgPSBgL2dldC1wYWNrLWRhdGEvJHtsaXN0SWR9YDtcblxuICAgICAgICBheGlvcy5nZXQodXJsKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgbGV0IGxpc3REYXRhID0gZGF0YS5saXN0RGF0YTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsaXN0IGRhdGEgZm9yIHBhY2sgd2VpZ2h0czogJysgSlNPTi5zdHJpbmdpZnkobGlzdERhdGEpKTtcbiAgICAgICAgICAgIGlmKGRhdGEuc3RhdHVzID09PSAnMScpe1xuICAgICAgICAgICAgICAgYmFzZVdlaWdodCA9IGxpc3REYXRhWydiYXNlV2VpZ2h0J107XG4gICAgICAgICAgICAgICB0b3RhbFBhY2tXZWlnaHQgPSBsaXN0RGF0YVsndG90YWxQYWNrV2VpZ2h0J107XG4gICAgICAgICAgICAgICBtYXhQYWNrV2VpZ2h0ID0gbGlzdERhdGFbJ21heFBhY2tXZWlnaHQnXTtcbiAgICAgICAgICAgICAgIHVvbVRleHQ9IGxpc3REYXRhWyd3ZWlnaHRVb20nXTtcbiAgICAgICAgICAgICAgIGNsYXNzV2FybmluZ1ZhbHVlID1saXN0RGF0YVsnY2xhc3NXYXJuaW5nVmFsdWUnXVxuXG4gICAgICAgICAgICAgICBpZiAoK2Jhc2VXZWlnaHQgPiArbWF4UGFja1dlaWdodCkge1xuICAgICAgICAgICAgICAgICAgIGxldCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWlnaHRXYXJuaW5nLWRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICBkaXZFbGVtZW50LmlubmVyVGV4dCA9XCJCYXNlIHdlaWdodCAoXCIgKyAgYmFzZVdlaWdodC50b0ZpeGVkKDMpICtcIiBcIiArdW9tVGV4dCArXCIpIGV4Y2VlZGVzIHRoZSB3ZWlnaHQgZm9yIHRoZSAnXCIgK2NsYXNzV2FybmluZ1ZhbHVlK1wiJyBzdHlsZSBvZiBoaWtpbmcuXCI7XG5cbiAgICAgICAgICAgICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VpZ2h0V2FybmluZy1kaXZcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2VXZWlnaHRcIikudmFsdWUgPSBiYXNlV2VpZ2h0LnRvRml4ZWQoMyk7XG4gICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdGFsUGFja1dlaWdodFwiKS52YWx1ZSA9XG4gICAgICAgICAgICAgICAgICAgdG90YWxQYWNrV2VpZ2h0LnRvRml4ZWQoMyk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBhbGVydChkYXRhLm1zZyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlTGlzdEl0ZW1JbnB1dChcbiAgICAgICAgdHlwZSxcbiAgICAgICAgbmFtZUJhc2UsXG4gICAgICAgIHJvdyxcbiAgICAgICAgY29sdW1uTmFtZSxcbiAgICAgICAgbGlzdGVuID0gdHJ1ZVxuICAgICkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgZWxlbWVudC50eXBlID0gdHlwZTtcbiAgICAgICAgZWxlbWVudC5uYW1lID0gbmFtZUJhc2UgKyBcIltdXCI7XG4gICAgICAgIGVsZW1lbnQuaWQgPSBuYW1lQmFzZSArIFwiLVwiICsgcm93O1xuICAgICAgICBlbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIsIGNvbHVtbk5hbWUpO1xuICAgICAgICBpZihsaXN0ZW4pe1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVMaXN0SXRlbShlbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRDYXRlZ3JveVNlbGVjdChyb3csIGdyb3VwQ2F0ZWdvcnkgPSBudWxsLCBsaXN0ZW4gPSB0cnVlKSB7XG5cbiAgICAgICAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgIHNlbGVjdC5pZCA9IFwiaXRlbUNhdGVnb3J5LVwiICsgcm93O1xuICAgICAgICBzZWxlY3QubmFtZSA9IFwiaXRlbUNhdGVnb3J5LVwiICsgcm93O1xuICAgICAgICBzZWxlY3Quc2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4tbmFtZVwiLCBcIml0ZW1fY2F0ZWdvcnlcIik7XG4gICAgICAgIHNlbGVjdC5jbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiO1xuXG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgICBvcHRpb24udGV4dCA9IFwiQ2hvb3NlXCI7XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICBsZXQgb3B0aW9uTGlzdDtcblxuICAgICAgICBvcHRpb25MaXN0ID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcIi9saXN0LWl0ZW0tY2F0ZWdvcmllc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIGVycm9yXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG5cbiAgICAgICAgb3B0aW9uTGlzdCgpLnRoZW4oKGRhdGEpID0+IHtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gZGF0YVtpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IGRhdGFbaV0uY2F0ZWdvcnk7XG4gICAgICAgICAgICAgICAgaWYgKGdyb3VwQ2F0ZWdvcnkgIT0gbnVsbCAmJiBkYXRhW2ldLnZhbHVlID09PSBncm91cENhdGVnb3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYobGlzdGVuKXtcbiAgICAgICAgICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVMaXN0SXRlbShzZWxlY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHJldHVybiBzZWxlY3Q7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1ldHJpY1JhZGlvVG9VcygpIHtcbiAgICAgICAgbGV0IGlucHV0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1ldHJpYy1yYWRpb1wiKTtcbiAgICAgICAgaW5wdXRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxldCBpZEFyciA9IGlucHV0RWxlbWVudC5pZC5zcGxpdChcIi1cIik7XG4gICAgICAgICAgICBsZXQgdW9tID0gaWRBcnJbMV07XG4gICAgICAgICAgICBsZXQgcm93ID0gaWRBcnJbaWRBcnIubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBsZXQgZWxlbWVudFR5cGUgPSBpbnB1dEVsZW1lbnQudHlwZTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50VGFnID0gaW5wdXRFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgbGV0IG5ld0VsZW1lbnQ7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50VHlwZSA9PT0gXCJyYWRpb1wiICYmIHVvbSA9PT0gXCJncmFtXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlUmFkaW8oXCJpbl9vdW5jZXNcIiwgXCJPWlwiLCBcIm96XCIsIHJvdywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUeXBlID09PSBcInJhZGlvXCIgJiYgdW9tID09PSBcImtnXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlUmFkaW8oXCJpbl9sYnNcIiwgXCJMQlNcIiwgXCJsYnNcIiwgcm93KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFRhZyA9PT0gXCJsYWJlbFwiICYmIHVvbSA9PT0gXCJncmFtXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlTGFiZWwoXCJPWlwiLCBcInVvbS1vei1cIiArIHJvdywgXCJvelwiLCByb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VGFnID09PSBcImxhYmVsXCIgJiYgdW9tID09PSBcImtnXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlTGFiZWwoXCJMQlNcIiwgXCJ1b20tbGJzLVwiICsgcm93LCBcImxic1wiLCByb3cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmV3RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZChcbiAgICAgICAgICAgICAgICAgICAgbmV3RWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVzUmFkaW9Ub01ldHJpYygpIHtcbiAgICAgICAgbGV0IGlucHV0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnVzLXJhZGlvXCIpO1xuICAgICAgICBpbnB1dEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGlucHV0RWxlbWVudCkge1xuICAgICAgICAgICAgbGV0IGlkQXJyID0gaW5wdXRFbGVtZW50LmlkLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgICAgIGxldCB1b20gPSBpZEFyclsxXTtcbiAgICAgICAgICAgIGxldCByb3cgPSBpZEFycltpZEFyci5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50VHlwZSA9IGlucHV0RWxlbWVudC50eXBlO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRUYWcgPSBpbnB1dEVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgbGV0IG5ld0VsZW1lbnQ7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50VHlwZSA9PT0gXCJyYWRpb1wiICYmIHVvbSA9PT0gXCJvelwiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZVJhZGlvKFwiaW5fZ3JhbXNcIiwgXCJHUlwiLCBcImdyYW1cIiwgcm93KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFR5cGUgPT09IFwicmFkaW9cIiAmJiB1b20gPT09IFwibGJzXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlUmFkaW8oXCJpbl9raWxvc1wiLCBcIktHXCIsIFwia2dcIiwgcm93KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFRhZyA9PT0gXCJsYWJlbFwiICYmIHVvbSA9PT0gXCJvelwiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZUxhYmVsKFwiR1wiLCBcInVvbS1ncmFtLVwiICsgcm93LCBcImdyYW1cIiwgcm93KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFRhZyA9PT0gXCJsYWJlbFwiICYmIHVvbSA9PT0gXCJsYnNcIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVMYWJlbChcIktHXCIsIFwidW9tLWtnLVwiICsgcm93LCBcImtnXCIsIHJvdyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuZXdFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKFxuICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlUmFkaW8oZGF0YUNvbHVtbk5hbWUsIGxhYmVsLCB1b20sIHJvdykge1xuICAgICAgICBsZXQgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHJhZGlvLmNsYXNzTmFtZSA9XG4gICAgICAgICAgICBcImZvcm0tY2hlY2staW5wdXRcIiArXG4gICAgICAgICAgICAodW9tID09PSBcImdyYW1cIiB8fCB1b20gPT09IFwia2dcIiA/IFwiIG1ldHJpYy1yYWRpb1wiIDogXCIgdXMtcmFkaW9cIik7XG4gICAgICAgIHJhZGlvLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgICAgIHJhZGlvLm5hbWUgPSBcInVvbS1cIiArIHJvdyArIFwiW11cIjtcbiAgICAgICAgcmFkaW8uaWQgPSBcInVvbS1cIiArIHVvbSArIFwiLVwiICsgcm93O1xuICAgICAgICByYWRpby5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIsIGRhdGFDb2x1bW5OYW1lKTtcblxuICAgICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHVwZGF0ZUl0ZW1VT00ocm93LCByYWRpbyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmFkaW87XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxhYmVsKGlubmVySHRtbCwgaHRtbEZvciwgdW9tLCByb3csIGxpbmVMYWJlbCA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgbGFiZWwuY2xhc3NOYW1lID1cbiAgICAgICAgICAgIFwiZm9ybS1jaGVjay1sYWJlbFwiICtcbiAgICAgICAgICAgICh1b20gPT09IFwiZ3JhbVwiIHx8IHVvbSA9PT0gXCJrZ1wiID8gXCIgbWV0cmljLXJhZGlvXCIgOiBcIiB1cy1yYWRpb1wiKTtcbiAgICAgICAgbGFiZWwuaHRtbEZvciA9IGh0bWxGb3I7XG4gICAgICAgIGxhYmVsLmlubmVySFRNTCA9IGlubmVySHRtbDtcbiAgICAgICAgaWYgKCFsaW5lTGFiZWwpIHtcbiAgICAgICAgICAgIGxhYmVsLmlkID0gXCJ1b20tXCIgKyB1b20gKyBcIi1sYWJlbC1cIiArIHJvdztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhYmVsLmlkID0gXCJsaW5lLXVvbS1sYWJlbC1cIiArIHJvdztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9XG5cbiAgICB0aGlzLndpbmRvdy51cGRhdGVMaXN0ID0gZnVuY3Rpb24gdXBkYXRlTGlzdChlbGVtZW50LCBsaXN0SWQpIHtcbiAgICAgICAgbGV0IGNvbHVtbk5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uLW5hbWVcIik7XG4gICAgICAgIGxldCB2YWx1ZSA9IGVsZW1lbnQudmFsdWU7XG4gICAgICAgIGxldCB1cmwgPSBcIi9nZWFyLWxpc3QvXCIgKyBsaXN0SWQ7XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgZGF0YVtjb2x1bW5OYW1lXSA9IHZhbHVlO1xuXG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdCh1cmwsIGRhdGEsIGxpc3RJZClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5zdGF0dXMgPT09ICcxJyl7XG4gICAgICAgICAgICAgICAgICAgIGZsYXNoQm9yZGVyKGVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBmbGFzaEJvcmRlcihlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KHJlcy5kYXRhLm1zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGFsZXJ0KHJlcy5kYXRhLm1zZyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChcIkZhaWxlZCB0byB1cGRhdGUgbGlzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNvbHVtbk5hbWUgPT09IFwic29ydFwiIHx8IGNvbHVtbk5hbWUgPT09IFwibGlzdF9jbGFzc1wiIHx8IGNvbHVtbk5hbWUgPT09ICdsaXN0X2l0ZW1zJykge1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGVhZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbS1jb2xsYXBzaWJsZS1oZWFkZXJcIik7XG5cbiAgICBoZWFkZXJzLmZvckVhY2goKGhlYWRlcikgPT4ge1xuICAgICAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBoZWFkZXIubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgY29uc3QgYXJyb3cgPSBoZWFkZXIucXVlcnlTZWxlY3RvcihcIi5pdGVtLWFycm93XCIpO1xuICAgICAgICAgICAgaWYgKGNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BlblwiKSkge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUucGFkZGluZyA9IFwiMCAxMHB4XCI7XG4gICAgICAgICAgICAgICAgYXJyb3cuaW5uZXJIVE1MID0gXCImIzk2NjBcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUucGFkZGluZyA9IFwiMTBweFwiO1xuICAgICAgICAgICAgICAgIGFycm93LmlubmVySFRNTCA9IFwiJiM5NjUwXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgbGV0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbWFzdGVyLWl0ZW0tdGFibGUgaW5wdXRcIik7XG5cbiAgICBpbnB1dHMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgaW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgbGV0IGxpc3RDaGFydGJ0biA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RDaGFydEJ0blwiKTtcbiAgICBpZihsaXN0Q2hhcnRidG4gIT09IG51bGwpe1xuICAgICAgICBkb2N1bWVudCAuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0Q2hhcnRCdG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RJZFwiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCB1cmwgPSBcIi9nZWFyLWxpc3QtYW5hbHl0aWNzL1wiICsgbGlzdElkO1xuXG4gICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAgIC5nZXQodXJsKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoYXJ0U3RhdHVzID0gQ2hhcnQuZ2V0Q2hhcnQoXCJnZWFyQ2hhcnRcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXJ0U3RhdHVzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnRTdGF0dXMuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZWFyQ2hhcnRcIik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGFydERhdGEgPSBKU09OLnBhcnNlKHJlcy5kYXRhLmNoYXJ0RGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRvdWdobnV0XCIsIC8vIENoYXJ0IHR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IGNoYXJ0RGF0YS5sYWJlbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGFiZWw6IGxpc3ROYW1lICsgJ0JyZWFrIERvd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogY2hhcnREYXRhLndlaWdodHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNoYXJ0RGF0YS5jb2xvcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyT2Zmc2V0OiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3V0b3V0OiA0NSwgLy8gQWRqdXN0IHRoZSBjdXRvdXQgcGVyY2VudGFnZSBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiAxNTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhbGFiZWxzOiBmYWxzZSwgLy8gUmVtb3ZpbmcgdGhpcyBsaW5lIHNob3dzIHRoZSBkYXRhbGFiZWxzIGFnYWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZVJvdGF0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZVNjYWxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBiYXNlV2VpZ2h0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFzZVdlaWdodFwiKS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvdGFsUGFja1dlaWdodCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdGFsUGFja1dlaWdodFwiKS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbEJhc2VXZWlnaHRcIikudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVdlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbFRvdGFsV2VpZ2h0XCIpLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsUGFja1dlaWdodDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuICAgIHRoaXMud2luZG93LnNob3dDb252cnNpb25BbGVydCA9IGZ1bmN0aW9uIHNob3dDb252cnNpb25BbGVydCgpe1xuICAgICAgICBhbGVydCgnQ2hhbmdpbmcgdGhpcyB2YWx1ZSB3aWxsIGFsc28gdXBkYXRlIHRoZSB1bml0cyBvZiBtZWFzdXJlIGFuZCBhc3NvY2lhdGVkIHZhbHVlcyBmb3IgYW55IGl0ZW0gb24gdGhpcyBnZWFyIGxpc3QuJyk7XG4gICAgfVxuICAgIHRoaXMud2luZG93LmNvbmZpcm1EZWxldGUgPSBmdW5jdGlvbiBjb25maXJtRGVsZXRlKGVsZW1lbnQpIHtcblxuICAgICAgICBsZXQgaXNNYXN0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXNNYXN0ZXInKS52YWx1ZTtcbiAgICAgICAgbGV0IGhyZWYgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1ocmVmJyk7XG4gICAgICAgIGxldCBuYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb2JqZWN0LW5hbWUnKTtcbiAgICAgICAgbGV0IG9iamVjdFR5cGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vYmplY3QtdHlwZScpO1xuICAgICAgICBsZXQgYW5jaG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZU9iamVjdEFuY2hvcicpO1xuICAgICAgICBsZXQgbW9kYWxCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZU1vZGFsQm9keScpO1xuICAgICAgICBsZXQgdGV4dCA9IGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlICR7b2JqZWN0VHlwZX0gJHtuYW1lfT9gO1xuICAgICAgICBsZXQgaGVscGVyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZUhlbHBlcicpO1xuICAgICAgICBsZXQgaGVscHRleHQ7XG4gICAgICAgIGhlbHBlckRpdi5pbm5lclRleHQgPSAnJztcblxuXG4gICAgICAgIGlmKG9iamVjdFR5cGUgPT09ICdpdGVtOicgJiYgaXNNYXN0ZXIgPT09ICdmYWxzZScpe1xuICAgICAgICAgICAgbGV0IGxpc3ROYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1uYW1lJyk7XG4gICAgICAgICAgICBoZWxwdGV4dCA9IGAqRGVsZXRpbmcgYW4gaXRlbSBmcm9tIHRoaXMgbGlzdCAoJHtsaXN0TmFtZX0pIHdpbGwgbm90IGRlbGV0ZSBpdCB0aGUgJ1lvdXIgR2Vhcicgc2VjdGlvbi5gO1xuICAgICAgICAgICAgaGVscGVyRGl2LmFwcGVuZChoZWxwdGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihvYmplY3RUeXBlID09PSAnaXRlbTonICYmIGlzTWFzdGVyID09PSAndHJ1ZScpe1xuICAgICAgICAgICAgaGVscHRleHQgPSBgKkRlbGV0aW5nIGFuIGl0ZW0gZnJvbSB0aGUgJ1lvdXIgR2Vhcicgc2VjdGlvbiB3aWxsIGRlbGV0ZSBpdCBmcm9tIGFsbCAnR2VhciBMaXN0cycuYDtcbiAgICAgICAgICAgIGhlbHBlckRpdi5hcHBlbmQoaGVscHRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYob2JqZWN0VHlwZSA9PT0gJ2NhdGVnb3J5OicgJiYgaXNNYXN0ZXIgPT09J2ZhbHNlJyl7XG4gICAgICAgICAgICB0ZXh0ID0gYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgYWxsIGl0ZW1zIGluIHRoZSAke25hbWV9IGNhdGVnb3J5IGZyb20gdGhpcyBsaXN0P2A7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihvYmplY3RUeXBlID09PSAnY2F0ZWdvcnk6JyAmJiBpc01hc3RlciA9PT0ndHJ1ZScpe1xuICAgICAgICAgICAgdGV4dCA9IGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIGFsbCBpdGVtcyBpbiB0aGUgJHtuYW1lfSBjYXRlZ29yeSBmcm9tIEFMTCB5b3VyIGxpc3RzP2A7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGhlbHBlckRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICAgIG1vZGFsQm9keS5pbm5lckhUTUwgPSB0ZXh0O1xuICAgICAgICBhbmNob3Iuc2V0QXR0cmlidXRlKCdocmVmJyxocmVmKTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVJvdyhyb3cpe1xuXG4gICAgICAgIGxldCB0YWJsZVJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByb3ctJHtyb3d9YClcbiAgICAgICAgICAgIHRhYmxlUm93LnJlbW92ZSgpO1xuXG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZURlbGV0ZUJ1dHRvbihyb3cpIHtcbiAgICAgICAgbGV0IGlzTWFzdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzTWFzdGVyJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gJ2J0biBidG4tc20gYnRuLWRhbmdlcic7XG4gICAgICAgIGJ1dHRvbi50aXRsZSA9ICdEZWxldGUgSXRlbSc7XG4gICAgICAgIGJ1dHRvbi5pZCA9YGRlbGV0ZUl0ZW1CdG4tJHtyb3d9YDtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1ocmVmJywnJyk7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtb2JqZWN0LW5hbWUnLCcnKTtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1vYmplY3QtaWQnLCcnKTtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1vYmplY3QtdHlwZScsJ2l0ZW06Jyk7XG4gICAgICAgIGlmKGlzTWFzdGVyID09PSAnZmFsc2UnKXtcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1uYW1lJyxkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdE5hbWUnKS52YWx1ZSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1saXN0LW5hbWUnLCdtYXN0ZXInKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgaWNvbi5jbGFzc05hbWUgPSAnZmFzIGZhLXRyYXNoJztcblxuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZW1vdmVSb3cocm93KTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERlbGV0ZUJ0bkRhdGEoaWQscm93KXtcbiAgICAgICAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZWxldGVJdGVtQnRuLSR7cm93fWApO1xuICAgICAgICBsZXQgdXJsID0gYC9saXN0LWl0ZW0vJHtpZH1gO1xuXG4gICAgICAgIGF4aW9zXG4gICAgICAgIC5nZXQodXJsKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzICE9IFwiMVwiKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQocmVzLmRhdGEubXNnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBpdGVtID0gcmVzLmRhdGEuaXRlbTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaHJlZicsYC9yZW1vdmUtbGlzdC1pdGVtLyR7aXRlbS5pZH1gKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtb2JqZWN0LW5hbWUnLGl0ZW0uaXRlbV9uYW1lKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtb2JqZWN0LWlkJyxpdGVtLmlkKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdG9nZ2xlJyxcIm1vZGFsXCIpXG4gICAgICAgICAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRhcmdldCcsXCIjZGVsZXRlQWxlcnRNb2RhbFwiKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBjb25maXJtRGVsZXRlKGRlbGV0ZUJ0bik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KGVycik7XG4gICAgICAgIH0pO1xuXG5cbiAgICB9XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNvcnRhYmxlXCIpLmZvckVhY2goZnVuY3Rpb24gKHRhYmxlKSB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5SWQgPSB0YWJsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNhdGVnb3J5LWlkXCIpO1xuXG4gICAgICAgIG5ldyBTb3J0YWJsZSh0YWJsZS5xdWVyeVNlbGVjdG9yKFwidGJvZHlcIiksIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogMTUwLFxuICAgICAgICAgICAgb25FbmQ6IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIG5ldyBvcmRlciBvZiBpdGVtc1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yZGVyZWRJZHMgPSBbXTtcbiAgICAgICAgICAgICAgICB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwidHJcIikuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICAgICAgICAgIG9yZGVyZWRJZHMucHVzaChyb3cuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBTZW5kIHRoZSBuZXcgb3JkZXIgdG8gdGhlIHNlcnZlciB2aWEgQUpBWFxuICAgICAgICAgICAgICAgIHVwZGF0ZUl0ZW1PcmRlcihjYXRlZ29yeUlkLCBvcmRlcmVkSWRzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIHVwZGF0ZUl0ZW1PcmRlcihjYXRlZ29yeUlkLCBvcmRlcmVkSWRzKSB7XG5cbiAgICAgICAgbGV0IGxpc3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdElkXCIpLnZhbHVlO1xuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBcIlgtQ1NSRi1UT0tFTlwiOiBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJylcbiAgICAgICAgICAgICAgICAuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKSxcbiAgICAgICAgICAgIGNhdGVnb3J5X2lkOiBjYXRlZ29yeUlkLFxuICAgICAgICAgICAgb3JkZXJlZF9pZHM6IG9yZGVyZWRJZHMsXG4gICAgICAgICAgICBsaXN0X2lkOiBsaXN0SWQsXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHVybCA9IFwiL3VwZGF0ZS1saXN0LW9yZGVyXCI7XG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdCh1cmwsIGRhdGEpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cyAhPSBcIjFcIikge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChyZXMuZGF0YS5tc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBsZXQgc29ydGluZ1NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydEJ5XCIpO1xuICAgICAgICBsZXQgb3B0cyA9IHNvcnRpbmdTZWxlY3Qub3B0aW9ucy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0czsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc29ydGluZ1NlbGVjdC5vcHRpb25zW2ldLnZhbHVlID09IFwiZHJhZ19kcm9wXCIpIHtcbiAgICAgICAgICAgICAgICBzb3J0aW5nU2VsZWN0Lm9wdGlvbnNbaV0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHBhcmVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJlbnQtY29udGFpbmVyJyk7XG5cbiAgICBpZihwYXJlbnRDb250YWluZXIgIT09IG51bGwgJiYgcGFyZW50Q29udGFpbmVyICE9PSB1bmRlZmluZWQpe1xuICAgICAgICBTb3J0YWJsZS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcmVudC1jb250YWluZXInKSwge1xuICAgICAgICAgICAgYW5pbWF0aW9uOiAxNTAsXG4gICAgICAgICAgICBoYW5kbGU6ICcuaXRlbS1jb2xsYXBzaWJsZS1oZWFkZXInLFxuICAgICAgICAgICAgZ2hvc3RDbGFzczogJ3NvcnRhYmxlLWdob3N0JyxcbiAgICAgICAgICAgIG9uRW5kOiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAgICAgLy8gQWZ0ZXIgc29ydGluZyBpcyBjb21wbGV0ZWQsIHVwZGF0ZSB0aGUgcG9zaXRpb25zIGluIHRoZSBkYXRhYmFzZVxuICAgICAgICAgICAgICAgIHVwZGF0ZUNhdGVnb3J5T3JkZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNhdGVnb3J5T3JkZXIoKSB7XG5cbiAgICAgICAgY29uc3QgbmV3T3JkZXIgPSBbXTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyYWdnYWJsZS1jb250YWluZXInKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuXG4gICAgICAgICAgICBuZXdPcmRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICBpdGVtX2NhdGVnb3J5OiBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1jYXRlZ29yeS12YWx1ZScpLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5X29yZGVyOiBpbmRleFxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdXJsID0gXCIvdXBkYXRlLWNhdGVyb2dyeS1vcmRlclwiO1xuICAgICAgICBsZXQgbGlzdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0SWRcIikudmFsdWU7XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIFwiWC1DU1JGLVRPS0VOXCI6IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKVxuICAgICAgICAgICAgICAgIC5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpLFxuICAgICAgICAgICAgY2F0ZWdvcnlfb3JkZXI6IG5ld09yZGVyLFxuICAgICAgICAgICAgbGlzdF9pZDogbGlzdElkLFxuICAgICAgICB9O1xuICAgICAgICAvL2JyZWFrIG91dCBwb3N0cyBhbmQgZ2V0IGNhbGxzIHRvIG93biBmdW5jdGlvbnNcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC5wb3N0KHVybCwgZGF0YSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgIT0gXCIxXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQocmVzLmRhdGEubXNnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBsZXQgYXNzaWduVG9MaXN0TW9kYWwgPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0Fzc2lnbkl0ZW1Ub0xpc3RNb2RhbCcpO1xuXG4gICAgaWYoYXNzaWduVG9MaXN0TW9kYWwgIT09IHVuZGVmaW5lZCAmJiBhc3NpZ25Ub0xpc3RNb2RhbCAhPT0gbnVsbCl7XG5cbiAgICAgICAgYXNzaWduVG9MaXN0TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignaGlkZS5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCB0YWJsZUJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtYXNzaWduLWl0ZW0tdGFibGUtYm9keScpO1xuICAgICAgICAgICAgd2hpbGUodGFibGVCb2R5LmZpcnN0Q2hpbGQpe1xuICAgICAgICAgICAgICAgIHRhYmxlQm9keS5yZW1vdmVDaGlsZCh0YWJsZUJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG53aW5kb3cuYXhpb3MgPSBheGlvcztcblxud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJNb2RhbCIsIkNoYXJ0IiwiU29ydGFibGUiLCJib290c3RyYXAiLCJyZXF1aXJlIiwiZ3JhbUNvbnZlcnRlciIsIm91bmNlQ29udmVydGVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3dQYXNzd29yZCIsImlkIiwicGFzc3dvcmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkTWFzdGVyTGlzdEl0ZW0iLCJudW1iZXJPZkl0ZW1zVG9BZGQiLCJsaW5lc1RvQWRkIiwibGlzdEJ5SXRlbXMiLCJsaXN0ZW4iLCJpdGVtVGFibGUiLCJyb3ciLCJjcmVhdGVFbGVtZW50IiwiY2VsbDEiLCJpdGVtTmFtZSIsImNyZWF0ZUxpc3RJdGVtSW5wdXQiLCJwbGFjZWhvbGRlciIsImNsYXNzTGlzdCIsImFkZCIsImNlbGw2IiwiZGVsZXRlQnRuIiwiY3JlYXRlRGVsZXRlQnV0dG9uIiwiY2VsbDIiLCJpdGVtV2VpZ2h0IiwiY2VsbDMiLCJzZWxlY3QiLCJzZXRBdHRyaWJ1dGUiLCJjbGFzc05hbWUiLCJvek9wdGlvbiIsImxic09wdGlvbiIsImdyT3B0aW9uIiwia2dPcHRpb24iLCJ0ZXh0IiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3RDZWxsIiwiY2F0ZWdvcnlTZWxlY3QiLCJnZXRDYXRlZ3JveVNlbGVjdCIsImFwcGVuZCIsInNob3dMaXN0QXNzaWduTW9kYWwiLCJpdGVtSWQiLCJ0YWJsZSIsImhlYWRlciIsImlubmVySFRNTCIsInVybCIsInVzZXJMaXN0cyIsImF4aW9zIiwiZ2V0IiwicmVzIiwiZGF0YSIsInN0YXR1cyIsImFsZXJ0IiwibXNnIiwibGlzdE5hbWVDZWxsIiwiYXNzaWduQ2VsbCIsImNoZWNrYm94IiwiaXRlbUFzc2lnbmVkIiwiY2hlY2tlZCIsImFzc2lnblRvR2Vhckxpc3QiLCJlbGVtZW50IiwibGlzdElkIiwiZ2V0QXR0cmlidXRlIiwibGlzdF9pZCIsInBvc3QiLCJyZXNwb25zZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImFkZExpc3RJdGVtIiwiY2F0ZWdvcnljb3VudGVyIiwidW5kZWZpbmVkIiwiZ3JvdXBDYXRlZ29yeSIsImxpc3RWaWV3SW5wdXQiLCJsaXN0VU9NIiwiZmluYWxJRWxlbWVudCIsInRhYmxlQ2F0ZWdvcnkiLCJ1c2VySWQiLCJmaW5hbEkiLCJjZWxsMCIsInNjb3BlIiwiY291bnRlciIsImxpc3RWaWV3VHlwZSIsIm5ld1JvdyIsImxpbmVVb21DZWxsIiwicm93VW9tIiwicmFkaW8xIiwiY3JlYXRlUmFkaW8iLCJyYWRpb0xhYmVsMSIsImNyZWF0ZUxhYmVsIiwicmFkaW8yIiwicmFkaW9MYWJlbDIiLCJyYWRpbzMiLCJyYWRpb0xhYmVsMyIsInJhZGlvNCIsInJhZGlvTGFiZWw0IiwicmFkaW9MYWJlbDUiLCJjZWxsNCIsInBhY2tlZEFtb3VudCIsImNlbGw1IiwidG90YWxMaW5lV2VpZ2h0IiwiaWNvbkNlbGwiLCJpY29uIiwiYWRkRXZlbnRMaXN0ZW5lcldlaWdodENhbGMiLCJjb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwidXBkYXRlVU9NIiwidXNSYWRpb1RvTWV0cmljIiwibWV0cmljUmFkaW9Ub1VzIiwibmVlZGVkRm9yV2VpZ2h0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuZWVkZWRGb3JXZWlnaHQiLCJnZXRMaW5lVG90YWxXZWlnaHQiLCJjb252ZXJ0Iiwid2VpZ2h0IiwidW9tIiwibGluZVRvdGFsV2VpZ2h0RWxlbWVudCIsImxpbmVUb3RhbCIsInRvRml4ZWQiLCJyZXBsYWNlIiwidXBkYXRlTGlzdEl0ZW0iLCJ1cGRhdGVJdGVtVU9NIiwiSFRNTEVsZW1lbnQiLCJ1b21FbGVtZW50IiwiY29uY2F0IiwiY29sdW1uTmFtZSIsImxhYmVsIiwibGFiZWxIVE1MIiwibmV3VU9NIiwiaXNOZXdSb3ciLCJzdGFydHNXaXRoIiwiZW5kc1dpdGgiLCJnZXRCb29sZWFuRGF0YSIsInJlc0RhdGEiLCJpdGVtIiwiZmxhc2hCb3JkZXIiLCJlcnIiLCJhZGRDYXRlZ29yeUdyb3VwIiwiY2F0ZWdvcnkiLCJsb2NhdGlvbiIsInJlbG9hZCIsImlzU3VjY2VzcyIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwic2V0VGltZW91dCIsIl9kb2N1bWVudCRnZXRFbGVtZW50QiIsIl9kb2N1bWVudCRnZXRFbGVtZW50QjIiLCJfZG9jdW1lbnQkZ2V0RWxlbWVudEIzIiwiX2RvY3VtZW50JGdldEVsZW1lbnRCNCIsImlkQXJyIiwic3BsaXQiLCJpdGVtSWRWYWx1ZSIsImlzTWFzdGVyTGlzdCIsInVwZGF0ZUNhdGVnb3J5VmFsdWUiLCJ1b21SYWRpb3MiLCJ1b21SYWRpbyIsInVvbUNvbHVtbk5hbWUiLCJuZXdJZCIsImdldERlbGV0ZUJ0bkRhdGEiLCJ1cGRhdGVUb3RhbExpc3RXZWlnaHRzIiwiYmFzZVdlaWdodCIsInRvdGFsUGFja1dlaWdodCIsIm1heFBhY2tXZWlnaHQiLCJjbGFzc1dhcm5pbmdWYWx1ZSIsInVvbVRleHQiLCJsaXN0RGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkaXZFbGVtZW50IiwiaW5uZXJUZXh0IiwiZGlzcGxheSIsIm5hbWVCYXNlIiwib3B0aW9uIiwib3B0aW9uTGlzdCIsIl9yZWYiLCJfY2FsbGVlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInQwIiwic2VsZWN0ZWQiLCJpbnB1dEVsZW1lbnRzIiwiaW5wdXRFbGVtZW50IiwiZWxlbWVudFR5cGUiLCJlbGVtZW50VGFnIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwibmV3RWxlbWVudCIsInBhcmVudEVsZW1lbnQiLCJyZXBsYWNlQ2hpbGQiLCJkYXRhQ29sdW1uTmFtZSIsInJhZGlvIiwiaW5uZXJIdG1sIiwiaHRtbEZvciIsImxpbmVMYWJlbCIsInVwZGF0ZUxpc3QiLCJoZWFkZXJzIiwiY29udGVudCIsIm5leHRFbGVtZW50U2libGluZyIsImFycm93IiwiY29udGFpbnMiLCJyZW1vdmUiLCJtYXhIZWlnaHQiLCJwYWRkaW5nIiwic2Nyb2xsSGVpZ2h0IiwiaW5wdXRzIiwiaW5wdXQiLCJkaXNhYmxlZCIsImxpc3RDaGFydGJ0biIsImNoYXJ0U3RhdHVzIiwiZ2V0Q2hhcnQiLCJkZXN0cm95IiwiY3R4IiwiY2hhcnREYXRhIiwicGFyc2UiLCJteUNoYXJ0IiwibGFiZWxzIiwiZGF0YXNldHMiLCJ3ZWlnaHRzIiwiY29sb3JzIiwiYm9yZGVyV2lkdGgiLCJob3Zlck9mZnNldCIsIm9wdGlvbnMiLCJjdXRvdXQiLCJyYWRpdXMiLCJsZWdlbmQiLCJwbHVnaW5zIiwiZGF0YWxhYmVscyIsImFuaW1hdGlvbiIsImFuaW1hdGVSb3RhdGUiLCJhbmltYXRlU2NhbGUiLCJ0ZXh0Q29udGVudCIsInNob3dDb252cnNpb25BbGVydCIsImNvbmZpcm1EZWxldGUiLCJpc01hc3RlciIsImhyZWYiLCJvYmplY3RUeXBlIiwiYW5jaG9yIiwibW9kYWxCb2R5IiwiaGVscGVyRGl2IiwiaGVscHRleHQiLCJsaXN0TmFtZSIsInJlbW92ZVJvdyIsInRhYmxlUm93IiwiYnV0dG9uIiwidGl0bGUiLCJvbmNsaWNrIiwiaXRlbV9uYW1lIiwiY2F0ZWdvcnlJZCIsIm9uRW5kIiwiZXZ0Iiwib3JkZXJlZElkcyIsInVwZGF0ZUl0ZW1PcmRlciIsImNhdGVnb3J5X2lkIiwib3JkZXJlZF9pZHMiLCJzb3J0aW5nU2VsZWN0Iiwib3B0cyIsInBhcmVudENvbnRhaW5lciIsImdob3N0Q2xhc3MiLCJ1cGRhdGVDYXRlZ29yeU9yZGVyIiwibmV3T3JkZXIiLCJpbmRleCIsIml0ZW1fY2F0ZWdvcnkiLCJjYXRlZ29yeV9vcmRlciIsImFzc2lnblRvTGlzdE1vZGFsIiwidGFibGVCb2R5IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiZGVmYXVsdHMiLCJjb21tb24iXSwic291cmNlUm9vdCI6IiJ9