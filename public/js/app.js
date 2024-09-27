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
      if (isMasterList === 'true') {
        data['updateMaster'] = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxNQUFNLENBQUMsa0JBQWtCLENBQUMsR0FBRyxnQkFBZ0I7Ozs7Ozs7Ozs7O0FDSDNFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zYXNzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAnLi9ib290c3RyYXAnIDtcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcImJvb3RzdHJhcFwiO1xuLy8gaW1wb3J0ICAnYm9vdHN0cmFwJztcbmltcG9ydCBcIkBwb3BwZXJqcy9jb3JlXCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzL2F1dG9cIjtcbmltcG9ydCBTb3J0YWJsZSBmcm9tIFwic29ydGFibGVqc1wiO1xuY29uc3QgYm9vdHN0cmFwID0gcmVxdWlyZShcIi4vYm9vdHN0cmFwXCIpO1xuY29uc3QgZ3JhbUNvbnZlcnRlciA9IDEwMDA7XG5jb25zdCBvdW5jZUNvbnZlcnRlciA9IDE2O1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgdGhpcy53aW5kb3cuc2hvd1Bhc3N3b3JkID0gZnVuY3Rpb24gc2hvd1Bhc3N3b3JkKGlkKSB7XG4gICAgICAgIGxldCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgaWYgKHBhc3N3b3JkLnR5cGUgPT09IFwicGFzc3dvcmRcIikge1xuICAgICAgICAgICAgcGFzc3dvcmQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFzc3dvcmQudHlwZSA9IFwicGFzc3dvcmRcIjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhpcy53aW5kb3cuYWRkTWFzdGVyTGlzdEl0ZW0gPSBmdW5jdGlvbiBhZGRNYXN0ZXJMaXN0SXRlbSgpIHtcbiAgICAgICAgbGV0IG51bWJlck9mSXRlbXNUb0FkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZXNUb0FkZFwiKTtcbiAgICAgICAgbGV0IGxpbmVzVG9BZGQgPSAxO1xuICAgICAgICBpZiAobnVtYmVyT2ZJdGVtc1RvQWRkID09PSBudWxsIHx8ICtudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPCAxKSB7XG4gICAgICAgICAgICBudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPSBsaW5lc1RvQWRkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGluZXNUb0FkZCA9ICtudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzVG9BZGQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGxpc3RCeUl0ZW1zID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBsaXN0ZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBpdGVtVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtaXRlbS10YWJsZS1ib2R5Jyk7XG4gICAgICAgICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgY2VsbHMgYW5kIGlucHV0IGVsZW1lbnRzLlxuICAgICAgICAgICAgbGV0IGNlbGwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuXG4gICAgICAgICAgICBsZXQgaXRlbU5hbWUgPSBjcmVhdGVMaXN0SXRlbUlucHV0KFxuICAgICAgICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgICAgICAgIFwiaXRlbU5hbWVcIixcbiAgICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICAgIFwiaXRlbV9uYW1lXCIsXG4gICAgICAgICAgICAgICAgbGlzdGVuXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaXRlbU5hbWUucGxhY2Vob2xkZXIgPSBcIkl0ZW0gTmFtZVwiO1xuICAgICAgICAgICAgaXRlbU5hbWUuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcblxuICAgICAgICAgICAgbGV0IGNlbGw2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgY2VsbDYuaWQgPSBcImJ0bi10ZC1cIiAraTtcbiAgICAgICAgICAgIC8vIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICAgIC8vIGRlbGV0ZUJ0bi5pZCA9IFwiZGVsZXRlQnRuLVwiICsgaTtcbiAgICAgICAgICAgIC8vIGRlbGV0ZUJ0bi5jbGFzc05hbWUgPSBcImJ0biBidG4tcHJpbWFyeSBidG4tc20gIHB5LTJcIjtcbiAgICAgICAgICAgIC8vIGRlbGV0ZUJ0bi5pbm5lckhUTUwgPSBcInhcIjtcbiAgICAgICAgICAgIGxldCBkZWxldGVCdG4gPSBjcmVhdGVEZWxldGVCdXR0b24oaSk7XG5cblxuICAgICAgICAgICAgbGV0IGNlbGwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgbGV0IGl0ZW1XZWlnaHQgPSBjcmVhdGVMaXN0SXRlbUlucHV0KFxuICAgICAgICAgICAgICAgIFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgXCJpdGVtV2VpZ2h0XCIsXG4gICAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgICBcIml0ZW1fd2VpZ2h0XCIsXG4gICAgICAgICAgICAgICAgbGlzdGVuXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaXRlbVdlaWdodC52YWx1ZSA9IDA7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJmb3Itd2VpZ2h0XCIpO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWlucHV0XCIpO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xuICAgICAgICAgICAgLy9pdGVtV2VpZ2h0LnN0eWxlLndpZHRoID0gJzQwJSc7XG4gICAgICAgICAgICBjZWxsMi5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWNvbFwiKTtcblxuICAgICAgICAgICAgbGV0IGNlbGwzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgICAgICBzZWxlY3QuaWQgPSBcInVvbS1cIiArIGk7XG4gICAgICAgICAgICBzZWxlY3QubmFtZSA9IFwidW9tW11cIjtcbiAgICAgICAgICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIsIFwidW9tXCIpO1xuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCI7XG5cbiAgICAgICAgICAgIGxldCBvek9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBsZXQgbGJzT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIGxldCBnck9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBsZXQga2dPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgb3pPcHRpb24udmFsdWUgPSBcImluX291bmNlc1wiO1xuICAgICAgICAgICAgb3pPcHRpb24udGV4dCA9IFwiT1pcIjtcbiAgICAgICAgICAgIGxic09wdGlvbi52YWx1ZSAgPSAnaW5fbGJzJztcbiAgICAgICAgICAgIGxic09wdGlvbi50ZXh0ID0gJ0xCUydcblxuICAgICAgICAgICAgZ3JPcHRpb24udmFsdWUgPSBcImluX2dyYW1zXCI7XG4gICAgICAgICAgICBnck9wdGlvbi50ZXh0ID0gXCJHXCI7XG4gICAgICAgICAgICBrZ09wdGlvbi52YWx1ZSAgPSAnaW5fa2lsb3MnO1xuICAgICAgICAgICAga2dPcHRpb24udGV4dCA9ICdLRyc7XG4gICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3pPcHRpb24pO1xuICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKGxic09wdGlvbik7XG4gICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQoZ3JPcHRpb24pO1xuICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKGtnT3B0aW9uKTtcblxuICAgICAgICAgICAgLy9hcHBlbmQgaW5wdXRzIHRvIGNlbGxzLlxuICAgICAgICAgICAgY2VsbDEuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgICAgICAgICAgY2VsbDIuYXBwZW5kQ2hpbGQoaXRlbVdlaWdodCk7XG5cbiAgICAgICAgICAgIGxldCBzZWxlY3RDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgbGV0IGNhdGVnb3J5U2VsZWN0ID0gZ2V0Q2F0ZWdyb3lTZWxlY3QoaSxudWxsLCBsaXN0ZW4pO1xuICAgICAgICAgICAgY2F0ZWdvcnlTZWxlY3QubmFtZSA9ICdpdGVtQ2F0ZWdvcnlbXSdcbiAgICAgICAgICAgIHNlbGVjdENlbGwuYXBwZW5kKGNhdGVnb3J5U2VsZWN0KTtcblxuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgICAgICAgICAgIGNlbGw2LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgICAgICAgICAgIC8vIEFwcGVuZCBjZWxscyB0byB0aGUgcm93LlxuICAgICAgICAgICAgLy8gcm93LmFwcGVuZENoaWxkKGljb25DZWxsKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsMSk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoc2VsZWN0Q2VsbCk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDMpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwyKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsNik7XG5cbiAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgcm93IHRvIHRoZSB0YWJsZS5cbiAgICAgICAgICAgIGl0ZW1UYWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuXG5cbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3SXRlbUNvdW50JykudmFsdWUgPSBsaW5lc1RvQWRkO1xuICAgICAgICBudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPSAxO1xuICAgIH07XG4gICAgdGhpcy53aW5kb3cuc2hvd0xpc3RBc3NpZ25Nb2RhbCA9IGZ1bmN0aW9uIHNob3dMaXN0QXNzaWduTW9kYWwoaXRlbUlkLGl0ZW1OYW1lKXtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbUlkZm9yQXNzaWduJykudmFsdWUgPSBpdGVtSWQ7XG4gICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VySXRlbUlkZm9yQXNzaWduJykudmFsdWUgPSB1c2VySXRlbUlkO1xuXG4gICAgICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtYXNzaWduLWl0ZW0tdGFibGUtYm9keVwiKTtcbiAgICAgICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBc3NpZ25JdGVtVG9MaXN0TW9kYWxMYWJlbCcpO1xuICAgICAgICBoZWFkZXIuaW5uZXJIVE1MID0gJ0Fzc2lnbi9VbmFzc2lnbiBpdGVtOiAnK2l0ZW1OYW1lO1xuXG4gICAgICAgIGxldCB1cmwgPSAnL2dldC11c2VyLWxpc3RzLycraXRlbUlkO1xuICAgICAgICBsZXQgdXNlckxpc3RzO1xuXG4gICAgICAgIGF4aW9zLmdldCh1cmwpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICB1c2VyTGlzdHMgPSBkYXRhLnVzZXJMaXN0cztcblxuICAgICAgICAgICAgaWYoZGF0YS5zdGF0dXMgIT09ICcxJyl7XG4gICAgICAgICAgICAgICAgYWxlcnQoZGF0YS5tc2cpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1c2VyTGlzdHMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgICAgICAgICAgbGV0IGxpc3ROYW1lQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgYXNzaWduQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcblxuICAgICAgICAgICAgICAgIGxpc3ROYW1lQ2VsbC5pbm5lckhUTUwgPSB1c2VyTGlzdHNbaV0ubmFtZTtcblxuICAgICAgICAgICAgICAgIGxldCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgICAgICAgICAgY2hlY2tib3guaWQgPSAnbGlzdENoZWNrQm94LScraTtcbiAgICAgICAgICAgICAgICBjaGVja2JveC5uYW1lID0gJ2xpc3RJZHNbXSc7XG4gICAgICAgICAgICAgICAgY2hlY2tib3gudmFsdWUgPSB1c2VyTGlzdHNbaV0uaWQ7XG5cbiAgICAgICAgICAgICAgICBpZih1c2VyTGlzdHNbaV0uaXRlbUFzc2lnbmVkID09IHRydWUpe1xuICAgICAgICAgICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhc3NpZ25DZWxsLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQobGlzdE5hbWVDZWxsKTtcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoYXNzaWduQ2VsbCk7XG4gICAgICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgIH1cbiAgICB0aGlzLndpbmRvdy5hc3NpZ25Ub0dlYXJMaXN0ID0gZnVuY3Rpb24gYXNzaWduVG9HZWFyTGlzdChlbGVtZW50KXtcbiAgICAgICAgbGV0IGxpc3RJZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtaWQnKTtcbiAgICAgICAgbGV0IGl0ZW1JZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWl0ZW0taWQnKTtcblxuICAgICAgICBpZighZWxlbWVudC5jaGVja2VkKXtcbiAgICAgICAgICAgIGxpc3RJZCA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHVybCA9ICcvYXNzaWduLXRvLWdlYXItbGlzdCdcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBsaXN0X2lkOiBsaXN0SWQsXG4gICAgICAgICAgICBpZDogaXRlbUlkXG4gICAgICAgIH07XG5cblxuICAgICAgICBheGlvcy5wb3N0KHVybCxkYXRhKVxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IDEpe1xuXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBhbGVydChyZXNwb25zZS5tc2cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICB0aGlzLndpbmRvdy5hZGRMaXN0SXRlbSA9IGZ1bmN0aW9uIGFkZExpc3RJdGVtKGNhdGVnb3J5Y291bnRlciA9IG51bGwsIGdyb3VwQ2F0ZWdvcnkgPSBudWxsKSB7XG4gICAgICAgIGxldCBudW1iZXJPZkl0ZW1zVG9BZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmVzVG9BZGRcIik7XG4gICAgICAgIGxldCBsaW5lc1RvQWRkID0gMTtcbiAgICAgICAgaWYgKG51bWJlck9mSXRlbXNUb0FkZCA9PT0gbnVsbCB8fCArbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlIDwgMSkge1xuICAgICAgICAgICAgbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlID0gbGluZXNUb0FkZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpbmVzVG9BZGQgPSArbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lc1RvQWRkOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBsaXN0VU9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b21cIikudmFsdWU7XG4gICAgICAgICAgICBsZXQgZmluYWxJRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmluYWwtaVwiKTtcbiAgICAgICAgICAgIGxldCBsaXN0QnlJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdEJ5SXRlbXNcIikudmFsdWU7XG4gICAgICAgICAgICBsZXQgaXRlbVRhYmxlO1xuXG4gICAgICAgICAgICBpZiAoK2xpc3RCeUl0ZW1zID09IDEpIHtcbiAgICAgICAgICAgICAgICBsaXN0QnlJdGVtcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgaXRlbVRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtLXRhYmxlLWJvZHlcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxpc3RCeUl0ZW1zID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IHRhYmxlQ2F0ZWdvcnkgPSBjYXRlZ29yeWNvdW50ZXI7XG4gICAgICAgICAgICAgICAgaXRlbVRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgICAgICAgICAgIFwiY2F0ZWdvcnlUYWJsZS1cIiArIHRhYmxlQ2F0ZWdvcnlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdXNlcklkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VySWRcIikudmFsdWU7XG4gICAgICAgICAgICBsZXQgbGlzdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0SWRcIikudmFsdWU7XG4gICAgICAgICAgICBsZXQgZmluYWxJID0gZmluYWxJRWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgIGZpbmFsSUVsZW1lbnQudmFsdWUgPSArZmluYWxJICsgMTtcblxuICAgICAgICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgICAgIHJvdy5pZCA9ICdyb3ctJytmaW5hbEk7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBjZWxscyBhbmQgaW5wdXQgZWxlbWVudHMuXG4gICAgICAgICAgICBsZXQgY2VsbDAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gICAgICAgICAgICBjZWxsMC5zY29wZSA9IFwicm93XCI7XG4gICAgICAgICAgICBjZWxsMC5pbm5lckhUTUwgPSBmaW5hbEk7XG5cbiAgICAgICAgICAgIGxldCBjZWxsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcblxuICAgICAgICAgICAgbGV0IGNvdW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBjb3VudGVyLnR5cGUgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgY291bnRlci5uYW1lID0gXCJpZFtdXCI7XG4gICAgICAgICAgICBjb3VudGVyLmlkID0gXCJpZC1cIiArIGZpbmFsSTtcbiAgICAgICAgICAgIGNvdW50ZXIudmFsdWUgPSBcIm5ldy1cIiArIGZpbmFsSTtcbiAgICAgICAgICAgIGNvdW50ZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4tbmFtZVwiLCBcImlkXCIpO1xuXG4gICAgICAgICAgICBsZXQgaXRlbU5hbWUgPSBjcmVhdGVMaXN0SXRlbUlucHV0KFxuICAgICAgICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgICAgICAgIFwiaXRlbU5hbWVcIixcbiAgICAgICAgICAgICAgICBmaW5hbEksXG4gICAgICAgICAgICAgICAgXCJpdGVtX25hbWVcIlxuXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaXRlbU5hbWUucGxhY2Vob2xkZXIgPSBcIkl0ZW0gTmFtZVwiO1xuICAgICAgICAgICAgaXRlbU5hbWUuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcblxuICAgICAgICAgICAgbGV0IGNlbGw2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgY2VsbDYuaWQgPSBcImJ0bi10ZC1cIiArIGZpbmFsSTtcbiAgICAgICAgICAgIGxldCBkZWxldGVCdG4gPSBjcmVhdGVEZWxldGVCdXR0b24oZmluYWxJKTtcbiAgICAgICAgICAgIGxldCBjZWxsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcblxuICAgICAgICAgICAgbGV0IGl0ZW1XZWlnaHQgPSBjcmVhdGVMaXN0SXRlbUlucHV0KFxuICAgICAgICAgICAgICAgIFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgXCJpdGVtV2VpZ2h0XCIsXG4gICAgICAgICAgICAgICAgZmluYWxJLFxuICAgICAgICAgICAgICAgIFwiaXRlbV93ZWlnaHRcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQudmFsdWUgPSAwO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKFwiZm9yLXdlaWdodFwiKTtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQuY2xhc3NMaXN0LmFkZChcIm51bWJlci1pbnB1dFwiKTtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcbiAgICAgICAgICAgIGNlbGwyLmNsYXNzTGlzdC5hZGQoXCJudW1iZXItY29sXCIpO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBsZXQgbGluZVVvbUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBjZWxsMy5jbGFzc0xpc3QuYWRkKFwidW9tLXRkXCIpO1xuICAgICAgICAgICAgbGluZVVvbUNlbGwuY2xhc3NMaXN0LmFkZChcInVvbS10ZFwiKTtcbiAgICAgICAgICAgIGxldCByYWRpbzE7XG4gICAgICAgICAgICBsZXQgcmFkaW8yO1xuICAgICAgICAgICAgbGV0IHJhZGlvTGFiZWwxO1xuICAgICAgICAgICAgbGV0IHJhZGlvTGFiZWwyO1xuICAgICAgICAgICAgbGV0IHJhZGlvTGFiZWwzO1xuXG4gICAgICAgICAgICBpZiAobGlzdFVPTSA9PT0gXCJ1c1wiKSB7XG4gICAgICAgICAgICAgICAgcmFkaW8xID0gY3JlYXRlUmFkaW8oXCJpbl9vdW5jZXNcIiwgXCJcIiwgXCJvelwiLCBmaW5hbEkpO1xuICAgICAgICAgICAgICAgIHJhZGlvTGFiZWwxID0gY3JlYXRlTGFiZWwoXG4gICAgICAgICAgICAgICAgICAgIFwiT1pcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ1b20tb3otXCIgKyBmaW5hbEksXG4gICAgICAgICAgICAgICAgICAgIFwib3pcIixcbiAgICAgICAgICAgICAgICAgICAgZmluYWxJXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByYWRpbzIgPSBjcmVhdGVSYWRpbyhcImluX2xic1wiLCBcIlwiLCBcImxic1wiLCBmaW5hbEkpO1xuICAgICAgICAgICAgICAgIHJhZGlvTGFiZWwyID0gY3JlYXRlTGFiZWwoXG4gICAgICAgICAgICAgICAgICAgIFwiTEJTXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidW9tLWxicy1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgICAgICAgICAgXCJsYnNcIixcbiAgICAgICAgICAgICAgICAgICAgZmluYWxJXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByYWRpb0xhYmVsMyA9IGNyZWF0ZUxhYmVsKFxuICAgICAgICAgICAgICAgICAgICBcIk9aXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidW9tLW96LVwiICsgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICBcIm96XCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsSSxcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJhZGlvMSA9IGNyZWF0ZVJhZGlvKFwiaW5fZ3JhbXNcIiwgXCJcIiwgXCJncmFtXCIsIGZpbmFsSSk7XG4gICAgICAgICAgICAgICAgcmFkaW9MYWJlbDEgPSBjcmVhdGVMYWJlbChcbiAgICAgICAgICAgICAgICAgICAgXCJHXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidW9tLWdyYW0tXCIgKyBmaW5hbEksXG4gICAgICAgICAgICAgICAgICAgIFwiZ3JhbVwiLFxuICAgICAgICAgICAgICAgICAgICBmaW5hbElcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJhZGlvMiA9IGNyZWF0ZVJhZGlvKFwiaW5fa2lsb3NcIiwgXCJcIiwgXCJrZ1wiLCBmaW5hbEkpO1xuICAgICAgICAgICAgICAgIHJhZGlvTGFiZWwyID0gY3JlYXRlTGFiZWwoXG4gICAgICAgICAgICAgICAgICAgIFwiS0dcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ1b20ta2ctXCIgKyBmaW5hbEksXG4gICAgICAgICAgICAgICAgICAgIFwia2dcIixcbiAgICAgICAgICAgICAgICAgICAgZmluYWxJXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByYWRpb0xhYmVsMyA9IGNyZWF0ZUxhYmVsKFxuICAgICAgICAgICAgICAgICAgICBcIkdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ1b20tZ3JhbS1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgICAgICAgICAgXCJncmFtXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsSSxcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBjZWxsNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGNlbGw0LmNsYXNzTGlzdC5hZGQoXCJudW1iZXItY29sXCIpO1xuICAgICAgICAgICAgbGV0IHBhY2tlZEFtb3VudCA9IGNyZWF0ZUxpc3RJdGVtSW5wdXQoXG4gICAgICAgICAgICAgICAgXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICBcInBhY2tlZEFtb3VudFwiLFxuICAgICAgICAgICAgICAgIGZpbmFsSSxcbiAgICAgICAgICAgICAgICBcImFtb3VudFwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcGFja2VkQW1vdW50LnZhbHVlID0gMTtcblxuICAgICAgICAgICAgcGFja2VkQW1vdW50LmNsYXNzTGlzdC5hZGQoXCJmb3Itd2VpZ2h0XCIpO1xuICAgICAgICAgICAgcGFja2VkQW1vdW50LmNsYXNzTGlzdC5hZGQoXCJudW1iZXItaW5wdXRcIik7XG4gICAgICAgICAgICBwYWNrZWRBbW91bnQuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcblxuICAgICAgICAgICAgbGV0IGNlbGw1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgY2VsbDUuY2xhc3NMaXN0LmFkZChcIm51bWJlci1jb2xcIik7XG4gICAgICAgICAgICBsZXQgdG90YWxMaW5lV2VpZ2h0ID0gY3JlYXRlTGlzdEl0ZW1JbnB1dChcbiAgICAgICAgICAgICAgICBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIFwidG90YWxMaW5lV2VpZ2h0XCIsXG4gICAgICAgICAgICAgICAgZmluYWxJLFxuICAgICAgICAgICAgICAgIFwidG90YWxfbGluZV93ZWlnaHRcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC52YWx1ZSA9IDA7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgICAgIFwiZGF0YS1jb2x1bW4tbmFtZVwiLFxuICAgICAgICAgICAgICAgIFwidG90YWxfbGluZV93ZWlnaHRcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC5zZXRBdHRyaWJ1dGUoXCJyZWFkb25seVwiLCB0cnVlKTtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWlucHV0XCIpO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRyb2xcIik7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQuY2xhc3NMaXN0LmFkZChcImZvci10b3RhbC1saXN0LXdlaWdodFwiKTtcblxuICAgICAgICAgICAgLy9hcHBlbmQgaW5wdXRzIHRvIGNlbGxzLlxuICAgICAgICAgICAgbGV0IGljb25DZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuXG4gICAgICAgICAgICBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgICAgIGljb24uY2xhc3NOYW1lID0gJ2ZhcyBmYS1ncmlwLXZlcnRpY2FsJztcbiAgICAgICAgICAgIGljb25DZWxsLmFwcGVuZENoaWxkKGljb24pO1xuXG4gICAgICAgICAgICBjZWxsMS5hcHBlbmRDaGlsZChjb3VudGVyKTtcbiAgICAgICAgICAgIGNlbGwxLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIGNlbGwyLmFwcGVuZENoaWxkKGl0ZW1XZWlnaHQpO1xuXG4gICAgICAgICAgICBsZXQgc2VsZWN0Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGxldCBjYXRlZ29yeVNlbGVjdCA9IGdldENhdGVncm95U2VsZWN0KGZpbmFsSSwgZ3JvdXBDYXRlZ29yeSk7XG5cbiAgICAgICAgICAgIHNlbGVjdENlbGwuYXBwZW5kKGNhdGVnb3J5U2VsZWN0KTtcblxuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQocmFkaW8xKTtcbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHJhZGlvTGFiZWwxKTtcbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHJhZGlvMik7XG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChyYWRpb0xhYmVsMik7XG5cbiAgICAgICAgICAgIGNlbGw0LmFwcGVuZENoaWxkKHBhY2tlZEFtb3VudCk7XG4gICAgICAgICAgICBjZWxsNS5hcHBlbmRDaGlsZCh0b3RhbExpbmVXZWlnaHQpO1xuICAgICAgICAgICAgbGluZVVvbUNlbGwuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbDMpO1xuICAgICAgICAgICAgY2VsbDYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIGNlbGxzIHRvIHRoZSByb3cuXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoaWNvbkNlbGwpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwxKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChzZWxlY3RDZWxsKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsMyk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDIpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGw0KTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsNSk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQobGluZVVvbUNlbGwpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGw2KTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSByb3cgdG8gdGhlIHRhYmxlLlxuICAgICAgICAgICAgaXRlbVRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgICAgICAvL2FkZCBmdW5jdGlvbnMgdG8gY2FsY3VsYXRlIGFuZCBjb252ZXJ0IHRvdGFsIHdlaWdodC5cbiAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXJXZWlnaHRDYWxjKGZpbmFsSSk7XG4gICAgICAgIH1cbiAgICAgICAgbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlID0gMTtcbiAgICB9O1xuXG4gICAgdGhpcy53aW5kb3cudXBkYXRlVU9NID0gZnVuY3Rpb24gdXBkYXRlVU9NKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gXCJ1c1wiKSB7XG4gICAgICAgICAgICB1c1JhZGlvVG9NZXRyaWMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1ldHJpY1JhZGlvVG9VcygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyV2VpZ2h0Q2FsYyhyb3cpIHtcbiAgICAgICAgbGV0IG5lZWRlZEZvcldlaWdodHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvci13ZWlnaHRcIik7XG4gICAgICAgIG5lZWRlZEZvcldlaWdodHMuZm9yRWFjaChmdW5jdGlvbiAobmVlZGVkRm9yV2VpZ2h0KSB7XG4gICAgICAgICAgICBuZWVkZWRGb3JXZWlnaHQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZ2V0TGluZVRvdGFsV2VpZ2h0KHJvdyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy53aW5kb3cuZ2V0TGluZVRvdGFsV2VpZ2h0ID0gZnVuY3Rpb24gZ2V0TGluZVRvdGFsV2VpZ2h0KFxuICAgICAgICByb3csXG4gICAgICAgIGNvbnZlcnQgPSBmYWxzZVxuICAgICkge1xuICAgICAgICBsZXQgd2VpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtV2VpZ2h0LVwiICsgcm93KS52YWx1ZTtcbiAgICAgICAgbGV0IHBhY2tlZEFtb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFja2VkQW1vdW50LVwiICsgcm93KS52YWx1ZTtcbiAgICAgICAgbGV0IHVvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tXCIpO1xuICAgICAgICBsZXQgbGluZVRvdGFsV2VpZ2h0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgICAgXCJ0b3RhbExpbmVXZWlnaHQtXCIgKyByb3dcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgbGluZVRvdGFsID0gMDtcbiAgICAgICAgbGluZVRvdGFsID0gK3dlaWdodCAqICtwYWNrZWRBbW91bnQ7XG4gICAgICAgIGxpbmVUb3RhbCA9IGxpbmVUb3RhbC50b0ZpeGVkKDMpLnJlcGxhY2UoL1suLF0wMCQvLCBcIlwiKTtcbiAgICAgICAgbGluZVRvdGFsV2VpZ2h0RWxlbWVudC52YWx1ZSA9IGxpbmVUb3RhbDtcblxuICAgICAgICB1cGRhdGVMaXN0SXRlbShsaW5lVG90YWxXZWlnaHRFbGVtZW50KTtcbiAgICB9O1xuICAgIHRoaXMud2luZG93LmNvbnZlcnRNZWFzdXJlbWVudCA9IGZ1bmN0aW9uIGNvbnZlcnRNZWFzdXJlbWVudChcbiAgICAgICAgcm93LFxuICAgICAgICBjb252ZXJ0ID0gZmFsc2VcbiAgICApIHtcbiAgICAgICAgbGV0IGxpc3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0SWQnKS52YWx1ZTtcbiAgICAgICAgbGV0IHVvbTtcbiAgICAgICAgbGV0IGlzTWFzdGVyTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpc01hc3RlcicpLnZhbHVlO1xuXG4gICAgICAgIGlmKGlzTWFzdGVyTGlzdCA9PT0gJ3RydWUnKXtcbiAgICAgICAgICAgIHVvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tLVwiK3JvdykudmFsdWU7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdW9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b21cIikudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZihsaXN0SWQgPT0gJ21hc3Rlcicpe1xuICAgICAgICAvLyAgICAgdW9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b20tXCIrcm93KS52YWx1ZTtcbiAgICAgICAgLy8gfWVsc2V7XG4gICAgICAgIC8vICAgICB1b20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbVwiKS52YWx1ZTtcbiAgICAgICAgLy8gfVxuICAgICAgICBsZXQgd2VpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtV2VpZ2h0LVwiICsgcm93KTtcbiAgICAgICAgbGV0IHBhY2tlZEFtb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFja2VkQW1vdW50LVwiICsgcm93KS52YWx1ZTtcbiAgICAgICAgbGV0IHRvdGFsV2VpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3RhbExpbmVXZWlnaHQtXCIgKyByb3cpO1xuICAgICAgICBsZXQgdG90YWxMaW5lV2VpZ2h0VmFsdWUgPSAwO1xuICAgICAgICBsZXQgd2VpZ2h0VmFsdWUgPSB3ZWlnaHQudmFsdWU7XG4gICAgICAgIGxldCBzbWFsbDtcbiAgICAgICAgbGV0IGxhcmdlO1xuICAgICAgICBsZXQgZWxlbWVudDtcbiAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lLXVvbS1sYWJlbC1cIiArIHJvdyk7XG4gICAgICAgIGxldCBsYWJlbEhUTUw7XG5cbiAgICAgICAgaWYgKHVvbSA9PT0gXCJ1c1wiKSB7XG4gICAgICAgICAgICBzbWFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tLW96LVwiICsgcm93KTtcbiAgICAgICAgICAgIGxhcmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b20tbGJzLVwiICsgcm93KTtcbiAgICAgICAgICAgIGlmIChzbWFsbC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0VmFsdWUgPSArd2VpZ2h0VmFsdWUgKiAxNjtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gc21hbGw7XG4gICAgICAgICAgICAgICAgbGFiZWxIVE1MID0gXCJPWlwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3ZWlnaHRWYWx1ZSA9ICt3ZWlnaHRWYWx1ZSAvIDE2O1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBsYXJnZTtcbiAgICAgICAgICAgICAgICBsYWJlbEhUTUwgPSBcIkxCU1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc21hbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1ncmFtLVwiICsgcm93KTtcbiAgICAgICAgICAgIGxhcmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b20ta2ctXCIgKyByb3cpO1xuXG4gICAgICAgICAgICBpZiAoc21hbGwuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHdlaWdodFZhbHVlID0gK3dlaWdodFZhbHVlICogMTAwMDtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gc21hbGw7XG4gICAgICAgICAgICAgICAgbGFiZWxIVE1MID0gXCJHXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdlaWdodFZhbHVlID0gK3dlaWdodFZhbHVlIC8gMTAwMDtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gbGFyZ2U7XG4gICAgICAgICAgICAgICAgbGFiZWxIVE1MID0gXCJLR1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdG90YWxMaW5lV2VpZ2h0VmFsdWUgPSArd2VpZ2h0VmFsdWUgKiArcGFja2VkQW1vdW50O1xuICAgICAgICB3ZWlnaHQudmFsdWUgPSB3ZWlnaHRWYWx1ZS50b0ZpeGVkKDMpLnJlcGxhY2UoL1suLF0wMCQvLCBcIlwiKTtcbiAgICAgICAgdG90YWxXZWlnaHQudmFsdWUgPSB0b3RhbExpbmVXZWlnaHRWYWx1ZVxuICAgICAgICAgICAgLnRvRml4ZWQoMylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bLixdMDAkLywgXCJcIik7XG4gICAgICAgIGxhYmVsLmlubmVySFRNTCA9IGxhYmVsSFRNTDtcbiAgICAgICAgdXBkYXRlTGlzdEl0ZW0oZWxlbWVudCk7XG4gICAgICAgIHVwZGF0ZUxpc3RJdGVtKHdlaWdodCk7XG4gICAgICAgIHVwZGF0ZUxpc3RJdGVtKHRvdGFsV2VpZ2h0KTtcbiAgICB9O1xuICAgIHRoaXMud2luZG93LmFkZENhdGVnb3J5R3JvdXAgPSBmdW5jdGlvbiBhZGRDYXRlZ29yeUdyb3VwKGxpc3RJZCxjYXRlZ29yeSwgbGlzdFVPTSwgdXNlcklkKXtcblxuICAgICAgICBsZXQgY29sdW1uTmFtZTtcbiAgICAgICAgaWYobGlzdFVPTSA9PT0gJ3VzJyl7XG4gICAgICAgICAgICBjb2x1bW5OYW1lID0gJ2luX291bmNlcyc7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29sdW1uTmFtZSA9ICdpbl9ncmFtcyc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGF0YSA9IGdldEJvb2xlYW5EYXRhKGNvbHVtbk5hbWUpO1xuICAgICAgICBkYXRhWydsaXN0X2lkJ10gPSBsaXN0SWQ7XG4gICAgICAgIGRhdGFbJ3VzZXJfaWQnXSA9IHVzZXJJZDtcbiAgICAgICAgZGF0YVsnaXRlbV9uYW1lJ10gPSAnJztcbiAgICAgICAgZGF0YVsnaXRlbV93ZWlnaHQnXSA9IDA7XG4gICAgICAgIGRhdGFbJ2Ftb3VudCddID0gMTtcbiAgICAgICAgZGF0YVsnaXRlbV9jYXRlZ29yeSddID0gY2F0ZWdvcnk7XG4gICAgICAgIGxldCB1cmwgPSAnL2xpc3QtaXRlbSdcblxuICAgICAgICBheGlvc1xuICAgICAgICAucG9zdCh1cmwsIGRhdGEpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIHJlcyA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gJzEnKXtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGFsZXJ0KHJlcy5tc2cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG5cbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcblxuICAgICAgICB9KTtcblxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRCb29sZWFuRGF0YShjb2x1bW5OYW1lKSB7XG4gICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgIGRhdGFbXCJpbl9vdW5jZXNcIl0gPSBmYWxzZTtcbiAgICAgICAgZGF0YVtcImluX2xic1wiXSA9IGZhbHNlO1xuICAgICAgICBkYXRhW1wiaW5fZ3JhbXNcIl0gPSBmYWxzZTtcbiAgICAgICAgZGF0YVtcImluX2tpbG9zXCJdID0gZmFsc2U7XG4gICAgICAgIHN3aXRjaCAoY29sdW1uTmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcImluX291bmNlc1wiOlxuICAgICAgICAgICAgICAgIGRhdGFbXCJpbl9vdW5jZXNcIl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImluX2xic1wiOlxuICAgICAgICAgICAgICAgIGRhdGFbXCJpbl9sYnNcIl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImluX2dyYW1zXCI6XG4gICAgICAgICAgICAgICAgZGF0YVtcImluX2dyYW1zXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJpbl9raWxvc1wiOlxuICAgICAgICAgICAgICAgIGRhdGFbXCJpbl9raWxvc1wiXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICB0aGlzLndpbmRvdy51cGRhdGVMaXN0SXRlbSA9IGZ1bmN0aW9uIHVwZGF0ZUxpc3RJdGVtKGVsZW1lbnQpIHtcblxuXG4gICAgICAgIGxldCBjb2x1bW5OYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIpO1xuICAgICAgICBsZXQgdmFsdWUgPSBlbGVtZW50LnZhbHVlO1xuICAgICAgICBsZXQgaWQgPSBlbGVtZW50LmlkO1xuICAgICAgICBsZXQgaWRBcnIgPSBpZC5zcGxpdChcIi1cIik7XG4gICAgICAgIGxldCBhcnJMZW5ndGggPSBpZEFyci5sZW5ndGg7XG4gICAgICAgIGxldCByb3cgPSBpZEFyclthcnJMZW5ndGggLSAxXTtcbiAgICAgICAgbGV0IGl0ZW1JZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWQtXCIgKyByb3cpO1xuICAgICAgICBsZXQgaXRlbUlkVmFsdWUgPSBpdGVtSWQudmFsdWU7XG4gICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RJZFwiKS52YWx1ZTtcbiAgICAgICAgbGV0IHVybCA9IFwiL2xpc3QtaXRlbVwiO1xuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICBsZXQgdXNlcklkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VySWRcIikudmFsdWU7XG4gICAgICAgIGxldCBjcmVhdGUgPSB0cnVlO1xuICAgICAgICBsZXQgaXNNYXN0ZXJMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzTWFzdGVyJykudmFsdWU7XG4gICAgICAgIC8vIGxldCBpbnB1dFJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3ctJytyb3cpO1xuICAgICAgICAvLyBsZXQgaW5wdXRzQW5kU2VsZWN0cyA9IGlucHV0Um93LnF1ZXJ5U2VsZWN0b3IoJyB0ZCBpbnB1dCwgdGQgc2VsZWN0Jyk7XG4gICAgICAgIC8vIGlucHV0c0FuZFNlbGVjdHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgIGRhdGFbY29sdW1uTmFtZV0gPSB2YWx1ZTtcblxuICAgICAgICBpZiAoY29sdW1uTmFtZS5zdWJzdHJpbmcoMCwgMykgPT09IFwiaW5fXCIpIHtcbiAgICAgICAgICAgIGRhdGEgPSBnZXRCb29sZWFuRGF0YShjb2x1bW5OYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbXCJsaXN0X2lkXCJdID0gbGlzdElkO1xuICAgICAgICBkYXRhW1widXNlcl9pZFwiXSA9IHVzZXJJZDtcbiAgICAgICAgZGF0YVtcImlkXCJdID0gaXRlbUlkVmFsdWU7XG4gICAgICAgIGlmKGl0ZW1JZFZhbHVlLnN1YnN0cmluZygwLDMpICE9PSAnbmV3Jyl7XG4gICAgICAgICAgICBjcmVhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHVybCA9IHVybCArJy8nKyBpdGVtSWRWYWx1ZTtcbiAgICAgICAgICAgIGlmKGlzTWFzdGVyTGlzdCA9PT0gJ3RydWUnKXtcblxuICAgICAgICAgICAgICAgIGRhdGFbJ3VwZGF0ZU1hc3RlciddID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC5wb3N0KHVybCwgZGF0YSwgaXRlbUlkKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuXG4gICAgICAgICAgICAgICAgbGV0IHJlc0RhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICBpZihyZXNEYXRhLnN0YXR1cyAhPT0gJzEnKXtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQocmVzRGF0YS5tc2cpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGNyZWF0ZSl7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1JZC52YWx1ZSA9IHJlc0RhdGEubmV3SWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGdldERlbGV0ZUJ0bkRhdGEoaXRlbUlkLnZhbHVlLHJvdyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChcIkZhaWxlZCB0byB1cGRhdGUgbGlzdCBpdGVtLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBpZihpc01hc3Rlckxpc3QgPT09ICdmYWxzZScpe1xuICAgICAgICAgICAgdXBkYXRlVG90YWxMaXN0V2VpZ2h0cygpO1xuICAgICAgICB9XG5cblxuICAgIH07XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVUb3RhbExpc3RXZWlnaHRzKCkge1xuICAgICAgICBsZXQgd2VpZ2h0c0ZvclBXID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3ItdG90YWwtbGlzdC13ZWlnaHRcIik7XG4gICAgICAgIGxldCBiYXNlV2VpZ2h0ID0gMDtcbiAgICAgICAgbGV0IHRvdGFsUGFja1dlaWdodCA9IDA7XG4gICAgICAgIGxldCBtYXhQYWNrV2VpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXhQYWNrV2VpZ2h0XCIpLnZhbHVlO1xuICAgICAgICBsZXQgY2xhc3NXYXJuaW5nVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xhc3NXYXJuaW5nVmFsdWUnKS52YWx1ZTtcbiAgICAgICAgbGV0IHVvbVRleHQgPSBcIkxCU1wiO1xuICAgICAgICB3ZWlnaHRzRm9yUFcuZm9yRWFjaChmdW5jdGlvbiAod2VpZ2h0Rm9yUFcpIHtcbiAgICAgICAgICAgIGxldCBpZCA9IHdlaWdodEZvclBXLmlkO1xuICAgICAgICAgICAgbGV0IGlkQXJyID0gaWQuc3BsaXQoXCItXCIpO1xuICAgICAgICAgICAgbGV0IGFyckxlbmd0aCA9IGlkQXJyLmxlbmd0aDtcbiAgICAgICAgICAgIGxldCByb3cgPSBpZEFyclthcnJMZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGxldCBwYWNrZWRBbW91bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgICAgICBcInBhY2tlZEFtb3VudC1cIiArIHJvd1xuICAgICAgICAgICAgKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBjb252ZXJ0ZXIgPSAxO1xuICAgICAgICAgICAgbGV0IHJvd1dlaWdodCA9IDA7XG4gICAgICAgICAgICBsZXQgaXRlbVdlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXRlbVdlaWdodC1cIiArIHJvdykudmFsdWU7XG4gICAgICAgICAgICBsZXQgdW9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b21cIikudmFsdWU7XG4gICAgICAgICAgICBsZXQgaXRlbUNhdGVnb3J5RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgICAgICAgIFwiaXRlbUNhdGVnb3J5LVwiICsgcm93XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBsZXQgaXRlbUNhdGVnb3J5ID0gXCJcIjtcbiAgICAgICAgICAgIGlmIChpdGVtQ2F0ZWdvcnlFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaXRlbUNhdGVnb3J5ID0gaXRlbUNhdGVnb3J5RWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGl0ZW1DYXRlZ29yeSA9PT0gdW5kZWZpbmVkIHx8IGl0ZW1DYXRlZ29yeSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGl0ZW1DYXRlZ29yeSA9IFwiXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh1b20gPT09IFwidXNcIikge1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1vei1cIiArIHJvdykuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb252ZXJ0ZXIgPSBvdW5jZUNvbnZlcnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVvbVRleHQgPSBcIktHXCI7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1ncmFtLVwiICsgcm93KS5jaGVja2VkID09PSB0cnVlXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnRlciA9IGdyYW1Db252ZXJ0ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByb3dXZWlnaHQgPSArcGFja2VkQW1vdW50ICogKCtpdGVtV2VpZ2h0IC8gY29udmVydGVyKTtcbiAgICAgICAgICAgIHRvdGFsUGFja1dlaWdodCA9IHRvdGFsUGFja1dlaWdodCArIHJvd1dlaWdodDtcblxuICAgICAgICAgICAgaWYgKGl0ZW1DYXRlZ29yeSAhPT0gXCJjb25zdW1hYmxlc1wiKSB7XG4gICAgICAgICAgICAgICAgYmFzZVdlaWdodCA9IGJhc2VXZWlnaHQgKyByb3dXZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICgrYmFzZVdlaWdodCA+ICttYXhQYWNrV2VpZ2h0KSB7XG4gICAgICAgICAgICBsZXQgZGl2RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VpZ2h0V2FybmluZy1kaXZcIik7XG4gICAgICAgICAgICBkaXZFbGVtZW50LmlubmVyVGV4dCA9XCJCYXNlIHdlaWdodCAoXCIgKyAgYmFzZVdlaWdodC50b0ZpeGVkKDMpICtcIiBcIiArdW9tVGV4dCArXCIpIGV4Y2VlZGVzIHRoZSB3ZWlnaHQgZm9yIHRoZSAnXCIgK2NsYXNzV2FybmluZ1ZhbHVlK1wiJyBzdHlsZSBvZiBoaWtpbmcuXCI7XG5cbiAgICAgICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VpZ2h0V2FybmluZy1kaXZcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNlV2VpZ2h0XCIpLnZhbHVlID0gYmFzZVdlaWdodC50b0ZpeGVkKDMpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdGFsUGFja1dlaWdodFwiKS52YWx1ZSA9XG4gICAgICAgICAgICB0b3RhbFBhY2tXZWlnaHQudG9GaXhlZCgzKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlTGlzdEl0ZW1JbnB1dChcbiAgICAgICAgdHlwZSxcbiAgICAgICAgbmFtZUJhc2UsXG4gICAgICAgIHJvdyxcbiAgICAgICAgY29sdW1uTmFtZSxcbiAgICAgICAgbGlzdGVuID0gdHJ1ZVxuICAgICkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgZWxlbWVudC50eXBlID0gdHlwZTtcbiAgICAgICAgZWxlbWVudC5uYW1lID0gbmFtZUJhc2UgKyBcIltdXCI7XG4gICAgICAgIGVsZW1lbnQuaWQgPSBuYW1lQmFzZSArIFwiLVwiICsgcm93O1xuICAgICAgICBlbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIsIGNvbHVtbk5hbWUpO1xuICAgICAgICBpZihsaXN0ZW4pe1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVMaXN0SXRlbShlbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRDYXRlZ3JveVNlbGVjdChyb3csIGdyb3VwQ2F0ZWdvcnkgPSBudWxsLCBsaXN0ZW4gPSB0cnVlKSB7XG5cbiAgICAgICAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgIHNlbGVjdC5pZCA9IFwiSXRlbUNhdGVnb3J5LVwiICsgcm93O1xuICAgICAgICBzZWxlY3QubmFtZSA9IFwiaXRlbUNhdGVnb3J5LVwiICsgcm93O1xuICAgICAgICBzZWxlY3Quc2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4tbmFtZVwiLCBcIml0ZW1fY2F0ZWdvcnlcIik7XG4gICAgICAgIHNlbGVjdC5jbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiO1xuXG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgICBvcHRpb24udGV4dCA9IFwiQ2hvb3NlXCI7XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICBsZXQgb3B0aW9uTGlzdDtcblxuICAgICAgICBvcHRpb25MaXN0ID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcIi9saXN0LWl0ZW0tY2F0ZWdvcmllc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIGVycm9yXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG5cbiAgICAgICAgb3B0aW9uTGlzdCgpLnRoZW4oKGRhdGEpID0+IHtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gZGF0YVtpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IGRhdGFbaV0uY2F0ZWdvcnk7XG4gICAgICAgICAgICAgICAgaWYgKGdyb3VwQ2F0ZWdvcnkgIT0gbnVsbCAmJiBkYXRhW2ldLnZhbHVlID09PSBncm91cENhdGVnb3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYobGlzdGVuKXtcbiAgICAgICAgICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVMaXN0SXRlbShzZWxlY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHJldHVybiBzZWxlY3Q7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1ldHJpY1JhZGlvVG9VcygpIHtcbiAgICAgICAgbGV0IGlucHV0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1ldHJpYy1yYWRpb1wiKTtcbiAgICAgICAgaW5wdXRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxldCBpZEFyciA9IGlucHV0RWxlbWVudC5pZC5zcGxpdChcIi1cIik7XG4gICAgICAgICAgICBsZXQgdW9tID0gaWRBcnJbMV07XG4gICAgICAgICAgICBsZXQgcm93ID0gaWRBcnJbaWRBcnIubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBsZXQgZWxlbWVudFR5cGUgPSBpbnB1dEVsZW1lbnQudHlwZTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50VGFnID0gaW5wdXRFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgbGV0IG5ld0VsZW1lbnQ7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50VHlwZSA9PT0gXCJyYWRpb1wiICYmIHVvbSA9PT0gXCJncmFtXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlUmFkaW8oXCJpbl9vdW5jZXNcIiwgXCJPWlwiLCBcIm96XCIsIHJvdywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUeXBlID09PSBcInJhZGlvXCIgJiYgdW9tID09PSBcImtnXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlUmFkaW8oXCJpbl9sYnNcIiwgXCJMQlNcIiwgXCJsYnNcIiwgcm93KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFRhZyA9PT0gXCJsYWJlbFwiICYmIHVvbSA9PT0gXCJncmFtXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlTGFiZWwoXCJPWlwiLCBcInVvbS1vei1cIiArIHJvdywgXCJvelwiLCByb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VGFnID09PSBcImxhYmVsXCIgJiYgdW9tID09PSBcImtnXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlTGFiZWwoXCJMQlNcIiwgXCJ1b20tbGJzLVwiICsgcm93LCBcImxic1wiLCByb3cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmV3RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZChcbiAgICAgICAgICAgICAgICAgICAgbmV3RWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVzUmFkaW9Ub01ldHJpYygpIHtcbiAgICAgICAgbGV0IGlucHV0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnVzLXJhZGlvXCIpO1xuICAgICAgICBpbnB1dEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGlucHV0RWxlbWVudCkge1xuICAgICAgICAgICAgbGV0IGlkQXJyID0gaW5wdXRFbGVtZW50LmlkLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgICAgIGxldCB1b20gPSBpZEFyclsxXTtcbiAgICAgICAgICAgIGxldCByb3cgPSBpZEFycltpZEFyci5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50VHlwZSA9IGlucHV0RWxlbWVudC50eXBlO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRUYWcgPSBpbnB1dEVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgbGV0IG5ld0VsZW1lbnQ7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50VHlwZSA9PT0gXCJyYWRpb1wiICYmIHVvbSA9PT0gXCJvelwiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZVJhZGlvKFwiaW5fZ3JhbXNcIiwgXCJHUlwiLCBcImdyYW1cIiwgcm93KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFR5cGUgPT09IFwicmFkaW9cIiAmJiB1b20gPT09IFwibGJzXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlUmFkaW8oXCJpbl9raWxvc1wiLCBcIktHXCIsIFwia2dcIiwgcm93KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFRhZyA9PT0gXCJsYWJlbFwiICYmIHVvbSA9PT0gXCJvelwiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZUxhYmVsKFwiR1wiLCBcInVvbS1ncmFtLVwiICsgcm93LCBcImdyYW1cIiwgcm93KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFRhZyA9PT0gXCJsYWJlbFwiICYmIHVvbSA9PT0gXCJsYnNcIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVMYWJlbChcIktHXCIsIFwidW9tLWtnLVwiICsgcm93LCBcImtnXCIsIHJvdyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuZXdFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKFxuICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlUmFkaW8oZGF0YUNvbHVtbk5hbWUsIGxhYmVsLCB1b20sIHJvdykge1xuICAgICAgICBsZXQgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHJhZGlvLmNsYXNzTmFtZSA9XG4gICAgICAgICAgICBcImZvcm0tY2hlY2staW5wdXRcIiArXG4gICAgICAgICAgICAodW9tID09PSBcImdyYW1cIiB8fCB1b20gPT09IFwia2dcIiA/IFwiIG1ldHJpYy1yYWRpb1wiIDogXCIgdXMtcmFkaW9cIik7XG4gICAgICAgIHJhZGlvLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgICAgIHJhZGlvLm5hbWUgPSBcInVvbS1cIiArIHJvdyArIFwiW11cIjtcbiAgICAgICAgcmFkaW8uaWQgPSBcInVvbS1cIiArIHVvbSArIFwiLVwiICsgcm93O1xuICAgICAgICByYWRpby5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIsIGRhdGFDb2x1bW5OYW1lKTtcblxuICAgICAgICBpZiAodW9tID09PSBcImdyYW1cIiB8fCB1b20gPT09IFwib3pcIikge1xuICAgICAgICAgICAgcmFkaW8uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb252ZXJ0TWVhc3VyZW1lbnQocm93KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByYWRpbztcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlTGFiZWwoaW5uZXJIdG1sLCBodG1sRm9yLCB1b20sIHJvdywgbGluZUxhYmVsID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBsYWJlbC5jbGFzc05hbWUgPVxuICAgICAgICAgICAgXCJmb3JtLWNoZWNrLWxhYmVsXCIgK1xuICAgICAgICAgICAgKHVvbSA9PT0gXCJncmFtXCIgfHwgdW9tID09PSBcImtnXCIgPyBcIiBtZXRyaWMtcmFkaW9cIiA6IFwiIHVzLXJhZGlvXCIpO1xuICAgICAgICBsYWJlbC5odG1sRm9yID0gaHRtbEZvcjtcbiAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gaW5uZXJIdG1sO1xuICAgICAgICBpZiAoIWxpbmVMYWJlbCkge1xuICAgICAgICAgICAgbGFiZWwuaWQgPSBcInVvbS1cIiArIHVvbSArIFwiLWxhYmVsLVwiICsgcm93O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGFiZWwuaWQgPSBcImxpbmUtdW9tLWxhYmVsLVwiICsgcm93O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH1cblxuICAgIHRoaXMud2luZG93LnVwZGF0ZUxpc3QgPSBmdW5jdGlvbiB1cGRhdGVMaXN0KGVsZW1lbnQsIGxpc3RJZCkge1xuICAgICAgICBsZXQgY29sdW1uTmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4tbmFtZVwiKTtcbiAgICAgICAgbGV0IHZhbHVlID0gZWxlbWVudC52YWx1ZTtcbiAgICAgICAgbGV0IHVybCA9IFwiL2dlYXItbGlzdC9cIiArIGxpc3RJZDtcblxuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICBkYXRhW2NvbHVtbk5hbWVdID0gdmFsdWU7XG5cbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC5wb3N0KHVybCwgZGF0YSwgbGlzdElkKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGFsZXJ0KHJlcy5kYXRhLm1zZyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChcIkZhaWxlZCB0byB1cGRhdGUgbGlzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNvbHVtbk5hbWUgPT09IFwic29ydFwiIHx8IGNvbHVtbk5hbWUgPT09IFwibGlzdF9jbGFzc1wiIHx8IGNvbHVtbk5hbWUgPT09ICdsaXN0X2l0ZW1zJykge1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGVhZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbS1jb2xsYXBzaWJsZS1oZWFkZXJcIik7XG5cbiAgICBoZWFkZXJzLmZvckVhY2goKGhlYWRlcikgPT4ge1xuICAgICAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBoZWFkZXIubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgY29uc3QgYXJyb3cgPSBoZWFkZXIucXVlcnlTZWxlY3RvcihcIi5pdGVtLWFycm93XCIpO1xuICAgICAgICAgICAgaWYgKGNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BlblwiKSkge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUucGFkZGluZyA9IFwiMCAxMHB4XCI7XG4gICAgICAgICAgICAgICAgYXJyb3cuaW5uZXJIVE1MID0gXCImIzk2NjBcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUucGFkZGluZyA9IFwiMTBweFwiO1xuICAgICAgICAgICAgICAgIGFycm93LmlubmVySFRNTCA9IFwiJiM5NjUwXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgbGV0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbWFzdGVyLWl0ZW0tdGFibGUgaW5wdXRcIik7XG5cbiAgICBpbnB1dHMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgaW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgbGV0IGxpc3RDaGFydGJ0biA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RDaGFydEJ0blwiKTtcbiAgICBpZihsaXN0Q2hhcnRidG4gIT09IG51bGwpe1xuICAgICAgICBkb2N1bWVudCAuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0Q2hhcnRCdG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RJZFwiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCB1cmwgPSBcIi9nZWFyLWxpc3QtYW5hbHl0aWNzL1wiICsgbGlzdElkO1xuXG4gICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAgIC5nZXQodXJsKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoYXJ0U3RhdHVzID0gQ2hhcnQuZ2V0Q2hhcnQoXCJnZWFyQ2hhcnRcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXJ0U3RhdHVzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnRTdGF0dXMuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZWFyQ2hhcnRcIik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGFydERhdGEgPSBKU09OLnBhcnNlKHJlcy5kYXRhLmNoYXJ0RGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRvdWdobnV0XCIsIC8vIENoYXJ0IHR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IGNoYXJ0RGF0YS5sYWJlbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGFiZWw6IGxpc3ROYW1lICsgJ0JyZWFrIERvd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogY2hhcnREYXRhLndlaWdodHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNoYXJ0RGF0YS5jb2xvcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyT2Zmc2V0OiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3V0b3V0OiA0NSwgLy8gQWRqdXN0IHRoZSBjdXRvdXQgcGVyY2VudGFnZSBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiAxNTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhbGFiZWxzOiBmYWxzZSwgLy8gUmVtb3ZpbmcgdGhpcyBsaW5lIHNob3dzIHRoZSBkYXRhbGFiZWxzIGFnYWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZVJvdGF0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZVNjYWxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBiYXNlV2VpZ2h0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFzZVdlaWdodFwiKS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvdGFsUGFja1dlaWdodCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdGFsUGFja1dlaWdodFwiKS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbEJhc2VXZWlnaHRcIikudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVdlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbFRvdGFsV2VpZ2h0XCIpLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsUGFja1dlaWdodDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuICAgIHRoaXMud2luZG93LnNob3dDb252cnNpb25BbGVydCA9IGZ1bmN0aW9uIHNob3dDb252cnNpb25BbGVydCgpe1xuICAgICAgICBhbGVydCgnQ2hhbmdpbmcgdGhpcyB2YWx1ZSB3aWxsIGFsc28gdXBkYXRlIHRoZSB1bml0cyBvZiBtZWFzdXJlIGFuZCBhc3NvY2lhdGVkIHZhbHVlcyBmb3IgYW55IGl0ZW0gb24gdGhpcyBnZWFyIGxpc3QuJyk7XG4gICAgfVxuICAgIHRoaXMud2luZG93LmNvbmZpcm1EZWxldGUgPSBmdW5jdGlvbiBjb25maXJtRGVsZXRlKGVsZW1lbnQpIHtcblxuICAgICAgICBsZXQgaXNNYXN0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXNNYXN0ZXInKS52YWx1ZTtcbiAgICAgICAgbGV0IGhyZWYgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1ocmVmJyk7XG4gICAgICAgIGxldCBuYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb2JqZWN0LW5hbWUnKTtcbiAgICAgICAgbGV0IG9iamVjdFR5cGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vYmplY3QtdHlwZScpO1xuICAgICAgICBsZXQgYW5jaG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZU9iamVjdEFuY2hvcicpO1xuICAgICAgICBsZXQgbW9kYWxCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZU1vZGFsQm9keScpO1xuICAgICAgICBsZXQgdGV4dCA9IGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlICR7b2JqZWN0VHlwZX0gJHtuYW1lfT9gO1xuICAgICAgICBsZXQgaGVscGVyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZUhlbHBlcicpO1xuICAgICAgICBsZXQgaGVscHRleHQ7XG4gICAgICAgIGhlbHBlckRpdi5pbm5lclRleHQgPSAnJztcblxuXG4gICAgICAgIGlmKG9iamVjdFR5cGUgPT09ICdpdGVtOicgJiYgaXNNYXN0ZXIgPT09ICdmYWxzZScpe1xuICAgICAgICAgICAgbGV0IGxpc3ROYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1uYW1lJyk7XG4gICAgICAgICAgICBoZWxwdGV4dCA9IGAqRGVsZXRpbmcgYW4gaXRlbSBmcm9tIHRoaXMgbGlzdCAoJHtsaXN0TmFtZX0pIHdpbGwgbm90IGRlbGV0ZSBpdCB0aGUgJ1lvdXIgR2Vhcicgc2VjdGlvbi5gO1xuICAgICAgICAgICAgaGVscGVyRGl2LmFwcGVuZChoZWxwdGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihvYmplY3RUeXBlID09PSAnaXRlbTonICYmIGlzTWFzdGVyID09PSAndHJ1ZScpe1xuICAgICAgICAgICAgaGVscHRleHQgPSBgKkRlbGV0aW5nIGFuIGl0ZW0gZnJvbSB0aGUgJ1lvdXIgR2Vhcicgc2VjdGlvbiB3aWxsIGRlbGV0ZSBpdCBmcm9tIGFsbCAnR2VhciBMaXN0cycuYDtcbiAgICAgICAgICAgIGhlbHBlckRpdi5hcHBlbmQoaGVscHRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYob2JqZWN0VHlwZSA9PT0gJ2NhdGVnb3J5OicgJiYgaXNNYXN0ZXIgPT09J2ZhbHNlJyl7XG4gICAgICAgICAgICB0ZXh0ID0gYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgYWxsIGl0ZW1zIGluIHRoZSAke25hbWV9IGNhdGVnb3J5IGZyb20gdGhpcyBsaXN0P2A7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihvYmplY3RUeXBlID09PSAnY2F0ZWdvcnk6JyAmJiBpc01hc3RlciA9PT0ndHJ1ZScpe1xuICAgICAgICAgICAgdGV4dCA9IGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIGFsbCBpdGVtcyBpbiB0aGUgJHtuYW1lfSBjYXRlZ29yeSBmcm9tIEFMTCB5b3VyIGxpc3RzP2A7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGhlbHBlckRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICAgIG1vZGFsQm9keS5pbm5lckhUTUwgPSB0ZXh0O1xuICAgICAgICBhbmNob3Iuc2V0QXR0cmlidXRlKCdocmVmJyxocmVmKTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVJvdyhyb3cpe1xuICAgICAgICBjb25zb2xlLmxvZygnaW4gcmVtb3ZlIHJvdycpO1xuICAgICAgICBsZXQgdGFibGVSb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcm93LSR7cm93fWApXG4gICAgICAgICAgICB0YWJsZVJvdy5yZW1vdmUoKTtcblxuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVEZWxldGVCdXR0b24ocm93KSB7XG4gICAgICAgIGxldCBpc01hc3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpc01hc3RlcicpLnZhbHVlO1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLXNtIGJ0bi1kYW5nZXInO1xuICAgICAgICBidXR0b24udGl0bGUgPSAnRGVsZXRlIEl0ZW0nO1xuICAgICAgICBidXR0b24uaWQgPWBkZWxldGVJdGVtQnRuLSR7cm93fWA7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaHJlZicsJycpO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLW9iamVjdC1uYW1lJywnJyk7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtb2JqZWN0LWlkJywnJyk7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtb2JqZWN0LXR5cGUnLCdpdGVtOicpO1xuICAgICAgICBpZihpc01hc3RlciA9PT0gJ2ZhbHNlJyl7XG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtbmFtZScsZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3ROYW1lJykudmFsdWUpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1uYW1lJywnbWFzdGVyJyk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgIGljb24uY2xhc3NOYW1lID0gJ2ZhcyBmYS10cmFzaCc7XG5cbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmVtb3ZlUm93KHJvdyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREZWxldGVCdG5EYXRhKGlkLHJvdyl7XG4gICAgICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGVsZXRlSXRlbUJ0bi0ke3Jvd31gKTtcbiAgICAgICAgbGV0IHVybCA9IGAvbGlzdC1pdGVtLyR7aWR9YDtcblxuICAgICAgICBheGlvc1xuICAgICAgICAuZ2V0KHVybClcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cyAhPSBcIjFcIikge1xuICAgICAgICAgICAgICAgIGFsZXJ0KHJlcy5kYXRhLm1zZyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHJlcy5kYXRhLml0ZW07XG4gICAgICAgICAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWhyZWYnLGAvcmVtb3ZlLWxpc3QtaXRlbS8ke2l0ZW0uaWR9YCk7XG4gICAgICAgICAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLW9iamVjdC1uYW1lJyxpdGVtLml0ZW1fbmFtZSk7XG4gICAgICAgICAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLW9iamVjdC1pZCcsaXRlbS5pZCk7XG4gICAgICAgICAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRvZ2dsZScsXCJtb2RhbFwiKVxuICAgICAgICAgICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1icy10YXJnZXQnLFwiI2RlbGV0ZUFsZXJ0TW9kYWxcIik7XG4gICAgICAgICAgICBkZWxldGVCdG4ub25jbGljayA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgY29uZmlybURlbGV0ZShkZWxldGVCdG4pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICB9KTtcblxuXG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zb3J0YWJsZVwiKS5mb3JFYWNoKGZ1bmN0aW9uICh0YWJsZSkge1xuICAgICAgICBjb25zdCBjYXRlZ29yeUlkID0gdGFibGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1jYXRlZ29yeS1pZFwiKTtcblxuICAgICAgICBuZXcgU29ydGFibGUodGFibGUucXVlcnlTZWxlY3RvcihcInRib2R5XCIpLCB7XG4gICAgICAgICAgICBhbmltYXRpb246IDE1MCxcbiAgICAgICAgICAgIG9uRW5kOiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBuZXcgb3JkZXIgb2YgaXRlbXNcbiAgICAgICAgICAgICAgICBjb25zdCBvcmRlcmVkSWRzID0gW107XG4gICAgICAgICAgICAgICAgdGFibGUucXVlcnlTZWxlY3RvckFsbChcInRyXCIpLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgICAgICAgICAgICBvcmRlcmVkSWRzLnB1c2gocm93LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gU2VuZCB0aGUgbmV3IG9yZGVyIHRvIHRoZSBzZXJ2ZXIgdmlhIEFKQVhcbiAgICAgICAgICAgICAgICB1cGRhdGVJdGVtT3JkZXIoY2F0ZWdvcnlJZCwgb3JkZXJlZElkcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiB1cGRhdGVJdGVtT3JkZXIoY2F0ZWdvcnlJZCwgb3JkZXJlZElkcykge1xuXG4gICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RJZFwiKS52YWx1ZTtcblxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgXCJYLUNTUkYtVE9LRU5cIjogZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpXG4gICAgICAgICAgICAgICAgLmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIiksXG4gICAgICAgICAgICBjYXRlZ29yeV9pZDogY2F0ZWdvcnlJZCxcbiAgICAgICAgICAgIG9yZGVyZWRfaWRzOiBvcmRlcmVkSWRzLFxuICAgICAgICAgICAgbGlzdF9pZDogbGlzdElkLFxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCB1cmwgPSBcIi91cGRhdGUtbGlzdC1vcmRlclwiO1xuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QodXJsLCBkYXRhKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgIT0gXCIxXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQocmVzLmRhdGEubXNnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHNvcnRpbmdTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnRCeVwiKTtcbiAgICAgICAgbGV0IG9wdHMgPSBzb3J0aW5nU2VsZWN0Lm9wdGlvbnMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdHM7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNvcnRpbmdTZWxlY3Qub3B0aW9uc1tpXS52YWx1ZSA9PSBcImRyYWdfZHJvcFwiKSB7XG4gICAgICAgICAgICAgICAgc29ydGluZ1NlbGVjdC5vcHRpb25zW2ldLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBwYXJlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFyZW50LWNvbnRhaW5lcicpO1xuXG4gICAgaWYocGFyZW50Q29udGFpbmVyICE9PSBudWxsICYmIHBhcmVudENvbnRhaW5lciAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgU29ydGFibGUuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJlbnQtY29udGFpbmVyJyksIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogMTUwLFxuICAgICAgICAgICAgaGFuZGxlOiAnLml0ZW0tY29sbGFwc2libGUtaGVhZGVyJyxcbiAgICAgICAgICAgIGdob3N0Q2xhc3M6ICdzb3J0YWJsZS1naG9zdCcsXG4gICAgICAgICAgICBvbkVuZDogZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgICAgIC8vIEFmdGVyIHNvcnRpbmcgaXMgY29tcGxldGVkLCB1cGRhdGUgdGhlIHBvc2l0aW9ucyBpbiB0aGUgZGF0YWJhc2VcbiAgICAgICAgICAgICAgICB1cGRhdGVDYXRlZ29yeU9yZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVDYXRlZ29yeU9yZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IG5ld09yZGVyID0gW107XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcmFnZ2FibGUtY29udGFpbmVyJykuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcblxuICAgICAgICAgICAgbmV3T3JkZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgaXRlbV9jYXRlZ29yeTogaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2F0ZWdvcnktdmFsdWUnKSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeV9vcmRlcjogaW5kZXhcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHVybCA9IFwiL3VwZGF0ZS1jYXRlcm9ncnktb3JkZXJcIjtcbiAgICAgICAgbGV0IGxpc3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdElkXCIpLnZhbHVlO1xuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBcIlgtQ1NSRi1UT0tFTlwiOiBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJylcbiAgICAgICAgICAgICAgICAuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKSxcbiAgICAgICAgICAgIGNhdGVnb3J5X29yZGVyOiBuZXdPcmRlcixcbiAgICAgICAgICAgIGxpc3RfaWQ6IGxpc3RJZCxcbiAgICAgICAgfTtcbiAgICAgICAgLy9icmVhayBvdXQgcG9zdHMgYW5kIGdldCBjYWxscyB0byBvd24gZnVuY3Rpb25zXG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdCh1cmwsIGRhdGEpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzICE9IFwiMVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KHJlcy5kYXRhLm1zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgbGV0IGFzc2lnblRvTGlzdE1vZGFsID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBc3NpZ25JdGVtVG9MaXN0TW9kYWwnKTtcblxuICAgIGlmKGFzc2lnblRvTGlzdE1vZGFsICE9PSB1bmRlZmluZWQgJiYgYXNzaWduVG9MaXN0TW9kYWwgIT09IG51bGwpe1xuXG4gICAgICAgIGFzc2lnblRvTGlzdE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2hpZGUuYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgdGFibGVCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWFzc2lnbi1pdGVtLXRhYmxlLWJvZHknKTtcbiAgICAgICAgICAgIHdoaWxlKHRhYmxlQm9keS5maXJzdENoaWxkKXtcbiAgICAgICAgICAgICAgICB0YWJsZUJvZHkucmVtb3ZlQ2hpbGQodGFibGVCb2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xud2luZG93LmF4aW9zID0gYXhpb3M7XG5cbndpbmRvdy5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiTW9kYWwiLCJDaGFydCIsIlNvcnRhYmxlIiwiYm9vdHN0cmFwIiwicmVxdWlyZSIsImdyYW1Db252ZXJ0ZXIiLCJvdW5jZUNvbnZlcnRlciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaG93UGFzc3dvcmQiLCJpZCIsInBhc3N3b3JkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZE1hc3Rlckxpc3RJdGVtIiwibnVtYmVyT2ZJdGVtc1RvQWRkIiwibGluZXNUb0FkZCIsImxpc3RCeUl0ZW1zIiwibGlzdGVuIiwiaXRlbVRhYmxlIiwicm93IiwiY3JlYXRlRWxlbWVudCIsImNlbGwxIiwiaXRlbU5hbWUiLCJjcmVhdGVMaXN0SXRlbUlucHV0IiwicGxhY2Vob2xkZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJjZWxsNiIsImRlbGV0ZUJ0biIsImNyZWF0ZURlbGV0ZUJ1dHRvbiIsImNlbGwyIiwiaXRlbVdlaWdodCIsImNlbGwzIiwic2VsZWN0Iiwic2V0QXR0cmlidXRlIiwiY2xhc3NOYW1lIiwib3pPcHRpb24iLCJsYnNPcHRpb24iLCJnck9wdGlvbiIsImtnT3B0aW9uIiwidGV4dCIsImFwcGVuZENoaWxkIiwic2VsZWN0Q2VsbCIsImNhdGVnb3J5U2VsZWN0IiwiZ2V0Q2F0ZWdyb3lTZWxlY3QiLCJhcHBlbmQiLCJzaG93TGlzdEFzc2lnbk1vZGFsIiwiaXRlbUlkIiwidGFibGUiLCJoZWFkZXIiLCJpbm5lckhUTUwiLCJ1cmwiLCJ1c2VyTGlzdHMiLCJheGlvcyIsImdldCIsInJlcyIsImRhdGEiLCJzdGF0dXMiLCJhbGVydCIsIm1zZyIsImxpc3ROYW1lQ2VsbCIsImFzc2lnbkNlbGwiLCJjaGVja2JveCIsIml0ZW1Bc3NpZ25lZCIsImNoZWNrZWQiLCJhc3NpZ25Ub0dlYXJMaXN0IiwiZWxlbWVudCIsImxpc3RJZCIsImdldEF0dHJpYnV0ZSIsImxpc3RfaWQiLCJwb3N0IiwicmVzcG9uc2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJhZGRMaXN0SXRlbSIsImNhdGVnb3J5Y291bnRlciIsInVuZGVmaW5lZCIsImdyb3VwQ2F0ZWdvcnkiLCJsaXN0VU9NIiwiZmluYWxJRWxlbWVudCIsInRhYmxlQ2F0ZWdvcnkiLCJ1c2VySWQiLCJmaW5hbEkiLCJjZWxsMCIsInNjb3BlIiwiY291bnRlciIsImxpbmVVb21DZWxsIiwicmFkaW8xIiwicmFkaW8yIiwicmFkaW9MYWJlbDEiLCJyYWRpb0xhYmVsMiIsInJhZGlvTGFiZWwzIiwiY3JlYXRlUmFkaW8iLCJjcmVhdGVMYWJlbCIsImNlbGw0IiwicGFja2VkQW1vdW50IiwiY2VsbDUiLCJ0b3RhbExpbmVXZWlnaHQiLCJpY29uQ2VsbCIsImljb24iLCJhZGRFdmVudExpc3RlbmVyV2VpZ2h0Q2FsYyIsInVwZGF0ZVVPTSIsInVzUmFkaW9Ub01ldHJpYyIsIm1ldHJpY1JhZGlvVG9VcyIsIm5lZWRlZEZvcldlaWdodHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibmVlZGVkRm9yV2VpZ2h0IiwiZ2V0TGluZVRvdGFsV2VpZ2h0IiwiY29udmVydCIsIndlaWdodCIsInVvbSIsImxpbmVUb3RhbFdlaWdodEVsZW1lbnQiLCJsaW5lVG90YWwiLCJ0b0ZpeGVkIiwicmVwbGFjZSIsInVwZGF0ZUxpc3RJdGVtIiwiY29udmVydE1lYXN1cmVtZW50IiwiaXNNYXN0ZXJMaXN0IiwidG90YWxXZWlnaHQiLCJ0b3RhbExpbmVXZWlnaHRWYWx1ZSIsIndlaWdodFZhbHVlIiwic21hbGwiLCJsYXJnZSIsImxhYmVsIiwibGFiZWxIVE1MIiwiYWRkQ2F0ZWdvcnlHcm91cCIsImNhdGVnb3J5IiwiY29sdW1uTmFtZSIsImdldEJvb2xlYW5EYXRhIiwibG9jYXRpb24iLCJyZWxvYWQiLCJlcnIiLCJpZEFyciIsInNwbGl0IiwiYXJyTGVuZ3RoIiwiaXRlbUlkVmFsdWUiLCJzdWJzdHJpbmciLCJyZXNEYXRhIiwibmV3SWQiLCJnZXREZWxldGVCdG5EYXRhIiwidXBkYXRlVG90YWxMaXN0V2VpZ2h0cyIsIndlaWdodHNGb3JQVyIsImJhc2VXZWlnaHQiLCJ0b3RhbFBhY2tXZWlnaHQiLCJtYXhQYWNrV2VpZ2h0IiwiY2xhc3NXYXJuaW5nVmFsdWUiLCJ1b21UZXh0Iiwid2VpZ2h0Rm9yUFciLCJjb252ZXJ0ZXIiLCJyb3dXZWlnaHQiLCJpdGVtQ2F0ZWdvcnlFbGVtZW50IiwiaXRlbUNhdGVnb3J5IiwiZGl2RWxlbWVudCIsImlubmVyVGV4dCIsInN0eWxlIiwiZGlzcGxheSIsIm5hbWVCYXNlIiwib3B0aW9uIiwib3B0aW9uTGlzdCIsIl9yZWYiLCJfY2FsbGVlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInQwIiwic2VsZWN0ZWQiLCJpbnB1dEVsZW1lbnRzIiwiaW5wdXRFbGVtZW50IiwiZWxlbWVudFR5cGUiLCJlbGVtZW50VGFnIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwibmV3RWxlbWVudCIsInBhcmVudEVsZW1lbnQiLCJyZXBsYWNlQ2hpbGQiLCJkYXRhQ29sdW1uTmFtZSIsInJhZGlvIiwiaW5uZXJIdG1sIiwiaHRtbEZvciIsImxpbmVMYWJlbCIsInVwZGF0ZUxpc3QiLCJoZWFkZXJzIiwiY29udGVudCIsIm5leHRFbGVtZW50U2libGluZyIsImFycm93IiwicXVlcnlTZWxlY3RvciIsImNvbnRhaW5zIiwicmVtb3ZlIiwibWF4SGVpZ2h0IiwicGFkZGluZyIsInNjcm9sbEhlaWdodCIsImlucHV0cyIsImlucHV0IiwiZGlzYWJsZWQiLCJsaXN0Q2hhcnRidG4iLCJjaGFydFN0YXR1cyIsImdldENoYXJ0IiwiZGVzdHJveSIsImN0eCIsImNoYXJ0RGF0YSIsIkpTT04iLCJwYXJzZSIsIm15Q2hhcnQiLCJsYWJlbHMiLCJkYXRhc2V0cyIsIndlaWdodHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvcnMiLCJib3JkZXJXaWR0aCIsImhvdmVyT2Zmc2V0Iiwib3B0aW9ucyIsImN1dG91dCIsInJhZGl1cyIsImxlZ2VuZCIsInBsdWdpbnMiLCJkYXRhbGFiZWxzIiwiYW5pbWF0aW9uIiwiYW5pbWF0ZVJvdGF0ZSIsImFuaW1hdGVTY2FsZSIsInRleHRDb250ZW50Iiwic2hvd0NvbnZyc2lvbkFsZXJ0IiwiY29uZmlybURlbGV0ZSIsImlzTWFzdGVyIiwiaHJlZiIsIm9iamVjdFR5cGUiLCJhbmNob3IiLCJtb2RhbEJvZHkiLCJjb25jYXQiLCJoZWxwZXJEaXYiLCJoZWxwdGV4dCIsImxpc3ROYW1lIiwicmVtb3ZlUm93IiwidGFibGVSb3ciLCJidXR0b24iLCJ0aXRsZSIsIm9uY2xpY2siLCJpdGVtIiwiaXRlbV9uYW1lIiwiY2F0ZWdvcnlJZCIsIm9uRW5kIiwiZXZ0Iiwib3JkZXJlZElkcyIsInVwZGF0ZUl0ZW1PcmRlciIsImNhdGVnb3J5X2lkIiwib3JkZXJlZF9pZHMiLCJzb3J0aW5nU2VsZWN0Iiwib3B0cyIsInBhcmVudENvbnRhaW5lciIsImdob3N0Q2xhc3MiLCJ1cGRhdGVDYXRlZ29yeU9yZGVyIiwibmV3T3JkZXIiLCJpbmRleCIsIml0ZW1fY2F0ZWdvcnkiLCJjYXRlZ29yeV9vcmRlciIsImFzc2lnblRvTGlzdE1vZGFsIiwidGFibGVCb2R5IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiZGVmYXVsdHMiLCJjb21tb24iXSwic291cmNlUm9vdCI6IiJ9