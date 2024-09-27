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
      // let deleteBtn = document.createElement("a");
      // deleteBtn.id = "deleteBtn-" + finalI;
      // deleteBtn.className = "btn btn-primary btn-sm  py-2";
      // deleteBtn.innerHTML = "x";
      var deleteBtn = createDeleteButton(finalI);
      // deleteBtn.id = "deleteBtn-" + finalI;
      // deleteBtn.className = "btn btn-primary btn-sm  py-2";
      // deleteBtn.innerHTML = "x";

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
  this.window.confirmDelete = function confirmDelete(element) {
    var href = element.getAttribute('data-href');
    var name = element.getAttribute('data-object-name');
    var objectType = element.getAttribute('data-object-type');
    var anchor = document.getElementById('deleteObjectAnchor');
    var modalBody = document.getElementById('deleteModalBody');
    var text = "Are you sure you want to delete ".concat(objectType, " ").concat(name, "?");
    var helperDiv = document.getElementById('deleteHelper');
    helperDiv.innerText = '';
    if (objectType === 'item:') {
      var listName = element.getAttribute('data-list-name');
      var helptext = "* Deleting an item from from this list (".concat(listName, ") will not delete it the 'Your Gear' section.");
      helperDiv.append(helptext);
    } else {
      helperDiv.style.display = 'none';
    }
    modalBody.innerHTML = text;
    anchor.setAttribute('href', href);
  };
  function createDeleteButton(row) {
    // Create the button element
    var button = document.createElement('button');
    button.className = 'btn btn-sm btn-danger';
    button.title = 'Delete Item';
    button.id = "deleteItemBtn-".concat(row);
    button.setAttribute('data-href', '');
    button.setAttribute('data-object-name', '');
    button.setAttribute('data-object-id', '');
    button.setAttribute('data-object-type', 'item:');
    button.setAttribute('data-list-name', document.getElementById('listName').value);
    button.setAttribute('data-bs-toggle', "modal");
    button.setAttribute('data-bs-target', "#deleteAlertModal");

    // Create the icon element
    var icon = document.createElement('i');
    icon.className = 'fas fa-trash'; // Font Awesome trash icon

    // Add the icon to the button
    button.appendChild(icon);

    // Add text to the button (optional)
    // button.appendChild(document.createTextNode('Delete'));

    // Add the onclick event to the button
    button.onclick = function () {
      confirmDelete(button);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cVAsaUJBQWlCLEtBQUtuTCxTQUFTLElBQUltTCxpQkFBaUIsS0FBSyxJQUFJLEVBQUM7SUFFN0RBLGlCQUFpQixDQUFDMVAsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLFlBQVk7TUFDNUQsSUFBSTJQLFNBQVMsR0FBR3ZQLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLDhCQUE4QixDQUFDO01BQ3ZFLE9BQU1zUCxTQUFTLENBQUNDLFVBQVUsRUFBQztRQUN2QkQsU0FBUyxDQUFDRSxXQUFXLENBQUNGLFNBQVMsQ0FBQ0MsVUFBVSxDQUFDO01BQy9DO0lBRUosQ0FBQyxDQUFDO0VBQ047QUFFSixDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQ3B1Q3dCO0FBQzFCN1AsTUFBTSxDQUFDZ0QsS0FBSyxHQUFHQSw2Q0FBSztBQUVwQmhELE1BQU0sQ0FBQ2dELEtBQUssQ0FBQytNLFFBQVEsQ0FBQzFFLE9BQU8sQ0FBQzJFLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLGdCQUFnQjs7Ozs7Ozs7Ozs7QUNIM0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3Nhc3MvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICcuL2Jvb3RzdHJhcCcgO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiYm9vdHN0cmFwXCI7XG4vLyBpbXBvcnQgICdib290c3RyYXAnO1xuaW1wb3J0IFwiQHBvcHBlcmpzL2NvcmVcIjtcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanMvYXV0b1wiO1xuaW1wb3J0IFNvcnRhYmxlIGZyb20gXCJzb3J0YWJsZWpzXCI7XG5jb25zdCBib290c3RyYXAgPSByZXF1aXJlKFwiLi9ib290c3RyYXBcIik7XG5jb25zdCBncmFtQ29udmVydGVyID0gMTAwMDtcbmNvbnN0IG91bmNlQ29udmVydGVyID0gMTY7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICB0aGlzLndpbmRvdy5zaG93UGFzc3dvcmQgPSBmdW5jdGlvbiBzaG93UGFzc3dvcmQoaWQpIHtcbiAgICAgICAgbGV0IHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICBpZiAocGFzc3dvcmQudHlwZSA9PT0gXCJwYXNzd29yZFwiKSB7XG4gICAgICAgICAgICBwYXNzd29yZC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXNzd29yZC50eXBlID0gXCJwYXNzd29yZFwiO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aGlzLndpbmRvdy5hZGRNYXN0ZXJMaXN0SXRlbSA9IGZ1bmN0aW9uIGFkZE1hc3Rlckxpc3RJdGVtKCkge1xuICAgICAgICBsZXQgbnVtYmVyT2ZJdGVtc1RvQWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lc1RvQWRkXCIpO1xuICAgICAgICBsZXQgbGluZXNUb0FkZCA9IDE7XG4gICAgICAgIGlmIChudW1iZXJPZkl0ZW1zVG9BZGQgPT09IG51bGwgfHwgK251bWJlck9mSXRlbXNUb0FkZC52YWx1ZSA8IDEpIHtcbiAgICAgICAgICAgIG51bWJlck9mSXRlbXNUb0FkZC52YWx1ZSA9IGxpbmVzVG9BZGQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaW5lc1RvQWRkID0gK251bWJlck9mSXRlbXNUb0FkZC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXNUb0FkZDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbGlzdEJ5SXRlbXMgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IGxpc3RlbiA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGl0ZW1UYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1pdGVtLXRhYmxlLWJvZHknKTtcbiAgICAgICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBjZWxscyBhbmQgaW5wdXQgZWxlbWVudHMuXG4gICAgICAgICAgICBsZXQgY2VsbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG5cbiAgICAgICAgICAgIGxldCBpdGVtTmFtZSA9IGNyZWF0ZUxpc3RJdGVtSW5wdXQoXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgXCJpdGVtTmFtZVwiLFxuICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAgXCJpdGVtX25hbWVcIixcbiAgICAgICAgICAgICAgICBsaXN0ZW5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpdGVtTmFtZS5wbGFjZWhvbGRlciA9IFwiSXRlbSBOYW1lXCI7XG4gICAgICAgICAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBjZWxsNi5pZCA9IFwiYnRuLXRkLVwiICtpO1xuICAgICAgICAgICAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICAgICAgZGVsZXRlQnRuLmlkID0gXCJkZWxldGVCdG4tXCIgKyBpO1xuICAgICAgICAgICAgZGVsZXRlQnRuLmNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbSAgcHktMlwiO1xuICAgICAgICAgICAgZGVsZXRlQnRuLmlubmVySFRNTCA9IFwieFwiO1xuXG5cbiAgICAgICAgICAgIGxldCBjZWxsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGxldCBpdGVtV2VpZ2h0ID0gY3JlYXRlTGlzdEl0ZW1JbnB1dChcbiAgICAgICAgICAgICAgICBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIFwiaXRlbVdlaWdodFwiLFxuICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAgXCJpdGVtX3dlaWdodFwiLFxuICAgICAgICAgICAgICAgIGxpc3RlblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQudmFsdWUgPSAwO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKFwiZm9yLXdlaWdodFwiKTtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQuY2xhc3NMaXN0LmFkZChcIm51bWJlci1pbnB1dFwiKTtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQuc3R5bGUud2lkdGggPSAnNDAlJztcbiAgICAgICAgICAgIGNlbGwyLmNsYXNzTGlzdC5hZGQoXCJudW1iZXItY29sXCIpO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgICAgIHNlbGVjdC5pZCA9IFwidW9tLVwiICsgaTtcbiAgICAgICAgICAgIHNlbGVjdC5uYW1lID0gXCJ1b21bXVwiO1xuICAgICAgICAgICAgc2VsZWN0LnNldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uLW5hbWVcIiwgXCJ1b21cIik7XG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIjtcblxuICAgICAgICAgICAgbGV0IG96T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIGxldCBsYnNPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgbGV0IGdyT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIGxldCBrZ09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBvek9wdGlvbi52YWx1ZSA9IFwiaW5fb3VuY2VzXCI7XG4gICAgICAgICAgICBvek9wdGlvbi50ZXh0ID0gXCJPWlwiO1xuICAgICAgICAgICAgbGJzT3B0aW9uLnZhbHVlICA9ICdpbl9sYnMnO1xuICAgICAgICAgICAgbGJzT3B0aW9uLnRleHQgPSAnTEJTJ1xuXG4gICAgICAgICAgICBnck9wdGlvbi52YWx1ZSA9IFwiaW5fZ3JhbXNcIjtcbiAgICAgICAgICAgIGdyT3B0aW9uLnRleHQgPSBcIkdcIjtcbiAgICAgICAgICAgIGtnT3B0aW9uLnZhbHVlICA9ICdpbl9raWxvcyc7XG4gICAgICAgICAgICBrZ09wdGlvbi50ZXh0ID0gJ0tHJztcbiAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvek9wdGlvbik7XG4gICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQobGJzT3B0aW9uKTtcbiAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChnck9wdGlvbik7XG4gICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQoa2dPcHRpb24pO1xuXG4gICAgICAgICAgICAvL2FwcGVuZCBpbnB1dHMgdG8gY2VsbHMuXG4gICAgICAgICAgICBjZWxsMS5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gICAgICAgICAgICBjZWxsMi5hcHBlbmRDaGlsZChpdGVtV2VpZ2h0KTtcblxuICAgICAgICAgICAgbGV0IHNlbGVjdENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBsZXQgY2F0ZWdvcnlTZWxlY3QgPSBnZXRDYXRlZ3JveVNlbGVjdChpLG51bGwsIGxpc3Rlbik7XG4gICAgICAgICAgICBjYXRlZ29yeVNlbGVjdC5uYW1lID0gJ2l0ZW1DYXRlZ29yeVtdJ1xuICAgICAgICAgICAgc2VsZWN0Q2VsbC5hcHBlbmQoY2F0ZWdvcnlTZWxlY3QpO1xuXG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICAgICAgICAgICAgY2VsbDYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIGNlbGxzIHRvIHRoZSByb3cuXG4gICAgICAgICAgICAvLyByb3cuYXBwZW5kQ2hpbGQoaWNvbkNlbGwpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwxKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChzZWxlY3RDZWxsKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsMyk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDIpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGw2KTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSByb3cgdG8gdGhlIHRhYmxlLlxuICAgICAgICAgICAgaXRlbVRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG5cblxuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdJdGVtQ291bnQnKS52YWx1ZSA9IGxpbmVzVG9BZGQ7XG4gICAgICAgIG51bWJlck9mSXRlbXNUb0FkZC52YWx1ZSA9IDE7XG4gICAgfTtcbiAgICB0aGlzLndpbmRvdy5zaG93TGlzdEFzc2lnbk1vZGFsID0gZnVuY3Rpb24gc2hvd0xpc3RBc3NpZ25Nb2RhbChpdGVtSWQsaXRlbU5hbWUpe1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtSWRmb3JBc3NpZ24nKS52YWx1ZSA9IGl0ZW1JZDtcbiAgICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJJdGVtSWRmb3JBc3NpZ24nKS52YWx1ZSA9IHVzZXJJdGVtSWQ7XG5cbiAgICAgICAgbGV0IHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1hc3NpZ24taXRlbS10YWJsZS1ib2R5XCIpO1xuICAgICAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0Fzc2lnbkl0ZW1Ub0xpc3RNb2RhbExhYmVsJyk7XG4gICAgICAgIGhlYWRlci5pbm5lckhUTUwgPSAnQXNzaWduL1VuYXNzaWduIGl0ZW06ICcraXRlbU5hbWU7XG5cbiAgICAgICAgbGV0IHVybCA9ICcvZ2V0LXVzZXItbGlzdHMvJytpdGVtSWQ7XG4gICAgICAgIGxldCB1c2VyTGlzdHM7XG5cbiAgICAgICAgYXhpb3MuZ2V0KHVybClcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgIHVzZXJMaXN0cyA9IGRhdGEudXNlckxpc3RzO1xuXG4gICAgICAgICAgICBpZihkYXRhLnN0YXR1cyAhPT0gJzEnKXtcbiAgICAgICAgICAgICAgICBhbGVydChkYXRhLm1zZyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJMaXN0cy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgICAgICAgICBsZXQgbGlzdE5hbWVDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgICAgIGxldCBhc3NpZ25DZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuXG4gICAgICAgICAgICAgICAgbGlzdE5hbWVDZWxsLmlubmVySFRNTCA9IHVzZXJMaXN0c1tpXS5uYW1lO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgICAgICAgICBjaGVja2JveC5pZCA9ICdsaXN0Q2hlY2tCb3gtJytpO1xuICAgICAgICAgICAgICAgIGNoZWNrYm94Lm5hbWUgPSAnbGlzdElkc1tdJztcbiAgICAgICAgICAgICAgICBjaGVja2JveC52YWx1ZSA9IHVzZXJMaXN0c1tpXS5pZDtcblxuICAgICAgICAgICAgICAgIGlmKHVzZXJMaXN0c1tpXS5pdGVtQXNzaWduZWQgPT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGFzc2lnbkNlbGwuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChsaXN0TmFtZUNlbGwpO1xuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChhc3NpZ25DZWxsKTtcbiAgICAgICAgICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuICAgIHRoaXMud2luZG93LmFzc2lnblRvR2Vhckxpc3QgPSBmdW5jdGlvbiBhc3NpZ25Ub0dlYXJMaXN0KGVsZW1lbnQpe1xuICAgICAgICBsZXQgbGlzdElkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1pZCcpO1xuICAgICAgICBsZXQgaXRlbUlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaXRlbS1pZCcpO1xuXG4gICAgICAgIGlmKCFlbGVtZW50LmNoZWNrZWQpe1xuICAgICAgICAgICAgbGlzdElkID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdXJsID0gJy9hc3NpZ24tdG8tZ2Vhci1saXN0J1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIGxpc3RfaWQ6IGxpc3RJZCxcbiAgICAgICAgICAgIGlkOiBpdGVtSWRcbiAgICAgICAgfTtcblxuXG4gICAgICAgIGF4aW9zLnBvc3QodXJsLGRhdGEpXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXNwb25zZSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0gMSl7XG5cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGFsZXJ0KHJlc3BvbnNlLm1zZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHRoaXMud2luZG93LmFkZExpc3RJdGVtID0gZnVuY3Rpb24gYWRkTGlzdEl0ZW0oY2F0ZWdvcnljb3VudGVyID0gbnVsbCwgZ3JvdXBDYXRlZ29yeSA9IG51bGwpIHtcbiAgICAgICAgbGV0IG51bWJlck9mSXRlbXNUb0FkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZXNUb0FkZFwiKTtcbiAgICAgICAgbGV0IGxpbmVzVG9BZGQgPSAxO1xuICAgICAgICBpZiAobnVtYmVyT2ZJdGVtc1RvQWRkID09PSBudWxsIHx8ICtudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPCAxKSB7XG4gICAgICAgICAgICBudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPSBsaW5lc1RvQWRkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGluZXNUb0FkZCA9ICtudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzVG9BZGQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGxpc3RVT00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbVwiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBmaW5hbElFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaW5hbC1pXCIpO1xuICAgICAgICAgICAgbGV0IGxpc3RCeUl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0QnlJdGVtc1wiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBpdGVtVGFibGU7XG5cbiAgICAgICAgICAgIGlmICgrbGlzdEJ5SXRlbXMgPT0gMSkge1xuICAgICAgICAgICAgICAgIGxpc3RCeUl0ZW1zID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpdGVtVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW0tdGFibGUtYm9keVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGlzdEJ5SXRlbXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsZXQgdGFibGVDYXRlZ29yeSA9IGNhdGVnb3J5Y291bnRlcjtcbiAgICAgICAgICAgICAgICBpdGVtVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgICAgICAgICAgXCJjYXRlZ29yeVRhYmxlLVwiICsgdGFibGVDYXRlZ29yeVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB1c2VySWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJJZFwiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RJZFwiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBmaW5hbEkgPSBmaW5hbElFbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgZmluYWxJRWxlbWVudC52YWx1ZSA9ICtmaW5hbEkgKyAxO1xuXG4gICAgICAgICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICAgICAgcm93LmlkID0gJ3Jvdy0nK2ZpbmFsSTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIGNlbGxzIGFuZCBpbnB1dCBlbGVtZW50cy5cbiAgICAgICAgICAgIGxldCBjZWxsMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgICAgICAgICAgIGNlbGwwLnNjb3BlID0gXCJyb3dcIjtcbiAgICAgICAgICAgIGNlbGwwLmlubmVySFRNTCA9IGZpbmFsSTtcblxuICAgICAgICAgICAgbGV0IGNlbGwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuXG4gICAgICAgICAgICBsZXQgY291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGNvdW50ZXIudHlwZSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICBjb3VudGVyLm5hbWUgPSBcImlkW11cIjtcbiAgICAgICAgICAgIGNvdW50ZXIuaWQgPSBcImlkLVwiICsgZmluYWxJO1xuICAgICAgICAgICAgY291bnRlci52YWx1ZSA9IFwibmV3LVwiICsgZmluYWxJO1xuICAgICAgICAgICAgY291bnRlci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIsIFwiaWRcIik7XG5cbiAgICAgICAgICAgIGxldCB1cGRhdGVNYXN0ZXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgdXBkYXRlTWFzdGVyTGlzdC50eXBlID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgIHVwZGF0ZU1hc3Rlckxpc3QubmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB1cGRhdGVNYXN0ZXJMaXN0LmlkID0gXCJ1cGRhdGVNYXN0ZXItXCIrZmluYWxJO1xuICAgICAgICAgICAgdXBkYXRlTWFzdGVyTGlzdC52YWx1ZSA9IFwidHJ1ZVwiO1xuXG5cbiAgICAgICAgICAgIGxldCBpdGVtTmFtZSA9IGNyZWF0ZUxpc3RJdGVtSW5wdXQoXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgXCJpdGVtTmFtZVwiLFxuICAgICAgICAgICAgICAgIGZpbmFsSSxcbiAgICAgICAgICAgICAgICBcIml0ZW1fbmFtZVwiXG5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpdGVtTmFtZS5wbGFjZWhvbGRlciA9IFwiSXRlbSBOYW1lXCI7XG4gICAgICAgICAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBjZWxsNi5pZCA9IFwiYnRuLXRkLVwiICsgZmluYWxJO1xuICAgICAgICAgICAgLy8gbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICAgICAgLy8gZGVsZXRlQnRuLmlkID0gXCJkZWxldGVCdG4tXCIgKyBmaW5hbEk7XG4gICAgICAgICAgICAvLyBkZWxldGVCdG4uY2xhc3NOYW1lID0gXCJidG4gYnRuLXByaW1hcnkgYnRuLXNtICBweS0yXCI7XG4gICAgICAgICAgICAvLyBkZWxldGVCdG4uaW5uZXJIVE1MID0gXCJ4XCI7XG4gICAgICAgICAgICBsZXQgZGVsZXRlQnRuID0gY3JlYXRlRGVsZXRlQnV0dG9uKGZpbmFsSSk7XG4gICAgICAgICAgICAvLyBkZWxldGVCdG4uaWQgPSBcImRlbGV0ZUJ0bi1cIiArIGZpbmFsSTtcbiAgICAgICAgICAgIC8vIGRlbGV0ZUJ0bi5jbGFzc05hbWUgPSBcImJ0biBidG4tcHJpbWFyeSBidG4tc20gIHB5LTJcIjtcbiAgICAgICAgICAgIC8vIGRlbGV0ZUJ0bi5pbm5lckhUTUwgPSBcInhcIjtcblxuICAgICAgICAgICAgLy8gbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgICAgIC8vIGxldCB1cmwgPSBcIi9saXN0LWl0ZW1cIjtcblxuICAgICAgICAgICAgLy8gaWYgKGxpc3RVT00gPT0gXCJ1c1wiKSB7XG4gICAgICAgICAgICAvLyAgICAgZGF0YSA9IGdldEJvb2xlYW5EYXRhKFwiaW5fb3VuY2VzXCIpO1xuICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgICBkYXRhID0gZ2V0Qm9vbGVhbkRhdGEoXCJpbl9ncmFtc1wiKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIGRhdGFbXCJsaXN0X2lkXCJdID0gbGlzdElkO1xuICAgICAgICAgICAgLy8gZGF0YVtcInVzZXJfaWRcIl0gPSB1c2VySWQ7XG4gICAgICAgICAgICAvLyBkYXRhW1wiaXRlbV9uYW1lXCJdID0gXCJcIjtcbiAgICAgICAgICAgIC8vIGlmKGdyb3VwQ2F0ZWdvcnkgIT09IG51bGwpe1xuICAgICAgICAgICAgLy8gICAgIGRhdGFbJ2l0ZW1fY2F0ZWdvcnknXSA9IGdyb3VwQ2F0ZWdvcnk7XG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgIC8vIGxldCB1cGRhdGVJdGVtO1xuICAgICAgICAgICAgLy8gdXBkYXRlSXRlbSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vICAgICB0cnkge1xuICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QodXJsLCBkYXRhKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgLy8gYWxlcnQoXG4gICAgICAgICAgICAvLyAgICAgICAgIC8vICAgICBcInJlc3BvbnNlIGZybyBuZXcgaW5wdXQ6IFwiICsgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpXG4gICAgICAgICAgICAvLyAgICAgICAgIC8vICk7XG4gICAgICAgICAgICAvLyAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIC8vIGhhbmRsZSBlcnJvclxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gfTtcblxuICAgICAgICAgICAgLy8gLy8gVG8gdXNlIHRoZSBmdW5jdGlvbiBhbmQgaGFuZGxlIHRoZSByZXNwb25zZSBkYXRhXG4gICAgICAgICAgICAvLyB1cGRhdGVJdGVtKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIC8vIERvIHNvbWV0aGluZyB3aXRoIHRoZSByZXNwb25zZSBkYXRhXG4gICAgICAgICAgICAvLyAgICAgY291bnRlci52YWx1ZSA9IGRhdGEubmV3SWQ7XG4gICAgICAgICAgICAvLyAgICAgcm93LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgZGF0YS5uZXdJZCk7XG4gICAgICAgICAgICAvLyAgICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgIC8vICAgICAgICAgXCJocmVmXCIsXG4gICAgICAgICAgICAvLyAgICAgICAgIFwiL2Rlc3Ryb3ktbGlzdC1pdGVtL1wiICsgZGF0YS5uZXdJZFxuICAgICAgICAgICAgLy8gICAgICk7XG4gICAgICAgICAgICAvLyB9KTtcblxuXG4gICAgICAgICAgICBsZXQgY2VsbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBsZXQgaXRlbVdlaWdodCA9IGNyZWF0ZUxpc3RJdGVtSW5wdXQoXG4gICAgICAgICAgICAgICAgXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICBcIml0ZW1XZWlnaHRcIixcbiAgICAgICAgICAgICAgICBmaW5hbEksXG4gICAgICAgICAgICAgICAgXCJpdGVtX3dlaWdodFwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaXRlbVdlaWdodC52YWx1ZSA9IDA7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJmb3Itd2VpZ2h0XCIpO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWlucHV0XCIpO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xuICAgICAgICAgICAgY2VsbDIuY2xhc3NMaXN0LmFkZChcIm51bWJlci1jb2xcIik7XG5cbiAgICAgICAgICAgIGxldCBjZWxsMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGxldCBsaW5lVW9tQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGNlbGwzLmNsYXNzTGlzdC5hZGQoXCJ1b20tdGRcIik7XG4gICAgICAgICAgICBsaW5lVW9tQ2VsbC5jbGFzc0xpc3QuYWRkKFwidW9tLXRkXCIpO1xuICAgICAgICAgICAgbGV0IHJhZGlvMTtcbiAgICAgICAgICAgIGxldCByYWRpbzI7XG4gICAgICAgICAgICBsZXQgcmFkaW9MYWJlbDE7XG4gICAgICAgICAgICBsZXQgcmFkaW9MYWJlbDI7XG4gICAgICAgICAgICBsZXQgcmFkaW9MYWJlbDM7XG5cbiAgICAgICAgICAgIGlmIChsaXN0VU9NID09PSBcInVzXCIpIHtcbiAgICAgICAgICAgICAgICByYWRpbzEgPSBjcmVhdGVSYWRpbyhcImluX291bmNlc1wiLCBcIlwiLCBcIm96XCIsIGZpbmFsSSk7XG4gICAgICAgICAgICAgICAgcmFkaW9MYWJlbDEgPSBjcmVhdGVMYWJlbChcbiAgICAgICAgICAgICAgICAgICAgXCJPWlwiLFxuICAgICAgICAgICAgICAgICAgICBcInVvbS1vei1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgICAgICAgICAgXCJvelwiLFxuICAgICAgICAgICAgICAgICAgICBmaW5hbElcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJhZGlvMiA9IGNyZWF0ZVJhZGlvKFwiaW5fbGJzXCIsIFwiXCIsIFwibGJzXCIsIGZpbmFsSSk7XG4gICAgICAgICAgICAgICAgcmFkaW9MYWJlbDIgPSBjcmVhdGVMYWJlbChcbiAgICAgICAgICAgICAgICAgICAgXCJMQlNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ1b20tbGJzLVwiICsgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICBcImxic1wiLFxuICAgICAgICAgICAgICAgICAgICBmaW5hbElcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJhZGlvTGFiZWwzID0gY3JlYXRlTGFiZWwoXG4gICAgICAgICAgICAgICAgICAgIFwiT1pcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ1b20tb3otXCIgKyBmaW5hbEksXG4gICAgICAgICAgICAgICAgICAgIFwib3pcIixcbiAgICAgICAgICAgICAgICAgICAgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmFkaW8xID0gY3JlYXRlUmFkaW8oXCJpbl9ncmFtc1wiLCBcIlwiLCBcImdyYW1cIiwgZmluYWxJKTtcbiAgICAgICAgICAgICAgICByYWRpb0xhYmVsMSA9IGNyZWF0ZUxhYmVsKFxuICAgICAgICAgICAgICAgICAgICBcIkdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ1b20tZ3JhbS1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgICAgICAgICAgXCJncmFtXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsSVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmFkaW8yID0gY3JlYXRlUmFkaW8oXCJpbl9raWxvc1wiLCBcIlwiLCBcImtnXCIsIGZpbmFsSSk7XG4gICAgICAgICAgICAgICAgcmFkaW9MYWJlbDIgPSBjcmVhdGVMYWJlbChcbiAgICAgICAgICAgICAgICAgICAgXCJLR1wiLFxuICAgICAgICAgICAgICAgICAgICBcInVvbS1rZy1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgICAgICAgICAgXCJrZ1wiLFxuICAgICAgICAgICAgICAgICAgICBmaW5hbElcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJhZGlvTGFiZWwzID0gY3JlYXRlTGFiZWwoXG4gICAgICAgICAgICAgICAgICAgIFwiR1wiLFxuICAgICAgICAgICAgICAgICAgICBcInVvbS1ncmFtLVwiICsgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICBcImdyYW1cIixcbiAgICAgICAgICAgICAgICAgICAgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGNlbGw0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgY2VsbDQuY2xhc3NMaXN0LmFkZChcIm51bWJlci1jb2xcIik7XG4gICAgICAgICAgICBsZXQgcGFja2VkQW1vdW50ID0gY3JlYXRlTGlzdEl0ZW1JbnB1dChcbiAgICAgICAgICAgICAgICBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIFwicGFja2VkQW1vdW50XCIsXG4gICAgICAgICAgICAgICAgZmluYWxJLFxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBwYWNrZWRBbW91bnQudmFsdWUgPSAxO1xuXG4gICAgICAgICAgICBwYWNrZWRBbW91bnQuY2xhc3NMaXN0LmFkZChcImZvci13ZWlnaHRcIik7XG4gICAgICAgICAgICBwYWNrZWRBbW91bnQuY2xhc3NMaXN0LmFkZChcIm51bWJlci1pbnB1dFwiKTtcbiAgICAgICAgICAgIHBhY2tlZEFtb3VudC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBjZWxsNS5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWNvbFwiKTtcbiAgICAgICAgICAgIGxldCB0b3RhbExpbmVXZWlnaHQgPSBjcmVhdGVMaXN0SXRlbUlucHV0KFxuICAgICAgICAgICAgICAgIFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgXCJ0b3RhbExpbmVXZWlnaHRcIixcbiAgICAgICAgICAgICAgICBmaW5hbEksXG4gICAgICAgICAgICAgICAgXCJ0b3RhbF9saW5lX3dlaWdodFwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LnZhbHVlID0gMDtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgXCJkYXRhLWNvbHVtbi1uYW1lXCIsXG4gICAgICAgICAgICAgICAgXCJ0b3RhbF9saW5lX3dlaWdodFwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LnNldEF0dHJpYnV0ZShcInJlYWRvbmx5XCIsIHRydWUpO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJudW1iZXItaW5wdXRcIik7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC5jbGFzc0xpc3QuYWRkKFwiZm9yLXRvdGFsLWxpc3Qtd2VpZ2h0XCIpO1xuXG4gICAgICAgICAgICAvL2FwcGVuZCBpbnB1dHMgdG8gY2VsbHMuXG5cbiAgICAgICAgICAgIC8vIERlZmluZSB0aGUgU1ZHIG5hbWVzcGFjZVxuICAgICAgICAgICAgY29uc3Qgc3ZnTmFtZXNwYWNlID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuICAgICAgICAgICAgbGV0IGljb25DZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IFNWRyBlbGVtZW50XG4gICAgICAgICAgICBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOYW1lc3BhY2UsIFwic3ZnXCIpO1xuICAgICAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjE2XCIpO1xuICAgICAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIxNlwiKTtcbiAgICAgICAgICAgIGljb24uc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcImN1cnJlbnRDb2xvclwiKTtcbiAgICAgICAgICAgIGljb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJiaSBiaS1ncmlwLXZlcnRpY2FsXCIpO1xuICAgICAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDE2IDE2XCIpO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIDxwYXRoPiBlbGVtZW50XG4gICAgICAgICAgICBsZXQgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOYW1lc3BhY2UsIFwicGF0aFwiKTtcbiAgICAgICAgICAgIHBhdGguc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgICAgIFwiZFwiLFxuICAgICAgICAgICAgICAgIFwiTTcgMmExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBtMyAwYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgME03IDVhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbTMgMGExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBNNyA4YTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMG0zIDBhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbS0zIDNhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbTMgMGExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBtLTMgM2ExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBtMyAwYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMFwiXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIHBhdGggdG8gdGhlIFNWR1xuICAgICAgICAgICAgaWNvbi5hcHBlbmRDaGlsZChwYXRoKTtcblxuICAgICAgICAgICAgLy8gLy8gQXBwZW5kIHRoZSBTVkcgaWNvbiB0byB0aGUgY2VsbFxuICAgICAgICAgICAgaWNvbkNlbGwuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICAgICAgICAgIGNlbGwxLmFwcGVuZENoaWxkKGNvdW50ZXIpO1xuICAgICAgICAgICAgY2VsbDEuYXBwZW5kQ2hpbGQodXBkYXRlTWFzdGVyTGlzdCk7XG4gICAgICAgICAgICBjZWxsMS5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gICAgICAgICAgICBjZWxsMi5hcHBlbmRDaGlsZChpdGVtV2VpZ2h0KTtcblxuICAgICAgICAgICAgbGV0IHNlbGVjdENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBsZXQgY2F0ZWdvcnlTZWxlY3QgPSBnZXRDYXRlZ3JveVNlbGVjdChmaW5hbEksIGdyb3VwQ2F0ZWdvcnkpO1xuXG4gICAgICAgICAgICBzZWxlY3RDZWxsLmFwcGVuZChjYXRlZ29yeVNlbGVjdCk7XG5cbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHJhZGlvMSk7XG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChyYWRpb0xhYmVsMSk7XG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChyYWRpbzIpO1xuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbDIpO1xuXG4gICAgICAgICAgICBjZWxsNC5hcHBlbmRDaGlsZChwYWNrZWRBbW91bnQpO1xuICAgICAgICAgICAgY2VsbDUuYXBwZW5kQ2hpbGQodG90YWxMaW5lV2VpZ2h0KTtcbiAgICAgICAgICAgIGxpbmVVb21DZWxsLmFwcGVuZENoaWxkKHJhZGlvTGFiZWwzKTtcbiAgICAgICAgICAgIGNlbGw2LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgICAgICAgICAgIC8vIEFwcGVuZCBjZWxscyB0byB0aGUgcm93LlxuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGljb25DZWxsKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsMSk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoc2VsZWN0Q2VsbCk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDMpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwyKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsNCk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDUpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGxpbmVVb21DZWxsKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsNik7XG5cbiAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgcm93IHRvIHRoZSB0YWJsZS5cbiAgICAgICAgICAgIGl0ZW1UYWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICAgICAgLy9hZGQgZnVuY3Rpb25zIHRvIGNhbGN1bGF0ZSBhbmQgY29udmVydCB0b3RhbCB3ZWlnaHQuXG4gICAgICAgICAgICBhZGRFdmVudExpc3RlbmVyV2VpZ2h0Q2FsYyhmaW5hbEkpO1xuICAgICAgICB9XG4gICAgICAgIG51bWJlck9mSXRlbXNUb0FkZC52YWx1ZSA9IDE7XG4gICAgfTtcblxuICAgIHRoaXMud2luZG93LnVwZGF0ZVVPTSA9IGZ1bmN0aW9uIHVwZGF0ZVVPTSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgIT09IFwidXNcIikge1xuICAgICAgICAgICAgdXNSYWRpb1RvTWV0cmljKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZXRyaWNSYWRpb1RvVXMoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcldlaWdodENhbGMocm93KSB7XG4gICAgICAgIGxldCBuZWVkZWRGb3JXZWlnaHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3Itd2VpZ2h0XCIpO1xuICAgICAgICBuZWVkZWRGb3JXZWlnaHRzLmZvckVhY2goZnVuY3Rpb24gKG5lZWRlZEZvcldlaWdodCkge1xuICAgICAgICAgICAgbmVlZGVkRm9yV2VpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGdldExpbmVUb3RhbFdlaWdodChyb3cpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMud2luZG93LmdldExpbmVUb3RhbFdlaWdodCA9IGZ1bmN0aW9uIGdldExpbmVUb3RhbFdlaWdodChcbiAgICAgICAgcm93LFxuICAgICAgICBjb252ZXJ0ID0gZmFsc2VcbiAgICApIHtcbiAgICAgICAgbGV0IHdlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXRlbVdlaWdodC1cIiArIHJvdykudmFsdWU7XG4gICAgICAgIGxldCBwYWNrZWRBbW91bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhY2tlZEFtb3VudC1cIiArIHJvdykudmFsdWU7XG4gICAgICAgIGxldCB1b20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbVwiKTtcbiAgICAgICAgbGV0IGxpbmVUb3RhbFdlaWdodEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgIFwidG90YWxMaW5lV2VpZ2h0LVwiICsgcm93XG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IGxpbmVUb3RhbCA9IDA7XG4gICAgICAgIGxpbmVUb3RhbCA9ICt3ZWlnaHQgKiArcGFja2VkQW1vdW50O1xuICAgICAgICBsaW5lVG90YWwgPSBsaW5lVG90YWwudG9GaXhlZCgzKS5yZXBsYWNlKC9bLixdMDAkLywgXCJcIik7XG4gICAgICAgIGxpbmVUb3RhbFdlaWdodEVsZW1lbnQudmFsdWUgPSBsaW5lVG90YWw7XG5cbiAgICAgICAgdXBkYXRlTGlzdEl0ZW0obGluZVRvdGFsV2VpZ2h0RWxlbWVudCk7XG4gICAgfTtcbiAgICB0aGlzLndpbmRvdy5jb252ZXJ0TWVhc3VyZW1lbnQgPSBmdW5jdGlvbiBjb252ZXJ0TWVhc3VyZW1lbnQoXG4gICAgICAgIHJvdyxcbiAgICAgICAgY29udmVydCA9IGZhbHNlXG4gICAgKSB7XG4gICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdElkJykudmFsdWU7XG4gICAgICAgIGxldCB1b207XG4gICAgICAgIGxldCBpc01hc3Rlckxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXNNYXN0ZXInKS52YWx1ZTtcblxuICAgICAgICBpZihpc01hc3Rlckxpc3QgPT09ICd0cnVlJyl7XG4gICAgICAgICAgICB1b20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1cIityb3cpLnZhbHVlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHVvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tXCIpLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYobGlzdElkID09ICdtYXN0ZXInKXtcbiAgICAgICAgLy8gICAgIHVvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tLVwiK3JvdykudmFsdWU7XG4gICAgICAgIC8vIH1lbHNle1xuICAgICAgICAvLyAgICAgdW9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b21cIikudmFsdWU7XG4gICAgICAgIC8vIH1cbiAgICAgICAgbGV0IHdlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXRlbVdlaWdodC1cIiArIHJvdyk7XG4gICAgICAgIGxldCBwYWNrZWRBbW91bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhY2tlZEFtb3VudC1cIiArIHJvdykudmFsdWU7XG4gICAgICAgIGxldCB0b3RhbFdlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG90YWxMaW5lV2VpZ2h0LVwiICsgcm93KTtcbiAgICAgICAgbGV0IHRvdGFsTGluZVdlaWdodFZhbHVlID0gMDtcbiAgICAgICAgbGV0IHdlaWdodFZhbHVlID0gd2VpZ2h0LnZhbHVlO1xuICAgICAgICBsZXQgc21hbGw7XG4gICAgICAgIGxldCBsYXJnZTtcbiAgICAgICAgbGV0IGVsZW1lbnQ7XG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZS11b20tbGFiZWwtXCIgKyByb3cpO1xuICAgICAgICBsZXQgbGFiZWxIVE1MO1xuXG4gICAgICAgIGlmICh1b20gPT09IFwidXNcIikge1xuICAgICAgICAgICAgc21hbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1vei1cIiArIHJvdyk7XG4gICAgICAgICAgICBsYXJnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tLWxicy1cIiArIHJvdyk7XG4gICAgICAgICAgICBpZiAoc21hbGwuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHdlaWdodFZhbHVlID0gK3dlaWdodFZhbHVlICogMTY7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IHNtYWxsO1xuICAgICAgICAgICAgICAgIGxhYmVsSFRNTCA9IFwiT1pcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0VmFsdWUgPSArd2VpZ2h0VmFsdWUgLyAxNjtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gbGFyZ2U7XG4gICAgICAgICAgICAgICAgbGFiZWxIVE1MID0gXCJMQlNcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNtYWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b20tZ3JhbS1cIiArIHJvdyk7XG4gICAgICAgICAgICBsYXJnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tLWtnLVwiICsgcm93KTtcblxuICAgICAgICAgICAgaWYgKHNtYWxsLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB3ZWlnaHRWYWx1ZSA9ICt3ZWlnaHRWYWx1ZSAqIDEwMDA7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IHNtYWxsO1xuICAgICAgICAgICAgICAgIGxhYmVsSFRNTCA9IFwiR1wiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3ZWlnaHRWYWx1ZSA9ICt3ZWlnaHRWYWx1ZSAvIDEwMDA7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGxhcmdlO1xuICAgICAgICAgICAgICAgIGxhYmVsSFRNTCA9IFwiS0dcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRvdGFsTGluZVdlaWdodFZhbHVlID0gK3dlaWdodFZhbHVlICogK3BhY2tlZEFtb3VudDtcbiAgICAgICAgd2VpZ2h0LnZhbHVlID0gd2VpZ2h0VmFsdWUudG9GaXhlZCgzKS5yZXBsYWNlKC9bLixdMDAkLywgXCJcIik7XG4gICAgICAgIHRvdGFsV2VpZ2h0LnZhbHVlID0gdG90YWxMaW5lV2VpZ2h0VmFsdWVcbiAgICAgICAgICAgIC50b0ZpeGVkKDMpXG4gICAgICAgICAgICAucmVwbGFjZSgvWy4sXTAwJC8sIFwiXCIpO1xuICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSBsYWJlbEhUTUw7XG4gICAgICAgIHVwZGF0ZUxpc3RJdGVtKGVsZW1lbnQpO1xuICAgICAgICB1cGRhdGVMaXN0SXRlbSh3ZWlnaHQpO1xuICAgICAgICB1cGRhdGVMaXN0SXRlbSh0b3RhbFdlaWdodCk7XG4gICAgfTtcbiAgICB0aGlzLndpbmRvdy5hZGRDYXRlZ29yeUdyb3VwID0gZnVuY3Rpb24gYWRkQ2F0ZWdvcnlHcm91cChsaXN0SWQsY2F0ZWdvcnksIGxpc3RVT00sIHVzZXJJZCl7XG5cbiAgICAgICAgbGV0IGNvbHVtbk5hbWU7XG4gICAgICAgIGlmKGxpc3RVT00gPT09ICd1cycpe1xuICAgICAgICAgICAgY29sdW1uTmFtZSA9ICdpbl9vdW5jZXMnO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvbHVtbk5hbWUgPSAnaW5fZ3JhbXMnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRhdGEgPSBnZXRCb29sZWFuRGF0YShjb2x1bW5OYW1lKTtcbiAgICAgICAgZGF0YVsnbGlzdF9pZCddID0gbGlzdElkO1xuICAgICAgICBkYXRhWyd1c2VyX2lkJ10gPSB1c2VySWQ7XG4gICAgICAgIGRhdGFbJ2l0ZW1fbmFtZSddID0gJyc7XG4gICAgICAgIGRhdGFbJ2l0ZW1fd2VpZ2h0J10gPSAwO1xuICAgICAgICBkYXRhWydhbW91bnQnXSA9IDE7XG4gICAgICAgIGRhdGFbJ2l0ZW1fY2F0ZWdvcnknXSA9IGNhdGVnb3J5O1xuICAgICAgICBsZXQgdXJsID0gJy9saXN0LWl0ZW0nXG5cbiAgICAgICAgYXhpb3NcbiAgICAgICAgLnBvc3QodXJsLCBkYXRhKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICByZXMgPSByZXMuZGF0YTtcbiAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09ICcxJyl7XG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBhbGVydChyZXMubXNnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Qm9vbGVhbkRhdGEoY29sdW1uTmFtZSkge1xuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICBkYXRhW1wiaW5fb3VuY2VzXCJdID0gZmFsc2U7XG4gICAgICAgIGRhdGFbXCJpbl9sYnNcIl0gPSBmYWxzZTtcbiAgICAgICAgZGF0YVtcImluX2dyYW1zXCJdID0gZmFsc2U7XG4gICAgICAgIGRhdGFbXCJpbl9raWxvc1wiXSA9IGZhbHNlO1xuICAgICAgICBzd2l0Y2ggKGNvbHVtbk5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJpbl9vdW5jZXNcIjpcbiAgICAgICAgICAgICAgICBkYXRhW1wiaW5fb3VuY2VzXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJpbl9sYnNcIjpcbiAgICAgICAgICAgICAgICBkYXRhW1wiaW5fbGJzXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJpbl9ncmFtc1wiOlxuICAgICAgICAgICAgICAgIGRhdGFbXCJpbl9ncmFtc1wiXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaW5fa2lsb3NcIjpcbiAgICAgICAgICAgICAgICBkYXRhW1wiaW5fa2lsb3NcIl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgdGhpcy53aW5kb3cudXBkYXRlTGlzdEl0ZW0gPSBmdW5jdGlvbiB1cGRhdGVMaXN0SXRlbShlbGVtZW50KSB7XG5cblxuICAgICAgICBsZXQgY29sdW1uTmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4tbmFtZVwiKTtcbiAgICAgICAgbGV0IHZhbHVlID0gZWxlbWVudC52YWx1ZTtcbiAgICAgICAgbGV0IGlkID0gZWxlbWVudC5pZDtcbiAgICAgICAgbGV0IGlkQXJyID0gaWQuc3BsaXQoXCItXCIpO1xuICAgICAgICBsZXQgYXJyTGVuZ3RoID0gaWRBcnIubGVuZ3RoO1xuICAgICAgICBsZXQgcm93ID0gaWRBcnJbYXJyTGVuZ3RoIC0gMV07XG4gICAgICAgIGxldCBpdGVtSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlkLVwiICsgcm93KTtcbiAgICAgICAgbGV0IGl0ZW1JZFZhbHVlID0gaXRlbUlkLnZhbHVlO1xuICAgICAgICBsZXQgbGlzdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0SWRcIikudmFsdWU7XG4gICAgICAgIGxldCB1cmwgPSBcIi9saXN0LWl0ZW1cIjtcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgbGV0IHVzZXJJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcklkXCIpLnZhbHVlO1xuICAgICAgICBsZXQgdXBkYXRlTWFzdGVyID0gbnVsbDtcbiAgICAgICAgbGV0IGNyZWF0ZSA9IHRydWU7XG4gICAgICAgIGxldCBpc01hc3Rlckxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXNNYXN0ZXInKS52YWx1ZTtcbiAgICAgICAgLy8gbGV0IGlucHV0Um93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvdy0nK3Jvdyk7XG4gICAgICAgIC8vIGxldCBpbnB1dHNBbmRTZWxlY3RzID0gaW5wdXRSb3cucXVlcnlTZWxlY3RvcignIHRkIGlucHV0LCB0ZCBzZWxlY3QnKTtcbiAgICAgICAgLy8gaW5wdXRzQW5kU2VsZWN0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgZGF0YVtjb2x1bW5OYW1lXSA9IHZhbHVlO1xuXG4gICAgICAgIGlmIChjb2x1bW5OYW1lLnN1YnN0cmluZygwLCAzKSA9PT0gXCJpbl9cIikge1xuICAgICAgICAgICAgZGF0YSA9IGdldEJvb2xlYW5EYXRhKGNvbHVtbk5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtcImxpc3RfaWRcIl0gPSBsaXN0SWQ7XG4gICAgICAgIGRhdGFbXCJ1c2VyX2lkXCJdID0gdXNlcklkO1xuICAgICAgICBkYXRhW1wiaWRcIl0gPSBpdGVtSWRWYWx1ZTtcbiAgICAgICAgaWYoaXRlbUlkVmFsdWUuc3Vic3RyaW5nKDAsMykgIT09ICduZXcnKXtcbiAgICAgICAgICAgIGNyZWF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdXJsID0gdXJsICsnLycrIGl0ZW1JZFZhbHVlO1xuICAgICAgICAgICAgdXBkYXRlTWFzdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZU1hc3Rlci0nK3Jvdyk7XG4gICAgICAgICAgICBpZih1cGRhdGVNYXN0ZXIgIT09IG51bGwpe1xuICAgICAgICAgICAgICAgIHVwZGF0ZU1hc3RlciA9IHVwZGF0ZU1hc3Rlci52YWx1ZTtcbiAgICAgICAgICAgICAgICBkYXRhWyd1cGRhdGVNYXN0ZXInXSA9IHVwZGF0ZU1hc3RlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdCh1cmwsIGRhdGEsIGl0ZW1JZClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcblxuICAgICAgICAgICAgICAgIGxldCByZXNEYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgaWYocmVzRGF0YS5zdGF0dXMgIT09ICcxJyl7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KHJlc0RhdGEubXNnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihjcmVhdGUpe1xuICAgICAgICAgICAgICAgICAgICBpdGVtSWQudmFsdWUgPSByZXNEYXRhLm5ld0lkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBnZXREZWxldGVCdG5EYXRhKGl0ZW1JZC52YWx1ZSxyb3cpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJGYWlsZWQgdG8gdXBkYXRlIGxpc3QgaXRlbS4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgaWYoaXNNYXN0ZXJMaXN0ID09PSAnZmFsc2UnKXtcbiAgICAgICAgICAgIHVwZGF0ZVRvdGFsTGlzdFdlaWdodHMoKTtcbiAgICAgICAgfVxuXG5cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlVG90YWxMaXN0V2VpZ2h0cygpIHtcbiAgICAgICAgbGV0IHdlaWdodHNGb3JQVyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yLXRvdGFsLWxpc3Qtd2VpZ2h0XCIpO1xuICAgICAgICBsZXQgYmFzZVdlaWdodCA9IDA7XG4gICAgICAgIGxldCB0b3RhbFBhY2tXZWlnaHQgPSAwO1xuICAgICAgICBsZXQgbWF4UGFja1dlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWF4UGFja1dlaWdodFwiKS52YWx1ZTtcbiAgICAgICAgbGV0IGNsYXNzV2FybmluZ1ZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsYXNzV2FybmluZ1ZhbHVlJykudmFsdWU7XG4gICAgICAgIGxldCB1b21UZXh0ID0gXCJMQlNcIjtcbiAgICAgICAgd2VpZ2h0c0ZvclBXLmZvckVhY2goZnVuY3Rpb24gKHdlaWdodEZvclBXKSB7XG4gICAgICAgICAgICBsZXQgaWQgPSB3ZWlnaHRGb3JQVy5pZDtcbiAgICAgICAgICAgIGxldCBpZEFyciA9IGlkLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgICAgIGxldCBhcnJMZW5ndGggPSBpZEFyci5sZW5ndGg7XG4gICAgICAgICAgICBsZXQgcm93ID0gaWRBcnJbYXJyTGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBsZXQgcGFja2VkQW1vdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgICAgICAgXCJwYWNrZWRBbW91bnQtXCIgKyByb3dcbiAgICAgICAgICAgICkudmFsdWU7XG4gICAgICAgICAgICBsZXQgY29udmVydGVyID0gMTtcbiAgICAgICAgICAgIGxldCByb3dXZWlnaHQgPSAwO1xuICAgICAgICAgICAgbGV0IGl0ZW1XZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1XZWlnaHQtXCIgKyByb3cpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IHVvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tXCIpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGl0ZW1DYXRlZ29yeUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgICAgICBcIml0ZW1DYXRlZ29yeS1cIiArIHJvd1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbGV0IGl0ZW1DYXRlZ29yeSA9IFwiXCI7XG4gICAgICAgICAgICBpZiAoaXRlbUNhdGVnb3J5RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGl0ZW1DYXRlZ29yeSA9IGl0ZW1DYXRlZ29yeUVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpdGVtQ2F0ZWdvcnkgPT09IHVuZGVmaW5lZCB8fCBpdGVtQ2F0ZWdvcnkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpdGVtQ2F0ZWdvcnkgPSBcIlwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodW9tID09PSBcInVzXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b20tb3otXCIgKyByb3cpLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udmVydGVyID0gb3VuY2VDb252ZXJ0ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1b21UZXh0ID0gXCJLR1wiO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b20tZ3JhbS1cIiArIHJvdykuY2hlY2tlZCA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBjb252ZXJ0ZXIgPSBncmFtQ29udmVydGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcm93V2VpZ2h0ID0gK3BhY2tlZEFtb3VudCAqICgraXRlbVdlaWdodCAvIGNvbnZlcnRlcik7XG4gICAgICAgICAgICB0b3RhbFBhY2tXZWlnaHQgPSB0b3RhbFBhY2tXZWlnaHQgKyByb3dXZWlnaHQ7XG5cbiAgICAgICAgICAgIGlmIChpdGVtQ2F0ZWdvcnkgIT09IFwiY29uc3VtYWJsZXNcIikge1xuICAgICAgICAgICAgICAgIGJhc2VXZWlnaHQgPSBiYXNlV2VpZ2h0ICsgcm93V2VpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoK2Jhc2VXZWlnaHQgPiArbWF4UGFja1dlaWdodCkge1xuICAgICAgICAgICAgbGV0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlaWdodFdhcm5pbmctZGl2XCIpO1xuICAgICAgICAgICAgZGl2RWxlbWVudC5pbm5lclRleHQgPVwiQmFzZSB3ZWlnaHQgKFwiICsgIGJhc2VXZWlnaHQudG9GaXhlZCgzKSArXCIgXCIgK3VvbVRleHQgK1wiKSBleGNlZWRlcyB0aGUgd2VpZ2h0IGZvciB0aGUgJ1wiICtjbGFzc1dhcm5pbmdWYWx1ZStcIicgc3R5bGUgb2YgaGlraW5nLlwiO1xuXG4gICAgICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlaWdodFdhcm5pbmctZGl2XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFzZVdlaWdodFwiKS52YWx1ZSA9IGJhc2VXZWlnaHQudG9GaXhlZCgzKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3RhbFBhY2tXZWlnaHRcIikudmFsdWUgPVxuICAgICAgICAgICAgdG90YWxQYWNrV2VpZ2h0LnRvRml4ZWQoMyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxpc3RJdGVtSW5wdXQoXG4gICAgICAgIHR5cGUsXG4gICAgICAgIG5hbWVCYXNlLFxuICAgICAgICByb3csXG4gICAgICAgIGNvbHVtbk5hbWUsXG4gICAgICAgIGxpc3RlbiA9IHRydWVcbiAgICApIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGVsZW1lbnQudHlwZSA9IHR5cGU7XG4gICAgICAgIGVsZW1lbnQubmFtZSA9IG5hbWVCYXNlICsgXCJbXVwiO1xuICAgICAgICBlbGVtZW50LmlkID0gbmFtZUJhc2UgKyBcIi1cIiArIHJvdztcbiAgICAgICAgZWxlbWVudC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4tbmFtZVwiLCBjb2x1bW5OYW1lKTtcbiAgICAgICAgaWYobGlzdGVuKXtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlTGlzdEl0ZW0oZWxlbWVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Q2F0ZWdyb3lTZWxlY3Qocm93LCBncm91cENhdGVnb3J5ID0gbnVsbCwgbGlzdGVuID0gdHJ1ZSkge1xuXG4gICAgICAgIGxldCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICBzZWxlY3QuaWQgPSBcIkl0ZW1DYXRlZ29yeS1cIiArIHJvdztcbiAgICAgICAgc2VsZWN0Lm5hbWUgPSBcIml0ZW1DYXRlZ29yeS1cIiArIHJvdztcbiAgICAgICAgc2VsZWN0LnNldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uLW5hbWVcIiwgXCJpdGVtX2NhdGVnb3J5XCIpO1xuICAgICAgICBzZWxlY3QuY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIjtcblxuICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgICAgb3B0aW9uLnRleHQgPSBcIkNob29zZVwiO1xuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgbGV0IG9wdGlvbkxpc3Q7XG5cbiAgICAgICAgb3B0aW9uTGlzdCA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCIvbGlzdC1pdGVtLWNhdGVnb3JpZXNcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBlcnJvclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBUbyB1c2UgdGhlIGZ1bmN0aW9uIGFuZCBoYW5kbGUgdGhlIHJlc3BvbnNlIGRhdGFcbiAgICAgICAgb3B0aW9uTGlzdCgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIC8vIERvIHNvbWV0aGluZyB3aXRoIHRoZSByZXNwb25zZSBkYXRhXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBkYXRhW2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gZGF0YVtpXS5jYXRlZ29yeTtcbiAgICAgICAgICAgICAgICBpZiAoZ3JvdXBDYXRlZ29yeSAhPSBudWxsICYmIGRhdGFbaV0udmFsdWUgPT09IGdyb3VwQ2F0ZWdvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZihsaXN0ZW4pe1xuICAgICAgICAgICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUxpc3RJdGVtKHNlbGVjdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIHNlbGVjdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gbWV0cmljUmFkaW9Ub1VzKCkge1xuICAgICAgICBsZXQgaW5wdXRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWV0cmljLXJhZGlvXCIpO1xuICAgICAgICBpbnB1dEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGlucHV0RWxlbWVudCkge1xuICAgICAgICAgICAgbGV0IGlkQXJyID0gaW5wdXRFbGVtZW50LmlkLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgICAgIGxldCB1b20gPSBpZEFyclsxXTtcbiAgICAgICAgICAgIGxldCByb3cgPSBpZEFycltpZEFyci5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50VHlwZSA9IGlucHV0RWxlbWVudC50eXBlO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRUYWcgPSBpbnB1dEVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICBsZXQgbmV3RWxlbWVudDtcblxuICAgICAgICAgICAgaWYgKGVsZW1lbnRUeXBlID09PSBcInJhZGlvXCIgJiYgdW9tID09PSBcImdyYW1cIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVSYWRpbyhcImluX291bmNlc1wiLCBcIk9aXCIsIFwib3pcIiwgcm93LCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFR5cGUgPT09IFwicmFkaW9cIiAmJiB1b20gPT09IFwia2dcIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVSYWRpbyhcImluX2xic1wiLCBcIkxCU1wiLCBcImxic1wiLCByb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VGFnID09PSBcImxhYmVsXCIgJiYgdW9tID09PSBcImdyYW1cIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVMYWJlbChcIk9aXCIsIFwidW9tLW96LVwiICsgcm93LCBcIm96XCIsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUYWcgPT09IFwibGFiZWxcIiAmJiB1b20gPT09IFwia2dcIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVMYWJlbChcIkxCU1wiLCBcInVvbS1sYnMtXCIgKyByb3csIFwibGJzXCIsIHJvdyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuZXdFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKFxuICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdXNSYWRpb1RvTWV0cmljKCkge1xuICAgICAgICBsZXQgaW5wdXRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudXMtcmFkaW9cIik7XG4gICAgICAgIGlucHV0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXRFbGVtZW50KSB7XG4gICAgICAgICAgICBsZXQgaWRBcnIgPSBpbnB1dEVsZW1lbnQuaWQuc3BsaXQoXCItXCIpO1xuICAgICAgICAgICAgbGV0IHVvbSA9IGlkQXJyWzFdO1xuICAgICAgICAgICAgbGV0IHJvdyA9IGlkQXJyW2lkQXJyLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRUeXBlID0gaW5wdXRFbGVtZW50LnR5cGU7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFRhZyA9IGlucHV0RWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBsZXQgbmV3RWxlbWVudDtcblxuICAgICAgICAgICAgaWYgKGVsZW1lbnRUeXBlID09PSBcInJhZGlvXCIgJiYgdW9tID09PSBcIm96XCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlUmFkaW8oXCJpbl9ncmFtc1wiLCBcIkdSXCIsIFwiZ3JhbVwiLCByb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VHlwZSA9PT0gXCJyYWRpb1wiICYmIHVvbSA9PT0gXCJsYnNcIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVSYWRpbyhcImluX2tpbG9zXCIsIFwiS0dcIiwgXCJrZ1wiLCByb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VGFnID09PSBcImxhYmVsXCIgJiYgdW9tID09PSBcIm96XCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlTGFiZWwoXCJHXCIsIFwidW9tLWdyYW0tXCIgKyByb3csIFwiZ3JhbVwiLCByb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VGFnID09PSBcImxhYmVsXCIgJiYgdW9tID09PSBcImxic1wiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZUxhYmVsKFwiS0dcIiwgXCJ1b20ta2ctXCIgKyByb3csIFwia2dcIiwgcm93KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5ld0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQoXG4gICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVSYWRpbyhkYXRhQ29sdW1uTmFtZSwgbGFiZWwsIHVvbSwgcm93KSB7XG4gICAgICAgIGxldCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgcmFkaW8uY2xhc3NOYW1lID1cbiAgICAgICAgICAgIFwiZm9ybS1jaGVjay1pbnB1dFwiICtcbiAgICAgICAgICAgICh1b20gPT09IFwiZ3JhbVwiIHx8IHVvbSA9PT0gXCJrZ1wiID8gXCIgbWV0cmljLXJhZGlvXCIgOiBcIiB1cy1yYWRpb1wiKTtcbiAgICAgICAgcmFkaW8udHlwZSA9IFwicmFkaW9cIjtcbiAgICAgICAgcmFkaW8ubmFtZSA9IFwidW9tLVwiICsgcm93ICsgXCJbXVwiO1xuICAgICAgICByYWRpby5pZCA9IFwidW9tLVwiICsgdW9tICsgXCItXCIgKyByb3c7XG4gICAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uLW5hbWVcIiwgZGF0YUNvbHVtbk5hbWUpO1xuXG4gICAgICAgIGlmICh1b20gPT09IFwiZ3JhbVwiIHx8IHVvbSA9PT0gXCJvelwiKSB7XG4gICAgICAgICAgICByYWRpby5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnZlcnRNZWFzdXJlbWVudChyb3cpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJhZGlvO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVMYWJlbChpbm5lckh0bWwsIGh0bWxGb3IsIHVvbSwgcm93LCBsaW5lTGFiZWwgPSBmYWxzZSkge1xuICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxhYmVsLmNsYXNzTmFtZSA9XG4gICAgICAgICAgICBcImZvcm0tY2hlY2stbGFiZWxcIiArXG4gICAgICAgICAgICAodW9tID09PSBcImdyYW1cIiB8fCB1b20gPT09IFwia2dcIiA/IFwiIG1ldHJpYy1yYWRpb1wiIDogXCIgdXMtcmFkaW9cIik7XG4gICAgICAgIGxhYmVsLmh0bWxGb3IgPSBodG1sRm9yO1xuICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSBpbm5lckh0bWw7XG4gICAgICAgIGlmICghbGluZUxhYmVsKSB7XG4gICAgICAgICAgICBsYWJlbC5pZCA9IFwidW9tLVwiICsgdW9tICsgXCItbGFiZWwtXCIgKyByb3c7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYWJlbC5pZCA9IFwibGluZS11b20tbGFiZWwtXCIgKyByb3c7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgfVxuXG4gICAgdGhpcy53aW5kb3cudXBkYXRlTGlzdCA9IGZ1bmN0aW9uIHVwZGF0ZUxpc3QoZWxlbWVudCwgbGlzdElkKSB7XG4gICAgICAgIGxldCBjb2x1bW5OYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIpO1xuICAgICAgICBsZXQgdmFsdWUgPSBlbGVtZW50LnZhbHVlO1xuICAgICAgICBsZXQgdXJsID0gXCIvZ2Vhci1saXN0L1wiICsgbGlzdElkO1xuXG4gICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgIGRhdGFbY29sdW1uTmFtZV0gPSB2YWx1ZTtcblxuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QodXJsLCBkYXRhLCBsaXN0SWQpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gYWxlcnQocmVzLmRhdGEubXNnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiRmFpbGVkIHRvIHVwZGF0ZSBsaXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBpZiAoY29sdW1uTmFtZSA9PT0gXCJzb3J0XCIgfHwgY29sdW1uTmFtZSA9PT0gXCJsaXN0X2NsYXNzXCIgfHwgY29sdW1uTmFtZSA9PT0gJ2xpc3RfaXRlbXMnKSB7XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoZWFkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtLWNvbGxhcHNpYmxlLWhlYWRlclwiKTtcblxuICAgIGhlYWRlcnMuZm9yRWFjaCgoaGVhZGVyKSA9PiB7XG4gICAgICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGhlYWRlci5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICBjb25zdCBhcnJvdyA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKFwiLml0ZW0tYXJyb3dcIik7XG4gICAgICAgICAgICBpZiAoY29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJvcGVuXCIpKSB7XG4gICAgICAgICAgICAgICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IG51bGw7XG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5wYWRkaW5nID0gXCIwIDEwcHhcIjtcbiAgICAgICAgICAgICAgICBhcnJvdy5pbm5lckhUTUwgPSBcIiYjOTY2MFwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5wYWRkaW5nID0gXCIxMHB4XCI7XG4gICAgICAgICAgICAgICAgYXJyb3cuaW5uZXJIVE1MID0gXCImIzk2NTBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBsZXQgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNtYXN0ZXItaXRlbS10YWJsZSBpbnB1dFwiKTtcblxuICAgIGlucHV0cy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICBpbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSk7XG5cbiAgICBsZXQgbGlzdENoYXJ0YnRuID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdENoYXJ0QnRuXCIpO1xuICAgIGlmKGxpc3RDaGFydGJ0biAhPT0gbnVsbCl7XG4gICAgICAgIGRvY3VtZW50IC5nZXRFbGVtZW50QnlJZChcImxpc3RDaGFydEJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IGxpc3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdElkXCIpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IHVybCA9IFwiL2dlYXItbGlzdC1hbmFseXRpY3MvXCIgKyBsaXN0SWQ7XG5cbiAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgLmdldCh1cmwpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2hhcnRTdGF0dXMgPSBDaGFydC5nZXRDaGFydChcImdlYXJDaGFydFwiKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhcnRTdGF0dXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFydFN0YXR1cy5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdlYXJDaGFydFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoYXJ0RGF0YSA9IEpTT04ucGFyc2UocmVzLmRhdGEuY2hhcnREYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZG91Z2hudXRcIiwgLy8gQ2hhcnQgdHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsczogY2hhcnREYXRhLmxhYmVscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsYWJlbDogbGlzdE5hbWUgKyAnQnJlYWsgRG93bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBjaGFydERhdGEud2VpZ2h0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY2hhcnREYXRhLmNvbG9ycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJPZmZzZXQ6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXRvdXQ6IDQ1LCAvLyBBZGp1c3QgdGhlIGN1dG91dCBwZXJjZW50YWdlIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM6IDE1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFsYWJlbHM6IGZhbHNlLCAvLyBSZW1vdmluZyB0aGlzIGxpbmUgc2hvd3MgdGhlIGRhdGFsYWJlbHMgYWdhaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlUm90YXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlU2NhbGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhc2VXZWlnaHQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNlV2VpZ2h0XCIpLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdG90YWxQYWNrV2VpZ2h0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG90YWxQYWNrV2VpZ2h0XCIpLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsQmFzZVdlaWdodFwiKS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlV2VpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsVG90YWxXZWlnaHRcIikudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxQYWNrV2VpZ2h0O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgdGhpcy53aW5kb3cuc2hvd0NvbnZyc2lvbkFsZXJ0ID0gZnVuY3Rpb24gc2hvd0NvbnZyc2lvbkFsZXJ0KCl7XG4gICAgICAgIGFsZXJ0KCdDaGFuZ2luZyB0aGlzIHZhbHVlIHdpbGwgYWxzbyB1cGRhdGUgdGhlIHVuaXRzIG9mIG1lYXN1cmUgYW5kIGFzc29jaWF0ZWQgdmFsdWVzIGZvciBhbnkgaXRlbSBvbiB0aGlzIGdlYXIgbGlzdC4nKTtcbiAgICB9XG4gICAgdGhpcy53aW5kb3cuY29uZmlybURlbGV0ZSA9IGZ1bmN0aW9uIGNvbmZpcm1EZWxldGUoZWxlbWVudCkge1xuICAgICAgICBsZXQgaHJlZiA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWhyZWYnKTtcbiAgICAgICAgbGV0IG5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vYmplY3QtbmFtZScpO1xuICAgICAgICBsZXQgb2JqZWN0VHlwZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9iamVjdC10eXBlJyk7XG4gICAgICAgIGxldCBhbmNob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlT2JqZWN0QW5jaG9yJyk7XG4gICAgICAgIGxldCBtb2RhbEJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlTW9kYWxCb2R5Jyk7XG4gICAgICAgIGxldCB0ZXh0ID0gYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgJHtvYmplY3RUeXBlfSAke25hbWV9P2A7XG4gICAgICAgIGxldCBoZWxwZXJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlSGVscGVyJyk7XG4gICAgICAgIGhlbHBlckRpdi5pbm5lclRleHQgPSAnJztcblxuXG4gICAgICAgIGlmKG9iamVjdFR5cGUgPT09ICdpdGVtOicpe1xuICAgICAgICAgICAgbGV0IGxpc3ROYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdC1uYW1lJyk7XG4gICAgICAgICAgICBsZXQgaGVscHRleHQgPSBgKiBEZWxldGluZyBhbiBpdGVtIGZyb20gZnJvbSB0aGlzIGxpc3QgKCR7bGlzdE5hbWV9KSB3aWxsIG5vdCBkZWxldGUgaXQgdGhlICdZb3VyIEdlYXInIHNlY3Rpb24uYDtcbiAgICAgICAgICAgIGhlbHBlckRpdi5hcHBlbmQoaGVscHRleHQpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGhlbHBlckRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICAgIG1vZGFsQm9keS5pbm5lckhUTUwgPSB0ZXh0O1xuICAgICAgICBhbmNob3Iuc2V0QXR0cmlidXRlKCdocmVmJyxocmVmKTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZURlbGV0ZUJ1dHRvbihyb3cpIHtcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBidXR0b24gZWxlbWVudFxuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLXNtIGJ0bi1kYW5nZXInO1xuICAgICAgICBidXR0b24udGl0bGUgPSAnRGVsZXRlIEl0ZW0nO1xuICAgICAgICBidXR0b24uaWQgPWBkZWxldGVJdGVtQnRuLSR7cm93fWA7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaHJlZicsJycpO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLW9iamVjdC1uYW1lJywnJyk7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtb2JqZWN0LWlkJywnJyk7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtb2JqZWN0LXR5cGUnLCdpdGVtOicpO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWxpc3QtbmFtZScsZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3ROYW1lJykudmFsdWUpO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRvZ2dsZScsXCJtb2RhbFwiKVxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRhcmdldCcsXCIjZGVsZXRlQWxlcnRNb2RhbFwiKTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIGljb24gZWxlbWVudFxuICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICBpY29uLmNsYXNzTmFtZSA9ICdmYXMgZmEtdHJhc2gnOyAvLyBGb250IEF3ZXNvbWUgdHJhc2ggaWNvblxuXG4gICAgICAgIC8vIEFkZCB0aGUgaWNvbiB0byB0aGUgYnV0dG9uXG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKTtcblxuICAgICAgICAvLyBBZGQgdGV4dCB0byB0aGUgYnV0dG9uIChvcHRpb25hbClcbiAgICAgICAgLy8gYnV0dG9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdEZWxldGUnKSk7XG5cbiAgICAgICAgLy8gQWRkIHRoZSBvbmNsaWNrIGV2ZW50IHRvIHRoZSBidXR0b25cbiAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbmZpcm1EZWxldGUoYnV0dG9uKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERlbGV0ZUJ0bkRhdGEoaWQscm93KXtcbiAgICAgICAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZWxldGVJdGVtQnRuLSR7cm93fWApO1xuICAgICAgICBsZXQgdXJsID0gYC9saXN0LWl0ZW0vJHtpZH1gO1xuXG4gICAgICAgIGF4aW9zXG4gICAgICAgIC5nZXQodXJsKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzICE9IFwiMVwiKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQocmVzLmRhdGEubXNnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBpdGVtID0gcmVzLmRhdGEuaXRlbTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaHJlZicsYC9yZW1vdmUtbGlzdC1pdGVtLyR7aXRlbS5pZH1gKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtb2JqZWN0LW5hbWUnLGl0ZW0uaXRlbV9uYW1lKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtb2JqZWN0LWlkJyxpdGVtLmlkKTtcblxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgYWxlcnQoZXJyKTtcbiAgICAgICAgfSk7XG5cblxuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc29ydGFibGVcIikuZm9yRWFjaChmdW5jdGlvbiAodGFibGUpIHtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlJZCA9IHRhYmxlLmdldEF0dHJpYnV0ZShcImRhdGEtY2F0ZWdvcnktaWRcIik7XG5cbiAgICAgICAgbmV3IFNvcnRhYmxlKHRhYmxlLnF1ZXJ5U2VsZWN0b3IoXCJ0Ym9keVwiKSwge1xuICAgICAgICAgICAgYW5pbWF0aW9uOiAxNTAsXG4gICAgICAgICAgICBvbkVuZDogZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgbmV3IG9yZGVyIG9mIGl0ZW1zXG4gICAgICAgICAgICAgICAgY29uc3Qgb3JkZXJlZElkcyA9IFtdO1xuICAgICAgICAgICAgICAgIHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0clwiKS5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJlZElkcy5wdXNoKHJvdy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIFNlbmQgdGhlIG5ldyBvcmRlciB0byB0aGUgc2VydmVyIHZpYSBBSkFYXG4gICAgICAgICAgICAgICAgdXBkYXRlSXRlbU9yZGVyKGNhdGVnb3J5SWQsIG9yZGVyZWRJZHMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gdXBkYXRlSXRlbU9yZGVyKGNhdGVnb3J5SWQsIG9yZGVyZWRJZHMpIHtcblxuICAgICAgICBsZXQgbGlzdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0SWRcIikudmFsdWU7XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIFwiWC1DU1JGLVRPS0VOXCI6IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKVxuICAgICAgICAgICAgICAgIC5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpLFxuICAgICAgICAgICAgY2F0ZWdvcnlfaWQ6IGNhdGVnb3J5SWQsXG4gICAgICAgICAgICBvcmRlcmVkX2lkczogb3JkZXJlZElkcyxcbiAgICAgICAgICAgIGxpc3RfaWQ6IGxpc3RJZCxcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgdXJsID0gXCIvdXBkYXRlLWxpc3Qtb3JkZXJcIjtcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC5wb3N0KHVybCwgZGF0YSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzICE9IFwiMVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KHJlcy5kYXRhLm1zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBzb3J0aW5nU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0QnlcIik7XG4gICAgICAgIGxldCBvcHRzID0gc29ydGluZ1NlbGVjdC5vcHRpb25zLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRzOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzb3J0aW5nU2VsZWN0Lm9wdGlvbnNbaV0udmFsdWUgPT0gXCJkcmFnX2Ryb3BcIikge1xuICAgICAgICAgICAgICAgIHNvcnRpbmdTZWxlY3Qub3B0aW9uc1tpXS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcGFyZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcmVudC1jb250YWluZXInKTtcblxuICAgIGlmKHBhcmVudENvbnRhaW5lciAhPT0gbnVsbCAmJiBwYXJlbnRDb250YWluZXIgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIFNvcnRhYmxlLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFyZW50LWNvbnRhaW5lcicpLCB7XG4gICAgICAgICAgICBhbmltYXRpb246IDE1MCxcbiAgICAgICAgICAgIGhhbmRsZTogJy5pdGVtLWNvbGxhcHNpYmxlLWhlYWRlcicsXG4gICAgICAgICAgICBnaG9zdENsYXNzOiAnc29ydGFibGUtZ2hvc3QnLFxuICAgICAgICAgICAgb25FbmQ6IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgICAgICAvLyBBZnRlciBzb3J0aW5nIGlzIGNvbXBsZXRlZCwgdXBkYXRlIHRoZSBwb3NpdGlvbnMgaW4gdGhlIGRhdGFiYXNlXG4gICAgICAgICAgICAgICAgdXBkYXRlQ2F0ZWdvcnlPcmRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQ2F0ZWdvcnlPcmRlcigpIHtcblxuICAgICAgICBjb25zdCBuZXdPcmRlciA9IFtdO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJhZ2dhYmxlLWNvbnRhaW5lcicpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG5cbiAgICAgICAgICAgIG5ld09yZGVyLnB1c2goe1xuICAgICAgICAgICAgICAgIGl0ZW1fY2F0ZWdvcnk6IGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWNhdGVnb3J5LXZhbHVlJyksXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlfb3JkZXI6IGluZGV4XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCB1cmwgPSBcIi91cGRhdGUtY2F0ZXJvZ3J5LW9yZGVyXCI7XG4gICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RJZFwiKS52YWx1ZTtcblxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgXCJYLUNTUkYtVE9LRU5cIjogZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpXG4gICAgICAgICAgICAgICAgLmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIiksXG4gICAgICAgICAgICBjYXRlZ29yeV9vcmRlcjogbmV3T3JkZXIsXG4gICAgICAgICAgICBsaXN0X2lkOiBsaXN0SWQsXG4gICAgICAgIH07XG4gICAgICAgIC8vYnJlYWsgb3V0IHBvc3RzIGFuZCBnZXQgY2FsbHMgdG8gb3duIGZ1bmN0aW9uc1xuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QodXJsLCBkYXRhKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cyAhPSBcIjFcIikge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChyZXMuZGF0YS5tc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGxldCBhc3NpZ25Ub0xpc3RNb2RhbCA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQXNzaWduSXRlbVRvTGlzdE1vZGFsJyk7XG5cbiAgICBpZihhc3NpZ25Ub0xpc3RNb2RhbCAhPT0gdW5kZWZpbmVkICYmIGFzc2lnblRvTGlzdE1vZGFsICE9PSBudWxsKXtcblxuICAgICAgICBhc3NpZ25Ub0xpc3RNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdoaWRlLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IHRhYmxlQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1hc3NpZ24taXRlbS10YWJsZS1ib2R5Jyk7XG4gICAgICAgICAgICB3aGlsZSh0YWJsZUJvZHkuZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICAgICAgdGFibGVCb2R5LnJlbW92ZUNoaWxkKHRhYmxlQm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbndpbmRvdy5heGlvcyA9IGF4aW9zO1xuXG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIk1vZGFsIiwiQ2hhcnQiLCJTb3J0YWJsZSIsImJvb3RzdHJhcCIsInJlcXVpcmUiLCJncmFtQ29udmVydGVyIiwib3VuY2VDb252ZXJ0ZXIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2hvd1Bhc3N3b3JkIiwiaWQiLCJwYXNzd29yZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRNYXN0ZXJMaXN0SXRlbSIsIm51bWJlck9mSXRlbXNUb0FkZCIsImxpbmVzVG9BZGQiLCJsaXN0QnlJdGVtcyIsImxpc3RlbiIsIml0ZW1UYWJsZSIsInJvdyIsImNyZWF0ZUVsZW1lbnQiLCJjZWxsMSIsIml0ZW1OYW1lIiwiY3JlYXRlTGlzdEl0ZW1JbnB1dCIsInBsYWNlaG9sZGVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2VsbDYiLCJkZWxldGVCdG4iLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiLCJjZWxsMiIsIml0ZW1XZWlnaHQiLCJzdHlsZSIsIndpZHRoIiwiY2VsbDMiLCJzZWxlY3QiLCJzZXRBdHRyaWJ1dGUiLCJvek9wdGlvbiIsImxic09wdGlvbiIsImdyT3B0aW9uIiwia2dPcHRpb24iLCJ0ZXh0IiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3RDZWxsIiwiY2F0ZWdvcnlTZWxlY3QiLCJnZXRDYXRlZ3JveVNlbGVjdCIsImFwcGVuZCIsInNob3dMaXN0QXNzaWduTW9kYWwiLCJpdGVtSWQiLCJ0YWJsZSIsImhlYWRlciIsInVybCIsInVzZXJMaXN0cyIsImF4aW9zIiwiZ2V0IiwicmVzIiwiZGF0YSIsInN0YXR1cyIsImFsZXJ0IiwibXNnIiwibGlzdE5hbWVDZWxsIiwiYXNzaWduQ2VsbCIsImNoZWNrYm94IiwiaXRlbUFzc2lnbmVkIiwiY2hlY2tlZCIsImFzc2lnblRvR2Vhckxpc3QiLCJlbGVtZW50IiwibGlzdElkIiwiZ2V0QXR0cmlidXRlIiwibGlzdF9pZCIsInBvc3QiLCJyZXNwb25zZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImFkZExpc3RJdGVtIiwiY2F0ZWdvcnljb3VudGVyIiwidW5kZWZpbmVkIiwiZ3JvdXBDYXRlZ29yeSIsImxpc3RVT00iLCJmaW5hbElFbGVtZW50IiwidGFibGVDYXRlZ29yeSIsInVzZXJJZCIsImZpbmFsSSIsImNlbGwwIiwic2NvcGUiLCJjb3VudGVyIiwidXBkYXRlTWFzdGVyTGlzdCIsImNyZWF0ZURlbGV0ZUJ1dHRvbiIsImxpbmVVb21DZWxsIiwicmFkaW8xIiwicmFkaW8yIiwicmFkaW9MYWJlbDEiLCJyYWRpb0xhYmVsMiIsInJhZGlvTGFiZWwzIiwiY3JlYXRlUmFkaW8iLCJjcmVhdGVMYWJlbCIsImNlbGw0IiwicGFja2VkQW1vdW50IiwiY2VsbDUiLCJ0b3RhbExpbmVXZWlnaHQiLCJzdmdOYW1lc3BhY2UiLCJpY29uQ2VsbCIsImljb24iLCJjcmVhdGVFbGVtZW50TlMiLCJwYXRoIiwiYWRkRXZlbnRMaXN0ZW5lcldlaWdodENhbGMiLCJ1cGRhdGVVT00iLCJ1c1JhZGlvVG9NZXRyaWMiLCJtZXRyaWNSYWRpb1RvVXMiLCJuZWVkZWRGb3JXZWlnaHRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm5lZWRlZEZvcldlaWdodCIsImdldExpbmVUb3RhbFdlaWdodCIsImNvbnZlcnQiLCJ3ZWlnaHQiLCJ1b20iLCJsaW5lVG90YWxXZWlnaHRFbGVtZW50IiwibGluZVRvdGFsIiwidG9GaXhlZCIsInJlcGxhY2UiLCJ1cGRhdGVMaXN0SXRlbSIsImNvbnZlcnRNZWFzdXJlbWVudCIsImlzTWFzdGVyTGlzdCIsInRvdGFsV2VpZ2h0IiwidG90YWxMaW5lV2VpZ2h0VmFsdWUiLCJ3ZWlnaHRWYWx1ZSIsInNtYWxsIiwibGFyZ2UiLCJsYWJlbCIsImxhYmVsSFRNTCIsImFkZENhdGVnb3J5R3JvdXAiLCJjYXRlZ29yeSIsImNvbHVtbk5hbWUiLCJnZXRCb29sZWFuRGF0YSIsImxvY2F0aW9uIiwicmVsb2FkIiwiZXJyIiwiaWRBcnIiLCJzcGxpdCIsImFyckxlbmd0aCIsIml0ZW1JZFZhbHVlIiwidXBkYXRlTWFzdGVyIiwic3Vic3RyaW5nIiwicmVzRGF0YSIsIm5ld0lkIiwiZ2V0RGVsZXRlQnRuRGF0YSIsInVwZGF0ZVRvdGFsTGlzdFdlaWdodHMiLCJ3ZWlnaHRzRm9yUFciLCJiYXNlV2VpZ2h0IiwidG90YWxQYWNrV2VpZ2h0IiwibWF4UGFja1dlaWdodCIsImNsYXNzV2FybmluZ1ZhbHVlIiwidW9tVGV4dCIsIndlaWdodEZvclBXIiwiY29udmVydGVyIiwicm93V2VpZ2h0IiwiaXRlbUNhdGVnb3J5RWxlbWVudCIsIml0ZW1DYXRlZ29yeSIsImRpdkVsZW1lbnQiLCJpbm5lclRleHQiLCJkaXNwbGF5IiwibmFtZUJhc2UiLCJvcHRpb24iLCJvcHRpb25MaXN0IiwiX3JlZiIsIl9jYWxsZWUiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwidDAiLCJzZWxlY3RlZCIsImlucHV0RWxlbWVudHMiLCJpbnB1dEVsZW1lbnQiLCJlbGVtZW50VHlwZSIsImVsZW1lbnRUYWciLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJuZXdFbGVtZW50IiwicGFyZW50RWxlbWVudCIsInJlcGxhY2VDaGlsZCIsImRhdGFDb2x1bW5OYW1lIiwicmFkaW8iLCJpbm5lckh0bWwiLCJodG1sRm9yIiwibGluZUxhYmVsIiwidXBkYXRlTGlzdCIsImhlYWRlcnMiLCJjb250ZW50IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiYXJyb3ciLCJxdWVyeVNlbGVjdG9yIiwiY29udGFpbnMiLCJyZW1vdmUiLCJtYXhIZWlnaHQiLCJwYWRkaW5nIiwic2Nyb2xsSGVpZ2h0IiwiaW5wdXRzIiwiaW5wdXQiLCJkaXNhYmxlZCIsImxpc3RDaGFydGJ0biIsImNoYXJ0U3RhdHVzIiwiZ2V0Q2hhcnQiLCJkZXN0cm95IiwiY3R4IiwiY2hhcnREYXRhIiwiSlNPTiIsInBhcnNlIiwibXlDaGFydCIsImxhYmVscyIsImRhdGFzZXRzIiwid2VpZ2h0cyIsImJhY2tncm91bmRDb2xvciIsImNvbG9ycyIsImJvcmRlcldpZHRoIiwiaG92ZXJPZmZzZXQiLCJvcHRpb25zIiwiY3V0b3V0IiwicmFkaXVzIiwibGVnZW5kIiwicGx1Z2lucyIsImRhdGFsYWJlbHMiLCJhbmltYXRpb24iLCJhbmltYXRlUm90YXRlIiwiYW5pbWF0ZVNjYWxlIiwidGV4dENvbnRlbnQiLCJzaG93Q29udnJzaW9uQWxlcnQiLCJjb25maXJtRGVsZXRlIiwiaHJlZiIsIm9iamVjdFR5cGUiLCJhbmNob3IiLCJtb2RhbEJvZHkiLCJjb25jYXQiLCJoZWxwZXJEaXYiLCJsaXN0TmFtZSIsImhlbHB0ZXh0IiwiYnV0dG9uIiwidGl0bGUiLCJvbmNsaWNrIiwiaXRlbSIsIml0ZW1fbmFtZSIsImNhdGVnb3J5SWQiLCJvbkVuZCIsImV2dCIsIm9yZGVyZWRJZHMiLCJ1cGRhdGVJdGVtT3JkZXIiLCJjYXRlZ29yeV9pZCIsIm9yZGVyZWRfaWRzIiwic29ydGluZ1NlbGVjdCIsIm9wdHMiLCJwYXJlbnRDb250YWluZXIiLCJnaG9zdENsYXNzIiwidXBkYXRlQ2F0ZWdvcnlPcmRlciIsIm5ld09yZGVyIiwiaW5kZXgiLCJpdGVtX2NhdGVnb3J5IiwiY2F0ZWdvcnlfb3JkZXIiLCJhc3NpZ25Ub0xpc3RNb2RhbCIsInRhYmxlQm9keSIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImRlZmF1bHRzIiwiY29tbW9uIl0sInNvdXJjZVJvb3QiOiIifQ==