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
      var deleteBtn = document.createElement("a");
      deleteBtn.id = "deleteBtn-" + finalI;
      deleteBtn.className = "btn btn-primary btn-sm  py-2";
      deleteBtn.innerHTML = "x";

      // let data = {};
      // let url = "/list-item";

      // if (listUOM == "us") {
      //     data = getBooleanData("in_ounces");
      // } else {
      //     data = getBooleanData("in_grams");
      // }
      // data["list_id"] = listId;
      // data["user_id"] = userId;
      // data["item_name"] = "";
      // if(groupCategory !== null){
      //     data['item_category'] = groupCategory;
      // }

      // let updateItem;
      // updateItem = async function () {
      //     try {
      //         const response = await axios.post(url, data);
      //         // alert(
      //         //     "response fro new input: " + JSON.stringify(response)
      //         // );
      //         return response.data;
      //     } catch (error) {
      //         // handle error
      //         console.log(error);
      //     }
      // };

      // // To use the function and handle the response data
      // updateItem().then((data) => {
      //     // Do something with the response data
      //     counter.value = data.newId;
      //     row.setAttribute("data-id", data.newId);
      //     deleteBtn.setAttribute(
      //         "href",
      //         "/destroy-list-item/" + data.newId
      //     );
      // });

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
    var deleteBtn = document.getElementById('deleteBtn-' + row);
    var deleteHref = '/remove-list-item/';
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
        deleteBtn.setAttribute('href', deleteHref + '/' + resData.newId);
      }
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

    // To use the function and handle the response data
    optionList().then(function (data) {
      // Do something with the response data
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
  this.window.confirmDelete = function confirmDelete(listId) {
    if (confirm('Are you sure you want to delete this list?')) {
      window.location.href = "/destroy-list/".concat(listId);
    }
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDMXBDd0I7QUFDMUJuUCxNQUFNLENBQUNnRCxLQUFLLEdBQUdBLDZDQUFLO0FBRXBCaEQsTUFBTSxDQUFDZ0QsS0FBSyxDQUFDcU0sUUFBUSxDQUFDakUsT0FBTyxDQUFDa0UsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsZ0JBQWdCOzs7Ozs7Ozs7OztBQ0gzRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Fzcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgJy4vYm9vdHN0cmFwJyA7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCJib290c3RyYXBcIjtcbi8vIGltcG9ydCAgJ2Jvb3RzdHJhcCc7XG5pbXBvcnQgXCJAcG9wcGVyanMvY29yZVwiO1xuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qcy9hdXRvXCI7XG5pbXBvcnQgU29ydGFibGUgZnJvbSBcInNvcnRhYmxlanNcIjtcbmNvbnN0IGJvb3RzdHJhcCA9IHJlcXVpcmUoXCIuL2Jvb3RzdHJhcFwiKTtcbmNvbnN0IGdyYW1Db252ZXJ0ZXIgPSAxMDAwO1xuY29uc3Qgb3VuY2VDb252ZXJ0ZXIgPSAxNjtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoZSkge1xuICAgIHRoaXMud2luZG93LnNob3dQYXNzd29yZCA9IGZ1bmN0aW9uIHNob3dQYXNzd29yZChpZCkge1xuICAgICAgICBsZXQgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgIGlmIChwYXNzd29yZC50eXBlID09PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgICAgICAgIHBhc3N3b3JkLnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhc3N3b3JkLnR5cGUgPSBcInBhc3N3b3JkXCI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMud2luZG93LmFkZE1hc3Rlckxpc3RJdGVtID0gZnVuY3Rpb24gYWRkTWFzdGVyTGlzdEl0ZW0oKSB7XG4gICAgICAgIGxldCBudW1iZXJPZkl0ZW1zVG9BZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmVzVG9BZGRcIik7XG4gICAgICAgIGxldCBsaW5lc1RvQWRkID0gMTtcbiAgICAgICAgaWYgKG51bWJlck9mSXRlbXNUb0FkZCA9PT0gbnVsbCB8fCArbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlIDwgMSkge1xuICAgICAgICAgICAgbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlID0gbGluZXNUb0FkZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpbmVzVG9BZGQgPSArbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lc1RvQWRkOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBsaXN0QnlJdGVtcyA9IHRydWU7XG4gICAgICAgICAgICBsZXQgbGlzdGVuID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgaXRlbVRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWl0ZW0tdGFibGUtYm9keScpO1xuICAgICAgICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIGNlbGxzIGFuZCBpbnB1dCBlbGVtZW50cy5cbiAgICAgICAgICAgIGxldCBjZWxsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcblxuICAgICAgICAgICAgbGV0IGl0ZW1OYW1lID0gY3JlYXRlTGlzdEl0ZW1JbnB1dChcbiAgICAgICAgICAgICAgICBcInRleHRcIixcbiAgICAgICAgICAgICAgICBcIml0ZW1OYW1lXCIsXG4gICAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgICBcIml0ZW1fbmFtZVwiLFxuICAgICAgICAgICAgICAgIGxpc3RlblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGl0ZW1OYW1lLnBsYWNlaG9sZGVyID0gXCJJdGVtIE5hbWVcIjtcbiAgICAgICAgICAgIGl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRyb2xcIik7XG5cbiAgICAgICAgICAgIGxldCBjZWxsNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGNlbGw2LmlkID0gXCJidG4tdGQtXCIgK2k7XG4gICAgICAgICAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgICAgICBkZWxldGVCdG4uaWQgPSBcImRlbGV0ZUJ0bi1cIiArIGk7XG4gICAgICAgICAgICBkZWxldGVCdG4uY2xhc3NOYW1lID0gXCJidG4gYnRuLXByaW1hcnkgYnRuLXNtICBweS0yXCI7XG4gICAgICAgICAgICBkZWxldGVCdG4uaW5uZXJIVE1MID0gXCJ4XCI7XG5cblxuICAgICAgICAgICAgbGV0IGNlbGwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgbGV0IGl0ZW1XZWlnaHQgPSBjcmVhdGVMaXN0SXRlbUlucHV0KFxuICAgICAgICAgICAgICAgIFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgXCJpdGVtV2VpZ2h0XCIsXG4gICAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgICBcIml0ZW1fd2VpZ2h0XCIsXG4gICAgICAgICAgICAgICAgbGlzdGVuXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaXRlbVdlaWdodC52YWx1ZSA9IDA7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJmb3Itd2VpZ2h0XCIpO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWlucHV0XCIpO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5zdHlsZS53aWR0aCA9ICc0MCUnO1xuICAgICAgICAgICAgY2VsbDIuY2xhc3NMaXN0LmFkZChcIm51bWJlci1jb2xcIik7XG5cbiAgICAgICAgICAgIGxldCBjZWxsMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGxldCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICAgICAgc2VsZWN0LmlkID0gXCJ1b20tXCIgKyBpO1xuICAgICAgICAgICAgc2VsZWN0Lm5hbWUgPSBcInVvbVtdXCI7XG4gICAgICAgICAgICBzZWxlY3Quc2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4tbmFtZVwiLCBcInVvbVwiKTtcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiO1xuXG4gICAgICAgICAgICBsZXQgb3pPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgbGV0IGxic09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBsZXQgZ3JPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgbGV0IGtnT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIG96T3B0aW9uLnZhbHVlID0gXCJpbl9vdW5jZXNcIjtcbiAgICAgICAgICAgIG96T3B0aW9uLnRleHQgPSBcIk9aXCI7XG4gICAgICAgICAgICBsYnNPcHRpb24udmFsdWUgID0gJ2luX2xicyc7XG4gICAgICAgICAgICBsYnNPcHRpb24udGV4dCA9ICdMQlMnXG5cbiAgICAgICAgICAgIGdyT3B0aW9uLnZhbHVlID0gXCJpbl9ncmFtc1wiO1xuICAgICAgICAgICAgZ3JPcHRpb24udGV4dCA9IFwiR1wiO1xuICAgICAgICAgICAga2dPcHRpb24udmFsdWUgID0gJ2luX2tpbG9zJztcbiAgICAgICAgICAgIGtnT3B0aW9uLnRleHQgPSAnS0cnO1xuICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG96T3B0aW9uKTtcbiAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChsYnNPcHRpb24pO1xuICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKGdyT3B0aW9uKTtcbiAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChrZ09wdGlvbik7XG5cbiAgICAgICAgICAgIC8vYXBwZW5kIGlucHV0cyB0byBjZWxscy5cbiAgICAgICAgICAgIGNlbGwxLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIGNlbGwyLmFwcGVuZENoaWxkKGl0ZW1XZWlnaHQpO1xuXG4gICAgICAgICAgICBsZXQgc2VsZWN0Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGxldCBjYXRlZ29yeVNlbGVjdCA9IGdldENhdGVncm95U2VsZWN0KGksbnVsbCwgbGlzdGVuKTtcbiAgICAgICAgICAgIGNhdGVnb3J5U2VsZWN0Lm5hbWUgPSAnaXRlbUNhdGVnb3J5W10nXG4gICAgICAgICAgICBzZWxlY3RDZWxsLmFwcGVuZChjYXRlZ29yeVNlbGVjdCk7XG5cbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gICAgICAgICAgICBjZWxsNi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgY2VsbHMgdG8gdGhlIHJvdy5cbiAgICAgICAgICAgIC8vIHJvdy5hcHBlbmRDaGlsZChpY29uQ2VsbCk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDEpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHNlbGVjdENlbGwpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwzKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsMik7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDYpO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIHJvdyB0byB0aGUgdGFibGUuXG4gICAgICAgICAgICBpdGVtVGFibGUuYXBwZW5kQ2hpbGQocm93KTtcblxuXG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0l0ZW1Db3VudCcpLnZhbHVlID0gbGluZXNUb0FkZDtcbiAgICAgICAgbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlID0gMTtcbiAgICB9O1xuICAgIHRoaXMud2luZG93LnNob3dMaXN0QXNzaWduTW9kYWwgPSBmdW5jdGlvbiBzaG93TGlzdEFzc2lnbk1vZGFsKGl0ZW1JZCxpdGVtTmFtZSl7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1JZGZvckFzc2lnbicpLnZhbHVlID0gaXRlbUlkO1xuICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlckl0ZW1JZGZvckFzc2lnbicpLnZhbHVlID0gdXNlckl0ZW1JZDtcblxuICAgICAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWFzc2lnbi1pdGVtLXRhYmxlLWJvZHlcIik7XG4gICAgICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQXNzaWduSXRlbVRvTGlzdE1vZGFsTGFiZWwnKTtcbiAgICAgICAgaGVhZGVyLmlubmVySFRNTCA9ICdBc3NpZ24vVW5hc3NpZ24gaXRlbTogJytpdGVtTmFtZTtcblxuICAgICAgICBsZXQgdXJsID0gJy9nZXQtdXNlci1saXN0cy8nK2l0ZW1JZDtcbiAgICAgICAgbGV0IHVzZXJMaXN0cztcblxuICAgICAgICBheGlvcy5nZXQodXJsKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgdXNlckxpc3RzID0gZGF0YS51c2VyTGlzdHM7XG5cbiAgICAgICAgICAgIGlmKGRhdGEuc3RhdHVzICE9PSAnMScpe1xuICAgICAgICAgICAgICAgIGFsZXJ0KGRhdGEubXNnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXNlckxpc3RzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICAgICAgICAgIGxldCBsaXN0TmFtZUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICAgICAgbGV0IGFzc2lnbkNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG5cbiAgICAgICAgICAgICAgICBsaXN0TmFtZUNlbGwuaW5uZXJIVE1MID0gdXNlckxpc3RzW2ldLm5hbWU7XG5cbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICAgICAgICAgIGNoZWNrYm94LmlkID0gJ2xpc3RDaGVja0JveC0nK2k7XG4gICAgICAgICAgICAgICAgY2hlY2tib3gubmFtZSA9ICdsaXN0SWRzW10nO1xuICAgICAgICAgICAgICAgIGNoZWNrYm94LnZhbHVlID0gdXNlckxpc3RzW2ldLmlkO1xuXG4gICAgICAgICAgICAgICAgaWYodXNlckxpc3RzW2ldLml0ZW1Bc3NpZ25lZCA9PSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYXNzaWduQ2VsbC5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGxpc3ROYW1lQ2VsbCk7XG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGFzc2lnbkNlbGwpO1xuICAgICAgICAgICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgdGhpcy53aW5kb3cuYXNzaWduVG9HZWFyTGlzdCA9IGZ1bmN0aW9uIGFzc2lnblRvR2Vhckxpc3QoZWxlbWVudCl7XG4gICAgICAgIGxldCBsaXN0SWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0LWlkJyk7XG4gICAgICAgIGxldCBpdGVtSWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pdGVtLWlkJyk7XG5cbiAgICAgICAgaWYoIWVsZW1lbnQuY2hlY2tlZCl7XG4gICAgICAgICAgICBsaXN0SWQgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB1cmwgPSAnL2Fzc2lnbi10by1nZWFyLWxpc3QnXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgbGlzdF9pZDogbGlzdElkLFxuICAgICAgICAgICAgaWQ6IGl0ZW1JZFxuICAgICAgICB9O1xuXG5cbiAgICAgICAgYXhpb3MucG9zdCh1cmwsZGF0YSlcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAxKXtcblxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgYWxlcnQocmVzcG9uc2UubXNnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgdGhpcy53aW5kb3cuYWRkTGlzdEl0ZW0gPSBmdW5jdGlvbiBhZGRMaXN0SXRlbShjYXRlZ29yeWNvdW50ZXIgPSBudWxsLCBncm91cENhdGVnb3J5ID0gbnVsbCkge1xuICAgICAgICBsZXQgbnVtYmVyT2ZJdGVtc1RvQWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lc1RvQWRkXCIpO1xuICAgICAgICBsZXQgbGluZXNUb0FkZCA9IDE7XG4gICAgICAgIGlmIChudW1iZXJPZkl0ZW1zVG9BZGQgPT09IG51bGwgfHwgK251bWJlck9mSXRlbXNUb0FkZC52YWx1ZSA8IDEpIHtcbiAgICAgICAgICAgIG51bWJlck9mSXRlbXNUb0FkZC52YWx1ZSA9IGxpbmVzVG9BZGQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaW5lc1RvQWRkID0gK251bWJlck9mSXRlbXNUb0FkZC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXNUb0FkZDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbGlzdFVPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tXCIpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGZpbmFsSUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbmFsLWlcIik7XG4gICAgICAgICAgICBsZXQgbGlzdEJ5SXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RCeUl0ZW1zXCIpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGl0ZW1UYWJsZTtcblxuICAgICAgICAgICAgaWYgKCtsaXN0QnlJdGVtcyA9PSAxKSB7XG4gICAgICAgICAgICAgICAgbGlzdEJ5SXRlbXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGl0ZW1UYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXRlbS10YWJsZS1ib2R5XCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsaXN0QnlJdGVtcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxldCB0YWJsZUNhdGVnb3J5ID0gY2F0ZWdvcnljb3VudGVyO1xuICAgICAgICAgICAgICAgIGl0ZW1UYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgICAgICAgICAgICBcImNhdGVnb3J5VGFibGUtXCIgKyB0YWJsZUNhdGVnb3J5XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHVzZXJJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcklkXCIpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGxpc3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdElkXCIpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGZpbmFsSSA9IGZpbmFsSUVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICBmaW5hbElFbGVtZW50LnZhbHVlID0gK2ZpbmFsSSArIDE7XG5cbiAgICAgICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgICAgICByb3cuaWQgPSAncm93LScrZmluYWxJO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgY2VsbHMgYW5kIGlucHV0IGVsZW1lbnRzLlxuICAgICAgICAgICAgbGV0IGNlbGwwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgICAgICAgICAgY2VsbDAuc2NvcGUgPSBcInJvd1wiO1xuICAgICAgICAgICAgY2VsbDAuaW5uZXJIVE1MID0gZmluYWxJO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG5cbiAgICAgICAgICAgIGxldCBjb3VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgY291bnRlci50eXBlID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgIGNvdW50ZXIubmFtZSA9IFwiaWRbXVwiO1xuICAgICAgICAgICAgY291bnRlci5pZCA9IFwiaWQtXCIgKyBmaW5hbEk7XG4gICAgICAgICAgICBjb3VudGVyLnZhbHVlID0gXCJuZXctXCIgKyBmaW5hbEk7XG4gICAgICAgICAgICBjb3VudGVyLnNldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uLW5hbWVcIiwgXCJpZFwiKTtcblxuICAgICAgICAgICAgbGV0IHVwZGF0ZU1hc3Rlckxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICB1cGRhdGVNYXN0ZXJMaXN0LnR5cGUgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgdXBkYXRlTWFzdGVyTGlzdC5uYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHVwZGF0ZU1hc3Rlckxpc3QuaWQgPSBcInVwZGF0ZU1hc3Rlci1cIitmaW5hbEk7XG4gICAgICAgICAgICB1cGRhdGVNYXN0ZXJMaXN0LnZhbHVlID0gXCJ0cnVlXCI7XG5cblxuICAgICAgICAgICAgbGV0IGl0ZW1OYW1lID0gY3JlYXRlTGlzdEl0ZW1JbnB1dChcbiAgICAgICAgICAgICAgICBcInRleHRcIixcbiAgICAgICAgICAgICAgICBcIml0ZW1OYW1lXCIsXG4gICAgICAgICAgICAgICAgZmluYWxJLFxuICAgICAgICAgICAgICAgIFwiaXRlbV9uYW1lXCJcblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGl0ZW1OYW1lLnBsYWNlaG9sZGVyID0gXCJJdGVtIE5hbWVcIjtcbiAgICAgICAgICAgIGl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRyb2xcIik7XG5cbiAgICAgICAgICAgIGxldCBjZWxsNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGNlbGw2LmlkID0gXCJidG4tdGQtXCIgKyBmaW5hbEk7XG4gICAgICAgICAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgICAgICBkZWxldGVCdG4uaWQgPSBcImRlbGV0ZUJ0bi1cIiArIGZpbmFsSTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5jbGFzc05hbWUgPSBcImJ0biBidG4tcHJpbWFyeSBidG4tc20gIHB5LTJcIjtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5pbm5lckhUTUwgPSBcInhcIjtcblxuICAgICAgICAgICAgLy8gbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgICAgIC8vIGxldCB1cmwgPSBcIi9saXN0LWl0ZW1cIjtcblxuICAgICAgICAgICAgLy8gaWYgKGxpc3RVT00gPT0gXCJ1c1wiKSB7XG4gICAgICAgICAgICAvLyAgICAgZGF0YSA9IGdldEJvb2xlYW5EYXRhKFwiaW5fb3VuY2VzXCIpO1xuICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgICBkYXRhID0gZ2V0Qm9vbGVhbkRhdGEoXCJpbl9ncmFtc1wiKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIGRhdGFbXCJsaXN0X2lkXCJdID0gbGlzdElkO1xuICAgICAgICAgICAgLy8gZGF0YVtcInVzZXJfaWRcIl0gPSB1c2VySWQ7XG4gICAgICAgICAgICAvLyBkYXRhW1wiaXRlbV9uYW1lXCJdID0gXCJcIjtcbiAgICAgICAgICAgIC8vIGlmKGdyb3VwQ2F0ZWdvcnkgIT09IG51bGwpe1xuICAgICAgICAgICAgLy8gICAgIGRhdGFbJ2l0ZW1fY2F0ZWdvcnknXSA9IGdyb3VwQ2F0ZWdvcnk7XG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgIC8vIGxldCB1cGRhdGVJdGVtO1xuICAgICAgICAgICAgLy8gdXBkYXRlSXRlbSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vICAgICB0cnkge1xuICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QodXJsLCBkYXRhKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgLy8gYWxlcnQoXG4gICAgICAgICAgICAvLyAgICAgICAgIC8vICAgICBcInJlc3BvbnNlIGZybyBuZXcgaW5wdXQ6IFwiICsgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpXG4gICAgICAgICAgICAvLyAgICAgICAgIC8vICk7XG4gICAgICAgICAgICAvLyAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIC8vIGhhbmRsZSBlcnJvclxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gfTtcblxuICAgICAgICAgICAgLy8gLy8gVG8gdXNlIHRoZSBmdW5jdGlvbiBhbmQgaGFuZGxlIHRoZSByZXNwb25zZSBkYXRhXG4gICAgICAgICAgICAvLyB1cGRhdGVJdGVtKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIC8vIERvIHNvbWV0aGluZyB3aXRoIHRoZSByZXNwb25zZSBkYXRhXG4gICAgICAgICAgICAvLyAgICAgY291bnRlci52YWx1ZSA9IGRhdGEubmV3SWQ7XG4gICAgICAgICAgICAvLyAgICAgcm93LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgZGF0YS5uZXdJZCk7XG4gICAgICAgICAgICAvLyAgICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgIC8vICAgICAgICAgXCJocmVmXCIsXG4gICAgICAgICAgICAvLyAgICAgICAgIFwiL2Rlc3Ryb3ktbGlzdC1pdGVtL1wiICsgZGF0YS5uZXdJZFxuICAgICAgICAgICAgLy8gICAgICk7XG4gICAgICAgICAgICAvLyB9KTtcblxuXG4gICAgICAgICAgICBsZXQgY2VsbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBsZXQgaXRlbVdlaWdodCA9IGNyZWF0ZUxpc3RJdGVtSW5wdXQoXG4gICAgICAgICAgICAgICAgXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICBcIml0ZW1XZWlnaHRcIixcbiAgICAgICAgICAgICAgICBmaW5hbEksXG4gICAgICAgICAgICAgICAgXCJpdGVtX3dlaWdodFwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaXRlbVdlaWdodC52YWx1ZSA9IDA7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJmb3Itd2VpZ2h0XCIpO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWlucHV0XCIpO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xuICAgICAgICAgICAgY2VsbDIuY2xhc3NMaXN0LmFkZChcIm51bWJlci1jb2xcIik7XG5cbiAgICAgICAgICAgIGxldCBjZWxsMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGxldCBsaW5lVW9tQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGNlbGwzLmNsYXNzTGlzdC5hZGQoXCJ1b20tdGRcIik7XG4gICAgICAgICAgICBsaW5lVW9tQ2VsbC5jbGFzc0xpc3QuYWRkKFwidW9tLXRkXCIpO1xuICAgICAgICAgICAgbGV0IHJhZGlvMTtcbiAgICAgICAgICAgIGxldCByYWRpbzI7XG4gICAgICAgICAgICBsZXQgcmFkaW9MYWJlbDE7XG4gICAgICAgICAgICBsZXQgcmFkaW9MYWJlbDI7XG4gICAgICAgICAgICBsZXQgcmFkaW9MYWJlbDM7XG5cbiAgICAgICAgICAgIGlmIChsaXN0VU9NID09PSBcInVzXCIpIHtcbiAgICAgICAgICAgICAgICByYWRpbzEgPSBjcmVhdGVSYWRpbyhcImluX291bmNlc1wiLCBcIlwiLCBcIm96XCIsIGZpbmFsSSk7XG4gICAgICAgICAgICAgICAgcmFkaW9MYWJlbDEgPSBjcmVhdGVMYWJlbChcbiAgICAgICAgICAgICAgICAgICAgXCJPWlwiLFxuICAgICAgICAgICAgICAgICAgICBcInVvbS1vei1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgICAgICAgICAgXCJvelwiLFxuICAgICAgICAgICAgICAgICAgICBmaW5hbElcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJhZGlvMiA9IGNyZWF0ZVJhZGlvKFwiaW5fbGJzXCIsIFwiXCIsIFwibGJzXCIsIGZpbmFsSSk7XG4gICAgICAgICAgICAgICAgcmFkaW9MYWJlbDIgPSBjcmVhdGVMYWJlbChcbiAgICAgICAgICAgICAgICAgICAgXCJMQlNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ1b20tbGJzLVwiICsgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICBcImxic1wiLFxuICAgICAgICAgICAgICAgICAgICBmaW5hbElcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJhZGlvTGFiZWwzID0gY3JlYXRlTGFiZWwoXG4gICAgICAgICAgICAgICAgICAgIFwiT1pcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ1b20tb3otXCIgKyBmaW5hbEksXG4gICAgICAgICAgICAgICAgICAgIFwib3pcIixcbiAgICAgICAgICAgICAgICAgICAgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmFkaW8xID0gY3JlYXRlUmFkaW8oXCJpbl9ncmFtc1wiLCBcIlwiLCBcImdyYW1cIiwgZmluYWxJKTtcbiAgICAgICAgICAgICAgICByYWRpb0xhYmVsMSA9IGNyZWF0ZUxhYmVsKFxuICAgICAgICAgICAgICAgICAgICBcIkdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ1b20tZ3JhbS1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgICAgICAgICAgXCJncmFtXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsSVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmFkaW8yID0gY3JlYXRlUmFkaW8oXCJpbl9raWxvc1wiLCBcIlwiLCBcImtnXCIsIGZpbmFsSSk7XG4gICAgICAgICAgICAgICAgcmFkaW9MYWJlbDIgPSBjcmVhdGVMYWJlbChcbiAgICAgICAgICAgICAgICAgICAgXCJLR1wiLFxuICAgICAgICAgICAgICAgICAgICBcInVvbS1rZy1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgICAgICAgICAgXCJrZ1wiLFxuICAgICAgICAgICAgICAgICAgICBmaW5hbElcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJhZGlvTGFiZWwzID0gY3JlYXRlTGFiZWwoXG4gICAgICAgICAgICAgICAgICAgIFwiR1wiLFxuICAgICAgICAgICAgICAgICAgICBcInVvbS1ncmFtLVwiICsgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICBcImdyYW1cIixcbiAgICAgICAgICAgICAgICAgICAgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGNlbGw0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgY2VsbDQuY2xhc3NMaXN0LmFkZChcIm51bWJlci1jb2xcIik7XG4gICAgICAgICAgICBsZXQgcGFja2VkQW1vdW50ID0gY3JlYXRlTGlzdEl0ZW1JbnB1dChcbiAgICAgICAgICAgICAgICBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIFwicGFja2VkQW1vdW50XCIsXG4gICAgICAgICAgICAgICAgZmluYWxJLFxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBwYWNrZWRBbW91bnQudmFsdWUgPSAxO1xuXG4gICAgICAgICAgICBwYWNrZWRBbW91bnQuY2xhc3NMaXN0LmFkZChcImZvci13ZWlnaHRcIik7XG4gICAgICAgICAgICBwYWNrZWRBbW91bnQuY2xhc3NMaXN0LmFkZChcIm51bWJlci1pbnB1dFwiKTtcbiAgICAgICAgICAgIHBhY2tlZEFtb3VudC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBjZWxsNS5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWNvbFwiKTtcbiAgICAgICAgICAgIGxldCB0b3RhbExpbmVXZWlnaHQgPSBjcmVhdGVMaXN0SXRlbUlucHV0KFxuICAgICAgICAgICAgICAgIFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgXCJ0b3RhbExpbmVXZWlnaHRcIixcbiAgICAgICAgICAgICAgICBmaW5hbEksXG4gICAgICAgICAgICAgICAgXCJ0b3RhbF9saW5lX3dlaWdodFwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LnZhbHVlID0gMDtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgXCJkYXRhLWNvbHVtbi1uYW1lXCIsXG4gICAgICAgICAgICAgICAgXCJ0b3RhbF9saW5lX3dlaWdodFwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LnNldEF0dHJpYnV0ZShcInJlYWRvbmx5XCIsIHRydWUpO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJudW1iZXItaW5wdXRcIik7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC5jbGFzc0xpc3QuYWRkKFwiZm9yLXRvdGFsLWxpc3Qtd2VpZ2h0XCIpO1xuXG4gICAgICAgICAgICAvL2FwcGVuZCBpbnB1dHMgdG8gY2VsbHMuXG5cbiAgICAgICAgICAgIC8vIERlZmluZSB0aGUgU1ZHIG5hbWVzcGFjZVxuICAgICAgICAgICAgY29uc3Qgc3ZnTmFtZXNwYWNlID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuICAgICAgICAgICAgbGV0IGljb25DZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IFNWRyBlbGVtZW50XG4gICAgICAgICAgICBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOYW1lc3BhY2UsIFwic3ZnXCIpO1xuICAgICAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjE2XCIpO1xuICAgICAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIxNlwiKTtcbiAgICAgICAgICAgIGljb24uc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcImN1cnJlbnRDb2xvclwiKTtcbiAgICAgICAgICAgIGljb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJiaSBiaS1ncmlwLXZlcnRpY2FsXCIpO1xuICAgICAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDE2IDE2XCIpO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIDxwYXRoPiBlbGVtZW50XG4gICAgICAgICAgICBsZXQgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOYW1lc3BhY2UsIFwicGF0aFwiKTtcbiAgICAgICAgICAgIHBhdGguc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgICAgIFwiZFwiLFxuICAgICAgICAgICAgICAgIFwiTTcgMmExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBtMyAwYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgME03IDVhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbTMgMGExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBNNyA4YTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMG0zIDBhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbS0zIDNhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbTMgMGExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBtLTMgM2ExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBtMyAwYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMFwiXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIHBhdGggdG8gdGhlIFNWR1xuICAgICAgICAgICAgaWNvbi5hcHBlbmRDaGlsZChwYXRoKTtcblxuICAgICAgICAgICAgLy8gLy8gQXBwZW5kIHRoZSBTVkcgaWNvbiB0byB0aGUgY2VsbFxuICAgICAgICAgICAgaWNvbkNlbGwuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICAgICAgICAgIGNlbGwxLmFwcGVuZENoaWxkKGNvdW50ZXIpO1xuICAgICAgICAgICAgY2VsbDEuYXBwZW5kQ2hpbGQodXBkYXRlTWFzdGVyTGlzdCk7XG4gICAgICAgICAgICBjZWxsMS5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gICAgICAgICAgICBjZWxsMi5hcHBlbmRDaGlsZChpdGVtV2VpZ2h0KTtcblxuICAgICAgICAgICAgbGV0IHNlbGVjdENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBsZXQgY2F0ZWdvcnlTZWxlY3QgPSBnZXRDYXRlZ3JveVNlbGVjdChmaW5hbEksIGdyb3VwQ2F0ZWdvcnkpO1xuXG4gICAgICAgICAgICBzZWxlY3RDZWxsLmFwcGVuZChjYXRlZ29yeVNlbGVjdCk7XG5cbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHJhZGlvMSk7XG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChyYWRpb0xhYmVsMSk7XG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChyYWRpbzIpO1xuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbDIpO1xuXG4gICAgICAgICAgICBjZWxsNC5hcHBlbmRDaGlsZChwYWNrZWRBbW91bnQpO1xuICAgICAgICAgICAgY2VsbDUuYXBwZW5kQ2hpbGQodG90YWxMaW5lV2VpZ2h0KTtcbiAgICAgICAgICAgIGxpbmVVb21DZWxsLmFwcGVuZENoaWxkKHJhZGlvTGFiZWwzKTtcbiAgICAgICAgICAgIGNlbGw2LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgICAgICAgICAgIC8vIEFwcGVuZCBjZWxscyB0byB0aGUgcm93LlxuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGljb25DZWxsKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsMSk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoc2VsZWN0Q2VsbCk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDMpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwyKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsNCk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDUpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGxpbmVVb21DZWxsKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsNik7XG5cbiAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgcm93IHRvIHRoZSB0YWJsZS5cbiAgICAgICAgICAgIGl0ZW1UYWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICAgICAgLy9hZGQgZnVuY3Rpb25zIHRvIGNhbGN1bGF0ZSBhbmQgY29udmVydCB0b3RhbCB3ZWlnaHQuXG4gICAgICAgICAgICBhZGRFdmVudExpc3RlbmVyV2VpZ2h0Q2FsYyhmaW5hbEkpO1xuICAgICAgICB9XG4gICAgICAgIG51bWJlck9mSXRlbXNUb0FkZC52YWx1ZSA9IDE7XG4gICAgfTtcblxuICAgIHRoaXMud2luZG93LnVwZGF0ZVVPTSA9IGZ1bmN0aW9uIHVwZGF0ZVVPTSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgIT09IFwidXNcIikge1xuICAgICAgICAgICAgdXNSYWRpb1RvTWV0cmljKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZXRyaWNSYWRpb1RvVXMoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcldlaWdodENhbGMocm93KSB7XG4gICAgICAgIGxldCBuZWVkZWRGb3JXZWlnaHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3Itd2VpZ2h0XCIpO1xuICAgICAgICBuZWVkZWRGb3JXZWlnaHRzLmZvckVhY2goZnVuY3Rpb24gKG5lZWRlZEZvcldlaWdodCkge1xuICAgICAgICAgICAgbmVlZGVkRm9yV2VpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGdldExpbmVUb3RhbFdlaWdodChyb3cpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMud2luZG93LmdldExpbmVUb3RhbFdlaWdodCA9IGZ1bmN0aW9uIGdldExpbmVUb3RhbFdlaWdodChcbiAgICAgICAgcm93LFxuICAgICAgICBjb252ZXJ0ID0gZmFsc2VcbiAgICApIHtcbiAgICAgICAgbGV0IHdlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXRlbVdlaWdodC1cIiArIHJvdykudmFsdWU7XG4gICAgICAgIGxldCBwYWNrZWRBbW91bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhY2tlZEFtb3VudC1cIiArIHJvdykudmFsdWU7XG4gICAgICAgIGxldCB1b20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbVwiKTtcbiAgICAgICAgbGV0IGxpbmVUb3RhbFdlaWdodEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgIFwidG90YWxMaW5lV2VpZ2h0LVwiICsgcm93XG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IGxpbmVUb3RhbCA9IDA7XG4gICAgICAgIGxpbmVUb3RhbCA9ICt3ZWlnaHQgKiArcGFja2VkQW1vdW50O1xuICAgICAgICBsaW5lVG90YWwgPSBsaW5lVG90YWwudG9GaXhlZCgzKS5yZXBsYWNlKC9bLixdMDAkLywgXCJcIik7XG4gICAgICAgIGxpbmVUb3RhbFdlaWdodEVsZW1lbnQudmFsdWUgPSBsaW5lVG90YWw7XG5cbiAgICAgICAgdXBkYXRlTGlzdEl0ZW0obGluZVRvdGFsV2VpZ2h0RWxlbWVudCk7XG4gICAgfTtcbiAgICB0aGlzLndpbmRvdy5jb252ZXJ0TWVhc3VyZW1lbnQgPSBmdW5jdGlvbiBjb252ZXJ0TWVhc3VyZW1lbnQoXG4gICAgICAgIHJvdyxcbiAgICAgICAgY29udmVydCA9IGZhbHNlXG4gICAgKSB7XG4gICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdElkJykudmFsdWU7XG4gICAgICAgIGxldCB1b207XG4gICAgICAgIGxldCBpc01hc3Rlckxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXNNYXN0ZXInKS52YWx1ZTtcblxuICAgICAgICBpZihpc01hc3Rlckxpc3QgPT09ICd0cnVlJyl7XG4gICAgICAgICAgICB1b20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1cIityb3cpLnZhbHVlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHVvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tXCIpLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYobGlzdElkID09ICdtYXN0ZXInKXtcbiAgICAgICAgLy8gICAgIHVvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tLVwiK3JvdykudmFsdWU7XG4gICAgICAgIC8vIH1lbHNle1xuICAgICAgICAvLyAgICAgdW9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b21cIikudmFsdWU7XG4gICAgICAgIC8vIH1cbiAgICAgICAgbGV0IHdlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXRlbVdlaWdodC1cIiArIHJvdyk7XG4gICAgICAgIGxldCBwYWNrZWRBbW91bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhY2tlZEFtb3VudC1cIiArIHJvdykudmFsdWU7XG4gICAgICAgIGxldCB0b3RhbFdlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG90YWxMaW5lV2VpZ2h0LVwiICsgcm93KTtcbiAgICAgICAgbGV0IHRvdGFsTGluZVdlaWdodFZhbHVlID0gMDtcbiAgICAgICAgbGV0IHdlaWdodFZhbHVlID0gd2VpZ2h0LnZhbHVlO1xuICAgICAgICBsZXQgc21hbGw7XG4gICAgICAgIGxldCBsYXJnZTtcbiAgICAgICAgbGV0IGVsZW1lbnQ7XG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZS11b20tbGFiZWwtXCIgKyByb3cpO1xuICAgICAgICBsZXQgbGFiZWxIVE1MO1xuXG4gICAgICAgIGlmICh1b20gPT09IFwidXNcIikge1xuICAgICAgICAgICAgc21hbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1vei1cIiArIHJvdyk7XG4gICAgICAgICAgICBsYXJnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tLWxicy1cIiArIHJvdyk7XG4gICAgICAgICAgICBpZiAoc21hbGwuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHdlaWdodFZhbHVlID0gK3dlaWdodFZhbHVlICogMTY7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IHNtYWxsO1xuICAgICAgICAgICAgICAgIGxhYmVsSFRNTCA9IFwiT1pcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0VmFsdWUgPSArd2VpZ2h0VmFsdWUgLyAxNjtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gbGFyZ2U7XG4gICAgICAgICAgICAgICAgbGFiZWxIVE1MID0gXCJMQlNcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNtYWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b20tZ3JhbS1cIiArIHJvdyk7XG4gICAgICAgICAgICBsYXJnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tLWtnLVwiICsgcm93KTtcblxuICAgICAgICAgICAgaWYgKHNtYWxsLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB3ZWlnaHRWYWx1ZSA9ICt3ZWlnaHRWYWx1ZSAqIDEwMDA7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IHNtYWxsO1xuICAgICAgICAgICAgICAgIGxhYmVsSFRNTCA9IFwiR1wiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3ZWlnaHRWYWx1ZSA9ICt3ZWlnaHRWYWx1ZSAvIDEwMDA7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGxhcmdlO1xuICAgICAgICAgICAgICAgIGxhYmVsSFRNTCA9IFwiS0dcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRvdGFsTGluZVdlaWdodFZhbHVlID0gK3dlaWdodFZhbHVlICogK3BhY2tlZEFtb3VudDtcbiAgICAgICAgd2VpZ2h0LnZhbHVlID0gd2VpZ2h0VmFsdWUudG9GaXhlZCgzKS5yZXBsYWNlKC9bLixdMDAkLywgXCJcIik7XG4gICAgICAgIHRvdGFsV2VpZ2h0LnZhbHVlID0gdG90YWxMaW5lV2VpZ2h0VmFsdWVcbiAgICAgICAgICAgIC50b0ZpeGVkKDMpXG4gICAgICAgICAgICAucmVwbGFjZSgvWy4sXTAwJC8sIFwiXCIpO1xuICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSBsYWJlbEhUTUw7XG4gICAgICAgIHVwZGF0ZUxpc3RJdGVtKGVsZW1lbnQpO1xuICAgICAgICB1cGRhdGVMaXN0SXRlbSh3ZWlnaHQpO1xuICAgICAgICB1cGRhdGVMaXN0SXRlbSh0b3RhbFdlaWdodCk7XG4gICAgfTtcbiAgICB0aGlzLndpbmRvdy5hZGRDYXRlZ29yeUdyb3VwID0gZnVuY3Rpb24gYWRkQ2F0ZWdvcnlHcm91cChsaXN0SWQsY2F0ZWdvcnksIGxpc3RVT00sIHVzZXJJZCl7XG5cbiAgICAgICAgbGV0IGNvbHVtbk5hbWU7XG4gICAgICAgIGlmKGxpc3RVT00gPT09ICd1cycpe1xuICAgICAgICAgICAgY29sdW1uTmFtZSA9ICdpbl9vdW5jZXMnO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvbHVtbk5hbWUgPSAnaW5fZ3JhbXMnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRhdGEgPSBnZXRCb29sZWFuRGF0YShjb2x1bW5OYW1lKTtcbiAgICAgICAgZGF0YVsnbGlzdF9pZCddID0gbGlzdElkO1xuICAgICAgICBkYXRhWyd1c2VyX2lkJ10gPSB1c2VySWQ7XG4gICAgICAgIGRhdGFbJ2l0ZW1fbmFtZSddID0gJyc7XG4gICAgICAgIGRhdGFbJ2l0ZW1fd2VpZ2h0J10gPSAwO1xuICAgICAgICBkYXRhWydhbW91bnQnXSA9IDE7XG4gICAgICAgIGRhdGFbJ2l0ZW1fY2F0ZWdvcnknXSA9IGNhdGVnb3J5O1xuICAgICAgICBsZXQgdXJsID0gJy9saXN0LWl0ZW0nXG5cbiAgICAgICAgYXhpb3NcbiAgICAgICAgLnBvc3QodXJsLCBkYXRhKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICByZXMgPSByZXMuZGF0YTtcbiAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09ICcxJyl7XG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBhbGVydChyZXMubXNnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Qm9vbGVhbkRhdGEoY29sdW1uTmFtZSkge1xuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICBkYXRhW1wiaW5fb3VuY2VzXCJdID0gZmFsc2U7XG4gICAgICAgIGRhdGFbXCJpbl9sYnNcIl0gPSBmYWxzZTtcbiAgICAgICAgZGF0YVtcImluX2dyYW1zXCJdID0gZmFsc2U7XG4gICAgICAgIGRhdGFbXCJpbl9raWxvc1wiXSA9IGZhbHNlO1xuICAgICAgICBzd2l0Y2ggKGNvbHVtbk5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJpbl9vdW5jZXNcIjpcbiAgICAgICAgICAgICAgICBkYXRhW1wiaW5fb3VuY2VzXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJpbl9sYnNcIjpcbiAgICAgICAgICAgICAgICBkYXRhW1wiaW5fbGJzXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJpbl9ncmFtc1wiOlxuICAgICAgICAgICAgICAgIGRhdGFbXCJpbl9ncmFtc1wiXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaW5fa2lsb3NcIjpcbiAgICAgICAgICAgICAgICBkYXRhW1wiaW5fa2lsb3NcIl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgdGhpcy53aW5kb3cudXBkYXRlTGlzdEl0ZW0gPSBmdW5jdGlvbiB1cGRhdGVMaXN0SXRlbShlbGVtZW50KSB7XG5cblxuICAgICAgICBsZXQgY29sdW1uTmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4tbmFtZVwiKTtcbiAgICAgICAgbGV0IHZhbHVlID0gZWxlbWVudC52YWx1ZTtcbiAgICAgICAgbGV0IGlkID0gZWxlbWVudC5pZDtcbiAgICAgICAgbGV0IGlkQXJyID0gaWQuc3BsaXQoXCItXCIpO1xuICAgICAgICBsZXQgYXJyTGVuZ3RoID0gaWRBcnIubGVuZ3RoO1xuICAgICAgICBsZXQgcm93ID0gaWRBcnJbYXJyTGVuZ3RoIC0gMV07XG4gICAgICAgIGxldCBpdGVtSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlkLVwiICsgcm93KTtcbiAgICAgICAgbGV0IGl0ZW1JZFZhbHVlID0gaXRlbUlkLnZhbHVlO1xuICAgICAgICBsZXQgbGlzdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0SWRcIikudmFsdWU7XG4gICAgICAgIGxldCB1cmwgPSBcIi9saXN0LWl0ZW1cIjtcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgbGV0IHVzZXJJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcklkXCIpLnZhbHVlO1xuICAgICAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZUJ0bi0nK3Jvdyk7XG4gICAgICAgIGxldCBkZWxldGVIcmVmID0gJy9yZW1vdmUtbGlzdC1pdGVtLycgO1xuICAgICAgICBsZXQgdXBkYXRlTWFzdGVyID0gbnVsbDtcbiAgICAgICAgbGV0IGNyZWF0ZSA9IHRydWU7XG4gICAgICAgIGxldCBpc01hc3Rlckxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXNNYXN0ZXInKS52YWx1ZTtcbiAgICAgICAgLy8gbGV0IGlucHV0Um93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvdy0nK3Jvdyk7XG4gICAgICAgIC8vIGxldCBpbnB1dHNBbmRTZWxlY3RzID0gaW5wdXRSb3cucXVlcnlTZWxlY3RvcignIHRkIGlucHV0LCB0ZCBzZWxlY3QnKTtcbiAgICAgICAgLy8gaW5wdXRzQW5kU2VsZWN0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgZGF0YVtjb2x1bW5OYW1lXSA9IHZhbHVlO1xuXG4gICAgICAgIGlmIChjb2x1bW5OYW1lLnN1YnN0cmluZygwLCAzKSA9PT0gXCJpbl9cIikge1xuICAgICAgICAgICAgZGF0YSA9IGdldEJvb2xlYW5EYXRhKGNvbHVtbk5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtcImxpc3RfaWRcIl0gPSBsaXN0SWQ7XG4gICAgICAgIGRhdGFbXCJ1c2VyX2lkXCJdID0gdXNlcklkO1xuICAgICAgICBkYXRhW1wiaWRcIl0gPSBpdGVtSWRWYWx1ZTtcbiAgICAgICAgaWYoaXRlbUlkVmFsdWUuc3Vic3RyaW5nKDAsMykgIT09ICduZXcnKXtcbiAgICAgICAgICAgIGNyZWF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdXJsID0gdXJsICsnLycrIGl0ZW1JZFZhbHVlO1xuICAgICAgICAgICAgdXBkYXRlTWFzdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZU1hc3Rlci0nK3Jvdyk7XG4gICAgICAgICAgICBpZih1cGRhdGVNYXN0ZXIgIT09IG51bGwpe1xuICAgICAgICAgICAgICAgIHVwZGF0ZU1hc3RlciA9IHVwZGF0ZU1hc3Rlci52YWx1ZTtcbiAgICAgICAgICAgICAgICBkYXRhWyd1cGRhdGVNYXN0ZXInXSA9IHVwZGF0ZU1hc3RlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdCh1cmwsIGRhdGEsIGl0ZW1JZClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcblxuICAgICAgICAgICAgICAgIGxldCByZXNEYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgaWYocmVzRGF0YS5zdGF0dXMgIT09ICcxJyl7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KHJlc0RhdGEubXNnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihjcmVhdGUpe1xuICAgICAgICAgICAgICAgICAgICBpdGVtSWQudmFsdWUgPSByZXNEYXRhLm5ld0lkO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdocmVmJyxkZWxldGVIcmVmKycvJytyZXNEYXRhLm5ld0lkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChcIkZhaWxlZCB0byB1cGRhdGUgbGlzdCBpdGVtLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBpZihpc01hc3Rlckxpc3QgPT09ICdmYWxzZScpe1xuICAgICAgICAgICAgdXBkYXRlVG90YWxMaXN0V2VpZ2h0cygpO1xuICAgICAgICB9XG5cblxuICAgIH07XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVUb3RhbExpc3RXZWlnaHRzKCkge1xuICAgICAgICBsZXQgd2VpZ2h0c0ZvclBXID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3ItdG90YWwtbGlzdC13ZWlnaHRcIik7XG4gICAgICAgIGxldCBiYXNlV2VpZ2h0ID0gMDtcbiAgICAgICAgbGV0IHRvdGFsUGFja1dlaWdodCA9IDA7XG4gICAgICAgIGxldCBtYXhQYWNrV2VpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXhQYWNrV2VpZ2h0XCIpLnZhbHVlO1xuICAgICAgICBsZXQgY2xhc3NXYXJuaW5nVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xhc3NXYXJuaW5nVmFsdWUnKS52YWx1ZTtcbiAgICAgICAgbGV0IHVvbVRleHQgPSBcIkxCU1wiO1xuICAgICAgICB3ZWlnaHRzRm9yUFcuZm9yRWFjaChmdW5jdGlvbiAod2VpZ2h0Rm9yUFcpIHtcbiAgICAgICAgICAgIGxldCBpZCA9IHdlaWdodEZvclBXLmlkO1xuICAgICAgICAgICAgbGV0IGlkQXJyID0gaWQuc3BsaXQoXCItXCIpO1xuICAgICAgICAgICAgbGV0IGFyckxlbmd0aCA9IGlkQXJyLmxlbmd0aDtcbiAgICAgICAgICAgIGxldCByb3cgPSBpZEFyclthcnJMZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGxldCBwYWNrZWRBbW91bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgICAgICBcInBhY2tlZEFtb3VudC1cIiArIHJvd1xuICAgICAgICAgICAgKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBjb252ZXJ0ZXIgPSAxO1xuICAgICAgICAgICAgbGV0IHJvd1dlaWdodCA9IDA7XG4gICAgICAgICAgICBsZXQgaXRlbVdlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXRlbVdlaWdodC1cIiArIHJvdykudmFsdWU7XG4gICAgICAgICAgICBsZXQgdW9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b21cIikudmFsdWU7XG4gICAgICAgICAgICBsZXQgaXRlbUNhdGVnb3J5RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgICAgICAgIFwiaXRlbUNhdGVnb3J5LVwiICsgcm93XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBsZXQgaXRlbUNhdGVnb3J5ID0gXCJcIjtcbiAgICAgICAgICAgIGlmIChpdGVtQ2F0ZWdvcnlFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaXRlbUNhdGVnb3J5ID0gaXRlbUNhdGVnb3J5RWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGl0ZW1DYXRlZ29yeSA9PT0gdW5kZWZpbmVkIHx8IGl0ZW1DYXRlZ29yeSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGl0ZW1DYXRlZ29yeSA9IFwiXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh1b20gPT09IFwidXNcIikge1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1vei1cIiArIHJvdykuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb252ZXJ0ZXIgPSBvdW5jZUNvbnZlcnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVvbVRleHQgPSBcIktHXCI7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1ncmFtLVwiICsgcm93KS5jaGVja2VkID09PSB0cnVlXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnRlciA9IGdyYW1Db252ZXJ0ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByb3dXZWlnaHQgPSArcGFja2VkQW1vdW50ICogKCtpdGVtV2VpZ2h0IC8gY29udmVydGVyKTtcbiAgICAgICAgICAgIHRvdGFsUGFja1dlaWdodCA9IHRvdGFsUGFja1dlaWdodCArIHJvd1dlaWdodDtcblxuICAgICAgICAgICAgaWYgKGl0ZW1DYXRlZ29yeSAhPT0gXCJjb25zdW1hYmxlc1wiKSB7XG4gICAgICAgICAgICAgICAgYmFzZVdlaWdodCA9IGJhc2VXZWlnaHQgKyByb3dXZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICgrYmFzZVdlaWdodCA+ICttYXhQYWNrV2VpZ2h0KSB7XG4gICAgICAgICAgICBsZXQgZGl2RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VpZ2h0V2FybmluZy1kaXZcIik7XG4gICAgICAgICAgICBkaXZFbGVtZW50LmlubmVyVGV4dCA9XCJCYXNlIHdlaWdodCAoXCIgKyAgYmFzZVdlaWdodC50b0ZpeGVkKDMpICtcIiBcIiArdW9tVGV4dCArXCIpIGV4Y2VlZGVzIHRoZSB3ZWlnaHQgZm9yIHRoZSAnXCIgK2NsYXNzV2FybmluZ1ZhbHVlK1wiJyBzdHlsZSBvZiBoaWtpbmcuXCI7XG5cbiAgICAgICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VpZ2h0V2FybmluZy1kaXZcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNlV2VpZ2h0XCIpLnZhbHVlID0gYmFzZVdlaWdodC50b0ZpeGVkKDMpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdGFsUGFja1dlaWdodFwiKS52YWx1ZSA9XG4gICAgICAgICAgICB0b3RhbFBhY2tXZWlnaHQudG9GaXhlZCgzKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlTGlzdEl0ZW1JbnB1dChcbiAgICAgICAgdHlwZSxcbiAgICAgICAgbmFtZUJhc2UsXG4gICAgICAgIHJvdyxcbiAgICAgICAgY29sdW1uTmFtZSxcbiAgICAgICAgbGlzdGVuID0gdHJ1ZVxuICAgICkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgZWxlbWVudC50eXBlID0gdHlwZTtcbiAgICAgICAgZWxlbWVudC5uYW1lID0gbmFtZUJhc2UgKyBcIltdXCI7XG4gICAgICAgIGVsZW1lbnQuaWQgPSBuYW1lQmFzZSArIFwiLVwiICsgcm93O1xuICAgICAgICBlbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIsIGNvbHVtbk5hbWUpO1xuICAgICAgICBpZihsaXN0ZW4pe1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVMaXN0SXRlbShlbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRDYXRlZ3JveVNlbGVjdChyb3csIGdyb3VwQ2F0ZWdvcnkgPSBudWxsLCBsaXN0ZW4gPSB0cnVlKSB7XG5cbiAgICAgICAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgIHNlbGVjdC5pZCA9IFwiSXRlbUNhdGVnb3J5LVwiICsgcm93O1xuICAgICAgICBzZWxlY3QubmFtZSA9IFwiaXRlbUNhdGVnb3J5LVwiICsgcm93O1xuICAgICAgICBzZWxlY3Quc2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4tbmFtZVwiLCBcIml0ZW1fY2F0ZWdvcnlcIik7XG4gICAgICAgIHNlbGVjdC5jbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiO1xuXG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgICBvcHRpb24udGV4dCA9IFwiQ2hvb3NlXCI7XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICBsZXQgb3B0aW9uTGlzdDtcblxuICAgICAgICBvcHRpb25MaXN0ID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcIi9saXN0LWl0ZW0tY2F0ZWdvcmllc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIGVycm9yXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFRvIHVzZSB0aGUgZnVuY3Rpb24gYW5kIGhhbmRsZSB0aGUgcmVzcG9uc2UgZGF0YVxuICAgICAgICBvcHRpb25MaXN0KCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgLy8gRG8gc29tZXRoaW5nIHdpdGggdGhlIHJlc3BvbnNlIGRhdGFcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGRhdGFbaV0udmFsdWU7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSBkYXRhW2ldLmNhdGVnb3J5O1xuICAgICAgICAgICAgICAgIGlmIChncm91cENhdGVnb3J5ICE9IG51bGwgJiYgZGF0YVtpXS52YWx1ZSA9PT0gZ3JvdXBDYXRlZ29yeSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmKGxpc3Rlbil7XG4gICAgICAgICAgICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlTGlzdEl0ZW0oc2VsZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4gc2VsZWN0O1xuICAgIH1cbiAgICBmdW5jdGlvbiBtZXRyaWNSYWRpb1RvVXMoKSB7XG4gICAgICAgIGxldCBpbnB1dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZXRyaWMtcmFkaW9cIik7XG4gICAgICAgIGlucHV0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXRFbGVtZW50KSB7XG4gICAgICAgICAgICBsZXQgaWRBcnIgPSBpbnB1dEVsZW1lbnQuaWQuc3BsaXQoXCItXCIpO1xuICAgICAgICAgICAgbGV0IHVvbSA9IGlkQXJyWzFdO1xuICAgICAgICAgICAgbGV0IHJvdyA9IGlkQXJyW2lkQXJyLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRUeXBlID0gaW5wdXRFbGVtZW50LnR5cGU7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFRhZyA9IGlucHV0RWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIGxldCBuZXdFbGVtZW50O1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudFR5cGUgPT09IFwicmFkaW9cIiAmJiB1b20gPT09IFwiZ3JhbVwiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZVJhZGlvKFwiaW5fb3VuY2VzXCIsIFwiT1pcIiwgXCJvelwiLCByb3csIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VHlwZSA9PT0gXCJyYWRpb1wiICYmIHVvbSA9PT0gXCJrZ1wiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZVJhZGlvKFwiaW5fbGJzXCIsIFwiTEJTXCIsIFwibGJzXCIsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUYWcgPT09IFwibGFiZWxcIiAmJiB1b20gPT09IFwiZ3JhbVwiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZUxhYmVsKFwiT1pcIiwgXCJ1b20tb3otXCIgKyByb3csIFwib3pcIiwgcm93KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFRhZyA9PT0gXCJsYWJlbFwiICYmIHVvbSA9PT0gXCJrZ1wiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZUxhYmVsKFwiTEJTXCIsIFwidW9tLWxicy1cIiArIHJvdywgXCJsYnNcIiwgcm93KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5ld0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQoXG4gICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1c1JhZGlvVG9NZXRyaWMoKSB7XG4gICAgICAgIGxldCBpbnB1dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi51cy1yYWRpb1wiKTtcbiAgICAgICAgaW5wdXRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxldCBpZEFyciA9IGlucHV0RWxlbWVudC5pZC5zcGxpdChcIi1cIik7XG4gICAgICAgICAgICBsZXQgdW9tID0gaWRBcnJbMV07XG4gICAgICAgICAgICBsZXQgcm93ID0gaWRBcnJbaWRBcnIubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBsZXQgZWxlbWVudFR5cGUgPSBpbnB1dEVsZW1lbnQudHlwZTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50VGFnID0gaW5wdXRFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGxldCBuZXdFbGVtZW50O1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudFR5cGUgPT09IFwicmFkaW9cIiAmJiB1b20gPT09IFwib3pcIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVSYWRpbyhcImluX2dyYW1zXCIsIFwiR1JcIiwgXCJncmFtXCIsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUeXBlID09PSBcInJhZGlvXCIgJiYgdW9tID09PSBcImxic1wiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZVJhZGlvKFwiaW5fa2lsb3NcIiwgXCJLR1wiLCBcImtnXCIsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUYWcgPT09IFwibGFiZWxcIiAmJiB1b20gPT09IFwib3pcIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVMYWJlbChcIkdcIiwgXCJ1b20tZ3JhbS1cIiArIHJvdywgXCJncmFtXCIsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUYWcgPT09IFwibGFiZWxcIiAmJiB1b20gPT09IFwibGJzXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlTGFiZWwoXCJLR1wiLCBcInVvbS1rZy1cIiArIHJvdywgXCJrZ1wiLCByb3cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmV3RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZChcbiAgICAgICAgICAgICAgICAgICAgbmV3RWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJhZGlvKGRhdGFDb2x1bW5OYW1lLCBsYWJlbCwgdW9tLCByb3cpIHtcbiAgICAgICAgbGV0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICByYWRpby5jbGFzc05hbWUgPVxuICAgICAgICAgICAgXCJmb3JtLWNoZWNrLWlucHV0XCIgK1xuICAgICAgICAgICAgKHVvbSA9PT0gXCJncmFtXCIgfHwgdW9tID09PSBcImtnXCIgPyBcIiBtZXRyaWMtcmFkaW9cIiA6IFwiIHVzLXJhZGlvXCIpO1xuICAgICAgICByYWRpby50eXBlID0gXCJyYWRpb1wiO1xuICAgICAgICByYWRpby5uYW1lID0gXCJ1b20tXCIgKyByb3cgKyBcIltdXCI7XG4gICAgICAgIHJhZGlvLmlkID0gXCJ1b20tXCIgKyB1b20gKyBcIi1cIiArIHJvdztcbiAgICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4tbmFtZVwiLCBkYXRhQ29sdW1uTmFtZSk7XG5cbiAgICAgICAgaWYgKHVvbSA9PT0gXCJncmFtXCIgfHwgdW9tID09PSBcIm96XCIpIHtcbiAgICAgICAgICAgIHJhZGlvLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29udmVydE1lYXN1cmVtZW50KHJvdyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmFkaW87XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxhYmVsKGlubmVySHRtbCwgaHRtbEZvciwgdW9tLCByb3csIGxpbmVMYWJlbCA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgbGFiZWwuY2xhc3NOYW1lID1cbiAgICAgICAgICAgIFwiZm9ybS1jaGVjay1sYWJlbFwiICtcbiAgICAgICAgICAgICh1b20gPT09IFwiZ3JhbVwiIHx8IHVvbSA9PT0gXCJrZ1wiID8gXCIgbWV0cmljLXJhZGlvXCIgOiBcIiB1cy1yYWRpb1wiKTtcbiAgICAgICAgbGFiZWwuaHRtbEZvciA9IGh0bWxGb3I7XG4gICAgICAgIGxhYmVsLmlubmVySFRNTCA9IGlubmVySHRtbDtcbiAgICAgICAgaWYgKCFsaW5lTGFiZWwpIHtcbiAgICAgICAgICAgIGxhYmVsLmlkID0gXCJ1b20tXCIgKyB1b20gKyBcIi1sYWJlbC1cIiArIHJvdztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhYmVsLmlkID0gXCJsaW5lLXVvbS1sYWJlbC1cIiArIHJvdztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9XG5cbiAgICB0aGlzLndpbmRvdy51cGRhdGVMaXN0ID0gZnVuY3Rpb24gdXBkYXRlTGlzdChlbGVtZW50LCBsaXN0SWQpIHtcbiAgICAgICAgbGV0IGNvbHVtbk5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uLW5hbWVcIik7XG4gICAgICAgIGxldCB2YWx1ZSA9IGVsZW1lbnQudmFsdWU7XG4gICAgICAgIGxldCB1cmwgPSBcIi9nZWFyLWxpc3QvXCIgKyBsaXN0SWQ7XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgZGF0YVtjb2x1bW5OYW1lXSA9IHZhbHVlO1xuXG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdCh1cmwsIGRhdGEsIGxpc3RJZClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBhbGVydChyZXMuZGF0YS5tc2cpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJGYWlsZWQgdG8gdXBkYXRlIGxpc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIGlmIChjb2x1bW5OYW1lID09PSBcInNvcnRcIiB8fCBjb2x1bW5OYW1lID09PSBcImxpc3RfY2xhc3NcIiB8fCBjb2x1bW5OYW1lID09PSAnbGlzdF9pdGVtcycpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW0tY29sbGFwc2libGUtaGVhZGVyXCIpO1xuXG4gICAgaGVhZGVycy5mb3JFYWNoKChoZWFkZXIpID0+IHtcbiAgICAgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gaGVhZGVyLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgICAgIGNvbnN0IGFycm93ID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbS1hcnJvd1wiKTtcbiAgICAgICAgICAgIGlmIChjb250ZW50LmNsYXNzTGlzdC5jb250YWlucyhcIm9wZW5cIikpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLnBhZGRpbmcgPSBcIjAgMTBweFwiO1xuICAgICAgICAgICAgICAgIGFycm93LmlubmVySFRNTCA9IFwiJiM5NjYwXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBjb250ZW50LnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLnBhZGRpbmcgPSBcIjEwcHhcIjtcbiAgICAgICAgICAgICAgICBhcnJvdy5pbm5lckhUTUwgPSBcIiYjOTY1MFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGxldCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI21hc3Rlci1pdGVtLXRhYmxlIGlucHV0XCIpO1xuXG4gICAgaW5wdXRzLmZvckVhY2goZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICAgIGlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIGxldCBsaXN0Q2hhcnRidG4gPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0Q2hhcnRCdG5cIik7XG4gICAgaWYobGlzdENoYXJ0YnRuICE9PSBudWxsKXtcbiAgICAgICAgZG9jdW1lbnQgLmdldEVsZW1lbnRCeUlkKFwibGlzdENoYXJ0QnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgbGlzdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0SWRcIikudmFsdWU7XG4gICAgICAgICAgICBsZXQgdXJsID0gXCIvZ2Vhci1saXN0LWFuYWx5dGljcy9cIiArIGxpc3RJZDtcblxuICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAuZ2V0KHVybClcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGFydFN0YXR1cyA9IENoYXJ0LmdldENoYXJ0KFwiZ2VhckNoYXJ0XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFydFN0YXR1cyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0U3RhdHVzLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2VhckNoYXJ0XCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2hhcnREYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YS5jaGFydERhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkb3VnaG51dFwiLCAvLyBDaGFydCB0eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiBjaGFydERhdGEubGFiZWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxhYmVsOiBsaXN0TmFtZSArICdCcmVhayBEb3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGNoYXJ0RGF0YS53ZWlnaHRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjaGFydERhdGEuY29sb3JzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Zlck9mZnNldDogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1dG91dDogNDUsIC8vIEFkanVzdCB0aGUgY3V0b3V0IHBlcmNlbnRhZ2UgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogMTUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YWxhYmVsczogZmFsc2UsIC8vIFJlbW92aW5nIHRoaXMgbGluZSBzaG93cyB0aGUgZGF0YWxhYmVscyBhZ2FpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVSb3RhdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVTY2FsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgYmFzZVdlaWdodCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2VXZWlnaHRcIikudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0b3RhbFBhY2tXZWlnaHQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3RhbFBhY2tXZWlnaHRcIikudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxCYXNlV2VpZ2h0XCIpLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VXZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxUb3RhbFdlaWdodFwiKS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFBhY2tXZWlnaHQ7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgIH1cbiAgICB0aGlzLndpbmRvdy5zaG93Q29udnJzaW9uQWxlcnQgPSBmdW5jdGlvbiBzaG93Q29udnJzaW9uQWxlcnQoKXtcbiAgICAgICAgYWxlcnQoJ0NoYW5naW5nIHRoaXMgdmFsdWUgd2lsbCBhbHNvIHVwZGF0ZSB0aGUgdW5pdHMgb2YgbWVhc3VyZSBhbmQgYXNzb2NpYXRlZCB2YWx1ZXMgZm9yIGFueSBpdGVtIG9uIHRoaXMgZ2VhciBsaXN0LicpO1xuICAgIH1cbiAgICB0aGlzLndpbmRvdy5jb25maXJtRGVsZXRlID0gZnVuY3Rpb24gY29uZmlybURlbGV0ZShsaXN0SWQpIHtcbiAgICAgICAgaWYgKGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBsaXN0PycpKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvZGVzdHJveS1saXN0LyR7bGlzdElkfWA7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zb3J0YWJsZVwiKS5mb3JFYWNoKGZ1bmN0aW9uICh0YWJsZSkge1xuICAgICAgICBjb25zdCBjYXRlZ29yeUlkID0gdGFibGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1jYXRlZ29yeS1pZFwiKTtcblxuICAgICAgICBuZXcgU29ydGFibGUodGFibGUucXVlcnlTZWxlY3RvcihcInRib2R5XCIpLCB7XG4gICAgICAgICAgICBhbmltYXRpb246IDE1MCxcbiAgICAgICAgICAgIG9uRW5kOiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBuZXcgb3JkZXIgb2YgaXRlbXNcbiAgICAgICAgICAgICAgICBjb25zdCBvcmRlcmVkSWRzID0gW107XG4gICAgICAgICAgICAgICAgdGFibGUucXVlcnlTZWxlY3RvckFsbChcInRyXCIpLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgICAgICAgICAgICBvcmRlcmVkSWRzLnB1c2gocm93LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gU2VuZCB0aGUgbmV3IG9yZGVyIHRvIHRoZSBzZXJ2ZXIgdmlhIEFKQVhcbiAgICAgICAgICAgICAgICB1cGRhdGVJdGVtT3JkZXIoY2F0ZWdvcnlJZCwgb3JkZXJlZElkcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiB1cGRhdGVJdGVtT3JkZXIoY2F0ZWdvcnlJZCwgb3JkZXJlZElkcykge1xuXG4gICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RJZFwiKS52YWx1ZTtcblxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgXCJYLUNTUkYtVE9LRU5cIjogZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpXG4gICAgICAgICAgICAgICAgLmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIiksXG4gICAgICAgICAgICBjYXRlZ29yeV9pZDogY2F0ZWdvcnlJZCxcbiAgICAgICAgICAgIG9yZGVyZWRfaWRzOiBvcmRlcmVkSWRzLFxuICAgICAgICAgICAgbGlzdF9pZDogbGlzdElkLFxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCB1cmwgPSBcIi91cGRhdGUtbGlzdC1vcmRlclwiO1xuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QodXJsLCBkYXRhKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgIT0gXCIxXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQocmVzLmRhdGEubXNnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHNvcnRpbmdTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnRCeVwiKTtcbiAgICAgICAgbGV0IG9wdHMgPSBzb3J0aW5nU2VsZWN0Lm9wdGlvbnMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdHM7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNvcnRpbmdTZWxlY3Qub3B0aW9uc1tpXS52YWx1ZSA9PSBcImRyYWdfZHJvcFwiKSB7XG4gICAgICAgICAgICAgICAgc29ydGluZ1NlbGVjdC5vcHRpb25zW2ldLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBwYXJlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFyZW50LWNvbnRhaW5lcicpO1xuXG4gICAgaWYocGFyZW50Q29udGFpbmVyICE9PSBudWxsICYmIHBhcmVudENvbnRhaW5lciAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgU29ydGFibGUuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJlbnQtY29udGFpbmVyJyksIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogMTUwLFxuICAgICAgICAgICAgaGFuZGxlOiAnLml0ZW0tY29sbGFwc2libGUtaGVhZGVyJyxcbiAgICAgICAgICAgIGdob3N0Q2xhc3M6ICdzb3J0YWJsZS1naG9zdCcsXG4gICAgICAgICAgICBvbkVuZDogZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgICAgIC8vIEFmdGVyIHNvcnRpbmcgaXMgY29tcGxldGVkLCB1cGRhdGUgdGhlIHBvc2l0aW9ucyBpbiB0aGUgZGF0YWJhc2VcbiAgICAgICAgICAgICAgICB1cGRhdGVDYXRlZ29yeU9yZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVDYXRlZ29yeU9yZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IG5ld09yZGVyID0gW107XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcmFnZ2FibGUtY29udGFpbmVyJykuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcblxuICAgICAgICAgICAgbmV3T3JkZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgaXRlbV9jYXRlZ29yeTogaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2F0ZWdvcnktdmFsdWUnKSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeV9vcmRlcjogaW5kZXhcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHVybCA9IFwiL3VwZGF0ZS1jYXRlcm9ncnktb3JkZXJcIjtcbiAgICAgICAgbGV0IGxpc3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdElkXCIpLnZhbHVlO1xuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBcIlgtQ1NSRi1UT0tFTlwiOiBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJylcbiAgICAgICAgICAgICAgICAuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKSxcbiAgICAgICAgICAgIGNhdGVnb3J5X29yZGVyOiBuZXdPcmRlcixcbiAgICAgICAgICAgIGxpc3RfaWQ6IGxpc3RJZCxcbiAgICAgICAgfTtcbiAgICAgICAgLy9icmVhayBvdXQgcG9zdHMgYW5kIGdldCBjYWxscyB0byBvd24gZnVuY3Rpb25zXG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdCh1cmwsIGRhdGEpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzICE9IFwiMVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KHJlcy5kYXRhLm1zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgbGV0IGFzc2lnblRvTGlzdE1vZGFsID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBc3NpZ25JdGVtVG9MaXN0TW9kYWwnKTtcblxuICAgIGlmKGFzc2lnblRvTGlzdE1vZGFsICE9PSB1bmRlZmluZWQgJiYgYXNzaWduVG9MaXN0TW9kYWwgIT09IG51bGwpe1xuXG4gICAgICAgIGFzc2lnblRvTGlzdE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2hpZGUuYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgdGFibGVCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWFzc2lnbi1pdGVtLXRhYmxlLWJvZHknKTtcbiAgICAgICAgICAgIHdoaWxlKHRhYmxlQm9keS5maXJzdENoaWxkKXtcbiAgICAgICAgICAgICAgICB0YWJsZUJvZHkucmVtb3ZlQ2hpbGQodGFibGVCb2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xud2luZG93LmF4aW9zID0gYXhpb3M7XG5cbndpbmRvdy5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiTW9kYWwiLCJDaGFydCIsIlNvcnRhYmxlIiwiYm9vdHN0cmFwIiwicmVxdWlyZSIsImdyYW1Db252ZXJ0ZXIiLCJvdW5jZUNvbnZlcnRlciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaG93UGFzc3dvcmQiLCJpZCIsInBhc3N3b3JkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZE1hc3Rlckxpc3RJdGVtIiwibnVtYmVyT2ZJdGVtc1RvQWRkIiwibGluZXNUb0FkZCIsImxpc3RCeUl0ZW1zIiwibGlzdGVuIiwiaXRlbVRhYmxlIiwicm93IiwiY3JlYXRlRWxlbWVudCIsImNlbGwxIiwiaXRlbU5hbWUiLCJjcmVhdGVMaXN0SXRlbUlucHV0IiwicGxhY2Vob2xkZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJjZWxsNiIsImRlbGV0ZUJ0biIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsImNlbGwyIiwiaXRlbVdlaWdodCIsInN0eWxlIiwid2lkdGgiLCJjZWxsMyIsInNlbGVjdCIsInNldEF0dHJpYnV0ZSIsIm96T3B0aW9uIiwibGJzT3B0aW9uIiwiZ3JPcHRpb24iLCJrZ09wdGlvbiIsInRleHQiLCJhcHBlbmRDaGlsZCIsInNlbGVjdENlbGwiLCJjYXRlZ29yeVNlbGVjdCIsImdldENhdGVncm95U2VsZWN0IiwiYXBwZW5kIiwic2hvd0xpc3RBc3NpZ25Nb2RhbCIsIml0ZW1JZCIsInRhYmxlIiwiaGVhZGVyIiwidXJsIiwidXNlckxpc3RzIiwiYXhpb3MiLCJnZXQiLCJyZXMiLCJkYXRhIiwic3RhdHVzIiwiYWxlcnQiLCJtc2ciLCJsaXN0TmFtZUNlbGwiLCJhc3NpZ25DZWxsIiwiY2hlY2tib3giLCJpdGVtQXNzaWduZWQiLCJjaGVja2VkIiwiYXNzaWduVG9HZWFyTGlzdCIsImVsZW1lbnQiLCJsaXN0SWQiLCJnZXRBdHRyaWJ1dGUiLCJsaXN0X2lkIiwicG9zdCIsInJlc3BvbnNlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiYWRkTGlzdEl0ZW0iLCJjYXRlZ29yeWNvdW50ZXIiLCJ1bmRlZmluZWQiLCJncm91cENhdGVnb3J5IiwibGlzdFVPTSIsImZpbmFsSUVsZW1lbnQiLCJ0YWJsZUNhdGVnb3J5IiwidXNlcklkIiwiZmluYWxJIiwiY2VsbDAiLCJzY29wZSIsImNvdW50ZXIiLCJ1cGRhdGVNYXN0ZXJMaXN0IiwibGluZVVvbUNlbGwiLCJyYWRpbzEiLCJyYWRpbzIiLCJyYWRpb0xhYmVsMSIsInJhZGlvTGFiZWwyIiwicmFkaW9MYWJlbDMiLCJjcmVhdGVSYWRpbyIsImNyZWF0ZUxhYmVsIiwiY2VsbDQiLCJwYWNrZWRBbW91bnQiLCJjZWxsNSIsInRvdGFsTGluZVdlaWdodCIsInN2Z05hbWVzcGFjZSIsImljb25DZWxsIiwiaWNvbiIsImNyZWF0ZUVsZW1lbnROUyIsInBhdGgiLCJhZGRFdmVudExpc3RlbmVyV2VpZ2h0Q2FsYyIsInVwZGF0ZVVPTSIsInVzUmFkaW9Ub01ldHJpYyIsIm1ldHJpY1JhZGlvVG9VcyIsIm5lZWRlZEZvcldlaWdodHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibmVlZGVkRm9yV2VpZ2h0IiwiZ2V0TGluZVRvdGFsV2VpZ2h0IiwiY29udmVydCIsIndlaWdodCIsInVvbSIsImxpbmVUb3RhbFdlaWdodEVsZW1lbnQiLCJsaW5lVG90YWwiLCJ0b0ZpeGVkIiwicmVwbGFjZSIsInVwZGF0ZUxpc3RJdGVtIiwiY29udmVydE1lYXN1cmVtZW50IiwiaXNNYXN0ZXJMaXN0IiwidG90YWxXZWlnaHQiLCJ0b3RhbExpbmVXZWlnaHRWYWx1ZSIsIndlaWdodFZhbHVlIiwic21hbGwiLCJsYXJnZSIsImxhYmVsIiwibGFiZWxIVE1MIiwiYWRkQ2F0ZWdvcnlHcm91cCIsImNhdGVnb3J5IiwiY29sdW1uTmFtZSIsImdldEJvb2xlYW5EYXRhIiwibG9jYXRpb24iLCJyZWxvYWQiLCJlcnIiLCJpZEFyciIsInNwbGl0IiwiYXJyTGVuZ3RoIiwiaXRlbUlkVmFsdWUiLCJkZWxldGVIcmVmIiwidXBkYXRlTWFzdGVyIiwic3Vic3RyaW5nIiwicmVzRGF0YSIsIm5ld0lkIiwidXBkYXRlVG90YWxMaXN0V2VpZ2h0cyIsIndlaWdodHNGb3JQVyIsImJhc2VXZWlnaHQiLCJ0b3RhbFBhY2tXZWlnaHQiLCJtYXhQYWNrV2VpZ2h0IiwiY2xhc3NXYXJuaW5nVmFsdWUiLCJ1b21UZXh0Iiwid2VpZ2h0Rm9yUFciLCJjb252ZXJ0ZXIiLCJyb3dXZWlnaHQiLCJpdGVtQ2F0ZWdvcnlFbGVtZW50IiwiaXRlbUNhdGVnb3J5IiwiZGl2RWxlbWVudCIsImlubmVyVGV4dCIsImRpc3BsYXkiLCJuYW1lQmFzZSIsIm9wdGlvbiIsIm9wdGlvbkxpc3QiLCJfcmVmIiwiX2NhbGxlZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJ0MCIsInNlbGVjdGVkIiwiaW5wdXRFbGVtZW50cyIsImlucHV0RWxlbWVudCIsImVsZW1lbnRUeXBlIiwiZWxlbWVudFRhZyIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsIm5ld0VsZW1lbnQiLCJwYXJlbnRFbGVtZW50IiwicmVwbGFjZUNoaWxkIiwiZGF0YUNvbHVtbk5hbWUiLCJyYWRpbyIsImlubmVySHRtbCIsImh0bWxGb3IiLCJsaW5lTGFiZWwiLCJ1cGRhdGVMaXN0IiwiaGVhZGVycyIsImNvbnRlbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJhcnJvdyIsInF1ZXJ5U2VsZWN0b3IiLCJjb250YWlucyIsInJlbW92ZSIsIm1heEhlaWdodCIsInBhZGRpbmciLCJzY3JvbGxIZWlnaHQiLCJpbnB1dHMiLCJpbnB1dCIsImRpc2FibGVkIiwibGlzdENoYXJ0YnRuIiwiY2hhcnRTdGF0dXMiLCJnZXRDaGFydCIsImRlc3Ryb3kiLCJjdHgiLCJjaGFydERhdGEiLCJKU09OIiwicGFyc2UiLCJteUNoYXJ0IiwibGFiZWxzIiwiZGF0YXNldHMiLCJ3ZWlnaHRzIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JzIiwiYm9yZGVyV2lkdGgiLCJob3Zlck9mZnNldCIsIm9wdGlvbnMiLCJjdXRvdXQiLCJyYWRpdXMiLCJsZWdlbmQiLCJwbHVnaW5zIiwiZGF0YWxhYmVscyIsImFuaW1hdGlvbiIsImFuaW1hdGVSb3RhdGUiLCJhbmltYXRlU2NhbGUiLCJ0ZXh0Q29udGVudCIsInNob3dDb252cnNpb25BbGVydCIsImNvbmZpcm1EZWxldGUiLCJjb25maXJtIiwiaHJlZiIsImNvbmNhdCIsImNhdGVnb3J5SWQiLCJvbkVuZCIsImV2dCIsIm9yZGVyZWRJZHMiLCJ1cGRhdGVJdGVtT3JkZXIiLCJjYXRlZ29yeV9pZCIsIm9yZGVyZWRfaWRzIiwic29ydGluZ1NlbGVjdCIsIm9wdHMiLCJwYXJlbnRDb250YWluZXIiLCJnaG9zdENsYXNzIiwidXBkYXRlQ2F0ZWdvcnlPcmRlciIsIm5ld09yZGVyIiwiaXRlbSIsImluZGV4IiwiaXRlbV9jYXRlZ29yeSIsImNhdGVnb3J5X29yZGVyIiwiYXNzaWduVG9MaXN0TW9kYWwiLCJ0YWJsZUJvZHkiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJkZWZhdWx0cyIsImNvbW1vbiJdLCJzb3VyY2VSb290IjoiIn0=