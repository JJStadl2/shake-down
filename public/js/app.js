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
var ounceConverter = 16;
var gramConverter = 1000;
var gramsToOunceConversionFactor = 0.035274;
var ouncesToGramsConversionFactor = 28.34952;
var kiloToPoundConversioFactor = 2.20462;
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
      var itemUOM = document.createElement("input");
      itemUOM.type = "hidden";
      itemUOM.id = "uom-" + finalI;
      itemUOM.value = "";
      itemUOM.setAttribute('data-column-name', 'uom');
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
      // data = getBooleanData("in_grams");
      // if (listUOM == "us") {
      //     data = getBooleanData("in_ounces");
      // } else {
      //     data = getBooleanData("in_grams");
      // }
      data["list_id"] = listId;
      data["user_id"] = userId;
      data["item_name"] = "";
      // data['uom'] = 'metric'
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
      // let radio1;
      // let radio2;
      // let radioLabel1;
      // let radioLabel2;
      // let radioLabel3;

      var ozRadio = createRadio("in_ounces", "", "oz", finalI);
      var ozRadioLabel = createLabel("OZ", "uom-oz-" + finalI, "oz", finalI);
      var lbsRadio = createRadio("in_lbs", "", "lbs", finalI);
      var lbsRadioLabel = createLabel("LBS", "uom-lbs-" + finalI, "lbs", finalI);
      var grRadio = createRadio("in_grams", "", "gram", finalI);
      var grRadioLabel = createLabel("G", "uom-gram-" + finalI, "gram", finalI);
      var kgRadio = createRadio("in_kilos", "", "kg", finalI);
      var kgRadioLabel = createLabel("KG", "uom-kg-" + finalI, "kg", finalI);
      var radioLabel3 = createLabel("", "", "", finalI, true);

      // if (listUOM === "us") {
      //     radio1 = createRadio("in_ounces", "", "oz", finalI);
      //     radioLabel1 = createLabel(
      //         "OZ",
      //         "uom-oz-" + finalI,
      //         "oz",
      //         finalI
      //     );
      // radio2 = createRadio("in_lbs", "", "lbs", finalI);
      // radioLabel2 = createLabel(
      //     "LBS",
      //     "uom-lbs-" + finalI,
      //     "lbs",
      //     finalI
      // );
      //     radioLabel3 = createLabel(
      //         "OZ",
      //         "uom-oz-" + finalI,
      //         "oz",
      //         finalI,
      //         true
      //     );
      // } else {
      //     radio1 = createRadio("in_grams", "", "gram", finalI);
      //     radioLabel1 = createLabel(
      //         "G",
      //         "uom-gram-" + finalI,
      //         "gram",
      //         finalI
      //     );
      //     radio2 = createRadio("in_kilos", "", "kg", finalI);
      //     radioLabel2 = createLabel(
      //         "KG",
      //         "uom-kg-" + finalI,
      //         "kg",
      //         finalI
      //     );
      // radioLabel3 = createLabel(
      //     "G",
      //     "uom-gram-" + finalI,
      //     "gram",
      //     finalI,
      //     true
      // );
      // }

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
      cell1.appendChild(itemUOM);
      // cell1.appendChild(icon);
      cell1.appendChild(itemName);
      cell2.appendChild(itemWeight);
      var selectCell = document.createElement("td");
      var categorySelect = getCategroySelect(finalI, groupCategory);
      selectCell.append(categorySelect);
      cell3.appendChild(ozRadio);
      cell3.appendChild(ozRadioLabel);
      cell3.appendChild(lbsRadio);
      cell3.appendChild(lbsRadioLabel);
      cell3.appendChild(grRadio);
      cell3.appendChild(grRadioLabel);
      cell3.appendChild(kgRadio);
      cell3.appendChild(kgRadioLabel);
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
  this.window.convertMeasurement = function convertMeasurement(row, pageElement) {
    var listId = document.getElementById('listId').value;
    var uomElement = document.getElementById("uom-" + row);
    var uom = uomElement.value;
    console.log('test uom: ' + uom);

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
    var currentUom = pageElement.getAttribute('data-current-uom');
    var columnName = pageElement.getAttribute('data-column-name');
    var labelHTML = currentUom.toUpperCase();
    if (uom === '' && currentUom === '') {
      alert('uom and current blank');
      uomElement.value = columnName === 'in_grams' || columnName === 'in_kilo' ? 'metric' : 'us';
      labelHTML = currentUom.toUpperCase();
      weightValue = +weightValue;
      element = pageElement;
    } else if (uom === "us" && pageElement.classList.contains("us-radio")) {
      alert('uom = ' + uom + ' and not metric element');
      small = document.getElementById("uom-oz-" + row);
      large = document.getElementById("uom-lbs-" + row);
      if (small.checked === true) {
        weightValue = +weightValue * ounceConverter;
        element = small;
        labelHTML = "OZ";
      } else {
        weightValue = +weightValue / ounceConverter;
        element = large;
        labelHTML = "LBS";
      }
    } else if (uom === 'metric' && pageElement.classList.contains("metric-radio")) {
      alert('uom = ' + uom + ' and not us element');
      small = document.getElementById("uom-gram-" + row);
      large = document.getElementById("uom-kg-" + row);
      console.log('gram current: ' + small.getAttribute('data-current-uom'));
      console.log('kilo current: ' + large.getAttribute('data-current-uom'));
      if (small.checked === true) {
        weightValue = +weightValue * gramConverter;
        element = small;
        labelHTML = "G";
      } else {
        weightValue = +weightValue / gramConverter;
        element = large;
        labelHTML = "KG";
      }
    } else if (uom === "us" && pageElement.classList.contains("metric-radio")) {
      alert('uom = ' + uom + ' and IS metric element');
      small = document.getElementById("uom-gram-" + row);
      large = document.getElementById("uom-kg-" + row);
      if (small.checked === true) {
        //                 const gramsToOunceConversionFactor = 0.035274;
        // const ouncesToGramsConversionFactor = 28.34952;
        weightValue = +weightValue * 16;
        element = small;
        labelHTML = "G";
      } else {
        weightValue = +weightValue / 16;
        element = large;
        labelHTML = "LBS";
      }
    } else {
      console.log('in else:');
      console.log('uom: ' + uom);
      console.log('current uom: ' + currentUom);
      console.log('column: ' + columnName);
      console.log('class list: ' + JSON.stringify(pageElement.classList));
    }
    console.log('html label: ' + labelHTML);
    pageElement.setAttribute('data-current-uom', labelHTML.toLowerCase());

    // if (uom === "us" ) {
    //     small = document.getElementById("uom-oz-" + row);
    //     large = document.getElementById("uom-lbs-" + row);
    //     if (small.checked === true) {
    //         weightValue = +weightValue * 16;
    //         element = small;
    //         labelHTML = "OZ";
    //     } else {
    //         weightValue = +weightValue / 16;
    //         element = large;
    //         labelHTML = "LBS";
    //     }
    // } else {
    //     small = document.getElementById("uom-gram-" + row);
    //     large = document.getElementById("uom-kg-" + row);
    //     console.log('gram current: '+ small.getAttribute('data-current-uom'));
    //     console.log('kilo current: '+ large.getAttribute('data-current-uom'));

    //     if (small.checked === true) {
    //         weightValue = +weightValue * 1000;
    //         element = small;
    //         labelHTML = "G";
    //     } else {
    //         weightValue = +weightValue / 1000;
    //         element = large;
    //         labelHTML = "KG";
    //     }
    // }

    totalLineWeightValue = +weightValue * +packedAmount;
    weight.value = weightValue.toFixed(3).replace(/[.,]00$/, "");
    totalWeight.value = totalLineWeightValue.toFixed(3).replace(/[.,]00$/, "");
    label.innerHTML = labelHTML;
    updateListItem(element);
    updateListItem(weight);
    updateListItem(totalWeight);
    updateListItem(uomElement);
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
    radio.setAttribute("data-current-uom", '');

    // if (uom === "gram" ) {
    //     radio.checked = true;

    // }
    // if (uom === "gram" || uom === "oz") {
    //     radio.checked = true;
    // }
    radio.addEventListener("change", function () {
      convertMeasurement(row, radio);
    });
    return radio;
  }
  function createLabel(innerHtml, htmlFor, uom, row) {
    var lineLabel = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var label = document.createElement("label");
    label.className = "form-check-label";
    if (uom !== '') {
      var uomClass = uom === "gram" || uom === "kg" ? "metric-radio" : "us-radio";
      label.classList.add(uomClass);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRUMsSUFBSSxDQUFDLENBQ2ZsSCxJQUFJLENBQUMsVUFBQytNLEdBQUcsRUFBSztNQUVYLElBQUlBLEdBQUcsQ0FBQzdGLElBQUksQ0FBQ0ssTUFBTSxJQUFJLEdBQUcsRUFBRTtRQUN4QkMsS0FBSyxDQUFDdUYsR0FBRyxDQUFDN0YsSUFBSSxDQUFDTyxHQUFHLENBQUM7TUFDdkI7SUFDSixDQUFDLENBQUMsU0FDSSxDQUFDLFVBQUN1RixHQUFHLEVBQUs7TUFDWnhGLEtBQUssQ0FBQ3dGLEdBQUcsQ0FBQztJQUNkLENBQUMsQ0FBQztFQUVWO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUN6dEN3QjtBQUMxQjlJLE1BQU0sQ0FBQ2tELEtBQUssR0FBR0EsNkNBQUs7QUFFcEJsRCxNQUFNLENBQUNrRCxLQUFLLENBQUNrTSxRQUFRLENBQUN6RCxPQUFPLENBQUMwRCxNQUFNLENBQUMsa0JBQWtCLENBQUMsR0FBRyxnQkFBZ0I7Ozs7Ozs7Ozs7O0FDSDNFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zYXNzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAnLi9ib290c3RyYXAnIDtcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcImJvb3RzdHJhcFwiO1xuLy8gaW1wb3J0ICAnYm9vdHN0cmFwJztcbmltcG9ydCBcIkBwb3BwZXJqcy9jb3JlXCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzL2F1dG9cIjtcbmltcG9ydCBTb3J0YWJsZSBmcm9tIFwic29ydGFibGVqc1wiO1xuY29uc3QgYm9vdHN0cmFwID0gcmVxdWlyZShcIi4vYm9vdHN0cmFwXCIpO1xuY29uc3Qgb3VuY2VDb252ZXJ0ZXIgPSAxNjtcbmNvbnN0IGdyYW1Db252ZXJ0ZXIgPSAxMDAwO1xuY29uc3QgZ3JhbXNUb091bmNlQ29udmVyc2lvbkZhY3RvciA9IDAuMDM1Mjc0O1xuY29uc3Qgb3VuY2VzVG9HcmFtc0NvbnZlcnNpb25GYWN0b3IgPSAyOC4zNDk1MjtcbmNvbnN0IGtpbG9Ub1BvdW5kQ29udmVyc2lvRmFjdG9yID0gMi4yMDQ2MjtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoZSkge1xuICAgIHRoaXMud2luZG93LnNob3dQYXNzd29yZCA9IGZ1bmN0aW9uIHNob3dQYXNzd29yZChpZCkge1xuICAgICAgICBsZXQgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgIGlmIChwYXNzd29yZC50eXBlID09PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgICAgICAgIHBhc3N3b3JkLnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhc3N3b3JkLnR5cGUgPSBcInBhc3N3b3JkXCI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMud2luZG93LmFkZE1hc3Rlckxpc3RJdGVtID0gZnVuY3Rpb24gYWRkTWFzdGVyTGlzdEl0ZW0oKSB7XG4gICAgICAgIGxldCBudW1iZXJPZkl0ZW1zVG9BZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmVzVG9BZGRcIik7XG4gICAgICAgIGxldCBsaW5lc1RvQWRkID0gMTtcbiAgICAgICAgaWYgKG51bWJlck9mSXRlbXNUb0FkZCA9PT0gbnVsbCB8fCArbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlIDwgMSkge1xuICAgICAgICAgICAgbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlID0gbGluZXNUb0FkZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpbmVzVG9BZGQgPSArbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lc1RvQWRkOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBsaXN0QnlJdGVtcyA9IHRydWU7XG4gICAgICAgICAgICBsZXQgbGlzdGVuID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgaXRlbVRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWl0ZW0tdGFibGUtYm9keScpO1xuICAgICAgICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIGNlbGxzIGFuZCBpbnB1dCBlbGVtZW50cy5cbiAgICAgICAgICAgIGxldCBjZWxsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcblxuICAgICAgICAgICAgbGV0IGl0ZW1OYW1lID0gY3JlYXRlTGlzdEl0ZW1JbnB1dChcbiAgICAgICAgICAgICAgICBcInRleHRcIixcbiAgICAgICAgICAgICAgICBcIml0ZW1OYW1lXCIsXG4gICAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgICBcIml0ZW1fbmFtZVwiLFxuICAgICAgICAgICAgICAgIGxpc3RlblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGl0ZW1OYW1lLnBsYWNlaG9sZGVyID0gXCJJdGVtIE5hbWVcIjtcbiAgICAgICAgICAgIGl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRyb2xcIik7XG5cbiAgICAgICAgICAgIGxldCBjZWxsNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGNlbGw2LmlkID0gXCJidG4tdGQtXCIgK2k7XG4gICAgICAgICAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgICAgICBkZWxldGVCdG4uaWQgPSBcImRlbGV0ZUJ0bi1cIiArIGk7XG4gICAgICAgICAgICBkZWxldGVCdG4uY2xhc3NOYW1lID0gXCJidG4gYnRuLXByaW1hcnkgYnRuLXNtICBweS0yXCI7XG4gICAgICAgICAgICBkZWxldGVCdG4uaW5uZXJIVE1MID0gXCJ4XCI7XG5cblxuICAgICAgICAgICAgbGV0IGNlbGwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgbGV0IGl0ZW1XZWlnaHQgPSBjcmVhdGVMaXN0SXRlbUlucHV0KFxuICAgICAgICAgICAgICAgIFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgXCJpdGVtV2VpZ2h0XCIsXG4gICAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgICBcIml0ZW1fd2VpZ2h0XCIsXG4gICAgICAgICAgICAgICAgbGlzdGVuXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaXRlbVdlaWdodC52YWx1ZSA9IDA7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJmb3Itd2VpZ2h0XCIpO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWlucHV0XCIpO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5zdHlsZS53aWR0aCA9ICc0MCUnO1xuICAgICAgICAgICAgY2VsbDIuY2xhc3NMaXN0LmFkZChcIm51bWJlci1jb2xcIik7XG5cbiAgICAgICAgICAgIGxldCBjZWxsMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGxldCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICAgICAgc2VsZWN0LmlkID0gXCJ1b20tXCIgKyBpO1xuICAgICAgICAgICAgc2VsZWN0Lm5hbWUgPSBcInVvbVtdXCI7XG4gICAgICAgICAgICBzZWxlY3Quc2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4tbmFtZVwiLCBcInVvbVwiKTtcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiO1xuXG4gICAgICAgICAgICBsZXQgb3pPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgbGV0IGxic09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBsZXQgZ3JPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgbGV0IGtnT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIG96T3B0aW9uLnZhbHVlID0gXCJpbl9vdW5jZXNcIjtcbiAgICAgICAgICAgIG96T3B0aW9uLnRleHQgPSBcIk9aXCI7XG4gICAgICAgICAgICBsYnNPcHRpb24udmFsdWUgID0gJ2luX2xicyc7XG4gICAgICAgICAgICBsYnNPcHRpb24udGV4dCA9ICdMQlMnXG5cbiAgICAgICAgICAgIGdyT3B0aW9uLnZhbHVlID0gXCJpbl9ncmFtc1wiO1xuICAgICAgICAgICAgZ3JPcHRpb24udGV4dCA9IFwiR1wiO1xuICAgICAgICAgICAga2dPcHRpb24udmFsdWUgID0gJ2luX2tpbG9zJztcbiAgICAgICAgICAgIGtnT3B0aW9uLnRleHQgPSAnS0cnO1xuICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG96T3B0aW9uKTtcbiAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChsYnNPcHRpb24pO1xuICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKGdyT3B0aW9uKTtcbiAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChrZ09wdGlvbik7XG5cbiAgICAgICAgICAgIC8vYXBwZW5kIGlucHV0cyB0byBjZWxscy5cbiAgICAgICAgICAgIC8vIERlZmluZSB0aGUgU1ZHIG5hbWVzcGFjZVxuICAgICAgICAgICAgLy8gY29uc3Qgc3ZnTmFtZXNwYWNlID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuICAgICAgICAgICAgLy8gbGV0IGljb25DZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgICAgICAgICAgLy8gLy8gQ3JlYXRlIGEgbmV3IFNWRyBlbGVtZW50XG4gICAgICAgICAgICAvLyBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOYW1lc3BhY2UsIFwic3ZnXCIpO1xuICAgICAgICAgICAgLy8gaWNvbi5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjE2XCIpO1xuICAgICAgICAgICAgLy8gaWNvbi5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIxNlwiKTtcbiAgICAgICAgICAgIC8vIGljb24uc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcImN1cnJlbnRDb2xvclwiKTtcbiAgICAgICAgICAgIC8vIGljb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJiaSBiaS1ncmlwLXZlcnRpY2FsXCIpO1xuICAgICAgICAgICAgLy8gaWNvbi5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDE2IDE2XCIpO1xuXG4gICAgICAgICAgICAvLyAvLyBDcmVhdGUgdGhlIDxwYXRoPiBlbGVtZW50XG4gICAgICAgICAgICAvLyBsZXQgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOYW1lc3BhY2UsIFwicGF0aFwiKTtcbiAgICAgICAgICAgIC8vIHBhdGguc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgLy8gICAgIFwiZFwiLFxuICAgICAgICAgICAgLy8gICAgIFwiTTcgMmExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBtMyAwYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgME03IDVhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbTMgMGExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBNNyA4YTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMG0zIDBhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbS0zIDNhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbTMgMGExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBtLTMgM2ExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBtMyAwYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMFwiXG4gICAgICAgICAgICAvLyApO1xuXG4gICAgICAgICAgICAvLyAvLyBBcHBlbmQgdGhlIHBhdGggdG8gdGhlIFNWR1xuICAgICAgICAgICAgLy8gaWNvbi5hcHBlbmRDaGlsZChwYXRoKTtcblxuICAgICAgICAgICAgLy8gLy8gLy8gQXBwZW5kIHRoZSBTVkcgaWNvbiB0byB0aGUgY2VsbFxuICAgICAgICAgICAgLy8gaWNvbkNlbGwuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICAgICAgICAgIC8vIGNlbGwxLmFwcGVuZENoaWxkKGNvdW50ZXIpO1xuICAgICAgICAgICAgLy8gY2VsbDEuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgICAgICBjZWxsMS5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gICAgICAgICAgICBjZWxsMi5hcHBlbmRDaGlsZChpdGVtV2VpZ2h0KTtcblxuICAgICAgICAgICAgbGV0IHNlbGVjdENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBsZXQgY2F0ZWdvcnlTZWxlY3QgPSBnZXRDYXRlZ3JveVNlbGVjdChpLG51bGwsIGxpc3Rlbik7XG4gICAgICAgICAgICBjYXRlZ29yeVNlbGVjdC5uYW1lID0gJ2l0ZW1DYXRlZ29yeVtdJ1xuICAgICAgICAgICAgc2VsZWN0Q2VsbC5hcHBlbmQoY2F0ZWdvcnlTZWxlY3QpO1xuXG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICAgICAgICAgICAgY2VsbDYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIGNlbGxzIHRvIHRoZSByb3cuXG4gICAgICAgICAgICAvLyByb3cuYXBwZW5kQ2hpbGQoaWNvbkNlbGwpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwxKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChzZWxlY3RDZWxsKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsMyk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDIpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGw2KTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSByb3cgdG8gdGhlIHRhYmxlLlxuICAgICAgICAgICAgaXRlbVRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG5cblxuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdJdGVtQ291bnQnKS52YWx1ZSA9IGxpbmVzVG9BZGQ7XG4gICAgICAgIG51bWJlck9mSXRlbXNUb0FkZC52YWx1ZSA9IDE7XG4gICAgfTtcblxuICAgIHRoaXMud2luZG93LmFzc2lnblRvR2Vhckxpc3QgPSBmdW5jdGlvbiBhc3NpZ25Ub0dlYXJMaXN0KGl0ZW1JZCwgbGlzdElkKXtcbiAgICAgICAgY29uc29sZS5sb2coJ2xpc3RfaWQgaW4gbmV3IGFzc2lnbjogJysgbGlzdElkKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2l0ZW0gaW4gbmV3IGFzc2lnbjogJysgaXRlbUlkKTtcblxuICAgICAgICBsZXQgdXJsID0gJy9hc3NpZ24tdG8tZ2Vhci1saXN0J1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIGxpc3RfaWQ6IGxpc3RJZCxcbiAgICAgICAgICAgIGlkOiBpdGVtSWRcbiAgICAgICAgfTtcblxuXG4gICAgICAgIGF4aW9zLnBvc3QodXJsLGRhdGEpXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXNwb25zZSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0gMSl7XG5cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGFsZXJ0KHJlc3BvbnNlLm1zZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICB9KTtcblxuICAgIH1cbiAgICB0aGlzLndpbmRvdy51cGRhdGVTZXNzaW9uRGF0YSA9IGZ1bmN0aW9uIHVwZGF0ZVNlc3Npb25EYXRhKGVsZW1lbnQpe1xuICAgICAgICBsZXQgdmFsdWUgPSBlbGVtZW50LnZhbHVlO1xuICAgICAgICBsZXQgY29sdW1uTmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbHVtbi1uYW1lJyk7XG4gICAgICAgIGxldCB1cmwgPSAnL3VwZGF0ZS1zZXNzaW9uJztcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgZGF0YVtjb2x1bW5OYW1lXSA9IHZhbHVlO1xuXG4gICAgICAgIGF4aW9zLnBvc3QodXJsLGRhdGEpXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXNwb25zZSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0gMSl7XG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICB9KTtcblxuXG4gICAgfVxuICAgIHRoaXMud2luZG93LmFkZExpc3RJdGVtID0gZnVuY3Rpb24gYWRkTGlzdEl0ZW0oY2F0ZWdvcnljb3VudGVyID0gbnVsbCwgZ3JvdXBDYXRlZ29yeSA9IG51bGwpIHtcbiAgICAgICAgbGV0IG51bWJlck9mSXRlbXNUb0FkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZXNUb0FkZFwiKTtcbiAgICAgICAgbGV0IGxpbmVzVG9BZGQgPSAxO1xuICAgICAgICBpZiAobnVtYmVyT2ZJdGVtc1RvQWRkID09PSBudWxsIHx8ICtudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPCAxKSB7XG4gICAgICAgICAgICBudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPSBsaW5lc1RvQWRkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGluZXNUb0FkZCA9ICtudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzVG9BZGQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGxpc3RVT00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbVwiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBmaW5hbElFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaW5hbC1pXCIpO1xuICAgICAgICAgICAgbGV0IGxpc3RCeUl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0QnlJdGVtc1wiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBpdGVtVGFibGU7XG5cbiAgICAgICAgICAgIGlmICgrbGlzdEJ5SXRlbXMgPT0gMSkge1xuICAgICAgICAgICAgICAgIGxpc3RCeUl0ZW1zID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpdGVtVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW0tdGFibGUtYm9keVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGlzdEJ5SXRlbXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsZXQgdGFibGVDYXRlZ29yeSA9IGNhdGVnb3J5Y291bnRlcjtcbiAgICAgICAgICAgICAgICBpdGVtVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgICAgICAgICAgXCJjYXRlZ29yeVRhYmxlLVwiICsgdGFibGVDYXRlZ29yeVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB1c2VySWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJJZFwiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RJZFwiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBmaW5hbEkgPSBmaW5hbElFbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgZmluYWxJRWxlbWVudC52YWx1ZSA9ICtmaW5hbEkgKyAxO1xuXG4gICAgICAgICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgY2VsbHMgYW5kIGlucHV0IGVsZW1lbnRzLlxuICAgICAgICAgICAgbGV0IGNlbGwwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgICAgICAgICAgY2VsbDAuc2NvcGUgPSBcInJvd1wiO1xuICAgICAgICAgICAgY2VsbDAuaW5uZXJIVE1MID0gZmluYWxJO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG5cbiAgICAgICAgICAgIGxldCBjb3VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgY291bnRlci50eXBlID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgIGNvdW50ZXIubmFtZSA9IFwiaWRbXVwiO1xuICAgICAgICAgICAgY291bnRlci5pZCA9IFwiaWQtXCIgKyBmaW5hbEk7XG4gICAgICAgICAgICBjb3VudGVyLnZhbHVlID0gXCJuZXctXCIgKyBmaW5hbEk7XG4gICAgICAgICAgICBjb3VudGVyLnNldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uLW5hbWVcIiwgXCJpZFwiKTtcblxuICAgICAgICAgICAgbGV0IGl0ZW1VT00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBpdGVtVU9NLnR5cGUgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgaXRlbVVPTS5pZCA9IFwidW9tLVwiICsgZmluYWxJO1xuICAgICAgICAgICAgaXRlbVVPTS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICBpdGVtVU9NLnNldEF0dHJpYnV0ZSgnZGF0YS1jb2x1bW4tbmFtZScsJ3VvbScpO1xuXG5cbiAgICAgICAgICAgIGxldCBpdGVtTmFtZSA9IGNyZWF0ZUxpc3RJdGVtSW5wdXQoXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgXCJpdGVtTmFtZVwiLFxuICAgICAgICAgICAgICAgIGZpbmFsSSxcbiAgICAgICAgICAgICAgICBcIml0ZW1fbmFtZVwiXG5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpdGVtTmFtZS5wbGFjZWhvbGRlciA9IFwiSXRlbSBOYW1lXCI7XG4gICAgICAgICAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBjZWxsNi5pZCA9IFwiYnRuLXRkLVwiICsgZmluYWxJO1xuICAgICAgICAgICAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICAgICAgZGVsZXRlQnRuLmlkID0gXCJkZWxldGVCdG4tXCIgKyBmaW5hbEk7XG4gICAgICAgICAgICBkZWxldGVCdG4uY2xhc3NOYW1lID0gXCJidG4gYnRuLXByaW1hcnkgYnRuLXNtICBweS0yXCI7XG4gICAgICAgICAgICBkZWxldGVCdG4uaW5uZXJIVE1MID0gXCJ4XCI7XG5cbiAgICAgICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgICAgICBsZXQgdXJsID0gXCIvbGlzdC1pdGVtXCI7XG4gICAgICAgICAgICAvLyBkYXRhID0gZ2V0Qm9vbGVhbkRhdGEoXCJpbl9ncmFtc1wiKTtcbiAgICAgICAgICAgIC8vIGlmIChsaXN0VU9NID09IFwidXNcIikge1xuICAgICAgICAgICAgLy8gICAgIGRhdGEgPSBnZXRCb29sZWFuRGF0YShcImluX291bmNlc1wiKTtcbiAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgZGF0YSA9IGdldEJvb2xlYW5EYXRhKFwiaW5fZ3JhbXNcIik7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBkYXRhW1wibGlzdF9pZFwiXSA9IGxpc3RJZDtcbiAgICAgICAgICAgIGRhdGFbXCJ1c2VyX2lkXCJdID0gdXNlcklkO1xuICAgICAgICAgICAgZGF0YVtcIml0ZW1fbmFtZVwiXSA9IFwiXCI7XG4gICAgICAgICAgICAvLyBkYXRhWyd1b20nXSA9ICdtZXRyaWMnXG4gICAgICAgICAgICBpZihncm91cENhdGVnb3J5ICE9PSBudWxsKXtcbiAgICAgICAgICAgICAgICBkYXRhWydpdGVtX2NhdGVnb3J5J10gPSBncm91cENhdGVnb3J5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdXBkYXRlSXRlbTtcbiAgICAgICAgICAgIHVwZGF0ZUl0ZW0gPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KHVybCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJyZXNwb25zZSBmcm8gbmV3IGlucHV0OiBcIiArIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICAvLyApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIFRvIHVzZSB0aGUgZnVuY3Rpb24gYW5kIGhhbmRsZSB0aGUgcmVzcG9uc2UgZGF0YVxuICAgICAgICAgICAgdXBkYXRlSXRlbSgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCB0aGUgcmVzcG9uc2UgZGF0YVxuICAgICAgICAgICAgICAgIGNvdW50ZXIudmFsdWUgPSBkYXRhLm5ld0lkO1xuICAgICAgICAgICAgICAgIHJvdy5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIGRhdGEubmV3SWQpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiLFxuICAgICAgICAgICAgICAgICAgICBcIi9kZXN0cm95LWxpc3QtaXRlbS9cIiArIGRhdGEubmV3SWRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgbGV0IGNlbGwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgbGV0IGl0ZW1XZWlnaHQgPSBjcmVhdGVMaXN0SXRlbUlucHV0KFxuICAgICAgICAgICAgICAgIFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgXCJpdGVtV2VpZ2h0XCIsXG4gICAgICAgICAgICAgICAgZmluYWxJLFxuICAgICAgICAgICAgICAgIFwiaXRlbV93ZWlnaHRcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQudmFsdWUgPSAwO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKFwiZm9yLXdlaWdodFwiKTtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQuY2xhc3NMaXN0LmFkZChcIm51bWJlci1pbnB1dFwiKTtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcbiAgICAgICAgICAgIGNlbGwyLmNsYXNzTGlzdC5hZGQoXCJudW1iZXItY29sXCIpO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBsZXQgbGluZVVvbUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBjZWxsMy5jbGFzc0xpc3QuYWRkKFwidW9tLXRkXCIpO1xuICAgICAgICAgICAgbGluZVVvbUNlbGwuY2xhc3NMaXN0LmFkZChcInVvbS10ZFwiKTtcbiAgICAgICAgICAgIC8vIGxldCByYWRpbzE7XG4gICAgICAgICAgICAvLyBsZXQgcmFkaW8yO1xuICAgICAgICAgICAgLy8gbGV0IHJhZGlvTGFiZWwxO1xuICAgICAgICAgICAgLy8gbGV0IHJhZGlvTGFiZWwyO1xuICAgICAgICAgICAgLy8gbGV0IHJhZGlvTGFiZWwzO1xuXG4gICAgICAgICAgICBsZXQgb3pSYWRpbyA9IGNyZWF0ZVJhZGlvKFwiaW5fb3VuY2VzXCIsIFwiXCIsIFwib3pcIiwgZmluYWxJKTtcbiAgICAgICAgICAgIGxldCBvelJhZGlvTGFiZWwgPSBjcmVhdGVMYWJlbChcbiAgICAgICAgICAgICAgICBcIk9aXCIsXG4gICAgICAgICAgICAgICAgXCJ1b20tb3otXCIgKyBmaW5hbEksXG4gICAgICAgICAgICAgICAgXCJvelwiLFxuICAgICAgICAgICAgICAgIGZpbmFsSSk7XG5cbiAgICAgICAgICAgIGxldCBsYnNSYWRpbyA9IGNyZWF0ZVJhZGlvKFwiaW5fbGJzXCIsIFwiXCIsIFwibGJzXCIsIGZpbmFsSSk7XG4gICAgICAgICAgICBsZXQgbGJzUmFkaW9MYWJlbCA9IGNyZWF0ZUxhYmVsKFxuICAgICAgICAgICAgICAgIFwiTEJTXCIsXG4gICAgICAgICAgICAgICAgXCJ1b20tbGJzLVwiICsgZmluYWxJLFxuICAgICAgICAgICAgICAgIFwibGJzXCIsXG4gICAgICAgICAgICAgICAgZmluYWxJXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBsZXQgZ3JSYWRpbyA9IGNyZWF0ZVJhZGlvKFwiaW5fZ3JhbXNcIiwgXCJcIiwgXCJncmFtXCIsIGZpbmFsSSk7XG4gICAgICAgICAgICBsZXQgZ3JSYWRpb0xhYmVsID0gY3JlYXRlTGFiZWwoXG4gICAgICAgICAgICAgICAgXCJHXCIsXG4gICAgICAgICAgICAgICAgXCJ1b20tZ3JhbS1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgICAgICBcImdyYW1cIixcbiAgICAgICAgICAgICAgICBmaW5hbElcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGxldCBrZ1JhZGlvID0gY3JlYXRlUmFkaW8oXCJpbl9raWxvc1wiLCBcIlwiLCBcImtnXCIsIGZpbmFsSSk7XG4gICAgICAgICAgICBsZXQga2dSYWRpb0xhYmVsID0gY3JlYXRlTGFiZWwoXG4gICAgICAgICAgICAgICAgXCJLR1wiLFxuICAgICAgICAgICAgICAgIFwidW9tLWtnLVwiICsgZmluYWxJLFxuICAgICAgICAgICAgICAgIFwia2dcIixcbiAgICAgICAgICAgICAgICBmaW5hbElcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGxldCByYWRpb0xhYmVsMyA9IGNyZWF0ZUxhYmVsKFxuICAgICAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgICAgIGZpbmFsSSxcbiAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICApO1xuXG5cbiAgICAgICAgICAgIC8vIGlmIChsaXN0VU9NID09PSBcInVzXCIpIHtcbiAgICAgICAgICAgIC8vICAgICByYWRpbzEgPSBjcmVhdGVSYWRpbyhcImluX291bmNlc1wiLCBcIlwiLCBcIm96XCIsIGZpbmFsSSk7XG4gICAgICAgICAgICAvLyAgICAgcmFkaW9MYWJlbDEgPSBjcmVhdGVMYWJlbChcbiAgICAgICAgICAgIC8vICAgICAgICAgXCJPWlwiLFxuICAgICAgICAgICAgLy8gICAgICAgICBcInVvbS1vei1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgIC8vICAgICAgICAgXCJvelwiLFxuICAgICAgICAgICAgLy8gICAgICAgICBmaW5hbElcbiAgICAgICAgICAgIC8vICAgICApO1xuICAgICAgICAgICAgICAgIC8vIHJhZGlvMiA9IGNyZWF0ZVJhZGlvKFwiaW5fbGJzXCIsIFwiXCIsIFwibGJzXCIsIGZpbmFsSSk7XG4gICAgICAgICAgICAgICAgLy8gcmFkaW9MYWJlbDIgPSBjcmVhdGVMYWJlbChcbiAgICAgICAgICAgICAgICAvLyAgICAgXCJMQlNcIixcbiAgICAgICAgICAgICAgICAvLyAgICAgXCJ1b20tbGJzLVwiICsgZmluYWxJLFxuICAgICAgICAgICAgICAgIC8vICAgICBcImxic1wiLFxuICAgICAgICAgICAgICAgIC8vICAgICBmaW5hbElcbiAgICAgICAgICAgICAgICAvLyApO1xuICAgICAgICAgICAgLy8gICAgIHJhZGlvTGFiZWwzID0gY3JlYXRlTGFiZWwoXG4gICAgICAgICAgICAvLyAgICAgICAgIFwiT1pcIixcbiAgICAgICAgICAgIC8vICAgICAgICAgXCJ1b20tb3otXCIgKyBmaW5hbEksXG4gICAgICAgICAgICAvLyAgICAgICAgIFwib3pcIixcbiAgICAgICAgICAgIC8vICAgICAgICAgZmluYWxJLFxuICAgICAgICAgICAgLy8gICAgICAgICB0cnVlXG4gICAgICAgICAgICAvLyAgICAgKTtcbiAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgcmFkaW8xID0gY3JlYXRlUmFkaW8oXCJpbl9ncmFtc1wiLCBcIlwiLCBcImdyYW1cIiwgZmluYWxJKTtcbiAgICAgICAgICAgIC8vICAgICByYWRpb0xhYmVsMSA9IGNyZWF0ZUxhYmVsKFxuICAgICAgICAgICAgLy8gICAgICAgICBcIkdcIixcbiAgICAgICAgICAgIC8vICAgICAgICAgXCJ1b20tZ3JhbS1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgIC8vICAgICAgICAgXCJncmFtXCIsXG4gICAgICAgICAgICAvLyAgICAgICAgIGZpbmFsSVxuICAgICAgICAgICAgLy8gICAgICk7XG4gICAgICAgICAgICAvLyAgICAgcmFkaW8yID0gY3JlYXRlUmFkaW8oXCJpbl9raWxvc1wiLCBcIlwiLCBcImtnXCIsIGZpbmFsSSk7XG4gICAgICAgICAgICAvLyAgICAgcmFkaW9MYWJlbDIgPSBjcmVhdGVMYWJlbChcbiAgICAgICAgICAgIC8vICAgICAgICAgXCJLR1wiLFxuICAgICAgICAgICAgLy8gICAgICAgICBcInVvbS1rZy1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgIC8vICAgICAgICAgXCJrZ1wiLFxuICAgICAgICAgICAgLy8gICAgICAgICBmaW5hbElcbiAgICAgICAgICAgIC8vICAgICApO1xuICAgICAgICAgICAgICAgIC8vIHJhZGlvTGFiZWwzID0gY3JlYXRlTGFiZWwoXG4gICAgICAgICAgICAgICAgLy8gICAgIFwiR1wiLFxuICAgICAgICAgICAgICAgIC8vICAgICBcInVvbS1ncmFtLVwiICsgZmluYWxJLFxuICAgICAgICAgICAgICAgIC8vICAgICBcImdyYW1cIixcbiAgICAgICAgICAgICAgICAvLyAgICAgZmluYWxJLFxuICAgICAgICAgICAgICAgIC8vICAgICB0cnVlXG4gICAgICAgICAgICAgICAgLy8gKTtcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgbGV0IGNlbGw0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgY2VsbDQuY2xhc3NMaXN0LmFkZChcIm51bWJlci1jb2xcIik7XG4gICAgICAgICAgICBsZXQgcGFja2VkQW1vdW50ID0gY3JlYXRlTGlzdEl0ZW1JbnB1dChcbiAgICAgICAgICAgICAgICBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIFwicGFja2VkQW1vdW50XCIsXG4gICAgICAgICAgICAgICAgZmluYWxJLFxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBwYWNrZWRBbW91bnQudmFsdWUgPSAxO1xuXG4gICAgICAgICAgICBwYWNrZWRBbW91bnQuY2xhc3NMaXN0LmFkZChcImZvci13ZWlnaHRcIik7XG4gICAgICAgICAgICBwYWNrZWRBbW91bnQuY2xhc3NMaXN0LmFkZChcIm51bWJlci1pbnB1dFwiKTtcbiAgICAgICAgICAgIHBhY2tlZEFtb3VudC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBjZWxsNS5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWNvbFwiKTtcbiAgICAgICAgICAgIGxldCB0b3RhbExpbmVXZWlnaHQgPSBjcmVhdGVMaXN0SXRlbUlucHV0KFxuICAgICAgICAgICAgICAgIFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgXCJ0b3RhbExpbmVXZWlnaHRcIixcbiAgICAgICAgICAgICAgICBmaW5hbEksXG4gICAgICAgICAgICAgICAgXCJ0b3RhbF9saW5lX3dlaWdodFwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LnZhbHVlID0gMDtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgXCJkYXRhLWNvbHVtbi1uYW1lXCIsXG4gICAgICAgICAgICAgICAgXCJ0b3RhbF9saW5lX3dlaWdodFwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LnNldEF0dHJpYnV0ZShcInJlYWRvbmx5XCIsIHRydWUpO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJudW1iZXItaW5wdXRcIik7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC5jbGFzc0xpc3QuYWRkKFwiZm9yLXRvdGFsLWxpc3Qtd2VpZ2h0XCIpO1xuXG4gICAgICAgICAgICAvL2FwcGVuZCBpbnB1dHMgdG8gY2VsbHMuXG5cbiAgICAgICAgICAgIC8vIERlZmluZSB0aGUgU1ZHIG5hbWVzcGFjZVxuICAgICAgICAgICAgY29uc3Qgc3ZnTmFtZXNwYWNlID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuICAgICAgICAgICAgbGV0IGljb25DZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IFNWRyBlbGVtZW50XG4gICAgICAgICAgICBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOYW1lc3BhY2UsIFwic3ZnXCIpO1xuICAgICAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjE2XCIpO1xuICAgICAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIxNlwiKTtcbiAgICAgICAgICAgIGljb24uc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcImN1cnJlbnRDb2xvclwiKTtcbiAgICAgICAgICAgIGljb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJiaSBiaS1ncmlwLXZlcnRpY2FsXCIpO1xuICAgICAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDE2IDE2XCIpO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIDxwYXRoPiBlbGVtZW50XG4gICAgICAgICAgICBsZXQgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOYW1lc3BhY2UsIFwicGF0aFwiKTtcbiAgICAgICAgICAgIHBhdGguc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgICAgIFwiZFwiLFxuICAgICAgICAgICAgICAgIFwiTTcgMmExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBtMyAwYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgME03IDVhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbTMgMGExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBNNyA4YTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMG0zIDBhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbS0zIDNhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbTMgMGExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBtLTMgM2ExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBtMyAwYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMFwiXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIHBhdGggdG8gdGhlIFNWR1xuICAgICAgICAgICAgaWNvbi5hcHBlbmRDaGlsZChwYXRoKTtcblxuICAgICAgICAgICAgLy8gLy8gQXBwZW5kIHRoZSBTVkcgaWNvbiB0byB0aGUgY2VsbFxuICAgICAgICAgICAgaWNvbkNlbGwuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICAgICAgICAgIGNlbGwxLmFwcGVuZENoaWxkKGNvdW50ZXIpO1xuICAgICAgICAgICAgY2VsbDEuYXBwZW5kQ2hpbGQoaXRlbVVPTSk7XG4gICAgICAgICAgICAvLyBjZWxsMS5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgICAgIGNlbGwxLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIGNlbGwyLmFwcGVuZENoaWxkKGl0ZW1XZWlnaHQpO1xuXG4gICAgICAgICAgICBsZXQgc2VsZWN0Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGxldCBjYXRlZ29yeVNlbGVjdCA9IGdldENhdGVncm95U2VsZWN0KGZpbmFsSSwgZ3JvdXBDYXRlZ29yeSk7XG4gICAgICAgICAgICBzZWxlY3RDZWxsLmFwcGVuZChjYXRlZ29yeVNlbGVjdCk7XG5cbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKG96UmFkaW8pO1xuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQob3pSYWRpb0xhYmVsKTtcbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKGxic1JhZGlvKTtcbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKGxic1JhZGlvTGFiZWwpO1xuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQoZ3JSYWRpbyk7XG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChnclJhZGlvTGFiZWwpO1xuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQoa2dSYWRpbyk7XG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChrZ1JhZGlvTGFiZWwpO1xuXG5cblxuICAgICAgICAgICAgY2VsbDQuYXBwZW5kQ2hpbGQocGFja2VkQW1vdW50KTtcbiAgICAgICAgICAgIGNlbGw1LmFwcGVuZENoaWxkKHRvdGFsTGluZVdlaWdodCk7XG4gICAgICAgICAgICBsaW5lVW9tQ2VsbC5hcHBlbmRDaGlsZChyYWRpb0xhYmVsMyk7XG4gICAgICAgICAgICBjZWxsNi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgY2VsbHMgdG8gdGhlIHJvdy5cbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChpY29uQ2VsbCk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDEpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHNlbGVjdENlbGwpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwzKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsMik7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDQpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGw1KTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChsaW5lVW9tQ2VsbCk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDYpO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIHJvdyB0byB0aGUgdGFibGUuXG4gICAgICAgICAgICBpdGVtVGFibGUuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgICAgIC8vYWRkIGZ1bmN0aW9ucyB0byBjYWxjdWxhdGUgYW5kIGNvbnZlcnQgdG90YWwgd2VpZ2h0LlxuICAgICAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcldlaWdodENhbGMoZmluYWxJKTtcbiAgICAgICAgfVxuICAgICAgICBudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPSAxO1xuICAgIH07XG5cbiAgICB0aGlzLndpbmRvdy51cGRhdGVVT00gPSBmdW5jdGlvbiB1cGRhdGVVT00odmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBcInVzXCIpIHtcbiAgICAgICAgICAgIHVzUmFkaW9Ub01ldHJpYygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWV0cmljUmFkaW9Ub1VzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJXZWlnaHRDYWxjKHJvdykge1xuICAgICAgICBsZXQgbmVlZGVkRm9yV2VpZ2h0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yLXdlaWdodFwiKTtcbiAgICAgICAgbmVlZGVkRm9yV2VpZ2h0cy5mb3JFYWNoKGZ1bmN0aW9uIChuZWVkZWRGb3JXZWlnaHQpIHtcbiAgICAgICAgICAgIG5lZWRlZEZvcldlaWdodC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBnZXRMaW5lVG90YWxXZWlnaHQocm93KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLndpbmRvdy5nZXRMaW5lVG90YWxXZWlnaHQgPSBmdW5jdGlvbiBnZXRMaW5lVG90YWxXZWlnaHQoXG4gICAgICAgIHJvdyxcbiAgICAgICAgY29udmVydCA9IGZhbHNlXG4gICAgKSB7XG4gICAgICAgIGxldCB3ZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1XZWlnaHQtXCIgKyByb3cpLnZhbHVlO1xuICAgICAgICBsZXQgcGFja2VkQW1vdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWNrZWRBbW91bnQtXCIgKyByb3cpLnZhbHVlO1xuICAgICAgICBsZXQgdW9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b21cIik7XG4gICAgICAgIGxldCBsaW5lVG90YWxXZWlnaHRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgICBcInRvdGFsTGluZVdlaWdodC1cIiArIHJvd1xuICAgICAgICApO1xuXG4gICAgICAgIGxldCBsaW5lVG90YWwgPSAwO1xuICAgICAgICBsaW5lVG90YWwgPSArd2VpZ2h0ICogK3BhY2tlZEFtb3VudDtcbiAgICAgICAgbGluZVRvdGFsID0gbGluZVRvdGFsLnRvRml4ZWQoMykucmVwbGFjZSgvWy4sXTAwJC8sIFwiXCIpO1xuICAgICAgICBsaW5lVG90YWxXZWlnaHRFbGVtZW50LnZhbHVlID0gbGluZVRvdGFsO1xuXG4gICAgICAgIHVwZGF0ZUxpc3RJdGVtKGxpbmVUb3RhbFdlaWdodEVsZW1lbnQpO1xuICAgIH07XG4gICAgdGhpcy53aW5kb3cuY29udmVydE1lYXN1cmVtZW50ID0gZnVuY3Rpb24gY29udmVydE1lYXN1cmVtZW50KFxuICAgICAgICByb3csXG4gICAgICAgIHBhZ2VFbGVtZW50XG4gICAgKSB7XG4gICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdElkJykudmFsdWU7XG4gICAgICAgIGxldCAgdW9tRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tLVwiK3Jvdyk7XG4gICAgICAgIGxldCB1b20gPSB1b21FbGVtZW50LnZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZygndGVzdCB1b206ICcrdW9tKTtcblxuICAgICAgICAvLyBpZihsaXN0SWQgPT0gJ21hc3Rlcicpe1xuICAgICAgICAvLyAgICAgdW9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b20tXCIrcm93KS52YWx1ZTtcbiAgICAgICAgLy8gfWVsc2V7XG4gICAgICAgIC8vICAgICB1b20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbVwiKS52YWx1ZTtcbiAgICAgICAgLy8gfVxuICAgICAgICBsZXQgd2VpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtV2VpZ2h0LVwiICsgcm93KTtcbiAgICAgICAgbGV0IHBhY2tlZEFtb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFja2VkQW1vdW50LVwiICsgcm93KS52YWx1ZTtcbiAgICAgICAgbGV0IHRvdGFsV2VpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3RhbExpbmVXZWlnaHQtXCIgKyByb3cpO1xuICAgICAgICBsZXQgdG90YWxMaW5lV2VpZ2h0VmFsdWUgPSAwO1xuICAgICAgICBsZXQgd2VpZ2h0VmFsdWUgPSB3ZWlnaHQudmFsdWU7XG4gICAgICAgIGxldCBzbWFsbDtcbiAgICAgICAgbGV0IGxhcmdlO1xuICAgICAgICBsZXQgZWxlbWVudDtcbiAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lLXVvbS1sYWJlbC1cIiArIHJvdyk7XG4gICAgICAgIGxldCBjdXJyZW50VW9tID0gcGFnZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWN1cnJlbnQtdW9tJyk7XG4gICAgICAgIGxldCBjb2x1bW5OYW1lID0gcGFnZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbHVtbi1uYW1lJyk7XG4gICAgICAgIGxldCBsYWJlbEhUTUwgPSBjdXJyZW50VW9tLnRvVXBwZXJDYXNlKCk7XG5cblxuXG4gICAgICAgIGlmKHVvbSA9PT0gJycgJiYgY3VycmVudFVvbSA9PT0gJycpe1xuICAgICAgICAgICAgYWxlcnQoJ3VvbSBhbmQgY3VycmVudCBibGFuaycpO1xuICAgICAgICAgICAgdW9tRWxlbWVudC52YWx1ZSA9IChjb2x1bW5OYW1lID09PSAnaW5fZ3JhbXMnIHx8IGNvbHVtbk5hbWUgPT09ICdpbl9raWxvJykgPyAnbWV0cmljJyA6ICd1cyc7XG4gICAgICAgICAgICBsYWJlbEhUTUwgPSBjdXJyZW50VW9tLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICB3ZWlnaHRWYWx1ZSA9ICt3ZWlnaHRWYWx1ZTtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBwYWdlRWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh1b20gPT09IFwidXNcIiAmJiBwYWdlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJ1cy1yYWRpb1wiKSkge1xuICAgICAgICAgICAgYWxlcnQoJ3VvbSA9ICcrIHVvbSArICcgYW5kIG5vdCBtZXRyaWMgZWxlbWVudCcpO1xuICAgICAgICAgICAgc21hbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1vei1cIiArIHJvdyk7XG4gICAgICAgICAgICBsYXJnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tLWxicy1cIiArIHJvdyk7XG4gICAgICAgICAgICBpZiAoc21hbGwuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHdlaWdodFZhbHVlID0gK3dlaWdodFZhbHVlICogb3VuY2VDb252ZXJ0ZXI7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IHNtYWxsO1xuICAgICAgICAgICAgICAgIGxhYmVsSFRNTCA9IFwiT1pcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0VmFsdWUgPSArd2VpZ2h0VmFsdWUgLyBvdW5jZUNvbnZlcnRlcjtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gbGFyZ2U7XG4gICAgICAgICAgICAgICAgbGFiZWxIVE1MID0gXCJMQlNcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2UgaWYodW9tID09PSAnbWV0cmljJyAmJiBwYWdlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJtZXRyaWMtcmFkaW9cIikpIHtcbiAgICAgICAgICAgIGFsZXJ0KCd1b20gPSAnKyB1b20gKyAnIGFuZCBub3QgdXMgZWxlbWVudCcpO1xuICAgICAgICAgICAgc21hbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1ncmFtLVwiICsgcm93KTtcbiAgICAgICAgICAgIGxhcmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b20ta2ctXCIgKyByb3cpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dyYW0gY3VycmVudDogJysgc21hbGwuZ2V0QXR0cmlidXRlKCdkYXRhLWN1cnJlbnQtdW9tJykpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2tpbG8gY3VycmVudDogJysgbGFyZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLWN1cnJlbnQtdW9tJykpO1xuXG4gICAgICAgICAgICBpZiAoc21hbGwuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHdlaWdodFZhbHVlID0gK3dlaWdodFZhbHVlICogZ3JhbUNvbnZlcnRlcjtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gc21hbGw7XG4gICAgICAgICAgICAgICAgbGFiZWxIVE1MID0gXCJHXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdlaWdodFZhbHVlID0gK3dlaWdodFZhbHVlIC8gZ3JhbUNvbnZlcnRlcjtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gbGFyZ2U7XG4gICAgICAgICAgICAgICAgbGFiZWxIVE1MID0gXCJLR1wiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZih1b20gPT09IFwidXNcIiAmJiBwYWdlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJtZXRyaWMtcmFkaW9cIikpIHtcbiAgICAgICAgICAgIGFsZXJ0KCd1b20gPSAnKyB1b20gKyAnIGFuZCBJUyBtZXRyaWMgZWxlbWVudCcpO1xuICAgICAgICAgICAgc21hbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1ncmFtLVwiICsgcm93KTtcbiAgICAgICAgICAgIGxhcmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b20ta2ctXCIgKyByb3cpO1xuICAgICAgICAgICAgaWYgKHNtYWxsLmNoZWNrZWQgPT09IHRydWUpIHtcbi8vICAgICAgICAgICAgICAgICBjb25zdCBncmFtc1RvT3VuY2VDb252ZXJzaW9uRmFjdG9yID0gMC4wMzUyNzQ7XG4vLyBjb25zdCBvdW5jZXNUb0dyYW1zQ29udmVyc2lvbkZhY3RvciA9IDI4LjM0OTUyO1xuICAgICAgICAgICAgICAgIHdlaWdodFZhbHVlID0gK3dlaWdodFZhbHVlICogMTY7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IHNtYWxsO1xuICAgICAgICAgICAgICAgIGxhYmVsSFRNTCA9IFwiR1wiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3ZWlnaHRWYWx1ZSA9ICt3ZWlnaHRWYWx1ZSAvIDE2O1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBsYXJnZTtcbiAgICAgICAgICAgICAgICBsYWJlbEhUTUwgPSBcIkxCU1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgY29uc29sZS5sb2coJ2luIGVsc2U6Jyk7XG4gICAgICAgICAgIGNvbnNvbGUubG9nKCd1b206ICcrdW9tKTtcbiAgICAgICAgICAgY29uc29sZS5sb2coJ2N1cnJlbnQgdW9tOiAnK2N1cnJlbnRVb20pO1xuICAgICAgICAgICBjb25zb2xlLmxvZygnY29sdW1uOiAnK2NvbHVtbk5hbWUpO1xuICAgICAgICAgICBjb25zb2xlLmxvZygnY2xhc3MgbGlzdDogJysgSlNPTi5zdHJpbmdpZnkocGFnZUVsZW1lbnQuY2xhc3NMaXN0KSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ2h0bWwgbGFiZWw6ICcrbGFiZWxIVE1MKTtcbiAgICAgICAgcGFnZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWN1cnJlbnQtdW9tJywgbGFiZWxIVE1MLnRvTG93ZXJDYXNlKCkpO1xuXG4gICAgICAgIC8vIGlmICh1b20gPT09IFwidXNcIiApIHtcbiAgICAgICAgLy8gICAgIHNtYWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b20tb3otXCIgKyByb3cpO1xuICAgICAgICAvLyAgICAgbGFyZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1sYnMtXCIgKyByb3cpO1xuICAgICAgICAvLyAgICAgaWYgKHNtYWxsLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgLy8gICAgICAgICB3ZWlnaHRWYWx1ZSA9ICt3ZWlnaHRWYWx1ZSAqIDE2O1xuICAgICAgICAvLyAgICAgICAgIGVsZW1lbnQgPSBzbWFsbDtcbiAgICAgICAgLy8gICAgICAgICBsYWJlbEhUTUwgPSBcIk9aXCI7XG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgIHdlaWdodFZhbHVlID0gK3dlaWdodFZhbHVlIC8gMTY7XG4gICAgICAgIC8vICAgICAgICAgZWxlbWVudCA9IGxhcmdlO1xuICAgICAgICAvLyAgICAgICAgIGxhYmVsSFRNTCA9IFwiTEJTXCI7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICBzbWFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tLWdyYW0tXCIgKyByb3cpO1xuICAgICAgICAvLyAgICAgbGFyZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1rZy1cIiArIHJvdyk7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnZ3JhbSBjdXJyZW50OiAnKyBzbWFsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY3VycmVudC11b20nKSk7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygna2lsbyBjdXJyZW50OiAnKyBsYXJnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY3VycmVudC11b20nKSk7XG5cbiAgICAgICAgLy8gICAgIGlmIChzbWFsbC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgIC8vICAgICAgICAgd2VpZ2h0VmFsdWUgPSArd2VpZ2h0VmFsdWUgKiAxMDAwO1xuICAgICAgICAvLyAgICAgICAgIGVsZW1lbnQgPSBzbWFsbDtcbiAgICAgICAgLy8gICAgICAgICBsYWJlbEhUTUwgPSBcIkdcIjtcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgd2VpZ2h0VmFsdWUgPSArd2VpZ2h0VmFsdWUgLyAxMDAwO1xuICAgICAgICAvLyAgICAgICAgIGVsZW1lbnQgPSBsYXJnZTtcbiAgICAgICAgLy8gICAgICAgICBsYWJlbEhUTUwgPSBcIktHXCI7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICB0b3RhbExpbmVXZWlnaHRWYWx1ZSA9ICt3ZWlnaHRWYWx1ZSAqICtwYWNrZWRBbW91bnQ7XG4gICAgICAgIHdlaWdodC52YWx1ZSA9IHdlaWdodFZhbHVlLnRvRml4ZWQoMykucmVwbGFjZSgvWy4sXTAwJC8sIFwiXCIpO1xuICAgICAgICB0b3RhbFdlaWdodC52YWx1ZSA9IHRvdGFsTGluZVdlaWdodFZhbHVlXG4gICAgICAgICAgICAudG9GaXhlZCgzKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1suLF0wMCQvLCBcIlwiKTtcbiAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gbGFiZWxIVE1MO1xuICAgICAgICB1cGRhdGVMaXN0SXRlbShlbGVtZW50KTtcbiAgICAgICAgdXBkYXRlTGlzdEl0ZW0od2VpZ2h0KTtcbiAgICAgICAgdXBkYXRlTGlzdEl0ZW0odG90YWxXZWlnaHQpO1xuICAgICAgICB1cGRhdGVMaXN0SXRlbSh1b21FbGVtZW50KTtcbiAgICB9O1xuICAgIHRoaXMud2luZG93LmFkZENhdGVnb3J5R3JvdXAgPSBmdW5jdGlvbiBhZGRDYXRlZ29yeUdyb3VwKGxpc3RJZCxjYXRlZ29yeSwgbGlzdFVPTSwgdXNlcklkKXtcblxuICAgICAgICBsZXQgY29sdW1uTmFtZTtcbiAgICAgICAgaWYobGlzdFVPTSA9PT0gJ3VzJyl7XG4gICAgICAgICAgICBjb2x1bW5OYW1lID0gJ2luX291bmNlcyc7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29sdW1uTmFtZSA9ICdpbl9ncmFtcyc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGF0YSA9IGdldEJvb2xlYW5EYXRhKGNvbHVtbk5hbWUpO1xuICAgICAgICBkYXRhWydsaXN0X2lkJ10gPSBsaXN0SWQ7XG4gICAgICAgIGRhdGFbJ3VzZXJfaWQnXSA9IHVzZXJJZDtcbiAgICAgICAgZGF0YVsnaXRlbV9uYW1lJ10gPSAnJztcbiAgICAgICAgZGF0YVsnaXRlbV93ZWlnaHQnXSA9IDA7XG4gICAgICAgIGRhdGFbJ2Ftb3VudCddID0gMTtcbiAgICAgICAgZGF0YVsnaXRlbV9jYXRlZ29yeSddID0gY2F0ZWdvcnk7XG4gICAgICAgIGxldCB1cmwgPSAnL2xpc3QtaXRlbSdcblxuICAgICAgICBheGlvc1xuICAgICAgICAucG9zdCh1cmwsIGRhdGEpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIHJlcyA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gJzEnKXtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGFsZXJ0KHJlcy5tc2cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG5cbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcblxuICAgICAgICB9KTtcblxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRCb29sZWFuRGF0YShjb2x1bW5OYW1lKSB7XG4gICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgIGRhdGFbXCJpbl9vdW5jZXNcIl0gPSBmYWxzZTtcbiAgICAgICAgZGF0YVtcImluX2xic1wiXSA9IGZhbHNlO1xuICAgICAgICBkYXRhW1wiaW5fZ3JhbXNcIl0gPSBmYWxzZTtcbiAgICAgICAgZGF0YVtcImluX2tpbG9zXCJdID0gZmFsc2U7XG4gICAgICAgIHN3aXRjaCAoY29sdW1uTmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcImluX291bmNlc1wiOlxuICAgICAgICAgICAgICAgIGRhdGFbXCJpbl9vdW5jZXNcIl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImluX2xic1wiOlxuICAgICAgICAgICAgICAgIGRhdGFbXCJpbl9sYnNcIl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImluX2dyYW1zXCI6XG4gICAgICAgICAgICAgICAgZGF0YVtcImluX2dyYW1zXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJpbl9raWxvc1wiOlxuICAgICAgICAgICAgICAgIGRhdGFbXCJpbl9raWxvc1wiXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICB0aGlzLndpbmRvdy51cGRhdGVMaXN0SXRlbSA9IGZ1bmN0aW9uIHVwZGF0ZUxpc3RJdGVtKGVsZW1lbnQpIHtcbiAgICAgICAgbGV0IGNvbHVtbk5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uLW5hbWVcIik7XG4gICAgICAgIGxldCB2YWx1ZSA9IGVsZW1lbnQudmFsdWU7XG4gICAgICAgIGxldCBpZCA9IGVsZW1lbnQuaWQ7XG4gICAgICAgIGxldCBpZEFyciA9IGlkLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgbGV0IGFyckxlbmd0aCA9IGlkQXJyLmxlbmd0aDtcbiAgICAgICAgbGV0IHJvdyA9IGlkQXJyW2Fyckxlbmd0aCAtIDFdO1xuICAgICAgICBsZXQgaXRlbUlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZC1cIiArIHJvdyk7XG4gICAgICAgIGxldCBpdGVtSWRWYWx1ZSA9IGl0ZW1JZC52YWx1ZTtcbiAgICAgICAgbGV0IGxpc3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdElkXCIpLnZhbHVlO1xuICAgICAgICBsZXQgdXJsID0gXCIvbGlzdC1pdGVtL1wiICsgaXRlbUlkVmFsdWU7XG4gICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgIGxldCB1c2VySWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJJZFwiKS52YWx1ZTtcblxuICAgICAgICBkYXRhW2NvbHVtbk5hbWVdID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKGNvbHVtbk5hbWUuc3Vic3RyaW5nKDAsIDMpID09PSBcImluX1wiKSB7XG4gICAgICAgICAgICBkYXRhID0gZ2V0Qm9vbGVhbkRhdGEoY29sdW1uTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW1wibGlzdF9pZFwiXSA9IGxpc3RJZDtcbiAgICAgICAgZGF0YVtcInVzZXJfaWRcIl0gPSB1c2VySWQ7XG4gICAgICAgIGRhdGFbXCJpZFwiXSA9IGl0ZW1JZFZhbHVlO1xuXG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdCh1cmwsIGRhdGEsIGl0ZW1JZClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVzIGZyb20gdXBkYXRlIGZvciBtYXN0ZXI6ICcrSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChcIkZhaWxlZCB0byB1cGRhdGUgbGlzdCBpdGVtLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgaWYobGlzdElkICE9PSAnbWFzdGVyJyl7XG4gICAgICAgICAgICB1cGRhdGVUb3RhbExpc3RXZWlnaHRzKCk7XG4gICAgICAgIH1cblxuICAgIH07XG4gICAgZnVuY3Rpb24gdXBkYXRlVG90YWxMaXN0V2VpZ2h0cygpIHtcbiAgICAgICAgbGV0IHdlaWdodHNGb3JQVyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yLXRvdGFsLWxpc3Qtd2VpZ2h0XCIpO1xuICAgICAgICBsZXQgYmFzZVdlaWdodCA9IDA7XG4gICAgICAgIGxldCB0b3RhbFBhY2tXZWlnaHQgPSAwO1xuICAgICAgICBsZXQgbWF4UGFja1dlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWF4UGFja1dlaWdodFwiKS52YWx1ZTtcbiAgICAgICAgbGV0IGNsYXNzV2FybmluZ1ZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsYXNzV2FybmluZ1ZhbHVlJykudmFsdWU7XG4gICAgICAgIGxldCB1b21UZXh0ID0gXCJMQlNcIjtcbiAgICAgICAgd2VpZ2h0c0ZvclBXLmZvckVhY2goZnVuY3Rpb24gKHdlaWdodEZvclBXKSB7XG4gICAgICAgICAgICBsZXQgaWQgPSB3ZWlnaHRGb3JQVy5pZDtcbiAgICAgICAgICAgIGxldCBpZEFyciA9IGlkLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgICAgIGxldCBhcnJMZW5ndGggPSBpZEFyci5sZW5ndGg7XG4gICAgICAgICAgICBsZXQgcm93ID0gaWRBcnJbYXJyTGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBsZXQgcGFja2VkQW1vdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgICAgICAgXCJwYWNrZWRBbW91bnQtXCIgKyByb3dcbiAgICAgICAgICAgICkudmFsdWU7XG4gICAgICAgICAgICBsZXQgY29udmVydGVyID0gMTtcbiAgICAgICAgICAgIGxldCByb3dXZWlnaHQgPSAwO1xuICAgICAgICAgICAgbGV0IGl0ZW1XZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1XZWlnaHQtXCIgKyByb3cpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IHVvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tXCIpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGl0ZW1DYXRlZ29yeUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgICAgICBcIml0ZW1DYXRlZ29yeS1cIiArIHJvd1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbGV0IGl0ZW1DYXRlZ29yeSA9IFwiXCI7XG4gICAgICAgICAgICBpZiAoaXRlbUNhdGVnb3J5RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGl0ZW1DYXRlZ29yeSA9IGl0ZW1DYXRlZ29yeUVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpdGVtQ2F0ZWdvcnkgPT09IHVuZGVmaW5lZCB8fCBpdGVtQ2F0ZWdvcnkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpdGVtQ2F0ZWdvcnkgPSBcIlwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodW9tID09PSBcInVzXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b20tb3otXCIgKyByb3cpLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udmVydGVyID0gb3VuY2VDb252ZXJ0ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1b21UZXh0ID0gXCJLR1wiO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b20tZ3JhbS1cIiArIHJvdykuY2hlY2tlZCA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBjb252ZXJ0ZXIgPSBncmFtQ29udmVydGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcm93V2VpZ2h0ID0gK3BhY2tlZEFtb3VudCAqICgraXRlbVdlaWdodCAvIGNvbnZlcnRlcik7XG4gICAgICAgICAgICB0b3RhbFBhY2tXZWlnaHQgPSB0b3RhbFBhY2tXZWlnaHQgKyByb3dXZWlnaHQ7XG5cbiAgICAgICAgICAgIGlmIChpdGVtQ2F0ZWdvcnkgIT09IFwiY29uc3VtYWJsZXNcIikge1xuICAgICAgICAgICAgICAgIGJhc2VXZWlnaHQgPSBiYXNlV2VpZ2h0ICsgcm93V2VpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoK2Jhc2VXZWlnaHQgPiArbWF4UGFja1dlaWdodCkge1xuICAgICAgICAgICAgbGV0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlaWdodFdhcm5pbmctZGl2XCIpO1xuICAgICAgICAgICAgZGl2RWxlbWVudC5pbm5lclRleHQgPVwiQmFzZSB3ZWlnaHQgKFwiICsgIGJhc2VXZWlnaHQudG9GaXhlZCgzKSArXCIgXCIgK3VvbVRleHQgK1wiKSBleGNlZWRlcyB0aGUgd2VpZ2h0IGZvciB0aGUgJ1wiICtjbGFzc1dhcm5pbmdWYWx1ZStcIicgc3R5bGUgb2YgaGlraW5nLlwiO1xuXG4gICAgICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlaWdodFdhcm5pbmctZGl2XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFzZVdlaWdodFwiKS52YWx1ZSA9IGJhc2VXZWlnaHQudG9GaXhlZCgzKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3RhbFBhY2tXZWlnaHRcIikudmFsdWUgPVxuICAgICAgICAgICAgdG90YWxQYWNrV2VpZ2h0LnRvRml4ZWQoMyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxpc3RJdGVtSW5wdXQoXG4gICAgICAgIHR5cGUsXG4gICAgICAgIG5hbWVCYXNlLFxuICAgICAgICByb3csXG4gICAgICAgIGNvbHVtbk5hbWUsXG4gICAgICAgIGxpc3RlbiA9IHRydWVcbiAgICApIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGVsZW1lbnQudHlwZSA9IHR5cGU7XG4gICAgICAgIGVsZW1lbnQubmFtZSA9IG5hbWVCYXNlICsgXCJbXVwiO1xuICAgICAgICBlbGVtZW50LmlkID0gbmFtZUJhc2UgKyBcIi1cIiArIHJvdztcbiAgICAgICAgZWxlbWVudC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4tbmFtZVwiLCBjb2x1bW5OYW1lKTtcbiAgICAgICAgaWYobGlzdGVuKXtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlTGlzdEl0ZW0oZWxlbWVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Q2F0ZWdyb3lTZWxlY3Qocm93LCBncm91cENhdGVnb3J5ID0gbnVsbCwgbGlzdGVuID0gdHJ1ZSkge1xuICAgIGNvbnNvbGUubG9nKCdncm91cCBjYXQgaW4gZ2V0IHNlbGVjdDogJysgZ3JvdXBDYXRlZ29yeSlcbiAgICAgICAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgIHNlbGVjdC5pZCA9IFwiSXRlbUNhdGVnb3J5LVwiICsgcm93O1xuICAgICAgICBzZWxlY3QubmFtZSA9IFwiaXRlbUNhdGVnb3J5LVwiICsgcm93O1xuICAgICAgICBzZWxlY3Quc2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4tbmFtZVwiLCBcIml0ZW1fY2F0ZWdvcnlcIik7XG4gICAgICAgIHNlbGVjdC5jbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiO1xuXG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgICBvcHRpb24udGV4dCA9IFwiQ2hvb3NlXCI7XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICBsZXQgb3B0aW9uTGlzdDtcblxuICAgICAgICBvcHRpb25MaXN0ID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcIi9saXN0LWl0ZW0tY2F0ZWdvcmllc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIGVycm9yXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFRvIHVzZSB0aGUgZnVuY3Rpb24gYW5kIGhhbmRsZSB0aGUgcmVzcG9uc2UgZGF0YVxuICAgICAgICBvcHRpb25MaXN0KCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgLy8gRG8gc29tZXRoaW5nIHdpdGggdGhlIHJlc3BvbnNlIGRhdGFcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGRhdGFbaV0udmFsdWU7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSBkYXRhW2ldLmNhdGVnb3J5O1xuICAgICAgICAgICAgICAgIGlmIChncm91cENhdGVnb3J5ICE9IG51bGwgJiYgZGF0YVtpXS52YWx1ZSA9PT0gZ3JvdXBDYXRlZ29yeSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmKGxpc3Rlbil7XG4gICAgICAgICAgICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlTGlzdEl0ZW0oc2VsZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4gc2VsZWN0O1xuICAgIH1cbiAgICBmdW5jdGlvbiBtZXRyaWNSYWRpb1RvVXMoKSB7XG4gICAgICAgIGxldCBpbnB1dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZXRyaWMtcmFkaW9cIik7XG4gICAgICAgIGlucHV0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXRFbGVtZW50KSB7XG4gICAgICAgICAgICBsZXQgaWRBcnIgPSBpbnB1dEVsZW1lbnQuaWQuc3BsaXQoXCItXCIpO1xuICAgICAgICAgICAgbGV0IHVvbSA9IGlkQXJyWzFdO1xuICAgICAgICAgICAgbGV0IHJvdyA9IGlkQXJyW2lkQXJyLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRUeXBlID0gaW5wdXRFbGVtZW50LnR5cGU7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFRhZyA9IGlucHV0RWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIGxldCBuZXdFbGVtZW50O1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudFR5cGUgPT09IFwicmFkaW9cIiAmJiB1b20gPT09IFwiZ3JhbVwiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZVJhZGlvKFwiaW5fb3VuY2VzXCIsIFwiT1pcIiwgXCJvelwiLCByb3csIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VHlwZSA9PT0gXCJyYWRpb1wiICYmIHVvbSA9PT0gXCJrZ1wiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZVJhZGlvKFwiaW5fbGJzXCIsIFwiTEJTXCIsIFwibGJzXCIsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUYWcgPT09IFwibGFiZWxcIiAmJiB1b20gPT09IFwiZ3JhbVwiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZUxhYmVsKFwiT1pcIiwgXCJ1b20tb3otXCIgKyByb3csIFwib3pcIiwgcm93KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFRhZyA9PT0gXCJsYWJlbFwiICYmIHVvbSA9PT0gXCJrZ1wiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZUxhYmVsKFwiTEJTXCIsIFwidW9tLWxicy1cIiArIHJvdywgXCJsYnNcIiwgcm93KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5ld0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQoXG4gICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1c1JhZGlvVG9NZXRyaWMoKSB7XG4gICAgICAgIGxldCBpbnB1dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi51cy1yYWRpb1wiKTtcbiAgICAgICAgaW5wdXRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxldCBpZEFyciA9IGlucHV0RWxlbWVudC5pZC5zcGxpdChcIi1cIik7XG4gICAgICAgICAgICBsZXQgdW9tID0gaWRBcnJbMV07XG4gICAgICAgICAgICBsZXQgcm93ID0gaWRBcnJbaWRBcnIubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBsZXQgZWxlbWVudFR5cGUgPSBpbnB1dEVsZW1lbnQudHlwZTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50VGFnID0gaW5wdXRFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGxldCBuZXdFbGVtZW50O1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudFR5cGUgPT09IFwicmFkaW9cIiAmJiB1b20gPT09IFwib3pcIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVSYWRpbyhcImluX2dyYW1zXCIsIFwiR1JcIiwgXCJncmFtXCIsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUeXBlID09PSBcInJhZGlvXCIgJiYgdW9tID09PSBcImxic1wiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZVJhZGlvKFwiaW5fa2lsb3NcIiwgXCJLR1wiLCBcImtnXCIsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUYWcgPT09IFwibGFiZWxcIiAmJiB1b20gPT09IFwib3pcIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVMYWJlbChcIkdcIiwgXCJ1b20tZ3JhbS1cIiArIHJvdywgXCJncmFtXCIsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUYWcgPT09IFwibGFiZWxcIiAmJiB1b20gPT09IFwibGJzXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlTGFiZWwoXCJLR1wiLCBcInVvbS1rZy1cIiArIHJvdywgXCJrZ1wiLCByb3cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmV3RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZChcbiAgICAgICAgICAgICAgICAgICAgbmV3RWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJhZGlvKGRhdGFDb2x1bW5OYW1lLCBsYWJlbCwgdW9tLCByb3cpIHtcbiAgICAgICAgbGV0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICByYWRpby5jbGFzc05hbWUgPVxuICAgICAgICAgICAgXCJmb3JtLWNoZWNrLWlucHV0XCIgK1xuICAgICAgICAgICAgKHVvbSA9PT0gXCJncmFtXCIgfHwgdW9tID09PSBcImtnXCIgPyBcIiBtZXRyaWMtcmFkaW9cIiA6IFwiIHVzLXJhZGlvXCIpO1xuICAgICAgICByYWRpby50eXBlID0gXCJyYWRpb1wiO1xuICAgICAgICByYWRpby5uYW1lID0gXCJ1b20tXCIgKyByb3cgKyBcIltdXCI7XG4gICAgICAgIHJhZGlvLmlkID0gXCJ1b20tXCIgKyB1b20gKyBcIi1cIiArIHJvdztcbiAgICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4tbmFtZVwiLCBkYXRhQ29sdW1uTmFtZSk7XG4gICAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZShcImRhdGEtY3VycmVudC11b21cIiwgJycpO1xuXG4gICAgICAgIC8vIGlmICh1b20gPT09IFwiZ3JhbVwiICkge1xuICAgICAgICAvLyAgICAgcmFkaW8uY2hlY2tlZCA9IHRydWU7XG5cbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiAodW9tID09PSBcImdyYW1cIiB8fCB1b20gPT09IFwib3pcIikge1xuICAgICAgICAvLyAgICAgcmFkaW8uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIC8vIH1cbiAgICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb252ZXJ0TWVhc3VyZW1lbnQocm93LHJhZGlvKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByYWRpbztcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlTGFiZWwoaW5uZXJIdG1sLCBodG1sRm9yLCB1b20sIHJvdywgbGluZUxhYmVsID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBsYWJlbC5jbGFzc05hbWUgPVwiZm9ybS1jaGVjay1sYWJlbFwiO1xuXG4gICAgICAgIGlmKHVvbSAhPT0gJycpe1xuICAgICAgICAgICAgbGV0IHVvbUNsYXNzID0gKHVvbSA9PT0gXCJncmFtXCIgfHwgdW9tID09PSBcImtnXCIgPyBcIm1ldHJpYy1yYWRpb1wiIDogXCJ1cy1yYWRpb1wiKTtcbiAgICAgICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQodW9tQ2xhc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFiZWwuaHRtbEZvciA9IGh0bWxGb3I7XG4gICAgICAgIGxhYmVsLmlubmVySFRNTCA9IGlubmVySHRtbDtcbiAgICAgICAgaWYgKCFsaW5lTGFiZWwpIHtcbiAgICAgICAgICAgIGxhYmVsLmlkID0gXCJ1b20tXCIgKyB1b20gKyBcIi1sYWJlbC1cIiArIHJvdztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhYmVsLmlkID0gXCJsaW5lLXVvbS1sYWJlbC1cIiArIHJvdztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9XG5cbiAgICB0aGlzLndpbmRvdy51cGRhdGVMaXN0ID0gZnVuY3Rpb24gdXBkYXRlTGlzdChlbGVtZW50LCBsaXN0SWQpIHtcbiAgICAgICAgbGV0IGNvbHVtbk5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uLW5hbWVcIik7XG4gICAgICAgIGxldCB2YWx1ZSA9IGVsZW1lbnQudmFsdWU7XG4gICAgICAgIGxldCB1cmwgPSBcIi9nZWFyLWxpc3QvXCIgKyBsaXN0SWQ7XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgZGF0YVtjb2x1bW5OYW1lXSA9IHZhbHVlO1xuXG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdCh1cmwsIGRhdGEsIGxpc3RJZClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBhbGVydChyZXMuZGF0YS5tc2cpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJGYWlsZWQgdG8gdXBkYXRlIGxpc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIGlmIChjb2x1bW5OYW1lID09PSBcInNvcnRcIiB8fCBjb2x1bW5OYW1lID09PSBcImxpc3RfY2xhc3NcIiB8fCBjb2x1bW5OYW1lID09PSAnbGlzdF9pdGVtcycpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW0tY29sbGFwc2libGUtaGVhZGVyXCIpO1xuXG4gICAgaGVhZGVycy5mb3JFYWNoKChoZWFkZXIpID0+IHtcbiAgICAgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gaGVhZGVyLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgICAgIGNvbnN0IGFycm93ID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbS1hcnJvd1wiKTtcbiAgICAgICAgICAgIGlmIChjb250ZW50LmNsYXNzTGlzdC5jb250YWlucyhcIm9wZW5cIikpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLnBhZGRpbmcgPSBcIjAgMTBweFwiO1xuICAgICAgICAgICAgICAgIGFycm93LmlubmVySFRNTCA9IFwiJiM5NjYwXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBjb250ZW50LnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLnBhZGRpbmcgPSBcIjEwcHhcIjtcbiAgICAgICAgICAgICAgICBhcnJvdy5pbm5lckhUTUwgPSBcIiYjOTY1MFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGxldCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI21hc3Rlci1pdGVtLXRhYmxlIGlucHV0XCIpO1xuXG4gICAgaW5wdXRzLmZvckVhY2goZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICAgIGlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIGxldCBsaXN0Q2hhcnRidG4gPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0Q2hhcnRCdG5cIik7XG4gICAgaWYobGlzdENoYXJ0YnRuICE9PSBudWxsKXtcbiAgICAgICAgZG9jdW1lbnQgLmdldEVsZW1lbnRCeUlkKFwibGlzdENoYXJ0QnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgbGlzdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0SWRcIikudmFsdWU7XG4gICAgICAgICAgICBsZXQgdXJsID0gXCIvZ2Vhci1saXN0LWFuYWx5dGljcy9cIiArIGxpc3RJZDtcblxuICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAuZ2V0KHVybClcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGFydFN0YXR1cyA9IENoYXJ0LmdldENoYXJ0KFwiZ2VhckNoYXJ0XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFydFN0YXR1cyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0U3RhdHVzLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2VhckNoYXJ0XCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2hhcnREYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YS5jaGFydERhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkb3VnaG51dFwiLCAvLyBDaGFydCB0eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiBjaGFydERhdGEubGFiZWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxhYmVsOiBsaXN0TmFtZSArICdCcmVhayBEb3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGNoYXJ0RGF0YS53ZWlnaHRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjaGFydERhdGEuY29sb3JzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Zlck9mZnNldDogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1dG91dDogNDUsIC8vIEFkanVzdCB0aGUgY3V0b3V0IHBlcmNlbnRhZ2UgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogMTUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YWxhYmVsczogZmFsc2UsIC8vIFJlbW92aW5nIHRoaXMgbGluZSBzaG93cyB0aGUgZGF0YWxhYmVscyBhZ2FpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVSb3RhdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVTY2FsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgYmFzZVdlaWdodCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2VXZWlnaHRcIikudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0b3RhbFBhY2tXZWlnaHQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3RhbFBhY2tXZWlnaHRcIikudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxCYXNlV2VpZ2h0XCIpLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VXZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxUb3RhbFdlaWdodFwiKS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFBhY2tXZWlnaHQ7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgIH1cbiAgICB0aGlzLndpbmRvdy5zaG93Q29udnJzaW9uQWxlcnQgPSBmdW5jdGlvbiBzaG93Q29udnJzaW9uQWxlcnQoKXtcbiAgICAgICAgYWxlcnQoJ0NoYW5naW5nIHRoaXMgdmFsdWUgd2lsbCBhbHNvIHVwZGF0ZSB0aGUgdW5pdHMgb2YgbWVhc3VyZSBhbmQgYXNzb2NpYXRlZCB2YWx1ZXMgZm9yIGFueSBpdGVtIG9uIHRoaXMgZ2VhciBsaXN0LicpO1xuICAgIH1cblxuXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNvcnRhYmxlXCIpLmZvckVhY2goZnVuY3Rpb24gKHRhYmxlKSB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5SWQgPSB0YWJsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNhdGVnb3J5LWlkXCIpO1xuXG4gICAgICAgIG5ldyBTb3J0YWJsZSh0YWJsZS5xdWVyeVNlbGVjdG9yKFwidGJvZHlcIiksIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogMTUwLFxuICAgICAgICAgICAgb25FbmQ6IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIG5ldyBvcmRlciBvZiBpdGVtc1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yZGVyZWRJZHMgPSBbXTtcbiAgICAgICAgICAgICAgICB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwidHJcIikuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICAgICAgICAgIG9yZGVyZWRJZHMucHVzaChyb3cuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBTZW5kIHRoZSBuZXcgb3JkZXIgdG8gdGhlIHNlcnZlciB2aWEgQUpBWFxuICAgICAgICAgICAgICAgIHVwZGF0ZUl0ZW1PcmRlcihjYXRlZ29yeUlkLCBvcmRlcmVkSWRzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIHVwZGF0ZUl0ZW1PcmRlcihjYXRlZ29yeUlkLCBvcmRlcmVkSWRzKSB7XG5cbiAgICAgICAgbGV0IGxpc3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdElkXCIpLnZhbHVlO1xuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBcIlgtQ1NSRi1UT0tFTlwiOiBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJylcbiAgICAgICAgICAgICAgICAuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKSxcbiAgICAgICAgICAgIGNhdGVnb3J5X2lkOiBjYXRlZ29yeUlkLFxuICAgICAgICAgICAgb3JkZXJlZF9pZHM6IG9yZGVyZWRJZHMsXG4gICAgICAgICAgICBsaXN0X2lkOiBsaXN0SWQsXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHVybCA9IFwiL3VwZGF0ZS1saXN0LW9yZGVyXCI7XG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdCh1cmwsIGRhdGEpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cyAhPSBcIjFcIikge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChyZXMuZGF0YS5tc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBsZXQgc29ydGluZ1NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydEJ5XCIpO1xuICAgICAgICBsZXQgb3B0cyA9IHNvcnRpbmdTZWxlY3Qub3B0aW9ucy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0czsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc29ydGluZ1NlbGVjdC5vcHRpb25zW2ldLnZhbHVlID09IFwiZHJhZ19kcm9wXCIpIHtcbiAgICAgICAgICAgICAgICBzb3J0aW5nU2VsZWN0Lm9wdGlvbnNbaV0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHBhcmVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJlbnQtY29udGFpbmVyJyk7XG5cbiAgICBpZihwYXJlbnRDb250YWluZXIgIT09IG51bGwgJiYgcGFyZW50Q29udGFpbmVyICE9PSB1bmRlZmluZWQpe1xuICAgICAgICBTb3J0YWJsZS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcmVudC1jb250YWluZXInKSwge1xuICAgICAgICAgICAgYW5pbWF0aW9uOiAxNTAsXG4gICAgICAgICAgICBoYW5kbGU6ICcuaXRlbS1jb2xsYXBzaWJsZS1oZWFkZXInLFxuICAgICAgICAgICAgZ2hvc3RDbGFzczogJ3NvcnRhYmxlLWdob3N0JyxcbiAgICAgICAgICAgIG9uRW5kOiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAgICAgLy8gQWZ0ZXIgc29ydGluZyBpcyBjb21wbGV0ZWQsIHVwZGF0ZSB0aGUgcG9zaXRpb25zIGluIHRoZSBkYXRhYmFzZVxuICAgICAgICAgICAgICAgIHVwZGF0ZUNhdGVnb3J5T3JkZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNhdGVnb3J5T3JkZXIoKSB7XG5cbiAgICAgICAgY29uc3QgbmV3T3JkZXIgPSBbXTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyYWdnYWJsZS1jb250YWluZXInKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuXG4gICAgICAgICAgICBuZXdPcmRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICBpdGVtX2NhdGVnb3J5OiBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1jYXRlZ29yeS12YWx1ZScpLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5X29yZGVyOiBpbmRleFxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdXJsID0gXCIvdXBkYXRlLWNhdGVyb2dyeS1vcmRlclwiO1xuICAgICAgICBsZXQgbGlzdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0SWRcIikudmFsdWU7XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIFwiWC1DU1JGLVRPS0VOXCI6IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKVxuICAgICAgICAgICAgICAgIC5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpLFxuICAgICAgICAgICAgY2F0ZWdvcnlfb3JkZXI6IG5ld09yZGVyLFxuICAgICAgICAgICAgbGlzdF9pZDogbGlzdElkLFxuICAgICAgICB9O1xuICAgICAgICAvL2JyZWFrIG91dCBwb3N0cyBhbmQgZ2V0IGNhbGxzIHRvIG93biBmdW5jdGlvbnNcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC5wb3N0KHVybCwgZGF0YSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgIT0gXCIxXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQocmVzLmRhdGEubXNnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG59KTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG53aW5kb3cuYXhpb3MgPSBheGlvcztcblxud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJNb2RhbCIsIkNoYXJ0IiwiU29ydGFibGUiLCJib290c3RyYXAiLCJyZXF1aXJlIiwib3VuY2VDb252ZXJ0ZXIiLCJncmFtQ29udmVydGVyIiwiZ3JhbXNUb091bmNlQ29udmVyc2lvbkZhY3RvciIsIm91bmNlc1RvR3JhbXNDb252ZXJzaW9uRmFjdG9yIiwia2lsb1RvUG91bmRDb252ZXJzaW9GYWN0b3IiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2hvd1Bhc3N3b3JkIiwiaWQiLCJwYXNzd29yZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRNYXN0ZXJMaXN0SXRlbSIsIm51bWJlck9mSXRlbXNUb0FkZCIsImxpbmVzVG9BZGQiLCJsaXN0QnlJdGVtcyIsImxpc3RlbiIsIml0ZW1UYWJsZSIsInJvdyIsImNyZWF0ZUVsZW1lbnQiLCJjZWxsMSIsIml0ZW1OYW1lIiwiY3JlYXRlTGlzdEl0ZW1JbnB1dCIsInBsYWNlaG9sZGVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2VsbDYiLCJkZWxldGVCdG4iLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiLCJjZWxsMiIsIml0ZW1XZWlnaHQiLCJzdHlsZSIsIndpZHRoIiwiY2VsbDMiLCJzZWxlY3QiLCJzZXRBdHRyaWJ1dGUiLCJvek9wdGlvbiIsImxic09wdGlvbiIsImdyT3B0aW9uIiwia2dPcHRpb24iLCJ0ZXh0IiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3RDZWxsIiwiY2F0ZWdvcnlTZWxlY3QiLCJnZXRDYXRlZ3JveVNlbGVjdCIsImFwcGVuZCIsImFzc2lnblRvR2Vhckxpc3QiLCJpdGVtSWQiLCJsaXN0SWQiLCJjb25zb2xlIiwibG9nIiwidXJsIiwiZGF0YSIsImxpc3RfaWQiLCJheGlvcyIsInBvc3QiLCJyZXNwb25zZSIsInN0YXR1cyIsImFsZXJ0IiwibXNnIiwiZXJyb3IiLCJ1cGRhdGVTZXNzaW9uRGF0YSIsImVsZW1lbnQiLCJjb2x1bW5OYW1lIiwiZ2V0QXR0cmlidXRlIiwibG9jYXRpb24iLCJyZWxvYWQiLCJhZGRMaXN0SXRlbSIsImNhdGVnb3J5Y291bnRlciIsInVuZGVmaW5lZCIsImdyb3VwQ2F0ZWdvcnkiLCJfbG9vcCIsImxpc3RVT00iLCJmaW5hbElFbGVtZW50IiwidGFibGVDYXRlZ29yeSIsInVzZXJJZCIsImZpbmFsSSIsImNlbGwwIiwic2NvcGUiLCJjb3VudGVyIiwiaXRlbVVPTSIsInVwZGF0ZUl0ZW0iLCJfcmVmIiwiX2NhbGxlZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJ0MCIsIm5ld0lkIiwibGluZVVvbUNlbGwiLCJvelJhZGlvIiwiY3JlYXRlUmFkaW8iLCJvelJhZGlvTGFiZWwiLCJjcmVhdGVMYWJlbCIsImxic1JhZGlvIiwibGJzUmFkaW9MYWJlbCIsImdyUmFkaW8iLCJnclJhZGlvTGFiZWwiLCJrZ1JhZGlvIiwia2dSYWRpb0xhYmVsIiwicmFkaW9MYWJlbDMiLCJjZWxsNCIsInBhY2tlZEFtb3VudCIsImNlbGw1IiwidG90YWxMaW5lV2VpZ2h0Iiwic3ZnTmFtZXNwYWNlIiwiaWNvbkNlbGwiLCJpY29uIiwiY3JlYXRlRWxlbWVudE5TIiwicGF0aCIsImFkZEV2ZW50TGlzdGVuZXJXZWlnaHRDYWxjIiwidXBkYXRlVU9NIiwidXNSYWRpb1RvTWV0cmljIiwibWV0cmljUmFkaW9Ub1VzIiwibmVlZGVkRm9yV2VpZ2h0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuZWVkZWRGb3JXZWlnaHQiLCJnZXRMaW5lVG90YWxXZWlnaHQiLCJjb252ZXJ0Iiwid2VpZ2h0IiwidW9tIiwibGluZVRvdGFsV2VpZ2h0RWxlbWVudCIsImxpbmVUb3RhbCIsInRvRml4ZWQiLCJyZXBsYWNlIiwidXBkYXRlTGlzdEl0ZW0iLCJjb252ZXJ0TWVhc3VyZW1lbnQiLCJwYWdlRWxlbWVudCIsInVvbUVsZW1lbnQiLCJ0b3RhbFdlaWdodCIsInRvdGFsTGluZVdlaWdodFZhbHVlIiwid2VpZ2h0VmFsdWUiLCJzbWFsbCIsImxhcmdlIiwibGFiZWwiLCJjdXJyZW50VW9tIiwibGFiZWxIVE1MIiwidG9VcHBlckNhc2UiLCJjb250YWlucyIsImNoZWNrZWQiLCJKU09OIiwic3RyaW5naWZ5IiwidG9Mb3dlckNhc2UiLCJhZGRDYXRlZ29yeUdyb3VwIiwiY2F0ZWdvcnkiLCJnZXRCb29sZWFuRGF0YSIsInJlcyIsImVyciIsImlkQXJyIiwic3BsaXQiLCJhcnJMZW5ndGgiLCJpdGVtSWRWYWx1ZSIsInN1YnN0cmluZyIsInVwZGF0ZVRvdGFsTGlzdFdlaWdodHMiLCJ3ZWlnaHRzRm9yUFciLCJiYXNlV2VpZ2h0IiwidG90YWxQYWNrV2VpZ2h0IiwibWF4UGFja1dlaWdodCIsImNsYXNzV2FybmluZ1ZhbHVlIiwidW9tVGV4dCIsIndlaWdodEZvclBXIiwiY29udmVydGVyIiwicm93V2VpZ2h0IiwiaXRlbUNhdGVnb3J5RWxlbWVudCIsIml0ZW1DYXRlZ29yeSIsImRpdkVsZW1lbnQiLCJpbm5lclRleHQiLCJkaXNwbGF5IiwibmFtZUJhc2UiLCJvcHRpb24iLCJvcHRpb25MaXN0IiwiX3JlZjIiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImdldCIsInNlbGVjdGVkIiwiaW5wdXRFbGVtZW50cyIsImlucHV0RWxlbWVudCIsImVsZW1lbnRUeXBlIiwiZWxlbWVudFRhZyIsInRhZ05hbWUiLCJuZXdFbGVtZW50IiwicGFyZW50RWxlbWVudCIsInJlcGxhY2VDaGlsZCIsImRhdGFDb2x1bW5OYW1lIiwicmFkaW8iLCJpbm5lckh0bWwiLCJodG1sRm9yIiwibGluZUxhYmVsIiwidW9tQ2xhc3MiLCJ1cGRhdGVMaXN0IiwiaGVhZGVycyIsImhlYWRlciIsImNvbnRlbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJhcnJvdyIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1vdmUiLCJtYXhIZWlnaHQiLCJwYWRkaW5nIiwic2Nyb2xsSGVpZ2h0IiwiaW5wdXRzIiwiaW5wdXQiLCJkaXNhYmxlZCIsImxpc3RDaGFydGJ0biIsImNoYXJ0U3RhdHVzIiwiZ2V0Q2hhcnQiLCJkZXN0cm95IiwiY3R4IiwiY2hhcnREYXRhIiwicGFyc2UiLCJteUNoYXJ0IiwibGFiZWxzIiwiZGF0YXNldHMiLCJ3ZWlnaHRzIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JzIiwiYm9yZGVyV2lkdGgiLCJob3Zlck9mZnNldCIsIm9wdGlvbnMiLCJjdXRvdXQiLCJyYWRpdXMiLCJsZWdlbmQiLCJwbHVnaW5zIiwiZGF0YWxhYmVscyIsImFuaW1hdGlvbiIsImFuaW1hdGVSb3RhdGUiLCJhbmltYXRlU2NhbGUiLCJ0ZXh0Q29udGVudCIsInNob3dDb252cnNpb25BbGVydCIsInRhYmxlIiwiY2F0ZWdvcnlJZCIsIm9uRW5kIiwiZXZ0Iiwib3JkZXJlZElkcyIsInVwZGF0ZUl0ZW1PcmRlciIsImNhdGVnb3J5X2lkIiwib3JkZXJlZF9pZHMiLCJzb3J0aW5nU2VsZWN0Iiwib3B0cyIsInBhcmVudENvbnRhaW5lciIsImdob3N0Q2xhc3MiLCJ1cGRhdGVDYXRlZ29yeU9yZGVyIiwibmV3T3JkZXIiLCJpdGVtIiwiaW5kZXgiLCJpdGVtX2NhdGVnb3J5IiwiY2F0ZWdvcnlfb3JkZXIiLCJkZWZhdWx0cyIsImNvbW1vbiJdLCJzb3VyY2VSb290IjoiIn0=