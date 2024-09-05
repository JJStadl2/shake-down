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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

// import 'bootstrap/dist/css/bootstrap.min.css';   // Import Bootstrap CSS
 // Import Bootstrap JS
 // Import the Modal class

var gramConverter = 1000;
var ounceConverter = 16;
var axios = __webpack_require__(/*! axios */ "./node_modules/axios/dist/browser/axios.cjs");
var bootstrap = __webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");
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
    var numberOfItemsToAdd = document.getElementById('linesToAdd');
    var linesToAdd = 1;
    if (+numberOfItemsToAdd.value < 1) {
      numberOfItemsToAdd.value = linesToAdd;
    } else {
      linesToAdd = +numberOfItemsToAdd.value;
    }
    var _loop = function _loop() {
      var listUOM = document.getElementById('uom').value;
      var finalIElement = document.getElementById('final-i');
      var itemTable = document.getElementById('item-table-body');
      var userId = document.getElementById('userId').value;
      var listId = document.getElementById('listId').value;
      var finalI = finalIElement.value;
      finalIElement.value = +finalI + 1;
      var row = document.createElement("tr");

      // Create cells and input elements.
      var cell0 = document.createElement("th");
      cell0.scope = 'row';
      cell0.innerHTML = finalI;
      var cell1 = document.createElement("td");
      var counter = document.createElement("input");
      counter.type = "hidden";
      counter.name = "id[]";
      counter.id = 'id-' + finalI;
      counter.value = 'new-' + finalI;
      counter.setAttribute('data-column-name', 'id');
      var itemName = createListItemInput('text', 'itemName', finalI, 'item_name');
      itemName.placeholder = 'Item Name';
      itemName.classList.add('form-control');
      var cell6 = document.createElement('td');
      cell6.id = 'btn-td-' + finalI;
      var deleteBtn = document.createElement('a');
      deleteBtn.id = 'deleteBtn-' + finalI;
      deleteBtn.className = 'btn btn-primary btn-sm  py-2';
      deleteBtn.innerHTML = 'x';
      var data = {};
      var url = '/list-item';
      data['list_id'] = listId;
      data['user_id'] = userId;
      data['item_name'] = '';
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
        deleteBtn.setAttribute('href', '/destroy-list-item/' + data.newId);
      });
      var cell2 = document.createElement("td");
      var itemWeight = createListItemInput('number', 'itemWeight', finalI, 'item_weight');
      itemWeight.value = 0;
      itemWeight.classList.add('for-weight');
      itemWeight.classList.add('number-input');
      itemWeight.classList.add('form-control');
      cell2.classList.add('number-col');
      var cell3 = document.createElement("td");
      var radio1;
      var radio2;
      var radioLabel1;
      var radioLabel2;
      if (listUOM === 'us') {
        radio1 = createRadio('in_ounces', '', 'oz', finalI);
        radioLabel1 = createLabel('OZ', 'uom-oz-' + finalI, 'oz', finalI);
        radio2 = createRadio('in_lbs', '', 'lbs', finalI);
        radioLabel2 = createLabel('LBS', 'uom-lbs-' + finalI, 'lbs', finalI);
      } else {
        radio1 = createRadio('in_grams', '', 'gram', finalI);
        radioLabel1 = createLabel('Grams', 'uom-gram-' + finalI, 'gram', finalI);
        radio2 = createRadio('in_kilos', '', 'kg', finalI);
        radioLabel2 = createLabel('KG', 'uom-kg-' + finalI, 'kg', finalI);
      }
      var cell4 = document.createElement("td");
      cell4.classList.add('number-col');
      var packedAmount = createListItemInput('number', 'packedAmount', finalI, 'amount');
      packedAmount.value = 1;
      packedAmount.classList.add('for-weight');
      packedAmount.classList.add('number-input');
      packedAmount.classList.add('form-control');
      var cell5 = document.createElement("td");
      cell5.classList.add('number-col');
      var totalLineWeight = createListItemInput('number', 'totalLineWeight', finalI, 'total_line_weight');
      totalLineWeight.value = 0;
      totalLineWeight.setAttribute('data-column-name', 'total_line_weight');
      totalLineWeight.setAttribute('readonly', true);
      totalLineWeight.classList.add('number-input');
      totalLineWeight.classList.add('form-control');
      totalLineWeight.classList.add('for-total-list-weight');

      //append inputs to cells.
      cell1.appendChild(counter);
      cell1.appendChild(itemName);
      cell2.appendChild(itemWeight);
      var selectCell = document.createElement("td");
      var categorySelect = getCategroySelect(finalI);
      selectCell.append(categorySelect);
      cell3.appendChild(radio1);
      cell3.appendChild(radioLabel1);
      cell3.appendChild(radio2);
      cell3.appendChild(radioLabel2);
      cell4.appendChild(packedAmount);
      cell5.appendChild(totalLineWeight);
      cell6.appendChild(deleteBtn);

      // Append cells to the row.
      row.appendChild(cell0);
      row.appendChild(cell1);
      row.appendChild(selectCell);
      // row.appendChild(cell3);
      row.appendChild(cell2);
      row.appendChild(cell4);
      row.appendChild(cell5);
      row.appendChild(cell3);
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
    if (value !== 'us') {
      usRadioToMetric();
    } else {
      metricRadioToUs();
    }
  };
  function addEventListenerWeightCalc(row) {
    var neededForWeights = document.querySelectorAll('.for-weight');
    neededForWeights.forEach(function (neededForWeight) {
      neededForWeight.addEventListener('change', function () {
        getLineTotalWeight(row);
      });
    });
  }
  this.window.getLineTotalWeight = function getLineTotalWeight(row) {
    var convert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var weight = document.getElementById('itemWeight-' + row).value;
    var packedAmount = document.getElementById('packedAmount-' + row).value;
    var uom = document.getElementById('uom');
    var lineTotalWeightElement = document.getElementById('totalLineWeight-' + row);
    var lineTotal = 0;
    lineTotal = +weight * +packedAmount;
    lineTotal = lineTotal.toFixed(2).replace(/[.,]00$/, "");
    lineTotalWeightElement.value = lineTotal;
    updateListItem(lineTotalWeightElement);
  };
  this.window.convertMeasurement = function convertMeasurement(row) {
    var convert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var uom = document.getElementById('uom').value;
    var weight = document.getElementById('itemWeight-' + row);
    var packedAmount = document.getElementById('packedAmount-' + row).value;
    var totalWeight = document.getElementById('totalLineWeight-' + row);
    var totalLineWeightValue = 0;
    var weightValue = weight.value;
    var small;
    var large;
    var element;
    if (uom === 'us') {
      small = document.getElementById('uom-oz-' + row);
      large = document.getElementById('uom-lbs-' + row);
      if (small.checked === true) {
        weightValue = +weightValue * 16;
        element = small;
      } else {
        weightValue = +weightValue / 16;
        element = large;
      }
    } else {
      small = document.getElementById('uom-gram-' + row);
      large = document.getElementById('uom-kg-' + row);
      if (small.checked === true) {
        weightValue = +weightValue * 1000;
        element = small;
      } else {
        weightValue = +weightValue / 1000;
        element = large;
      }
    }
    totalLineWeightValue = +weightValue * +packedAmount;
    weight.value = weightValue.toFixed(2).replace(/[.,]00$/, "");
    totalWeight.value = totalLineWeightValue.toFixed(2).replace(/[.,]00$/, "");
    updateListItem(element);
    updateListItem(weight);
    updateListItem(totalWeight);
  };
  function getBooleanData(columnName) {
    var data = {};
    data['in_ounces'] = false;
    data['in_lbs'] = false;
    data['in_grams'] = false;
    data['in_kilos'] = false;
    switch (columnName) {
      case 'in_ounces':
        data['in_ounces'] = true;
        break;
      case 'in_lbs':
        data['in_lbs'] = true;
        break;
      case 'in_grams':
        data['in_grams'] = true;
        break;
      case 'in_kilos':
        data['in_kilos'] = true;
        break;
      default:
        break;
    }
    return data;
  }
  this.window.updateListItem = function updateListItem(element) {
    var columnName = element.getAttribute('data-column-name');
    var value = element.value;
    var id = element.id;
    var idArr = id.split('-');
    var arrLength = idArr.length;
    var row = idArr[arrLength - 1];
    var itemId = document.getElementById('id-' + row);
    var itemIdValue = itemId.value;
    var listId = document.getElementById('listId').value;
    var url = '/list-item/' + itemIdValue;
    var data = {};
    var userId = document.getElementById('userId').value;
    data[columnName] = value;
    if (columnName.substring(0, 3) === 'in_') {
      data = getBooleanData(columnName);
    }
    data['list_id'] = listId;
    data['user_id'] = userId;
    data['id'] = itemIdValue;
    axios.post(url, data, itemId).then(function (res) {})["catch"](function (err) {
      alert('Failed to update list item. Please try again later.');
      console.error(err);
    });
    updateTotalListWeights();
  };
  function updateTotalListWeights() {
    var weightsForPW = document.querySelectorAll('.for-total-list-weight');
    var baseWeight = 0;
    var totalPackWeight = 0;
    var maxPackWeight = document.getElementById('maxPackWeight').value;
    var uomText = 'LBS';
    weightsForPW.forEach(function (weightForPW) {
      var id = weightForPW.id;
      var idArr = id.split('-');
      var arrLength = idArr.length;
      var row = idArr[arrLength - 1];
      var packedAmount = document.getElementById('packedAmount-' + row).value;
      var converter = 1;
      var rowWeight = +weightForPW.value;
      var uom = document.getElementById('uom').value;
      var itemCategoryElement = document.getElementById('itemCategory-' + row);
      var itemCategory = '';
      if (itemCategoryElement) {
        itemCategory = itemCategoryElement.value;
      }
      if (itemCategory === undefined || itemCategory === null) {
        itemCategory = '';
      }
      if (uom === 'us') {
        if (document.getElementById('uom-oz-' + row).checked === true) {
          converter = ounceConverter;
        }
      } else {
        if (document.getElementById('uom-oz-' + row).checked === true) {
          converter = gramConverter;
          uomText = 'KG';
        }
      }
      totalPackWeight = totalPackWeight + +packedAmount * (+rowWeight / converter);
      if (itemCategory !== 'consumables') {
        baseWeight = baseWeight + +packedAmount * (+rowWeight / converter);
      }
    });
    if (+baseWeight > +maxPackWeight) {
      var divElement = document.getElementById('weightWarning-div');
      divElement.innerText = 'The base weight (' + baseWeight.toFixed(2) + ' ' + uomText + ') of the items on this list have exceeded the weight for the type/style of hike selected for this list.';
      divElement.style.display = 'block';
    } else {
      document.getElementById('weightWarning-div').style.display = 'none';
    }
    document.getElementById('baseWeight').value = baseWeight.toFixed(2);
    document.getElementById('totalPackWeight').value = totalPackWeight.toFixed(2);
  }
  function createListItemInput(type, nameBase, row, columnName) {
    var element = document.createElement("input");
    element.type = type;
    element.name = nameBase + "[]";
    element.id = nameBase + '-' + row;
    element.value = '';
    element.setAttribute('data-column-name', columnName);
    element.addEventListener('change', function () {
      updateListItem(element);
    });
    return element;
  }
  function getCategroySelect(row) {
    var select = document.createElement("select");
    select.id = 'ItemCategory-' + row;
    select.name = 'itemCategory-' + row;
    select.setAttribute('data-column-name', 'item_category');
    select.className = 'form-control';
    var option = document.createElement("option");
    option.value = '';
    option.text = 'Choose';
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
              return axios.get('/list-item-categories');
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
        select.appendChild(_option);
      }
    });
    select.addEventListener('change', function () {
      updateListItem(select);
    });
    return select;
  }
  function metricRadioToUs() {
    var inputElements = document.querySelectorAll('.metric-radio');
    inputElements.forEach(function (inputElement) {
      var idArr = inputElement.id.split('-');
      var uom = idArr[1];
      var row = idArr[idArr.length - 1];
      var elementType = inputElement.type;
      var elementTag = inputElement.tagName.toLowerCase();
      var newElement;
      if (elementType === 'radio' && uom === 'gram') {
        newElement = createRadio('in_ounces', 'OZ', 'oz', row, true);
      } else if (elementType === 'radio' && uom === 'kg') {
        newElement = createRadio('in_lbs', 'LBS', 'lbs', row);
      } else if (elementTag === 'label' && uom === 'gram') {
        newElement = createLabel('OZ', 'uom-oz-' + row, 'oz', row);
      } else if (elementTag === 'label' && uom === 'kg') {
        newElement = createLabel('LBS', 'uom-lbs-' + row, 'lbs', row);
      }
      if (newElement) {
        inputElement.parentElement.replaceChild(newElement, inputElement);
      }
    });
  }
  function usRadioToMetric() {
    var inputElements = document.querySelectorAll('.us-radio');
    inputElements.forEach(function (inputElement) {
      var idArr = inputElement.id.split('-');
      var uom = idArr[1];
      var row = idArr[idArr.length - 1];
      var elementType = inputElement.type;
      var elementTag = inputElement.tagName.toLowerCase();
      var newElement;
      if (elementType === 'radio' && uom === 'oz') {
        newElement = createRadio('in_grams', 'Grams', 'gram', row);
      } else if (elementType === 'radio' && uom === 'lbs') {
        newElement = createRadio('in_kilos', 'KG', 'kg', row);
      } else if (elementTag === 'label' && uom === 'oz') {
        newElement = createLabel('Grams', 'uom-gram-' + row, 'gram', row);
      } else if (elementTag === 'label' && uom === 'lbs') {
        newElement = createLabel('KG', 'uom-kg-' + row, 'kg', row);
      }
      if (newElement) {
        inputElement.parentElement.replaceChild(newElement, inputElement);
      }
    });
  }
  function createRadio(dataColumnName, label, uom, row) {
    var radio = document.createElement("input");
    radio.className = 'form-check-input' + (uom === 'gram' || uom === 'kg' ? ' metric-radio' : ' us-radio');
    radio.type = "radio";
    radio.name = "uom-" + row + "[]";
    radio.id = 'uom-' + uom + '-' + row;
    radio.setAttribute('data-column-name', dataColumnName);
    if (uom === 'gram' || uom === 'oz') {
      radio.checked = true;
    }
    radio.addEventListener('change', function () {
      convertMeasurement(row);
    });
    return radio;
  }
  function createLabel(innerHtml, htmlFor, uom, row) {
    var label = document.createElement("label");
    label.className = 'form-check-label' + (uom === 'gram' || uom === 'kg' ? ' metric-radio' : ' us-radio');
    label.htmlFor = htmlFor;
    label.innerHTML = innerHtml;
    label.id = 'uom-' + uom + '-label-' + row;
    return label;
  }
  this.window.updateList = function updateList(element, listId) {
    var columnName = element.getAttribute('data-column-name');
    var value = element.value;
    var url = '/gear-list/' + listId;
    var data = {};
    data[columnName] = value;
    axios.post(url, data, listId).then(function (res) {

      // alert(res.data.msg);
    })["catch"](function (err) {
      alert('Failed to update list. Please try again later.');
    });
    if (columnName === 'sort' || columnName === 'list_class') {
      location.reload();
    }
  };
  var headers = document.querySelectorAll('.form-collapsible-header');
  headers.forEach(function (header) {
    header.addEventListener('click', function () {
      var content = header.nextElementSibling;
      var arrow = header.querySelector('.form-arrow');
      if (content.classList.contains('open')) {
        content.classList.remove('open');
        content.style.maxHeight = null;
        content.style.padding = '0 10px';
        arrow.innerHTML = '&#9660';
      } else {
        content.classList.add('open');
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.padding = '10px';
        arrow.innerHTML = '&#9650';
      }
    });
  });
  var inputs = document.querySelectorAll('#master-item-table input');
  var selectInputs = document.querySelectorAll('select');
  inputs.forEach(function (input) {
    input.disabled = true;
  });
  // selectInputs.forEach(function(selectInput) {
  //     selectInput.disabled = true;
  // });
  document.getElementById('searchGearBtn').addEventListener('click', function () {
    var pageModal = document.getElementById('productSearchModal');
    var searchModal = new bootstrap.Modal(pageModal);
    searchModal.show();
  });
  document.getElementById('listChartBtn').addEventListener('click', function () {
    var listModal = document.getElementById('gearListChartModal');
    var listId = document.getElementById('listId').value;
    var url = '/gear-list-analytics/' + listId;
    axios.get(url).then(function (res) {
      document.getElementById('chartData').value = res.data.data;
      alert('test 1: ' + JSON.stringify(res.data.data));
      buildChart(JSON.stringify(res.data.data));
    });
  });
  function buildChart(chartData) {
    var ctx = document.getElementById('gearChart');
    // let chartData = JSON.stringify(document.getElementById('chartData').value);
    alert('stringif: ' + chartData);
    var listName = document.getElementById('listName').value;
    var myChart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, {
      type: 'doughnut',
      // Chart type
      data: {
        labels: chartData.labels,
        datasets: [{
          // label: listName + 'Break Down',
          data: chartData.data,
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
    var listModal = new bootstrap__WEBPACK_IMPORTED_MODULE_0__.Modal(document.getElementById('gearListChartModal'));
    // let listModal =  new bootstrap.Modal(modal);
    var baseWeight = document.getElementById('baseWeight').value;
    var totalPackWeight = document.getElementById('totalPackWeight').value;
    // document.getElementById('modalBaseWeight').innerText = baseWeight;
    document.getElementById('modalBaseWeight').innerHtml = 'baseWeight';
    document.getElementById('modalTotalWeight').innerHtml = 'totalPackWeight';
    // document.getElementById('modalTotalWeight').innerText = totalPackWeight;
    listModal.show();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2pzL2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OytDQUNBLHFKQUFBQSxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxDQUFBLFNBQUFDLENBQUEsRUFBQUQsQ0FBQSxPQUFBRSxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxDQUFBLEdBQUFILENBQUEsQ0FBQUksY0FBQSxFQUFBQyxDQUFBLEdBQUFKLE1BQUEsQ0FBQUssY0FBQSxjQUFBUCxDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxJQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxDQUFBTyxLQUFBLEtBQUFDLENBQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsUUFBQSxrQkFBQUMsQ0FBQSxHQUFBSixDQUFBLENBQUFLLGFBQUEsdUJBQUFDLENBQUEsR0FBQU4sQ0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBakIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUMsTUFBQSxDQUFBSyxjQUFBLENBQUFQLENBQUEsRUFBQUQsQ0FBQSxJQUFBUyxLQUFBLEVBQUFQLENBQUEsRUFBQWlCLFVBQUEsTUFBQUMsWUFBQSxNQUFBQyxRQUFBLFNBQUFwQixDQUFBLENBQUFELENBQUEsV0FBQWtCLE1BQUEsbUJBQUFqQixDQUFBLElBQUFpQixNQUFBLFlBQUFBLE9BQUFqQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxnQkFBQW9CLEtBQUFyQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLFFBQUFLLENBQUEsR0FBQVYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFNBQUEsWUFBQW1CLFNBQUEsR0FBQXZCLENBQUEsR0FBQXVCLFNBQUEsRUFBQVgsQ0FBQSxHQUFBVCxNQUFBLENBQUFxQixNQUFBLENBQUFkLENBQUEsQ0FBQU4sU0FBQSxHQUFBVSxDQUFBLE9BQUFXLE9BQUEsQ0FBQXBCLENBQUEsZ0JBQUFFLENBQUEsQ0FBQUssQ0FBQSxlQUFBSCxLQUFBLEVBQUFpQixnQkFBQSxDQUFBekIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFZLENBQUEsTUFBQUYsQ0FBQSxhQUFBZSxTQUFBMUIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsbUJBQUEwQixJQUFBLFlBQUFDLEdBQUEsRUFBQTVCLENBQUEsQ0FBQTZCLElBQUEsQ0FBQTlCLENBQUEsRUFBQUUsQ0FBQSxjQUFBRCxDQUFBLGFBQUEyQixJQUFBLFdBQUFDLEdBQUEsRUFBQTVCLENBQUEsUUFBQUQsQ0FBQSxDQUFBc0IsSUFBQSxHQUFBQSxJQUFBLE1BQUFTLENBQUEscUJBQUFDLENBQUEscUJBQUFDLENBQUEsZ0JBQUFDLENBQUEsZ0JBQUFDLENBQUEsZ0JBQUFaLFVBQUEsY0FBQWEsa0JBQUEsY0FBQUMsMkJBQUEsU0FBQUMsQ0FBQSxPQUFBcEIsTUFBQSxDQUFBb0IsQ0FBQSxFQUFBMUIsQ0FBQSxxQ0FBQTJCLENBQUEsR0FBQXBDLE1BQUEsQ0FBQXFDLGNBQUEsRUFBQUMsQ0FBQSxHQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUEsQ0FBQSxDQUFBRyxNQUFBLFFBQUFELENBQUEsSUFBQUEsQ0FBQSxLQUFBdkMsQ0FBQSxJQUFBRyxDQUFBLENBQUF5QixJQUFBLENBQUFXLENBQUEsRUFBQTdCLENBQUEsTUFBQTBCLENBQUEsR0FBQUcsQ0FBQSxPQUFBRSxDQUFBLEdBQUFOLDBCQUFBLENBQUFqQyxTQUFBLEdBQUFtQixTQUFBLENBQUFuQixTQUFBLEdBQUFELE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQWMsQ0FBQSxZQUFBTSxzQkFBQTNDLENBQUEsZ0NBQUE0QyxPQUFBLFdBQUE3QyxDQUFBLElBQUFrQixNQUFBLENBQUFqQixDQUFBLEVBQUFELENBQUEsWUFBQUMsQ0FBQSxnQkFBQTZDLE9BQUEsQ0FBQTlDLENBQUEsRUFBQUMsQ0FBQSxzQkFBQThDLGNBQUE5QyxDQUFBLEVBQUFELENBQUEsYUFBQWdELE9BQUE5QyxDQUFBLEVBQUFLLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsR0FBQWEsUUFBQSxDQUFBMUIsQ0FBQSxDQUFBQyxDQUFBLEdBQUFELENBQUEsRUFBQU0sQ0FBQSxtQkFBQU8sQ0FBQSxDQUFBYyxJQUFBLFFBQUFaLENBQUEsR0FBQUYsQ0FBQSxDQUFBZSxHQUFBLEVBQUFFLENBQUEsR0FBQWYsQ0FBQSxDQUFBUCxLQUFBLFNBQUFzQixDQUFBLGdCQUFBa0IsT0FBQSxDQUFBbEIsQ0FBQSxLQUFBMUIsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBQyxDQUFBLGVBQUEvQixDQUFBLENBQUFrRCxPQUFBLENBQUFuQixDQUFBLENBQUFvQixPQUFBLEVBQUFDLElBQUEsV0FBQW5ELENBQUEsSUFBQStDLE1BQUEsU0FBQS9DLENBQUEsRUFBQVMsQ0FBQSxFQUFBRSxDQUFBLGdCQUFBWCxDQUFBLElBQUErQyxNQUFBLFVBQUEvQyxDQUFBLEVBQUFTLENBQUEsRUFBQUUsQ0FBQSxRQUFBWixDQUFBLENBQUFrRCxPQUFBLENBQUFuQixDQUFBLEVBQUFxQixJQUFBLFdBQUFuRCxDQUFBLElBQUFlLENBQUEsQ0FBQVAsS0FBQSxHQUFBUixDQUFBLEVBQUFTLENBQUEsQ0FBQU0sQ0FBQSxnQkFBQWYsQ0FBQSxXQUFBK0MsTUFBQSxVQUFBL0MsQ0FBQSxFQUFBUyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxDQUFBRSxDQUFBLENBQUFlLEdBQUEsU0FBQTNCLENBQUEsRUFBQUssQ0FBQSxvQkFBQUUsS0FBQSxXQUFBQSxNQUFBUixDQUFBLEVBQUFJLENBQUEsYUFBQWdELDJCQUFBLGVBQUFyRCxDQUFBLFdBQUFBLENBQUEsRUFBQUUsQ0FBQSxJQUFBOEMsTUFBQSxDQUFBL0MsQ0FBQSxFQUFBSSxDQUFBLEVBQUFMLENBQUEsRUFBQUUsQ0FBQSxnQkFBQUEsQ0FBQSxHQUFBQSxDQUFBLEdBQUFBLENBQUEsQ0FBQWtELElBQUEsQ0FBQUMsMEJBQUEsRUFBQUEsMEJBQUEsSUFBQUEsMEJBQUEscUJBQUEzQixpQkFBQTFCLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLFFBQUFFLENBQUEsR0FBQXdCLENBQUEsbUJBQUFyQixDQUFBLEVBQUFFLENBQUEsUUFBQUwsQ0FBQSxLQUFBMEIsQ0FBQSxRQUFBcUIsS0FBQSxzQ0FBQS9DLENBQUEsS0FBQTJCLENBQUEsb0JBQUF4QixDQUFBLFFBQUFFLENBQUEsV0FBQUgsS0FBQSxFQUFBUixDQUFBLEVBQUFzRCxJQUFBLGVBQUFsRCxDQUFBLENBQUFtRCxNQUFBLEdBQUE5QyxDQUFBLEVBQUFMLENBQUEsQ0FBQXdCLEdBQUEsR0FBQWpCLENBQUEsVUFBQUUsQ0FBQSxHQUFBVCxDQUFBLENBQUFvRCxRQUFBLE1BQUEzQyxDQUFBLFFBQUFFLENBQUEsR0FBQTBDLG1CQUFBLENBQUE1QyxDQUFBLEVBQUFULENBQUEsT0FBQVcsQ0FBQSxRQUFBQSxDQUFBLEtBQUFtQixDQUFBLG1CQUFBbkIsQ0FBQSxxQkFBQVgsQ0FBQSxDQUFBbUQsTUFBQSxFQUFBbkQsQ0FBQSxDQUFBc0QsSUFBQSxHQUFBdEQsQ0FBQSxDQUFBdUQsS0FBQSxHQUFBdkQsQ0FBQSxDQUFBd0IsR0FBQSxzQkFBQXhCLENBQUEsQ0FBQW1ELE1BQUEsUUFBQWpELENBQUEsS0FBQXdCLENBQUEsUUFBQXhCLENBQUEsR0FBQTJCLENBQUEsRUFBQTdCLENBQUEsQ0FBQXdCLEdBQUEsRUFBQXhCLENBQUEsQ0FBQXdELGlCQUFBLENBQUF4RCxDQUFBLENBQUF3QixHQUFBLHVCQUFBeEIsQ0FBQSxDQUFBbUQsTUFBQSxJQUFBbkQsQ0FBQSxDQUFBeUQsTUFBQSxXQUFBekQsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBdEIsQ0FBQSxHQUFBMEIsQ0FBQSxNQUFBSyxDQUFBLEdBQUFYLFFBQUEsQ0FBQTNCLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLG9CQUFBaUMsQ0FBQSxDQUFBVixJQUFBLFFBQUFyQixDQUFBLEdBQUFGLENBQUEsQ0FBQWtELElBQUEsR0FBQXJCLENBQUEsR0FBQUYsQ0FBQSxFQUFBTSxDQUFBLENBQUFULEdBQUEsS0FBQU0sQ0FBQSxxQkFBQTFCLEtBQUEsRUFBQTZCLENBQUEsQ0FBQVQsR0FBQSxFQUFBMEIsSUFBQSxFQUFBbEQsQ0FBQSxDQUFBa0QsSUFBQSxrQkFBQWpCLENBQUEsQ0FBQVYsSUFBQSxLQUFBckIsQ0FBQSxHQUFBMkIsQ0FBQSxFQUFBN0IsQ0FBQSxDQUFBbUQsTUFBQSxZQUFBbkQsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBUyxDQUFBLENBQUFULEdBQUEsbUJBQUE2QixvQkFBQTFELENBQUEsRUFBQUUsQ0FBQSxRQUFBRyxDQUFBLEdBQUFILENBQUEsQ0FBQXNELE1BQUEsRUFBQWpELENBQUEsR0FBQVAsQ0FBQSxDQUFBYSxRQUFBLENBQUFSLENBQUEsT0FBQUUsQ0FBQSxLQUFBTixDQUFBLFNBQUFDLENBQUEsQ0FBQXVELFFBQUEscUJBQUFwRCxDQUFBLElBQUFMLENBQUEsQ0FBQWEsUUFBQSxlQUFBWCxDQUFBLENBQUFzRCxNQUFBLGFBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEVBQUF5RCxtQkFBQSxDQUFBMUQsQ0FBQSxFQUFBRSxDQUFBLGVBQUFBLENBQUEsQ0FBQXNELE1BQUEsa0JBQUFuRCxDQUFBLEtBQUFILENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsT0FBQWtDLFNBQUEsdUNBQUExRCxDQUFBLGlCQUFBOEIsQ0FBQSxNQUFBekIsQ0FBQSxHQUFBaUIsUUFBQSxDQUFBcEIsQ0FBQSxFQUFBUCxDQUFBLENBQUFhLFFBQUEsRUFBQVgsQ0FBQSxDQUFBMkIsR0FBQSxtQkFBQW5CLENBQUEsQ0FBQWtCLElBQUEsU0FBQTFCLENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQW5CLENBQUEsQ0FBQW1CLEdBQUEsRUFBQTNCLENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsTUFBQXZCLENBQUEsR0FBQUYsQ0FBQSxDQUFBbUIsR0FBQSxTQUFBakIsQ0FBQSxHQUFBQSxDQUFBLENBQUEyQyxJQUFBLElBQUFyRCxDQUFBLENBQUFGLENBQUEsQ0FBQWdFLFVBQUEsSUFBQXBELENBQUEsQ0FBQUgsS0FBQSxFQUFBUCxDQUFBLENBQUErRCxJQUFBLEdBQUFqRSxDQUFBLENBQUFrRSxPQUFBLGVBQUFoRSxDQUFBLENBQUFzRCxNQUFBLEtBQUF0RCxDQUFBLENBQUFzRCxNQUFBLFdBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEdBQUFDLENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsSUFBQXZCLENBQUEsSUFBQVYsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxPQUFBa0MsU0FBQSxzQ0FBQTdELENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsY0FBQWdDLGFBQUFsRSxDQUFBLFFBQUFELENBQUEsS0FBQW9FLE1BQUEsRUFBQW5FLENBQUEsWUFBQUEsQ0FBQSxLQUFBRCxDQUFBLENBQUFxRSxRQUFBLEdBQUFwRSxDQUFBLFdBQUFBLENBQUEsS0FBQUQsQ0FBQSxDQUFBc0UsVUFBQSxHQUFBckUsQ0FBQSxLQUFBRCxDQUFBLENBQUF1RSxRQUFBLEdBQUF0RSxDQUFBLFdBQUF1RSxVQUFBLENBQUFDLElBQUEsQ0FBQXpFLENBQUEsY0FBQTBFLGNBQUF6RSxDQUFBLFFBQUFELENBQUEsR0FBQUMsQ0FBQSxDQUFBMEUsVUFBQSxRQUFBM0UsQ0FBQSxDQUFBNEIsSUFBQSxvQkFBQTVCLENBQUEsQ0FBQTZCLEdBQUEsRUFBQTVCLENBQUEsQ0FBQTBFLFVBQUEsR0FBQTNFLENBQUEsYUFBQXlCLFFBQUF4QixDQUFBLFNBQUF1RSxVQUFBLE1BQUFKLE1BQUEsYUFBQW5FLENBQUEsQ0FBQTRDLE9BQUEsQ0FBQXNCLFlBQUEsY0FBQVMsS0FBQSxpQkFBQWxDLE9BQUExQyxDQUFBLFFBQUFBLENBQUEsV0FBQUEsQ0FBQSxRQUFBRSxDQUFBLEdBQUFGLENBQUEsQ0FBQVksQ0FBQSxPQUFBVixDQUFBLFNBQUFBLENBQUEsQ0FBQTRCLElBQUEsQ0FBQTlCLENBQUEsNEJBQUFBLENBQUEsQ0FBQWlFLElBQUEsU0FBQWpFLENBQUEsT0FBQTZFLEtBQUEsQ0FBQTdFLENBQUEsQ0FBQThFLE1BQUEsU0FBQXZFLENBQUEsT0FBQUcsQ0FBQSxZQUFBdUQsS0FBQSxhQUFBMUQsQ0FBQSxHQUFBUCxDQUFBLENBQUE4RSxNQUFBLE9BQUF6RSxDQUFBLENBQUF5QixJQUFBLENBQUE5QixDQUFBLEVBQUFPLENBQUEsVUFBQTBELElBQUEsQ0FBQXhELEtBQUEsR0FBQVQsQ0FBQSxDQUFBTyxDQUFBLEdBQUEwRCxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxTQUFBQSxJQUFBLENBQUF4RCxLQUFBLEdBQUFSLENBQUEsRUFBQWdFLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFlBQUF2RCxDQUFBLENBQUF1RCxJQUFBLEdBQUF2RCxDQUFBLGdCQUFBcUQsU0FBQSxDQUFBZCxPQUFBLENBQUFqRCxDQUFBLGtDQUFBb0MsaUJBQUEsQ0FBQWhDLFNBQUEsR0FBQWlDLDBCQUFBLEVBQUE5QixDQUFBLENBQUFvQyxDQUFBLG1CQUFBbEMsS0FBQSxFQUFBNEIsMEJBQUEsRUFBQWpCLFlBQUEsU0FBQWIsQ0FBQSxDQUFBOEIsMEJBQUEsbUJBQUE1QixLQUFBLEVBQUEyQixpQkFBQSxFQUFBaEIsWUFBQSxTQUFBZ0IsaUJBQUEsQ0FBQTJDLFdBQUEsR0FBQTdELE1BQUEsQ0FBQW1CLDBCQUFBLEVBQUFyQixDQUFBLHdCQUFBaEIsQ0FBQSxDQUFBZ0YsbUJBQUEsYUFBQS9FLENBQUEsUUFBQUQsQ0FBQSx3QkFBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFnRixXQUFBLFdBQUFqRixDQUFBLEtBQUFBLENBQUEsS0FBQW9DLGlCQUFBLDZCQUFBcEMsQ0FBQSxDQUFBK0UsV0FBQSxJQUFBL0UsQ0FBQSxDQUFBa0YsSUFBQSxPQUFBbEYsQ0FBQSxDQUFBbUYsSUFBQSxhQUFBbEYsQ0FBQSxXQUFBRSxNQUFBLENBQUFpRixjQUFBLEdBQUFqRixNQUFBLENBQUFpRixjQUFBLENBQUFuRixDQUFBLEVBQUFvQywwQkFBQSxLQUFBcEMsQ0FBQSxDQUFBb0YsU0FBQSxHQUFBaEQsMEJBQUEsRUFBQW5CLE1BQUEsQ0FBQWpCLENBQUEsRUFBQWUsQ0FBQSx5QkFBQWYsQ0FBQSxDQUFBRyxTQUFBLEdBQUFELE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQW1CLENBQUEsR0FBQTFDLENBQUEsS0FBQUQsQ0FBQSxDQUFBc0YsS0FBQSxhQUFBckYsQ0FBQSxhQUFBa0QsT0FBQSxFQUFBbEQsQ0FBQSxPQUFBMkMscUJBQUEsQ0FBQUcsYUFBQSxDQUFBM0MsU0FBQSxHQUFBYyxNQUFBLENBQUE2QixhQUFBLENBQUEzQyxTQUFBLEVBQUFVLENBQUEsaUNBQUFkLENBQUEsQ0FBQStDLGFBQUEsR0FBQUEsYUFBQSxFQUFBL0MsQ0FBQSxDQUFBdUYsS0FBQSxhQUFBdEYsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLGVBQUFBLENBQUEsS0FBQUEsQ0FBQSxHQUFBOEUsT0FBQSxPQUFBNUUsQ0FBQSxPQUFBbUMsYUFBQSxDQUFBekIsSUFBQSxDQUFBckIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxHQUFBRyxDQUFBLFVBQUFWLENBQUEsQ0FBQWdGLG1CQUFBLENBQUE5RSxDQUFBLElBQUFVLENBQUEsR0FBQUEsQ0FBQSxDQUFBcUQsSUFBQSxHQUFBYixJQUFBLFdBQUFuRCxDQUFBLFdBQUFBLENBQUEsQ0FBQXNELElBQUEsR0FBQXRELENBQUEsQ0FBQVEsS0FBQSxHQUFBRyxDQUFBLENBQUFxRCxJQUFBLFdBQUFyQixxQkFBQSxDQUFBRCxDQUFBLEdBQUF6QixNQUFBLENBQUF5QixDQUFBLEVBQUEzQixDQUFBLGdCQUFBRSxNQUFBLENBQUF5QixDQUFBLEVBQUEvQixDQUFBLGlDQUFBTSxNQUFBLENBQUF5QixDQUFBLDZEQUFBM0MsQ0FBQSxDQUFBeUYsSUFBQSxhQUFBeEYsQ0FBQSxRQUFBRCxDQUFBLEdBQUFHLE1BQUEsQ0FBQUYsQ0FBQSxHQUFBQyxDQUFBLGdCQUFBRyxDQUFBLElBQUFMLENBQUEsRUFBQUUsQ0FBQSxDQUFBdUUsSUFBQSxDQUFBcEUsQ0FBQSxVQUFBSCxDQUFBLENBQUF3RixPQUFBLGFBQUF6QixLQUFBLFdBQUEvRCxDQUFBLENBQUE0RSxNQUFBLFNBQUE3RSxDQUFBLEdBQUFDLENBQUEsQ0FBQXlGLEdBQUEsUUFBQTFGLENBQUEsSUFBQUQsQ0FBQSxTQUFBaUUsSUFBQSxDQUFBeEQsS0FBQSxHQUFBUixDQUFBLEVBQUFnRSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxXQUFBQSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxRQUFBakUsQ0FBQSxDQUFBMEMsTUFBQSxHQUFBQSxNQUFBLEVBQUFqQixPQUFBLENBQUFyQixTQUFBLEtBQUE2RSxXQUFBLEVBQUF4RCxPQUFBLEVBQUFtRCxLQUFBLFdBQUFBLE1BQUE1RSxDQUFBLGFBQUE0RixJQUFBLFdBQUEzQixJQUFBLFdBQUFOLElBQUEsUUFBQUMsS0FBQSxHQUFBM0QsQ0FBQSxPQUFBc0QsSUFBQSxZQUFBRSxRQUFBLGNBQUFELE1BQUEsZ0JBQUEzQixHQUFBLEdBQUE1QixDQUFBLE9BQUF1RSxVQUFBLENBQUEzQixPQUFBLENBQUE2QixhQUFBLElBQUExRSxDQUFBLFdBQUFFLENBQUEsa0JBQUFBLENBQUEsQ0FBQTJGLE1BQUEsT0FBQXhGLENBQUEsQ0FBQXlCLElBQUEsT0FBQTVCLENBQUEsTUFBQTJFLEtBQUEsRUFBQTNFLENBQUEsQ0FBQTRGLEtBQUEsY0FBQTVGLENBQUEsSUFBQUQsQ0FBQSxNQUFBOEYsSUFBQSxXQUFBQSxLQUFBLFNBQUF4QyxJQUFBLFdBQUF0RCxDQUFBLFFBQUF1RSxVQUFBLElBQUFHLFVBQUEsa0JBQUExRSxDQUFBLENBQUEyQixJQUFBLFFBQUEzQixDQUFBLENBQUE0QixHQUFBLGNBQUFtRSxJQUFBLEtBQUFuQyxpQkFBQSxXQUFBQSxrQkFBQTdELENBQUEsYUFBQXVELElBQUEsUUFBQXZELENBQUEsTUFBQUUsQ0FBQSxrQkFBQStGLE9BQUE1RixDQUFBLEVBQUFFLENBQUEsV0FBQUssQ0FBQSxDQUFBZ0IsSUFBQSxZQUFBaEIsQ0FBQSxDQUFBaUIsR0FBQSxHQUFBN0IsQ0FBQSxFQUFBRSxDQUFBLENBQUErRCxJQUFBLEdBQUE1RCxDQUFBLEVBQUFFLENBQUEsS0FBQUwsQ0FBQSxDQUFBc0QsTUFBQSxXQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBNUIsQ0FBQSxLQUFBTSxDQUFBLGFBQUFBLENBQUEsUUFBQWlFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBdkUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFHLENBQUEsUUFBQThELFVBQUEsQ0FBQWpFLENBQUEsR0FBQUssQ0FBQSxHQUFBRixDQUFBLENBQUFpRSxVQUFBLGlCQUFBakUsQ0FBQSxDQUFBMEQsTUFBQSxTQUFBNkIsTUFBQSxhQUFBdkYsQ0FBQSxDQUFBMEQsTUFBQSxTQUFBd0IsSUFBQSxRQUFBOUUsQ0FBQSxHQUFBVCxDQUFBLENBQUF5QixJQUFBLENBQUFwQixDQUFBLGVBQUFNLENBQUEsR0FBQVgsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBcEIsQ0FBQSxxQkFBQUksQ0FBQSxJQUFBRSxDQUFBLGFBQUE0RSxJQUFBLEdBQUFsRixDQUFBLENBQUEyRCxRQUFBLFNBQUE0QixNQUFBLENBQUF2RixDQUFBLENBQUEyRCxRQUFBLGdCQUFBdUIsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBNEQsVUFBQSxTQUFBMkIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBNEQsVUFBQSxjQUFBeEQsQ0FBQSxhQUFBOEUsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBMkQsUUFBQSxTQUFBNEIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBMkQsUUFBQSxxQkFBQXJELENBQUEsUUFBQXNDLEtBQUEscURBQUFzQyxJQUFBLEdBQUFsRixDQUFBLENBQUE0RCxVQUFBLFNBQUEyQixNQUFBLENBQUF2RixDQUFBLENBQUE0RCxVQUFBLFlBQUFSLE1BQUEsV0FBQUEsT0FBQTdELENBQUEsRUFBQUQsQ0FBQSxhQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUFNLE1BQUEsTUFBQTVFLENBQUEsU0FBQUEsQ0FBQSxRQUFBSyxDQUFBLFFBQUFpRSxVQUFBLENBQUF0RSxDQUFBLE9BQUFLLENBQUEsQ0FBQTZELE1BQUEsU0FBQXdCLElBQUEsSUFBQXZGLENBQUEsQ0FBQXlCLElBQUEsQ0FBQXZCLENBQUEsd0JBQUFxRixJQUFBLEdBQUFyRixDQUFBLENBQUErRCxVQUFBLFFBQUE1RCxDQUFBLEdBQUFILENBQUEsYUFBQUcsQ0FBQSxpQkFBQVQsQ0FBQSxtQkFBQUEsQ0FBQSxLQUFBUyxDQUFBLENBQUEwRCxNQUFBLElBQUFwRSxDQUFBLElBQUFBLENBQUEsSUFBQVUsQ0FBQSxDQUFBNEQsVUFBQSxLQUFBNUQsQ0FBQSxjQUFBRSxDQUFBLEdBQUFGLENBQUEsR0FBQUEsQ0FBQSxDQUFBaUUsVUFBQSxjQUFBL0QsQ0FBQSxDQUFBZ0IsSUFBQSxHQUFBM0IsQ0FBQSxFQUFBVyxDQUFBLENBQUFpQixHQUFBLEdBQUE3QixDQUFBLEVBQUFVLENBQUEsU0FBQThDLE1BQUEsZ0JBQUFTLElBQUEsR0FBQXZELENBQUEsQ0FBQTRELFVBQUEsRUFBQW5DLENBQUEsU0FBQStELFFBQUEsQ0FBQXRGLENBQUEsTUFBQXNGLFFBQUEsV0FBQUEsU0FBQWpHLENBQUEsRUFBQUQsQ0FBQSxvQkFBQUMsQ0FBQSxDQUFBMkIsSUFBQSxRQUFBM0IsQ0FBQSxDQUFBNEIsR0FBQSxxQkFBQTVCLENBQUEsQ0FBQTJCLElBQUEsbUJBQUEzQixDQUFBLENBQUEyQixJQUFBLFFBQUFxQyxJQUFBLEdBQUFoRSxDQUFBLENBQUE0QixHQUFBLGdCQUFBNUIsQ0FBQSxDQUFBMkIsSUFBQSxTQUFBb0UsSUFBQSxRQUFBbkUsR0FBQSxHQUFBNUIsQ0FBQSxDQUFBNEIsR0FBQSxPQUFBMkIsTUFBQSxrQkFBQVMsSUFBQSx5QkFBQWhFLENBQUEsQ0FBQTJCLElBQUEsSUFBQTVCLENBQUEsVUFBQWlFLElBQUEsR0FBQWpFLENBQUEsR0FBQW1DLENBQUEsS0FBQWdFLE1BQUEsV0FBQUEsT0FBQWxHLENBQUEsYUFBQUQsQ0FBQSxRQUFBd0UsVUFBQSxDQUFBTSxNQUFBLE1BQUE5RSxDQUFBLFNBQUFBLENBQUEsUUFBQUUsQ0FBQSxRQUFBc0UsVUFBQSxDQUFBeEUsQ0FBQSxPQUFBRSxDQUFBLENBQUFvRSxVQUFBLEtBQUFyRSxDQUFBLGNBQUFpRyxRQUFBLENBQUFoRyxDQUFBLENBQUF5RSxVQUFBLEVBQUF6RSxDQUFBLENBQUFxRSxRQUFBLEdBQUFHLGFBQUEsQ0FBQXhFLENBQUEsR0FBQWlDLENBQUEseUJBQUFpRSxPQUFBbkcsQ0FBQSxhQUFBRCxDQUFBLFFBQUF3RSxVQUFBLENBQUFNLE1BQUEsTUFBQTlFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUF4RSxDQUFBLE9BQUFFLENBQUEsQ0FBQWtFLE1BQUEsS0FBQW5FLENBQUEsUUFBQUksQ0FBQSxHQUFBSCxDQUFBLENBQUF5RSxVQUFBLGtCQUFBdEUsQ0FBQSxDQUFBdUIsSUFBQSxRQUFBckIsQ0FBQSxHQUFBRixDQUFBLENBQUF3QixHQUFBLEVBQUE2QyxhQUFBLENBQUF4RSxDQUFBLFlBQUFLLENBQUEsWUFBQStDLEtBQUEsOEJBQUErQyxhQUFBLFdBQUFBLGNBQUFyRyxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxnQkFBQW9ELFFBQUEsS0FBQTVDLFFBQUEsRUFBQTZCLE1BQUEsQ0FBQTFDLENBQUEsR0FBQWdFLFVBQUEsRUFBQTlELENBQUEsRUFBQWdFLE9BQUEsRUFBQTdELENBQUEsb0JBQUFtRCxNQUFBLFVBQUEzQixHQUFBLEdBQUE1QixDQUFBLEdBQUFrQyxDQUFBLE9BQUFuQyxDQUFBO0FBQUEsU0FBQXNHLG1CQUFBakcsQ0FBQSxFQUFBSixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxFQUFBSyxDQUFBLEVBQUFLLENBQUEsRUFBQUUsQ0FBQSxjQUFBSixDQUFBLEdBQUFMLENBQUEsQ0FBQU8sQ0FBQSxFQUFBRSxDQUFBLEdBQUFFLENBQUEsR0FBQU4sQ0FBQSxDQUFBRCxLQUFBLFdBQUFKLENBQUEsZ0JBQUFMLENBQUEsQ0FBQUssQ0FBQSxLQUFBSyxDQUFBLENBQUE2QyxJQUFBLEdBQUF0RCxDQUFBLENBQUFlLENBQUEsSUFBQXdFLE9BQUEsQ0FBQXRDLE9BQUEsQ0FBQWxDLENBQUEsRUFBQW9DLElBQUEsQ0FBQWxELENBQUEsRUFBQUssQ0FBQTtBQUFBLFNBQUFnRyxrQkFBQWxHLENBQUEsNkJBQUFKLENBQUEsU0FBQUQsQ0FBQSxHQUFBd0csU0FBQSxhQUFBaEIsT0FBQSxXQUFBdEYsQ0FBQSxFQUFBSyxDQUFBLFFBQUFLLENBQUEsR0FBQVAsQ0FBQSxDQUFBb0csS0FBQSxDQUFBeEcsQ0FBQSxFQUFBRCxDQUFBLFlBQUEwRyxNQUFBckcsQ0FBQSxJQUFBaUcsa0JBQUEsQ0FBQTFGLENBQUEsRUFBQVYsQ0FBQSxFQUFBSyxDQUFBLEVBQUFtRyxLQUFBLEVBQUFDLE1BQUEsVUFBQXRHLENBQUEsY0FBQXNHLE9BQUF0RyxDQUFBLElBQUFpRyxrQkFBQSxDQUFBMUYsQ0FBQSxFQUFBVixDQUFBLEVBQUFLLENBQUEsRUFBQW1HLEtBQUEsRUFBQUMsTUFBQSxXQUFBdEcsQ0FBQSxLQUFBcUcsS0FBQTtBQUF3QjtBQUN4QjtBQUNtQixDQUE4QjtBQUNmLENBQWU7QUFDaEI7QUFFakMsSUFBTUksYUFBYSxHQUFHLElBQUk7QUFDMUIsSUFBTUMsY0FBYyxHQUFHLEVBQUU7QUFDekIsSUFBTUMsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLDBEQUFPLENBQUM7QUFDOUIsSUFBTUMsU0FBUyxHQUFHRCxtQkFBTyxDQUFDLGdEQUFhLENBQUM7QUFFeENFLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsVUFBU3BILENBQUMsRUFBRTtFQUVwRCxJQUFJLENBQUNtSCxNQUFNLENBQUNFLFlBQVksR0FBRyxTQUFTQSxZQUFZQSxDQUFDQyxFQUFFLEVBQUM7SUFDNUMsSUFBSUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQ0gsRUFBRSxDQUFDO0lBQzlDLElBQUlDLFFBQVEsQ0FBQzNGLElBQUksS0FBSyxVQUFVLEVBQUU7TUFDMUIyRixRQUFRLENBQUMzRixJQUFJLEdBQUcsTUFBTTtJQUM5QixDQUFDLE1BQU07TUFDSDJGLFFBQVEsQ0FBQzNGLElBQUksR0FBRyxVQUFVO0lBQzlCO0VBQ0osQ0FBQztFQUNELElBQUksQ0FBQ3VGLE1BQU0sQ0FBQ08sV0FBVyxHQUFHLFNBQVNBLFdBQVdBLENBQUEsRUFBRTtJQUU1QyxJQUFJQyxrQkFBa0IsR0FBR0gsUUFBUSxDQUFDQyxjQUFjLENBQUMsWUFBWSxDQUFDO0lBQzlELElBQUlHLFVBQVUsR0FBRyxDQUFDO0lBQ2xCLElBQUcsQ0FBQ0Qsa0JBQWtCLENBQUNsSCxLQUFLLEdBQUcsQ0FBQyxFQUFDO01BQzdCa0gsa0JBQWtCLENBQUNsSCxLQUFLLEdBQUdtSCxVQUFVO0lBQ3pDLENBQUMsTUFBSTtNQUNEQSxVQUFVLEdBQUcsQ0FBQ0Qsa0JBQWtCLENBQUNsSCxLQUFLO0lBQzFDO0lBQUMsSUFBQW9ILEtBQUEsWUFBQUEsTUFBQSxFQUVrQztNQUcvQixJQUFJQyxPQUFPLEdBQUdOLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDaEgsS0FBSztNQUNsRCxJQUFJc0gsYUFBYSxHQUFHUCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxTQUFTLENBQUM7TUFDdEQsSUFBSU8sU0FBUyxHQUFHUixRQUFRLENBQUNDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztNQUMxRCxJQUFJUSxNQUFNLEdBQUdULFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDaEgsS0FBSztNQUNwRCxJQUFJeUgsTUFBTSxHQUFHVixRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQ2hILEtBQUs7TUFDcEQsSUFBSTBILE1BQU0sR0FBR0osYUFBYSxDQUFDdEgsS0FBSztNQUNoQ3NILGFBQWEsQ0FBQ3RILEtBQUssR0FBRyxDQUFDMEgsTUFBTSxHQUFHLENBQUM7TUFFakMsSUFBSUMsR0FBRyxHQUFHWixRQUFRLENBQUNhLGFBQWEsQ0FBQyxJQUFJLENBQUM7O01BRXRDO01BQ0EsSUFBSUMsS0FBSyxHQUFHZCxRQUFRLENBQUNhLGFBQWEsQ0FBQyxJQUFJLENBQUM7TUFDeENDLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLEtBQUs7TUFDbkJELEtBQUssQ0FBQ0UsU0FBUyxHQUFHTCxNQUFNO01BRXhCLElBQUlNLEtBQUssR0FBR2pCLFFBQVEsQ0FBQ2EsYUFBYSxDQUFDLElBQUksQ0FBQztNQUV4QyxJQUFJSyxPQUFPLEdBQUdsQixRQUFRLENBQUNhLGFBQWEsQ0FBQyxPQUFPLENBQUM7TUFDN0NLLE9BQU8sQ0FBQzlHLElBQUksR0FBRyxRQUFRO01BQ3ZCOEcsT0FBTyxDQUFDeEQsSUFBSSxHQUFHLE1BQU07TUFDckJ3RCxPQUFPLENBQUNwQixFQUFFLEdBQUcsS0FBSyxHQUFDYSxNQUFNO01BQ3pCTyxPQUFPLENBQUNqSSxLQUFLLEdBQUcsTUFBTSxHQUFDMEgsTUFBTTtNQUM3Qk8sT0FBTyxDQUFDQyxZQUFZLENBQUMsa0JBQWtCLEVBQUMsSUFBSSxDQUFDO01BRTdDLElBQUlDLFFBQVEsR0FBSUMsbUJBQW1CLENBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQ1YsTUFBTSxFQUFDLFdBQVcsQ0FBQztNQUN6RVMsUUFBUSxDQUFDRSxXQUFXLEdBQUcsV0FBVztNQUNsQ0YsUUFBUSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7TUFFdEMsSUFBSUMsS0FBSyxHQUFHekIsUUFBUSxDQUFDYSxhQUFhLENBQUMsSUFBSSxDQUFDO01BQ3hDWSxLQUFLLENBQUMzQixFQUFFLEdBQUcsU0FBUyxHQUFDYSxNQUFNO01BQzNCLElBQUllLFNBQVMsR0FBRzFCLFFBQVEsQ0FBQ2EsYUFBYSxDQUFDLEdBQUcsQ0FBQztNQUMzQ2EsU0FBUyxDQUFDNUIsRUFBRSxHQUFHLFlBQVksR0FBQ2EsTUFBTTtNQUNsQ2UsU0FBUyxDQUFDQyxTQUFTLEdBQUcsOEJBQThCO01BQ3BERCxTQUFTLENBQUNWLFNBQVMsR0FBRyxHQUFHO01BRXpCLElBQUlZLElBQUksR0FBRyxDQUFDLENBQUM7TUFDYixJQUFJQyxHQUFHLEdBQUcsWUFBWTtNQUN0QkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHbEIsTUFBTTtNQUN4QmtCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBR25CLE1BQU07TUFDeEJtQixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRTtNQUN0QixJQUFJRSxVQUFVO01BQ2RBLFVBQVU7UUFBQSxJQUFBQyxJQUFBLEdBQUFoRCxpQkFBQSxlQUFBeEcsbUJBQUEsR0FBQW9GLElBQUEsQ0FBRyxTQUFBcUUsUUFBQTtVQUFBLElBQUFDLFFBQUE7VUFBQSxPQUFBMUosbUJBQUEsR0FBQXVCLElBQUEsVUFBQW9JLFNBQUFDLFFBQUE7WUFBQSxrQkFBQUEsUUFBQSxDQUFBL0QsSUFBQSxHQUFBK0QsUUFBQSxDQUFBMUYsSUFBQTtjQUFBO2dCQUFBMEYsUUFBQSxDQUFBL0QsSUFBQTtnQkFBQStELFFBQUEsQ0FBQTFGLElBQUE7Z0JBQUEsT0FFa0IrQyxLQUFLLENBQUM0QyxJQUFJLENBQUNQLEdBQUcsRUFBRUQsSUFBSSxDQUFDO2NBQUE7Z0JBQXRDSyxRQUFRLEdBQUFFLFFBQUEsQ0FBQWhHLElBQUE7Z0JBQUEsT0FBQWdHLFFBQUEsQ0FBQTdGLE1BQUEsV0FDUDJGLFFBQVEsQ0FBQ0wsSUFBSTtjQUFBO2dCQUFBTyxRQUFBLENBQUEvRCxJQUFBO2dCQUFBK0QsUUFBQSxDQUFBRSxFQUFBLEdBQUFGLFFBQUE7Z0JBRXBCO2dCQUNBRyxPQUFPLENBQUNDLEdBQUcsQ0FBQUosUUFBQSxDQUFBRSxFQUFNLENBQUM7Y0FBQztjQUFBO2dCQUFBLE9BQUFGLFFBQUEsQ0FBQTVELElBQUE7WUFBQTtVQUFBLEdBQUF5RCxPQUFBO1FBQUEsQ0FFMUI7UUFBQSxnQkFSREYsVUFBVUEsQ0FBQTtVQUFBLE9BQUFDLElBQUEsQ0FBQTlDLEtBQUEsT0FBQUQsU0FBQTtRQUFBO01BQUEsR0FRVDs7TUFFRDtNQUNBOEMsVUFBVSxDQUFDLENBQUMsQ0FBQ2xHLElBQUksQ0FBQyxVQUFDZ0csSUFBSSxFQUFLO1FBQ3hCO1FBQ0FWLE9BQU8sQ0FBQ2pJLEtBQUssR0FBRzJJLElBQUksQ0FBQ1ksS0FBSztRQUMxQmQsU0FBUyxDQUFDUCxZQUFZLENBQUMsTUFBTSxFQUFFLHFCQUFxQixHQUFDUyxJQUFJLENBQUNZLEtBQUssQ0FBQztNQUNwRSxDQUFDLENBQUM7TUFFRixJQUFJQyxLQUFLLEdBQUd6QyxRQUFRLENBQUNhLGFBQWEsQ0FBQyxJQUFJLENBQUM7TUFDeEMsSUFBSTZCLFVBQVUsR0FBR3JCLG1CQUFtQixDQUFDLFFBQVEsRUFBQyxZQUFZLEVBQUNWLE1BQU0sRUFBQyxhQUFhLENBQUM7TUFDaEYrQixVQUFVLENBQUN6SixLQUFLLEdBQUcsQ0FBQztNQUNwQnlKLFVBQVUsQ0FBQ25CLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztNQUN0Q2tCLFVBQVUsQ0FBQ25CLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztNQUN4Q2tCLFVBQVUsQ0FBQ25CLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztNQUN4Q2lCLEtBQUssQ0FBQ2xCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztNQUVqQyxJQUFJbUIsS0FBSyxHQUFHM0MsUUFBUSxDQUFDYSxhQUFhLENBQUMsSUFBSSxDQUFDO01BQ3hDLElBQUkrQixNQUFNO01BQ1YsSUFBSUMsTUFBTTtNQUNWLElBQUlDLFdBQVc7TUFDZixJQUFJQyxXQUFXO01BRWYsSUFBR3pDLE9BQU8sS0FBSyxJQUFJLEVBQUM7UUFFaEJzQyxNQUFNLEdBQUdJLFdBQVcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRXJDLE1BQU0sQ0FBQztRQUNuRG1DLFdBQVcsR0FBR0csV0FBVyxDQUFDLElBQUksRUFBRyxTQUFTLEdBQUN0QyxNQUFNLEVBQUUsSUFBSSxFQUFFQSxNQUFNLENBQUM7UUFDaEVrQyxNQUFNLEdBQUdHLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRXJDLE1BQU0sQ0FBQztRQUNqRG9DLFdBQVcsR0FBR0UsV0FBVyxDQUFDLEtBQUssRUFBRyxVQUFVLEdBQUN0QyxNQUFNLEVBQUUsS0FBSyxFQUFFQSxNQUFNLENBQUM7TUFFdkUsQ0FBQyxNQUFJO1FBRURpQyxNQUFNLEdBQUdJLFdBQVcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRXJDLE1BQU0sQ0FBQztRQUNwRG1DLFdBQVcsR0FBSUcsV0FBVyxDQUFDLE9BQU8sRUFBRyxXQUFXLEdBQUN0QyxNQUFNLEVBQUUsTUFBTSxFQUFFQSxNQUFNLENBQUM7UUFDeEVrQyxNQUFNLEdBQUlHLFdBQVcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRXJDLE1BQU0sQ0FBQztRQUNuRG9DLFdBQVcsR0FBR0UsV0FBVyxDQUFDLElBQUksRUFBRyxTQUFTLEdBQUN0QyxNQUFNLEVBQUUsSUFBSSxFQUFFQSxNQUFNLENBQUM7TUFDcEU7TUFFQSxJQUFJdUMsS0FBSyxHQUFHbEQsUUFBUSxDQUFDYSxhQUFhLENBQUMsSUFBSSxDQUFDO01BQ3hDcUMsS0FBSyxDQUFDM0IsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO01BQ2pDLElBQUkyQixZQUFZLEdBQUc5QixtQkFBbUIsQ0FBQyxRQUFRLEVBQUMsY0FBYyxFQUFDVixNQUFNLEVBQUMsUUFBUSxDQUFDO01BQy9Fd0MsWUFBWSxDQUFDbEssS0FBSyxHQUFHLENBQUM7TUFFdEJrSyxZQUFZLENBQUM1QixTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7TUFDeEMyQixZQUFZLENBQUM1QixTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7TUFDMUMyQixZQUFZLENBQUM1QixTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7TUFFMUMsSUFBSTRCLEtBQUssR0FBR3BELFFBQVEsQ0FBQ2EsYUFBYSxDQUFDLElBQUksQ0FBQztNQUN4Q3VDLEtBQUssQ0FBQzdCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztNQUNqQyxJQUFJNkIsZUFBZSxHQUFHaEMsbUJBQW1CLENBQUMsUUFBUSxFQUFDLGlCQUFpQixFQUFDVixNQUFNLEVBQUMsbUJBQW1CLENBQUM7TUFDaEcwQyxlQUFlLENBQUNwSyxLQUFLLEdBQUcsQ0FBQztNQUN6Qm9LLGVBQWUsQ0FBQ2xDLFlBQVksQ0FBQyxrQkFBa0IsRUFBQyxtQkFBbUIsQ0FBQztNQUNwRWtDLGVBQWUsQ0FBQ2xDLFlBQVksQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDO01BQzdDa0MsZUFBZSxDQUFDOUIsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO01BQzdDNkIsZUFBZSxDQUFDOUIsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO01BQzdDNkIsZUFBZSxDQUFDOUIsU0FBUyxDQUFDQyxHQUFHLENBQUMsdUJBQXVCLENBQUM7O01BRXREO01BQ0FQLEtBQUssQ0FBQ3FDLFdBQVcsQ0FBQ3BDLE9BQU8sQ0FBQztNQUMxQkQsS0FBSyxDQUFDcUMsV0FBVyxDQUFDbEMsUUFBUSxDQUFDO01BQzNCcUIsS0FBSyxDQUFDYSxXQUFXLENBQUNaLFVBQVUsQ0FBQztNQUU3QixJQUFJYSxVQUFVLEdBQUd2RCxRQUFRLENBQUNhLGFBQWEsQ0FBQyxJQUFJLENBQUM7TUFDN0MsSUFBSTJDLGNBQWMsR0FBR0MsaUJBQWlCLENBQUM5QyxNQUFNLENBQUM7TUFDOUM0QyxVQUFVLENBQUNHLE1BQU0sQ0FBQ0YsY0FBYyxDQUFDO01BRWpDYixLQUFLLENBQUNXLFdBQVcsQ0FBQ1YsTUFBTSxDQUFDO01BQ3pCRCxLQUFLLENBQUNXLFdBQVcsQ0FBQ1IsV0FBVyxDQUFDO01BQzlCSCxLQUFLLENBQUNXLFdBQVcsQ0FBQ1QsTUFBTSxDQUFDO01BQ3pCRixLQUFLLENBQUNXLFdBQVcsQ0FBQ1AsV0FBVyxDQUFDO01BRTlCRyxLQUFLLENBQUNJLFdBQVcsQ0FBQ0gsWUFBWSxDQUFDO01BQy9CQyxLQUFLLENBQUNFLFdBQVcsQ0FBQ0QsZUFBZSxDQUFDO01BQ2xDNUIsS0FBSyxDQUFDNkIsV0FBVyxDQUFDNUIsU0FBUyxDQUFDOztNQUc1QjtNQUNBZCxHQUFHLENBQUMwQyxXQUFXLENBQUN4QyxLQUFLLENBQUM7TUFDdEJGLEdBQUcsQ0FBQzBDLFdBQVcsQ0FBQ3JDLEtBQUssQ0FBQztNQUN0QkwsR0FBRyxDQUFDMEMsV0FBVyxDQUFDQyxVQUFVLENBQUM7TUFDM0I7TUFDQTNDLEdBQUcsQ0FBQzBDLFdBQVcsQ0FBQ2IsS0FBSyxDQUFDO01BQ3RCN0IsR0FBRyxDQUFDMEMsV0FBVyxDQUFDSixLQUFLLENBQUM7TUFDdEJ0QyxHQUFHLENBQUMwQyxXQUFXLENBQUNGLEtBQUssQ0FBQztNQUN0QnhDLEdBQUcsQ0FBQzBDLFdBQVcsQ0FBQ1gsS0FBSyxDQUFDO01BQ3RCL0IsR0FBRyxDQUFDMEMsV0FBVyxDQUFDN0IsS0FBSyxDQUFDOztNQUd0QjtNQUNBakIsU0FBUyxDQUFDOEMsV0FBVyxDQUFDMUMsR0FBRyxDQUFDOztNQUUxQjtNQUNBK0MsMEJBQTBCLENBQUNoRCxNQUFNLENBQUM7SUFDdEMsQ0FBQztJQWpKRCxLQUFJLElBQUl6SCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdrSCxVQUFVLEVBQUVsSCxDQUFDLEVBQUU7TUFBQW1ILEtBQUE7SUFBQTtJQWtKbENGLGtCQUFrQixDQUFDbEgsS0FBSyxHQUFDLENBQUM7RUFFOUIsQ0FBQztFQUVELElBQUksQ0FBQzBHLE1BQU0sQ0FBQ2lFLFNBQVMsR0FBRyxTQUFTQSxTQUFTQSxDQUFDM0ssS0FBSyxFQUFFO0lBQzlDLElBQUdBLEtBQUssS0FBSyxJQUFJLEVBQUM7TUFDZjRLLGVBQWUsQ0FBQyxDQUFDO0lBQ3BCLENBQUMsTUFBSTtNQUNEQyxlQUFlLENBQUMsQ0FBQztJQUNyQjtFQUNKLENBQUM7RUFDRCxTQUFTSCwwQkFBMEJBLENBQUMvQyxHQUFHLEVBQUM7SUFDcEMsSUFBSW1ELGdCQUFnQixHQUFHL0QsUUFBUSxDQUFDZ0UsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO0lBQy9ERCxnQkFBZ0IsQ0FBQzFJLE9BQU8sQ0FBQyxVQUFVNEksZUFBZSxFQUFDO01BQy9DQSxlQUFlLENBQUNyRSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBVztRQUNsRHNFLGtCQUFrQixDQUFDdEQsR0FBRyxDQUFDO01BQzNCLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNMO0VBRUEsSUFBSSxDQUFDakIsTUFBTSxDQUFDdUUsa0JBQWtCLEdBQUcsU0FBU0Esa0JBQWtCQSxDQUFDdEQsR0FBRyxFQUFpQjtJQUFBLElBQWhCdUQsT0FBTyxHQUFBbkYsU0FBQSxDQUFBMUIsTUFBQSxRQUFBMEIsU0FBQSxRQUFBb0YsU0FBQSxHQUFBcEYsU0FBQSxNQUFHLEtBQUs7SUFFN0UsSUFBSXFGLE1BQU0sR0FBR3JFLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGFBQWEsR0FBQ1csR0FBRyxDQUFDLENBQUMzSCxLQUFLO0lBQzdELElBQUlrSyxZQUFZLEdBQUduRCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxlQUFlLEdBQUNXLEdBQUcsQ0FBQyxDQUFDM0gsS0FBSztJQUNyRSxJQUFJcUwsR0FBRyxHQUFHdEUsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0lBQ3hDLElBQUlzRSxzQkFBc0IsR0FBSXZFLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGtCQUFrQixHQUFDVyxHQUFHLENBQUM7SUFFN0UsSUFBSTRELFNBQVMsR0FBRyxDQUFDO0lBQ2pCQSxTQUFTLEdBQUcsQ0FBQ0gsTUFBTSxHQUFHLENBQUNsQixZQUFZO0lBQ25DcUIsU0FBUyxHQUFHQSxTQUFTLENBQUNDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUM7SUFDdkRILHNCQUFzQixDQUFDdEwsS0FBSyxHQUFHdUwsU0FBUztJQUV4Q0csY0FBYyxDQUFDSixzQkFBc0IsQ0FBQztFQUcxQyxDQUFDO0VBQ0QsSUFBSSxDQUFDNUUsTUFBTSxDQUFDaUYsa0JBQWtCLEdBQUcsU0FBU0Esa0JBQWtCQSxDQUFDaEUsR0FBRyxFQUFrQjtJQUFBLElBQWhCdUQsT0FBTyxHQUFBbkYsU0FBQSxDQUFBMUIsTUFBQSxRQUFBMEIsU0FBQSxRQUFBb0YsU0FBQSxHQUFBcEYsU0FBQSxNQUFHLEtBQUs7SUFFN0UsSUFBSXNGLEdBQUcsR0FBR3RFLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDaEgsS0FBSztJQUM5QyxJQUFJb0wsTUFBTSxHQUFHckUsUUFBUSxDQUFDQyxjQUFjLENBQUMsYUFBYSxHQUFDVyxHQUFHLENBQUM7SUFDdkQsSUFBSXVDLFlBQVksR0FBR25ELFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGVBQWUsR0FBQ1csR0FBRyxDQUFDLENBQUMzSCxLQUFLO0lBQ3JFLElBQUk0TCxXQUFXLEdBQUk3RSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxrQkFBa0IsR0FBQ1csR0FBRyxDQUFDO0lBQ2xFLElBQUlrRSxvQkFBb0IsR0FBRyxDQUFDO0lBQzVCLElBQUlDLFdBQVcsR0FBR1YsTUFBTSxDQUFDcEwsS0FBSztJQUM5QixJQUFJK0wsS0FBSztJQUNULElBQUlDLEtBQUs7SUFDVCxJQUFJQyxPQUFPO0lBRVgsSUFBR1osR0FBRyxLQUFLLElBQUksRUFBQztNQUNaVSxLQUFLLEdBQUdoRixRQUFRLENBQUNDLGNBQWMsQ0FBQyxTQUFTLEdBQUNXLEdBQUcsQ0FBQztNQUM5Q3FFLEtBQUssR0FBR2pGLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFVBQVUsR0FBQ1csR0FBRyxDQUFDO01BQy9DLElBQUdvRSxLQUFLLENBQUNHLE9BQU8sS0FBSyxJQUFJLEVBQUM7UUFDdEJKLFdBQVcsR0FBRyxDQUFDQSxXQUFXLEdBQUcsRUFBRTtRQUMvQkcsT0FBTyxHQUFHRixLQUFLO01BQ25CLENBQUMsTUFBSTtRQUNERCxXQUFXLEdBQUcsQ0FBQ0EsV0FBVyxHQUFHLEVBQUU7UUFDL0JHLE9BQU8sR0FBR0QsS0FBSztNQUNuQjtJQUVKLENBQUMsTUFBSTtNQUNERCxLQUFLLEdBQUdoRixRQUFRLENBQUNDLGNBQWMsQ0FBQyxXQUFXLEdBQUNXLEdBQUcsQ0FBQztNQUNoRHFFLEtBQUssR0FBR2pGLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFNBQVMsR0FBQ1csR0FBRyxDQUFDO01BRTlDLElBQUdvRSxLQUFLLENBQUNHLE9BQU8sS0FBSyxJQUFJLEVBQUM7UUFDdEJKLFdBQVcsR0FBRyxDQUFDQSxXQUFXLEdBQUcsSUFBSTtRQUNqQ0csT0FBTyxHQUFHRixLQUFLO01BQ25CLENBQUMsTUFBSTtRQUNERCxXQUFXLEdBQUcsQ0FBQ0EsV0FBVyxHQUFFLElBQUk7UUFDaENHLE9BQU8sR0FBR0QsS0FBSztNQUNuQjtJQUVKO0lBRUFILG9CQUFvQixHQUFHLENBQUNDLFdBQVcsR0FBRyxDQUFDNUIsWUFBWTtJQUNuRGtCLE1BQU0sQ0FBQ3BMLEtBQUssR0FBRzhMLFdBQVcsQ0FBQ04sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztJQUM1REcsV0FBVyxDQUFDNUwsS0FBSyxHQUFHNkwsb0JBQW9CLENBQUNMLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUM7SUFDMUVDLGNBQWMsQ0FBQ08sT0FBTyxDQUFDO0lBQ3ZCUCxjQUFjLENBQUNOLE1BQU0sQ0FBQztJQUN0Qk0sY0FBYyxDQUFDRSxXQUFXLENBQUM7RUFFL0IsQ0FBQztFQUNELFNBQVNPLGNBQWNBLENBQUNDLFVBQVUsRUFBQztJQUUvQixJQUFJekQsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiQSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsS0FBSztJQUN6QkEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUs7SUFDdEJBLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxLQUFLO0lBQ3hCQSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsS0FBSztJQUN4QixRQUFPeUQsVUFBVTtNQUNiLEtBQUssV0FBVztRQUNaekQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUk7UUFDeEI7TUFDSixLQUFLLFFBQVE7UUFDVEEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUk7UUFDckI7TUFDSixLQUFLLFVBQVU7UUFDWEEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUk7UUFDdkI7TUFDSixLQUFLLFVBQVU7UUFDWEEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUk7UUFDeEI7TUFDSDtRQUNJO0lBQ1I7SUFDQSxPQUFPQSxJQUFJO0VBQ2Y7RUFDQSxJQUFJLENBQUNqQyxNQUFNLENBQUNnRixjQUFjLEdBQUcsU0FBU0EsY0FBY0EsQ0FBQ08sT0FBTyxFQUFDO0lBRXpELElBQUlHLFVBQVUsR0FBR0gsT0FBTyxDQUFDSSxZQUFZLENBQUMsa0JBQWtCLENBQUM7SUFDekQsSUFBSXJNLEtBQUssR0FBR2lNLE9BQU8sQ0FBQ2pNLEtBQUs7SUFDekIsSUFBSTZHLEVBQUUsR0FBR29GLE9BQU8sQ0FBQ3BGLEVBQUU7SUFDbkIsSUFBSXlGLEtBQUssR0FBR3pGLEVBQUUsQ0FBQzBGLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDekIsSUFBSUMsU0FBUyxHQUFHRixLQUFLLENBQUNqSSxNQUFNO0lBQzVCLElBQUlzRCxHQUFHLEdBQUcyRSxLQUFLLENBQUNFLFNBQVMsR0FBQyxDQUFDLENBQUM7SUFDNUIsSUFBSUMsTUFBTSxHQUFHMUYsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxHQUFDVyxHQUFHLENBQUM7SUFDL0MsSUFBSStFLFdBQVcsR0FBR0QsTUFBTSxDQUFDek0sS0FBSztJQUM5QixJQUFJeUgsTUFBTSxHQUFHVixRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQ2hILEtBQUs7SUFDcEQsSUFBSTRJLEdBQUcsR0FBRyxhQUFhLEdBQUM4RCxXQUFXO0lBQ25DLElBQUkvRCxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsSUFBSW5CLE1BQU0sR0FBR1QsUUFBUSxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUNoSCxLQUFLO0lBRXBEMkksSUFBSSxDQUFDeUQsVUFBVSxDQUFDLEdBQUdwTSxLQUFLO0lBRXhCLElBQUdvTSxVQUFVLENBQUNPLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxFQUFDO01BQ25DaEUsSUFBSSxHQUFHd0QsY0FBYyxDQUFDQyxVQUFVLENBQUM7SUFDckM7SUFFQXpELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBR2xCLE1BQU07SUFDeEJrQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUduQixNQUFNO0lBQ3hCbUIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHK0QsV0FBVztJQUV4Qm5HLEtBQUssQ0FBQzRDLElBQUksQ0FBQ1AsR0FBRyxFQUFFRCxJQUFJLEVBQUU4RCxNQUFNLENBQUMsQ0FDeEI5SixJQUFJLENBQUMsVUFBQ2lLLEdBQUcsRUFBSyxDQUVmLENBQUMsQ0FBQyxTQUFNLENBQUMsVUFBQ0MsR0FBRyxFQUFLO01BQ2xCQyxLQUFLLENBQUMscURBQXFELENBQUM7TUFDNUR6RCxPQUFPLENBQUMwRCxLQUFLLENBQUNGLEdBQUcsQ0FBQztJQUN0QixDQUFDLENBQUM7SUFFRkcsc0JBQXNCLENBQUMsQ0FBQztFQUU1QixDQUFDO0VBQ0QsU0FBU0Esc0JBQXNCQSxDQUFBLEVBQUU7SUFFN0IsSUFBSUMsWUFBWSxHQUFHbEcsUUFBUSxDQUFDZ0UsZ0JBQWdCLENBQUMsd0JBQXdCLENBQUM7SUFDdEUsSUFBSW1DLFVBQVUsR0FBRyxDQUFDO0lBQ2xCLElBQUlDLGVBQWUsR0FBRyxDQUFDO0lBQ3ZCLElBQUlDLGFBQWEsR0FBR3JHLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDaEgsS0FBSztJQUNsRSxJQUFJcU4sT0FBTyxHQUFHLEtBQUs7SUFDbkJKLFlBQVksQ0FBQzdLLE9BQU8sQ0FBQyxVQUFVa0wsV0FBVyxFQUFDO01BRXZDLElBQUl6RyxFQUFFLEdBQUd5RyxXQUFXLENBQUN6RyxFQUFFO01BQ3ZCLElBQUl5RixLQUFLLEdBQUd6RixFQUFFLENBQUMwRixLQUFLLENBQUMsR0FBRyxDQUFDO01BQ3pCLElBQUlDLFNBQVMsR0FBR0YsS0FBSyxDQUFDakksTUFBTTtNQUM1QixJQUFJc0QsR0FBRyxHQUFHMkUsS0FBSyxDQUFDRSxTQUFTLEdBQUMsQ0FBQyxDQUFDO01BQzVCLElBQUl0QyxZQUFZLEdBQUduRCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxlQUFlLEdBQUNXLEdBQUcsQ0FBQyxDQUFDM0gsS0FBSztNQUNyRSxJQUFJdU4sU0FBUyxHQUFHLENBQUM7TUFDakIsSUFBSUMsU0FBUyxHQUFHLENBQUNGLFdBQVcsQ0FBQ3ROLEtBQUs7TUFDbEMsSUFBSXFMLEdBQUcsR0FBR3RFLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDaEgsS0FBSztNQUM5QyxJQUFJeU4sbUJBQW1CLEdBQUcxRyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxlQUFlLEdBQUNXLEdBQUcsQ0FBQztNQUN0RSxJQUFJK0YsWUFBWSxHQUFHLEVBQUU7TUFDckIsSUFBR0QsbUJBQW1CLEVBQUM7UUFDbkJDLFlBQVksR0FBR0QsbUJBQW1CLENBQUN6TixLQUFLO01BQzVDO01BR0EsSUFBRzBOLFlBQVksS0FBS3ZDLFNBQVMsSUFBSXVDLFlBQVksS0FBSyxJQUFJLEVBQUM7UUFDbkRBLFlBQVksR0FBRyxFQUFFO01BQ3JCO01BR0EsSUFBR3JDLEdBQUcsS0FBSyxJQUFJLEVBQUM7UUFDWixJQUFHdEUsUUFBUSxDQUFDQyxjQUFjLENBQUMsU0FBUyxHQUFDVyxHQUFHLENBQUMsQ0FBQ3VFLE9BQU8sS0FBSyxJQUFJLEVBQUM7VUFDdkRxQixTQUFTLEdBQUdqSCxjQUFjO1FBQzlCO01BQ0osQ0FBQyxNQUFJO1FBQ0QsSUFBR1MsUUFBUSxDQUFDQyxjQUFjLENBQUMsU0FBUyxHQUFDVyxHQUFHLENBQUMsQ0FBQ3VFLE9BQU8sS0FBSyxJQUFJLEVBQUM7VUFDdkRxQixTQUFTLEdBQUdsSCxhQUFhO1VBQ3pCZ0gsT0FBTyxHQUFHLElBQUk7UUFDbEI7TUFDSjtNQUVBRixlQUFlLEdBQUdBLGVBQWUsR0FBSSxDQUFDakQsWUFBWSxJQUFLLENBQUNzRCxTQUFTLEdBQUNELFNBQVMsQ0FBRTtNQUU3RSxJQUFHRyxZQUFZLEtBQUssYUFBYSxFQUFDO1FBQzlCUixVQUFVLEdBQUdBLFVBQVUsR0FBSSxDQUFDaEQsWUFBWSxJQUFJLENBQUNzRCxTQUFTLEdBQUNELFNBQVMsQ0FBRTtNQUN0RTtJQUVKLENBQUMsQ0FBQztJQUVGLElBQUcsQ0FBQ0wsVUFBVSxHQUFHLENBQUNFLGFBQWEsRUFBQztNQUM1QixJQUFJTyxVQUFVLEdBQUk1RyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQztNQUM5RDJHLFVBQVUsQ0FBQ0MsU0FBUyxHQUFHLG1CQUFtQixHQUFDVixVQUFVLENBQUMxQixPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUUsR0FBRyxHQUFFNkIsT0FBTyxHQUFDLHlHQUF5RztNQUN4TE0sVUFBVSxDQUFDRSxLQUFLLENBQUNDLE9BQU8sR0FBRyxPQUFPO0lBQ3RDLENBQUMsTUFBSTtNQUNEL0csUUFBUSxDQUFDQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQzZHLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07SUFDdkU7SUFDQS9HLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFFaEgsS0FBSyxHQUFHa04sVUFBVSxDQUFDMUIsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNwRXpFLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUNoSCxLQUFLLEdBQUdtTixlQUFlLENBQUMzQixPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQ2pGO0VBQ0EsU0FBVXBELG1CQUFtQkEsQ0FBQ2pILElBQUksRUFBQzRNLFFBQVEsRUFBQ3BHLEdBQUcsRUFBQ3lFLFVBQVUsRUFBQztJQUN2RCxJQUFJSCxPQUFPLEdBQUdsRixRQUFRLENBQUNhLGFBQWEsQ0FBQyxPQUFPLENBQUM7SUFDN0NxRSxPQUFPLENBQUM5SyxJQUFJLEdBQUdBLElBQUk7SUFDbkI4SyxPQUFPLENBQUN4SCxJQUFJLEdBQUdzSixRQUFRLEdBQUMsSUFBSTtJQUM1QjlCLE9BQU8sQ0FBQ3BGLEVBQUUsR0FBR2tILFFBQVEsR0FBQyxHQUFHLEdBQUNwRyxHQUFHO0lBQzdCc0UsT0FBTyxDQUFDak0sS0FBSyxHQUFHLEVBQUU7SUFDbEJpTSxPQUFPLENBQUMvRCxZQUFZLENBQUMsa0JBQWtCLEVBQUNrRSxVQUFVLENBQUM7SUFDbkRILE9BQU8sQ0FBQ3RGLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFXO01BQzFDK0UsY0FBYyxDQUFDTyxPQUFPLENBQUM7SUFDM0IsQ0FBQyxDQUFDO0lBRUYsT0FBT0EsT0FBTztFQUVsQjtFQUNBLFNBQVN6QixpQkFBaUJBLENBQUM3QyxHQUFHLEVBQUM7SUFFM0IsSUFBSXFHLE1BQU0sR0FBSWpILFFBQVEsQ0FBQ2EsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUM5Q29HLE1BQU0sQ0FBQ25ILEVBQUUsR0FBRyxlQUFlLEdBQUNjLEdBQUc7SUFDL0JxRyxNQUFNLENBQUN2SixJQUFJLEdBQUcsZUFBZSxHQUFDa0QsR0FBRztJQUNqQ3FHLE1BQU0sQ0FBQzlGLFlBQVksQ0FBQyxrQkFBa0IsRUFBQyxlQUFlLENBQUM7SUFDdkQ4RixNQUFNLENBQUN0RixTQUFTLEdBQUcsY0FBYztJQUVqQyxJQUFJdUYsTUFBTSxHQUFHbEgsUUFBUSxDQUFDYSxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQzdDcUcsTUFBTSxDQUFDak8sS0FBSyxHQUFHLEVBQUU7SUFDakJpTyxNQUFNLENBQUNDLElBQUksR0FBRSxRQUFRO0lBQ3JCRixNQUFNLENBQUMzRCxXQUFXLENBQUM0RCxNQUFNLENBQUM7SUFDMUIsSUFBSUUsVUFBVTtJQUVWQSxVQUFVO01BQUEsSUFBQUMsS0FBQSxHQUFBdEksaUJBQUEsZUFBQXhHLG1CQUFBLEdBQUFvRixJQUFBLENBQUcsU0FBQTJKLFNBQUE7UUFBQSxJQUFBckYsUUFBQTtRQUFBLE9BQUExSixtQkFBQSxHQUFBdUIsSUFBQSxVQUFBeU4sVUFBQUMsU0FBQTtVQUFBLGtCQUFBQSxTQUFBLENBQUFwSixJQUFBLEdBQUFvSixTQUFBLENBQUEvSyxJQUFBO1lBQUE7Y0FBQStLLFNBQUEsQ0FBQXBKLElBQUE7Y0FBQW9KLFNBQUEsQ0FBQS9LLElBQUE7Y0FBQSxPQUVrQitDLEtBQUssQ0FBQ2lJLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQztZQUFBO2NBQW5EeEYsUUFBUSxHQUFBdUYsU0FBQSxDQUFBckwsSUFBQTtjQUFBLE9BQUFxTCxTQUFBLENBQUFsTCxNQUFBLFdBQ1AyRixRQUFRLENBQUNMLElBQUk7WUFBQTtjQUFBNEYsU0FBQSxDQUFBcEosSUFBQTtjQUFBb0osU0FBQSxDQUFBbkYsRUFBQSxHQUFBbUYsU0FBQTtjQUVwQjtjQUNBbEYsT0FBTyxDQUFDQyxHQUFHLENBQUFpRixTQUFBLENBQUFuRixFQUFNLENBQUM7WUFBQztZQUFBO2NBQUEsT0FBQW1GLFNBQUEsQ0FBQWpKLElBQUE7VUFBQTtRQUFBLEdBQUErSSxRQUFBO01BQUEsQ0FFMUI7TUFBQSxnQkFSREYsVUFBVUEsQ0FBQTtRQUFBLE9BQUFDLEtBQUEsQ0FBQXBJLEtBQUEsT0FBQUQsU0FBQTtNQUFBO0lBQUEsR0FRVDs7SUFFRDtJQUNBb0ksVUFBVSxDQUFDLENBQUMsQ0FBQ3hMLElBQUksQ0FBQyxVQUFDZ0csSUFBSSxFQUFLO01BQ3hCO01BQ0MsS0FBSSxJQUFJMUksQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHMEksSUFBSSxDQUFDdEUsTUFBTSxFQUFFcEUsQ0FBQyxFQUFFLEVBQUM7UUFDakMsSUFBSWdPLE9BQU0sR0FBR2xILFFBQVEsQ0FBQ2EsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUM3Q3FHLE9BQU0sQ0FBQ2pPLEtBQUssR0FBRzJJLElBQUksQ0FBQzFJLENBQUMsQ0FBQyxDQUFDRCxLQUFLO1FBQzVCaU8sT0FBTSxDQUFDQyxJQUFJLEdBQUV2RixJQUFJLENBQUMxSSxDQUFDLENBQUMsQ0FBQ3dPLFFBQVE7UUFDN0JULE1BQU0sQ0FBQzNELFdBQVcsQ0FBQzRELE9BQU0sQ0FBQztNQUM3QjtJQUNMLENBQUMsQ0FBQztJQUVORCxNQUFNLENBQUNySCxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBVztNQUN6QytFLGNBQWMsQ0FBQ3NDLE1BQU0sQ0FBQztJQUMxQixDQUFDLENBQUM7SUFFRixPQUFPQSxNQUFNO0VBRWpCO0VBQ0EsU0FBU25ELGVBQWVBLENBQUEsRUFBRTtJQUN0QixJQUFJNkQsYUFBYSxHQUFHM0gsUUFBUSxDQUFDZ0UsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO0lBQzlEMkQsYUFBYSxDQUFDdE0sT0FBTyxDQUFDLFVBQVV1TSxZQUFZLEVBQUU7TUFFMUMsSUFBSXJDLEtBQUssR0FBR3FDLFlBQVksQ0FBQzlILEVBQUUsQ0FBQzBGLEtBQUssQ0FBQyxHQUFHLENBQUM7TUFDdEMsSUFBSWxCLEdBQUcsR0FBR2lCLEtBQUssQ0FBQyxDQUFDLENBQUM7TUFDbEIsSUFBSTNFLEdBQUcsR0FBRzJFLEtBQUssQ0FBQ0EsS0FBSyxDQUFDakksTUFBTSxHQUFHLENBQUMsQ0FBQztNQUNqQyxJQUFJdUssV0FBVyxHQUFHRCxZQUFZLENBQUN4TixJQUFJO01BQ25DLElBQUkwTixVQUFVLEdBQUdGLFlBQVksQ0FBQ0csT0FBTyxDQUFDQyxXQUFXLENBQUMsQ0FBQztNQUVuRCxJQUFJQyxVQUFVO01BRWQsSUFBSUosV0FBVyxLQUFLLE9BQU8sSUFBSXZELEdBQUcsS0FBSyxNQUFNLEVBQUU7UUFDM0MyRCxVQUFVLEdBQUdqRixXQUFXLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUVwQyxHQUFHLEVBQUUsSUFBSSxDQUFDO01BQ2hFLENBQUMsTUFBTSxJQUFJaUgsV0FBVyxLQUFLLE9BQU8sSUFBSXZELEdBQUcsS0FBSyxJQUFJLEVBQUU7UUFDaEQyRCxVQUFVLEdBQUdqRixXQUFXLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUVwQyxHQUFHLENBQUM7TUFDekQsQ0FBQyxNQUFNLElBQUlrSCxVQUFVLEtBQUssT0FBTyxJQUFJeEQsR0FBRyxLQUFLLE1BQU0sRUFBRTtRQUNqRDJELFVBQVUsR0FBR2hGLFdBQVcsQ0FBQyxJQUFJLEVBQUUsU0FBUyxHQUFHckMsR0FBRyxFQUFFLElBQUksRUFBRUEsR0FBRyxDQUFDO01BQzlELENBQUMsTUFBTSxJQUFJa0gsVUFBVSxLQUFLLE9BQU8sSUFBSXhELEdBQUcsS0FBSyxJQUFJLEVBQUU7UUFDL0MyRCxVQUFVLEdBQUdoRixXQUFXLENBQUMsS0FBSyxFQUFFLFVBQVUsR0FBR3JDLEdBQUcsRUFBRSxLQUFLLEVBQUVBLEdBQUcsQ0FBQztNQUNqRTtNQUVBLElBQUlxSCxVQUFVLEVBQUU7UUFDWkwsWUFBWSxDQUFDTSxhQUFhLENBQUNDLFlBQVksQ0FBQ0YsVUFBVSxFQUFFTCxZQUFZLENBQUM7TUFDckU7SUFDSixDQUFDLENBQUM7RUFFTjtFQUNBLFNBQVMvRCxlQUFlQSxDQUFBLEVBQUU7SUFDdEIsSUFBSThELGFBQWEsR0FBRzNILFFBQVEsQ0FBQ2dFLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztJQUMxRDJELGFBQWEsQ0FBQ3RNLE9BQU8sQ0FBQyxVQUFVdU0sWUFBWSxFQUFFO01BRTFDLElBQUlyQyxLQUFLLEdBQUdxQyxZQUFZLENBQUM5SCxFQUFFLENBQUMwRixLQUFLLENBQUMsR0FBRyxDQUFDO01BQ3RDLElBQUlsQixHQUFHLEdBQUdpQixLQUFLLENBQUMsQ0FBQyxDQUFDO01BQ2xCLElBQUkzRSxHQUFHLEdBQUcyRSxLQUFLLENBQUNBLEtBQUssQ0FBQ2pJLE1BQU0sR0FBRyxDQUFDLENBQUM7TUFDakMsSUFBSXVLLFdBQVcsR0FBR0QsWUFBWSxDQUFDeE4sSUFBSTtNQUNuQyxJQUFJME4sVUFBVSxHQUFHRixZQUFZLENBQUNHLE9BQU8sQ0FBQ0MsV0FBVyxDQUFDLENBQUM7TUFDbkQsSUFBSUMsVUFBVTtNQUVkLElBQUlKLFdBQVcsS0FBSyxPQUFPLElBQUl2RCxHQUFHLEtBQUssSUFBSSxFQUFFO1FBQ3pDMkQsVUFBVSxHQUFHakYsV0FBVyxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFcEMsR0FBRyxDQUFDO01BQzlELENBQUMsTUFBTSxJQUFJaUgsV0FBVyxLQUFLLE9BQU8sSUFBSXZELEdBQUcsS0FBSyxLQUFLLEVBQUU7UUFDakQyRCxVQUFVLEdBQUdqRixXQUFXLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUVwQyxHQUFHLENBQUM7TUFDekQsQ0FBQyxNQUFNLElBQUlrSCxVQUFVLEtBQUssT0FBTyxJQUFJeEQsR0FBRyxLQUFLLElBQUksRUFBRTtRQUMvQzJELFVBQVUsR0FBR2hGLFdBQVcsQ0FBQyxPQUFPLEVBQUUsV0FBVyxHQUFHckMsR0FBRyxFQUFFLE1BQU0sRUFBRUEsR0FBRyxDQUFDO01BQ3JFLENBQUMsTUFBTSxJQUFJa0gsVUFBVSxLQUFLLE9BQU8sSUFBSXhELEdBQUcsS0FBSyxLQUFLLEVBQUU7UUFDaEQyRCxVQUFVLEdBQUdoRixXQUFXLENBQUMsSUFBSSxFQUFFLFNBQVMsR0FBR3JDLEdBQUcsRUFBRSxJQUFJLEVBQUVBLEdBQUcsQ0FBQztNQUM5RDtNQUVBLElBQUlxSCxVQUFVLEVBQUU7UUFDWkwsWUFBWSxDQUFDTSxhQUFhLENBQUNDLFlBQVksQ0FBQ0YsVUFBVSxFQUFFTCxZQUFZLENBQUM7TUFDckU7SUFDSixDQUFDLENBQUM7RUFDTjtFQUNBLFNBQVM1RSxXQUFXQSxDQUFDb0YsY0FBYyxFQUFFQyxLQUFLLEVBQUUvRCxHQUFHLEVBQUUxRCxHQUFHLEVBQUU7SUFFbEQsSUFBSTBILEtBQUssR0FBR3RJLFFBQVEsQ0FBQ2EsYUFBYSxDQUFDLE9BQU8sQ0FBQztJQUMzQ3lILEtBQUssQ0FBQzNHLFNBQVMsR0FBRyxrQkFBa0IsSUFBSTJDLEdBQUcsS0FBSyxNQUFNLElBQUlBLEdBQUcsS0FBSyxJQUFJLEdBQUcsZUFBZSxHQUFHLFdBQVcsQ0FBQztJQUN2R2dFLEtBQUssQ0FBQ2xPLElBQUksR0FBRyxPQUFPO0lBQ3BCa08sS0FBSyxDQUFDNUssSUFBSSxHQUFHLE1BQU0sR0FBR2tELEdBQUcsR0FBRyxJQUFJO0lBQ2hDMEgsS0FBSyxDQUFDeEksRUFBRSxHQUFHLE1BQU0sR0FBR3dFLEdBQUcsR0FBRyxHQUFHLEdBQUcxRCxHQUFHO0lBQ25DMEgsS0FBSyxDQUFDbkgsWUFBWSxDQUFDLGtCQUFrQixFQUFFaUgsY0FBYyxDQUFDO0lBRXRELElBQUc5RCxHQUFHLEtBQUssTUFBTSxJQUFJQSxHQUFHLEtBQUssSUFBSSxFQUFDO01BQzlCZ0UsS0FBSyxDQUFDbkQsT0FBTyxHQUFHLElBQUk7SUFDeEI7SUFDQW1ELEtBQUssQ0FBQzFJLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFXO01BQ3hDZ0Ysa0JBQWtCLENBQUNoRSxHQUFHLENBQUM7SUFDM0IsQ0FBQyxDQUFDO0lBQ0YsT0FBTzBILEtBQUs7RUFDaEI7RUFDQSxTQUFTckYsV0FBV0EsQ0FBQ3NGLFNBQVMsRUFBRUMsT0FBTyxFQUFFbEUsR0FBRyxFQUFFMUQsR0FBRyxFQUFFO0lBRS9DLElBQUl5SCxLQUFLLEdBQUdySSxRQUFRLENBQUNhLGFBQWEsQ0FBQyxPQUFPLENBQUM7SUFDM0N3SCxLQUFLLENBQUMxRyxTQUFTLEdBQUcsa0JBQWtCLElBQUkyQyxHQUFHLEtBQUssTUFBTSxJQUFJQSxHQUFHLEtBQUssSUFBSSxHQUFHLGVBQWUsR0FBRyxXQUFXLENBQUM7SUFDdkcrRCxLQUFLLENBQUNHLE9BQU8sR0FBR0EsT0FBTztJQUN2QkgsS0FBSyxDQUFDckgsU0FBUyxHQUFHdUgsU0FBUztJQUMzQkYsS0FBSyxDQUFDdkksRUFBRSxHQUFHLE1BQU0sR0FBR3dFLEdBQUcsR0FBRyxTQUFTLEdBQUcxRCxHQUFHO0lBQ3pDLE9BQU95SCxLQUFLO0VBQ2hCO0VBRUEsSUFBSSxDQUFDMUksTUFBTSxDQUFDOEksVUFBVSxHQUFHLFNBQVNBLFVBQVVBLENBQUN2RCxPQUFPLEVBQUV4RSxNQUFNLEVBQUM7SUFFekQsSUFBSTJFLFVBQVUsR0FBR0gsT0FBTyxDQUFDSSxZQUFZLENBQUMsa0JBQWtCLENBQUM7SUFDekQsSUFBSXJNLEtBQUssR0FBR2lNLE9BQU8sQ0FBQ2pNLEtBQUs7SUFDekIsSUFBSTRJLEdBQUcsR0FBRyxhQUFhLEdBQUNuQixNQUFNO0lBRTlCLElBQUlrQixJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2JBLElBQUksQ0FBQ3lELFVBQVUsQ0FBQyxHQUFHcE0sS0FBSztJQUV4QnVHLEtBQUssQ0FBQzRDLElBQUksQ0FBQ1AsR0FBRyxFQUFFRCxJQUFJLEVBQUVsQixNQUFNLENBQUMsQ0FDeEI5RSxJQUFJLENBQUMsVUFBQ2lLLEdBQUcsRUFBSzs7TUFFWDtJQUFBLENBRUgsQ0FBQyxTQUFNLENBQUMsVUFBQ0MsR0FBRyxFQUFLO01BRWxCQyxLQUFLLENBQUMsZ0RBQWdELENBQUM7SUFFM0QsQ0FBQyxDQUFDO0lBQ0YsSUFBR1YsVUFBVSxLQUFLLE1BQU0sSUFBSUEsVUFBVSxLQUFLLFlBQVksRUFBQztNQUNwRHFELFFBQVEsQ0FBQ0MsTUFBTSxDQUFDLENBQUM7SUFDckI7RUFFSixDQUFDO0VBR0QsSUFBTUMsT0FBTyxHQUFHNUksUUFBUSxDQUFDZ0UsZ0JBQWdCLENBQUMsMEJBQTBCLENBQUM7RUFFckU0RSxPQUFPLENBQUN2TixPQUFPLENBQUMsVUFBQXdOLE1BQU0sRUFBSTtJQUN0QkEsTUFBTSxDQUFDakosZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07TUFDbkMsSUFBTWtKLE9BQU8sR0FBR0QsTUFBTSxDQUFDRSxrQkFBa0I7TUFDekMsSUFBTUMsS0FBSyxHQUFHSCxNQUFNLENBQUNJLGFBQWEsQ0FBQyxhQUFhLENBQUM7TUFDakQsSUFBSUgsT0FBTyxDQUFDdkgsU0FBUyxDQUFDMkgsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ3BDSixPQUFPLENBQUN2SCxTQUFTLENBQUM0SCxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2hDTCxPQUFPLENBQUNoQyxLQUFLLENBQUNzQyxTQUFTLEdBQUcsSUFBSTtRQUM5Qk4sT0FBTyxDQUFDaEMsS0FBSyxDQUFDdUMsT0FBTyxHQUFHLFFBQVE7UUFDaENMLEtBQUssQ0FBQ2hJLFNBQVMsR0FBRyxRQUFRO01BRzlCLENBQUMsTUFBTTtRQUNIOEgsT0FBTyxDQUFDdkgsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQzdCc0gsT0FBTyxDQUFDaEMsS0FBSyxDQUFDc0MsU0FBUyxHQUFHTixPQUFPLENBQUNRLFlBQVksR0FBRyxJQUFJO1FBQ3JEUixPQUFPLENBQUNoQyxLQUFLLENBQUN1QyxPQUFPLEdBQUcsTUFBTTtRQUM5QkwsS0FBSyxDQUFDaEksU0FBUyxHQUFHLFFBQVE7TUFDOUI7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7RUFFRixJQUFJdUksTUFBTSxHQUFHdkosUUFBUSxDQUFDZ0UsZ0JBQWdCLENBQUMsMEJBQTBCLENBQUM7RUFDbEUsSUFBSXdGLFlBQVksR0FBR3hKLFFBQVEsQ0FBQ2dFLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztFQUV0RHVGLE1BQU0sQ0FBQ2xPLE9BQU8sQ0FBQyxVQUFTb08sS0FBSyxFQUFFO0lBQzNCQSxLQUFLLENBQUNDLFFBQVEsR0FBRyxJQUFJO0VBQ3pCLENBQUMsQ0FBQztFQUNGO0VBQ0E7RUFDQTtFQUNBMUosUUFBUSxDQUFDQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUNMLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFZO0lBRTNFLElBQUkrSixTQUFTLEdBQUczSixRQUFRLENBQUNDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQztJQUM3RCxJQUFJMkosV0FBVyxHQUFHLElBQUlsSyxTQUFTLENBQUNOLEtBQUssQ0FBQ3VLLFNBQVMsQ0FBQztJQUNoREMsV0FBVyxDQUFDQyxJQUFJLENBQUMsQ0FBQztFQUN0QixDQUFDLENBQUM7RUFFRjdKLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDTCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBWTtJQUUxRSxJQUFJa0ssU0FBUyxHQUFHOUosUUFBUSxDQUFDQyxjQUFjLENBQUMsb0JBQW9CLENBQUM7SUFDN0QsSUFBSVMsTUFBTSxHQUFHVixRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQ2hILEtBQUs7SUFDcEQsSUFBSTRJLEdBQUcsR0FBRyx1QkFBdUIsR0FBQ25CLE1BQU07SUFFeENsQixLQUFLLENBQUNpSSxHQUFHLENBQUM1RixHQUFHLENBQUMsQ0FDYmpHLElBQUksQ0FBQyxVQUFDaUssR0FBRyxFQUFLO01BQ1g3RixRQUFRLENBQUNDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQ2hILEtBQUssR0FBRzRNLEdBQUcsQ0FBQ2pFLElBQUksQ0FBQ0EsSUFBSTtNQUMxRG1FLEtBQUssQ0FBQyxVQUFVLEdBQUVnRSxJQUFJLENBQUNDLFNBQVMsQ0FBQ25FLEdBQUcsQ0FBQ2pFLElBQUksQ0FBQ0EsSUFBSSxDQUFDLENBQUM7TUFDaERxSSxVQUFVLENBQUNGLElBQUksQ0FBQ0MsU0FBUyxDQUFDbkUsR0FBRyxDQUFDakUsSUFBSSxDQUFDQSxJQUFJLENBQUMsQ0FBQztJQUU3QyxDQUFDLENBQUM7RUFFTixDQUFDLENBQUM7RUFFRixTQUFTcUksVUFBVUEsQ0FBQ0MsU0FBUyxFQUFDO0lBQzFCLElBQU1DLEdBQUcsR0FBR25LLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFdBQVcsQ0FBQztJQUNoRDtJQUNBOEYsS0FBSyxDQUFDLFlBQVksR0FBRW1FLFNBQVMsQ0FBQztJQUU5QixJQUFJRSxRQUFRLEdBQUdwSyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQ2hILEtBQUs7SUFFeEQsSUFBTW9SLE9BQU8sR0FBRyxJQUFJaEwscURBQUssQ0FBQzhLLEdBQUcsRUFBRTtNQUMzQi9QLElBQUksRUFBRSxVQUFVO01BQUU7TUFDbEJ3SCxJQUFJLEVBQUU7UUFDRjBJLE1BQU0sRUFBRUosU0FBUyxDQUFDSSxNQUFNO1FBQ3hCQyxRQUFRLEVBQUUsQ0FBQztVQUNQO1VBQ0EzSSxJQUFJLEVBQUVzSSxTQUFTLENBQUN0SSxJQUFJO1VBQ3BCNEksZUFBZSxFQUFFTixTQUFTLENBQUNPLE1BQU07VUFDakNDLFdBQVcsRUFBRSxDQUFDO1VBQ2RDLFdBQVcsRUFBRTtRQUNqQixDQUFDO01BQ0wsQ0FBQztNQUNEQyxPQUFPLEVBQUU7UUFDTEMsTUFBTSxFQUFFLEVBQUU7UUFBQztRQUNYQyxNQUFNLEVBQUUsR0FBRztRQUNYQyxNQUFNLEVBQUU7VUFDSmhFLE9BQU8sRUFBRTtRQUNiLENBQUM7UUFDRGlFLE9BQU8sRUFBRTtVQUNMQyxVQUFVLEVBQUUsS0FBSyxDQUFDO1FBQ3BCLENBQUM7UUFDSEMsU0FBUyxFQUFDO1VBQ05DLGFBQWEsRUFBQyxJQUFJO1VBQ2xCQyxZQUFZLEVBQUM7UUFDakI7TUFDSjtJQUNKLENBQUMsQ0FBQztJQUVGLElBQUl0QixTQUFTLEdBQUcsSUFBSTFLLDRDQUFLLENBQUNZLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDeEU7SUFDQSxJQUFJa0csVUFBVSxHQUFHbkcsUUFBUSxDQUFDQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUNoSCxLQUFLO0lBQzVELElBQUltTixlQUFlLEdBQUdwRyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDaEgsS0FBSztJQUN0RTtJQUNBK0csUUFBUSxDQUFDQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQ3NJLFNBQVMsR0FBRyxZQUFZO0lBQ25FdkksUUFBUSxDQUFDQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQ3NJLFNBQVMsR0FBRyxpQkFBaUI7SUFDekU7SUFDQXVCLFNBQVMsQ0FBQ0QsSUFBSSxDQUFDLENBQUM7RUFDcEI7QUFJSixDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQ25vQndCO0FBQzFCbEssTUFBTSxDQUFDSCxLQUFLLEdBQUdBLDZDQUFLO0FBRXBCRyxNQUFNLENBQUNILEtBQUssQ0FBQzZMLFFBQVEsQ0FBQ3pDLE9BQU8sQ0FBQzBDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLGdCQUFnQjs7Ozs7Ozs7Ozs7QUNIM0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3Nhc3MvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgJ0Bwb3BwZXJqcy9jb3JlJztcbi8vIGltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJzsgICAvLyBJbXBvcnQgQm9vdHN0cmFwIENTU1xuaW1wb3J0ICdib290c3RyYXAnOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEltcG9ydCBCb290c3RyYXAgSlNcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnYm9vdHN0cmFwJzsgICAgICAgICAgICAgICAvLyBJbXBvcnQgdGhlIE1vZGFsIGNsYXNzXG5pbXBvcnQgQ2hhcnQgZnJvbSAnY2hhcnQuanMvYXV0bydcblxuY29uc3QgZ3JhbUNvbnZlcnRlciA9IDEwMDA7XG5jb25zdCBvdW5jZUNvbnZlcnRlciA9IDE2O1xuY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuY29uc3QgYm9vdHN0cmFwID0gcmVxdWlyZSgnLi9ib290c3RyYXAnKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGUpIHtcblxuICAgIHRoaXMud2luZG93LnNob3dQYXNzd29yZCA9IGZ1bmN0aW9uIHNob3dQYXNzd29yZChpZCl7XG4gICAgICAgICAgICBsZXQgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgIGlmIChwYXNzd29yZC50eXBlID09PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgICAgICAgICAgICBwYXNzd29yZC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXNzd29yZC50eXBlID0gXCJwYXNzd29yZFwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMud2luZG93LmFkZExpc3RJdGVtID0gZnVuY3Rpb24gYWRkTGlzdEl0ZW0oKXtcblxuICAgICAgICBsZXQgbnVtYmVyT2ZJdGVtc1RvQWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpbmVzVG9BZGQnKTtcbiAgICAgICAgbGV0IGxpbmVzVG9BZGQgPSAxO1xuICAgICAgICBpZigrbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlIDwgMSl7XG4gICAgICAgICAgICBudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPSBsaW5lc1RvQWRkO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGxpbmVzVG9BZGQgPSArbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxpbmVzVG9BZGQ7IGkrKyl7XG5cblxuICAgICAgICAgICAgbGV0IGxpc3RVT00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW9tJykudmFsdWU7XG4gICAgICAgICAgICBsZXQgZmluYWxJRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5hbC1pJyk7XG4gICAgICAgICAgICBsZXQgaXRlbVRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tdGFibGUtYm9keScpO1xuICAgICAgICAgICAgbGV0IHVzZXJJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VySWQnKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdElkJykudmFsdWU7XG4gICAgICAgICAgICBsZXQgZmluYWxJID0gZmluYWxJRWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgIGZpbmFsSUVsZW1lbnQudmFsdWUgPSArZmluYWxJICsgMTtcblxuICAgICAgICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIGNlbGxzIGFuZCBpbnB1dCBlbGVtZW50cy5cbiAgICAgICAgICAgIGxldCBjZWxsMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgICAgICAgICAgIGNlbGwwLnNjb3BlID0gJ3Jvdyc7XG4gICAgICAgICAgICBjZWxsMC5pbm5lckhUTUwgPSBmaW5hbEk7XG5cbiAgICAgICAgICAgIGxldCBjZWxsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcblxuICAgICAgICAgICAgbGV0IGNvdW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBjb3VudGVyLnR5cGUgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgY291bnRlci5uYW1lID0gXCJpZFtdXCI7XG4gICAgICAgICAgICBjb3VudGVyLmlkID0gJ2lkLScrZmluYWxJO1xuICAgICAgICAgICAgY291bnRlci52YWx1ZSA9ICduZXctJytmaW5hbEk7XG4gICAgICAgICAgICBjb3VudGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1jb2x1bW4tbmFtZScsJ2lkJyk7XG5cbiAgICAgICAgICAgIGxldCBpdGVtTmFtZSA9ICBjcmVhdGVMaXN0SXRlbUlucHV0KCd0ZXh0JywnaXRlbU5hbWUnLGZpbmFsSSwnaXRlbV9uYW1lJyk7XG4gICAgICAgICAgICBpdGVtTmFtZS5wbGFjZWhvbGRlciA9ICdJdGVtIE5hbWUnO1xuICAgICAgICAgICAgaXRlbU5hbWUuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJyk7XG5cbiAgICAgICAgICAgIGxldCBjZWxsNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICBjZWxsNi5pZCA9ICdidG4tdGQtJytmaW5hbEk7XG4gICAgICAgICAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgZGVsZXRlQnRuLmlkID0gJ2RlbGV0ZUJ0bi0nK2ZpbmFsSTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5jbGFzc05hbWUgPSAnYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbSAgcHktMic7XG4gICAgICAgICAgICBkZWxldGVCdG4uaW5uZXJIVE1MID0gJ3gnO1xuXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICAgICAgbGV0IHVybCA9ICcvbGlzdC1pdGVtJztcbiAgICAgICAgICAgIGRhdGFbJ2xpc3RfaWQnXSA9IGxpc3RJZDtcbiAgICAgICAgICAgIGRhdGFbJ3VzZXJfaWQnXSA9IHVzZXJJZDtcbiAgICAgICAgICAgIGRhdGFbJ2l0ZW1fbmFtZSddID0gJyc7XG4gICAgICAgICAgICBsZXQgdXBkYXRlSXRlbTtcbiAgICAgICAgICAgIHVwZGF0ZUl0ZW0gPSBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QodXJsLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlIGVycm9yXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBUbyB1c2UgdGhlIGZ1bmN0aW9uIGFuZCBoYW5kbGUgdGhlIHJlc3BvbnNlIGRhdGFcbiAgICAgICAgICAgIHVwZGF0ZUl0ZW0oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gRG8gc29tZXRoaW5nIHdpdGggdGhlIHJlc3BvbnNlIGRhdGFcbiAgICAgICAgICAgICAgICBjb3VudGVyLnZhbHVlID0gZGF0YS5uZXdJZDtcbiAgICAgICAgICAgICAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdocmVmJywgJy9kZXN0cm95LWxpc3QtaXRlbS8nK2RhdGEubmV3SWQpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCBjZWxsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGxldCBpdGVtV2VpZ2h0ID0gY3JlYXRlTGlzdEl0ZW1JbnB1dCgnbnVtYmVyJywnaXRlbVdlaWdodCcsZmluYWxJLCdpdGVtX3dlaWdodCcpO1xuICAgICAgICAgICAgaXRlbVdlaWdodC52YWx1ZSA9IDA7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LmNsYXNzTGlzdC5hZGQoJ2Zvci13ZWlnaHQnKTtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQuY2xhc3NMaXN0LmFkZCgnbnVtYmVyLWlucHV0Jyk7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpO1xuICAgICAgICAgICAgY2VsbDIuY2xhc3NMaXN0LmFkZCgnbnVtYmVyLWNvbCcpO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBsZXQgcmFkaW8xO1xuICAgICAgICAgICAgbGV0IHJhZGlvMjtcbiAgICAgICAgICAgIGxldCByYWRpb0xhYmVsMTtcbiAgICAgICAgICAgIGxldCByYWRpb0xhYmVsMjtcblxuICAgICAgICAgICAgaWYobGlzdFVPTSA9PT0gJ3VzJyl7XG5cbiAgICAgICAgICAgICAgICByYWRpbzEgPSBjcmVhdGVSYWRpbygnaW5fb3VuY2VzJywgJycsICdveicsIGZpbmFsSSk7XG4gICAgICAgICAgICAgICAgcmFkaW9MYWJlbDEgPSBjcmVhdGVMYWJlbCgnT1onLCAgJ3VvbS1vei0nK2ZpbmFsSSwgJ296JywgZmluYWxJKTtcbiAgICAgICAgICAgICAgICByYWRpbzIgPSBjcmVhdGVSYWRpbygnaW5fbGJzJywgJycsICdsYnMnLCBmaW5hbEkpO1xuICAgICAgICAgICAgICAgIHJhZGlvTGFiZWwyID0gY3JlYXRlTGFiZWwoJ0xCUycsICAndW9tLWxicy0nK2ZpbmFsSSwgJ2xicycsIGZpbmFsSSk7XG5cbiAgICAgICAgICAgIH1lbHNle1xuXG4gICAgICAgICAgICAgICAgcmFkaW8xID0gY3JlYXRlUmFkaW8oJ2luX2dyYW1zJywgJycsICdncmFtJywgZmluYWxJKTtcbiAgICAgICAgICAgICAgICByYWRpb0xhYmVsMSA9ICBjcmVhdGVMYWJlbCgnR3JhbXMnLCAgJ3VvbS1ncmFtLScrZmluYWxJLCAnZ3JhbScsIGZpbmFsSSk7XG4gICAgICAgICAgICAgICAgcmFkaW8yID0gIGNyZWF0ZVJhZGlvKCdpbl9raWxvcycsICcnLCAna2cnLCBmaW5hbEkpO1xuICAgICAgICAgICAgICAgIHJhZGlvTGFiZWwyID0gY3JlYXRlTGFiZWwoJ0tHJywgICd1b20ta2ctJytmaW5hbEksICdrZycsIGZpbmFsSSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBjZWxsNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGNlbGw0LmNsYXNzTGlzdC5hZGQoJ251bWJlci1jb2wnKTtcbiAgICAgICAgICAgIGxldCBwYWNrZWRBbW91bnQgPSBjcmVhdGVMaXN0SXRlbUlucHV0KCdudW1iZXInLCdwYWNrZWRBbW91bnQnLGZpbmFsSSwnYW1vdW50Jyk7XG4gICAgICAgICAgICBwYWNrZWRBbW91bnQudmFsdWUgPSAxO1xuXG4gICAgICAgICAgICBwYWNrZWRBbW91bnQuY2xhc3NMaXN0LmFkZCgnZm9yLXdlaWdodCcpO1xuICAgICAgICAgICAgcGFja2VkQW1vdW50LmNsYXNzTGlzdC5hZGQoJ251bWJlci1pbnB1dCcpO1xuICAgICAgICAgICAgcGFja2VkQW1vdW50LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBjZWxsNS5jbGFzc0xpc3QuYWRkKCdudW1iZXItY29sJyk7XG4gICAgICAgICAgICBsZXQgdG90YWxMaW5lV2VpZ2h0ID0gY3JlYXRlTGlzdEl0ZW1JbnB1dCgnbnVtYmVyJywndG90YWxMaW5lV2VpZ2h0JyxmaW5hbEksJ3RvdGFsX2xpbmVfd2VpZ2h0Jyk7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQudmFsdWUgPSAwO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LnNldEF0dHJpYnV0ZSgnZGF0YS1jb2x1bW4tbmFtZScsJ3RvdGFsX2xpbmVfd2VpZ2h0Jyk7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsdHJ1ZSk7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQuY2xhc3NMaXN0LmFkZCgnbnVtYmVyLWlucHV0Jyk7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJyk7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQuY2xhc3NMaXN0LmFkZCgnZm9yLXRvdGFsLWxpc3Qtd2VpZ2h0Jyk7XG5cbiAgICAgICAgICAgIC8vYXBwZW5kIGlucHV0cyB0byBjZWxscy5cbiAgICAgICAgICAgIGNlbGwxLmFwcGVuZENoaWxkKGNvdW50ZXIpO1xuICAgICAgICAgICAgY2VsbDEuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgICAgICAgICAgY2VsbDIuYXBwZW5kQ2hpbGQoaXRlbVdlaWdodCk7XG5cbiAgICAgICAgICAgIGxldCBzZWxlY3RDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgbGV0IGNhdGVnb3J5U2VsZWN0ID0gZ2V0Q2F0ZWdyb3lTZWxlY3QoZmluYWxJKTtcbiAgICAgICAgICAgIHNlbGVjdENlbGwuYXBwZW5kKGNhdGVnb3J5U2VsZWN0KTtcblxuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQocmFkaW8xKTtcbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHJhZGlvTGFiZWwxKTtcbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHJhZGlvMik7XG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChyYWRpb0xhYmVsMik7XG5cbiAgICAgICAgICAgIGNlbGw0LmFwcGVuZENoaWxkKHBhY2tlZEFtb3VudCk7XG4gICAgICAgICAgICBjZWxsNS5hcHBlbmRDaGlsZCh0b3RhbExpbmVXZWlnaHQpO1xuICAgICAgICAgICAgY2VsbDYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuXG4gICAgICAgICAgICAvLyBBcHBlbmQgY2VsbHMgdG8gdGhlIHJvdy5cbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsMCk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDEpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHNlbGVjdENlbGwpO1xuICAgICAgICAgICAgLy8gcm93LmFwcGVuZENoaWxkKGNlbGwzKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsMik7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDQpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGw1KTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsMyk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDYpO1xuXG5cbiAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgcm93IHRvIHRoZSB0YWJsZS5cbiAgICAgICAgICAgIGl0ZW1UYWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuXG4gICAgICAgICAgICAvL2FkZCBmdW5jdGlvbnMgdG8gY2FsY3VsYXRlIGFuZCBjb252ZXJ0IHRvdGFsIHdlaWdodC5cbiAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXJXZWlnaHRDYWxjKGZpbmFsSSk7XG4gICAgICAgIH1cbiAgICAgICAgbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlPTE7XG5cbiAgICB9XG5cbiAgICB0aGlzLndpbmRvdy51cGRhdGVVT00gPSBmdW5jdGlvbiB1cGRhdGVVT00odmFsdWUpIHtcbiAgICAgICAgaWYodmFsdWUgIT09ICd1cycpe1xuICAgICAgICAgICB1c1JhZGlvVG9NZXRyaWMoKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBtZXRyaWNSYWRpb1RvVXMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyV2VpZ2h0Q2FsYyhyb3cpe1xuICAgICAgICBsZXQgbmVlZGVkRm9yV2VpZ2h0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3Itd2VpZ2h0Jyk7XG4gICAgICAgIG5lZWRlZEZvcldlaWdodHMuZm9yRWFjaChmdW5jdGlvbiAobmVlZGVkRm9yV2VpZ2h0KXtcbiAgICAgICAgICAgIG5lZWRlZEZvcldlaWdodC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBnZXRMaW5lVG90YWxXZWlnaHQocm93KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgfVxuXG4gICAgIHRoaXMud2luZG93LmdldExpbmVUb3RhbFdlaWdodCA9IGZ1bmN0aW9uIGdldExpbmVUb3RhbFdlaWdodChyb3csY29udmVydCA9IGZhbHNlKXtcblxuICAgICAgICBsZXQgd2VpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1XZWlnaHQtJytyb3cpLnZhbHVlO1xuICAgICAgICBsZXQgcGFja2VkQW1vdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhY2tlZEFtb3VudC0nK3JvdykudmFsdWU7XG4gICAgICAgIGxldCB1b20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW9tJyk7XG4gICAgICAgIGxldCBsaW5lVG90YWxXZWlnaHRFbGVtZW50ID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbExpbmVXZWlnaHQtJytyb3cpO1xuXG4gICAgICAgIGxldCBsaW5lVG90YWwgPSAwO1xuICAgICAgICBsaW5lVG90YWwgPSArd2VpZ2h0ICogK3BhY2tlZEFtb3VudDtcbiAgICAgICAgbGluZVRvdGFsID0gbGluZVRvdGFsLnRvRml4ZWQoMikucmVwbGFjZSgvWy4sXTAwJC8sIFwiXCIpO1xuICAgICAgICBsaW5lVG90YWxXZWlnaHRFbGVtZW50LnZhbHVlID0gbGluZVRvdGFsO1xuXG4gICAgICAgIHVwZGF0ZUxpc3RJdGVtKGxpbmVUb3RhbFdlaWdodEVsZW1lbnQpO1xuXG5cbiAgICB9XG4gICAgdGhpcy53aW5kb3cuY29udmVydE1lYXN1cmVtZW50ID0gZnVuY3Rpb24gY29udmVydE1lYXN1cmVtZW50KHJvdywgY29udmVydCA9IGZhbHNlKXtcblxuICAgICAgICBsZXQgdW9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VvbScpLnZhbHVlO1xuICAgICAgICBsZXQgd2VpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1XZWlnaHQtJytyb3cpO1xuICAgICAgICBsZXQgcGFja2VkQW1vdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhY2tlZEFtb3VudC0nK3JvdykudmFsdWU7XG4gICAgICAgIGxldCB0b3RhbFdlaWdodCA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxMaW5lV2VpZ2h0LScrcm93KVxuICAgICAgICBsZXQgdG90YWxMaW5lV2VpZ2h0VmFsdWUgPSAwO1xuICAgICAgICBsZXQgd2VpZ2h0VmFsdWUgPSB3ZWlnaHQudmFsdWU7XG4gICAgICAgIGxldCBzbWFsbDtcbiAgICAgICAgbGV0IGxhcmdlO1xuICAgICAgICBsZXQgZWxlbWVudDtcblxuICAgICAgICBpZih1b20gPT09ICd1cycpe1xuICAgICAgICAgICAgc21hbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW9tLW96LScrcm93KTtcbiAgICAgICAgICAgIGxhcmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VvbS1sYnMtJytyb3cpO1xuICAgICAgICAgICAgaWYoc21hbGwuY2hlY2tlZCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgd2VpZ2h0VmFsdWUgPSArd2VpZ2h0VmFsdWUgKiAxNjtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gc21hbGw7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB3ZWlnaHRWYWx1ZSA9ICt3ZWlnaHRWYWx1ZSAvIDE2O1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBsYXJnZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc21hbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW9tLWdyYW0tJytyb3cpO1xuICAgICAgICAgICAgbGFyZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW9tLWtnLScrcm93KTtcblxuICAgICAgICAgICAgaWYoc21hbGwuY2hlY2tlZCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgd2VpZ2h0VmFsdWUgPSArd2VpZ2h0VmFsdWUgKiAxMDAwO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBzbWFsbDtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHdlaWdodFZhbHVlID0gK3dlaWdodFZhbHVlIC8xMDAwO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBsYXJnZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICB0b3RhbExpbmVXZWlnaHRWYWx1ZSA9ICt3ZWlnaHRWYWx1ZSAqICtwYWNrZWRBbW91bnQ7XG4gICAgICAgIHdlaWdodC52YWx1ZSA9IHdlaWdodFZhbHVlLnRvRml4ZWQoMikucmVwbGFjZSgvWy4sXTAwJC8sIFwiXCIpO1xuICAgICAgICB0b3RhbFdlaWdodC52YWx1ZSA9IHRvdGFsTGluZVdlaWdodFZhbHVlLnRvRml4ZWQoMikucmVwbGFjZSgvWy4sXTAwJC8sIFwiXCIpO1xuICAgICAgICB1cGRhdGVMaXN0SXRlbShlbGVtZW50KTtcbiAgICAgICAgdXBkYXRlTGlzdEl0ZW0od2VpZ2h0KTtcbiAgICAgICAgdXBkYXRlTGlzdEl0ZW0odG90YWxXZWlnaHQpO1xuXG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEJvb2xlYW5EYXRhKGNvbHVtbk5hbWUpe1xuXG4gICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgIGRhdGFbJ2luX291bmNlcyddID0gZmFsc2U7XG4gICAgICAgIGRhdGFbJ2luX2xicyddID0gZmFsc2U7XG4gICAgICAgIGRhdGFbJ2luX2dyYW1zJ10gPSBmYWxzZTtcbiAgICAgICAgZGF0YVsnaW5fa2lsb3MnXSA9IGZhbHNlO1xuICAgICAgICBzd2l0Y2goY29sdW1uTmFtZSl7XG4gICAgICAgICAgICBjYXNlICdpbl9vdW5jZXMnOlxuICAgICAgICAgICAgICAgIGRhdGFbJ2luX291bmNlcyddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2luX2xicyc6XG4gICAgICAgICAgICAgICAgZGF0YVsnaW5fbGJzJ10gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdpbl9ncmFtcyc6XG4gICAgICAgICAgICAgICAgZGF0YVsnaW5fZ3JhbXMnXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ2luX2tpbG9zJzpcbiAgICAgICAgICAgICAgICBkYXRhWydpbl9raWxvcyddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgdGhpcy53aW5kb3cudXBkYXRlTGlzdEl0ZW0gPSBmdW5jdGlvbiB1cGRhdGVMaXN0SXRlbShlbGVtZW50KXtcblxuICAgICAgICBsZXQgY29sdW1uTmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbHVtbi1uYW1lJyk7XG4gICAgICAgIGxldCB2YWx1ZSA9IGVsZW1lbnQudmFsdWU7XG4gICAgICAgIGxldCBpZCA9IGVsZW1lbnQuaWQ7XG4gICAgICAgIGxldCBpZEFyciA9IGlkLnNwbGl0KCctJyk7XG4gICAgICAgIGxldCBhcnJMZW5ndGggPSBpZEFyci5sZW5ndGhcbiAgICAgICAgbGV0IHJvdyA9IGlkQXJyW2Fyckxlbmd0aC0xXTtcbiAgICAgICAgbGV0IGl0ZW1JZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZC0nK3Jvdyk7XG4gICAgICAgIGxldCBpdGVtSWRWYWx1ZSA9IGl0ZW1JZC52YWx1ZTtcbiAgICAgICAgbGV0IGxpc3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0SWQnKS52YWx1ZTtcbiAgICAgICAgbGV0IHVybCA9ICcvbGlzdC1pdGVtLycraXRlbUlkVmFsdWU7XG4gICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgIGxldCB1c2VySWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcklkJykudmFsdWU7XG5cbiAgICAgICAgZGF0YVtjb2x1bW5OYW1lXSA9IHZhbHVlO1xuXG4gICAgICAgIGlmKGNvbHVtbk5hbWUuc3Vic3RyaW5nKDAsMykgPT09ICdpbl8nKXtcbiAgICAgICAgICAgIGRhdGEgPSBnZXRCb29sZWFuRGF0YShjb2x1bW5OYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbJ2xpc3RfaWQnXSA9IGxpc3RJZDtcbiAgICAgICAgZGF0YVsndXNlcl9pZCddID0gdXNlcklkO1xuICAgICAgICBkYXRhWydpZCddID0gaXRlbUlkVmFsdWU7XG5cbiAgICAgICAgYXhpb3MucG9zdCh1cmwsIGRhdGEsIGl0ZW1JZClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcblxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgYWxlcnQoJ0ZhaWxlZCB0byB1cGRhdGUgbGlzdCBpdGVtLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9KTtcblxuICAgICAgICB1cGRhdGVUb3RhbExpc3RXZWlnaHRzKCk7XG5cbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlVG90YWxMaXN0V2VpZ2h0cygpe1xuXG4gICAgICAgIGxldCB3ZWlnaHRzRm9yUFcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9yLXRvdGFsLWxpc3Qtd2VpZ2h0Jyk7XG4gICAgICAgIGxldCBiYXNlV2VpZ2h0ID0gMDtcbiAgICAgICAgbGV0IHRvdGFsUGFja1dlaWdodCA9IDA7XG4gICAgICAgIGxldCBtYXhQYWNrV2VpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21heFBhY2tXZWlnaHQnKS52YWx1ZTtcbiAgICAgICAgbGV0IHVvbVRleHQgPSAnTEJTJztcbiAgICAgICAgd2VpZ2h0c0ZvclBXLmZvckVhY2goZnVuY3Rpb24gKHdlaWdodEZvclBXKXtcblxuICAgICAgICAgICAgbGV0IGlkID0gd2VpZ2h0Rm9yUFcuaWQ7XG4gICAgICAgICAgICBsZXQgaWRBcnIgPSBpZC5zcGxpdCgnLScpO1xuICAgICAgICAgICAgbGV0IGFyckxlbmd0aCA9IGlkQXJyLmxlbmd0aFxuICAgICAgICAgICAgbGV0IHJvdyA9IGlkQXJyW2Fyckxlbmd0aC0xXTtcbiAgICAgICAgICAgIGxldCBwYWNrZWRBbW91bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFja2VkQW1vdW50LScrcm93KS52YWx1ZVxuICAgICAgICAgICAgbGV0IGNvbnZlcnRlciA9IDE7XG4gICAgICAgICAgICBsZXQgcm93V2VpZ2h0ID0gK3dlaWdodEZvclBXLnZhbHVlO1xuICAgICAgICAgICAgbGV0IHVvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1b20nKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBpdGVtQ2F0ZWdvcnlFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1DYXRlZ29yeS0nK3Jvdyk7XG4gICAgICAgICAgICBsZXQgaXRlbUNhdGVnb3J5ID0gJyc7XG4gICAgICAgICAgICBpZihpdGVtQ2F0ZWdvcnlFbGVtZW50KXtcbiAgICAgICAgICAgICAgICBpdGVtQ2F0ZWdvcnkgPSBpdGVtQ2F0ZWdvcnlFbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGlmKGl0ZW1DYXRlZ29yeSA9PT0gdW5kZWZpbmVkIHx8IGl0ZW1DYXRlZ29yeSA9PT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgaXRlbUNhdGVnb3J5ID0gJyc7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgaWYodW9tID09PSAndXMnKXtcbiAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW9tLW96LScrcm93KS5jaGVja2VkID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgY29udmVydGVyID0gb3VuY2VDb252ZXJ0ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VvbS1vei0nK3JvdykuY2hlY2tlZCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnRlciA9IGdyYW1Db252ZXJ0ZXI7XG4gICAgICAgICAgICAgICAgICAgIHVvbVRleHQgPSAnS0cnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdG90YWxQYWNrV2VpZ2h0ID0gdG90YWxQYWNrV2VpZ2h0ICsgKCtwYWNrZWRBbW91bnQgKiAgKCtyb3dXZWlnaHQvY29udmVydGVyKSk7XG5cbiAgICAgICAgICAgIGlmKGl0ZW1DYXRlZ29yeSAhPT0gJ2NvbnN1bWFibGVzJyl7XG4gICAgICAgICAgICAgICAgYmFzZVdlaWdodCA9IGJhc2VXZWlnaHQgKyAoK3BhY2tlZEFtb3VudCAqICgrcm93V2VpZ2h0L2NvbnZlcnRlcikpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKCtiYXNlV2VpZ2h0ID4gK21heFBhY2tXZWlnaHQpe1xuICAgICAgICAgICAgbGV0IGRpdkVsZW1lbnQgPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlaWdodFdhcm5pbmctZGl2Jyk7XG4gICAgICAgICAgICBkaXZFbGVtZW50LmlubmVyVGV4dCA9ICdUaGUgYmFzZSB3ZWlnaHQgKCcrYmFzZVdlaWdodC50b0ZpeGVkKDIpICsnICcrIHVvbVRleHQrJykgb2YgdGhlIGl0ZW1zIG9uIHRoaXMgbGlzdCBoYXZlIGV4Y2VlZGVkIHRoZSB3ZWlnaHQgZm9yIHRoZSB0eXBlL3N0eWxlIG9mIGhpa2Ugc2VsZWN0ZWQgZm9yIHRoaXMgbGlzdC4nXG4gICAgICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWlnaHRXYXJuaW5nLWRpdicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhc2VXZWlnaHQnKS4gdmFsdWUgPSBiYXNlV2VpZ2h0LnRvRml4ZWQoMik7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFBhY2tXZWlnaHQnKS52YWx1ZSA9IHRvdGFsUGFja1dlaWdodC50b0ZpeGVkKDIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiAgY3JlYXRlTGlzdEl0ZW1JbnB1dCh0eXBlLG5hbWVCYXNlLHJvdyxjb2x1bW5OYW1lKXtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGVsZW1lbnQudHlwZSA9IHR5cGU7XG4gICAgICAgIGVsZW1lbnQubmFtZSA9IG5hbWVCYXNlK1wiW11cIjtcbiAgICAgICAgZWxlbWVudC5pZCA9IG5hbWVCYXNlKyctJytyb3c7XG4gICAgICAgIGVsZW1lbnQudmFsdWUgPSAnJztcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sdW1uLW5hbWUnLGNvbHVtbk5hbWUpO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdXBkYXRlTGlzdEl0ZW0oZWxlbWVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuXG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldENhdGVncm95U2VsZWN0KHJvdyl7XG5cbiAgICAgICAgbGV0IHNlbGVjdCA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICBzZWxlY3QuaWQgPSAnSXRlbUNhdGVnb3J5LScrcm93O1xuICAgICAgICBzZWxlY3QubmFtZSA9ICdpdGVtQ2F0ZWdvcnktJytyb3c7XG4gICAgICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sdW1uLW5hbWUnLCdpdGVtX2NhdGVnb3J5Jyk7XG4gICAgICAgIHNlbGVjdC5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcblxuICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gJyc7XG4gICAgICAgIG9wdGlvbi50ZXh0ID0nQ2hvb3NlJztcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIGxldCBvcHRpb25MaXN0O1xuXG4gICAgICAgICAgICBvcHRpb25MaXN0ID0gYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJy9saXN0LWl0ZW0tY2F0ZWdvcmllcycpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIFRvIHVzZSB0aGUgZnVuY3Rpb24gYW5kIGhhbmRsZSB0aGUgcmVzcG9uc2UgZGF0YVxuICAgICAgICAgICAgb3B0aW9uTGlzdCgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCB0aGUgcmVzcG9uc2UgZGF0YVxuICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGggO2krKyl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBkYXRhW2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9ZGF0YVtpXS5jYXRlZ29yeTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHVwZGF0ZUxpc3RJdGVtKHNlbGVjdCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzZWxlY3Q7XG5cbiAgICB9XG4gICAgZnVuY3Rpb24gbWV0cmljUmFkaW9Ub1VzKCl7XG4gICAgICAgIGxldCBpbnB1dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1ldHJpYy1yYWRpbycpO1xuICAgICAgICBpbnB1dEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGlucHV0RWxlbWVudCkge1xuXG4gICAgICAgICAgICBsZXQgaWRBcnIgPSBpbnB1dEVsZW1lbnQuaWQuc3BsaXQoJy0nKTtcbiAgICAgICAgICAgIGxldCB1b20gPSBpZEFyclsxXTtcbiAgICAgICAgICAgIGxldCByb3cgPSBpZEFycltpZEFyci5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50VHlwZSA9IGlucHV0RWxlbWVudC50eXBlO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRUYWcgPSBpbnB1dEVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICBsZXQgbmV3RWxlbWVudDtcblxuICAgICAgICAgICAgaWYgKGVsZW1lbnRUeXBlID09PSAncmFkaW8nICYmIHVvbSA9PT0gJ2dyYW0nKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZVJhZGlvKCdpbl9vdW5jZXMnLCAnT1onLCAnb3onLCByb3csIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VHlwZSA9PT0gJ3JhZGlvJyAmJiB1b20gPT09ICdrZycpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlUmFkaW8oJ2luX2xicycsICdMQlMnLCAnbGJzJywgcm93KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFRhZyA9PT0gJ2xhYmVsJyAmJiB1b20gPT09ICdncmFtJykge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVMYWJlbCgnT1onLCAndW9tLW96LScgKyByb3csICdveicsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUYWcgPT09ICdsYWJlbCcgJiYgdW9tID09PSAna2cnKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZUxhYmVsKCdMQlMnLCAndW9tLWxicy0nICsgcm93LCAnbGJzJywgcm93KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5ld0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQobmV3RWxlbWVudCwgaW5wdXRFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgZnVuY3Rpb24gdXNSYWRpb1RvTWV0cmljKCl7XG4gICAgICAgIGxldCBpbnB1dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVzLXJhZGlvJyk7XG4gICAgICAgIGlucHV0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXRFbGVtZW50KSB7XG5cbiAgICAgICAgICAgIGxldCBpZEFyciA9IGlucHV0RWxlbWVudC5pZC5zcGxpdCgnLScpO1xuICAgICAgICAgICAgbGV0IHVvbSA9IGlkQXJyWzFdO1xuICAgICAgICAgICAgbGV0IHJvdyA9IGlkQXJyW2lkQXJyLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRUeXBlID0gaW5wdXRFbGVtZW50LnR5cGU7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFRhZyA9IGlucHV0RWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBsZXQgbmV3RWxlbWVudDtcblxuICAgICAgICAgICAgaWYgKGVsZW1lbnRUeXBlID09PSAncmFkaW8nICYmIHVvbSA9PT0gJ296Jykge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVSYWRpbygnaW5fZ3JhbXMnLCAnR3JhbXMnLCAnZ3JhbScsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUeXBlID09PSAncmFkaW8nICYmIHVvbSA9PT0gJ2xicycpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlUmFkaW8oJ2luX2tpbG9zJywgJ0tHJywgJ2tnJywgcm93KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFRhZyA9PT0gJ2xhYmVsJyAmJiB1b20gPT09ICdveicpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlTGFiZWwoJ0dyYW1zJywgJ3VvbS1ncmFtLScgKyByb3csICdncmFtJywgcm93KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFRhZyA9PT0gJ2xhYmVsJyAmJiB1b20gPT09ICdsYnMnKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZUxhYmVsKCdLRycsICd1b20ta2ctJyArIHJvdywgJ2tnJywgcm93KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5ld0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQobmV3RWxlbWVudCwgaW5wdXRFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJhZGlvKGRhdGFDb2x1bW5OYW1lLCBsYWJlbCwgdW9tLCByb3cpIHtcblxuICAgICAgICBsZXQgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHJhZGlvLmNsYXNzTmFtZSA9ICdmb3JtLWNoZWNrLWlucHV0JyArICh1b20gPT09ICdncmFtJyB8fCB1b20gPT09ICdrZycgPyAnIG1ldHJpYy1yYWRpbycgOiAnIHVzLXJhZGlvJyk7XG4gICAgICAgIHJhZGlvLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgICAgIHJhZGlvLm5hbWUgPSBcInVvbS1cIiArIHJvdyArIFwiW11cIjtcbiAgICAgICAgcmFkaW8uaWQgPSAndW9tLScgKyB1b20gKyAnLScgKyByb3c7XG4gICAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnZGF0YS1jb2x1bW4tbmFtZScsIGRhdGFDb2x1bW5OYW1lKTtcblxuICAgICAgICBpZih1b20gPT09ICdncmFtJyB8fCB1b20gPT09ICdveicpe1xuICAgICAgICAgICAgcmFkaW8uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb252ZXJ0TWVhc3VyZW1lbnQocm93KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByYWRpbztcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlTGFiZWwoaW5uZXJIdG1sLCBodG1sRm9yLCB1b20sIHJvdykge1xuXG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgbGFiZWwuY2xhc3NOYW1lID0gJ2Zvcm0tY2hlY2stbGFiZWwnICsgKHVvbSA9PT0gJ2dyYW0nIHx8IHVvbSA9PT0gJ2tnJyA/ICcgbWV0cmljLXJhZGlvJyA6ICcgdXMtcmFkaW8nKTtcbiAgICAgICAgbGFiZWwuaHRtbEZvciA9IGh0bWxGb3I7XG4gICAgICAgIGxhYmVsLmlubmVySFRNTCA9IGlubmVySHRtbDtcbiAgICAgICAgbGFiZWwuaWQgPSAndW9tLScgKyB1b20gKyAnLWxhYmVsLScgKyByb3c7XG4gICAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9XG5cbiAgICB0aGlzLndpbmRvdy51cGRhdGVMaXN0ID0gZnVuY3Rpb24gdXBkYXRlTGlzdChlbGVtZW50LCBsaXN0SWQpe1xuXG4gICAgICAgIGxldCBjb2x1bW5OYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sdW1uLW5hbWUnKTtcbiAgICAgICAgbGV0IHZhbHVlID0gZWxlbWVudC52YWx1ZTtcbiAgICAgICAgbGV0IHVybCA9ICcvZ2Vhci1saXN0LycrbGlzdElkO1xuXG4gICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgIGRhdGFbY29sdW1uTmFtZV0gPSB2YWx1ZTtcblxuICAgICAgICBheGlvcy5wb3N0KHVybCwgZGF0YSwgbGlzdElkKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuXG4gICAgICAgICAgICAgICAgLy8gYWxlcnQocmVzLmRhdGEubXNnKTtcblxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuXG4gICAgICAgICAgICBhbGVydCgnRmFpbGVkIHRvIHVwZGF0ZSBsaXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpO1xuXG4gICAgICAgIH0pO1xuICAgICAgICBpZihjb2x1bW5OYW1lID09PSAnc29ydCcgfHwgY29sdW1uTmFtZSA9PT0gJ2xpc3RfY2xhc3MnKXtcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxuICAgIGNvbnN0IGhlYWRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1jb2xsYXBzaWJsZS1oZWFkZXInKTtcblxuICAgIGhlYWRlcnMuZm9yRWFjaChoZWFkZXIgPT4ge1xuICAgICAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gaGVhZGVyLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgICAgIGNvbnN0IGFycm93ID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWFycm93Jyk7XG4gICAgICAgICAgICBpZiAoY29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLnBhZGRpbmcgPSAnMCAxMHB4JztcbiAgICAgICAgICAgICAgICBhcnJvdy5pbm5lckhUTUwgPSAnJiM5NjYwJztcblxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUucGFkZGluZyA9ICcxMHB4JztcbiAgICAgICAgICAgICAgICBhcnJvdy5pbm5lckhUTUwgPSAnJiM5NjUwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBsZXQgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI21hc3Rlci1pdGVtLXRhYmxlIGlucHV0Jyk7XG4gICAgbGV0IHNlbGVjdElucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpO1xuXG4gICAgaW5wdXRzLmZvckVhY2goZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgaW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0pO1xuICAgIC8vIHNlbGVjdElucHV0cy5mb3JFYWNoKGZ1bmN0aW9uKHNlbGVjdElucHV0KSB7XG4gICAgLy8gICAgIHNlbGVjdElucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAvLyB9KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoR2VhckJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGxldCBwYWdlTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdFNlYXJjaE1vZGFsJyk7XG4gICAgICAgIGxldCBzZWFyY2hNb2RhbCA9IG5ldyBib290c3RyYXAuTW9kYWwocGFnZU1vZGFsKTtcbiAgICAgICAgc2VhcmNoTW9kYWwuc2hvdygpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RDaGFydEJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGxldCBsaXN0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2Vhckxpc3RDaGFydE1vZGFsJyk7XG4gICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdElkJykudmFsdWU7XG4gICAgICAgIGxldCB1cmwgPSAnL2dlYXItbGlzdC1hbmFseXRpY3MvJytsaXN0SWQ7XG5cbiAgICAgICAgYXhpb3MuZ2V0KHVybClcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXJ0RGF0YScpLnZhbHVlID0gcmVzLmRhdGEuZGF0YTtcbiAgICAgICAgICAgIGFsZXJ0KCd0ZXN0IDE6ICcrIEpTT04uc3RyaW5naWZ5KHJlcy5kYXRhLmRhdGEpKTtcbiAgICAgICAgICAgIGJ1aWxkQ2hhcnQoSlNPTi5zdHJpbmdpZnkocmVzLmRhdGEuZGF0YSkpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBidWlsZENoYXJ0KGNoYXJ0RGF0YSl7XG4gICAgICAgIGNvbnN0IGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZWFyQ2hhcnQnKTtcbiAgICAgICAgLy8gbGV0IGNoYXJ0RGF0YSA9IEpTT04uc3RyaW5naWZ5KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFydERhdGEnKS52YWx1ZSk7XG4gICAgICAgIGFsZXJ0KCdzdHJpbmdpZjogJysgY2hhcnREYXRhKTtcblxuICAgICAgICBsZXQgbGlzdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdE5hbWUnKS52YWx1ZTtcblxuICAgICAgICBjb25zdCBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgICAgICAgICAgdHlwZTogJ2RvdWdobnV0JywgLy8gQ2hhcnQgdHlwZVxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGxhYmVsczogY2hhcnREYXRhLmxhYmVscyxcbiAgICAgICAgICAgICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgICAgICAgICAgICAgLy8gbGFiZWw6IGxpc3ROYW1lICsgJ0JyZWFrIERvd24nLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjaGFydERhdGEuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjaGFydERhdGEuY29sb3JzLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgICAgICAgICAgICAgaG92ZXJPZmZzZXQ6IDRcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBjdXRvdXQ6IDQ1LC8vIEFkanVzdCB0aGUgY3V0b3V0IHBlcmNlbnRhZ2UgaGVyZVxuICAgICAgICAgICAgICAgIHJhZGl1czogMTUwLFxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgICAgICAgICAgICBkYXRhbGFiZWxzOiBmYWxzZSAvLyBSZW1vdmluZyB0aGlzIGxpbmUgc2hvd3MgdGhlIGRhdGFsYWJlbHMgYWdhaW5cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOntcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZVJvdGF0ZTp0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlU2NhbGU6dHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGxpc3RNb2RhbCA9IG5ldyBNb2RhbChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2Vhckxpc3RDaGFydE1vZGFsJykpO1xuICAgICAgICAvLyBsZXQgbGlzdE1vZGFsID0gIG5ldyBib290c3RyYXAuTW9kYWwobW9kYWwpO1xuICAgICAgICBsZXQgYmFzZVdlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXNlV2VpZ2h0JykudmFsdWU7XG4gICAgICAgIGxldCB0b3RhbFBhY2tXZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQYWNrV2VpZ2h0JykudmFsdWU7XG4gICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbEJhc2VXZWlnaHQnKS5pbm5lclRleHQgPSBiYXNlV2VpZ2h0O1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxCYXNlV2VpZ2h0JykuaW5uZXJIdG1sID0gJ2Jhc2VXZWlnaHQnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxUb3RhbFdlaWdodCcpLmlubmVySHRtbCA9ICd0b3RhbFBhY2tXZWlnaHQnO1xuICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxUb3RhbFdlaWdodCcpLmlubmVyVGV4dCA9IHRvdGFsUGFja1dlaWdodDtcbiAgICAgICAgbGlzdE1vZGFsLnNob3coKTtcbiAgICB9XG5cblxuXG59KTtcblxuXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xud2luZG93LmF4aW9zID0gYXhpb3M7XG5cbndpbmRvdy5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiTW9kYWwiLCJDaGFydCIsImdyYW1Db252ZXJ0ZXIiLCJvdW5jZUNvbnZlcnRlciIsImF4aW9zIiwicmVxdWlyZSIsImJvb3RzdHJhcCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaG93UGFzc3dvcmQiLCJpZCIsInBhc3N3b3JkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZExpc3RJdGVtIiwibnVtYmVyT2ZJdGVtc1RvQWRkIiwibGluZXNUb0FkZCIsIl9sb29wIiwibGlzdFVPTSIsImZpbmFsSUVsZW1lbnQiLCJpdGVtVGFibGUiLCJ1c2VySWQiLCJsaXN0SWQiLCJmaW5hbEkiLCJyb3ciLCJjcmVhdGVFbGVtZW50IiwiY2VsbDAiLCJzY29wZSIsImlubmVySFRNTCIsImNlbGwxIiwiY291bnRlciIsInNldEF0dHJpYnV0ZSIsIml0ZW1OYW1lIiwiY3JlYXRlTGlzdEl0ZW1JbnB1dCIsInBsYWNlaG9sZGVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2VsbDYiLCJkZWxldGVCdG4iLCJjbGFzc05hbWUiLCJkYXRhIiwidXJsIiwidXBkYXRlSXRlbSIsIl9yZWYiLCJfY2FsbGVlIiwicmVzcG9uc2UiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicG9zdCIsInQwIiwiY29uc29sZSIsImxvZyIsIm5ld0lkIiwiY2VsbDIiLCJpdGVtV2VpZ2h0IiwiY2VsbDMiLCJyYWRpbzEiLCJyYWRpbzIiLCJyYWRpb0xhYmVsMSIsInJhZGlvTGFiZWwyIiwiY3JlYXRlUmFkaW8iLCJjcmVhdGVMYWJlbCIsImNlbGw0IiwicGFja2VkQW1vdW50IiwiY2VsbDUiLCJ0b3RhbExpbmVXZWlnaHQiLCJhcHBlbmRDaGlsZCIsInNlbGVjdENlbGwiLCJjYXRlZ29yeVNlbGVjdCIsImdldENhdGVncm95U2VsZWN0IiwiYXBwZW5kIiwiYWRkRXZlbnRMaXN0ZW5lcldlaWdodENhbGMiLCJ1cGRhdGVVT00iLCJ1c1JhZGlvVG9NZXRyaWMiLCJtZXRyaWNSYWRpb1RvVXMiLCJuZWVkZWRGb3JXZWlnaHRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm5lZWRlZEZvcldlaWdodCIsImdldExpbmVUb3RhbFdlaWdodCIsImNvbnZlcnQiLCJ1bmRlZmluZWQiLCJ3ZWlnaHQiLCJ1b20iLCJsaW5lVG90YWxXZWlnaHRFbGVtZW50IiwibGluZVRvdGFsIiwidG9GaXhlZCIsInJlcGxhY2UiLCJ1cGRhdGVMaXN0SXRlbSIsImNvbnZlcnRNZWFzdXJlbWVudCIsInRvdGFsV2VpZ2h0IiwidG90YWxMaW5lV2VpZ2h0VmFsdWUiLCJ3ZWlnaHRWYWx1ZSIsInNtYWxsIiwibGFyZ2UiLCJlbGVtZW50IiwiY2hlY2tlZCIsImdldEJvb2xlYW5EYXRhIiwiY29sdW1uTmFtZSIsImdldEF0dHJpYnV0ZSIsImlkQXJyIiwic3BsaXQiLCJhcnJMZW5ndGgiLCJpdGVtSWQiLCJpdGVtSWRWYWx1ZSIsInN1YnN0cmluZyIsInJlcyIsImVyciIsImFsZXJ0IiwiZXJyb3IiLCJ1cGRhdGVUb3RhbExpc3RXZWlnaHRzIiwid2VpZ2h0c0ZvclBXIiwiYmFzZVdlaWdodCIsInRvdGFsUGFja1dlaWdodCIsIm1heFBhY2tXZWlnaHQiLCJ1b21UZXh0Iiwid2VpZ2h0Rm9yUFciLCJjb252ZXJ0ZXIiLCJyb3dXZWlnaHQiLCJpdGVtQ2F0ZWdvcnlFbGVtZW50IiwiaXRlbUNhdGVnb3J5IiwiZGl2RWxlbWVudCIsImlubmVyVGV4dCIsInN0eWxlIiwiZGlzcGxheSIsIm5hbWVCYXNlIiwic2VsZWN0Iiwib3B0aW9uIiwidGV4dCIsIm9wdGlvbkxpc3QiLCJfcmVmMiIsIl9jYWxsZWUyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiZ2V0IiwiY2F0ZWdvcnkiLCJpbnB1dEVsZW1lbnRzIiwiaW5wdXRFbGVtZW50IiwiZWxlbWVudFR5cGUiLCJlbGVtZW50VGFnIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwibmV3RWxlbWVudCIsInBhcmVudEVsZW1lbnQiLCJyZXBsYWNlQ2hpbGQiLCJkYXRhQ29sdW1uTmFtZSIsImxhYmVsIiwicmFkaW8iLCJpbm5lckh0bWwiLCJodG1sRm9yIiwidXBkYXRlTGlzdCIsImxvY2F0aW9uIiwicmVsb2FkIiwiaGVhZGVycyIsImhlYWRlciIsImNvbnRlbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJhcnJvdyIsInF1ZXJ5U2VsZWN0b3IiLCJjb250YWlucyIsInJlbW92ZSIsIm1heEhlaWdodCIsInBhZGRpbmciLCJzY3JvbGxIZWlnaHQiLCJpbnB1dHMiLCJzZWxlY3RJbnB1dHMiLCJpbnB1dCIsImRpc2FibGVkIiwicGFnZU1vZGFsIiwic2VhcmNoTW9kYWwiLCJzaG93IiwibGlzdE1vZGFsIiwiSlNPTiIsInN0cmluZ2lmeSIsImJ1aWxkQ2hhcnQiLCJjaGFydERhdGEiLCJjdHgiLCJsaXN0TmFtZSIsIm15Q2hhcnQiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImJhY2tncm91bmRDb2xvciIsImNvbG9ycyIsImJvcmRlcldpZHRoIiwiaG92ZXJPZmZzZXQiLCJvcHRpb25zIiwiY3V0b3V0IiwicmFkaXVzIiwibGVnZW5kIiwicGx1Z2lucyIsImRhdGFsYWJlbHMiLCJhbmltYXRpb24iLCJhbmltYXRlUm90YXRlIiwiYW5pbWF0ZVNjYWxlIiwiZGVmYXVsdHMiLCJjb21tb24iXSwic291cmNlUm9vdCI6IiJ9