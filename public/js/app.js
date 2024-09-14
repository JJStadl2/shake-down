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
        var tableCategory = categorycounter;
        console.log("table cat: " + tableCategory);
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
      // if (groupCategory != null){
      //     //select.value = groupCategory;
      //     updateListItem(categorySelect);
      // }

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
  this.window.addCategoryGroup = function addCategoryGroup(listId, category) {
    console.log('id in add cat: ' + listId);
    console.log('cat in add cat: ' + category);
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
    element.addEventListener("change", function () {
      updateListItem(element);
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2pzL2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OzsrQ0FDQSxxSkFBQUEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsQ0FBQSxTQUFBQyxDQUFBLEVBQUFELENBQUEsT0FBQUUsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsQ0FBQSxHQUFBSCxDQUFBLENBQUFJLGNBQUEsRUFBQUMsQ0FBQSxHQUFBSixNQUFBLENBQUFLLGNBQUEsY0FBQVAsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsSUFBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsQ0FBQU8sS0FBQSxLQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxhQUFBLHVCQUFBQyxDQUFBLEdBQUFOLENBQUEsQ0FBQU8sV0FBQSw4QkFBQUMsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFDLE1BQUEsQ0FBQUssY0FBQSxDQUFBUCxDQUFBLEVBQUFELENBQUEsSUFBQVMsS0FBQSxFQUFBUCxDQUFBLEVBQUFpQixVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxTQUFBcEIsQ0FBQSxDQUFBRCxDQUFBLFdBQUFrQixNQUFBLG1CQUFBakIsQ0FBQSxJQUFBaUIsTUFBQSxZQUFBQSxPQUFBakIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsZ0JBQUFvQixLQUFBckIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxRQUFBSyxDQUFBLEdBQUFWLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxTQUFBLFlBQUFtQixTQUFBLEdBQUF2QixDQUFBLEdBQUF1QixTQUFBLEVBQUFYLENBQUEsR0FBQVQsTUFBQSxDQUFBcUIsTUFBQSxDQUFBZCxDQUFBLENBQUFOLFNBQUEsR0FBQVUsQ0FBQSxPQUFBVyxPQUFBLENBQUFwQixDQUFBLGdCQUFBRSxDQUFBLENBQUFLLENBQUEsZUFBQUgsS0FBQSxFQUFBaUIsZ0JBQUEsQ0FBQXpCLENBQUEsRUFBQUMsQ0FBQSxFQUFBWSxDQUFBLE1BQUFGLENBQUEsYUFBQWUsU0FBQTFCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLG1CQUFBMEIsSUFBQSxZQUFBQyxHQUFBLEVBQUE1QixDQUFBLENBQUE2QixJQUFBLENBQUE5QixDQUFBLEVBQUFFLENBQUEsY0FBQUQsQ0FBQSxhQUFBMkIsSUFBQSxXQUFBQyxHQUFBLEVBQUE1QixDQUFBLFFBQUFELENBQUEsQ0FBQXNCLElBQUEsR0FBQUEsSUFBQSxNQUFBUyxDQUFBLHFCQUFBQyxDQUFBLHFCQUFBQyxDQUFBLGdCQUFBQyxDQUFBLGdCQUFBQyxDQUFBLGdCQUFBWixVQUFBLGNBQUFhLGtCQUFBLGNBQUFDLDJCQUFBLFNBQUFDLENBQUEsT0FBQXBCLE1BQUEsQ0FBQW9CLENBQUEsRUFBQTFCLENBQUEscUNBQUEyQixDQUFBLEdBQUFwQyxNQUFBLENBQUFxQyxjQUFBLEVBQUFDLENBQUEsR0FBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFBLENBQUEsQ0FBQUcsTUFBQSxRQUFBRCxDQUFBLElBQUFBLENBQUEsS0FBQXZDLENBQUEsSUFBQUcsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBVyxDQUFBLEVBQUE3QixDQUFBLE1BQUEwQixDQUFBLEdBQUFHLENBQUEsT0FBQUUsQ0FBQSxHQUFBTiwwQkFBQSxDQUFBakMsU0FBQSxHQUFBbUIsU0FBQSxDQUFBbkIsU0FBQSxHQUFBRCxNQUFBLENBQUFxQixNQUFBLENBQUFjLENBQUEsWUFBQU0sc0JBQUEzQyxDQUFBLGdDQUFBNEMsT0FBQSxXQUFBN0MsQ0FBQSxJQUFBa0IsTUFBQSxDQUFBakIsQ0FBQSxFQUFBRCxDQUFBLFlBQUFDLENBQUEsZ0JBQUE2QyxPQUFBLENBQUE5QyxDQUFBLEVBQUFDLENBQUEsc0JBQUE4QyxjQUFBOUMsQ0FBQSxFQUFBRCxDQUFBLGFBQUFnRCxPQUFBOUMsQ0FBQSxFQUFBSyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxRQUFBRSxDQUFBLEdBQUFhLFFBQUEsQ0FBQTFCLENBQUEsQ0FBQUMsQ0FBQSxHQUFBRCxDQUFBLEVBQUFNLENBQUEsbUJBQUFPLENBQUEsQ0FBQWMsSUFBQSxRQUFBWixDQUFBLEdBQUFGLENBQUEsQ0FBQWUsR0FBQSxFQUFBRSxDQUFBLEdBQUFmLENBQUEsQ0FBQVAsS0FBQSxTQUFBc0IsQ0FBQSxnQkFBQWtCLE9BQUEsQ0FBQWxCLENBQUEsS0FBQTFCLENBQUEsQ0FBQXlCLElBQUEsQ0FBQUMsQ0FBQSxlQUFBL0IsQ0FBQSxDQUFBa0QsT0FBQSxDQUFBbkIsQ0FBQSxDQUFBb0IsT0FBQSxFQUFBQyxJQUFBLFdBQUFuRCxDQUFBLElBQUErQyxNQUFBLFNBQUEvQyxDQUFBLEVBQUFTLENBQUEsRUFBQUUsQ0FBQSxnQkFBQVgsQ0FBQSxJQUFBK0MsTUFBQSxVQUFBL0MsQ0FBQSxFQUFBUyxDQUFBLEVBQUFFLENBQUEsUUFBQVosQ0FBQSxDQUFBa0QsT0FBQSxDQUFBbkIsQ0FBQSxFQUFBcUIsSUFBQSxXQUFBbkQsQ0FBQSxJQUFBZSxDQUFBLENBQUFQLEtBQUEsR0FBQVIsQ0FBQSxFQUFBUyxDQUFBLENBQUFNLENBQUEsZ0JBQUFmLENBQUEsV0FBQStDLE1BQUEsVUFBQS9DLENBQUEsRUFBQVMsQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsQ0FBQUUsQ0FBQSxDQUFBZSxHQUFBLFNBQUEzQixDQUFBLEVBQUFLLENBQUEsb0JBQUFFLEtBQUEsV0FBQUEsTUFBQVIsQ0FBQSxFQUFBSSxDQUFBLGFBQUFnRCwyQkFBQSxlQUFBckQsQ0FBQSxXQUFBQSxDQUFBLEVBQUFFLENBQUEsSUFBQThDLE1BQUEsQ0FBQS9DLENBQUEsRUFBQUksQ0FBQSxFQUFBTCxDQUFBLEVBQUFFLENBQUEsZ0JBQUFBLENBQUEsR0FBQUEsQ0FBQSxHQUFBQSxDQUFBLENBQUFrRCxJQUFBLENBQUFDLDBCQUFBLEVBQUFBLDBCQUFBLElBQUFBLDBCQUFBLHFCQUFBM0IsaUJBQUExQixDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxRQUFBRSxDQUFBLEdBQUF3QixDQUFBLG1CQUFBckIsQ0FBQSxFQUFBRSxDQUFBLFFBQUFMLENBQUEsS0FBQTBCLENBQUEsUUFBQXFCLEtBQUEsc0NBQUEvQyxDQUFBLEtBQUEyQixDQUFBLG9CQUFBeEIsQ0FBQSxRQUFBRSxDQUFBLFdBQUFILEtBQUEsRUFBQVIsQ0FBQSxFQUFBc0QsSUFBQSxlQUFBbEQsQ0FBQSxDQUFBbUQsTUFBQSxHQUFBOUMsQ0FBQSxFQUFBTCxDQUFBLENBQUF3QixHQUFBLEdBQUFqQixDQUFBLFVBQUFFLENBQUEsR0FBQVQsQ0FBQSxDQUFBb0QsUUFBQSxNQUFBM0MsQ0FBQSxRQUFBRSxDQUFBLEdBQUEwQyxtQkFBQSxDQUFBNUMsQ0FBQSxFQUFBVCxDQUFBLE9BQUFXLENBQUEsUUFBQUEsQ0FBQSxLQUFBbUIsQ0FBQSxtQkFBQW5CLENBQUEscUJBQUFYLENBQUEsQ0FBQW1ELE1BQUEsRUFBQW5ELENBQUEsQ0FBQXNELElBQUEsR0FBQXRELENBQUEsQ0FBQXVELEtBQUEsR0FBQXZELENBQUEsQ0FBQXdCLEdBQUEsc0JBQUF4QixDQUFBLENBQUFtRCxNQUFBLFFBQUFqRCxDQUFBLEtBQUF3QixDQUFBLFFBQUF4QixDQUFBLEdBQUEyQixDQUFBLEVBQUE3QixDQUFBLENBQUF3QixHQUFBLEVBQUF4QixDQUFBLENBQUF3RCxpQkFBQSxDQUFBeEQsQ0FBQSxDQUFBd0IsR0FBQSx1QkFBQXhCLENBQUEsQ0FBQW1ELE1BQUEsSUFBQW5ELENBQUEsQ0FBQXlELE1BQUEsV0FBQXpELENBQUEsQ0FBQXdCLEdBQUEsR0FBQXRCLENBQUEsR0FBQTBCLENBQUEsTUFBQUssQ0FBQSxHQUFBWCxRQUFBLENBQUEzQixDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxvQkFBQWlDLENBQUEsQ0FBQVYsSUFBQSxRQUFBckIsQ0FBQSxHQUFBRixDQUFBLENBQUFrRCxJQUFBLEdBQUFyQixDQUFBLEdBQUFGLENBQUEsRUFBQU0sQ0FBQSxDQUFBVCxHQUFBLEtBQUFNLENBQUEscUJBQUExQixLQUFBLEVBQUE2QixDQUFBLENBQUFULEdBQUEsRUFBQTBCLElBQUEsRUFBQWxELENBQUEsQ0FBQWtELElBQUEsa0JBQUFqQixDQUFBLENBQUFWLElBQUEsS0FBQXJCLENBQUEsR0FBQTJCLENBQUEsRUFBQTdCLENBQUEsQ0FBQW1ELE1BQUEsWUFBQW5ELENBQUEsQ0FBQXdCLEdBQUEsR0FBQVMsQ0FBQSxDQUFBVCxHQUFBLG1CQUFBNkIsb0JBQUExRCxDQUFBLEVBQUFFLENBQUEsUUFBQUcsQ0FBQSxHQUFBSCxDQUFBLENBQUFzRCxNQUFBLEVBQUFqRCxDQUFBLEdBQUFQLENBQUEsQ0FBQWEsUUFBQSxDQUFBUixDQUFBLE9BQUFFLENBQUEsS0FBQU4sQ0FBQSxTQUFBQyxDQUFBLENBQUF1RCxRQUFBLHFCQUFBcEQsQ0FBQSxJQUFBTCxDQUFBLENBQUFhLFFBQUEsZUFBQVgsQ0FBQSxDQUFBc0QsTUFBQSxhQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBNUIsQ0FBQSxFQUFBeUQsbUJBQUEsQ0FBQTFELENBQUEsRUFBQUUsQ0FBQSxlQUFBQSxDQUFBLENBQUFzRCxNQUFBLGtCQUFBbkQsQ0FBQSxLQUFBSCxDQUFBLENBQUFzRCxNQUFBLFlBQUF0RCxDQUFBLENBQUEyQixHQUFBLE9BQUFrQyxTQUFBLHVDQUFBMUQsQ0FBQSxpQkFBQThCLENBQUEsTUFBQXpCLENBQUEsR0FBQWlCLFFBQUEsQ0FBQXBCLENBQUEsRUFBQVAsQ0FBQSxDQUFBYSxRQUFBLEVBQUFYLENBQUEsQ0FBQTJCLEdBQUEsbUJBQUFuQixDQUFBLENBQUFrQixJQUFBLFNBQUExQixDQUFBLENBQUFzRCxNQUFBLFlBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUFuQixDQUFBLENBQUFtQixHQUFBLEVBQUEzQixDQUFBLENBQUF1RCxRQUFBLFNBQUF0QixDQUFBLE1BQUF2QixDQUFBLEdBQUFGLENBQUEsQ0FBQW1CLEdBQUEsU0FBQWpCLENBQUEsR0FBQUEsQ0FBQSxDQUFBMkMsSUFBQSxJQUFBckQsQ0FBQSxDQUFBRixDQUFBLENBQUFnRSxVQUFBLElBQUFwRCxDQUFBLENBQUFILEtBQUEsRUFBQVAsQ0FBQSxDQUFBK0QsSUFBQSxHQUFBakUsQ0FBQSxDQUFBa0UsT0FBQSxlQUFBaEUsQ0FBQSxDQUFBc0QsTUFBQSxLQUFBdEQsQ0FBQSxDQUFBc0QsTUFBQSxXQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBNUIsQ0FBQSxHQUFBQyxDQUFBLENBQUF1RCxRQUFBLFNBQUF0QixDQUFBLElBQUF2QixDQUFBLElBQUFWLENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsT0FBQWtDLFNBQUEsc0NBQUE3RCxDQUFBLENBQUF1RCxRQUFBLFNBQUF0QixDQUFBLGNBQUFnQyxhQUFBbEUsQ0FBQSxRQUFBRCxDQUFBLEtBQUFvRSxNQUFBLEVBQUFuRSxDQUFBLFlBQUFBLENBQUEsS0FBQUQsQ0FBQSxDQUFBcUUsUUFBQSxHQUFBcEUsQ0FBQSxXQUFBQSxDQUFBLEtBQUFELENBQUEsQ0FBQXNFLFVBQUEsR0FBQXJFLENBQUEsS0FBQUQsQ0FBQSxDQUFBdUUsUUFBQSxHQUFBdEUsQ0FBQSxXQUFBdUUsVUFBQSxDQUFBQyxJQUFBLENBQUF6RSxDQUFBLGNBQUEwRSxjQUFBekUsQ0FBQSxRQUFBRCxDQUFBLEdBQUFDLENBQUEsQ0FBQTBFLFVBQUEsUUFBQTNFLENBQUEsQ0FBQTRCLElBQUEsb0JBQUE1QixDQUFBLENBQUE2QixHQUFBLEVBQUE1QixDQUFBLENBQUEwRSxVQUFBLEdBQUEzRSxDQUFBLGFBQUF5QixRQUFBeEIsQ0FBQSxTQUFBdUUsVUFBQSxNQUFBSixNQUFBLGFBQUFuRSxDQUFBLENBQUE0QyxPQUFBLENBQUFzQixZQUFBLGNBQUFTLEtBQUEsaUJBQUFsQyxPQUFBMUMsQ0FBQSxRQUFBQSxDQUFBLFdBQUFBLENBQUEsUUFBQUUsQ0FBQSxHQUFBRixDQUFBLENBQUFZLENBQUEsT0FBQVYsQ0FBQSxTQUFBQSxDQUFBLENBQUE0QixJQUFBLENBQUE5QixDQUFBLDRCQUFBQSxDQUFBLENBQUFpRSxJQUFBLFNBQUFqRSxDQUFBLE9BQUE2RSxLQUFBLENBQUE3RSxDQUFBLENBQUE4RSxNQUFBLFNBQUF2RSxDQUFBLE9BQUFHLENBQUEsWUFBQXVELEtBQUEsYUFBQTFELENBQUEsR0FBQVAsQ0FBQSxDQUFBOEUsTUFBQSxPQUFBekUsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBOUIsQ0FBQSxFQUFBTyxDQUFBLFVBQUEwRCxJQUFBLENBQUF4RCxLQUFBLEdBQUFULENBQUEsQ0FBQU8sQ0FBQSxHQUFBMEQsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsU0FBQUEsSUFBQSxDQUFBeEQsS0FBQSxHQUFBUixDQUFBLEVBQUFnRSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxZQUFBdkQsQ0FBQSxDQUFBdUQsSUFBQSxHQUFBdkQsQ0FBQSxnQkFBQXFELFNBQUEsQ0FBQWQsT0FBQSxDQUFBakQsQ0FBQSxrQ0FBQW9DLGlCQUFBLENBQUFoQyxTQUFBLEdBQUFpQywwQkFBQSxFQUFBOUIsQ0FBQSxDQUFBb0MsQ0FBQSxtQkFBQWxDLEtBQUEsRUFBQTRCLDBCQUFBLEVBQUFqQixZQUFBLFNBQUFiLENBQUEsQ0FBQThCLDBCQUFBLG1CQUFBNUIsS0FBQSxFQUFBMkIsaUJBQUEsRUFBQWhCLFlBQUEsU0FBQWdCLGlCQUFBLENBQUEyQyxXQUFBLEdBQUE3RCxNQUFBLENBQUFtQiwwQkFBQSxFQUFBckIsQ0FBQSx3QkFBQWhCLENBQUEsQ0FBQWdGLG1CQUFBLGFBQUEvRSxDQUFBLFFBQUFELENBQUEsd0JBQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBZ0YsV0FBQSxXQUFBakYsQ0FBQSxLQUFBQSxDQUFBLEtBQUFvQyxpQkFBQSw2QkFBQXBDLENBQUEsQ0FBQStFLFdBQUEsSUFBQS9FLENBQUEsQ0FBQWtGLElBQUEsT0FBQWxGLENBQUEsQ0FBQW1GLElBQUEsYUFBQWxGLENBQUEsV0FBQUUsTUFBQSxDQUFBaUYsY0FBQSxHQUFBakYsTUFBQSxDQUFBaUYsY0FBQSxDQUFBbkYsQ0FBQSxFQUFBb0MsMEJBQUEsS0FBQXBDLENBQUEsQ0FBQW9GLFNBQUEsR0FBQWhELDBCQUFBLEVBQUFuQixNQUFBLENBQUFqQixDQUFBLEVBQUFlLENBQUEseUJBQUFmLENBQUEsQ0FBQUcsU0FBQSxHQUFBRCxNQUFBLENBQUFxQixNQUFBLENBQUFtQixDQUFBLEdBQUExQyxDQUFBLEtBQUFELENBQUEsQ0FBQXNGLEtBQUEsYUFBQXJGLENBQUEsYUFBQWtELE9BQUEsRUFBQWxELENBQUEsT0FBQTJDLHFCQUFBLENBQUFHLGFBQUEsQ0FBQTNDLFNBQUEsR0FBQWMsTUFBQSxDQUFBNkIsYUFBQSxDQUFBM0MsU0FBQSxFQUFBVSxDQUFBLGlDQUFBZCxDQUFBLENBQUErQyxhQUFBLEdBQUFBLGFBQUEsRUFBQS9DLENBQUEsQ0FBQXVGLEtBQUEsYUFBQXRGLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxlQUFBQSxDQUFBLEtBQUFBLENBQUEsR0FBQThFLE9BQUEsT0FBQTVFLENBQUEsT0FBQW1DLGFBQUEsQ0FBQXpCLElBQUEsQ0FBQXJCLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFFLENBQUEsR0FBQUcsQ0FBQSxVQUFBVixDQUFBLENBQUFnRixtQkFBQSxDQUFBOUUsQ0FBQSxJQUFBVSxDQUFBLEdBQUFBLENBQUEsQ0FBQXFELElBQUEsR0FBQWIsSUFBQSxXQUFBbkQsQ0FBQSxXQUFBQSxDQUFBLENBQUFzRCxJQUFBLEdBQUF0RCxDQUFBLENBQUFRLEtBQUEsR0FBQUcsQ0FBQSxDQUFBcUQsSUFBQSxXQUFBckIscUJBQUEsQ0FBQUQsQ0FBQSxHQUFBekIsTUFBQSxDQUFBeUIsQ0FBQSxFQUFBM0IsQ0FBQSxnQkFBQUUsTUFBQSxDQUFBeUIsQ0FBQSxFQUFBL0IsQ0FBQSxpQ0FBQU0sTUFBQSxDQUFBeUIsQ0FBQSw2REFBQTNDLENBQUEsQ0FBQXlGLElBQUEsYUFBQXhGLENBQUEsUUFBQUQsQ0FBQSxHQUFBRyxNQUFBLENBQUFGLENBQUEsR0FBQUMsQ0FBQSxnQkFBQUcsQ0FBQSxJQUFBTCxDQUFBLEVBQUFFLENBQUEsQ0FBQXVFLElBQUEsQ0FBQXBFLENBQUEsVUFBQUgsQ0FBQSxDQUFBd0YsT0FBQSxhQUFBekIsS0FBQSxXQUFBL0QsQ0FBQSxDQUFBNEUsTUFBQSxTQUFBN0UsQ0FBQSxHQUFBQyxDQUFBLENBQUF5RixHQUFBLFFBQUExRixDQUFBLElBQUFELENBQUEsU0FBQWlFLElBQUEsQ0FBQXhELEtBQUEsR0FBQVIsQ0FBQSxFQUFBZ0UsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsV0FBQUEsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsUUFBQWpFLENBQUEsQ0FBQTBDLE1BQUEsR0FBQUEsTUFBQSxFQUFBakIsT0FBQSxDQUFBckIsU0FBQSxLQUFBNkUsV0FBQSxFQUFBeEQsT0FBQSxFQUFBbUQsS0FBQSxXQUFBQSxNQUFBNUUsQ0FBQSxhQUFBNEYsSUFBQSxXQUFBM0IsSUFBQSxXQUFBTixJQUFBLFFBQUFDLEtBQUEsR0FBQTNELENBQUEsT0FBQXNELElBQUEsWUFBQUUsUUFBQSxjQUFBRCxNQUFBLGdCQUFBM0IsR0FBQSxHQUFBNUIsQ0FBQSxPQUFBdUUsVUFBQSxDQUFBM0IsT0FBQSxDQUFBNkIsYUFBQSxJQUFBMUUsQ0FBQSxXQUFBRSxDQUFBLGtCQUFBQSxDQUFBLENBQUEyRixNQUFBLE9BQUF4RixDQUFBLENBQUF5QixJQUFBLE9BQUE1QixDQUFBLE1BQUEyRSxLQUFBLEVBQUEzRSxDQUFBLENBQUE0RixLQUFBLGNBQUE1RixDQUFBLElBQUFELENBQUEsTUFBQThGLElBQUEsV0FBQUEsS0FBQSxTQUFBeEMsSUFBQSxXQUFBdEQsQ0FBQSxRQUFBdUUsVUFBQSxJQUFBRyxVQUFBLGtCQUFBMUUsQ0FBQSxDQUFBMkIsSUFBQSxRQUFBM0IsQ0FBQSxDQUFBNEIsR0FBQSxjQUFBbUUsSUFBQSxLQUFBbkMsaUJBQUEsV0FBQUEsa0JBQUE3RCxDQUFBLGFBQUF1RCxJQUFBLFFBQUF2RCxDQUFBLE1BQUFFLENBQUEsa0JBQUErRixPQUFBNUYsQ0FBQSxFQUFBRSxDQUFBLFdBQUFLLENBQUEsQ0FBQWdCLElBQUEsWUFBQWhCLENBQUEsQ0FBQWlCLEdBQUEsR0FBQTdCLENBQUEsRUFBQUUsQ0FBQSxDQUFBK0QsSUFBQSxHQUFBNUQsQ0FBQSxFQUFBRSxDQUFBLEtBQUFMLENBQUEsQ0FBQXNELE1BQUEsV0FBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQTVCLENBQUEsS0FBQU0sQ0FBQSxhQUFBQSxDQUFBLFFBQUFpRSxVQUFBLENBQUFNLE1BQUEsTUFBQXZFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRyxDQUFBLFFBQUE4RCxVQUFBLENBQUFqRSxDQUFBLEdBQUFLLENBQUEsR0FBQUYsQ0FBQSxDQUFBaUUsVUFBQSxpQkFBQWpFLENBQUEsQ0FBQTBELE1BQUEsU0FBQTZCLE1BQUEsYUFBQXZGLENBQUEsQ0FBQTBELE1BQUEsU0FBQXdCLElBQUEsUUFBQTlFLENBQUEsR0FBQVQsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBcEIsQ0FBQSxlQUFBTSxDQUFBLEdBQUFYLENBQUEsQ0FBQXlCLElBQUEsQ0FBQXBCLENBQUEscUJBQUFJLENBQUEsSUFBQUUsQ0FBQSxhQUFBNEUsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBMkQsUUFBQSxTQUFBNEIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBMkQsUUFBQSxnQkFBQXVCLElBQUEsR0FBQWxGLENBQUEsQ0FBQTRELFVBQUEsU0FBQTJCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTRELFVBQUEsY0FBQXhELENBQUEsYUFBQThFLElBQUEsR0FBQWxGLENBQUEsQ0FBQTJELFFBQUEsU0FBQTRCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTJELFFBQUEscUJBQUFyRCxDQUFBLFFBQUFzQyxLQUFBLHFEQUFBc0MsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBNEQsVUFBQSxTQUFBMkIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBNEQsVUFBQSxZQUFBUixNQUFBLFdBQUFBLE9BQUE3RCxDQUFBLEVBQUFELENBQUEsYUFBQUUsQ0FBQSxRQUFBc0UsVUFBQSxDQUFBTSxNQUFBLE1BQUE1RSxDQUFBLFNBQUFBLENBQUEsUUFBQUssQ0FBQSxRQUFBaUUsVUFBQSxDQUFBdEUsQ0FBQSxPQUFBSyxDQUFBLENBQUE2RCxNQUFBLFNBQUF3QixJQUFBLElBQUF2RixDQUFBLENBQUF5QixJQUFBLENBQUF2QixDQUFBLHdCQUFBcUYsSUFBQSxHQUFBckYsQ0FBQSxDQUFBK0QsVUFBQSxRQUFBNUQsQ0FBQSxHQUFBSCxDQUFBLGFBQUFHLENBQUEsaUJBQUFULENBQUEsbUJBQUFBLENBQUEsS0FBQVMsQ0FBQSxDQUFBMEQsTUFBQSxJQUFBcEUsQ0FBQSxJQUFBQSxDQUFBLElBQUFVLENBQUEsQ0FBQTRELFVBQUEsS0FBQTVELENBQUEsY0FBQUUsQ0FBQSxHQUFBRixDQUFBLEdBQUFBLENBQUEsQ0FBQWlFLFVBQUEsY0FBQS9ELENBQUEsQ0FBQWdCLElBQUEsR0FBQTNCLENBQUEsRUFBQVcsQ0FBQSxDQUFBaUIsR0FBQSxHQUFBN0IsQ0FBQSxFQUFBVSxDQUFBLFNBQUE4QyxNQUFBLGdCQUFBUyxJQUFBLEdBQUF2RCxDQUFBLENBQUE0RCxVQUFBLEVBQUFuQyxDQUFBLFNBQUErRCxRQUFBLENBQUF0RixDQUFBLE1BQUFzRixRQUFBLFdBQUFBLFNBQUFqRyxDQUFBLEVBQUFELENBQUEsb0JBQUFDLENBQUEsQ0FBQTJCLElBQUEsUUFBQTNCLENBQUEsQ0FBQTRCLEdBQUEscUJBQUE1QixDQUFBLENBQUEyQixJQUFBLG1CQUFBM0IsQ0FBQSxDQUFBMkIsSUFBQSxRQUFBcUMsSUFBQSxHQUFBaEUsQ0FBQSxDQUFBNEIsR0FBQSxnQkFBQTVCLENBQUEsQ0FBQTJCLElBQUEsU0FBQW9FLElBQUEsUUFBQW5FLEdBQUEsR0FBQTVCLENBQUEsQ0FBQTRCLEdBQUEsT0FBQTJCLE1BQUEsa0JBQUFTLElBQUEseUJBQUFoRSxDQUFBLENBQUEyQixJQUFBLElBQUE1QixDQUFBLFVBQUFpRSxJQUFBLEdBQUFqRSxDQUFBLEdBQUFtQyxDQUFBLEtBQUFnRSxNQUFBLFdBQUFBLE9BQUFsRyxDQUFBLGFBQUFELENBQUEsUUFBQXdFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBOUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFFLENBQUEsUUFBQXNFLFVBQUEsQ0FBQXhFLENBQUEsT0FBQUUsQ0FBQSxDQUFBb0UsVUFBQSxLQUFBckUsQ0FBQSxjQUFBaUcsUUFBQSxDQUFBaEcsQ0FBQSxDQUFBeUUsVUFBQSxFQUFBekUsQ0FBQSxDQUFBcUUsUUFBQSxHQUFBRyxhQUFBLENBQUF4RSxDQUFBLEdBQUFpQyxDQUFBLHlCQUFBaUUsT0FBQW5HLENBQUEsYUFBQUQsQ0FBQSxRQUFBd0UsVUFBQSxDQUFBTSxNQUFBLE1BQUE5RSxDQUFBLFNBQUFBLENBQUEsUUFBQUUsQ0FBQSxRQUFBc0UsVUFBQSxDQUFBeEUsQ0FBQSxPQUFBRSxDQUFBLENBQUFrRSxNQUFBLEtBQUFuRSxDQUFBLFFBQUFJLENBQUEsR0FBQUgsQ0FBQSxDQUFBeUUsVUFBQSxrQkFBQXRFLENBQUEsQ0FBQXVCLElBQUEsUUFBQXJCLENBQUEsR0FBQUYsQ0FBQSxDQUFBd0IsR0FBQSxFQUFBNkMsYUFBQSxDQUFBeEUsQ0FBQSxZQUFBSyxDQUFBLFlBQUErQyxLQUFBLDhCQUFBK0MsYUFBQSxXQUFBQSxjQUFBckcsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsZ0JBQUFvRCxRQUFBLEtBQUE1QyxRQUFBLEVBQUE2QixNQUFBLENBQUExQyxDQUFBLEdBQUFnRSxVQUFBLEVBQUE5RCxDQUFBLEVBQUFnRSxPQUFBLEVBQUE3RCxDQUFBLG9CQUFBbUQsTUFBQSxVQUFBM0IsR0FBQSxHQUFBNUIsQ0FBQSxHQUFBa0MsQ0FBQSxPQUFBbkMsQ0FBQTtBQUFBLFNBQUFzRyxtQkFBQWpHLENBQUEsRUFBQUosQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsRUFBQUssQ0FBQSxFQUFBSyxDQUFBLEVBQUFFLENBQUEsY0FBQUosQ0FBQSxHQUFBTCxDQUFBLENBQUFPLENBQUEsRUFBQUUsQ0FBQSxHQUFBRSxDQUFBLEdBQUFOLENBQUEsQ0FBQUQsS0FBQSxXQUFBSixDQUFBLGdCQUFBTCxDQUFBLENBQUFLLENBQUEsS0FBQUssQ0FBQSxDQUFBNkMsSUFBQSxHQUFBdEQsQ0FBQSxDQUFBZSxDQUFBLElBQUF3RSxPQUFBLENBQUF0QyxPQUFBLENBQUFsQyxDQUFBLEVBQUFvQyxJQUFBLENBQUFsRCxDQUFBLEVBQUFLLENBQUE7QUFBQSxTQUFBZ0csa0JBQUFsRyxDQUFBLDZCQUFBSixDQUFBLFNBQUFELENBQUEsR0FBQXdHLFNBQUEsYUFBQWhCLE9BQUEsV0FBQXRGLENBQUEsRUFBQUssQ0FBQSxRQUFBSyxDQUFBLEdBQUFQLENBQUEsQ0FBQW9HLEtBQUEsQ0FBQXhHLENBQUEsRUFBQUQsQ0FBQSxZQUFBMEcsTUFBQXJHLENBQUEsSUFBQWlHLGtCQUFBLENBQUExRixDQUFBLEVBQUFWLENBQUEsRUFBQUssQ0FBQSxFQUFBbUcsS0FBQSxFQUFBQyxNQUFBLFVBQUF0RyxDQUFBLGNBQUFzRyxPQUFBdEcsQ0FBQSxJQUFBaUcsa0JBQUEsQ0FBQTFGLENBQUEsRUFBQVYsQ0FBQSxFQUFBSyxDQUFBLEVBQUFtRyxLQUFBLEVBQUFDLE1BQUEsV0FBQXRHLENBQUEsS0FBQXFHLEtBQUE7QUFEQTtBQUNrQztBQUNsQztBQUN3QjtBQUNVO0FBQ0E7QUFDbEMsSUFBTUssU0FBUyxHQUFHQyxtQkFBTyxDQUFDLGdEQUFhLENBQUM7QUFDeEMsSUFBTUMsYUFBYSxHQUFHLElBQUk7QUFDMUIsSUFBTUMsY0FBYyxHQUFHLEVBQUU7QUFDekJDLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsVUFBVXBILENBQUMsRUFBRTtFQUNyRCxJQUFJLENBQUNtSCxNQUFNLENBQUNFLFlBQVksR0FBRyxTQUFTQSxZQUFZQSxDQUFDQyxFQUFFLEVBQUU7SUFDakQsSUFBSUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQ0gsRUFBRSxDQUFDO0lBQzFDLElBQUlDLFFBQVEsQ0FBQzNGLElBQUksS0FBSyxVQUFVLEVBQUU7TUFDOUIyRixRQUFRLENBQUMzRixJQUFJLEdBQUcsTUFBTTtJQUMxQixDQUFDLE1BQU07TUFDSDJGLFFBQVEsQ0FBQzNGLElBQUksR0FBRyxVQUFVO0lBQzlCO0VBQ0osQ0FBQztFQUNELElBQUksQ0FBQ3VGLE1BQU0sQ0FBQ08sV0FBVyxHQUFHLFNBQVNBLFdBQVdBLENBQUEsRUFBK0M7SUFBQSxJQUE5Q0MsZUFBZSxHQUFBbkIsU0FBQSxDQUFBMUIsTUFBQSxRQUFBMEIsU0FBQSxRQUFBb0IsU0FBQSxHQUFBcEIsU0FBQSxNQUFHLElBQUk7SUFBQSxJQUFFcUIsYUFBYSxHQUFBckIsU0FBQSxDQUFBMUIsTUFBQSxRQUFBMEIsU0FBQSxRQUFBb0IsU0FBQSxHQUFBcEIsU0FBQSxNQUFHLElBQUk7SUFDdkYsSUFBSXNCLGtCQUFrQixHQUFHTixRQUFRLENBQUNDLGNBQWMsQ0FBQyxZQUFZLENBQUM7SUFDOUQsSUFBSU0sVUFBVSxHQUFHLENBQUM7SUFDbEIsSUFBSUQsa0JBQWtCLEtBQUssSUFBSSxJQUFJLENBQUNBLGtCQUFrQixDQUFDckgsS0FBSyxHQUFHLENBQUMsRUFBRTtNQUM5RHFILGtCQUFrQixDQUFDckgsS0FBSyxHQUFHc0gsVUFBVTtJQUN6QyxDQUFDLE1BQU07TUFDSEEsVUFBVSxHQUFHLENBQUNELGtCQUFrQixDQUFDckgsS0FBSztJQUMxQztJQUFDLElBQUF1SCxLQUFBLFlBQUFBLE1BQUEsRUFFb0M7TUFDakMsSUFBSUMsT0FBTyxHQUFHVCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQ2hILEtBQUs7TUFDbEQsSUFBSXlILGFBQWEsR0FBR1YsUUFBUSxDQUFDQyxjQUFjLENBQUMsU0FBUyxDQUFDO01BQ3RELElBQUlVLFdBQVcsR0FBR1gsUUFBUSxDQUFDQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUNoSCxLQUFLO01BQzlEMkgsT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUdGLFdBQVcsQ0FBQztNQUMzQyxJQUFJRyxTQUFTO01BRWIsSUFBSSxDQUFDSCxXQUFXLElBQUksQ0FBQyxFQUFFO1FBQ25CQSxXQUFXLEdBQUcsSUFBSTtRQUNsQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLEdBQUdGLFdBQVcsQ0FBQztRQUM3Q0csU0FBUyxHQUFHZCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztNQUMxRCxDQUFDLE1BQU07UUFDSFUsV0FBVyxHQUFHLEtBQUs7UUFDbkIsSUFBSUksYUFBYSxHQUFHWixlQUFlO1FBQ25DUyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLEdBQUdFLGFBQWEsQ0FBQztRQUMxQ0QsU0FBUyxHQUFHZCxRQUFRLENBQUNDLGNBQWMsQ0FDL0IsZ0JBQWdCLEdBQUdjLGFBQ3ZCLENBQUM7TUFDTDtNQUVBLElBQUlDLE1BQU0sR0FBR2hCLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDaEgsS0FBSztNQUNwRCxJQUFJZ0ksTUFBTSxHQUFHakIsUUFBUSxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUNoSCxLQUFLO01BQ3BELElBQUlpSSxNQUFNLEdBQUdSLGFBQWEsQ0FBQ3pILEtBQUs7TUFDaEN5SCxhQUFhLENBQUN6SCxLQUFLLEdBQUcsQ0FBQ2lJLE1BQU0sR0FBRyxDQUFDO01BRWpDLElBQUlDLEdBQUcsR0FBR25CLFFBQVEsQ0FBQ29CLGFBQWEsQ0FBQyxJQUFJLENBQUM7O01BRXRDO01BQ0EsSUFBSUMsS0FBSyxHQUFHckIsUUFBUSxDQUFDb0IsYUFBYSxDQUFDLElBQUksQ0FBQztNQUN4Q0MsS0FBSyxDQUFDQyxLQUFLLEdBQUcsS0FBSztNQUNuQkQsS0FBSyxDQUFDRSxTQUFTLEdBQUdMLE1BQU07TUFFeEIsSUFBSU0sS0FBSyxHQUFHeEIsUUFBUSxDQUFDb0IsYUFBYSxDQUFDLElBQUksQ0FBQztNQUV4QyxJQUFJSyxPQUFPLEdBQUd6QixRQUFRLENBQUNvQixhQUFhLENBQUMsT0FBTyxDQUFDO01BQzdDSyxPQUFPLENBQUNySCxJQUFJLEdBQUcsUUFBUTtNQUN2QnFILE9BQU8sQ0FBQy9ELElBQUksR0FBRyxNQUFNO01BQ3JCK0QsT0FBTyxDQUFDM0IsRUFBRSxHQUFHLEtBQUssR0FBR29CLE1BQU07TUFDM0JPLE9BQU8sQ0FBQ3hJLEtBQUssR0FBRyxNQUFNLEdBQUdpSSxNQUFNO01BQy9CTyxPQUFPLENBQUNDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUM7TUFFOUMsSUFBSUMsUUFBUSxHQUFHQyxtQkFBbUIsQ0FDOUIsTUFBTSxFQUNOLFVBQVUsRUFDVlYsTUFBTSxFQUNOLFdBQVcsRUFDWFAsV0FDSixDQUFDO01BQ0RnQixRQUFRLENBQUNFLFdBQVcsR0FBRyxXQUFXO01BQ2xDRixRQUFRLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztNQUV0QyxJQUFJQyxLQUFLLEdBQUdoQyxRQUFRLENBQUNvQixhQUFhLENBQUMsSUFBSSxDQUFDO01BQ3hDWSxLQUFLLENBQUNsQyxFQUFFLEdBQUcsU0FBUyxHQUFHb0IsTUFBTTtNQUM3QixJQUFJZSxTQUFTLEdBQUdqQyxRQUFRLENBQUNvQixhQUFhLENBQUMsR0FBRyxDQUFDO01BQzNDYSxTQUFTLENBQUNuQyxFQUFFLEdBQUcsWUFBWSxHQUFHb0IsTUFBTTtNQUNwQ2UsU0FBUyxDQUFDQyxTQUFTLEdBQUcsOEJBQThCO01BQ3BERCxTQUFTLENBQUNWLFNBQVMsR0FBRyxHQUFHO01BRXpCLElBQUlZLElBQUksR0FBRyxDQUFDLENBQUM7TUFDYixJQUFJQyxHQUFHLEdBQUcsWUFBWTtNQUV0QixJQUFJM0IsT0FBTyxJQUFJLElBQUksRUFBRTtRQUNqQjBCLElBQUksR0FBR0UsY0FBYyxDQUFDLFdBQVcsQ0FBQztNQUN0QyxDQUFDLE1BQU07UUFDSEYsSUFBSSxHQUFHRSxjQUFjLENBQUMsVUFBVSxDQUFDO01BQ3JDO01BQ0FGLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBR2xCLE1BQU07TUFDeEJrQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUduQixNQUFNO01BQ3hCbUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUU7TUFDdEIsSUFBRzlCLGFBQWEsS0FBSyxJQUFJLEVBQUM7UUFDdEI4QixJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUc5QixhQUFhO01BQ3pDO01BRUEsSUFBSWlDLFVBQVU7TUFDZEEsVUFBVTtRQUFBLElBQUFDLElBQUEsR0FBQXhELGlCQUFBLGVBQUF4RyxtQkFBQSxHQUFBb0YsSUFBQSxDQUFHLFNBQUE2RSxRQUFBO1VBQUEsSUFBQUMsUUFBQTtVQUFBLE9BQUFsSyxtQkFBQSxHQUFBdUIsSUFBQSxVQUFBNEksU0FBQUMsUUFBQTtZQUFBLGtCQUFBQSxRQUFBLENBQUF2RSxJQUFBLEdBQUF1RSxRQUFBLENBQUFsRyxJQUFBO2NBQUE7Z0JBQUFrRyxRQUFBLENBQUF2RSxJQUFBO2dCQUFBdUUsUUFBQSxDQUFBbEcsSUFBQTtnQkFBQSxPQUVrQm1HLEtBQUssQ0FBQ0MsSUFBSSxDQUFDVCxHQUFHLEVBQUVELElBQUksQ0FBQztjQUFBO2dCQUF0Q00sUUFBUSxHQUFBRSxRQUFBLENBQUF4RyxJQUFBO2dCQUFBLE9BQUF3RyxRQUFBLENBQUFyRyxNQUFBLFdBSVBtRyxRQUFRLENBQUNOLElBQUk7Y0FBQTtnQkFBQVEsUUFBQSxDQUFBdkUsSUFBQTtnQkFBQXVFLFFBQUEsQ0FBQUcsRUFBQSxHQUFBSCxRQUFBO2dCQUVwQjtnQkFDQS9CLE9BQU8sQ0FBQ0MsR0FBRyxDQUFBOEIsUUFBQSxDQUFBRyxFQUFNLENBQUM7Y0FBQztjQUFBO2dCQUFBLE9BQUFILFFBQUEsQ0FBQXBFLElBQUE7WUFBQTtVQUFBLEdBQUFpRSxPQUFBO1FBQUEsQ0FFMUI7UUFBQSxnQkFYREYsVUFBVUEsQ0FBQTtVQUFBLE9BQUFDLElBQUEsQ0FBQXRELEtBQUEsT0FBQUQsU0FBQTtRQUFBO01BQUEsR0FXVDs7TUFFRDtNQUNBc0QsVUFBVSxDQUFDLENBQUMsQ0FBQzFHLElBQUksQ0FBQyxVQUFDdUcsSUFBSSxFQUFLO1FBQ3hCO1FBQ0FWLE9BQU8sQ0FBQ3hJLEtBQUssR0FBR2tKLElBQUksQ0FBQ1ksS0FBSztRQUMxQjVCLEdBQUcsQ0FBQ08sWUFBWSxDQUFDLFNBQVMsRUFBRVMsSUFBSSxDQUFDWSxLQUFLLENBQUM7UUFDdkNkLFNBQVMsQ0FBQ1AsWUFBWSxDQUNsQixNQUFNLEVBQ04scUJBQXFCLEdBQUdTLElBQUksQ0FBQ1ksS0FDakMsQ0FBQztNQUNMLENBQUMsQ0FBQztNQUdGLElBQUlDLEtBQUssR0FBR2hELFFBQVEsQ0FBQ29CLGFBQWEsQ0FBQyxJQUFJLENBQUM7TUFDeEMsSUFBSTZCLFVBQVUsR0FBR3JCLG1CQUFtQixDQUNoQyxRQUFRLEVBQ1IsWUFBWSxFQUNaVixNQUFNLEVBQ04sYUFDSixDQUFDO01BQ0QrQixVQUFVLENBQUNoSyxLQUFLLEdBQUcsQ0FBQztNQUNwQmdLLFVBQVUsQ0FBQ25CLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztNQUN0Q2tCLFVBQVUsQ0FBQ25CLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztNQUN4Q2tCLFVBQVUsQ0FBQ25CLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztNQUN4Q2lCLEtBQUssQ0FBQ2xCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztNQUVqQyxJQUFJbUIsS0FBSyxHQUFHbEQsUUFBUSxDQUFDb0IsYUFBYSxDQUFDLElBQUksQ0FBQztNQUN4QyxJQUFJK0IsV0FBVyxHQUFHbkQsUUFBUSxDQUFDb0IsYUFBYSxDQUFDLElBQUksQ0FBQztNQUM5QzhCLEtBQUssQ0FBQ3BCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztNQUM3Qm9CLFdBQVcsQ0FBQ3JCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztNQUNuQyxJQUFJcUIsTUFBTTtNQUNWLElBQUlDLE1BQU07TUFDVixJQUFJQyxXQUFXO01BQ2YsSUFBSUMsV0FBVztNQUNmLElBQUlDLFdBQVc7TUFFZixJQUFJL0MsT0FBTyxLQUFLLElBQUksRUFBRTtRQUNsQjJDLE1BQU0sR0FBR0ssV0FBVyxDQUFDLFdBQVcsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFdkMsTUFBTSxDQUFDO1FBQ25Eb0MsV0FBVyxHQUFHSSxXQUFXLENBQ3JCLElBQUksRUFDSixTQUFTLEdBQUd4QyxNQUFNLEVBQ2xCLElBQUksRUFDSkEsTUFDSixDQUFDO1FBQ0RtQyxNQUFNLEdBQUdJLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRXZDLE1BQU0sQ0FBQztRQUNqRHFDLFdBQVcsR0FBR0csV0FBVyxDQUNyQixLQUFLLEVBQ0wsVUFBVSxHQUFHeEMsTUFBTSxFQUNuQixLQUFLLEVBQ0xBLE1BQ0osQ0FBQztRQUNEc0MsV0FBVyxHQUFHRSxXQUFXLENBQ3JCLElBQUksRUFDSixTQUFTLEdBQUd4QyxNQUFNLEVBQ2xCLElBQUksRUFDSkEsTUFBTSxFQUNOLElBQ0osQ0FBQztNQUNMLENBQUMsTUFBTTtRQUNIa0MsTUFBTSxHQUFHSyxXQUFXLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUV2QyxNQUFNLENBQUM7UUFDcERvQyxXQUFXLEdBQUdJLFdBQVcsQ0FDckIsR0FBRyxFQUNILFdBQVcsR0FBR3hDLE1BQU0sRUFDcEIsTUFBTSxFQUNOQSxNQUNKLENBQUM7UUFDRG1DLE1BQU0sR0FBR0ksV0FBVyxDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFdkMsTUFBTSxDQUFDO1FBQ2xEcUMsV0FBVyxHQUFHRyxXQUFXLENBQ3JCLElBQUksRUFDSixTQUFTLEdBQUd4QyxNQUFNLEVBQ2xCLElBQUksRUFDSkEsTUFDSixDQUFDO1FBQ0RzQyxXQUFXLEdBQUdFLFdBQVcsQ0FDckIsR0FBRyxFQUNILFdBQVcsR0FBR3hDLE1BQU0sRUFDcEIsTUFBTSxFQUNOQSxNQUFNLEVBQ04sSUFDSixDQUFDO01BQ0w7TUFFQSxJQUFJeUMsS0FBSyxHQUFHM0QsUUFBUSxDQUFDb0IsYUFBYSxDQUFDLElBQUksQ0FBQztNQUN4Q3VDLEtBQUssQ0FBQzdCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztNQUNqQyxJQUFJNkIsWUFBWSxHQUFHaEMsbUJBQW1CLENBQ2xDLFFBQVEsRUFDUixjQUFjLEVBQ2RWLE1BQU0sRUFDTixRQUNKLENBQUM7TUFDRDBDLFlBQVksQ0FBQzNLLEtBQUssR0FBRyxDQUFDO01BRXRCMkssWUFBWSxDQUFDOUIsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO01BQ3hDNkIsWUFBWSxDQUFDOUIsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO01BQzFDNkIsWUFBWSxDQUFDOUIsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO01BRTFDLElBQUk4QixLQUFLLEdBQUc3RCxRQUFRLENBQUNvQixhQUFhLENBQUMsSUFBSSxDQUFDO01BQ3hDeUMsS0FBSyxDQUFDL0IsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO01BQ2pDLElBQUkrQixlQUFlLEdBQUdsQyxtQkFBbUIsQ0FDckMsUUFBUSxFQUNSLGlCQUFpQixFQUNqQlYsTUFBTSxFQUNOLG1CQUNKLENBQUM7TUFDRDRDLGVBQWUsQ0FBQzdLLEtBQUssR0FBRyxDQUFDO01BQ3pCNkssZUFBZSxDQUFDcEMsWUFBWSxDQUN4QixrQkFBa0IsRUFDbEIsbUJBQ0osQ0FBQztNQUNEb0MsZUFBZSxDQUFDcEMsWUFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7TUFDOUNvQyxlQUFlLENBQUNoQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7TUFDN0MrQixlQUFlLENBQUNoQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7TUFDN0MrQixlQUFlLENBQUNoQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQzs7TUFFdEQ7O01BRUE7TUFDQSxJQUFNZ0MsWUFBWSxHQUFHLDRCQUE0QjtNQUNqRCxJQUFJQyxRQUFRLEdBQUdoRSxRQUFRLENBQUNvQixhQUFhLENBQUMsSUFBSSxDQUFDO01BQzNDO01BQ0EsSUFBSTZDLElBQUksR0FBR2pFLFFBQVEsQ0FBQ2tFLGVBQWUsQ0FBQ0gsWUFBWSxFQUFFLEtBQUssQ0FBQztNQUN4REUsSUFBSSxDQUFDdkMsWUFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7TUFDaEN1QyxJQUFJLENBQUN2QyxZQUFZLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQztNQUNqQ3VDLElBQUksQ0FBQ3ZDLFlBQVksQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDO01BQ3pDdUMsSUFBSSxDQUFDdkMsWUFBWSxDQUFDLE9BQU8sRUFBRSxxQkFBcUIsQ0FBQztNQUNqRHVDLElBQUksQ0FBQ3ZDLFlBQVksQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDOztNQUV6QztNQUNBLElBQUl5QyxJQUFJLEdBQUduRSxRQUFRLENBQUNrRSxlQUFlLENBQUNILFlBQVksRUFBRSxNQUFNLENBQUM7TUFDekRJLElBQUksQ0FBQ3pDLFlBQVksQ0FDYixHQUFHLEVBQ0gsb1VBQ0osQ0FBQzs7TUFFRDtNQUNBdUMsSUFBSSxDQUFDRyxXQUFXLENBQUNELElBQUksQ0FBQzs7TUFFdEI7TUFDQTs7TUFFQTtNQUNBSCxRQUFRLENBQUNJLFdBQVcsQ0FBQ0gsSUFBSSxDQUFDO01BRTFCekMsS0FBSyxDQUFDNEMsV0FBVyxDQUFDM0MsT0FBTyxDQUFDO01BQzFCO01BQ0FELEtBQUssQ0FBQzRDLFdBQVcsQ0FBQ3pDLFFBQVEsQ0FBQztNQUMzQnFCLEtBQUssQ0FBQ29CLFdBQVcsQ0FBQ25CLFVBQVUsQ0FBQztNQUU3QixJQUFJb0IsVUFBVSxHQUFHckUsUUFBUSxDQUFDb0IsYUFBYSxDQUFDLElBQUksQ0FBQztNQUM3QyxJQUFJa0QsY0FBYyxHQUFHQyxpQkFBaUIsQ0FBQ3JELE1BQU0sRUFBRWIsYUFBYSxDQUFDO01BQzdEO01BQ0FnRSxVQUFVLENBQUNHLE1BQU0sQ0FBQ0YsY0FBYyxDQUFDO01BRWpDcEIsS0FBSyxDQUFDa0IsV0FBVyxDQUFDaEIsTUFBTSxDQUFDO01BQ3pCRixLQUFLLENBQUNrQixXQUFXLENBQUNkLFdBQVcsQ0FBQztNQUM5QkosS0FBSyxDQUFDa0IsV0FBVyxDQUFDZixNQUFNLENBQUM7TUFDekJILEtBQUssQ0FBQ2tCLFdBQVcsQ0FBQ2IsV0FBVyxDQUFDO01BRTlCSSxLQUFLLENBQUNTLFdBQVcsQ0FBQ1IsWUFBWSxDQUFDO01BQy9CQyxLQUFLLENBQUNPLFdBQVcsQ0FBQ04sZUFBZSxDQUFDO01BQ2xDWCxXQUFXLENBQUNpQixXQUFXLENBQUNaLFdBQVcsQ0FBQztNQUNwQ3hCLEtBQUssQ0FBQ29DLFdBQVcsQ0FBQ25DLFNBQVMsQ0FBQzs7TUFFNUI7TUFDQWQsR0FBRyxDQUFDaUQsV0FBVyxDQUFDSixRQUFRLENBQUM7TUFDekI3QyxHQUFHLENBQUNpRCxXQUFXLENBQUM1QyxLQUFLLENBQUM7TUFDdEJMLEdBQUcsQ0FBQ2lELFdBQVcsQ0FBQ0MsVUFBVSxDQUFDO01BQzNCbEQsR0FBRyxDQUFDaUQsV0FBVyxDQUFDbEIsS0FBSyxDQUFDO01BQ3RCL0IsR0FBRyxDQUFDaUQsV0FBVyxDQUFDcEIsS0FBSyxDQUFDO01BQ3RCN0IsR0FBRyxDQUFDaUQsV0FBVyxDQUFDVCxLQUFLLENBQUM7TUFDdEJ4QyxHQUFHLENBQUNpRCxXQUFXLENBQUNQLEtBQUssQ0FBQztNQUN0QjFDLEdBQUcsQ0FBQ2lELFdBQVcsQ0FBQ2pCLFdBQVcsQ0FBQztNQUM1QmhDLEdBQUcsQ0FBQ2lELFdBQVcsQ0FBQ3BDLEtBQUssQ0FBQzs7TUFFdEI7TUFDQWxCLFNBQVMsQ0FBQ3NELFdBQVcsQ0FBQ2pELEdBQUcsQ0FBQztNQUMxQjtNQUNBO01BQ0E7TUFDQTs7TUFFQTtNQUNBc0QsMEJBQTBCLENBQUN2RCxNQUFNLENBQUM7SUFDdEMsQ0FBQztJQTdRRCxLQUFLLElBQUloSSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdxSCxVQUFVLEVBQUVySCxDQUFDLEVBQUU7TUFBQXNILEtBQUE7SUFBQTtJQThRbkNGLGtCQUFrQixDQUFDckgsS0FBSyxHQUFHLENBQUM7RUFDaEMsQ0FBQztFQUVELElBQUksQ0FBQzBHLE1BQU0sQ0FBQytFLFNBQVMsR0FBRyxTQUFTQSxTQUFTQSxDQUFDekwsS0FBSyxFQUFFO0lBQzlDLElBQUlBLEtBQUssS0FBSyxJQUFJLEVBQUU7TUFDaEIwTCxlQUFlLENBQUMsQ0FBQztJQUNyQixDQUFDLE1BQU07TUFDSEMsZUFBZSxDQUFDLENBQUM7SUFDckI7RUFDSixDQUFDO0VBQ0QsU0FBU0gsMEJBQTBCQSxDQUFDdEQsR0FBRyxFQUFFO0lBQ3JDLElBQUkwRCxnQkFBZ0IsR0FBRzdFLFFBQVEsQ0FBQzhFLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztJQUMvREQsZ0JBQWdCLENBQUN4SixPQUFPLENBQUMsVUFBVTBKLGVBQWUsRUFBRTtNQUNoREEsZUFBZSxDQUFDbkYsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQVk7UUFDbkRvRixrQkFBa0IsQ0FBQzdELEdBQUcsQ0FBQztNQUMzQixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDTjtFQUVBLElBQUksQ0FBQ3hCLE1BQU0sQ0FBQ3FGLGtCQUFrQixHQUFHLFNBQVNBLGtCQUFrQkEsQ0FDeEQ3RCxHQUFHLEVBRUw7SUFBQSxJQURFOEQsT0FBTyxHQUFBakcsU0FBQSxDQUFBMUIsTUFBQSxRQUFBMEIsU0FBQSxRQUFBb0IsU0FBQSxHQUFBcEIsU0FBQSxNQUFHLEtBQUs7SUFFZixJQUFJa0csTUFBTSxHQUFHbEYsUUFBUSxDQUFDQyxjQUFjLENBQUMsYUFBYSxHQUFHa0IsR0FBRyxDQUFDLENBQUNsSSxLQUFLO0lBQy9ELElBQUkySyxZQUFZLEdBQUc1RCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxlQUFlLEdBQUdrQixHQUFHLENBQUMsQ0FBQ2xJLEtBQUs7SUFDdkUsSUFBSWtNLEdBQUcsR0FBR25GLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztJQUN4QyxJQUFJbUYsc0JBQXNCLEdBQUdwRixRQUFRLENBQUNDLGNBQWMsQ0FDaEQsa0JBQWtCLEdBQUdrQixHQUN6QixDQUFDO0lBRUQsSUFBSWtFLFNBQVMsR0FBRyxDQUFDO0lBQ2pCQSxTQUFTLEdBQUcsQ0FBQ0gsTUFBTSxHQUFHLENBQUN0QixZQUFZO0lBQ25DeUIsU0FBUyxHQUFHQSxTQUFTLENBQUNDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUM7SUFDdkRILHNCQUFzQixDQUFDbk0sS0FBSyxHQUFHb00sU0FBUztJQUV4Q0csY0FBYyxDQUFDSixzQkFBc0IsQ0FBQztFQUMxQyxDQUFDO0VBQ0QsSUFBSSxDQUFDekYsTUFBTSxDQUFDOEYsa0JBQWtCLEdBQUcsU0FBU0Esa0JBQWtCQSxDQUN4RHRFLEdBQUcsRUFFTDtJQUFBLElBREU4RCxPQUFPLEdBQUFqRyxTQUFBLENBQUExQixNQUFBLFFBQUEwQixTQUFBLFFBQUFvQixTQUFBLEdBQUFwQixTQUFBLE1BQUcsS0FBSztJQUVmLElBQUltRyxHQUFHLEdBQUduRixRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQ2hILEtBQUs7SUFDOUMsSUFBSWlNLE1BQU0sR0FBR2xGLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGFBQWEsR0FBR2tCLEdBQUcsQ0FBQztJQUN6RCxJQUFJeUMsWUFBWSxHQUFHNUQsUUFBUSxDQUFDQyxjQUFjLENBQUMsZUFBZSxHQUFHa0IsR0FBRyxDQUFDLENBQUNsSSxLQUFLO0lBQ3ZFLElBQUl5TSxXQUFXLEdBQUcxRixRQUFRLENBQUNDLGNBQWMsQ0FBQyxrQkFBa0IsR0FBR2tCLEdBQUcsQ0FBQztJQUNuRSxJQUFJd0Usb0JBQW9CLEdBQUcsQ0FBQztJQUM1QixJQUFJQyxXQUFXLEdBQUdWLE1BQU0sQ0FBQ2pNLEtBQUs7SUFDOUIsSUFBSTRNLEtBQUs7SUFDVCxJQUFJQyxLQUFLO0lBQ1QsSUFBSUMsT0FBTztJQUNYLElBQUlDLEtBQUssR0FBR2hHLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGlCQUFpQixHQUFHa0IsR0FBRyxDQUFDO0lBQzVELElBQUk4RSxTQUFTO0lBRWIsSUFBSWQsR0FBRyxLQUFLLElBQUksRUFBRTtNQUNkVSxLQUFLLEdBQUc3RixRQUFRLENBQUNDLGNBQWMsQ0FBQyxTQUFTLEdBQUdrQixHQUFHLENBQUM7TUFDaEQyRSxLQUFLLEdBQUc5RixRQUFRLENBQUNDLGNBQWMsQ0FBQyxVQUFVLEdBQUdrQixHQUFHLENBQUM7TUFDakQsSUFBSTBFLEtBQUssQ0FBQ0ssT0FBTyxLQUFLLElBQUksRUFBRTtRQUN4Qk4sV0FBVyxHQUFHLENBQUNBLFdBQVcsR0FBRyxFQUFFO1FBQy9CRyxPQUFPLEdBQUdGLEtBQUs7UUFDZkksU0FBUyxHQUFHLElBQUk7TUFDcEIsQ0FBQyxNQUFNO1FBQ0hMLFdBQVcsR0FBRyxDQUFDQSxXQUFXLEdBQUcsRUFBRTtRQUMvQkcsT0FBTyxHQUFHRCxLQUFLO1FBQ2ZHLFNBQVMsR0FBRyxLQUFLO01BQ3JCO0lBQ0osQ0FBQyxNQUFNO01BQ0hKLEtBQUssR0FBRzdGLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFdBQVcsR0FBR2tCLEdBQUcsQ0FBQztNQUNsRDJFLEtBQUssR0FBRzlGLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFNBQVMsR0FBR2tCLEdBQUcsQ0FBQztNQUVoRCxJQUFJMEUsS0FBSyxDQUFDSyxPQUFPLEtBQUssSUFBSSxFQUFFO1FBQ3hCTixXQUFXLEdBQUcsQ0FBQ0EsV0FBVyxHQUFHLElBQUk7UUFDakNHLE9BQU8sR0FBR0YsS0FBSztRQUNmSSxTQUFTLEdBQUcsR0FBRztNQUNuQixDQUFDLE1BQU07UUFDSEwsV0FBVyxHQUFHLENBQUNBLFdBQVcsR0FBRyxJQUFJO1FBQ2pDRyxPQUFPLEdBQUdELEtBQUs7UUFDZkcsU0FBUyxHQUFHLElBQUk7TUFDcEI7SUFDSjtJQUVBTixvQkFBb0IsR0FBRyxDQUFDQyxXQUFXLEdBQUcsQ0FBQ2hDLFlBQVk7SUFDbkRzQixNQUFNLENBQUNqTSxLQUFLLEdBQUcyTSxXQUFXLENBQUNOLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUM7SUFDNURHLFdBQVcsQ0FBQ3pNLEtBQUssR0FBRzBNLG9CQUFvQixDQUNuQ0wsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUNWQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztJQUMzQlMsS0FBSyxDQUFDekUsU0FBUyxHQUFHMEUsU0FBUztJQUMzQlQsY0FBYyxDQUFDTyxPQUFPLENBQUM7SUFDdkJQLGNBQWMsQ0FBQ04sTUFBTSxDQUFDO0lBQ3RCTSxjQUFjLENBQUNFLFdBQVcsQ0FBQztFQUMvQixDQUFDO0VBQ0QsSUFBSSxDQUFDL0YsTUFBTSxDQUFDd0csZ0JBQWdCLEdBQUcsU0FBU0EsZ0JBQWdCQSxDQUFDbEYsTUFBTSxFQUFDbUYsUUFBUSxFQUFDO0lBQ3JFeEYsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLEdBQUNJLE1BQU0sQ0FBQztJQUNyQ0wsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLEdBQUN1RixRQUFRLENBQUM7RUFDNUMsQ0FBQztFQUNELFNBQVMvRCxjQUFjQSxDQUFDZ0UsVUFBVSxFQUFFO0lBQ2hDLElBQUlsRSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2JBLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxLQUFLO0lBQ3pCQSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSztJQUN0QkEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEtBQUs7SUFDeEJBLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxLQUFLO0lBQ3hCLFFBQVFrRSxVQUFVO01BQ2QsS0FBSyxXQUFXO1FBQ1psRSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSTtRQUN4QjtNQUNKLEtBQUssUUFBUTtRQUNUQSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSTtRQUNyQjtNQUNKLEtBQUssVUFBVTtRQUNYQSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSTtRQUN2QjtNQUNKLEtBQUssVUFBVTtRQUNYQSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSTtRQUN2QjtNQUNKO1FBQ0k7SUFDUjtJQUNBLE9BQU9BLElBQUk7RUFDZjtFQUNBLElBQUksQ0FBQ3hDLE1BQU0sQ0FBQzZGLGNBQWMsR0FBRyxTQUFTQSxjQUFjQSxDQUFDTyxPQUFPLEVBQUU7SUFDMUQsSUFBSU0sVUFBVSxHQUFHTixPQUFPLENBQUNPLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQztJQUN6RCxJQUFJck4sS0FBSyxHQUFHOE0sT0FBTyxDQUFDOU0sS0FBSztJQUN6QixJQUFJNkcsRUFBRSxHQUFHaUcsT0FBTyxDQUFDakcsRUFBRTtJQUNuQixJQUFJeUcsS0FBSyxHQUFHekcsRUFBRSxDQUFDMEcsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN6QixJQUFJQyxTQUFTLEdBQUdGLEtBQUssQ0FBQ2pKLE1BQU07SUFDNUIsSUFBSTZELEdBQUcsR0FBR29GLEtBQUssQ0FBQ0UsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUM5QixJQUFJQyxNQUFNLEdBQUcxRyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLEdBQUdrQixHQUFHLENBQUM7SUFDakQsSUFBSXdGLFdBQVcsR0FBR0QsTUFBTSxDQUFDek4sS0FBSztJQUM5QixJQUFJZ0ksTUFBTSxHQUFHakIsUUFBUSxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUNoSCxLQUFLO0lBQ3BELElBQUltSixHQUFHLEdBQUcsYUFBYSxHQUFHdUUsV0FBVztJQUNyQyxJQUFJeEUsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiLElBQUluQixNQUFNLEdBQUdoQixRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQ2hILEtBQUs7SUFFcERrSixJQUFJLENBQUNrRSxVQUFVLENBQUMsR0FBR3BOLEtBQUs7SUFFeEIsSUFBSW9OLFVBQVUsQ0FBQ08sU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7TUFDdEN6RSxJQUFJLEdBQUdFLGNBQWMsQ0FBQ2dFLFVBQVUsQ0FBQztJQUNyQztJQUVBbEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHbEIsTUFBTTtJQUN4QmtCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBR25CLE1BQU07SUFDeEJtQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUd3RSxXQUFXO0lBRXhCL0QsS0FBSyxDQUNBQyxJQUFJLENBQUNULEdBQUcsRUFBRUQsSUFBSSxFQUFFdUUsTUFBTSxDQUFDLENBQ3ZCOUssSUFBSSxDQUFDLFVBQUNpTCxHQUFHLEVBQUssQ0FBQyxDQUFDLENBQUMsU0FDWixDQUFDLFVBQUNDLEdBQUcsRUFBSztNQUNaQyxLQUFLLENBQUMscURBQXFELENBQUM7TUFDNURuRyxPQUFPLENBQUNvRyxLQUFLLENBQUNGLEdBQUcsQ0FBQztJQUN0QixDQUFDLENBQUM7SUFFTkcsc0JBQXNCLENBQUMsQ0FBQztFQUM1QixDQUFDO0VBQ0QsU0FBU0Esc0JBQXNCQSxDQUFBLEVBQUc7SUFDOUIsSUFBSUMsWUFBWSxHQUFHbEgsUUFBUSxDQUFDOEUsZ0JBQWdCLENBQUMsd0JBQXdCLENBQUM7SUFDdEUsSUFBSXFDLFVBQVUsR0FBRyxDQUFDO0lBQ2xCLElBQUlDLGVBQWUsR0FBRyxDQUFDO0lBQ3ZCLElBQUlDLGFBQWEsR0FBR3JILFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDaEgsS0FBSztJQUNsRSxJQUFJcU8saUJBQWlCLEdBQUd0SCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDaEgsS0FBSztJQUMxRSxJQUFJc08sT0FBTyxHQUFHLEtBQUs7SUFDbkJMLFlBQVksQ0FBQzdMLE9BQU8sQ0FBQyxVQUFVbU0sV0FBVyxFQUFFO01BQ3hDLElBQUkxSCxFQUFFLEdBQUcwSCxXQUFXLENBQUMxSCxFQUFFO01BQ3ZCLElBQUl5RyxLQUFLLEdBQUd6RyxFQUFFLENBQUMwRyxLQUFLLENBQUMsR0FBRyxDQUFDO01BQ3pCLElBQUlDLFNBQVMsR0FBR0YsS0FBSyxDQUFDakosTUFBTTtNQUM1QixJQUFJNkQsR0FBRyxHQUFHb0YsS0FBSyxDQUFDRSxTQUFTLEdBQUcsQ0FBQyxDQUFDO01BQzlCLElBQUk3QyxZQUFZLEdBQUc1RCxRQUFRLENBQUNDLGNBQWMsQ0FDdEMsZUFBZSxHQUFHa0IsR0FDdEIsQ0FBQyxDQUFDbEksS0FBSztNQUNQLElBQUl3TyxTQUFTLEdBQUcsQ0FBQztNQUNqQixJQUFJQyxTQUFTLEdBQUcsQ0FBQztNQUNqQixJQUFJekUsVUFBVSxHQUFHakQsUUFBUSxDQUFDQyxjQUFjLENBQUMsYUFBYSxHQUFHa0IsR0FBRyxDQUFDLENBQUNsSSxLQUFLO01BQ25FLElBQUlrTSxHQUFHLEdBQUduRixRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQ2hILEtBQUs7TUFDOUMsSUFBSTBPLG1CQUFtQixHQUFHM0gsUUFBUSxDQUFDQyxjQUFjLENBQzdDLGVBQWUsR0FBR2tCLEdBQ3RCLENBQUM7TUFFRCxJQUFJeUcsWUFBWSxHQUFHLEVBQUU7TUFDckIsSUFBSUQsbUJBQW1CLEVBQUU7UUFDckJDLFlBQVksR0FBR0QsbUJBQW1CLENBQUMxTyxLQUFLO01BQzVDO01BRUEsSUFBSTJPLFlBQVksS0FBS3hILFNBQVMsSUFBSXdILFlBQVksS0FBSyxJQUFJLEVBQUU7UUFDckRBLFlBQVksR0FBRyxFQUFFO01BQ3JCO01BRUEsSUFBSXpDLEdBQUcsS0FBSyxJQUFJLEVBQUU7UUFDZCxJQUFJbkYsUUFBUSxDQUFDQyxjQUFjLENBQUMsU0FBUyxHQUFHa0IsR0FBRyxDQUFDLENBQUMrRSxPQUFPLEtBQUssSUFBSSxFQUFFO1VBQzNEdUIsU0FBUyxHQUFHL0gsY0FBYztRQUM5QjtNQUNKLENBQUMsTUFBTTtRQUNINkgsT0FBTyxHQUFHLElBQUk7UUFDZCxJQUNJdkgsUUFBUSxDQUFDQyxjQUFjLENBQUMsV0FBVyxHQUFHa0IsR0FBRyxDQUFDLENBQUMrRSxPQUFPLEtBQUssSUFBSSxFQUM3RDtVQUNFdUIsU0FBUyxHQUFHaEksYUFBYTtRQUM3QjtNQUNKO01BRUFpSSxTQUFTLEdBQUcsQ0FBQzlELFlBQVksSUFBSSxDQUFDWCxVQUFVLEdBQUd3RSxTQUFTLENBQUM7TUFDckRMLGVBQWUsR0FBR0EsZUFBZSxHQUFHTSxTQUFTO01BRTdDLElBQUlFLFlBQVksS0FBSyxhQUFhLEVBQUU7UUFDaENULFVBQVUsR0FBR0EsVUFBVSxHQUFHTyxTQUFTO01BQ3ZDO0lBQ0osQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDUCxVQUFVLEdBQUcsQ0FBQ0UsYUFBYSxFQUFFO01BQzlCLElBQUlRLFVBQVUsR0FBRzdILFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLG1CQUFtQixDQUFDO01BQzdENEgsVUFBVSxDQUFDQyxTQUFTLEdBQUUsZUFBZSxHQUFJWCxVQUFVLENBQUM3QixPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUUsR0FBRyxHQUFFaUMsT0FBTyxHQUFFLGlDQUFpQyxHQUFFRCxpQkFBaUIsR0FBQyxvQkFBb0I7TUFFdkpPLFVBQVUsQ0FBQ0UsS0FBSyxDQUFDQyxPQUFPLEdBQUcsT0FBTztJQUN0QyxDQUFDLE1BQU07TUFDSGhJLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUM4SCxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0lBQ3ZFO0lBQ0FoSSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQ2hILEtBQUssR0FBR2tPLFVBQVUsQ0FBQzdCLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDbkV0RixRQUFRLENBQUNDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDaEgsS0FBSyxHQUM1Q21PLGVBQWUsQ0FBQzlCLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDbEM7RUFDQSxTQUFTMUQsbUJBQW1CQSxDQUN4QnhILElBQUksRUFDSjZOLFFBQVEsRUFDUjlHLEdBQUcsRUFDSGtGLFVBQVUsRUFFWjtJQUFBLElBREU2QixTQUFTLEdBQUFsSixTQUFBLENBQUExQixNQUFBLFFBQUEwQixTQUFBLFFBQUFvQixTQUFBLEdBQUFwQixTQUFBLE1BQUcsSUFBSTtJQUVoQixJQUFJK0csT0FBTyxHQUFHL0YsUUFBUSxDQUFDb0IsYUFBYSxDQUFDLE9BQU8sQ0FBQztJQUM3QzJFLE9BQU8sQ0FBQzNMLElBQUksR0FBR0EsSUFBSTtJQUNuQjJMLE9BQU8sQ0FBQ3JJLElBQUksR0FBR3VLLFFBQVEsR0FBRyxJQUFJO0lBQzlCbEMsT0FBTyxDQUFDakcsRUFBRSxHQUFHbUksUUFBUSxHQUFHLEdBQUcsR0FBRzlHLEdBQUc7SUFDakM0RSxPQUFPLENBQUM5TSxLQUFLLEdBQUcsRUFBRTtJQUNsQjhNLE9BQU8sQ0FBQ3JFLFlBQVksQ0FBQyxrQkFBa0IsRUFBRTJFLFVBQVUsQ0FBQztJQUNwRE4sT0FBTyxDQUFDbkcsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQVk7TUFDM0M0RixjQUFjLENBQUNPLE9BQU8sQ0FBQztJQUMzQixDQUFDLENBQUM7SUFHRixPQUFPQSxPQUFPO0VBQ2xCO0VBQ0EsU0FBU3hCLGlCQUFpQkEsQ0FBQ3BELEdBQUcsRUFBd0I7SUFBQSxJQUF0QmQsYUFBYSxHQUFBckIsU0FBQSxDQUFBMUIsTUFBQSxRQUFBMEIsU0FBQSxRQUFBb0IsU0FBQSxHQUFBcEIsU0FBQSxNQUFHLElBQUk7SUFDcEQ0QixPQUFPLENBQUNDLEdBQUcsQ0FBQywyQkFBMkIsR0FBRVIsYUFBYSxDQUFDO0lBQ25ELElBQUk4SCxNQUFNLEdBQUduSSxRQUFRLENBQUNvQixhQUFhLENBQUMsUUFBUSxDQUFDO0lBQzdDK0csTUFBTSxDQUFDckksRUFBRSxHQUFHLGVBQWUsR0FBR3FCLEdBQUc7SUFDakNnSCxNQUFNLENBQUN6SyxJQUFJLEdBQUcsZUFBZSxHQUFHeUQsR0FBRztJQUNuQ2dILE1BQU0sQ0FBQ3pHLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxlQUFlLENBQUM7SUFDeER5RyxNQUFNLENBQUNqRyxTQUFTLEdBQUcsY0FBYztJQUVqQyxJQUFJa0csTUFBTSxHQUFHcEksUUFBUSxDQUFDb0IsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUM3Q2dILE1BQU0sQ0FBQ25QLEtBQUssR0FBRyxFQUFFO0lBQ2pCbVAsTUFBTSxDQUFDQyxJQUFJLEdBQUcsUUFBUTtJQUN0QkYsTUFBTSxDQUFDL0QsV0FBVyxDQUFDZ0UsTUFBTSxDQUFDO0lBQzFCLElBQUlFLFVBQVU7SUFFZEEsVUFBVTtNQUFBLElBQUFDLEtBQUEsR0FBQXhKLGlCQUFBLGVBQUF4RyxtQkFBQSxHQUFBb0YsSUFBQSxDQUFHLFNBQUE2SyxTQUFBO1FBQUEsSUFBQS9GLFFBQUE7UUFBQSxPQUFBbEssbUJBQUEsR0FBQXVCLElBQUEsVUFBQTJPLFVBQUFDLFNBQUE7VUFBQSxrQkFBQUEsU0FBQSxDQUFBdEssSUFBQSxHQUFBc0ssU0FBQSxDQUFBak0sSUFBQTtZQUFBO2NBQUFpTSxTQUFBLENBQUF0SyxJQUFBO2NBQUFzSyxTQUFBLENBQUFqTSxJQUFBO2NBQUEsT0FFa0JtRyxLQUFLLENBQUMrRixHQUFHLENBQUMsdUJBQXVCLENBQUM7WUFBQTtjQUFuRGxHLFFBQVEsR0FBQWlHLFNBQUEsQ0FBQXZNLElBQUE7Y0FBQSxPQUFBdU0sU0FBQSxDQUFBcE0sTUFBQSxXQUNQbUcsUUFBUSxDQUFDTixJQUFJO1lBQUE7Y0FBQXVHLFNBQUEsQ0FBQXRLLElBQUE7Y0FBQXNLLFNBQUEsQ0FBQTVGLEVBQUEsR0FBQTRGLFNBQUE7Y0FFcEI7Y0FDQTlILE9BQU8sQ0FBQ0MsR0FBRyxDQUFBNkgsU0FBQSxDQUFBNUYsRUFBTSxDQUFDO1lBQUM7WUFBQTtjQUFBLE9BQUE0RixTQUFBLENBQUFuSyxJQUFBO1VBQUE7UUFBQSxHQUFBaUssUUFBQTtNQUFBLENBRTFCO01BQUEsZ0JBUkRGLFVBQVVBLENBQUE7UUFBQSxPQUFBQyxLQUFBLENBQUF0SixLQUFBLE9BQUFELFNBQUE7TUFBQTtJQUFBLEdBUVQ7O0lBRUQ7SUFDQXNKLFVBQVUsQ0FBQyxDQUFDLENBQUMxTSxJQUFJLENBQUMsVUFBQ3VHLElBQUksRUFBSztNQUN4QjtNQUNBLEtBQUssSUFBSWpKLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR2lKLElBQUksQ0FBQzdFLE1BQU0sRUFBRXBFLENBQUMsRUFBRSxFQUFFO1FBQ2xDLElBQUlrUCxPQUFNLEdBQUdwSSxRQUFRLENBQUNvQixhQUFhLENBQUMsUUFBUSxDQUFDO1FBQzdDZ0gsT0FBTSxDQUFDblAsS0FBSyxHQUFHa0osSUFBSSxDQUFDakosQ0FBQyxDQUFDLENBQUNELEtBQUs7UUFDNUJtUCxPQUFNLENBQUNDLElBQUksR0FBR2xHLElBQUksQ0FBQ2pKLENBQUMsQ0FBQyxDQUFDa04sUUFBUTtRQUM5QixJQUFJL0YsYUFBYSxJQUFJLElBQUksSUFBSThCLElBQUksQ0FBQ2pKLENBQUMsQ0FBQyxDQUFDRCxLQUFLLEtBQUtvSCxhQUFhLEVBQUU7VUFDMUQrSCxPQUFNLENBQUNRLFFBQVEsR0FBRyxJQUFJO1FBQzFCO1FBQ0FULE1BQU0sQ0FBQy9ELFdBQVcsQ0FBQ2dFLE9BQU0sQ0FBQztNQUM5QjtJQUNKLENBQUMsQ0FBQztJQUVGRCxNQUFNLENBQUN2SSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBWTtNQUMxQzRGLGNBQWMsQ0FBQzJDLE1BQU0sQ0FBQztJQUMxQixDQUFDLENBQUM7SUFFRixPQUFPQSxNQUFNO0VBQ2pCO0VBQ0EsU0FBU3ZELGVBQWVBLENBQUEsRUFBRztJQUN2QixJQUFJaUUsYUFBYSxHQUFHN0ksUUFBUSxDQUFDOEUsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO0lBQzlEK0QsYUFBYSxDQUFDeE4sT0FBTyxDQUFDLFVBQVV5TixZQUFZLEVBQUU7TUFDMUMsSUFBSXZDLEtBQUssR0FBR3VDLFlBQVksQ0FBQ2hKLEVBQUUsQ0FBQzBHLEtBQUssQ0FBQyxHQUFHLENBQUM7TUFDdEMsSUFBSXJCLEdBQUcsR0FBR29CLEtBQUssQ0FBQyxDQUFDLENBQUM7TUFDbEIsSUFBSXBGLEdBQUcsR0FBR29GLEtBQUssQ0FBQ0EsS0FBSyxDQUFDakosTUFBTSxHQUFHLENBQUMsQ0FBQztNQUNqQyxJQUFJeUwsV0FBVyxHQUFHRCxZQUFZLENBQUMxTyxJQUFJO01BQ25DLElBQUk0TyxVQUFVLEdBQUdGLFlBQVksQ0FBQ0csT0FBTyxDQUFDQyxXQUFXLENBQUMsQ0FBQztNQUVuRCxJQUFJQyxVQUFVO01BRWQsSUFBSUosV0FBVyxLQUFLLE9BQU8sSUFBSTVELEdBQUcsS0FBSyxNQUFNLEVBQUU7UUFDM0NnRSxVQUFVLEdBQUcxRixXQUFXLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUV0QyxHQUFHLEVBQUUsSUFBSSxDQUFDO01BQ2hFLENBQUMsTUFBTSxJQUFJNEgsV0FBVyxLQUFLLE9BQU8sSUFBSTVELEdBQUcsS0FBSyxJQUFJLEVBQUU7UUFDaERnRSxVQUFVLEdBQUcxRixXQUFXLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUV0QyxHQUFHLENBQUM7TUFDekQsQ0FBQyxNQUFNLElBQUk2SCxVQUFVLEtBQUssT0FBTyxJQUFJN0QsR0FBRyxLQUFLLE1BQU0sRUFBRTtRQUNqRGdFLFVBQVUsR0FBR3pGLFdBQVcsQ0FBQyxJQUFJLEVBQUUsU0FBUyxHQUFHdkMsR0FBRyxFQUFFLElBQUksRUFBRUEsR0FBRyxDQUFDO01BQzlELENBQUMsTUFBTSxJQUFJNkgsVUFBVSxLQUFLLE9BQU8sSUFBSTdELEdBQUcsS0FBSyxJQUFJLEVBQUU7UUFDL0NnRSxVQUFVLEdBQUd6RixXQUFXLENBQUMsS0FBSyxFQUFFLFVBQVUsR0FBR3ZDLEdBQUcsRUFBRSxLQUFLLEVBQUVBLEdBQUcsQ0FBQztNQUNqRTtNQUVBLElBQUlnSSxVQUFVLEVBQUU7UUFDWkwsWUFBWSxDQUFDTSxhQUFhLENBQUNDLFlBQVksQ0FDbkNGLFVBQVUsRUFDVkwsWUFDSixDQUFDO01BQ0w7SUFDSixDQUFDLENBQUM7RUFDTjtFQUNBLFNBQVNuRSxlQUFlQSxDQUFBLEVBQUc7SUFDdkIsSUFBSWtFLGFBQWEsR0FBRzdJLFFBQVEsQ0FBQzhFLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztJQUMxRCtELGFBQWEsQ0FBQ3hOLE9BQU8sQ0FBQyxVQUFVeU4sWUFBWSxFQUFFO01BQzFDLElBQUl2QyxLQUFLLEdBQUd1QyxZQUFZLENBQUNoSixFQUFFLENBQUMwRyxLQUFLLENBQUMsR0FBRyxDQUFDO01BQ3RDLElBQUlyQixHQUFHLEdBQUdvQixLQUFLLENBQUMsQ0FBQyxDQUFDO01BQ2xCLElBQUlwRixHQUFHLEdBQUdvRixLQUFLLENBQUNBLEtBQUssQ0FBQ2pKLE1BQU0sR0FBRyxDQUFDLENBQUM7TUFDakMsSUFBSXlMLFdBQVcsR0FBR0QsWUFBWSxDQUFDMU8sSUFBSTtNQUNuQyxJQUFJNE8sVUFBVSxHQUFHRixZQUFZLENBQUNHLE9BQU8sQ0FBQ0MsV0FBVyxDQUFDLENBQUM7TUFDbkQsSUFBSUMsVUFBVTtNQUVkLElBQUlKLFdBQVcsS0FBSyxPQUFPLElBQUk1RCxHQUFHLEtBQUssSUFBSSxFQUFFO1FBQ3pDZ0UsVUFBVSxHQUFHMUYsV0FBVyxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFdEMsR0FBRyxDQUFDO01BQzNELENBQUMsTUFBTSxJQUFJNEgsV0FBVyxLQUFLLE9BQU8sSUFBSTVELEdBQUcsS0FBSyxLQUFLLEVBQUU7UUFDakRnRSxVQUFVLEdBQUcxRixXQUFXLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUV0QyxHQUFHLENBQUM7TUFDekQsQ0FBQyxNQUFNLElBQUk2SCxVQUFVLEtBQUssT0FBTyxJQUFJN0QsR0FBRyxLQUFLLElBQUksRUFBRTtRQUMvQ2dFLFVBQVUsR0FBR3pGLFdBQVcsQ0FBQyxHQUFHLEVBQUUsV0FBVyxHQUFHdkMsR0FBRyxFQUFFLE1BQU0sRUFBRUEsR0FBRyxDQUFDO01BQ2pFLENBQUMsTUFBTSxJQUFJNkgsVUFBVSxLQUFLLE9BQU8sSUFBSTdELEdBQUcsS0FBSyxLQUFLLEVBQUU7UUFDaERnRSxVQUFVLEdBQUd6RixXQUFXLENBQUMsSUFBSSxFQUFFLFNBQVMsR0FBR3ZDLEdBQUcsRUFBRSxJQUFJLEVBQUVBLEdBQUcsQ0FBQztNQUM5RDtNQUVBLElBQUlnSSxVQUFVLEVBQUU7UUFDWkwsWUFBWSxDQUFDTSxhQUFhLENBQUNDLFlBQVksQ0FDbkNGLFVBQVUsRUFDVkwsWUFDSixDQUFDO01BQ0w7SUFDSixDQUFDLENBQUM7RUFDTjtFQUNBLFNBQVNyRixXQUFXQSxDQUFDNkYsY0FBYyxFQUFFdEQsS0FBSyxFQUFFYixHQUFHLEVBQUVoRSxHQUFHLEVBQUU7SUFDbEQsSUFBSW9JLEtBQUssR0FBR3ZKLFFBQVEsQ0FBQ29CLGFBQWEsQ0FBQyxPQUFPLENBQUM7SUFDM0NtSSxLQUFLLENBQUNySCxTQUFTLEdBQ1gsa0JBQWtCLElBQ2pCaUQsR0FBRyxLQUFLLE1BQU0sSUFBSUEsR0FBRyxLQUFLLElBQUksR0FBRyxlQUFlLEdBQUcsV0FBVyxDQUFDO0lBQ3BFb0UsS0FBSyxDQUFDblAsSUFBSSxHQUFHLE9BQU87SUFDcEJtUCxLQUFLLENBQUM3TCxJQUFJLEdBQUcsTUFBTSxHQUFHeUQsR0FBRyxHQUFHLElBQUk7SUFDaENvSSxLQUFLLENBQUN6SixFQUFFLEdBQUcsTUFBTSxHQUFHcUYsR0FBRyxHQUFHLEdBQUcsR0FBR2hFLEdBQUc7SUFDbkNvSSxLQUFLLENBQUM3SCxZQUFZLENBQUMsa0JBQWtCLEVBQUU0SCxjQUFjLENBQUM7SUFFdEQsSUFBSW5FLEdBQUcsS0FBSyxNQUFNLElBQUlBLEdBQUcsS0FBSyxJQUFJLEVBQUU7TUFDaENvRSxLQUFLLENBQUNyRCxPQUFPLEdBQUcsSUFBSTtJQUN4QjtJQUNBcUQsS0FBSyxDQUFDM0osZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQVk7TUFDekM2RixrQkFBa0IsQ0FBQ3RFLEdBQUcsQ0FBQztJQUMzQixDQUFDLENBQUM7SUFDRixPQUFPb0ksS0FBSztFQUNoQjtFQUNBLFNBQVM3RixXQUFXQSxDQUFDOEYsU0FBUyxFQUFFQyxPQUFPLEVBQUV0RSxHQUFHLEVBQUVoRSxHQUFHLEVBQXFCO0lBQUEsSUFBbkJ1SSxTQUFTLEdBQUExSyxTQUFBLENBQUExQixNQUFBLFFBQUEwQixTQUFBLFFBQUFvQixTQUFBLEdBQUFwQixTQUFBLE1BQUcsS0FBSztJQUNoRSxJQUFJZ0gsS0FBSyxHQUFHaEcsUUFBUSxDQUFDb0IsYUFBYSxDQUFDLE9BQU8sQ0FBQztJQUMzQzRFLEtBQUssQ0FBQzlELFNBQVMsR0FDWCxrQkFBa0IsSUFDakJpRCxHQUFHLEtBQUssTUFBTSxJQUFJQSxHQUFHLEtBQUssSUFBSSxHQUFHLGVBQWUsR0FBRyxXQUFXLENBQUM7SUFDcEVhLEtBQUssQ0FBQ3lELE9BQU8sR0FBR0EsT0FBTztJQUN2QnpELEtBQUssQ0FBQ3pFLFNBQVMsR0FBR2lJLFNBQVM7SUFDM0IsSUFBSSxDQUFDRSxTQUFTLEVBQUU7TUFDWjFELEtBQUssQ0FBQ2xHLEVBQUUsR0FBRyxNQUFNLEdBQUdxRixHQUFHLEdBQUcsU0FBUyxHQUFHaEUsR0FBRztJQUM3QyxDQUFDLE1BQU07TUFDSDZFLEtBQUssQ0FBQ2xHLEVBQUUsR0FBRyxpQkFBaUIsR0FBR3FCLEdBQUc7SUFDdEM7SUFFQSxPQUFPNkUsS0FBSztFQUNoQjtFQUVBLElBQUksQ0FBQ3JHLE1BQU0sQ0FBQ2dLLFVBQVUsR0FBRyxTQUFTQSxVQUFVQSxDQUFDNUQsT0FBTyxFQUFFOUUsTUFBTSxFQUFFO0lBQzFELElBQUlvRixVQUFVLEdBQUdOLE9BQU8sQ0FBQ08sWUFBWSxDQUFDLGtCQUFrQixDQUFDO0lBQ3pELElBQUlyTixLQUFLLEdBQUc4TSxPQUFPLENBQUM5TSxLQUFLO0lBQ3pCLElBQUltSixHQUFHLEdBQUcsYUFBYSxHQUFHbkIsTUFBTTtJQUVoQyxJQUFJa0IsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiQSxJQUFJLENBQUNrRSxVQUFVLENBQUMsR0FBR3BOLEtBQUs7SUFFeEIySixLQUFLLENBQ0FDLElBQUksQ0FBQ1QsR0FBRyxFQUFFRCxJQUFJLEVBQUVsQixNQUFNLENBQUMsQ0FDdkJyRixJQUFJLENBQUMsVUFBQ2lMLEdBQUcsRUFBSztNQUNYO0lBQUEsQ0FDSCxDQUFDLFNBQ0ksQ0FBQyxVQUFDQyxHQUFHLEVBQUs7TUFDWkMsS0FBSyxDQUFDLGdEQUFnRCxDQUFDO0lBQzNELENBQUMsQ0FBQztJQUNOLElBQUlWLFVBQVUsS0FBSyxNQUFNLElBQUlBLFVBQVUsS0FBSyxZQUFZLElBQUlBLFVBQVUsS0FBSyxZQUFZLEVBQUU7TUFDckZ1RCxRQUFRLENBQUNDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JCO0VBQ0osQ0FBQztFQUVELElBQU1DLE9BQU8sR0FBRzlKLFFBQVEsQ0FBQzhFLGdCQUFnQixDQUFDLDBCQUEwQixDQUFDO0VBRXJFZ0YsT0FBTyxDQUFDek8sT0FBTyxDQUFDLFVBQUMwTyxNQUFNLEVBQUs7SUFDeEJBLE1BQU0sQ0FBQ25LLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO01BQ25DLElBQU1vSyxPQUFPLEdBQUdELE1BQU0sQ0FBQ0Usa0JBQWtCO01BQ3pDLElBQU1DLEtBQUssR0FBR0gsTUFBTSxDQUFDSSxhQUFhLENBQUMsYUFBYSxDQUFDO01BQ2pELElBQUlILE9BQU8sQ0FBQ2xJLFNBQVMsQ0FBQ3NJLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNwQ0osT0FBTyxDQUFDbEksU0FBUyxDQUFDdUksTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNoQ0wsT0FBTyxDQUFDakMsS0FBSyxDQUFDdUMsU0FBUyxHQUFHLElBQUk7UUFDOUJOLE9BQU8sQ0FBQ2pDLEtBQUssQ0FBQ3dDLE9BQU8sR0FBRyxRQUFRO1FBQ2hDTCxLQUFLLENBQUMzSSxTQUFTLEdBQUcsUUFBUTtNQUM5QixDQUFDLE1BQU07UUFDSHlJLE9BQU8sQ0FBQ2xJLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUM3QmlJLE9BQU8sQ0FBQ2pDLEtBQUssQ0FBQ3VDLFNBQVMsR0FBR04sT0FBTyxDQUFDUSxZQUFZLEdBQUcsSUFBSTtRQUNyRFIsT0FBTyxDQUFDakMsS0FBSyxDQUFDd0MsT0FBTyxHQUFHLE1BQU07UUFDOUJMLEtBQUssQ0FBQzNJLFNBQVMsR0FBRyxRQUFRO01BQzlCO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0VBRUYsSUFBSWtKLE1BQU0sR0FBR3pLLFFBQVEsQ0FBQzhFLGdCQUFnQixDQUFDLDBCQUEwQixDQUFDO0VBQ2xFLElBQUk0RixZQUFZLEdBQUcxSyxRQUFRLENBQUM4RSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7RUFFdEQyRixNQUFNLENBQUNwUCxPQUFPLENBQUMsVUFBVXNQLEtBQUssRUFBRTtJQUM1QkEsS0FBSyxDQUFDQyxRQUFRLEdBQUcsSUFBSTtFQUN6QixDQUFDLENBQUM7RUFDRjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBNUssUUFBUSxDQUFFQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUVMLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFZO0lBQ3hFLElBQUlxQixNQUFNLEdBQUdqQixRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQ2hILEtBQUs7SUFDcEQsSUFBSW1KLEdBQUcsR0FBRyx1QkFBdUIsR0FBR25CLE1BQU07SUFFMUMyQixLQUFLLENBQ0ErRixHQUFHLENBQUN2RyxHQUFHLENBQUMsQ0FDUnhHLElBQUksQ0FBQyxVQUFDaUwsR0FBRyxFQUFLO01BQ1gsSUFBSWdFLFdBQVcsR0FBR3hMLHFEQUFLLENBQUN5TCxRQUFRLENBQUMsV0FBVyxDQUFDO01BRTdDLElBQUlELFdBQVcsSUFBSXpLLFNBQVMsRUFBRTtRQUMxQnlLLFdBQVcsQ0FBQ0UsT0FBTyxDQUFDLENBQUM7TUFDekI7TUFFQSxJQUFNQyxHQUFHLEdBQUdoTCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxXQUFXLENBQUM7TUFDaEQsSUFBSWdMLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUN0RSxHQUFHLENBQUMxRSxJQUFJLENBQUM4SSxTQUFTLENBQUM7TUFFOUMsSUFBSUcsT0FBTyxHQUFHLElBQUkvTCxxREFBSyxDQUFDMkwsR0FBRyxFQUFFO1FBQ3pCNVEsSUFBSSxFQUFFLFVBQVU7UUFBRTtRQUNsQitILElBQUksRUFBRTtVQUNGa0osTUFBTSxFQUFFSixTQUFTLENBQUNJLE1BQU07VUFDeEJDLFFBQVEsRUFBRSxDQUNOO1lBQ0k7WUFDQW5KLElBQUksRUFBRThJLFNBQVMsQ0FBQ00sT0FBTztZQUN2QkMsZUFBZSxFQUFFUCxTQUFTLENBQUNRLE1BQU07WUFDakNDLFdBQVcsRUFBRSxDQUFDO1lBQ2RDLFdBQVcsRUFBRTtVQUNqQixDQUFDO1FBRVQsQ0FBQztRQUNEQyxPQUFPLEVBQUU7VUFDTEMsTUFBTSxFQUFFLEVBQUU7VUFBRTtVQUNaQyxNQUFNLEVBQUUsR0FBRztVQUNYQyxNQUFNLEVBQUU7WUFDSi9ELE9BQU8sRUFBRTtVQUNiLENBQUM7VUFDRGdFLE9BQU8sRUFBRTtZQUNMQyxVQUFVLEVBQUUsS0FBSyxDQUFFO1VBQ3ZCLENBQUM7VUFDREMsU0FBUyxFQUFFO1lBQ1BDLGFBQWEsRUFBRSxJQUFJO1lBQ25CQyxZQUFZLEVBQUU7VUFDbEI7UUFDSjtNQUNKLENBQUMsQ0FBQztNQUVGLElBQUlqRixVQUFVLEdBQ1ZuSCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQ2hILEtBQUs7TUFDL0MsSUFBSW1PLGVBQWUsR0FDZnBILFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUNoSCxLQUFLO01BQ3BEK0csUUFBUSxDQUFDQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQ29NLFdBQVcsR0FDbERsRixVQUFVO01BQ2RuSCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDb00sV0FBVyxHQUNuRGpGLGVBQWU7SUFDdkIsQ0FBQyxDQUFDLFNBQ0ksQ0FBQyxVQUFDTixHQUFHLEVBQUs7TUFDWkMsS0FBSyxDQUFDRCxHQUFHLENBQUM7SUFDZCxDQUFDLENBQUM7RUFDVixDQUFDLENBQUM7RUFHTjlHLFFBQVEsQ0FBQzhFLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDekosT0FBTyxDQUFDLFVBQVVpUixLQUFLLEVBQUU7SUFDNUQsSUFBTUMsVUFBVSxHQUFHRCxLQUFLLENBQUNoRyxZQUFZLENBQUMsa0JBQWtCLENBQUM7SUFFekQsSUFBSWhILGtEQUFRLENBQUNnTixLQUFLLENBQUNuQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUU7TUFDdkMrQixTQUFTLEVBQUUsR0FBRztNQUNkTSxLQUFLLEVBQUUsU0FBUEEsS0FBS0EsQ0FBWUMsR0FBRyxFQUFFO1FBQ2xCO1FBQ0EsSUFBTUMsVUFBVSxHQUFHLEVBQUU7UUFDckJKLEtBQUssQ0FBQ3hILGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDekosT0FBTyxDQUFDLFVBQVU4RixHQUFHLEVBQUU7VUFDaER1TCxVQUFVLENBQUN6UCxJQUFJLENBQUNrRSxHQUFHLENBQUNtRixZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDOztRQUVGO1FBQ0FxRyxlQUFlLENBQUNKLFVBQVUsRUFBRUcsVUFBVSxDQUFDO01BQzNDO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0VBQ0YsU0FBU0MsZUFBZUEsQ0FBQ0osVUFBVSxFQUFFRyxVQUFVLEVBQUU7SUFFN0MsSUFBSXpMLE1BQU0sR0FBR2pCLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDaEgsS0FBSztJQUVwRCxJQUFJa0osSUFBSSxHQUFHO01BQ1AsY0FBYyxFQUFFLGtCQUFrQjtNQUNsQyxjQUFjLEVBQUVuQyxRQUFRLENBQ25CbUssYUFBYSxDQUFDLHlCQUF5QixDQUFDLENBQ3hDN0QsWUFBWSxDQUFDLFNBQVMsQ0FBQztNQUM1QnNHLFdBQVcsRUFBRUwsVUFBVTtNQUN2Qk0sV0FBVyxFQUFFSCxVQUFVO01BQ3ZCSSxPQUFPLEVBQUU3TDtJQUNiLENBQUM7SUFFRCxJQUFJbUIsR0FBRyxHQUFHLG9CQUFvQjtJQUM5QlEsS0FBSyxDQUNBQyxJQUFJLENBQUNULEdBQUcsRUFBRUQsSUFBSSxDQUFDLENBQ2Z2RyxJQUFJLENBQUMsVUFBQ2lMLEdBQUcsRUFBSztNQUNYLElBQUlBLEdBQUcsQ0FBQzFFLElBQUksQ0FBQzRLLE1BQU0sSUFBSSxHQUFHLEVBQUU7UUFDeEJoRyxLQUFLLENBQUNGLEdBQUcsQ0FBQzFFLElBQUksQ0FBQzZLLEdBQUcsQ0FBQztNQUN2QjtJQUNKLENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQ2xHLEdBQUcsRUFBSztNQUNaQyxLQUFLLENBQUNELEdBQUcsQ0FBQztJQUNkLENBQUMsQ0FBQztJQUVOLElBQUltRyxhQUFhLEdBQUdqTixRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUM7SUFDckQsSUFBSWlOLElBQUksR0FBR0QsYUFBYSxDQUFDckIsT0FBTyxDQUFDdE8sTUFBTTtJQUN2QyxLQUFLLElBQUlwRSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdnVSxJQUFJLEVBQUVoVSxDQUFDLEVBQUUsRUFBRTtNQUMzQixJQUFJK1QsYUFBYSxDQUFDckIsT0FBTyxDQUFDMVMsQ0FBQyxDQUFDLENBQUNELEtBQUssSUFBSSxXQUFXLEVBQUU7UUFDL0NnVSxhQUFhLENBQUNyQixPQUFPLENBQUMxUyxDQUFDLENBQUMsQ0FBQzBQLFFBQVEsR0FBRyxJQUFJO1FBQ3hDO01BQ0o7SUFDSjtFQUNKO0VBRUEsSUFBSXVFLGVBQWUsR0FBR25OLFFBQVEsQ0FBQ21LLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztFQUVqRSxJQUFHZ0QsZUFBZSxLQUFLLElBQUksSUFBSUEsZUFBZSxLQUFLL00sU0FBUyxFQUFDO0lBQ3pEZCxrREFBUSxDQUFDdEYsTUFBTSxDQUFDZ0csUUFBUSxDQUFDbUssYUFBYSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7TUFDekQrQixTQUFTLEVBQUUsR0FBRztNQUNkek4sTUFBTSxFQUFFLDBCQUEwQjtNQUNsQzJPLFVBQVUsRUFBRSxnQkFBZ0I7TUFDNUJaLEtBQUssRUFBRSxTQUFQQSxLQUFLQSxDQUFZQyxHQUFHLEVBQUU7UUFDbEI7UUFDQVksbUJBQW1CLENBQUMsQ0FBQztNQUN6QjtJQUNKLENBQUMsQ0FBQztFQUNOO0VBSUEsU0FBU0EsbUJBQW1CQSxDQUFBLEVBQUc7SUFFM0IsSUFBTUMsUUFBUSxHQUFHLEVBQUU7SUFDbkJ0TixRQUFRLENBQUM4RSxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDekosT0FBTyxDQUFDLFVBQUNrUyxJQUFJLEVBQUVDLEtBQUssRUFBSztNQUV2RUYsUUFBUSxDQUFDclEsSUFBSSxDQUFDO1FBQ1Z3USxhQUFhLEVBQUVGLElBQUksQ0FBQ2pILFlBQVksQ0FBQyxxQkFBcUIsQ0FBQztRQUN2RG9ILGNBQWMsRUFBRUY7TUFDcEIsQ0FBQyxDQUFDO0lBR04sQ0FBQyxDQUFDO0lBRUYsSUFBSXBMLEdBQUcsR0FBRyx5QkFBeUI7SUFDbkMsSUFBSW5CLE1BQU0sR0FBR2pCLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDaEgsS0FBSztJQUVwRCxJQUFJa0osSUFBSSxHQUFHO01BQ1AsY0FBYyxFQUFFLGtCQUFrQjtNQUNsQyxjQUFjLEVBQUVuQyxRQUFRLENBQ25CbUssYUFBYSxDQUFDLHlCQUF5QixDQUFDLENBQ3hDN0QsWUFBWSxDQUFDLFNBQVMsQ0FBQztNQUM1Qm9ILGNBQWMsRUFBRUosUUFBUTtNQUN4QlIsT0FBTyxFQUFFN0w7SUFDYixDQUFDO0lBQ0Q7SUFDQTJCLEtBQUssQ0FDQUMsSUFBSSxDQUFDVCxHQUFHLEVBQUVELElBQUksQ0FBQyxDQUNmdkcsSUFBSSxDQUFDLFVBQUNpTCxHQUFHLEVBQUs7TUFFWCxJQUFJQSxHQUFHLENBQUMxRSxJQUFJLENBQUM0SyxNQUFNLElBQUksR0FBRyxFQUFFO1FBQ3hCaEcsS0FBSyxDQUFDRixHQUFHLENBQUMxRSxJQUFJLENBQUM2SyxHQUFHLENBQUM7TUFDdkI7SUFDSixDQUFDLENBQUMsU0FDSSxDQUFDLFVBQUNsRyxHQUFHLEVBQUs7TUFDWkMsS0FBSyxDQUFDRCxHQUFHLENBQUM7SUFDZCxDQUFDLENBQUM7RUFFVjtBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDNzNCd0I7QUFDMUJuSCxNQUFNLENBQUNpRCxLQUFLLEdBQUdBLDZDQUFLO0FBRXBCakQsTUFBTSxDQUFDaUQsS0FBSyxDQUFDK0ssUUFBUSxDQUFDN0QsT0FBTyxDQUFDOEQsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsZ0JBQWdCOzs7Ozs7Ozs7OztBQ0gzRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Fzcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgJy4vYm9vdHN0cmFwJyA7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCJib290c3RyYXBcIjtcbi8vIGltcG9ydCAgJ2Jvb3RzdHJhcCc7XG5pbXBvcnQgXCJAcG9wcGVyanMvY29yZVwiO1xuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qcy9hdXRvXCI7XG5pbXBvcnQgU29ydGFibGUgZnJvbSBcInNvcnRhYmxlanNcIjtcbmNvbnN0IGJvb3RzdHJhcCA9IHJlcXVpcmUoXCIuL2Jvb3RzdHJhcFwiKTtcbmNvbnN0IGdyYW1Db252ZXJ0ZXIgPSAxMDAwO1xuY29uc3Qgb3VuY2VDb252ZXJ0ZXIgPSAxNjtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoZSkge1xuICAgIHRoaXMud2luZG93LnNob3dQYXNzd29yZCA9IGZ1bmN0aW9uIHNob3dQYXNzd29yZChpZCkge1xuICAgICAgICBsZXQgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgIGlmIChwYXNzd29yZC50eXBlID09PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgICAgICAgIHBhc3N3b3JkLnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhc3N3b3JkLnR5cGUgPSBcInBhc3N3b3JkXCI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMud2luZG93LmFkZExpc3RJdGVtID0gZnVuY3Rpb24gYWRkTGlzdEl0ZW0oY2F0ZWdvcnljb3VudGVyID0gbnVsbCwgZ3JvdXBDYXRlZ29yeSA9IG51bGwpIHtcbiAgICAgICAgbGV0IG51bWJlck9mSXRlbXNUb0FkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZXNUb0FkZFwiKTtcbiAgICAgICAgbGV0IGxpbmVzVG9BZGQgPSAxO1xuICAgICAgICBpZiAobnVtYmVyT2ZJdGVtc1RvQWRkID09PSBudWxsIHx8ICtudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPCAxKSB7XG4gICAgICAgICAgICBudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPSBsaW5lc1RvQWRkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGluZXNUb0FkZCA9ICtudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzVG9BZGQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGxpc3RVT00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbVwiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBmaW5hbElFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaW5hbC1pXCIpO1xuICAgICAgICAgICAgbGV0IGxpc3RCeUl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0QnlJdGVtc1wiKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibGlzdCBieSBpdGVtOiBcIiArIGxpc3RCeUl0ZW1zKTtcbiAgICAgICAgICAgIGxldCBpdGVtVGFibGU7XG5cbiAgICAgICAgICAgIGlmICgrbGlzdEJ5SXRlbXMgPT0gMSkge1xuICAgICAgICAgICAgICAgIGxpc3RCeUl0ZW1zID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxpc3QgYnkgaXRlbSAyOiBcIiArIGxpc3RCeUl0ZW1zKTtcbiAgICAgICAgICAgICAgICBpdGVtVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW0tdGFibGUtYm9keVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGlzdEJ5SXRlbXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsZXQgdGFibGVDYXRlZ29yeSA9IGNhdGVnb3J5Y291bnRlcjtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRhYmxlIGNhdDogXCIgKyB0YWJsZUNhdGVnb3J5KTtcbiAgICAgICAgICAgICAgICBpdGVtVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgICAgICAgICAgXCJjYXRlZ29yeVRhYmxlLVwiICsgdGFibGVDYXRlZ29yeVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB1c2VySWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJJZFwiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RJZFwiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBmaW5hbEkgPSBmaW5hbElFbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgZmluYWxJRWxlbWVudC52YWx1ZSA9ICtmaW5hbEkgKyAxO1xuXG4gICAgICAgICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgY2VsbHMgYW5kIGlucHV0IGVsZW1lbnRzLlxuICAgICAgICAgICAgbGV0IGNlbGwwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgICAgICAgICAgY2VsbDAuc2NvcGUgPSBcInJvd1wiO1xuICAgICAgICAgICAgY2VsbDAuaW5uZXJIVE1MID0gZmluYWxJO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG5cbiAgICAgICAgICAgIGxldCBjb3VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgY291bnRlci50eXBlID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgIGNvdW50ZXIubmFtZSA9IFwiaWRbXVwiO1xuICAgICAgICAgICAgY291bnRlci5pZCA9IFwiaWQtXCIgKyBmaW5hbEk7XG4gICAgICAgICAgICBjb3VudGVyLnZhbHVlID0gXCJuZXctXCIgKyBmaW5hbEk7XG4gICAgICAgICAgICBjb3VudGVyLnNldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uLW5hbWVcIiwgXCJpZFwiKTtcblxuICAgICAgICAgICAgbGV0IGl0ZW1OYW1lID0gY3JlYXRlTGlzdEl0ZW1JbnB1dChcbiAgICAgICAgICAgICAgICBcInRleHRcIixcbiAgICAgICAgICAgICAgICBcIml0ZW1OYW1lXCIsXG4gICAgICAgICAgICAgICAgZmluYWxJLFxuICAgICAgICAgICAgICAgIFwiaXRlbV9uYW1lXCIsXG4gICAgICAgICAgICAgICAgbGlzdEJ5SXRlbXNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpdGVtTmFtZS5wbGFjZWhvbGRlciA9IFwiSXRlbSBOYW1lXCI7XG4gICAgICAgICAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBjZWxsNi5pZCA9IFwiYnRuLXRkLVwiICsgZmluYWxJO1xuICAgICAgICAgICAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICAgICAgZGVsZXRlQnRuLmlkID0gXCJkZWxldGVCdG4tXCIgKyBmaW5hbEk7XG4gICAgICAgICAgICBkZWxldGVCdG4uY2xhc3NOYW1lID0gXCJidG4gYnRuLXByaW1hcnkgYnRuLXNtICBweS0yXCI7XG4gICAgICAgICAgICBkZWxldGVCdG4uaW5uZXJIVE1MID0gXCJ4XCI7XG5cbiAgICAgICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgICAgICBsZXQgdXJsID0gXCIvbGlzdC1pdGVtXCI7XG5cbiAgICAgICAgICAgIGlmIChsaXN0VU9NID09IFwidXNcIikge1xuICAgICAgICAgICAgICAgIGRhdGEgPSBnZXRCb29sZWFuRGF0YShcImluX291bmNlc1wiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IGdldEJvb2xlYW5EYXRhKFwiaW5fZ3JhbXNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhW1wibGlzdF9pZFwiXSA9IGxpc3RJZDtcbiAgICAgICAgICAgIGRhdGFbXCJ1c2VyX2lkXCJdID0gdXNlcklkO1xuICAgICAgICAgICAgZGF0YVtcIml0ZW1fbmFtZVwiXSA9IFwiXCI7XG4gICAgICAgICAgICBpZihncm91cENhdGVnb3J5ICE9PSBudWxsKXtcbiAgICAgICAgICAgICAgICBkYXRhWydpdGVtX2NhdGVnb3J5J10gPSBncm91cENhdGVnb3J5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdXBkYXRlSXRlbTtcbiAgICAgICAgICAgIHVwZGF0ZUl0ZW0gPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KHVybCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJyZXNwb25zZSBmcm8gbmV3IGlucHV0OiBcIiArIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICAvLyApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIFRvIHVzZSB0aGUgZnVuY3Rpb24gYW5kIGhhbmRsZSB0aGUgcmVzcG9uc2UgZGF0YVxuICAgICAgICAgICAgdXBkYXRlSXRlbSgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCB0aGUgcmVzcG9uc2UgZGF0YVxuICAgICAgICAgICAgICAgIGNvdW50ZXIudmFsdWUgPSBkYXRhLm5ld0lkO1xuICAgICAgICAgICAgICAgIHJvdy5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIGRhdGEubmV3SWQpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgICAgIFwiaHJlZlwiLFxuICAgICAgICAgICAgICAgICAgICBcIi9kZXN0cm95LWxpc3QtaXRlbS9cIiArIGRhdGEubmV3SWRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgbGV0IGNlbGwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgbGV0IGl0ZW1XZWlnaHQgPSBjcmVhdGVMaXN0SXRlbUlucHV0KFxuICAgICAgICAgICAgICAgIFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgXCJpdGVtV2VpZ2h0XCIsXG4gICAgICAgICAgICAgICAgZmluYWxJLFxuICAgICAgICAgICAgICAgIFwiaXRlbV93ZWlnaHRcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQudmFsdWUgPSAwO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKFwiZm9yLXdlaWdodFwiKTtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQuY2xhc3NMaXN0LmFkZChcIm51bWJlci1pbnB1dFwiKTtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcbiAgICAgICAgICAgIGNlbGwyLmNsYXNzTGlzdC5hZGQoXCJudW1iZXItY29sXCIpO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBsZXQgbGluZVVvbUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBjZWxsMy5jbGFzc0xpc3QuYWRkKFwidW9tLXRkXCIpO1xuICAgICAgICAgICAgbGluZVVvbUNlbGwuY2xhc3NMaXN0LmFkZChcInVvbS10ZFwiKTtcbiAgICAgICAgICAgIGxldCByYWRpbzE7XG4gICAgICAgICAgICBsZXQgcmFkaW8yO1xuICAgICAgICAgICAgbGV0IHJhZGlvTGFiZWwxO1xuICAgICAgICAgICAgbGV0IHJhZGlvTGFiZWwyO1xuICAgICAgICAgICAgbGV0IHJhZGlvTGFiZWwzO1xuXG4gICAgICAgICAgICBpZiAobGlzdFVPTSA9PT0gXCJ1c1wiKSB7XG4gICAgICAgICAgICAgICAgcmFkaW8xID0gY3JlYXRlUmFkaW8oXCJpbl9vdW5jZXNcIiwgXCJcIiwgXCJvelwiLCBmaW5hbEkpO1xuICAgICAgICAgICAgICAgIHJhZGlvTGFiZWwxID0gY3JlYXRlTGFiZWwoXG4gICAgICAgICAgICAgICAgICAgIFwiT1pcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ1b20tb3otXCIgKyBmaW5hbEksXG4gICAgICAgICAgICAgICAgICAgIFwib3pcIixcbiAgICAgICAgICAgICAgICAgICAgZmluYWxJXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByYWRpbzIgPSBjcmVhdGVSYWRpbyhcImluX2xic1wiLCBcIlwiLCBcImxic1wiLCBmaW5hbEkpO1xuICAgICAgICAgICAgICAgIHJhZGlvTGFiZWwyID0gY3JlYXRlTGFiZWwoXG4gICAgICAgICAgICAgICAgICAgIFwiTEJTXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidW9tLWxicy1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgICAgICAgICAgXCJsYnNcIixcbiAgICAgICAgICAgICAgICAgICAgZmluYWxJXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByYWRpb0xhYmVsMyA9IGNyZWF0ZUxhYmVsKFxuICAgICAgICAgICAgICAgICAgICBcIk9aXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidW9tLW96LVwiICsgZmluYWxJLFxuICAgICAgICAgICAgICAgICAgICBcIm96XCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsSSxcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJhZGlvMSA9IGNyZWF0ZVJhZGlvKFwiaW5fZ3JhbXNcIiwgXCJcIiwgXCJncmFtXCIsIGZpbmFsSSk7XG4gICAgICAgICAgICAgICAgcmFkaW9MYWJlbDEgPSBjcmVhdGVMYWJlbChcbiAgICAgICAgICAgICAgICAgICAgXCJHXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidW9tLWdyYW0tXCIgKyBmaW5hbEksXG4gICAgICAgICAgICAgICAgICAgIFwiZ3JhbVwiLFxuICAgICAgICAgICAgICAgICAgICBmaW5hbElcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJhZGlvMiA9IGNyZWF0ZVJhZGlvKFwiaW5fa2lsb3NcIiwgXCJcIiwgXCJrZ1wiLCBmaW5hbEkpO1xuICAgICAgICAgICAgICAgIHJhZGlvTGFiZWwyID0gY3JlYXRlTGFiZWwoXG4gICAgICAgICAgICAgICAgICAgIFwiS0dcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ1b20ta2ctXCIgKyBmaW5hbEksXG4gICAgICAgICAgICAgICAgICAgIFwia2dcIixcbiAgICAgICAgICAgICAgICAgICAgZmluYWxJXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByYWRpb0xhYmVsMyA9IGNyZWF0ZUxhYmVsKFxuICAgICAgICAgICAgICAgICAgICBcIkdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ1b20tZ3JhbS1cIiArIGZpbmFsSSxcbiAgICAgICAgICAgICAgICAgICAgXCJncmFtXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsSSxcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBjZWxsNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGNlbGw0LmNsYXNzTGlzdC5hZGQoXCJudW1iZXItY29sXCIpO1xuICAgICAgICAgICAgbGV0IHBhY2tlZEFtb3VudCA9IGNyZWF0ZUxpc3RJdGVtSW5wdXQoXG4gICAgICAgICAgICAgICAgXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICBcInBhY2tlZEFtb3VudFwiLFxuICAgICAgICAgICAgICAgIGZpbmFsSSxcbiAgICAgICAgICAgICAgICBcImFtb3VudFwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcGFja2VkQW1vdW50LnZhbHVlID0gMTtcblxuICAgICAgICAgICAgcGFja2VkQW1vdW50LmNsYXNzTGlzdC5hZGQoXCJmb3Itd2VpZ2h0XCIpO1xuICAgICAgICAgICAgcGFja2VkQW1vdW50LmNsYXNzTGlzdC5hZGQoXCJudW1iZXItaW5wdXRcIik7XG4gICAgICAgICAgICBwYWNrZWRBbW91bnQuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcblxuICAgICAgICAgICAgbGV0IGNlbGw1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgY2VsbDUuY2xhc3NMaXN0LmFkZChcIm51bWJlci1jb2xcIik7XG4gICAgICAgICAgICBsZXQgdG90YWxMaW5lV2VpZ2h0ID0gY3JlYXRlTGlzdEl0ZW1JbnB1dChcbiAgICAgICAgICAgICAgICBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIFwidG90YWxMaW5lV2VpZ2h0XCIsXG4gICAgICAgICAgICAgICAgZmluYWxJLFxuICAgICAgICAgICAgICAgIFwidG90YWxfbGluZV93ZWlnaHRcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC52YWx1ZSA9IDA7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgICAgIFwiZGF0YS1jb2x1bW4tbmFtZVwiLFxuICAgICAgICAgICAgICAgIFwidG90YWxfbGluZV93ZWlnaHRcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC5zZXRBdHRyaWJ1dGUoXCJyZWFkb25seVwiLCB0cnVlKTtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWlucHV0XCIpO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRyb2xcIik7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQuY2xhc3NMaXN0LmFkZChcImZvci10b3RhbC1saXN0LXdlaWdodFwiKTtcblxuICAgICAgICAgICAgLy9hcHBlbmQgaW5wdXRzIHRvIGNlbGxzLlxuXG4gICAgICAgICAgICAvLyBEZWZpbmUgdGhlIFNWRyBuYW1lc3BhY2VcbiAgICAgICAgICAgIGNvbnN0IHN2Z05hbWVzcGFjZSA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbiAgICAgICAgICAgIGxldCBpY29uQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyBTVkcgZWxlbWVudFxuICAgICAgICAgICAgbGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTmFtZXNwYWNlLCBcInN2Z1wiKTtcbiAgICAgICAgICAgIGljb24uc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxNlwiKTtcbiAgICAgICAgICAgIGljb24uc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMTZcIik7XG4gICAgICAgICAgICBpY29uLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJjdXJyZW50Q29sb3JcIik7XG4gICAgICAgICAgICBpY29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYmkgYmktZ3JpcC12ZXJ0aWNhbFwiKTtcbiAgICAgICAgICAgIGljb24uc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAxNiAxNlwiKTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSA8cGF0aD4gZWxlbWVudFxuICAgICAgICAgICAgbGV0IHBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTmFtZXNwYWNlLCBcInBhdGhcIik7XG4gICAgICAgICAgICBwYXRoLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgICBcImRcIixcbiAgICAgICAgICAgICAgICBcIk03IDJhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbTMgMGExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBNNyA1YTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMG0zIDBhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwTTcgOGExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBtMyAwYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMG0tMyAzYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMG0zIDBhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbS0zIDNhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbTMgMGExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBcIlxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSBwYXRoIHRvIHRoZSBTVkdcbiAgICAgICAgICAgIGljb24uYXBwZW5kQ2hpbGQocGF0aCk7XG5cbiAgICAgICAgICAgIC8vIC8vIENyZWF0ZSBhIG5ldyB0YWJsZSBjZWxsXG4gICAgICAgICAgICAvLyBsZXQgaWNvbkNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG5cbiAgICAgICAgICAgIC8vIC8vIEFwcGVuZCB0aGUgU1ZHIGljb24gdG8gdGhlIGNlbGxcbiAgICAgICAgICAgIGljb25DZWxsLmFwcGVuZENoaWxkKGljb24pO1xuXG4gICAgICAgICAgICBjZWxsMS5hcHBlbmRDaGlsZChjb3VudGVyKTtcbiAgICAgICAgICAgIC8vIGNlbGwxLmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICAgICAgY2VsbDEuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgICAgICAgICAgY2VsbDIuYXBwZW5kQ2hpbGQoaXRlbVdlaWdodCk7XG5cbiAgICAgICAgICAgIGxldCBzZWxlY3RDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgbGV0IGNhdGVnb3J5U2VsZWN0ID0gZ2V0Q2F0ZWdyb3lTZWxlY3QoZmluYWxJLCBncm91cENhdGVnb3J5KTtcbiAgICAgICAgICAgIC8vbGlzdFNlY3Rpb25DYXRlZ29yeVxuICAgICAgICAgICAgc2VsZWN0Q2VsbC5hcHBlbmQoY2F0ZWdvcnlTZWxlY3QpO1xuXG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChyYWRpbzEpO1xuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbDEpO1xuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQocmFkaW8yKTtcbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHJhZGlvTGFiZWwyKTtcblxuICAgICAgICAgICAgY2VsbDQuYXBwZW5kQ2hpbGQocGFja2VkQW1vdW50KTtcbiAgICAgICAgICAgIGNlbGw1LmFwcGVuZENoaWxkKHRvdGFsTGluZVdlaWdodCk7XG4gICAgICAgICAgICBsaW5lVW9tQ2VsbC5hcHBlbmRDaGlsZChyYWRpb0xhYmVsMyk7XG4gICAgICAgICAgICBjZWxsNi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgY2VsbHMgdG8gdGhlIHJvdy5cbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChpY29uQ2VsbCk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDEpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHNlbGVjdENlbGwpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwzKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsMik7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDQpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGw1KTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChsaW5lVW9tQ2VsbCk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDYpO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIHJvdyB0byB0aGUgdGFibGUuXG4gICAgICAgICAgICBpdGVtVGFibGUuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgICAgIC8vIGlmIChncm91cENhdGVnb3J5ICE9IG51bGwpe1xuICAgICAgICAgICAgLy8gICAgIC8vc2VsZWN0LnZhbHVlID0gZ3JvdXBDYXRlZ29yeTtcbiAgICAgICAgICAgIC8vICAgICB1cGRhdGVMaXN0SXRlbShjYXRlZ29yeVNlbGVjdCk7XG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgIC8vYWRkIGZ1bmN0aW9ucyB0byBjYWxjdWxhdGUgYW5kIGNvbnZlcnQgdG90YWwgd2VpZ2h0LlxuICAgICAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcldlaWdodENhbGMoZmluYWxJKTtcbiAgICAgICAgfVxuICAgICAgICBudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPSAxO1xuICAgIH07XG5cbiAgICB0aGlzLndpbmRvdy51cGRhdGVVT00gPSBmdW5jdGlvbiB1cGRhdGVVT00odmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBcInVzXCIpIHtcbiAgICAgICAgICAgIHVzUmFkaW9Ub01ldHJpYygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWV0cmljUmFkaW9Ub1VzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJXZWlnaHRDYWxjKHJvdykge1xuICAgICAgICBsZXQgbmVlZGVkRm9yV2VpZ2h0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yLXdlaWdodFwiKTtcbiAgICAgICAgbmVlZGVkRm9yV2VpZ2h0cy5mb3JFYWNoKGZ1bmN0aW9uIChuZWVkZWRGb3JXZWlnaHQpIHtcbiAgICAgICAgICAgIG5lZWRlZEZvcldlaWdodC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBnZXRMaW5lVG90YWxXZWlnaHQocm93KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLndpbmRvdy5nZXRMaW5lVG90YWxXZWlnaHQgPSBmdW5jdGlvbiBnZXRMaW5lVG90YWxXZWlnaHQoXG4gICAgICAgIHJvdyxcbiAgICAgICAgY29udmVydCA9IGZhbHNlXG4gICAgKSB7XG4gICAgICAgIGxldCB3ZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1XZWlnaHQtXCIgKyByb3cpLnZhbHVlO1xuICAgICAgICBsZXQgcGFja2VkQW1vdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWNrZWRBbW91bnQtXCIgKyByb3cpLnZhbHVlO1xuICAgICAgICBsZXQgdW9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b21cIik7XG4gICAgICAgIGxldCBsaW5lVG90YWxXZWlnaHRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgICBcInRvdGFsTGluZVdlaWdodC1cIiArIHJvd1xuICAgICAgICApO1xuXG4gICAgICAgIGxldCBsaW5lVG90YWwgPSAwO1xuICAgICAgICBsaW5lVG90YWwgPSArd2VpZ2h0ICogK3BhY2tlZEFtb3VudDtcbiAgICAgICAgbGluZVRvdGFsID0gbGluZVRvdGFsLnRvRml4ZWQoMikucmVwbGFjZSgvWy4sXTAwJC8sIFwiXCIpO1xuICAgICAgICBsaW5lVG90YWxXZWlnaHRFbGVtZW50LnZhbHVlID0gbGluZVRvdGFsO1xuXG4gICAgICAgIHVwZGF0ZUxpc3RJdGVtKGxpbmVUb3RhbFdlaWdodEVsZW1lbnQpO1xuICAgIH07XG4gICAgdGhpcy53aW5kb3cuY29udmVydE1lYXN1cmVtZW50ID0gZnVuY3Rpb24gY29udmVydE1lYXN1cmVtZW50KFxuICAgICAgICByb3csXG4gICAgICAgIGNvbnZlcnQgPSBmYWxzZVxuICAgICkge1xuICAgICAgICBsZXQgdW9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b21cIikudmFsdWU7XG4gICAgICAgIGxldCB3ZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1XZWlnaHQtXCIgKyByb3cpO1xuICAgICAgICBsZXQgcGFja2VkQW1vdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWNrZWRBbW91bnQtXCIgKyByb3cpLnZhbHVlO1xuICAgICAgICBsZXQgdG90YWxXZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdGFsTGluZVdlaWdodC1cIiArIHJvdyk7XG4gICAgICAgIGxldCB0b3RhbExpbmVXZWlnaHRWYWx1ZSA9IDA7XG4gICAgICAgIGxldCB3ZWlnaHRWYWx1ZSA9IHdlaWdodC52YWx1ZTtcbiAgICAgICAgbGV0IHNtYWxsO1xuICAgICAgICBsZXQgbGFyZ2U7XG4gICAgICAgIGxldCBlbGVtZW50O1xuICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmUtdW9tLWxhYmVsLVwiICsgcm93KTtcbiAgICAgICAgbGV0IGxhYmVsSFRNTDtcblxuICAgICAgICBpZiAodW9tID09PSBcInVzXCIpIHtcbiAgICAgICAgICAgIHNtYWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b20tb3otXCIgKyByb3cpO1xuICAgICAgICAgICAgbGFyZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1sYnMtXCIgKyByb3cpO1xuICAgICAgICAgICAgaWYgKHNtYWxsLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB3ZWlnaHRWYWx1ZSA9ICt3ZWlnaHRWYWx1ZSAqIDE2O1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBzbWFsbDtcbiAgICAgICAgICAgICAgICBsYWJlbEhUTUwgPSBcIk9aXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdlaWdodFZhbHVlID0gK3dlaWdodFZhbHVlIC8gMTY7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGxhcmdlO1xuICAgICAgICAgICAgICAgIGxhYmVsSFRNTCA9IFwiTEJTXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzbWFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tLWdyYW0tXCIgKyByb3cpO1xuICAgICAgICAgICAgbGFyZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVvbS1rZy1cIiArIHJvdyk7XG5cbiAgICAgICAgICAgIGlmIChzbWFsbC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0VmFsdWUgPSArd2VpZ2h0VmFsdWUgKiAxMDAwO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBzbWFsbDtcbiAgICAgICAgICAgICAgICBsYWJlbEhUTUwgPSBcIkdcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0VmFsdWUgPSArd2VpZ2h0VmFsdWUgLyAxMDAwO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBsYXJnZTtcbiAgICAgICAgICAgICAgICBsYWJlbEhUTUwgPSBcIktHXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0b3RhbExpbmVXZWlnaHRWYWx1ZSA9ICt3ZWlnaHRWYWx1ZSAqICtwYWNrZWRBbW91bnQ7XG4gICAgICAgIHdlaWdodC52YWx1ZSA9IHdlaWdodFZhbHVlLnRvRml4ZWQoMikucmVwbGFjZSgvWy4sXTAwJC8sIFwiXCIpO1xuICAgICAgICB0b3RhbFdlaWdodC52YWx1ZSA9IHRvdGFsTGluZVdlaWdodFZhbHVlXG4gICAgICAgICAgICAudG9GaXhlZCgyKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1suLF0wMCQvLCBcIlwiKTtcbiAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gbGFiZWxIVE1MO1xuICAgICAgICB1cGRhdGVMaXN0SXRlbShlbGVtZW50KTtcbiAgICAgICAgdXBkYXRlTGlzdEl0ZW0od2VpZ2h0KTtcbiAgICAgICAgdXBkYXRlTGlzdEl0ZW0odG90YWxXZWlnaHQpO1xuICAgIH07XG4gICAgdGhpcy53aW5kb3cuYWRkQ2F0ZWdvcnlHcm91cCA9IGZ1bmN0aW9uIGFkZENhdGVnb3J5R3JvdXAobGlzdElkLGNhdGVnb3J5KXtcbiAgICAgICAgY29uc29sZS5sb2coJ2lkIGluIGFkZCBjYXQ6ICcrbGlzdElkKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2NhdCBpbiBhZGQgY2F0OiAnK2NhdGVnb3J5KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Qm9vbGVhbkRhdGEoY29sdW1uTmFtZSkge1xuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICBkYXRhW1wiaW5fb3VuY2VzXCJdID0gZmFsc2U7XG4gICAgICAgIGRhdGFbXCJpbl9sYnNcIl0gPSBmYWxzZTtcbiAgICAgICAgZGF0YVtcImluX2dyYW1zXCJdID0gZmFsc2U7XG4gICAgICAgIGRhdGFbXCJpbl9raWxvc1wiXSA9IGZhbHNlO1xuICAgICAgICBzd2l0Y2ggKGNvbHVtbk5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJpbl9vdW5jZXNcIjpcbiAgICAgICAgICAgICAgICBkYXRhW1wiaW5fb3VuY2VzXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJpbl9sYnNcIjpcbiAgICAgICAgICAgICAgICBkYXRhW1wiaW5fbGJzXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJpbl9ncmFtc1wiOlxuICAgICAgICAgICAgICAgIGRhdGFbXCJpbl9ncmFtc1wiXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaW5fa2lsb3NcIjpcbiAgICAgICAgICAgICAgICBkYXRhW1wiaW5fa2lsb3NcIl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgdGhpcy53aW5kb3cudXBkYXRlTGlzdEl0ZW0gPSBmdW5jdGlvbiB1cGRhdGVMaXN0SXRlbShlbGVtZW50KSB7XG4gICAgICAgIGxldCBjb2x1bW5OYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIpO1xuICAgICAgICBsZXQgdmFsdWUgPSBlbGVtZW50LnZhbHVlO1xuICAgICAgICBsZXQgaWQgPSBlbGVtZW50LmlkO1xuICAgICAgICBsZXQgaWRBcnIgPSBpZC5zcGxpdChcIi1cIik7XG4gICAgICAgIGxldCBhcnJMZW5ndGggPSBpZEFyci5sZW5ndGg7XG4gICAgICAgIGxldCByb3cgPSBpZEFyclthcnJMZW5ndGggLSAxXTtcbiAgICAgICAgbGV0IGl0ZW1JZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWQtXCIgKyByb3cpO1xuICAgICAgICBsZXQgaXRlbUlkVmFsdWUgPSBpdGVtSWQudmFsdWU7XG4gICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RJZFwiKS52YWx1ZTtcbiAgICAgICAgbGV0IHVybCA9IFwiL2xpc3QtaXRlbS9cIiArIGl0ZW1JZFZhbHVlO1xuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICBsZXQgdXNlcklkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VySWRcIikudmFsdWU7XG5cbiAgICAgICAgZGF0YVtjb2x1bW5OYW1lXSA9IHZhbHVlO1xuXG4gICAgICAgIGlmIChjb2x1bW5OYW1lLnN1YnN0cmluZygwLCAzKSA9PT0gXCJpbl9cIikge1xuICAgICAgICAgICAgZGF0YSA9IGdldEJvb2xlYW5EYXRhKGNvbHVtbk5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtcImxpc3RfaWRcIl0gPSBsaXN0SWQ7XG4gICAgICAgIGRhdGFbXCJ1c2VyX2lkXCJdID0gdXNlcklkO1xuICAgICAgICBkYXRhW1wiaWRcIl0gPSBpdGVtSWRWYWx1ZTtcblxuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QodXJsLCBkYXRhLCBpdGVtSWQpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7fSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJGYWlsZWQgdG8gdXBkYXRlIGxpc3QgaXRlbS4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdXBkYXRlVG90YWxMaXN0V2VpZ2h0cygpO1xuICAgIH07XG4gICAgZnVuY3Rpb24gdXBkYXRlVG90YWxMaXN0V2VpZ2h0cygpIHtcbiAgICAgICAgbGV0IHdlaWdodHNGb3JQVyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yLXRvdGFsLWxpc3Qtd2VpZ2h0XCIpO1xuICAgICAgICBsZXQgYmFzZVdlaWdodCA9IDA7XG4gICAgICAgIGxldCB0b3RhbFBhY2tXZWlnaHQgPSAwO1xuICAgICAgICBsZXQgbWF4UGFja1dlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWF4UGFja1dlaWdodFwiKS52YWx1ZTtcbiAgICAgICAgbGV0IGNsYXNzV2FybmluZ1ZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsYXNzV2FybmluZ1ZhbHVlJykudmFsdWU7XG4gICAgICAgIGxldCB1b21UZXh0ID0gXCJMQlNcIjtcbiAgICAgICAgd2VpZ2h0c0ZvclBXLmZvckVhY2goZnVuY3Rpb24gKHdlaWdodEZvclBXKSB7XG4gICAgICAgICAgICBsZXQgaWQgPSB3ZWlnaHRGb3JQVy5pZDtcbiAgICAgICAgICAgIGxldCBpZEFyciA9IGlkLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgICAgIGxldCBhcnJMZW5ndGggPSBpZEFyci5sZW5ndGg7XG4gICAgICAgICAgICBsZXQgcm93ID0gaWRBcnJbYXJyTGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBsZXQgcGFja2VkQW1vdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgICAgICAgXCJwYWNrZWRBbW91bnQtXCIgKyByb3dcbiAgICAgICAgICAgICkudmFsdWU7XG4gICAgICAgICAgICBsZXQgY29udmVydGVyID0gMTtcbiAgICAgICAgICAgIGxldCByb3dXZWlnaHQgPSAwO1xuICAgICAgICAgICAgbGV0IGl0ZW1XZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1XZWlnaHQtXCIgKyByb3cpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IHVvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW9tXCIpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGl0ZW1DYXRlZ29yeUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgICAgICBcIml0ZW1DYXRlZ29yeS1cIiArIHJvd1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbGV0IGl0ZW1DYXRlZ29yeSA9IFwiXCI7XG4gICAgICAgICAgICBpZiAoaXRlbUNhdGVnb3J5RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGl0ZW1DYXRlZ29yeSA9IGl0ZW1DYXRlZ29yeUVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpdGVtQ2F0ZWdvcnkgPT09IHVuZGVmaW5lZCB8fCBpdGVtQ2F0ZWdvcnkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpdGVtQ2F0ZWdvcnkgPSBcIlwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodW9tID09PSBcInVzXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b20tb3otXCIgKyByb3cpLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udmVydGVyID0gb3VuY2VDb252ZXJ0ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1b21UZXh0ID0gXCJLR1wiO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1b20tZ3JhbS1cIiArIHJvdykuY2hlY2tlZCA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBjb252ZXJ0ZXIgPSBncmFtQ29udmVydGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcm93V2VpZ2h0ID0gK3BhY2tlZEFtb3VudCAqICgraXRlbVdlaWdodCAvIGNvbnZlcnRlcik7XG4gICAgICAgICAgICB0b3RhbFBhY2tXZWlnaHQgPSB0b3RhbFBhY2tXZWlnaHQgKyByb3dXZWlnaHQ7XG5cbiAgICAgICAgICAgIGlmIChpdGVtQ2F0ZWdvcnkgIT09IFwiY29uc3VtYWJsZXNcIikge1xuICAgICAgICAgICAgICAgIGJhc2VXZWlnaHQgPSBiYXNlV2VpZ2h0ICsgcm93V2VpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoK2Jhc2VXZWlnaHQgPiArbWF4UGFja1dlaWdodCkge1xuICAgICAgICAgICAgbGV0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlaWdodFdhcm5pbmctZGl2XCIpO1xuICAgICAgICAgICAgZGl2RWxlbWVudC5pbm5lclRleHQgPVwiQmFzZSB3ZWlnaHQgKFwiICsgIGJhc2VXZWlnaHQudG9GaXhlZCgyKSArXCIgXCIgK3VvbVRleHQgK1wiKSBleGNlZWRlcyB0aGUgd2VpZ2h0IGZvciB0aGUgJ1wiICtjbGFzc1dhcm5pbmdWYWx1ZStcIicgc3R5bGUgb2YgaGlraW5nLlwiO1xuXG4gICAgICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlaWdodFdhcm5pbmctZGl2XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2VXZWlnaHRcIikudmFsdWUgPSBiYXNlV2VpZ2h0LnRvRml4ZWQoMik7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG90YWxQYWNrV2VpZ2h0XCIpLnZhbHVlID1cbiAgICAgICAgICAgIHRvdGFsUGFja1dlaWdodC50b0ZpeGVkKDIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVMaXN0SXRlbUlucHV0KFxuICAgICAgICB0eXBlLFxuICAgICAgICBuYW1lQmFzZSxcbiAgICAgICAgcm93LFxuICAgICAgICBjb2x1bW5OYW1lLFxuICAgICAgICBsaXN0SXRlbXMgPSB0cnVlXG4gICAgKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBlbGVtZW50LnR5cGUgPSB0eXBlO1xuICAgICAgICBlbGVtZW50Lm5hbWUgPSBuYW1lQmFzZSArIFwiW11cIjtcbiAgICAgICAgZWxlbWVudC5pZCA9IG5hbWVCYXNlICsgXCItXCIgKyByb3c7XG4gICAgICAgIGVsZW1lbnQudmFsdWUgPSBcIlwiO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uLW5hbWVcIiwgY29sdW1uTmFtZSk7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB1cGRhdGVMaXN0SXRlbShlbGVtZW50KTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Q2F0ZWdyb3lTZWxlY3Qocm93LCBncm91cENhdGVnb3J5ID0gbnVsbCkge1xuICAgIGNvbnNvbGUubG9nKCdncm91cCBjYXQgaW4gZ2V0IHNlbGVjdDogJysgZ3JvdXBDYXRlZ29yeSlcbiAgICAgICAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgIHNlbGVjdC5pZCA9IFwiSXRlbUNhdGVnb3J5LVwiICsgcm93O1xuICAgICAgICBzZWxlY3QubmFtZSA9IFwiaXRlbUNhdGVnb3J5LVwiICsgcm93O1xuICAgICAgICBzZWxlY3Quc2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4tbmFtZVwiLCBcIml0ZW1fY2F0ZWdvcnlcIik7XG4gICAgICAgIHNlbGVjdC5jbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiO1xuXG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgICBvcHRpb24udGV4dCA9IFwiQ2hvb3NlXCI7XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICBsZXQgb3B0aW9uTGlzdDtcblxuICAgICAgICBvcHRpb25MaXN0ID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcIi9saXN0LWl0ZW0tY2F0ZWdvcmllc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIGVycm9yXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFRvIHVzZSB0aGUgZnVuY3Rpb24gYW5kIGhhbmRsZSB0aGUgcmVzcG9uc2UgZGF0YVxuICAgICAgICBvcHRpb25MaXN0KCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgLy8gRG8gc29tZXRoaW5nIHdpdGggdGhlIHJlc3BvbnNlIGRhdGFcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGRhdGFbaV0udmFsdWU7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSBkYXRhW2ldLmNhdGVnb3J5O1xuICAgICAgICAgICAgICAgIGlmIChncm91cENhdGVnb3J5ICE9IG51bGwgJiYgZGF0YVtpXS52YWx1ZSA9PT0gZ3JvdXBDYXRlZ29yeSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdXBkYXRlTGlzdEl0ZW0oc2VsZWN0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNlbGVjdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gbWV0cmljUmFkaW9Ub1VzKCkge1xuICAgICAgICBsZXQgaW5wdXRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWV0cmljLXJhZGlvXCIpO1xuICAgICAgICBpbnB1dEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGlucHV0RWxlbWVudCkge1xuICAgICAgICAgICAgbGV0IGlkQXJyID0gaW5wdXRFbGVtZW50LmlkLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgICAgIGxldCB1b20gPSBpZEFyclsxXTtcbiAgICAgICAgICAgIGxldCByb3cgPSBpZEFycltpZEFyci5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50VHlwZSA9IGlucHV0RWxlbWVudC50eXBlO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRUYWcgPSBpbnB1dEVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICBsZXQgbmV3RWxlbWVudDtcblxuICAgICAgICAgICAgaWYgKGVsZW1lbnRUeXBlID09PSBcInJhZGlvXCIgJiYgdW9tID09PSBcImdyYW1cIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVSYWRpbyhcImluX291bmNlc1wiLCBcIk9aXCIsIFwib3pcIiwgcm93LCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFR5cGUgPT09IFwicmFkaW9cIiAmJiB1b20gPT09IFwia2dcIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVSYWRpbyhcImluX2xic1wiLCBcIkxCU1wiLCBcImxic1wiLCByb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VGFnID09PSBcImxhYmVsXCIgJiYgdW9tID09PSBcImdyYW1cIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVMYWJlbChcIk9aXCIsIFwidW9tLW96LVwiICsgcm93LCBcIm96XCIsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUYWcgPT09IFwibGFiZWxcIiAmJiB1b20gPT09IFwia2dcIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVMYWJlbChcIkxCU1wiLCBcInVvbS1sYnMtXCIgKyByb3csIFwibGJzXCIsIHJvdyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuZXdFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKFxuICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdXNSYWRpb1RvTWV0cmljKCkge1xuICAgICAgICBsZXQgaW5wdXRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudXMtcmFkaW9cIik7XG4gICAgICAgIGlucHV0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXRFbGVtZW50KSB7XG4gICAgICAgICAgICBsZXQgaWRBcnIgPSBpbnB1dEVsZW1lbnQuaWQuc3BsaXQoXCItXCIpO1xuICAgICAgICAgICAgbGV0IHVvbSA9IGlkQXJyWzFdO1xuICAgICAgICAgICAgbGV0IHJvdyA9IGlkQXJyW2lkQXJyLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRUeXBlID0gaW5wdXRFbGVtZW50LnR5cGU7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFRhZyA9IGlucHV0RWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBsZXQgbmV3RWxlbWVudDtcblxuICAgICAgICAgICAgaWYgKGVsZW1lbnRUeXBlID09PSBcInJhZGlvXCIgJiYgdW9tID09PSBcIm96XCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlUmFkaW8oXCJpbl9ncmFtc1wiLCBcIkdSXCIsIFwiZ3JhbVwiLCByb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VHlwZSA9PT0gXCJyYWRpb1wiICYmIHVvbSA9PT0gXCJsYnNcIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVSYWRpbyhcImluX2tpbG9zXCIsIFwiS0dcIiwgXCJrZ1wiLCByb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VGFnID09PSBcImxhYmVsXCIgJiYgdW9tID09PSBcIm96XCIpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlTGFiZWwoXCJHXCIsIFwidW9tLWdyYW0tXCIgKyByb3csIFwiZ3JhbVwiLCByb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VGFnID09PSBcImxhYmVsXCIgJiYgdW9tID09PSBcImxic1wiKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZUxhYmVsKFwiS0dcIiwgXCJ1b20ta2ctXCIgKyByb3csIFwia2dcIiwgcm93KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5ld0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQoXG4gICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVSYWRpbyhkYXRhQ29sdW1uTmFtZSwgbGFiZWwsIHVvbSwgcm93KSB7XG4gICAgICAgIGxldCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgcmFkaW8uY2xhc3NOYW1lID1cbiAgICAgICAgICAgIFwiZm9ybS1jaGVjay1pbnB1dFwiICtcbiAgICAgICAgICAgICh1b20gPT09IFwiZ3JhbVwiIHx8IHVvbSA9PT0gXCJrZ1wiID8gXCIgbWV0cmljLXJhZGlvXCIgOiBcIiB1cy1yYWRpb1wiKTtcbiAgICAgICAgcmFkaW8udHlwZSA9IFwicmFkaW9cIjtcbiAgICAgICAgcmFkaW8ubmFtZSA9IFwidW9tLVwiICsgcm93ICsgXCJbXVwiO1xuICAgICAgICByYWRpby5pZCA9IFwidW9tLVwiICsgdW9tICsgXCItXCIgKyByb3c7XG4gICAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uLW5hbWVcIiwgZGF0YUNvbHVtbk5hbWUpO1xuXG4gICAgICAgIGlmICh1b20gPT09IFwiZ3JhbVwiIHx8IHVvbSA9PT0gXCJvelwiKSB7XG4gICAgICAgICAgICByYWRpby5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnZlcnRNZWFzdXJlbWVudChyb3cpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJhZGlvO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVMYWJlbChpbm5lckh0bWwsIGh0bWxGb3IsIHVvbSwgcm93LCBsaW5lTGFiZWwgPSBmYWxzZSkge1xuICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxhYmVsLmNsYXNzTmFtZSA9XG4gICAgICAgICAgICBcImZvcm0tY2hlY2stbGFiZWxcIiArXG4gICAgICAgICAgICAodW9tID09PSBcImdyYW1cIiB8fCB1b20gPT09IFwia2dcIiA/IFwiIG1ldHJpYy1yYWRpb1wiIDogXCIgdXMtcmFkaW9cIik7XG4gICAgICAgIGxhYmVsLmh0bWxGb3IgPSBodG1sRm9yO1xuICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSBpbm5lckh0bWw7XG4gICAgICAgIGlmICghbGluZUxhYmVsKSB7XG4gICAgICAgICAgICBsYWJlbC5pZCA9IFwidW9tLVwiICsgdW9tICsgXCItbGFiZWwtXCIgKyByb3c7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYWJlbC5pZCA9IFwibGluZS11b20tbGFiZWwtXCIgKyByb3c7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgfVxuXG4gICAgdGhpcy53aW5kb3cudXBkYXRlTGlzdCA9IGZ1bmN0aW9uIHVwZGF0ZUxpc3QoZWxlbWVudCwgbGlzdElkKSB7XG4gICAgICAgIGxldCBjb2x1bW5OYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1uYW1lXCIpO1xuICAgICAgICBsZXQgdmFsdWUgPSBlbGVtZW50LnZhbHVlO1xuICAgICAgICBsZXQgdXJsID0gXCIvZ2Vhci1saXN0L1wiICsgbGlzdElkO1xuXG4gICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgIGRhdGFbY29sdW1uTmFtZV0gPSB2YWx1ZTtcblxuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QodXJsLCBkYXRhLCBsaXN0SWQpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gYWxlcnQocmVzLmRhdGEubXNnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiRmFpbGVkIHRvIHVwZGF0ZSBsaXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBpZiAoY29sdW1uTmFtZSA9PT0gXCJzb3J0XCIgfHwgY29sdW1uTmFtZSA9PT0gXCJsaXN0X2NsYXNzXCIgfHwgY29sdW1uTmFtZSA9PT0gJ2xpc3RfaXRlbXMnKSB7XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoZWFkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtLWNvbGxhcHNpYmxlLWhlYWRlclwiKTtcblxuICAgIGhlYWRlcnMuZm9yRWFjaCgoaGVhZGVyKSA9PiB7XG4gICAgICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGhlYWRlci5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICBjb25zdCBhcnJvdyA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKFwiLml0ZW0tYXJyb3dcIik7XG4gICAgICAgICAgICBpZiAoY29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJvcGVuXCIpKSB7XG4gICAgICAgICAgICAgICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IG51bGw7XG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5wYWRkaW5nID0gXCIwIDEwcHhcIjtcbiAgICAgICAgICAgICAgICBhcnJvdy5pbm5lckhUTUwgPSBcIiYjOTY2MFwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5wYWRkaW5nID0gXCIxMHB4XCI7XG4gICAgICAgICAgICAgICAgYXJyb3cuaW5uZXJIVE1MID0gXCImIzk2NTBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBsZXQgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNtYXN0ZXItaXRlbS10YWJsZSBpbnB1dFwiKTtcbiAgICBsZXQgc2VsZWN0SW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlbGVjdFwiKTtcblxuICAgIGlucHV0cy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICBpbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSk7XG4gICAgLy8gc2VsZWN0SW5wdXRzLmZvckVhY2goZnVuY3Rpb24oc2VsZWN0SW5wdXQpIHtcbiAgICAvLyAgICAgc2VsZWN0SW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIC8vIH0pO1xuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hHZWFyQnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgIGxldCBzZWFyY2hNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0U2VhcmNoTW9kYWwnKTtcbiAgICAvLyAgICAgc2VhcmNoTW9kYWwuc2hvdygpO1xuICAgIC8vIH0pO1xuXG4gICAgLy9saXN0Q2hhcnRCdG5cbiAgICBkb2N1bWVudCAuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0Q2hhcnRCdG5cIikgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgbGlzdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0SWRcIikudmFsdWU7XG4gICAgICAgICAgICBsZXQgdXJsID0gXCIvZ2Vhci1saXN0LWFuYWx5dGljcy9cIiArIGxpc3RJZDtcblxuICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAuZ2V0KHVybClcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGFydFN0YXR1cyA9IENoYXJ0LmdldENoYXJ0KFwiZ2VhckNoYXJ0XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFydFN0YXR1cyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0U3RhdHVzLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2VhckNoYXJ0XCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2hhcnREYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YS5jaGFydERhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkb3VnaG51dFwiLCAvLyBDaGFydCB0eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiBjaGFydERhdGEubGFiZWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxhYmVsOiBsaXN0TmFtZSArICdCcmVhayBEb3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGNoYXJ0RGF0YS53ZWlnaHRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjaGFydERhdGEuY29sb3JzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Zlck9mZnNldDogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXRvdXQ6IDQ1LCAvLyBBZGp1c3QgdGhlIGN1dG91dCBwZXJjZW50YWdlIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM6IDE1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFsYWJlbHM6IGZhbHNlLCAvLyBSZW1vdmluZyB0aGlzIGxpbmUgc2hvd3MgdGhlIGRhdGFsYWJlbHMgYWdhaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlUm90YXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlU2NhbGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBiYXNlV2VpZ2h0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFzZVdlaWdodFwiKS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvdGFsUGFja1dlaWdodCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdGFsUGFja1dlaWdodFwiKS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbEJhc2VXZWlnaHRcIikudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVdlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbFRvdGFsV2VpZ2h0XCIpLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsUGFja1dlaWdodDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNvcnRhYmxlXCIpLmZvckVhY2goZnVuY3Rpb24gKHRhYmxlKSB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5SWQgPSB0YWJsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNhdGVnb3J5LWlkXCIpO1xuXG4gICAgICAgIG5ldyBTb3J0YWJsZSh0YWJsZS5xdWVyeVNlbGVjdG9yKFwidGJvZHlcIiksIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogMTUwLFxuICAgICAgICAgICAgb25FbmQ6IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIG5ldyBvcmRlciBvZiBpdGVtc1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yZGVyZWRJZHMgPSBbXTtcbiAgICAgICAgICAgICAgICB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwidHJcIikuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICAgICAgICAgIG9yZGVyZWRJZHMucHVzaChyb3cuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBTZW5kIHRoZSBuZXcgb3JkZXIgdG8gdGhlIHNlcnZlciB2aWEgQUpBWFxuICAgICAgICAgICAgICAgIHVwZGF0ZUl0ZW1PcmRlcihjYXRlZ29yeUlkLCBvcmRlcmVkSWRzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIHVwZGF0ZUl0ZW1PcmRlcihjYXRlZ29yeUlkLCBvcmRlcmVkSWRzKSB7XG5cbiAgICAgICAgbGV0IGxpc3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdElkXCIpLnZhbHVlO1xuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBcIlgtQ1NSRi1UT0tFTlwiOiBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJylcbiAgICAgICAgICAgICAgICAuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKSxcbiAgICAgICAgICAgIGNhdGVnb3J5X2lkOiBjYXRlZ29yeUlkLFxuICAgICAgICAgICAgb3JkZXJlZF9pZHM6IG9yZGVyZWRJZHMsXG4gICAgICAgICAgICBsaXN0X2lkOiBsaXN0SWQsXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHVybCA9IFwiL3VwZGF0ZS1saXN0LW9yZGVyXCI7XG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdCh1cmwsIGRhdGEpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cyAhPSBcIjFcIikge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChyZXMuZGF0YS5tc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBsZXQgc29ydGluZ1NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydEJ5XCIpO1xuICAgICAgICBsZXQgb3B0cyA9IHNvcnRpbmdTZWxlY3Qub3B0aW9ucy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0czsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc29ydGluZ1NlbGVjdC5vcHRpb25zW2ldLnZhbHVlID09IFwiZHJhZ19kcm9wXCIpIHtcbiAgICAgICAgICAgICAgICBzb3J0aW5nU2VsZWN0Lm9wdGlvbnNbaV0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHBhcmVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJlbnQtY29udGFpbmVyJyk7XG5cbiAgICBpZihwYXJlbnRDb250YWluZXIgIT09IG51bGwgJiYgcGFyZW50Q29udGFpbmVyICE9PSB1bmRlZmluZWQpe1xuICAgICAgICBTb3J0YWJsZS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcmVudC1jb250YWluZXInKSwge1xuICAgICAgICAgICAgYW5pbWF0aW9uOiAxNTAsXG4gICAgICAgICAgICBoYW5kbGU6ICcuaXRlbS1jb2xsYXBzaWJsZS1oZWFkZXInLFxuICAgICAgICAgICAgZ2hvc3RDbGFzczogJ3NvcnRhYmxlLWdob3N0JyxcbiAgICAgICAgICAgIG9uRW5kOiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAgICAgLy8gQWZ0ZXIgc29ydGluZyBpcyBjb21wbGV0ZWQsIHVwZGF0ZSB0aGUgcG9zaXRpb25zIGluIHRoZSBkYXRhYmFzZVxuICAgICAgICAgICAgICAgIHVwZGF0ZUNhdGVnb3J5T3JkZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNhdGVnb3J5T3JkZXIoKSB7XG5cbiAgICAgICAgY29uc3QgbmV3T3JkZXIgPSBbXTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyYWdnYWJsZS1jb250YWluZXInKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuXG4gICAgICAgICAgICBuZXdPcmRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICBpdGVtX2NhdGVnb3J5OiBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1jYXRlZ29yeS12YWx1ZScpLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5X29yZGVyOiBpbmRleFxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdXJsID0gXCIvdXBkYXRlLWNhdGVyb2dyeS1vcmRlclwiO1xuICAgICAgICBsZXQgbGlzdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0SWRcIikudmFsdWU7XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIFwiWC1DU1JGLVRPS0VOXCI6IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKVxuICAgICAgICAgICAgICAgIC5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpLFxuICAgICAgICAgICAgY2F0ZWdvcnlfb3JkZXI6IG5ld09yZGVyLFxuICAgICAgICAgICAgbGlzdF9pZDogbGlzdElkLFxuICAgICAgICB9O1xuICAgICAgICAvL2JyZWFrIG91dCBwb3N0cyBhbmQgZ2V0IGNhbGxzIHRvIG93biBmdW5jdGlvbnNcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC5wb3N0KHVybCwgZGF0YSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgIT0gXCIxXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQocmVzLmRhdGEubXNnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG59KTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG53aW5kb3cuYXhpb3MgPSBheGlvcztcblxud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJNb2RhbCIsIkNoYXJ0IiwiU29ydGFibGUiLCJib290c3RyYXAiLCJyZXF1aXJlIiwiZ3JhbUNvbnZlcnRlciIsIm91bmNlQ29udmVydGVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3dQYXNzd29yZCIsImlkIiwicGFzc3dvcmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkTGlzdEl0ZW0iLCJjYXRlZ29yeWNvdW50ZXIiLCJ1bmRlZmluZWQiLCJncm91cENhdGVnb3J5IiwibnVtYmVyT2ZJdGVtc1RvQWRkIiwibGluZXNUb0FkZCIsIl9sb29wIiwibGlzdFVPTSIsImZpbmFsSUVsZW1lbnQiLCJsaXN0QnlJdGVtcyIsImNvbnNvbGUiLCJsb2ciLCJpdGVtVGFibGUiLCJ0YWJsZUNhdGVnb3J5IiwidXNlcklkIiwibGlzdElkIiwiZmluYWxJIiwicm93IiwiY3JlYXRlRWxlbWVudCIsImNlbGwwIiwic2NvcGUiLCJpbm5lckhUTUwiLCJjZWxsMSIsImNvdW50ZXIiLCJzZXRBdHRyaWJ1dGUiLCJpdGVtTmFtZSIsImNyZWF0ZUxpc3RJdGVtSW5wdXQiLCJwbGFjZWhvbGRlciIsImNsYXNzTGlzdCIsImFkZCIsImNlbGw2IiwiZGVsZXRlQnRuIiwiY2xhc3NOYW1lIiwiZGF0YSIsInVybCIsImdldEJvb2xlYW5EYXRhIiwidXBkYXRlSXRlbSIsIl9yZWYiLCJfY2FsbGVlIiwicmVzcG9uc2UiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiYXhpb3MiLCJwb3N0IiwidDAiLCJuZXdJZCIsImNlbGwyIiwiaXRlbVdlaWdodCIsImNlbGwzIiwibGluZVVvbUNlbGwiLCJyYWRpbzEiLCJyYWRpbzIiLCJyYWRpb0xhYmVsMSIsInJhZGlvTGFiZWwyIiwicmFkaW9MYWJlbDMiLCJjcmVhdGVSYWRpbyIsImNyZWF0ZUxhYmVsIiwiY2VsbDQiLCJwYWNrZWRBbW91bnQiLCJjZWxsNSIsInRvdGFsTGluZVdlaWdodCIsInN2Z05hbWVzcGFjZSIsImljb25DZWxsIiwiaWNvbiIsImNyZWF0ZUVsZW1lbnROUyIsInBhdGgiLCJhcHBlbmRDaGlsZCIsInNlbGVjdENlbGwiLCJjYXRlZ29yeVNlbGVjdCIsImdldENhdGVncm95U2VsZWN0IiwiYXBwZW5kIiwiYWRkRXZlbnRMaXN0ZW5lcldlaWdodENhbGMiLCJ1cGRhdGVVT00iLCJ1c1JhZGlvVG9NZXRyaWMiLCJtZXRyaWNSYWRpb1RvVXMiLCJuZWVkZWRGb3JXZWlnaHRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm5lZWRlZEZvcldlaWdodCIsImdldExpbmVUb3RhbFdlaWdodCIsImNvbnZlcnQiLCJ3ZWlnaHQiLCJ1b20iLCJsaW5lVG90YWxXZWlnaHRFbGVtZW50IiwibGluZVRvdGFsIiwidG9GaXhlZCIsInJlcGxhY2UiLCJ1cGRhdGVMaXN0SXRlbSIsImNvbnZlcnRNZWFzdXJlbWVudCIsInRvdGFsV2VpZ2h0IiwidG90YWxMaW5lV2VpZ2h0VmFsdWUiLCJ3ZWlnaHRWYWx1ZSIsInNtYWxsIiwibGFyZ2UiLCJlbGVtZW50IiwibGFiZWwiLCJsYWJlbEhUTUwiLCJjaGVja2VkIiwiYWRkQ2F0ZWdvcnlHcm91cCIsImNhdGVnb3J5IiwiY29sdW1uTmFtZSIsImdldEF0dHJpYnV0ZSIsImlkQXJyIiwic3BsaXQiLCJhcnJMZW5ndGgiLCJpdGVtSWQiLCJpdGVtSWRWYWx1ZSIsInN1YnN0cmluZyIsInJlcyIsImVyciIsImFsZXJ0IiwiZXJyb3IiLCJ1cGRhdGVUb3RhbExpc3RXZWlnaHRzIiwid2VpZ2h0c0ZvclBXIiwiYmFzZVdlaWdodCIsInRvdGFsUGFja1dlaWdodCIsIm1heFBhY2tXZWlnaHQiLCJjbGFzc1dhcm5pbmdWYWx1ZSIsInVvbVRleHQiLCJ3ZWlnaHRGb3JQVyIsImNvbnZlcnRlciIsInJvd1dlaWdodCIsIml0ZW1DYXRlZ29yeUVsZW1lbnQiLCJpdGVtQ2F0ZWdvcnkiLCJkaXZFbGVtZW50IiwiaW5uZXJUZXh0Iiwic3R5bGUiLCJkaXNwbGF5IiwibmFtZUJhc2UiLCJsaXN0SXRlbXMiLCJzZWxlY3QiLCJvcHRpb24iLCJ0ZXh0Iiwib3B0aW9uTGlzdCIsIl9yZWYyIiwiX2NhbGxlZTIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJnZXQiLCJzZWxlY3RlZCIsImlucHV0RWxlbWVudHMiLCJpbnB1dEVsZW1lbnQiLCJlbGVtZW50VHlwZSIsImVsZW1lbnRUYWciLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJuZXdFbGVtZW50IiwicGFyZW50RWxlbWVudCIsInJlcGxhY2VDaGlsZCIsImRhdGFDb2x1bW5OYW1lIiwicmFkaW8iLCJpbm5lckh0bWwiLCJodG1sRm9yIiwibGluZUxhYmVsIiwidXBkYXRlTGlzdCIsImxvY2F0aW9uIiwicmVsb2FkIiwiaGVhZGVycyIsImhlYWRlciIsImNvbnRlbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJhcnJvdyIsInF1ZXJ5U2VsZWN0b3IiLCJjb250YWlucyIsInJlbW92ZSIsIm1heEhlaWdodCIsInBhZGRpbmciLCJzY3JvbGxIZWlnaHQiLCJpbnB1dHMiLCJzZWxlY3RJbnB1dHMiLCJpbnB1dCIsImRpc2FibGVkIiwiY2hhcnRTdGF0dXMiLCJnZXRDaGFydCIsImRlc3Ryb3kiLCJjdHgiLCJjaGFydERhdGEiLCJKU09OIiwicGFyc2UiLCJteUNoYXJ0IiwibGFiZWxzIiwiZGF0YXNldHMiLCJ3ZWlnaHRzIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JzIiwiYm9yZGVyV2lkdGgiLCJob3Zlck9mZnNldCIsIm9wdGlvbnMiLCJjdXRvdXQiLCJyYWRpdXMiLCJsZWdlbmQiLCJwbHVnaW5zIiwiZGF0YWxhYmVscyIsImFuaW1hdGlvbiIsImFuaW1hdGVSb3RhdGUiLCJhbmltYXRlU2NhbGUiLCJ0ZXh0Q29udGVudCIsInRhYmxlIiwiY2F0ZWdvcnlJZCIsIm9uRW5kIiwiZXZ0Iiwib3JkZXJlZElkcyIsInVwZGF0ZUl0ZW1PcmRlciIsImNhdGVnb3J5X2lkIiwib3JkZXJlZF9pZHMiLCJsaXN0X2lkIiwic3RhdHVzIiwibXNnIiwic29ydGluZ1NlbGVjdCIsIm9wdHMiLCJwYXJlbnRDb250YWluZXIiLCJnaG9zdENsYXNzIiwidXBkYXRlQ2F0ZWdvcnlPcmRlciIsIm5ld09yZGVyIiwiaXRlbSIsImluZGV4IiwiaXRlbV9jYXRlZ29yeSIsImNhdGVnb3J5X29yZGVyIiwiZGVmYXVsdHMiLCJjb21tb24iXSwic291cmNlUm9vdCI6IiJ9