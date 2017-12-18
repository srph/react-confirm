(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactConfirm"] = factory(require("react"));
	else
		root["ReactConfirm"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.store = undefined;

var _unistore = __webpack_require__(6);

var _unistore2 = _interopRequireDefault(_unistore);

var _omit = __webpack_require__(5);

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _unistore2.default)({
  active: false,
  text: '',
  options: {},
  deferred: null
});

var actions = {
  open: function open(state, opts) {
    if (state.active) {
      throw new Error('Only a single confirm can be active at a time.');
    }

    // opts(str)
    if (typeof opts === 'string') {
      var text = opts;
      opts = { text: text };
    }

    // opts ({ text, actions, etc })
    // Put all other stuff inside `options`
    opts.options = (0, _omit2.default)(opts, ['text']);

    return new Promise(function (resolve, reject) {
      store.setState({
        active: true,
        text: opts.text,
        options: opts.options,
        deferred: { resolve: resolve, reject: reject }
      });
    });
  },
  proceed: function proceed(state) {
    if (!state.active) {
      return;
    }

    state.deferred.resolve();

    return {
      active: false,
      text: '',
      options: {},
      deferred: null
    };
  },
  dismiss: function dismiss(state) {
    if (!state.active) {
      return;
    }

    state.deferred.reject();

    return {
      active: false,
      text: '',
      options: {},
      deferred: null
    };
  }
};

exports.store = store;
exports.actions = actions;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react3 = __webpack_require__(7);

var _store = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseConfirmRoot = (0, _react3.connect)(function (state) {
  return state;
}, _store.actions)(function (_ref) {
  var active = _ref.active,
      text = _ref.text,
      options = _ref.options,
      proceed = _ref.proceed,
      dismiss = _ref.dismiss,
      children = _ref.children;
  return children({
    active: active,
    text: text,
    options: options,
    actions: { proceed: proceed, dismiss: dismiss }
  });
});

var instance = null;

var ConfirmRoot = function (_Component) {
  _inherits(ConfirmRoot, _Component);

  function ConfirmRoot() {
    _classCallCheck(this, ConfirmRoot);

    return _possibleConstructorReturn(this, (ConfirmRoot.__proto__ || Object.getPrototypeOf(ConfirmRoot)).apply(this, arguments));
  }

  _createClass(ConfirmRoot, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (instance) {
        throw new Error('Only a single ConfirmRoot can be mounted at a time.');
      }

      instance = this;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      instance = null;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _react3.Provider,
        { store: _store.store },
        _react2.default.createElement(
          BaseConfirmRoot,
          null,
          this.props.children
        )
      );
    }
  }]);

  return ConfirmRoot;
}(_react.Component);

exports.default = ConfirmRoot;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = confirm;

var _store = __webpack_require__(0);

function confirm(opts) {
  // We won't be using `store.action` because it operates on async actions
  // @see https://github.com/developit/unistore/issues/3
  return _store.actions.open(_store.store.getState(), opts);
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _confirm = __webpack_require__(3);

Object.defineProperty(exports, 'confirm', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_confirm).default;
  }
});

var _ConfirmRoot = __webpack_require__(2);

Object.defineProperty(exports, 'ConfirmRoot', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ConfirmRoot).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = omit;
/**
 * Generate a new array without the provided keys.
 * Bare minimum implementation of `omit`.
 * @param {<mixed>} arr
 * @param {<String>} keys
 */
function omit(arr, keys) {
  var result = {};

  for (var key in arr) {
    if (!~keys.indexOf(key)) {
      result[key] = arr[key];
    }
  }

  return result;
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (n, t) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : n.unistore = t();
}(undefined, function () {
  function n(n, t) {
    for (var e in t) {
      n[e] = t[e];
    }return n;
  }return function (t) {
    function e(n) {
      for (var t = [], e = 0; e < r.length; e++) {
        r[e] === n ? n = null : t.push(r[e]);
      }r = t;
    }function u(e, u) {
      t = u ? e : n(n({}, t), e);for (var o = r, f = 0; f < o.length; f++) {
        o[f](t);
      }
    }var r = [];return t = t || {}, { action: function action(n) {
        return function () {
          for (var e = arguments, r = [t], o = 0; o < arguments.length; o++) {
            r.push(e[o]);
          }var f = n.apply(this, r);null != f && (f.then ? f.then(u) : u(f));
        };
      }, setState: u, subscribe: function subscribe(n) {
        return r.push(n), function () {
          e(n);
        };
      }, unsubscribe: e, getState: function getState() {
        return t;
      } };
  };
});
//# sourceMappingURL=unistore.umd.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Provider = exports.connect = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function mapActions(actions, store) {
    if (typeof actions === 'function') {
        actions = actions(store);
    }
    var mapped = {};
    for (var i in actions) {
        mapped[i] = store.action(actions[i]);
    }
    return mapped;
}

function select(properties) {
    if (typeof properties === 'string') {
        properties = properties.split(',');
    }
    return function (state) {
        var selected = {};
        for (var i = 0; i < properties.length; i++) {
            selected[properties[i]] = state[properties[i]];
        }
        return selected;
    };
}

function assign(obj, props) {
    for (var i in props) {
        obj[i] = props[i];
    }
    return obj;
}

var CONTEXT_TYPES = {
    store: function store() {}
};
function connect(mapStateToProps, actions) {
    if (typeof mapStateToProps !== 'function') {
        mapStateToProps = select(mapStateToProps || []);
    }
    return function (Child) {
        var Wrapper = function (_Component) {
            _inherits(Wrapper, _Component);

            function Wrapper() {
                var _ref;

                var _temp, _this, _ret;

                _classCallCheck(this, Wrapper);

                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Wrapper.__proto__ || Object.getPrototypeOf(Wrapper)).call.apply(_ref, [this].concat(args))), _this), _this.state = mapStateToProps(_this.context.store ? _this.context.store.getState() : {}, _this.props), _this.boundActions = actions ? mapActions(actions, _this.context.store) : { store: _this.context.store }, _this.update = function () {
                    var mapped = mapStateToProps(_this.context.store ? _this.context.store.getState() : {}, _this.props);
                    for (var i in mapped) {
                        if (mapped[i] !== _this.state[i]) {
                            _this.state = mapped;
                            return _this.setState(null);
                        }
                    }for (var _i in _this.state) {
                        if (!(_i in mapped)) {
                            _this.state = mapped;
                            return _this.setState(null);
                        }
                    }
                }, _temp), _possibleConstructorReturn(_this, _ret);
            }

            _createClass(Wrapper, [{
                key: 'componentDidMount',
                value: function componentDidMount() {
                    this.context.store.subscribe(this.update);
                }
            }, {
                key: 'componentWillUnmount',
                value: function componentWillUnmount() {
                    this.context.store.unsubscribe(this.update);
                }
            }, {
                key: 'render',
                value: function render() {
                    return (0, _react.createElement)(Child, assign(assign(assign({}, this.boundActions), this.props), this.state));
                }
            }]);

            return Wrapper;
        }(_react.Component);

        Wrapper.contextTypes = CONTEXT_TYPES;
        return Wrapper;
    };
}

var Provider = function (Component$$1) {
    function Provider() {
        Component$$1.apply(this, arguments);
    }

    if (Component$$1) Provider.__proto__ = Component$$1;
    Provider.prototype = Object.create(Component$$1 && Component$$1.prototype);
    Provider.prototype.constructor = Provider;

    Provider.prototype.getChildContext = function getChildContext() {
        return {
            store: this.props.store
        };
    };
    Provider.prototype.render = function render() {
        return _react.Children.only(this.props.children);
    };

    return Provider;
}(_react.Component);
Provider.childContextTypes = CONTEXT_TYPES;

exports.connect = connect;
exports.Provider = Provider;
//# sourceMappingURL=react.es.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ })
/******/ ]);
});