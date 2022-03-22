/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/assets/packs/tether.min.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/packs/tether.min.js":
/*!****************************************!*\
  !*** ./app/assets/packs/tether.min.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function (t, e) {
   true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function (t, e, o) {
  "use strict";

  function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function n(t) {
    var e = getComputedStyle(t) || {},
        o = e.position,
        i = [];
    if ("fixed" === o) return [t];

    for (var n = t; n = n.parentNode;) {
      var r = void 0;

      try {
        r = getComputedStyle(n);
      } catch (s) {}

      if ("undefined" == typeof r || null === r) return i.push(n), i;
      var a = r,
          f = a.overflow,
          h = a.overflowX,
          l = a.overflowY;
      /(auto|scroll)/.test(f + l + h) && ("absolute" !== o || ["relative", "absolute", "fixed"].indexOf(r.position) >= 0) && i.push(n);
    }

    return i.push(document.body), i;
  }

  function r(t) {
    var e = void 0;
    t === document ? (e = document, t = document.documentElement) : e = t.ownerDocument;
    var o = e.documentElement,
        i = {},
        n = t.getBoundingClientRect();

    for (var r in n) {
      i[r] = n[r];
    }

    var s = x(e);
    return i.top -= s.top, i.left -= s.left, "undefined" == typeof i.width && (i.width = document.body.scrollWidth - i.left - i.right), "undefined" == typeof i.height && (i.height = document.body.scrollHeight - i.top - i.bottom), i.top = i.top - o.clientTop, i.left = i.left - o.clientLeft, i.right = e.body.clientWidth - i.width - i.left, i.bottom = e.body.clientHeight - i.height - i.top, i;
  }

  function s(t) {
    return t.offsetParent || document.documentElement;
  }

  function a() {
    var t = document.createElement("div");
    t.style.width = "100%", t.style.height = "200px";
    var e = document.createElement("div");
    f(e.style, {
      position: "absolute",
      top: 0,
      left: 0,
      pointerEvents: "none",
      visibility: "hidden",
      width: "200px",
      height: "150px",
      overflow: "hidden"
    }), e.appendChild(t), document.body.appendChild(e);
    var o = t.offsetWidth;
    e.style.overflow = "scroll";
    var i = t.offsetWidth;
    o === i && (i = e.clientWidth), document.body.removeChild(e);
    var n = o - i;
    return {
      width: n,
      height: n
    };
  }

  function f() {
    var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
        e = [];
    return Array.prototype.push.apply(e, arguments), e.slice(1).forEach(function (e) {
      if (e) for (var o in e) {
        ({}).hasOwnProperty.call(e, o) && (t[o] = e[o]);
      }
    }), t;
  }

  function h(t, e) {
    if ("undefined" != typeof t.classList) e.split(" ").forEach(function (e) {
      e.trim() && t.classList.remove(e);
    });else {
      var o = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi"),
          i = u(t).replace(o, " ");
      p(t, i);
    }
  }

  function l(t, e) {
    if ("undefined" != typeof t.classList) e.split(" ").forEach(function (e) {
      e.trim() && t.classList.add(e);
    });else {
      h(t, e);
      var o = u(t) + (" " + e);
      p(t, o);
    }
  }

  function d(t, e) {
    if ("undefined" != typeof t.classList) return t.classList.contains(e);
    var o = u(t);
    return new RegExp("(^| )" + e + "( |$)", "gi").test(o);
  }

  function u(t) {
    return t.className instanceof SVGAnimatedString ? t.className.baseVal : t.className;
  }

  function p(t, e) {
    t.setAttribute("class", e);
  }

  function c(t, e, o) {
    o.forEach(function (o) {
      -1 === e.indexOf(o) && d(t, o) && h(t, o);
    }), e.forEach(function (e) {
      d(t, e) || l(t, e);
    });
  }

  function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function g(t, e) {
    var o = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
    return t + o >= e && e >= t - o;
  }

  function m() {
    return "undefined" != typeof performance && "undefined" != typeof performance.now ? performance.now() : +new Date();
  }

  function v() {
    for (var t = {
      top: 0,
      left: 0
    }, e = arguments.length, o = Array(e), i = 0; e > i; i++) {
      o[i] = arguments[i];
    }

    return o.forEach(function (e) {
      var o = e.top,
          i = e.left;
      "string" == typeof o && (o = parseFloat(o, 10)), "string" == typeof i && (i = parseFloat(i, 10)), t.top += o, t.left += i;
    }), t;
  }

  function y(t, e) {
    return "string" == typeof t.left && -1 !== t.left.indexOf("%") && (t.left = parseFloat(t.left, 10) / 100 * e.width), "string" == typeof t.top && -1 !== t.top.indexOf("%") && (t.top = parseFloat(t.top, 10) / 100 * e.height), t;
  }

  function b(t, e) {
    return "scrollParent" === e ? e = t.scrollParents[0] : "window" === e && (e = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), e === document && (e = e.documentElement), "undefined" != typeof e.nodeType && !function () {
      var t = r(e),
          o = t,
          i = getComputedStyle(e);
      e = [o.left, o.top, t.width + o.left, t.height + o.top], U.forEach(function (t, o) {
        t = t[0].toUpperCase() + t.substr(1), "Top" === t || "Left" === t ? e[o] += parseFloat(i["border" + t + "Width"]) : e[o] -= parseFloat(i["border" + t + "Width"]);
      });
    }(), e;
  }

  var w = function () {
    function t(t, e) {
      for (var o = 0; o < e.length; o++) {
        var i = e[o];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }

    return function (e, o, i) {
      return o && t(e.prototype, o), i && t(e, i), e;
    };
  }(),
      C = void 0;

  "undefined" == typeof C && (C = {
    modules: []
  });

  var O = function () {
    var t = 0;
    return function () {
      return ++t;
    };
  }(),
      E = {},
      x = function x(t) {
    var e = t._tetherZeroElement;
    "undefined" == typeof e && (e = t.createElement("div"), e.setAttribute("data-tether-id", O()), f(e.style, {
      top: 0,
      left: 0,
      position: "absolute"
    }), t.body.appendChild(e), t._tetherZeroElement = e);
    var o = e.getAttribute("data-tether-id");

    if ("undefined" == typeof E[o]) {
      E[o] = {};
      var i = e.getBoundingClientRect();

      for (var n in i) {
        E[o][n] = i[n];
      }

      T(function () {
        delete E[o];
      });
    }

    return E[o];
  },
      A = [],
      T = function T(t) {
    A.push(t);
  },
      S = function S() {
    for (var t = void 0; t = A.pop();) {
      t();
    }
  },
      W = function () {
    function t() {
      i(this, t);
    }

    return w(t, [{
      key: "on",
      value: function value(t, e, o) {
        var i = arguments.length <= 3 || void 0 === arguments[3] ? !1 : arguments[3];
        "undefined" == typeof this.bindings && (this.bindings = {}), "undefined" == typeof this.bindings[t] && (this.bindings[t] = []), this.bindings[t].push({
          handler: e,
          ctx: o,
          once: i
        });
      }
    }, {
      key: "once",
      value: function value(t, e, o) {
        this.on(t, e, o, !0);
      }
    }, {
      key: "off",
      value: function value(t, e) {
        if ("undefined" == typeof this.bindings || "undefined" == typeof this.bindings[t]) if ("undefined" == typeof e) delete this.bindings[t];else for (var o = 0; o < this.bindings[t].length;) {
          this.bindings[t][o].handler === e ? this.bindings[t].splice(o, 1) : ++o;
        }
      }
    }, {
      key: "trigger",
      value: function value(t) {
        if ("undefined" != typeof this.bindings && this.bindings[t]) {
          for (var e = 0, o = arguments.length, i = Array(o > 1 ? o - 1 : 0), n = 1; o > n; n++) {
            i[n - 1] = arguments[n];
          }

          for (; e < this.bindings[t].length;) {
            var r = this.bindings[t][e],
                s = r.handler,
                a = r.ctx,
                f = r.once,
                h = a;
            "undefined" == typeof h && (h = this), s.apply(h, i), f ? this.bindings[t].splice(e, 1) : ++e;
          }
        }
      }
    }]), t;
  }();

  C.Utils = {
    getScrollParents: n,
    getBounds: r,
    getOffsetParent: s,
    extend: f,
    addClass: l,
    removeClass: h,
    hasClass: d,
    updateClasses: c,
    defer: T,
    flush: S,
    uniqueId: O,
    Evented: W,
    getScrollBarSize: a
  };

  var M = function () {
    function t(t, e) {
      var o = [],
          i = !0,
          n = !1,
          r = void 0;

      try {
        for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); i = !0) {
          ;
        }
      } catch (f) {
        n = !0, r = f;
      } finally {
        try {
          !i && a["return"] && a["return"]();
        } finally {
          if (n) throw r;
        }
      }

      return o;
    }

    return function (e, o) {
      if (Array.isArray(e)) return e;
      if (Symbol.iterator in Object(e)) return t(e, o);
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }(),
      w = function () {
    function t(t, e) {
      for (var o = 0; o < e.length; o++) {
        var i = e[o];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }

    return function (e, o, i) {
      return o && t(e.prototype, o), i && t(e, i), e;
    };
  }();

  if ("undefined" == typeof C) throw new Error("You must include the utils.js file before tether.js");

  var P = C.Utils,
      n = P.getScrollParents,
      r = P.getBounds,
      s = P.getOffsetParent,
      f = P.extend,
      l = P.addClass,
      h = P.removeClass,
      c = P.updateClasses,
      T = P.defer,
      S = P.flush,
      a = P.getScrollBarSize,
      k = function () {
    if ("undefined" == typeof document) return "";

    for (var t = document.createElement("div"), e = ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"], o = 0; o < e.length; ++o) {
      var i = e[o];
      if (void 0 !== t.style[i]) return i;
    }
  }(),
      B = [],
      _ = function _() {
    B.forEach(function (t) {
      t.position(!1);
    }), S();
  };

  !function () {
    var t = null,
        e = null,
        o = null,
        i = function n() {
      return "undefined" != typeof e && e > 16 ? (e = Math.min(e - 16, 250), void (o = setTimeout(n, 250))) : void ("undefined" != typeof t && m() - t < 10 || ("undefined" != typeof o && (clearTimeout(o), o = null), t = m(), _(), e = m() - t));
    };

    "undefined" != typeof window && "undefined" != typeof window.addEventListener && ["resize", "scroll", "touchmove"].forEach(function (t) {
      window.addEventListener(t, i);
    });
  }();

  var z = {
    center: "center",
    left: "right",
    right: "left"
  },
      L = {
    middle: "middle",
    top: "bottom",
    bottom: "top"
  },
      Y = {
    top: 0,
    left: 0,
    middle: "50%",
    center: "50%",
    bottom: "100%",
    right: "100%"
  },
      H = function H(t, e) {
    var o = t.left,
        i = t.top;
    return "auto" === o && (o = z[e.left]), "auto" === i && (i = L[e.top]), {
      left: o,
      top: i
    };
  },
      F = function F(t) {
    var e = t.left,
        o = t.top;
    return "undefined" != typeof Y[t.left] && (e = Y[t.left]), "undefined" != typeof Y[t.top] && (o = Y[t.top]), {
      left: e,
      top: o
    };
  },
      X = function X(t) {
    var e = t.split(" "),
        o = M(e, 2),
        i = o[0],
        n = o[1];
    return {
      top: i,
      left: n
    };
  },
      j = X,
      N = function () {
    function t(e) {
      var o = this;
      i(this, t), this.position = this.position.bind(this), B.push(this), this.history = [], this.setOptions(e, !1), C.modules.forEach(function (t) {
        "undefined" != typeof t.initialize && t.initialize.call(o);
      }), this.position();
    }

    return w(t, [{
      key: "getClass",
      value: function value() {
        var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
            e = this.options.classes;
        return "undefined" != typeof e && e[t] ? this.options.classes[t] : this.options.classPrefix ? this.options.classPrefix + "-" + t : t;
      }
    }, {
      key: "setOptions",
      value: function value(t) {
        var e = this,
            o = arguments.length <= 1 || void 0 === arguments[1] ? !0 : arguments[1],
            i = {
          offset: "0 0",
          targetOffset: "0 0",
          targetAttachment: "auto auto",
          classPrefix: "tether"
        };
        this.options = f(i, t);
        var r = this.options,
            s = r.element,
            a = r.target,
            h = r.targetModifier;
        if (this.element = s, this.target = a, this.targetModifier = h, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function (t) {
          if ("undefined" == typeof e[t]) throw new Error("Tether Error: Both element and target must be defined");
          "undefined" != typeof e[t].jquery ? e[t] = e[t][0] : "string" == typeof e[t] && (e[t] = document.querySelector(e[t]));
        }), l(this.element, this.getClass("element")), this.options.addTargetClasses !== !1 && l(this.target, this.getClass("target")), !this.options.attachment) throw new Error("Tether Error: You must provide an attachment");
        this.targetAttachment = j(this.options.targetAttachment), this.attachment = j(this.options.attachment), this.offset = X(this.options.offset), this.targetOffset = X(this.options.targetOffset), "undefined" != typeof this.scrollParents && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParents = [this.target] : this.scrollParents = n(this.target), this.options.enabled !== !1 && this.enable(o);
      }
    }, {
      key: "getTargetBounds",
      value: function value() {
        if ("undefined" == typeof this.targetModifier) return r(this.target);

        if ("visible" === this.targetModifier) {
          if (this.target === document.body) return {
            top: pageYOffset,
            left: pageXOffset,
            height: innerHeight,
            width: innerWidth
          };
          var t = r(this.target),
              e = {
            height: t.height,
            width: t.width,
            top: t.top,
            left: t.left
          };
          return e.height = Math.min(e.height, t.height - (pageYOffset - t.top)), e.height = Math.min(e.height, t.height - (t.top + t.height - (pageYOffset + innerHeight))), e.height = Math.min(innerHeight, e.height), e.height -= 2, e.width = Math.min(e.width, t.width - (pageXOffset - t.left)), e.width = Math.min(e.width, t.width - (t.left + t.width - (pageXOffset + innerWidth))), e.width = Math.min(innerWidth, e.width), e.width -= 2, e.top < pageYOffset && (e.top = pageYOffset), e.left < pageXOffset && (e.left = pageXOffset), e;
        }

        if ("scroll-handle" === this.targetModifier) {
          var t = void 0,
              o = this.target;
          o === document.body ? (o = document.documentElement, t = {
            left: pageXOffset,
            top: pageYOffset,
            height: innerHeight,
            width: innerWidth
          }) : t = r(o);
          var i = getComputedStyle(o),
              n = o.scrollWidth > o.clientWidth || [i.overflow, i.overflowX].indexOf("scroll") >= 0 || this.target !== document.body,
              s = 0;
          n && (s = 15);
          var a = t.height - parseFloat(i.borderTopWidth) - parseFloat(i.borderBottomWidth) - s,
              e = {
            width: 15,
            height: .975 * a * (a / o.scrollHeight),
            left: t.left + t.width - parseFloat(i.borderLeftWidth) - 15
          },
              f = 0;
          408 > a && this.target === document.body && (f = -11e-5 * Math.pow(a, 2) - .00727 * a + 22.58), this.target !== document.body && (e.height = Math.max(e.height, 24));
          var h = this.target.scrollTop / (o.scrollHeight - a);
          return e.top = h * (a - e.height - f) + t.top + parseFloat(i.borderTopWidth), this.target === document.body && (e.height = Math.max(e.height, 24)), e;
        }
      }
    }, {
      key: "clearCache",
      value: function value() {
        this._cache = {};
      }
    }, {
      key: "cache",
      value: function value(t, e) {
        return "undefined" == typeof this._cache && (this._cache = {}), "undefined" == typeof this._cache[t] && (this._cache[t] = e.call(this)), this._cache[t];
      }
    }, {
      key: "enable",
      value: function value() {
        var t = this,
            e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
        this.options.addTargetClasses !== !1 && l(this.target, this.getClass("enabled")), l(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParents.forEach(function (e) {
          e !== document && e.addEventListener("scroll", t.position);
        }), e && this.position();
      }
    }, {
      key: "disable",
      value: function value() {
        var t = this;
        h(this.target, this.getClass("enabled")), h(this.element, this.getClass("enabled")), this.enabled = !1, "undefined" != typeof this.scrollParents && this.scrollParents.forEach(function (e) {
          e.removeEventListener("scroll", t.position);
        });
      }
    }, {
      key: "destroy",
      value: function value() {
        var t = this;
        this.disable(), B.forEach(function (e, o) {
          return e === t ? void B.splice(o, 1) : void 0;
        });
      }
    }, {
      key: "updateAttachClasses",
      value: function value(t, e) {
        var o = this;
        t = t || this.attachment, e = e || this.targetAttachment;
        var i = ["left", "top", "bottom", "right", "middle", "center"];
        "undefined" != typeof this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), "undefined" == typeof this._addAttachClasses && (this._addAttachClasses = []);
        var n = this._addAttachClasses;
        t.top && n.push(this.getClass("element-attached") + "-" + t.top), t.left && n.push(this.getClass("element-attached") + "-" + t.left), e.top && n.push(this.getClass("target-attached") + "-" + e.top), e.left && n.push(this.getClass("target-attached") + "-" + e.left);
        var r = [];
        i.forEach(function (t) {
          r.push(o.getClass("element-attached") + "-" + t), r.push(o.getClass("target-attached") + "-" + t);
        }), T(function () {
          "undefined" != typeof o._addAttachClasses && (c(o.element, o._addAttachClasses, r), o.options.addTargetClasses !== !1 && c(o.target, o._addAttachClasses, r), delete o._addAttachClasses);
        });
      }
    }, {
      key: "position",
      value: function value() {
        var t = this,
            e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];

        if (this.enabled) {
          this.clearCache();
          var o = H(this.targetAttachment, this.attachment);
          this.updateAttachClasses(this.attachment, o);
          var i = this.cache("element-bounds", function () {
            return r(t.element);
          }),
              n = i.width,
              f = i.height;

          if (0 === n && 0 === f && "undefined" != typeof this.lastSize) {
            var h = this.lastSize;
            n = h.width, f = h.height;
          } else this.lastSize = {
            width: n,
            height: f
          };

          var l = this.cache("target-bounds", function () {
            return t.getTargetBounds();
          }),
              d = l,
              u = y(F(this.attachment), {
            width: n,
            height: f
          }),
              p = y(F(o), d),
              c = y(this.offset, {
            width: n,
            height: f
          }),
              g = y(this.targetOffset, d);
          u = v(u, c), p = v(p, g);

          for (var m = l.left + p.left - u.left, b = l.top + p.top - u.top, w = 0; w < C.modules.length; ++w) {
            var O = C.modules[w],
                E = O.position.call(this, {
              left: m,
              top: b,
              targetAttachment: o,
              targetPos: l,
              elementPos: i,
              offset: u,
              targetOffset: p,
              manualOffset: c,
              manualTargetOffset: g,
              scrollbarSize: A,
              attachment: this.attachment
            });
            if (E === !1) return !1;
            "undefined" != typeof E && "object" == typeof E && (b = E.top, m = E.left);
          }

          var x = {
            page: {
              top: b,
              left: m
            },
            viewport: {
              top: b - pageYOffset,
              bottom: pageYOffset - b - f + innerHeight,
              left: m - pageXOffset,
              right: pageXOffset - m - n + innerWidth
            }
          },
              A = void 0;
          return document.body.scrollWidth > window.innerWidth && (A = this.cache("scrollbar-size", a), x.viewport.bottom -= A.height), document.body.scrollHeight > window.innerHeight && (A = this.cache("scrollbar-size", a), x.viewport.right -= A.width), (-1 === ["", "static"].indexOf(document.body.style.position) || -1 === ["", "static"].indexOf(document.body.parentElement.style.position)) && (x.page.bottom = document.body.scrollHeight - b - f, x.page.right = document.body.scrollWidth - m - n), "undefined" != typeof this.options.optimizations && this.options.optimizations.moveElement !== !1 && "undefined" == typeof this.targetModifier && !function () {
            var e = t.cache("target-offsetparent", function () {
              return s(t.target);
            }),
                o = t.cache("target-offsetparent-bounds", function () {
              return r(e);
            }),
                i = getComputedStyle(e),
                n = o,
                a = {};

            if (["Top", "Left", "Bottom", "Right"].forEach(function (t) {
              a[t.toLowerCase()] = parseFloat(i["border" + t + "Width"]);
            }), o.right = document.body.scrollWidth - o.left - n.width + a.right, o.bottom = document.body.scrollHeight - o.top - n.height + a.bottom, x.page.top >= o.top + a.top && x.page.bottom >= o.bottom && x.page.left >= o.left + a.left && x.page.right >= o.right) {
              var f = e.scrollTop,
                  h = e.scrollLeft;
              x.offset = {
                top: x.page.top - o.top + f - a.top,
                left: x.page.left - o.left + h - a.left
              };
            }
          }(), this.move(x), this.history.unshift(x), this.history.length > 3 && this.history.pop(), e && S(), !0;
        }
      }
    }, {
      key: "move",
      value: function value(t) {
        var e = this;

        if ("undefined" != typeof this.element.parentNode) {
          var o = {};

          for (var i in t) {
            o[i] = {};

            for (var n in t[i]) {
              for (var r = !1, a = 0; a < this.history.length; ++a) {
                var h = this.history[a];

                if ("undefined" != typeof h[i] && !g(h[i][n], t[i][n])) {
                  r = !0;
                  break;
                }
              }

              r || (o[i][n] = !0);
            }
          }

          var l = {
            top: "",
            left: "",
            right: "",
            bottom: ""
          },
              d = function d(t, o) {
            var i = "undefined" != typeof e.options.optimizations,
                n = i ? e.options.optimizations.gpu : null;

            if (n !== !1) {
              var r = void 0,
                  s = void 0;
              t.top ? (l.top = 0, r = o.top) : (l.bottom = 0, r = -o.bottom), t.left ? (l.left = 0, s = o.left) : (l.right = 0, s = -o.right), l[k] = "translateX(" + Math.round(s) + "px) translateY(" + Math.round(r) + "px)", "msTransform" !== k && (l[k] += " translateZ(0)");
            } else t.top ? l.top = o.top + "px" : l.bottom = o.bottom + "px", t.left ? l.left = o.left + "px" : l.right = o.right + "px";
          },
              u = !1;

          if ((o.page.top || o.page.bottom) && (o.page.left || o.page.right) ? (l.position = "absolute", d(o.page, t.page)) : (o.viewport.top || o.viewport.bottom) && (o.viewport.left || o.viewport.right) ? (l.position = "fixed", d(o.viewport, t.viewport)) : "undefined" != typeof o.offset && o.offset.top && o.offset.left ? !function () {
            l.position = "absolute";
            var i = e.cache("target-offsetparent", function () {
              return s(e.target);
            });
            s(e.element) !== i && T(function () {
              e.element.parentNode.removeChild(e.element), i.appendChild(e.element);
            }), d(o.offset, t.offset), u = !0;
          }() : (l.position = "absolute", d({
            top: !0,
            left: !0
          }, t.page)), !u) {
            for (var p = !0, c = this.element.parentNode; c && "BODY" !== c.tagName;) {
              if ("static" !== getComputedStyle(c).position) {
                p = !1;
                break;
              }

              c = c.parentNode;
            }

            p || (this.element.parentNode.removeChild(this.element), document.body.appendChild(this.element));
          }

          var m = {},
              v = !1;

          for (var n in l) {
            var y = l[n],
                b = this.element.style[n];
            b !== y && (v = !0, m[n] = y);
          }

          v && T(function () {
            f(e.element.style, m);
          });
        }
      }
    }]), t;
  }();

  N.modules = [], C.position = _;

  var R = f(N, C),
      M = function () {
    function t(t, e) {
      var o = [],
          i = !0,
          n = !1,
          r = void 0;

      try {
        for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); i = !0) {
          ;
        }
      } catch (f) {
        n = !0, r = f;
      } finally {
        try {
          !i && a["return"] && a["return"]();
        } finally {
          if (n) throw r;
        }
      }

      return o;
    }

    return function (e, o) {
      if (Array.isArray(e)) return e;
      if (Symbol.iterator in Object(e)) return t(e, o);
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }(),
      P = C.Utils,
      r = P.getBounds,
      f = P.extend,
      c = P.updateClasses,
      T = P.defer,
      U = ["left", "top", "right", "bottom"];

  C.modules.push({
    position: function position(t) {
      var e = this,
          o = t.top,
          i = t.left,
          n = t.targetAttachment;
      if (!this.options.constraints) return !0;
      var s = this.cache("element-bounds", function () {
        return r(e.element);
      }),
          a = s.height,
          h = s.width;

      if (0 === h && 0 === a && "undefined" != typeof this.lastSize) {
        var l = this.lastSize;
        h = l.width, a = l.height;
      }

      var d = this.cache("target-bounds", function () {
        return e.getTargetBounds();
      }),
          u = d.height,
          p = d.width,
          g = [this.getClass("pinned"), this.getClass("out-of-bounds")];
      this.options.constraints.forEach(function (t) {
        var e = t.outOfBoundsClass,
            o = t.pinnedClass;
        e && g.push(e), o && g.push(o);
      }), g.forEach(function (t) {
        ["left", "top", "right", "bottom"].forEach(function (e) {
          g.push(t + "-" + e);
        });
      });
      var m = [],
          v = f({}, n),
          y = f({}, this.attachment);
      return this.options.constraints.forEach(function (t) {
        var r = t.to,
            s = t.attachment,
            f = t.pin;
        "undefined" == typeof s && (s = "");
        var l = void 0,
            d = void 0;

        if (s.indexOf(" ") >= 0) {
          var c = s.split(" "),
              g = M(c, 2);
          d = g[0], l = g[1];
        } else l = d = s;

        var w = b(e, r);
        ("target" === d || "both" === d) && (o < w[1] && "top" === v.top && (o += u, v.top = "bottom"), o + a > w[3] && "bottom" === v.top && (o -= u, v.top = "top")), "together" === d && ("top" === v.top && ("bottom" === y.top && o < w[1] ? (o += u, v.top = "bottom", o += a, y.top = "top") : "top" === y.top && o + a > w[3] && o - (a - u) >= w[1] && (o -= a - u, v.top = "bottom", y.top = "bottom")), "bottom" === v.top && ("top" === y.top && o + a > w[3] ? (o -= u, v.top = "top", o -= a, y.top = "bottom") : "bottom" === y.top && o < w[1] && o + (2 * a - u) <= w[3] && (o += a - u, v.top = "top", y.top = "top")), "middle" === v.top && (o + a > w[3] && "top" === y.top ? (o -= a, y.top = "bottom") : o < w[1] && "bottom" === y.top && (o += a, y.top = "top"))), ("target" === l || "both" === l) && (i < w[0] && "left" === v.left && (i += p, v.left = "right"), i + h > w[2] && "right" === v.left && (i -= p, v.left = "left")), "together" === l && (i < w[0] && "left" === v.left ? "right" === y.left ? (i += p, v.left = "right", i += h, y.left = "left") : "left" === y.left && (i += p, v.left = "right", i -= h, y.left = "right") : i + h > w[2] && "right" === v.left ? "left" === y.left ? (i -= p, v.left = "left", i -= h, y.left = "right") : "right" === y.left && (i -= p, v.left = "left", i += h, y.left = "left") : "center" === v.left && (i + h > w[2] && "left" === y.left ? (i -= h, y.left = "right") : i < w[0] && "right" === y.left && (i += h, y.left = "left"))), ("element" === d || "both" === d) && (o < w[1] && "bottom" === y.top && (o += a, y.top = "top"), o + a > w[3] && "top" === y.top && (o -= a, y.top = "bottom")), ("element" === l || "both" === l) && (i < w[0] && ("right" === y.left ? (i += h, y.left = "left") : "center" === y.left && (i += h / 2, y.left = "left")), i + h > w[2] && ("left" === y.left ? (i -= h, y.left = "right") : "center" === y.left && (i -= h / 2, y.left = "right"))), "string" == typeof f ? f = f.split(",").map(function (t) {
          return t.trim();
        }) : f === !0 && (f = ["top", "left", "right", "bottom"]), f = f || [];
        var C = [],
            O = [];
        o < w[1] && (f.indexOf("top") >= 0 ? (o = w[1], C.push("top")) : O.push("top")), o + a > w[3] && (f.indexOf("bottom") >= 0 ? (o = w[3] - a, C.push("bottom")) : O.push("bottom")), i < w[0] && (f.indexOf("left") >= 0 ? (i = w[0], C.push("left")) : O.push("left")), i + h > w[2] && (f.indexOf("right") >= 0 ? (i = w[2] - h, C.push("right")) : O.push("right")), C.length && !function () {
          var t = void 0;
          t = "undefined" != typeof e.options.pinnedClass ? e.options.pinnedClass : e.getClass("pinned"), m.push(t), C.forEach(function (e) {
            m.push(t + "-" + e);
          });
        }(), O.length && !function () {
          var t = void 0;
          t = "undefined" != typeof e.options.outOfBoundsClass ? e.options.outOfBoundsClass : e.getClass("out-of-bounds"), m.push(t), O.forEach(function (e) {
            m.push(t + "-" + e);
          });
        }(), (C.indexOf("left") >= 0 || C.indexOf("right") >= 0) && (y.left = v.left = !1), (C.indexOf("top") >= 0 || C.indexOf("bottom") >= 0) && (y.top = v.top = !1), (v.top !== n.top || v.left !== n.left || y.top !== e.attachment.top || y.left !== e.attachment.left) && e.updateAttachClasses(y, v);
      }), T(function () {
        e.options.addTargetClasses !== !1 && c(e.target, m, g), c(e.element, m, g);
      }), {
        top: o,
        left: i
      };
    }
  });
  var P = C.Utils,
      r = P.getBounds,
      c = P.updateClasses,
      T = P.defer;
  C.modules.push({
    position: function position(t) {
      var e = this,
          o = t.top,
          i = t.left,
          n = this.cache("element-bounds", function () {
        return r(e.element);
      }),
          s = n.height,
          a = n.width,
          f = this.getTargetBounds(),
          h = o + s,
          l = i + a,
          d = [];
      o <= f.bottom && h >= f.top && ["left", "right"].forEach(function (t) {
        var e = f[t];
        (e === i || e === l) && d.push(t);
      }), i <= f.right && l >= f.left && ["top", "bottom"].forEach(function (t) {
        var e = f[t];
        (e === o || e === h) && d.push(t);
      });
      var u = [],
          p = [],
          g = ["left", "top", "right", "bottom"];
      return u.push(this.getClass("abutted")), g.forEach(function (t) {
        u.push(e.getClass("abutted") + "-" + t);
      }), d.length && p.push(this.getClass("abutted")), d.forEach(function (t) {
        p.push(e.getClass("abutted") + "-" + t);
      }), T(function () {
        e.options.addTargetClasses !== !1 && c(e.target, p, u), c(e.element, p, u);
      }), !0;
    }
  });

  var M = function () {
    function t(t, e) {
      var o = [],
          i = !0,
          n = !1,
          r = void 0;

      try {
        for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); i = !0) {
          ;
        }
      } catch (f) {
        n = !0, r = f;
      } finally {
        try {
          !i && a["return"] && a["return"]();
        } finally {
          if (n) throw r;
        }
      }

      return o;
    }

    return function (e, o) {
      if (Array.isArray(e)) return e;
      if (Symbol.iterator in Object(e)) return t(e, o);
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }();

  return C.modules.push({
    position: function position(t) {
      var e = t.top,
          o = t.left;

      if (this.options.shift) {
        var i = this.options.shift;
        "function" == typeof this.options.shift && (i = this.options.shift.call(this, {
          top: e,
          left: o
        }));
        var n = void 0,
            r = void 0;

        if ("string" == typeof i) {
          i = i.split(" "), i[1] = i[1] || i[0];
          var s = i,
              a = M(s, 2);
          n = a[0], r = a[1], n = parseFloat(n, 10), r = parseFloat(r, 10);
        } else n = i.top, r = i.left;

        return e += n, o += r, {
          top: e,
          left: o
        };
      }
    }
  }), R;
});

/***/ })

/******/ });
//# sourceMappingURL=tether-35618af4bf0a0e779204.js.map