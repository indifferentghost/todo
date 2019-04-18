module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "66ca");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+Qon":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("UrUy");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/promise.js
var promise = __webpack_require__("ZOIa");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    promise_default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new promise_default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./actions/todoActions.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_TODOS; });
/* unused harmony export UPDATE_TODO */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DELETE_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return addTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getTodos; });
/* unused harmony export updateTodo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return deleteTodo; });



var ADD_TODO = 'ADD_TODO';
var GET_TODOS = 'GET_TODOS';
var UPDATE_TODO = 'UPDATE_TODO';
var DELETE_TODO = 'DELETE_TODO';
var url = 'http://localhost:5000/api';
var addTodo =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(dispatch, _ref) {
    var text, _ref$completed, completed;

    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            text = _ref.text, _ref$completed = _ref.completed, completed = _ref$completed === void 0 ? false : _ref$completed;
            _context.next = 3;
            return external_axios_default.a.post("".concat(url, "/todos"), {
              text: text,
              completed: completed
            });

          case 3:
            getTodos(dispatch);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function addTodo(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();
var getTodos =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee2(dispatch) {
    var _ref4, data;

    return regenerator_default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return external_axios_default.a.get("".concat(url, "/todos"));

          case 2:
            _ref4 = _context2.sent;
            data = _ref4.data;
            dispatch({
              data: data,
              type: GET_TODOS
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getTodos(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var updateTodo =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee3(dispatch, _ref5) {
    var text, completed, id;
    return regenerator_default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            text = _ref5.text, completed = _ref5.completed, id = _ref5.$loki;
            _context3.next = 3;
            return external_axios_default.a.put("".concat(url, "/todos/").concat(id), {
              text: text,
              completed: completed
            });

          case 3:
            getTodos(dispatch);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function updateTodo(_x4, _x5) {
    return _ref6.apply(this, arguments);
  };
}();
var deleteTodo =
/*#__PURE__*/
function () {
  var _ref8 = _asyncToGenerator(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee4(dispatch, _ref7) {
    var id;
    return regenerator_default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = _ref7.$loki;
            _context4.next = 3;
            return external_axios_default.a.delete("".concat(url, "/todos/").concat(id));

          case 3:
            getTodos(dispatch);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteTodo(_x6, _x7) {
    return _ref8.apply(this, arguments);
  };
}();

/***/ }),

/***/ "66ca":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "7X5e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Kjtv");

/***/ }),

/***/ "8ET1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("r7XW");

/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "Kjtv":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("s20r");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (is_array_default()(arr)) return arr;
}
// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("SY1S");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/header.js


function Header() {
  return external_react_default.a.createElement("header", null, external_react_default.a.createElement("h1", null, "Todo App (Hooks)"));
}

/* harmony default export */ var header = (Header);
// EXTERNAL MODULE: ./actions/todoActions.js + 1 modules
var todoActions = __webpack_require__("+Qon");

// EXTERNAL MODULE: ./state.js + 6 modules
var state = __webpack_require__("THsT");

// CONCATENATED MODULE: ./components/todoInput.js





function TodoInput() {
  var _useState = Object(external_react_["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      text = _useState2[0],
      setText = _useState2[1];

  var _useStateValue = Object(state["b" /* useStateValue */])(),
      _useStateValue2 = _slicedToArray(_useStateValue, 2),
      dispatch = _useStateValue2[1];

  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("input", {
    value: text,
    onChange: function onChange(_ref) {
      var target = _ref.target;
      return setText(target.value);
    }
  }), external_react_default.a.createElement("button", {
    onClick: function onClick() {
      return Object(todoActions["d" /* addTodo */])(dispatch, {
        text: text
      });
    }
  }, "Add Todo"));
}

/* harmony default export */ var todoInput = (TodoInput);
// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("U8Yc");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js

function _extends() {
  _extends = assign_default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// CONCATENATED MODULE: ./components/todo.js





function Todo(_ref) {
  var text = _ref.text,
      completed = _ref.completed,
      $loki = _ref.$loki;

  var _useStateValue = Object(state["b" /* useStateValue */])(),
      _useStateValue2 = _slicedToArray(_useStateValue, 2),
      dispatch = _useStateValue2[1];

  var handleChecked = function handleChecked() {
    return Object(todoActions["e" /* deleteTodo */])(dispatch, {
      text: text,
      completed: !completed,
      $loki: $loki
    });
  };

  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("input", {
    type: "checkbox",
    checked: completed,
    onChange: handleChecked
  }), external_react_default.a.createElement("span", null, text));
}

/* harmony default export */ var components_todo = (Todo);
// CONCATENATED MODULE: ./components/todoList.js






function TodoList() {
  var _useStateValue = Object(state["b" /* useStateValue */])(),
      _useStateValue2 = _slicedToArray(_useStateValue, 1),
      todos = _useStateValue2[0].todos;

  return external_react_default.a.createElement("div", null, todos.map(function (todo) {
    return external_react_default.a.createElement(components_todo, _extends({
      key: todo.$loki
    }, todo));
  }));
}

/* harmony default export */ var todoList = (TodoList);
// CONCATENATED MODULE: ./pages/index.js








function Index() {
  var _useStateValue = Object(state["b" /* useStateValue */])(),
      _useStateValue2 = _slicedToArray(_useStateValue, 2),
      dispatch = _useStateValue2[1];

  Object(external_react_["useEffect"])(function () {
    Object(todoActions["f" /* getTodos */])(dispatch);
  }, []);
  return external_react_default.a.createElement("main", null, external_react_default.a.createElement(header, null), external_react_default.a.createElement("section", null, external_react_default.a.createElement(todoInput, null), external_react_default.a.createElement(todoList, null)));
}

/* harmony default export */ var pages = __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "SY1S":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "THsT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("s20r");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (is_array_default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("8ET1");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/is-iterable.js
var is_iterable = __webpack_require__("7X5e");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js


function _iterableToArray(iter) {
  if (is_iterable_default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return from_default()(iter);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: ./actions/todoActions.js + 1 modules
var todoActions = __webpack_require__("+Qon");

// CONCATENATED MODULE: ./reducers/todoReducer.js


var todoReducer_todoReducer = function todoReducer(state, _ref) {
  var type = _ref.type,
      data = _ref.data;

  switch (type) {
    case todoActions["b" /* DELETE_TODO */]:
    case todoActions["a" /* ADD_TODO */]:
      return _toConsumableArray(state);

    case todoActions["c" /* GET_TODOS */]:
      return _toConsumableArray(data);
  }
};
// CONCATENATED MODULE: ./reducers/index.js

/* harmony default export */ var reducers = (function (_ref, action) {
  var todos = _ref.todos;
  return {
    todos: todoReducer_todoReducer(todos, action)
  };
});
// CONCATENATED MODULE: ./state.js
/* unused harmony export StateContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return state_useStateValue; });


var StateContext = Object(external_react_["createContext"])();
var state_useStateValue = function useStateValue() {
  return Object(external_react_["useContext"])(StateContext);
};

function StateProvider(_ref) {
  var children = _ref.children;
  var initialState = {
    todos: []
  };
  return external_react_default.a.createElement(StateContext.Provider, {
    value: Object(external_react_["useReducer"])(reducers, initialState)
  }, children);
}

/* harmony default export */ var state_0 = __webpack_exports__["a"] = (StateProvider);

/***/ }),

/***/ "U8Yc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "UrUy":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "ZOIa":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "r7XW":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "s20r":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });