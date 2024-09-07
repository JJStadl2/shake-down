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
  // document.getElementById('searchGearBtn').addEventListener('click', function () {
  //     let searchModal = document.getElementById('productSearchModal');
  //     searchModal.show();
  // });

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
  var baseWeight = document.getElementById('baseWeight').value;
  var totalPackWeight = document.getElementById('totalPackWeight').value;
  document.getElementById('modalBaseWeight').textContent = baseWeight;
  document.getElementById('modalTotalWeight').textContent = totalPackWeight;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLEVBQUU7TUFBQztNQUNYQyxNQUFNLEVBQUUsR0FBRztNQUNYQyxNQUFNLEVBQUU7UUFDSjNELE9BQU8sRUFBRTtNQUNiLENBQUM7TUFDRDRELE9BQU8sRUFBRTtRQUNMQyxVQUFVLEVBQUUsS0FBSyxDQUFDO01BQ3BCLENBQUM7TUFDSEMsU0FBUyxFQUFDO1FBQ05DLGFBQWEsRUFBQyxJQUFJO1FBQ2xCQyxZQUFZLEVBQUM7TUFDakI7SUFDSjtFQUNKLENBQUMsQ0FBQztFQUdGLElBQUk1RSxVQUFVLEdBQUdwRyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQy9HLEtBQUs7RUFDNUQsSUFBSW1OLGVBQWUsR0FBR3JHLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUMvRyxLQUFLO0VBQ3RFOEcsUUFBUSxDQUFDQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQ2dMLFdBQVcsR0FBRzdFLFVBQVU7RUFDbkVwRyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDZ0wsV0FBVyxHQUFHNUUsZUFBZTtBQUc3RSxDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQ3JtQndCO0FBQzFCMUcsTUFBTSxDQUFDeUMsS0FBSyxHQUFHQSw2Q0FBSztBQUVwQnpDLE1BQU0sQ0FBQ3lDLEtBQUssQ0FBQzhJLFFBQVEsQ0FBQ3JDLE9BQU8sQ0FBQ3NDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLGdCQUFnQjs7Ozs7Ozs7Ozs7QUNIM0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3Nhc3MvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICcuL2Jvb3RzdHJhcCcgO1xuaW1wb3J0ICB7TW9kYWx9ICBmcm9tICdib290c3RyYXAnO1xuLy8gaW1wb3J0ICAnYm9vdHN0cmFwJztcbmltcG9ydCAnQHBvcHBlcmpzL2NvcmUnO1xuaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzL2F1dG8nXG5jb25zdCBib290c3RyYXAgPSByZXF1aXJlKCcuL2Jvb3RzdHJhcCcpXG5jb25zdCBncmFtQ29udmVydGVyID0gMTAwMDtcbmNvbnN0IG91bmNlQ29udmVydGVyID0gMTY7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oZSkge1xuXG4gICAgdGhpcy53aW5kb3cuc2hvd1Bhc3N3b3JkID0gZnVuY3Rpb24gc2hvd1Bhc3N3b3JkKGlkKXtcbiAgICAgICAgICAgIGxldCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgaWYgKHBhc3N3b3JkLnR5cGUgPT09IFwicGFzc3dvcmRcIikge1xuICAgICAgICAgICAgICAgIHBhc3N3b3JkLnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhc3N3b3JkLnR5cGUgPSBcInBhc3N3b3JkXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhpcy53aW5kb3cuYWRkTGlzdEl0ZW0gPSBmdW5jdGlvbiBhZGRMaXN0SXRlbSgpe1xuXG4gICAgICAgIGxldCBudW1iZXJPZkl0ZW1zVG9BZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGluZXNUb0FkZCcpO1xuICAgICAgICBsZXQgbGluZXNUb0FkZCA9IDE7XG4gICAgICAgIGlmKCtudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPCAxKXtcbiAgICAgICAgICAgIG51bWJlck9mSXRlbXNUb0FkZC52YWx1ZSA9IGxpbmVzVG9BZGQ7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbGluZXNUb0FkZCA9ICtudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGluZXNUb0FkZDsgaSsrKXtcblxuXG4gICAgICAgICAgICBsZXQgbGlzdFVPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1b20nKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBmaW5hbElFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmFsLWknKTtcbiAgICAgICAgICAgIGxldCBpdGVtVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS10YWJsZS1ib2R5Jyk7XG4gICAgICAgICAgICBsZXQgdXNlcklkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJJZCcpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGxpc3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0SWQnKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBmaW5hbEkgPSBmaW5hbElFbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgZmluYWxJRWxlbWVudC52YWx1ZSA9ICtmaW5hbEkgKyAxO1xuXG4gICAgICAgICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgY2VsbHMgYW5kIGlucHV0IGVsZW1lbnRzLlxuICAgICAgICAgICAgbGV0IGNlbGwwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgICAgICAgICAgY2VsbDAuc2NvcGUgPSAncm93JztcbiAgICAgICAgICAgIGNlbGwwLmlubmVySFRNTCA9IGZpbmFsSTtcblxuICAgICAgICAgICAgbGV0IGNlbGwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuXG4gICAgICAgICAgICBsZXQgY291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGNvdW50ZXIudHlwZSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICBjb3VudGVyLm5hbWUgPSBcImlkW11cIjtcbiAgICAgICAgICAgIGNvdW50ZXIuaWQgPSAnaWQtJytmaW5hbEk7XG4gICAgICAgICAgICBjb3VudGVyLnZhbHVlID0gJ25ldy0nK2ZpbmFsSTtcbiAgICAgICAgICAgIGNvdW50ZXIuc2V0QXR0cmlidXRlKCdkYXRhLWNvbHVtbi1uYW1lJywnaWQnKTtcblxuICAgICAgICAgICAgbGV0IGl0ZW1OYW1lID0gIGNyZWF0ZUxpc3RJdGVtSW5wdXQoJ3RleHQnLCdpdGVtTmFtZScsZmluYWxJLCdpdGVtX25hbWUnKTtcbiAgICAgICAgICAgIGl0ZW1OYW1lLnBsYWNlaG9sZGVyID0gJ0l0ZW0gTmFtZSc7XG4gICAgICAgICAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKTtcblxuICAgICAgICAgICAgbGV0IGNlbGw2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgICAgIGNlbGw2LmlkID0gJ2J0bi10ZC0nK2ZpbmFsSTtcbiAgICAgICAgICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICBkZWxldGVCdG4uaWQgPSAnZGVsZXRlQnRuLScrZmluYWxJO1xuICAgICAgICAgICAgZGVsZXRlQnRuLmNsYXNzTmFtZSA9ICdidG4gYnRuLXByaW1hcnkgYnRuLXNtICBweS0yJztcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5pbm5lckhUTUwgPSAneCc7XG5cbiAgICAgICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgICAgICBsZXQgdXJsID0gJy9saXN0LWl0ZW0nO1xuICAgICAgICAgICAgZGF0YVsnbGlzdF9pZCddID0gbGlzdElkO1xuICAgICAgICAgICAgZGF0YVsndXNlcl9pZCddID0gdXNlcklkO1xuICAgICAgICAgICAgZGF0YVsnaXRlbV9uYW1lJ10gPSAnJztcbiAgICAgICAgICAgIGxldCB1cGRhdGVJdGVtO1xuICAgICAgICAgICAgdXBkYXRlSXRlbSA9IGFzeW5jIGZ1bmN0aW9uICgpe1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCh1cmwsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIFRvIHVzZSB0aGUgZnVuY3Rpb24gYW5kIGhhbmRsZSB0aGUgcmVzcG9uc2UgZGF0YVxuICAgICAgICAgICAgdXBkYXRlSXRlbSgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCB0aGUgcmVzcG9uc2UgZGF0YVxuICAgICAgICAgICAgICAgIGNvdW50ZXIudmFsdWUgPSBkYXRhLm5ld0lkO1xuICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnL2Rlc3Ryb3ktbGlzdC1pdGVtLycrZGF0YS5uZXdJZCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGV0IGNlbGwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgbGV0IGl0ZW1XZWlnaHQgPSBjcmVhdGVMaXN0SXRlbUlucHV0KCdudW1iZXInLCdpdGVtV2VpZ2h0JyxmaW5hbEksJ2l0ZW1fd2VpZ2h0Jyk7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LnZhbHVlID0gMDtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQuY2xhc3NMaXN0LmFkZCgnZm9yLXdlaWdodCcpO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKCdudW1iZXItaW5wdXQnKTtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJyk7XG4gICAgICAgICAgICBjZWxsMi5jbGFzc0xpc3QuYWRkKCdudW1iZXItY29sJyk7XG5cbiAgICAgICAgICAgIGxldCBjZWxsMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGxldCByYWRpbzE7XG4gICAgICAgICAgICBsZXQgcmFkaW8yO1xuICAgICAgICAgICAgbGV0IHJhZGlvTGFiZWwxO1xuICAgICAgICAgICAgbGV0IHJhZGlvTGFiZWwyO1xuXG4gICAgICAgICAgICBpZihsaXN0VU9NID09PSAndXMnKXtcblxuICAgICAgICAgICAgICAgIHJhZGlvMSA9IGNyZWF0ZVJhZGlvKCdpbl9vdW5jZXMnLCAnJywgJ296JywgZmluYWxJKTtcbiAgICAgICAgICAgICAgICByYWRpb0xhYmVsMSA9IGNyZWF0ZUxhYmVsKCdPWicsICAndW9tLW96LScrZmluYWxJLCAnb3onLCBmaW5hbEkpO1xuICAgICAgICAgICAgICAgIHJhZGlvMiA9IGNyZWF0ZVJhZGlvKCdpbl9sYnMnLCAnJywgJ2xicycsIGZpbmFsSSk7XG4gICAgICAgICAgICAgICAgcmFkaW9MYWJlbDIgPSBjcmVhdGVMYWJlbCgnTEJTJywgICd1b20tbGJzLScrZmluYWxJLCAnbGJzJywgZmluYWxJKTtcblxuICAgICAgICAgICAgfWVsc2V7XG5cbiAgICAgICAgICAgICAgICByYWRpbzEgPSBjcmVhdGVSYWRpbygnaW5fZ3JhbXMnLCAnJywgJ2dyYW0nLCBmaW5hbEkpO1xuICAgICAgICAgICAgICAgIHJhZGlvTGFiZWwxID0gIGNyZWF0ZUxhYmVsKCdHcmFtcycsICAndW9tLWdyYW0tJytmaW5hbEksICdncmFtJywgZmluYWxJKTtcbiAgICAgICAgICAgICAgICByYWRpbzIgPSAgY3JlYXRlUmFkaW8oJ2luX2tpbG9zJywgJycsICdrZycsIGZpbmFsSSk7XG4gICAgICAgICAgICAgICAgcmFkaW9MYWJlbDIgPSBjcmVhdGVMYWJlbCgnS0cnLCAgJ3VvbS1rZy0nK2ZpbmFsSSwgJ2tnJywgZmluYWxJKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGNlbGw0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgY2VsbDQuY2xhc3NMaXN0LmFkZCgnbnVtYmVyLWNvbCcpO1xuICAgICAgICAgICAgbGV0IHBhY2tlZEFtb3VudCA9IGNyZWF0ZUxpc3RJdGVtSW5wdXQoJ251bWJlcicsJ3BhY2tlZEFtb3VudCcsZmluYWxJLCdhbW91bnQnKTtcbiAgICAgICAgICAgIHBhY2tlZEFtb3VudC52YWx1ZSA9IDE7XG5cbiAgICAgICAgICAgIHBhY2tlZEFtb3VudC5jbGFzc0xpc3QuYWRkKCdmb3Itd2VpZ2h0Jyk7XG4gICAgICAgICAgICBwYWNrZWRBbW91bnQuY2xhc3NMaXN0LmFkZCgnbnVtYmVyLWlucHV0Jyk7XG4gICAgICAgICAgICBwYWNrZWRBbW91bnQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJyk7XG5cbiAgICAgICAgICAgIGxldCBjZWxsNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGNlbGw1LmNsYXNzTGlzdC5hZGQoJ251bWJlci1jb2wnKTtcbiAgICAgICAgICAgIGxldCB0b3RhbExpbmVXZWlnaHQgPSBjcmVhdGVMaXN0SXRlbUlucHV0KCdudW1iZXInLCd0b3RhbExpbmVXZWlnaHQnLGZpbmFsSSwndG90YWxfbGluZV93ZWlnaHQnKTtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC52YWx1ZSA9IDA7XG4gICAgICAgICAgICB0b3RhbExpbmVXZWlnaHQuc2V0QXR0cmlidXRlKCdkYXRhLWNvbHVtbi1uYW1lJywndG90YWxfbGluZV93ZWlnaHQnKTtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyx0cnVlKTtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC5jbGFzc0xpc3QuYWRkKCdudW1iZXItaW5wdXQnKTtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKTtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC5jbGFzc0xpc3QuYWRkKCdmb3ItdG90YWwtbGlzdC13ZWlnaHQnKTtcblxuICAgICAgICAgICAgLy9hcHBlbmQgaW5wdXRzIHRvIGNlbGxzLlxuICAgICAgICAgICAgY2VsbDEuYXBwZW5kQ2hpbGQoY291bnRlcik7XG4gICAgICAgICAgICBjZWxsMS5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gICAgICAgICAgICBjZWxsMi5hcHBlbmRDaGlsZChpdGVtV2VpZ2h0KTtcblxuICAgICAgICAgICAgbGV0IHNlbGVjdENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBsZXQgY2F0ZWdvcnlTZWxlY3QgPSBnZXRDYXRlZ3JveVNlbGVjdChmaW5hbEkpO1xuICAgICAgICAgICAgc2VsZWN0Q2VsbC5hcHBlbmQoY2F0ZWdvcnlTZWxlY3QpO1xuXG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChyYWRpbzEpO1xuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbDEpO1xuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQocmFkaW8yKTtcbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHJhZGlvTGFiZWwyKTtcblxuICAgICAgICAgICAgY2VsbDQuYXBwZW5kQ2hpbGQocGFja2VkQW1vdW50KTtcbiAgICAgICAgICAgIGNlbGw1LmFwcGVuZENoaWxkKHRvdGFsTGluZVdlaWdodCk7XG4gICAgICAgICAgICBjZWxsNi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG5cbiAgICAgICAgICAgIC8vIEFwcGVuZCBjZWxscyB0byB0aGUgcm93LlxuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwwKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsMSk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoc2VsZWN0Q2VsbCk7XG4gICAgICAgICAgICAvLyByb3cuYXBwZW5kQ2hpbGQoY2VsbDMpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwyKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsNCk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDUpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwzKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsNik7XG5cblxuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSByb3cgdG8gdGhlIHRhYmxlLlxuICAgICAgICAgICAgaXRlbVRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG5cbiAgICAgICAgICAgIC8vYWRkIGZ1bmN0aW9ucyB0byBjYWxjdWxhdGUgYW5kIGNvbnZlcnQgdG90YWwgd2VpZ2h0LlxuICAgICAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcldlaWdodENhbGMoZmluYWxJKTtcbiAgICAgICAgfVxuICAgICAgICBudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWU9MTtcblxuICAgIH1cblxuICAgIHRoaXMud2luZG93LnVwZGF0ZVVPTSA9IGZ1bmN0aW9uIHVwZGF0ZVVPTSh2YWx1ZSkge1xuICAgICAgICBpZih2YWx1ZSAhPT0gJ3VzJyl7XG4gICAgICAgICAgIHVzUmFkaW9Ub01ldHJpYygpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIG1ldHJpY1JhZGlvVG9VcygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJXZWlnaHRDYWxjKHJvdyl7XG4gICAgICAgIGxldCBuZWVkZWRGb3JXZWlnaHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvci13ZWlnaHQnKTtcbiAgICAgICAgbmVlZGVkRm9yV2VpZ2h0cy5mb3JFYWNoKGZ1bmN0aW9uIChuZWVkZWRGb3JXZWlnaHQpe1xuICAgICAgICAgICAgbmVlZGVkRm9yV2VpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGdldExpbmVUb3RhbFdlaWdodChyb3cpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICB9XG5cbiAgICAgdGhpcy53aW5kb3cuZ2V0TGluZVRvdGFsV2VpZ2h0ID0gZnVuY3Rpb24gZ2V0TGluZVRvdGFsV2VpZ2h0KHJvdyxjb252ZXJ0ID0gZmFsc2Upe1xuXG4gICAgICAgIGxldCB3ZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbVdlaWdodC0nK3JvdykudmFsdWU7XG4gICAgICAgIGxldCBwYWNrZWRBbW91bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFja2VkQW1vdW50LScrcm93KS52YWx1ZTtcbiAgICAgICAgbGV0IHVvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1b20nKTtcbiAgICAgICAgbGV0IGxpbmVUb3RhbFdlaWdodEVsZW1lbnQgPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsTGluZVdlaWdodC0nK3Jvdyk7XG5cbiAgICAgICAgbGV0IGxpbmVUb3RhbCA9IDA7XG4gICAgICAgIGxpbmVUb3RhbCA9ICt3ZWlnaHQgKiArcGFja2VkQW1vdW50O1xuICAgICAgICBsaW5lVG90YWwgPSBsaW5lVG90YWwudG9GaXhlZCgyKS5yZXBsYWNlKC9bLixdMDAkLywgXCJcIik7XG4gICAgICAgIGxpbmVUb3RhbFdlaWdodEVsZW1lbnQudmFsdWUgPSBsaW5lVG90YWw7XG5cbiAgICAgICAgdXBkYXRlTGlzdEl0ZW0obGluZVRvdGFsV2VpZ2h0RWxlbWVudCk7XG5cblxuICAgIH1cbiAgICB0aGlzLndpbmRvdy5jb252ZXJ0TWVhc3VyZW1lbnQgPSBmdW5jdGlvbiBjb252ZXJ0TWVhc3VyZW1lbnQocm93LCBjb252ZXJ0ID0gZmFsc2Upe1xuXG4gICAgICAgIGxldCB1b20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW9tJykudmFsdWU7XG4gICAgICAgIGxldCB3ZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbVdlaWdodC0nK3Jvdyk7XG4gICAgICAgIGxldCBwYWNrZWRBbW91bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFja2VkQW1vdW50LScrcm93KS52YWx1ZTtcbiAgICAgICAgbGV0IHRvdGFsV2VpZ2h0ID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbExpbmVXZWlnaHQtJytyb3cpXG4gICAgICAgIGxldCB0b3RhbExpbmVXZWlnaHRWYWx1ZSA9IDA7XG4gICAgICAgIGxldCB3ZWlnaHRWYWx1ZSA9IHdlaWdodC52YWx1ZTtcbiAgICAgICAgbGV0IHNtYWxsO1xuICAgICAgICBsZXQgbGFyZ2U7XG4gICAgICAgIGxldCBlbGVtZW50O1xuXG4gICAgICAgIGlmKHVvbSA9PT0gJ3VzJyl7XG4gICAgICAgICAgICBzbWFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1b20tb3otJytyb3cpO1xuICAgICAgICAgICAgbGFyZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW9tLWxicy0nK3Jvdyk7XG4gICAgICAgICAgICBpZihzbWFsbC5jaGVja2VkID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICB3ZWlnaHRWYWx1ZSA9ICt3ZWlnaHRWYWx1ZSAqIDE2O1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBzbWFsbDtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHdlaWdodFZhbHVlID0gK3dlaWdodFZhbHVlIC8gMTY7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGxhcmdlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzbWFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1b20tZ3JhbS0nK3Jvdyk7XG4gICAgICAgICAgICBsYXJnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1b20ta2ctJytyb3cpO1xuXG4gICAgICAgICAgICBpZihzbWFsbC5jaGVja2VkID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICB3ZWlnaHRWYWx1ZSA9ICt3ZWlnaHRWYWx1ZSAqIDEwMDA7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IHNtYWxsO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgd2VpZ2h0VmFsdWUgPSArd2VpZ2h0VmFsdWUgLzEwMDA7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGxhcmdlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRvdGFsTGluZVdlaWdodFZhbHVlID0gK3dlaWdodFZhbHVlICogK3BhY2tlZEFtb3VudDtcbiAgICAgICAgd2VpZ2h0LnZhbHVlID0gd2VpZ2h0VmFsdWUudG9GaXhlZCgyKS5yZXBsYWNlKC9bLixdMDAkLywgXCJcIik7XG4gICAgICAgIHRvdGFsV2VpZ2h0LnZhbHVlID0gdG90YWxMaW5lV2VpZ2h0VmFsdWUudG9GaXhlZCgyKS5yZXBsYWNlKC9bLixdMDAkLywgXCJcIik7XG4gICAgICAgIHVwZGF0ZUxpc3RJdGVtKGVsZW1lbnQpO1xuICAgICAgICB1cGRhdGVMaXN0SXRlbSh3ZWlnaHQpO1xuICAgICAgICB1cGRhdGVMaXN0SXRlbSh0b3RhbFdlaWdodCk7XG5cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Qm9vbGVhbkRhdGEoY29sdW1uTmFtZSl7XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgZGF0YVsnaW5fb3VuY2VzJ10gPSBmYWxzZTtcbiAgICAgICAgZGF0YVsnaW5fbGJzJ10gPSBmYWxzZTtcbiAgICAgICAgZGF0YVsnaW5fZ3JhbXMnXSA9IGZhbHNlO1xuICAgICAgICBkYXRhWydpbl9raWxvcyddID0gZmFsc2U7XG4gICAgICAgIHN3aXRjaChjb2x1bW5OYW1lKXtcbiAgICAgICAgICAgIGNhc2UgJ2luX291bmNlcyc6XG4gICAgICAgICAgICAgICAgZGF0YVsnaW5fb3VuY2VzJ10gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaW5fbGJzJzpcbiAgICAgICAgICAgICAgICBkYXRhWydpbl9sYnMnXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ2luX2dyYW1zJzpcbiAgICAgICAgICAgICAgICBkYXRhWydpbl9ncmFtcyddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnaW5fa2lsb3MnOlxuICAgICAgICAgICAgICAgIGRhdGFbJ2luX2tpbG9zJ10gPSB0cnVlO1xuICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICB0aGlzLndpbmRvdy51cGRhdGVMaXN0SXRlbSA9IGZ1bmN0aW9uIHVwZGF0ZUxpc3RJdGVtKGVsZW1lbnQpe1xuXG4gICAgICAgIGxldCBjb2x1bW5OYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sdW1uLW5hbWUnKTtcbiAgICAgICAgbGV0IHZhbHVlID0gZWxlbWVudC52YWx1ZTtcbiAgICAgICAgbGV0IGlkID0gZWxlbWVudC5pZDtcbiAgICAgICAgbGV0IGlkQXJyID0gaWQuc3BsaXQoJy0nKTtcbiAgICAgICAgbGV0IGFyckxlbmd0aCA9IGlkQXJyLmxlbmd0aFxuICAgICAgICBsZXQgcm93ID0gaWRBcnJbYXJyTGVuZ3RoLTFdO1xuICAgICAgICBsZXQgaXRlbUlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lkLScrcm93KTtcbiAgICAgICAgbGV0IGl0ZW1JZFZhbHVlID0gaXRlbUlkLnZhbHVlO1xuICAgICAgICBsZXQgbGlzdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RJZCcpLnZhbHVlO1xuICAgICAgICBsZXQgdXJsID0gJy9saXN0LWl0ZW0vJytpdGVtSWRWYWx1ZTtcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgbGV0IHVzZXJJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VySWQnKS52YWx1ZTtcblxuICAgICAgICBkYXRhW2NvbHVtbk5hbWVdID0gdmFsdWU7XG5cbiAgICAgICAgaWYoY29sdW1uTmFtZS5zdWJzdHJpbmcoMCwzKSA9PT0gJ2luXycpe1xuICAgICAgICAgICAgZGF0YSA9IGdldEJvb2xlYW5EYXRhKGNvbHVtbk5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVsnbGlzdF9pZCddID0gbGlzdElkO1xuICAgICAgICBkYXRhWyd1c2VyX2lkJ10gPSB1c2VySWQ7XG4gICAgICAgIGRhdGFbJ2lkJ10gPSBpdGVtSWRWYWx1ZTtcblxuICAgICAgICBheGlvcy5wb3N0KHVybCwgZGF0YSwgaXRlbUlkKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBhbGVydCgnRmFpbGVkIHRvIHVwZGF0ZSBsaXN0IGl0ZW0uIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyk7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHVwZGF0ZVRvdGFsTGlzdFdlaWdodHMoKTtcblxuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGVUb3RhbExpc3RXZWlnaHRzKCl7XG5cbiAgICAgICAgbGV0IHdlaWdodHNGb3JQVyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3ItdG90YWwtbGlzdC13ZWlnaHQnKTtcbiAgICAgICAgbGV0IGJhc2VXZWlnaHQgPSAwO1xuICAgICAgICBsZXQgdG90YWxQYWNrV2VpZ2h0ID0gMDtcbiAgICAgICAgbGV0IG1heFBhY2tXZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF4UGFja1dlaWdodCcpLnZhbHVlO1xuICAgICAgICBsZXQgdW9tVGV4dCA9ICdMQlMnO1xuICAgICAgICB3ZWlnaHRzRm9yUFcuZm9yRWFjaChmdW5jdGlvbiAod2VpZ2h0Rm9yUFcpe1xuXG4gICAgICAgICAgICBsZXQgaWQgPSB3ZWlnaHRGb3JQVy5pZDtcbiAgICAgICAgICAgIGxldCBpZEFyciA9IGlkLnNwbGl0KCctJyk7XG4gICAgICAgICAgICBsZXQgYXJyTGVuZ3RoID0gaWRBcnIubGVuZ3RoXG4gICAgICAgICAgICBsZXQgcm93ID0gaWRBcnJbYXJyTGVuZ3RoLTFdO1xuICAgICAgICAgICAgbGV0IHBhY2tlZEFtb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWNrZWRBbW91bnQtJytyb3cpLnZhbHVlXG4gICAgICAgICAgICBsZXQgY29udmVydGVyID0gMTtcbiAgICAgICAgICAgIGxldCByb3dXZWlnaHQgPSArd2VpZ2h0Rm9yUFcudmFsdWU7XG4gICAgICAgICAgICBsZXQgdW9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VvbScpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGl0ZW1DYXRlZ29yeUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbUNhdGVnb3J5LScrcm93KTtcbiAgICAgICAgICAgIGxldCBpdGVtQ2F0ZWdvcnkgPSAnJztcbiAgICAgICAgICAgIGlmKGl0ZW1DYXRlZ29yeUVsZW1lbnQpe1xuICAgICAgICAgICAgICAgIGl0ZW1DYXRlZ29yeSA9IGl0ZW1DYXRlZ29yeUVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgaWYoaXRlbUNhdGVnb3J5ID09PSB1bmRlZmluZWQgfHwgaXRlbUNhdGVnb3J5ID09PSBudWxsKXtcbiAgICAgICAgICAgICAgICBpdGVtQ2F0ZWdvcnkgPSAnJztcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBpZih1b20gPT09ICd1cycpe1xuICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1b20tb3otJytyb3cpLmNoZWNrZWQgPT09IHRydWUpe1xuICAgICAgICAgICAgICAgICAgICBjb252ZXJ0ZXIgPSBvdW5jZUNvbnZlcnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW9tLW96LScrcm93KS5jaGVja2VkID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgY29udmVydGVyID0gZ3JhbUNvbnZlcnRlcjtcbiAgICAgICAgICAgICAgICAgICAgdW9tVGV4dCA9ICdLRyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0b3RhbFBhY2tXZWlnaHQgPSB0b3RhbFBhY2tXZWlnaHQgKyAoK3BhY2tlZEFtb3VudCAqICAoK3Jvd1dlaWdodC9jb252ZXJ0ZXIpKTtcblxuICAgICAgICAgICAgaWYoaXRlbUNhdGVnb3J5ICE9PSAnY29uc3VtYWJsZXMnKXtcbiAgICAgICAgICAgICAgICBiYXNlV2VpZ2h0ID0gYmFzZVdlaWdodCArICgrcGFja2VkQW1vdW50ICogKCtyb3dXZWlnaHQvY29udmVydGVyKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYoK2Jhc2VXZWlnaHQgPiArbWF4UGFja1dlaWdodCl7XG4gICAgICAgICAgICBsZXQgZGl2RWxlbWVudCA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VpZ2h0V2FybmluZy1kaXYnKTtcbiAgICAgICAgICAgIGRpdkVsZW1lbnQuaW5uZXJUZXh0ID0gJ1RoZSBiYXNlIHdlaWdodCAoJytiYXNlV2VpZ2h0LnRvRml4ZWQoMikgKycgJysgdW9tVGV4dCsnKSBvZiB0aGUgaXRlbXMgb24gdGhpcyBsaXN0IGhhdmUgZXhjZWVkZWQgdGhlIHdlaWdodCBmb3IgdGhlIHR5cGUvc3R5bGUgb2YgaGlrZSBzZWxlY3RlZCBmb3IgdGhpcyBsaXN0LidcbiAgICAgICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlaWdodFdhcm5pbmctZGl2Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFzZVdlaWdodCcpLiB2YWx1ZSA9IGJhc2VXZWlnaHQudG9GaXhlZCgyKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUGFja1dlaWdodCcpLnZhbHVlID0gdG90YWxQYWNrV2VpZ2h0LnRvRml4ZWQoMik7XG4gICAgfVxuICAgIGZ1bmN0aW9uICBjcmVhdGVMaXN0SXRlbUlucHV0KHR5cGUsbmFtZUJhc2Uscm93LGNvbHVtbk5hbWUpe1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgZWxlbWVudC50eXBlID0gdHlwZTtcbiAgICAgICAgZWxlbWVudC5uYW1lID0gbmFtZUJhc2UrXCJbXVwiO1xuICAgICAgICBlbGVtZW50LmlkID0gbmFtZUJhc2UrJy0nK3JvdztcbiAgICAgICAgZWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jb2x1bW4tbmFtZScsY29sdW1uTmFtZSk7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB1cGRhdGVMaXN0SXRlbShlbGVtZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG5cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Q2F0ZWdyb3lTZWxlY3Qocm93KXtcblxuICAgICAgICBsZXQgc2VsZWN0ID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgIHNlbGVjdC5pZCA9ICdJdGVtQ2F0ZWdvcnktJytyb3c7XG4gICAgICAgIHNlbGVjdC5uYW1lID0gJ2l0ZW1DYXRlZ29yeS0nK3JvdztcbiAgICAgICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1jb2x1bW4tbmFtZScsJ2l0ZW1fY2F0ZWdvcnknKTtcbiAgICAgICAgc2VsZWN0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xuXG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSAnJztcbiAgICAgICAgb3B0aW9uLnRleHQgPSdDaG9vc2UnO1xuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgbGV0IG9wdGlvbkxpc3Q7XG5cbiAgICAgICAgICAgIG9wdGlvbkxpc3QgPSBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2xpc3QtaXRlbS1jYXRlZ29yaWVzJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBlcnJvclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gVG8gdXNlIHRoZSBmdW5jdGlvbiBhbmQgaGFuZGxlIHRoZSByZXNwb25zZSBkYXRhXG4gICAgICAgICAgICBvcHRpb25MaXN0KCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIERvIHNvbWV0aGluZyB3aXRoIHRoZSByZXNwb25zZSBkYXRhXG4gICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aCA7aSsrKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGRhdGFbaV0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID1kYXRhW2ldLmNhdGVnb3J5O1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdXBkYXRlTGlzdEl0ZW0oc2VsZWN0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNlbGVjdDtcblxuICAgIH1cbiAgICBmdW5jdGlvbiBtZXRyaWNSYWRpb1RvVXMoKXtcbiAgICAgICAgbGV0IGlucHV0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWV0cmljLXJhZGlvJyk7XG4gICAgICAgIGlucHV0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXRFbGVtZW50KSB7XG5cbiAgICAgICAgICAgIGxldCBpZEFyciA9IGlucHV0RWxlbWVudC5pZC5zcGxpdCgnLScpO1xuICAgICAgICAgICAgbGV0IHVvbSA9IGlkQXJyWzFdO1xuICAgICAgICAgICAgbGV0IHJvdyA9IGlkQXJyW2lkQXJyLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRUeXBlID0gaW5wdXRFbGVtZW50LnR5cGU7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFRhZyA9IGlucHV0RWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIGxldCBuZXdFbGVtZW50O1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudFR5cGUgPT09ICdyYWRpbycgJiYgdW9tID09PSAnZ3JhbScpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlUmFkaW8oJ2luX291bmNlcycsICdPWicsICdveicsIHJvdywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUeXBlID09PSAncmFkaW8nICYmIHVvbSA9PT0gJ2tnJykge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVSYWRpbygnaW5fbGJzJywgJ0xCUycsICdsYnMnLCByb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VGFnID09PSAnbGFiZWwnICYmIHVvbSA9PT0gJ2dyYW0nKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZUxhYmVsKCdPWicsICd1b20tb3otJyArIHJvdywgJ296Jywgcm93KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFRhZyA9PT0gJ2xhYmVsJyAmJiB1b20gPT09ICdrZycpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlTGFiZWwoJ0xCUycsICd1b20tbGJzLScgKyByb3csICdsYnMnLCByb3cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmV3RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZChuZXdFbGVtZW50LCBpbnB1dEVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cbiAgICBmdW5jdGlvbiB1c1JhZGlvVG9NZXRyaWMoKXtcbiAgICAgICAgbGV0IGlucHV0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudXMtcmFkaW8nKTtcbiAgICAgICAgaW5wdXRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dEVsZW1lbnQpIHtcblxuICAgICAgICAgICAgbGV0IGlkQXJyID0gaW5wdXRFbGVtZW50LmlkLnNwbGl0KCctJyk7XG4gICAgICAgICAgICBsZXQgdW9tID0gaWRBcnJbMV07XG4gICAgICAgICAgICBsZXQgcm93ID0gaWRBcnJbaWRBcnIubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBsZXQgZWxlbWVudFR5cGUgPSBpbnB1dEVsZW1lbnQudHlwZTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50VGFnID0gaW5wdXRFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGxldCBuZXdFbGVtZW50O1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudFR5cGUgPT09ICdyYWRpbycgJiYgdW9tID09PSAnb3onKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZVJhZGlvKCdpbl9ncmFtcycsICdHcmFtcycsICdncmFtJywgcm93KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFR5cGUgPT09ICdyYWRpbycgJiYgdW9tID09PSAnbGJzJykge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVSYWRpbygnaW5fa2lsb3MnLCAnS0cnLCAna2cnLCByb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VGFnID09PSAnbGFiZWwnICYmIHVvbSA9PT0gJ296Jykge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVMYWJlbCgnR3JhbXMnLCAndW9tLWdyYW0tJyArIHJvdywgJ2dyYW0nLCByb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VGFnID09PSAnbGFiZWwnICYmIHVvbSA9PT0gJ2xicycpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlTGFiZWwoJ0tHJywgJ3VvbS1rZy0nICsgcm93LCAna2cnLCByb3cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmV3RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZChuZXdFbGVtZW50LCBpbnB1dEVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlUmFkaW8oZGF0YUNvbHVtbk5hbWUsIGxhYmVsLCB1b20sIHJvdykge1xuXG4gICAgICAgIGxldCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgcmFkaW8uY2xhc3NOYW1lID0gJ2Zvcm0tY2hlY2staW5wdXQnICsgKHVvbSA9PT0gJ2dyYW0nIHx8IHVvbSA9PT0gJ2tnJyA/ICcgbWV0cmljLXJhZGlvJyA6ICcgdXMtcmFkaW8nKTtcbiAgICAgICAgcmFkaW8udHlwZSA9IFwicmFkaW9cIjtcbiAgICAgICAgcmFkaW8ubmFtZSA9IFwidW9tLVwiICsgcm93ICsgXCJbXVwiO1xuICAgICAgICByYWRpby5pZCA9ICd1b20tJyArIHVvbSArICctJyArIHJvdztcbiAgICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCdkYXRhLWNvbHVtbi1uYW1lJywgZGF0YUNvbHVtbk5hbWUpO1xuXG4gICAgICAgIGlmKHVvbSA9PT0gJ2dyYW0nIHx8IHVvbSA9PT0gJ296Jyl7XG4gICAgICAgICAgICByYWRpby5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnZlcnRNZWFzdXJlbWVudChyb3cpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJhZGlvO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVMYWJlbChpbm5lckh0bWwsIGh0bWxGb3IsIHVvbSwgcm93KSB7XG5cbiAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBsYWJlbC5jbGFzc05hbWUgPSAnZm9ybS1jaGVjay1sYWJlbCcgKyAodW9tID09PSAnZ3JhbScgfHwgdW9tID09PSAna2cnID8gJyBtZXRyaWMtcmFkaW8nIDogJyB1cy1yYWRpbycpO1xuICAgICAgICBsYWJlbC5odG1sRm9yID0gaHRtbEZvcjtcbiAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gaW5uZXJIdG1sO1xuICAgICAgICBsYWJlbC5pZCA9ICd1b20tJyArIHVvbSArICctbGFiZWwtJyArIHJvdztcbiAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH1cblxuICAgIHRoaXMud2luZG93LnVwZGF0ZUxpc3QgPSBmdW5jdGlvbiB1cGRhdGVMaXN0KGVsZW1lbnQsIGxpc3RJZCl7XG5cbiAgICAgICAgbGV0IGNvbHVtbk5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jb2x1bW4tbmFtZScpO1xuICAgICAgICBsZXQgdmFsdWUgPSBlbGVtZW50LnZhbHVlO1xuICAgICAgICBsZXQgdXJsID0gJy9nZWFyLWxpc3QvJytsaXN0SWQ7XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgZGF0YVtjb2x1bW5OYW1lXSA9IHZhbHVlO1xuXG4gICAgICAgIGF4aW9zLnBvc3QodXJsLCBkYXRhLCBsaXN0SWQpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAvLyBhbGVydChyZXMuZGF0YS5tc2cpO1xuXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG5cbiAgICAgICAgICAgIGFsZXJ0KCdGYWlsZWQgdG8gdXBkYXRlIGxpc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyk7XG5cbiAgICAgICAgfSk7XG4gICAgICAgIGlmKGNvbHVtbk5hbWUgPT09ICdzb3J0JyB8fCBjb2x1bW5OYW1lID09PSAnbGlzdF9jbGFzcycpe1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gICAgY29uc3QgaGVhZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLWNvbGxhcHNpYmxlLWhlYWRlcicpO1xuXG4gICAgaGVhZGVycy5mb3JFYWNoKGhlYWRlciA9PiB7XG4gICAgICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBoZWFkZXIubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgY29uc3QgYXJyb3cgPSBoZWFkZXIucXVlcnlTZWxlY3RvcignLmZvcm0tYXJyb3cnKTtcbiAgICAgICAgICAgIGlmIChjb250ZW50LmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUucGFkZGluZyA9ICcwIDEwcHgnO1xuICAgICAgICAgICAgICAgIGFycm93LmlubmVySFRNTCA9ICcmIzk2NjAnO1xuXG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBjb250ZW50LnNjcm9sbEhlaWdodCArICdweCc7XG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5wYWRkaW5nID0gJzEwcHgnO1xuICAgICAgICAgICAgICAgIGFycm93LmlubmVySFRNTCA9ICcmIzk2NTAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGxldCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbWFzdGVyLWl0ZW0tdGFibGUgaW5wdXQnKTtcbiAgICBsZXQgc2VsZWN0SW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0Jyk7XG5cbiAgICBpbnB1dHMuZm9yRWFjaChmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICBpbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSk7XG4gICAgLy8gc2VsZWN0SW5wdXRzLmZvckVhY2goZnVuY3Rpb24oc2VsZWN0SW5wdXQpIHtcbiAgICAvLyAgICAgc2VsZWN0SW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIC8vIH0pO1xuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hHZWFyQnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgIGxldCBzZWFyY2hNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0U2VhcmNoTW9kYWwnKTtcbiAgICAvLyAgICAgc2VhcmNoTW9kYWwuc2hvdygpO1xuICAgIC8vIH0pO1xuXG5cbiAgICBjb25zdCBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VhckNoYXJ0Jyk7XG4gICAgbGV0IGNoYXJ0RGF0YSA9IEpTT04ucGFyc2UoIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFydERhdGEnKS52YWx1ZSk7XG5cbiAgICBsZXQgbGlzdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdE5hbWUnKS52YWx1ZVxuICAgIGNvbnN0IG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICAgIHR5cGU6ICdkb3VnaG51dCcsIC8vIENoYXJ0IHR5cGVcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbGFiZWxzOiBjaGFydERhdGEubGFiZWxzLFxuICAgICAgICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgICAgICAgICAgLy8gbGFiZWw6IGxpc3ROYW1lICsgJ0JyZWFrIERvd24nLFxuICAgICAgICAgICAgICAgIGRhdGE6IGNoYXJ0RGF0YS5kYXRhLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY2hhcnREYXRhLmNvbG9ycyxcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgICAgICAgICBob3Zlck9mZnNldDogNFxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgY3V0b3V0OiA0NSwvLyBBZGp1c3QgdGhlIGN1dG91dCBwZXJjZW50YWdlIGhlcmVcbiAgICAgICAgICAgIHJhZGl1czogMTUwLFxuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgICAgICAgZGF0YWxhYmVsczogZmFsc2UgLy8gUmVtb3ZpbmcgdGhpcyBsaW5lIHNob3dzIHRoZSBkYXRhbGFiZWxzIGFnYWluXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbmltYXRpb246e1xuICAgICAgICAgICAgICAgIGFuaW1hdGVSb3RhdGU6dHJ1ZSxcbiAgICAgICAgICAgICAgICBhbmltYXRlU2NhbGU6dHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cblxuICAgIGxldCBiYXNlV2VpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhc2VXZWlnaHQnKS52YWx1ZTtcbiAgICBsZXQgdG90YWxQYWNrV2VpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUGFja1dlaWdodCcpLnZhbHVlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbEJhc2VXZWlnaHQnKS50ZXh0Q29udGVudCA9IGJhc2VXZWlnaHQ7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsVG90YWxXZWlnaHQnKS50ZXh0Q29udGVudCA9IHRvdGFsUGFja1dlaWdodDtcblxuXG59KTtcblxuXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xud2luZG93LmF4aW9zID0gYXhpb3M7XG5cbndpbmRvdy5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiTW9kYWwiLCJDaGFydCIsImJvb3RzdHJhcCIsInJlcXVpcmUiLCJncmFtQ29udmVydGVyIiwib3VuY2VDb252ZXJ0ZXIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2hvd1Bhc3N3b3JkIiwiaWQiLCJwYXNzd29yZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRMaXN0SXRlbSIsIm51bWJlck9mSXRlbXNUb0FkZCIsImxpbmVzVG9BZGQiLCJfbG9vcCIsImxpc3RVT00iLCJmaW5hbElFbGVtZW50IiwiaXRlbVRhYmxlIiwidXNlcklkIiwibGlzdElkIiwiZmluYWxJIiwicm93IiwiY3JlYXRlRWxlbWVudCIsImNlbGwwIiwic2NvcGUiLCJpbm5lckhUTUwiLCJjZWxsMSIsImNvdW50ZXIiLCJzZXRBdHRyaWJ1dGUiLCJpdGVtTmFtZSIsImNyZWF0ZUxpc3RJdGVtSW5wdXQiLCJwbGFjZWhvbGRlciIsImNsYXNzTGlzdCIsImFkZCIsImNlbGw2IiwiZGVsZXRlQnRuIiwiY2xhc3NOYW1lIiwiZGF0YSIsInVybCIsInVwZGF0ZUl0ZW0iLCJfcmVmIiwiX2NhbGxlZSIsInJlc3BvbnNlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImF4aW9zIiwicG9zdCIsInQwIiwiY29uc29sZSIsImxvZyIsIm5ld0lkIiwiY2VsbDIiLCJpdGVtV2VpZ2h0IiwiY2VsbDMiLCJyYWRpbzEiLCJyYWRpbzIiLCJyYWRpb0xhYmVsMSIsInJhZGlvTGFiZWwyIiwiY3JlYXRlUmFkaW8iLCJjcmVhdGVMYWJlbCIsImNlbGw0IiwicGFja2VkQW1vdW50IiwiY2VsbDUiLCJ0b3RhbExpbmVXZWlnaHQiLCJhcHBlbmRDaGlsZCIsInNlbGVjdENlbGwiLCJjYXRlZ29yeVNlbGVjdCIsImdldENhdGVncm95U2VsZWN0IiwiYXBwZW5kIiwiYWRkRXZlbnRMaXN0ZW5lcldlaWdodENhbGMiLCJ1cGRhdGVVT00iLCJ1c1JhZGlvVG9NZXRyaWMiLCJtZXRyaWNSYWRpb1RvVXMiLCJuZWVkZWRGb3JXZWlnaHRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm5lZWRlZEZvcldlaWdodCIsImdldExpbmVUb3RhbFdlaWdodCIsImNvbnZlcnQiLCJ1bmRlZmluZWQiLCJ3ZWlnaHQiLCJ1b20iLCJsaW5lVG90YWxXZWlnaHRFbGVtZW50IiwibGluZVRvdGFsIiwidG9GaXhlZCIsInJlcGxhY2UiLCJ1cGRhdGVMaXN0SXRlbSIsImNvbnZlcnRNZWFzdXJlbWVudCIsInRvdGFsV2VpZ2h0IiwidG90YWxMaW5lV2VpZ2h0VmFsdWUiLCJ3ZWlnaHRWYWx1ZSIsInNtYWxsIiwibGFyZ2UiLCJlbGVtZW50IiwiY2hlY2tlZCIsImdldEJvb2xlYW5EYXRhIiwiY29sdW1uTmFtZSIsImdldEF0dHJpYnV0ZSIsImlkQXJyIiwic3BsaXQiLCJhcnJMZW5ndGgiLCJpdGVtSWQiLCJpdGVtSWRWYWx1ZSIsInN1YnN0cmluZyIsInJlcyIsImVyciIsImFsZXJ0IiwiZXJyb3IiLCJ1cGRhdGVUb3RhbExpc3RXZWlnaHRzIiwid2VpZ2h0c0ZvclBXIiwiYmFzZVdlaWdodCIsInRvdGFsUGFja1dlaWdodCIsIm1heFBhY2tXZWlnaHQiLCJ1b21UZXh0Iiwid2VpZ2h0Rm9yUFciLCJjb252ZXJ0ZXIiLCJyb3dXZWlnaHQiLCJpdGVtQ2F0ZWdvcnlFbGVtZW50IiwiaXRlbUNhdGVnb3J5IiwiZGl2RWxlbWVudCIsImlubmVyVGV4dCIsInN0eWxlIiwiZGlzcGxheSIsIm5hbWVCYXNlIiwic2VsZWN0Iiwib3B0aW9uIiwidGV4dCIsIm9wdGlvbkxpc3QiLCJfcmVmMiIsIl9jYWxsZWUyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiZ2V0IiwiY2F0ZWdvcnkiLCJpbnB1dEVsZW1lbnRzIiwiaW5wdXRFbGVtZW50IiwiZWxlbWVudFR5cGUiLCJlbGVtZW50VGFnIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwibmV3RWxlbWVudCIsInBhcmVudEVsZW1lbnQiLCJyZXBsYWNlQ2hpbGQiLCJkYXRhQ29sdW1uTmFtZSIsImxhYmVsIiwicmFkaW8iLCJpbm5lckh0bWwiLCJodG1sRm9yIiwidXBkYXRlTGlzdCIsImxvY2F0aW9uIiwicmVsb2FkIiwiaGVhZGVycyIsImhlYWRlciIsImNvbnRlbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJhcnJvdyIsInF1ZXJ5U2VsZWN0b3IiLCJjb250YWlucyIsInJlbW92ZSIsIm1heEhlaWdodCIsInBhZGRpbmciLCJzY3JvbGxIZWlnaHQiLCJpbnB1dHMiLCJzZWxlY3RJbnB1dHMiLCJpbnB1dCIsImRpc2FibGVkIiwiY3R4IiwiY2hhcnREYXRhIiwiSlNPTiIsInBhcnNlIiwibGlzdE5hbWUiLCJteUNoYXJ0IiwibGFiZWxzIiwiZGF0YXNldHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvcnMiLCJib3JkZXJXaWR0aCIsImhvdmVyT2Zmc2V0Iiwib3B0aW9ucyIsImN1dG91dCIsInJhZGl1cyIsImxlZ2VuZCIsInBsdWdpbnMiLCJkYXRhbGFiZWxzIiwiYW5pbWF0aW9uIiwiYW5pbWF0ZVJvdGF0ZSIsImFuaW1hdGVTY2FsZSIsInRleHRDb250ZW50IiwiZGVmYXVsdHMiLCJjb21tb24iXSwic291cmNlUm9vdCI6IiJ9