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
      // Define the SVG namespace
      // const svgNamespace = "http://www.w3.org/2000/svg";
      // let iconCell = document.createElement("th");
      // // Create a new SVG element
      // let icon = document.createElementNS(svgNamespace, "svg");
      // icon.setAttribute("width", "16");
      // icon.setAttribute("height", "16");
      // icon.setAttribute("fill", "currentColor");
      // icon.setAttribute("class", "bi bi-grip-vertical");
      // icon.setAttribute("viewBox", "0 0 16 16");

      // // Create the <path> element
      // let path = document.createElementNS(svgNamespace, "path");
      // path.setAttribute(
      //     "d",
      //     "M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      // );

      // // Append the path to the SVG
      // icon.appendChild(path);

      // // // Append the SVG icon to the cell
      // iconCell.appendChild(icon);

      // cell1.appendChild(counter);
      // cell1.appendChild(icon);
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
  this.window.assignToGearList = function assignToGearList(itemId, listId) {
    console.log('list_id in new assign: ' + listId);
    console.log('item in new assign: ' + itemId);
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
  this.window.updateSessionData = function updateSessionData(element) {
    var value = element.value;
    var columnName = element.getAttribute('data-column-name');
    var url = '/update-session';
    var data = {};
    data[columnName] = value;
    axios.post(url, data).then(function (response) {
      response = response.data;
      if (response.status == 1) {
        location.reload();
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
    var _loop = function _loop() {
      var listUOM = document.getElementById("uom").value;
      var finalIElement = document.getElementById("final-i");
      var listByItems = document.getElementById("listByItems").value;
      var itemTable;
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
      var deleteBtn = document.createElement("a");
      deleteBtn.id = "deleteBtn-" + finalI;
      deleteBtn.className = "btn btn-primary btn-sm  py-2";
      deleteBtn.innerHTML = "x";
      var data = {};
      var url = "/list-item";
      if (listUOM == "us") {
        data = getBooleanData("in_ounces");
      } else {
        data = getBooleanData("in_grams");
      }
      data["list_id"] = listId;
      data["user_id"] = userId;
      data["item_name"] = "";
      if (groupCategory !== null) {
        data['item_category'] = groupCategory;
      }
      var updateItem;
      updateItem = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var response;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.post(url, data);
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
        return function updateItem() {
          return _ref.apply(this, arguments);
        };
      }();

      // To use the function and handle the response data
      updateItem().then(function (data) {
        // Do something with the response data
        counter.value = data.newId;
        row.setAttribute("data-id", data.newId);
        deleteBtn.setAttribute("href", "/destroy-list-item/" + data.newId);
      });
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
      var radio1;
      var radio2;
      var radioLabel1;
      var radioLabel2;
      var radioLabel3;
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
      // cell1.appendChild(icon);
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
    };
    for (var i = 0; i < linesToAdd; i++) {
      _loop();
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
    if (listId == 'master') {
      uom = document.getElementById("uom-" + row).value;
    } else {
      uom = document.getElementById("uom").value;
    }
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
    var url = "/list-item/" + itemIdValue;
    var data = {};
    var userId = document.getElementById("userId").value;
    data[columnName] = value;
    if (columnName.substring(0, 3) === "in_") {
      data = getBooleanData(columnName);
    }
    data["list_id"] = listId;
    data["user_id"] = userId;
    data["id"] = itemIdValue;
    axios.post(url, data, itemId).then(function (res) {
      console.log('res from update for master: ' + JSON.stringify(res));
    })["catch"](function (err) {
      alert("Failed to update list item. Please try again later.");
      console.error(err);
    });
    if (listId !== 'master') {
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
    console.log('group cat in get select: ' + groupCategory);
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
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios.get("/list-item-categories");
            case 3:
              response = _context2.sent;
              return _context2.abrupt("return", response.data);
            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              // handle error
              console.log(_context2.t0);
            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 7]]);
      }));
      return function optionList() {
        return _ref2.apply(this, arguments);
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
    alert('Changing this value will also update the units of meassure and associated values for any item in this Gear list.');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtJQUNuQyxJQUFJSCxNQUFNLEdBQUd2QyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQ2hILEtBQUs7SUFFcEQsSUFBSTBKLElBQUksR0FBRztNQUNQLGNBQWMsRUFBRSxrQkFBa0I7TUFDbEMsY0FBYyxFQUFFM0MsUUFBUSxDQUNuQmdMLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUN4Q3pILFlBQVksQ0FBQyxTQUFTLENBQUM7TUFDNUI2SyxjQUFjLEVBQUVKLFFBQVE7TUFDeEJwTCxPQUFPLEVBQUVMO0lBQ2IsQ0FBQztJQUNEO0lBQ0FNLEtBQUssQ0FDQUMsSUFBSSxDQUFDSixHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUNmL0csSUFBSSxDQUFDLFVBQUMrTCxHQUFHLEVBQUs7TUFFWCxJQUFJQSxHQUFHLENBQUNoRixJQUFJLENBQUNLLE1BQU0sSUFBSSxHQUFHLEVBQUU7UUFDeEJDLEtBQUssQ0FBQzBFLEdBQUcsQ0FBQ2hGLElBQUksQ0FBQ08sR0FBRyxDQUFDO01BQ3ZCO0lBQ0osQ0FBQyxDQUFDLFNBQ0ksQ0FBQyxVQUFDMEUsR0FBRyxFQUFLO01BQ1ozRSxLQUFLLENBQUMyRSxHQUFHLENBQUM7SUFDZCxDQUFDLENBQUM7RUFFVjtBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDL2tDd0I7QUFDMUJqSSxNQUFNLENBQUNrRCxLQUFLLEdBQUdBLDZDQUFLO0FBRXBCbEQsTUFBTSxDQUFDa0QsS0FBSyxDQUFDd0wsUUFBUSxDQUFDMUQsT0FBTyxDQUFDMkQsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsZ0JBQWdCOzs7Ozs7Ozs7OztBQ0gzRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Fzcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgJy4vYm9vdHN0cmFwJyA7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCJib290c3RyYXBcIjtcbi8vIGltcG9ydCAgJ2Jvb3RzdHJhcCc7XG5pbXBvcnQgXCJAcG9wcGVyanMvY29yZVwiO1xuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qcy9hdXRvXCI7XG5pbXBvcnQgU29ydGFibGUgZnJvbSBcInNvcnRhYmxlanNcIjtcbmNvbnN0IGJvb3RzdHJhcCA9IHJlcXVpcmUoXCIuL2Jvb3RzdHJhcFwiKTtcbmNvbnN0IGdyYW1Db252ZXJ0ZXIgPSAxMDAwO1xuY29uc3Qgb3VuY2VDb252ZXJ0ZXIgPSAxNjtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoZSkge1xuICAgIHRoaXMud2luZG93LnNob3dQYXNzd29yZCA9IGZ1bmN0aW9uIHNob3dQYXNzd29yZChpZCkge1xuICAgICAgICBsZXQgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgIGlmIChwYXNzd29yZC50eXBlID09PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgICAgICAgIHBhc3N3b3JkLnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhc3N3b3JkLnR5cGUgPSBcInBhc3N3b3JkXCI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMud2luZG93LmFkZE1hc3Rlckxpc3RJdGVtID0gZnVuY3Rpb24gYWRkTWFzdGVyTGlzdEl0ZW0oKSB7XG4gICAgICAgIGxldCBudW1iZXJPZkl0ZW1zVG9BZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmVzVG9BZGRcIik7XG4gICAgICAgIGxldCBsaW5lc1RvQWRkID0gMTtcbiAgICAgICAgaWYgKG51bWJlck9mSXRlbXNUb0FkZCA9PT0gbnVsbCB8fCArbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlIDwgMSkge1xuICAgICAgICAgICAgbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlID0gbGluZXNUb0FkZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpbmVzVG9BZGQgPSArbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lc1RvQWRkOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBsaXN0QnlJdGVtcyA9IHRydWU7XG4gICAgICAgICAgICBsZXQgbGlzdGVuID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgaXRlbVRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWl0ZW0tdGFibGUtYm9keScpO1xuICAgICAgICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIGNlbGxzIGFuZCBpbnB1dCBlbGVtZW50cy5cbiAgICAgICAgICAgIGxldCBjZWxsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcblxuICAgICAgICAgICAgbGV0IGl0ZW1OYW1lID0gY3JlYXRlTGlzdEl0ZW1JbnB1dChcbiAgICAgICAgICAgICAgICBcInRleHRcIixcbiAgICAgICAgICAgICAgICBcIml0ZW1OYW1lXCIsXG4gICAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgICBcIml0ZW1fbmFtZVwiLFxuICAgICAgICAgICAgICAgIGxpc3RlblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGl0ZW1OYW1lLnBsYWNlaG9sZGVyID0gXCJJdGVtIE5hbWVcIjtcbiAgICAgICAgICAgIGl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRyb2xcIik7XG5cbiAgICAgICAgICAgIGxldCBjZWxsNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGNlbGw2LmlkID0gXCJidG4tdGQtXCIgK2k7XG4gICAgICAgICAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgICAgICBkZWxldGVCdG4uaWQgPSBcImRlbGV0ZUJ0bi1cIiArIGk7XG4gICAgICAgICAgICBkZWxldGVCdG4uY2xhc3NOYW1lID0gXCJidG4gYnRuLXByaW1hcnkgYnRuLXNtICBweS0yXCI7XG4gICAgICAgICAgICBkZWxldGVCdG4uaW5uZXJIVE1MID0gXCJ4XCI7XG5cblxuICAgICAgICAgICAgbGV0IGNlbGwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgbGV0IGl0ZW1XZWlnaHQgPSBjcmVhdGVMaXN0SXRlbUlucHV0KFxuICAgICAgICAgICAgICAgIFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgXCJpdGVtV2VpZ2h0XCIsXG4gICAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgICBcIml0ZW1fd2VpZ2h0XCIsXG4gICAgICAgICAgICAgICAgbGlzdGVuXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaXRlbVdlaWdodC52YWx1ZSA9IDA7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJmb3Itd2VpZ2h0XCIpO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWlucHV0XCIpO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5zdHlsZS53aWR0aCA9ICc0MCUnO1xuICAgICAgICAgICAgY2VsbDIuY2xhc3NMaXN0LmFkZChcIm51bWJlci1jb2xcIik7XG5cbiAgICAgICAgICAgIGxldCBjZWxsMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGxldCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICAgICAgc2VsZWN0LmlkID0gXCJ1b20tXCIgKyBpO1xuICAgICAgICAgICAgc2VsZWN0Lm5hbWUgPSBcInVvbVtdXCI7XG4gICAgICAgICAgICBzZWxlY3Quc2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4tbmFtZVwiLCBcInVvbVwiKTtcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiO1xuXG4gICAgICAgICAgICBsZXQgb3pPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgbGV0IGxic09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBsZXQgZ3JPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgbGV0IGtnT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIG96T3B0aW9uLnZhbHVlID0gXCJpbl9vdW5jZXNcIjtcbiAgICAgICAgICAgIG96T3B0aW9uLnRleHQgPSBcIk9aXCI7XG4gICAgICAgICAgICBsYnNPcHRpb24udmFsdWUgID0gJ2luX2xicyc7XG4gICAgICAgICAgICBsYnNPcHRpb24udGV4dCA9ICdMQlMnXG5cbiAgICAgICAgICAgIGdyT3B0aW9uLnZhbHVlID0gXCJpbl9ncmFtc1wiO1xuICAgICAgICAgICAgZ3JPcHRpb24udGV4dCA9IFwiR1wiO1xuICAgICAgICAgICAga2dPcHRpb24udmFsdWUgID0gJ2luX2tpbG9zJztcbiAgICAgICAgICAgIGtnT3B0aW9uLnRleHQgPSAnS0cnO1xuICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG96T3B0aW9uKTtcbiAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChsYnNPcHRpb24pO1xuICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKGdyT3B0aW9uKTtcbiAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChrZ09wdGlvbik7XG5cbiAgICAgICAgICAgIC8vYXBwZW5kIGlucHV0cyB0byBjZWxscy5cbiAgICAgICAgICAgIC8vIERlZmluZSB0aGUgU1ZHIG5hbWVzcGFjZVxuICAgICAgICAgICAgLy8gY29uc3Qgc3ZnTmFtZXNwYWNlID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuICAgICAgICAgICAgLy8gbGV0IGljb25DZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgICAgICAgICAgLy8gLy8gQ3JlYXRlIGEgbmV3IFNWRyBlbGVtZW50XG4gICAgICAgICAgICAvLyBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOYW1lc3BhY2UsIFwic3ZnXCIpO1xuICAgICAgICAgICAgLy8gaWNvbi5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjE2XCIpO1xuICAgICAgICAgICAgLy8gaWNvbi5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIxNlwiKTtcbiAgICAgICAgICAgIC8vIGljb24uc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcImN1cnJlbnRDb2xvclwiKTtcbiAgICAgICAgICAgIC8vIGljb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJiaSBiaS1ncmlwLXZlcnRpY2FsXCIpO1xuICAgICAgICAgICAgLy8gaWNvbi5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDE2IDE2XCIpO1xuXG4gICAgICAgICAgICAvLyAvLyBDcmVhdGUgdGhlIDxwYXRoPiBlbGVtZW50XG4gICAgICAgICAgICAvLyBsZXQgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOYW1lc3BhY2UsIFwicGF0aFwiKTtcbiAgICAgICAgICAgIC8vIHBhdGguc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgLy8gICAgIFwiZFwiLFxuICAgICAgICAgICAgLy8gICAgIFwiTTcgMmExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBtMyAwYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgME03IDVhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbTMgMGExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBNNyA4YTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMG0zIDBhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbS0zIDNhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbTMgMGExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBtLTMgM2ExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBtMyAwYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMFwiXG4gICAgICAgICAgICAvLyApO1xuXG4gICAgICAgICAgICAvLyAvLyBBcHBlbmQgdGhlIHBhdGggdG8gdGhlIFNWR1xuICAgICAgICAgICAgLy8gaWNvbi5hcHBlbmRDaGlsZChwYXRoKTtcblxuICAgICAgICAgICAgLy8gLy8gLy8gQXBwZW5kIHRoZSBTVkcgaWNvbiB0byB0aGUgY2VsbFxuICAgICAgICAgICAgLy8gaWNvbkNlbGwuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICAgICAgICAgIC8vIGNlbGwxLmFwcGVuZENoaWxkKGNvdW50ZXIpO1xuICAgICAgICAgICAgLy8gY2VsbDEuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgICAgICBjZWxsMS5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gICAgICAgICAgICBjZWxsMi5hcHBlbmRDaGlsZChpdGVtV2VpZ2h0KTtcblxuICAgICAgICAgICAgbGV0IHNlbGVjdENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBsZXQgY2F0ZWdvcnlTZWxlY3QgPSBnZXRDYXRlZ3JveVNlbGVjdChpLG51bGwsIGxpc3Rlbik7XG4gICAgICAgICAgICBjYXRlZ29yeVNlbGVjdC5uYW1lID0gJ2l0ZW1DYXRlZ29yeVtdJ1xuICAgICAgICAgICAgc2VsZWN0Q2VsbC5hcHBlbmQoY2F0ZWdvcnlTZWxlY3QpO1xuXG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICAgICAgICAgICAgY2VsbDYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIGNlbGxzIHRvIHRoZSByb3cuXG4gICAgICAgICAgICAvLyByb3cuYXBwZW5kQ2hpbGQoaWNvbkNlbGwpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwxKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChzZWxlY3RDZWxsKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsMyk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDIpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGw2KTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSByb3cgdG8gdGhlIHRhYmxlLlxuICAgICAgICAgICAgaXRlbVRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG5cblxuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdJdGVtQ291bnQnKS52YWx1ZSA9IGxpbmVzVG9BZGQ7XG4gICAgICAgIG51bWJlck9mSXRlbXNUb0FkZC52YWx1ZSA9IDE7XG4gICAgfTtcblxuICAgIHRoaXMud2luZG93LmFzc2lnblRvR2Vhckxpc3QgPSBmdW5jdGlvbiBhc3NpZ25Ub0dlYXJMaXN0KGl0ZW1JZCwgbGlzdElkKXtcbiAgICAgICAgY29uc29sZS5sb2coJ2xpc3RfaWQgaW4gbmV3IGFzc2lnbjogJysgbGlzdElkKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2l0ZW0gaW4gbmV3IGFzc2lnbjogJysgaXRlbUlkKTtcblxuICAgICAgICBsZXQgdXJsID0gJy9hc3NpZ24tdG8tZ2Vhci1saXN0J1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIGxpc3RfaWQ6IGxpc3RJZCxcbiAgICAgICAgICAgIGlkOiBpdGVtSWRcbiAgICAgICAgfTtcblxuXG4gICAgICAgIGF4aW9zLnBvc3QodXJsLGRhdGEpXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXNwb25zZSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0gMSl7XG5cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGFsZXJ0KHJlc3BvbnNlLm1zZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICB9KTtcblxuICAgIH1cbiAgICB0aGlzLndpbmRvdy51cGRhdGVTZXNzaW9uRGF0YSA9IGZ1bmN0aW9uIHVwZGF0ZVNlc3Npb25EYXRhKGVsZW1lbnQpe1xuICAgICAgICBsZXQgdmFsdWUgPSBlbGVtZW50LnZhbHVlO1xuICAgICAgICBsZXQgY29sdW1uTmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbHVtbi1uYW1lJyk7XG4gICAgICAgIGxldCB1cmwgPSAnL3VwZGF0ZS1zZXNzaW9uJztcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgZGF0YVtjb2x1bW5OYW1lXSA9IHZhbHVlO1xuXG4gICAgICAgIGF4aW9zLnBvc3QodXJsLGRhdGEpXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXNwb25zZSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0gMSl7XG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICB9KTtcblxuXG4gICAgfVxuICAgIHRoaXMud2luZG93LmFkZExpc3RJdGVtID0gZnVuY3Rpb24gYWRkTGlzdEl0ZW0oY2F0ZWdvcnljb3VudGVyID0gbnVsbCwgZ3JvdXBDYXRlZ29yeSA9IG51bGwpIHtcbiAgICAgICAgbGV0IG51bWJlck9mSXRlbXNUb0FkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZXNUb0FkZFwiKTtcbiAgICAgICAgbGV0IGxpbmVzVG9BZGQgPSAxO1xuICAgICAgICBpZiAobnVtYmVyT2ZJdGVtc1RvQWRkID09PSBudWxsIHx8ICtudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPCAxKSB7XG4gICAgICAgICAgICBudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPSBsaW5lc1RvQWRkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGluZXNUb0FkZCA9ICtudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzVG9BZGQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGxpc3RVT00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbVwiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBmaW5hbElFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaW5hbC1pXCIpO1xuICAgICAgICAgICAgbGV0IGxpc3RCeUl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0QnlJdGVtc1wiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBpdGVtVGFibGU7XG5cbiAgICAgICAgICAgIGlmICgrbGlzdEJ5SXRlbXMgPT0gMSkge1xuICAgICAgICAgICAgICAgIGxpc3RCeUl0ZW1zID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpdGVtVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW0tdGFibGUtYm9keVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGlzdEJ5SXRlbXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsZXQgdGFibGVDYXRlZ29yeSA9IGNhdGVnb3J5Y291bnRlcjtcbiAgICAgICAgICAgICAgICBpdGVtVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgICAgICAgICAgXCJjYXRlZ29yeVRhYmxlLVwiICsgdGFibGVDYXRlZ29yeVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB1c2VySWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJJZFwiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RJZFwiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBmaW5hbEkgPSBmaW5hbElFbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgZmluYWxJRWxlbWVudC52YWx1ZSA9ICtmaW5hbEkgKyAxO1xuXG4gICAgICAgICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgY2VsbHMgYW5kIGlucHV0IGVsZW1lbnRzLlxuICAgICAgICAgICAgbGV0IGNlbGwwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgICAgICAgICAgY2VsbDAuc2NvcGUgPSBcInJvd1wiO1xuICAgICAgICAgICAgY2VsbDAuaW5uZXJIVE1MID0gZmluYWxJO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG5cbiAgICAgICAgICAgIGxldCBjb3VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgY291bnRlci50eXBlID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgIGNvdW50ZXIubmFtZSA9IFwiaWRbXVwiO1xuICAgICAgICAgICAgY291bnRlci5pZCA9IFwiaWQtXCIgKyBmaW5hbEk7XG4gICAgICAgICAgICBjb3VudGVyLnZhbHVlID0gXCJuZXctXCIgKyBmaW5hbEk7XG4gICAgICAgICAgICBjb3VudGVyLnNldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uLW5hbWVcIiwgXCJpZFwiKTtcblxuICAgICAgICAgICAgbGV0IGl0ZW1OYW1lID0gY3JlYXRlTGlzdEl0ZW1JbnB1dChcbiAgICAgICAgICAgICAgICBcInRleHRcIixcbiAgICAgICAgICAgICAgICBcIml0ZW1OYW1lXCIsXG4gICAgICAgICAgICAgICAgZmluYWxJLFxuICAgICAgICAgICAgICAgIFwiaXRlbV9uYW1lXCJcblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGl0ZW1OYW1lLnBsYWNlaG9sZGVyID0gXCJJdGVtIE5hbWVcIjtcbiAgICAgICAgICAgIGl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRyb2xcIik7XG5cbiAgICAgICAgICAgIGxldCBjZWxsNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGNlbGw2LmlkID0gXCJidG4tdGQtXCIgKyBmaW5hbEk7XG4gICAgICAgICAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgICAgICBkZWxldGVCdG4uaWQgPSBcImRlbGV0ZUJ0bi1cIiArIGZpbmFsSTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5jbGFzc05hbWUgPSBcImJ0biBidG4tcHJpbWFyeSBidG4tc20gIHB5LTJcIjtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5pbm5lckhUTUwgPSBcInhcIjtcblxuICAgICAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgICAgIGxldCB1cmwgPSBcIi9saXN0LWl0ZW1cIjtcblxuICAgICAgICAgICAgaWYgKGxpc3RVT00gPT0gXCJ1c1wiKSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IGdldEJvb2xlYW5EYXRhKFwiaW5fb3VuY2VzXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gZ2V0Qm9vbGVhbkRhdGEoXCJpbl9ncmFtc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGFbXCJsaXN0X2lkXCJdID0gbGlzdElkO1xuICAgICAgICAgICAgZGF0YVtcInVzZXJfaWRcIl0gPSB1c2VySWQ7XG4gICAgICAgICAgICBkYXRhW1wiaXRlbV9uYW1lXCJdID0gXCJcIjtcbiAgICAgICAgICAgIGlmKGdyb3VwQ2F0ZWdvcnkgIT09IG51bGwpe1xuICAgICAgICAgICAgICAgIGRhdGFbJ2l0ZW1fY2F0ZWdvcnknXSA9IGdyb3VwQ2F0ZWdvcnk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB1cGRhdGVJdGVtO1xuICAgICAgICAgICAgdXBkYXRlSXRlbSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QodXJsLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gYWxlcnQoXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBcInJlc3BvbnNlIGZybyBuZXcgaW5wdXQ6IFwiICsgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICAgIC8vICk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBlcnJvclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gVG8gdXNlIHRoZSBmdW5jdGlvbiBhbmQgaGFuZGxlIHRoZSByZXNwb25zZSBkYXRhXG4gICAgICAgICAgICB1cGRhdGVJdGVtKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIERvIHNvbWV0aGluZyB3aXRoIHRoZSByZXNwb25zZSBkYXRhXG4gICAgICAgICAgICAgICAgY291bnRlci52YWx1ZSA9IGRhdGEubmV3SWQ7XG4gICAgICAgICAgICAgICAgcm93LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgZGF0YS5uZXdJZCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgICAgICAgXCJocmVmXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiL2Rlc3Ryb3ktbGlzdC1pdGVtL1wiICsgZGF0YS5uZXdJZFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICBsZXQgY2VsbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBsZXQgaXRlbVdlaWdodCA9IGNyZWF0ZUxpc3RJdGVtSW5wdXQoXG4gICAgICAgICAgICAgICAgXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICBcIml0ZW1XZWlnaHRcIixcbiAgICAgICAgICAgICAgICBmaW5hbEksXG4gICAgICAgICAgICAgICAgXCJpdGVtX3dlaWdodFwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaXRlbVdlaWdodC52YWx1ZSA9IDA7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJmb3Itd2VpZ2h0XCIpO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWlucHV0XCIpO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xuICAgICAgICAgICAgY2VsbDIuY2xhc3NMaXN0LmFkZChcIm51bWJlci1jb2xcIik7XG5cbiAgICAgICAgICAgIGxldCBjZWxsMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGxldCBsaW5lVW9tQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGNlbGwzLmNsYXNzTGlzdC5hZGQoXCJ1b20tdGRcIik7XG4gICAgICAgICAgICBsaW5lVW9tQ2VsbC5jbGFzc0xpc3QuYWRkKFwidW9tLXRkXCIpO1xuICAgICAgICAgICAgbGV0IHJhZGlvMTtcbiAgICAgICAgICAgIGxldCByYWRpbzI7XG4gICAgICAgICAgICBsZXQgcmFkaW9MYWJlbDE7XG4gICAgICAgICAgICBsZXQgcmFkaW9MYWJlbDI7XG4gICAgICAgICAgICBsZXQgcmFkaW9MYWJlbDM7XG5cbiAgICAgICAgICAgIGlmIChsaXN0VU9NID09PSBcInVzXCIpIHtcbiAgICAgICAgICAgICAgICByYWRpbzEgPSBjcmVhdGVSYWRpbyhcImluX291bmNlc1wiLCBcIlwiLCBcIm96XCIsIGZpbmFsSSk7XG4gICAgICAgICAgICAgICAgcmFkaW9MYWJlbDEgPSBjcmVhdGVMYWJlbChcbiAgICAgICAgICAgICAgICAgICAgXCJPWlwiLFxuICAgICAgICAgICAgICAgICAgICBcInVvbS1vei1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgICAgICAgICAgXCJvelwiLFxuICAgICAgICAgICAgICAgICAgICBmaW5hbElcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJhZGlvMiA9IGNyZWF0ZVJhZGlvKFwiaW5fbGJzXCIsIFwiXCIsIFwibGJzXCIsIGZpbmFsSSk7XG4gICAgICAgICAgICAgICAgcmFkaW9MYWJlbDIgPSBjcmVhdGVMYWJlbChcbiAgICAgICAgICAgICAgICAgICAgXCJMQlNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ1b20tbGJzLVwiICsgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICBcImxic1wiLFxuICAgICAgICAgICAgICAgICAgICBmaW5hbElcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJhZGlvTGFiZWwzID0gY3JlYXRlTGFiZWwoXG4gICAgICAgICAgICAgICAgICAgIFwiT1pcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ1b20tb3otXCIgKyBmaW5hbEksXG4gICAgICAgICAgICAgICAgICAgIFwib3pcIixcbiAgICAgICAgICAgICAgICAgICAgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmFkaW8xID0gY3JlYXRlUmFkaW8oXCJpbl9ncmFtc1wiLCBcIlwiLCBcImdyYW1cIiwgZmluYWxJKTtcbiAgICAgICAgICAgICAgICByYWRpb0xhYmVsMSA9IGNyZWF0ZUxhYmVsKFxuICAgICAgICAgICAgICAgICAgICBcIkdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ1b20tZ3JhbS1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgICAgICAgICAgXCJncmFtXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsSVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmFkaW8yID0gY3JlYXRlUmFkaW8oXCJpbl9raWxvc1wiLCBcIlwiLCBcImtnXCIsIGZpbmFsSSk7XG4gICAgICAgICAgICAgICAgcmFkaW9MYWJlbDIgPSBjcmVhdGVMYWJlbChcbiAgICAgICAgICAgICAgICAgICAgXCJLR1wiLFxuICAgICAgICAgICAgICAgICAgICBcInVvbS1rZy1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgICAgICAgICAgXCJrZ1wiLFxuICAgICAgICAgICAgICAgICAgICBmaW5hbElcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJhZGlvTGFiZWwzID0gY3JlYXRlTGFiZWwoXG4gICAgICAgICAgICAgICAgICAgIFwiR1wiLFxuICAgICAgICAgICAgICAgICAgICBcInVvbS1ncmFtLVwiICsgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICBcImdyYW1cIixcbiAgICAgICAgICAgICAgICAgICAgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGNlbGw0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgY2VsbDQuY2xhc3NMaXN0LmFkZChcIm51bWJlci1jb2xcIik7XG4gICAgICAgICAgICBsZXQgcGFja2VkQW1vdW50ID0gY3JlYXRlTGlzdEl0ZW1JbnB1dChcbiAgICAgICAgICAgICAgICBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIFwicGFja2VkQW1vdW50XCIsXG4gICAgICAgICAgICAgICAgZmluYWxJLFxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBwYWNrZWRBbW91bnQudmFsdWUgPSAxO1xuXG4gICAgICAgICAgICBwYWNrZWRBbW91bnQuY2xhc3NMaXN0LmFkZChcImZvci13ZWlnaHRcIik7XG4gICAgICAgICAgICBwYWNrZWRBbW91bnQuY2xhc3NMaXN0LmFkZChcIm51bWJlci1pbnB1dFwiKTtcbiAgICAgICAgICAgIHBhY2tlZEFtb3VudC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBjZWxsNS5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWNvbFwiKTtcbiAgICAgICAgICAgIGxldCB0b3RhbExpbmVXZWlnaHQgPSBjcmVhdGVMaXN0SXRlbUlucHV0KFxuICAgICAgICAgICAgICAgIFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgXCJ0b3RhbExpbmVXZWlnaHRcIixcbiAgICAgICAgICAgICAgICBmaW5hbEksXG4gICAgICAgICAgICAgICAgXCJ0b3RhbF9saW5lX3dlaWdodFwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LnZhbHVlID0gMDtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgXCJkYXRhLWNvbHVtbi1uYW1lXCIsXG4gICAgICAgICAgICAgICAgXCJ0b3RhbF9saW5lX3dlaWdodFwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LnNldEF0dHJpYnV0ZShcInJlYWRvbmx5XCIsIHRydWUpO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJudW1iZXItaW5wdXRcIik7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC5jbGFzc0xpc3QuYWRkKFwiZm9yLXRvdGFsLWxpc3Qtd2VpZ2h0XCIpO1xuXG4gICAgICAgICAgICAvL2FwcGVuZCBpbnB1dHMgdG8gY2VsbHMuXG5cbiAgICAgICAgICAgIC8vIERlZmluZSB0aGUgU1ZHIG5hbWVzcGFjZVxuICAgICAgICAgICAgY29uc3Qgc3ZnTmFtZXNwYWNlID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuICAgICAgICAgICAgbGV0IGljb25DZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IFNWRyBlbGVtZW50XG4gICAgICAgICAgICBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOYW1lc3BhY2UsIFwic3ZnXCIpO1xuICAgICAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjE2XCIpO1xuICAgICAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIxNlwiKTtcbiAgICAgICAgICAgIGljb24uc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcImN1cnJlbnRDb2xvclwiKTtcbiAgICAgICAgICAgIGljb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJiaSBiaS1ncmlwLXZlcnRpY2FsXCIpO1xuICAgICAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDE2IDE2XCIpO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIDxwYXRoPiBlbGVtZW50XG4gICAgICAgICAgICBsZXQgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOYW1lc3BhY2UsIFwicGF0aFwiKTtcbiAgICAgICAgICAgIHBhdGguc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgICAgIFwiZFwiLFxuICAgICAgICAgICAgICAgIFwiTTcgMmExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBtMyAwYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgME03IDVhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbTMgMGExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBNNyA4YTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMG0zIDBhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbS0zIDNhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbTMgMGExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBtLTMgM2ExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBtMyAwYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMFwiXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIHBhdGggdG8gdGhlIFNWR1xuICAgICAgICAgICAgaWNvbi5hcHBlbmRDaGlsZChwYXRoKTtcblxuICAgICAgICAgICAgLy8gLy8gQXBwZW5kIHRoZSBTVkcgaWNvbiB0byB0aGUgY2VsbFxuICAgICAgICAgICAgaWNvbkNlbGwuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICAgICAgICAgIGNlbGwxLmFwcGVuZENoaWxkKGNvdW50ZXIpO1xuICAgICAgICAgICAgLy8gY2VsbDEuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgICAgICBjZWxsMS5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gICAgICAgICAgICBjZWxsMi5hcHBlbmRDaGlsZChpdGVtV2VpZ2h0KTtcblxuICAgICAgICAgICAgbGV0IHNlbGVjdENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBsZXQgY2F0ZWdvcnlTZWxlY3QgPSBnZXRDYXRlZ3JveVNlbGVjdChmaW5hbEksIGdyb3VwQ2F0ZWdvcnkpO1xuICAgICAgICAgICAgc2VsZWN0Q2VsbC5hcHBlbmQoY2F0ZWdvcnlTZWxlY3QpO1xuXG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChyYWRpbzEpO1xuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbDEpO1xuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQocmFkaW8yKTtcbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHJhZGlvTGFiZWwyKTtcblxuICAgICAgICAgICAgY2VsbDQuYXBwZW5kQ2hpbGQocGFja2VkQW1vdW50KTtcbiAgICAgICAgICAgIGNlbGw1LmFwcGVuZENoaWxkKHRvdGFsTGluZVdlaWdodCk7XG4gICAgICAgICAgICBsaW5lVW9tQ2VsbC5hcHBlbmRDaGlsZChyYWRpb0xhYmVsMyk7XG4gICAgICAgICAgICBjZWxsNi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgY2VsbHMgdG8gdGhlIHJvdy5cbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChpY29uQ2VsbCk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDEpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHNlbGVjdENlbGwpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwzKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsMik7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDQpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGw1KTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChsaW5lVW9tQ2VsbCk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDYpO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIHJvdyB0byB0aGUgdGFibGUuXG4gICAgICAgICAgICBpdGVtVGFibGUuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgICAgIC8vYWRkIGZ1bmN0aW9ucyB0byBjYWxjdWxhdGUgYW5kIGNvbnZlcnQgdG90YWwgd2VpZ2h0LlxuICAgICAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcldlaWdodENhbGMoZmluYWxJKTtcbiAgICAgICAgfVxuICAgICAgICBudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPSAxO1xuICAgIH07XG5cbiAgICB0aGlzLndpbmRvdy51cGRhdGVVT00gPSBmdW5jdGlvbiB1cGRhdGVVT00odmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBcInVzXCIpIHtcbiAgICAgICAgICAgIHVzUmFkaW9Ub01ldHJpYygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWV0cmljUmFkaW9Ub1VzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJXZWlnaHRDYWxjKHJvdykge1xuICAgICAgICBsZXQgbmVlZGVkRm9yV2VpZ2h0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yLXdlaWdodFwiKTtcbiAgICAgICAgbmVlZGVkRm9yV2VpZ2h0cy5mb3JFYWNoKGZ1bmN0aW9uIChuZWVkZWRGb3JXZWlnaHQpIHtcbiAgICAgICAgICAgIG5lZWRlZEZvcldlaWdodC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBnZXRMaW5lVG90YWxXZWlnaHQocm93KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLndpbmRvdy5nZXRMaW5lVG90YWxXZWlnaHQgPSBmdW5jdGlvbiBnZXRMaW5lVG90YWxXZWlnaHQoXG4gICAgICAgIHJvdyxcbiAgICAgICAgY29udmVydCA9IGZhbHNlXG4gICAgKSB7XG4gICAgICAgIGxldCB3ZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1XZWlnaHQtXCIgKyByb3cpLnZhbHVlO1xuICAgICAgICBsZXQgcGFja2VkQW1vdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWNrZWRBbW91bnQtXCIgKyByb3cpLnZhbHVlO1xuICAgICAgICBsZXQgdW9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b21cIik7XG4gICAgICAgIGxldCBsaW5lVG90YWxXZWlnaHRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgICBcInRvdGFsTGluZVdlaWdodC1cIiArIHJvd1xuICAgICAgICApO1xuXG4gICAgICAgIGxldCBsaW5lVG90YWwgPSAwO1xuICAgICAgICBsaW5lVG90YWwgPSArd2VpZ2h0ICogK3BhY2tlZEFtb3VudDtcbiAgICAgICAgbGluZVRvdGFsID0gbGluZVRvdGFsLnRvRml4ZWQoMykucmVwbGFjZSgvWy4sXTAwJC8sIFwiXCIpO1xuICAgICAgICBsaW5lVG90YWxXZWlnaHRFbGVtZW50LnZhbHVlID0gbGluZVRvdGFsO1xuXG4gICAgICAgIHVwZGF0ZUxpc3RJdGVtKGxpbmVUb3RhbFdlaWdodEVsZW1lbnQpO1xuICAgIH07XG4gICAgdGhpcy53aW5kb3cuY29udmVydE1lYXN1cmVtZW50ID0gZnVuY3Rpb24gY29udmVydE1lYXN1cmVtZW50KFxuICAgICAgICByb3csXG4gICAgICAgIGNvbnZlcnQgPSBmYWxzZVxuICAgICkge1xuICAgICAgICBsZXQgbGlzdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RJZCcpLnZhbHVlO1xuICAgICAgICBsZXQgdW9tO1xuXG4gICAgICAgIGlmKGxpc3RJZCA9PSAnbWFzdGVyJyl7XG4gICAgICAgICAgICB1b20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1cIityb3cpLnZhbHVlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHVvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tXCIpLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCB3ZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1XZWlnaHQtXCIgKyByb3cpO1xuICAgICAgICBsZXQgcGFja2VkQW1vdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWNrZWRBbW91bnQtXCIgKyByb3cpLnZhbHVlO1xuICAgICAgICBsZXQgdG90YWxXZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdGFsTGluZVdlaWdodC1cIiArIHJvdyk7XG4gICAgICAgIGxldCB0b3RhbExpbmVXZWlnaHRWYWx1ZSA9IDA7XG4gICAgICAgIGxldCB3ZWlnaHRWYWx1ZSA9IHdlaWdodC52YWx1ZTtcbiAgICAgICAgbGV0IHNtYWxsO1xuICAgICAgICBsZXQgbGFyZ2U7XG4gICAgICAgIGxldCBlbGVtZW50O1xuICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmUtdW9tLWxhYmVsLVwiICsgcm93KTtcbiAgICAgICAgbGV0IGxhYmVsSFRNTDtcblxuICAgICAgICBpZiAodW9tID09PSBcInVzXCIpIHtcbiAgICAgICAgICAgIHNtYWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b20tb3otXCIgKyByb3cpO1xuICAgICAgICAgICAgbGFyZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1sYnMtXCIgKyByb3cpO1xuICAgICAgICAgICAgaWYgKHNtYWxsLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB3ZWlnaHRWYWx1ZSA9ICt3ZWlnaHRWYWx1ZSAqIDE2O1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBzbWFsbDtcbiAgICAgICAgICAgICAgICBsYWJlbEhUTUwgPSBcIk9aXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdlaWdodFZhbHVlID0gK3dlaWdodFZhbHVlIC8gMTY7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGxhcmdlO1xuICAgICAgICAgICAgICAgIGxhYmVsSFRNTCA9IFwiTEJTXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzbWFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tLWdyYW0tXCIgKyByb3cpO1xuICAgICAgICAgICAgbGFyZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1rZy1cIiArIHJvdyk7XG5cbiAgICAgICAgICAgIGlmIChzbWFsbC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0VmFsdWUgPSArd2VpZ2h0VmFsdWUgKiAxMDAwO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBzbWFsbDtcbiAgICAgICAgICAgICAgICBsYWJlbEhUTUwgPSBcIkdcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0VmFsdWUgPSArd2VpZ2h0VmFsdWUgLyAxMDAwO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBsYXJnZTtcbiAgICAgICAgICAgICAgICBsYWJlbEhUTUwgPSBcIktHXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0b3RhbExpbmVXZWlnaHRWYWx1ZSA9ICt3ZWlnaHRWYWx1ZSAqICtwYWNrZWRBbW91bnQ7XG4gICAgICAgIHdlaWdodC52YWx1ZSA9IHdlaWdodFZhbHVlLnRvRml4ZWQoMykucmVwbGFjZSgvWy4sXTAwJC8sIFwiXCIpO1xuICAgICAgICB0b3RhbFdlaWdodC52YWx1ZSA9IHRvdGFsTGluZVdlaWdodFZhbHVlXG4gICAgICAgICAgICAudG9GaXhlZCgzKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1suLF0wMCQvLCBcIlwiKTtcbiAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gbGFiZWxIVE1MO1xuICAgICAgICB1cGRhdGVMaXN0SXRlbShlbGVtZW50KTtcbiAgICAgICAgdXBkYXRlTGlzdEl0ZW0od2VpZ2h0KTtcbiAgICAgICAgdXBkYXRlTGlzdEl0ZW0odG90YWxXZWlnaHQpO1xuICAgIH07XG4gICAgdGhpcy53aW5kb3cuYWRkQ2F0ZWdvcnlHcm91cCA9IGZ1bmN0aW9uIGFkZENhdGVnb3J5R3JvdXAobGlzdElkLGNhdGVnb3J5LCBsaXN0VU9NLCB1c2VySWQpe1xuXG4gICAgICAgIGxldCBjb2x1bW5OYW1lO1xuICAgICAgICBpZihsaXN0VU9NID09PSAndXMnKXtcbiAgICAgICAgICAgIGNvbHVtbk5hbWUgPSAnaW5fb3VuY2VzJztcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb2x1bW5OYW1lID0gJ2luX2dyYW1zJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkYXRhID0gZ2V0Qm9vbGVhbkRhdGEoY29sdW1uTmFtZSk7XG4gICAgICAgIGRhdGFbJ2xpc3RfaWQnXSA9IGxpc3RJZDtcbiAgICAgICAgZGF0YVsndXNlcl9pZCddID0gdXNlcklkO1xuICAgICAgICBkYXRhWydpdGVtX25hbWUnXSA9ICcnO1xuICAgICAgICBkYXRhWydpdGVtX3dlaWdodCddID0gMDtcbiAgICAgICAgZGF0YVsnYW1vdW50J10gPSAxO1xuICAgICAgICBkYXRhWydpdGVtX2NhdGVnb3J5J10gPSBjYXRlZ29yeTtcbiAgICAgICAgbGV0IHVybCA9ICcvbGlzdC1pdGVtJ1xuXG4gICAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KHVybCwgZGF0YSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgcmVzID0gcmVzLmRhdGE7XG4gICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAnMScpe1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgYWxlcnQocmVzLm1zZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEJvb2xlYW5EYXRhKGNvbHVtbk5hbWUpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgZGF0YVtcImluX291bmNlc1wiXSA9IGZhbHNlO1xuICAgICAgICBkYXRhW1wiaW5fbGJzXCJdID0gZmFsc2U7XG4gICAgICAgIGRhdGFbXCJpbl9ncmFtc1wiXSA9IGZhbHNlO1xuICAgICAgICBkYXRhW1wiaW5fa2lsb3NcIl0gPSBmYWxzZTtcbiAgICAgICAgc3dpdGNoIChjb2x1bW5OYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiaW5fb3VuY2VzXCI6XG4gICAgICAgICAgICAgICAgZGF0YVtcImluX291bmNlc1wiXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaW5fbGJzXCI6XG4gICAgICAgICAgICAgICAgZGF0YVtcImluX2xic1wiXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaW5fZ3JhbXNcIjpcbiAgICAgICAgICAgICAgICBkYXRhW1wiaW5fZ3JhbXNcIl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImluX2tpbG9zXCI6XG4gICAgICAgICAgICAgICAgZGF0YVtcImluX2tpbG9zXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIHRoaXMud2luZG93LnVwZGF0ZUxpc3RJdGVtID0gZnVuY3Rpb24gdXBkYXRlTGlzdEl0ZW0oZWxlbWVudCwpIHtcbiAgICAgICAgbGV0IGNvbHVtbk5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uLW5hbWVcIik7XG4gICAgICAgIGxldCB2YWx1ZSA9IGVsZW1lbnQudmFsdWU7XG4gICAgICAgIGxldCBpZCA9IGVsZW1lbnQuaWQ7XG4gICAgICAgIGxldCBpZEFyciA9IGlkLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgbGV0IGFyckxlbmd0aCA9IGlkQXJyLmxlbmd0aDtcbiAgICAgICAgbGV0IHJvdyA9IGlkQXJyW2Fyckxlbmd0aCAtIDFdO1xuICAgICAgICBsZXQgaXRlbUlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZC1cIiArIHJvdyk7XG4gICAgICAgIGxldCBpdGVtSWRWYWx1ZSA9IGl0ZW1JZC52YWx1ZTtcbiAgICAgICAgbGV0IGxpc3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdElkXCIpLnZhbHVlO1xuICAgICAgICBsZXQgdXJsID0gXCIvbGlzdC1pdGVtL1wiICsgaXRlbUlkVmFsdWU7XG4gICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgIGxldCB1c2VySWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJJZFwiKS52YWx1ZTtcblxuICAgICAgICBkYXRhW2NvbHVtbk5hbWVdID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKGNvbHVtbk5hbWUuc3Vic3RyaW5nKDAsIDMpID09PSBcImluX1wiKSB7XG4gICAgICAgICAgICBkYXRhID0gZ2V0Qm9vbGVhbkRhdGEoY29sdW1uTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW1wibGlzdF9pZFwiXSA9IGxpc3RJZDtcbiAgICAgICAgZGF0YVtcInVzZXJfaWRcIl0gPSB1c2VySWQ7XG4gICAgICAgIGRhdGFbXCJpZFwiXSA9IGl0ZW1JZFZhbHVlO1xuXG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdCh1cmwsIGRhdGEsIGl0ZW1JZClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVzIGZyb20gdXBkYXRlIGZvciBtYXN0ZXI6ICcrSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChcIkZhaWxlZCB0byB1cGRhdGUgbGlzdCBpdGVtLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgaWYobGlzdElkICE9PSAnbWFzdGVyJyl7XG4gICAgICAgICAgICB1cGRhdGVUb3RhbExpc3RXZWlnaHRzKCk7XG4gICAgICAgIH1cblxuICAgIH07XG4gICAgZnVuY3Rpb24gdXBkYXRlVG90YWxMaXN0V2VpZ2h0cygpIHtcbiAgICAgICAgbGV0IHdlaWdodHNGb3JQVyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yLXRvdGFsLWxpc3Qtd2VpZ2h0XCIpO1xuICAgICAgICBsZXQgYmFzZVdlaWdodCA9IDA7XG4gICAgICAgIGxldCB0b3RhbFBhY2tXZWlnaHQgPSAwO1xuICAgICAgICBsZXQgbWF4UGFja1dlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWF4UGFja1dlaWdodFwiKS52YWx1ZTtcbiAgICAgICAgbGV0IGNsYXNzV2FybmluZ1ZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsYXNzV2FybmluZ1ZhbHVlJykudmFsdWU7XG4gICAgICAgIGxldCB1b21UZXh0ID0gXCJMQlNcIjtcbiAgICAgICAgd2VpZ2h0c0ZvclBXLmZvckVhY2goZnVuY3Rpb24gKHdlaWdodEZvclBXKSB7XG4gICAgICAgICAgICBsZXQgaWQgPSB3ZWlnaHRGb3JQVy5pZDtcbiAgICAgICAgICAgIGxldCBpZEFyciA9IGlkLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgICAgIGxldCBhcnJMZW5ndGggPSBpZEFyci5sZW5ndGg7XG4gICAgICAgICAgICBsZXQgcm93ID0gaWRBcnJbYXJyTGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBsZXQgcGFja2VkQW1vdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgICAgICAgXCJwYWNrZWRBbW91bnQtXCIgKyByb3dcbiAgICAgICAgICAgICkudmFsdWU7XG4gICAgICAgICAgICBsZXQgY29udmVydGVyID0gMTtcbiAgICAgICAgICAgIGxldCByb3dXZWlnaHQgPSAwO1xuICAgICAgICAgICAgbGV0IGl0ZW1XZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1XZWlnaHQtXCIgKyByb3cpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IHVvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tXCIpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGl0ZW1DYXRlZ29yeUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgICAgICBcIml0ZW1DYXRlZ29yeS1cIiArIHJvd1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbGV0IGl0ZW1DYXRlZ29yeSA9IFwiXCI7XG4gICAgICAgICAgICBpZiAoaXRlbUNhdGVnb3J5RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGl0ZW1DYXRlZ29yeSA9IGl0ZW1DYXRlZ29yeUVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpdGVtQ2F0ZWdvcnkgPT09IHVuZGVmaW5lZCB8fCBpdGVtQ2F0ZWdvcnkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpdGVtQ2F0ZWdvcnkgPSBcIlwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodW9tID09PSBcInVzXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b20tb3otXCIgKyByb3cpLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udmVydGVyID0gb3VuY2VDb252ZXJ0ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1b21UZXh0ID0gXCJLR1wiO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b20tZ3JhbS1cIiArIHJvdykuY2hlY2tlZCA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBjb252ZXJ0ZXIgPSBncmFtQ29udmVydGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcm93V2VpZ2h0ID0gK3BhY2tlZEFtb3VudCAqICgraXRlbVdlaWdodCAvIGNvbnZlcnRlcik7XG4gICAgICAgICAgICB0b3RhbFBhY2tXZWlnaHQgPSB0b3RhbFBhY2tXZWlnaHQgKyByb3dXZWlnaHQ7XG5cbiAgICAgICAgICAgIGlmIChpdGVtQ2F0ZWdvcnkgIT09IFwiY29uc3VtYWJsZXNcIikge1xuICAgICAgICAgICAgICAgIGJhc2VXZWlnaHQgPSBiYXNlV2VpZ2h0ICsgcm93V2VpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoK2Jhc2VXZWlnaHQgPiArbWF4UGFja1dlaWdodCkge1xuICAgICAgICAgICAgbGV0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlaWdodFdhcm5pbmctZGl2XCIpO1xuICAgICAgICAgICAgZGl2RWxlbWVudC5pbm5lclRleHQgPVwiQmFzZSB3ZWlnaHQgKFwiICsgIGJhc2VXZWlnaHQudG9GaXhlZCgzKSArXCIgXCIgK3VvbVRleHQgK1wiKSBleGNlZWRlcyB0aGUgd2VpZ2h0IGZvciB0aGUgJ1wiICtjbGFzc1dhcm5pbmdWYWx1ZStcIicgc3R5bGUgb2YgaGlraW5nLlwiO1xuXG4gICAgICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlaWdodFdhcm5pbmctZGl2XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFzZVdlaWdodFwiKS52YWx1ZSA9IGJhc2VXZWlnaHQudG9GaXhlZCgzKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3RhbFBhY2tXZWlnaHRcIikudmFsdWUgPVxuICAgICAgICAgICAgdG90YWxQYWNrV2VpZ2h0LnRvRml4ZWQoMyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxpc3RJdGVtSW5wdXQoXG4gICAgICAgIHR5cGUsXG4gICAgICAgIG5hbWVCYXNlLFxuICAgICAgICByb3csXG4gICAgICAgIGNvbHVtbk5hbWUsXG4gICAgICAgIGxpc3RlbiA9IHRydWVcbiAgICApIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGVsZW1lbnQudHlwZSA9IHR5cGU7XG4gICAgICAgIGVsZW1lbnQubmFtZSA9IG5hbWVCYXNlICsgXCJbXVwiO1xuICAgICAgICBlbGVtZW50LmlkID0gbmFtZUJhc2UgKyBcIi1cIiArIHJvdztcbiAgICAgICAgZWxlbWVudC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4tbmFtZVwiLCBjb2x1bW5OYW1lKTtcbiAgICAgICAgaWYobGlzdGVuKXtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlTGlzdEl0ZW0oZWxlbWVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Q2F0ZWdyb3lTZWxlY3Qocm93LCBncm91cENhdGVnb3J5ID0gbnVsbCwgbGlzdGVuID0gdHJ1ZSkge1xuICAgIGNvbnNvbGUubG9nKCdncm91cCBjYXQgaW4gZ2V0IHNlbGVjdDogJysgZ3JvdXBDYXRlZ29yeSlcbiAgICAgICAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgIHNlbGVjdC5pZCA9IFwiSXRlbUNhdGVnb3J5LVwiICsgcm93O1xuICAgICAgICBzZWxlY3QubmFtZSA9IFwiaXRlbUNhdGVnb3J5LVwiICsgcm93O1xuICAgICAgICBzZWxlY3Quc2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4tbmFtZVwiLCBcIml0ZW1fY2F0ZWdvcnlcIik7XG4gICAgICAgIHNlbGVjdC5jbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiO1xuXG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgICBvcHRpb24udGV4dCA9IFwiQ2hvb3NlXCI7XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICBsZXQgb3B0aW9uTGlzdDtcblxuICAgICAgICBvcHRpb25MaXN0ID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcIi9saXN0LWl0ZW0tY2F0ZWdvcmllc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIGVycm9yXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFRvIHVzZSB0aGUgZnVuY3Rpb24gYW5kIGhhbmRsZSB0aGUgcmVzcG9uc2UgZGF0YVxuICAgICAgICBvcHRpb25MaXN0KCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgLy8gRG8gc29tZXRoaW5nIHdpdGggdGhlIHJlc3BvbnNlIGRhdGFcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGRhdGFbaV0udmFsdWU7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSBkYXRhW2ldLmNhdGVnb3J5O1xuICAgICAgICAgICAgICAgIGlmIChncm91cENhdGVnb3J5ICE9IG51bGwgJiYgZGF0YVtpXS52YWx1ZSA9PT0gZ3JvdXBDYXRlZ29yeSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmKGxpc3Rlbil7XG4gICAgICAgICAgICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlTGlzdEl0ZW0oc2VsZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4gc2VsZWN0O1xuICAgIH1cbiAgICBmdW5jdGlvbiBtZXRyaWNSYWRpb1RvVXMoKSB7XG4gICAgICAgIGxldCBpbnB1dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZXRyaWMtcmFkaW9cIik7XG4gICAgICAgIGlucHV0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXRFbGVtZW50KSB7XG4gICAgICAgICAgICBsZXQgaWRBcnIgPSBpbnB1dEVsZW1lbnQuaWQuc3BsaXQoXCItXCIpO1xuICAgICAgICAgICAgbGV0IHVvbSA9IGlkQXJyWzFdO1xuICAgICAgICAgICAgbGV0IHJvdyA9IGlkQXJyW2lkQXJyLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRUeXBlID0gaW5wdXRFbGVtZW50LnR5cGU7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFRhZyA9IGlucHV0RWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIGxldCBuZXdFbGVtZW50O1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudFR5cGUgPT09IFwicmFkaW9cIiAmJiB1b20gPT09IFwiZ3JhbVwiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZVJhZGlvKFwiaW5fb3VuY2VzXCIsIFwiT1pcIiwgXCJvelwiLCByb3csIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VHlwZSA9PT0gXCJyYWRpb1wiICYmIHVvbSA9PT0gXCJrZ1wiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZVJhZGlvKFwiaW5fbGJzXCIsIFwiTEJTXCIsIFwibGJzXCIsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUYWcgPT09IFwibGFiZWxcIiAmJiB1b20gPT09IFwiZ3JhbVwiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZUxhYmVsKFwiT1pcIiwgXCJ1b20tb3otXCIgKyByb3csIFwib3pcIiwgcm93KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFRhZyA9PT0gXCJsYWJlbFwiICYmIHVvbSA9PT0gXCJrZ1wiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZUxhYmVsKFwiTEJTXCIsIFwidW9tLWxicy1cIiArIHJvdywgXCJsYnNcIiwgcm93KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5ld0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQoXG4gICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1c1JhZGlvVG9NZXRyaWMoKSB7XG4gICAgICAgIGxldCBpbnB1dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi51cy1yYWRpb1wiKTtcbiAgICAgICAgaW5wdXRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxldCBpZEFyciA9IGlucHV0RWxlbWVudC5pZC5zcGxpdChcIi1cIik7XG4gICAgICAgICAgICBsZXQgdW9tID0gaWRBcnJbMV07XG4gICAgICAgICAgICBsZXQgcm93ID0gaWRBcnJbaWRBcnIubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBsZXQgZWxlbWVudFR5cGUgPSBpbnB1dEVsZW1lbnQudHlwZTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50VGFnID0gaW5wdXRFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGxldCBuZXdFbGVtZW50O1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudFR5cGUgPT09IFwicmFkaW9cIiAmJiB1b20gPT09IFwib3pcIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVSYWRpbyhcImluX2dyYW1zXCIsIFwiR1JcIiwgXCJncmFtXCIsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUeXBlID09PSBcInJhZGlvXCIgJiYgdW9tID09PSBcImxic1wiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZVJhZGlvKFwiaW5fa2lsb3NcIiwgXCJLR1wiLCBcImtnXCIsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUYWcgPT09IFwibGFiZWxcIiAmJiB1b20gPT09IFwib3pcIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVMYWJlbChcIkdcIiwgXCJ1b20tZ3JhbS1cIiArIHJvdywgXCJncmFtXCIsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUYWcgPT09IFwibGFiZWxcIiAmJiB1b20gPT09IFwibGJzXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlTGFiZWwoXCJLR1wiLCBcInVvbS1rZy1cIiArIHJvdywgXCJrZ1wiLCByb3cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmV3RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZChcbiAgICAgICAgICAgICAgICAgICAgbmV3RWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJhZGlvKGRhdGFDb2x1bW5OYW1lLCBsYWJlbCwgdW9tLCByb3cpIHtcbiAgICAgICAgbGV0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICByYWRpby5jbGFzc05hbWUgPVxuICAgICAgICAgICAgXCJmb3JtLWNoZWNrLWlucHV0XCIgK1xuICAgICAgICAgICAgKHVvbSA9PT0gXCJncmFtXCIgfHwgdW9tID09PSBcImtnXCIgPyBcIiBtZXRyaWMtcmFkaW9cIiA6IFwiIHVzLXJhZGlvXCIpO1xuICAgICAgICByYWRpby50eXBlID0gXCJyYWRpb1wiO1xuICAgICAgICByYWRpby5uYW1lID0gXCJ1b20tXCIgKyByb3cgKyBcIltdXCI7XG4gICAgICAgIHJhZGlvLmlkID0gXCJ1b20tXCIgKyB1b20gKyBcIi1cIiArIHJvdztcbiAgICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4tbmFtZVwiLCBkYXRhQ29sdW1uTmFtZSk7XG5cbiAgICAgICAgaWYgKHVvbSA9PT0gXCJncmFtXCIgfHwgdW9tID09PSBcIm96XCIpIHtcbiAgICAgICAgICAgIHJhZGlvLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29udmVydE1lYXN1cmVtZW50KHJvdyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmFkaW87XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxhYmVsKGlubmVySHRtbCwgaHRtbEZvciwgdW9tLCByb3csIGxpbmVMYWJlbCA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgbGFiZWwuY2xhc3NOYW1lID1cbiAgICAgICAgICAgIFwiZm9ybS1jaGVjay1sYWJlbFwiICtcbiAgICAgICAgICAgICh1b20gPT09IFwiZ3JhbVwiIHx8IHVvbSA9PT0gXCJrZ1wiID8gXCIgbWV0cmljLXJhZGlvXCIgOiBcIiB1cy1yYWRpb1wiKTtcbiAgICAgICAgbGFiZWwuaHRtbEZvciA9IGh0bWxGb3I7XG4gICAgICAgIGxhYmVsLmlubmVySFRNTCA9IGlubmVySHRtbDtcbiAgICAgICAgaWYgKCFsaW5lTGFiZWwpIHtcbiAgICAgICAgICAgIGxhYmVsLmlkID0gXCJ1b20tXCIgKyB1b20gKyBcIi1sYWJlbC1cIiArIHJvdztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhYmVsLmlkID0gXCJsaW5lLXVvbS1sYWJlbC1cIiArIHJvdztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9XG5cbiAgICB0aGlzLndpbmRvdy51cGRhdGVMaXN0ID0gZnVuY3Rpb24gdXBkYXRlTGlzdChlbGVtZW50LCBsaXN0SWQpIHtcbiAgICAgICAgbGV0IGNvbHVtbk5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uLW5hbWVcIik7XG4gICAgICAgIGxldCB2YWx1ZSA9IGVsZW1lbnQudmFsdWU7XG4gICAgICAgIGxldCB1cmwgPSBcIi9nZWFyLWxpc3QvXCIgKyBsaXN0SWQ7XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgZGF0YVtjb2x1bW5OYW1lXSA9IHZhbHVlO1xuXG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdCh1cmwsIGRhdGEsIGxpc3RJZClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBhbGVydChyZXMuZGF0YS5tc2cpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJGYWlsZWQgdG8gdXBkYXRlIGxpc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIGlmIChjb2x1bW5OYW1lID09PSBcInNvcnRcIiB8fCBjb2x1bW5OYW1lID09PSBcImxpc3RfY2xhc3NcIiB8fCBjb2x1bW5OYW1lID09PSAnbGlzdF9pdGVtcycpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW0tY29sbGFwc2libGUtaGVhZGVyXCIpO1xuXG4gICAgaGVhZGVycy5mb3JFYWNoKChoZWFkZXIpID0+IHtcbiAgICAgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gaGVhZGVyLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgICAgIGNvbnN0IGFycm93ID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbS1hcnJvd1wiKTtcbiAgICAgICAgICAgIGlmIChjb250ZW50LmNsYXNzTGlzdC5jb250YWlucyhcIm9wZW5cIikpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLnBhZGRpbmcgPSBcIjAgMTBweFwiO1xuICAgICAgICAgICAgICAgIGFycm93LmlubmVySFRNTCA9IFwiJiM5NjYwXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBjb250ZW50LnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLnBhZGRpbmcgPSBcIjEwcHhcIjtcbiAgICAgICAgICAgICAgICBhcnJvdy5pbm5lckhUTUwgPSBcIiYjOTY1MFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGxldCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI21hc3Rlci1pdGVtLXRhYmxlIGlucHV0XCIpO1xuXG4gICAgaW5wdXRzLmZvckVhY2goZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICAgIGlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIGxldCBsaXN0Q2hhcnRidG4gPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0Q2hhcnRCdG5cIik7XG4gICAgaWYobGlzdENoYXJ0YnRuICE9PSBudWxsKXtcbiAgICAgICAgZG9jdW1lbnQgLmdldEVsZW1lbnRCeUlkKFwibGlzdENoYXJ0QnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgbGlzdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0SWRcIikudmFsdWU7XG4gICAgICAgICAgICBsZXQgdXJsID0gXCIvZ2Vhci1saXN0LWFuYWx5dGljcy9cIiArIGxpc3RJZDtcblxuICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAuZ2V0KHVybClcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGFydFN0YXR1cyA9IENoYXJ0LmdldENoYXJ0KFwiZ2VhckNoYXJ0XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFydFN0YXR1cyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0U3RhdHVzLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2VhckNoYXJ0XCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2hhcnREYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YS5jaGFydERhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkb3VnaG51dFwiLCAvLyBDaGFydCB0eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiBjaGFydERhdGEubGFiZWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxhYmVsOiBsaXN0TmFtZSArICdCcmVhayBEb3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGNoYXJ0RGF0YS53ZWlnaHRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjaGFydERhdGEuY29sb3JzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Zlck9mZnNldDogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1dG91dDogNDUsIC8vIEFkanVzdCB0aGUgY3V0b3V0IHBlcmNlbnRhZ2UgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogMTUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YWxhYmVsczogZmFsc2UsIC8vIFJlbW92aW5nIHRoaXMgbGluZSBzaG93cyB0aGUgZGF0YWxhYmVscyBhZ2FpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVSb3RhdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVTY2FsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgYmFzZVdlaWdodCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2VXZWlnaHRcIikudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0b3RhbFBhY2tXZWlnaHQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3RhbFBhY2tXZWlnaHRcIikudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxCYXNlV2VpZ2h0XCIpLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VXZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxUb3RhbFdlaWdodFwiKS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFBhY2tXZWlnaHQ7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgIH1cbiAgICB0aGlzLndpbmRvdy5zaG93Q29udnJzaW9uQWxlcnQgPSBmdW5jdGlvbiBzaG93Q29udnJzaW9uQWxlcnQoKXtcbiAgICAgICAgYWxlcnQoJ0NoYW5naW5nIHRoaXMgdmFsdWUgd2lsbCBhbHNvIHVwZGF0ZSB0aGUgdW5pdHMgb2YgbWVhc3N1cmUgYW5kIGFzc29jaWF0ZWQgdmFsdWVzIGZvciBhbnkgaXRlbSBpbiB0aGlzIEdlYXIgbGlzdC4nKTtcbiAgICB9XG5cblxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zb3J0YWJsZVwiKS5mb3JFYWNoKGZ1bmN0aW9uICh0YWJsZSkge1xuICAgICAgICBjb25zdCBjYXRlZ29yeUlkID0gdGFibGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1jYXRlZ29yeS1pZFwiKTtcblxuICAgICAgICBuZXcgU29ydGFibGUodGFibGUucXVlcnlTZWxlY3RvcihcInRib2R5XCIpLCB7XG4gICAgICAgICAgICBhbmltYXRpb246IDE1MCxcbiAgICAgICAgICAgIG9uRW5kOiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBuZXcgb3JkZXIgb2YgaXRlbXNcbiAgICAgICAgICAgICAgICBjb25zdCBvcmRlcmVkSWRzID0gW107XG4gICAgICAgICAgICAgICAgdGFibGUucXVlcnlTZWxlY3RvckFsbChcInRyXCIpLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgICAgICAgICAgICBvcmRlcmVkSWRzLnB1c2gocm93LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gU2VuZCB0aGUgbmV3IG9yZGVyIHRvIHRoZSBzZXJ2ZXIgdmlhIEFKQVhcbiAgICAgICAgICAgICAgICB1cGRhdGVJdGVtT3JkZXIoY2F0ZWdvcnlJZCwgb3JkZXJlZElkcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiB1cGRhdGVJdGVtT3JkZXIoY2F0ZWdvcnlJZCwgb3JkZXJlZElkcykge1xuXG4gICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RJZFwiKS52YWx1ZTtcblxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgXCJYLUNTUkYtVE9LRU5cIjogZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpXG4gICAgICAgICAgICAgICAgLmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIiksXG4gICAgICAgICAgICBjYXRlZ29yeV9pZDogY2F0ZWdvcnlJZCxcbiAgICAgICAgICAgIG9yZGVyZWRfaWRzOiBvcmRlcmVkSWRzLFxuICAgICAgICAgICAgbGlzdF9pZDogbGlzdElkLFxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCB1cmwgPSBcIi91cGRhdGUtbGlzdC1vcmRlclwiO1xuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QodXJsLCBkYXRhKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgIT0gXCIxXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQocmVzLmRhdGEubXNnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHNvcnRpbmdTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnRCeVwiKTtcbiAgICAgICAgbGV0IG9wdHMgPSBzb3J0aW5nU2VsZWN0Lm9wdGlvbnMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdHM7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNvcnRpbmdTZWxlY3Qub3B0aW9uc1tpXS52YWx1ZSA9PSBcImRyYWdfZHJvcFwiKSB7XG4gICAgICAgICAgICAgICAgc29ydGluZ1NlbGVjdC5vcHRpb25zW2ldLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBwYXJlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFyZW50LWNvbnRhaW5lcicpO1xuXG4gICAgaWYocGFyZW50Q29udGFpbmVyICE9PSBudWxsICYmIHBhcmVudENvbnRhaW5lciAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgU29ydGFibGUuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJlbnQtY29udGFpbmVyJyksIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogMTUwLFxuICAgICAgICAgICAgaGFuZGxlOiAnLml0ZW0tY29sbGFwc2libGUtaGVhZGVyJyxcbiAgICAgICAgICAgIGdob3N0Q2xhc3M6ICdzb3J0YWJsZS1naG9zdCcsXG4gICAgICAgICAgICBvbkVuZDogZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgICAgIC8vIEFmdGVyIHNvcnRpbmcgaXMgY29tcGxldGVkLCB1cGRhdGUgdGhlIHBvc2l0aW9ucyBpbiB0aGUgZGF0YWJhc2VcbiAgICAgICAgICAgICAgICB1cGRhdGVDYXRlZ29yeU9yZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVDYXRlZ29yeU9yZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IG5ld09yZGVyID0gW107XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcmFnZ2FibGUtY29udGFpbmVyJykuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcblxuICAgICAgICAgICAgbmV3T3JkZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgaXRlbV9jYXRlZ29yeTogaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2F0ZWdvcnktdmFsdWUnKSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeV9vcmRlcjogaW5kZXhcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHVybCA9IFwiL3VwZGF0ZS1jYXRlcm9ncnktb3JkZXJcIjtcbiAgICAgICAgbGV0IGxpc3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdElkXCIpLnZhbHVlO1xuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBcIlgtQ1NSRi1UT0tFTlwiOiBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJylcbiAgICAgICAgICAgICAgICAuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKSxcbiAgICAgICAgICAgIGNhdGVnb3J5X29yZGVyOiBuZXdPcmRlcixcbiAgICAgICAgICAgIGxpc3RfaWQ6IGxpc3RJZCxcbiAgICAgICAgfTtcbiAgICAgICAgLy9icmVhayBvdXQgcG9zdHMgYW5kIGdldCBjYWxscyB0byBvd24gZnVuY3Rpb25zXG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdCh1cmwsIGRhdGEpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzICE9IFwiMVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KHJlcy5kYXRhLm1zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxufSk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xud2luZG93LmF4aW9zID0gYXhpb3M7XG5cbndpbmRvdy5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiTW9kYWwiLCJDaGFydCIsIlNvcnRhYmxlIiwiYm9vdHN0cmFwIiwicmVxdWlyZSIsImdyYW1Db252ZXJ0ZXIiLCJvdW5jZUNvbnZlcnRlciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaG93UGFzc3dvcmQiLCJpZCIsInBhc3N3b3JkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZE1hc3Rlckxpc3RJdGVtIiwibnVtYmVyT2ZJdGVtc1RvQWRkIiwibGluZXNUb0FkZCIsImxpc3RCeUl0ZW1zIiwibGlzdGVuIiwiaXRlbVRhYmxlIiwicm93IiwiY3JlYXRlRWxlbWVudCIsImNlbGwxIiwiaXRlbU5hbWUiLCJjcmVhdGVMaXN0SXRlbUlucHV0IiwicGxhY2Vob2xkZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJjZWxsNiIsImRlbGV0ZUJ0biIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsImNlbGwyIiwiaXRlbVdlaWdodCIsInN0eWxlIiwid2lkdGgiLCJjZWxsMyIsInNlbGVjdCIsInNldEF0dHJpYnV0ZSIsIm96T3B0aW9uIiwibGJzT3B0aW9uIiwiZ3JPcHRpb24iLCJrZ09wdGlvbiIsInRleHQiLCJhcHBlbmRDaGlsZCIsInNlbGVjdENlbGwiLCJjYXRlZ29yeVNlbGVjdCIsImdldENhdGVncm95U2VsZWN0IiwiYXBwZW5kIiwiYXNzaWduVG9HZWFyTGlzdCIsIml0ZW1JZCIsImxpc3RJZCIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJkYXRhIiwibGlzdF9pZCIsImF4aW9zIiwicG9zdCIsInJlc3BvbnNlIiwic3RhdHVzIiwiYWxlcnQiLCJtc2ciLCJlcnJvciIsInVwZGF0ZVNlc3Npb25EYXRhIiwiZWxlbWVudCIsImNvbHVtbk5hbWUiLCJnZXRBdHRyaWJ1dGUiLCJsb2NhdGlvbiIsInJlbG9hZCIsImFkZExpc3RJdGVtIiwiY2F0ZWdvcnljb3VudGVyIiwidW5kZWZpbmVkIiwiZ3JvdXBDYXRlZ29yeSIsIl9sb29wIiwibGlzdFVPTSIsImZpbmFsSUVsZW1lbnQiLCJ0YWJsZUNhdGVnb3J5IiwidXNlcklkIiwiZmluYWxJIiwiY2VsbDAiLCJzY29wZSIsImNvdW50ZXIiLCJnZXRCb29sZWFuRGF0YSIsInVwZGF0ZUl0ZW0iLCJfcmVmIiwiX2NhbGxlZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJ0MCIsIm5ld0lkIiwibGluZVVvbUNlbGwiLCJyYWRpbzEiLCJyYWRpbzIiLCJyYWRpb0xhYmVsMSIsInJhZGlvTGFiZWwyIiwicmFkaW9MYWJlbDMiLCJjcmVhdGVSYWRpbyIsImNyZWF0ZUxhYmVsIiwiY2VsbDQiLCJwYWNrZWRBbW91bnQiLCJjZWxsNSIsInRvdGFsTGluZVdlaWdodCIsInN2Z05hbWVzcGFjZSIsImljb25DZWxsIiwiaWNvbiIsImNyZWF0ZUVsZW1lbnROUyIsInBhdGgiLCJhZGRFdmVudExpc3RlbmVyV2VpZ2h0Q2FsYyIsInVwZGF0ZVVPTSIsInVzUmFkaW9Ub01ldHJpYyIsIm1ldHJpY1JhZGlvVG9VcyIsIm5lZWRlZEZvcldlaWdodHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibmVlZGVkRm9yV2VpZ2h0IiwiZ2V0TGluZVRvdGFsV2VpZ2h0IiwiY29udmVydCIsIndlaWdodCIsInVvbSIsImxpbmVUb3RhbFdlaWdodEVsZW1lbnQiLCJsaW5lVG90YWwiLCJ0b0ZpeGVkIiwicmVwbGFjZSIsInVwZGF0ZUxpc3RJdGVtIiwiY29udmVydE1lYXN1cmVtZW50IiwidG90YWxXZWlnaHQiLCJ0b3RhbExpbmVXZWlnaHRWYWx1ZSIsIndlaWdodFZhbHVlIiwic21hbGwiLCJsYXJnZSIsImxhYmVsIiwibGFiZWxIVE1MIiwiY2hlY2tlZCIsImFkZENhdGVnb3J5R3JvdXAiLCJjYXRlZ29yeSIsInJlcyIsImVyciIsImlkQXJyIiwic3BsaXQiLCJhcnJMZW5ndGgiLCJpdGVtSWRWYWx1ZSIsInN1YnN0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1cGRhdGVUb3RhbExpc3RXZWlnaHRzIiwid2VpZ2h0c0ZvclBXIiwiYmFzZVdlaWdodCIsInRvdGFsUGFja1dlaWdodCIsIm1heFBhY2tXZWlnaHQiLCJjbGFzc1dhcm5pbmdWYWx1ZSIsInVvbVRleHQiLCJ3ZWlnaHRGb3JQVyIsImNvbnZlcnRlciIsInJvd1dlaWdodCIsIml0ZW1DYXRlZ29yeUVsZW1lbnQiLCJpdGVtQ2F0ZWdvcnkiLCJkaXZFbGVtZW50IiwiaW5uZXJUZXh0IiwiZGlzcGxheSIsIm5hbWVCYXNlIiwib3B0aW9uIiwib3B0aW9uTGlzdCIsIl9yZWYyIiwiX2NhbGxlZTIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJnZXQiLCJzZWxlY3RlZCIsImlucHV0RWxlbWVudHMiLCJpbnB1dEVsZW1lbnQiLCJlbGVtZW50VHlwZSIsImVsZW1lbnRUYWciLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJuZXdFbGVtZW50IiwicGFyZW50RWxlbWVudCIsInJlcGxhY2VDaGlsZCIsImRhdGFDb2x1bW5OYW1lIiwicmFkaW8iLCJpbm5lckh0bWwiLCJodG1sRm9yIiwibGluZUxhYmVsIiwidXBkYXRlTGlzdCIsImhlYWRlcnMiLCJoZWFkZXIiLCJjb250ZW50IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiYXJyb3ciLCJxdWVyeVNlbGVjdG9yIiwiY29udGFpbnMiLCJyZW1vdmUiLCJtYXhIZWlnaHQiLCJwYWRkaW5nIiwic2Nyb2xsSGVpZ2h0IiwiaW5wdXRzIiwiaW5wdXQiLCJkaXNhYmxlZCIsImxpc3RDaGFydGJ0biIsImNoYXJ0U3RhdHVzIiwiZ2V0Q2hhcnQiLCJkZXN0cm95IiwiY3R4IiwiY2hhcnREYXRhIiwicGFyc2UiLCJteUNoYXJ0IiwibGFiZWxzIiwiZGF0YXNldHMiLCJ3ZWlnaHRzIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JzIiwiYm9yZGVyV2lkdGgiLCJob3Zlck9mZnNldCIsIm9wdGlvbnMiLCJjdXRvdXQiLCJyYWRpdXMiLCJsZWdlbmQiLCJwbHVnaW5zIiwiZGF0YWxhYmVscyIsImFuaW1hdGlvbiIsImFuaW1hdGVSb3RhdGUiLCJhbmltYXRlU2NhbGUiLCJ0ZXh0Q29udGVudCIsInNob3dDb252cnNpb25BbGVydCIsInRhYmxlIiwiY2F0ZWdvcnlJZCIsIm9uRW5kIiwiZXZ0Iiwib3JkZXJlZElkcyIsInVwZGF0ZUl0ZW1PcmRlciIsImNhdGVnb3J5X2lkIiwib3JkZXJlZF9pZHMiLCJzb3J0aW5nU2VsZWN0Iiwib3B0cyIsInBhcmVudENvbnRhaW5lciIsImdob3N0Q2xhc3MiLCJ1cGRhdGVDYXRlZ29yeU9yZGVyIiwibmV3T3JkZXIiLCJpdGVtIiwiaW5kZXgiLCJpdGVtX2NhdGVnb3J5IiwiY2F0ZWdvcnlfb3JkZXIiLCJkZWZhdWx0cyIsImNvbW1vbiJdLCJzb3VyY2VSb290IjoiIn0=