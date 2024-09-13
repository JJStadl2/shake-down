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
      console.log("list by item: " + listByItems);
      var itemTable;
      if (+listByItems == 1) {
        listByItems = true;
        console.log("list by item 2: " + listByItems);
        itemTable = document.getElementById("item-table-body");
      } else {
        listByItems = false;
        // let tableCategory =
        //     document.getElementById("categorycounter").value;
        var tableCategory = categorycounter;
        console.log("table cat: " + tableCategory);
        itemTable = document.getElementById("categoryTable-" + tableCategory);
        // groupCategory = document.getElementById(
        //     "listSectionCategory"
        // ).value;
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

      // // Create a new table cell
      // let iconCell = document.createElement("td");

      // // Append the SVG icon to the cell
      iconCell.appendChild(icon);
      cell1.appendChild(counter);
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
      divElement.innerText = "Base weight (" + baseWeight.toFixed(2) + " " + uomText + ") exceedes the weight for the '" + classWarningValue + "' style of hiking.";
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

  // let nestedSortables = document.querySelectorAll(".nested-sortable");

  // nestedSortables.forEach((nestedSortable, index) => {
  //     console.log('index: '+index);
  //     let content = nestedSortable.nextElementSibling;
  //     let categoryOrder = nestedSortable.getAttribute('data-category-order');
  //     let categoryValue = nestedSortable.getAttribute('data-category-value');
  //     console.log('cat order: '+ categoryOrder);
  //     console.log('cat value: '+ categoryValue);
  //     // console.dir(nestedSortable);
  //     // console.dir(content);
  //     Sortable.create(nestedSortable, {
  //         animation: 150,
  //         group: 'nested',
  //         animation: 150,
  //         fallbackOnBody: true,
  //         swapThreshold: 0.65,
  //         handle:'.item-collapsible-header',
  //         onEnd: function (/**Event*/evt) {
  //             let catOrderArray = {};
  //             let oldIndex = evt.oldIndex;

  //             // Get the new index (after the item is dropped)
  //             let newIndex = evt.newIndex;
  //             catOrderArray['item_category'] = categoryValue;
  //             catOrderArray['old'] =  categoryOrder;
  //             catOrderArray['new'] =  newIndex;

  //             // Optional: handle the event when the drag ends, if needed
  //             console.log('Moved item from index', categoryOrder, 'to', newIndex);
  //             console.log('Array: '+ JSON.stringify(catOrderArray));
  //         }
  //       });
  // });

  // Initialize sortable on the parent container
  sortablejs__WEBPACK_IMPORTED_MODULE_2__["default"].create(document.querySelector('.parent-container'), {
    animation: 150,
    handle: '.item-collapsible-header',
    ghostClass: 'sortable-ghost',
    onEnd: function onEnd(evt) {
      // After sorting is completed, update the positions in the database
      updateCategoryOrder();
    }
  });

  // Function to capture the new order and send it to the server
  function updateCategoryOrder() {
    // Create an array to store the new order
    var newOrder = [];

    // Get all the sortable elements (collapsible-container)
    document.querySelectorAll('.draggable-container').forEach(function (item, index) {
      // Get the data-id attribute and store it with the new index (position)
      newOrder.push({
        item_category: item.getAttribute('data-category-value'),
        category_order: index + 1 // Assuming 1-based index for database storage
      });
    });
    console.log('order array: ' + JSON.stringify(newOrder));
    // Send the new order to the server using Fetch (can also use jQuery's $.post if preferred)
    // fetch('/update-order', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content') // For Laravel, if you're using CSRF protection
    //     },
    //     body: JSON.stringify({order: newOrder})
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log('Order updated successfully:', data);
    // })
    // .catch(error => {
    //     console.error('Error updating order:', error);
    // });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNpRCxLQUFLLENBQUM4SyxRQUFRLENBQUM3RCxPQUFPLENBQUM4RCxNQUFNLENBQUMsa0JBQWtCLENBQUMsR0FBRyxnQkFBZ0I7Ozs7Ozs7Ozs7O0FDSDNFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zYXNzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAnLi9ib290c3RyYXAnIDtcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcImJvb3RzdHJhcFwiO1xuLy8gaW1wb3J0ICAnYm9vdHN0cmFwJztcbmltcG9ydCBcIkBwb3BwZXJqcy9jb3JlXCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzL2F1dG9cIjtcbmltcG9ydCBTb3J0YWJsZSBmcm9tIFwic29ydGFibGVqc1wiO1xuY29uc3QgYm9vdHN0cmFwID0gcmVxdWlyZShcIi4vYm9vdHN0cmFwXCIpO1xuY29uc3QgZ3JhbUNvbnZlcnRlciA9IDEwMDA7XG5jb25zdCBvdW5jZUNvbnZlcnRlciA9IDE2O1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgdGhpcy53aW5kb3cuc2hvd1Bhc3N3b3JkID0gZnVuY3Rpb24gc2hvd1Bhc3N3b3JkKGlkKSB7XG4gICAgICAgIGxldCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgaWYgKHBhc3N3b3JkLnR5cGUgPT09IFwicGFzc3dvcmRcIikge1xuICAgICAgICAgICAgcGFzc3dvcmQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFzc3dvcmQudHlwZSA9IFwicGFzc3dvcmRcIjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhpcy53aW5kb3cuYWRkTGlzdEl0ZW0gPSBmdW5jdGlvbiBhZGRMaXN0SXRlbShjYXRlZ29yeWNvdW50ZXIgPSBudWxsLCBncm91cENhdGVnb3J5ID0gbnVsbCkge1xuICAgICAgICBsZXQgbnVtYmVyT2ZJdGVtc1RvQWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lc1RvQWRkXCIpO1xuICAgICAgICBsZXQgbGluZXNUb0FkZCA9IDE7XG4gICAgICAgIGlmIChudW1iZXJPZkl0ZW1zVG9BZGQgPT09IG51bGwgfHwgK251bWJlck9mSXRlbXNUb0FkZC52YWx1ZSA8IDEpIHtcbiAgICAgICAgICAgIG51bWJlck9mSXRlbXNUb0FkZC52YWx1ZSA9IGxpbmVzVG9BZGQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaW5lc1RvQWRkID0gK251bWJlck9mSXRlbXNUb0FkZC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXNUb0FkZDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbGlzdFVPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tXCIpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGZpbmFsSUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbmFsLWlcIik7XG4gICAgICAgICAgICBsZXQgbGlzdEJ5SXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RCeUl0ZW1zXCIpLnZhbHVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsaXN0IGJ5IGl0ZW06IFwiICsgbGlzdEJ5SXRlbXMpO1xuICAgICAgICAgICAgbGV0IGl0ZW1UYWJsZTtcblxuICAgICAgICAgICAgaWYgKCtsaXN0QnlJdGVtcyA9PSAxKSB7XG4gICAgICAgICAgICAgICAgbGlzdEJ5SXRlbXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibGlzdCBieSBpdGVtIDI6IFwiICsgbGlzdEJ5SXRlbXMpO1xuICAgICAgICAgICAgICAgIGl0ZW1UYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXRlbS10YWJsZS1ib2R5XCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsaXN0QnlJdGVtcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIGxldCB0YWJsZUNhdGVnb3J5ID1cbiAgICAgICAgICAgICAgICAvLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXRlZ29yeWNvdW50ZXJcIikudmFsdWU7XG4gICAgICAgICAgICAgICAgbGV0IHRhYmxlQ2F0ZWdvcnkgPSBjYXRlZ29yeWNvdW50ZXI7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0YWJsZSBjYXQ6IFwiICsgdGFibGVDYXRlZ29yeSk7XG4gICAgICAgICAgICAgICAgaXRlbVRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgICAgICAgICAgIFwiY2F0ZWdvcnlUYWJsZS1cIiArIHRhYmxlQ2F0ZWdvcnlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIC8vIGdyb3VwQ2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgICAgICAvLyAgICAgXCJsaXN0U2VjdGlvbkNhdGVnb3J5XCJcbiAgICAgICAgICAgICAgICAvLyApLnZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdXNlcklkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VySWRcIikudmFsdWU7XG4gICAgICAgICAgICBsZXQgbGlzdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0SWRcIikudmFsdWU7XG4gICAgICAgICAgICBsZXQgZmluYWxJID0gZmluYWxJRWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgIGZpbmFsSUVsZW1lbnQudmFsdWUgPSArZmluYWxJICsgMTtcblxuICAgICAgICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIGNlbGxzIGFuZCBpbnB1dCBlbGVtZW50cy5cbiAgICAgICAgICAgIGxldCBjZWxsMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgICAgICAgICAgIGNlbGwwLnNjb3BlID0gXCJyb3dcIjtcbiAgICAgICAgICAgIGNlbGwwLmlubmVySFRNTCA9IGZpbmFsSTtcblxuICAgICAgICAgICAgbGV0IGNlbGwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuXG4gICAgICAgICAgICBsZXQgY291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGNvdW50ZXIudHlwZSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICBjb3VudGVyLm5hbWUgPSBcImlkW11cIjtcbiAgICAgICAgICAgIGNvdW50ZXIuaWQgPSBcImlkLVwiICsgZmluYWxJO1xuICAgICAgICAgICAgY291bnRlci52YWx1ZSA9IFwibmV3LVwiICsgZmluYWxJO1xuICAgICAgICAgICAgY291bnRlci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIsIFwiaWRcIik7XG5cbiAgICAgICAgICAgIGxldCBpdGVtTmFtZSA9IGNyZWF0ZUxpc3RJdGVtSW5wdXQoXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgXCJpdGVtTmFtZVwiLFxuICAgICAgICAgICAgICAgIGZpbmFsSSxcbiAgICAgICAgICAgICAgICBcIml0ZW1fbmFtZVwiLFxuICAgICAgICAgICAgICAgIGxpc3RCeUl0ZW1zXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaXRlbU5hbWUucGxhY2Vob2xkZXIgPSBcIkl0ZW0gTmFtZVwiO1xuICAgICAgICAgICAgaXRlbU5hbWUuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcblxuICAgICAgICAgICAgbGV0IGNlbGw2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgY2VsbDYuaWQgPSBcImJ0bi10ZC1cIiArIGZpbmFsSTtcbiAgICAgICAgICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5pZCA9IFwiZGVsZXRlQnRuLVwiICsgZmluYWxJO1xuICAgICAgICAgICAgZGVsZXRlQnRuLmNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbSAgcHktMlwiO1xuICAgICAgICAgICAgZGVsZXRlQnRuLmlubmVySFRNTCA9IFwieFwiO1xuXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICAgICAgbGV0IHVybCA9IFwiL2xpc3QtaXRlbVwiO1xuXG4gICAgICAgICAgICBpZiAobGlzdFVPTSA9PSBcInVzXCIpIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gZ2V0Qm9vbGVhbkRhdGEoXCJpbl9vdW5jZXNcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGEgPSBnZXRCb29sZWFuRGF0YShcImluX2dyYW1zXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YVtcImxpc3RfaWRcIl0gPSBsaXN0SWQ7XG4gICAgICAgICAgICBkYXRhW1widXNlcl9pZFwiXSA9IHVzZXJJZDtcbiAgICAgICAgICAgIGRhdGFbXCJpdGVtX25hbWVcIl0gPSBcIlwiO1xuXG4gICAgICAgICAgICBsZXQgdXBkYXRlSXRlbTtcbiAgICAgICAgICAgIHVwZGF0ZUl0ZW0gPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KHVybCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJyZXNwb25zZSBmcm8gbmV3IGlucHV0OiBcIiArIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICAvLyApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIFRvIHVzZSB0aGUgZnVuY3Rpb24gYW5kIGhhbmRsZSB0aGUgcmVzcG9uc2UgZGF0YVxuICAgICAgICAgICAgdXBkYXRlSXRlbSgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCB0aGUgcmVzcG9uc2UgZGF0YVxuICAgICAgICAgICAgICAgIGNvdW50ZXIudmFsdWUgPSBkYXRhLm5ld0lkO1xuICAgICAgICAgICAgICAgIHJvdy5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIGRhdGEubmV3SWQpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiLFxuICAgICAgICAgICAgICAgICAgICBcIi9kZXN0cm95LWxpc3QtaXRlbS9cIiArIGRhdGEubmV3SWRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCBjZWxsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGxldCBpdGVtV2VpZ2h0ID0gY3JlYXRlTGlzdEl0ZW1JbnB1dChcbiAgICAgICAgICAgICAgICBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIFwiaXRlbVdlaWdodFwiLFxuICAgICAgICAgICAgICAgIGZpbmFsSSxcbiAgICAgICAgICAgICAgICBcIml0ZW1fd2VpZ2h0XCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LnZhbHVlID0gMDtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQuY2xhc3NMaXN0LmFkZChcImZvci13ZWlnaHRcIik7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJudW1iZXItaW5wdXRcIik7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRyb2xcIik7XG4gICAgICAgICAgICBjZWxsMi5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWNvbFwiKTtcblxuICAgICAgICAgICAgbGV0IGNlbGwzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgbGV0IGxpbmVVb21DZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgY2VsbDMuY2xhc3NMaXN0LmFkZChcInVvbS10ZFwiKTtcbiAgICAgICAgICAgIGxpbmVVb21DZWxsLmNsYXNzTGlzdC5hZGQoXCJ1b20tdGRcIik7XG4gICAgICAgICAgICBsZXQgcmFkaW8xO1xuICAgICAgICAgICAgbGV0IHJhZGlvMjtcbiAgICAgICAgICAgIGxldCByYWRpb0xhYmVsMTtcbiAgICAgICAgICAgIGxldCByYWRpb0xhYmVsMjtcbiAgICAgICAgICAgIGxldCByYWRpb0xhYmVsMztcblxuICAgICAgICAgICAgaWYgKGxpc3RVT00gPT09IFwidXNcIikge1xuICAgICAgICAgICAgICAgIHJhZGlvMSA9IGNyZWF0ZVJhZGlvKFwiaW5fb3VuY2VzXCIsIFwiXCIsIFwib3pcIiwgZmluYWxJKTtcbiAgICAgICAgICAgICAgICByYWRpb0xhYmVsMSA9IGNyZWF0ZUxhYmVsKFxuICAgICAgICAgICAgICAgICAgICBcIk9aXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidW9tLW96LVwiICsgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICBcIm96XCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsSVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmFkaW8yID0gY3JlYXRlUmFkaW8oXCJpbl9sYnNcIiwgXCJcIiwgXCJsYnNcIiwgZmluYWxJKTtcbiAgICAgICAgICAgICAgICByYWRpb0xhYmVsMiA9IGNyZWF0ZUxhYmVsKFxuICAgICAgICAgICAgICAgICAgICBcIkxCU1wiLFxuICAgICAgICAgICAgICAgICAgICBcInVvbS1sYnMtXCIgKyBmaW5hbEksXG4gICAgICAgICAgICAgICAgICAgIFwibGJzXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsSVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmFkaW9MYWJlbDMgPSBjcmVhdGVMYWJlbChcbiAgICAgICAgICAgICAgICAgICAgXCJPWlwiLFxuICAgICAgICAgICAgICAgICAgICBcInVvbS1vei1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgICAgICAgICAgXCJvelwiLFxuICAgICAgICAgICAgICAgICAgICBmaW5hbEksXG4gICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByYWRpbzEgPSBjcmVhdGVSYWRpbyhcImluX2dyYW1zXCIsIFwiXCIsIFwiZ3JhbVwiLCBmaW5hbEkpO1xuICAgICAgICAgICAgICAgIHJhZGlvTGFiZWwxID0gY3JlYXRlTGFiZWwoXG4gICAgICAgICAgICAgICAgICAgIFwiR1wiLFxuICAgICAgICAgICAgICAgICAgICBcInVvbS1ncmFtLVwiICsgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICBcImdyYW1cIixcbiAgICAgICAgICAgICAgICAgICAgZmluYWxJXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByYWRpbzIgPSBjcmVhdGVSYWRpbyhcImluX2tpbG9zXCIsIFwiXCIsIFwia2dcIiwgZmluYWxJKTtcbiAgICAgICAgICAgICAgICByYWRpb0xhYmVsMiA9IGNyZWF0ZUxhYmVsKFxuICAgICAgICAgICAgICAgICAgICBcIktHXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidW9tLWtnLVwiICsgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICBcImtnXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsSVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmFkaW9MYWJlbDMgPSBjcmVhdGVMYWJlbChcbiAgICAgICAgICAgICAgICAgICAgXCJHXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidW9tLWdyYW0tXCIgKyBmaW5hbEksXG4gICAgICAgICAgICAgICAgICAgIFwiZ3JhbVwiLFxuICAgICAgICAgICAgICAgICAgICBmaW5hbEksXG4gICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgY2VsbDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBjZWxsNC5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWNvbFwiKTtcbiAgICAgICAgICAgIGxldCBwYWNrZWRBbW91bnQgPSBjcmVhdGVMaXN0SXRlbUlucHV0KFxuICAgICAgICAgICAgICAgIFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgXCJwYWNrZWRBbW91bnRcIixcbiAgICAgICAgICAgICAgICBmaW5hbEksXG4gICAgICAgICAgICAgICAgXCJhbW91bnRcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHBhY2tlZEFtb3VudC52YWx1ZSA9IDE7XG5cbiAgICAgICAgICAgIHBhY2tlZEFtb3VudC5jbGFzc0xpc3QuYWRkKFwiZm9yLXdlaWdodFwiKTtcbiAgICAgICAgICAgIHBhY2tlZEFtb3VudC5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWlucHV0XCIpO1xuICAgICAgICAgICAgcGFja2VkQW1vdW50LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRyb2xcIik7XG5cbiAgICAgICAgICAgIGxldCBjZWxsNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGNlbGw1LmNsYXNzTGlzdC5hZGQoXCJudW1iZXItY29sXCIpO1xuICAgICAgICAgICAgbGV0IHRvdGFsTGluZVdlaWdodCA9IGNyZWF0ZUxpc3RJdGVtSW5wdXQoXG4gICAgICAgICAgICAgICAgXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICBcInRvdGFsTGluZVdlaWdodFwiLFxuICAgICAgICAgICAgICAgIGZpbmFsSSxcbiAgICAgICAgICAgICAgICBcInRvdGFsX2xpbmVfd2VpZ2h0XCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQudmFsdWUgPSAwO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgICBcImRhdGEtY29sdW1uLW5hbWVcIixcbiAgICAgICAgICAgICAgICBcInRvdGFsX2xpbmVfd2VpZ2h0XCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQuc2V0QXR0cmlidXRlKFwicmVhZG9ubHlcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQuY2xhc3NMaXN0LmFkZChcIm51bWJlci1pbnB1dFwiKTtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJmb3ItdG90YWwtbGlzdC13ZWlnaHRcIik7XG5cbiAgICAgICAgICAgIC8vYXBwZW5kIGlucHV0cyB0byBjZWxscy5cblxuICAgICAgICAgICAgLy8gRGVmaW5lIHRoZSBTVkcgbmFtZXNwYWNlXG4gICAgICAgICAgICBjb25zdCBzdmdOYW1lc3BhY2UgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG4gICAgICAgICAgICBsZXQgaWNvbkNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgU1ZHIGVsZW1lbnRcbiAgICAgICAgICAgIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05hbWVzcGFjZSwgXCJzdmdcIik7XG4gICAgICAgICAgICBpY29uLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMTZcIik7XG4gICAgICAgICAgICBpY29uLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjE2XCIpO1xuICAgICAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwiY3VycmVudENvbG9yXCIpO1xuICAgICAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJpIGJpLWdyaXAtdmVydGljYWxcIik7XG4gICAgICAgICAgICBpY29uLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgMTYgMTZcIik7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgPHBhdGg+IGVsZW1lbnRcbiAgICAgICAgICAgIGxldCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05hbWVzcGFjZSwgXCJwYXRoXCIpO1xuICAgICAgICAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgXCJkXCIsXG4gICAgICAgICAgICAgICAgXCJNNyAyYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMG0zIDBhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwTTcgNWExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBtMyAwYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgME03IDhhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbTMgMGExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBtLTMgM2ExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBtMyAwYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMG0tMyAzYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMG0zIDBhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwXCJcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgcGF0aCB0byB0aGUgU1ZHXG4gICAgICAgICAgICBpY29uLmFwcGVuZENoaWxkKHBhdGgpO1xuXG4gICAgICAgICAgICAvLyAvLyBDcmVhdGUgYSBuZXcgdGFibGUgY2VsbFxuICAgICAgICAgICAgLy8gbGV0IGljb25DZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuXG4gICAgICAgICAgICAvLyAvLyBBcHBlbmQgdGhlIFNWRyBpY29uIHRvIHRoZSBjZWxsXG4gICAgICAgICAgICBpY29uQ2VsbC5hcHBlbmRDaGlsZChpY29uKTtcblxuICAgICAgICAgICAgY2VsbDEuYXBwZW5kQ2hpbGQoY291bnRlcik7XG4gICAgICAgICAgICAvLyBjZWxsMS5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgICAgIGNlbGwxLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIGNlbGwyLmFwcGVuZENoaWxkKGl0ZW1XZWlnaHQpO1xuXG4gICAgICAgICAgICBsZXQgc2VsZWN0Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGxldCBjYXRlZ29yeVNlbGVjdCA9IGdldENhdGVncm95U2VsZWN0KGZpbmFsSSwgZ3JvdXBDYXRlZ29yeSk7XG4gICAgICAgICAgICAvL2xpc3RTZWN0aW9uQ2F0ZWdvcnlcbiAgICAgICAgICAgIHNlbGVjdENlbGwuYXBwZW5kKGNhdGVnb3J5U2VsZWN0KTtcblxuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQocmFkaW8xKTtcbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHJhZGlvTGFiZWwxKTtcbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHJhZGlvMik7XG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChyYWRpb0xhYmVsMik7XG5cbiAgICAgICAgICAgIGNlbGw0LmFwcGVuZENoaWxkKHBhY2tlZEFtb3VudCk7XG4gICAgICAgICAgICBjZWxsNS5hcHBlbmRDaGlsZCh0b3RhbExpbmVXZWlnaHQpO1xuICAgICAgICAgICAgbGluZVVvbUNlbGwuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbDMpO1xuICAgICAgICAgICAgY2VsbDYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIGNlbGxzIHRvIHRoZSByb3cuXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoaWNvbkNlbGwpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwxKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChzZWxlY3RDZWxsKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsMyk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDIpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGw0KTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsNSk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQobGluZVVvbUNlbGwpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGw2KTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSByb3cgdG8gdGhlIHRhYmxlLlxuICAgICAgICAgICAgaXRlbVRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG5cbiAgICAgICAgICAgIC8vYWRkIGZ1bmN0aW9ucyB0byBjYWxjdWxhdGUgYW5kIGNvbnZlcnQgdG90YWwgd2VpZ2h0LlxuICAgICAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcldlaWdodENhbGMoZmluYWxJKTtcbiAgICAgICAgfVxuICAgICAgICBudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPSAxO1xuICAgIH07XG5cbiAgICB0aGlzLndpbmRvdy51cGRhdGVVT00gPSBmdW5jdGlvbiB1cGRhdGVVT00odmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBcInVzXCIpIHtcbiAgICAgICAgICAgIHVzUmFkaW9Ub01ldHJpYygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWV0cmljUmFkaW9Ub1VzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJXZWlnaHRDYWxjKHJvdykge1xuICAgICAgICBsZXQgbmVlZGVkRm9yV2VpZ2h0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yLXdlaWdodFwiKTtcbiAgICAgICAgbmVlZGVkRm9yV2VpZ2h0cy5mb3JFYWNoKGZ1bmN0aW9uIChuZWVkZWRGb3JXZWlnaHQpIHtcbiAgICAgICAgICAgIG5lZWRlZEZvcldlaWdodC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBnZXRMaW5lVG90YWxXZWlnaHQocm93KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLndpbmRvdy5nZXRMaW5lVG90YWxXZWlnaHQgPSBmdW5jdGlvbiBnZXRMaW5lVG90YWxXZWlnaHQoXG4gICAgICAgIHJvdyxcbiAgICAgICAgY29udmVydCA9IGZhbHNlXG4gICAgKSB7XG4gICAgICAgIGxldCB3ZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1XZWlnaHQtXCIgKyByb3cpLnZhbHVlO1xuICAgICAgICBsZXQgcGFja2VkQW1vdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWNrZWRBbW91bnQtXCIgKyByb3cpLnZhbHVlO1xuICAgICAgICBsZXQgdW9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b21cIik7XG4gICAgICAgIGxldCBsaW5lVG90YWxXZWlnaHRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgICBcInRvdGFsTGluZVdlaWdodC1cIiArIHJvd1xuICAgICAgICApO1xuXG4gICAgICAgIGxldCBsaW5lVG90YWwgPSAwO1xuICAgICAgICBsaW5lVG90YWwgPSArd2VpZ2h0ICogK3BhY2tlZEFtb3VudDtcbiAgICAgICAgbGluZVRvdGFsID0gbGluZVRvdGFsLnRvRml4ZWQoMikucmVwbGFjZSgvWy4sXTAwJC8sIFwiXCIpO1xuICAgICAgICBsaW5lVG90YWxXZWlnaHRFbGVtZW50LnZhbHVlID0gbGluZVRvdGFsO1xuXG4gICAgICAgIHVwZGF0ZUxpc3RJdGVtKGxpbmVUb3RhbFdlaWdodEVsZW1lbnQpO1xuICAgIH07XG4gICAgdGhpcy53aW5kb3cuY29udmVydE1lYXN1cmVtZW50ID0gZnVuY3Rpb24gY29udmVydE1lYXN1cmVtZW50KFxuICAgICAgICByb3csXG4gICAgICAgIGNvbnZlcnQgPSBmYWxzZVxuICAgICkge1xuICAgICAgICBsZXQgdW9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b21cIikudmFsdWU7XG4gICAgICAgIGxldCB3ZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1XZWlnaHQtXCIgKyByb3cpO1xuICAgICAgICBsZXQgcGFja2VkQW1vdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWNrZWRBbW91bnQtXCIgKyByb3cpLnZhbHVlO1xuICAgICAgICBsZXQgdG90YWxXZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdGFsTGluZVdlaWdodC1cIiArIHJvdyk7XG4gICAgICAgIGxldCB0b3RhbExpbmVXZWlnaHRWYWx1ZSA9IDA7XG4gICAgICAgIGxldCB3ZWlnaHRWYWx1ZSA9IHdlaWdodC52YWx1ZTtcbiAgICAgICAgbGV0IHNtYWxsO1xuICAgICAgICBsZXQgbGFyZ2U7XG4gICAgICAgIGxldCBlbGVtZW50O1xuICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmUtdW9tLWxhYmVsLVwiICsgcm93KTtcbiAgICAgICAgbGV0IGxhYmVsSFRNTDtcblxuICAgICAgICBpZiAodW9tID09PSBcInVzXCIpIHtcbiAgICAgICAgICAgIHNtYWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b20tb3otXCIgKyByb3cpO1xuICAgICAgICAgICAgbGFyZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1sYnMtXCIgKyByb3cpO1xuICAgICAgICAgICAgaWYgKHNtYWxsLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB3ZWlnaHRWYWx1ZSA9ICt3ZWlnaHRWYWx1ZSAqIDE2O1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBzbWFsbDtcbiAgICAgICAgICAgICAgICBsYWJlbEhUTUwgPSBcIk9aXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdlaWdodFZhbHVlID0gK3dlaWdodFZhbHVlIC8gMTY7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGxhcmdlO1xuICAgICAgICAgICAgICAgIGxhYmVsSFRNTCA9IFwiTEJTXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzbWFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tLWdyYW0tXCIgKyByb3cpO1xuICAgICAgICAgICAgbGFyZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1rZy1cIiArIHJvdyk7XG5cbiAgICAgICAgICAgIGlmIChzbWFsbC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0VmFsdWUgPSArd2VpZ2h0VmFsdWUgKiAxMDAwO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBzbWFsbDtcbiAgICAgICAgICAgICAgICBsYWJlbEhUTUwgPSBcIkdcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0VmFsdWUgPSArd2VpZ2h0VmFsdWUgLyAxMDAwO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBsYXJnZTtcbiAgICAgICAgICAgICAgICBsYWJlbEhUTUwgPSBcIktHXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0b3RhbExpbmVXZWlnaHRWYWx1ZSA9ICt3ZWlnaHRWYWx1ZSAqICtwYWNrZWRBbW91bnQ7XG4gICAgICAgIHdlaWdodC52YWx1ZSA9IHdlaWdodFZhbHVlLnRvRml4ZWQoMikucmVwbGFjZSgvWy4sXTAwJC8sIFwiXCIpO1xuICAgICAgICB0b3RhbFdlaWdodC52YWx1ZSA9IHRvdGFsTGluZVdlaWdodFZhbHVlXG4gICAgICAgICAgICAudG9GaXhlZCgyKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1suLF0wMCQvLCBcIlwiKTtcbiAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gbGFiZWxIVE1MO1xuICAgICAgICB1cGRhdGVMaXN0SXRlbShlbGVtZW50KTtcbiAgICAgICAgdXBkYXRlTGlzdEl0ZW0od2VpZ2h0KTtcbiAgICAgICAgdXBkYXRlTGlzdEl0ZW0odG90YWxXZWlnaHQpO1xuICAgIH07XG4gICAgZnVuY3Rpb24gZ2V0Qm9vbGVhbkRhdGEoY29sdW1uTmFtZSkge1xuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICBkYXRhW1wiaW5fb3VuY2VzXCJdID0gZmFsc2U7XG4gICAgICAgIGRhdGFbXCJpbl9sYnNcIl0gPSBmYWxzZTtcbiAgICAgICAgZGF0YVtcImluX2dyYW1zXCJdID0gZmFsc2U7XG4gICAgICAgIGRhdGFbXCJpbl9raWxvc1wiXSA9IGZhbHNlO1xuICAgICAgICBzd2l0Y2ggKGNvbHVtbk5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJpbl9vdW5jZXNcIjpcbiAgICAgICAgICAgICAgICBkYXRhW1wiaW5fb3VuY2VzXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJpbl9sYnNcIjpcbiAgICAgICAgICAgICAgICBkYXRhW1wiaW5fbGJzXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJpbl9ncmFtc1wiOlxuICAgICAgICAgICAgICAgIGRhdGFbXCJpbl9ncmFtc1wiXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaW5fa2lsb3NcIjpcbiAgICAgICAgICAgICAgICBkYXRhW1wiaW5fa2lsb3NcIl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgdGhpcy53aW5kb3cudXBkYXRlTGlzdEl0ZW0gPSBmdW5jdGlvbiB1cGRhdGVMaXN0SXRlbShlbGVtZW50KSB7XG4gICAgICAgIGxldCBjb2x1bW5OYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIpO1xuICAgICAgICBsZXQgdmFsdWUgPSBlbGVtZW50LnZhbHVlO1xuICAgICAgICBsZXQgaWQgPSBlbGVtZW50LmlkO1xuICAgICAgICBsZXQgaWRBcnIgPSBpZC5zcGxpdChcIi1cIik7XG4gICAgICAgIGxldCBhcnJMZW5ndGggPSBpZEFyci5sZW5ndGg7XG4gICAgICAgIGxldCByb3cgPSBpZEFyclthcnJMZW5ndGggLSAxXTtcbiAgICAgICAgbGV0IGl0ZW1JZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWQtXCIgKyByb3cpO1xuICAgICAgICBsZXQgaXRlbUlkVmFsdWUgPSBpdGVtSWQudmFsdWU7XG4gICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RJZFwiKS52YWx1ZTtcbiAgICAgICAgbGV0IHVybCA9IFwiL2xpc3QtaXRlbS9cIiArIGl0ZW1JZFZhbHVlO1xuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICBsZXQgdXNlcklkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VySWRcIikudmFsdWU7XG5cbiAgICAgICAgZGF0YVtjb2x1bW5OYW1lXSA9IHZhbHVlO1xuXG4gICAgICAgIGlmIChjb2x1bW5OYW1lLnN1YnN0cmluZygwLCAzKSA9PT0gXCJpbl9cIikge1xuICAgICAgICAgICAgZGF0YSA9IGdldEJvb2xlYW5EYXRhKGNvbHVtbk5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtcImxpc3RfaWRcIl0gPSBsaXN0SWQ7XG4gICAgICAgIGRhdGFbXCJ1c2VyX2lkXCJdID0gdXNlcklkO1xuICAgICAgICBkYXRhW1wiaWRcIl0gPSBpdGVtSWRWYWx1ZTtcblxuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QodXJsLCBkYXRhLCBpdGVtSWQpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7fSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJGYWlsZWQgdG8gdXBkYXRlIGxpc3QgaXRlbS4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdXBkYXRlVG90YWxMaXN0V2VpZ2h0cygpO1xuICAgIH07XG4gICAgZnVuY3Rpb24gdXBkYXRlVG90YWxMaXN0V2VpZ2h0cygpIHtcbiAgICAgICAgbGV0IHdlaWdodHNGb3JQVyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yLXRvdGFsLWxpc3Qtd2VpZ2h0XCIpO1xuICAgICAgICBsZXQgYmFzZVdlaWdodCA9IDA7XG4gICAgICAgIGxldCB0b3RhbFBhY2tXZWlnaHQgPSAwO1xuICAgICAgICBsZXQgbWF4UGFja1dlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWF4UGFja1dlaWdodFwiKS52YWx1ZTtcbiAgICAgICAgbGV0IGNsYXNzV2FybmluZ1ZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsYXNzV2FybmluZ1ZhbHVlJykudmFsdWU7XG4gICAgICAgIGxldCB1b21UZXh0ID0gXCJMQlNcIjtcbiAgICAgICAgd2VpZ2h0c0ZvclBXLmZvckVhY2goZnVuY3Rpb24gKHdlaWdodEZvclBXKSB7XG4gICAgICAgICAgICBsZXQgaWQgPSB3ZWlnaHRGb3JQVy5pZDtcbiAgICAgICAgICAgIGxldCBpZEFyciA9IGlkLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgICAgIGxldCBhcnJMZW5ndGggPSBpZEFyci5sZW5ndGg7XG4gICAgICAgICAgICBsZXQgcm93ID0gaWRBcnJbYXJyTGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBsZXQgcGFja2VkQW1vdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgICAgICAgXCJwYWNrZWRBbW91bnQtXCIgKyByb3dcbiAgICAgICAgICAgICkudmFsdWU7XG4gICAgICAgICAgICBsZXQgY29udmVydGVyID0gMTtcbiAgICAgICAgICAgIGxldCByb3dXZWlnaHQgPSAwO1xuICAgICAgICAgICAgbGV0IGl0ZW1XZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1XZWlnaHQtXCIgKyByb3cpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IHVvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tXCIpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGl0ZW1DYXRlZ29yeUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgICAgICBcIml0ZW1DYXRlZ29yeS1cIiArIHJvd1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbGV0IGl0ZW1DYXRlZ29yeSA9IFwiXCI7XG4gICAgICAgICAgICBpZiAoaXRlbUNhdGVnb3J5RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGl0ZW1DYXRlZ29yeSA9IGl0ZW1DYXRlZ29yeUVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpdGVtQ2F0ZWdvcnkgPT09IHVuZGVmaW5lZCB8fCBpdGVtQ2F0ZWdvcnkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpdGVtQ2F0ZWdvcnkgPSBcIlwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodW9tID09PSBcInVzXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b20tb3otXCIgKyByb3cpLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udmVydGVyID0gb3VuY2VDb252ZXJ0ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1b21UZXh0ID0gXCJLR1wiO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b20tZ3JhbS1cIiArIHJvdykuY2hlY2tlZCA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBjb252ZXJ0ZXIgPSBncmFtQ29udmVydGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcm93V2VpZ2h0ID0gK3BhY2tlZEFtb3VudCAqICgraXRlbVdlaWdodCAvIGNvbnZlcnRlcik7XG4gICAgICAgICAgICB0b3RhbFBhY2tXZWlnaHQgPSB0b3RhbFBhY2tXZWlnaHQgKyByb3dXZWlnaHQ7XG5cbiAgICAgICAgICAgIGlmIChpdGVtQ2F0ZWdvcnkgIT09IFwiY29uc3VtYWJsZXNcIikge1xuICAgICAgICAgICAgICAgIGJhc2VXZWlnaHQgPSBiYXNlV2VpZ2h0ICsgcm93V2VpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoK2Jhc2VXZWlnaHQgPiArbWF4UGFja1dlaWdodCkge1xuICAgICAgICAgICAgbGV0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlaWdodFdhcm5pbmctZGl2XCIpO1xuICAgICAgICAgICAgZGl2RWxlbWVudC5pbm5lclRleHQgPVwiQmFzZSB3ZWlnaHQgKFwiICsgIGJhc2VXZWlnaHQudG9GaXhlZCgyKSArXCIgXCIgK3VvbVRleHQgK1wiKSBleGNlZWRlcyB0aGUgd2VpZ2h0IGZvciB0aGUgJ1wiICtjbGFzc1dhcm5pbmdWYWx1ZStcIicgc3R5bGUgb2YgaGlraW5nLlwiO1xuXG4gICAgICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlaWdodFdhcm5pbmctZGl2XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2VXZWlnaHRcIikudmFsdWUgPSBiYXNlV2VpZ2h0LnRvRml4ZWQoMik7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG90YWxQYWNrV2VpZ2h0XCIpLnZhbHVlID1cbiAgICAgICAgICAgIHRvdGFsUGFja1dlaWdodC50b0ZpeGVkKDIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVMaXN0SXRlbUlucHV0KFxuICAgICAgICB0eXBlLFxuICAgICAgICBuYW1lQmFzZSxcbiAgICAgICAgcm93LFxuICAgICAgICBjb2x1bW5OYW1lLFxuICAgICAgICBsaXN0SXRlbXMgPSB0cnVlXG4gICAgKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBlbGVtZW50LnR5cGUgPSB0eXBlO1xuICAgICAgICBlbGVtZW50Lm5hbWUgPSBuYW1lQmFzZSArIFwiW11cIjtcbiAgICAgICAgZWxlbWVudC5pZCA9IG5hbWVCYXNlICsgXCItXCIgKyByb3c7XG4gICAgICAgIGVsZW1lbnQudmFsdWUgPSBcIlwiO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uLW5hbWVcIiwgY29sdW1uTmFtZSk7XG4gICAgICAgIGlmIChsaXN0SXRlbXMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlTGlzdEl0ZW0oZWxlbWVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRDYXRlZ3JveVNlbGVjdChyb3csIGdyb3VwQ2F0ZWdvcnkgPSBudWxsKSB7XG4gICAgY29uc29sZS5sb2coJ2dyb3VwIGNhdCBpbiBnZXQgc2VsZWN0OiAnKyBncm91cENhdGVnb3J5KVxuICAgICAgICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgc2VsZWN0LmlkID0gXCJJdGVtQ2F0ZWdvcnktXCIgKyByb3c7XG4gICAgICAgIHNlbGVjdC5uYW1lID0gXCJpdGVtQ2F0ZWdvcnktXCIgKyByb3c7XG4gICAgICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIsIFwiaXRlbV9jYXRlZ29yeVwiKTtcbiAgICAgICAgc2VsZWN0LmNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCI7XG5cbiAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IFwiXCI7XG4gICAgICAgIG9wdGlvbi50ZXh0ID0gXCJDaG9vc2VcIjtcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIGxldCBvcHRpb25MaXN0O1xuXG4gICAgICAgIG9wdGlvbkxpc3QgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2xpc3QtaXRlbS1jYXRlZ29yaWVzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgZXJyb3JcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gVG8gdXNlIHRoZSBmdW5jdGlvbiBhbmQgaGFuZGxlIHRoZSByZXNwb25zZSBkYXRhXG4gICAgICAgIG9wdGlvbkxpc3QoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCB0aGUgcmVzcG9uc2UgZGF0YVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gZGF0YVtpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IGRhdGFbaV0uY2F0ZWdvcnk7XG4gICAgICAgICAgICAgICAgaWYgKGdyb3VwQ2F0ZWdvcnkgIT0gbnVsbCAmJiBkYXRhW2ldLnZhbHVlID09PSBncm91cENhdGVnb3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB1cGRhdGVMaXN0SXRlbShzZWxlY3QpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc2VsZWN0O1xuICAgIH1cbiAgICBmdW5jdGlvbiBtZXRyaWNSYWRpb1RvVXMoKSB7XG4gICAgICAgIGxldCBpbnB1dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZXRyaWMtcmFkaW9cIik7XG4gICAgICAgIGlucHV0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXRFbGVtZW50KSB7XG4gICAgICAgICAgICBsZXQgaWRBcnIgPSBpbnB1dEVsZW1lbnQuaWQuc3BsaXQoXCItXCIpO1xuICAgICAgICAgICAgbGV0IHVvbSA9IGlkQXJyWzFdO1xuICAgICAgICAgICAgbGV0IHJvdyA9IGlkQXJyW2lkQXJyLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRUeXBlID0gaW5wdXRFbGVtZW50LnR5cGU7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFRhZyA9IGlucHV0RWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIGxldCBuZXdFbGVtZW50O1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudFR5cGUgPT09IFwicmFkaW9cIiAmJiB1b20gPT09IFwiZ3JhbVwiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZVJhZGlvKFwiaW5fb3VuY2VzXCIsIFwiT1pcIiwgXCJvelwiLCByb3csIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VHlwZSA9PT0gXCJyYWRpb1wiICYmIHVvbSA9PT0gXCJrZ1wiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZVJhZGlvKFwiaW5fbGJzXCIsIFwiTEJTXCIsIFwibGJzXCIsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUYWcgPT09IFwibGFiZWxcIiAmJiB1b20gPT09IFwiZ3JhbVwiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZUxhYmVsKFwiT1pcIiwgXCJ1b20tb3otXCIgKyByb3csIFwib3pcIiwgcm93KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFRhZyA9PT0gXCJsYWJlbFwiICYmIHVvbSA9PT0gXCJrZ1wiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZUxhYmVsKFwiTEJTXCIsIFwidW9tLWxicy1cIiArIHJvdywgXCJsYnNcIiwgcm93KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5ld0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQoXG4gICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1c1JhZGlvVG9NZXRyaWMoKSB7XG4gICAgICAgIGxldCBpbnB1dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi51cy1yYWRpb1wiKTtcbiAgICAgICAgaW5wdXRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxldCBpZEFyciA9IGlucHV0RWxlbWVudC5pZC5zcGxpdChcIi1cIik7XG4gICAgICAgICAgICBsZXQgdW9tID0gaWRBcnJbMV07XG4gICAgICAgICAgICBsZXQgcm93ID0gaWRBcnJbaWRBcnIubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBsZXQgZWxlbWVudFR5cGUgPSBpbnB1dEVsZW1lbnQudHlwZTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50VGFnID0gaW5wdXRFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGxldCBuZXdFbGVtZW50O1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudFR5cGUgPT09IFwicmFkaW9cIiAmJiB1b20gPT09IFwib3pcIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVSYWRpbyhcImluX2dyYW1zXCIsIFwiR1JcIiwgXCJncmFtXCIsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUeXBlID09PSBcInJhZGlvXCIgJiYgdW9tID09PSBcImxic1wiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZVJhZGlvKFwiaW5fa2lsb3NcIiwgXCJLR1wiLCBcImtnXCIsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUYWcgPT09IFwibGFiZWxcIiAmJiB1b20gPT09IFwib3pcIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVMYWJlbChcIkdcIiwgXCJ1b20tZ3JhbS1cIiArIHJvdywgXCJncmFtXCIsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUYWcgPT09IFwibGFiZWxcIiAmJiB1b20gPT09IFwibGJzXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlTGFiZWwoXCJLR1wiLCBcInVvbS1rZy1cIiArIHJvdywgXCJrZ1wiLCByb3cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmV3RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZChcbiAgICAgICAgICAgICAgICAgICAgbmV3RWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJhZGlvKGRhdGFDb2x1bW5OYW1lLCBsYWJlbCwgdW9tLCByb3cpIHtcbiAgICAgICAgbGV0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICByYWRpby5jbGFzc05hbWUgPVxuICAgICAgICAgICAgXCJmb3JtLWNoZWNrLWlucHV0XCIgK1xuICAgICAgICAgICAgKHVvbSA9PT0gXCJncmFtXCIgfHwgdW9tID09PSBcImtnXCIgPyBcIiBtZXRyaWMtcmFkaW9cIiA6IFwiIHVzLXJhZGlvXCIpO1xuICAgICAgICByYWRpby50eXBlID0gXCJyYWRpb1wiO1xuICAgICAgICByYWRpby5uYW1lID0gXCJ1b20tXCIgKyByb3cgKyBcIltdXCI7XG4gICAgICAgIHJhZGlvLmlkID0gXCJ1b20tXCIgKyB1b20gKyBcIi1cIiArIHJvdztcbiAgICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4tbmFtZVwiLCBkYXRhQ29sdW1uTmFtZSk7XG5cbiAgICAgICAgaWYgKHVvbSA9PT0gXCJncmFtXCIgfHwgdW9tID09PSBcIm96XCIpIHtcbiAgICAgICAgICAgIHJhZGlvLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29udmVydE1lYXN1cmVtZW50KHJvdyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmFkaW87XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxhYmVsKGlubmVySHRtbCwgaHRtbEZvciwgdW9tLCByb3csIGxpbmVMYWJlbCA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgbGFiZWwuY2xhc3NOYW1lID1cbiAgICAgICAgICAgIFwiZm9ybS1jaGVjay1sYWJlbFwiICtcbiAgICAgICAgICAgICh1b20gPT09IFwiZ3JhbVwiIHx8IHVvbSA9PT0gXCJrZ1wiID8gXCIgbWV0cmljLXJhZGlvXCIgOiBcIiB1cy1yYWRpb1wiKTtcbiAgICAgICAgbGFiZWwuaHRtbEZvciA9IGh0bWxGb3I7XG4gICAgICAgIGxhYmVsLmlubmVySFRNTCA9IGlubmVySHRtbDtcbiAgICAgICAgaWYgKCFsaW5lTGFiZWwpIHtcbiAgICAgICAgICAgIGxhYmVsLmlkID0gXCJ1b20tXCIgKyB1b20gKyBcIi1sYWJlbC1cIiArIHJvdztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhYmVsLmlkID0gXCJsaW5lLXVvbS1sYWJlbC1cIiArIHJvdztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9XG5cbiAgICB0aGlzLndpbmRvdy51cGRhdGVMaXN0ID0gZnVuY3Rpb24gdXBkYXRlTGlzdChlbGVtZW50LCBsaXN0SWQpIHtcbiAgICAgICAgbGV0IGNvbHVtbk5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uLW5hbWVcIik7XG4gICAgICAgIGxldCB2YWx1ZSA9IGVsZW1lbnQudmFsdWU7XG4gICAgICAgIGxldCB1cmwgPSBcIi9nZWFyLWxpc3QvXCIgKyBsaXN0SWQ7XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgZGF0YVtjb2x1bW5OYW1lXSA9IHZhbHVlO1xuXG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdCh1cmwsIGRhdGEsIGxpc3RJZClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBhbGVydChyZXMuZGF0YS5tc2cpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJGYWlsZWQgdG8gdXBkYXRlIGxpc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIGlmIChjb2x1bW5OYW1lID09PSBcInNvcnRcIiB8fCBjb2x1bW5OYW1lID09PSBcImxpc3RfY2xhc3NcIikge1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGVhZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbS1jb2xsYXBzaWJsZS1oZWFkZXJcIik7XG5cbiAgICBoZWFkZXJzLmZvckVhY2goKGhlYWRlcikgPT4ge1xuICAgICAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBoZWFkZXIubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgY29uc3QgYXJyb3cgPSBoZWFkZXIucXVlcnlTZWxlY3RvcihcIi5pdGVtLWFycm93XCIpO1xuICAgICAgICAgICAgaWYgKGNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BlblwiKSkge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUucGFkZGluZyA9IFwiMCAxMHB4XCI7XG4gICAgICAgICAgICAgICAgYXJyb3cuaW5uZXJIVE1MID0gXCImIzk2NjBcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUucGFkZGluZyA9IFwiMTBweFwiO1xuICAgICAgICAgICAgICAgIGFycm93LmlubmVySFRNTCA9IFwiJiM5NjUwXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgbGV0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbWFzdGVyLWl0ZW0tdGFibGUgaW5wdXRcIik7XG4gICAgbGV0IHNlbGVjdElucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWxlY3RcIik7XG5cbiAgICBpbnB1dHMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgaW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0pO1xuICAgIC8vIHNlbGVjdElucHV0cy5mb3JFYWNoKGZ1bmN0aW9uKHNlbGVjdElucHV0KSB7XG4gICAgLy8gICAgIHNlbGVjdElucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAvLyB9KTtcbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoR2VhckJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICBsZXQgc2VhcmNoTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdFNlYXJjaE1vZGFsJyk7XG4gICAgLy8gICAgIHNlYXJjaE1vZGFsLnNob3coKTtcbiAgICAvLyB9KTtcblxuICAgIC8vbGlzdENoYXJ0QnRuXG4gICAgZG9jdW1lbnQgLmdldEVsZW1lbnRCeUlkKFwibGlzdENoYXJ0QnRuXCIpIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IGxpc3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdElkXCIpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IHVybCA9IFwiL2dlYXItbGlzdC1hbmFseXRpY3MvXCIgKyBsaXN0SWQ7XG5cbiAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgLmdldCh1cmwpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2hhcnRTdGF0dXMgPSBDaGFydC5nZXRDaGFydChcImdlYXJDaGFydFwiKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhcnRTdGF0dXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFydFN0YXR1cy5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdlYXJDaGFydFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoYXJ0RGF0YSA9IEpTT04ucGFyc2UocmVzLmRhdGEuY2hhcnREYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZG91Z2hudXRcIiwgLy8gQ2hhcnQgdHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsczogY2hhcnREYXRhLmxhYmVscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsYWJlbDogbGlzdE5hbWUgKyAnQnJlYWsgRG93bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBjaGFydERhdGEud2VpZ2h0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY2hhcnREYXRhLmNvbG9ycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJPZmZzZXQ6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3V0b3V0OiA0NSwgLy8gQWRqdXN0IHRoZSBjdXRvdXQgcGVyY2VudGFnZSBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiAxNTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhbGFiZWxzOiBmYWxzZSwgLy8gUmVtb3ZpbmcgdGhpcyBsaW5lIHNob3dzIHRoZSBkYXRhbGFiZWxzIGFnYWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZVJvdGF0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZVNjYWxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgYmFzZVdlaWdodCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2VXZWlnaHRcIikudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0b3RhbFBhY2tXZWlnaHQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3RhbFBhY2tXZWlnaHRcIikudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxCYXNlV2VpZ2h0XCIpLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VXZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxUb3RhbFdlaWdodFwiKS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFBhY2tXZWlnaHQ7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zb3J0YWJsZVwiKS5mb3JFYWNoKGZ1bmN0aW9uICh0YWJsZSkge1xuICAgICAgICBjb25zdCBjYXRlZ29yeUlkID0gdGFibGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1jYXRlZ29yeS1pZFwiKTtcblxuICAgICAgICBuZXcgU29ydGFibGUodGFibGUucXVlcnlTZWxlY3RvcihcInRib2R5XCIpLCB7XG4gICAgICAgICAgICBhbmltYXRpb246IDE1MCxcbiAgICAgICAgICAgIG9uRW5kOiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBuZXcgb3JkZXIgb2YgaXRlbXNcbiAgICAgICAgICAgICAgICBjb25zdCBvcmRlcmVkSWRzID0gW107XG4gICAgICAgICAgICAgICAgdGFibGUucXVlcnlTZWxlY3RvckFsbChcInRyXCIpLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgICAgICAgICAgICBvcmRlcmVkSWRzLnB1c2gocm93LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gU2VuZCB0aGUgbmV3IG9yZGVyIHRvIHRoZSBzZXJ2ZXIgdmlhIEFKQVhcbiAgICAgICAgICAgICAgICB1cGRhdGVJdGVtT3JkZXIoY2F0ZWdvcnlJZCwgb3JkZXJlZElkcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiB1cGRhdGVJdGVtT3JkZXIoY2F0ZWdvcnlJZCwgb3JkZXJlZElkcykge1xuICAgICAgICAvLyBVc2UgQUpBWCB0byBzZW5kIHRoZSByZW9yZGVyZWQgaXRlbSBJRHMgdG8gdGhlIGJhY2tlbmRcbiAgICAgICAgbGV0IGxpc3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdElkXCIpLnZhbHVlO1xuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBcIlgtQ1NSRi1UT0tFTlwiOiBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJylcbiAgICAgICAgICAgICAgICAuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKSxcbiAgICAgICAgICAgIGNhdGVnb3J5X2lkOiBjYXRlZ29yeUlkLFxuICAgICAgICAgICAgb3JkZXJlZF9pZHM6IG9yZGVyZWRJZHMsXG4gICAgICAgICAgICBsaXN0X2lkOiBsaXN0SWQsXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHVybCA9IFwiL3VwZGF0ZS1saXN0LW9yZGVyXCI7XG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdCh1cmwsIGRhdGEpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cyAhPSBcIjFcIikge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChyZXMuZGF0YS5tc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBsZXQgc29ydGluZ1NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydEJ5XCIpO1xuICAgICAgICBsZXQgb3B0cyA9IHNvcnRpbmdTZWxlY3Qub3B0aW9ucy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0czsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc29ydGluZ1NlbGVjdC5vcHRpb25zW2ldLnZhbHVlID09IFwiZHJhZ19kcm9wXCIpIHtcbiAgICAgICAgICAgICAgICBzb3J0aW5nU2VsZWN0Lm9wdGlvbnNbaV0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIC8vIGxldCBuZXN0ZWRTb3J0YWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5lc3RlZC1zb3J0YWJsZVwiKTtcblxuICAgIC8vIG5lc3RlZFNvcnRhYmxlcy5mb3JFYWNoKChuZXN0ZWRTb3J0YWJsZSwgaW5kZXgpID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ2luZGV4OiAnK2luZGV4KTtcbiAgICAvLyAgICAgbGV0IGNvbnRlbnQgPSBuZXN0ZWRTb3J0YWJsZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgLy8gICAgIGxldCBjYXRlZ29yeU9yZGVyID0gbmVzdGVkU29ydGFibGUuZ2V0QXR0cmlidXRlKCdkYXRhLWNhdGVnb3J5LW9yZGVyJyk7XG4gICAgLy8gICAgIGxldCBjYXRlZ29yeVZhbHVlID0gbmVzdGVkU29ydGFibGUuZ2V0QXR0cmlidXRlKCdkYXRhLWNhdGVnb3J5LXZhbHVlJyk7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdjYXQgb3JkZXI6ICcrIGNhdGVnb3J5T3JkZXIpO1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnY2F0IHZhbHVlOiAnKyBjYXRlZ29yeVZhbHVlKTtcbiAgICAvLyAgICAgLy8gY29uc29sZS5kaXIobmVzdGVkU29ydGFibGUpO1xuICAgIC8vICAgICAvLyBjb25zb2xlLmRpcihjb250ZW50KTtcbiAgICAvLyAgICAgU29ydGFibGUuY3JlYXRlKG5lc3RlZFNvcnRhYmxlLCB7XG4gICAgLy8gICAgICAgICBhbmltYXRpb246IDE1MCxcbiAgICAvLyAgICAgICAgIGdyb3VwOiAnbmVzdGVkJyxcbiAgICAvLyAgICAgICAgIGFuaW1hdGlvbjogMTUwLFxuICAgIC8vICAgICAgICAgZmFsbGJhY2tPbkJvZHk6IHRydWUsXG4gICAgLy8gICAgICAgICBzd2FwVGhyZXNob2xkOiAwLjY1LFxuICAgIC8vICAgICAgICAgaGFuZGxlOicuaXRlbS1jb2xsYXBzaWJsZS1oZWFkZXInLFxuICAgIC8vICAgICAgICAgb25FbmQ6IGZ1bmN0aW9uICgvKipFdmVudCovZXZ0KSB7XG4gICAgLy8gICAgICAgICAgICAgbGV0IGNhdE9yZGVyQXJyYXkgPSB7fTtcbiAgICAvLyAgICAgICAgICAgICBsZXQgb2xkSW5kZXggPSBldnQub2xkSW5kZXg7XG5cbiAgICAvLyAgICAgICAgICAgICAvLyBHZXQgdGhlIG5ldyBpbmRleCAoYWZ0ZXIgdGhlIGl0ZW0gaXMgZHJvcHBlZClcbiAgICAvLyAgICAgICAgICAgICBsZXQgbmV3SW5kZXggPSBldnQubmV3SW5kZXg7XG4gICAgLy8gICAgICAgICAgICAgY2F0T3JkZXJBcnJheVsnaXRlbV9jYXRlZ29yeSddID0gY2F0ZWdvcnlWYWx1ZTtcbiAgICAvLyAgICAgICAgICAgICBjYXRPcmRlckFycmF5WydvbGQnXSA9ICBjYXRlZ29yeU9yZGVyO1xuICAgIC8vICAgICAgICAgICAgIGNhdE9yZGVyQXJyYXlbJ25ldyddID0gIG5ld0luZGV4O1xuXG5cbiAgICAvLyAgICAgICAgICAgICAvLyBPcHRpb25hbDogaGFuZGxlIHRoZSBldmVudCB3aGVuIHRoZSBkcmFnIGVuZHMsIGlmIG5lZWRlZFxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNb3ZlZCBpdGVtIGZyb20gaW5kZXgnLCBjYXRlZ29yeU9yZGVyLCAndG8nLCBuZXdJbmRleCk7XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ0FycmF5OiAnKyBKU09OLnN0cmluZ2lmeShjYXRPcmRlckFycmF5KSk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgfSk7XG4gICAgLy8gfSk7XG5cbiAgICAvLyBJbml0aWFsaXplIHNvcnRhYmxlIG9uIHRoZSBwYXJlbnQgY29udGFpbmVyXG5Tb3J0YWJsZS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcmVudC1jb250YWluZXInKSwge1xuICAgIGFuaW1hdGlvbjogMTUwLFxuICAgIGhhbmRsZTogJy5pdGVtLWNvbGxhcHNpYmxlLWhlYWRlcicsXG4gICAgZ2hvc3RDbGFzczogJ3NvcnRhYmxlLWdob3N0JyxcbiAgICBvbkVuZDogZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAvLyBBZnRlciBzb3J0aW5nIGlzIGNvbXBsZXRlZCwgdXBkYXRlIHRoZSBwb3NpdGlvbnMgaW4gdGhlIGRhdGFiYXNlXG4gICAgICAgIHVwZGF0ZUNhdGVnb3J5T3JkZXIoKTtcbiAgICB9XG59KTtcblxuLy8gRnVuY3Rpb24gdG8gY2FwdHVyZSB0aGUgbmV3IG9yZGVyIGFuZCBzZW5kIGl0IHRvIHRoZSBzZXJ2ZXJcbmZ1bmN0aW9uIHVwZGF0ZUNhdGVnb3J5T3JkZXIoKSB7XG4gICAgLy8gQ3JlYXRlIGFuIGFycmF5IHRvIHN0b3JlIHRoZSBuZXcgb3JkZXJcbiAgICBjb25zdCBuZXdPcmRlciA9IFtdO1xuXG4gICAgLy8gR2V0IGFsbCB0aGUgc29ydGFibGUgZWxlbWVudHMgKGNvbGxhcHNpYmxlLWNvbnRhaW5lcilcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJhZ2dhYmxlLWNvbnRhaW5lcicpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIC8vIEdldCB0aGUgZGF0YS1pZCBhdHRyaWJ1dGUgYW5kIHN0b3JlIGl0IHdpdGggdGhlIG5ldyBpbmRleCAocG9zaXRpb24pXG4gICAgICAgIG5ld09yZGVyLnB1c2goe1xuICAgICAgICAgICAgaXRlbV9jYXRlZ29yeTogaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2F0ZWdvcnktdmFsdWUnKSxcbiAgICAgICAgICAgIGNhdGVnb3J5X29yZGVyOiBpbmRleCArIDEgLy8gQXNzdW1pbmcgMS1iYXNlZCBpbmRleCBmb3IgZGF0YWJhc2Ugc3RvcmFnZVxuICAgICAgICB9KTtcblxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCdvcmRlciBhcnJheTogJysgSlNPTi5zdHJpbmdpZnkobmV3T3JkZXIpKTtcbiAgICAvLyBTZW5kIHRoZSBuZXcgb3JkZXIgdG8gdGhlIHNlcnZlciB1c2luZyBGZXRjaCAoY2FuIGFsc28gdXNlIGpRdWVyeSdzICQucG9zdCBpZiBwcmVmZXJyZWQpXG4gICAgLy8gZmV0Y2goJy91cGRhdGUtb3JkZXInLCB7XG4gICAgLy8gICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIC8vICAgICBoZWFkZXJzOiB7XG4gICAgLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIC8vICAgICAgICAgJ1gtQ1NSRi1UT0tFTic6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKSAvLyBGb3IgTGFyYXZlbCwgaWYgeW91J3JlIHVzaW5nIENTUkYgcHJvdGVjdGlvblxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7b3JkZXI6IG5ld09yZGVyfSlcbiAgICAvLyB9KVxuICAgIC8vIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAvLyAudGhlbihkYXRhID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ09yZGVyIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5OicsIGRhdGEpO1xuICAgIC8vIH0pXG4gICAgLy8gLmNhdGNoKGVycm9yID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgb3JkZXI6JywgZXJyb3IpO1xuICAgIC8vIH0pO1xufVxuXG5cblxuXG59KTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG53aW5kb3cuYXhpb3MgPSBheGlvcztcblxud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJNb2RhbCIsIkNoYXJ0IiwiU29ydGFibGUiLCJib290c3RyYXAiLCJyZXF1aXJlIiwiZ3JhbUNvbnZlcnRlciIsIm91bmNlQ29udmVydGVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3dQYXNzd29yZCIsImlkIiwicGFzc3dvcmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkTGlzdEl0ZW0iLCJjYXRlZ29yeWNvdW50ZXIiLCJ1bmRlZmluZWQiLCJncm91cENhdGVnb3J5IiwibnVtYmVyT2ZJdGVtc1RvQWRkIiwibGluZXNUb0FkZCIsIl9sb29wIiwibGlzdFVPTSIsImZpbmFsSUVsZW1lbnQiLCJsaXN0QnlJdGVtcyIsImNvbnNvbGUiLCJsb2ciLCJpdGVtVGFibGUiLCJ0YWJsZUNhdGVnb3J5IiwidXNlcklkIiwibGlzdElkIiwiZmluYWxJIiwicm93IiwiY3JlYXRlRWxlbWVudCIsImNlbGwwIiwic2NvcGUiLCJpbm5lckhUTUwiLCJjZWxsMSIsImNvdW50ZXIiLCJzZXRBdHRyaWJ1dGUiLCJpdGVtTmFtZSIsImNyZWF0ZUxpc3RJdGVtSW5wdXQiLCJwbGFjZWhvbGRlciIsImNsYXNzTGlzdCIsImFkZCIsImNlbGw2IiwiZGVsZXRlQnRuIiwiY2xhc3NOYW1lIiwiZGF0YSIsInVybCIsImdldEJvb2xlYW5EYXRhIiwidXBkYXRlSXRlbSIsIl9yZWYiLCJfY2FsbGVlIiwicmVzcG9uc2UiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiYXhpb3MiLCJwb3N0IiwidDAiLCJuZXdJZCIsImNlbGwyIiwiaXRlbVdlaWdodCIsImNlbGwzIiwibGluZVVvbUNlbGwiLCJyYWRpbzEiLCJyYWRpbzIiLCJyYWRpb0xhYmVsMSIsInJhZGlvTGFiZWwyIiwicmFkaW9MYWJlbDMiLCJjcmVhdGVSYWRpbyIsImNyZWF0ZUxhYmVsIiwiY2VsbDQiLCJwYWNrZWRBbW91bnQiLCJjZWxsNSIsInRvdGFsTGluZVdlaWdodCIsInN2Z05hbWVzcGFjZSIsImljb25DZWxsIiwiaWNvbiIsImNyZWF0ZUVsZW1lbnROUyIsInBhdGgiLCJhcHBlbmRDaGlsZCIsInNlbGVjdENlbGwiLCJjYXRlZ29yeVNlbGVjdCIsImdldENhdGVncm95U2VsZWN0IiwiYXBwZW5kIiwiYWRkRXZlbnRMaXN0ZW5lcldlaWdodENhbGMiLCJ1cGRhdGVVT00iLCJ1c1JhZGlvVG9NZXRyaWMiLCJtZXRyaWNSYWRpb1RvVXMiLCJuZWVkZWRGb3JXZWlnaHRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm5lZWRlZEZvcldlaWdodCIsImdldExpbmVUb3RhbFdlaWdodCIsImNvbnZlcnQiLCJ3ZWlnaHQiLCJ1b20iLCJsaW5lVG90YWxXZWlnaHRFbGVtZW50IiwibGluZVRvdGFsIiwidG9GaXhlZCIsInJlcGxhY2UiLCJ1cGRhdGVMaXN0SXRlbSIsImNvbnZlcnRNZWFzdXJlbWVudCIsInRvdGFsV2VpZ2h0IiwidG90YWxMaW5lV2VpZ2h0VmFsdWUiLCJ3ZWlnaHRWYWx1ZSIsInNtYWxsIiwibGFyZ2UiLCJlbGVtZW50IiwibGFiZWwiLCJsYWJlbEhUTUwiLCJjaGVja2VkIiwiY29sdW1uTmFtZSIsImdldEF0dHJpYnV0ZSIsImlkQXJyIiwic3BsaXQiLCJhcnJMZW5ndGgiLCJpdGVtSWQiLCJpdGVtSWRWYWx1ZSIsInN1YnN0cmluZyIsInJlcyIsImVyciIsImFsZXJ0IiwiZXJyb3IiLCJ1cGRhdGVUb3RhbExpc3RXZWlnaHRzIiwid2VpZ2h0c0ZvclBXIiwiYmFzZVdlaWdodCIsInRvdGFsUGFja1dlaWdodCIsIm1heFBhY2tXZWlnaHQiLCJjbGFzc1dhcm5pbmdWYWx1ZSIsInVvbVRleHQiLCJ3ZWlnaHRGb3JQVyIsImNvbnZlcnRlciIsInJvd1dlaWdodCIsIml0ZW1DYXRlZ29yeUVsZW1lbnQiLCJpdGVtQ2F0ZWdvcnkiLCJkaXZFbGVtZW50IiwiaW5uZXJUZXh0Iiwic3R5bGUiLCJkaXNwbGF5IiwibmFtZUJhc2UiLCJsaXN0SXRlbXMiLCJzZWxlY3QiLCJvcHRpb24iLCJ0ZXh0Iiwib3B0aW9uTGlzdCIsIl9yZWYyIiwiX2NhbGxlZTIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJnZXQiLCJjYXRlZ29yeSIsInNlbGVjdGVkIiwiaW5wdXRFbGVtZW50cyIsImlucHV0RWxlbWVudCIsImVsZW1lbnRUeXBlIiwiZWxlbWVudFRhZyIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsIm5ld0VsZW1lbnQiLCJwYXJlbnRFbGVtZW50IiwicmVwbGFjZUNoaWxkIiwiZGF0YUNvbHVtbk5hbWUiLCJyYWRpbyIsImlubmVySHRtbCIsImh0bWxGb3IiLCJsaW5lTGFiZWwiLCJ1cGRhdGVMaXN0IiwibG9jYXRpb24iLCJyZWxvYWQiLCJoZWFkZXJzIiwiaGVhZGVyIiwiY29udGVudCIsIm5leHRFbGVtZW50U2libGluZyIsImFycm93IiwicXVlcnlTZWxlY3RvciIsImNvbnRhaW5zIiwicmVtb3ZlIiwibWF4SGVpZ2h0IiwicGFkZGluZyIsInNjcm9sbEhlaWdodCIsImlucHV0cyIsInNlbGVjdElucHV0cyIsImlucHV0IiwiZGlzYWJsZWQiLCJjaGFydFN0YXR1cyIsImdldENoYXJ0IiwiZGVzdHJveSIsImN0eCIsImNoYXJ0RGF0YSIsIkpTT04iLCJwYXJzZSIsIm15Q2hhcnQiLCJsYWJlbHMiLCJkYXRhc2V0cyIsIndlaWdodHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvcnMiLCJib3JkZXJXaWR0aCIsImhvdmVyT2Zmc2V0Iiwib3B0aW9ucyIsImN1dG91dCIsInJhZGl1cyIsImxlZ2VuZCIsInBsdWdpbnMiLCJkYXRhbGFiZWxzIiwiYW5pbWF0aW9uIiwiYW5pbWF0ZVJvdGF0ZSIsImFuaW1hdGVTY2FsZSIsInRleHRDb250ZW50IiwidGFibGUiLCJjYXRlZ29yeUlkIiwib25FbmQiLCJldnQiLCJvcmRlcmVkSWRzIiwidXBkYXRlSXRlbU9yZGVyIiwiY2F0ZWdvcnlfaWQiLCJvcmRlcmVkX2lkcyIsImxpc3RfaWQiLCJzdGF0dXMiLCJtc2ciLCJzb3J0aW5nU2VsZWN0Iiwib3B0cyIsImdob3N0Q2xhc3MiLCJ1cGRhdGVDYXRlZ29yeU9yZGVyIiwibmV3T3JkZXIiLCJpdGVtIiwiaW5kZXgiLCJpdGVtX2NhdGVnb3J5IiwiY2F0ZWdvcnlfb3JkZXIiLCJzdHJpbmdpZnkiLCJkZWZhdWx0cyIsImNvbW1vbiJdLCJzb3VyY2VSb290IjoiIn0=