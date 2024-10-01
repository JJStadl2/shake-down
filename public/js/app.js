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
  // this.window.updateListItem = function updateListItem(element) {
  //     let columnName = element.getAttribute("data-column-name");
  //     let value = element.value;
  //     let id = element.id;
  //     let idArr = id.split("-");
  //     let arrLength = idArr.length;
  //     let row = idArr[arrLength - 1];
  //     let itemId = document.getElementById("id-" + row);
  //     let itemIdValue = itemId.value;
  //     let listId = document.getElementById("listId").value;
  //     let url = "/list-item";
  //     let data = {};
  //     let userId = document.getElementById("userId").value;
  //     let create = true;
  //     let isMasterList = document.getElementById('isMaster').value;
  //     let isNewRow = (document.getElementById(`newRow-${row}`) !== null) ? document.getElementById(`newRow-${row}`).value : false ;
  //     data[columnName] = value;

  //     if (columnName.substring(0, 3) === "in_") {
  //         data = getBooleanData(columnName);
  //     }

  //     data["list_id"] = listId;
  //     data["user_id"] = userId;
  //     data["id"] = itemIdValue;
  //     if(itemIdValue.substring(0,3) !== 'new'){
  //         create = false;
  //         url = url +'/'+ itemIdValue;
  //         if(isMasterList === 'true'){
  //             data['updateMaster'] = true;
  //         }else if(isNewRow){
  //             data['isNewRow'] = true;
  //         }

  //     }

  //     axios
  //         .post(url, data, itemId)
  //         .then((res) => {
  //             let resData = res.data;
  //             if(resData.status === '1'){

  //                 flashBorder(element, true);

  //                 if(create){
  //                     itemId.value = resData.newId;
  //                 }
  //                 getDeleteBtnData(itemId.value,row);
  //             }
  //             else{
  //                 flashBorder(element, false);
  //                 alert(resData.msg);
  //                 return;
  //             }

  //         })
  //         .catch((err) => {
  //             flashBorder(element, true);
  //             alert("Failed to update list item. Please try again later.");
  //             console.error(err);
  //         });

  //     if(isMasterList === 'false'){
  //         updateTotalListWeights();
  //     }

  // };

  this.window.updateListItem = function updateListItem(element) {
    var _document$getElementB, _document$getElementB2, _document$getElementB3;
    // Checking if element is a valid DOM element
    if (!element || !(element instanceof HTMLElement)) {
      console.error("Invalid element provided to updateListItem.");
      return;
    }
    var columnName = element.getAttribute("data-column-name");
    var value = element.value;
    var id = element.id;
    var idArr = id.split("-");

    // Ensure the ID array has at least one element before accessing
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
    var listId = ((_document$getElementB = document.getElementById("listId")) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.value) || ""; // Optional chaining to prevent errors
    var url = "/list-item";
    var data = {};
    var userId = ((_document$getElementB2 = document.getElementById("userId")) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.value) || "";
    var create = true;
    var isMasterList = ((_document$getElementB3 = document.getElementById('isMaster')) === null || _document$getElementB3 === void 0 ? void 0 : _document$getElementB3.value) === 'true'; // Strict comparison for better handling
    var isNewRow = document.getElementById("newRow-".concat(row)) ? document.getElementById("newRow-".concat(row)).value : false;
    data[columnName] = value;
    if (columnName.startsWith("in_")) {
      // Using startsWith for better readability
      data = getBooleanData(columnName);
    }

    // Assign additional properties to data object
    data["list_id"] = listId;
    data["user_id"] = userId;
    data["id"] = itemIdValue;

    // Build URL and prepare for item creation or update
    if (itemIdValue.startsWith('new')) {
      create = true; // Create item if ID indicates new
    } else {
      create = false;
      url += '/' + itemIdValue; // Append the item ID to the URL
      if (isMasterList) {
        data['updateMaster'] = true; // Set flag for master list update
      } else if (isNewRow) {
        data['isNewRow'] = true; // Set flag for new row
      }
    }

    // Perform the POST request
    axios.post(url, data) // Removing itemId from post arguments
    .then(function (res) {
      var resData = res.data;
      if (resData.status === '1') {
        flashBorder(element, true);
        if (create) {
          itemId.value = resData.newId; // Update item value with new ID
        }
        getDeleteBtnData(itemId.value, row); // Update delete button data
      } else {
        flashBorder(element, false);
        alert(resData.msg || "Update failed, please check your input."); // Provide user feedback
      }
    })["catch"](function (err) {
      // Enhanced error handling
      flashBorder(element, false);
      alert("Failed to update list item. Please try again later.");
      console.error("Update error:", err); // Improved error logging
    });

    // Update total list weights conditionally
    if (!isMasterList) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7O0FDOXhDd0I7QUFDMUJuUSxNQUFNLENBQUMrQyxLQUFLLEdBQUdBLDZDQUFLO0FBRXBCL0MsTUFBTSxDQUFDK0MsS0FBSyxDQUFDc04sUUFBUSxDQUFDM0UsT0FBTyxDQUFDNEUsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsZ0JBQWdCOzs7Ozs7Ozs7OztBQ0gzRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Fzcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgJy4vYm9vdHN0cmFwJyA7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCJib290c3RyYXBcIjtcbi8vIGltcG9ydCAgJ2Jvb3RzdHJhcCc7XG5pbXBvcnQgXCJAcG9wcGVyanMvY29yZVwiO1xuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qcy9hdXRvXCI7XG5pbXBvcnQgU29ydGFibGUgZnJvbSBcInNvcnRhYmxlanNcIjtcbmNvbnN0IGJvb3RzdHJhcCA9IHJlcXVpcmUoXCIuL2Jvb3RzdHJhcFwiKTtcbmNvbnN0IGdyYW1Db252ZXJ0ZXIgPSAxMDAwO1xuY29uc3Qgb3VuY2VDb252ZXJ0ZXIgPSAxNjtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoZSkge1xuICAgIHRoaXMud2luZG93LnNob3dQYXNzd29yZCA9IGZ1bmN0aW9uIHNob3dQYXNzd29yZChpZCkge1xuICAgICAgICBsZXQgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgIGlmIChwYXNzd29yZC50eXBlID09PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgICAgICAgIHBhc3N3b3JkLnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhc3N3b3JkLnR5cGUgPSBcInBhc3N3b3JkXCI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMud2luZG93LmFkZE1hc3Rlckxpc3RJdGVtID0gZnVuY3Rpb24gYWRkTWFzdGVyTGlzdEl0ZW0oKSB7XG4gICAgICAgIGxldCBudW1iZXJPZkl0ZW1zVG9BZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmVzVG9BZGRcIik7XG4gICAgICAgIGxldCBsaW5lc1RvQWRkID0gMTtcbiAgICAgICAgaWYgKG51bWJlck9mSXRlbXNUb0FkZCA9PT0gbnVsbCB8fCArbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlIDwgMSkge1xuICAgICAgICAgICAgbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlID0gbGluZXNUb0FkZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpbmVzVG9BZGQgPSArbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lc1RvQWRkOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBsaXN0QnlJdGVtcyA9IHRydWU7XG4gICAgICAgICAgICBsZXQgbGlzdGVuID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgaXRlbVRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWl0ZW0tdGFibGUtYm9keScpO1xuICAgICAgICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIGNlbGxzIGFuZCBpbnB1dCBlbGVtZW50cy5cbiAgICAgICAgICAgIGxldCBjZWxsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcblxuICAgICAgICAgICAgbGV0IGl0ZW1OYW1lID0gY3JlYXRlTGlzdEl0ZW1JbnB1dChcbiAgICAgICAgICAgICAgICBcInRleHRcIixcbiAgICAgICAgICAgICAgICBcIml0ZW1OYW1lXCIsXG4gICAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgICBcIml0ZW1fbmFtZVwiLFxuICAgICAgICAgICAgICAgIGxpc3RlblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGl0ZW1OYW1lLnBsYWNlaG9sZGVyID0gXCJJdGVtIE5hbWVcIjtcbiAgICAgICAgICAgIGl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRyb2xcIik7XG5cbiAgICAgICAgICAgIGxldCBjZWxsNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGNlbGw2LmlkID0gXCJidG4tdGQtXCIgK2k7XG4gICAgICAgICAgICAvLyBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgICAgICAvLyBkZWxldGVCdG4uaWQgPSBcImRlbGV0ZUJ0bi1cIiArIGk7XG4gICAgICAgICAgICAvLyBkZWxldGVCdG4uY2xhc3NOYW1lID0gXCJidG4gYnRuLXByaW1hcnkgYnRuLXNtICBweS0yXCI7XG4gICAgICAgICAgICAvLyBkZWxldGVCdG4uaW5uZXJIVE1MID0gXCJ4XCI7XG4gICAgICAgICAgICBsZXQgZGVsZXRlQnRuID0gY3JlYXRlRGVsZXRlQnV0dG9uKGkpO1xuXG5cbiAgICAgICAgICAgIGxldCBjZWxsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGxldCBpdGVtV2VpZ2h0ID0gY3JlYXRlTGlzdEl0ZW1JbnB1dChcbiAgICAgICAgICAgICAgICBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIFwiaXRlbVdlaWdodFwiLFxuICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAgXCJpdGVtX3dlaWdodFwiLFxuICAgICAgICAgICAgICAgIGxpc3RlblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQudmFsdWUgPSAwO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKFwiZm9yLXdlaWdodFwiKTtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQuY2xhc3NMaXN0LmFkZChcIm51bWJlci1pbnB1dFwiKTtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcbiAgICAgICAgICAgIC8vaXRlbVdlaWdodC5zdHlsZS53aWR0aCA9ICc0MCUnO1xuICAgICAgICAgICAgY2VsbDIuY2xhc3NMaXN0LmFkZChcIm51bWJlci1jb2xcIik7XG5cbiAgICAgICAgICAgIGxldCBjZWxsMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGxldCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICAgICAgc2VsZWN0LmlkID0gXCJ1b20tXCIgKyBpO1xuICAgICAgICAgICAgc2VsZWN0Lm5hbWUgPSBcInVvbVtdXCI7XG4gICAgICAgICAgICBzZWxlY3Quc2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4tbmFtZVwiLCBcInVvbVwiKTtcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiO1xuXG4gICAgICAgICAgICBsZXQgb3pPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgbGV0IGxic09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBsZXQgZ3JPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgbGV0IGtnT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIG96T3B0aW9uLnZhbHVlID0gXCJpbl9vdW5jZXNcIjtcbiAgICAgICAgICAgIG96T3B0aW9uLnRleHQgPSBcIk9aXCI7XG4gICAgICAgICAgICBsYnNPcHRpb24udmFsdWUgID0gJ2luX2xicyc7XG4gICAgICAgICAgICBsYnNPcHRpb24udGV4dCA9ICdMQlMnXG5cbiAgICAgICAgICAgIGdyT3B0aW9uLnZhbHVlID0gXCJpbl9ncmFtc1wiO1xuICAgICAgICAgICAgZ3JPcHRpb24udGV4dCA9IFwiR1wiO1xuICAgICAgICAgICAga2dPcHRpb24udmFsdWUgID0gJ2luX2tpbG9zJztcbiAgICAgICAgICAgIGtnT3B0aW9uLnRleHQgPSAnS0cnO1xuICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG96T3B0aW9uKTtcbiAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChsYnNPcHRpb24pO1xuICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKGdyT3B0aW9uKTtcbiAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChrZ09wdGlvbik7XG5cbiAgICAgICAgICAgIC8vYXBwZW5kIGlucHV0cyB0byBjZWxscy5cbiAgICAgICAgICAgIGNlbGwxLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIGNlbGwyLmFwcGVuZENoaWxkKGl0ZW1XZWlnaHQpO1xuXG4gICAgICAgICAgICBsZXQgc2VsZWN0Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGxldCBjYXRlZ29yeVNlbGVjdCA9IGdldENhdGVncm95U2VsZWN0KGksbnVsbCwgbGlzdGVuKTtcbiAgICAgICAgICAgIGNhdGVnb3J5U2VsZWN0Lm5hbWUgPSAnaXRlbUNhdGVnb3J5W10nXG4gICAgICAgICAgICBzZWxlY3RDZWxsLmFwcGVuZChjYXRlZ29yeVNlbGVjdCk7XG5cbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gICAgICAgICAgICBjZWxsNi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgY2VsbHMgdG8gdGhlIHJvdy5cbiAgICAgICAgICAgIC8vIHJvdy5hcHBlbmRDaGlsZChpY29uQ2VsbCk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDEpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHNlbGVjdENlbGwpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwzKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsMik7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDYpO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIHJvdyB0byB0aGUgdGFibGUuXG4gICAgICAgICAgICBpdGVtVGFibGUuYXBwZW5kQ2hpbGQocm93KTtcblxuXG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0l0ZW1Db3VudCcpLnZhbHVlID0gbGluZXNUb0FkZDtcbiAgICAgICAgbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlID0gMTtcbiAgICB9O1xuICAgIHRoaXMud2luZG93LnNob3dMaXN0QXNzaWduTW9kYWwgPSBmdW5jdGlvbiBzaG93TGlzdEFzc2lnbk1vZGFsKGl0ZW1JZCxpdGVtTmFtZSl7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1JZGZvckFzc2lnbicpLnZhbHVlID0gaXRlbUlkO1xuICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlckl0ZW1JZGZvckFzc2lnbicpLnZhbHVlID0gdXNlckl0ZW1JZDtcblxuICAgICAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWFzc2lnbi1pdGVtLXRhYmxlLWJvZHlcIik7XG4gICAgICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQXNzaWduSXRlbVRvTGlzdE1vZGFsTGFiZWwnKTtcbiAgICAgICAgaGVhZGVyLmlubmVySFRNTCA9ICdBc3NpZ24vVW5hc3NpZ24gaXRlbTogJytpdGVtTmFtZTtcblxuICAgICAgICBsZXQgdXJsID0gJy9nZXQtdXNlci1saXN0cy8nK2l0ZW1JZDtcbiAgICAgICAgbGV0IHVzZXJMaXN0cztcblxuICAgICAgICBheGlvcy5nZXQodXJsKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgdXNlckxpc3RzID0gZGF0YS51c2VyTGlzdHM7XG5cbiAgICAgICAgICAgIGlmKGRhdGEuc3RhdHVzICE9PSAnMScpe1xuICAgICAgICAgICAgICAgIGFsZXJ0KGRhdGEubXNnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXNlckxpc3RzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICAgICAgICAgIGxldCBsaXN0TmFtZUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICAgICAgbGV0IGFzc2lnbkNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG5cbiAgICAgICAgICAgICAgICBsaXN0TmFtZUNlbGwuaW5uZXJIVE1MID0gdXNlckxpc3RzW2ldLm5hbWU7XG5cbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICAgICAgICAgIGNoZWNrYm94LmlkID0gJ2xpc3RDaGVja0JveC0nK2k7XG4gICAgICAgICAgICAgICAgY2hlY2tib3gubmFtZSA9ICdsaXN0SWRzW10nO1xuICAgICAgICAgICAgICAgIGNoZWNrYm94LnZhbHVlID0gdXNlckxpc3RzW2ldLmlkO1xuXG4gICAgICAgICAgICAgICAgaWYodXNlckxpc3RzW2ldLml0ZW1Bc3NpZ25lZCA9PSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYXNzaWduQ2VsbC5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGxpc3ROYW1lQ2VsbCk7XG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGFzc2lnbkNlbGwpO1xuICAgICAgICAgICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgdGhpcy53aW5kb3cuYXNzaWduVG9HZWFyTGlzdCA9IGZ1bmN0aW9uIGFzc2lnblRvR2Vhckxpc3QoZWxlbWVudCl7XG4gICAgICAgIGxldCBsaXN0SWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJyk7XG4gICAgICAgIGxldCBpdGVtSWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pdGVtLWlkJyk7XG5cbiAgICAgICAgaWYoIWVsZW1lbnQuY2hlY2tlZCl7XG4gICAgICAgICAgICBsaXN0SWQgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB1cmwgPSAnL2Fzc2lnbi10by1nZWFyLWxpc3QnXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgbGlzdF9pZDogbGlzdElkLFxuICAgICAgICAgICAgaWQ6IGl0ZW1JZFxuICAgICAgICB9O1xuXG5cbiAgICAgICAgYXhpb3MucG9zdCh1cmwsZGF0YSlcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAxKXtcblxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgYWxlcnQocmVzcG9uc2UubXNnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgdGhpcy53aW5kb3cuYWRkTGlzdEl0ZW0gPSBmdW5jdGlvbiBhZGRMaXN0SXRlbShjYXRlZ29yeWNvdW50ZXIgPSBudWxsLCBncm91cENhdGVnb3J5ID0gbnVsbCkge1xuICAgICAgICBsZXQgbnVtYmVyT2ZJdGVtc1RvQWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lc1RvQWRkXCIpO1xuICAgICAgICBsZXQgbGluZXNUb0FkZCA9IDE7XG4gICAgICAgIGlmIChudW1iZXJPZkl0ZW1zVG9BZGQgPT09IG51bGwgfHwgK251bWJlck9mSXRlbXNUb0FkZC52YWx1ZSA8IDEpIHtcbiAgICAgICAgICAgIG51bWJlck9mSXRlbXNUb0FkZC52YWx1ZSA9IGxpbmVzVG9BZGQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaW5lc1RvQWRkID0gK251bWJlck9mSXRlbXNUb0FkZC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXNUb0FkZDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbGlzdFVPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tXCIpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGZpbmFsSUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbmFsLWlcIik7XG4gICAgICAgICAgICBsZXQgbGlzdEJ5SXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RCeUl0ZW1zXCIpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGl0ZW1UYWJsZTtcblxuICAgICAgICAgICAgaWYgKCtsaXN0QnlJdGVtcyA9PSAxKSB7XG4gICAgICAgICAgICAgICAgbGlzdEJ5SXRlbXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGl0ZW1UYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXRlbS10YWJsZS1ib2R5XCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsaXN0QnlJdGVtcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxldCB0YWJsZUNhdGVnb3J5ID0gY2F0ZWdvcnljb3VudGVyO1xuICAgICAgICAgICAgICAgIGl0ZW1UYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgICAgICAgICAgICBcImNhdGVnb3J5VGFibGUtXCIgKyB0YWJsZUNhdGVnb3J5XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHVzZXJJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcklkXCIpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGxpc3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdElkXCIpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGZpbmFsSSA9IGZpbmFsSUVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICBmaW5hbElFbGVtZW50LnZhbHVlID0gK2ZpbmFsSSArIDE7XG5cbiAgICAgICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgICAgICByb3cuaWQgPSAncm93LScrZmluYWxJO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgY2VsbHMgYW5kIGlucHV0IGVsZW1lbnRzLlxuICAgICAgICAgICAgbGV0IGNlbGwwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgICAgICAgICAgY2VsbDAuc2NvcGUgPSBcInJvd1wiO1xuICAgICAgICAgICAgY2VsbDAuaW5uZXJIVE1MID0gZmluYWxJO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG5cbiAgICAgICAgICAgIGxldCBjb3VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgY291bnRlci50eXBlID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgIGNvdW50ZXIubmFtZSA9IFwiaWRbXVwiO1xuICAgICAgICAgICAgY291bnRlci5pZCA9IFwiaWQtXCIgKyBmaW5hbEk7XG4gICAgICAgICAgICBjb3VudGVyLnZhbHVlID0gXCJuZXctXCIgKyBmaW5hbEk7XG4gICAgICAgICAgICBjb3VudGVyLnNldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uLW5hbWVcIiwgXCJpZFwiKTtcblxuXG4gICAgICAgICAgICBsZXQgbmV3Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgbmV3Um93LnR5cGUgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgbmV3Um93LmlkID0gXCJuZXdSb3ctXCIgKyBmaW5hbEk7XG4gICAgICAgICAgICBuZXdSb3cudmFsdWUgPSB0cnVlO1xuXG5cbiAgICAgICAgICAgIGxldCBpdGVtTmFtZSA9IGNyZWF0ZUxpc3RJdGVtSW5wdXQoXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgXCJpdGVtTmFtZVwiLFxuICAgICAgICAgICAgICAgIGZpbmFsSSxcbiAgICAgICAgICAgICAgICBcIml0ZW1fbmFtZVwiXG5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpdGVtTmFtZS5wbGFjZWhvbGRlciA9IFwiSXRlbSBOYW1lXCI7XG4gICAgICAgICAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBjZWxsNi5pZCA9IFwiYnRuLXRkLVwiICsgZmluYWxJO1xuICAgICAgICAgICAgbGV0IGRlbGV0ZUJ0biA9IGNyZWF0ZURlbGV0ZUJ1dHRvbihmaW5hbEkpO1xuICAgICAgICAgICAgbGV0IGNlbGwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuXG4gICAgICAgICAgICBsZXQgaXRlbVdlaWdodCA9IGNyZWF0ZUxpc3RJdGVtSW5wdXQoXG4gICAgICAgICAgICAgICAgXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICBcIml0ZW1XZWlnaHRcIixcbiAgICAgICAgICAgICAgICBmaW5hbEksXG4gICAgICAgICAgICAgICAgXCJpdGVtX3dlaWdodFwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaXRlbVdlaWdodC52YWx1ZSA9IDA7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJmb3Itd2VpZ2h0XCIpO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWlucHV0XCIpO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xuICAgICAgICAgICAgY2VsbDIuY2xhc3NMaXN0LmFkZChcIm51bWJlci1jb2xcIik7XG5cbiAgICAgICAgICAgIGxldCBjZWxsMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGxldCBsaW5lVW9tQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGNlbGwzLmNsYXNzTGlzdC5hZGQoXCJ1b20tdGRcIik7XG4gICAgICAgICAgICBsaW5lVW9tQ2VsbC5jbGFzc0xpc3QuYWRkKFwidW9tLXRkXCIpO1xuICAgICAgICAgICAgbGV0IHJhZGlvMTtcbiAgICAgICAgICAgIGxldCByYWRpbzI7XG4gICAgICAgICAgICBsZXQgcmFkaW9MYWJlbDE7XG4gICAgICAgICAgICBsZXQgcmFkaW9MYWJlbDI7XG4gICAgICAgICAgICBsZXQgcmFkaW9MYWJlbDM7XG5cbiAgICAgICAgICAgIGlmIChsaXN0VU9NID09PSBcInVzXCIpIHtcbiAgICAgICAgICAgICAgICByYWRpbzEgPSBjcmVhdGVSYWRpbyhcImluX291bmNlc1wiLCBcIlwiLCBcIm96XCIsIGZpbmFsSSk7XG4gICAgICAgICAgICAgICAgcmFkaW9MYWJlbDEgPSBjcmVhdGVMYWJlbChcbiAgICAgICAgICAgICAgICAgICAgXCJPWlwiLFxuICAgICAgICAgICAgICAgICAgICBcInVvbS1vei1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgICAgICAgICAgXCJvelwiLFxuICAgICAgICAgICAgICAgICAgICBmaW5hbElcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJhZGlvMiA9IGNyZWF0ZVJhZGlvKFwiaW5fbGJzXCIsIFwiXCIsIFwibGJzXCIsIGZpbmFsSSk7XG4gICAgICAgICAgICAgICAgcmFkaW9MYWJlbDIgPSBjcmVhdGVMYWJlbChcbiAgICAgICAgICAgICAgICAgICAgXCJMQlNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ1b20tbGJzLVwiICsgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICBcImxic1wiLFxuICAgICAgICAgICAgICAgICAgICBmaW5hbElcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJhZGlvTGFiZWwzID0gY3JlYXRlTGFiZWwoXG4gICAgICAgICAgICAgICAgICAgIFwiT1pcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ1b20tb3otXCIgKyBmaW5hbEksXG4gICAgICAgICAgICAgICAgICAgIFwib3pcIixcbiAgICAgICAgICAgICAgICAgICAgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmFkaW8xID0gY3JlYXRlUmFkaW8oXCJpbl9ncmFtc1wiLCBcIlwiLCBcImdyYW1cIiwgZmluYWxJKTtcbiAgICAgICAgICAgICAgICByYWRpb0xhYmVsMSA9IGNyZWF0ZUxhYmVsKFxuICAgICAgICAgICAgICAgICAgICBcIkdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ1b20tZ3JhbS1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgICAgICAgICAgXCJncmFtXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsSVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmFkaW8yID0gY3JlYXRlUmFkaW8oXCJpbl9raWxvc1wiLCBcIlwiLCBcImtnXCIsIGZpbmFsSSk7XG4gICAgICAgICAgICAgICAgcmFkaW9MYWJlbDIgPSBjcmVhdGVMYWJlbChcbiAgICAgICAgICAgICAgICAgICAgXCJLR1wiLFxuICAgICAgICAgICAgICAgICAgICBcInVvbS1rZy1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgICAgICAgICAgXCJrZ1wiLFxuICAgICAgICAgICAgICAgICAgICBmaW5hbElcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJhZGlvTGFiZWwzID0gY3JlYXRlTGFiZWwoXG4gICAgICAgICAgICAgICAgICAgIFwiR1wiLFxuICAgICAgICAgICAgICAgICAgICBcInVvbS1ncmFtLVwiICsgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICBcImdyYW1cIixcbiAgICAgICAgICAgICAgICAgICAgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGNlbGw0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgY2VsbDQuY2xhc3NMaXN0LmFkZChcIm51bWJlci1jb2xcIik7XG4gICAgICAgICAgICBsZXQgcGFja2VkQW1vdW50ID0gY3JlYXRlTGlzdEl0ZW1JbnB1dChcbiAgICAgICAgICAgICAgICBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIFwicGFja2VkQW1vdW50XCIsXG4gICAgICAgICAgICAgICAgZmluYWxJLFxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBwYWNrZWRBbW91bnQudmFsdWUgPSAxO1xuXG4gICAgICAgICAgICBwYWNrZWRBbW91bnQuY2xhc3NMaXN0LmFkZChcImZvci13ZWlnaHRcIik7XG4gICAgICAgICAgICBwYWNrZWRBbW91bnQuY2xhc3NMaXN0LmFkZChcIm51bWJlci1pbnB1dFwiKTtcbiAgICAgICAgICAgIHBhY2tlZEFtb3VudC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBjZWxsNS5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWNvbFwiKTtcbiAgICAgICAgICAgIGxldCB0b3RhbExpbmVXZWlnaHQgPSBjcmVhdGVMaXN0SXRlbUlucHV0KFxuICAgICAgICAgICAgICAgIFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgXCJ0b3RhbExpbmVXZWlnaHRcIixcbiAgICAgICAgICAgICAgICBmaW5hbEksXG4gICAgICAgICAgICAgICAgXCJ0b3RhbF9saW5lX3dlaWdodFwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LnZhbHVlID0gMDtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgXCJkYXRhLWNvbHVtbi1uYW1lXCIsXG4gICAgICAgICAgICAgICAgXCJ0b3RhbF9saW5lX3dlaWdodFwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LnNldEF0dHJpYnV0ZShcInJlYWRvbmx5XCIsIHRydWUpO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJudW1iZXItaW5wdXRcIik7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC5jbGFzc0xpc3QuYWRkKFwiZm9yLXRvdGFsLWxpc3Qtd2VpZ2h0XCIpO1xuXG4gICAgICAgICAgICAvL2FwcGVuZCBpbnB1dHMgdG8gY2VsbHMuXG4gICAgICAgICAgICBsZXQgaWNvbkNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG5cbiAgICAgICAgICAgIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICAgICAgaWNvbi5jbGFzc05hbWUgPSAnZmFzIGZhLWdyaXAtdmVydGljYWwnO1xuICAgICAgICAgICAgaWNvbkNlbGwuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICAgICAgICAgIGNlbGwxLmFwcGVuZENoaWxkKGNvdW50ZXIpO1xuICAgICAgICAgICAgY2VsbDEuYXBwZW5kQ2hpbGQobmV3Um93KTtcbiAgICAgICAgICAgIGNlbGwxLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIGNlbGwyLmFwcGVuZENoaWxkKGl0ZW1XZWlnaHQpO1xuXG4gICAgICAgICAgICBsZXQgc2VsZWN0Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGxldCBjYXRlZ29yeVNlbGVjdCA9IGdldENhdGVncm95U2VsZWN0KGZpbmFsSSwgZ3JvdXBDYXRlZ29yeSk7XG5cbiAgICAgICAgICAgIHNlbGVjdENlbGwuYXBwZW5kKGNhdGVnb3J5U2VsZWN0KTtcblxuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQocmFkaW8xKTtcbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHJhZGlvTGFiZWwxKTtcbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHJhZGlvMik7XG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChyYWRpb0xhYmVsMik7XG5cbiAgICAgICAgICAgIGNlbGw0LmFwcGVuZENoaWxkKHBhY2tlZEFtb3VudCk7XG4gICAgICAgICAgICBjZWxsNS5hcHBlbmRDaGlsZCh0b3RhbExpbmVXZWlnaHQpO1xuICAgICAgICAgICAgbGluZVVvbUNlbGwuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbDMpO1xuICAgICAgICAgICAgY2VsbDYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIGNlbGxzIHRvIHRoZSByb3cuXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoaWNvbkNlbGwpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwxKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChzZWxlY3RDZWxsKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsMyk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDIpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGw0KTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsNSk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQobGluZVVvbUNlbGwpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGw2KTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSByb3cgdG8gdGhlIHRhYmxlLlxuICAgICAgICAgICAgaXRlbVRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgICAgICAvL2FkZCBmdW5jdGlvbnMgdG8gY2FsY3VsYXRlIGFuZCBjb252ZXJ0IHRvdGFsIHdlaWdodC5cbiAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXJXZWlnaHRDYWxjKGZpbmFsSSk7XG4gICAgICAgIH1cbiAgICAgICAgbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlID0gMTtcbiAgICB9O1xuXG4gICAgdGhpcy53aW5kb3cudXBkYXRlVU9NID0gZnVuY3Rpb24gdXBkYXRlVU9NKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gXCJ1c1wiKSB7XG4gICAgICAgICAgICB1c1JhZGlvVG9NZXRyaWMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1ldHJpY1JhZGlvVG9VcygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyV2VpZ2h0Q2FsYyhyb3cpIHtcbiAgICAgICAgbGV0IG5lZWRlZEZvcldlaWdodHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvci13ZWlnaHRcIik7XG4gICAgICAgIG5lZWRlZEZvcldlaWdodHMuZm9yRWFjaChmdW5jdGlvbiAobmVlZGVkRm9yV2VpZ2h0KSB7XG4gICAgICAgICAgICBuZWVkZWRGb3JXZWlnaHQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZ2V0TGluZVRvdGFsV2VpZ2h0KHJvdyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy53aW5kb3cuZ2V0TGluZVRvdGFsV2VpZ2h0ID0gZnVuY3Rpb24gZ2V0TGluZVRvdGFsV2VpZ2h0KFxuICAgICAgICByb3csXG4gICAgICAgIGNvbnZlcnQgPSBmYWxzZVxuICAgICkge1xuICAgICAgICBsZXQgd2VpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtV2VpZ2h0LVwiICsgcm93KS52YWx1ZTtcbiAgICAgICAgbGV0IHBhY2tlZEFtb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFja2VkQW1vdW50LVwiICsgcm93KS52YWx1ZTtcbiAgICAgICAgbGV0IHVvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tXCIpO1xuICAgICAgICBsZXQgbGluZVRvdGFsV2VpZ2h0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgICAgXCJ0b3RhbExpbmVXZWlnaHQtXCIgKyByb3dcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgbGluZVRvdGFsID0gMDtcbiAgICAgICAgbGluZVRvdGFsID0gK3dlaWdodCAqICtwYWNrZWRBbW91bnQ7XG4gICAgICAgIGxpbmVUb3RhbCA9IGxpbmVUb3RhbC50b0ZpeGVkKDMpLnJlcGxhY2UoL1suLF0wMCQvLCBcIlwiKTtcbiAgICAgICAgbGluZVRvdGFsV2VpZ2h0RWxlbWVudC52YWx1ZSA9IGxpbmVUb3RhbDtcblxuICAgICAgICB1cGRhdGVMaXN0SXRlbShsaW5lVG90YWxXZWlnaHRFbGVtZW50KTtcbiAgICB9O1xuICAgIHRoaXMud2luZG93LmNvbnZlcnRNZWFzdXJlbWVudCA9IGZ1bmN0aW9uIGNvbnZlcnRNZWFzdXJlbWVudChcbiAgICAgICAgcm93LFxuICAgICAgICBjb252ZXJ0ID0gZmFsc2VcbiAgICApIHtcbiAgICAgICAgbGV0IGxpc3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0SWQnKS52YWx1ZTtcbiAgICAgICAgbGV0IHVvbTtcbiAgICAgICAgbGV0IGlzTWFzdGVyTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpc01hc3RlcicpLnZhbHVlO1xuXG4gICAgICAgIGlmKGlzTWFzdGVyTGlzdCA9PT0gJ3RydWUnKXtcbiAgICAgICAgICAgIHVvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tLVwiK3JvdykudmFsdWU7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdW9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b21cIikudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZihsaXN0SWQgPT0gJ21hc3Rlcicpe1xuICAgICAgICAvLyAgICAgdW9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b20tXCIrcm93KS52YWx1ZTtcbiAgICAgICAgLy8gfWVsc2V7XG4gICAgICAgIC8vICAgICB1b20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbVwiKS52YWx1ZTtcbiAgICAgICAgLy8gfVxuICAgICAgICBsZXQgd2VpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtV2VpZ2h0LVwiICsgcm93KTtcbiAgICAgICAgbGV0IHBhY2tlZEFtb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFja2VkQW1vdW50LVwiICsgcm93KS52YWx1ZTtcbiAgICAgICAgbGV0IHRvdGFsV2VpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3RhbExpbmVXZWlnaHQtXCIgKyByb3cpO1xuICAgICAgICBsZXQgdG90YWxMaW5lV2VpZ2h0VmFsdWUgPSAwO1xuICAgICAgICBsZXQgd2VpZ2h0VmFsdWUgPSB3ZWlnaHQudmFsdWU7XG4gICAgICAgIGxldCBzbWFsbDtcbiAgICAgICAgbGV0IGxhcmdlO1xuICAgICAgICBsZXQgZWxlbWVudDtcbiAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lLXVvbS1sYWJlbC1cIiArIHJvdyk7XG4gICAgICAgIGxldCBsYWJlbEhUTUw7XG5cbiAgICAgICAgaWYgKHVvbSA9PT0gXCJ1c1wiKSB7XG4gICAgICAgICAgICBzbWFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tLW96LVwiICsgcm93KTtcbiAgICAgICAgICAgIGxhcmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b20tbGJzLVwiICsgcm93KTtcbiAgICAgICAgICAgIGlmIChzbWFsbC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0VmFsdWUgPSArd2VpZ2h0VmFsdWUgKiAxNjtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gc21hbGw7XG4gICAgICAgICAgICAgICAgbGFiZWxIVE1MID0gXCJPWlwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3ZWlnaHRWYWx1ZSA9ICt3ZWlnaHRWYWx1ZSAvIDE2O1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBsYXJnZTtcbiAgICAgICAgICAgICAgICBsYWJlbEhUTUwgPSBcIkxCU1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc21hbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1ncmFtLVwiICsgcm93KTtcbiAgICAgICAgICAgIGxhcmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b20ta2ctXCIgKyByb3cpO1xuXG4gICAgICAgICAgICBpZiAoc21hbGwuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHdlaWdodFZhbHVlID0gK3dlaWdodFZhbHVlICogMTAwMDtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gc21hbGw7XG4gICAgICAgICAgICAgICAgbGFiZWxIVE1MID0gXCJHXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdlaWdodFZhbHVlID0gK3dlaWdodFZhbHVlIC8gMTAwMDtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gbGFyZ2U7XG4gICAgICAgICAgICAgICAgbGFiZWxIVE1MID0gXCJLR1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdG90YWxMaW5lV2VpZ2h0VmFsdWUgPSArd2VpZ2h0VmFsdWUgKiArcGFja2VkQW1vdW50O1xuICAgICAgICB3ZWlnaHQudmFsdWUgPSB3ZWlnaHRWYWx1ZS50b0ZpeGVkKDMpLnJlcGxhY2UoL1suLF0wMCQvLCBcIlwiKTtcbiAgICAgICAgdG90YWxXZWlnaHQudmFsdWUgPSB0b3RhbExpbmVXZWlnaHRWYWx1ZVxuICAgICAgICAgICAgLnRvRml4ZWQoMylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bLixdMDAkLywgXCJcIik7XG4gICAgICAgIGxhYmVsLmlubmVySFRNTCA9IGxhYmVsSFRNTDtcbiAgICAgICAgdXBkYXRlTGlzdEl0ZW0oZWxlbWVudCk7XG4gICAgICAgIHVwZGF0ZUxpc3RJdGVtKHdlaWdodCk7XG4gICAgICAgIHVwZGF0ZUxpc3RJdGVtKHRvdGFsV2VpZ2h0KTtcbiAgICB9O1xuICAgIHRoaXMud2luZG93LmFkZENhdGVnb3J5R3JvdXAgPSBmdW5jdGlvbiBhZGRDYXRlZ29yeUdyb3VwKGxpc3RJZCxjYXRlZ29yeSwgbGlzdFVPTSwgdXNlcklkKXtcblxuICAgICAgICBsZXQgY29sdW1uTmFtZTtcbiAgICAgICAgaWYobGlzdFVPTSA9PT0gJ3VzJyl7XG4gICAgICAgICAgICBjb2x1bW5OYW1lID0gJ2luX291bmNlcyc7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29sdW1uTmFtZSA9ICdpbl9ncmFtcyc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGF0YSA9IGdldEJvb2xlYW5EYXRhKGNvbHVtbk5hbWUpO1xuICAgICAgICBkYXRhWydsaXN0X2lkJ10gPSBsaXN0SWQ7XG4gICAgICAgIGRhdGFbJ3VzZXJfaWQnXSA9IHVzZXJJZDtcbiAgICAgICAgZGF0YVsnaXRlbV9uYW1lJ10gPSAnJztcbiAgICAgICAgZGF0YVsnaXRlbV93ZWlnaHQnXSA9IDA7XG4gICAgICAgIGRhdGFbJ2Ftb3VudCddID0gMTtcbiAgICAgICAgZGF0YVsnaXRlbV9jYXRlZ29yeSddID0gY2F0ZWdvcnk7XG4gICAgICAgIGxldCB1cmwgPSAnL2xpc3QtaXRlbSdcblxuICAgICAgICBheGlvc1xuICAgICAgICAucG9zdCh1cmwsIGRhdGEpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIHJlcyA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gJzEnKXtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGFsZXJ0KHJlcy5tc2cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG5cbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcblxuICAgICAgICB9KTtcblxuICAgIH1cbiAgICBmdW5jdGlvbiBmbGFzaEJvcmRlcihlbGVtZW50LCBpc1N1Y2Nlc3MpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBpc1N1Y2Nlc3MgPyAnI0E4RTZDRicgOiAnI0YwODA4MCc7XG4gICAgICAgIC8vIFNldCBhIHRpbWVvdXQgdG8gcmVtb3ZlIHRoZSBib3JkZXIgYWZ0ZXIgMiBzZWNvbmRzXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEJvb2xlYW5EYXRhKGNvbHVtbk5hbWUpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgZGF0YVtcImluX291bmNlc1wiXSA9IGZhbHNlO1xuICAgICAgICBkYXRhW1wiaW5fbGJzXCJdID0gZmFsc2U7XG4gICAgICAgIGRhdGFbXCJpbl9ncmFtc1wiXSA9IGZhbHNlO1xuICAgICAgICBkYXRhW1wiaW5fa2lsb3NcIl0gPSBmYWxzZTtcbiAgICAgICAgc3dpdGNoIChjb2x1bW5OYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiaW5fb3VuY2VzXCI6XG4gICAgICAgICAgICAgICAgZGF0YVtcImluX291bmNlc1wiXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaW5fbGJzXCI6XG4gICAgICAgICAgICAgICAgZGF0YVtcImluX2xic1wiXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaW5fZ3JhbXNcIjpcbiAgICAgICAgICAgICAgICBkYXRhW1wiaW5fZ3JhbXNcIl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImluX2tpbG9zXCI6XG4gICAgICAgICAgICAgICAgZGF0YVtcImluX2tpbG9zXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIC8vIHRoaXMud2luZG93LnVwZGF0ZUxpc3RJdGVtID0gZnVuY3Rpb24gdXBkYXRlTGlzdEl0ZW0oZWxlbWVudCkge1xuICAgIC8vICAgICBsZXQgY29sdW1uTmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4tbmFtZVwiKTtcbiAgICAvLyAgICAgbGV0IHZhbHVlID0gZWxlbWVudC52YWx1ZTtcbiAgICAvLyAgICAgbGV0IGlkID0gZWxlbWVudC5pZDtcbiAgICAvLyAgICAgbGV0IGlkQXJyID0gaWQuc3BsaXQoXCItXCIpO1xuICAgIC8vICAgICBsZXQgYXJyTGVuZ3RoID0gaWRBcnIubGVuZ3RoO1xuICAgIC8vICAgICBsZXQgcm93ID0gaWRBcnJbYXJyTGVuZ3RoIC0gMV07XG4gICAgLy8gICAgIGxldCBpdGVtSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlkLVwiICsgcm93KTtcbiAgICAvLyAgICAgbGV0IGl0ZW1JZFZhbHVlID0gaXRlbUlkLnZhbHVlO1xuICAgIC8vICAgICBsZXQgbGlzdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0SWRcIikudmFsdWU7XG4gICAgLy8gICAgIGxldCB1cmwgPSBcIi9saXN0LWl0ZW1cIjtcbiAgICAvLyAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAvLyAgICAgbGV0IHVzZXJJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcklkXCIpLnZhbHVlO1xuICAgIC8vICAgICBsZXQgY3JlYXRlID0gdHJ1ZTtcbiAgICAvLyAgICAgbGV0IGlzTWFzdGVyTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpc01hc3RlcicpLnZhbHVlO1xuICAgIC8vICAgICBsZXQgaXNOZXdSb3cgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5ld1Jvdy0ke3Jvd31gKSAhPT0gbnVsbCkgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbmV3Um93LSR7cm93fWApLnZhbHVlIDogZmFsc2UgO1xuICAgIC8vICAgICBkYXRhW2NvbHVtbk5hbWVdID0gdmFsdWU7XG5cbiAgICAvLyAgICAgaWYgKGNvbHVtbk5hbWUuc3Vic3RyaW5nKDAsIDMpID09PSBcImluX1wiKSB7XG4gICAgLy8gICAgICAgICBkYXRhID0gZ2V0Qm9vbGVhbkRhdGEoY29sdW1uTmFtZSk7XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBkYXRhW1wibGlzdF9pZFwiXSA9IGxpc3RJZDtcbiAgICAvLyAgICAgZGF0YVtcInVzZXJfaWRcIl0gPSB1c2VySWQ7XG4gICAgLy8gICAgIGRhdGFbXCJpZFwiXSA9IGl0ZW1JZFZhbHVlO1xuICAgIC8vICAgICBpZihpdGVtSWRWYWx1ZS5zdWJzdHJpbmcoMCwzKSAhPT0gJ25ldycpe1xuICAgIC8vICAgICAgICAgY3JlYXRlID0gZmFsc2U7XG4gICAgLy8gICAgICAgICB1cmwgPSB1cmwgKycvJysgaXRlbUlkVmFsdWU7XG4gICAgLy8gICAgICAgICBpZihpc01hc3Rlckxpc3QgPT09ICd0cnVlJyl7XG4gICAgLy8gICAgICAgICAgICAgZGF0YVsndXBkYXRlTWFzdGVyJ10gPSB0cnVlO1xuICAgIC8vICAgICAgICAgfWVsc2UgaWYoaXNOZXdSb3cpe1xuICAgIC8vICAgICAgICAgICAgIGRhdGFbJ2lzTmV3Um93J10gPSB0cnVlO1xuICAgIC8vICAgICAgICAgfVxuXG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBheGlvc1xuICAgIC8vICAgICAgICAgLnBvc3QodXJsLCBkYXRhLCBpdGVtSWQpXG4gICAgLy8gICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgbGV0IHJlc0RhdGEgPSByZXMuZGF0YTtcbiAgICAvLyAgICAgICAgICAgICBpZihyZXNEYXRhLnN0YXR1cyA9PT0gJzEnKXtcblxuICAgIC8vICAgICAgICAgICAgICAgICBmbGFzaEJvcmRlcihlbGVtZW50LCB0cnVlKTtcblxuICAgIC8vICAgICAgICAgICAgICAgICBpZihjcmVhdGUpe1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgaXRlbUlkLnZhbHVlID0gcmVzRGF0YS5uZXdJZDtcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgICAgICBnZXREZWxldGVCdG5EYXRhKGl0ZW1JZC52YWx1ZSxyb3cpO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICBlbHNle1xuICAgIC8vICAgICAgICAgICAgICAgICBmbGFzaEJvcmRlcihlbGVtZW50LCBmYWxzZSk7XG4gICAgLy8gICAgICAgICAgICAgICAgIGFsZXJ0KHJlc0RhdGEubXNnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgIC8vICAgICAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgfSlcbiAgICAvLyAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgZmxhc2hCb3JkZXIoZWxlbWVudCwgdHJ1ZSk7XG4gICAgLy8gICAgICAgICAgICAgYWxlcnQoXCJGYWlsZWQgdG8gdXBkYXRlIGxpc3QgaXRlbS4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIik7XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIC8vICAgICAgICAgfSk7XG5cbiAgICAvLyAgICAgaWYoaXNNYXN0ZXJMaXN0ID09PSAnZmFsc2UnKXtcbiAgICAvLyAgICAgICAgIHVwZGF0ZVRvdGFsTGlzdFdlaWdodHMoKTtcbiAgICAvLyAgICAgfVxuXG5cbiAgICAvLyB9O1xuXG4gICAgdGhpcy53aW5kb3cudXBkYXRlTGlzdEl0ZW0gPSBmdW5jdGlvbiB1cGRhdGVMaXN0SXRlbShlbGVtZW50KSB7XG4gICAgICAgIC8vIENoZWNraW5nIGlmIGVsZW1lbnQgaXMgYSB2YWxpZCBET00gZWxlbWVudFxuICAgICAgICBpZiAoIWVsZW1lbnQgfHwgIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSW52YWxpZCBlbGVtZW50IHByb3ZpZGVkIHRvIHVwZGF0ZUxpc3RJdGVtLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb2x1bW5OYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIpO1xuICAgICAgICBsZXQgdmFsdWUgPSBlbGVtZW50LnZhbHVlO1xuICAgICAgICBsZXQgaWQgPSBlbGVtZW50LmlkO1xuICAgICAgICBsZXQgaWRBcnIgPSBpZC5zcGxpdChcIi1cIik7XG5cbiAgICAgICAgLy8gRW5zdXJlIHRoZSBJRCBhcnJheSBoYXMgYXQgbGVhc3Qgb25lIGVsZW1lbnQgYmVmb3JlIGFjY2Vzc2luZ1xuICAgICAgICBpZiAoaWRBcnIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSW52YWxpZCBJRCBmb3JtYXQuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJvdyA9IGlkQXJyW2lkQXJyLmxlbmd0aCAtIDFdO1xuICAgICAgICBsZXQgaXRlbUlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZC1cIiArIHJvdyk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgaXRlbUlkIGV4aXN0c1xuICAgICAgICBpZiAoIWl0ZW1JZCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRWxlbWVudCB3aXRoIElEICdpZC0ke3Jvd30nIG5vdCBmb3VuZC5gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpdGVtSWRWYWx1ZSA9IGl0ZW1JZC52YWx1ZTtcbiAgICAgICAgbGV0IGxpc3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdElkXCIpPy52YWx1ZSB8fCBcIlwiOyAvLyBPcHRpb25hbCBjaGFpbmluZyB0byBwcmV2ZW50IGVycm9yc1xuICAgICAgICBsZXQgdXJsID0gXCIvbGlzdC1pdGVtXCI7XG4gICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgIGxldCB1c2VySWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJJZFwiKT8udmFsdWUgfHwgXCJcIjtcbiAgICAgICAgbGV0IGNyZWF0ZSA9IHRydWU7XG4gICAgICAgIGxldCBpc01hc3Rlckxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXNNYXN0ZXInKT8udmFsdWUgPT09ICd0cnVlJzsgLy8gU3RyaWN0IGNvbXBhcmlzb24gZm9yIGJldHRlciBoYW5kbGluZ1xuICAgICAgICBsZXQgaXNOZXdSb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbmV3Um93LSR7cm93fWApID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5ld1Jvdy0ke3Jvd31gKS52YWx1ZSA6IGZhbHNlO1xuICAgICAgICBkYXRhW2NvbHVtbk5hbWVdID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKGNvbHVtbk5hbWUuc3RhcnRzV2l0aChcImluX1wiKSkgeyAvLyBVc2luZyBzdGFydHNXaXRoIGZvciBiZXR0ZXIgcmVhZGFiaWxpdHlcbiAgICAgICAgICAgIGRhdGEgPSBnZXRCb29sZWFuRGF0YShjb2x1bW5OYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFzc2lnbiBhZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gZGF0YSBvYmplY3RcbiAgICAgICAgZGF0YVtcImxpc3RfaWRcIl0gPSBsaXN0SWQ7XG4gICAgICAgIGRhdGFbXCJ1c2VyX2lkXCJdID0gdXNlcklkO1xuICAgICAgICBkYXRhW1wiaWRcIl0gPSBpdGVtSWRWYWx1ZTtcblxuICAgICAgICAvLyBCdWlsZCBVUkwgYW5kIHByZXBhcmUgZm9yIGl0ZW0gY3JlYXRpb24gb3IgdXBkYXRlXG4gICAgICAgIGlmIChpdGVtSWRWYWx1ZS5zdGFydHNXaXRoKCduZXcnKSkge1xuICAgICAgICAgICAgY3JlYXRlID0gdHJ1ZTsgLy8gQ3JlYXRlIGl0ZW0gaWYgSUQgaW5kaWNhdGVzIG5ld1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3JlYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB1cmwgKz0gJy8nICsgaXRlbUlkVmFsdWU7IC8vIEFwcGVuZCB0aGUgaXRlbSBJRCB0byB0aGUgVVJMXG4gICAgICAgICAgICBpZiAoaXNNYXN0ZXJMaXN0KSB7XG4gICAgICAgICAgICAgICAgZGF0YVsndXBkYXRlTWFzdGVyJ10gPSB0cnVlOyAvLyBTZXQgZmxhZyBmb3IgbWFzdGVyIGxpc3QgdXBkYXRlXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzTmV3Um93KSB7XG4gICAgICAgICAgICAgICAgZGF0YVsnaXNOZXdSb3cnXSA9IHRydWU7IC8vIFNldCBmbGFnIGZvciBuZXcgcm93XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQZXJmb3JtIHRoZSBQT1NUIHJlcXVlc3RcbiAgICAgICAgYXhpb3MucG9zdCh1cmwsIGRhdGEpIC8vIFJlbW92aW5nIGl0ZW1JZCBmcm9tIHBvc3QgYXJndW1lbnRzXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc0RhdGEgPSByZXMuZGF0YTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXNEYXRhLnN0YXR1cyA9PT0gJzEnKSB7XG4gICAgICAgICAgICAgICAgICAgIGZsYXNoQm9yZGVyKGVsZW1lbnQsIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjcmVhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1JZC52YWx1ZSA9IHJlc0RhdGEubmV3SWQ7IC8vIFVwZGF0ZSBpdGVtIHZhbHVlIHdpdGggbmV3IElEXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZ2V0RGVsZXRlQnRuRGF0YShpdGVtSWQudmFsdWUsIHJvdyk7IC8vIFVwZGF0ZSBkZWxldGUgYnV0dG9uIGRhdGFcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmbGFzaEJvcmRlcihlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KHJlc0RhdGEubXNnIHx8IFwiVXBkYXRlIGZhaWxlZCwgcGxlYXNlIGNoZWNrIHlvdXIgaW5wdXQuXCIpOyAvLyBQcm92aWRlIHVzZXIgZmVlZGJhY2tcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBFbmhhbmNlZCBlcnJvciBoYW5kbGluZ1xuICAgICAgICAgICAgICAgIGZsYXNoQm9yZGVyKGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhbGVydChcIkZhaWxlZCB0byB1cGRhdGUgbGlzdCBpdGVtLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVXBkYXRlIGVycm9yOlwiLCBlcnIpOyAvLyBJbXByb3ZlZCBlcnJvciBsb2dnaW5nXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAvLyBVcGRhdGUgdG90YWwgbGlzdCB3ZWlnaHRzIGNvbmRpdGlvbmFsbHlcbiAgICAgICAgaWYgKCFpc01hc3Rlckxpc3QpIHtcbiAgICAgICAgICAgIHVwZGF0ZVRvdGFsTGlzdFdlaWdodHMoKTtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRvdGFsTGlzdFdlaWdodHMoKSB7XG4gICAgICAgIGxldCB3ZWlnaHRzRm9yUFcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvci10b3RhbC1saXN0LXdlaWdodFwiKTtcbiAgICAgICAgbGV0IGJhc2VXZWlnaHQgPSAwO1xuICAgICAgICBsZXQgdG90YWxQYWNrV2VpZ2h0ID0gMDtcbiAgICAgICAgbGV0IG1heFBhY2tXZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1heFBhY2tXZWlnaHRcIikudmFsdWU7XG4gICAgICAgIGxldCBjbGFzc1dhcm5pbmdWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGFzc1dhcm5pbmdWYWx1ZScpLnZhbHVlO1xuICAgICAgICBsZXQgdW9tVGV4dCA9IFwiTEJTXCI7XG4gICAgICAgIHdlaWdodHNGb3JQVy5mb3JFYWNoKGZ1bmN0aW9uICh3ZWlnaHRGb3JQVykge1xuICAgICAgICAgICAgbGV0IGlkID0gd2VpZ2h0Rm9yUFcuaWQ7XG4gICAgICAgICAgICBsZXQgaWRBcnIgPSBpZC5zcGxpdChcIi1cIik7XG4gICAgICAgICAgICBsZXQgYXJyTGVuZ3RoID0gaWRBcnIubGVuZ3RoO1xuICAgICAgICAgICAgbGV0IHJvdyA9IGlkQXJyW2Fyckxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgbGV0IHBhY2tlZEFtb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgICAgICAgIFwicGFja2VkQW1vdW50LVwiICsgcm93XG4gICAgICAgICAgICApLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGNvbnZlcnRlciA9IDE7XG4gICAgICAgICAgICBsZXQgcm93V2VpZ2h0ID0gMDtcbiAgICAgICAgICAgIGxldCBpdGVtV2VpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtV2VpZ2h0LVwiICsgcm93KS52YWx1ZTtcbiAgICAgICAgICAgIGxldCB1b20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbVwiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBpdGVtQ2F0ZWdvcnlFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgICAgICAgXCJpdGVtQ2F0ZWdvcnktXCIgKyByb3dcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGxldCBpdGVtQ2F0ZWdvcnkgPSBcIlwiO1xuICAgICAgICAgICAgaWYgKGl0ZW1DYXRlZ29yeUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpdGVtQ2F0ZWdvcnkgPSBpdGVtQ2F0ZWdvcnlFbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXRlbUNhdGVnb3J5ID09PSB1bmRlZmluZWQgfHwgaXRlbUNhdGVnb3J5ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaXRlbUNhdGVnb3J5ID0gXCJcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHVvbSA9PT0gXCJ1c1wiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tLW96LVwiICsgcm93KS5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnRlciA9IG91bmNlQ29udmVydGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdW9tVGV4dCA9IFwiS0dcIjtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tLWdyYW0tXCIgKyByb3cpLmNoZWNrZWQgPT09IHRydWVcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgY29udmVydGVyID0gZ3JhbUNvbnZlcnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJvd1dlaWdodCA9ICtwYWNrZWRBbW91bnQgKiAoK2l0ZW1XZWlnaHQgLyBjb252ZXJ0ZXIpO1xuICAgICAgICAgICAgdG90YWxQYWNrV2VpZ2h0ID0gdG90YWxQYWNrV2VpZ2h0ICsgcm93V2VpZ2h0O1xuXG4gICAgICAgICAgICBpZiAoaXRlbUNhdGVnb3J5ICE9PSBcImNvbnN1bWFibGVzXCIpIHtcbiAgICAgICAgICAgICAgICBiYXNlV2VpZ2h0ID0gYmFzZVdlaWdodCArIHJvd1dlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCtiYXNlV2VpZ2h0ID4gK21heFBhY2tXZWlnaHQpIHtcbiAgICAgICAgICAgIGxldCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWlnaHRXYXJuaW5nLWRpdlwiKTtcbiAgICAgICAgICAgIGRpdkVsZW1lbnQuaW5uZXJUZXh0ID1cIkJhc2Ugd2VpZ2h0IChcIiArICBiYXNlV2VpZ2h0LnRvRml4ZWQoMykgK1wiIFwiICt1b21UZXh0ICtcIikgZXhjZWVkZXMgdGhlIHdlaWdodCBmb3IgdGhlICdcIiArY2xhc3NXYXJuaW5nVmFsdWUrXCInIHN0eWxlIG9mIGhpa2luZy5cIjtcblxuICAgICAgICAgICAgZGl2RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWlnaHRXYXJuaW5nLWRpdlwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2VXZWlnaHRcIikudmFsdWUgPSBiYXNlV2VpZ2h0LnRvRml4ZWQoMyk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG90YWxQYWNrV2VpZ2h0XCIpLnZhbHVlID1cbiAgICAgICAgICAgIHRvdGFsUGFja1dlaWdodC50b0ZpeGVkKDMpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVMaXN0SXRlbUlucHV0KFxuICAgICAgICB0eXBlLFxuICAgICAgICBuYW1lQmFzZSxcbiAgICAgICAgcm93LFxuICAgICAgICBjb2x1bW5OYW1lLFxuICAgICAgICBsaXN0ZW4gPSB0cnVlXG4gICAgKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBlbGVtZW50LnR5cGUgPSB0eXBlO1xuICAgICAgICBlbGVtZW50Lm5hbWUgPSBuYW1lQmFzZSArIFwiW11cIjtcbiAgICAgICAgZWxlbWVudC5pZCA9IG5hbWVCYXNlICsgXCItXCIgKyByb3c7XG4gICAgICAgIGVsZW1lbnQudmFsdWUgPSBcIlwiO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uLW5hbWVcIiwgY29sdW1uTmFtZSk7XG4gICAgICAgIGlmKGxpc3Rlbil7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUxpc3RJdGVtKGVsZW1lbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldENhdGVncm95U2VsZWN0KHJvdywgZ3JvdXBDYXRlZ29yeSA9IG51bGwsIGxpc3RlbiA9IHRydWUpIHtcblxuICAgICAgICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgc2VsZWN0LmlkID0gXCJJdGVtQ2F0ZWdvcnktXCIgKyByb3c7XG4gICAgICAgIHNlbGVjdC5uYW1lID0gXCJpdGVtQ2F0ZWdvcnktXCIgKyByb3c7XG4gICAgICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIsIFwiaXRlbV9jYXRlZ29yeVwiKTtcbiAgICAgICAgc2VsZWN0LmNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCI7XG5cbiAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IFwiXCI7XG4gICAgICAgIG9wdGlvbi50ZXh0ID0gXCJDaG9vc2VcIjtcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIGxldCBvcHRpb25MaXN0O1xuXG4gICAgICAgIG9wdGlvbkxpc3QgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2xpc3QtaXRlbS1jYXRlZ29yaWVzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgZXJyb3JcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cblxuICAgICAgICBvcHRpb25MaXN0KCkudGhlbigoZGF0YSkgPT4ge1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBkYXRhW2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gZGF0YVtpXS5jYXRlZ29yeTtcbiAgICAgICAgICAgICAgICBpZiAoZ3JvdXBDYXRlZ29yeSAhPSBudWxsICYmIGRhdGFbaV0udmFsdWUgPT09IGdyb3VwQ2F0ZWdvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZihsaXN0ZW4pe1xuICAgICAgICAgICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUxpc3RJdGVtKHNlbGVjdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIHNlbGVjdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gbWV0cmljUmFkaW9Ub1VzKCkge1xuICAgICAgICBsZXQgaW5wdXRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWV0cmljLXJhZGlvXCIpO1xuICAgICAgICBpbnB1dEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGlucHV0RWxlbWVudCkge1xuICAgICAgICAgICAgbGV0IGlkQXJyID0gaW5wdXRFbGVtZW50LmlkLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgICAgIGxldCB1b20gPSBpZEFyclsxXTtcbiAgICAgICAgICAgIGxldCByb3cgPSBpZEFycltpZEFyci5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50VHlwZSA9IGlucHV0RWxlbWVudC50eXBlO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRUYWcgPSBpbnB1dEVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICBsZXQgbmV3RWxlbWVudDtcblxuICAgICAgICAgICAgaWYgKGVsZW1lbnRUeXBlID09PSBcInJhZGlvXCIgJiYgdW9tID09PSBcImdyYW1cIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVSYWRpbyhcImluX291bmNlc1wiLCBcIk9aXCIsIFwib3pcIiwgcm93LCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFR5cGUgPT09IFwicmFkaW9cIiAmJiB1b20gPT09IFwia2dcIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVSYWRpbyhcImluX2xic1wiLCBcIkxCU1wiLCBcImxic1wiLCByb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VGFnID09PSBcImxhYmVsXCIgJiYgdW9tID09PSBcImdyYW1cIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVMYWJlbChcIk9aXCIsIFwidW9tLW96LVwiICsgcm93LCBcIm96XCIsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUYWcgPT09IFwibGFiZWxcIiAmJiB1b20gPT09IFwia2dcIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVMYWJlbChcIkxCU1wiLCBcInVvbS1sYnMtXCIgKyByb3csIFwibGJzXCIsIHJvdyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuZXdFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKFxuICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdXNSYWRpb1RvTWV0cmljKCkge1xuICAgICAgICBsZXQgaW5wdXRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudXMtcmFkaW9cIik7XG4gICAgICAgIGlucHV0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXRFbGVtZW50KSB7XG4gICAgICAgICAgICBsZXQgaWRBcnIgPSBpbnB1dEVsZW1lbnQuaWQuc3BsaXQoXCItXCIpO1xuICAgICAgICAgICAgbGV0IHVvbSA9IGlkQXJyWzFdO1xuICAgICAgICAgICAgbGV0IHJvdyA9IGlkQXJyW2lkQXJyLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRUeXBlID0gaW5wdXRFbGVtZW50LnR5cGU7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFRhZyA9IGlucHV0RWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBsZXQgbmV3RWxlbWVudDtcblxuICAgICAgICAgICAgaWYgKGVsZW1lbnRUeXBlID09PSBcInJhZGlvXCIgJiYgdW9tID09PSBcIm96XCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlUmFkaW8oXCJpbl9ncmFtc1wiLCBcIkdSXCIsIFwiZ3JhbVwiLCByb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VHlwZSA9PT0gXCJyYWRpb1wiICYmIHVvbSA9PT0gXCJsYnNcIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVSYWRpbyhcImluX2tpbG9zXCIsIFwiS0dcIiwgXCJrZ1wiLCByb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VGFnID09PSBcImxhYmVsXCIgJiYgdW9tID09PSBcIm96XCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlTGFiZWwoXCJHXCIsIFwidW9tLWdyYW0tXCIgKyByb3csIFwiZ3JhbVwiLCByb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VGFnID09PSBcImxhYmVsXCIgJiYgdW9tID09PSBcImxic1wiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZUxhYmVsKFwiS0dcIiwgXCJ1b20ta2ctXCIgKyByb3csIFwia2dcIiwgcm93KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5ld0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQoXG4gICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVSYWRpbyhkYXRhQ29sdW1uTmFtZSwgbGFiZWwsIHVvbSwgcm93KSB7XG4gICAgICAgIGxldCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgcmFkaW8uY2xhc3NOYW1lID1cbiAgICAgICAgICAgIFwiZm9ybS1jaGVjay1pbnB1dFwiICtcbiAgICAgICAgICAgICh1b20gPT09IFwiZ3JhbVwiIHx8IHVvbSA9PT0gXCJrZ1wiID8gXCIgbWV0cmljLXJhZGlvXCIgOiBcIiB1cy1yYWRpb1wiKTtcbiAgICAgICAgcmFkaW8udHlwZSA9IFwicmFkaW9cIjtcbiAgICAgICAgcmFkaW8ubmFtZSA9IFwidW9tLVwiICsgcm93ICsgXCJbXVwiO1xuICAgICAgICByYWRpby5pZCA9IFwidW9tLVwiICsgdW9tICsgXCItXCIgKyByb3c7XG4gICAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uLW5hbWVcIiwgZGF0YUNvbHVtbk5hbWUpO1xuXG4gICAgICAgIGlmICh1b20gPT09IFwiZ3JhbVwiIHx8IHVvbSA9PT0gXCJvelwiKSB7XG4gICAgICAgICAgICByYWRpby5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnZlcnRNZWFzdXJlbWVudChyb3cpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJhZGlvO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVMYWJlbChpbm5lckh0bWwsIGh0bWxGb3IsIHVvbSwgcm93LCBsaW5lTGFiZWwgPSBmYWxzZSkge1xuICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxhYmVsLmNsYXNzTmFtZSA9XG4gICAgICAgICAgICBcImZvcm0tY2hlY2stbGFiZWxcIiArXG4gICAgICAgICAgICAodW9tID09PSBcImdyYW1cIiB8fCB1b20gPT09IFwia2dcIiA/IFwiIG1ldHJpYy1yYWRpb1wiIDogXCIgdXMtcmFkaW9cIik7XG4gICAgICAgIGxhYmVsLmh0bWxGb3IgPSBodG1sRm9yO1xuICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSBpbm5lckh0bWw7XG4gICAgICAgIGlmICghbGluZUxhYmVsKSB7XG4gICAgICAgICAgICBsYWJlbC5pZCA9IFwidW9tLVwiICsgdW9tICsgXCItbGFiZWwtXCIgKyByb3c7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYWJlbC5pZCA9IFwibGluZS11b20tbGFiZWwtXCIgKyByb3c7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgfVxuXG4gICAgdGhpcy53aW5kb3cudXBkYXRlTGlzdCA9IGZ1bmN0aW9uIHVwZGF0ZUxpc3QoZWxlbWVudCwgbGlzdElkKSB7XG4gICAgICAgIGxldCBjb2x1bW5OYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIpO1xuICAgICAgICBsZXQgdmFsdWUgPSBlbGVtZW50LnZhbHVlO1xuICAgICAgICBsZXQgdXJsID0gXCIvZ2Vhci1saXN0L1wiICsgbGlzdElkO1xuXG4gICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgIGRhdGFbY29sdW1uTmFtZV0gPSB2YWx1ZTtcblxuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QodXJsLCBkYXRhLCBsaXN0SWQpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYocmVzLmRhdGEuc3RhdHVzID09PSAnMScpe1xuICAgICAgICAgICAgICAgICAgICBmbGFzaEJvcmRlcihlbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgZmxhc2hCb3JkZXIoZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBhbGVydChyZXMuZGF0YS5tc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBhbGVydChyZXMuZGF0YS5tc2cpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJGYWlsZWQgdG8gdXBkYXRlIGxpc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIGlmIChjb2x1bW5OYW1lID09PSBcInNvcnRcIiB8fCBjb2x1bW5OYW1lID09PSBcImxpc3RfY2xhc3NcIiB8fCBjb2x1bW5OYW1lID09PSAnbGlzdF9pdGVtcycpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW0tY29sbGFwc2libGUtaGVhZGVyXCIpO1xuXG4gICAgaGVhZGVycy5mb3JFYWNoKChoZWFkZXIpID0+IHtcbiAgICAgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gaGVhZGVyLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgICAgIGNvbnN0IGFycm93ID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbS1hcnJvd1wiKTtcbiAgICAgICAgICAgIGlmIChjb250ZW50LmNsYXNzTGlzdC5jb250YWlucyhcIm9wZW5cIikpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLnBhZGRpbmcgPSBcIjAgMTBweFwiO1xuICAgICAgICAgICAgICAgIGFycm93LmlubmVySFRNTCA9IFwiJiM5NjYwXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBjb250ZW50LnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLnBhZGRpbmcgPSBcIjEwcHhcIjtcbiAgICAgICAgICAgICAgICBhcnJvdy5pbm5lckhUTUwgPSBcIiYjOTY1MFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGxldCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI21hc3Rlci1pdGVtLXRhYmxlIGlucHV0XCIpO1xuXG4gICAgaW5wdXRzLmZvckVhY2goZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICAgIGlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIGxldCBsaXN0Q2hhcnRidG4gPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0Q2hhcnRCdG5cIik7XG4gICAgaWYobGlzdENoYXJ0YnRuICE9PSBudWxsKXtcbiAgICAgICAgZG9jdW1lbnQgLmdldEVsZW1lbnRCeUlkKFwibGlzdENoYXJ0QnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgbGlzdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0SWRcIikudmFsdWU7XG4gICAgICAgICAgICBsZXQgdXJsID0gXCIvZ2Vhci1saXN0LWFuYWx5dGljcy9cIiArIGxpc3RJZDtcblxuICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAuZ2V0KHVybClcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGFydFN0YXR1cyA9IENoYXJ0LmdldENoYXJ0KFwiZ2VhckNoYXJ0XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFydFN0YXR1cyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0U3RhdHVzLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2VhckNoYXJ0XCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2hhcnREYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YS5jaGFydERhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkb3VnaG51dFwiLCAvLyBDaGFydCB0eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiBjaGFydERhdGEubGFiZWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxhYmVsOiBsaXN0TmFtZSArICdCcmVhayBEb3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGNoYXJ0RGF0YS53ZWlnaHRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjaGFydERhdGEuY29sb3JzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Zlck9mZnNldDogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1dG91dDogNDUsIC8vIEFkanVzdCB0aGUgY3V0b3V0IHBlcmNlbnRhZ2UgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogMTUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YWxhYmVsczogZmFsc2UsIC8vIFJlbW92aW5nIHRoaXMgbGluZSBzaG93cyB0aGUgZGF0YWxhYmVscyBhZ2FpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVSb3RhdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVTY2FsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgYmFzZVdlaWdodCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2VXZWlnaHRcIikudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0b3RhbFBhY2tXZWlnaHQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3RhbFBhY2tXZWlnaHRcIikudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxCYXNlV2VpZ2h0XCIpLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VXZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxUb3RhbFdlaWdodFwiKS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFBhY2tXZWlnaHQ7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgIH1cbiAgICB0aGlzLndpbmRvdy5zaG93Q29udnJzaW9uQWxlcnQgPSBmdW5jdGlvbiBzaG93Q29udnJzaW9uQWxlcnQoKXtcbiAgICAgICAgYWxlcnQoJ0NoYW5naW5nIHRoaXMgdmFsdWUgd2lsbCBhbHNvIHVwZGF0ZSB0aGUgdW5pdHMgb2YgbWVhc3VyZSBhbmQgYXNzb2NpYXRlZCB2YWx1ZXMgZm9yIGFueSBpdGVtIG9uIHRoaXMgZ2VhciBsaXN0LicpO1xuICAgIH1cbiAgICB0aGlzLndpbmRvdy5jb25maXJtRGVsZXRlID0gZnVuY3Rpb24gY29uZmlybURlbGV0ZShlbGVtZW50KSB7XG5cbiAgICAgICAgbGV0IGlzTWFzdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzTWFzdGVyJykudmFsdWU7XG4gICAgICAgIGxldCBocmVmID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaHJlZicpO1xuICAgICAgICBsZXQgbmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9iamVjdC1uYW1lJyk7XG4gICAgICAgIGxldCBvYmplY3RUeXBlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb2JqZWN0LXR5cGUnKTtcbiAgICAgICAgbGV0IGFuY2hvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGVPYmplY3RBbmNob3InKTtcbiAgICAgICAgbGV0IG1vZGFsQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGVNb2RhbEJvZHknKTtcbiAgICAgICAgbGV0IHRleHQgPSBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSAke29iamVjdFR5cGV9ICR7bmFtZX0/YDtcbiAgICAgICAgbGV0IGhlbHBlckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGVIZWxwZXInKTtcbiAgICAgICAgbGV0IGhlbHB0ZXh0O1xuICAgICAgICBoZWxwZXJEaXYuaW5uZXJUZXh0ID0gJyc7XG5cblxuICAgICAgICBpZihvYmplY3RUeXBlID09PSAnaXRlbTonICYmIGlzTWFzdGVyID09PSAnZmFsc2UnKXtcbiAgICAgICAgICAgIGxldCBsaXN0TmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtbmFtZScpO1xuICAgICAgICAgICAgaGVscHRleHQgPSBgKkRlbGV0aW5nIGFuIGl0ZW0gZnJvbSB0aGlzIGxpc3QgKCR7bGlzdE5hbWV9KSB3aWxsIG5vdCBkZWxldGUgaXQgdGhlICdZb3VyIEdlYXInIHNlY3Rpb24uYDtcbiAgICAgICAgICAgIGhlbHBlckRpdi5hcHBlbmQoaGVscHRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYob2JqZWN0VHlwZSA9PT0gJ2l0ZW06JyAmJiBpc01hc3RlciA9PT0gJ3RydWUnKXtcbiAgICAgICAgICAgIGhlbHB0ZXh0ID0gYCpEZWxldGluZyBhbiBpdGVtIGZyb20gdGhlICdZb3VyIEdlYXInIHNlY3Rpb24gd2lsbCBkZWxldGUgaXQgZnJvbSBhbGwgJ0dlYXIgTGlzdHMnLmA7XG4gICAgICAgICAgICBoZWxwZXJEaXYuYXBwZW5kKGhlbHB0ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKG9iamVjdFR5cGUgPT09ICdjYXRlZ29yeTonICYmIGlzTWFzdGVyID09PSdmYWxzZScpe1xuICAgICAgICAgICAgdGV4dCA9IGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIGFsbCBpdGVtcyBpbiB0aGUgJHtuYW1lfSBjYXRlZ29yeSBmcm9tIHRoaXMgbGlzdD9gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYob2JqZWN0VHlwZSA9PT0gJ2NhdGVnb3J5OicgJiYgaXNNYXN0ZXIgPT09J3RydWUnKXtcbiAgICAgICAgICAgIHRleHQgPSBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBhbGwgaXRlbXMgaW4gdGhlICR7bmFtZX0gY2F0ZWdvcnkgZnJvbSBBTEwgeW91ciBsaXN0cz9gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBoZWxwZXJEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgICAgICBtb2RhbEJvZHkuaW5uZXJIVE1MID0gdGV4dDtcbiAgICAgICAgYW5jaG9yLnNldEF0dHJpYnV0ZSgnaHJlZicsaHJlZik7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVSb3cocm93KXtcbiAgICAgICAgY29uc29sZS5sb2coJ2luIHJlbW92ZSByb3cnKTtcbiAgICAgICAgbGV0IHRhYmxlUm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHJvdy0ke3Jvd31gKVxuICAgICAgICAgICAgdGFibGVSb3cucmVtb3ZlKCk7XG5cbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlRGVsZXRlQnV0dG9uKHJvdykge1xuICAgICAgICBsZXQgaXNNYXN0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXNNYXN0ZXInKS52YWx1ZTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAnYnRuIGJ0bi1zbSBidG4tZGFuZ2VyJztcbiAgICAgICAgYnV0dG9uLnRpdGxlID0gJ0RlbGV0ZSBJdGVtJztcbiAgICAgICAgYnV0dG9uLmlkID1gZGVsZXRlSXRlbUJ0bi0ke3Jvd31gO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWhyZWYnLCcnKTtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1vYmplY3QtbmFtZScsJycpO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLW9iamVjdC1pZCcsJycpO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLW9iamVjdC10eXBlJywnaXRlbTonKTtcbiAgICAgICAgaWYoaXNNYXN0ZXIgPT09ICdmYWxzZScpe1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1saXN0LW5hbWUnLGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0TmFtZScpLnZhbHVlKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtbmFtZScsJ21hc3RlcicpO1xuICAgICAgICB9XG5cblxuICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICBpY29uLmNsYXNzTmFtZSA9ICdmYXMgZmEtdHJhc2gnO1xuXG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJlbW92ZVJvdyhyb3cpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBidXR0b247XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGVsZXRlQnRuRGF0YShpZCxyb3cpe1xuICAgICAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRlbGV0ZUl0ZW1CdG4tJHtyb3d9YCk7XG4gICAgICAgIGxldCB1cmwgPSBgL2xpc3QtaXRlbS8ke2lkfWA7XG5cbiAgICAgICAgYXhpb3NcbiAgICAgICAgLmdldCh1cmwpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgIT0gXCIxXCIpIHtcbiAgICAgICAgICAgICAgICBhbGVydChyZXMuZGF0YS5tc2cpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGl0ZW0gPSByZXMuZGF0YS5pdGVtO1xuICAgICAgICAgICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1ocmVmJyxgL3JlbW92ZS1saXN0LWl0ZW0vJHtpdGVtLmlkfWApO1xuICAgICAgICAgICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1vYmplY3QtbmFtZScsaXRlbS5pdGVtX25hbWUpO1xuICAgICAgICAgICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1vYmplY3QtaWQnLGl0ZW0uaWQpO1xuICAgICAgICAgICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1icy10b2dnbGUnLFwibW9kYWxcIilcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdGFyZ2V0JyxcIiNkZWxldGVBbGVydE1vZGFsXCIpO1xuICAgICAgICAgICAgZGVsZXRlQnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGNvbmZpcm1EZWxldGUoZGVsZXRlQnRuKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgYWxlcnQoZXJyKTtcbiAgICAgICAgfSk7XG5cblxuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc29ydGFibGVcIikuZm9yRWFjaChmdW5jdGlvbiAodGFibGUpIHtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlJZCA9IHRhYmxlLmdldEF0dHJpYnV0ZShcImRhdGEtY2F0ZWdvcnktaWRcIik7XG5cbiAgICAgICAgbmV3IFNvcnRhYmxlKHRhYmxlLnF1ZXJ5U2VsZWN0b3IoXCJ0Ym9keVwiKSwge1xuICAgICAgICAgICAgYW5pbWF0aW9uOiAxNTAsXG4gICAgICAgICAgICBvbkVuZDogZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgbmV3IG9yZGVyIG9mIGl0ZW1zXG4gICAgICAgICAgICAgICAgY29uc3Qgb3JkZXJlZElkcyA9IFtdO1xuICAgICAgICAgICAgICAgIHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0clwiKS5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJlZElkcy5wdXNoKHJvdy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIFNlbmQgdGhlIG5ldyBvcmRlciB0byB0aGUgc2VydmVyIHZpYSBBSkFYXG4gICAgICAgICAgICAgICAgdXBkYXRlSXRlbU9yZGVyKGNhdGVnb3J5SWQsIG9yZGVyZWRJZHMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gdXBkYXRlSXRlbU9yZGVyKGNhdGVnb3J5SWQsIG9yZGVyZWRJZHMpIHtcblxuICAgICAgICBsZXQgbGlzdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0SWRcIikudmFsdWU7XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIFwiWC1DU1JGLVRPS0VOXCI6IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKVxuICAgICAgICAgICAgICAgIC5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpLFxuICAgICAgICAgICAgY2F0ZWdvcnlfaWQ6IGNhdGVnb3J5SWQsXG4gICAgICAgICAgICBvcmRlcmVkX2lkczogb3JkZXJlZElkcyxcbiAgICAgICAgICAgIGxpc3RfaWQ6IGxpc3RJZCxcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgdXJsID0gXCIvdXBkYXRlLWxpc3Qtb3JkZXJcIjtcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC5wb3N0KHVybCwgZGF0YSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzICE9IFwiMVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KHJlcy5kYXRhLm1zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBzb3J0aW5nU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0QnlcIik7XG4gICAgICAgIGxldCBvcHRzID0gc29ydGluZ1NlbGVjdC5vcHRpb25zLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRzOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzb3J0aW5nU2VsZWN0Lm9wdGlvbnNbaV0udmFsdWUgPT0gXCJkcmFnX2Ryb3BcIikge1xuICAgICAgICAgICAgICAgIHNvcnRpbmdTZWxlY3Qub3B0aW9uc1tpXS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcGFyZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcmVudC1jb250YWluZXInKTtcblxuICAgIGlmKHBhcmVudENvbnRhaW5lciAhPT0gbnVsbCAmJiBwYXJlbnRDb250YWluZXIgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIFNvcnRhYmxlLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFyZW50LWNvbnRhaW5lcicpLCB7XG4gICAgICAgICAgICBhbmltYXRpb246IDE1MCxcbiAgICAgICAgICAgIGhhbmRsZTogJy5pdGVtLWNvbGxhcHNpYmxlLWhlYWRlcicsXG4gICAgICAgICAgICBnaG9zdENsYXNzOiAnc29ydGFibGUtZ2hvc3QnLFxuICAgICAgICAgICAgb25FbmQ6IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgICAgICAvLyBBZnRlciBzb3J0aW5nIGlzIGNvbXBsZXRlZCwgdXBkYXRlIHRoZSBwb3NpdGlvbnMgaW4gdGhlIGRhdGFiYXNlXG4gICAgICAgICAgICAgICAgdXBkYXRlQ2F0ZWdvcnlPcmRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQ2F0ZWdvcnlPcmRlcigpIHtcblxuICAgICAgICBjb25zdCBuZXdPcmRlciA9IFtdO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJhZ2dhYmxlLWNvbnRhaW5lcicpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG5cbiAgICAgICAgICAgIG5ld09yZGVyLnB1c2goe1xuICAgICAgICAgICAgICAgIGl0ZW1fY2F0ZWdvcnk6IGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWNhdGVnb3J5LXZhbHVlJyksXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlfb3JkZXI6IGluZGV4XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCB1cmwgPSBcIi91cGRhdGUtY2F0ZXJvZ3J5LW9yZGVyXCI7XG4gICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RJZFwiKS52YWx1ZTtcblxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgXCJYLUNTUkYtVE9LRU5cIjogZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpXG4gICAgICAgICAgICAgICAgLmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIiksXG4gICAgICAgICAgICBjYXRlZ29yeV9vcmRlcjogbmV3T3JkZXIsXG4gICAgICAgICAgICBsaXN0X2lkOiBsaXN0SWQsXG4gICAgICAgIH07XG4gICAgICAgIC8vYnJlYWsgb3V0IHBvc3RzIGFuZCBnZXQgY2FsbHMgdG8gb3duIGZ1bmN0aW9uc1xuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QodXJsLCBkYXRhKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cyAhPSBcIjFcIikge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChyZXMuZGF0YS5tc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGxldCBhc3NpZ25Ub0xpc3RNb2RhbCA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQXNzaWduSXRlbVRvTGlzdE1vZGFsJyk7XG5cbiAgICBpZihhc3NpZ25Ub0xpc3RNb2RhbCAhPT0gdW5kZWZpbmVkICYmIGFzc2lnblRvTGlzdE1vZGFsICE9PSBudWxsKXtcblxuICAgICAgICBhc3NpZ25Ub0xpc3RNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdoaWRlLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IHRhYmxlQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1hc3NpZ24taXRlbS10YWJsZS1ib2R5Jyk7XG4gICAgICAgICAgICB3aGlsZSh0YWJsZUJvZHkuZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICAgICAgdGFibGVCb2R5LnJlbW92ZUNoaWxkKHRhYmxlQm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbndpbmRvdy5heGlvcyA9IGF4aW9zO1xuXG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIk1vZGFsIiwiQ2hhcnQiLCJTb3J0YWJsZSIsImJvb3RzdHJhcCIsInJlcXVpcmUiLCJncmFtQ29udmVydGVyIiwib3VuY2VDb252ZXJ0ZXIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2hvd1Bhc3N3b3JkIiwiaWQiLCJwYXNzd29yZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRNYXN0ZXJMaXN0SXRlbSIsIm51bWJlck9mSXRlbXNUb0FkZCIsImxpbmVzVG9BZGQiLCJsaXN0QnlJdGVtcyIsImxpc3RlbiIsIml0ZW1UYWJsZSIsInJvdyIsImNyZWF0ZUVsZW1lbnQiLCJjZWxsMSIsIml0ZW1OYW1lIiwiY3JlYXRlTGlzdEl0ZW1JbnB1dCIsInBsYWNlaG9sZGVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2VsbDYiLCJkZWxldGVCdG4iLCJjcmVhdGVEZWxldGVCdXR0b24iLCJjZWxsMiIsIml0ZW1XZWlnaHQiLCJjZWxsMyIsInNlbGVjdCIsInNldEF0dHJpYnV0ZSIsImNsYXNzTmFtZSIsIm96T3B0aW9uIiwibGJzT3B0aW9uIiwiZ3JPcHRpb24iLCJrZ09wdGlvbiIsInRleHQiLCJhcHBlbmRDaGlsZCIsInNlbGVjdENlbGwiLCJjYXRlZ29yeVNlbGVjdCIsImdldENhdGVncm95U2VsZWN0IiwiYXBwZW5kIiwic2hvd0xpc3RBc3NpZ25Nb2RhbCIsIml0ZW1JZCIsInRhYmxlIiwiaGVhZGVyIiwiaW5uZXJIVE1MIiwidXJsIiwidXNlckxpc3RzIiwiYXhpb3MiLCJnZXQiLCJyZXMiLCJkYXRhIiwic3RhdHVzIiwiYWxlcnQiLCJtc2ciLCJsaXN0TmFtZUNlbGwiLCJhc3NpZ25DZWxsIiwiY2hlY2tib3giLCJpdGVtQXNzaWduZWQiLCJjaGVja2VkIiwiYXNzaWduVG9HZWFyTGlzdCIsImVsZW1lbnQiLCJsaXN0SWQiLCJnZXRBdHRyaWJ1dGUiLCJsaXN0X2lkIiwicG9zdCIsInJlc3BvbnNlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiYWRkTGlzdEl0ZW0iLCJjYXRlZ29yeWNvdW50ZXIiLCJ1bmRlZmluZWQiLCJncm91cENhdGVnb3J5IiwibGlzdFVPTSIsImZpbmFsSUVsZW1lbnQiLCJ0YWJsZUNhdGVnb3J5IiwidXNlcklkIiwiZmluYWxJIiwiY2VsbDAiLCJzY29wZSIsImNvdW50ZXIiLCJuZXdSb3ciLCJsaW5lVW9tQ2VsbCIsInJhZGlvMSIsInJhZGlvMiIsInJhZGlvTGFiZWwxIiwicmFkaW9MYWJlbDIiLCJyYWRpb0xhYmVsMyIsImNyZWF0ZVJhZGlvIiwiY3JlYXRlTGFiZWwiLCJjZWxsNCIsInBhY2tlZEFtb3VudCIsImNlbGw1IiwidG90YWxMaW5lV2VpZ2h0IiwiaWNvbkNlbGwiLCJpY29uIiwiYWRkRXZlbnRMaXN0ZW5lcldlaWdodENhbGMiLCJ1cGRhdGVVT00iLCJ1c1JhZGlvVG9NZXRyaWMiLCJtZXRyaWNSYWRpb1RvVXMiLCJuZWVkZWRGb3JXZWlnaHRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm5lZWRlZEZvcldlaWdodCIsImdldExpbmVUb3RhbFdlaWdodCIsImNvbnZlcnQiLCJ3ZWlnaHQiLCJ1b20iLCJsaW5lVG90YWxXZWlnaHRFbGVtZW50IiwibGluZVRvdGFsIiwidG9GaXhlZCIsInJlcGxhY2UiLCJ1cGRhdGVMaXN0SXRlbSIsImNvbnZlcnRNZWFzdXJlbWVudCIsImlzTWFzdGVyTGlzdCIsInRvdGFsV2VpZ2h0IiwidG90YWxMaW5lV2VpZ2h0VmFsdWUiLCJ3ZWlnaHRWYWx1ZSIsInNtYWxsIiwibGFyZ2UiLCJsYWJlbCIsImxhYmVsSFRNTCIsImFkZENhdGVnb3J5R3JvdXAiLCJjYXRlZ29yeSIsImNvbHVtbk5hbWUiLCJnZXRCb29sZWFuRGF0YSIsImxvY2F0aW9uIiwicmVsb2FkIiwiZXJyIiwiZmxhc2hCb3JkZXIiLCJpc1N1Y2Nlc3MiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInNldFRpbWVvdXQiLCJfZG9jdW1lbnQkZ2V0RWxlbWVudEIiLCJfZG9jdW1lbnQkZ2V0RWxlbWVudEIyIiwiX2RvY3VtZW50JGdldEVsZW1lbnRCMyIsIkhUTUxFbGVtZW50IiwiaWRBcnIiLCJzcGxpdCIsImNvbmNhdCIsIml0ZW1JZFZhbHVlIiwiaXNOZXdSb3ciLCJzdGFydHNXaXRoIiwicmVzRGF0YSIsIm5ld0lkIiwiZ2V0RGVsZXRlQnRuRGF0YSIsInVwZGF0ZVRvdGFsTGlzdFdlaWdodHMiLCJ3ZWlnaHRzRm9yUFciLCJiYXNlV2VpZ2h0IiwidG90YWxQYWNrV2VpZ2h0IiwibWF4UGFja1dlaWdodCIsImNsYXNzV2FybmluZ1ZhbHVlIiwidW9tVGV4dCIsIndlaWdodEZvclBXIiwiYXJyTGVuZ3RoIiwiY29udmVydGVyIiwicm93V2VpZ2h0IiwiaXRlbUNhdGVnb3J5RWxlbWVudCIsIml0ZW1DYXRlZ29yeSIsImRpdkVsZW1lbnQiLCJpbm5lclRleHQiLCJkaXNwbGF5IiwibmFtZUJhc2UiLCJvcHRpb24iLCJvcHRpb25MaXN0IiwiX3JlZiIsIl9jYWxsZWUiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwidDAiLCJzZWxlY3RlZCIsImlucHV0RWxlbWVudHMiLCJpbnB1dEVsZW1lbnQiLCJlbGVtZW50VHlwZSIsImVsZW1lbnRUYWciLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJuZXdFbGVtZW50IiwicGFyZW50RWxlbWVudCIsInJlcGxhY2VDaGlsZCIsImRhdGFDb2x1bW5OYW1lIiwicmFkaW8iLCJpbm5lckh0bWwiLCJodG1sRm9yIiwibGluZUxhYmVsIiwidXBkYXRlTGlzdCIsImhlYWRlcnMiLCJjb250ZW50IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiYXJyb3ciLCJxdWVyeVNlbGVjdG9yIiwiY29udGFpbnMiLCJyZW1vdmUiLCJtYXhIZWlnaHQiLCJwYWRkaW5nIiwic2Nyb2xsSGVpZ2h0IiwiaW5wdXRzIiwiaW5wdXQiLCJkaXNhYmxlZCIsImxpc3RDaGFydGJ0biIsImNoYXJ0U3RhdHVzIiwiZ2V0Q2hhcnQiLCJkZXN0cm95IiwiY3R4IiwiY2hhcnREYXRhIiwiSlNPTiIsInBhcnNlIiwibXlDaGFydCIsImxhYmVscyIsImRhdGFzZXRzIiwid2VpZ2h0cyIsImNvbG9ycyIsImJvcmRlcldpZHRoIiwiaG92ZXJPZmZzZXQiLCJvcHRpb25zIiwiY3V0b3V0IiwicmFkaXVzIiwibGVnZW5kIiwicGx1Z2lucyIsImRhdGFsYWJlbHMiLCJhbmltYXRpb24iLCJhbmltYXRlUm90YXRlIiwiYW5pbWF0ZVNjYWxlIiwidGV4dENvbnRlbnQiLCJzaG93Q29udnJzaW9uQWxlcnQiLCJjb25maXJtRGVsZXRlIiwiaXNNYXN0ZXIiLCJocmVmIiwib2JqZWN0VHlwZSIsImFuY2hvciIsIm1vZGFsQm9keSIsImhlbHBlckRpdiIsImhlbHB0ZXh0IiwibGlzdE5hbWUiLCJyZW1vdmVSb3ciLCJ0YWJsZVJvdyIsImJ1dHRvbiIsInRpdGxlIiwib25jbGljayIsIml0ZW0iLCJpdGVtX25hbWUiLCJjYXRlZ29yeUlkIiwib25FbmQiLCJldnQiLCJvcmRlcmVkSWRzIiwidXBkYXRlSXRlbU9yZGVyIiwiY2F0ZWdvcnlfaWQiLCJvcmRlcmVkX2lkcyIsInNvcnRpbmdTZWxlY3QiLCJvcHRzIiwicGFyZW50Q29udGFpbmVyIiwiZ2hvc3RDbGFzcyIsInVwZGF0ZUNhdGVnb3J5T3JkZXIiLCJuZXdPcmRlciIsImluZGV4IiwiaXRlbV9jYXRlZ29yeSIsImNhdGVnb3J5X29yZGVyIiwiYXNzaWduVG9MaXN0TW9kYWwiLCJ0YWJsZUJvZHkiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJkZWZhdWx0cyIsImNvbW1vbiJdLCJzb3VyY2VSb290IjoiIn0=