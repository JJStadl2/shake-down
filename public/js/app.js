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
      var lineUomCell = document.createElement("td");
      cell3.classList.add('uom-td');
      lineUomCell.classList.add('uom-td');
      var radio1;
      var radio2;
      var radioLabel1;
      var radioLabel2;
      var radioLabel3;
      if (listUOM === 'us') {
        radio1 = createRadio('in_ounces', '', 'oz', finalI);
        radioLabel1 = createLabel('OZ', 'uom-oz-' + finalI, 'oz', finalI);
        radio2 = createRadio('in_lbs', '', 'lbs', finalI);
        radioLabel2 = createLabel('LBS', 'uom-lbs-' + finalI, 'lbs', finalI);
        radioLabel3 = createLabel('OZ', 'uom-oz-' + finalI, 'oz', finalI, true);
      } else {
        radio1 = createRadio('in_grams', '', 'gram', finalI);
        radioLabel1 = createLabel('Grams', 'uom-gram-' + finalI, 'gram', finalI);
        radio2 = createRadio('in_kilos', '', 'kg', finalI);
        radioLabel2 = createLabel('KG', 'uom-kg-' + finalI, 'kg', finalI);
        radioLabel3 = createLabel('Grams', 'uom-gram-' + finalI, 'gram', finalI, true);
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
      lineUomCell.appendChild(radioLabel3);
      cell6.appendChild(deleteBtn);

      // Append cells to the row.
      row.appendChild(cell0);
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
    var label = document.getElementById('line-uom-label-' + row);
    var labelHTML;
    if (uom === 'us') {
      small = document.getElementById('uom-oz-' + row);
      large = document.getElementById('uom-lbs-' + row);
      if (small.checked === true) {
        weightValue = +weightValue * 16;
        element = small;
        labelHTML = 'OZ';
      } else {
        weightValue = +weightValue / 16;
        element = large;
        labelHTML = 'LBS';
      }
    } else {
      small = document.getElementById('uom-gram-' + row);
      large = document.getElementById('uom-kg-' + row);
      if (small.checked === true) {
        weightValue = +weightValue * 1000;
        element = small;
        labelHTML = 'Grams';
      } else {
        weightValue = +weightValue / 1000;
        element = large;
        var _labelHTML = 'KG';
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
    var lineLabel = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var label = document.createElement("label");
    label.className = 'form-check-label' + (uom === 'gram' || uom === 'kg' ? ' metric-radio' : ' us-radio');
    label.htmlFor = htmlFor;
    label.innerHTML = innerHtml;
    if (!lineLabel) {
      label.id = 'uom-' + uom + '-label-' + row;
    } else {
      label.id = 'line-uom-label-' + row;
    }
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
  var headers = document.querySelectorAll('.item-collapsible-header');
  headers.forEach(function (header) {
    header.addEventListener('click', function () {
      var content = header.nextElementSibling;
      var arrow = header.querySelector('.item-arrow');
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

  //listChartBtn
  document.getElementById('listChartBtn').addEventListener('click', function () {
    var listId = document.getElementById('listId').value;
    var url = '/gear-list-analytics/' + listId;
    axios.get(url).then(function (res) {
      var chartStatus = chart_js_auto__WEBPACK_IMPORTED_MODULE_1__["default"].getChart("gearChart");
      if (chartStatus != undefined) {
        console.log('chart status');
        chartStatus.destroy();
      }
      var ctx = document.getElementById('gearChart');
      var chartData = JSON.parse(res.data.chartData);
      var myChart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, {
        type: 'doughnut',
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
      var baseWeight = document.getElementById('baseWeight').value;
      var totalPackWeight = document.getElementById('totalPackWeight').value;
      document.getElementById('modalBaseWeight').textContent = baseWeight;
      document.getElementById('modalTotalWeight').textContent = totalPackWeight;
    })["catch"](function (err) {
      alert(err);
    });
  });
  // const ctx = document.getElementById('gearChart');
  // let chartData = JSON.parse( document.getElementById('chartData').value);

  // let listName = document.getElementById('listName').value
  // const myChart = new Chart(ctx, {
  //     type: 'doughnut', // Chart type
  //     data: {
  //         labels: chartData.labels,
  //         datasets: [{
  //             // label: listName + 'Break Down',
  //             data: chartData.weights,
  //             backgroundColor: chartData.colors,
  //             borderWidth: 1,
  //             hoverOffset: 4
  //         }]
  //     },
  //     options: {
  //         cutout: 45,// Adjust the cutout percentage here
  //         radius: 150,
  //         legend: {
  //             display: false
  //         },
  //         plugins: {
  //             datalabels: false // Removing this line shows the datalabels again
  //           },
  //         animation:{
  //             animateRotate:true,
  //             animateScale:true
  //         }
  //     }
  // });

  // let baseWeight = document.getElementById('baseWeight').value;
  // let totalPackWeight = document.getElementById('totalPackWeight').value;
  // document.getElementById('modalBaseWeight').textContent = baseWeight;
  // document.getElementById('modalTotalWeight').textContent = totalPackWeight;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBR0E7RUFDQTtFQUNBO0VBQ0E7QUFHSixDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQ2hyQndCO0FBQzFCeEcsTUFBTSxDQUFDeUMsS0FBSyxHQUFHQSw2Q0FBSztBQUVwQnpDLE1BQU0sQ0FBQ3lDLEtBQUssQ0FBQ3FKLFFBQVEsQ0FBQ3hDLE9BQU8sQ0FBQ3lDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLGdCQUFnQjs7Ozs7Ozs7Ozs7QUNIM0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3Nhc3MvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICcuL2Jvb3RzdHJhcCcgO1xuaW1wb3J0ICB7TW9kYWx9ICBmcm9tICdib290c3RyYXAnO1xuLy8gaW1wb3J0ICAnYm9vdHN0cmFwJztcbmltcG9ydCAnQHBvcHBlcmpzL2NvcmUnO1xuaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzL2F1dG8nXG5jb25zdCBib290c3RyYXAgPSByZXF1aXJlKCcuL2Jvb3RzdHJhcCcpXG5jb25zdCBncmFtQ29udmVydGVyID0gMTAwMDtcbmNvbnN0IG91bmNlQ29udmVydGVyID0gMTY7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oZSkge1xuXG4gICAgdGhpcy53aW5kb3cuc2hvd1Bhc3N3b3JkID0gZnVuY3Rpb24gc2hvd1Bhc3N3b3JkKGlkKXtcbiAgICAgICAgICAgIGxldCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgaWYgKHBhc3N3b3JkLnR5cGUgPT09IFwicGFzc3dvcmRcIikge1xuICAgICAgICAgICAgICAgIHBhc3N3b3JkLnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhc3N3b3JkLnR5cGUgPSBcInBhc3N3b3JkXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhpcy53aW5kb3cuYWRkTGlzdEl0ZW0gPSBmdW5jdGlvbiBhZGRMaXN0SXRlbSgpe1xuXG4gICAgICAgIGxldCBudW1iZXJPZkl0ZW1zVG9BZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGluZXNUb0FkZCcpO1xuICAgICAgICBsZXQgbGluZXNUb0FkZCA9IDE7XG4gICAgICAgIGlmKCtudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWUgPCAxKXtcbiAgICAgICAgICAgIG51bWJlck9mSXRlbXNUb0FkZC52YWx1ZSA9IGxpbmVzVG9BZGQ7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbGluZXNUb0FkZCA9ICtudW1iZXJPZkl0ZW1zVG9BZGQudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGluZXNUb0FkZDsgaSsrKXtcblxuXG4gICAgICAgICAgICBsZXQgbGlzdFVPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1b20nKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBmaW5hbElFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmFsLWknKTtcbiAgICAgICAgICAgIGxldCBpdGVtVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS10YWJsZS1ib2R5Jyk7XG4gICAgICAgICAgICBsZXQgdXNlcklkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJJZCcpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGxpc3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0SWQnKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBmaW5hbEkgPSBmaW5hbElFbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgZmluYWxJRWxlbWVudC52YWx1ZSA9ICtmaW5hbEkgKyAxO1xuXG4gICAgICAgICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgY2VsbHMgYW5kIGlucHV0IGVsZW1lbnRzLlxuICAgICAgICAgICAgbGV0IGNlbGwwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgICAgICAgICAgY2VsbDAuc2NvcGUgPSAncm93JztcbiAgICAgICAgICAgIGNlbGwwLmlubmVySFRNTCA9IGZpbmFsSTtcblxuICAgICAgICAgICAgbGV0IGNlbGwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuXG4gICAgICAgICAgICBsZXQgY291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGNvdW50ZXIudHlwZSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICBjb3VudGVyLm5hbWUgPSBcImlkW11cIjtcbiAgICAgICAgICAgIGNvdW50ZXIuaWQgPSAnaWQtJytmaW5hbEk7XG4gICAgICAgICAgICBjb3VudGVyLnZhbHVlID0gJ25ldy0nK2ZpbmFsSTtcbiAgICAgICAgICAgIGNvdW50ZXIuc2V0QXR0cmlidXRlKCdkYXRhLWNvbHVtbi1uYW1lJywnaWQnKTtcblxuICAgICAgICAgICAgbGV0IGl0ZW1OYW1lID0gIGNyZWF0ZUxpc3RJdGVtSW5wdXQoJ3RleHQnLCdpdGVtTmFtZScsZmluYWxJLCdpdGVtX25hbWUnKTtcbiAgICAgICAgICAgIGl0ZW1OYW1lLnBsYWNlaG9sZGVyID0gJ0l0ZW0gTmFtZSc7XG4gICAgICAgICAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKTtcblxuICAgICAgICAgICAgbGV0IGNlbGw2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgICAgIGNlbGw2LmlkID0gJ2J0bi10ZC0nK2ZpbmFsSTtcbiAgICAgICAgICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICBkZWxldGVCdG4uaWQgPSAnZGVsZXRlQnRuLScrZmluYWxJO1xuICAgICAgICAgICAgZGVsZXRlQnRuLmNsYXNzTmFtZSA9ICdidG4gYnRuLXByaW1hcnkgYnRuLXNtICBweS0yJztcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5pbm5lckhUTUwgPSAneCc7XG5cbiAgICAgICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgICAgICBsZXQgdXJsID0gJy9saXN0LWl0ZW0nO1xuICAgICAgICAgICAgZGF0YVsnbGlzdF9pZCddID0gbGlzdElkO1xuICAgICAgICAgICAgZGF0YVsndXNlcl9pZCddID0gdXNlcklkO1xuICAgICAgICAgICAgZGF0YVsnaXRlbV9uYW1lJ10gPSAnJztcbiAgICAgICAgICAgIGxldCB1cGRhdGVJdGVtO1xuICAgICAgICAgICAgdXBkYXRlSXRlbSA9IGFzeW5jIGZ1bmN0aW9uICgpe1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCh1cmwsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIFRvIHVzZSB0aGUgZnVuY3Rpb24gYW5kIGhhbmRsZSB0aGUgcmVzcG9uc2UgZGF0YVxuICAgICAgICAgICAgdXBkYXRlSXRlbSgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCB0aGUgcmVzcG9uc2UgZGF0YVxuICAgICAgICAgICAgICAgIGNvdW50ZXIudmFsdWUgPSBkYXRhLm5ld0lkO1xuICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnL2Rlc3Ryb3ktbGlzdC1pdGVtLycrZGF0YS5uZXdJZCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGV0IGNlbGwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgbGV0IGl0ZW1XZWlnaHQgPSBjcmVhdGVMaXN0SXRlbUlucHV0KCdudW1iZXInLCdpdGVtV2VpZ2h0JyxmaW5hbEksJ2l0ZW1fd2VpZ2h0Jyk7XG4gICAgICAgICAgICBpdGVtV2VpZ2h0LnZhbHVlID0gMDtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQuY2xhc3NMaXN0LmFkZCgnZm9yLXdlaWdodCcpO1xuICAgICAgICAgICAgaXRlbVdlaWdodC5jbGFzc0xpc3QuYWRkKCdudW1iZXItaW5wdXQnKTtcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJyk7XG4gICAgICAgICAgICBjZWxsMi5jbGFzc0xpc3QuYWRkKCdudW1iZXItY29sJyk7XG5cbiAgICAgICAgICAgIGxldCBjZWxsMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGxldCBsaW5lVW9tQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGNlbGwzLmNsYXNzTGlzdC5hZGQoJ3VvbS10ZCcpO1xuICAgICAgICAgICAgbGluZVVvbUNlbGwuY2xhc3NMaXN0LmFkZCgndW9tLXRkJyk7XG4gICAgICAgICAgICBsZXQgcmFkaW8xO1xuICAgICAgICAgICAgbGV0IHJhZGlvMjtcbiAgICAgICAgICAgIGxldCByYWRpb0xhYmVsMTtcbiAgICAgICAgICAgIGxldCByYWRpb0xhYmVsMjtcbiAgICAgICAgICAgIGxldCByYWRpb0xhYmVsMztcblxuICAgICAgICAgICAgaWYobGlzdFVPTSA9PT0gJ3VzJyl7XG5cbiAgICAgICAgICAgICAgICByYWRpbzEgPSBjcmVhdGVSYWRpbygnaW5fb3VuY2VzJywgJycsICdveicsIGZpbmFsSSk7XG4gICAgICAgICAgICAgICAgcmFkaW9MYWJlbDEgPSBjcmVhdGVMYWJlbCgnT1onLCAgJ3VvbS1vei0nK2ZpbmFsSSwgJ296JywgZmluYWxJKTtcbiAgICAgICAgICAgICAgICByYWRpbzIgPSBjcmVhdGVSYWRpbygnaW5fbGJzJywgJycsICdsYnMnLCBmaW5hbEkpO1xuICAgICAgICAgICAgICAgIHJhZGlvTGFiZWwyID0gY3JlYXRlTGFiZWwoJ0xCUycsICAndW9tLWxicy0nK2ZpbmFsSSwgJ2xicycsIGZpbmFsSSk7XG4gICAgICAgICAgICAgICAgcmFkaW9MYWJlbDMgPSBjcmVhdGVMYWJlbCgnT1onLCAgJ3VvbS1vei0nK2ZpbmFsSSwgJ296JywgZmluYWxJLHRydWUpO1xuICAgICAgICAgICAgfWVsc2V7XG5cbiAgICAgICAgICAgICAgICByYWRpbzEgPSBjcmVhdGVSYWRpbygnaW5fZ3JhbXMnLCAnJywgJ2dyYW0nLCBmaW5hbEkpO1xuICAgICAgICAgICAgICAgIHJhZGlvTGFiZWwxID0gIGNyZWF0ZUxhYmVsKCdHcmFtcycsICAndW9tLWdyYW0tJytmaW5hbEksICdncmFtJywgZmluYWxJKTtcbiAgICAgICAgICAgICAgICByYWRpbzIgPSAgY3JlYXRlUmFkaW8oJ2luX2tpbG9zJywgJycsICdrZycsIGZpbmFsSSk7XG4gICAgICAgICAgICAgICAgcmFkaW9MYWJlbDIgPSBjcmVhdGVMYWJlbCgnS0cnLCAgJ3VvbS1rZy0nK2ZpbmFsSSwgJ2tnJywgZmluYWxJKTtcbiAgICAgICAgICAgICAgICByYWRpb0xhYmVsMyA9IGNyZWF0ZUxhYmVsKCdHcmFtcycsICAndW9tLWdyYW0tJytmaW5hbEksICdncmFtJywgZmluYWxJLHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgY2VsbDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBjZWxsNC5jbGFzc0xpc3QuYWRkKCdudW1iZXItY29sJyk7XG4gICAgICAgICAgICBsZXQgcGFja2VkQW1vdW50ID0gY3JlYXRlTGlzdEl0ZW1JbnB1dCgnbnVtYmVyJywncGFja2VkQW1vdW50JyxmaW5hbEksJ2Ftb3VudCcpO1xuICAgICAgICAgICAgcGFja2VkQW1vdW50LnZhbHVlID0gMTtcblxuICAgICAgICAgICAgcGFja2VkQW1vdW50LmNsYXNzTGlzdC5hZGQoJ2Zvci13ZWlnaHQnKTtcbiAgICAgICAgICAgIHBhY2tlZEFtb3VudC5jbGFzc0xpc3QuYWRkKCdudW1iZXItaW5wdXQnKTtcbiAgICAgICAgICAgIHBhY2tlZEFtb3VudC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKTtcblxuICAgICAgICAgICAgbGV0IGNlbGw1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgY2VsbDUuY2xhc3NMaXN0LmFkZCgnbnVtYmVyLWNvbCcpO1xuICAgICAgICAgICAgbGV0IHRvdGFsTGluZVdlaWdodCA9IGNyZWF0ZUxpc3RJdGVtSW5wdXQoJ251bWJlcicsJ3RvdGFsTGluZVdlaWdodCcsZmluYWxJLCd0b3RhbF9saW5lX3dlaWdodCcpO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LnZhbHVlID0gMDtcbiAgICAgICAgICAgIHRvdGFsTGluZVdlaWdodC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sdW1uLW5hbWUnLCd0b3RhbF9saW5lX3dlaWdodCcpO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLHRydWUpO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LmNsYXNzTGlzdC5hZGQoJ251bWJlci1pbnB1dCcpO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpO1xuICAgICAgICAgICAgdG90YWxMaW5lV2VpZ2h0LmNsYXNzTGlzdC5hZGQoJ2Zvci10b3RhbC1saXN0LXdlaWdodCcpO1xuXG4gICAgICAgICAgICAvL2FwcGVuZCBpbnB1dHMgdG8gY2VsbHMuXG4gICAgICAgICAgICBjZWxsMS5hcHBlbmRDaGlsZChjb3VudGVyKTtcbiAgICAgICAgICAgIGNlbGwxLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIGNlbGwyLmFwcGVuZENoaWxkKGl0ZW1XZWlnaHQpO1xuXG4gICAgICAgICAgICBsZXQgc2VsZWN0Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGxldCBjYXRlZ29yeVNlbGVjdCA9IGdldENhdGVncm95U2VsZWN0KGZpbmFsSSk7XG4gICAgICAgICAgICBzZWxlY3RDZWxsLmFwcGVuZChjYXRlZ29yeVNlbGVjdCk7XG5cbiAgICAgICAgICAgIGNlbGwzLmFwcGVuZENoaWxkKHJhZGlvMSk7XG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChyYWRpb0xhYmVsMSk7XG4gICAgICAgICAgICBjZWxsMy5hcHBlbmRDaGlsZChyYWRpbzIpO1xuICAgICAgICAgICAgY2VsbDMuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbDIpO1xuXG4gICAgICAgICAgICBjZWxsNC5hcHBlbmRDaGlsZChwYWNrZWRBbW91bnQpO1xuICAgICAgICAgICAgY2VsbDUuYXBwZW5kQ2hpbGQodG90YWxMaW5lV2VpZ2h0KTtcbiAgICAgICAgICAgIGxpbmVVb21DZWxsLmFwcGVuZENoaWxkKHJhZGlvTGFiZWwzKTtcbiAgICAgICAgICAgIGNlbGw2LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cblxuICAgICAgICAgICAgLy8gQXBwZW5kIGNlbGxzIHRvIHRoZSByb3cuXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDApO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwxKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChzZWxlY3RDZWxsKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsMyk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDIpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGw0KTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsNSk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQobGluZVVvbUNlbGwpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGw2KTtcblxuXG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIHJvdyB0byB0aGUgdGFibGUuXG4gICAgICAgICAgICBpdGVtVGFibGUuYXBwZW5kQ2hpbGQocm93KTtcblxuICAgICAgICAgICAgLy9hZGQgZnVuY3Rpb25zIHRvIGNhbGN1bGF0ZSBhbmQgY29udmVydCB0b3RhbCB3ZWlnaHQuXG4gICAgICAgICAgICBhZGRFdmVudExpc3RlbmVyV2VpZ2h0Q2FsYyhmaW5hbEkpO1xuICAgICAgICB9XG4gICAgICAgIG51bWJlck9mSXRlbXNUb0FkZC52YWx1ZT0xO1xuXG4gICAgfVxuXG4gICAgdGhpcy53aW5kb3cudXBkYXRlVU9NID0gZnVuY3Rpb24gdXBkYXRlVU9NKHZhbHVlKSB7XG4gICAgICAgIGlmKHZhbHVlICE9PSAndXMnKXtcbiAgICAgICAgICAgdXNSYWRpb1RvTWV0cmljKCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbWV0cmljUmFkaW9Ub1VzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcldlaWdodENhbGMocm93KXtcbiAgICAgICAgbGV0IG5lZWRlZEZvcldlaWdodHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9yLXdlaWdodCcpO1xuICAgICAgICBuZWVkZWRGb3JXZWlnaHRzLmZvckVhY2goZnVuY3Rpb24gKG5lZWRlZEZvcldlaWdodCl7XG4gICAgICAgICAgICBuZWVkZWRGb3JXZWlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZ2V0TGluZVRvdGFsV2VpZ2h0KHJvdyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgIH1cblxuICAgICB0aGlzLndpbmRvdy5nZXRMaW5lVG90YWxXZWlnaHQgPSBmdW5jdGlvbiBnZXRMaW5lVG90YWxXZWlnaHQocm93LGNvbnZlcnQgPSBmYWxzZSl7XG5cbiAgICAgICAgbGV0IHdlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtV2VpZ2h0LScrcm93KS52YWx1ZTtcbiAgICAgICAgbGV0IHBhY2tlZEFtb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWNrZWRBbW91bnQtJytyb3cpLnZhbHVlO1xuICAgICAgICBsZXQgdW9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VvbScpO1xuICAgICAgICBsZXQgbGluZVRvdGFsV2VpZ2h0RWxlbWVudCA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxMaW5lV2VpZ2h0LScrcm93KTtcblxuICAgICAgICBsZXQgbGluZVRvdGFsID0gMDtcbiAgICAgICAgbGluZVRvdGFsID0gK3dlaWdodCAqICtwYWNrZWRBbW91bnQ7XG4gICAgICAgIGxpbmVUb3RhbCA9IGxpbmVUb3RhbC50b0ZpeGVkKDIpLnJlcGxhY2UoL1suLF0wMCQvLCBcIlwiKTtcbiAgICAgICAgbGluZVRvdGFsV2VpZ2h0RWxlbWVudC52YWx1ZSA9IGxpbmVUb3RhbDtcblxuICAgICAgICB1cGRhdGVMaXN0SXRlbShsaW5lVG90YWxXZWlnaHRFbGVtZW50KTtcblxuXG4gICAgfVxuICAgIHRoaXMud2luZG93LmNvbnZlcnRNZWFzdXJlbWVudCA9IGZ1bmN0aW9uIGNvbnZlcnRNZWFzdXJlbWVudChyb3csIGNvbnZlcnQgPSBmYWxzZSl7XG5cbiAgICAgICAgbGV0IHVvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1b20nKS52YWx1ZTtcbiAgICAgICAgbGV0IHdlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtV2VpZ2h0LScrcm93KTtcbiAgICAgICAgbGV0IHBhY2tlZEFtb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWNrZWRBbW91bnQtJytyb3cpLnZhbHVlO1xuICAgICAgICBsZXQgdG90YWxXZWlnaHQgPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsTGluZVdlaWdodC0nK3JvdylcbiAgICAgICAgbGV0IHRvdGFsTGluZVdlaWdodFZhbHVlID0gMDtcbiAgICAgICAgbGV0IHdlaWdodFZhbHVlID0gd2VpZ2h0LnZhbHVlO1xuICAgICAgICBsZXQgc21hbGw7XG4gICAgICAgIGxldCBsYXJnZTtcbiAgICAgICAgbGV0IGVsZW1lbnQ7XG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaW5lLXVvbS1sYWJlbC0nK3Jvdyk7XG4gICAgICAgIGxldCBsYWJlbEhUTUw7XG5cbiAgICAgICAgaWYodW9tID09PSAndXMnKXtcbiAgICAgICAgICAgIHNtYWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VvbS1vei0nK3Jvdyk7XG4gICAgICAgICAgICBsYXJnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1b20tbGJzLScrcm93KTtcbiAgICAgICAgICAgIGlmKHNtYWxsLmNoZWNrZWQgPT09IHRydWUpe1xuICAgICAgICAgICAgICAgIHdlaWdodFZhbHVlID0gK3dlaWdodFZhbHVlICogMTY7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IHNtYWxsO1xuICAgICAgICAgICAgICAgIGxhYmVsSFRNTCA9ICdPWic7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB3ZWlnaHRWYWx1ZSA9ICt3ZWlnaHRWYWx1ZSAvIDE2O1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBsYXJnZVxuICAgICAgICAgICAgICAgIGxhYmVsSFRNTCA9ICdMQlMnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc21hbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW9tLWdyYW0tJytyb3cpO1xuICAgICAgICAgICAgbGFyZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW9tLWtnLScrcm93KTtcblxuICAgICAgICAgICAgaWYoc21hbGwuY2hlY2tlZCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgd2VpZ2h0VmFsdWUgPSArd2VpZ2h0VmFsdWUgKiAxMDAwO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBzbWFsbDtcbiAgICAgICAgICAgICAgICBsYWJlbEhUTUwgPSAnR3JhbXMnO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgd2VpZ2h0VmFsdWUgPSArd2VpZ2h0VmFsdWUgLzEwMDA7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGxhcmdlXG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsSFRNTCA9ICdLRyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRvdGFsTGluZVdlaWdodFZhbHVlID0gK3dlaWdodFZhbHVlICogK3BhY2tlZEFtb3VudDtcbiAgICAgICAgd2VpZ2h0LnZhbHVlID0gd2VpZ2h0VmFsdWUudG9GaXhlZCgyKS5yZXBsYWNlKC9bLixdMDAkLywgXCJcIik7XG4gICAgICAgIHRvdGFsV2VpZ2h0LnZhbHVlID0gdG90YWxMaW5lV2VpZ2h0VmFsdWUudG9GaXhlZCgyKS5yZXBsYWNlKC9bLixdMDAkLywgXCJcIik7XG4gICAgICAgIGxhYmVsLmlubmVySFRNTCA9IGxhYmVsSFRNTDtcbiAgICAgICAgdXBkYXRlTGlzdEl0ZW0oZWxlbWVudCk7XG4gICAgICAgIHVwZGF0ZUxpc3RJdGVtKHdlaWdodCk7XG4gICAgICAgIHVwZGF0ZUxpc3RJdGVtKHRvdGFsV2VpZ2h0KTtcblxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRCb29sZWFuRGF0YShjb2x1bW5OYW1lKXtcblxuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICBkYXRhWydpbl9vdW5jZXMnXSA9IGZhbHNlO1xuICAgICAgICBkYXRhWydpbl9sYnMnXSA9IGZhbHNlO1xuICAgICAgICBkYXRhWydpbl9ncmFtcyddID0gZmFsc2U7XG4gICAgICAgIGRhdGFbJ2luX2tpbG9zJ10gPSBmYWxzZTtcbiAgICAgICAgc3dpdGNoKGNvbHVtbk5hbWUpe1xuICAgICAgICAgICAgY2FzZSAnaW5fb3VuY2VzJzpcbiAgICAgICAgICAgICAgICBkYXRhWydpbl9vdW5jZXMnXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdpbl9sYnMnOlxuICAgICAgICAgICAgICAgIGRhdGFbJ2luX2xicyddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnaW5fZ3JhbXMnOlxuICAgICAgICAgICAgICAgIGRhdGFbJ2luX2dyYW1zJ10gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdpbl9raWxvcyc6XG4gICAgICAgICAgICAgICAgZGF0YVsnaW5fa2lsb3MnXSA9IHRydWU7XG4gICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIHRoaXMud2luZG93LnVwZGF0ZUxpc3RJdGVtID0gZnVuY3Rpb24gdXBkYXRlTGlzdEl0ZW0oZWxlbWVudCl7XG5cbiAgICAgICAgbGV0IGNvbHVtbk5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jb2x1bW4tbmFtZScpO1xuICAgICAgICBsZXQgdmFsdWUgPSBlbGVtZW50LnZhbHVlO1xuICAgICAgICBsZXQgaWQgPSBlbGVtZW50LmlkO1xuICAgICAgICBsZXQgaWRBcnIgPSBpZC5zcGxpdCgnLScpO1xuICAgICAgICBsZXQgYXJyTGVuZ3RoID0gaWRBcnIubGVuZ3RoXG4gICAgICAgIGxldCByb3cgPSBpZEFyclthcnJMZW5ndGgtMV07XG4gICAgICAgIGxldCBpdGVtSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWQtJytyb3cpO1xuICAgICAgICBsZXQgaXRlbUlkVmFsdWUgPSBpdGVtSWQudmFsdWU7XG4gICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdElkJykudmFsdWU7XG4gICAgICAgIGxldCB1cmwgPSAnL2xpc3QtaXRlbS8nK2l0ZW1JZFZhbHVlO1xuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICBsZXQgdXNlcklkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJJZCcpLnZhbHVlO1xuXG4gICAgICAgIGRhdGFbY29sdW1uTmFtZV0gPSB2YWx1ZTtcblxuICAgICAgICBpZihjb2x1bW5OYW1lLnN1YnN0cmluZygwLDMpID09PSAnaW5fJyl7XG4gICAgICAgICAgICBkYXRhID0gZ2V0Qm9vbGVhbkRhdGEoY29sdW1uTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhWydsaXN0X2lkJ10gPSBsaXN0SWQ7XG4gICAgICAgIGRhdGFbJ3VzZXJfaWQnXSA9IHVzZXJJZDtcbiAgICAgICAgZGF0YVsnaWQnXSA9IGl0ZW1JZFZhbHVlO1xuXG4gICAgICAgIGF4aW9zLnBvc3QodXJsLCBkYXRhLCBpdGVtSWQpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG5cbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KCdGYWlsZWQgdG8gdXBkYXRlIGxpc3QgaXRlbS4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdXBkYXRlVG90YWxMaXN0V2VpZ2h0cygpO1xuXG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRvdGFsTGlzdFdlaWdodHMoKXtcblxuICAgICAgICBsZXQgd2VpZ2h0c0ZvclBXID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvci10b3RhbC1saXN0LXdlaWdodCcpO1xuICAgICAgICBsZXQgYmFzZVdlaWdodCA9IDA7XG4gICAgICAgIGxldCB0b3RhbFBhY2tXZWlnaHQgPSAwO1xuICAgICAgICBsZXQgbWF4UGFja1dlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXhQYWNrV2VpZ2h0JykudmFsdWU7XG4gICAgICAgIGxldCB1b21UZXh0ID0gJ0xCUyc7XG4gICAgICAgIHdlaWdodHNGb3JQVy5mb3JFYWNoKGZ1bmN0aW9uICh3ZWlnaHRGb3JQVyl7XG5cbiAgICAgICAgICAgIGxldCBpZCA9IHdlaWdodEZvclBXLmlkO1xuICAgICAgICAgICAgbGV0IGlkQXJyID0gaWQuc3BsaXQoJy0nKTtcbiAgICAgICAgICAgIGxldCBhcnJMZW5ndGggPSBpZEFyci5sZW5ndGhcbiAgICAgICAgICAgIGxldCByb3cgPSBpZEFyclthcnJMZW5ndGgtMV07XG4gICAgICAgICAgICBsZXQgcGFja2VkQW1vdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhY2tlZEFtb3VudC0nK3JvdykudmFsdWVcbiAgICAgICAgICAgIGxldCBjb252ZXJ0ZXIgPSAxO1xuICAgICAgICAgICAgbGV0IHJvd1dlaWdodCA9ICt3ZWlnaHRGb3JQVy52YWx1ZTtcbiAgICAgICAgICAgIGxldCB1b20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW9tJykudmFsdWU7XG4gICAgICAgICAgICBsZXQgaXRlbUNhdGVnb3J5RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtQ2F0ZWdvcnktJytyb3cpO1xuICAgICAgICAgICAgbGV0IGl0ZW1DYXRlZ29yeSA9ICcnO1xuICAgICAgICAgICAgaWYoaXRlbUNhdGVnb3J5RWxlbWVudCl7XG4gICAgICAgICAgICAgICAgaXRlbUNhdGVnb3J5ID0gaXRlbUNhdGVnb3J5RWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBpZihpdGVtQ2F0ZWdvcnkgPT09IHVuZGVmaW5lZCB8fCBpdGVtQ2F0ZWdvcnkgPT09IG51bGwpe1xuICAgICAgICAgICAgICAgIGl0ZW1DYXRlZ29yeSA9ICcnO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGlmKHVvbSA9PT0gJ3VzJyl7XG4gICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VvbS1vei0nK3JvdykuY2hlY2tlZCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnRlciA9IG91bmNlQ29udmVydGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1b20tb3otJytyb3cpLmNoZWNrZWQgPT09IHRydWUpe1xuICAgICAgICAgICAgICAgICAgICBjb252ZXJ0ZXIgPSBncmFtQ29udmVydGVyO1xuICAgICAgICAgICAgICAgICAgICB1b21UZXh0ID0gJ0tHJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRvdGFsUGFja1dlaWdodCA9IHRvdGFsUGFja1dlaWdodCArICgrcGFja2VkQW1vdW50ICogICgrcm93V2VpZ2h0L2NvbnZlcnRlcikpO1xuXG4gICAgICAgICAgICBpZihpdGVtQ2F0ZWdvcnkgIT09ICdjb25zdW1hYmxlcycpe1xuICAgICAgICAgICAgICAgIGJhc2VXZWlnaHQgPSBiYXNlV2VpZ2h0ICsgKCtwYWNrZWRBbW91bnQgKiAoK3Jvd1dlaWdodC9jb252ZXJ0ZXIpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICBpZigrYmFzZVdlaWdodCA+ICttYXhQYWNrV2VpZ2h0KXtcbiAgICAgICAgICAgIGxldCBkaXZFbGVtZW50ID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWlnaHRXYXJuaW5nLWRpdicpO1xuICAgICAgICAgICAgZGl2RWxlbWVudC5pbm5lclRleHQgPSAnVGhlIGJhc2Ugd2VpZ2h0ICgnK2Jhc2VXZWlnaHQudG9GaXhlZCgyKSArJyAnKyB1b21UZXh0KycpIG9mIHRoZSBpdGVtcyBvbiB0aGlzIGxpc3QgaGF2ZSBleGNlZWRlZCB0aGUgd2VpZ2h0IGZvciB0aGUgdHlwZS9zdHlsZSBvZiBoaWtlIHNlbGVjdGVkIGZvciB0aGlzIGxpc3QuJ1xuICAgICAgICAgICAgZGl2RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VpZ2h0V2FybmluZy1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXNlV2VpZ2h0JykuIHZhbHVlID0gYmFzZVdlaWdodC50b0ZpeGVkKDIpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQYWNrV2VpZ2h0JykudmFsdWUgPSB0b3RhbFBhY2tXZWlnaHQudG9GaXhlZCgyKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gIGNyZWF0ZUxpc3RJdGVtSW5wdXQodHlwZSxuYW1lQmFzZSxyb3csY29sdW1uTmFtZSl7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBlbGVtZW50LnR5cGUgPSB0eXBlO1xuICAgICAgICBlbGVtZW50Lm5hbWUgPSBuYW1lQmFzZStcIltdXCI7XG4gICAgICAgIGVsZW1lbnQuaWQgPSBuYW1lQmFzZSsnLScrcm93O1xuICAgICAgICBlbGVtZW50LnZhbHVlID0gJyc7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNvbHVtbi1uYW1lJyxjb2x1bW5OYW1lKTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHVwZGF0ZUxpc3RJdGVtKGVsZW1lbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcblxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRDYXRlZ3JveVNlbGVjdChyb3cpe1xuXG4gICAgICAgIGxldCBzZWxlY3QgPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgc2VsZWN0LmlkID0gJ0l0ZW1DYXRlZ29yeS0nK3JvdztcbiAgICAgICAgc2VsZWN0Lm5hbWUgPSAnaXRlbUNhdGVnb3J5LScrcm93O1xuICAgICAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCdkYXRhLWNvbHVtbi1uYW1lJywnaXRlbV9jYXRlZ29yeScpO1xuICAgICAgICBzZWxlY3QuY2xhc3NOYW1lID0gJ2Zvcm0tY29udHJvbCc7XG5cbiAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9ICcnO1xuICAgICAgICBvcHRpb24udGV4dCA9J0Nob29zZSc7XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICBsZXQgb3B0aW9uTGlzdDtcblxuICAgICAgICAgICAgb3B0aW9uTGlzdCA9IGFzeW5jIGZ1bmN0aW9uICgpe1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvbGlzdC1pdGVtLWNhdGVnb3JpZXMnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlIGVycm9yXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBUbyB1c2UgdGhlIGZ1bmN0aW9uIGFuZCBoYW5kbGUgdGhlIHJlc3BvbnNlIGRhdGFcbiAgICAgICAgICAgIG9wdGlvbkxpc3QoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gRG8gc29tZXRoaW5nIHdpdGggdGhlIHJlc3BvbnNlIGRhdGFcbiAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoIDtpKyspe1xuICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gZGF0YVtpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPWRhdGFbaV0uY2F0ZWdvcnk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB1cGRhdGVMaXN0SXRlbShzZWxlY3QpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc2VsZWN0O1xuXG4gICAgfVxuICAgIGZ1bmN0aW9uIG1ldHJpY1JhZGlvVG9Vcygpe1xuICAgICAgICBsZXQgaW5wdXRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZXRyaWMtcmFkaW8nKTtcbiAgICAgICAgaW5wdXRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dEVsZW1lbnQpIHtcblxuICAgICAgICAgICAgbGV0IGlkQXJyID0gaW5wdXRFbGVtZW50LmlkLnNwbGl0KCctJyk7XG4gICAgICAgICAgICBsZXQgdW9tID0gaWRBcnJbMV07XG4gICAgICAgICAgICBsZXQgcm93ID0gaWRBcnJbaWRBcnIubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBsZXQgZWxlbWVudFR5cGUgPSBpbnB1dEVsZW1lbnQudHlwZTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50VGFnID0gaW5wdXRFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgbGV0IG5ld0VsZW1lbnQ7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50VHlwZSA9PT0gJ3JhZGlvJyAmJiB1b20gPT09ICdncmFtJykge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVSYWRpbygnaW5fb3VuY2VzJywgJ09aJywgJ296Jywgcm93LCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFR5cGUgPT09ICdyYWRpbycgJiYgdW9tID09PSAna2cnKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZVJhZGlvKCdpbl9sYnMnLCAnTEJTJywgJ2xicycsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUYWcgPT09ICdsYWJlbCcgJiYgdW9tID09PSAnZ3JhbScpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlTGFiZWwoJ09aJywgJ3VvbS1vei0nICsgcm93LCAnb3onLCByb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VGFnID09PSAnbGFiZWwnICYmIHVvbSA9PT0gJ2tnJykge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVMYWJlbCgnTEJTJywgJ3VvbS1sYnMtJyArIHJvdywgJ2xicycsIHJvdyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuZXdFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKG5ld0VsZW1lbnQsIGlucHV0RWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuICAgIGZ1bmN0aW9uIHVzUmFkaW9Ub01ldHJpYygpe1xuICAgICAgICBsZXQgaW5wdXRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51cy1yYWRpbycpO1xuICAgICAgICBpbnB1dEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGlucHV0RWxlbWVudCkge1xuXG4gICAgICAgICAgICBsZXQgaWRBcnIgPSBpbnB1dEVsZW1lbnQuaWQuc3BsaXQoJy0nKTtcbiAgICAgICAgICAgIGxldCB1b20gPSBpZEFyclsxXTtcbiAgICAgICAgICAgIGxldCByb3cgPSBpZEFycltpZEFyci5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50VHlwZSA9IGlucHV0RWxlbWVudC50eXBlO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRUYWcgPSBpbnB1dEVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgbGV0IG5ld0VsZW1lbnQ7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50VHlwZSA9PT0gJ3JhZGlvJyAmJiB1b20gPT09ICdveicpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlUmFkaW8oJ2luX2dyYW1zJywgJ0dyYW1zJywgJ2dyYW0nLCByb3cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50VHlwZSA9PT0gJ3JhZGlvJyAmJiB1b20gPT09ICdsYnMnKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZVJhZGlvKCdpbl9raWxvcycsICdLRycsICdrZycsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUYWcgPT09ICdsYWJlbCcgJiYgdW9tID09PSAnb3onKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZUxhYmVsKCdHcmFtcycsICd1b20tZ3JhbS0nICsgcm93LCAnZ3JhbScsIHJvdyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRUYWcgPT09ICdsYWJlbCcgJiYgdW9tID09PSAnbGJzJykge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVMYWJlbCgnS0cnLCAndW9tLWtnLScgKyByb3csICdrZycsIHJvdyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuZXdFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKG5ld0VsZW1lbnQsIGlucHV0RWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVSYWRpbyhkYXRhQ29sdW1uTmFtZSwgbGFiZWwsIHVvbSwgcm93KSB7XG5cbiAgICAgICAgbGV0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICByYWRpby5jbGFzc05hbWUgPSAnZm9ybS1jaGVjay1pbnB1dCcgKyAodW9tID09PSAnZ3JhbScgfHwgdW9tID09PSAna2cnID8gJyBtZXRyaWMtcmFkaW8nIDogJyB1cy1yYWRpbycpO1xuICAgICAgICByYWRpby50eXBlID0gXCJyYWRpb1wiO1xuICAgICAgICByYWRpby5uYW1lID0gXCJ1b20tXCIgKyByb3cgKyBcIltdXCI7XG4gICAgICAgIHJhZGlvLmlkID0gJ3VvbS0nICsgdW9tICsgJy0nICsgcm93O1xuICAgICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sdW1uLW5hbWUnLCBkYXRhQ29sdW1uTmFtZSk7XG5cbiAgICAgICAgaWYodW9tID09PSAnZ3JhbScgfHwgdW9tID09PSAnb3onKXtcbiAgICAgICAgICAgIHJhZGlvLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29udmVydE1lYXN1cmVtZW50KHJvdyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmFkaW87XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxhYmVsKGlubmVySHRtbCwgaHRtbEZvciwgdW9tLCByb3csbGluZUxhYmVsPWZhbHNlKSB7XG5cbiAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBsYWJlbC5jbGFzc05hbWUgPSAnZm9ybS1jaGVjay1sYWJlbCcgKyAodW9tID09PSAnZ3JhbScgfHwgdW9tID09PSAna2cnID8gJyBtZXRyaWMtcmFkaW8nIDogJyB1cy1yYWRpbycpO1xuICAgICAgICBsYWJlbC5odG1sRm9yID0gaHRtbEZvcjtcbiAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gaW5uZXJIdG1sO1xuICAgICAgICBpZighbGluZUxhYmVsKXtcbiAgICAgICAgICAgIGxhYmVsLmlkID0gJ3VvbS0nICsgdW9tICsgJy1sYWJlbC0nICsgcm93O1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGxhYmVsLmlkID0gJ2xpbmUtdW9tLWxhYmVsLScrIHJvdztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9XG5cbiAgICB0aGlzLndpbmRvdy51cGRhdGVMaXN0ID0gZnVuY3Rpb24gdXBkYXRlTGlzdChlbGVtZW50LCBsaXN0SWQpe1xuXG4gICAgICAgIGxldCBjb2x1bW5OYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sdW1uLW5hbWUnKTtcbiAgICAgICAgbGV0IHZhbHVlID0gZWxlbWVudC52YWx1ZTtcbiAgICAgICAgbGV0IHVybCA9ICcvZ2Vhci1saXN0LycrbGlzdElkO1xuXG4gICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgIGRhdGFbY29sdW1uTmFtZV0gPSB2YWx1ZTtcblxuICAgICAgICBheGlvcy5wb3N0KHVybCwgZGF0YSwgbGlzdElkKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuXG4gICAgICAgICAgICAgICAgLy8gYWxlcnQocmVzLmRhdGEubXNnKTtcblxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuXG4gICAgICAgICAgICBhbGVydCgnRmFpbGVkIHRvIHVwZGF0ZSBsaXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpO1xuXG4gICAgICAgIH0pO1xuICAgICAgICBpZihjb2x1bW5OYW1lID09PSAnc29ydCcgfHwgY29sdW1uTmFtZSA9PT0gJ2xpc3RfY2xhc3MnKXtcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxuICAgIGNvbnN0IGhlYWRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbS1jb2xsYXBzaWJsZS1oZWFkZXInKTtcblxuICAgIGhlYWRlcnMuZm9yRWFjaChoZWFkZXIgPT4ge1xuICAgICAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gaGVhZGVyLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgICAgIGNvbnN0IGFycm93ID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWFycm93Jyk7XG4gICAgICAgICAgICBpZiAoY29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLnBhZGRpbmcgPSAnMCAxMHB4JztcbiAgICAgICAgICAgICAgICBhcnJvdy5pbm5lckhUTUwgPSAnJiM5NjYwJztcblxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUucGFkZGluZyA9ICcxMHB4JztcbiAgICAgICAgICAgICAgICBhcnJvdy5pbm5lckhUTUwgPSAnJiM5NjUwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBsZXQgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI21hc3Rlci1pdGVtLXRhYmxlIGlucHV0Jyk7XG4gICAgbGV0IHNlbGVjdElucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpO1xuXG4gICAgaW5wdXRzLmZvckVhY2goZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgaW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0pO1xuICAgIC8vIHNlbGVjdElucHV0cy5mb3JFYWNoKGZ1bmN0aW9uKHNlbGVjdElucHV0KSB7XG4gICAgLy8gICAgIHNlbGVjdElucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAvLyB9KTtcbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoR2VhckJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICBsZXQgc2VhcmNoTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdFNlYXJjaE1vZGFsJyk7XG4gICAgLy8gICAgIHNlYXJjaE1vZGFsLnNob3coKTtcbiAgICAvLyB9KTtcblxuICAgIC8vbGlzdENoYXJ0QnRuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RDaGFydEJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdElkJykudmFsdWU7XG4gICAgICAgIGxldCB1cmwgPSAnL2dlYXItbGlzdC1hbmFseXRpY3MvJytsaXN0SWQ7XG5cbiAgICAgICAgYXhpb3MuZ2V0KHVybClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY2hhcnRTdGF0dXMgPSBDaGFydC5nZXRDaGFydChcImdlYXJDaGFydFwiKTtcblxuICAgICAgICAgICAgICAgIGlmKGNoYXJ0U3RhdHVzICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGFydCBzdGF0dXMnKTtcbiAgICAgICAgICAgICAgICAgICAgY2hhcnRTdGF0dXMuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZWFyQ2hhcnQnKTtcbiAgICAgICAgICAgICAgICBsZXQgY2hhcnREYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YS5jaGFydERhdGEpO1xuXG4gICAgICAgICAgICAgICAgbGV0IG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkb3VnaG51dCcsIC8vIENoYXJ0IHR5cGVcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiBjaGFydERhdGEubGFiZWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGFiZWw6IGxpc3ROYW1lICsgJ0JyZWFrIERvd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGNoYXJ0RGF0YS53ZWlnaHRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY2hhcnREYXRhLmNvbG9ycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Zlck9mZnNldDogNFxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3V0b3V0OiA0NSwvLyBBZGp1c3QgdGhlIGN1dG91dCBwZXJjZW50YWdlIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogMTUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YWxhYmVsczogZmFsc2UgLy8gUmVtb3ZpbmcgdGhpcyBsaW5lIHNob3dzIHRoZSBkYXRhbGFiZWxzIGFnYWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVSb3RhdGU6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlU2NhbGU6dHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgICAgIGxldCBiYXNlV2VpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhc2VXZWlnaHQnKS52YWx1ZTtcbiAgICAgICAgICAgICAgICBsZXQgdG90YWxQYWNrV2VpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUGFja1dlaWdodCcpLnZhbHVlO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbEJhc2VXZWlnaHQnKS50ZXh0Q29udGVudCA9IGJhc2VXZWlnaHQ7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsVG90YWxXZWlnaHQnKS50ZXh0Q29udGVudCA9IHRvdGFsUGFja1dlaWdodDtcblxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuXG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyKTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gY29uc3QgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dlYXJDaGFydCcpO1xuICAgIC8vIGxldCBjaGFydERhdGEgPSBKU09OLnBhcnNlKCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhcnREYXRhJykudmFsdWUpO1xuXG4gICAgLy8gbGV0IGxpc3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3ROYW1lJykudmFsdWVcbiAgICAvLyBjb25zdCBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgIC8vICAgICB0eXBlOiAnZG91Z2hudXQnLCAvLyBDaGFydCB0eXBlXG4gICAgLy8gICAgIGRhdGE6IHtcbiAgICAvLyAgICAgICAgIGxhYmVsczogY2hhcnREYXRhLmxhYmVscyxcbiAgICAvLyAgICAgICAgIGRhdGFzZXRzOiBbe1xuICAgIC8vICAgICAgICAgICAgIC8vIGxhYmVsOiBsaXN0TmFtZSArICdCcmVhayBEb3duJyxcbiAgICAvLyAgICAgICAgICAgICBkYXRhOiBjaGFydERhdGEud2VpZ2h0cyxcbiAgICAvLyAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNoYXJ0RGF0YS5jb2xvcnMsXG4gICAgLy8gICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgLy8gICAgICAgICAgICAgaG92ZXJPZmZzZXQ6IDRcbiAgICAvLyAgICAgICAgIH1dXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIG9wdGlvbnM6IHtcbiAgICAvLyAgICAgICAgIGN1dG91dDogNDUsLy8gQWRqdXN0IHRoZSBjdXRvdXQgcGVyY2VudGFnZSBoZXJlXG4gICAgLy8gICAgICAgICByYWRpdXM6IDE1MCxcbiAgICAvLyAgICAgICAgIGxlZ2VuZDoge1xuICAgIC8vICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAgcGx1Z2luczoge1xuICAgIC8vICAgICAgICAgICAgIGRhdGFsYWJlbHM6IGZhbHNlIC8vIFJlbW92aW5nIHRoaXMgbGluZSBzaG93cyB0aGUgZGF0YWxhYmVscyBhZ2FpblxuICAgIC8vICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgYW5pbWF0aW9uOntcbiAgICAvLyAgICAgICAgICAgICBhbmltYXRlUm90YXRlOnRydWUsXG4gICAgLy8gICAgICAgICAgICAgYW5pbWF0ZVNjYWxlOnRydWVcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vIH0pO1xuXG5cbiAgICAvLyBsZXQgYmFzZVdlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXNlV2VpZ2h0JykudmFsdWU7XG4gICAgLy8gbGV0IHRvdGFsUGFja1dlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFBhY2tXZWlnaHQnKS52YWx1ZTtcbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxCYXNlV2VpZ2h0JykudGV4dENvbnRlbnQgPSBiYXNlV2VpZ2h0O1xuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbFRvdGFsV2VpZ2h0JykudGV4dENvbnRlbnQgPSB0b3RhbFBhY2tXZWlnaHQ7XG5cblxufSk7XG5cblxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbndpbmRvdy5heGlvcyA9IGF4aW9zO1xuXG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIk1vZGFsIiwiQ2hhcnQiLCJib290c3RyYXAiLCJyZXF1aXJlIiwiZ3JhbUNvbnZlcnRlciIsIm91bmNlQ29udmVydGVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3dQYXNzd29yZCIsImlkIiwicGFzc3dvcmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkTGlzdEl0ZW0iLCJudW1iZXJPZkl0ZW1zVG9BZGQiLCJsaW5lc1RvQWRkIiwiX2xvb3AiLCJsaXN0VU9NIiwiZmluYWxJRWxlbWVudCIsIml0ZW1UYWJsZSIsInVzZXJJZCIsImxpc3RJZCIsImZpbmFsSSIsInJvdyIsImNyZWF0ZUVsZW1lbnQiLCJjZWxsMCIsInNjb3BlIiwiaW5uZXJIVE1MIiwiY2VsbDEiLCJjb3VudGVyIiwic2V0QXR0cmlidXRlIiwiaXRlbU5hbWUiLCJjcmVhdGVMaXN0SXRlbUlucHV0IiwicGxhY2Vob2xkZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJjZWxsNiIsImRlbGV0ZUJ0biIsImNsYXNzTmFtZSIsImRhdGEiLCJ1cmwiLCJ1cGRhdGVJdGVtIiwiX3JlZiIsIl9jYWxsZWUiLCJyZXNwb25zZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJheGlvcyIsInBvc3QiLCJ0MCIsImNvbnNvbGUiLCJsb2ciLCJuZXdJZCIsImNlbGwyIiwiaXRlbVdlaWdodCIsImNlbGwzIiwibGluZVVvbUNlbGwiLCJyYWRpbzEiLCJyYWRpbzIiLCJyYWRpb0xhYmVsMSIsInJhZGlvTGFiZWwyIiwicmFkaW9MYWJlbDMiLCJjcmVhdGVSYWRpbyIsImNyZWF0ZUxhYmVsIiwiY2VsbDQiLCJwYWNrZWRBbW91bnQiLCJjZWxsNSIsInRvdGFsTGluZVdlaWdodCIsImFwcGVuZENoaWxkIiwic2VsZWN0Q2VsbCIsImNhdGVnb3J5U2VsZWN0IiwiZ2V0Q2F0ZWdyb3lTZWxlY3QiLCJhcHBlbmQiLCJhZGRFdmVudExpc3RlbmVyV2VpZ2h0Q2FsYyIsInVwZGF0ZVVPTSIsInVzUmFkaW9Ub01ldHJpYyIsIm1ldHJpY1JhZGlvVG9VcyIsIm5lZWRlZEZvcldlaWdodHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibmVlZGVkRm9yV2VpZ2h0IiwiZ2V0TGluZVRvdGFsV2VpZ2h0IiwiY29udmVydCIsInVuZGVmaW5lZCIsIndlaWdodCIsInVvbSIsImxpbmVUb3RhbFdlaWdodEVsZW1lbnQiLCJsaW5lVG90YWwiLCJ0b0ZpeGVkIiwicmVwbGFjZSIsInVwZGF0ZUxpc3RJdGVtIiwiY29udmVydE1lYXN1cmVtZW50IiwidG90YWxXZWlnaHQiLCJ0b3RhbExpbmVXZWlnaHRWYWx1ZSIsIndlaWdodFZhbHVlIiwic21hbGwiLCJsYXJnZSIsImVsZW1lbnQiLCJsYWJlbCIsImxhYmVsSFRNTCIsImNoZWNrZWQiLCJnZXRCb29sZWFuRGF0YSIsImNvbHVtbk5hbWUiLCJnZXRBdHRyaWJ1dGUiLCJpZEFyciIsInNwbGl0IiwiYXJyTGVuZ3RoIiwiaXRlbUlkIiwiaXRlbUlkVmFsdWUiLCJzdWJzdHJpbmciLCJyZXMiLCJlcnIiLCJhbGVydCIsImVycm9yIiwidXBkYXRlVG90YWxMaXN0V2VpZ2h0cyIsIndlaWdodHNGb3JQVyIsImJhc2VXZWlnaHQiLCJ0b3RhbFBhY2tXZWlnaHQiLCJtYXhQYWNrV2VpZ2h0IiwidW9tVGV4dCIsIndlaWdodEZvclBXIiwiY29udmVydGVyIiwicm93V2VpZ2h0IiwiaXRlbUNhdGVnb3J5RWxlbWVudCIsIml0ZW1DYXRlZ29yeSIsImRpdkVsZW1lbnQiLCJpbm5lclRleHQiLCJzdHlsZSIsImRpc3BsYXkiLCJuYW1lQmFzZSIsInNlbGVjdCIsIm9wdGlvbiIsInRleHQiLCJvcHRpb25MaXN0IiwiX3JlZjIiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImdldCIsImNhdGVnb3J5IiwiaW5wdXRFbGVtZW50cyIsImlucHV0RWxlbWVudCIsImVsZW1lbnRUeXBlIiwiZWxlbWVudFRhZyIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsIm5ld0VsZW1lbnQiLCJwYXJlbnRFbGVtZW50IiwicmVwbGFjZUNoaWxkIiwiZGF0YUNvbHVtbk5hbWUiLCJyYWRpbyIsImlubmVySHRtbCIsImh0bWxGb3IiLCJsaW5lTGFiZWwiLCJ1cGRhdGVMaXN0IiwibG9jYXRpb24iLCJyZWxvYWQiLCJoZWFkZXJzIiwiaGVhZGVyIiwiY29udGVudCIsIm5leHRFbGVtZW50U2libGluZyIsImFycm93IiwicXVlcnlTZWxlY3RvciIsImNvbnRhaW5zIiwicmVtb3ZlIiwibWF4SGVpZ2h0IiwicGFkZGluZyIsInNjcm9sbEhlaWdodCIsImlucHV0cyIsInNlbGVjdElucHV0cyIsImlucHV0IiwiZGlzYWJsZWQiLCJjaGFydFN0YXR1cyIsImdldENoYXJ0IiwiZGVzdHJveSIsImN0eCIsImNoYXJ0RGF0YSIsIkpTT04iLCJwYXJzZSIsIm15Q2hhcnQiLCJsYWJlbHMiLCJkYXRhc2V0cyIsIndlaWdodHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvcnMiLCJib3JkZXJXaWR0aCIsImhvdmVyT2Zmc2V0Iiwib3B0aW9ucyIsImN1dG91dCIsInJhZGl1cyIsImxlZ2VuZCIsInBsdWdpbnMiLCJkYXRhbGFiZWxzIiwiYW5pbWF0aW9uIiwiYW5pbWF0ZVJvdGF0ZSIsImFuaW1hdGVTY2FsZSIsInRleHRDb250ZW50IiwiZGVmYXVsdHMiLCJjb21tb24iXSwic291cmNlUm9vdCI6IiJ9