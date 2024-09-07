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
    var searchModal = document.getElementById('productSearchModal');
    searchModal.show();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2pzL2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OytDQUNBLHFKQUFBQSxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxDQUFBLFNBQUFDLENBQUEsRUFBQUQsQ0FBQSxPQUFBRSxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxDQUFBLEdBQUFILENBQUEsQ0FBQUksY0FBQSxFQUFBQyxDQUFBLEdBQUFKLE1BQUEsQ0FBQUssY0FBQSxjQUFBUCxDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxJQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxDQUFBTyxLQUFBLEtBQUFDLENBQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsUUFBQSxrQkFBQUMsQ0FBQSxHQUFBSixDQUFBLENBQUFLLGFBQUEsdUJBQUFDLENBQUEsR0FBQU4sQ0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBakIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUMsTUFBQSxDQUFBSyxjQUFBLENBQUFQLENBQUEsRUFBQUQsQ0FBQSxJQUFBUyxLQUFBLEVBQUFQLENBQUEsRUFBQWlCLFVBQUEsTUFBQUMsWUFBQSxNQUFBQyxRQUFBLFNBQUFwQixDQUFBLENBQUFELENBQUEsV0FBQWtCLE1BQUEsbUJBQUFqQixDQUFBLElBQUFpQixNQUFBLFlBQUFBLE9BQUFqQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxnQkFBQW9CLEtBQUFyQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLFFBQUFLLENBQUEsR0FBQVYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFNBQUEsWUFBQW1CLFNBQUEsR0FBQXZCLENBQUEsR0FBQXVCLFNBQUEsRUFBQVgsQ0FBQSxHQUFBVCxNQUFBLENBQUFxQixNQUFBLENBQUFkLENBQUEsQ0FBQU4sU0FBQSxHQUFBVSxDQUFBLE9BQUFXLE9BQUEsQ0FBQXBCLENBQUEsZ0JBQUFFLENBQUEsQ0FBQUssQ0FBQSxlQUFBSCxLQUFBLEVBQUFpQixnQkFBQSxDQUFBekIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFZLENBQUEsTUFBQUYsQ0FBQSxhQUFBZSxTQUFBMUIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsbUJBQUEwQixJQUFBLFlBQUFDLEdBQUEsRUFBQTVCLENBQUEsQ0FBQTZCLElBQUEsQ0FBQTlCLENBQUEsRUFBQUUsQ0FBQSxjQUFBRCxDQUFBLGFBQUEyQixJQUFBLFdBQUFDLEdBQUEsRUFBQTVCLENBQUEsUUFBQUQsQ0FBQSxDQUFBc0IsSUFBQSxHQUFBQSxJQUFBLE1BQUFTLENBQUEscUJBQUFDLENBQUEscUJBQUFDLENBQUEsZ0JBQUFDLENBQUEsZ0JBQUFDLENBQUEsZ0JBQUFaLFVBQUEsY0FBQWEsa0JBQUEsY0FBQUMsMkJBQUEsU0FBQUMsQ0FBQSxPQUFBcEIsTUFBQSxDQUFBb0IsQ0FBQSxFQUFBMUIsQ0FBQSxxQ0FBQTJCLENBQUEsR0FBQXBDLE1BQUEsQ0FBQXFDLGNBQUEsRUFBQUMsQ0FBQSxHQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUEsQ0FBQSxDQUFBRyxNQUFBLFFBQUFELENBQUEsSUFBQUEsQ0FBQSxLQUFBdkMsQ0FBQSxJQUFBRyxDQUFBLENBQUF5QixJQUFBLENBQUFXLENBQUEsRUFBQTdCLENBQUEsTUFBQTBCLENBQUEsR0FBQUcsQ0FBQSxPQUFBRSxDQUFBLEdBQUFOLDBCQUFBLENBQUFqQyxTQUFBLEdBQUFtQixTQUFBLENBQUFuQixTQUFBLEdBQUFELE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQWMsQ0FBQSxZQUFBTSxzQkFBQTNDLENBQUEsZ0NBQUE0QyxPQUFBLFdBQUE3QyxDQUFBLElBQUFrQixNQUFBLENBQUFqQixDQUFBLEVBQUFELENBQUEsWUFBQUMsQ0FBQSxnQkFBQTZDLE9BQUEsQ0FBQTlDLENBQUEsRUFBQUMsQ0FBQSxzQkFBQThDLGNBQUE5QyxDQUFBLEVBQUFELENBQUEsYUFBQWdELE9BQUE5QyxDQUFBLEVBQUFLLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsR0FBQWEsUUFBQSxDQUFBMUIsQ0FBQSxDQUFBQyxDQUFBLEdBQUFELENBQUEsRUFBQU0sQ0FBQSxtQkFBQU8sQ0FBQSxDQUFBYyxJQUFBLFFBQUFaLENBQUEsR0FBQUYsQ0FBQSxDQUFBZSxHQUFBLEVBQUFFLENBQUEsR0FBQWYsQ0FBQSxDQUFBUCxLQUFBLFNBQUFzQixDQUFBLGdCQUFBa0IsT0FBQSxDQUFBbEIsQ0FBQSxLQUFBMUIsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBQyxDQUFBLGVBQUEvQixDQUFBLENBQUFrRCxPQUFBLENBQUFuQixDQUFBLENBQUFvQixPQUFBLEVBQUFDLElBQUEsV0FBQW5ELENBQUEsSUFBQStDLE1BQUEsU0FBQS9DLENBQUEsRUFBQVMsQ0FBQSxFQUFBRSxDQUFBLGdCQUFBWCxDQUFBLElBQUErQyxNQUFBLFVBQUEvQyxDQUFBLEVBQUFTLENBQUEsRUFBQUUsQ0FBQSxRQUFBWixDQUFBLENBQUFrRCxPQUFBLENBQUFuQixDQUFBLEVBQUFxQixJQUFBLFdBQUFuRCxDQUFBLElBQUFlLENBQUEsQ0FBQVAsS0FBQSxHQUFBUixDQUFBLEVBQUFTLENBQUEsQ0FBQU0sQ0FBQSxnQkFBQWYsQ0FBQSxXQUFBK0MsTUFBQSxVQUFBL0MsQ0FBQSxFQUFBUyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxDQUFBRSxDQUFBLENBQUFlLEdBQUEsU0FBQTNCLENBQUEsRUFBQUssQ0FBQSxvQkFBQUUsS0FBQSxXQUFBQSxNQUFBUixDQUFBLEVBQUFJLENBQUEsYUFBQWdELDJCQUFBLGVBQUFyRCxDQUFBLFdBQUFBLENBQUEsRUFBQUUsQ0FBQSxJQUFBOEMsTUFBQSxDQUFBL0MsQ0FBQSxFQUFBSSxDQUFBLEVBQUFMLENBQUEsRUFBQUUsQ0FBQSxnQkFBQUEsQ0FBQSxHQUFBQSxDQUFBLEdBQUFBLENBQUEsQ0FBQWtELElBQUEsQ0FBQUMsMEJBQUEsRUFBQUEsMEJBQUEsSUFBQUEsMEJBQUEscUJBQUEzQixpQkFBQTFCLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLFFBQUFFLENBQUEsR0FBQXdCLENBQUEsbUJBQUFyQixDQUFBLEVBQUFFLENBQUEsUUFBQUwsQ0FBQSxLQUFBMEIsQ0FBQSxRQUFBcUIsS0FBQSxzQ0FBQS9DLENBQUEsS0FBQTJCLENBQUEsb0JBQUF4QixDQUFBLFFBQUFFLENBQUEsV0FBQUgsS0FBQSxFQUFBUixDQUFBLEVBQUFzRCxJQUFBLGVBQUFsRCxDQUFBLENBQUFtRCxNQUFBLEdBQUE5QyxDQUFBLEVBQUFMLENBQUEsQ0FBQXdCLEdBQUEsR0FBQWpCLENBQUEsVUFBQUUsQ0FBQSxHQUFBVCxDQUFBLENBQUFvRCxRQUFBLE1BQUEzQyxDQUFBLFFBQUFFLENBQUEsR0FBQTBDLG1CQUFBLENBQUE1QyxDQUFBLEVBQUFULENBQUEsT0FBQVcsQ0FBQSxRQUFBQSxDQUFBLEtBQUFtQixDQUFBLG1CQUFBbkIsQ0FBQSxxQkFBQVgsQ0FBQSxDQUFBbUQsTUFBQSxFQUFBbkQsQ0FBQSxDQUFBc0QsSUFBQSxHQUFBdEQsQ0FBQSxDQUFBdUQsS0FBQSxHQUFBdkQsQ0FBQSxDQUFBd0IsR0FBQSxzQkFBQXhCLENBQUEsQ0FBQW1ELE1BQUEsUUFBQWpELENBQUEsS0FBQXdCLENBQUEsUUFBQXhCLENBQUEsR0FBQTJCLENBQUEsRUFBQTdCLENBQUEsQ0FBQXdCLEdBQUEsRUFBQXhCLENBQUEsQ0FBQXdELGlCQUFBLENBQUF4RCxDQUFBLENBQUF3QixHQUFBLHVCQUFBeEIsQ0FBQSxDQUFBbUQsTUFBQSxJQUFBbkQsQ0FBQSxDQUFBeUQsTUFBQSxXQUFBekQsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBdEIsQ0FBQSxHQUFBMEIsQ0FBQSxNQUFBSyxDQUFBLEdBQUFYLFFBQUEsQ0FBQTNCLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLG9CQUFBaUMsQ0FBQSxDQUFBVixJQUFBLFFBQUFyQixDQUFBLEdBQUFGLENBQUEsQ0FBQWtELElBQUEsR0FBQXJCLENBQUEsR0FBQUYsQ0FBQSxFQUFBTSxDQUFBLENBQUFULEdBQUEsS0FBQU0sQ0FBQSxxQkFBQTFCLEtBQUEsRUFBQTZCLENBQUEsQ0FBQVQsR0FBQSxFQUFBMEIsSUFBQSxFQUFBbEQsQ0FBQSxDQUFBa0QsSUFBQSxrQkFBQWpCLENBQUEsQ0FBQVYsSUFBQSxLQUFBckIsQ0FBQSxHQUFBMkIsQ0FBQSxFQUFBN0IsQ0FBQSxDQUFBbUQsTUFBQSxZQUFBbkQsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBUyxDQUFBLENBQUFULEdBQUEsbUJBQUE2QixvQkFBQTFELENBQUEsRUFBQUUsQ0FBQSxRQUFBRyxDQUFBLEdBQUFILENBQUEsQ0FBQXNELE1BQUEsRUFBQWpELENBQUEsR0FBQVAsQ0FBQSxDQUFBYSxRQUFBLENBQUFSLENBQUEsT0FBQUUsQ0FBQSxLQUFBTixDQUFBLFNBQUFDLENBQUEsQ0FBQXVELFFBQUEscUJBQUFwRCxDQUFBLElBQUFMLENBQUEsQ0FBQWEsUUFBQSxlQUFBWCxDQUFBLENBQUFzRCxNQUFBLGFBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEVBQUF5RCxtQkFBQSxDQUFBMUQsQ0FBQSxFQUFBRSxDQUFBLGVBQUFBLENBQUEsQ0FBQXNELE1BQUEsa0JBQUFuRCxDQUFBLEtBQUFILENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsT0FBQWtDLFNBQUEsdUNBQUExRCxDQUFBLGlCQUFBOEIsQ0FBQSxNQUFBekIsQ0FBQSxHQUFBaUIsUUFBQSxDQUFBcEIsQ0FBQSxFQUFBUCxDQUFBLENBQUFhLFFBQUEsRUFBQVgsQ0FBQSxDQUFBMkIsR0FBQSxtQkFBQW5CLENBQUEsQ0FBQWtCLElBQUEsU0FBQTFCLENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQW5CLENBQUEsQ0FBQW1CLEdBQUEsRUFBQTNCLENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsTUFBQXZCLENBQUEsR0FBQUYsQ0FBQSxDQUFBbUIsR0FBQSxTQUFBakIsQ0FBQSxHQUFBQSxDQUFBLENBQUEyQyxJQUFBLElBQUFyRCxDQUFBLENBQUFGLENBQUEsQ0FBQWdFLFVBQUEsSUFBQXBELENBQUEsQ0FBQUgsS0FBQSxFQUFBUCxDQUFBLENBQUErRCxJQUFBLEdBQUFqRSxDQUFBLENBQUFrRSxPQUFBLGVBQUFoRSxDQUFBLENBQUFzRCxNQUFBLEtBQUF0RCxDQUFBLENBQUFzRCxNQUFBLFdBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEdBQUFDLENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsSUFBQXZCLENBQUEsSUFBQVYsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxPQUFBa0MsU0FBQSxzQ0FBQTdELENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsY0FBQWdDLGFBQUFsRSxDQUFBLFFBQUFELENBQUEsS0FBQW9FLE1BQUEsRUFBQW5FLENBQUEsWUFBQUEsQ0FBQSxLQUFBRCxDQUFBLENBQUFxRSxRQUFBLEdBQUFwRSxDQUFBLFdBQUFBLENBQUEsS0FBQUQsQ0FBQSxDQUFBc0UsVUFBQSxHQUFBckUsQ0FBQSxLQUFBRCxDQUFBLENBQUF1RSxRQUFBLEdBQUF0RSxDQUFBLFdBQUF1RSxVQUFBLENBQUFDLElBQUEsQ0FBQXpFLENBQUEsY0FBQTBFLGNBQUF6RSxDQUFBLFFBQUFELENBQUEsR0FBQUMsQ0FBQSxDQUFBMEUsVUFBQSxRQUFBM0UsQ0FBQSxDQUFBNEIsSUFBQSxvQkFBQTVCLENBQUEsQ0FBQTZCLEdBQUEsRUFBQTVCLENBQUEsQ0FBQTBFLFVBQUEsR0FBQTNFLENBQUEsYUFBQXlCLFFBQUF4QixDQUFBLFNBQUF1RSxVQUFBLE1BQUFKLE1BQUEsYUFBQW5FLENBQUEsQ0FBQTRDLE9BQUEsQ0FBQXNCLFlBQUEsY0FBQVMsS0FBQSxpQkFBQWxDLE9BQUExQyxDQUFBLFFBQUFBLENBQUEsV0FBQUEsQ0FBQSxRQUFBRSxDQUFBLEdBQUFGLENBQUEsQ0FBQVksQ0FBQSxPQUFBVixDQUFBLFNBQUFBLENBQUEsQ0FBQTRCLElBQUEsQ0FBQTlCLENBQUEsNEJBQUFBLENBQUEsQ0FBQWlFLElBQUEsU0FBQWpFLENBQUEsT0FBQTZFLEtBQUEsQ0FBQTdFLENBQUEsQ0FBQThFLE1BQUEsU0FBQXZFLENBQUEsT0FBQUcsQ0FBQSxZQUFBdUQsS0FBQSxhQUFBMUQsQ0FBQSxHQUFBUCxDQUFBLENBQUE4RSxNQUFBLE9BQUF6RSxDQUFBLENBQUF5QixJQUFBLENBQUE5QixDQUFBLEVBQUFPLENBQUEsVUFBQTBELElBQUEsQ0FBQXhELEtBQUEsR0FBQVQsQ0FBQSxDQUFBTyxDQUFBLEdBQUEwRCxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxTQUFBQSxJQUFBLENBQUF4RCxLQUFBLEdBQUFSLENBQUEsRUFBQWdFLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFlBQUF2RCxDQUFBLENBQUF1RCxJQUFBLEdBQUF2RCxDQUFBLGdCQUFBcUQsU0FBQSxDQUFBZCxPQUFBLENBQUFqRCxDQUFBLGtDQUFBb0MsaUJBQUEsQ0FBQWhDLFNBQUEsR0FBQWlDLDBCQUFBLEVBQUE5QixDQUFBLENBQUFvQyxDQUFBLG1CQUFBbEMsS0FBQSxFQUFBNEIsMEJBQUEsRUFBQWpCLFlBQUEsU0FBQWIsQ0FBQSxDQUFBOEIsMEJBQUEsbUJBQUE1QixLQUFBLEVBQUEyQixpQkFBQSxFQUFBaEIsWUFBQSxTQUFBZ0IsaUJBQUEsQ0FBQTJDLFdBQUEsR0FBQTdELE1BQUEsQ0FBQW1CLDBCQUFBLEVBQUFyQixDQUFBLHdCQUFBaEIsQ0FBQSxDQUFBZ0YsbUJBQUEsYUFBQS9FLENBQUEsUUFBQUQsQ0FBQSx3QkFBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFnRixXQUFBLFdBQUFqRixDQUFBLEtBQUFBLENBQUEsS0FBQW9DLGlCQUFBLDZCQUFBcEMsQ0FBQSxDQUFBK0UsV0FBQSxJQUFBL0UsQ0FBQSxDQUFBa0YsSUFBQSxPQUFBbEYsQ0FBQSxDQUFBbUYsSUFBQSxhQUFBbEYsQ0FBQSxXQUFBRSxNQUFBLENBQUFpRixjQUFBLEdBQUFqRixNQUFBLENBQUFpRixjQUFBLENBQUFuRixDQUFBLEVBQUFvQywwQkFBQSxLQUFBcEMsQ0FBQSxDQUFBb0YsU0FBQSxHQUFBaEQsMEJBQUEsRUFBQW5CLE1BQUEsQ0FBQWpCLENBQUEsRUFBQWUsQ0FBQSx5QkFBQWYsQ0FBQSxDQUFBRyxTQUFBLEdBQUFELE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQW1CLENBQUEsR0FBQTFDLENBQUEsS0FBQUQsQ0FBQSxDQUFBc0YsS0FBQSxhQUFBckYsQ0FBQSxhQUFBa0QsT0FBQSxFQUFBbEQsQ0FBQSxPQUFBMkMscUJBQUEsQ0FBQUcsYUFBQSxDQUFBM0MsU0FBQSxHQUFBYyxNQUFBLENBQUE2QixhQUFBLENBQUEzQyxTQUFBLEVBQUFVLENBQUEsaUNBQUFkLENBQUEsQ0FBQStDLGFBQUEsR0FBQUEsYUFBQSxFQUFBL0MsQ0FBQSxDQUFBdUYsS0FBQSxhQUFBdEYsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLGVBQUFBLENBQUEsS0FBQUEsQ0FBQSxHQUFBOEUsT0FBQSxPQUFBNUUsQ0FBQSxPQUFBbUMsYUFBQSxDQUFBekIsSUFBQSxDQUFBckIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxHQUFBRyxDQUFBLFVBQUFWLENBQUEsQ0FBQWdGLG1CQUFBLENBQUE5RSxDQUFBLElBQUFVLENBQUEsR0FBQUEsQ0FBQSxDQUFBcUQsSUFBQSxHQUFBYixJQUFBLFdBQUFuRCxDQUFBLFdBQUFBLENBQUEsQ0FBQXNELElBQUEsR0FBQXRELENBQUEsQ0FBQVEsS0FBQSxHQUFBRyxDQUFBLENBQUFxRCxJQUFBLFdBQUFyQixxQkFBQSxDQUFBRCxDQUFBLEdBQUF6QixNQUFBLENBQUF5QixDQUFBLEVBQUEzQixDQUFBLGdCQUFBRSxNQUFBLENBQUF5QixDQUFBLEVBQUEvQixDQUFBLGlDQUFBTSxNQUFBLENBQUF5QixDQUFBLDZEQUFBM0MsQ0FBQSxDQUFBeUYsSUFBQSxhQUFBeEYsQ0FBQSxRQUFBRCxDQUFBLEdBQUFHLE1BQUEsQ0FBQUYsQ0FBQSxHQUFBQyxDQUFBLGdCQUFBRyxDQUFBLElBQUFMLENBQUEsRUFBQUUsQ0FBQSxDQUFBdUUsSUFBQSxDQUFBcEUsQ0FBQSxVQUFBSCxDQUFBLENBQUF3RixPQUFBLGFBQUF6QixLQUFBLFdBQUEvRCxDQUFBLENBQUE0RSxNQUFBLFNBQUE3RSxDQUFBLEdBQUFDLENBQUEsQ0FBQXlGLEdBQUEsUUFBQTFGLENBQUEsSUFBQUQsQ0FBQSxTQUFBaUUsSUFBQSxDQUFBeEQsS0FBQSxHQUFBUixDQUFBLEVBQUFnRSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxXQUFBQSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxRQUFBakUsQ0FBQSxDQUFBMEMsTUFBQSxHQUFBQSxNQUFBLEVBQUFqQixPQUFBLENBQUFyQixTQUFBLEtBQUE2RSxXQUFBLEVBQUF4RCxPQUFBLEVBQUFtRCxLQUFBLFdBQUFBLE1BQUE1RSxDQUFBLGFBQUE0RixJQUFBLFdBQUEzQixJQUFBLFdBQUFOLElBQUEsUUFBQUMsS0FBQSxHQUFBM0QsQ0FBQSxPQUFBc0QsSUFBQSxZQUFBRSxRQUFBLGNBQUFELE1BQUEsZ0JBQUEzQixHQUFBLEdBQUE1QixDQUFBLE9BQUF1RSxVQUFBLENBQUEzQixPQUFBLENBQUE2QixhQUFBLElBQUExRSxDQUFBLFdBQUFFLENBQUEsa0JBQUFBLENBQUEsQ0FBQTJGLE1BQUEsT0FBQXhGLENBQUEsQ0FBQXlCLElBQUEsT0FBQTVCLENBQUEsTUFBQTJFLEtBQUEsRUFBQTNFLENBQUEsQ0FBQTRGLEtBQUEsY0FBQTVGLENBQUEsSUFBQUQsQ0FBQSxNQUFBOEYsSUFBQSxXQUFBQSxLQUFBLFNBQUF4QyxJQUFBLFdBQUF0RCxDQUFBLFFBQUF1RSxVQUFBLElBQUFHLFVBQUEsa0JBQUExRSxDQUFBLENBQUEyQixJQUFBLFFBQUEzQixDQUFBLENBQUE0QixHQUFBLGNBQUFtRSxJQUFBLEtBQUFuQyxpQkFBQSxXQUFBQSxrQkFBQTdELENBQUEsYUFBQXVELElBQUEsUUFBQXZELENBQUEsTUFBQUUsQ0FBQSxrQkFBQStGLE9BQUE1RixDQUFBLEVBQUFFLENBQUEsV0FBQUssQ0FBQSxDQUFBZ0IsSUFBQSxZQUFBaEIsQ0FBQSxDQUFBaUIsR0FBQSxHQUFBN0IsQ0FBQSxFQUFBRSxDQUFBLENBQUErRCxJQUFBLEdBQUE1RCxDQUFBLEVBQUFFLENBQUEsS0FBQUwsQ0FBQSxDQUFBc0QsTUFBQSxXQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBNUIsQ0FBQSxLQUFBTSxDQUFBLGFBQUFBLENBQUEsUUFBQWlFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBdkUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFHLENBQUEsUUFBQThELFVBQUEsQ0FBQWpFLENBQUEsR0FBQUssQ0FBQSxHQUFBRixDQUFBLENBQUFpRSxVQUFBLGlCQUFBakUsQ0FBQSxDQUFBMEQsTUFBQSxTQUFBNkIsTUFBQSxhQUFBdkYsQ0FBQSxDQUFBMEQsTUFBQSxTQUFBd0IsSUFBQSxRQUFBOUUsQ0FBQSxHQUFBVCxDQUFBLENBQUF5QixJQUFBLENBQUFwQixDQUFBLGVBQUFNLENBQUEsR0FBQVgsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBcEIsQ0FBQSxxQkFBQUksQ0FBQSxJQUFBRSxDQUFBLGFBQUE0RSxJQUFBLEdBQUFsRixDQUFBLENBQUEyRCxRQUFBLFNBQUE0QixNQUFBLENBQUF2RixDQUFBLENBQUEyRCxRQUFBLGdCQUFBdUIsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBNEQsVUFBQSxTQUFBMkIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBNEQsVUFBQSxjQUFBeEQsQ0FBQSxhQUFBOEUsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBMkQsUUFBQSxTQUFBNEIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBMkQsUUFBQSxxQkFBQXJELENBQUEsUUFBQXNDLEtBQUEscURBQUFzQyxJQUFBLEdBQUFsRixDQUFBLENBQUE0RCxVQUFBLFNBQUEyQixNQUFBLENBQUF2RixDQUFBLENBQUE0RCxVQUFBLFlBQUFSLE1BQUEsV0FBQUEsT0FBQTdELENBQUEsRUFBQUQsQ0FBQSxhQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUFNLE1BQUEsTUFBQTVFLENBQUEsU0FBQUEsQ0FBQSxRQUFBSyxDQUFBLFFBQUFpRSxVQUFBLENBQUF0RSxDQUFBLE9BQUFLLENBQUEsQ0FBQTZELE1BQUEsU0FBQXdCLElBQUEsSUFBQXZGLENBQUEsQ0FBQXlCLElBQUEsQ0FBQXZCLENBQUEsd0JBQUFxRixJQUFBLEdBQUFyRixDQUFBLENBQUErRCxVQUFBLFFBQUE1RCxDQUFBLEdBQUFILENBQUEsYUFBQUcsQ0FBQSxpQkFBQVQsQ0FBQSxtQkFBQUEsQ0FBQSxLQUFBUyxDQUFBLENBQUEwRCxNQUFBLElBQUFwRSxDQUFBLElBQUFBLENBQUEsSUFBQVUsQ0FBQSxDQUFBNEQsVUFBQSxLQUFBNUQsQ0FBQSxjQUFBRSxDQUFBLEdBQUFGLENBQUEsR0FBQUEsQ0FBQSxDQUFBaUUsVUFBQSxjQUFBL0QsQ0FBQSxDQUFBZ0IsSUFBQSxHQUFBM0IsQ0FBQSxFQUFBVyxDQUFBLENBQUFpQixHQUFBLEdBQUE3QixDQUFBLEVBQUFVLENBQUEsU0FBQThDLE1BQUEsZ0JBQUFTLElBQUEsR0FBQXZELENBQUEsQ0FBQTRELFVBQUEsRUFBQW5DLENBQUEsU0FBQStELFFBQUEsQ0FBQXRGLENBQUEsTUFBQXNGLFFBQUEsV0FBQUEsU0FBQWpHLENBQUEsRUFBQUQsQ0FBQSxvQkFBQUMsQ0FBQSxDQUFBMkIsSUFBQSxRQUFBM0IsQ0FBQSxDQUFBNEIsR0FBQSxxQkFBQTVCLENBQUEsQ0FBQTJCLElBQUEsbUJBQUEzQixDQUFBLENBQUEyQixJQUFBLFFBQUFxQyxJQUFBLEdBQUFoRSxDQUFBLENBQUE0QixHQUFBLGdCQUFBNUIsQ0FBQSxDQUFBMkIsSUFBQSxTQUFBb0UsSUFBQSxRQUFBbkUsR0FBQSxHQUFBNUIsQ0FBQSxDQUFBNEIsR0FBQSxPQUFBMkIsTUFBQSxrQkFBQVMsSUFBQSx5QkFBQWhFLENBQUEsQ0FBQTJCLElBQUEsSUFBQTVCLENBQUEsVUFBQWlFLElBQUEsR0FBQWpFLENBQUEsR0FBQW1DLENBQUEsS0FBQWdFLE1BQUEsV0FBQUEsT0FBQWxHLENBQUEsYUFBQUQsQ0FBQSxRQUFBd0UsVUFBQSxDQUFBTSxNQUFBLE1BQUE5RSxDQUFBLFNBQUFBLENBQUEsUUFBQUUsQ0FBQSxRQUFBc0UsVUFBQSxDQUFBeEUsQ0FBQSxPQUFBRSxDQUFBLENBQUFvRSxVQUFBLEtBQUFyRSxDQUFBLGNBQUFpRyxRQUFBLENBQUFoRyxDQUFBLENBQUF5RSxVQUFBLEVBQUF6RSxDQUFBLENBQUFxRSxRQUFBLEdBQUFHLGFBQUEsQ0FBQXhFLENBQUEsR0FBQWlDLENBQUEseUJBQUFpRSxPQUFBbkcsQ0FBQSxhQUFBRCxDQUFBLFFBQUF3RSxVQUFBLENBQUFNLE1BQUEsTUFBQTlFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUF4RSxDQUFBLE9BQUFFLENBQUEsQ0FBQWtFLE1BQUEsS0FBQW5FLENBQUEsUUFBQUksQ0FBQSxHQUFBSCxDQUFBLENBQUF5RSxVQUFBLGtCQUFBdEUsQ0FBQSxDQUFBdUIsSUFBQSxRQUFBckIsQ0FBQSxHQUFBRixDQUFBLENBQUF3QixHQUFBLEVBQUE2QyxhQUFBLENBQUF4RSxDQUFBLFlBQUFLLENBQUEsWUFBQStDLEtBQUEsOEJBQUErQyxhQUFBLFdBQUFBLGNBQUFyRyxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxnQkFBQW9ELFFBQUEsS0FBQTVDLFFBQUEsRUFBQTZCLE1BQUEsQ0FBQTFDLENBQUEsR0FBQWdFLFVBQUEsRUFBQTlELENBQUEsRUFBQWdFLE9BQUEsRUFBQTdELENBQUEsb0JBQUFtRCxNQUFBLFVBQUEzQixHQUFBLEdBQUE1QixDQUFBLEdBQUFrQyxDQUFBLE9BQUFuQyxDQUFBO0FBQUEsU0FBQXNHLG1CQUFBakcsQ0FBQSxFQUFBSixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxFQUFBSyxDQUFBLEVBQUFLLENBQUEsRUFBQUUsQ0FBQSxjQUFBSixDQUFBLEdBQUFMLENBQUEsQ0FBQU8sQ0FBQSxFQUFBRSxDQUFBLEdBQUFFLENBQUEsR0FBQU4sQ0FBQSxDQUFBRCxLQUFBLFdBQUFKLENBQUEsZ0JBQUFMLENBQUEsQ0FBQUssQ0FBQSxLQUFBSyxDQUFBLENBQUE2QyxJQUFBLEdBQUF0RCxDQUFBLENBQUFlLENBQUEsSUFBQXdFLE9BQUEsQ0FBQXRDLE9BQUEsQ0FBQWxDLENBQUEsRUFBQW9DLElBQUEsQ0FBQWxELENBQUEsRUFBQUssQ0FBQTtBQUFBLFNBQUFnRyxrQkFBQWxHLENBQUEsNkJBQUFKLENBQUEsU0FBQUQsQ0FBQSxHQUFBd0csU0FBQSxhQUFBaEIsT0FBQSxXQUFBdEYsQ0FBQSxFQUFBSyxDQUFBLFFBQUFLLENBQUEsR0FBQVAsQ0FBQSxDQUFBb0csS0FBQSxDQUFBeEcsQ0FBQSxFQUFBRCxDQUFBLFlBQUEwRyxNQUFBckcsQ0FBQSxJQUFBaUcsa0JBQUEsQ0FBQTFGLENBQUEsRUFBQVYsQ0FBQSxFQUFBSyxDQUFBLEVBQUFtRyxLQUFBLEVBQUFDLE1BQUEsVUFBQXRHLENBQUEsY0FBQXNHLE9BQUF0RyxDQUFBLElBQUFpRyxrQkFBQSxDQUFBMUYsQ0FBQSxFQUFBVixDQUFBLEVBQUFLLENBQUEsRUFBQW1HLEtBQUEsRUFBQUMsTUFBQSxXQUFBdEcsQ0FBQSxLQUFBcUcsS0FBQTtBQURBO0FBQ2tDO0FBQ2xDO0FBQ3dCO0FBQ1M7QUFDakMsSUFBTUksU0FBUyxHQUFHQyxtQkFBTyxDQUFDLGdEQUFhLENBQUM7QUFDeEMsSUFBTUMsYUFBYSxHQUFHLElBQUk7QUFDMUIsSUFBTUMsY0FBYyxHQUFHLEVBQUU7QUFDekJDLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsVUFBU25ILENBQUMsRUFBRTtFQUVwRCxJQUFJLENBQUNrSCxNQUFNLENBQUNFLFlBQVksR0FBRyxTQUFTQSxZQUFZQSxDQUFDQyxFQUFFLEVBQUM7SUFDNUMsSUFBSUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQ0gsRUFBRSxDQUFDO0lBQzlDLElBQUlDLFFBQVEsQ0FBQzFGLElBQUksS0FBSyxVQUFVLEVBQUU7TUFDMUIwRixRQUFRLENBQUMxRixJQUFJLEdBQUcsTUFBTTtJQUM5QixDQUFDLE1BQU07TUFDSDBGLFFBQVEsQ0FBQzFGLElBQUksR0FBRyxVQUFVO0lBQzlCO0VBQ0osQ0FBQztFQUNELElBQUksQ0FBQ3NGLE1BQU0sQ0FBQ08sV0FBVyxHQUFHLFNBQVNBLFdBQVdBLENBQUEsRUFBRTtJQUU1QyxJQUFJQyxrQkFBa0IsR0FBR0gsUUFBUSxDQUFDQyxjQUFjLENBQUMsWUFBWSxDQUFDO0lBQzlELElBQUlHLFVBQVUsR0FBRyxDQUFDO0lBQ2xCLElBQUcsQ0FBQ0Qsa0JBQWtCLENBQUNqSCxLQUFLLEdBQUcsQ0FBQyxFQUFDO01BQzdCaUgsa0JBQWtCLENBQUNqSCxLQUFLLEdBQUdrSCxVQUFVO0lBQ3pDLENBQUMsTUFBSTtNQUNEQSxVQUFVLEdBQUcsQ0FBQ0Qsa0JBQWtCLENBQUNqSCxLQUFLO0lBQzFDO0lBQUMsSUFBQW1ILEtBQUEsWUFBQUEsTUFBQSxFQUVrQztNQUcvQixJQUFJQyxPQUFPLEdBQUdOLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDL0csS0FBSztNQUNsRCxJQUFJcUgsYUFBYSxHQUFHUCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxTQUFTLENBQUM7TUFDdEQsSUFBSU8sU0FBUyxHQUFHUixRQUFRLENBQUNDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztNQUMxRCxJQUFJUSxNQUFNLEdBQUdULFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDL0csS0FBSztNQUNwRCxJQUFJd0gsTUFBTSxHQUFHVixRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQy9HLEtBQUs7TUFDcEQsSUFBSXlILE1BQU0sR0FBR0osYUFBYSxDQUFDckgsS0FBSztNQUNoQ3FILGFBQWEsQ0FBQ3JILEtBQUssR0FBRyxDQUFDeUgsTUFBTSxHQUFHLENBQUM7TUFFakMsSUFBSUMsR0FBRyxHQUFHWixRQUFRLENBQUNhLGFBQWEsQ0FBQyxJQUFJLENBQUM7O01BRXRDO01BQ0EsSUFBSUMsS0FBSyxHQUFHZCxRQUFRLENBQUNhLGFBQWEsQ0FBQyxJQUFJLENBQUM7TUFDeENDLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLEtBQUs7TUFDbkJELEtBQUssQ0FBQ0UsU0FBUyxHQUFHTCxNQUFNO01BRXhCLElBQUlNLEtBQUssR0FBR2pCLFFBQVEsQ0FBQ2EsYUFBYSxDQUFDLElBQUksQ0FBQztNQUV4QyxJQUFJSyxPQUFPLEdBQUdsQixRQUFRLENBQUNhLGFBQWEsQ0FBQyxPQUFPLENBQUM7TUFDN0NLLE9BQU8sQ0FBQzdHLElBQUksR0FBRyxRQUFRO01BQ3ZCNkcsT0FBTyxDQUFDdkQsSUFBSSxHQUFHLE1BQU07TUFDckJ1RCxPQUFPLENBQUNwQixFQUFFLEdBQUcsS0FBSyxHQUFDYSxNQUFNO01BQ3pCTyxPQUFPLENBQUNoSSxLQUFLLEdBQUcsTUFBTSxHQUFDeUgsTUFBTTtNQUM3Qk8sT0FBTyxDQUFDQyxZQUFZLENBQUMsa0JBQWtCLEVBQUMsSUFBSSxDQUFDO01BRTdDLElBQUlDLFFBQVEsR0FBSUMsbUJBQW1CLENBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQ1YsTUFBTSxFQUFDLFdBQVcsQ0FBQztNQUN6RVMsUUFBUSxDQUFDRSxXQUFXLEdBQUcsV0FBVztNQUNsQ0YsUUFBUSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7TUFFdEMsSUFBSUMsS0FBSyxHQUFHekIsUUFBUSxDQUFDYSxhQUFhLENBQUMsSUFBSSxDQUFDO01BQ3hDWSxLQUFLLENBQUMzQixFQUFFLEdBQUcsU0FBUyxHQUFDYSxNQUFNO01BQzNCLElBQUllLFNBQVMsR0FBRzFCLFFBQVEsQ0FBQ2EsYUFBYSxDQUFDLEdBQUcsQ0FBQztNQUMzQ2EsU0FBUyxDQUFDNUIsRUFBRSxHQUFHLFlBQVksR0FBQ2EsTUFBTTtNQUNsQ2UsU0FBUyxDQUFDQyxTQUFTLEdBQUcsOEJBQThCO01BQ3BERCxTQUFTLENBQUNWLFNBQVMsR0FBRyxHQUFHO01BRXpCLElBQUlZLElBQUksR0FBRyxDQUFDLENBQUM7TUFDYixJQUFJQyxHQUFHLEdBQUcsWUFBWTtNQUN0QkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHbEIsTUFBTTtNQUN4QmtCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBR25CLE1BQU07TUFDeEJtQixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRTtNQUN0QixJQUFJRSxVQUFVO01BQ2RBLFVBQVU7UUFBQSxJQUFBQyxJQUFBLEdBQUEvQyxpQkFBQSxlQUFBeEcsbUJBQUEsR0FBQW9GLElBQUEsQ0FBRyxTQUFBb0UsUUFBQTtVQUFBLElBQUFDLFFBQUE7VUFBQSxPQUFBekosbUJBQUEsR0FBQXVCLElBQUEsVUFBQW1JLFNBQUFDLFFBQUE7WUFBQSxrQkFBQUEsUUFBQSxDQUFBOUQsSUFBQSxHQUFBOEQsUUFBQSxDQUFBekYsSUFBQTtjQUFBO2dCQUFBeUYsUUFBQSxDQUFBOUQsSUFBQTtnQkFBQThELFFBQUEsQ0FBQXpGLElBQUE7Z0JBQUEsT0FFa0IwRixLQUFLLENBQUNDLElBQUksQ0FBQ1IsR0FBRyxFQUFFRCxJQUFJLENBQUM7Y0FBQTtnQkFBdENLLFFBQVEsR0FBQUUsUUFBQSxDQUFBL0YsSUFBQTtnQkFBQSxPQUFBK0YsUUFBQSxDQUFBNUYsTUFBQSxXQUNQMEYsUUFBUSxDQUFDTCxJQUFJO2NBQUE7Z0JBQUFPLFFBQUEsQ0FBQTlELElBQUE7Z0JBQUE4RCxRQUFBLENBQUFHLEVBQUEsR0FBQUgsUUFBQTtnQkFFcEI7Z0JBQ0FJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFBTCxRQUFBLENBQUFHLEVBQU0sQ0FBQztjQUFDO2NBQUE7Z0JBQUEsT0FBQUgsUUFBQSxDQUFBM0QsSUFBQTtZQUFBO1VBQUEsR0FBQXdELE9BQUE7UUFBQSxDQUUxQjtRQUFBLGdCQVJERixVQUFVQSxDQUFBO1VBQUEsT0FBQUMsSUFBQSxDQUFBN0MsS0FBQSxPQUFBRCxTQUFBO1FBQUE7TUFBQSxHQVFUOztNQUVEO01BQ0E2QyxVQUFVLENBQUMsQ0FBQyxDQUFDakcsSUFBSSxDQUFDLFVBQUMrRixJQUFJLEVBQUs7UUFDeEI7UUFDQVYsT0FBTyxDQUFDaEksS0FBSyxHQUFHMEksSUFBSSxDQUFDYSxLQUFLO1FBQzFCZixTQUFTLENBQUNQLFlBQVksQ0FBQyxNQUFNLEVBQUUscUJBQXFCLEdBQUNTLElBQUksQ0FBQ2EsS0FBSyxDQUFDO01BQ3BFLENBQUMsQ0FBQztNQUVGLElBQUlDLEtBQUssR0FBRzFDLFFBQVEsQ0FBQ2EsYUFBYSxDQUFDLElBQUksQ0FBQztNQUN4QyxJQUFJOEIsVUFBVSxHQUFHdEIsbUJBQW1CLENBQUMsUUFBUSxFQUFDLFlBQVksRUFBQ1YsTUFBTSxFQUFDLGFBQWEsQ0FBQztNQUNoRmdDLFVBQVUsQ0FBQ3pKLEtBQUssR0FBRyxDQUFDO01BQ3BCeUosVUFBVSxDQUFDcEIsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO01BQ3RDbUIsVUFBVSxDQUFDcEIsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO01BQ3hDbUIsVUFBVSxDQUFDcEIsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO01BQ3hDa0IsS0FBSyxDQUFDbkIsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO01BRWpDLElBQUlvQixLQUFLLEdBQUc1QyxRQUFRLENBQUNhLGFBQWEsQ0FBQyxJQUFJLENBQUM7TUFDeEMsSUFBSWdDLE1BQU07TUFDVixJQUFJQyxNQUFNO01BQ1YsSUFBSUMsV0FBVztNQUNmLElBQUlDLFdBQVc7TUFFZixJQUFHMUMsT0FBTyxLQUFLLElBQUksRUFBQztRQUVoQnVDLE1BQU0sR0FBR0ksV0FBVyxDQUFDLFdBQVcsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFdEMsTUFBTSxDQUFDO1FBQ25Eb0MsV0FBVyxHQUFHRyxXQUFXLENBQUMsSUFBSSxFQUFHLFNBQVMsR0FBQ3ZDLE1BQU0sRUFBRSxJQUFJLEVBQUVBLE1BQU0sQ0FBQztRQUNoRW1DLE1BQU0sR0FBR0csV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFdEMsTUFBTSxDQUFDO1FBQ2pEcUMsV0FBVyxHQUFHRSxXQUFXLENBQUMsS0FBSyxFQUFHLFVBQVUsR0FBQ3ZDLE1BQU0sRUFBRSxLQUFLLEVBQUVBLE1BQU0sQ0FBQztNQUV2RSxDQUFDLE1BQUk7UUFFRGtDLE1BQU0sR0FBR0ksV0FBVyxDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFdEMsTUFBTSxDQUFDO1FBQ3BEb0MsV0FBVyxHQUFJRyxXQUFXLENBQUMsT0FBTyxFQUFHLFdBQVcsR0FBQ3ZDLE1BQU0sRUFBRSxNQUFNLEVBQUVBLE1BQU0sQ0FBQztRQUN4RW1DLE1BQU0sR0FBSUcsV0FBVyxDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFdEMsTUFBTSxDQUFDO1FBQ25EcUMsV0FBVyxHQUFHRSxXQUFXLENBQUMsSUFBSSxFQUFHLFNBQVMsR0FBQ3ZDLE1BQU0sRUFBRSxJQUFJLEVBQUVBLE1BQU0sQ0FBQztNQUNwRTtNQUVBLElBQUl3QyxLQUFLLEdBQUduRCxRQUFRLENBQUNhLGFBQWEsQ0FBQyxJQUFJLENBQUM7TUFDeENzQyxLQUFLLENBQUM1QixTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7TUFDakMsSUFBSTRCLFlBQVksR0FBRy9CLG1CQUFtQixDQUFDLFFBQVEsRUFBQyxjQUFjLEVBQUNWLE1BQU0sRUFBQyxRQUFRLENBQUM7TUFDL0V5QyxZQUFZLENBQUNsSyxLQUFLLEdBQUcsQ0FBQztNQUV0QmtLLFlBQVksQ0FBQzdCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztNQUN4QzRCLFlBQVksQ0FBQzdCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztNQUMxQzRCLFlBQVksQ0FBQzdCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztNQUUxQyxJQUFJNkIsS0FBSyxHQUFHckQsUUFBUSxDQUFDYSxhQUFhLENBQUMsSUFBSSxDQUFDO01BQ3hDd0MsS0FBSyxDQUFDOUIsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO01BQ2pDLElBQUk4QixlQUFlLEdBQUdqQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUMsaUJBQWlCLEVBQUNWLE1BQU0sRUFBQyxtQkFBbUIsQ0FBQztNQUNoRzJDLGVBQWUsQ0FBQ3BLLEtBQUssR0FBRyxDQUFDO01BQ3pCb0ssZUFBZSxDQUFDbkMsWUFBWSxDQUFDLGtCQUFrQixFQUFDLG1CQUFtQixDQUFDO01BQ3BFbUMsZUFBZSxDQUFDbkMsWUFBWSxDQUFDLFVBQVUsRUFBQyxJQUFJLENBQUM7TUFDN0NtQyxlQUFlLENBQUMvQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7TUFDN0M4QixlQUFlLENBQUMvQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7TUFDN0M4QixlQUFlLENBQUMvQixTQUFTLENBQUNDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQzs7TUFFdEQ7TUFDQVAsS0FBSyxDQUFDc0MsV0FBVyxDQUFDckMsT0FBTyxDQUFDO01BQzFCRCxLQUFLLENBQUNzQyxXQUFXLENBQUNuQyxRQUFRLENBQUM7TUFDM0JzQixLQUFLLENBQUNhLFdBQVcsQ0FBQ1osVUFBVSxDQUFDO01BRTdCLElBQUlhLFVBQVUsR0FBR3hELFFBQVEsQ0FBQ2EsYUFBYSxDQUFDLElBQUksQ0FBQztNQUM3QyxJQUFJNEMsY0FBYyxHQUFHQyxpQkFBaUIsQ0FBQy9DLE1BQU0sQ0FBQztNQUM5QzZDLFVBQVUsQ0FBQ0csTUFBTSxDQUFDRixjQUFjLENBQUM7TUFFakNiLEtBQUssQ0FBQ1csV0FBVyxDQUFDVixNQUFNLENBQUM7TUFDekJELEtBQUssQ0FBQ1csV0FBVyxDQUFDUixXQUFXLENBQUM7TUFDOUJILEtBQUssQ0FBQ1csV0FBVyxDQUFDVCxNQUFNLENBQUM7TUFDekJGLEtBQUssQ0FBQ1csV0FBVyxDQUFDUCxXQUFXLENBQUM7TUFFOUJHLEtBQUssQ0FBQ0ksV0FBVyxDQUFDSCxZQUFZLENBQUM7TUFDL0JDLEtBQUssQ0FBQ0UsV0FBVyxDQUFDRCxlQUFlLENBQUM7TUFDbEM3QixLQUFLLENBQUM4QixXQUFXLENBQUM3QixTQUFTLENBQUM7O01BRzVCO01BQ0FkLEdBQUcsQ0FBQzJDLFdBQVcsQ0FBQ3pDLEtBQUssQ0FBQztNQUN0QkYsR0FBRyxDQUFDMkMsV0FBVyxDQUFDdEMsS0FBSyxDQUFDO01BQ3RCTCxHQUFHLENBQUMyQyxXQUFXLENBQUNDLFVBQVUsQ0FBQztNQUMzQjtNQUNBNUMsR0FBRyxDQUFDMkMsV0FBVyxDQUFDYixLQUFLLENBQUM7TUFDdEI5QixHQUFHLENBQUMyQyxXQUFXLENBQUNKLEtBQUssQ0FBQztNQUN0QnZDLEdBQUcsQ0FBQzJDLFdBQVcsQ0FBQ0YsS0FBSyxDQUFDO01BQ3RCekMsR0FBRyxDQUFDMkMsV0FBVyxDQUFDWCxLQUFLLENBQUM7TUFDdEJoQyxHQUFHLENBQUMyQyxXQUFXLENBQUM5QixLQUFLLENBQUM7O01BR3RCO01BQ0FqQixTQUFTLENBQUMrQyxXQUFXLENBQUMzQyxHQUFHLENBQUM7O01BRTFCO01BQ0FnRCwwQkFBMEIsQ0FBQ2pELE1BQU0sQ0FBQztJQUN0QyxDQUFDO0lBakpELEtBQUksSUFBSXhILENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR2lILFVBQVUsRUFBRWpILENBQUMsRUFBRTtNQUFBa0gsS0FBQTtJQUFBO0lBa0psQ0Ysa0JBQWtCLENBQUNqSCxLQUFLLEdBQUMsQ0FBQztFQUU5QixDQUFDO0VBRUQsSUFBSSxDQUFDeUcsTUFBTSxDQUFDa0UsU0FBUyxHQUFHLFNBQVNBLFNBQVNBLENBQUMzSyxLQUFLLEVBQUU7SUFDOUMsSUFBR0EsS0FBSyxLQUFLLElBQUksRUFBQztNQUNmNEssZUFBZSxDQUFDLENBQUM7SUFDcEIsQ0FBQyxNQUFJO01BQ0RDLGVBQWUsQ0FBQyxDQUFDO0lBQ3JCO0VBQ0osQ0FBQztFQUNELFNBQVNILDBCQUEwQkEsQ0FBQ2hELEdBQUcsRUFBQztJQUNwQyxJQUFJb0QsZ0JBQWdCLEdBQUdoRSxRQUFRLENBQUNpRSxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7SUFDL0RELGdCQUFnQixDQUFDMUksT0FBTyxDQUFDLFVBQVU0SSxlQUFlLEVBQUM7TUFDL0NBLGVBQWUsQ0FBQ3RFLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFXO1FBQ2xEdUUsa0JBQWtCLENBQUN2RCxHQUFHLENBQUM7TUFDM0IsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ0w7RUFFQSxJQUFJLENBQUNqQixNQUFNLENBQUN3RSxrQkFBa0IsR0FBRyxTQUFTQSxrQkFBa0JBLENBQUN2RCxHQUFHLEVBQWlCO0lBQUEsSUFBaEJ3RCxPQUFPLEdBQUFuRixTQUFBLENBQUExQixNQUFBLFFBQUEwQixTQUFBLFFBQUFvRixTQUFBLEdBQUFwRixTQUFBLE1BQUcsS0FBSztJQUU3RSxJQUFJcUYsTUFBTSxHQUFHdEUsUUFBUSxDQUFDQyxjQUFjLENBQUMsYUFBYSxHQUFDVyxHQUFHLENBQUMsQ0FBQzFILEtBQUs7SUFDN0QsSUFBSWtLLFlBQVksR0FBR3BELFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGVBQWUsR0FBQ1csR0FBRyxDQUFDLENBQUMxSCxLQUFLO0lBQ3JFLElBQUlxTCxHQUFHLEdBQUd2RSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7SUFDeEMsSUFBSXVFLHNCQUFzQixHQUFJeEUsUUFBUSxDQUFDQyxjQUFjLENBQUMsa0JBQWtCLEdBQUNXLEdBQUcsQ0FBQztJQUU3RSxJQUFJNkQsU0FBUyxHQUFHLENBQUM7SUFDakJBLFNBQVMsR0FBRyxDQUFDSCxNQUFNLEdBQUcsQ0FBQ2xCLFlBQVk7SUFDbkNxQixTQUFTLEdBQUdBLFNBQVMsQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztJQUN2REgsc0JBQXNCLENBQUN0TCxLQUFLLEdBQUd1TCxTQUFTO0lBRXhDRyxjQUFjLENBQUNKLHNCQUFzQixDQUFDO0VBRzFDLENBQUM7RUFDRCxJQUFJLENBQUM3RSxNQUFNLENBQUNrRixrQkFBa0IsR0FBRyxTQUFTQSxrQkFBa0JBLENBQUNqRSxHQUFHLEVBQWtCO0lBQUEsSUFBaEJ3RCxPQUFPLEdBQUFuRixTQUFBLENBQUExQixNQUFBLFFBQUEwQixTQUFBLFFBQUFvRixTQUFBLEdBQUFwRixTQUFBLE1BQUcsS0FBSztJQUU3RSxJQUFJc0YsR0FBRyxHQUFHdkUsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMvRyxLQUFLO0lBQzlDLElBQUlvTCxNQUFNLEdBQUd0RSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLEdBQUNXLEdBQUcsQ0FBQztJQUN2RCxJQUFJd0MsWUFBWSxHQUFHcEQsUUFBUSxDQUFDQyxjQUFjLENBQUMsZUFBZSxHQUFDVyxHQUFHLENBQUMsQ0FBQzFILEtBQUs7SUFDckUsSUFBSTRMLFdBQVcsR0FBSTlFLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGtCQUFrQixHQUFDVyxHQUFHLENBQUM7SUFDbEUsSUFBSW1FLG9CQUFvQixHQUFHLENBQUM7SUFDNUIsSUFBSUMsV0FBVyxHQUFHVixNQUFNLENBQUNwTCxLQUFLO0lBQzlCLElBQUkrTCxLQUFLO0lBQ1QsSUFBSUMsS0FBSztJQUNULElBQUlDLE9BQU87SUFFWCxJQUFHWixHQUFHLEtBQUssSUFBSSxFQUFDO01BQ1pVLEtBQUssR0FBR2pGLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFNBQVMsR0FBQ1csR0FBRyxDQUFDO01BQzlDc0UsS0FBSyxHQUFHbEYsUUFBUSxDQUFDQyxjQUFjLENBQUMsVUFBVSxHQUFDVyxHQUFHLENBQUM7TUFDL0MsSUFBR3FFLEtBQUssQ0FBQ0csT0FBTyxLQUFLLElBQUksRUFBQztRQUN0QkosV0FBVyxHQUFHLENBQUNBLFdBQVcsR0FBRyxFQUFFO1FBQy9CRyxPQUFPLEdBQUdGLEtBQUs7TUFDbkIsQ0FBQyxNQUFJO1FBQ0RELFdBQVcsR0FBRyxDQUFDQSxXQUFXLEdBQUcsRUFBRTtRQUMvQkcsT0FBTyxHQUFHRCxLQUFLO01BQ25CO0lBRUosQ0FBQyxNQUFJO01BQ0RELEtBQUssR0FBR2pGLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFdBQVcsR0FBQ1csR0FBRyxDQUFDO01BQ2hEc0UsS0FBSyxHQUFHbEYsUUFBUSxDQUFDQyxjQUFjLENBQUMsU0FBUyxHQUFDVyxHQUFHLENBQUM7TUFFOUMsSUFBR3FFLEtBQUssQ0FBQ0csT0FBTyxLQUFLLElBQUksRUFBQztRQUN0QkosV0FBVyxHQUFHLENBQUNBLFdBQVcsR0FBRyxJQUFJO1FBQ2pDRyxPQUFPLEdBQUdGLEtBQUs7TUFDbkIsQ0FBQyxNQUFJO1FBQ0RELFdBQVcsR0FBRyxDQUFDQSxXQUFXLEdBQUUsSUFBSTtRQUNoQ0csT0FBTyxHQUFHRCxLQUFLO01BQ25CO0lBRUo7SUFFQUgsb0JBQW9CLEdBQUcsQ0FBQ0MsV0FBVyxHQUFHLENBQUM1QixZQUFZO0lBQ25Ea0IsTUFBTSxDQUFDcEwsS0FBSyxHQUFHOEwsV0FBVyxDQUFDTixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDO0lBQzVERyxXQUFXLENBQUM1TCxLQUFLLEdBQUc2TCxvQkFBb0IsQ0FBQ0wsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztJQUMxRUMsY0FBYyxDQUFDTyxPQUFPLENBQUM7SUFDdkJQLGNBQWMsQ0FBQ04sTUFBTSxDQUFDO0lBQ3RCTSxjQUFjLENBQUNFLFdBQVcsQ0FBQztFQUUvQixDQUFDO0VBQ0QsU0FBU08sY0FBY0EsQ0FBQ0MsVUFBVSxFQUFDO0lBRS9CLElBQUkxRCxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2JBLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxLQUFLO0lBQ3pCQSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSztJQUN0QkEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEtBQUs7SUFDeEJBLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxLQUFLO0lBQ3hCLFFBQU8wRCxVQUFVO01BQ2IsS0FBSyxXQUFXO1FBQ1oxRCxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSTtRQUN4QjtNQUNKLEtBQUssUUFBUTtRQUNUQSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSTtRQUNyQjtNQUNKLEtBQUssVUFBVTtRQUNYQSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSTtRQUN2QjtNQUNKLEtBQUssVUFBVTtRQUNYQSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSTtRQUN4QjtNQUNIO1FBQ0k7SUFDUjtJQUNBLE9BQU9BLElBQUk7RUFDZjtFQUNBLElBQUksQ0FBQ2pDLE1BQU0sQ0FBQ2lGLGNBQWMsR0FBRyxTQUFTQSxjQUFjQSxDQUFDTyxPQUFPLEVBQUM7SUFFekQsSUFBSUcsVUFBVSxHQUFHSCxPQUFPLENBQUNJLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQztJQUN6RCxJQUFJck0sS0FBSyxHQUFHaU0sT0FBTyxDQUFDak0sS0FBSztJQUN6QixJQUFJNEcsRUFBRSxHQUFHcUYsT0FBTyxDQUFDckYsRUFBRTtJQUNuQixJQUFJMEYsS0FBSyxHQUFHMUYsRUFBRSxDQUFDMkYsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN6QixJQUFJQyxTQUFTLEdBQUdGLEtBQUssQ0FBQ2pJLE1BQU07SUFDNUIsSUFBSXFELEdBQUcsR0FBRzRFLEtBQUssQ0FBQ0UsU0FBUyxHQUFDLENBQUMsQ0FBQztJQUM1QixJQUFJQyxNQUFNLEdBQUczRixRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLEdBQUNXLEdBQUcsQ0FBQztJQUMvQyxJQUFJZ0YsV0FBVyxHQUFHRCxNQUFNLENBQUN6TSxLQUFLO0lBQzlCLElBQUl3SCxNQUFNLEdBQUdWLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDL0csS0FBSztJQUNwRCxJQUFJMkksR0FBRyxHQUFHLGFBQWEsR0FBQytELFdBQVc7SUFDbkMsSUFBSWhFLElBQUksR0FBRyxDQUFDLENBQUM7SUFDYixJQUFJbkIsTUFBTSxHQUFHVCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQy9HLEtBQUs7SUFFcEQwSSxJQUFJLENBQUMwRCxVQUFVLENBQUMsR0FBR3BNLEtBQUs7SUFFeEIsSUFBR29NLFVBQVUsQ0FBQ08sU0FBUyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUM7TUFDbkNqRSxJQUFJLEdBQUd5RCxjQUFjLENBQUNDLFVBQVUsQ0FBQztJQUNyQztJQUVBMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHbEIsTUFBTTtJQUN4QmtCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBR25CLE1BQU07SUFDeEJtQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUdnRSxXQUFXO0lBRXhCeEQsS0FBSyxDQUFDQyxJQUFJLENBQUNSLEdBQUcsRUFBRUQsSUFBSSxFQUFFK0QsTUFBTSxDQUFDLENBQ3hCOUosSUFBSSxDQUFDLFVBQUNpSyxHQUFHLEVBQUssQ0FFZixDQUFDLENBQUMsU0FBTSxDQUFDLFVBQUNDLEdBQUcsRUFBSztNQUNsQkMsS0FBSyxDQUFDLHFEQUFxRCxDQUFDO01BQzVEekQsT0FBTyxDQUFDMEQsS0FBSyxDQUFDRixHQUFHLENBQUM7SUFDdEIsQ0FBQyxDQUFDO0lBRUZHLHNCQUFzQixDQUFDLENBQUM7RUFFNUIsQ0FBQztFQUNELFNBQVNBLHNCQUFzQkEsQ0FBQSxFQUFFO0lBRTdCLElBQUlDLFlBQVksR0FBR25HLFFBQVEsQ0FBQ2lFLGdCQUFnQixDQUFDLHdCQUF3QixDQUFDO0lBQ3RFLElBQUltQyxVQUFVLEdBQUcsQ0FBQztJQUNsQixJQUFJQyxlQUFlLEdBQUcsQ0FBQztJQUN2QixJQUFJQyxhQUFhLEdBQUd0RyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQy9HLEtBQUs7SUFDbEUsSUFBSXFOLE9BQU8sR0FBRyxLQUFLO0lBQ25CSixZQUFZLENBQUM3SyxPQUFPLENBQUMsVUFBVWtMLFdBQVcsRUFBQztNQUV2QyxJQUFJMUcsRUFBRSxHQUFHMEcsV0FBVyxDQUFDMUcsRUFBRTtNQUN2QixJQUFJMEYsS0FBSyxHQUFHMUYsRUFBRSxDQUFDMkYsS0FBSyxDQUFDLEdBQUcsQ0FBQztNQUN6QixJQUFJQyxTQUFTLEdBQUdGLEtBQUssQ0FBQ2pJLE1BQU07TUFDNUIsSUFBSXFELEdBQUcsR0FBRzRFLEtBQUssQ0FBQ0UsU0FBUyxHQUFDLENBQUMsQ0FBQztNQUM1QixJQUFJdEMsWUFBWSxHQUFHcEQsUUFBUSxDQUFDQyxjQUFjLENBQUMsZUFBZSxHQUFDVyxHQUFHLENBQUMsQ0FBQzFILEtBQUs7TUFDckUsSUFBSXVOLFNBQVMsR0FBRyxDQUFDO01BQ2pCLElBQUlDLFNBQVMsR0FBRyxDQUFDRixXQUFXLENBQUN0TixLQUFLO01BQ2xDLElBQUlxTCxHQUFHLEdBQUd2RSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQy9HLEtBQUs7TUFDOUMsSUFBSXlOLG1CQUFtQixHQUFHM0csUUFBUSxDQUFDQyxjQUFjLENBQUMsZUFBZSxHQUFDVyxHQUFHLENBQUM7TUFDdEUsSUFBSWdHLFlBQVksR0FBRyxFQUFFO01BQ3JCLElBQUdELG1CQUFtQixFQUFDO1FBQ25CQyxZQUFZLEdBQUdELG1CQUFtQixDQUFDek4sS0FBSztNQUM1QztNQUdBLElBQUcwTixZQUFZLEtBQUt2QyxTQUFTLElBQUl1QyxZQUFZLEtBQUssSUFBSSxFQUFDO1FBQ25EQSxZQUFZLEdBQUcsRUFBRTtNQUNyQjtNQUdBLElBQUdyQyxHQUFHLEtBQUssSUFBSSxFQUFDO1FBQ1osSUFBR3ZFLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFNBQVMsR0FBQ1csR0FBRyxDQUFDLENBQUN3RSxPQUFPLEtBQUssSUFBSSxFQUFDO1VBQ3ZEcUIsU0FBUyxHQUFHL0csY0FBYztRQUM5QjtNQUNKLENBQUMsTUFBSTtRQUNELElBQUdNLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFNBQVMsR0FBQ1csR0FBRyxDQUFDLENBQUN3RSxPQUFPLEtBQUssSUFBSSxFQUFDO1VBQ3ZEcUIsU0FBUyxHQUFHaEgsYUFBYTtVQUN6QjhHLE9BQU8sR0FBRyxJQUFJO1FBQ2xCO01BQ0o7TUFFQUYsZUFBZSxHQUFHQSxlQUFlLEdBQUksQ0FBQ2pELFlBQVksSUFBSyxDQUFDc0QsU0FBUyxHQUFDRCxTQUFTLENBQUU7TUFFN0UsSUFBR0csWUFBWSxLQUFLLGFBQWEsRUFBQztRQUM5QlIsVUFBVSxHQUFHQSxVQUFVLEdBQUksQ0FBQ2hELFlBQVksSUFBSSxDQUFDc0QsU0FBUyxHQUFDRCxTQUFTLENBQUU7TUFDdEU7SUFFSixDQUFDLENBQUM7SUFFRixJQUFHLENBQUNMLFVBQVUsR0FBRyxDQUFDRSxhQUFhLEVBQUM7TUFDNUIsSUFBSU8sVUFBVSxHQUFJN0csUUFBUSxDQUFDQyxjQUFjLENBQUMsbUJBQW1CLENBQUM7TUFDOUQ0RyxVQUFVLENBQUNDLFNBQVMsR0FBRyxtQkFBbUIsR0FBQ1YsVUFBVSxDQUFDMUIsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFFLEdBQUcsR0FBRTZCLE9BQU8sR0FBQyx5R0FBeUc7TUFDeExNLFVBQVUsQ0FBQ0UsS0FBSyxDQUFDQyxPQUFPLEdBQUcsT0FBTztJQUN0QyxDQUFDLE1BQUk7TUFDRGhILFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUM4RyxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0lBQ3ZFO0lBQ0FoSCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBRS9HLEtBQUssR0FBR2tOLFVBQVUsQ0FBQzFCLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDcEUxRSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDL0csS0FBSyxHQUFHbU4sZUFBZSxDQUFDM0IsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNqRjtFQUNBLFNBQVVyRCxtQkFBbUJBLENBQUNoSCxJQUFJLEVBQUM0TSxRQUFRLEVBQUNyRyxHQUFHLEVBQUMwRSxVQUFVLEVBQUM7SUFDdkQsSUFBSUgsT0FBTyxHQUFHbkYsUUFBUSxDQUFDYSxhQUFhLENBQUMsT0FBTyxDQUFDO0lBQzdDc0UsT0FBTyxDQUFDOUssSUFBSSxHQUFHQSxJQUFJO0lBQ25COEssT0FBTyxDQUFDeEgsSUFBSSxHQUFHc0osUUFBUSxHQUFDLElBQUk7SUFDNUI5QixPQUFPLENBQUNyRixFQUFFLEdBQUdtSCxRQUFRLEdBQUMsR0FBRyxHQUFDckcsR0FBRztJQUM3QnVFLE9BQU8sQ0FBQ2pNLEtBQUssR0FBRyxFQUFFO0lBQ2xCaU0sT0FBTyxDQUFDaEUsWUFBWSxDQUFDLGtCQUFrQixFQUFDbUUsVUFBVSxDQUFDO0lBQ25ESCxPQUFPLENBQUN2RixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBVztNQUMxQ2dGLGNBQWMsQ0FBQ08sT0FBTyxDQUFDO0lBQzNCLENBQUMsQ0FBQztJQUVGLE9BQU9BLE9BQU87RUFFbEI7RUFDQSxTQUFTekIsaUJBQWlCQSxDQUFDOUMsR0FBRyxFQUFDO0lBRTNCLElBQUlzRyxNQUFNLEdBQUlsSCxRQUFRLENBQUNhLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDOUNxRyxNQUFNLENBQUNwSCxFQUFFLEdBQUcsZUFBZSxHQUFDYyxHQUFHO0lBQy9Cc0csTUFBTSxDQUFDdkosSUFBSSxHQUFHLGVBQWUsR0FBQ2lELEdBQUc7SUFDakNzRyxNQUFNLENBQUMvRixZQUFZLENBQUMsa0JBQWtCLEVBQUMsZUFBZSxDQUFDO0lBQ3ZEK0YsTUFBTSxDQUFDdkYsU0FBUyxHQUFHLGNBQWM7SUFFakMsSUFBSXdGLE1BQU0sR0FBR25ILFFBQVEsQ0FBQ2EsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUM3Q3NHLE1BQU0sQ0FBQ2pPLEtBQUssR0FBRyxFQUFFO0lBQ2pCaU8sTUFBTSxDQUFDQyxJQUFJLEdBQUUsUUFBUTtJQUNyQkYsTUFBTSxDQUFDM0QsV0FBVyxDQUFDNEQsTUFBTSxDQUFDO0lBQzFCLElBQUlFLFVBQVU7SUFFVkEsVUFBVTtNQUFBLElBQUFDLEtBQUEsR0FBQXRJLGlCQUFBLGVBQUF4RyxtQkFBQSxHQUFBb0YsSUFBQSxDQUFHLFNBQUEySixTQUFBO1FBQUEsSUFBQXRGLFFBQUE7UUFBQSxPQUFBekosbUJBQUEsR0FBQXVCLElBQUEsVUFBQXlOLFVBQUFDLFNBQUE7VUFBQSxrQkFBQUEsU0FBQSxDQUFBcEosSUFBQSxHQUFBb0osU0FBQSxDQUFBL0ssSUFBQTtZQUFBO2NBQUErSyxTQUFBLENBQUFwSixJQUFBO2NBQUFvSixTQUFBLENBQUEvSyxJQUFBO2NBQUEsT0FFa0IwRixLQUFLLENBQUNzRixHQUFHLENBQUMsdUJBQXVCLENBQUM7WUFBQTtjQUFuRHpGLFFBQVEsR0FBQXdGLFNBQUEsQ0FBQXJMLElBQUE7Y0FBQSxPQUFBcUwsU0FBQSxDQUFBbEwsTUFBQSxXQUNQMEYsUUFBUSxDQUFDTCxJQUFJO1lBQUE7Y0FBQTZGLFNBQUEsQ0FBQXBKLElBQUE7Y0FBQW9KLFNBQUEsQ0FBQW5GLEVBQUEsR0FBQW1GLFNBQUE7Y0FFcEI7Y0FDQWxGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFBaUYsU0FBQSxDQUFBbkYsRUFBTSxDQUFDO1lBQUM7WUFBQTtjQUFBLE9BQUFtRixTQUFBLENBQUFqSixJQUFBO1VBQUE7UUFBQSxHQUFBK0ksUUFBQTtNQUFBLENBRTFCO01BQUEsZ0JBUkRGLFVBQVVBLENBQUE7UUFBQSxPQUFBQyxLQUFBLENBQUFwSSxLQUFBLE9BQUFELFNBQUE7TUFBQTtJQUFBLEdBUVQ7O0lBRUQ7SUFDQW9JLFVBQVUsQ0FBQyxDQUFDLENBQUN4TCxJQUFJLENBQUMsVUFBQytGLElBQUksRUFBSztNQUN4QjtNQUNDLEtBQUksSUFBSXpJLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR3lJLElBQUksQ0FBQ3JFLE1BQU0sRUFBRXBFLENBQUMsRUFBRSxFQUFDO1FBQ2pDLElBQUlnTyxPQUFNLEdBQUduSCxRQUFRLENBQUNhLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDN0NzRyxPQUFNLENBQUNqTyxLQUFLLEdBQUcwSSxJQUFJLENBQUN6SSxDQUFDLENBQUMsQ0FBQ0QsS0FBSztRQUM1QmlPLE9BQU0sQ0FBQ0MsSUFBSSxHQUFFeEYsSUFBSSxDQUFDekksQ0FBQyxDQUFDLENBQUN3TyxRQUFRO1FBQzdCVCxNQUFNLENBQUMzRCxXQUFXLENBQUM0RCxPQUFNLENBQUM7TUFDN0I7SUFDTCxDQUFDLENBQUM7SUFFTkQsTUFBTSxDQUFDdEgsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQVc7TUFDekNnRixjQUFjLENBQUNzQyxNQUFNLENBQUM7SUFDMUIsQ0FBQyxDQUFDO0lBRUYsT0FBT0EsTUFBTTtFQUVqQjtFQUNBLFNBQVNuRCxlQUFlQSxDQUFBLEVBQUU7SUFDdEIsSUFBSTZELGFBQWEsR0FBRzVILFFBQVEsQ0FBQ2lFLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztJQUM5RDJELGFBQWEsQ0FBQ3RNLE9BQU8sQ0FBQyxVQUFVdU0sWUFBWSxFQUFFO01BRTFDLElBQUlyQyxLQUFLLEdBQUdxQyxZQUFZLENBQUMvSCxFQUFFLENBQUMyRixLQUFLLENBQUMsR0FBRyxDQUFDO01BQ3RDLElBQUlsQixHQUFHLEdBQUdpQixLQUFLLENBQUMsQ0FBQyxDQUFDO01BQ2xCLElBQUk1RSxHQUFHLEdBQUc0RSxLQUFLLENBQUNBLEtBQUssQ0FBQ2pJLE1BQU0sR0FBRyxDQUFDLENBQUM7TUFDakMsSUFBSXVLLFdBQVcsR0FBR0QsWUFBWSxDQUFDeE4sSUFBSTtNQUNuQyxJQUFJME4sVUFBVSxHQUFHRixZQUFZLENBQUNHLE9BQU8sQ0FBQ0MsV0FBVyxDQUFDLENBQUM7TUFFbkQsSUFBSUMsVUFBVTtNQUVkLElBQUlKLFdBQVcsS0FBSyxPQUFPLElBQUl2RCxHQUFHLEtBQUssTUFBTSxFQUFFO1FBQzNDMkQsVUFBVSxHQUFHakYsV0FBVyxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFckMsR0FBRyxFQUFFLElBQUksQ0FBQztNQUNoRSxDQUFDLE1BQU0sSUFBSWtILFdBQVcsS0FBSyxPQUFPLElBQUl2RCxHQUFHLEtBQUssSUFBSSxFQUFFO1FBQ2hEMkQsVUFBVSxHQUFHakYsV0FBVyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFckMsR0FBRyxDQUFDO01BQ3pELENBQUMsTUFBTSxJQUFJbUgsVUFBVSxLQUFLLE9BQU8sSUFBSXhELEdBQUcsS0FBSyxNQUFNLEVBQUU7UUFDakQyRCxVQUFVLEdBQUdoRixXQUFXLENBQUMsSUFBSSxFQUFFLFNBQVMsR0FBR3RDLEdBQUcsRUFBRSxJQUFJLEVBQUVBLEdBQUcsQ0FBQztNQUM5RCxDQUFDLE1BQU0sSUFBSW1ILFVBQVUsS0FBSyxPQUFPLElBQUl4RCxHQUFHLEtBQUssSUFBSSxFQUFFO1FBQy9DMkQsVUFBVSxHQUFHaEYsV0FBVyxDQUFDLEtBQUssRUFBRSxVQUFVLEdBQUd0QyxHQUFHLEVBQUUsS0FBSyxFQUFFQSxHQUFHLENBQUM7TUFDakU7TUFFQSxJQUFJc0gsVUFBVSxFQUFFO1FBQ1pMLFlBQVksQ0FBQ00sYUFBYSxDQUFDQyxZQUFZLENBQUNGLFVBQVUsRUFBRUwsWUFBWSxDQUFDO01BQ3JFO0lBQ0osQ0FBQyxDQUFDO0VBRU47RUFDQSxTQUFTL0QsZUFBZUEsQ0FBQSxFQUFFO0lBQ3RCLElBQUk4RCxhQUFhLEdBQUc1SCxRQUFRLENBQUNpRSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7SUFDMUQyRCxhQUFhLENBQUN0TSxPQUFPLENBQUMsVUFBVXVNLFlBQVksRUFBRTtNQUUxQyxJQUFJckMsS0FBSyxHQUFHcUMsWUFBWSxDQUFDL0gsRUFBRSxDQUFDMkYsS0FBSyxDQUFDLEdBQUcsQ0FBQztNQUN0QyxJQUFJbEIsR0FBRyxHQUFHaUIsS0FBSyxDQUFDLENBQUMsQ0FBQztNQUNsQixJQUFJNUUsR0FBRyxHQUFHNEUsS0FBSyxDQUFDQSxLQUFLLENBQUNqSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO01BQ2pDLElBQUl1SyxXQUFXLEdBQUdELFlBQVksQ0FBQ3hOLElBQUk7TUFDbkMsSUFBSTBOLFVBQVUsR0FBR0YsWUFBWSxDQUFDRyxPQUFPLENBQUNDLFdBQVcsQ0FBQyxDQUFDO01BQ25ELElBQUlDLFVBQVU7TUFFZCxJQUFJSixXQUFXLEtBQUssT0FBTyxJQUFJdkQsR0FBRyxLQUFLLElBQUksRUFBRTtRQUN6QzJELFVBQVUsR0FBR2pGLFdBQVcsQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRXJDLEdBQUcsQ0FBQztNQUM5RCxDQUFDLE1BQU0sSUFBSWtILFdBQVcsS0FBSyxPQUFPLElBQUl2RCxHQUFHLEtBQUssS0FBSyxFQUFFO1FBQ2pEMkQsVUFBVSxHQUFHakYsV0FBVyxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFckMsR0FBRyxDQUFDO01BQ3pELENBQUMsTUFBTSxJQUFJbUgsVUFBVSxLQUFLLE9BQU8sSUFBSXhELEdBQUcsS0FBSyxJQUFJLEVBQUU7UUFDL0MyRCxVQUFVLEdBQUdoRixXQUFXLENBQUMsT0FBTyxFQUFFLFdBQVcsR0FBR3RDLEdBQUcsRUFBRSxNQUFNLEVBQUVBLEdBQUcsQ0FBQztNQUNyRSxDQUFDLE1BQU0sSUFBSW1ILFVBQVUsS0FBSyxPQUFPLElBQUl4RCxHQUFHLEtBQUssS0FBSyxFQUFFO1FBQ2hEMkQsVUFBVSxHQUFHaEYsV0FBVyxDQUFDLElBQUksRUFBRSxTQUFTLEdBQUd0QyxHQUFHLEVBQUUsSUFBSSxFQUFFQSxHQUFHLENBQUM7TUFDOUQ7TUFFQSxJQUFJc0gsVUFBVSxFQUFFO1FBQ1pMLFlBQVksQ0FBQ00sYUFBYSxDQUFDQyxZQUFZLENBQUNGLFVBQVUsRUFBRUwsWUFBWSxDQUFDO01BQ3JFO0lBQ0osQ0FBQyxDQUFDO0VBQ047RUFDQSxTQUFTNUUsV0FBV0EsQ0FBQ29GLGNBQWMsRUFBRUMsS0FBSyxFQUFFL0QsR0FBRyxFQUFFM0QsR0FBRyxFQUFFO0lBRWxELElBQUkySCxLQUFLLEdBQUd2SSxRQUFRLENBQUNhLGFBQWEsQ0FBQyxPQUFPLENBQUM7SUFDM0MwSCxLQUFLLENBQUM1RyxTQUFTLEdBQUcsa0JBQWtCLElBQUk0QyxHQUFHLEtBQUssTUFBTSxJQUFJQSxHQUFHLEtBQUssSUFBSSxHQUFHLGVBQWUsR0FBRyxXQUFXLENBQUM7SUFDdkdnRSxLQUFLLENBQUNsTyxJQUFJLEdBQUcsT0FBTztJQUNwQmtPLEtBQUssQ0FBQzVLLElBQUksR0FBRyxNQUFNLEdBQUdpRCxHQUFHLEdBQUcsSUFBSTtJQUNoQzJILEtBQUssQ0FBQ3pJLEVBQUUsR0FBRyxNQUFNLEdBQUd5RSxHQUFHLEdBQUcsR0FBRyxHQUFHM0QsR0FBRztJQUNuQzJILEtBQUssQ0FBQ3BILFlBQVksQ0FBQyxrQkFBa0IsRUFBRWtILGNBQWMsQ0FBQztJQUV0RCxJQUFHOUQsR0FBRyxLQUFLLE1BQU0sSUFBSUEsR0FBRyxLQUFLLElBQUksRUFBQztNQUM5QmdFLEtBQUssQ0FBQ25ELE9BQU8sR0FBRyxJQUFJO0lBQ3hCO0lBQ0FtRCxLQUFLLENBQUMzSSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBVztNQUN4Q2lGLGtCQUFrQixDQUFDakUsR0FBRyxDQUFDO0lBQzNCLENBQUMsQ0FBQztJQUNGLE9BQU8ySCxLQUFLO0VBQ2hCO0VBQ0EsU0FBU3JGLFdBQVdBLENBQUNzRixTQUFTLEVBQUVDLE9BQU8sRUFBRWxFLEdBQUcsRUFBRTNELEdBQUcsRUFBRTtJQUUvQyxJQUFJMEgsS0FBSyxHQUFHdEksUUFBUSxDQUFDYSxhQUFhLENBQUMsT0FBTyxDQUFDO0lBQzNDeUgsS0FBSyxDQUFDM0csU0FBUyxHQUFHLGtCQUFrQixJQUFJNEMsR0FBRyxLQUFLLE1BQU0sSUFBSUEsR0FBRyxLQUFLLElBQUksR0FBRyxlQUFlLEdBQUcsV0FBVyxDQUFDO0lBQ3ZHK0QsS0FBSyxDQUFDRyxPQUFPLEdBQUdBLE9BQU87SUFDdkJILEtBQUssQ0FBQ3RILFNBQVMsR0FBR3dILFNBQVM7SUFDM0JGLEtBQUssQ0FBQ3hJLEVBQUUsR0FBRyxNQUFNLEdBQUd5RSxHQUFHLEdBQUcsU0FBUyxHQUFHM0QsR0FBRztJQUN6QyxPQUFPMEgsS0FBSztFQUNoQjtFQUVBLElBQUksQ0FBQzNJLE1BQU0sQ0FBQytJLFVBQVUsR0FBRyxTQUFTQSxVQUFVQSxDQUFDdkQsT0FBTyxFQUFFekUsTUFBTSxFQUFDO0lBRXpELElBQUk0RSxVQUFVLEdBQUdILE9BQU8sQ0FBQ0ksWUFBWSxDQUFDLGtCQUFrQixDQUFDO0lBQ3pELElBQUlyTSxLQUFLLEdBQUdpTSxPQUFPLENBQUNqTSxLQUFLO0lBQ3pCLElBQUkySSxHQUFHLEdBQUcsYUFBYSxHQUFDbkIsTUFBTTtJQUU5QixJQUFJa0IsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiQSxJQUFJLENBQUMwRCxVQUFVLENBQUMsR0FBR3BNLEtBQUs7SUFFeEJrSixLQUFLLENBQUNDLElBQUksQ0FBQ1IsR0FBRyxFQUFFRCxJQUFJLEVBQUVsQixNQUFNLENBQUMsQ0FDeEI3RSxJQUFJLENBQUMsVUFBQ2lLLEdBQUcsRUFBSzs7TUFFWDtJQUFBLENBRUgsQ0FBQyxTQUFNLENBQUMsVUFBQ0MsR0FBRyxFQUFLO01BRWxCQyxLQUFLLENBQUMsZ0RBQWdELENBQUM7SUFFM0QsQ0FBQyxDQUFDO0lBQ0YsSUFBR1YsVUFBVSxLQUFLLE1BQU0sSUFBSUEsVUFBVSxLQUFLLFlBQVksRUFBQztNQUNwRHFELFFBQVEsQ0FBQ0MsTUFBTSxDQUFDLENBQUM7SUFDckI7RUFFSixDQUFDO0VBR0QsSUFBTUMsT0FBTyxHQUFHN0ksUUFBUSxDQUFDaUUsZ0JBQWdCLENBQUMsMEJBQTBCLENBQUM7RUFFckU0RSxPQUFPLENBQUN2TixPQUFPLENBQUMsVUFBQXdOLE1BQU0sRUFBSTtJQUN0QkEsTUFBTSxDQUFDbEosZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07TUFDbkMsSUFBTW1KLE9BQU8sR0FBR0QsTUFBTSxDQUFDRSxrQkFBa0I7TUFDekMsSUFBTUMsS0FBSyxHQUFHSCxNQUFNLENBQUNJLGFBQWEsQ0FBQyxhQUFhLENBQUM7TUFDakQsSUFBSUgsT0FBTyxDQUFDeEgsU0FBUyxDQUFDNEgsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ3BDSixPQUFPLENBQUN4SCxTQUFTLENBQUM2SCxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2hDTCxPQUFPLENBQUNoQyxLQUFLLENBQUNzQyxTQUFTLEdBQUcsSUFBSTtRQUM5Qk4sT0FBTyxDQUFDaEMsS0FBSyxDQUFDdUMsT0FBTyxHQUFHLFFBQVE7UUFDaENMLEtBQUssQ0FBQ2pJLFNBQVMsR0FBRyxRQUFRO01BRzlCLENBQUMsTUFBTTtRQUNIK0gsT0FBTyxDQUFDeEgsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQzdCdUgsT0FBTyxDQUFDaEMsS0FBSyxDQUFDc0MsU0FBUyxHQUFHTixPQUFPLENBQUNRLFlBQVksR0FBRyxJQUFJO1FBQ3JEUixPQUFPLENBQUNoQyxLQUFLLENBQUN1QyxPQUFPLEdBQUcsTUFBTTtRQUM5QkwsS0FBSyxDQUFDakksU0FBUyxHQUFHLFFBQVE7TUFDOUI7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7RUFFRixJQUFJd0ksTUFBTSxHQUFHeEosUUFBUSxDQUFDaUUsZ0JBQWdCLENBQUMsMEJBQTBCLENBQUM7RUFDbEUsSUFBSXdGLFlBQVksR0FBR3pKLFFBQVEsQ0FBQ2lFLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztFQUV0RHVGLE1BQU0sQ0FBQ2xPLE9BQU8sQ0FBQyxVQUFTb08sS0FBSyxFQUFFO0lBQzNCQSxLQUFLLENBQUNDLFFBQVEsR0FBRyxJQUFJO0VBQ3pCLENBQUMsQ0FBQztFQUNGO0VBQ0E7RUFDQTtFQUNBM0osUUFBUSxDQUFDQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUNMLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFZO0lBQzNFLElBQUlnSyxXQUFXLEdBQUc1SixRQUFRLENBQUNDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQztJQUMvRDJKLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7RUFDdEIsQ0FBQyxDQUFDO0VBR0YsSUFBTUMsR0FBRyxHQUFHOUosUUFBUSxDQUFDQyxjQUFjLENBQUMsV0FBVyxDQUFDO0VBQ2hELElBQUk4SixTQUFTLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFFakssUUFBUSxDQUFDQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMvRyxLQUFLLENBQUM7RUFFdkUsSUFBSWdSLFFBQVEsR0FBR2xLLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDL0csS0FBSztFQUN4RCxJQUFNaVIsT0FBTyxHQUFHLElBQUk3SyxxREFBSyxDQUFDd0ssR0FBRyxFQUFFO0lBQzNCelAsSUFBSSxFQUFFLFVBQVU7SUFBRTtJQUNsQnVILElBQUksRUFBRTtNQUNGd0ksTUFBTSxFQUFFTCxTQUFTLENBQUNLLE1BQU07TUFDeEJDLFFBQVEsRUFBRSxDQUFDO1FBQ1A7UUFDQXpJLElBQUksRUFBRW1JLFNBQVMsQ0FBQ25JLElBQUk7UUFDcEIwSSxlQUFlLEVBQUVQLFNBQVMsQ0FBQ1EsTUFBTTtRQUNqQ0MsV0FBVyxFQUFFLENBQUM7UUFDZEMsV0FBVyxFQUFFO01BQ2pCLENBQUM7SUFDTCxDQUFDO0lBQ0RDLE9BQU8sRUFBRTtNQUNMQyxNQUFNLEVBQUUsRUFBRTtNQUFDO01BQ1hDLE1BQU0sRUFBRSxHQUFHO01BQ1hDLE1BQU0sRUFBRTtRQUNKN0QsT0FBTyxFQUFFO01BQ2IsQ0FBQztNQUNEOEQsT0FBTyxFQUFFO1FBQ0xDLFVBQVUsRUFBRSxLQUFLLENBQUM7TUFDcEIsQ0FBQztNQUNIQyxTQUFTLEVBQUM7UUFDTkMsYUFBYSxFQUFDLElBQUk7UUFDbEJDLFlBQVksRUFBQztNQUNqQjtJQUNKO0VBQ0osQ0FBQyxDQUFDO0VBR0YsSUFBSTlFLFVBQVUsR0FBR3BHLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDL0csS0FBSztFQUM1RCxJQUFJbU4sZUFBZSxHQUFHckcsUUFBUSxDQUFDQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQy9HLEtBQUs7RUFDdEU4RyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDa0wsV0FBVyxHQUFHL0UsVUFBVTtFQUNuRXBHLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUNrTCxXQUFXLEdBQUc5RSxlQUFlO0FBRzdFLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDcm1Cd0I7QUFDMUIxRyxNQUFNLENBQUN5QyxLQUFLLEdBQUdBLDZDQUFLO0FBRXBCekMsTUFBTSxDQUFDeUMsS0FBSyxDQUFDZ0osUUFBUSxDQUFDdkMsT0FBTyxDQUFDd0MsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsZ0JBQWdCOzs7Ozs7Ozs7OztBQ0gzRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Fzcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgJy4vYm9vdHN0cmFwJyA7XG5pbXBvcnQgIHtNb2RhbH0gIGZyb20gJ2Jvb3RzdHJhcCc7XG4vLyBpbXBvcnQgICdib290c3RyYXAnO1xuaW1wb3J0ICdAcG9wcGVyanMvY29yZSc7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnY2hhcnQuanMvYXV0bydcbmNvbnN0IGJvb3RzdHJhcCA9IHJlcXVpcmUoJy4vYm9vdHN0cmFwJylcbmNvbnN0IGdyYW1Db252ZXJ0ZXIgPSAxMDAwO1xuY29uc3Qgb3VuY2VDb252ZXJ0ZXIgPSAxNjtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbihlKSB7XG5cbiAgICB0aGlzLndpbmRvdy5zaG93UGFzc3dvcmQgPSBmdW5jdGlvbiBzaG93UGFzc3dvcmQoaWQpe1xuICAgICAgICAgICAgbGV0IHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICBpZiAocGFzc3dvcmQudHlwZSA9PT0gXCJwYXNzd29yZFwiKSB7XG4gICAgICAgICAgICAgICAgcGFzc3dvcmQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFzc3dvcmQudHlwZSA9IFwicGFzc3dvcmRcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aGlzLndpbmRvdy5hZGRMaXN0SXRlbSA9IGZ1bmN0aW9uIGFkZExpc3RJdGVtKCl7XG5cbiAgICAgICAgbGV0IG51bWJlck9mSXRlbXNUb0FkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaW5lc1RvQWRkJyk7XG4gICAgICAgIGxldCBsaW5lc1RvQWRkID0gMTtcbiAgICAgICAgaWYoK251bWJlck9mSXRlbXNUb0FkZC52YWx1ZSA8IDEpe1xuICAgICAgICAgICAgbnVtYmVyT2ZJdGVtc1RvQWRkLnZhbHVlID0gbGluZXNUb0FkZDtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBsaW5lc1RvQWRkID0gK251bWJlck9mSXRlbXNUb0FkZC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaW5lc1RvQWRkOyBpKyspe1xuXG5cbiAgICAgICAgICAgIGxldCBsaXN0VU9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VvbScpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGZpbmFsSUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluYWwtaScpO1xuICAgICAgICAgICAgbGV0IGl0ZW1UYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLXRhYmxlLWJvZHknKTtcbiAgICAgICAgICAgIGxldCB1c2VySWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcklkJykudmFsdWU7XG4gICAgICAgICAgICBsZXQgbGlzdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RJZCcpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGZpbmFsSSA9IGZpbmFsSUVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICBmaW5hbElFbGVtZW50LnZhbHVlID0gK2ZpbmFsSSArIDE7XG5cbiAgICAgICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBjZWxscyBhbmQgaW5wdXQgZWxlbWVudHMuXG4gICAgICAgICAgICBsZXQgY2VsbDAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gICAgICAgICAgICBjZWxsMC5zY29wZSA9ICdyb3cnO1xuICAgICAgICAgICAgY2VsbDAuaW5uZXJIVE1MID0gZmluYWxJO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG5cbiAgICAgICAgICAgIGxldCBjb3VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgY291bnRlci50eXBlID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgIGNvdW50ZXIubmFtZSA9IFwiaWRbXVwiO1xuICAgICAgICAgICAgY291bnRlci5pZCA9ICdpZC0nK2ZpbmFsSTtcbiAgICAgICAgICAgIGNvdW50ZXIudmFsdWUgPSAnbmV3LScrZmluYWxJO1xuICAgICAgICAgICAgY291bnRlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sdW1uLW5hbWUnLCdpZCcpO1xuXG4gICAgICAgICAgICBsZXQgaXRlbU5hbWUgPSAgY3JlYXRlTGlzdEl0ZW1JbnB1dCgndGV4dCcsJ2l0ZW1OYW1lJyxmaW5hbEksJ2l0ZW1fbmFtZScpO1xuICAgICAgICAgICAgaXRlbU5hbWUucGxhY2Vob2xkZXIgPSAnSXRlbSBOYW1lJztcbiAgICAgICAgICAgIGl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgY2VsbDYuaWQgPSAnYnRuLXRkLScrZmluYWxJO1xuICAgICAgICAgICAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5pZCA9ICdkZWxldGVCdG4tJytmaW5hbEk7XG4gICAgICAgICAgICBkZWxldGVCdG4uY2xhc3NOYW1lID0gJ2J0biBidG4tcHJpbWFyeSBidG4tc20gIHB5LTInO1xuICAgICAgICAgICAgZGVsZXRlQnRuLmlubmVySFRNTCA9ICd4JztcblxuICAgICAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgICAgIGxldCB1cmwgPSAnL2xpc3QtaXRlbSc7XG4gICAgICAgICAgICBkYXRhWydsaXN0X2lkJ10gPSBsaXN0SWQ7XG4gICAgICAgICAgICBkYXRhWyd1c2VyX2lkJ10gPSB1c2VySWQ7XG4gICAgICAgICAgICBkYXRhWydpdGVtX25hbWUnXSA9ICcnO1xuICAgICAgICAgICAgbGV0IHVwZGF0ZUl0ZW07XG4gICAgICAgICAgICB1cGRhdGVJdGVtID0gYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KHVybCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBlcnJvclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gVG8gdXNlIHRoZSBmdW5jdGlvbiBhbmQgaGFuZGxlIHRoZSByZXNwb25zZSBkYXRhXG4gICAgICAgICAgICB1cGRhdGVJdGVtKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIERvIHNvbWV0aGluZyB3aXRoIHRoZSByZXNwb25zZSBkYXRhXG4gICAgICAgICAgICAgICAgY291bnRlci52YWx1ZSA9IGRhdGEubmV3SWQ7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnaHJlZicsICcvZGVzdHJveS1saXN0LWl0ZW0vJytkYXRhLm5ld0lkKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsZXQgY2VsbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBsZXQgaXRlbVdlaWdodCA9IGNyZWF0ZUxpc3RJdGVtSW5wdXQoJ251bWJlcicsJ2l0ZW1XZWlnaHQnLGZpbmFsSSwnaXRlbV93ZWlnaHQnKTtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQudmFsdWUgPSAwO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKCdmb3Itd2VpZ2h0Jyk7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LmNsYXNzTGlzdC5hZGQoJ251bWJlci1pbnB1dCcpO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKTtcbiAgICAgICAgICAgIGNlbGwyLmNsYXNzTGlzdC5hZGQoJ251bWJlci1jb2wnKTtcblxuICAgICAgICAgICAgbGV0IGNlbGwzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgbGV0IHJhZGlvMTtcbiAgICAgICAgICAgIGxldCByYWRpbzI7XG4gICAgICAgICAgICBsZXQgcmFkaW9MYWJlbDE7XG4gICAgICAgICAgICBsZXQgcmFkaW9MYWJlbDI7XG5cbiAgICAgICAgICAgIGlmKGxpc3RVT00gPT09ICd1cycpe1xuXG4gICAgICAgICAgICAgICAgcmFkaW8xID0gY3JlYXRlUmFkaW8oJ2luX291bmNlcycsICcnLCAnb3onLCBmaW5hbEkpO1xuICAgICAgICAgICAgICAgIHJhZGlvTGFiZWwxID0gY3JlYXRlTGFiZWwoJ09aJywgICd1b20tb3otJytmaW5hbEksICdveicsIGZpbmFsSSk7XG4gICAgICAgICAgICAgICAgcmFkaW8yID0gY3JlYXRlUmFkaW8oJ2luX2xicycsICcnLCAnbGJzJywgZmluYWxJKTtcbiAgICAgICAgICAgICAgICByYWRpb0xhYmVsMiA9IGNyZWF0ZUxhYmVsKCdMQlMnLCAgJ3VvbS1sYnMtJytmaW5hbEksICdsYnMnLCBmaW5hbEkpO1xuXG4gICAgICAgICAgICB9ZWxzZXtcblxuICAgICAgICAgICAgICAgIHJhZGlvMSA9IGNyZWF0ZVJhZGlvKCdpbl9ncmFtcycsICcnLCAnZ3JhbScsIGZpbmFsSSk7XG4gICAgICAgICAgICAgICAgcmFkaW9MYWJlbDEgPSAgY3JlYXRlTGFiZWwoJ0dyYW1zJywgICd1b20tZ3JhbS0nK2ZpbmFsSSwgJ2dyYW0nLCBmaW5hbEkpO1xuICAgICAgICAgICAgICAgIHJhZGlvMiA9ICBjcmVhdGVSYWRpbygnaW5fa2lsb3MnLCAnJywgJ2tnJywgZmluYWxJKTtcbiAgICAgICAgICAgICAgICByYWRpb0xhYmVsMiA9IGNyZWF0ZUxhYmVsKCdLRycsICAndW9tLWtnLScrZmluYWxJLCAna2cnLCBmaW5hbEkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgY2VsbDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBjZWxsNC5jbGFzc0xpc3QuYWRkKCdudW1iZXItY29sJyk7XG4gICAgICAgICAgICBsZXQgcGFja2VkQW1vdW50ID0gY3JlYXRlTGlzdEl0ZW1JbnB1dCgnbnVtYmVyJywncGFja2VkQW1vdW50JyxmaW5hbEksJ2Ftb3VudCcpO1xuICAgICAgICAgICAgcGFja2VkQW1vdW50LnZhbHVlID0gMTtcblxuICAgICAgICAgICAgcGFja2VkQW1vdW50LmNsYXNzTGlzdC5hZGQoJ2Zvci13ZWlnaHQnKTtcbiAgICAgICAgICAgIHBhY2tlZEFtb3VudC5jbGFzc0xpc3QuYWRkKCdudW1iZXItaW5wdXQnKTtcbiAgICAgICAgICAgIHBhY2tlZEFtb3VudC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKTtcblxuICAgICAgICAgICAgbGV0IGNlbGw1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgY2VsbDUuY2xhc3NMaXN0LmFkZCgnbnVtYmVyLWNvbCcpO1xuICAgICAgICAgICAgbGV0IHRvdGFsTGluZVdlaWdodCA9IGNyZWF0ZUxpc3RJdGVtSW5wdXQoJ251bWJlcicsJ3RvdGFsTGluZVdlaWdodCcsZmluYWxJLCd0b3RhbF9saW5lX3dlaWdodCcpO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LnZhbHVlID0gMDtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sdW1uLW5hbWUnLCd0b3RhbF9saW5lX3dlaWdodCcpO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLHRydWUpO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LmNsYXNzTGlzdC5hZGQoJ251bWJlci1pbnB1dCcpO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LmNsYXNzTGlzdC5hZGQoJ2Zvci10b3RhbC1saXN0LXdlaWdodCcpO1xuXG4gICAgICAgICAgICAvL2FwcGVuZCBpbnB1dHMgdG8gY2VsbHMuXG4gICAgICAgICAgICBjZWxsMS5hcHBlbmRDaGlsZChjb3VudGVyKTtcbiAgICAgICAgICAgIGNlbGwxLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIGNlbGwyLmFwcGVuZENoaWxkKGl0ZW1XZWlnaHQpO1xuXG4gICAgICAgICAgICBsZXQgc2VsZWN0Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGxldCBjYXRlZ29yeVNlbGVjdCA9IGdldENhdGVncm95U2VsZWN0KGZpbmFsSSk7XG4gICAgICAgICAgICBzZWxlY3RDZWxsLmFwcGVuZChjYXRlZ29yeVNlbGVjdCk7XG5cbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHJhZGlvMSk7XG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChyYWRpb0xhYmVsMSk7XG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChyYWRpbzIpO1xuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbDIpO1xuXG4gICAgICAgICAgICBjZWxsNC5hcHBlbmRDaGlsZChwYWNrZWRBbW91bnQpO1xuICAgICAgICAgICAgY2VsbDUuYXBwZW5kQ2hpbGQodG90YWxMaW5lV2VpZ2h0KTtcbiAgICAgICAgICAgIGNlbGw2LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cblxuICAgICAgICAgICAgLy8gQXBwZW5kIGNlbGxzIHRvIHRoZSByb3cuXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDApO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwxKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChzZWxlY3RDZWxsKTtcbiAgICAgICAgICAgIC8vIHJvdy5hcHBlbmRDaGlsZChjZWxsMyk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDIpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGw0KTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsNSk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDMpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGw2KTtcblxuXG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIHJvdyB0byB0aGUgdGFibGUuXG4gICAgICAgICAgICBpdGVtVGFibGUuYXBwZW5kQ2hpbGQocm93KTtcblxuICAgICAgICAgICAgLy9hZGQgZnVuY3Rpb25zIHRvIGNhbGN1bGF0ZSBhbmQgY29udmVydCB0b3RhbCB3ZWlnaHQuXG4gICAgICAgICAgICBhZGRFdmVudExpc3RlbmVyV2VpZ2h0Q2FsYyhmaW5hbEkpO1xuICAgICAgICB9XG4gICAgICAgIG51bWJlck9mSXRlbXNUb0FkZC52YWx1ZT0xO1xuXG4gICAgfVxuXG4gICAgdGhpcy53aW5kb3cudXBkYXRlVU9NID0gZnVuY3Rpb24gdXBkYXRlVU9NKHZhbHVlKSB7XG4gICAgICAgIGlmKHZhbHVlICE9PSAndXMnKXtcbiAgICAgICAgICAgdXNSYWRpb1RvTWV0cmljKCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbWV0cmljUmFkaW9Ub1VzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcldlaWdodENhbGMocm93KXtcbiAgICAgICAgbGV0IG5lZWRlZEZvcldlaWdodHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9yLXdlaWdodCcpO1xuICAgICAgICBuZWVkZWRGb3JXZWlnaHRzLmZvckVhY2goZnVuY3Rpb24gKG5lZWRlZEZvcldlaWdodCl7XG4gICAgICAgICAgICBuZWVkZWRGb3JXZWlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZ2V0TGluZVRvdGFsV2VpZ2h0KHJvdyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgIH1cblxuICAgICB0aGlzLndpbmRvdy5nZXRMaW5lVG90YWxXZWlnaHQgPSBmdW5jdGlvbiBnZXRMaW5lVG90YWxXZWlnaHQocm93LGNvbnZlcnQgPSBmYWxzZSl7XG5cbiAgICAgICAgbGV0IHdlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtV2VpZ2h0LScrcm93KS52YWx1ZTtcbiAgICAgICAgbGV0IHBhY2tlZEFtb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWNrZWRBbW91bnQtJytyb3cpLnZhbHVlO1xuICAgICAgICBsZXQgdW9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VvbScpO1xuICAgICAgICBsZXQgbGluZVRvdGFsV2VpZ2h0RWxlbWVudCA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxMaW5lV2VpZ2h0LScrcm93KTtcblxuICAgICAgICBsZXQgbGluZVRvdGFsID0gMDtcbiAgICAgICAgbGluZVRvdGFsID0gK3dlaWdodCAqICtwYWNrZWRBbW91bnQ7XG4gICAgICAgIGxpbmVUb3RhbCA9IGxpbmVUb3RhbC50b0ZpeGVkKDIpLnJlcGxhY2UoL1suLF0wMCQvLCBcIlwiKTtcbiAgICAgICAgbGluZVRvdGFsV2VpZ2h0RWxlbWVudC52YWx1ZSA9IGxpbmVUb3RhbDtcblxuICAgICAgICB1cGRhdGVMaXN0SXRlbShsaW5lVG90YWxXZWlnaHRFbGVtZW50KTtcblxuXG4gICAgfVxuICAgIHRoaXMud2luZG93LmNvbnZlcnRNZWFzdXJlbWVudCA9IGZ1bmN0aW9uIGNvbnZlcnRNZWFzdXJlbWVudChyb3csIGNvbnZlcnQgPSBmYWxzZSl7XG5cbiAgICAgICAgbGV0IHVvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1b20nKS52YWx1ZTtcbiAgICAgICAgbGV0IHdlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtV2VpZ2h0LScrcm93KTtcbiAgICAgICAgbGV0IHBhY2tlZEFtb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWNrZWRBbW91bnQtJytyb3cpLnZhbHVlO1xuICAgICAgICBsZXQgdG90YWxXZWlnaHQgPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsTGluZVdlaWdodC0nK3JvdylcbiAgICAgICAgbGV0IHRvdGFsTGluZVdlaWdodFZhbHVlID0gMDtcbiAgICAgICAgbGV0IHdlaWdodFZhbHVlID0gd2VpZ2h0LnZhbHVlO1xuICAgICAgICBsZXQgc21hbGw7XG4gICAgICAgIGxldCBsYXJnZTtcbiAgICAgICAgbGV0IGVsZW1lbnQ7XG5cbiAgICAgICAgaWYodW9tID09PSAndXMnKXtcbiAgICAgICAgICAgIHNtYWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VvbS1vei0nK3Jvdyk7XG4gICAgICAgICAgICBsYXJnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1b20tbGJzLScrcm93KTtcbiAgICAgICAgICAgIGlmKHNtYWxsLmNoZWNrZWQgPT09IHRydWUpe1xuICAgICAgICAgICAgICAgIHdlaWdodFZhbHVlID0gK3dlaWdodFZhbHVlICogMTY7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IHNtYWxsO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgd2VpZ2h0VmFsdWUgPSArd2VpZ2h0VmFsdWUgLyAxNjtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gbGFyZ2VcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNtYWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VvbS1ncmFtLScrcm93KTtcbiAgICAgICAgICAgIGxhcmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VvbS1rZy0nK3Jvdyk7XG5cbiAgICAgICAgICAgIGlmKHNtYWxsLmNoZWNrZWQgPT09IHRydWUpe1xuICAgICAgICAgICAgICAgIHdlaWdodFZhbHVlID0gK3dlaWdodFZhbHVlICogMTAwMDtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gc21hbGw7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB3ZWlnaHRWYWx1ZSA9ICt3ZWlnaHRWYWx1ZSAvMTAwMDtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gbGFyZ2VcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgdG90YWxMaW5lV2VpZ2h0VmFsdWUgPSArd2VpZ2h0VmFsdWUgKiArcGFja2VkQW1vdW50O1xuICAgICAgICB3ZWlnaHQudmFsdWUgPSB3ZWlnaHRWYWx1ZS50b0ZpeGVkKDIpLnJlcGxhY2UoL1suLF0wMCQvLCBcIlwiKTtcbiAgICAgICAgdG90YWxXZWlnaHQudmFsdWUgPSB0b3RhbExpbmVXZWlnaHRWYWx1ZS50b0ZpeGVkKDIpLnJlcGxhY2UoL1suLF0wMCQvLCBcIlwiKTtcbiAgICAgICAgdXBkYXRlTGlzdEl0ZW0oZWxlbWVudCk7XG4gICAgICAgIHVwZGF0ZUxpc3RJdGVtKHdlaWdodCk7XG4gICAgICAgIHVwZGF0ZUxpc3RJdGVtKHRvdGFsV2VpZ2h0KTtcblxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRCb29sZWFuRGF0YShjb2x1bW5OYW1lKXtcblxuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICBkYXRhWydpbl9vdW5jZXMnXSA9IGZhbHNlO1xuICAgICAgICBkYXRhWydpbl9sYnMnXSA9IGZhbHNlO1xuICAgICAgICBkYXRhWydpbl9ncmFtcyddID0gZmFsc2U7XG4gICAgICAgIGRhdGFbJ2luX2tpbG9zJ10gPSBmYWxzZTtcbiAgICAgICAgc3dpdGNoKGNvbHVtbk5hbWUpe1xuICAgICAgICAgICAgY2FzZSAnaW5fb3VuY2VzJzpcbiAgICAgICAgICAgICAgICBkYXRhWydpbl9vdW5jZXMnXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdpbl9sYnMnOlxuICAgICAgICAgICAgICAgIGRhdGFbJ2luX2xicyddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnaW5fZ3JhbXMnOlxuICAgICAgICAgICAgICAgIGRhdGFbJ2luX2dyYW1zJ10gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdpbl9raWxvcyc6XG4gICAgICAgICAgICAgICAgZGF0YVsnaW5fa2lsb3MnXSA9IHRydWU7XG4gICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIHRoaXMud2luZG93LnVwZGF0ZUxpc3RJdGVtID0gZnVuY3Rpb24gdXBkYXRlTGlzdEl0ZW0oZWxlbWVudCl7XG5cbiAgICAgICAgbGV0IGNvbHVtbk5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jb2x1bW4tbmFtZScpO1xuICAgICAgICBsZXQgdmFsdWUgPSBlbGVtZW50LnZhbHVlO1xuICAgICAgICBsZXQgaWQgPSBlbGVtZW50LmlkO1xuICAgICAgICBsZXQgaWRBcnIgPSBpZC5zcGxpdCgnLScpO1xuICAgICAgICBsZXQgYXJyTGVuZ3RoID0gaWRBcnIubGVuZ3RoXG4gICAgICAgIGxldCByb3cgPSBpZEFyclthcnJMZW5ndGgtMV07XG4gICAgICAgIGxldCBpdGVtSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWQtJytyb3cpO1xuICAgICAgICBsZXQgaXRlbUlkVmFsdWUgPSBpdGVtSWQudmFsdWU7XG4gICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdElkJykudmFsdWU7XG4gICAgICAgIGxldCB1cmwgPSAnL2xpc3QtaXRlbS8nK2l0ZW1JZFZhbHVlO1xuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICBsZXQgdXNlcklkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJJZCcpLnZhbHVlO1xuXG4gICAgICAgIGRhdGFbY29sdW1uTmFtZV0gPSB2YWx1ZTtcblxuICAgICAgICBpZihjb2x1bW5OYW1lLnN1YnN0cmluZygwLDMpID09PSAnaW5fJyl7XG4gICAgICAgICAgICBkYXRhID0gZ2V0Qm9vbGVhbkRhdGEoY29sdW1uTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhWydsaXN0X2lkJ10gPSBsaXN0SWQ7XG4gICAgICAgIGRhdGFbJ3VzZXJfaWQnXSA9IHVzZXJJZDtcbiAgICAgICAgZGF0YVsnaWQnXSA9IGl0ZW1JZFZhbHVlO1xuXG4gICAgICAgIGF4aW9zLnBvc3QodXJsLCBkYXRhLCBpdGVtSWQpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG5cbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KCdGYWlsZWQgdG8gdXBkYXRlIGxpc3QgaXRlbS4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdXBkYXRlVG90YWxMaXN0V2VpZ2h0cygpO1xuXG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRvdGFsTGlzdFdlaWdodHMoKXtcblxuICAgICAgICBsZXQgd2VpZ2h0c0ZvclBXID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvci10b3RhbC1saXN0LXdlaWdodCcpO1xuICAgICAgICBsZXQgYmFzZVdlaWdodCA9IDA7XG4gICAgICAgIGxldCB0b3RhbFBhY2tXZWlnaHQgPSAwO1xuICAgICAgICBsZXQgbWF4UGFja1dlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXhQYWNrV2VpZ2h0JykudmFsdWU7XG4gICAgICAgIGxldCB1b21UZXh0ID0gJ0xCUyc7XG4gICAgICAgIHdlaWdodHNGb3JQVy5mb3JFYWNoKGZ1bmN0aW9uICh3ZWlnaHRGb3JQVyl7XG5cbiAgICAgICAgICAgIGxldCBpZCA9IHdlaWdodEZvclBXLmlkO1xuICAgICAgICAgICAgbGV0IGlkQXJyID0gaWQuc3BsaXQoJy0nKTtcbiAgICAgICAgICAgIGxldCBhcnJMZW5ndGggPSBpZEFyci5sZW5ndGhcbiAgICAgICAgICAgIGxldCByb3cgPSBpZEFyclthcnJMZW5ndGgtMV07XG4gICAgICAgICAgICBsZXQgcGFja2VkQW1vdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhY2tlZEFtb3VudC0nK3JvdykudmFsdWVcbiAgICAgICAgICAgIGxldCBjb252ZXJ0ZXIgPSAxO1xuICAgICAgICAgICAgbGV0IHJvd1dlaWdodCA9ICt3ZWlnaHRGb3JQVy52YWx1ZTtcbiAgICAgICAgICAgIGxldCB1b20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW9tJykudmFsdWU7XG4gICAgICAgICAgICBsZXQgaXRlbUNhdGVnb3J5RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtQ2F0ZWdvcnktJytyb3cpO1xuICAgICAgICAgICAgbGV0IGl0ZW1DYXRlZ29yeSA9ICcnO1xuICAgICAgICAgICAgaWYoaXRlbUNhdGVnb3J5RWxlbWVudCl7XG4gICAgICAgICAgICAgICAgaXRlbUNhdGVnb3J5ID0gaXRlbUNhdGVnb3J5RWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBpZihpdGVtQ2F0ZWdvcnkgPT09IHVuZGVmaW5lZCB8fCBpdGVtQ2F0ZWdvcnkgPT09IG51bGwpe1xuICAgICAgICAgICAgICAgIGl0ZW1DYXRlZ29yeSA9ICcnO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGlmKHVvbSA9PT0gJ3VzJyl7XG4gICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VvbS1vei0nK3JvdykuY2hlY2tlZCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnRlciA9IG91bmNlQ29udmVydGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1b20tb3otJytyb3cpLmNoZWNrZWQgPT09IHRydWUpe1xuICAgICAgICAgICAgICAgICAgICBjb252ZXJ0ZXIgPSBncmFtQ29udmVydGVyO1xuICAgICAgICAgICAgICAgICAgICB1b21UZXh0ID0gJ0tHJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRvdGFsUGFja1dlaWdodCA9IHRvdGFsUGFja1dlaWdodCArICgrcGFja2VkQW1vdW50ICogICgrcm93V2VpZ2h0L2NvbnZlcnRlcikpO1xuXG4gICAgICAgICAgICBpZihpdGVtQ2F0ZWdvcnkgIT09ICdjb25zdW1hYmxlcycpe1xuICAgICAgICAgICAgICAgIGJhc2VXZWlnaHQgPSBiYXNlV2VpZ2h0ICsgKCtwYWNrZWRBbW91bnQgKiAoK3Jvd1dlaWdodC9jb252ZXJ0ZXIpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICBpZigrYmFzZVdlaWdodCA+ICttYXhQYWNrV2VpZ2h0KXtcbiAgICAgICAgICAgIGxldCBkaXZFbGVtZW50ID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWlnaHRXYXJuaW5nLWRpdicpO1xuICAgICAgICAgICAgZGl2RWxlbWVudC5pbm5lclRleHQgPSAnVGhlIGJhc2Ugd2VpZ2h0ICgnK2Jhc2VXZWlnaHQudG9GaXhlZCgyKSArJyAnKyB1b21UZXh0KycpIG9mIHRoZSBpdGVtcyBvbiB0aGlzIGxpc3QgaGF2ZSBleGNlZWRlZCB0aGUgd2VpZ2h0IGZvciB0aGUgdHlwZS9zdHlsZSBvZiBoaWtlIHNlbGVjdGVkIGZvciB0aGlzIGxpc3QuJ1xuICAgICAgICAgICAgZGl2RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VpZ2h0V2FybmluZy1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXNlV2VpZ2h0JykuIHZhbHVlID0gYmFzZVdlaWdodC50b0ZpeGVkKDIpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQYWNrV2VpZ2h0JykudmFsdWUgPSB0b3RhbFBhY2tXZWlnaHQudG9GaXhlZCgyKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gIGNyZWF0ZUxpc3RJdGVtSW5wdXQodHlwZSxuYW1lQmFzZSxyb3csY29sdW1uTmFtZSl7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBlbGVtZW50LnR5cGUgPSB0eXBlO1xuICAgICAgICBlbGVtZW50Lm5hbWUgPSBuYW1lQmFzZStcIltdXCI7XG4gICAgICAgIGVsZW1lbnQuaWQgPSBuYW1lQmFzZSsnLScrcm93O1xuICAgICAgICBlbGVtZW50LnZhbHVlID0gJyc7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNvbHVtbi1uYW1lJyxjb2x1bW5OYW1lKTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHVwZGF0ZUxpc3RJdGVtKGVsZW1lbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcblxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRDYXRlZ3JveVNlbGVjdChyb3cpe1xuXG4gICAgICAgIGxldCBzZWxlY3QgPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgc2VsZWN0LmlkID0gJ0l0ZW1DYXRlZ29yeS0nK3JvdztcbiAgICAgICAgc2VsZWN0Lm5hbWUgPSAnaXRlbUNhdGVnb3J5LScrcm93O1xuICAgICAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCdkYXRhLWNvbHVtbi1uYW1lJywnaXRlbV9jYXRlZ29yeScpO1xuICAgICAgICBzZWxlY3QuY2xhc3NOYW1lID0gJ2Zvcm0tY29udHJvbCc7XG5cbiAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9ICcnO1xuICAgICAgICBvcHRpb24udGV4dCA9J0Nob29zZSc7XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICBsZXQgb3B0aW9uTGlzdDtcblxuICAgICAgICAgICAgb3B0aW9uTGlzdCA9IGFzeW5jIGZ1bmN0aW9uICgpe1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvbGlzdC1pdGVtLWNhdGVnb3JpZXMnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlIGVycm9yXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBUbyB1c2UgdGhlIGZ1bmN0aW9uIGFuZCBoYW5kbGUgdGhlIHJlc3BvbnNlIGRhdGFcbiAgICAgICAgICAgIG9wdGlvbkxpc3QoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gRG8gc29tZXRoaW5nIHdpdGggdGhlIHJlc3BvbnNlIGRhdGFcbiAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoIDtpKyspe1xuICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gZGF0YVtpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPWRhdGFbaV0uY2F0ZWdvcnk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB1cGRhdGVMaXN0SXRlbShzZWxlY3QpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc2VsZWN0O1xuXG4gICAgfVxuICAgIGZ1bmN0aW9uIG1ldHJpY1JhZGlvVG9Vcygpe1xuICAgICAgICBsZXQgaW5wdXRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZXRyaWMtcmFkaW8nKTtcbiAgICAgICAgaW5wdXRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dEVsZW1lbnQpIHtcblxuICAgICAgICAgICAgbGV0IGlkQXJyID0gaW5wdXRFbGVtZW50LmlkLnNwbGl0KCctJyk7XG4gICAgICAgICAgICBsZXQgdW9tID0gaWRBcnJbMV07XG4gICAgICAgICAgICBsZXQgcm93ID0gaWRBcnJbaWRBcnIubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBsZXQgZWxlbWVudFR5cGUgPSBpbnB1dEVsZW1lbnQudHlwZTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50VGFnID0gaW5wdXRFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgbGV0IG5ld0VsZW1lbnQ7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50VHlwZSA9PT0gJ3JhZGlvJyAmJiB1b20gPT09ICdncmFtJykge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVSYWRpbygnaW5fb3VuY2VzJywgJ09aJywgJ296Jywgcm93LCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFR5cGUgPT09ICdyYWRpbycgJiYgdW9tID09PSAna2cnKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZVJhZGlvKCdpbl9sYnMnLCAnTEJTJywgJ2xicycsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUYWcgPT09ICdsYWJlbCcgJiYgdW9tID09PSAnZ3JhbScpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlTGFiZWwoJ09aJywgJ3VvbS1vei0nICsgcm93LCAnb3onLCByb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VGFnID09PSAnbGFiZWwnICYmIHVvbSA9PT0gJ2tnJykge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVMYWJlbCgnTEJTJywgJ3VvbS1sYnMtJyArIHJvdywgJ2xicycsIHJvdyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuZXdFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKG5ld0VsZW1lbnQsIGlucHV0RWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuICAgIGZ1bmN0aW9uIHVzUmFkaW9Ub01ldHJpYygpe1xuICAgICAgICBsZXQgaW5wdXRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51cy1yYWRpbycpO1xuICAgICAgICBpbnB1dEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGlucHV0RWxlbWVudCkge1xuXG4gICAgICAgICAgICBsZXQgaWRBcnIgPSBpbnB1dEVsZW1lbnQuaWQuc3BsaXQoJy0nKTtcbiAgICAgICAgICAgIGxldCB1b20gPSBpZEFyclsxXTtcbiAgICAgICAgICAgIGxldCByb3cgPSBpZEFycltpZEFyci5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50VHlwZSA9IGlucHV0RWxlbWVudC50eXBlO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRUYWcgPSBpbnB1dEVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgbGV0IG5ld0VsZW1lbnQ7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50VHlwZSA9PT0gJ3JhZGlvJyAmJiB1b20gPT09ICdveicpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlUmFkaW8oJ2luX2dyYW1zJywgJ0dyYW1zJywgJ2dyYW0nLCByb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VHlwZSA9PT0gJ3JhZGlvJyAmJiB1b20gPT09ICdsYnMnKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZVJhZGlvKCdpbl9raWxvcycsICdLRycsICdrZycsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUYWcgPT09ICdsYWJlbCcgJiYgdW9tID09PSAnb3onKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZUxhYmVsKCdHcmFtcycsICd1b20tZ3JhbS0nICsgcm93LCAnZ3JhbScsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUYWcgPT09ICdsYWJlbCcgJiYgdW9tID09PSAnbGJzJykge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVMYWJlbCgnS0cnLCAndW9tLWtnLScgKyByb3csICdrZycsIHJvdyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuZXdFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKG5ld0VsZW1lbnQsIGlucHV0RWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVSYWRpbyhkYXRhQ29sdW1uTmFtZSwgbGFiZWwsIHVvbSwgcm93KSB7XG5cbiAgICAgICAgbGV0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICByYWRpby5jbGFzc05hbWUgPSAnZm9ybS1jaGVjay1pbnB1dCcgKyAodW9tID09PSAnZ3JhbScgfHwgdW9tID09PSAna2cnID8gJyBtZXRyaWMtcmFkaW8nIDogJyB1cy1yYWRpbycpO1xuICAgICAgICByYWRpby50eXBlID0gXCJyYWRpb1wiO1xuICAgICAgICByYWRpby5uYW1lID0gXCJ1b20tXCIgKyByb3cgKyBcIltdXCI7XG4gICAgICAgIHJhZGlvLmlkID0gJ3VvbS0nICsgdW9tICsgJy0nICsgcm93O1xuICAgICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sdW1uLW5hbWUnLCBkYXRhQ29sdW1uTmFtZSk7XG5cbiAgICAgICAgaWYodW9tID09PSAnZ3JhbScgfHwgdW9tID09PSAnb3onKXtcbiAgICAgICAgICAgIHJhZGlvLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29udmVydE1lYXN1cmVtZW50KHJvdyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmFkaW87XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxhYmVsKGlubmVySHRtbCwgaHRtbEZvciwgdW9tLCByb3cpIHtcblxuICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxhYmVsLmNsYXNzTmFtZSA9ICdmb3JtLWNoZWNrLWxhYmVsJyArICh1b20gPT09ICdncmFtJyB8fCB1b20gPT09ICdrZycgPyAnIG1ldHJpYy1yYWRpbycgOiAnIHVzLXJhZGlvJyk7XG4gICAgICAgIGxhYmVsLmh0bWxGb3IgPSBodG1sRm9yO1xuICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSBpbm5lckh0bWw7XG4gICAgICAgIGxhYmVsLmlkID0gJ3VvbS0nICsgdW9tICsgJy1sYWJlbC0nICsgcm93O1xuICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgfVxuXG4gICAgdGhpcy53aW5kb3cudXBkYXRlTGlzdCA9IGZ1bmN0aW9uIHVwZGF0ZUxpc3QoZWxlbWVudCwgbGlzdElkKXtcblxuICAgICAgICBsZXQgY29sdW1uTmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbHVtbi1uYW1lJyk7XG4gICAgICAgIGxldCB2YWx1ZSA9IGVsZW1lbnQudmFsdWU7XG4gICAgICAgIGxldCB1cmwgPSAnL2dlYXItbGlzdC8nK2xpc3RJZDtcblxuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICBkYXRhW2NvbHVtbk5hbWVdID0gdmFsdWU7XG5cbiAgICAgICAgYXhpb3MucG9zdCh1cmwsIGRhdGEsIGxpc3RJZClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcblxuICAgICAgICAgICAgICAgIC8vIGFsZXJ0KHJlcy5kYXRhLm1zZyk7XG5cbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcblxuICAgICAgICAgICAgYWxlcnQoJ0ZhaWxlZCB0byB1cGRhdGUgbGlzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nKTtcblxuICAgICAgICB9KTtcbiAgICAgICAgaWYoY29sdW1uTmFtZSA9PT0gJ3NvcnQnIHx8IGNvbHVtbk5hbWUgPT09ICdsaXN0X2NsYXNzJyl7XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICBjb25zdCBoZWFkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tY29sbGFwc2libGUtaGVhZGVyJyk7XG5cbiAgICBoZWFkZXJzLmZvckVhY2goaGVhZGVyID0+IHtcbiAgICAgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGhlYWRlci5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICBjb25zdCBhcnJvdyA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKCcuZm9ybS1hcnJvdycpO1xuICAgICAgICAgICAgaWYgKGNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IG51bGw7XG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5wYWRkaW5nID0gJzAgMTBweCc7XG4gICAgICAgICAgICAgICAgYXJyb3cuaW5uZXJIVE1MID0gJyYjOTY2MCc7XG5cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLnBhZGRpbmcgPSAnMTBweCc7XG4gICAgICAgICAgICAgICAgYXJyb3cuaW5uZXJIVE1MID0gJyYjOTY1MCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgbGV0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNtYXN0ZXItaXRlbS10YWJsZSBpbnB1dCcpO1xuICAgIGxldCBzZWxlY3RJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKTtcblxuICAgIGlucHV0cy5mb3JFYWNoKGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICAgIGlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9KTtcbiAgICAvLyBzZWxlY3RJbnB1dHMuZm9yRWFjaChmdW5jdGlvbihzZWxlY3RJbnB1dCkge1xuICAgIC8vICAgICBzZWxlY3RJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgLy8gfSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaEdlYXJCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHNlYXJjaE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RTZWFyY2hNb2RhbCcpO1xuICAgICAgICBzZWFyY2hNb2RhbC5zaG93KCk7XG4gICAgfSk7XG5cblxuICAgIGNvbnN0IGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZWFyQ2hhcnQnKTtcbiAgICBsZXQgY2hhcnREYXRhID0gSlNPTi5wYXJzZSggZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXJ0RGF0YScpLnZhbHVlKTtcblxuICAgIGxldCBsaXN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0TmFtZScpLnZhbHVlXG4gICAgY29uc3QgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbiAgICAgICAgdHlwZTogJ2RvdWdobnV0JywgLy8gQ2hhcnQgdHlwZVxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBsYWJlbHM6IGNoYXJ0RGF0YS5sYWJlbHMsXG4gICAgICAgICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgICAgICAgICAvLyBsYWJlbDogbGlzdE5hbWUgKyAnQnJlYWsgRG93bicsXG4gICAgICAgICAgICAgICAgZGF0YTogY2hhcnREYXRhLmRhdGEsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjaGFydERhdGEuY29sb3JzLFxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICAgICAgICAgIGhvdmVyT2Zmc2V0OiA0XG4gICAgICAgICAgICB9XVxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBjdXRvdXQ6IDQ1LC8vIEFkanVzdCB0aGUgY3V0b3V0IHBlcmNlbnRhZ2UgaGVyZVxuICAgICAgICAgICAgcmFkaXVzOiAxNTAsXG4gICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgICAgICAgICBkYXRhbGFiZWxzOiBmYWxzZSAvLyBSZW1vdmluZyB0aGlzIGxpbmUgc2hvd3MgdGhlIGRhdGFsYWJlbHMgYWdhaW5cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFuaW1hdGlvbjp7XG4gICAgICAgICAgICAgICAgYW5pbWF0ZVJvdGF0ZTp0cnVlLFxuICAgICAgICAgICAgICAgIGFuaW1hdGVTY2FsZTp0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgbGV0IGJhc2VXZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFzZVdlaWdodCcpLnZhbHVlO1xuICAgIGxldCB0b3RhbFBhY2tXZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQYWNrV2VpZ2h0JykudmFsdWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsQmFzZVdlaWdodCcpLnRleHRDb250ZW50ID0gYmFzZVdlaWdodDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxUb3RhbFdlaWdodCcpLnRleHRDb250ZW50ID0gdG90YWxQYWNrV2VpZ2h0O1xuXG5cbn0pO1xuXG5cbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG53aW5kb3cuYXhpb3MgPSBheGlvcztcblxud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJNb2RhbCIsIkNoYXJ0IiwiYm9vdHN0cmFwIiwicmVxdWlyZSIsImdyYW1Db252ZXJ0ZXIiLCJvdW5jZUNvbnZlcnRlciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaG93UGFzc3dvcmQiLCJpZCIsInBhc3N3b3JkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZExpc3RJdGVtIiwibnVtYmVyT2ZJdGVtc1RvQWRkIiwibGluZXNUb0FkZCIsIl9sb29wIiwibGlzdFVPTSIsImZpbmFsSUVsZW1lbnQiLCJpdGVtVGFibGUiLCJ1c2VySWQiLCJsaXN0SWQiLCJmaW5hbEkiLCJyb3ciLCJjcmVhdGVFbGVtZW50IiwiY2VsbDAiLCJzY29wZSIsImlubmVySFRNTCIsImNlbGwxIiwiY291bnRlciIsInNldEF0dHJpYnV0ZSIsIml0ZW1OYW1lIiwiY3JlYXRlTGlzdEl0ZW1JbnB1dCIsInBsYWNlaG9sZGVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2VsbDYiLCJkZWxldGVCdG4iLCJjbGFzc05hbWUiLCJkYXRhIiwidXJsIiwidXBkYXRlSXRlbSIsIl9yZWYiLCJfY2FsbGVlIiwicmVzcG9uc2UiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiYXhpb3MiLCJwb3N0IiwidDAiLCJjb25zb2xlIiwibG9nIiwibmV3SWQiLCJjZWxsMiIsIml0ZW1XZWlnaHQiLCJjZWxsMyIsInJhZGlvMSIsInJhZGlvMiIsInJhZGlvTGFiZWwxIiwicmFkaW9MYWJlbDIiLCJjcmVhdGVSYWRpbyIsImNyZWF0ZUxhYmVsIiwiY2VsbDQiLCJwYWNrZWRBbW91bnQiLCJjZWxsNSIsInRvdGFsTGluZVdlaWdodCIsImFwcGVuZENoaWxkIiwic2VsZWN0Q2VsbCIsImNhdGVnb3J5U2VsZWN0IiwiZ2V0Q2F0ZWdyb3lTZWxlY3QiLCJhcHBlbmQiLCJhZGRFdmVudExpc3RlbmVyV2VpZ2h0Q2FsYyIsInVwZGF0ZVVPTSIsInVzUmFkaW9Ub01ldHJpYyIsIm1ldHJpY1JhZGlvVG9VcyIsIm5lZWRlZEZvcldlaWdodHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibmVlZGVkRm9yV2VpZ2h0IiwiZ2V0TGluZVRvdGFsV2VpZ2h0IiwiY29udmVydCIsInVuZGVmaW5lZCIsIndlaWdodCIsInVvbSIsImxpbmVUb3RhbFdlaWdodEVsZW1lbnQiLCJsaW5lVG90YWwiLCJ0b0ZpeGVkIiwicmVwbGFjZSIsInVwZGF0ZUxpc3RJdGVtIiwiY29udmVydE1lYXN1cmVtZW50IiwidG90YWxXZWlnaHQiLCJ0b3RhbExpbmVXZWlnaHRWYWx1ZSIsIndlaWdodFZhbHVlIiwic21hbGwiLCJsYXJnZSIsImVsZW1lbnQiLCJjaGVja2VkIiwiZ2V0Qm9vbGVhbkRhdGEiLCJjb2x1bW5OYW1lIiwiZ2V0QXR0cmlidXRlIiwiaWRBcnIiLCJzcGxpdCIsImFyckxlbmd0aCIsIml0ZW1JZCIsIml0ZW1JZFZhbHVlIiwic3Vic3RyaW5nIiwicmVzIiwiZXJyIiwiYWxlcnQiLCJlcnJvciIsInVwZGF0ZVRvdGFsTGlzdFdlaWdodHMiLCJ3ZWlnaHRzRm9yUFciLCJiYXNlV2VpZ2h0IiwidG90YWxQYWNrV2VpZ2h0IiwibWF4UGFja1dlaWdodCIsInVvbVRleHQiLCJ3ZWlnaHRGb3JQVyIsImNvbnZlcnRlciIsInJvd1dlaWdodCIsIml0ZW1DYXRlZ29yeUVsZW1lbnQiLCJpdGVtQ2F0ZWdvcnkiLCJkaXZFbGVtZW50IiwiaW5uZXJUZXh0Iiwic3R5bGUiLCJkaXNwbGF5IiwibmFtZUJhc2UiLCJzZWxlY3QiLCJvcHRpb24iLCJ0ZXh0Iiwib3B0aW9uTGlzdCIsIl9yZWYyIiwiX2NhbGxlZTIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJnZXQiLCJjYXRlZ29yeSIsImlucHV0RWxlbWVudHMiLCJpbnB1dEVsZW1lbnQiLCJlbGVtZW50VHlwZSIsImVsZW1lbnRUYWciLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJuZXdFbGVtZW50IiwicGFyZW50RWxlbWVudCIsInJlcGxhY2VDaGlsZCIsImRhdGFDb2x1bW5OYW1lIiwibGFiZWwiLCJyYWRpbyIsImlubmVySHRtbCIsImh0bWxGb3IiLCJ1cGRhdGVMaXN0IiwibG9jYXRpb24iLCJyZWxvYWQiLCJoZWFkZXJzIiwiaGVhZGVyIiwiY29udGVudCIsIm5leHRFbGVtZW50U2libGluZyIsImFycm93IiwicXVlcnlTZWxlY3RvciIsImNvbnRhaW5zIiwicmVtb3ZlIiwibWF4SGVpZ2h0IiwicGFkZGluZyIsInNjcm9sbEhlaWdodCIsImlucHV0cyIsInNlbGVjdElucHV0cyIsImlucHV0IiwiZGlzYWJsZWQiLCJzZWFyY2hNb2RhbCIsInNob3ciLCJjdHgiLCJjaGFydERhdGEiLCJKU09OIiwicGFyc2UiLCJsaXN0TmFtZSIsIm15Q2hhcnQiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImJhY2tncm91bmRDb2xvciIsImNvbG9ycyIsImJvcmRlcldpZHRoIiwiaG92ZXJPZmZzZXQiLCJvcHRpb25zIiwiY3V0b3V0IiwicmFkaXVzIiwibGVnZW5kIiwicGx1Z2lucyIsImRhdGFsYWJlbHMiLCJhbmltYXRpb24iLCJhbmltYXRlUm90YXRlIiwiYW5pbWF0ZVNjYWxlIiwidGV4dENvbnRlbnQiLCJkZWZhdWx0cyIsImNvbW1vbiJdLCJzb3VyY2VSb290IjoiIn0=