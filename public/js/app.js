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
  this.window.addListItem = function addListItem() {
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
      console.log("list by item: " + listByItems);
      var itemTable;
      var groupCategory = null;
      if (+listByItems == 1) {
        listByItems = true;
        console.log("list by item 2: " + listByItems);
        itemTable = document.getElementById("item-table-body");
      } else {
        listByItems = false;
        var tableCategory = document.getElementById("categorycounter").value;
        console.log("table cat: " + tableCategory);
        itemTable = document.getElementById("categoryTable-" + tableCategory);
        groupCategory = document.getElementById("listSectionCategory").value;
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
      var itemName = createListItemInput("text", "itemName", finalI, "item_name", listByItems);
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
                alert("response fro new input: " + JSON.stringify(response));
                return _context.abrupt("return", response.data);
              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                // handle error
                console.log(_context.t0);
              case 11:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[0, 8]]);
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

      // // Create a new table cell
      // let iconCell = document.createElement("td");

      // // Append the SVG icon to the cell
      iconCell.appendChild(icon);

      // cell1.appendChild(counter);
      // cell1.appendChild(icon);
      cell1.appendChild(itemName);
      cell2.appendChild(itemWeight);
      var selectCell = document.createElement("td");
      var categorySelect = getCategroySelect(finalI, groupCategory);
      //listSectionCategory
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
    lineTotal = lineTotal.toFixed(2).replace(/[.,]00$/, "");
    lineTotalWeightElement.value = lineTotal;
    updateListItem(lineTotalWeightElement);
  };
  this.window.convertMeasurement = function convertMeasurement(row) {
    var convert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var uom = document.getElementById("uom").value;
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
    weight.value = weightValue.toFixed(2).replace(/[.,]00$/, "");
    totalWeight.value = totalLineWeightValue.toFixed(2).replace(/[.,]00$/, "");
    label.innerHTML = labelHTML;
    updateListItem(element);
    updateListItem(weight);
    updateListItem(totalWeight);
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
    axios.post(url, data, itemId).then(function (res) {})["catch"](function (err) {
      alert("Failed to update list item. Please try again later.");
      console.error(err);
    });
    updateTotalListWeights();
  };
  function updateTotalListWeights() {
    var weightsForPW = document.querySelectorAll(".for-total-list-weight");
    var baseWeight = 0;
    var totalPackWeight = 0;
    var maxPackWeight = document.getElementById("maxPackWeight").value;
    var uomText = "LBS";
    weightsForPW.forEach(function (weightForPW) {
      var id = weightForPW.id;
      var idArr = id.split("-");
      var arrLength = idArr.length;
      var row = idArr[arrLength - 1];
      var packedAmount = document.getElementById("packedAmount-" + row).value;
      var converter = 1;
      var rowWeight = +weightForPW.value;
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
        if (document.getElementById("uom-gram-" + row).checked === true) {
          converter = gramConverter;
          uomText = "KG";
        }
      }
      totalPackWeight = totalPackWeight + +packedAmount * (+rowWeight / converter);
      if (itemCategory !== "consumables") {
        baseWeight = baseWeight + +packedAmount * (+rowWeight / converter);
      }
    });
    if (+baseWeight > +maxPackWeight) {
      var divElement = document.getElementById("weightWarning-div");
      divElement.innerText = "The base weight (" + baseWeight.toFixed(2) + " " + uomText + ") of the items on this list have exceeded the weight for the type/style of hike selected for this list.";
      divElement.style.display = "block";
    } else {
      document.getElementById("weightWarning-div").style.display = "none";
    }
    document.getElementById("baseWeight").value = baseWeight.toFixed(2);
    document.getElementById("totalPackWeight").value = totalPackWeight.toFixed(2);
  }
  function createListItemInput(type, nameBase, row, columnName) {
    var listItems = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
    var element = document.createElement("input");
    element.type = type;
    element.name = nameBase + "[]";
    element.id = nameBase + "-" + row;
    element.value = "";
    element.setAttribute("data-column-name", columnName);
    if (listItems) {
      element.addEventListener("change", function () {
        updateListItem(element);
      });
    }
    return element;
  }
  function getCategroySelect(row) {
    var groupCategory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
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
    select.addEventListener("change", function () {
      updateListItem(select);
    });
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
    if (columnName === "sort" || columnName === "list_class") {
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
  var selectInputs = document.querySelectorAll("select");
  inputs.forEach(function (input) {
    input.disabled = true;
  });
  // selectInputs.forEach(function(selectInput) {
  //     selectInput.disabled = true;
  // });
  // document.getElementById('searchGearBtn').addEventListener('click', function () {
  //     let searchModal = document.getElementById('productSearchModal');
  //     searchModal.show();
  // });

  //listChartBtn
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
  document.querySelectorAll(".row-sortable").forEach(function (div) {
    var categoryId = div.getAttribute("data-category-id");
    console.log("in sort rows");
    new sortablejs__WEBPACK_IMPORTED_MODULE_2__["default"](div, {
      animation: 150,
      onEnd: function onEnd(evt) {
        // Get the new order of items
        var orderedIds = [];
        div.nextSibling.forEach(function (row) {
          var test = row.getAttribute("data-ordinal");
          console.log("test ordinal: " + test);
          orderedIds.push(row.getAttribute("data-ordinal"));
        });

        // Send the new order to the server via AJAX
        updateItemOrder(categoryId, orderedIds);
      }
    });
  });
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
    // Use AJAX to send the reordered item IDs to the backend
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFFTixJQUFJb0csYUFBYSxHQUFHbE4sUUFBUSxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFDO0lBQ3JELElBQUlrTixJQUFJLEdBQUdELGFBQWEsQ0FBQ3hCLE9BQU8sQ0FBQ3BPLE1BQU07SUFDdkMsS0FBSyxJQUFJcEUsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHaVUsSUFBSSxFQUFFalUsQ0FBQyxFQUFFLEVBQUU7TUFDM0IsSUFBSWdVLGFBQWEsQ0FBQ3hCLE9BQU8sQ0FBQ3hTLENBQUMsQ0FBQyxDQUFDRCxLQUFLLElBQUksV0FBVyxFQUFFO1FBQy9DaVUsYUFBYSxDQUFDeEIsT0FBTyxDQUFDeFMsQ0FBQyxDQUFDLENBQUN5UCxRQUFRLEdBQUcsSUFBSTtRQUN4QztNQUNKO0lBQ0o7RUFDSjtBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDLzBCd0I7QUFDMUJoSixNQUFNLENBQUMrQyxLQUFLLEdBQUdBLDZDQUFLO0FBRXBCL0MsTUFBTSxDQUFDK0MsS0FBSyxDQUFDMEssUUFBUSxDQUFDdkQsT0FBTyxDQUFDd0QsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsZ0JBQWdCOzs7Ozs7Ozs7OztBQ0gzRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Fzcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgJy4vYm9vdHN0cmFwJyA7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCJib290c3RyYXBcIjtcbi8vIGltcG9ydCAgJ2Jvb3RzdHJhcCc7XG5pbXBvcnQgXCJAcG9wcGVyanMvY29yZVwiO1xuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qcy9hdXRvXCI7XG5pbXBvcnQgU29ydGFibGUgZnJvbSBcInNvcnRhYmxlanNcIjtcbmNvbnN0IGJvb3RzdHJhcCA9IHJlcXVpcmUoXCIuL2Jvb3RzdHJhcFwiKTtcbmNvbnN0IGdyYW1Db252ZXJ0ZXIgPSAxMDAwO1xuY29uc3Qgb3VuY2VDb252ZXJ0ZXIgPSAxNjtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoZSkge1xuICAgIHRoaXMud2luZG93LnNob3dQYXNzd29yZCA9IGZ1bmN0aW9uIHNob3dQYXNzd29yZChpZCkge1xuICAgICAgICBsZXQgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgIGlmIChwYXNzd29yZC50eXBlID09PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgICAgICAgIHBhc3N3b3JkLnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhc3N3b3JkLnR5cGUgPSBcInBhc3N3b3JkXCI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMud2luZG93LmFkZExpc3RJdGVtID0gZnVuY3Rpb24gYWRkTGlzdEl0ZW0oKSB7XG4gICAgICAgIGxldCBudW1iZXJPZkl0ZW1zVG9BZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmVzVG9BZGRcIik7XG4gICAgICAgIGxldCBsaW5lc1RvQWRkID0gMTtcbiAgICAgICAgaWYgKG51bWJlck9mSXRlbXNUb0FkZCA9PT0gbnVsbCB8fCArbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlIDwgMSkge1xuICAgICAgICAgICAgbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlID0gbGluZXNUb0FkZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpbmVzVG9BZGQgPSArbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lc1RvQWRkOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBsaXN0VU9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b21cIikudmFsdWU7XG4gICAgICAgICAgICBsZXQgZmluYWxJRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmluYWwtaVwiKTtcbiAgICAgICAgICAgIGxldCBsaXN0QnlJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdEJ5SXRlbXNcIikudmFsdWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxpc3QgYnkgaXRlbTogXCIgKyBsaXN0QnlJdGVtcyk7XG4gICAgICAgICAgICBsZXQgaXRlbVRhYmxlO1xuICAgICAgICAgICAgbGV0IGdyb3VwQ2F0ZWdvcnkgPSBudWxsO1xuICAgICAgICAgICAgaWYgKCtsaXN0QnlJdGVtcyA9PSAxKSB7XG4gICAgICAgICAgICAgICAgbGlzdEJ5SXRlbXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibGlzdCBieSBpdGVtIDI6IFwiICsgbGlzdEJ5SXRlbXMpO1xuICAgICAgICAgICAgICAgIGl0ZW1UYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXRlbS10YWJsZS1ib2R5XCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsaXN0QnlJdGVtcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxldCB0YWJsZUNhdGVnb3J5ID1cbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXRlZ29yeWNvdW50ZXJcIikudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0YWJsZSBjYXQ6IFwiICsgdGFibGVDYXRlZ29yeSk7XG4gICAgICAgICAgICAgICAgaXRlbVRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgICAgICAgICAgIFwiY2F0ZWdvcnlUYWJsZS1cIiArIHRhYmxlQ2F0ZWdvcnlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGdyb3VwQ2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgICAgICAgICAgXCJsaXN0U2VjdGlvbkNhdGVnb3J5XCJcbiAgICAgICAgICAgICAgICApLnZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdXNlcklkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VySWRcIikudmFsdWU7XG4gICAgICAgICAgICBsZXQgbGlzdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0SWRcIikudmFsdWU7XG4gICAgICAgICAgICBsZXQgZmluYWxJID0gZmluYWxJRWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgIGZpbmFsSUVsZW1lbnQudmFsdWUgPSArZmluYWxJICsgMTtcblxuICAgICAgICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIGNlbGxzIGFuZCBpbnB1dCBlbGVtZW50cy5cbiAgICAgICAgICAgIGxldCBjZWxsMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgICAgICAgICAgIGNlbGwwLnNjb3BlID0gXCJyb3dcIjtcbiAgICAgICAgICAgIGNlbGwwLmlubmVySFRNTCA9IGZpbmFsSTtcblxuICAgICAgICAgICAgbGV0IGNlbGwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuXG4gICAgICAgICAgICBsZXQgY291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGNvdW50ZXIudHlwZSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICBjb3VudGVyLm5hbWUgPSBcImlkW11cIjtcbiAgICAgICAgICAgIGNvdW50ZXIuaWQgPSBcImlkLVwiICsgZmluYWxJO1xuICAgICAgICAgICAgY291bnRlci52YWx1ZSA9IFwibmV3LVwiICsgZmluYWxJO1xuICAgICAgICAgICAgY291bnRlci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIsIFwiaWRcIik7XG5cbiAgICAgICAgICAgIGxldCBpdGVtTmFtZSA9IGNyZWF0ZUxpc3RJdGVtSW5wdXQoXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgXCJpdGVtTmFtZVwiLFxuICAgICAgICAgICAgICAgIGZpbmFsSSxcbiAgICAgICAgICAgICAgICBcIml0ZW1fbmFtZVwiLFxuICAgICAgICAgICAgICAgIGxpc3RCeUl0ZW1zXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaXRlbU5hbWUucGxhY2Vob2xkZXIgPSBcIkl0ZW0gTmFtZVwiO1xuICAgICAgICAgICAgaXRlbU5hbWUuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcblxuICAgICAgICAgICAgbGV0IGNlbGw2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgY2VsbDYuaWQgPSBcImJ0bi10ZC1cIiArIGZpbmFsSTtcbiAgICAgICAgICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5pZCA9IFwiZGVsZXRlQnRuLVwiICsgZmluYWxJO1xuICAgICAgICAgICAgZGVsZXRlQnRuLmNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbSAgcHktMlwiO1xuICAgICAgICAgICAgZGVsZXRlQnRuLmlubmVySFRNTCA9IFwieFwiO1xuXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICAgICAgbGV0IHVybCA9IFwiL2xpc3QtaXRlbVwiO1xuXG4gICAgICAgICAgICBpZiAobGlzdFVPTSA9PSBcInVzXCIpIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gZ2V0Qm9vbGVhbkRhdGEoXCJpbl9vdW5jZXNcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGEgPSBnZXRCb29sZWFuRGF0YShcImluX2dyYW1zXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YVtcImxpc3RfaWRcIl0gPSBsaXN0SWQ7XG4gICAgICAgICAgICBkYXRhW1widXNlcl9pZFwiXSA9IHVzZXJJZDtcbiAgICAgICAgICAgIGRhdGFbXCJpdGVtX25hbWVcIl0gPSBcIlwiO1xuXG4gICAgICAgICAgICBsZXQgdXBkYXRlSXRlbTtcbiAgICAgICAgICAgIHVwZGF0ZUl0ZW0gPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KHVybCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXNwb25zZSBmcm8gbmV3IGlucHV0OiBcIiArIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIFRvIHVzZSB0aGUgZnVuY3Rpb24gYW5kIGhhbmRsZSB0aGUgcmVzcG9uc2UgZGF0YVxuICAgICAgICAgICAgdXBkYXRlSXRlbSgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCB0aGUgcmVzcG9uc2UgZGF0YVxuICAgICAgICAgICAgICAgIGNvdW50ZXIudmFsdWUgPSBkYXRhLm5ld0lkO1xuICAgICAgICAgICAgICAgIHJvdy5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIGRhdGEubmV3SWQpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiLFxuICAgICAgICAgICAgICAgICAgICBcIi9kZXN0cm95LWxpc3QtaXRlbS9cIiArIGRhdGEubmV3SWRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCBjZWxsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGxldCBpdGVtV2VpZ2h0ID0gY3JlYXRlTGlzdEl0ZW1JbnB1dChcbiAgICAgICAgICAgICAgICBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIFwiaXRlbVdlaWdodFwiLFxuICAgICAgICAgICAgICAgIGZpbmFsSSxcbiAgICAgICAgICAgICAgICBcIml0ZW1fd2VpZ2h0XCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LnZhbHVlID0gMDtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQuY2xhc3NMaXN0LmFkZChcImZvci13ZWlnaHRcIik7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJudW1iZXItaW5wdXRcIik7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRyb2xcIik7XG4gICAgICAgICAgICBjZWxsMi5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWNvbFwiKTtcblxuICAgICAgICAgICAgbGV0IGNlbGwzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgbGV0IGxpbmVVb21DZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgY2VsbDMuY2xhc3NMaXN0LmFkZChcInVvbS10ZFwiKTtcbiAgICAgICAgICAgIGxpbmVVb21DZWxsLmNsYXNzTGlzdC5hZGQoXCJ1b20tdGRcIik7XG4gICAgICAgICAgICBsZXQgcmFkaW8xO1xuICAgICAgICAgICAgbGV0IHJhZGlvMjtcbiAgICAgICAgICAgIGxldCByYWRpb0xhYmVsMTtcbiAgICAgICAgICAgIGxldCByYWRpb0xhYmVsMjtcbiAgICAgICAgICAgIGxldCByYWRpb0xhYmVsMztcblxuICAgICAgICAgICAgaWYgKGxpc3RVT00gPT09IFwidXNcIikge1xuICAgICAgICAgICAgICAgIHJhZGlvMSA9IGNyZWF0ZVJhZGlvKFwiaW5fb3VuY2VzXCIsIFwiXCIsIFwib3pcIiwgZmluYWxJKTtcbiAgICAgICAgICAgICAgICByYWRpb0xhYmVsMSA9IGNyZWF0ZUxhYmVsKFxuICAgICAgICAgICAgICAgICAgICBcIk9aXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidW9tLW96LVwiICsgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICBcIm96XCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsSVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmFkaW8yID0gY3JlYXRlUmFkaW8oXCJpbl9sYnNcIiwgXCJcIiwgXCJsYnNcIiwgZmluYWxJKTtcbiAgICAgICAgICAgICAgICByYWRpb0xhYmVsMiA9IGNyZWF0ZUxhYmVsKFxuICAgICAgICAgICAgICAgICAgICBcIkxCU1wiLFxuICAgICAgICAgICAgICAgICAgICBcInVvbS1sYnMtXCIgKyBmaW5hbEksXG4gICAgICAgICAgICAgICAgICAgIFwibGJzXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsSVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmFkaW9MYWJlbDMgPSBjcmVhdGVMYWJlbChcbiAgICAgICAgICAgICAgICAgICAgXCJPWlwiLFxuICAgICAgICAgICAgICAgICAgICBcInVvbS1vei1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgICAgICAgICAgXCJvelwiLFxuICAgICAgICAgICAgICAgICAgICBmaW5hbEksXG4gICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByYWRpbzEgPSBjcmVhdGVSYWRpbyhcImluX2dyYW1zXCIsIFwiXCIsIFwiZ3JhbVwiLCBmaW5hbEkpO1xuICAgICAgICAgICAgICAgIHJhZGlvTGFiZWwxID0gY3JlYXRlTGFiZWwoXG4gICAgICAgICAgICAgICAgICAgIFwiR1wiLFxuICAgICAgICAgICAgICAgICAgICBcInVvbS1ncmFtLVwiICsgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICBcImdyYW1cIixcbiAgICAgICAgICAgICAgICAgICAgZmluYWxJXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByYWRpbzIgPSBjcmVhdGVSYWRpbyhcImluX2tpbG9zXCIsIFwiXCIsIFwia2dcIiwgZmluYWxJKTtcbiAgICAgICAgICAgICAgICByYWRpb0xhYmVsMiA9IGNyZWF0ZUxhYmVsKFxuICAgICAgICAgICAgICAgICAgICBcIktHXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidW9tLWtnLVwiICsgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICBcImtnXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsSVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmFkaW9MYWJlbDMgPSBjcmVhdGVMYWJlbChcbiAgICAgICAgICAgICAgICAgICAgXCJHXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidW9tLWdyYW0tXCIgKyBmaW5hbEksXG4gICAgICAgICAgICAgICAgICAgIFwiZ3JhbVwiLFxuICAgICAgICAgICAgICAgICAgICBmaW5hbEksXG4gICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgY2VsbDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBjZWxsNC5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWNvbFwiKTtcbiAgICAgICAgICAgIGxldCBwYWNrZWRBbW91bnQgPSBjcmVhdGVMaXN0SXRlbUlucHV0KFxuICAgICAgICAgICAgICAgIFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgXCJwYWNrZWRBbW91bnRcIixcbiAgICAgICAgICAgICAgICBmaW5hbEksXG4gICAgICAgICAgICAgICAgXCJhbW91bnRcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHBhY2tlZEFtb3VudC52YWx1ZSA9IDE7XG5cbiAgICAgICAgICAgIHBhY2tlZEFtb3VudC5jbGFzc0xpc3QuYWRkKFwiZm9yLXdlaWdodFwiKTtcbiAgICAgICAgICAgIHBhY2tlZEFtb3VudC5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWlucHV0XCIpO1xuICAgICAgICAgICAgcGFja2VkQW1vdW50LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRyb2xcIik7XG5cbiAgICAgICAgICAgIGxldCBjZWxsNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGNlbGw1LmNsYXNzTGlzdC5hZGQoXCJudW1iZXItY29sXCIpO1xuICAgICAgICAgICAgbGV0IHRvdGFsTGluZVdlaWdodCA9IGNyZWF0ZUxpc3RJdGVtSW5wdXQoXG4gICAgICAgICAgICAgICAgXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICBcInRvdGFsTGluZVdlaWdodFwiLFxuICAgICAgICAgICAgICAgIGZpbmFsSSxcbiAgICAgICAgICAgICAgICBcInRvdGFsX2xpbmVfd2VpZ2h0XCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQudmFsdWUgPSAwO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgICBcImRhdGEtY29sdW1uLW5hbWVcIixcbiAgICAgICAgICAgICAgICBcInRvdGFsX2xpbmVfd2VpZ2h0XCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQuc2V0QXR0cmlidXRlKFwicmVhZG9ubHlcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQuY2xhc3NMaXN0LmFkZChcIm51bWJlci1pbnB1dFwiKTtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJmb3ItdG90YWwtbGlzdC13ZWlnaHRcIik7XG5cbiAgICAgICAgICAgIC8vYXBwZW5kIGlucHV0cyB0byBjZWxscy5cblxuICAgICAgICAgICAgLy8gRGVmaW5lIHRoZSBTVkcgbmFtZXNwYWNlXG4gICAgICAgICAgICBjb25zdCBzdmdOYW1lc3BhY2UgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG4gICAgICAgICAgICBsZXQgaWNvbkNlbGwgPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IFNWRyBlbGVtZW50XG4gICAgICAgICAgICBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOYW1lc3BhY2UsIFwic3ZnXCIpO1xuICAgICAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjE2XCIpO1xuICAgICAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIxNlwiKTtcbiAgICAgICAgICAgIGljb24uc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcImN1cnJlbnRDb2xvclwiKTtcbiAgICAgICAgICAgIGljb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJiaSBiaS1ncmlwLXZlcnRpY2FsXCIpO1xuICAgICAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDE2IDE2XCIpO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIDxwYXRoPiBlbGVtZW50XG4gICAgICAgICAgICBsZXQgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOYW1lc3BhY2UsIFwicGF0aFwiKTtcbiAgICAgICAgICAgIHBhdGguc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgICAgIFwiZFwiLFxuICAgICAgICAgICAgICAgIFwiTTcgMmExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBtMyAwYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgME03IDVhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbTMgMGExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBNNyA4YTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMG0zIDBhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbS0zIDNhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbTMgMGExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBtLTMgM2ExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBtMyAwYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMFwiXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIHBhdGggdG8gdGhlIFNWR1xuICAgICAgICAgICAgaWNvbi5hcHBlbmRDaGlsZChwYXRoKTtcblxuICAgICAgICAgICAgLy8gLy8gQ3JlYXRlIGEgbmV3IHRhYmxlIGNlbGxcbiAgICAgICAgICAgIC8vIGxldCBpY29uQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcblxuICAgICAgICAgICAgLy8gLy8gQXBwZW5kIHRoZSBTVkcgaWNvbiB0byB0aGUgY2VsbFxuICAgICAgICAgICAgaWNvbkNlbGwuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICAgICAgICAgLy8gY2VsbDEuYXBwZW5kQ2hpbGQoY291bnRlcik7XG4gICAgICAgICAgICAvLyBjZWxsMS5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgICAgIGNlbGwxLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIGNlbGwyLmFwcGVuZENoaWxkKGl0ZW1XZWlnaHQpO1xuXG4gICAgICAgICAgICBsZXQgc2VsZWN0Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGxldCBjYXRlZ29yeVNlbGVjdCA9IGdldENhdGVncm95U2VsZWN0KGZpbmFsSSwgZ3JvdXBDYXRlZ29yeSk7XG4gICAgICAgICAgICAvL2xpc3RTZWN0aW9uQ2F0ZWdvcnlcbiAgICAgICAgICAgIHNlbGVjdENlbGwuYXBwZW5kKGNhdGVnb3J5U2VsZWN0KTtcblxuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQocmFkaW8xKTtcbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHJhZGlvTGFiZWwxKTtcbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHJhZGlvMik7XG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChyYWRpb0xhYmVsMik7XG5cbiAgICAgICAgICAgIGNlbGw0LmFwcGVuZENoaWxkKHBhY2tlZEFtb3VudCk7XG4gICAgICAgICAgICBjZWxsNS5hcHBlbmRDaGlsZCh0b3RhbExpbmVXZWlnaHQpO1xuICAgICAgICAgICAgbGluZVVvbUNlbGwuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbDMpO1xuICAgICAgICAgICAgY2VsbDYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIGNlbGxzIHRvIHRoZSByb3cuXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoaWNvbkNlbGwpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwxKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChzZWxlY3RDZWxsKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsMyk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDIpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGw0KTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsNSk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQobGluZVVvbUNlbGwpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGw2KTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSByb3cgdG8gdGhlIHRhYmxlLlxuICAgICAgICAgICAgaXRlbVRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG5cbiAgICAgICAgICAgIC8vYWRkIGZ1bmN0aW9ucyB0byBjYWxjdWxhdGUgYW5kIGNvbnZlcnQgdG90YWwgd2VpZ2h0LlxuICAgICAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcldlaWdodENhbGMoZmluYWxJKTtcbiAgICAgICAgfVxuICAgICAgICBudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPSAxO1xuICAgIH07XG5cbiAgICB0aGlzLndpbmRvdy51cGRhdGVVT00gPSBmdW5jdGlvbiB1cGRhdGVVT00odmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBcInVzXCIpIHtcbiAgICAgICAgICAgIHVzUmFkaW9Ub01ldHJpYygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWV0cmljUmFkaW9Ub1VzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJXZWlnaHRDYWxjKHJvdykge1xuICAgICAgICBsZXQgbmVlZGVkRm9yV2VpZ2h0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yLXdlaWdodFwiKTtcbiAgICAgICAgbmVlZGVkRm9yV2VpZ2h0cy5mb3JFYWNoKGZ1bmN0aW9uIChuZWVkZWRGb3JXZWlnaHQpIHtcbiAgICAgICAgICAgIG5lZWRlZEZvcldlaWdodC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBnZXRMaW5lVG90YWxXZWlnaHQocm93KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLndpbmRvdy5nZXRMaW5lVG90YWxXZWlnaHQgPSBmdW5jdGlvbiBnZXRMaW5lVG90YWxXZWlnaHQoXG4gICAgICAgIHJvdyxcbiAgICAgICAgY29udmVydCA9IGZhbHNlXG4gICAgKSB7XG4gICAgICAgIGxldCB3ZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1XZWlnaHQtXCIgKyByb3cpLnZhbHVlO1xuICAgICAgICBsZXQgcGFja2VkQW1vdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWNrZWRBbW91bnQtXCIgKyByb3cpLnZhbHVlO1xuICAgICAgICBsZXQgdW9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b21cIik7XG4gICAgICAgIGxldCBsaW5lVG90YWxXZWlnaHRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgICBcInRvdGFsTGluZVdlaWdodC1cIiArIHJvd1xuICAgICAgICApO1xuXG4gICAgICAgIGxldCBsaW5lVG90YWwgPSAwO1xuICAgICAgICBsaW5lVG90YWwgPSArd2VpZ2h0ICogK3BhY2tlZEFtb3VudDtcbiAgICAgICAgbGluZVRvdGFsID0gbGluZVRvdGFsLnRvRml4ZWQoMikucmVwbGFjZSgvWy4sXTAwJC8sIFwiXCIpO1xuICAgICAgICBsaW5lVG90YWxXZWlnaHRFbGVtZW50LnZhbHVlID0gbGluZVRvdGFsO1xuXG4gICAgICAgIHVwZGF0ZUxpc3RJdGVtKGxpbmVUb3RhbFdlaWdodEVsZW1lbnQpO1xuICAgIH07XG4gICAgdGhpcy53aW5kb3cuY29udmVydE1lYXN1cmVtZW50ID0gZnVuY3Rpb24gY29udmVydE1lYXN1cmVtZW50KFxuICAgICAgICByb3csXG4gICAgICAgIGNvbnZlcnQgPSBmYWxzZVxuICAgICkge1xuICAgICAgICBsZXQgdW9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b21cIikudmFsdWU7XG4gICAgICAgIGxldCB3ZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1XZWlnaHQtXCIgKyByb3cpO1xuICAgICAgICBsZXQgcGFja2VkQW1vdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWNrZWRBbW91bnQtXCIgKyByb3cpLnZhbHVlO1xuICAgICAgICBsZXQgdG90YWxXZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdGFsTGluZVdlaWdodC1cIiArIHJvdyk7XG4gICAgICAgIGxldCB0b3RhbExpbmVXZWlnaHRWYWx1ZSA9IDA7XG4gICAgICAgIGxldCB3ZWlnaHRWYWx1ZSA9IHdlaWdodC52YWx1ZTtcbiAgICAgICAgbGV0IHNtYWxsO1xuICAgICAgICBsZXQgbGFyZ2U7XG4gICAgICAgIGxldCBlbGVtZW50O1xuICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmUtdW9tLWxhYmVsLVwiICsgcm93KTtcbiAgICAgICAgbGV0IGxhYmVsSFRNTDtcblxuICAgICAgICBpZiAodW9tID09PSBcInVzXCIpIHtcbiAgICAgICAgICAgIHNtYWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b20tb3otXCIgKyByb3cpO1xuICAgICAgICAgICAgbGFyZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1sYnMtXCIgKyByb3cpO1xuICAgICAgICAgICAgaWYgKHNtYWxsLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB3ZWlnaHRWYWx1ZSA9ICt3ZWlnaHRWYWx1ZSAqIDE2O1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBzbWFsbDtcbiAgICAgICAgICAgICAgICBsYWJlbEhUTUwgPSBcIk9aXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdlaWdodFZhbHVlID0gK3dlaWdodFZhbHVlIC8gMTY7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGxhcmdlO1xuICAgICAgICAgICAgICAgIGxhYmVsSFRNTCA9IFwiTEJTXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzbWFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tLWdyYW0tXCIgKyByb3cpO1xuICAgICAgICAgICAgbGFyZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1rZy1cIiArIHJvdyk7XG5cbiAgICAgICAgICAgIGlmIChzbWFsbC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0VmFsdWUgPSArd2VpZ2h0VmFsdWUgKiAxMDAwO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBzbWFsbDtcbiAgICAgICAgICAgICAgICBsYWJlbEhUTUwgPSBcIkdcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0VmFsdWUgPSArd2VpZ2h0VmFsdWUgLyAxMDAwO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBsYXJnZTtcbiAgICAgICAgICAgICAgICBsYWJlbEhUTUwgPSBcIktHXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0b3RhbExpbmVXZWlnaHRWYWx1ZSA9ICt3ZWlnaHRWYWx1ZSAqICtwYWNrZWRBbW91bnQ7XG4gICAgICAgIHdlaWdodC52YWx1ZSA9IHdlaWdodFZhbHVlLnRvRml4ZWQoMikucmVwbGFjZSgvWy4sXTAwJC8sIFwiXCIpO1xuICAgICAgICB0b3RhbFdlaWdodC52YWx1ZSA9IHRvdGFsTGluZVdlaWdodFZhbHVlXG4gICAgICAgICAgICAudG9GaXhlZCgyKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1suLF0wMCQvLCBcIlwiKTtcbiAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gbGFiZWxIVE1MO1xuICAgICAgICB1cGRhdGVMaXN0SXRlbShlbGVtZW50KTtcbiAgICAgICAgdXBkYXRlTGlzdEl0ZW0od2VpZ2h0KTtcbiAgICAgICAgdXBkYXRlTGlzdEl0ZW0odG90YWxXZWlnaHQpO1xuICAgIH07XG4gICAgZnVuY3Rpb24gZ2V0Qm9vbGVhbkRhdGEoY29sdW1uTmFtZSkge1xuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICBkYXRhW1wiaW5fb3VuY2VzXCJdID0gZmFsc2U7XG4gICAgICAgIGRhdGFbXCJpbl9sYnNcIl0gPSBmYWxzZTtcbiAgICAgICAgZGF0YVtcImluX2dyYW1zXCJdID0gZmFsc2U7XG4gICAgICAgIGRhdGFbXCJpbl9raWxvc1wiXSA9IGZhbHNlO1xuICAgICAgICBzd2l0Y2ggKGNvbHVtbk5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJpbl9vdW5jZXNcIjpcbiAgICAgICAgICAgICAgICBkYXRhW1wiaW5fb3VuY2VzXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJpbl9sYnNcIjpcbiAgICAgICAgICAgICAgICBkYXRhW1wiaW5fbGJzXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJpbl9ncmFtc1wiOlxuICAgICAgICAgICAgICAgIGRhdGFbXCJpbl9ncmFtc1wiXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaW5fa2lsb3NcIjpcbiAgICAgICAgICAgICAgICBkYXRhW1wiaW5fa2lsb3NcIl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgdGhpcy53aW5kb3cudXBkYXRlTGlzdEl0ZW0gPSBmdW5jdGlvbiB1cGRhdGVMaXN0SXRlbShlbGVtZW50KSB7XG4gICAgICAgIGxldCBjb2x1bW5OYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIpO1xuICAgICAgICBsZXQgdmFsdWUgPSBlbGVtZW50LnZhbHVlO1xuICAgICAgICBsZXQgaWQgPSBlbGVtZW50LmlkO1xuICAgICAgICBsZXQgaWRBcnIgPSBpZC5zcGxpdChcIi1cIik7XG4gICAgICAgIGxldCBhcnJMZW5ndGggPSBpZEFyci5sZW5ndGg7XG4gICAgICAgIGxldCByb3cgPSBpZEFyclthcnJMZW5ndGggLSAxXTtcbiAgICAgICAgbGV0IGl0ZW1JZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWQtXCIgKyByb3cpO1xuICAgICAgICBsZXQgaXRlbUlkVmFsdWUgPSBpdGVtSWQudmFsdWU7XG4gICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RJZFwiKS52YWx1ZTtcbiAgICAgICAgbGV0IHVybCA9IFwiL2xpc3QtaXRlbS9cIiArIGl0ZW1JZFZhbHVlO1xuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICBsZXQgdXNlcklkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VySWRcIikudmFsdWU7XG5cbiAgICAgICAgZGF0YVtjb2x1bW5OYW1lXSA9IHZhbHVlO1xuXG4gICAgICAgIGlmIChjb2x1bW5OYW1lLnN1YnN0cmluZygwLCAzKSA9PT0gXCJpbl9cIikge1xuICAgICAgICAgICAgZGF0YSA9IGdldEJvb2xlYW5EYXRhKGNvbHVtbk5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtcImxpc3RfaWRcIl0gPSBsaXN0SWQ7XG4gICAgICAgIGRhdGFbXCJ1c2VyX2lkXCJdID0gdXNlcklkO1xuICAgICAgICBkYXRhW1wiaWRcIl0gPSBpdGVtSWRWYWx1ZTtcblxuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QodXJsLCBkYXRhLCBpdGVtSWQpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7fSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJGYWlsZWQgdG8gdXBkYXRlIGxpc3QgaXRlbS4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdXBkYXRlVG90YWxMaXN0V2VpZ2h0cygpO1xuICAgIH07XG4gICAgZnVuY3Rpb24gdXBkYXRlVG90YWxMaXN0V2VpZ2h0cygpIHtcbiAgICAgICAgbGV0IHdlaWdodHNGb3JQVyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yLXRvdGFsLWxpc3Qtd2VpZ2h0XCIpO1xuICAgICAgICBsZXQgYmFzZVdlaWdodCA9IDA7XG4gICAgICAgIGxldCB0b3RhbFBhY2tXZWlnaHQgPSAwO1xuICAgICAgICBsZXQgbWF4UGFja1dlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWF4UGFja1dlaWdodFwiKS52YWx1ZTtcbiAgICAgICAgbGV0IHVvbVRleHQgPSBcIkxCU1wiO1xuICAgICAgICB3ZWlnaHRzRm9yUFcuZm9yRWFjaChmdW5jdGlvbiAod2VpZ2h0Rm9yUFcpIHtcbiAgICAgICAgICAgIGxldCBpZCA9IHdlaWdodEZvclBXLmlkO1xuICAgICAgICAgICAgbGV0IGlkQXJyID0gaWQuc3BsaXQoXCItXCIpO1xuICAgICAgICAgICAgbGV0IGFyckxlbmd0aCA9IGlkQXJyLmxlbmd0aDtcbiAgICAgICAgICAgIGxldCByb3cgPSBpZEFyclthcnJMZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGxldCBwYWNrZWRBbW91bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgICAgICBcInBhY2tlZEFtb3VudC1cIiArIHJvd1xuICAgICAgICAgICAgKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBjb252ZXJ0ZXIgPSAxO1xuICAgICAgICAgICAgbGV0IHJvd1dlaWdodCA9ICt3ZWlnaHRGb3JQVy52YWx1ZTtcbiAgICAgICAgICAgIGxldCB1b20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbVwiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBpdGVtQ2F0ZWdvcnlFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgICAgICAgXCJpdGVtQ2F0ZWdvcnktXCIgKyByb3dcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsZXQgaXRlbUNhdGVnb3J5ID0gXCJcIjtcbiAgICAgICAgICAgIGlmIChpdGVtQ2F0ZWdvcnlFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaXRlbUNhdGVnb3J5ID0gaXRlbUNhdGVnb3J5RWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGl0ZW1DYXRlZ29yeSA9PT0gdW5kZWZpbmVkIHx8IGl0ZW1DYXRlZ29yeSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGl0ZW1DYXRlZ29yeSA9IFwiXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh1b20gPT09IFwidXNcIikge1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1vei1cIiArIHJvdykuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb252ZXJ0ZXIgPSBvdW5jZUNvbnZlcnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b20tZ3JhbS1cIiArIHJvdykuY2hlY2tlZCA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBjb252ZXJ0ZXIgPSBncmFtQ29udmVydGVyO1xuICAgICAgICAgICAgICAgICAgICB1b21UZXh0ID0gXCJLR1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdG90YWxQYWNrV2VpZ2h0ID1cbiAgICAgICAgICAgICAgICB0b3RhbFBhY2tXZWlnaHQgKyArcGFja2VkQW1vdW50ICogKCtyb3dXZWlnaHQgLyBjb252ZXJ0ZXIpO1xuXG4gICAgICAgICAgICBpZiAoaXRlbUNhdGVnb3J5ICE9PSBcImNvbnN1bWFibGVzXCIpIHtcbiAgICAgICAgICAgICAgICBiYXNlV2VpZ2h0ID1cbiAgICAgICAgICAgICAgICAgICAgYmFzZVdlaWdodCArICtwYWNrZWRBbW91bnQgKiAoK3Jvd1dlaWdodCAvIGNvbnZlcnRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICgrYmFzZVdlaWdodCA+ICttYXhQYWNrV2VpZ2h0KSB7XG4gICAgICAgICAgICBsZXQgZGl2RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VpZ2h0V2FybmluZy1kaXZcIik7XG4gICAgICAgICAgICBkaXZFbGVtZW50LmlubmVyVGV4dCA9XG4gICAgICAgICAgICAgICAgXCJUaGUgYmFzZSB3ZWlnaHQgKFwiICtcbiAgICAgICAgICAgICAgICBiYXNlV2VpZ2h0LnRvRml4ZWQoMikgK1xuICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICB1b21UZXh0ICtcbiAgICAgICAgICAgICAgICBcIikgb2YgdGhlIGl0ZW1zIG9uIHRoaXMgbGlzdCBoYXZlIGV4Y2VlZGVkIHRoZSB3ZWlnaHQgZm9yIHRoZSB0eXBlL3N0eWxlIG9mIGhpa2Ugc2VsZWN0ZWQgZm9yIHRoaXMgbGlzdC5cIjtcbiAgICAgICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VpZ2h0V2FybmluZy1kaXZcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFzZVdlaWdodFwiKS52YWx1ZSA9IGJhc2VXZWlnaHQudG9GaXhlZCgyKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3RhbFBhY2tXZWlnaHRcIikudmFsdWUgPVxuICAgICAgICAgICAgdG90YWxQYWNrV2VpZ2h0LnRvRml4ZWQoMik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxpc3RJdGVtSW5wdXQodHlwZSwgbmFtZUJhc2UsIHJvdywgY29sdW1uTmFtZSwgbGlzdEl0ZW1zID0gdHJ1ZSkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgZWxlbWVudC50eXBlID0gdHlwZTtcbiAgICAgICAgZWxlbWVudC5uYW1lID0gbmFtZUJhc2UgKyBcIltdXCI7XG4gICAgICAgIGVsZW1lbnQuaWQgPSBuYW1lQmFzZSArIFwiLVwiICsgcm93O1xuICAgICAgICBlbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIsIGNvbHVtbk5hbWUpO1xuICAgICAgICBpZihsaXN0SXRlbXMpe1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVMaXN0SXRlbShlbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Q2F0ZWdyb3lTZWxlY3Qocm93LCBncm91cENhdGVnb3J5ID0gbnVsbCkge1xuICAgICAgICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgc2VsZWN0LmlkID0gXCJJdGVtQ2F0ZWdvcnktXCIgKyByb3c7XG4gICAgICAgIHNlbGVjdC5uYW1lID0gXCJpdGVtQ2F0ZWdvcnktXCIgKyByb3c7XG4gICAgICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIsIFwiaXRlbV9jYXRlZ29yeVwiKTtcbiAgICAgICAgc2VsZWN0LmNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCI7XG5cbiAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IFwiXCI7XG4gICAgICAgIG9wdGlvbi50ZXh0ID0gXCJDaG9vc2VcIjtcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIGxldCBvcHRpb25MaXN0O1xuXG4gICAgICAgIG9wdGlvbkxpc3QgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2xpc3QtaXRlbS1jYXRlZ29yaWVzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgZXJyb3JcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gVG8gdXNlIHRoZSBmdW5jdGlvbiBhbmQgaGFuZGxlIHRoZSByZXNwb25zZSBkYXRhXG4gICAgICAgIG9wdGlvbkxpc3QoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCB0aGUgcmVzcG9uc2UgZGF0YVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gZGF0YVtpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IGRhdGFbaV0uY2F0ZWdvcnk7XG4gICAgICAgICAgICAgICAgaWYgKGdyb3VwQ2F0ZWdvcnkgIT0gbnVsbCAmJiBkYXRhW2ldLnZhbHVlID09PSBncm91cENhdGVnb3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB1cGRhdGVMaXN0SXRlbShzZWxlY3QpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc2VsZWN0O1xuICAgIH1cbiAgICBmdW5jdGlvbiBtZXRyaWNSYWRpb1RvVXMoKSB7XG4gICAgICAgIGxldCBpbnB1dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZXRyaWMtcmFkaW9cIik7XG4gICAgICAgIGlucHV0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXRFbGVtZW50KSB7XG4gICAgICAgICAgICBsZXQgaWRBcnIgPSBpbnB1dEVsZW1lbnQuaWQuc3BsaXQoXCItXCIpO1xuICAgICAgICAgICAgbGV0IHVvbSA9IGlkQXJyWzFdO1xuICAgICAgICAgICAgbGV0IHJvdyA9IGlkQXJyW2lkQXJyLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRUeXBlID0gaW5wdXRFbGVtZW50LnR5cGU7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFRhZyA9IGlucHV0RWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIGxldCBuZXdFbGVtZW50O1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudFR5cGUgPT09IFwicmFkaW9cIiAmJiB1b20gPT09IFwiZ3JhbVwiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZVJhZGlvKFwiaW5fb3VuY2VzXCIsIFwiT1pcIiwgXCJvelwiLCByb3csIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VHlwZSA9PT0gXCJyYWRpb1wiICYmIHVvbSA9PT0gXCJrZ1wiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZVJhZGlvKFwiaW5fbGJzXCIsIFwiTEJTXCIsIFwibGJzXCIsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUYWcgPT09IFwibGFiZWxcIiAmJiB1b20gPT09IFwiZ3JhbVwiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZUxhYmVsKFwiT1pcIiwgXCJ1b20tb3otXCIgKyByb3csIFwib3pcIiwgcm93KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFRhZyA9PT0gXCJsYWJlbFwiICYmIHVvbSA9PT0gXCJrZ1wiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZUxhYmVsKFwiTEJTXCIsIFwidW9tLWxicy1cIiArIHJvdywgXCJsYnNcIiwgcm93KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5ld0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQoXG4gICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1c1JhZGlvVG9NZXRyaWMoKSB7XG4gICAgICAgIGxldCBpbnB1dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi51cy1yYWRpb1wiKTtcbiAgICAgICAgaW5wdXRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxldCBpZEFyciA9IGlucHV0RWxlbWVudC5pZC5zcGxpdChcIi1cIik7XG4gICAgICAgICAgICBsZXQgdW9tID0gaWRBcnJbMV07XG4gICAgICAgICAgICBsZXQgcm93ID0gaWRBcnJbaWRBcnIubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBsZXQgZWxlbWVudFR5cGUgPSBpbnB1dEVsZW1lbnQudHlwZTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50VGFnID0gaW5wdXRFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGxldCBuZXdFbGVtZW50O1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudFR5cGUgPT09IFwicmFkaW9cIiAmJiB1b20gPT09IFwib3pcIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVSYWRpbyhcImluX2dyYW1zXCIsIFwiR1JcIiwgXCJncmFtXCIsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUeXBlID09PSBcInJhZGlvXCIgJiYgdW9tID09PSBcImxic1wiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZVJhZGlvKFwiaW5fa2lsb3NcIiwgXCJLR1wiLCBcImtnXCIsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUYWcgPT09IFwibGFiZWxcIiAmJiB1b20gPT09IFwib3pcIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVMYWJlbChcIkdcIiwgXCJ1b20tZ3JhbS1cIiArIHJvdywgXCJncmFtXCIsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUYWcgPT09IFwibGFiZWxcIiAmJiB1b20gPT09IFwibGJzXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlTGFiZWwoXCJLR1wiLCBcInVvbS1rZy1cIiArIHJvdywgXCJrZ1wiLCByb3cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmV3RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZChcbiAgICAgICAgICAgICAgICAgICAgbmV3RWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJhZGlvKGRhdGFDb2x1bW5OYW1lLCBsYWJlbCwgdW9tLCByb3cpIHtcbiAgICAgICAgbGV0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICByYWRpby5jbGFzc05hbWUgPVxuICAgICAgICAgICAgXCJmb3JtLWNoZWNrLWlucHV0XCIgK1xuICAgICAgICAgICAgKHVvbSA9PT0gXCJncmFtXCIgfHwgdW9tID09PSBcImtnXCIgPyBcIiBtZXRyaWMtcmFkaW9cIiA6IFwiIHVzLXJhZGlvXCIpO1xuICAgICAgICByYWRpby50eXBlID0gXCJyYWRpb1wiO1xuICAgICAgICByYWRpby5uYW1lID0gXCJ1b20tXCIgKyByb3cgKyBcIltdXCI7XG4gICAgICAgIHJhZGlvLmlkID0gXCJ1b20tXCIgKyB1b20gKyBcIi1cIiArIHJvdztcbiAgICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4tbmFtZVwiLCBkYXRhQ29sdW1uTmFtZSk7XG5cbiAgICAgICAgaWYgKHVvbSA9PT0gXCJncmFtXCIgfHwgdW9tID09PSBcIm96XCIpIHtcbiAgICAgICAgICAgIHJhZGlvLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29udmVydE1lYXN1cmVtZW50KHJvdyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmFkaW87XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxhYmVsKGlubmVySHRtbCwgaHRtbEZvciwgdW9tLCByb3csIGxpbmVMYWJlbCA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgbGFiZWwuY2xhc3NOYW1lID1cbiAgICAgICAgICAgIFwiZm9ybS1jaGVjay1sYWJlbFwiICtcbiAgICAgICAgICAgICh1b20gPT09IFwiZ3JhbVwiIHx8IHVvbSA9PT0gXCJrZ1wiID8gXCIgbWV0cmljLXJhZGlvXCIgOiBcIiB1cy1yYWRpb1wiKTtcbiAgICAgICAgbGFiZWwuaHRtbEZvciA9IGh0bWxGb3I7XG4gICAgICAgIGxhYmVsLmlubmVySFRNTCA9IGlubmVySHRtbDtcbiAgICAgICAgaWYgKCFsaW5lTGFiZWwpIHtcbiAgICAgICAgICAgIGxhYmVsLmlkID0gXCJ1b20tXCIgKyB1b20gKyBcIi1sYWJlbC1cIiArIHJvdztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhYmVsLmlkID0gXCJsaW5lLXVvbS1sYWJlbC1cIiArIHJvdztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9XG5cbiAgICB0aGlzLndpbmRvdy51cGRhdGVMaXN0ID0gZnVuY3Rpb24gdXBkYXRlTGlzdChlbGVtZW50LCBsaXN0SWQpIHtcbiAgICAgICAgbGV0IGNvbHVtbk5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uLW5hbWVcIik7XG4gICAgICAgIGxldCB2YWx1ZSA9IGVsZW1lbnQudmFsdWU7XG4gICAgICAgIGxldCB1cmwgPSBcIi9nZWFyLWxpc3QvXCIgKyBsaXN0SWQ7XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgZGF0YVtjb2x1bW5OYW1lXSA9IHZhbHVlO1xuXG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdCh1cmwsIGRhdGEsIGxpc3RJZClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBhbGVydChyZXMuZGF0YS5tc2cpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJGYWlsZWQgdG8gdXBkYXRlIGxpc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIGlmIChjb2x1bW5OYW1lID09PSBcInNvcnRcIiB8fCBjb2x1bW5OYW1lID09PSBcImxpc3RfY2xhc3NcIikge1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGVhZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbS1jb2xsYXBzaWJsZS1oZWFkZXJcIik7XG5cbiAgICBoZWFkZXJzLmZvckVhY2goKGhlYWRlcikgPT4ge1xuICAgICAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBoZWFkZXIubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgY29uc3QgYXJyb3cgPSBoZWFkZXIucXVlcnlTZWxlY3RvcihcIi5pdGVtLWFycm93XCIpO1xuICAgICAgICAgICAgaWYgKGNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BlblwiKSkge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUucGFkZGluZyA9IFwiMCAxMHB4XCI7XG4gICAgICAgICAgICAgICAgYXJyb3cuaW5uZXJIVE1MID0gXCImIzk2NjBcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUucGFkZGluZyA9IFwiMTBweFwiO1xuICAgICAgICAgICAgICAgIGFycm93LmlubmVySFRNTCA9IFwiJiM5NjUwXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgbGV0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbWFzdGVyLWl0ZW0tdGFibGUgaW5wdXRcIik7XG4gICAgbGV0IHNlbGVjdElucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWxlY3RcIik7XG5cbiAgICBpbnB1dHMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgaW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0pO1xuICAgIC8vIHNlbGVjdElucHV0cy5mb3JFYWNoKGZ1bmN0aW9uKHNlbGVjdElucHV0KSB7XG4gICAgLy8gICAgIHNlbGVjdElucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAvLyB9KTtcbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoR2VhckJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICBsZXQgc2VhcmNoTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdFNlYXJjaE1vZGFsJyk7XG4gICAgLy8gICAgIHNlYXJjaE1vZGFsLnNob3coKTtcbiAgICAvLyB9KTtcblxuICAgIC8vbGlzdENoYXJ0QnRuXG4gICAgZG9jdW1lbnRcbiAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwibGlzdENoYXJ0QnRuXCIpXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IGxpc3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdElkXCIpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IHVybCA9IFwiL2dlYXItbGlzdC1hbmFseXRpY3MvXCIgKyBsaXN0SWQ7XG5cbiAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgLmdldCh1cmwpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2hhcnRTdGF0dXMgPSBDaGFydC5nZXRDaGFydChcImdlYXJDaGFydFwiKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhcnRTdGF0dXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFydFN0YXR1cy5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdlYXJDaGFydFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoYXJ0RGF0YSA9IEpTT04ucGFyc2UocmVzLmRhdGEuY2hhcnREYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZG91Z2hudXRcIiwgLy8gQ2hhcnQgdHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsczogY2hhcnREYXRhLmxhYmVscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsYWJlbDogbGlzdE5hbWUgKyAnQnJlYWsgRG93bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBjaGFydERhdGEud2VpZ2h0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY2hhcnREYXRhLmNvbG9ycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJPZmZzZXQ6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3V0b3V0OiA0NSwgLy8gQWRqdXN0IHRoZSBjdXRvdXQgcGVyY2VudGFnZSBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiAxNTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhbGFiZWxzOiBmYWxzZSwgLy8gUmVtb3ZpbmcgdGhpcyBsaW5lIHNob3dzIHRoZSBkYXRhbGFiZWxzIGFnYWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZVJvdGF0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZVNjYWxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgYmFzZVdlaWdodCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2VXZWlnaHRcIikudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0b3RhbFBhY2tXZWlnaHQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3RhbFBhY2tXZWlnaHRcIikudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxCYXNlV2VpZ2h0XCIpLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VXZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxUb3RhbFdlaWdodFwiKS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFBhY2tXZWlnaHQ7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucm93LXNvcnRhYmxlXCIpLmZvckVhY2goZnVuY3Rpb24gKGRpdikge1xuICAgICAgICBjb25zdCBjYXRlZ29yeUlkID0gZGl2LmdldEF0dHJpYnV0ZShcImRhdGEtY2F0ZWdvcnktaWRcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW4gc29ydCByb3dzXCIpO1xuICAgICAgICBuZXcgU29ydGFibGUoZGl2LCB7XG4gICAgICAgICAgICBhbmltYXRpb246IDE1MCxcbiAgICAgICAgICAgIG9uRW5kOiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBuZXcgb3JkZXIgb2YgaXRlbXNcbiAgICAgICAgICAgICAgICBjb25zdCBvcmRlcmVkSWRzID0gW107XG4gICAgICAgICAgICAgICAgZGl2Lm5leHRTaWJsaW5nLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGVzdCA9IHJvdy5nZXRBdHRyaWJ1dGUoXCJkYXRhLW9yZGluYWxcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGVzdCBvcmRpbmFsOiBcIiArIHRlc3QpO1xuICAgICAgICAgICAgICAgICAgICBvcmRlcmVkSWRzLnB1c2gocm93LmdldEF0dHJpYnV0ZShcImRhdGEtb3JkaW5hbFwiKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBTZW5kIHRoZSBuZXcgb3JkZXIgdG8gdGhlIHNlcnZlciB2aWEgQUpBWFxuICAgICAgICAgICAgICAgIHVwZGF0ZUl0ZW1PcmRlcihjYXRlZ29yeUlkLCBvcmRlcmVkSWRzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc29ydGFibGVcIikuZm9yRWFjaChmdW5jdGlvbiAodGFibGUpIHtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlJZCA9IHRhYmxlLmdldEF0dHJpYnV0ZShcImRhdGEtY2F0ZWdvcnktaWRcIik7XG5cbiAgICAgICAgbmV3IFNvcnRhYmxlKHRhYmxlLnF1ZXJ5U2VsZWN0b3IoXCJ0Ym9keVwiKSwge1xuICAgICAgICAgICAgYW5pbWF0aW9uOiAxNTAsXG4gICAgICAgICAgICBvbkVuZDogZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgbmV3IG9yZGVyIG9mIGl0ZW1zXG4gICAgICAgICAgICAgICAgY29uc3Qgb3JkZXJlZElkcyA9IFtdO1xuICAgICAgICAgICAgICAgIHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0clwiKS5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJlZElkcy5wdXNoKHJvdy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIFNlbmQgdGhlIG5ldyBvcmRlciB0byB0aGUgc2VydmVyIHZpYSBBSkFYXG4gICAgICAgICAgICAgICAgdXBkYXRlSXRlbU9yZGVyKGNhdGVnb3J5SWQsIG9yZGVyZWRJZHMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gdXBkYXRlSXRlbU9yZGVyKGNhdGVnb3J5SWQsIG9yZGVyZWRJZHMpIHtcbiAgICAgICAgLy8gVXNlIEFKQVggdG8gc2VuZCB0aGUgcmVvcmRlcmVkIGl0ZW0gSURzIHRvIHRoZSBiYWNrZW5kXG4gICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RJZFwiKS52YWx1ZTtcblxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgXCJYLUNTUkYtVE9LRU5cIjogZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpXG4gICAgICAgICAgICAgICAgLmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIiksXG4gICAgICAgICAgICBjYXRlZ29yeV9pZDogY2F0ZWdvcnlJZCxcbiAgICAgICAgICAgIG9yZGVyZWRfaWRzOiBvcmRlcmVkSWRzLFxuICAgICAgICAgICAgbGlzdF9pZDogbGlzdElkLFxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCB1cmwgPSBcIi91cGRhdGUtbGlzdC1vcmRlclwiO1xuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QodXJsLCBkYXRhKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgIT0gXCIxXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQocmVzLmRhdGEubXNnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHNvcnRpbmdTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnRCeVwiKTtcbiAgICAgICAgbGV0IG9wdHMgPSBzb3J0aW5nU2VsZWN0Lm9wdGlvbnMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdHM7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNvcnRpbmdTZWxlY3Qub3B0aW9uc1tpXS52YWx1ZSA9PSBcImRyYWdfZHJvcFwiKSB7XG4gICAgICAgICAgICAgICAgc29ydGluZ1NlbGVjdC5vcHRpb25zW2ldLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbndpbmRvdy5heGlvcyA9IGF4aW9zO1xuXG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIk1vZGFsIiwiQ2hhcnQiLCJTb3J0YWJsZSIsImJvb3RzdHJhcCIsInJlcXVpcmUiLCJncmFtQ29udmVydGVyIiwib3VuY2VDb252ZXJ0ZXIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2hvd1Bhc3N3b3JkIiwiaWQiLCJwYXNzd29yZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRMaXN0SXRlbSIsIm51bWJlck9mSXRlbXNUb0FkZCIsImxpbmVzVG9BZGQiLCJfbG9vcCIsImxpc3RVT00iLCJmaW5hbElFbGVtZW50IiwibGlzdEJ5SXRlbXMiLCJjb25zb2xlIiwibG9nIiwiaXRlbVRhYmxlIiwiZ3JvdXBDYXRlZ29yeSIsInRhYmxlQ2F0ZWdvcnkiLCJ1c2VySWQiLCJsaXN0SWQiLCJmaW5hbEkiLCJyb3ciLCJjcmVhdGVFbGVtZW50IiwiY2VsbDAiLCJzY29wZSIsImlubmVySFRNTCIsImNlbGwxIiwiY291bnRlciIsInNldEF0dHJpYnV0ZSIsIml0ZW1OYW1lIiwiY3JlYXRlTGlzdEl0ZW1JbnB1dCIsInBsYWNlaG9sZGVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2VsbDYiLCJkZWxldGVCdG4iLCJjbGFzc05hbWUiLCJkYXRhIiwidXJsIiwiZ2V0Qm9vbGVhbkRhdGEiLCJ1cGRhdGVJdGVtIiwiX3JlZiIsIl9jYWxsZWUiLCJyZXNwb25zZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJheGlvcyIsInBvc3QiLCJhbGVydCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0MCIsIm5ld0lkIiwiY2VsbDIiLCJpdGVtV2VpZ2h0IiwiY2VsbDMiLCJsaW5lVW9tQ2VsbCIsInJhZGlvMSIsInJhZGlvMiIsInJhZGlvTGFiZWwxIiwicmFkaW9MYWJlbDIiLCJyYWRpb0xhYmVsMyIsImNyZWF0ZVJhZGlvIiwiY3JlYXRlTGFiZWwiLCJjZWxsNCIsInBhY2tlZEFtb3VudCIsImNlbGw1IiwidG90YWxMaW5lV2VpZ2h0Iiwic3ZnTmFtZXNwYWNlIiwiaWNvbkNlbGwiLCJpY29uIiwiY3JlYXRlRWxlbWVudE5TIiwicGF0aCIsImFwcGVuZENoaWxkIiwic2VsZWN0Q2VsbCIsImNhdGVnb3J5U2VsZWN0IiwiZ2V0Q2F0ZWdyb3lTZWxlY3QiLCJhcHBlbmQiLCJhZGRFdmVudExpc3RlbmVyV2VpZ2h0Q2FsYyIsInVwZGF0ZVVPTSIsInVzUmFkaW9Ub01ldHJpYyIsIm1ldHJpY1JhZGlvVG9VcyIsIm5lZWRlZEZvcldlaWdodHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibmVlZGVkRm9yV2VpZ2h0IiwiZ2V0TGluZVRvdGFsV2VpZ2h0IiwiY29udmVydCIsInVuZGVmaW5lZCIsIndlaWdodCIsInVvbSIsImxpbmVUb3RhbFdlaWdodEVsZW1lbnQiLCJsaW5lVG90YWwiLCJ0b0ZpeGVkIiwicmVwbGFjZSIsInVwZGF0ZUxpc3RJdGVtIiwiY29udmVydE1lYXN1cmVtZW50IiwidG90YWxXZWlnaHQiLCJ0b3RhbExpbmVXZWlnaHRWYWx1ZSIsIndlaWdodFZhbHVlIiwic21hbGwiLCJsYXJnZSIsImVsZW1lbnQiLCJsYWJlbCIsImxhYmVsSFRNTCIsImNoZWNrZWQiLCJjb2x1bW5OYW1lIiwiZ2V0QXR0cmlidXRlIiwiaWRBcnIiLCJzcGxpdCIsImFyckxlbmd0aCIsIml0ZW1JZCIsIml0ZW1JZFZhbHVlIiwic3Vic3RyaW5nIiwicmVzIiwiZXJyIiwiZXJyb3IiLCJ1cGRhdGVUb3RhbExpc3RXZWlnaHRzIiwid2VpZ2h0c0ZvclBXIiwiYmFzZVdlaWdodCIsInRvdGFsUGFja1dlaWdodCIsIm1heFBhY2tXZWlnaHQiLCJ1b21UZXh0Iiwid2VpZ2h0Rm9yUFciLCJjb252ZXJ0ZXIiLCJyb3dXZWlnaHQiLCJpdGVtQ2F0ZWdvcnlFbGVtZW50IiwiaXRlbUNhdGVnb3J5IiwiZGl2RWxlbWVudCIsImlubmVyVGV4dCIsInN0eWxlIiwiZGlzcGxheSIsIm5hbWVCYXNlIiwibGlzdEl0ZW1zIiwic2VsZWN0Iiwib3B0aW9uIiwidGV4dCIsIm9wdGlvbkxpc3QiLCJfcmVmMiIsIl9jYWxsZWUyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiZ2V0IiwiY2F0ZWdvcnkiLCJzZWxlY3RlZCIsImlucHV0RWxlbWVudHMiLCJpbnB1dEVsZW1lbnQiLCJlbGVtZW50VHlwZSIsImVsZW1lbnRUYWciLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJuZXdFbGVtZW50IiwicGFyZW50RWxlbWVudCIsInJlcGxhY2VDaGlsZCIsImRhdGFDb2x1bW5OYW1lIiwicmFkaW8iLCJpbm5lckh0bWwiLCJodG1sRm9yIiwibGluZUxhYmVsIiwidXBkYXRlTGlzdCIsImxvY2F0aW9uIiwicmVsb2FkIiwiaGVhZGVycyIsImhlYWRlciIsImNvbnRlbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJhcnJvdyIsInF1ZXJ5U2VsZWN0b3IiLCJjb250YWlucyIsInJlbW92ZSIsIm1heEhlaWdodCIsInBhZGRpbmciLCJzY3JvbGxIZWlnaHQiLCJpbnB1dHMiLCJzZWxlY3RJbnB1dHMiLCJpbnB1dCIsImRpc2FibGVkIiwiY2hhcnRTdGF0dXMiLCJnZXRDaGFydCIsImRlc3Ryb3kiLCJjdHgiLCJjaGFydERhdGEiLCJwYXJzZSIsIm15Q2hhcnQiLCJsYWJlbHMiLCJkYXRhc2V0cyIsIndlaWdodHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvcnMiLCJib3JkZXJXaWR0aCIsImhvdmVyT2Zmc2V0Iiwib3B0aW9ucyIsImN1dG91dCIsInJhZGl1cyIsImxlZ2VuZCIsInBsdWdpbnMiLCJkYXRhbGFiZWxzIiwiYW5pbWF0aW9uIiwiYW5pbWF0ZVJvdGF0ZSIsImFuaW1hdGVTY2FsZSIsInRleHRDb250ZW50IiwiZGl2IiwiY2F0ZWdvcnlJZCIsIm9uRW5kIiwiZXZ0Iiwib3JkZXJlZElkcyIsIm5leHRTaWJsaW5nIiwidGVzdCIsInVwZGF0ZUl0ZW1PcmRlciIsInRhYmxlIiwiY2F0ZWdvcnlfaWQiLCJvcmRlcmVkX2lkcyIsImxpc3RfaWQiLCJzdGF0dXMiLCJtc2ciLCJzb3J0aW5nU2VsZWN0Iiwib3B0cyIsImRlZmF1bHRzIiwiY29tbW9uIl0sInNvdXJjZVJvb3QiOiIifQ==