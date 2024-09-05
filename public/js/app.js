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
    // var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    //     keyboard: false
    // });
    var myModal = document.getElementById('productSearchModal');
    myModal.show();
  });
  var ctx = document.getElementById('gearChart');
  var chartData = JSON.parse(document.getElementById('chartData').value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxDQUFDO1FBQ1A7UUFDQXpJLElBQUksRUFBRW1JLFNBQVMsQ0FBQ25JLElBQUk7UUFDcEIwSSxlQUFlLEVBQUVQLFNBQVMsQ0FBQ1EsTUFBTTtRQUNqQ0MsV0FBVyxFQUFFLENBQUM7UUFDZEMsV0FBVyxFQUFFO01BQ2pCLENBQUM7SUFDTCxDQUFDO0lBQ0RDLE9BQU8sRUFBRTtNQUNMQyxNQUFNLEVBQUUsRUFBRTtNQUFDO01BQ1hDLE1BQU0sRUFBRSxHQUFHO01BQ1hDLE1BQU0sRUFBRTtRQUNKN0QsT0FBTyxFQUFFO01BQ2IsQ0FBQztNQUNEOEQsT0FBTyxFQUFFO1FBQ0xDLFVBQVUsRUFBRSxLQUFLLENBQUM7TUFDcEIsQ0FBQztNQUNIQyxTQUFTLEVBQUM7UUFDTkMsYUFBYSxFQUFDLElBQUk7UUFDbEJDLFlBQVksRUFBQztNQUNqQjtJQUNKO0VBQ0osQ0FBQyxDQUFDO0FBRU4sQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUMvbEJ3QjtBQUMxQnZMLE1BQU0sQ0FBQ3lDLEtBQUssR0FBR0EsNkNBQUs7QUFFcEJ6QyxNQUFNLENBQUN5QyxLQUFLLENBQUMrSSxRQUFRLENBQUN0QyxPQUFPLENBQUN1QyxNQUFNLENBQUMsa0JBQWtCLENBQUMsR0FBRyxnQkFBZ0I7Ozs7Ozs7Ozs7O0FDSDNFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zYXNzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAnLi9ib290c3RyYXAnIDtcbmltcG9ydCAge01vZGFsfSAgZnJvbSAnYm9vdHN0cmFwJztcbi8vIGltcG9ydCAgJ2Jvb3RzdHJhcCc7XG5pbXBvcnQgJ0Bwb3BwZXJqcy9jb3JlJztcbmltcG9ydCBDaGFydCBmcm9tICdjaGFydC5qcy9hdXRvJ1xuY29uc3QgYm9vdHN0cmFwID0gcmVxdWlyZSgnLi9ib290c3RyYXAnKVxuY29uc3QgZ3JhbUNvbnZlcnRlciA9IDEwMDA7XG5jb25zdCBvdW5jZUNvbnZlcnRlciA9IDE2O1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGUpIHtcblxuICAgIHRoaXMud2luZG93LnNob3dQYXNzd29yZCA9IGZ1bmN0aW9uIHNob3dQYXNzd29yZChpZCl7XG4gICAgICAgICAgICBsZXQgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgIGlmIChwYXNzd29yZC50eXBlID09PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgICAgICAgICAgICBwYXNzd29yZC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXNzd29yZC50eXBlID0gXCJwYXNzd29yZFwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMud2luZG93LmFkZExpc3RJdGVtID0gZnVuY3Rpb24gYWRkTGlzdEl0ZW0oKXtcblxuICAgICAgICBsZXQgbnVtYmVyT2ZJdGVtc1RvQWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpbmVzVG9BZGQnKTtcbiAgICAgICAgbGV0IGxpbmVzVG9BZGQgPSAxO1xuICAgICAgICBpZigrbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlIDwgMSl7XG4gICAgICAgICAgICBudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPSBsaW5lc1RvQWRkO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGxpbmVzVG9BZGQgPSArbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxpbmVzVG9BZGQ7IGkrKyl7XG5cblxuICAgICAgICAgICAgbGV0IGxpc3RVT00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW9tJykudmFsdWU7XG4gICAgICAgICAgICBsZXQgZmluYWxJRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5hbC1pJyk7XG4gICAgICAgICAgICBsZXQgaXRlbVRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tdGFibGUtYm9keScpO1xuICAgICAgICAgICAgbGV0IHVzZXJJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VySWQnKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdElkJykudmFsdWU7XG4gICAgICAgICAgICBsZXQgZmluYWxJID0gZmluYWxJRWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgIGZpbmFsSUVsZW1lbnQudmFsdWUgPSArZmluYWxJICsgMTtcblxuICAgICAgICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIGNlbGxzIGFuZCBpbnB1dCBlbGVtZW50cy5cbiAgICAgICAgICAgIGxldCBjZWxsMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgICAgICAgICAgIGNlbGwwLnNjb3BlID0gJ3Jvdyc7XG4gICAgICAgICAgICBjZWxsMC5pbm5lckhUTUwgPSBmaW5hbEk7XG5cbiAgICAgICAgICAgIGxldCBjZWxsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcblxuICAgICAgICAgICAgbGV0IGNvdW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBjb3VudGVyLnR5cGUgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgY291bnRlci5uYW1lID0gXCJpZFtdXCI7XG4gICAgICAgICAgICBjb3VudGVyLmlkID0gJ2lkLScrZmluYWxJO1xuICAgICAgICAgICAgY291bnRlci52YWx1ZSA9ICduZXctJytmaW5hbEk7XG4gICAgICAgICAgICBjb3VudGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1jb2x1bW4tbmFtZScsJ2lkJyk7XG5cbiAgICAgICAgICAgIGxldCBpdGVtTmFtZSA9ICBjcmVhdGVMaXN0SXRlbUlucHV0KCd0ZXh0JywnaXRlbU5hbWUnLGZpbmFsSSwnaXRlbV9uYW1lJyk7XG4gICAgICAgICAgICBpdGVtTmFtZS5wbGFjZWhvbGRlciA9ICdJdGVtIE5hbWUnO1xuICAgICAgICAgICAgaXRlbU5hbWUuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJyk7XG5cbiAgICAgICAgICAgIGxldCBjZWxsNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICBjZWxsNi5pZCA9ICdidG4tdGQtJytmaW5hbEk7XG4gICAgICAgICAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgZGVsZXRlQnRuLmlkID0gJ2RlbGV0ZUJ0bi0nK2ZpbmFsSTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5jbGFzc05hbWUgPSAnYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbSAgcHktMic7XG4gICAgICAgICAgICBkZWxldGVCdG4uaW5uZXJIVE1MID0gJ3gnO1xuXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICAgICAgbGV0IHVybCA9ICcvbGlzdC1pdGVtJztcbiAgICAgICAgICAgIGRhdGFbJ2xpc3RfaWQnXSA9IGxpc3RJZDtcbiAgICAgICAgICAgIGRhdGFbJ3VzZXJfaWQnXSA9IHVzZXJJZDtcbiAgICAgICAgICAgIGRhdGFbJ2l0ZW1fbmFtZSddID0gJyc7XG4gICAgICAgICAgICBsZXQgdXBkYXRlSXRlbTtcbiAgICAgICAgICAgIHVwZGF0ZUl0ZW0gPSBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QodXJsLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlIGVycm9yXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBUbyB1c2UgdGhlIGZ1bmN0aW9uIGFuZCBoYW5kbGUgdGhlIHJlc3BvbnNlIGRhdGFcbiAgICAgICAgICAgIHVwZGF0ZUl0ZW0oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gRG8gc29tZXRoaW5nIHdpdGggdGhlIHJlc3BvbnNlIGRhdGFcbiAgICAgICAgICAgICAgICBjb3VudGVyLnZhbHVlID0gZGF0YS5uZXdJZDtcbiAgICAgICAgICAgICAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdocmVmJywgJy9kZXN0cm95LWxpc3QtaXRlbS8nK2RhdGEubmV3SWQpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCBjZWxsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGxldCBpdGVtV2VpZ2h0ID0gY3JlYXRlTGlzdEl0ZW1JbnB1dCgnbnVtYmVyJywnaXRlbVdlaWdodCcsZmluYWxJLCdpdGVtX3dlaWdodCcpO1xuICAgICAgICAgICAgaXRlbVdlaWdodC52YWx1ZSA9IDA7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LmNsYXNzTGlzdC5hZGQoJ2Zvci13ZWlnaHQnKTtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQuY2xhc3NMaXN0LmFkZCgnbnVtYmVyLWlucHV0Jyk7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpO1xuICAgICAgICAgICAgY2VsbDIuY2xhc3NMaXN0LmFkZCgnbnVtYmVyLWNvbCcpO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBsZXQgcmFkaW8xO1xuICAgICAgICAgICAgbGV0IHJhZGlvMjtcbiAgICAgICAgICAgIGxldCByYWRpb0xhYmVsMTtcbiAgICAgICAgICAgIGxldCByYWRpb0xhYmVsMjtcblxuICAgICAgICAgICAgaWYobGlzdFVPTSA9PT0gJ3VzJyl7XG5cbiAgICAgICAgICAgICAgICByYWRpbzEgPSBjcmVhdGVSYWRpbygnaW5fb3VuY2VzJywgJycsICdveicsIGZpbmFsSSk7XG4gICAgICAgICAgICAgICAgcmFkaW9MYWJlbDEgPSBjcmVhdGVMYWJlbCgnT1onLCAgJ3VvbS1vei0nK2ZpbmFsSSwgJ296JywgZmluYWxJKTtcbiAgICAgICAgICAgICAgICByYWRpbzIgPSBjcmVhdGVSYWRpbygnaW5fbGJzJywgJycsICdsYnMnLCBmaW5hbEkpO1xuICAgICAgICAgICAgICAgIHJhZGlvTGFiZWwyID0gY3JlYXRlTGFiZWwoJ0xCUycsICAndW9tLWxicy0nK2ZpbmFsSSwgJ2xicycsIGZpbmFsSSk7XG5cbiAgICAgICAgICAgIH1lbHNle1xuXG4gICAgICAgICAgICAgICAgcmFkaW8xID0gY3JlYXRlUmFkaW8oJ2luX2dyYW1zJywgJycsICdncmFtJywgZmluYWxJKTtcbiAgICAgICAgICAgICAgICByYWRpb0xhYmVsMSA9ICBjcmVhdGVMYWJlbCgnR3JhbXMnLCAgJ3VvbS1ncmFtLScrZmluYWxJLCAnZ3JhbScsIGZpbmFsSSk7XG4gICAgICAgICAgICAgICAgcmFkaW8yID0gIGNyZWF0ZVJhZGlvKCdpbl9raWxvcycsICcnLCAna2cnLCBmaW5hbEkpO1xuICAgICAgICAgICAgICAgIHJhZGlvTGFiZWwyID0gY3JlYXRlTGFiZWwoJ0tHJywgICd1b20ta2ctJytmaW5hbEksICdrZycsIGZpbmFsSSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBjZWxsNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGNlbGw0LmNsYXNzTGlzdC5hZGQoJ251bWJlci1jb2wnKTtcbiAgICAgICAgICAgIGxldCBwYWNrZWRBbW91bnQgPSBjcmVhdGVMaXN0SXRlbUlucHV0KCdudW1iZXInLCdwYWNrZWRBbW91bnQnLGZpbmFsSSwnYW1vdW50Jyk7XG4gICAgICAgICAgICBwYWNrZWRBbW91bnQudmFsdWUgPSAxO1xuXG4gICAgICAgICAgICBwYWNrZWRBbW91bnQuY2xhc3NMaXN0LmFkZCgnZm9yLXdlaWdodCcpO1xuICAgICAgICAgICAgcGFja2VkQW1vdW50LmNsYXNzTGlzdC5hZGQoJ251bWJlci1pbnB1dCcpO1xuICAgICAgICAgICAgcGFja2VkQW1vdW50LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBjZWxsNS5jbGFzc0xpc3QuYWRkKCdudW1iZXItY29sJyk7XG4gICAgICAgICAgICBsZXQgdG90YWxMaW5lV2VpZ2h0ID0gY3JlYXRlTGlzdEl0ZW1JbnB1dCgnbnVtYmVyJywndG90YWxMaW5lV2VpZ2h0JyxmaW5hbEksJ3RvdGFsX2xpbmVfd2VpZ2h0Jyk7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQudmFsdWUgPSAwO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LnNldEF0dHJpYnV0ZSgnZGF0YS1jb2x1bW4tbmFtZScsJ3RvdGFsX2xpbmVfd2VpZ2h0Jyk7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsdHJ1ZSk7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQuY2xhc3NMaXN0LmFkZCgnbnVtYmVyLWlucHV0Jyk7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJyk7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQuY2xhc3NMaXN0LmFkZCgnZm9yLXRvdGFsLWxpc3Qtd2VpZ2h0Jyk7XG5cbiAgICAgICAgICAgIC8vYXBwZW5kIGlucHV0cyB0byBjZWxscy5cbiAgICAgICAgICAgIGNlbGwxLmFwcGVuZENoaWxkKGNvdW50ZXIpO1xuICAgICAgICAgICAgY2VsbDEuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgICAgICAgICAgY2VsbDIuYXBwZW5kQ2hpbGQoaXRlbVdlaWdodCk7XG5cbiAgICAgICAgICAgIGxldCBzZWxlY3RDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgbGV0IGNhdGVnb3J5U2VsZWN0ID0gZ2V0Q2F0ZWdyb3lTZWxlY3QoZmluYWxJKTtcbiAgICAgICAgICAgIHNlbGVjdENlbGwuYXBwZW5kKGNhdGVnb3J5U2VsZWN0KTtcblxuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQocmFkaW8xKTtcbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHJhZGlvTGFiZWwxKTtcbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHJhZGlvMik7XG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChyYWRpb0xhYmVsMik7XG5cbiAgICAgICAgICAgIGNlbGw0LmFwcGVuZENoaWxkKHBhY2tlZEFtb3VudCk7XG4gICAgICAgICAgICBjZWxsNS5hcHBlbmRDaGlsZCh0b3RhbExpbmVXZWlnaHQpO1xuICAgICAgICAgICAgY2VsbDYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuXG4gICAgICAgICAgICAvLyBBcHBlbmQgY2VsbHMgdG8gdGhlIHJvdy5cbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsMCk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDEpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHNlbGVjdENlbGwpO1xuICAgICAgICAgICAgLy8gcm93LmFwcGVuZENoaWxkKGNlbGwzKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsMik7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDQpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGw1KTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsMyk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDYpO1xuXG5cbiAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgcm93IHRvIHRoZSB0YWJsZS5cbiAgICAgICAgICAgIGl0ZW1UYWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuXG4gICAgICAgICAgICAvL2FkZCBmdW5jdGlvbnMgdG8gY2FsY3VsYXRlIGFuZCBjb252ZXJ0IHRvdGFsIHdlaWdodC5cbiAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXJXZWlnaHRDYWxjKGZpbmFsSSk7XG4gICAgICAgIH1cbiAgICAgICAgbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlPTE7XG5cbiAgICB9XG5cbiAgICB0aGlzLndpbmRvdy51cGRhdGVVT00gPSBmdW5jdGlvbiB1cGRhdGVVT00odmFsdWUpIHtcbiAgICAgICAgaWYodmFsdWUgIT09ICd1cycpe1xuICAgICAgICAgICB1c1JhZGlvVG9NZXRyaWMoKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBtZXRyaWNSYWRpb1RvVXMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyV2VpZ2h0Q2FsYyhyb3cpe1xuICAgICAgICBsZXQgbmVlZGVkRm9yV2VpZ2h0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3Itd2VpZ2h0Jyk7XG4gICAgICAgIG5lZWRlZEZvcldlaWdodHMuZm9yRWFjaChmdW5jdGlvbiAobmVlZGVkRm9yV2VpZ2h0KXtcbiAgICAgICAgICAgIG5lZWRlZEZvcldlaWdodC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBnZXRMaW5lVG90YWxXZWlnaHQocm93KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgfVxuXG4gICAgIHRoaXMud2luZG93LmdldExpbmVUb3RhbFdlaWdodCA9IGZ1bmN0aW9uIGdldExpbmVUb3RhbFdlaWdodChyb3csY29udmVydCA9IGZhbHNlKXtcblxuICAgICAgICBsZXQgd2VpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1XZWlnaHQtJytyb3cpLnZhbHVlO1xuICAgICAgICBsZXQgcGFja2VkQW1vdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhY2tlZEFtb3VudC0nK3JvdykudmFsdWU7XG4gICAgICAgIGxldCB1b20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW9tJyk7XG4gICAgICAgIGxldCBsaW5lVG90YWxXZWlnaHRFbGVtZW50ID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbExpbmVXZWlnaHQtJytyb3cpO1xuXG4gICAgICAgIGxldCBsaW5lVG90YWwgPSAwO1xuICAgICAgICBsaW5lVG90YWwgPSArd2VpZ2h0ICogK3BhY2tlZEFtb3VudDtcbiAgICAgICAgbGluZVRvdGFsID0gbGluZVRvdGFsLnRvRml4ZWQoMikucmVwbGFjZSgvWy4sXTAwJC8sIFwiXCIpO1xuICAgICAgICBsaW5lVG90YWxXZWlnaHRFbGVtZW50LnZhbHVlID0gbGluZVRvdGFsO1xuXG4gICAgICAgIHVwZGF0ZUxpc3RJdGVtKGxpbmVUb3RhbFdlaWdodEVsZW1lbnQpO1xuXG5cbiAgICB9XG4gICAgdGhpcy53aW5kb3cuY29udmVydE1lYXN1cmVtZW50ID0gZnVuY3Rpb24gY29udmVydE1lYXN1cmVtZW50KHJvdywgY29udmVydCA9IGZhbHNlKXtcblxuICAgICAgICBsZXQgdW9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VvbScpLnZhbHVlO1xuICAgICAgICBsZXQgd2VpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1XZWlnaHQtJytyb3cpO1xuICAgICAgICBsZXQgcGFja2VkQW1vdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhY2tlZEFtb3VudC0nK3JvdykudmFsdWU7XG4gICAgICAgIGxldCB0b3RhbFdlaWdodCA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxMaW5lV2VpZ2h0LScrcm93KVxuICAgICAgICBsZXQgdG90YWxMaW5lV2VpZ2h0VmFsdWUgPSAwO1xuICAgICAgICBsZXQgd2VpZ2h0VmFsdWUgPSB3ZWlnaHQudmFsdWU7XG4gICAgICAgIGxldCBzbWFsbDtcbiAgICAgICAgbGV0IGxhcmdlO1xuICAgICAgICBsZXQgZWxlbWVudDtcblxuICAgICAgICBpZih1b20gPT09ICd1cycpe1xuICAgICAgICAgICAgc21hbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW9tLW96LScrcm93KTtcbiAgICAgICAgICAgIGxhcmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VvbS1sYnMtJytyb3cpO1xuICAgICAgICAgICAgaWYoc21hbGwuY2hlY2tlZCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgd2VpZ2h0VmFsdWUgPSArd2VpZ2h0VmFsdWUgKiAxNjtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gc21hbGw7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB3ZWlnaHRWYWx1ZSA9ICt3ZWlnaHRWYWx1ZSAvIDE2O1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBsYXJnZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc21hbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW9tLWdyYW0tJytyb3cpO1xuICAgICAgICAgICAgbGFyZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW9tLWtnLScrcm93KTtcblxuICAgICAgICAgICAgaWYoc21hbGwuY2hlY2tlZCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgd2VpZ2h0VmFsdWUgPSArd2VpZ2h0VmFsdWUgKiAxMDAwO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBzbWFsbDtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHdlaWdodFZhbHVlID0gK3dlaWdodFZhbHVlIC8xMDAwO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBsYXJnZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICB0b3RhbExpbmVXZWlnaHRWYWx1ZSA9ICt3ZWlnaHRWYWx1ZSAqICtwYWNrZWRBbW91bnQ7XG4gICAgICAgIHdlaWdodC52YWx1ZSA9IHdlaWdodFZhbHVlLnRvRml4ZWQoMikucmVwbGFjZSgvWy4sXTAwJC8sIFwiXCIpO1xuICAgICAgICB0b3RhbFdlaWdodC52YWx1ZSA9IHRvdGFsTGluZVdlaWdodFZhbHVlLnRvRml4ZWQoMikucmVwbGFjZSgvWy4sXTAwJC8sIFwiXCIpO1xuICAgICAgICB1cGRhdGVMaXN0SXRlbShlbGVtZW50KTtcbiAgICAgICAgdXBkYXRlTGlzdEl0ZW0od2VpZ2h0KTtcbiAgICAgICAgdXBkYXRlTGlzdEl0ZW0odG90YWxXZWlnaHQpO1xuXG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEJvb2xlYW5EYXRhKGNvbHVtbk5hbWUpe1xuXG4gICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgIGRhdGFbJ2luX291bmNlcyddID0gZmFsc2U7XG4gICAgICAgIGRhdGFbJ2luX2xicyddID0gZmFsc2U7XG4gICAgICAgIGRhdGFbJ2luX2dyYW1zJ10gPSBmYWxzZTtcbiAgICAgICAgZGF0YVsnaW5fa2lsb3MnXSA9IGZhbHNlO1xuICAgICAgICBzd2l0Y2goY29sdW1uTmFtZSl7XG4gICAgICAgICAgICBjYXNlICdpbl9vdW5jZXMnOlxuICAgICAgICAgICAgICAgIGRhdGFbJ2luX291bmNlcyddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2luX2xicyc6XG4gICAgICAgICAgICAgICAgZGF0YVsnaW5fbGJzJ10gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdpbl9ncmFtcyc6XG4gICAgICAgICAgICAgICAgZGF0YVsnaW5fZ3JhbXMnXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ2luX2tpbG9zJzpcbiAgICAgICAgICAgICAgICBkYXRhWydpbl9raWxvcyddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgdGhpcy53aW5kb3cudXBkYXRlTGlzdEl0ZW0gPSBmdW5jdGlvbiB1cGRhdGVMaXN0SXRlbShlbGVtZW50KXtcblxuICAgICAgICBsZXQgY29sdW1uTmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbHVtbi1uYW1lJyk7XG4gICAgICAgIGxldCB2YWx1ZSA9IGVsZW1lbnQudmFsdWU7XG4gICAgICAgIGxldCBpZCA9IGVsZW1lbnQuaWQ7XG4gICAgICAgIGxldCBpZEFyciA9IGlkLnNwbGl0KCctJyk7XG4gICAgICAgIGxldCBhcnJMZW5ndGggPSBpZEFyci5sZW5ndGhcbiAgICAgICAgbGV0IHJvdyA9IGlkQXJyW2Fyckxlbmd0aC0xXTtcbiAgICAgICAgbGV0IGl0ZW1JZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZC0nK3Jvdyk7XG4gICAgICAgIGxldCBpdGVtSWRWYWx1ZSA9IGl0ZW1JZC52YWx1ZTtcbiAgICAgICAgbGV0IGxpc3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0SWQnKS52YWx1ZTtcbiAgICAgICAgbGV0IHVybCA9ICcvbGlzdC1pdGVtLycraXRlbUlkVmFsdWU7XG4gICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgIGxldCB1c2VySWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcklkJykudmFsdWU7XG5cbiAgICAgICAgZGF0YVtjb2x1bW5OYW1lXSA9IHZhbHVlO1xuXG4gICAgICAgIGlmKGNvbHVtbk5hbWUuc3Vic3RyaW5nKDAsMykgPT09ICdpbl8nKXtcbiAgICAgICAgICAgIGRhdGEgPSBnZXRCb29sZWFuRGF0YShjb2x1bW5OYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbJ2xpc3RfaWQnXSA9IGxpc3RJZDtcbiAgICAgICAgZGF0YVsndXNlcl9pZCddID0gdXNlcklkO1xuICAgICAgICBkYXRhWydpZCddID0gaXRlbUlkVmFsdWU7XG5cbiAgICAgICAgYXhpb3MucG9zdCh1cmwsIGRhdGEsIGl0ZW1JZClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcblxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgYWxlcnQoJ0ZhaWxlZCB0byB1cGRhdGUgbGlzdCBpdGVtLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9KTtcblxuICAgICAgICB1cGRhdGVUb3RhbExpc3RXZWlnaHRzKCk7XG5cbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlVG90YWxMaXN0V2VpZ2h0cygpe1xuXG4gICAgICAgIGxldCB3ZWlnaHRzRm9yUFcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9yLXRvdGFsLWxpc3Qtd2VpZ2h0Jyk7XG4gICAgICAgIGxldCBiYXNlV2VpZ2h0ID0gMDtcbiAgICAgICAgbGV0IHRvdGFsUGFja1dlaWdodCA9IDA7XG4gICAgICAgIGxldCBtYXhQYWNrV2VpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21heFBhY2tXZWlnaHQnKS52YWx1ZTtcbiAgICAgICAgbGV0IHVvbVRleHQgPSAnTEJTJztcbiAgICAgICAgd2VpZ2h0c0ZvclBXLmZvckVhY2goZnVuY3Rpb24gKHdlaWdodEZvclBXKXtcblxuICAgICAgICAgICAgbGV0IGlkID0gd2VpZ2h0Rm9yUFcuaWQ7XG4gICAgICAgICAgICBsZXQgaWRBcnIgPSBpZC5zcGxpdCgnLScpO1xuICAgICAgICAgICAgbGV0IGFyckxlbmd0aCA9IGlkQXJyLmxlbmd0aFxuICAgICAgICAgICAgbGV0IHJvdyA9IGlkQXJyW2Fyckxlbmd0aC0xXTtcbiAgICAgICAgICAgIGxldCBwYWNrZWRBbW91bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFja2VkQW1vdW50LScrcm93KS52YWx1ZVxuICAgICAgICAgICAgbGV0IGNvbnZlcnRlciA9IDE7XG4gICAgICAgICAgICBsZXQgcm93V2VpZ2h0ID0gK3dlaWdodEZvclBXLnZhbHVlO1xuICAgICAgICAgICAgbGV0IHVvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1b20nKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBpdGVtQ2F0ZWdvcnlFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1DYXRlZ29yeS0nK3Jvdyk7XG4gICAgICAgICAgICBsZXQgaXRlbUNhdGVnb3J5ID0gJyc7XG4gICAgICAgICAgICBpZihpdGVtQ2F0ZWdvcnlFbGVtZW50KXtcbiAgICAgICAgICAgICAgICBpdGVtQ2F0ZWdvcnkgPSBpdGVtQ2F0ZWdvcnlFbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGlmKGl0ZW1DYXRlZ29yeSA9PT0gdW5kZWZpbmVkIHx8IGl0ZW1DYXRlZ29yeSA9PT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgaXRlbUNhdGVnb3J5ID0gJyc7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgaWYodW9tID09PSAndXMnKXtcbiAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW9tLW96LScrcm93KS5jaGVja2VkID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgY29udmVydGVyID0gb3VuY2VDb252ZXJ0ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VvbS1vei0nK3JvdykuY2hlY2tlZCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnRlciA9IGdyYW1Db252ZXJ0ZXI7XG4gICAgICAgICAgICAgICAgICAgIHVvbVRleHQgPSAnS0cnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdG90YWxQYWNrV2VpZ2h0ID0gdG90YWxQYWNrV2VpZ2h0ICsgKCtwYWNrZWRBbW91bnQgKiAgKCtyb3dXZWlnaHQvY29udmVydGVyKSk7XG5cbiAgICAgICAgICAgIGlmKGl0ZW1DYXRlZ29yeSAhPT0gJ2NvbnN1bWFibGVzJyl7XG4gICAgICAgICAgICAgICAgYmFzZVdlaWdodCA9IGJhc2VXZWlnaHQgKyAoK3BhY2tlZEFtb3VudCAqICgrcm93V2VpZ2h0L2NvbnZlcnRlcikpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKCtiYXNlV2VpZ2h0ID4gK21heFBhY2tXZWlnaHQpe1xuICAgICAgICAgICAgbGV0IGRpdkVsZW1lbnQgPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlaWdodFdhcm5pbmctZGl2Jyk7XG4gICAgICAgICAgICBkaXZFbGVtZW50LmlubmVyVGV4dCA9ICdUaGUgYmFzZSB3ZWlnaHQgKCcrYmFzZVdlaWdodC50b0ZpeGVkKDIpICsnICcrIHVvbVRleHQrJykgb2YgdGhlIGl0ZW1zIG9uIHRoaXMgbGlzdCBoYXZlIGV4Y2VlZGVkIHRoZSB3ZWlnaHQgZm9yIHRoZSB0eXBlL3N0eWxlIG9mIGhpa2Ugc2VsZWN0ZWQgZm9yIHRoaXMgbGlzdC4nXG4gICAgICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWlnaHRXYXJuaW5nLWRpdicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhc2VXZWlnaHQnKS4gdmFsdWUgPSBiYXNlV2VpZ2h0LnRvRml4ZWQoMik7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFBhY2tXZWlnaHQnKS52YWx1ZSA9IHRvdGFsUGFja1dlaWdodC50b0ZpeGVkKDIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiAgY3JlYXRlTGlzdEl0ZW1JbnB1dCh0eXBlLG5hbWVCYXNlLHJvdyxjb2x1bW5OYW1lKXtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGVsZW1lbnQudHlwZSA9IHR5cGU7XG4gICAgICAgIGVsZW1lbnQubmFtZSA9IG5hbWVCYXNlK1wiW11cIjtcbiAgICAgICAgZWxlbWVudC5pZCA9IG5hbWVCYXNlKyctJytyb3c7XG4gICAgICAgIGVsZW1lbnQudmFsdWUgPSAnJztcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sdW1uLW5hbWUnLGNvbHVtbk5hbWUpO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdXBkYXRlTGlzdEl0ZW0oZWxlbWVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuXG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldENhdGVncm95U2VsZWN0KHJvdyl7XG5cbiAgICAgICAgbGV0IHNlbGVjdCA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICBzZWxlY3QuaWQgPSAnSXRlbUNhdGVnb3J5LScrcm93O1xuICAgICAgICBzZWxlY3QubmFtZSA9ICdpdGVtQ2F0ZWdvcnktJytyb3c7XG4gICAgICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sdW1uLW5hbWUnLCdpdGVtX2NhdGVnb3J5Jyk7XG4gICAgICAgIHNlbGVjdC5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcblxuICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gJyc7XG4gICAgICAgIG9wdGlvbi50ZXh0ID0nQ2hvb3NlJztcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIGxldCBvcHRpb25MaXN0O1xuXG4gICAgICAgICAgICBvcHRpb25MaXN0ID0gYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJy9saXN0LWl0ZW0tY2F0ZWdvcmllcycpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIFRvIHVzZSB0aGUgZnVuY3Rpb24gYW5kIGhhbmRsZSB0aGUgcmVzcG9uc2UgZGF0YVxuICAgICAgICAgICAgb3B0aW9uTGlzdCgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCB0aGUgcmVzcG9uc2UgZGF0YVxuICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGggO2krKyl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBkYXRhW2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9ZGF0YVtpXS5jYXRlZ29yeTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHVwZGF0ZUxpc3RJdGVtKHNlbGVjdCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzZWxlY3Q7XG5cbiAgICB9XG4gICAgZnVuY3Rpb24gbWV0cmljUmFkaW9Ub1VzKCl7XG4gICAgICAgIGxldCBpbnB1dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1ldHJpYy1yYWRpbycpO1xuICAgICAgICBpbnB1dEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGlucHV0RWxlbWVudCkge1xuXG4gICAgICAgICAgICBsZXQgaWRBcnIgPSBpbnB1dEVsZW1lbnQuaWQuc3BsaXQoJy0nKTtcbiAgICAgICAgICAgIGxldCB1b20gPSBpZEFyclsxXTtcbiAgICAgICAgICAgIGxldCByb3cgPSBpZEFycltpZEFyci5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50VHlwZSA9IGlucHV0RWxlbWVudC50eXBlO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRUYWcgPSBpbnB1dEVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICBsZXQgbmV3RWxlbWVudDtcblxuICAgICAgICAgICAgaWYgKGVsZW1lbnRUeXBlID09PSAncmFkaW8nICYmIHVvbSA9PT0gJ2dyYW0nKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZVJhZGlvKCdpbl9vdW5jZXMnLCAnT1onLCAnb3onLCByb3csIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VHlwZSA9PT0gJ3JhZGlvJyAmJiB1b20gPT09ICdrZycpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlUmFkaW8oJ2luX2xicycsICdMQlMnLCAnbGJzJywgcm93KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFRhZyA9PT0gJ2xhYmVsJyAmJiB1b20gPT09ICdncmFtJykge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVMYWJlbCgnT1onLCAndW9tLW96LScgKyByb3csICdveicsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUYWcgPT09ICdsYWJlbCcgJiYgdW9tID09PSAna2cnKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZUxhYmVsKCdMQlMnLCAndW9tLWxicy0nICsgcm93LCAnbGJzJywgcm93KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5ld0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQobmV3RWxlbWVudCwgaW5wdXRFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgZnVuY3Rpb24gdXNSYWRpb1RvTWV0cmljKCl7XG4gICAgICAgIGxldCBpbnB1dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVzLXJhZGlvJyk7XG4gICAgICAgIGlucHV0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXRFbGVtZW50KSB7XG5cbiAgICAgICAgICAgIGxldCBpZEFyciA9IGlucHV0RWxlbWVudC5pZC5zcGxpdCgnLScpO1xuICAgICAgICAgICAgbGV0IHVvbSA9IGlkQXJyWzFdO1xuICAgICAgICAgICAgbGV0IHJvdyA9IGlkQXJyW2lkQXJyLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRUeXBlID0gaW5wdXRFbGVtZW50LnR5cGU7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFRhZyA9IGlucHV0RWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBsZXQgbmV3RWxlbWVudDtcblxuICAgICAgICAgICAgaWYgKGVsZW1lbnRUeXBlID09PSAncmFkaW8nICYmIHVvbSA9PT0gJ296Jykge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVSYWRpbygnaW5fZ3JhbXMnLCAnR3JhbXMnLCAnZ3JhbScsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUeXBlID09PSAncmFkaW8nICYmIHVvbSA9PT0gJ2xicycpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlUmFkaW8oJ2luX2tpbG9zJywgJ0tHJywgJ2tnJywgcm93KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFRhZyA9PT0gJ2xhYmVsJyAmJiB1b20gPT09ICdveicpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlTGFiZWwoJ0dyYW1zJywgJ3VvbS1ncmFtLScgKyByb3csICdncmFtJywgcm93KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFRhZyA9PT0gJ2xhYmVsJyAmJiB1b20gPT09ICdsYnMnKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZUxhYmVsKCdLRycsICd1b20ta2ctJyArIHJvdywgJ2tnJywgcm93KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5ld0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQobmV3RWxlbWVudCwgaW5wdXRFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJhZGlvKGRhdGFDb2x1bW5OYW1lLCBsYWJlbCwgdW9tLCByb3cpIHtcblxuICAgICAgICBsZXQgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHJhZGlvLmNsYXNzTmFtZSA9ICdmb3JtLWNoZWNrLWlucHV0JyArICh1b20gPT09ICdncmFtJyB8fCB1b20gPT09ICdrZycgPyAnIG1ldHJpYy1yYWRpbycgOiAnIHVzLXJhZGlvJyk7XG4gICAgICAgIHJhZGlvLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgICAgIHJhZGlvLm5hbWUgPSBcInVvbS1cIiArIHJvdyArIFwiW11cIjtcbiAgICAgICAgcmFkaW8uaWQgPSAndW9tLScgKyB1b20gKyAnLScgKyByb3c7XG4gICAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnZGF0YS1jb2x1bW4tbmFtZScsIGRhdGFDb2x1bW5OYW1lKTtcblxuICAgICAgICBpZih1b20gPT09ICdncmFtJyB8fCB1b20gPT09ICdveicpe1xuICAgICAgICAgICAgcmFkaW8uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb252ZXJ0TWVhc3VyZW1lbnQocm93KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByYWRpbztcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlTGFiZWwoaW5uZXJIdG1sLCBodG1sRm9yLCB1b20sIHJvdykge1xuXG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgbGFiZWwuY2xhc3NOYW1lID0gJ2Zvcm0tY2hlY2stbGFiZWwnICsgKHVvbSA9PT0gJ2dyYW0nIHx8IHVvbSA9PT0gJ2tnJyA/ICcgbWV0cmljLXJhZGlvJyA6ICcgdXMtcmFkaW8nKTtcbiAgICAgICAgbGFiZWwuaHRtbEZvciA9IGh0bWxGb3I7XG4gICAgICAgIGxhYmVsLmlubmVySFRNTCA9IGlubmVySHRtbDtcbiAgICAgICAgbGFiZWwuaWQgPSAndW9tLScgKyB1b20gKyAnLWxhYmVsLScgKyByb3c7XG4gICAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9XG5cbiAgICB0aGlzLndpbmRvdy51cGRhdGVMaXN0ID0gZnVuY3Rpb24gdXBkYXRlTGlzdChlbGVtZW50LCBsaXN0SWQpe1xuXG4gICAgICAgIGxldCBjb2x1bW5OYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sdW1uLW5hbWUnKTtcbiAgICAgICAgbGV0IHZhbHVlID0gZWxlbWVudC52YWx1ZTtcbiAgICAgICAgbGV0IHVybCA9ICcvZ2Vhci1saXN0LycrbGlzdElkO1xuXG4gICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgIGRhdGFbY29sdW1uTmFtZV0gPSB2YWx1ZTtcblxuICAgICAgICBheGlvcy5wb3N0KHVybCwgZGF0YSwgbGlzdElkKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuXG4gICAgICAgICAgICAgICAgLy8gYWxlcnQocmVzLmRhdGEubXNnKTtcblxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuXG4gICAgICAgICAgICBhbGVydCgnRmFpbGVkIHRvIHVwZGF0ZSBsaXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpO1xuXG4gICAgICAgIH0pO1xuICAgICAgICBpZihjb2x1bW5OYW1lID09PSAnc29ydCcgfHwgY29sdW1uTmFtZSA9PT0gJ2xpc3RfY2xhc3MnKXtcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxuICAgIGNvbnN0IGhlYWRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1jb2xsYXBzaWJsZS1oZWFkZXInKTtcblxuICAgIGhlYWRlcnMuZm9yRWFjaChoZWFkZXIgPT4ge1xuICAgICAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gaGVhZGVyLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgICAgIGNvbnN0IGFycm93ID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWFycm93Jyk7XG4gICAgICAgICAgICBpZiAoY29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLnBhZGRpbmcgPSAnMCAxMHB4JztcbiAgICAgICAgICAgICAgICBhcnJvdy5pbm5lckhUTUwgPSAnJiM5NjYwJztcblxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUucGFkZGluZyA9ICcxMHB4JztcbiAgICAgICAgICAgICAgICBhcnJvdy5pbm5lckhUTUwgPSAnJiM5NjUwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBsZXQgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI21hc3Rlci1pdGVtLXRhYmxlIGlucHV0Jyk7XG4gICAgbGV0IHNlbGVjdElucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpO1xuXG4gICAgaW5wdXRzLmZvckVhY2goZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgaW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0pO1xuICAgIC8vIHNlbGVjdElucHV0cy5mb3JFYWNoKGZ1bmN0aW9uKHNlbGVjdElucHV0KSB7XG4gICAgLy8gICAgIHNlbGVjdElucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAvLyB9KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoR2VhckJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyB2YXIgbXlNb2RhbCA9IG5ldyBib290c3RyYXAuTW9kYWwoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4YW1wbGVNb2RhbCcpLCB7XG4gICAgICAgIC8vICAgICBrZXlib2FyZDogZmFsc2VcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIHZhciBteU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RTZWFyY2hNb2RhbCcpO1xuICAgICAgICBteU1vZGFsLnNob3coKTtcbiAgICB9KTtcbiAgICBjb25zdCBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VhckNoYXJ0Jyk7XG4gICAgbGV0IGNoYXJ0RGF0YSA9IEpTT04ucGFyc2UoIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFydERhdGEnKS52YWx1ZSk7XG5cbiAgICBsZXQgbGlzdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdE5hbWUnKS52YWx1ZVxuICAgIGNvbnN0IG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICAgIHR5cGU6ICdkb3VnaG51dCcsIC8vIENoYXJ0IHR5cGVcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbGFiZWxzOiBjaGFydERhdGEubGFiZWxzLFxuICAgICAgICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgICAgICAgICAgLy8gbGFiZWw6IGxpc3ROYW1lICsgJ0JyZWFrIERvd24nLFxuICAgICAgICAgICAgICAgIGRhdGE6IGNoYXJ0RGF0YS5kYXRhLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY2hhcnREYXRhLmNvbG9ycyxcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgICAgICAgICBob3Zlck9mZnNldDogNFxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgY3V0b3V0OiA0NSwvLyBBZGp1c3QgdGhlIGN1dG91dCBwZXJjZW50YWdlIGhlcmVcbiAgICAgICAgICAgIHJhZGl1czogMTUwLFxuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgICAgICAgZGF0YWxhYmVsczogZmFsc2UgLy8gUmVtb3ZpbmcgdGhpcyBsaW5lIHNob3dzIHRoZSBkYXRhbGFiZWxzIGFnYWluXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbmltYXRpb246e1xuICAgICAgICAgICAgICAgIGFuaW1hdGVSb3RhdGU6dHJ1ZSxcbiAgICAgICAgICAgICAgICBhbmltYXRlU2NhbGU6dHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbn0pO1xuXG5cbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG53aW5kb3cuYXhpb3MgPSBheGlvcztcblxud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJNb2RhbCIsIkNoYXJ0IiwiYm9vdHN0cmFwIiwicmVxdWlyZSIsImdyYW1Db252ZXJ0ZXIiLCJvdW5jZUNvbnZlcnRlciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaG93UGFzc3dvcmQiLCJpZCIsInBhc3N3b3JkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZExpc3RJdGVtIiwibnVtYmVyT2ZJdGVtc1RvQWRkIiwibGluZXNUb0FkZCIsIl9sb29wIiwibGlzdFVPTSIsImZpbmFsSUVsZW1lbnQiLCJpdGVtVGFibGUiLCJ1c2VySWQiLCJsaXN0SWQiLCJmaW5hbEkiLCJyb3ciLCJjcmVhdGVFbGVtZW50IiwiY2VsbDAiLCJzY29wZSIsImlubmVySFRNTCIsImNlbGwxIiwiY291bnRlciIsInNldEF0dHJpYnV0ZSIsIml0ZW1OYW1lIiwiY3JlYXRlTGlzdEl0ZW1JbnB1dCIsInBsYWNlaG9sZGVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2VsbDYiLCJkZWxldGVCdG4iLCJjbGFzc05hbWUiLCJkYXRhIiwidXJsIiwidXBkYXRlSXRlbSIsIl9yZWYiLCJfY2FsbGVlIiwicmVzcG9uc2UiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiYXhpb3MiLCJwb3N0IiwidDAiLCJjb25zb2xlIiwibG9nIiwibmV3SWQiLCJjZWxsMiIsIml0ZW1XZWlnaHQiLCJjZWxsMyIsInJhZGlvMSIsInJhZGlvMiIsInJhZGlvTGFiZWwxIiwicmFkaW9MYWJlbDIiLCJjcmVhdGVSYWRpbyIsImNyZWF0ZUxhYmVsIiwiY2VsbDQiLCJwYWNrZWRBbW91bnQiLCJjZWxsNSIsInRvdGFsTGluZVdlaWdodCIsImFwcGVuZENoaWxkIiwic2VsZWN0Q2VsbCIsImNhdGVnb3J5U2VsZWN0IiwiZ2V0Q2F0ZWdyb3lTZWxlY3QiLCJhcHBlbmQiLCJhZGRFdmVudExpc3RlbmVyV2VpZ2h0Q2FsYyIsInVwZGF0ZVVPTSIsInVzUmFkaW9Ub01ldHJpYyIsIm1ldHJpY1JhZGlvVG9VcyIsIm5lZWRlZEZvcldlaWdodHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibmVlZGVkRm9yV2VpZ2h0IiwiZ2V0TGluZVRvdGFsV2VpZ2h0IiwiY29udmVydCIsInVuZGVmaW5lZCIsIndlaWdodCIsInVvbSIsImxpbmVUb3RhbFdlaWdodEVsZW1lbnQiLCJsaW5lVG90YWwiLCJ0b0ZpeGVkIiwicmVwbGFjZSIsInVwZGF0ZUxpc3RJdGVtIiwiY29udmVydE1lYXN1cmVtZW50IiwidG90YWxXZWlnaHQiLCJ0b3RhbExpbmVXZWlnaHRWYWx1ZSIsIndlaWdodFZhbHVlIiwic21hbGwiLCJsYXJnZSIsImVsZW1lbnQiLCJjaGVja2VkIiwiZ2V0Qm9vbGVhbkRhdGEiLCJjb2x1bW5OYW1lIiwiZ2V0QXR0cmlidXRlIiwiaWRBcnIiLCJzcGxpdCIsImFyckxlbmd0aCIsIml0ZW1JZCIsIml0ZW1JZFZhbHVlIiwic3Vic3RyaW5nIiwicmVzIiwiZXJyIiwiYWxlcnQiLCJlcnJvciIsInVwZGF0ZVRvdGFsTGlzdFdlaWdodHMiLCJ3ZWlnaHRzRm9yUFciLCJiYXNlV2VpZ2h0IiwidG90YWxQYWNrV2VpZ2h0IiwibWF4UGFja1dlaWdodCIsInVvbVRleHQiLCJ3ZWlnaHRGb3JQVyIsImNvbnZlcnRlciIsInJvd1dlaWdodCIsIml0ZW1DYXRlZ29yeUVsZW1lbnQiLCJpdGVtQ2F0ZWdvcnkiLCJkaXZFbGVtZW50IiwiaW5uZXJUZXh0Iiwic3R5bGUiLCJkaXNwbGF5IiwibmFtZUJhc2UiLCJzZWxlY3QiLCJvcHRpb24iLCJ0ZXh0Iiwib3B0aW9uTGlzdCIsIl9yZWYyIiwiX2NhbGxlZTIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJnZXQiLCJjYXRlZ29yeSIsImlucHV0RWxlbWVudHMiLCJpbnB1dEVsZW1lbnQiLCJlbGVtZW50VHlwZSIsImVsZW1lbnRUYWciLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJuZXdFbGVtZW50IiwicGFyZW50RWxlbWVudCIsInJlcGxhY2VDaGlsZCIsImRhdGFDb2x1bW5OYW1lIiwibGFiZWwiLCJyYWRpbyIsImlubmVySHRtbCIsImh0bWxGb3IiLCJ1cGRhdGVMaXN0IiwibG9jYXRpb24iLCJyZWxvYWQiLCJoZWFkZXJzIiwiaGVhZGVyIiwiY29udGVudCIsIm5leHRFbGVtZW50U2libGluZyIsImFycm93IiwicXVlcnlTZWxlY3RvciIsImNvbnRhaW5zIiwicmVtb3ZlIiwibWF4SGVpZ2h0IiwicGFkZGluZyIsInNjcm9sbEhlaWdodCIsImlucHV0cyIsInNlbGVjdElucHV0cyIsImlucHV0IiwiZGlzYWJsZWQiLCJteU1vZGFsIiwic2hvdyIsImN0eCIsImNoYXJ0RGF0YSIsIkpTT04iLCJwYXJzZSIsImxpc3ROYW1lIiwibXlDaGFydCIsImxhYmVscyIsImRhdGFzZXRzIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JzIiwiYm9yZGVyV2lkdGgiLCJob3Zlck9mZnNldCIsIm9wdGlvbnMiLCJjdXRvdXQiLCJyYWRpdXMiLCJsZWdlbmQiLCJwbHVnaW5zIiwiZGF0YWxhYmVscyIsImFuaW1hdGlvbiIsImFuaW1hdGVSb3RhdGUiLCJhbmltYXRlU2NhbGUiLCJkZWZhdWx0cyIsImNvbW1vbiJdLCJzb3VyY2VSb290IjoiIn0=