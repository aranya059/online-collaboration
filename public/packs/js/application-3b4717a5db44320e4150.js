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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/assets/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/channels sync recursive _channel\\.js$":
/*!************************************************!*\
  !*** ./app/assets/channels sync _channel\.js$ ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./app/assets/channels sync recursive _channel\\.js$";

/***/ }),

/***/ "./app/assets/channels/index.js":
/*!**************************************!*\
  !*** ./app/assets/channels/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.
var channels = __webpack_require__("./app/assets/channels sync recursive _channel\\.js$");

channels.keys().forEach(channels);

/***/ }),

/***/ "./app/assets/packs/application.js":
/*!*****************************************!*\
  !*** ./app/assets/packs/application.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rails/ujs */ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js");
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rails_ujs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rails/activestorage */ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js");
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rails_activestorage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! channels */ "./app/assets/channels/index.js");
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(channels__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stylesheets_application_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stylesheets/application.scss */ "./app/assets/stylesheets/application.scss");
/* harmony import */ var _stylesheets_application_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_application_scss__WEBPACK_IMPORTED_MODULE_3__);
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.




__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

__webpack_require__(/*! packs/tether.min */ "./app/assets/packs/tether.min.js");

__webpack_require__(/*! packs/moment.min */ "./app/assets/packs/moment.min.js");

__webpack_require__(/*! packs/spin.min */ "./app/assets/packs/spin.min.js");

__webpack_require__(/*! packs/toastr.min */ "./app/assets/packs/toastr.min.js");

__webpack_require__(/*! packs/jquery.slimscroll.min */ "./app/assets/packs/jquery.slimscroll.min.js");

__webpack_require__(/*! packs/ladda.jquery.min */ "./app/assets/packs/ladda.jquery.min.js");

__webpack_require__(/*! packs/nprogress */ "./app/assets/packs/nprogress.js");

__webpack_require__(/*! packs/select2.full.min */ "./app/assets/packs/select2.full.min.js");

__webpack_require__(/*! packs/jquery.datatables.min */ "./app/assets/packs/jquery.datatables.min.js");

__webpack_require__(/*! packs/datatables.bootstrap4.min */ "./app/assets/packs/datatables.bootstrap4.min.js");

__webpack_require__(/*! packs/datatables.responsive.min */ "./app/assets/packs/datatables.responsive.min.js");

__webpack_require__(/*! packs/simplebar.min */ "./app/assets/packs/simplebar.min.js");

__webpack_require__(/*! packs/sleek_bundle */ "./app/assets/packs/sleek_bundle.js");

__webpack_require__(/*! packs/global-functions */ "./app/assets/packs/global-functions.js");

__webpack_require__(/*! packs/global-configure.js.erb */ "./app/assets/packs/global-configure.js.erb");

__webpack_require__(/*! packs/datatable-configure */ "./app/assets/packs/datatable-configure.js");


_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default.a.start();
_rails_activestorage__WEBPACK_IMPORTED_MODULE_1__["start"]();

/***/ }),

/***/ "./app/assets/packs/datatable-configure.js":
/*!*************************************************!*\
  !*** ./app/assets/packs/datatable-configure.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  datatable_configure();
});

function initialize_search_button(settings, json) {
  var searchField = $(settings.nTableWrapper).find("input[type='search']");
  $(settings.nTableWrapper).find('select').addClass('custom-select custom-select-sm form-control form-control-sm');
  searchField.addClass('form-control form-control-sm');
  var input = $(settings.nTableWrapper).find('.dataTables_filter input').unbind(),
      self = settings.oInstance.api(),
      $searchButton = $('<button class="btn btn-sm btn-success search-button" id="search-button">').text('search').append('<i class="mdi mdi-search-web pl-1">').click(function () {
    self.search(input.val()).draw();
  }),
      $clearButton = $('<button class="btn btn-sm btn-secondary" id="clear-button">').text('clear').append('<i class="mdi mdi-close pl-1">').click(function () {
    input.val('');
    $searchButton.click();
  });
  $(settings.nTableWrapper).find('.dataTables_filter').append($('<div class="btn-group btn-group-sm dataTable-filter-buttons pl-2">'));
  $(settings.nTableWrapper).find('.dataTable-filter-buttons').append($searchButton, $clearButton);
  searchField.on('keyup', function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      $(settings.nTableWrapper).find('.search-button').click();
    }
  });
}

function datatable_configure() {
  $('#responsive-data-table').DataTable({
    initComplete: function initComplete(settings, json) {
      initialize_search_button(settings, json);
    },
    "aLengthMenu": [[10, 20, 30, 50, 75, -1], [10, 20, 30, 50, 75, "All"]],
    "pageLength": 20,
    "order": [[0, "desc"]],
    "aoColumnDefs": [{
      'bSortable': false,
      'aTargets': ['nosort']
    }],
    "stateSave": true,
    pagingType: 'numbers',
    "dom": '<"row justify-content-between top-information"lf>rt<"row justify-content-between bottom-information"ip><"clear">'
  });
  $('#responsive-data-table-show, .responsive-data-table-show').DataTable({
    initComplete: function initComplete(settings, json) {
      initialize_search_button(settings, json);
    },
    "aLengthMenu": [[10, 20, 30, 50, 75, -1], [10, 20, 30, 50, 75, "All"]],
    "pageLength": 20,
    "aoColumnDefs": [{
      'bSortable': false,
      'aTargets': ['nosort']
    }],
    "stateSave": true,
    pagingType: 'numbers',
    retrieve: true,
    "dom": '<"row justify-content-between top-information"lf>rt<"row justify-content-between bottom-information"ip><"clear">'
  });
  $('#responsive-data-table-ajax').DataTable({
    initComplete: function initComplete(settings, json) {
      initialize_search_button(settings, json);
    },
    "aLengthMenu": [[10, 20, 30, 50, 75, -1], [10, 20, 30, 50, 75, "All"]],
    "pageLength": 20,
    "order": [[0, "desc"]],
    "aoColumnDefs": [{
      'bSortable': false,
      'aTargets': ['nosort']
    }],
    "dom": '<"row justify-content-between top-information"lf>rt<"row justify-content-between bottom-information"ip><"clear">',
    stateSave: true,
    processing: true,
    serverSide: true,
    responsive: true,
    pagingType: 'numbers',
    ajax: $(this).data('url')
  });
}

function configure_show_datatable() {
  $('.responsive-data-table-show').DataTable({
    initComplete: function initComplete(settings, json) {
      initialize_search_button(settings, json);
    },
    "aLengthMenu": [[10, 20, 30, 50, 75, -1], [10, 20, 30, 50, 75, "All"]],
    "pageLength": 20,
    "aoColumnDefs": [{
      'bSortable': false,
      'aTargets': ['nosort']
    }],
    "stateSave": true,
    retrieve: true,
    pagingType: 'numbers',
    "dom": '<"row justify-content-between top-information"lf>rt<"row justify-content-between bottom-information"ip><"clear">'
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))))

/***/ }),

/***/ "./app/assets/packs/datatables.bootstrap4.min.js":
/*!*******************************************************!*\
  !*** ./app/assets/packs/datatables.bootstrap4.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 DataTables Bootstrap 4 integration
 ©2011-2017 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};

$jscomp.findInternal = function (a, b, c) {
  a instanceof String && (a = String(a));

  for (var e = a.length, d = 0; d < e; d++) {
    var k = a[d];
    if (b.call(c, k, d, a)) return {
      i: d,
      v: k
    };
  }

  return {
    i: -1,
    v: void 0
  };
};

$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
  a != Array.prototype && a != Object.prototype && (a[b] = c.value);
};

$jscomp.getGlobal = function (a) {
  return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a;
};

$jscomp.global = $jscomp.getGlobal(this);

$jscomp.polyfill = function (a, b, c, e) {
  if (b) {
    c = $jscomp.global;
    a = a.split(".");

    for (e = 0; e < a.length - 1; e++) {
      var d = a[e];
      d in c || (c[d] = {});
      c = c[d];
    }

    a = a[a.length - 1];
    e = c[a];
    b = b(e);
    b != e && null != b && $jscomp.defineProperty(c, a, {
      configurable: !0,
      writable: !0,
      value: b
    });
  }
};

$jscomp.polyfill("Array.prototype.find", function (a) {
  return a ? a : function (a, c) {
    return $jscomp.findInternal(this, a, c).v;
  };
}, "es6", "es3");

(function (a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'datatables.net'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_RESULT__ = (function (b) {
    return a(b, window, document);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(function (a, b, c, e) {
  var d = a.fn.dataTable;
  a.extend(!0, d.defaults, {
    dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
    renderer: "bootstrap"
  });
  a.extend(d.ext.classes, {
    sWrapper: "dataTables_wrapper dt-bootstrap4",
    sFilterInput: "form-control form-control-sm",
    sLengthSelect: "custom-select custom-select-sm form-control form-control-sm",
    sProcessing: "dataTables_processing card",
    sPageButton: "paginate_button page-item"
  });

  d.ext.renderer.pageButton.bootstrap = function (b, l, v, w, m, r) {
    var k = new d.Api(b),
        x = b.oClasses,
        n = b.oLanguage.oPaginate,
        y = b.oLanguage.oAria.paginate || {},
        g,
        h,
        t = 0,
        u = function u(c, d) {
      var e,
          l = function l(b) {
        b.preventDefault();
        a(b.currentTarget).hasClass("disabled") || k.page() == b.data.action || k.page(b.data.action).draw("page");
      };

      var q = 0;

      for (e = d.length; q < e; q++) {
        var f = d[q];
        if (a.isArray(f)) u(c, f);else {
          h = g = "";

          switch (f) {
            case "ellipsis":
              g = "&#x2026;";
              h = "disabled";
              break;

            case "first":
              g = n.sFirst;
              h = f + (0 < m ? "" : " disabled");
              break;

            case "previous":
              g = n.sPrevious;
              h = f + (0 < m ? "" : " disabled");
              break;

            case "next":
              g = n.sNext;
              h = f + (m < r - 1 ? "" : " disabled");
              break;

            case "last":
              g = n.sLast;
              h = f + (m < r - 1 ? "" : " disabled");
              break;

            default:
              g = f + 1, h = m === f ? "active" : "";
          }

          if (g) {
            var p = a("<li>", {
              "class": x.sPageButton + " " + h,
              id: 0 === v && "string" === typeof f ? b.sTableId + "_" + f : null
            }).append(a("<a>", {
              href: "#",
              "aria-controls": b.sTableId,
              "aria-label": y[f],
              "data-dt-idx": t,
              tabindex: b.iTabIndex,
              "class": "page-link"
            }).html(g)).appendTo(c);

            b.oApi._fnBindAction(p, {
              action: f
            }, l);

            t++;
          }
        }
      }
    };

    try {
      var p = a(l).find(c.activeElement).data("dt-idx");
    } catch (z) {}

    u(a(l).empty().html('<ul class="pagination"/>').children("ul"), w);
    p !== e && a(l).find("[data-dt-idx=" + p + "]").focus();
  };

  return d;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/assets/packs/datatables.responsive.min.js":
/*!*******************************************************!*\
  !*** ./app/assets/packs/datatables.responsive.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 Responsive 2.2.3
 2014-2018 SpryMedia Ltd - datatables.net/license
*/
(function (d) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'datatables.net'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_RESULT__ = (function (l) {
    return d(l, window, document);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(function (d, l, j, q) {
  function t(a, b, c) {
    var e = b + "-" + c;
    if (n[e]) return n[e];

    for (var d = [], a = a.cell(b, c).node().childNodes, b = 0, c = a.length; b < c; b++) {
      d.push(a[b]);
    }

    return n[e] = d;
  }

  function r(a, b, d) {
    var e = b + "-" + d;

    if (n[e]) {
      for (var a = a.cell(b, d).node(), d = n[e][0].parentNode.childNodes, b = [], f = 0, g = d.length; f < g; f++) {
        b.push(d[f]);
      }

      d = 0;

      for (f = b.length; d < f; d++) {
        a.appendChild(b[d]);
      }

      n[e] = q;
    }
  }

  var o = d.fn.dataTable,
      i = function i(a, b) {
    if (!o.versionCheck || !o.versionCheck("1.10.10")) throw "DataTables Responsive requires DataTables 1.10.10 or newer";
    this.s = {
      dt: new o.Api(a),
      columns: [],
      current: []
    };
    this.s.dt.settings()[0].responsive || (b && "string" === typeof b.details ? b.details = {
      type: b.details
    } : b && !1 === b.details ? b.details = {
      type: !1
    } : b && !0 === b.details && (b.details = {
      type: "inline"
    }), this.c = d.extend(!0, {}, i.defaults, o.defaults.responsive, b), a.responsive = this, this._constructor());
  };

  d.extend(i.prototype, {
    _constructor: function _constructor() {
      var a = this,
          b = this.s.dt,
          c = b.settings()[0],
          e = d(l).width();
      b.settings()[0]._responsive = this;
      d(l).on("resize.dtr orientationchange.dtr", o.util.throttle(function () {
        var b = d(l).width();
        b !== e && (a._resize(), e = b);
      }));

      c.oApi._fnCallbackReg(c, "aoRowCreatedCallback", function (e) {
        -1 !== d.inArray(!1, a.s.current) && d(">td, >th", e).each(function (e) {
          e = b.column.index("toData", e);
          !1 === a.s.current[e] && d(this).css("display", "none");
        });
      });

      b.on("destroy.dtr", function () {
        b.off(".dtr");
        d(b.table().body()).off(".dtr");
        d(l).off("resize.dtr orientationchange.dtr");
        d.each(a.s.current, function (b, e) {
          !1 === e && a._setColumnVis(b, !0);
        });
      });
      this.c.breakpoints.sort(function (a, b) {
        return a.width < b.width ? 1 : a.width > b.width ? -1 : 0;
      });

      this._classLogic();

      this._resizeAuto();

      c = this.c.details;
      !1 !== c.type && (a._detailsInit(), b.on("column-visibility.dtr", function () {
        a._timer && clearTimeout(a._timer);
        a._timer = setTimeout(function () {
          a._timer = null;

          a._classLogic();

          a._resizeAuto();

          a._resize();

          a._redrawChildren();
        }, 100);
      }), b.on("draw.dtr", function () {
        a._redrawChildren();
      }), d(b.table().node()).addClass("dtr-" + c.type));
      b.on("column-reorder.dtr", function () {
        a._classLogic();

        a._resizeAuto();

        a._resize();
      });
      b.on("column-sizing.dtr", function () {
        a._resizeAuto();

        a._resize();
      });
      b.on("preXhr.dtr", function () {
        var e = [];
        b.rows().every(function () {
          this.child.isShown() && e.push(this.id(true));
        });
        b.one("draw.dtr", function () {
          a._resizeAuto();

          a._resize();

          b.rows(e).every(function () {
            a._detailsDisplay(this, false);
          });
        });
      });
      b.on("init.dtr", function () {
        a._resizeAuto();

        a._resize();

        d.inArray(false, a.s.current) && b.columns.adjust();
      });

      this._resize();
    },
    _columnsVisiblity: function _columnsVisiblity(a) {
      var b = this.s.dt,
          c = this.s.columns,
          e,
          f,
          g = c.map(function (a, b) {
        return {
          columnIdx: b,
          priority: a.priority
        };
      }).sort(function (a, b) {
        return a.priority !== b.priority ? a.priority - b.priority : a.columnIdx - b.columnIdx;
      }),
          h = d.map(c, function (e, c) {
        return !1 === b.column(c).visible() ? "not-visible" : e.auto && null === e.minWidth ? !1 : !0 === e.auto ? "-" : -1 !== d.inArray(a, e.includeIn);
      }),
          m = 0;
      e = 0;

      for (f = h.length; e < f; e++) {
        !0 === h[e] && (m += c[e].minWidth);
      }

      e = b.settings()[0].oScroll;
      e = e.sY || e.sX ? e.iBarWidth : 0;
      m = b.table().container().offsetWidth - e - m;
      e = 0;

      for (f = h.length; e < f; e++) {
        c[e].control && (m -= c[e].minWidth);
      }

      var s = !1;
      e = 0;

      for (f = g.length; e < f; e++) {
        var k = g[e].columnIdx;
        "-" === h[k] && !c[k].control && c[k].minWidth && (s || 0 > m - c[k].minWidth ? (s = !0, h[k] = !1) : h[k] = !0, m -= c[k].minWidth);
      }

      g = !1;
      e = 0;

      for (f = c.length; e < f; e++) {
        if (!c[e].control && !c[e].never && !1 === h[e]) {
          g = !0;
          break;
        }
      }

      e = 0;

      for (f = c.length; e < f; e++) {
        c[e].control && (h[e] = g), "not-visible" === h[e] && (h[e] = !1);
      }

      -1 === d.inArray(!0, h) && (h[0] = !0);
      return h;
    },
    _classLogic: function _classLogic() {
      var a = this,
          b = this.c.breakpoints,
          c = this.s.dt,
          e = c.columns().eq(0).map(function (a) {
        var b = this.column(a),
            e = b.header().className,
            a = c.settings()[0].aoColumns[a].responsivePriority;
        a === q && (b = d(b.header()).data("priority"), a = b !== q ? 1 * b : 1E4);
        return {
          className: e,
          includeIn: [],
          auto: !1,
          control: !1,
          never: e.match(/\bnever\b/) ? !0 : !1,
          priority: a
        };
      }),
          f = function f(a, b) {
        var c = e[a].includeIn;
        -1 === d.inArray(b, c) && c.push(b);
      },
          g = function g(d, c, _g, k) {
        if (_g) {
          if ("max-" === _g) {
            k = a._find(c).width;
            c = 0;

            for (_g = b.length; c < _g; c++) {
              b[c].width <= k && f(d, b[c].name);
            }
          } else if ("min-" === _g) {
            k = a._find(c).width;
            c = 0;

            for (_g = b.length; c < _g; c++) {
              b[c].width >= k && f(d, b[c].name);
            }
          } else {
            if ("not-" === _g) {
              c = 0;

              for (_g = b.length; c < _g; c++) {
                -1 === b[c].name.indexOf(k) && f(d, b[c].name);
              }
            }
          }
        } else e[d].includeIn.push(c);
      };

      e.each(function (a, e) {
        for (var c = a.className.split(" "), f = !1, i = 0, l = c.length; i < l; i++) {
          var j = d.trim(c[i]);

          if ("all" === j) {
            f = !0;
            a.includeIn = d.map(b, function (a) {
              return a.name;
            });
            return;
          }

          if ("none" === j || a.never) {
            f = !0;
            return;
          }

          if ("control" === j) {
            f = !0;
            a.control = !0;
            return;
          }

          d.each(b, function (a, b) {
            var d = b.name.split("-"),
                c = j.match(RegExp("(min\\-|max\\-|not\\-)?(" + d[0] + ")(\\-[_a-zA-Z0-9])?"));
            c && (f = !0, c[2] === d[0] && c[3] === "-" + d[1] ? g(e, b.name, c[1], c[2] + c[3]) : c[2] === d[0] && !c[3] && g(e, b.name, c[1], c[2]));
          });
        }

        f || (a.auto = !0);
      });
      this.s.columns = e;
    },
    _detailsDisplay: function _detailsDisplay(a, b) {
      var c = this,
          e = this.s.dt,
          f = this.c.details;

      if (f && !1 !== f.type) {
        var g = f.display(a, b, function () {
          return f.renderer(e, a[0], c._detailsObj(a[0]));
        });
        (!0 === g || !1 === g) && d(e.table().node()).triggerHandler("responsive-display.dt", [e, a, g, b]);
      }
    },
    _detailsInit: function _detailsInit() {
      var a = this,
          b = this.s.dt,
          c = this.c.details;
      "inline" === c.type && (c.target = "td:first-child, th:first-child");
      b.on("draw.dtr", function () {
        a._tabIndexes();
      });

      a._tabIndexes();

      d(b.table().body()).on("keyup.dtr", "td, th", function (a) {
        a.keyCode === 13 && d(this).data("dtr-keyboard") && d(this).click();
      });
      var e = c.target;
      d(b.table().body()).on("click.dtr mousedown.dtr mouseup.dtr", "string" === typeof e ? e : "td, th", function (c) {
        if (d(b.table().node()).hasClass("collapsed") && d.inArray(d(this).closest("tr").get(0), b.rows().nodes().toArray()) !== -1) {
          if (typeof e === "number") {
            var g = e < 0 ? b.columns().eq(0).length + e : e;
            if (b.cell(this).index().column !== g) return;
          }

          g = b.row(d(this).closest("tr"));
          c.type === "click" ? a._detailsDisplay(g, false) : c.type === "mousedown" ? d(this).css("outline", "none") : c.type === "mouseup" && d(this).blur().css("outline", "");
        }
      });
    },
    _detailsObj: function _detailsObj(a) {
      var b = this,
          c = this.s.dt;
      return d.map(this.s.columns, function (e, d) {
        if (!e.never && !e.control) return {
          title: c.settings()[0].aoColumns[d].sTitle,
          data: c.cell(a, d).render(b.c.orthogonal),
          hidden: c.column(d).visible() && !b.s.current[d],
          columnIndex: d,
          rowIndex: a
        };
      });
    },
    _find: function _find(a) {
      for (var b = this.c.breakpoints, c = 0, e = b.length; c < e; c++) {
        if (b[c].name === a) return b[c];
      }
    },
    _redrawChildren: function _redrawChildren() {
      var a = this,
          b = this.s.dt;
      b.rows({
        page: "current"
      }).iterator("row", function (c, e) {
        b.row(e);

        a._detailsDisplay(b.row(e), !0);
      });
    },
    _resize: function _resize() {
      var a = this,
          b = this.s.dt,
          c = d(l).width(),
          e = this.c.breakpoints,
          f = e[0].name,
          g = this.s.columns,
          h,
          m = this.s.current.slice();

      for (h = e.length - 1; 0 <= h; h--) {
        if (c <= e[h].width) {
          f = e[h].name;
          break;
        }
      }

      var i = this._columnsVisiblity(f);

      this.s.current = i;
      e = !1;
      h = 0;

      for (c = g.length; h < c; h++) {
        if (!1 === i[h] && !g[h].never && !g[h].control && !1 === !b.column(h).visible()) {
          e = !0;
          break;
        }
      }

      d(b.table().node()).toggleClass("collapsed", e);
      var k = !1,
          j = 0;
      b.columns().eq(0).each(function (b, c) {
        !0 === i[c] && j++;
        i[c] !== m[c] && (k = !0, a._setColumnVis(b, i[c]));
      });
      k && (this._redrawChildren(), d(b.table().node()).trigger("responsive-resize.dt", [b, this.s.current]), 0 === b.page.info().recordsDisplay && d("td", b.table().body()).eq(0).attr("colspan", j));
    },
    _resizeAuto: function _resizeAuto() {
      var a = this.s.dt,
          b = this.s.columns;

      if (this.c.auto && -1 !== d.inArray(!0, d.map(b, function (a) {
        return a.auto;
      }))) {
        d.isEmptyObject(n) || d.each(n, function (b) {
          b = b.split("-");
          r(a, 1 * b[0], 1 * b[1]);
        });
        a.table().node();
        var c = a.table().node().cloneNode(!1),
            e = d(a.table().header().cloneNode(!1)).appendTo(c),
            f = d(a.table().body()).clone(!1, !1).empty().appendTo(c),
            g = a.columns().header().filter(function (b) {
          return a.column(b).visible();
        }).to$().clone(!1).css("display", "table-cell").css("min-width", 0);
        d(f).append(d(a.rows({
          page: "current"
        }).nodes()).clone(!1)).find("th, td").css("display", "");

        if (f = a.table().footer()) {
          var f = d(f.cloneNode(!1)).appendTo(c),
              h = a.columns().footer().filter(function (b) {
            return a.column(b).visible();
          }).to$().clone(!1).css("display", "table-cell");
          d("<tr/>").append(h).appendTo(f);
        }

        d("<tr/>").append(g).appendTo(e);
        "inline" === this.c.details.type && d(c).addClass("dtr-inline collapsed");
        d(c).find("[name]").removeAttr("name");
        d(c).css("position", "relative");
        c = d("<div/>").css({
          width: 1,
          height: 1,
          overflow: "hidden",
          clear: "both"
        }).append(c);
        c.insertBefore(a.table().node());
        g.each(function (c) {
          c = a.column.index("fromVisible", c);
          b[c].minWidth = this.offsetWidth || 0;
        });
        c.remove();
      }
    },
    _setColumnVis: function _setColumnVis(a, b) {
      var c = this.s.dt,
          e = b ? "" : "none";
      d(c.column(a).header()).css("display", e);
      d(c.column(a).footer()).css("display", e);
      c.column(a).nodes().to$().css("display", e);
      d.isEmptyObject(n) || c.cells(null, a).indexes().each(function (a) {
        r(c, a.row, a.column);
      });
    },
    _tabIndexes: function _tabIndexes() {
      var a = this.s.dt,
          b = a.cells({
        page: "current"
      }).nodes().to$(),
          c = a.settings()[0],
          e = this.c.details.target;
      b.filter("[data-dtr-keyboard]").removeData("[data-dtr-keyboard]");
      "number" === typeof e ? a.cells(null, e, {
        page: "current"
      }).nodes().to$().attr("tabIndex", c.iTabIndex).data("dtr-keyboard", 1) : ("td:first-child, th:first-child" === e && (e = ">td:first-child, >th:first-child"), d(e, a.rows({
        page: "current"
      }).nodes()).attr("tabIndex", c.iTabIndex).data("dtr-keyboard", 1));
    }
  });
  i.breakpoints = [{
    name: "desktop",
    width: Infinity
  }, {
    name: "tablet-l",
    width: 1024
  }, {
    name: "tablet-p",
    width: 768
  }, {
    name: "mobile-l",
    width: 480
  }, {
    name: "mobile-p",
    width: 320
  }];
  i.display = {
    childRow: function childRow(a, b, c) {
      if (b) {
        if (d(a.node()).hasClass("parent")) return a.child(c(), "child").show(), !0;
      } else {
        if (a.child.isShown()) return a.child(!1), d(a.node()).removeClass("parent"), !1;
        a.child(c(), "child").show();
        d(a.node()).addClass("parent");
        return !0;
      }
    },
    childRowImmediate: function childRowImmediate(a, b, c) {
      if (!b && a.child.isShown() || !a.responsive.hasHidden()) return a.child(!1), d(a.node()).removeClass("parent"), !1;
      a.child(c(), "child").show();
      d(a.node()).addClass("parent");
      return !0;
    },
    modal: function modal(a) {
      return function (b, c, e) {
        if (c) d("div.dtr-modal-content").empty().append(e());else {
          var f = function f() {
            g.remove();
            d(j).off("keypress.dtr");
          },
              g = d('<div class="dtr-modal"/>').append(d('<div class="dtr-modal-display"/>').append(d('<div class="dtr-modal-content"/>').append(e())).append(d('<div class="dtr-modal-close">&times;</div>').click(function () {
            f();
          }))).append(d('<div class="dtr-modal-background"/>').click(function () {
            f();
          })).appendTo("body");

          d(j).on("keyup.dtr", function (a) {
            27 === a.keyCode && (a.stopPropagation(), f());
          });
        }
        a && a.header && d("div.dtr-modal-content").prepend("<h2>" + a.header(b) + "</h2>");
      };
    }
  };
  var n = {};
  i.renderer = {
    listHiddenNodes: function listHiddenNodes() {
      return function (a, b, c) {
        var e = d('<ul data-dtr-index="' + b + '" class="dtr-details"/>'),
            f = !1;
        d.each(c, function (b, c) {
          c.hidden && (d('<li data-dtr-index="' + c.columnIndex + '" data-dt-row="' + c.rowIndex + '" data-dt-column="' + c.columnIndex + '"><span class="dtr-title">' + c.title + "</span> </li>").append(d('<span class="dtr-data"/>').append(t(a, c.rowIndex, c.columnIndex))).appendTo(e), f = !0);
        });
        return f ? e : !1;
      };
    },
    listHidden: function listHidden() {
      return function (a, b, c) {
        return (a = d.map(c, function (a) {
          return a.hidden ? '<li data-dtr-index="' + a.columnIndex + '" data-dt-row="' + a.rowIndex + '" data-dt-column="' + a.columnIndex + '"><span class="dtr-title">' + a.title + '</span> <span class="dtr-data">' + a.data + "</span></li>" : "";
        }).join("")) ? d('<ul data-dtr-index="' + b + '" class="dtr-details"/>').append(a) : !1;
      };
    },
    tableAll: function tableAll(a) {
      a = d.extend({
        tableClass: ""
      }, a);
      return function (b, c, e) {
        b = d.map(e, function (a) {
          return '<tr data-dt-row="' + a.rowIndex + '" data-dt-column="' + a.columnIndex + '"><td>' + a.title + ":</td> <td>" + a.data + "</td></tr>";
        }).join("");
        return d('<table class="' + a.tableClass + ' dtr-details" width="100%"/>').append(b);
      };
    }
  };
  i.defaults = {
    breakpoints: i.breakpoints,
    auto: !0,
    details: {
      display: i.display.childRow,
      renderer: i.renderer.listHidden(),
      target: 0,
      type: "inline"
    },
    orthogonal: "display"
  };
  var p = d.fn.dataTable.Api;
  p.register("responsive()", function () {
    return this;
  });
  p.register("responsive.index()", function (a) {
    a = d(a);
    return {
      column: a.data("dtr-index"),
      row: a.parent().data("dtr-index")
    };
  });
  p.register("responsive.rebuild()", function () {
    return this.iterator("table", function (a) {
      a._responsive && a._responsive._classLogic();
    });
  });
  p.register("responsive.recalc()", function () {
    return this.iterator("table", function (a) {
      a._responsive && (a._responsive._resizeAuto(), a._responsive._resize());
    });
  });
  p.register("responsive.hasHidden()", function () {
    var a = this.context[0];
    return a._responsive ? -1 !== d.inArray(!1, a._responsive.s.current) : !1;
  });
  p.registerPlural("columns().responsiveHidden()", "column().responsiveHidden()", function () {
    return this.iterator("column", function (a, b) {
      return a._responsive ? a._responsive.s.current[b] : !1;
    }, 1);
  });
  i.version = "2.2.3";
  d.fn.dataTable.Responsive = i;
  d.fn.DataTable.Responsive = i;
  d(j).on("preInit.dt.dtr", function (a, b) {
    if ("dt" === a.namespace && (d(b.nTable).hasClass("responsive") || d(b.nTable).hasClass("dt-responsive") || b.oInit.responsive || o.defaults.responsive)) {
      var c = b.oInit.responsive;
      !1 !== c && new i(b, d.isPlainObject(c) ? c : {});
    }
  });
  return i;
});

/***/ }),

/***/ "./app/assets/packs/global-configure.js.erb":
/*!**************************************************!*\
  !*** ./app/assets/packs/global-configure.js.erb ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var SIDEBAR_MINIMIZED = 'MINIMIZED';
var SIDEBAR_MAXIMIZED = 'MAXIMIZED';
$(document).ready(function () {
  set_searchable_select();
  makeAccordionOpenedAfterRefresh();
  setPreviewModal();
  setRequiredFields();
  $('.btn').on('click', function () {
    $(this).find("span[role='status']").removeClass('d-none');
    $(this).find("i[role='status']").addClass('d-none');
    setTimeout(function () {
      $('.btn').find("i[role='status']").removeClass('d-none');
      $('.btn').find("span[role='status']").addClass('d-none');
    }, 1000);
  });
  $(this).on("wheel", "input[type=number]", function (e) {
    $(this).blur();
  });
  NProgress.configure({
    showSpinner: false
  }); // NProgress.start();

  $('#sidebar-toggler').on('click', function () {
    if (window.matchMedia("(max-width: 767px)").matches) {
      localStorage.removeItem("sidebarMinimizer"); // The viewport is less than 768 pixels wide
    } else {
      var minimizer_status = localStorage.getItem('sidebarMinimizer');

      if (minimizer_status === null) {
        body.addClass('sidebar-minified');
        body.removeClass('sidebar-minified-out');
        localStorage.setItem('sidebarMinimizer', SIDEBAR_MINIMIZED);
      } else {
        body.removeClass('sidebar-minified');
        body.addClass('sidebar-minified-out');
        localStorage.removeItem("sidebarMinimizer");
      }
    }
  });
  var body = $('body');

  if (window.matchMedia("(max-width: 767px)").matches) {
    localStorage.removeItem("sidebarMinimizer"); // The viewport is less than 768 pixels wide
  } else {
    if (localStorage.getItem('sidebarMinimizer') === SIDEBAR_MINIMIZED) {
      body.addClass('sidebar-minified');
      body.removeClass('sidebar-minified-out');
    } else {
      body.addClass('sidebar-minified-out');
      body.removeClass('sidebar-minified');
    }
  } // image show instantly when select


  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $(input).nextAll(".form-text").children().attr('src', e.target.result);
        $(input).nextAll(".form-text").children().removeAttr('hidden');
      };

      reader.readAsDataURL(input.files[0]);
    }
  }

  $('.form-control-file').change(function () {
    readURL(this);
  });
});

function setRequiredFields() {
  $('input, .form-control, .form-radio-control').each(function () {
    if ($(this).data('required') === true) {
      $(this).attr('required', 'required');
    }
  });
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
}); // $(document).ajaxStart(function() {
//     Pace.restart();
// });

$(document).ajaxStop(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

function setPreviewModal() {
  $('body').on('click', '[data-target="#previewModal"]', function () {
    var preview_modal = $("#previewModal");
    preview_modal.addClass('show');
    preview_modal.show();
    preview_modal.css('background', '#00000094');
  });
  $("[data-dismiss='modal']").on('click', function () {
    $('.modal').hide();
    $('.modal').removeClass('show');
    $("#previewModal").css('background', '');
  });
}

function makeAccordionOpenedAfterRefresh() {
  var selectedCollapse;
  var selectedCollapseData = JSON.parse(sessionStorage.getItem('selectedCollapseData'));

  try {
    selectedCollapse = selectedCollapseData[btoa(window.location.pathname)];
  } catch (e) {
    selectedCollapse = null;
  }

  if (selectedCollapse != null) {
    $('.accordion .collapse').removeClass('show');
    $(selectedCollapse).addClass('show');
    $(selectedCollapse).addClass('glow');
    setTimeout(function () {
      $(selectedCollapse).removeClass('glow');
    }, 3000);
    var parent_collapse = $(selectedCollapse).parentsUntil('div.collapse').last().parent();
    var depth = 0;
    parent_collapse.addClass('show');

    while (parent_collapse[0] !== undefined && parent_collapse[0].nodeName.toLowerCase() !== '#document' && depth < 5) {
      parent_collapse = parent_collapse.parentsUntil('div.collapse').last().parent();
      parent_collapse.addClass('show');
      depth += 1;
    }
  }

  $('.accordion .btn-link').on('click', function () {
    var target = $(this).data('target');
    var selected_collapse;
    var selectedCollapseData = JSON.parse(sessionStorage.getItem('selectedCollapseData'));
    var key = btoa(window.location.pathname);

    if (selectedCollapseData !== null) {
      selected_collapse = selectedCollapseData;
    } else {
      selected_collapse = {};
    }

    if (selected_collapse[key] === target) {
      selected_collapse[key] = null;
    } else {
      selected_collapse[key] = target;
    }

    sessionStorage.setItem('selectedCollapseData', JSON.stringify(selected_collapse));
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))))

/***/ }),

/***/ "./app/assets/packs/global-functions.js":
/*!**********************************************!*\
  !*** ./app/assets/packs/global-functions.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/**
 * @return {number}
 */
function GetValue(field) {
  return Number(field.val());
}

function SetValue(field, value) {
  field.val(value);
}

function ResetField(field) {
  field.val('');
}

function HideField(field) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  field.find('.form-control').removeAttr('required');
  field.hide(time);
}

function ResetAndHideField(field) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  removeMatrixRows(field);
  removeHiddenRequired(field);
  field.hide(time);
  field.find('.custom-input-section').hide(time);
  resetSurveyField(field);
}

function resetSurveyField(field) {
  field.find('.form-control').each(function () {
    if (!$(this).hasClass('read-only') && $(this).val() !== '') {
      $(this).val('');
      triggerSearchableSelects();
    }
  });
  field.find('.form-radio-control').each(function () {
    if ($(this).prop('checked') !== undefined && $(this).prop('checked') === true) {
      $(this).prop('checked', false);
    }
  });
  field.find('.form-check-input').each(function () {
    if ($(this).prop('checked') !== undefined && $(this).prop('checked') === true) {
      $(this).prop('checked', false);
    }
  });
}

function ResetAndHideField_custom_input(field) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  removeHiddenRequired(field);
  field.hide(time);
  field.find('.form-control').val('');
}

function ShowField(field) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  field.show(time);
  addVisibleRequired(field);
}

function ShowField_custom_input(field) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  field.show(time);
  addVisibleRequired(field);
}

function addVisibleRequired(field) {
  field.find('.form-control').each(function () {
    if ($(this).data('required') === true && $(this).is(":visible") && ($(this).attr('required') === undefined || $(this).attr('required') === false)) {
      $(this).attr('required', 'required');
    }
  });
  field.find('.form-radio-control').each(function () {
    if ($(this).data('required') === true && $(this).is(":visible") && ($(this).attr('required') === undefined || $(this).attr('required') === false)) {
      $(this).attr('required', 'required');
    }
  });
}

function removeHiddenRequired(field) {
  field.find('.form-control').each(function () {
    $(this).removeAttr('required');
  });
  field.find('.form-radio-control').each(function () {
    $(this).removeAttr('required');
  });
}

function removeMatrixRows(field) {
  field.find('.matrix-row').each(function () {
    $(this).remove();
  });
}

function triggerSearchableSelects() {
  $('.searchable-select').each(function () {
    if ($(this).val() === '' && $(this).next().find('.select2-selection__rendered').attr('title') !== undefined) {
      $(this).trigger('change', [true]);
    }
  });
}

function bindDropdown(field) {
  field.select2({
    placeholder: "please select",
    allowClear: true,
    tags: false
  });
  field.on('change', function (e, state) {
    if (typeof state != 'undefined' && state) {
      return false;
    }

    if ($(this).data('remote')) {
      $.ajax({
        url: $(this).data('url'),
        type: "GET",
        data: {
          id: $(this).val()
        }
      });
    }
  });
  $('.select2').css('width', '100%');
}

function set_searchable_select() {
  $(".searchable-select").each(function () {
    var placeholder = $(this).attr('placeholder');

    if (placeholder === undefined) {
      placeholder = "please select";
    }

    $(this).select2({
      placeholder: placeholder,
      allowClear: true,
      tags: false
    });

    if ($(this).data('remote')) {
      $(this).on('change', function (e, state) {
        if (typeof state != 'undefined' && state) {
          return false;
        }

        $.ajax({
          url: $(this).data('url'),
          type: "GET",
          data: {
            id: $(this).val()
          }
        });
      });
    }
  });
  $('.select2').css('width', '100%');
}

$.fn.presence = function () {
  return this.length !== 0;
};

function SanitizeJson(json_data) {
  json_data = JSON.stringify(json_data);
  json_data = json_data.replace(/\\n/g, "\\n").replace(/\\'/g, "\\'").replace(/\\"/g, '\\"').replace(/\\&/g, "\\&").replace(/\\r/g, "\\r").replace(/\\t/g, "\\t").replace(/\\b/g, "\\b").replace(/\\f/g, "\\f");
  json_data = json_data.replace(/[\u0000-\u0019]+/g, "");
  return json_data;
}

function b64_to_utf8(str) {
  return decodeURIComponent(escape(window.atob(str)));
}

function delay(fn, ms) {
  var timer = 0;
  return function () {
    clearTimeout(timer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    timer = setTimeout(fn.bind.apply(fn, [this].concat(args)), ms || 0);
  };
}

function treatAsUTC(date) {
  var result = new Date(date);
  result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
  return result;
}

function daysBetween(startDate, endDate) {
  var millisecondsPerDay = 24 * 60 * 60 * 1000;
  return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay;
}

function getLocalDate(d) {
  var offset_day = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  try {
    if (offset_day !== 0) {
      d.setDate(d.getDate() + offset_day);
    }

    var date = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    return date + "/" + month + "/" + year;
  } catch (e) {
    return '';
  }
}

function getDatesBetween(oDate1, oDate2) {
  var aDates = [];
  var currentDate = new Date(oDate1.getTime());
  var endDate = new Date(oDate2.getTime());
  endDate.setDate(oDate2.getDate() + 1);

  while (currentDate <= endDate) {
    aDates.push(getLocalDate(new Date(currentDate)));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return aDates;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))))

/***/ }),

/***/ "./app/assets/packs/jquery.datatables.min.js":
/*!***************************************************!*\
  !*** ./app/assets/packs/jquery.datatables.min.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
   Copyright 2008-2019 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 DataTables 1.10.20
 ©2008-2019 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};

$jscomp.findInternal = function (f, z, y) {
  f instanceof String && (f = String(f));

  for (var p = f.length, H = 0; H < p; H++) {
    var L = f[H];
    if (z.call(y, L, H, f)) return {
      i: H,
      v: L
    };
  }

  return {
    i: -1,
    v: void 0
  };
};

$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (f, z, y) {
  f != Array.prototype && f != Object.prototype && (f[z] = y.value);
};

$jscomp.getGlobal = function (f) {
  return "undefined" != typeof window && window === f ? f : "undefined" != typeof global && null != global ? global : f;
};

$jscomp.global = $jscomp.getGlobal(this);

$jscomp.polyfill = function (f, z, y, p) {
  if (z) {
    y = $jscomp.global;
    f = f.split(".");

    for (p = 0; p < f.length - 1; p++) {
      var H = f[p];
      H in y || (y[H] = {});
      y = y[H];
    }

    f = f[f.length - 1];
    p = y[f];
    z = z(p);
    z != p && null != z && $jscomp.defineProperty(y, f, {
      configurable: !0,
      writable: !0,
      value: z
    });
  }
};

$jscomp.polyfill("Array.prototype.find", function (f) {
  return f ? f : function (f, y) {
    return $jscomp.findInternal(this, f, y).v;
  };
}, "es6", "es3");

(function (f) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_RESULT__ = (function (z) {
    return f(z, window, document);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(function (f, z, y, p) {
  function H(a) {
    var b,
        c,
        d = {};
    f.each(a, function (e, h) {
      (b = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ") && (c = e.replace(b[0], b[2].toLowerCase()), d[c] = e, "o" === b[1] && H(a[e]));
    });
    a._hungarianMap = d;
  }

  function L(a, b, c) {
    a._hungarianMap || H(a);
    var d;
    f.each(b, function (e, h) {
      d = a._hungarianMap[e];
      d === p || !c && b[d] !== p || ("o" === d.charAt(0) ? (b[d] || (b[d] = {}), f.extend(!0, b[d], b[e]), L(a[d], b[d], c)) : b[d] = b[e]);
    });
  }

  function Ga(a) {
    var b = q.defaults.oLanguage,
        c = b.sDecimal;
    c && Ha(c);

    if (a) {
      var d = a.sZeroRecords;
      !a.sEmptyTable && d && "No data available in table" === b.sEmptyTable && M(a, a, "sZeroRecords", "sEmptyTable");
      !a.sLoadingRecords && d && "Loading..." === b.sLoadingRecords && M(a, a, "sZeroRecords", "sLoadingRecords");
      a.sInfoThousands && (a.sThousands = a.sInfoThousands);
      (a = a.sDecimal) && c !== a && Ha(a);
    }
  }

  function jb(a) {
    F(a, "ordering", "bSort");
    F(a, "orderMulti", "bSortMulti");
    F(a, "orderClasses", "bSortClasses");
    F(a, "orderCellsTop", "bSortCellsTop");
    F(a, "order", "aaSorting");
    F(a, "orderFixed", "aaSortingFixed");
    F(a, "paging", "bPaginate");
    F(a, "pagingType", "sPaginationType");
    F(a, "pageLength", "iDisplayLength");
    F(a, "searching", "bFilter");
    "boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" : "");
    "boolean" === typeof a.scrollX && (a.scrollX = a.scrollX ? "100%" : "");
    if (a = a.aoSearchCols) for (var b = 0, c = a.length; b < c; b++) {
      a[b] && L(q.models.oSearch, a[b]);
    }
  }

  function kb(a) {
    F(a, "orderable", "bSortable");
    F(a, "orderData", "aDataSort");
    F(a, "orderSequence", "asSorting");
    F(a, "orderDataType", "sortDataType");
    var b = a.aDataSort;
    "number" !== typeof b || f.isArray(b) || (a.aDataSort = [b]);
  }

  function lb(a) {
    if (!q.__browser) {
      var b = {};
      q.__browser = b;
      var c = f("<div/>").css({
        position: "fixed",
        top: 0,
        left: -1 * f(z).scrollLeft(),
        height: 1,
        width: 1,
        overflow: "hidden"
      }).append(f("<div/>").css({
        position: "absolute",
        top: 1,
        left: 1,
        width: 100,
        overflow: "scroll"
      }).append(f("<div/>").css({
        width: "100%",
        height: 10
      }))).appendTo("body"),
          d = c.children(),
          e = d.children();
      b.barWidth = d[0].offsetWidth - d[0].clientWidth;
      b.bScrollOversize = 100 === e[0].offsetWidth && 100 !== d[0].clientWidth;
      b.bScrollbarLeft = 1 !== Math.round(e.offset().left);
      b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1;
      c.remove();
    }

    f.extend(a.oBrowser, q.__browser);
    a.oScroll.iBarWidth = q.__browser.barWidth;
  }

  function mb(a, b, c, d, e, h) {
    var g = !1;

    if (c !== p) {
      var k = c;
      g = !0;
    }

    for (; d !== e;) {
      a.hasOwnProperty(d) && (k = g ? b(k, a[d], d, a) : a[d], g = !0, d += h);
    }

    return k;
  }

  function Ia(a, b) {
    var c = q.defaults.column,
        d = a.aoColumns.length;
    c = f.extend({}, q.models.oColumn, c, {
      nTh: b ? b : y.createElement("th"),
      sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "",
      aDataSort: c.aDataSort ? c.aDataSort : [d],
      mData: c.mData ? c.mData : d,
      idx: d
    });
    a.aoColumns.push(c);
    c = a.aoPreSearchCols;
    c[d] = f.extend({}, q.models.oSearch, c[d]);
    ma(a, d, f(b).data());
  }

  function ma(a, b, c) {
    b = a.aoColumns[b];
    var d = a.oClasses,
        e = f(b.nTh);

    if (!b.sWidthOrig) {
      b.sWidthOrig = e.attr("width") || null;
      var h = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
      h && (b.sWidthOrig = h[1]);
    }

    c !== p && null !== c && (kb(c), L(q.defaults.column, c, !0), c.mDataProp === p || c.mData || (c.mData = c.mDataProp), c.sType && (b._sManualType = c.sType), c.className && !c.sClass && (c.sClass = c.className), c.sClass && e.addClass(c.sClass), f.extend(b, c), M(b, c, "sWidth", "sWidthOrig"), c.iDataSort !== p && (b.aDataSort = [c.iDataSort]), M(b, c, "aDataSort"));
    var g = b.mData,
        k = U(g),
        l = b.mRender ? U(b.mRender) : null;

    c = function c(a) {
      return "string" === typeof a && -1 !== a.indexOf("@");
    };

    b._bAttrSrc = f.isPlainObject(g) && (c(g.sort) || c(g.type) || c(g.filter));
    b._setter = null;

    b.fnGetData = function (a, b, c) {
      var d = k(a, b, p, c);
      return l && b ? l(d, b, a, c) : d;
    };

    b.fnSetData = function (a, b, c) {
      return Q(g)(a, b, c);
    };

    "number" !== typeof g && (a._rowReadObject = !0);
    a.oFeatures.bSort || (b.bSortable = !1, e.addClass(d.sSortableNone));
    a = -1 !== f.inArray("asc", b.asSorting);
    c = -1 !== f.inArray("desc", b.asSorting);
    b.bSortable && (a || c) ? a && !c ? (b.sSortingClass = d.sSortableAsc, b.sSortingClassJUI = d.sSortJUIAscAllowed) : !a && c ? (b.sSortingClass = d.sSortableDesc, b.sSortingClassJUI = d.sSortJUIDescAllowed) : (b.sSortingClass = d.sSortable, b.sSortingClassJUI = d.sSortJUI) : (b.sSortingClass = d.sSortableNone, b.sSortingClassJUI = "");
  }

  function aa(a) {
    if (!1 !== a.oFeatures.bAutoWidth) {
      var b = a.aoColumns;
      Ja(a);

      for (var c = 0, d = b.length; c < d; c++) {
        b[c].nTh.style.width = b[c].sWidth;
      }
    }

    b = a.oScroll;
    "" === b.sY && "" === b.sX || na(a);
    A(a, null, "column-sizing", [a]);
  }

  function ba(a, b) {
    a = oa(a, "bVisible");
    return "number" === typeof a[b] ? a[b] : null;
  }

  function ca(a, b) {
    a = oa(a, "bVisible");
    b = f.inArray(b, a);
    return -1 !== b ? b : null;
  }

  function W(a) {
    var b = 0;
    f.each(a.aoColumns, function (a, d) {
      d.bVisible && "none" !== f(d.nTh).css("display") && b++;
    });
    return b;
  }

  function oa(a, b) {
    var c = [];
    f.map(a.aoColumns, function (a, e) {
      a[b] && c.push(e);
    });
    return c;
  }

  function Ka(a) {
    var b = a.aoColumns,
        c = a.aoData,
        d = q.ext.type.detect,
        e,
        h,
        g;
    var k = 0;

    for (e = b.length; k < e; k++) {
      var f = b[k];
      var n = [];
      if (!f.sType && f._sManualType) f.sType = f._sManualType;else if (!f.sType) {
        var m = 0;

        for (h = d.length; m < h; m++) {
          var w = 0;

          for (g = c.length; w < g; w++) {
            n[w] === p && (n[w] = I(a, w, k, "type"));
            var u = d[m](n[w], a);
            if (!u && m !== d.length - 1) break;
            if ("html" === u) break;
          }

          if (u) {
            f.sType = u;
            break;
          }
        }

        f.sType || (f.sType = "string");
      }
    }
  }

  function nb(a, b, c, d) {
    var e,
        h,
        g,
        k = a.aoColumns;
    if (b) for (e = b.length - 1; 0 <= e; e--) {
      var l = b[e];
      var n = l.targets !== p ? l.targets : l.aTargets;
      f.isArray(n) || (n = [n]);
      var m = 0;

      for (h = n.length; m < h; m++) {
        if ("number" === typeof n[m] && 0 <= n[m]) {
          for (; k.length <= n[m];) {
            Ia(a);
          }

          d(n[m], l);
        } else if ("number" === typeof n[m] && 0 > n[m]) d(k.length + n[m], l);else if ("string" === typeof n[m]) {
          var w = 0;

          for (g = k.length; w < g; w++) {
            ("_all" == n[m] || f(k[w].nTh).hasClass(n[m])) && d(w, l);
          }
        }
      }
    }
    if (c) for (e = 0, a = c.length; e < a; e++) {
      d(e, c[e]);
    }
  }

  function R(a, b, c, d) {
    var e = a.aoData.length,
        h = f.extend(!0, {}, q.models.oRow, {
      src: c ? "dom" : "data",
      idx: e
    });
    h._aData = b;
    a.aoData.push(h);

    for (var g = a.aoColumns, k = 0, l = g.length; k < l; k++) {
      g[k].sType = null;
    }

    a.aiDisplayMaster.push(e);
    b = a.rowIdFn(b);
    b !== p && (a.aIds[b] = h);
    !c && a.oFeatures.bDeferRender || La(a, e, c, d);
    return e;
  }

  function pa(a, b) {
    var c;
    b instanceof f || (b = f(b));
    return b.map(function (b, e) {
      c = Ma(a, e);
      return R(a, c.data, e, c.cells);
    });
  }

  function I(a, b, c, d) {
    var e = a.iDraw,
        h = a.aoColumns[c],
        g = a.aoData[b]._aData,
        k = h.sDefaultContent,
        f = h.fnGetData(g, d, {
      settings: a,
      row: b,
      col: c
    });
    if (f === p) return a.iDrawError != e && null === k && (O(a, 0, "Requested unknown parameter " + ("function" == typeof h.mData ? "{function}" : "'" + h.mData + "'") + " for row " + b + ", column " + c, 4), a.iDrawError = e), k;
    if ((f === g || null === f) && null !== k && d !== p) f = k;else if ("function" === typeof f) return f.call(g);
    return null === f && "display" == d ? "" : f;
  }

  function ob(a, b, c, d) {
    a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, {
      settings: a,
      row: b,
      col: c
    });
  }

  function Na(a) {
    return f.map(a.match(/(\\.|[^\.])+/g) || [""], function (a) {
      return a.replace(/\\\./g, ".");
    });
  }

  function U(a) {
    if (f.isPlainObject(a)) {
      var b = {};
      f.each(a, function (a, c) {
        c && (b[a] = U(c));
      });
      return function (a, c, h, g) {
        var d = b[c] || b._;
        return d !== p ? d(a, c, h, g) : a;
      };
    }

    if (null === a) return function (a) {
      return a;
    };
    if ("function" === typeof a) return function (b, c, h, g) {
      return a(b, c, h, g);
    };
    if ("string" !== typeof a || -1 === a.indexOf(".") && -1 === a.indexOf("[") && -1 === a.indexOf("(")) return function (b, c) {
      return b[a];
    };

    var c = function c(a, b, h) {
      if ("" !== h) {
        var d = Na(h);

        for (var e = 0, l = d.length; e < l; e++) {
          h = d[e].match(da);
          var n = d[e].match(X);

          if (h) {
            d[e] = d[e].replace(da, "");
            "" !== d[e] && (a = a[d[e]]);
            n = [];
            d.splice(0, e + 1);
            d = d.join(".");
            if (f.isArray(a)) for (e = 0, l = a.length; e < l; e++) {
              n.push(c(a[e], b, d));
            }
            a = h[0].substring(1, h[0].length - 1);
            a = "" === a ? n : n.join(a);
            break;
          } else if (n) {
            d[e] = d[e].replace(X, "");
            a = a[d[e]]();
            continue;
          }

          if (null === a || a[d[e]] === p) return p;
          a = a[d[e]];
        }
      }

      return a;
    };

    return function (b, e) {
      return c(b, e, a);
    };
  }

  function Q(a) {
    if (f.isPlainObject(a)) return Q(a._);
    if (null === a) return function () {};
    if ("function" === typeof a) return function (b, d, e) {
      a(b, "set", d, e);
    };
    if ("string" !== typeof a || -1 === a.indexOf(".") && -1 === a.indexOf("[") && -1 === a.indexOf("(")) return function (b, d) {
      b[a] = d;
    };

    var b = function b(a, d, e) {
      e = Na(e);
      var c = e[e.length - 1];

      for (var g, k, l = 0, n = e.length - 1; l < n; l++) {
        g = e[l].match(da);
        k = e[l].match(X);

        if (g) {
          e[l] = e[l].replace(da, "");
          a[e[l]] = [];
          c = e.slice();
          c.splice(0, l + 1);
          g = c.join(".");
          if (f.isArray(d)) for (k = 0, n = d.length; k < n; k++) {
            c = {}, b(c, d[k], g), a[e[l]].push(c);
          } else a[e[l]] = d;
          return;
        }

        k && (e[l] = e[l].replace(X, ""), a = a[e[l]](d));
        if (null === a[e[l]] || a[e[l]] === p) a[e[l]] = {};
        a = a[e[l]];
      }

      if (c.match(X)) a[c.replace(X, "")](d);else a[c.replace(da, "")] = d;
    };

    return function (c, d) {
      return b(c, d, a);
    };
  }

  function Oa(a) {
    return J(a.aoData, "_aData");
  }

  function qa(a) {
    a.aoData.length = 0;
    a.aiDisplayMaster.length = 0;
    a.aiDisplay.length = 0;
    a.aIds = {};
  }

  function ra(a, b, c) {
    for (var d = -1, e = 0, h = a.length; e < h; e++) {
      a[e] == b ? d = e : a[e] > b && a[e]--;
    }

    -1 != d && c === p && a.splice(d, 1);
  }

  function ea(a, b, c, d) {
    var e = a.aoData[b],
        h,
        g = function g(c, d) {
      for (; c.childNodes.length;) {
        c.removeChild(c.firstChild);
      }

      c.innerHTML = I(a, b, d, "display");
    };

    if ("dom" !== c && (c && "auto" !== c || "dom" !== e.src)) {
      var k = e.anCells;
      if (k) if (d !== p) g(k[d], d);else for (c = 0, h = k.length; c < h; c++) {
        g(k[c], c);
      }
    } else e._aData = Ma(a, e, d, d === p ? p : e._aData).data;

    e._aSortData = null;
    e._aFilterData = null;
    g = a.aoColumns;
    if (d !== p) g[d].sType = null;else {
      c = 0;

      for (h = g.length; c < h; c++) {
        g[c].sType = null;
      }

      Pa(a, e);
    }
  }

  function Ma(a, b, c, d) {
    var e = [],
        h = b.firstChild,
        g,
        k = 0,
        l,
        n = a.aoColumns,
        m = a._rowReadObject;
    d = d !== p ? d : m ? {} : [];

    var w = function w(a, b) {
      if ("string" === typeof a) {
        var c = a.indexOf("@");
        -1 !== c && (c = a.substring(c + 1), Q(a)(d, b.getAttribute(c)));
      }
    },
        u = function u(a) {
      if (c === p || c === k) g = n[k], l = f.trim(a.innerHTML), g && g._bAttrSrc ? (Q(g.mData._)(d, l), w(g.mData.sort, a), w(g.mData.type, a), w(g.mData.filter, a)) : m ? (g._setter || (g._setter = Q(g.mData)), g._setter(d, l)) : d[k] = l;
      k++;
    };

    if (h) for (; h;) {
      var q = h.nodeName.toUpperCase();
      if ("TD" == q || "TH" == q) u(h), e.push(h);
      h = h.nextSibling;
    } else for (e = b.anCells, h = 0, q = e.length; h < q; h++) {
      u(e[h]);
    }
    (b = b.firstChild ? b : b.nTr) && (b = b.getAttribute("id")) && Q(a.rowId)(d, b);
    return {
      data: d,
      cells: e
    };
  }

  function La(a, b, c, d) {
    var e = a.aoData[b],
        h = e._aData,
        g = [],
        k,
        l;

    if (null === e.nTr) {
      var n = c || y.createElement("tr");
      e.nTr = n;
      e.anCells = g;
      n._DT_RowIndex = b;
      Pa(a, e);
      var m = 0;

      for (k = a.aoColumns.length; m < k; m++) {
        var w = a.aoColumns[m];
        var p = (l = c ? !1 : !0) ? y.createElement(w.sCellType) : d[m];
        p._DT_CellIndex = {
          row: b,
          column: m
        };
        g.push(p);
        if (l || !(c && !w.mRender && w.mData === m || f.isPlainObject(w.mData) && w.mData._ === m + ".display")) p.innerHTML = I(a, b, m, "display");
        w.sClass && (p.className += " " + w.sClass);
        w.bVisible && !c ? n.appendChild(p) : !w.bVisible && c && p.parentNode.removeChild(p);
        w.fnCreatedCell && w.fnCreatedCell.call(a.oInstance, p, I(a, b, m), h, b, m);
      }

      A(a, "aoRowCreatedCallback", null, [n, h, b, g]);
    }

    e.nTr.setAttribute("role", "row");
  }

  function Pa(a, b) {
    var c = b.nTr,
        d = b._aData;

    if (c) {
      if (a = a.rowIdFn(d)) c.id = a;
      d.DT_RowClass && (a = d.DT_RowClass.split(" "), b.__rowc = b.__rowc ? ta(b.__rowc.concat(a)) : a, f(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
      d.DT_RowAttr && f(c).attr(d.DT_RowAttr);
      d.DT_RowData && f(c).data(d.DT_RowData);
    }
  }

  function pb(a) {
    var b,
        c,
        d = a.nTHead,
        e = a.nTFoot,
        h = 0 === f("th, td", d).length,
        g = a.oClasses,
        k = a.aoColumns;
    h && (c = f("<tr/>").appendTo(d));
    var l = 0;

    for (b = k.length; l < b; l++) {
      var n = k[l];
      var m = f(n.nTh).addClass(n.sClass);
      h && m.appendTo(c);
      a.oFeatures.bSort && (m.addClass(n.sSortingClass), !1 !== n.bSortable && (m.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId), Qa(a, n.nTh, l)));
      n.sTitle != m[0].innerHTML && m.html(n.sTitle);
      Ra(a, "header")(a, m, n, g);
    }

    h && fa(a.aoHeader, d);
    f(d).find(">tr").attr("role", "row");
    f(d).find(">tr>th, >tr>td").addClass(g.sHeaderTH);
    f(e).find(">tr>th, >tr>td").addClass(g.sFooterTH);
    if (null !== e) for (a = a.aoFooter[0], l = 0, b = a.length; l < b; l++) {
      n = k[l], n.nTf = a[l].cell, n.sClass && f(n.nTf).addClass(n.sClass);
    }
  }

  function ha(a, b, c) {
    var d,
        e,
        h = [],
        g = [],
        k = a.aoColumns.length;

    if (b) {
      c === p && (c = !1);
      var l = 0;

      for (d = b.length; l < d; l++) {
        h[l] = b[l].slice();
        h[l].nTr = b[l].nTr;

        for (e = k - 1; 0 <= e; e--) {
          a.aoColumns[e].bVisible || c || h[l].splice(e, 1);
        }

        g.push([]);
      }

      l = 0;

      for (d = h.length; l < d; l++) {
        if (a = h[l].nTr) for (; e = a.firstChild;) {
          a.removeChild(e);
        }
        e = 0;

        for (b = h[l].length; e < b; e++) {
          var n = k = 1;

          if (g[l][e] === p) {
            a.appendChild(h[l][e].cell);

            for (g[l][e] = 1; h[l + k] !== p && h[l][e].cell == h[l + k][e].cell;) {
              g[l + k][e] = 1, k++;
            }

            for (; h[l][e + n] !== p && h[l][e].cell == h[l][e + n].cell;) {
              for (c = 0; c < k; c++) {
                g[l + c][e + n] = 1;
              }

              n++;
            }

            f(h[l][e].cell).attr("rowspan", k).attr("colspan", n);
          }
        }
      }
    }
  }

  function S(a) {
    var b = A(a, "aoPreDrawCallback", "preDraw", [a]);
    if (-1 !== f.inArray(!1, b)) K(a, !1);else {
      b = [];
      var c = 0,
          d = a.asStripeClasses,
          e = d.length,
          h = a.oLanguage,
          g = a.iInitDisplayStart,
          k = "ssp" == D(a),
          l = a.aiDisplay;
      a.bDrawing = !0;
      g !== p && -1 !== g && (a._iDisplayStart = k ? g : g >= a.fnRecordsDisplay() ? 0 : g, a.iInitDisplayStart = -1);
      g = a._iDisplayStart;
      var n = a.fnDisplayEnd();
      if (a.bDeferLoading) a.bDeferLoading = !1, a.iDraw++, K(a, !1);else if (!k) a.iDraw++;else if (!a.bDestroying && !qb(a)) return;
      if (0 !== l.length) for (h = k ? a.aoData.length : n, k = k ? 0 : g; k < h; k++) {
        var m = l[k],
            w = a.aoData[m];
        null === w.nTr && La(a, m);
        var u = w.nTr;

        if (0 !== e) {
          var q = d[c % e];
          w._sRowStripe != q && (f(u).removeClass(w._sRowStripe).addClass(q), w._sRowStripe = q);
        }

        A(a, "aoRowCallback", null, [u, w._aData, c, k, m]);
        b.push(u);
        c++;
      } else c = h.sZeroRecords, 1 == a.iDraw && "ajax" == D(a) ? c = h.sLoadingRecords : h.sEmptyTable && 0 === a.fnRecordsTotal() && (c = h.sEmptyTable), b[0] = f("<tr/>", {
        "class": e ? d[0] : ""
      }).append(f("<td />", {
        valign: "top",
        colSpan: W(a),
        "class": a.oClasses.sRowEmpty
      }).html(c))[0];
      A(a, "aoHeaderCallback", "header", [f(a.nTHead).children("tr")[0], Oa(a), g, n, l]);
      A(a, "aoFooterCallback", "footer", [f(a.nTFoot).children("tr")[0], Oa(a), g, n, l]);
      d = f(a.nTBody);
      d.children().detach();
      d.append(f(b));
      A(a, "aoDrawCallback", "draw", [a]);
      a.bSorted = !1;
      a.bFiltered = !1;
      a.bDrawing = !1;
    }
  }

  function V(a, b) {
    var c = a.oFeatures,
        d = c.bFilter;
    c.bSort && rb(a);
    d ? ia(a, a.oPreviousSearch) : a.aiDisplay = a.aiDisplayMaster.slice();
    !0 !== b && (a._iDisplayStart = 0);
    a._drawHold = b;
    S(a);
    a._drawHold = !1;
  }

  function sb(a) {
    var b = a.oClasses,
        c = f(a.nTable);
    c = f("<div/>").insertBefore(c);
    var d = a.oFeatures,
        e = f("<div/>", {
      id: a.sTableId + "_wrapper",
      "class": b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter)
    });
    a.nHolding = c[0];
    a.nTableWrapper = e[0];
    a.nTableReinsertBefore = a.nTable.nextSibling;

    for (var h = a.sDom.split(""), g, k, l, n, m, p, u = 0; u < h.length; u++) {
      g = null;
      k = h[u];

      if ("<" == k) {
        l = f("<div/>")[0];
        n = h[u + 1];

        if ("'" == n || '"' == n) {
          m = "";

          for (p = 2; h[u + p] != n;) {
            m += h[u + p], p++;
          }

          "H" == m ? m = b.sJUIHeader : "F" == m && (m = b.sJUIFooter);
          -1 != m.indexOf(".") ? (n = m.split("."), l.id = n[0].substr(1, n[0].length - 1), l.className = n[1]) : "#" == m.charAt(0) ? l.id = m.substr(1, m.length - 1) : l.className = m;
          u += p;
        }

        e.append(l);
        e = f(l);
      } else if (">" == k) e = e.parent();else if ("l" == k && d.bPaginate && d.bLengthChange) g = tb(a);else if ("f" == k && d.bFilter) g = ub(a);else if ("r" == k && d.bProcessing) g = vb(a);else if ("t" == k) g = wb(a);else if ("i" == k && d.bInfo) g = xb(a);else if ("p" == k && d.bPaginate) g = yb(a);else if (0 !== q.ext.feature.length) for (l = q.ext.feature, p = 0, n = l.length; p < n; p++) {
        if (k == l[p].cFeature) {
          g = l[p].fnInit(a);
          break;
        }
      }

      g && (l = a.aanFeatures, l[k] || (l[k] = []), l[k].push(g), e.append(g));
    }

    c.replaceWith(e);
    a.nHolding = null;
  }

  function fa(a, b) {
    b = f(b).children("tr");
    var c, d, e;
    a.splice(0, a.length);
    var h = 0;

    for (e = b.length; h < e; h++) {
      a.push([]);
    }

    h = 0;

    for (e = b.length; h < e; h++) {
      var g = b[h];

      for (c = g.firstChild; c;) {
        if ("TD" == c.nodeName.toUpperCase() || "TH" == c.nodeName.toUpperCase()) {
          var k = 1 * c.getAttribute("colspan");
          var l = 1 * c.getAttribute("rowspan");
          k = k && 0 !== k && 1 !== k ? k : 1;
          l = l && 0 !== l && 1 !== l ? l : 1;
          var n = 0;

          for (d = a[h]; d[n];) {
            n++;
          }

          var m = n;
          var p = 1 === k ? !0 : !1;

          for (d = 0; d < k; d++) {
            for (n = 0; n < l; n++) {
              a[h + n][m + d] = {
                cell: c,
                unique: p
              }, a[h + n].nTr = g;
            }
          }
        }

        c = c.nextSibling;
      }
    }
  }

  function ua(a, b, c) {
    var d = [];
    c || (c = a.aoHeader, b && (c = [], fa(c, b)));
    b = 0;

    for (var e = c.length; b < e; b++) {
      for (var h = 0, g = c[b].length; h < g; h++) {
        !c[b][h].unique || d[h] && a.bSortCellsTop || (d[h] = c[b][h].cell);
      }
    }

    return d;
  }

  function va(a, b, c) {
    A(a, "aoServerParams", "serverParams", [b]);

    if (b && f.isArray(b)) {
      var d = {},
          e = /(.*?)\[\]$/;
      f.each(b, function (a, b) {
        (a = b.name.match(e)) ? (a = a[0], d[a] || (d[a] = []), d[a].push(b.value)) : d[b.name] = b.value;
      });
      b = d;
    }

    var h = a.ajax,
        g = a.oInstance,
        k = function k(b) {
      A(a, null, "xhr", [a, b, a.jqXHR]);
      c(b);
    };

    if (f.isPlainObject(h) && h.data) {
      var l = h.data;
      var n = "function" === typeof l ? l(b, a) : l;
      b = "function" === typeof l && n ? n : f.extend(!0, b, n);
      delete h.data;
    }

    n = {
      data: b,
      success: function success(b) {
        var c = b.error || b.sError;
        c && O(a, 0, c);
        a.json = b;
        k(b);
      },
      dataType: "json",
      cache: !1,
      type: a.sServerMethod,
      error: function error(b, c, d) {
        d = A(a, null, "xhr", [a, null, a.jqXHR]);
        -1 === f.inArray(!0, d) && ("parsererror" == c ? O(a, 0, "Invalid JSON response", 1) : 4 === b.readyState && O(a, 0, "Ajax error", 7));
        K(a, !1);
      }
    };
    a.oAjaxData = b;
    A(a, null, "preXhr", [a, b]);
    a.fnServerData ? a.fnServerData.call(g, a.sAjaxSource, f.map(b, function (a, b) {
      return {
        name: b,
        value: a
      };
    }), k, a) : a.sAjaxSource || "string" === typeof h ? a.jqXHR = f.ajax(f.extend(n, {
      url: h || a.sAjaxSource
    })) : "function" === typeof h ? a.jqXHR = h.call(g, b, k, a) : (a.jqXHR = f.ajax(f.extend(n, h)), h.data = l);
  }

  function qb(a) {
    return a.bAjaxDataGet ? (a.iDraw++, K(a, !0), va(a, zb(a), function (b) {
      Ab(a, b);
    }), !1) : !0;
  }

  function zb(a) {
    var b = a.aoColumns,
        c = b.length,
        d = a.oFeatures,
        e = a.oPreviousSearch,
        h = a.aoPreSearchCols,
        g = [],
        k = Y(a);
    var l = a._iDisplayStart;
    var n = !1 !== d.bPaginate ? a._iDisplayLength : -1;

    var m = function m(a, b) {
      g.push({
        name: a,
        value: b
      });
    };

    m("sEcho", a.iDraw);
    m("iColumns", c);
    m("sColumns", J(b, "sName").join(","));
    m("iDisplayStart", l);
    m("iDisplayLength", n);
    var p = {
      draw: a.iDraw,
      columns: [],
      order: [],
      start: l,
      length: n,
      search: {
        value: e.sSearch,
        regex: e.bRegex
      }
    };

    for (l = 0; l < c; l++) {
      var u = b[l];
      var sa = h[l];
      n = "function" == typeof u.mData ? "function" : u.mData;
      p.columns.push({
        data: n,
        name: u.sName,
        searchable: u.bSearchable,
        orderable: u.bSortable,
        search: {
          value: sa.sSearch,
          regex: sa.bRegex
        }
      });
      m("mDataProp_" + l, n);
      d.bFilter && (m("sSearch_" + l, sa.sSearch), m("bRegex_" + l, sa.bRegex), m("bSearchable_" + l, u.bSearchable));
      d.bSort && m("bSortable_" + l, u.bSortable);
    }

    d.bFilter && (m("sSearch", e.sSearch), m("bRegex", e.bRegex));
    d.bSort && (f.each(k, function (a, b) {
      p.order.push({
        column: b.col,
        dir: b.dir
      });
      m("iSortCol_" + a, b.col);
      m("sSortDir_" + a, b.dir);
    }), m("iSortingCols", k.length));
    b = q.ext.legacy.ajax;
    return null === b ? a.sAjaxSource ? g : p : b ? g : p;
  }

  function Ab(a, b) {
    var c = function c(a, _c) {
      return b[a] !== p ? b[a] : b[_c];
    },
        d = wa(a, b),
        e = c("sEcho", "draw"),
        h = c("iTotalRecords", "recordsTotal");

    c = c("iTotalDisplayRecords", "recordsFiltered");

    if (e) {
      if (1 * e < a.iDraw) return;
      a.iDraw = 1 * e;
    }

    qa(a);
    a._iRecordsTotal = parseInt(h, 10);
    a._iRecordsDisplay = parseInt(c, 10);
    e = 0;

    for (h = d.length; e < h; e++) {
      R(a, d[e]);
    }

    a.aiDisplay = a.aiDisplayMaster.slice();
    a.bAjaxDataGet = !1;
    S(a);
    a._bInitComplete || xa(a, b);
    a.bAjaxDataGet = !0;
    K(a, !1);
  }

  function wa(a, b) {
    a = f.isPlainObject(a.ajax) && a.ajax.dataSrc !== p ? a.ajax.dataSrc : a.sAjaxDataProp;
    return "data" === a ? b.aaData || b[a] : "" !== a ? U(a)(b) : b;
  }

  function ub(a) {
    var b = a.oClasses,
        c = a.sTableId,
        d = a.oLanguage,
        e = a.oPreviousSearch,
        h = a.aanFeatures,
        g = '<input type="search" class="' + b.sFilterInput + '"/>',
        k = d.sSearch;
    k = k.match(/_INPUT_/) ? k.replace("_INPUT_", g) : k + g;
    b = f("<div/>", {
      id: h.f ? null : c + "_filter",
      "class": b.sFilter
    }).append(f("<label/>").append(k));

    h = function h() {
      var b = this.value ? this.value : "";
      b != e.sSearch && (ia(a, {
        sSearch: b,
        bRegex: e.bRegex,
        bSmart: e.bSmart,
        bCaseInsensitive: e.bCaseInsensitive
      }), a._iDisplayStart = 0, S(a));
    };

    g = null !== a.searchDelay ? a.searchDelay : "ssp" === D(a) ? 400 : 0;
    var l = f("input", b).val(e.sSearch).attr("placeholder", d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", g ? Sa(h, g) : h).on("keypress.DT", function (a) {
      if (13 == a.keyCode) return !1;
    }).attr("aria-controls", c);
    f(a.nTable).on("search.dt.DT", function (b, c) {
      if (a === c) try {
        l[0] !== y.activeElement && l.val(e.sSearch);
      } catch (w) {}
    });
    return b[0];
  }

  function ia(a, b, c) {
    var d = a.oPreviousSearch,
        e = a.aoPreSearchCols,
        h = function h(a) {
      d.sSearch = a.sSearch;
      d.bRegex = a.bRegex;
      d.bSmart = a.bSmart;
      d.bCaseInsensitive = a.bCaseInsensitive;
    },
        g = function g(a) {
      return a.bEscapeRegex !== p ? !a.bEscapeRegex : a.bRegex;
    };

    Ka(a);

    if ("ssp" != D(a)) {
      Bb(a, b.sSearch, c, g(b), b.bSmart, b.bCaseInsensitive);
      h(b);

      for (b = 0; b < e.length; b++) {
        Cb(a, e[b].sSearch, b, g(e[b]), e[b].bSmart, e[b].bCaseInsensitive);
      }

      Db(a);
    } else h(b);

    a.bFiltered = !0;
    A(a, null, "search", [a]);
  }

  function Db(a) {
    for (var b = q.ext.search, c = a.aiDisplay, d, e, h = 0, g = b.length; h < g; h++) {
      for (var k = [], l = 0, n = c.length; l < n; l++) {
        e = c[l], d = a.aoData[e], b[h](a, d._aFilterData, e, d._aData, l) && k.push(e);
      }

      c.length = 0;
      f.merge(c, k);
    }
  }

  function Cb(a, b, c, d, e, h) {
    if ("" !== b) {
      var g = [],
          k = a.aiDisplay;
      d = Ta(b, d, e, h);

      for (e = 0; e < k.length; e++) {
        b = a.aoData[k[e]]._aFilterData[c], d.test(b) && g.push(k[e]);
      }

      a.aiDisplay = g;
    }
  }

  function Bb(a, b, c, d, e, h) {
    e = Ta(b, d, e, h);
    var g = a.oPreviousSearch.sSearch,
        k = a.aiDisplayMaster;
    h = [];
    0 !== q.ext.search.length && (c = !0);
    var f = Eb(a);
    if (0 >= b.length) a.aiDisplay = k.slice();else {
      if (f || c || d || g.length > b.length || 0 !== b.indexOf(g) || a.bSorted) a.aiDisplay = k.slice();
      b = a.aiDisplay;

      for (c = 0; c < b.length; c++) {
        e.test(a.aoData[b[c]]._sFilterRow) && h.push(b[c]);
      }

      a.aiDisplay = h;
    }
  }

  function Ta(a, b, c, d) {
    a = b ? a : Ua(a);
    c && (a = "^(?=.*?" + f.map(a.match(/"[^"]+"|[^ ]+/g) || [""], function (a) {
      if ('"' === a.charAt(0)) {
        var b = a.match(/^"(.*)"$/);
        a = b ? b[1] : a;
      }

      return a.replace('"', "");
    }).join(")(?=.*?") + ").*$");
    return new RegExp(a, d ? "i" : "");
  }

  function Eb(a) {
    var b = a.aoColumns,
        c,
        d,
        e = q.ext.type.search;
    var h = !1;
    var g = 0;

    for (c = a.aoData.length; g < c; g++) {
      var k = a.aoData[g];

      if (!k._aFilterData) {
        var f = [];
        var n = 0;

        for (d = b.length; n < d; n++) {
          h = b[n];

          if (h.bSearchable) {
            var m = I(a, g, n, "filter");
            e[h.sType] && (m = e[h.sType](m));
            null === m && (m = "");
            "string" !== typeof m && m.toString && (m = m.toString());
          } else m = "";

          m.indexOf && -1 !== m.indexOf("&") && (ya.innerHTML = m, m = $b ? ya.textContent : ya.innerText);
          m.replace && (m = m.replace(/[\r\n\u2028]/g, ""));
          f.push(m);
        }

        k._aFilterData = f;
        k._sFilterRow = f.join("  ");
        h = !0;
      }
    }

    return h;
  }

  function Fb(a) {
    return {
      search: a.sSearch,
      smart: a.bSmart,
      regex: a.bRegex,
      caseInsensitive: a.bCaseInsensitive
    };
  }

  function Gb(a) {
    return {
      sSearch: a.search,
      bSmart: a.smart,
      bRegex: a.regex,
      bCaseInsensitive: a.caseInsensitive
    };
  }

  function xb(a) {
    var b = a.sTableId,
        c = a.aanFeatures.i,
        d = f("<div/>", {
      "class": a.oClasses.sInfo,
      id: c ? null : b + "_info"
    });
    c || (a.aoDrawCallback.push({
      fn: Hb,
      sName: "information"
    }), d.attr("role", "status").attr("aria-live", "polite"), f(a.nTable).attr("aria-describedby", b + "_info"));
    return d[0];
  }

  function Hb(a) {
    var b = a.aanFeatures.i;

    if (0 !== b.length) {
      var c = a.oLanguage,
          d = a._iDisplayStart + 1,
          e = a.fnDisplayEnd(),
          h = a.fnRecordsTotal(),
          g = a.fnRecordsDisplay(),
          k = g ? c.sInfo : c.sInfoEmpty;
      g !== h && (k += " " + c.sInfoFiltered);
      k += c.sInfoPostFix;
      k = Ib(a, k);
      c = c.fnInfoCallback;
      null !== c && (k = c.call(a.oInstance, a, d, e, h, g, k));
      f(b).html(k);
    }
  }

  function Ib(a, b) {
    var c = a.fnFormatNumber,
        d = a._iDisplayStart + 1,
        e = a._iDisplayLength,
        h = a.fnRecordsDisplay(),
        g = -1 === e;
    return b.replace(/_START_/g, c.call(a, d)).replace(/_END_/g, c.call(a, a.fnDisplayEnd())).replace(/_MAX_/g, c.call(a, a.fnRecordsTotal())).replace(/_TOTAL_/g, c.call(a, h)).replace(/_PAGE_/g, c.call(a, g ? 1 : Math.ceil(d / e))).replace(/_PAGES_/g, c.call(a, g ? 1 : Math.ceil(h / e)));
  }

  function ja(a) {
    var b = a.iInitDisplayStart,
        c = a.aoColumns;
    var d = a.oFeatures;
    var e = a.bDeferLoading;

    if (a.bInitialised) {
      sb(a);
      pb(a);
      ha(a, a.aoHeader);
      ha(a, a.aoFooter);
      K(a, !0);
      d.bAutoWidth && Ja(a);
      var h = 0;

      for (d = c.length; h < d; h++) {
        var g = c[h];
        g.sWidth && (g.nTh.style.width = B(g.sWidth));
      }

      A(a, null, "preInit", [a]);
      V(a);
      c = D(a);
      if ("ssp" != c || e) "ajax" == c ? va(a, [], function (c) {
        var d = wa(a, c);

        for (h = 0; h < d.length; h++) {
          R(a, d[h]);
        }

        a.iInitDisplayStart = b;
        V(a);
        K(a, !1);
        xa(a, c);
      }, a) : (K(a, !1), xa(a));
    } else setTimeout(function () {
      ja(a);
    }, 200);
  }

  function xa(a, b) {
    a._bInitComplete = !0;
    (b || a.oInit.aaData) && aa(a);
    A(a, null, "plugin-init", [a, b]);
    A(a, "aoInitComplete", "init", [a, b]);
  }

  function Va(a, b) {
    b = parseInt(b, 10);
    a._iDisplayLength = b;
    Wa(a);
    A(a, null, "length", [a, b]);
  }

  function tb(a) {
    var b = a.oClasses,
        c = a.sTableId,
        d = a.aLengthMenu,
        e = f.isArray(d[0]),
        h = e ? d[0] : d;
    d = e ? d[1] : d;
    e = f("<select/>", {
      name: c + "_length",
      "aria-controls": c,
      "class": b.sLengthSelect
    });

    for (var g = 0, k = h.length; g < k; g++) {
      e[0][g] = new Option("number" === typeof d[g] ? a.fnFormatNumber(d[g]) : d[g], h[g]);
    }

    var l = f("<div><label/></div>").addClass(b.sLength);
    a.aanFeatures.l || (l[0].id = c + "_length");
    l.children().append(a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML));
    f("select", l).val(a._iDisplayLength).on("change.DT", function (b) {
      Va(a, f(this).val());
      S(a);
    });
    f(a.nTable).on("length.dt.DT", function (b, c, d) {
      a === c && f("select", l).val(d);
    });
    return l[0];
  }

  function yb(a) {
    var b = a.sPaginationType,
        c = q.ext.pager[b],
        d = "function" === typeof c,
        e = function e(a) {
      S(a);
    };

    b = f("<div/>").addClass(a.oClasses.sPaging + b)[0];
    var h = a.aanFeatures;
    d || c.fnInit(a, b, e);
    h.p || (b.id = a.sTableId + "_paginate", a.aoDrawCallback.push({
      fn: function fn(a) {
        if (d) {
          var b = a._iDisplayStart,
              g = a._iDisplayLength,
              f = a.fnRecordsDisplay(),
              m = -1 === g;
          b = m ? 0 : Math.ceil(b / g);
          g = m ? 1 : Math.ceil(f / g);
          f = c(b, g);
          var p;
          m = 0;

          for (p = h.p.length; m < p; m++) {
            Ra(a, "pageButton")(a, h.p[m], m, f, b, g);
          }
        } else c.fnUpdate(a, e);
      },
      sName: "pagination"
    }));
    return b;
  }

  function Xa(a, b, c) {
    var d = a._iDisplayStart,
        e = a._iDisplayLength,
        h = a.fnRecordsDisplay();
    0 === h || -1 === e ? d = 0 : "number" === typeof b ? (d = b * e, d > h && (d = 0)) : "first" == b ? d = 0 : "previous" == b ? (d = 0 <= e ? d - e : 0, 0 > d && (d = 0)) : "next" == b ? d + e < h && (d += e) : "last" == b ? d = Math.floor((h - 1) / e) * e : O(a, 0, "Unknown paging action: " + b, 5);
    b = a._iDisplayStart !== d;
    a._iDisplayStart = d;
    b && (A(a, null, "page", [a]), c && S(a));
    return b;
  }

  function vb(a) {
    return f("<div/>", {
      id: a.aanFeatures.r ? null : a.sTableId + "_processing",
      "class": a.oClasses.sProcessing
    }).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0];
  }

  function K(a, b) {
    a.oFeatures.bProcessing && f(a.aanFeatures.r).css("display", b ? "block" : "none");
    A(a, null, "processing", [a, b]);
  }

  function wb(a) {
    var b = f(a.nTable);
    b.attr("role", "grid");
    var c = a.oScroll;
    if ("" === c.sX && "" === c.sY) return a.nTable;
    var d = c.sX,
        e = c.sY,
        h = a.oClasses,
        g = b.children("caption"),
        k = g.length ? g[0]._captionSide : null,
        l = f(b[0].cloneNode(!1)),
        n = f(b[0].cloneNode(!1)),
        m = b.children("tfoot");
    m.length || (m = null);
    l = f("<div/>", {
      "class": h.sScrollWrapper
    }).append(f("<div/>", {
      "class": h.sScrollHead
    }).css({
      overflow: "hidden",
      position: "relative",
      border: 0,
      width: d ? d ? B(d) : null : "100%"
    }).append(f("<div/>", {
      "class": h.sScrollHeadInner
    }).css({
      "box-sizing": "content-box",
      width: c.sXInner || "100%"
    }).append(l.removeAttr("id").css("margin-left", 0).append("top" === k ? g : null).append(b.children("thead"))))).append(f("<div/>", {
      "class": h.sScrollBody
    }).css({
      position: "relative",
      overflow: "auto",
      width: d ? B(d) : null
    }).append(b));
    m && l.append(f("<div/>", {
      "class": h.sScrollFoot
    }).css({
      overflow: "hidden",
      border: 0,
      width: d ? d ? B(d) : null : "100%"
    }).append(f("<div/>", {
      "class": h.sScrollFootInner
    }).append(n.removeAttr("id").css("margin-left", 0).append("bottom" === k ? g : null).append(b.children("tfoot")))));
    b = l.children();
    var p = b[0];
    h = b[1];
    var u = m ? b[2] : null;
    if (d) f(h).on("scroll.DT", function (a) {
      a = this.scrollLeft;
      p.scrollLeft = a;
      m && (u.scrollLeft = a);
    });
    f(h).css(e && c.bCollapse ? "max-height" : "height", e);
    a.nScrollHead = p;
    a.nScrollBody = h;
    a.nScrollFoot = u;
    a.aoDrawCallback.push({
      fn: na,
      sName: "scrolling"
    });
    return l[0];
  }

  function na(a) {
    var b = a.oScroll,
        c = b.sX,
        d = b.sXInner,
        e = b.sY;
    b = b.iBarWidth;
    var h = f(a.nScrollHead),
        g = h[0].style,
        k = h.children("div"),
        l = k[0].style,
        n = k.children("table");
    k = a.nScrollBody;

    var m = f(k),
        w = k.style,
        u = f(a.nScrollFoot).children("div"),
        q = u.children("table"),
        t = f(a.nTHead),
        r = f(a.nTable),
        v = r[0],
        za = v.style,
        T = a.nTFoot ? f(a.nTFoot) : null,
        A = a.oBrowser,
        x = A.bScrollOversize,
        ac = J(a.aoColumns, "nTh"),
        Ya = [],
        y = [],
        z = [],
        C = [],
        G,
        H = function H(a) {
      a = a.style;
      a.paddingTop = "0";
      a.paddingBottom = "0";
      a.borderTopWidth = "0";
      a.borderBottomWidth = "0";
      a.height = 0;
    };

    var D = k.scrollHeight > k.clientHeight;
    if (a.scrollBarVis !== D && a.scrollBarVis !== p) a.scrollBarVis = D, aa(a);else {
      a.scrollBarVis = D;
      r.children("thead, tfoot").remove();

      if (T) {
        var E = T.clone().prependTo(r);
        var F = T.find("tr");
        E = E.find("tr");
      }

      var I = t.clone().prependTo(r);
      t = t.find("tr");
      D = I.find("tr");
      I.find("th, td").removeAttr("tabindex");
      c || (w.width = "100%", h[0].style.width = "100%");
      f.each(ua(a, I), function (b, c) {
        G = ba(a, b);
        c.style.width = a.aoColumns[G].sWidth;
      });
      T && N(function (a) {
        a.style.width = "";
      }, E);
      h = r.outerWidth();
      "" === c ? (za.width = "100%", x && (r.find("tbody").height() > k.offsetHeight || "scroll" == m.css("overflow-y")) && (za.width = B(r.outerWidth() - b)), h = r.outerWidth()) : "" !== d && (za.width = B(d), h = r.outerWidth());
      N(H, D);
      N(function (a) {
        z.push(a.innerHTML);
        Ya.push(B(f(a).css("width")));
      }, D);
      N(function (a, b) {
        -1 !== f.inArray(a, ac) && (a.style.width = Ya[b]);
      }, t);
      f(D).height(0);
      T && (N(H, E), N(function (a) {
        C.push(a.innerHTML);
        y.push(B(f(a).css("width")));
      }, E), N(function (a, b) {
        a.style.width = y[b];
      }, F), f(E).height(0));
      N(function (a, b) {
        a.innerHTML = '<div class="dataTables_sizing">' + z[b] + "</div>";
        a.childNodes[0].style.height = "0";
        a.childNodes[0].style.overflow = "hidden";
        a.style.width = Ya[b];
      }, D);
      T && N(function (a, b) {
        a.innerHTML = '<div class="dataTables_sizing">' + C[b] + "</div>";
        a.childNodes[0].style.height = "0";
        a.childNodes[0].style.overflow = "hidden";
        a.style.width = y[b];
      }, E);
      r.outerWidth() < h ? (F = k.scrollHeight > k.offsetHeight || "scroll" == m.css("overflow-y") ? h + b : h, x && (k.scrollHeight > k.offsetHeight || "scroll" == m.css("overflow-y")) && (za.width = B(F - b)), "" !== c && "" === d || O(a, 1, "Possible column misalignment", 6)) : F = "100%";
      w.width = B(F);
      g.width = B(F);
      T && (a.nScrollFoot.style.width = B(F));
      !e && x && (w.height = B(v.offsetHeight + b));
      c = r.outerWidth();
      n[0].style.width = B(c);
      l.width = B(c);
      d = r.height() > k.clientHeight || "scroll" == m.css("overflow-y");
      e = "padding" + (A.bScrollbarLeft ? "Left" : "Right");
      l[e] = d ? b + "px" : "0px";
      T && (q[0].style.width = B(c), u[0].style.width = B(c), u[0].style[e] = d ? b + "px" : "0px");
      r.children("colgroup").insertBefore(r.children("thead"));
      m.trigger("scroll");
      !a.bSorted && !a.bFiltered || a._drawHold || (k.scrollTop = 0);
    }
  }

  function N(a, b, c) {
    for (var d = 0, e = 0, h = b.length, g, k; e < h;) {
      g = b[e].firstChild;

      for (k = c ? c[e].firstChild : null; g;) {
        1 === g.nodeType && (c ? a(g, k, d) : a(g, d), d++), g = g.nextSibling, k = c ? k.nextSibling : null;
      }

      e++;
    }
  }

  function Ja(a) {
    var b = a.nTable,
        c = a.aoColumns,
        d = a.oScroll,
        e = d.sY,
        h = d.sX,
        g = d.sXInner,
        k = c.length,
        l = oa(a, "bVisible"),
        n = f("th", a.nTHead),
        m = b.getAttribute("width"),
        p = b.parentNode,
        u = !1,
        q,
        t = a.oBrowser;
    d = t.bScrollOversize;
    (q = b.style.width) && -1 !== q.indexOf("%") && (m = q);

    for (q = 0; q < l.length; q++) {
      var r = c[l[q]];
      null !== r.sWidth && (r.sWidth = Jb(r.sWidthOrig, p), u = !0);
    }

    if (d || !u && !h && !e && k == W(a) && k == n.length) for (q = 0; q < k; q++) {
      l = ba(a, q), null !== l && (c[l].sWidth = B(n.eq(q).width()));
    } else {
      k = f(b).clone().css("visibility", "hidden").removeAttr("id");
      k.find("tbody tr").remove();
      var v = f("<tr/>").appendTo(k.find("tbody"));
      k.find("thead, tfoot").remove();
      k.append(f(a.nTHead).clone()).append(f(a.nTFoot).clone());
      k.find("tfoot th, tfoot td").css("width", "");
      n = ua(a, k.find("thead")[0]);

      for (q = 0; q < l.length; q++) {
        r = c[l[q]], n[q].style.width = null !== r.sWidthOrig && "" !== r.sWidthOrig ? B(r.sWidthOrig) : "", r.sWidthOrig && h && f(n[q]).append(f("<div/>").css({
          width: r.sWidthOrig,
          margin: 0,
          padding: 0,
          border: 0,
          height: 1
        }));
      }

      if (a.aoData.length) for (q = 0; q < l.length; q++) {
        u = l[q], r = c[u], f(Kb(a, u)).clone(!1).append(r.sContentPadding).appendTo(v);
      }
      f("[name]", k).removeAttr("name");
      r = f("<div/>").css(h || e ? {
        position: "absolute",
        top: 0,
        left: 0,
        height: 1,
        right: 0,
        overflow: "hidden"
      } : {}).append(k).appendTo(p);
      h && g ? k.width(g) : h ? (k.css("width", "auto"), k.removeAttr("width"), k.width() < p.clientWidth && m && k.width(p.clientWidth)) : e ? k.width(p.clientWidth) : m && k.width(m);

      for (q = e = 0; q < l.length; q++) {
        p = f(n[q]), g = p.outerWidth() - p.width(), p = t.bBounding ? Math.ceil(n[q].getBoundingClientRect().width) : p.outerWidth(), e += p, c[l[q]].sWidth = B(p - g);
      }

      b.style.width = B(e);
      r.remove();
    }
    m && (b.style.width = B(m));
    !m && !h || a._reszEvt || (b = function b() {
      f(z).on("resize.DT-" + a.sInstance, Sa(function () {
        aa(a);
      }));
    }, d ? setTimeout(b, 1E3) : b(), a._reszEvt = !0);
  }

  function Jb(a, b) {
    if (!a) return 0;
    a = f("<div/>").css("width", B(a)).appendTo(b || y.body);
    b = a[0].offsetWidth;
    a.remove();
    return b;
  }

  function Kb(a, b) {
    var c = Lb(a, b);
    if (0 > c) return null;
    var d = a.aoData[c];
    return d.nTr ? d.anCells[b] : f("<td/>").html(I(a, c, b, "display"))[0];
  }

  function Lb(a, b) {
    for (var c, d = -1, e = -1, h = 0, g = a.aoData.length; h < g; h++) {
      c = I(a, h, b, "display") + "", c = c.replace(bc, ""), c = c.replace(/&nbsp;/g, " "), c.length > d && (d = c.length, e = h);
    }

    return e;
  }

  function B(a) {
    return null === a ? "0px" : "number" == typeof a ? 0 > a ? "0px" : a + "px" : a.match(/\d$/) ? a + "px" : a;
  }

  function Y(a) {
    var b = [],
        c = a.aoColumns;
    var d = a.aaSortingFixed;
    var e = f.isPlainObject(d);
    var h = [];

    var g = function g(a) {
      a.length && !f.isArray(a[0]) ? h.push(a) : f.merge(h, a);
    };

    f.isArray(d) && g(d);
    e && d.pre && g(d.pre);
    g(a.aaSorting);
    e && d.post && g(d.post);

    for (a = 0; a < h.length; a++) {
      var k = h[a][0];
      g = c[k].aDataSort;
      d = 0;

      for (e = g.length; d < e; d++) {
        var l = g[d];
        var n = c[l].sType || "string";
        h[a]._idx === p && (h[a]._idx = f.inArray(h[a][1], c[l].asSorting));
        b.push({
          src: k,
          col: l,
          dir: h[a][1],
          index: h[a]._idx,
          type: n,
          formatter: q.ext.type.order[n + "-pre"]
        });
      }
    }

    return b;
  }

  function rb(a) {
    var b,
        c = [],
        d = q.ext.type.order,
        e = a.aoData,
        h = 0,
        g = a.aiDisplayMaster;
    Ka(a);
    var k = Y(a);
    var f = 0;

    for (b = k.length; f < b; f++) {
      var n = k[f];
      n.formatter && h++;
      Mb(a, n.col);
    }

    if ("ssp" != D(a) && 0 !== k.length) {
      f = 0;

      for (b = g.length; f < b; f++) {
        c[g[f]] = f;
      }

      h === k.length ? g.sort(function (a, b) {
        var d,
            h = k.length,
            g = e[a]._aSortData,
            f = e[b]._aSortData;

        for (d = 0; d < h; d++) {
          var l = k[d];
          var m = g[l.col];
          var n = f[l.col];
          m = m < n ? -1 : m > n ? 1 : 0;
          if (0 !== m) return "asc" === l.dir ? m : -m;
        }

        m = c[a];
        n = c[b];
        return m < n ? -1 : m > n ? 1 : 0;
      }) : g.sort(function (a, b) {
        var h,
            g = k.length,
            f = e[a]._aSortData,
            l = e[b]._aSortData;

        for (h = 0; h < g; h++) {
          var m = k[h];
          var n = f[m.col];
          var p = l[m.col];
          m = d[m.type + "-" + m.dir] || d["string-" + m.dir];
          n = m(n, p);
          if (0 !== n) return n;
        }

        n = c[a];
        p = c[b];
        return n < p ? -1 : n > p ? 1 : 0;
      });
    }

    a.bSorted = !0;
  }

  function Nb(a) {
    var b = a.aoColumns,
        c = Y(a);
    a = a.oLanguage.oAria;

    for (var d = 0, e = b.length; d < e; d++) {
      var h = b[d];
      var g = h.asSorting;
      var k = h.sTitle.replace(/<.*?>/g, "");
      var f = h.nTh;
      f.removeAttribute("aria-sort");
      h.bSortable && (0 < c.length && c[0].col == d ? (f.setAttribute("aria-sort", "asc" == c[0].dir ? "ascending" : "descending"), h = g[c[0].index + 1] || g[0]) : h = g[0], k += "asc" === h ? a.sSortAscending : a.sSortDescending);
      f.setAttribute("aria-label", k);
    }
  }

  function Za(a, b, c, d) {
    var e = a.aaSorting,
        h = a.aoColumns[b].asSorting,
        g = function g(a, b) {
      var c = a._idx;
      c === p && (c = f.inArray(a[1], h));
      return c + 1 < h.length ? c + 1 : b ? null : 0;
    };

    "number" === typeof e[0] && (e = a.aaSorting = [e]);
    c && a.oFeatures.bSortMulti ? (c = f.inArray(b, J(e, "0")), -1 !== c ? (b = g(e[c], !0), null === b && 1 === e.length && (b = 0), null === b ? e.splice(c, 1) : (e[c][1] = h[b], e[c]._idx = b)) : (e.push([b, h[0], 0]), e[e.length - 1]._idx = 0)) : e.length && e[0][0] == b ? (b = g(e[0]), e.length = 1, e[0][1] = h[b], e[0]._idx = b) : (e.length = 0, e.push([b, h[0]]), e[0]._idx = 0);
    V(a);
    "function" == typeof d && d(a);
  }

  function Qa(a, b, c, d) {
    var e = a.aoColumns[c];
    $a(b, {}, function (b) {
      !1 !== e.bSortable && (a.oFeatures.bProcessing ? (K(a, !0), setTimeout(function () {
        Za(a, c, b.shiftKey, d);
        "ssp" !== D(a) && K(a, !1);
      }, 0)) : Za(a, c, b.shiftKey, d));
    });
  }

  function Aa(a) {
    var b = a.aLastSort,
        c = a.oClasses.sSortColumn,
        d = Y(a),
        e = a.oFeatures,
        h;

    if (e.bSort && e.bSortClasses) {
      e = 0;

      for (h = b.length; e < h; e++) {
        var g = b[e].src;
        f(J(a.aoData, "anCells", g)).removeClass(c + (2 > e ? e + 1 : 3));
      }

      e = 0;

      for (h = d.length; e < h; e++) {
        g = d[e].src, f(J(a.aoData, "anCells", g)).addClass(c + (2 > e ? e + 1 : 3));
      }
    }

    a.aLastSort = d;
  }

  function Mb(a, b) {
    var c = a.aoColumns[b],
        d = q.ext.order[c.sSortDataType],
        e;
    d && (e = d.call(a.oInstance, a, b, ca(a, b)));

    for (var h, g = q.ext.type.order[c.sType + "-pre"], k = 0, f = a.aoData.length; k < f; k++) {
      if (c = a.aoData[k], c._aSortData || (c._aSortData = []), !c._aSortData[b] || d) h = d ? e[k] : I(a, k, b, "sort"), c._aSortData[b] = g ? g(h) : h;
    }
  }

  function Ba(a) {
    if (a.oFeatures.bStateSave && !a.bDestroying) {
      var b = {
        time: +new Date(),
        start: a._iDisplayStart,
        length: a._iDisplayLength,
        order: f.extend(!0, [], a.aaSorting),
        search: Fb(a.oPreviousSearch),
        columns: f.map(a.aoColumns, function (b, d) {
          return {
            visible: b.bVisible,
            search: Fb(a.aoPreSearchCols[d])
          };
        })
      };
      A(a, "aoStateSaveParams", "stateSaveParams", [a, b]);
      a.oSavedState = b;
      a.fnStateSaveCallback.call(a.oInstance, a, b);
    }
  }

  function Ob(a, b, c) {
    var d,
        e,
        h = a.aoColumns;

    b = function b(_b) {
      if (_b && _b.time) {
        var g = A(a, "aoStateLoadParams", "stateLoadParams", [a, _b]);

        if (-1 === f.inArray(!1, g) && (g = a.iStateDuration, !(0 < g && _b.time < +new Date() - 1E3 * g || _b.columns && h.length !== _b.columns.length))) {
          a.oLoadedState = f.extend(!0, {}, _b);
          _b.start !== p && (a._iDisplayStart = _b.start, a.iInitDisplayStart = _b.start);
          _b.length !== p && (a._iDisplayLength = _b.length);
          _b.order !== p && (a.aaSorting = [], f.each(_b.order, function (b, c) {
            a.aaSorting.push(c[0] >= h.length ? [0, c[1]] : c);
          }));
          _b.search !== p && f.extend(a.oPreviousSearch, Gb(_b.search));
          if (_b.columns) for (d = 0, e = _b.columns.length; d < e; d++) {
            g = _b.columns[d], g.visible !== p && (h[d].bVisible = g.visible), g.search !== p && f.extend(a.aoPreSearchCols[d], Gb(g.search));
          }
          A(a, "aoStateLoaded", "stateLoaded", [a, _b]);
        }
      }

      c();
    };

    if (a.oFeatures.bStateSave) {
      var g = a.fnStateLoadCallback.call(a.oInstance, a, b);
      g !== p && b(g);
    } else c();
  }

  function Ca(a) {
    var b = q.settings;
    a = f.inArray(a, J(b, "nTable"));
    return -1 !== a ? b[a] : null;
  }

  function O(a, b, c, d) {
    c = "DataTables warning: " + (a ? "table id=" + a.sTableId + " - " : "") + c;
    d && (c += ". For more information about this error, please see http://datatables.net/tn/" + d);
    if (b) z.console && console.log && console.log(c);else if (b = q.ext, b = b.sErrMode || b.errMode, a && A(a, null, "error", [a, d, c]), "alert" == b) alert(c);else {
      if ("throw" == b) throw Error(c);
      "function" == typeof b && b(a, d, c);
    }
  }

  function M(a, b, c, d) {
    f.isArray(c) ? f.each(c, function (c, d) {
      f.isArray(d) ? M(a, b, d[0], d[1]) : M(a, b, d);
    }) : (d === p && (d = c), b[c] !== p && (a[d] = b[c]));
  }

  function ab(a, b, c) {
    var d;

    for (d in b) {
      if (b.hasOwnProperty(d)) {
        var e = b[d];
        f.isPlainObject(e) ? (f.isPlainObject(a[d]) || (a[d] = {}), f.extend(!0, a[d], e)) : c && "data" !== d && "aaData" !== d && f.isArray(e) ? a[d] = e.slice() : a[d] = e;
      }
    }

    return a;
  }

  function $a(a, b, c) {
    f(a).on("click.DT", b, function (b) {
      f(a).blur();
      c(b);
    }).on("keypress.DT", b, function (a) {
      13 === a.which && (a.preventDefault(), c(a));
    }).on("selectstart.DT", function () {
      return !1;
    });
  }

  function E(a, b, c, d) {
    c && a[b].push({
      fn: c,
      sName: d
    });
  }

  function A(a, b, c, d) {
    var e = [];
    b && (e = f.map(a[b].slice().reverse(), function (b, c) {
      return b.fn.apply(a.oInstance, d);
    }));
    null !== c && (b = f.Event(c + ".dt"), f(a.nTable).trigger(b, d), e.push(b.result));
    return e;
  }

  function Wa(a) {
    var b = a._iDisplayStart,
        c = a.fnDisplayEnd(),
        d = a._iDisplayLength;
    b >= c && (b = c - d);
    b -= b % d;
    if (-1 === d || 0 > b) b = 0;
    a._iDisplayStart = b;
  }

  function Ra(a, b) {
    a = a.renderer;
    var c = q.ext.renderer[b];
    return f.isPlainObject(a) && a[b] ? c[a[b]] || c._ : "string" === typeof a ? c[a] || c._ : c._;
  }

  function D(a) {
    return a.oFeatures.bServerSide ? "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom";
  }

  function ka(a, b) {
    var c = Pb.numbers_length,
        d = Math.floor(c / 2);
    b <= c ? a = Z(0, b) : a <= d ? (a = Z(0, c - 2), a.push("ellipsis"), a.push(b - 1)) : (a >= b - 1 - d ? a = Z(b - (c - 2), b) : (a = Z(a - d + 2, a + d - 1), a.push("ellipsis"), a.push(b - 1)), a.splice(0, 0, "ellipsis"), a.splice(0, 0, 0));
    a.DT_el = "span";
    return a;
  }

  function Ha(a) {
    f.each({
      num: function num(b) {
        return Da(b, a);
      },
      "num-fmt": function numFmt(b) {
        return Da(b, a, bb);
      },
      "html-num": function htmlNum(b) {
        return Da(b, a, Ea);
      },
      "html-num-fmt": function htmlNumFmt(b) {
        return Da(b, a, Ea, bb);
      }
    }, function (b, c) {
      C.type.order[b + a + "-pre"] = c;
      b.match(/^html\-/) && (C.type.search[b + a] = C.type.search.html);
    });
  }

  function Qb(a) {
    return function () {
      var b = [Ca(this[q.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
      return q.ext.internal[a].apply(this, b);
    };
  }

  var q = function q(a) {
    this.$ = function (a, b) {
      return this.api(!0).$(a, b);
    };

    this._ = function (a, b) {
      return this.api(!0).rows(a, b).data();
    };

    this.api = function (a) {
      return a ? new v(Ca(this[C.iApiIndex])) : new v(this);
    };

    this.fnAddData = function (a, b) {
      var c = this.api(!0);
      a = f.isArray(a) && (f.isArray(a[0]) || f.isPlainObject(a[0])) ? c.rows.add(a) : c.row.add(a);
      (b === p || b) && c.draw();
      return a.flatten().toArray();
    };

    this.fnAdjustColumnSizing = function (a) {
      var b = this.api(!0).columns.adjust(),
          c = b.settings()[0],
          d = c.oScroll;
      a === p || a ? b.draw(!1) : ("" !== d.sX || "" !== d.sY) && na(c);
    };

    this.fnClearTable = function (a) {
      var b = this.api(!0).clear();
      (a === p || a) && b.draw();
    };

    this.fnClose = function (a) {
      this.api(!0).row(a).child.hide();
    };

    this.fnDeleteRow = function (a, b, c) {
      var d = this.api(!0);
      a = d.rows(a);
      var e = a.settings()[0],
          h = e.aoData[a[0][0]];
      a.remove();
      b && b.call(this, e, h);
      (c === p || c) && d.draw();
      return h;
    };

    this.fnDestroy = function (a) {
      this.api(!0).destroy(a);
    };

    this.fnDraw = function (a) {
      this.api(!0).draw(a);
    };

    this.fnFilter = function (a, b, c, d, e, f) {
      e = this.api(!0);
      null === b || b === p ? e.search(a, c, d, f) : e.column(b).search(a, c, d, f);
      e.draw();
    };

    this.fnGetData = function (a, b) {
      var c = this.api(!0);

      if (a !== p) {
        var d = a.nodeName ? a.nodeName.toLowerCase() : "";
        return b !== p || "td" == d || "th" == d ? c.cell(a, b).data() : c.row(a).data() || null;
      }

      return c.data().toArray();
    };

    this.fnGetNodes = function (a) {
      var b = this.api(!0);
      return a !== p ? b.row(a).node() : b.rows().nodes().flatten().toArray();
    };

    this.fnGetPosition = function (a) {
      var b = this.api(!0),
          c = a.nodeName.toUpperCase();
      return "TR" == c ? b.row(a).index() : "TD" == c || "TH" == c ? (a = b.cell(a).index(), [a.row, a.columnVisible, a.column]) : null;
    };

    this.fnIsOpen = function (a) {
      return this.api(!0).row(a).child.isShown();
    };

    this.fnOpen = function (a, b, c) {
      return this.api(!0).row(a).child(b, c).show().child()[0];
    };

    this.fnPageChange = function (a, b) {
      a = this.api(!0).page(a);
      (b === p || b) && a.draw(!1);
    };

    this.fnSetColumnVis = function (a, b, c) {
      a = this.api(!0).column(a).visible(b);
      (c === p || c) && a.columns.adjust().draw();
    };

    this.fnSettings = function () {
      return Ca(this[C.iApiIndex]);
    };

    this.fnSort = function (a) {
      this.api(!0).order(a).draw();
    };

    this.fnSortListener = function (a, b, c) {
      this.api(!0).order.listener(a, b, c);
    };

    this.fnUpdate = function (a, b, c, d, e) {
      var h = this.api(!0);
      c === p || null === c ? h.row(b).data(a) : h.cell(b, c).data(a);
      (e === p || e) && h.columns.adjust();
      (d === p || d) && h.draw();
      return 0;
    };

    this.fnVersionCheck = C.fnVersionCheck;
    var b = this,
        c = a === p,
        d = this.length;
    c && (a = {});
    this.oApi = this.internal = C.internal;

    for (var e in q.ext.internal) {
      e && (this[e] = Qb(e));
    }

    this.each(function () {
      var e = {},
          g = 1 < d ? ab(e, a, !0) : a,
          k = 0,
          l;
      e = this.getAttribute("id");
      var n = !1,
          m = q.defaults,
          w = f(this);
      if ("table" != this.nodeName.toLowerCase()) O(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);else {
        jb(m);
        kb(m.column);
        L(m, m, !0);
        L(m.column, m.column, !0);
        L(m, f.extend(g, w.data()), !0);
        var u = q.settings;
        k = 0;

        for (l = u.length; k < l; k++) {
          var t = u[k];

          if (t.nTable == this || t.nTHead && t.nTHead.parentNode == this || t.nTFoot && t.nTFoot.parentNode == this) {
            var v = g.bRetrieve !== p ? g.bRetrieve : m.bRetrieve;
            if (c || v) return t.oInstance;

            if (g.bDestroy !== p ? g.bDestroy : m.bDestroy) {
              t.oInstance.fnDestroy();
              break;
            } else {
              O(t, 0, "Cannot reinitialise DataTable", 3);
              return;
            }
          }

          if (t.sTableId == this.id) {
            u.splice(k, 1);
            break;
          }
        }

        if (null === e || "" === e) this.id = e = "DataTables_Table_" + q.ext._unique++;
        var r = f.extend(!0, {}, q.models.oSettings, {
          sDestroyWidth: w[0].style.width,
          sInstance: e,
          sTableId: e
        });
        r.nTable = this;
        r.oApi = b.internal;
        r.oInit = g;
        u.push(r);
        r.oInstance = 1 === b.length ? b : w.dataTable();
        jb(g);
        Ga(g.oLanguage);
        g.aLengthMenu && !g.iDisplayLength && (g.iDisplayLength = f.isArray(g.aLengthMenu[0]) ? g.aLengthMenu[0][0] : g.aLengthMenu[0]);
        g = ab(f.extend(!0, {}, m), g);
        M(r.oFeatures, g, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));
        M(r, g, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"], ["oSearch", "oPreviousSearch"], ["aoSearchCols", "aoPreSearchCols"], ["iDisplayLength", "_iDisplayLength"]]);
        M(r.oScroll, g, [["sScrollX", "sX"], ["sScrollXInner", "sXInner"], ["sScrollY", "sY"], ["bScrollCollapse", "bCollapse"]]);
        M(r.oLanguage, g, "fnInfoCallback");
        E(r, "aoDrawCallback", g.fnDrawCallback, "user");
        E(r, "aoServerParams", g.fnServerParams, "user");
        E(r, "aoStateSaveParams", g.fnStateSaveParams, "user");
        E(r, "aoStateLoadParams", g.fnStateLoadParams, "user");
        E(r, "aoStateLoaded", g.fnStateLoaded, "user");
        E(r, "aoRowCallback", g.fnRowCallback, "user");
        E(r, "aoRowCreatedCallback", g.fnCreatedRow, "user");
        E(r, "aoHeaderCallback", g.fnHeaderCallback, "user");
        E(r, "aoFooterCallback", g.fnFooterCallback, "user");
        E(r, "aoInitComplete", g.fnInitComplete, "user");
        E(r, "aoPreDrawCallback", g.fnPreDrawCallback, "user");
        r.rowIdFn = U(g.rowId);
        lb(r);
        var x = r.oClasses;
        f.extend(x, q.ext.classes, g.oClasses);
        w.addClass(x.sTable);
        r.iInitDisplayStart === p && (r.iInitDisplayStart = g.iDisplayStart, r._iDisplayStart = g.iDisplayStart);
        null !== g.iDeferLoading && (r.bDeferLoading = !0, e = f.isArray(g.iDeferLoading), r._iRecordsDisplay = e ? g.iDeferLoading[0] : g.iDeferLoading, r._iRecordsTotal = e ? g.iDeferLoading[1] : g.iDeferLoading);
        var y = r.oLanguage;
        f.extend(!0, y, g.oLanguage);
        y.sUrl && (f.ajax({
          dataType: "json",
          url: y.sUrl,
          success: function success(a) {
            Ga(a);
            L(m.oLanguage, a);
            f.extend(!0, y, a);
            ja(r);
          },
          error: function error() {
            ja(r);
          }
        }), n = !0);
        null === g.asStripeClasses && (r.asStripeClasses = [x.sStripeOdd, x.sStripeEven]);
        e = r.asStripeClasses;
        var z = w.children("tbody").find("tr").eq(0);
        -1 !== f.inArray(!0, f.map(e, function (a, b) {
          return z.hasClass(a);
        })) && (f("tbody tr", this).removeClass(e.join(" ")), r.asDestroyStripes = e.slice());
        e = [];
        u = this.getElementsByTagName("thead");
        0 !== u.length && (fa(r.aoHeader, u[0]), e = ua(r));
        if (null === g.aoColumns) for (u = [], k = 0, l = e.length; k < l; k++) {
          u.push(null);
        } else u = g.aoColumns;
        k = 0;

        for (l = u.length; k < l; k++) {
          Ia(r, e ? e[k] : null);
        }

        nb(r, g.aoColumnDefs, u, function (a, b) {
          ma(r, a, b);
        });

        if (z.length) {
          var B = function B(a, b) {
            return null !== a.getAttribute("data-" + b) ? b : null;
          };

          f(z[0]).children("th, td").each(function (a, b) {
            var c = r.aoColumns[a];

            if (c.mData === a) {
              var d = B(b, "sort") || B(b, "order");
              b = B(b, "filter") || B(b, "search");
              if (null !== d || null !== b) c.mData = {
                _: a + ".display",
                sort: null !== d ? a + ".@data-" + d : p,
                type: null !== d ? a + ".@data-" + d : p,
                filter: null !== b ? a + ".@data-" + b : p
              }, ma(r, a);
            }
          });
        }

        var C = r.oFeatures;

        e = function e() {
          if (g.aaSorting === p) {
            var a = r.aaSorting;
            k = 0;

            for (l = a.length; k < l; k++) {
              a[k][1] = r.aoColumns[k].asSorting[0];
            }
          }

          Aa(r);
          C.bSort && E(r, "aoDrawCallback", function () {
            if (r.bSorted) {
              var a = Y(r),
                  b = {};
              f.each(a, function (a, c) {
                b[c.src] = c.dir;
              });
              A(r, null, "order", [r, a, b]);
              Nb(r);
            }
          });
          E(r, "aoDrawCallback", function () {
            (r.bSorted || "ssp" === D(r) || C.bDeferRender) && Aa(r);
          }, "sc");
          a = w.children("caption").each(function () {
            this._captionSide = f(this).css("caption-side");
          });
          var b = w.children("thead");
          0 === b.length && (b = f("<thead/>").appendTo(w));
          r.nTHead = b[0];
          b = w.children("tbody");
          0 === b.length && (b = f("<tbody/>").appendTo(w));
          r.nTBody = b[0];
          b = w.children("tfoot");
          0 === b.length && 0 < a.length && ("" !== r.oScroll.sX || "" !== r.oScroll.sY) && (b = f("<tfoot/>").appendTo(w));
          0 === b.length || 0 === b.children().length ? w.addClass(x.sNoFooter) : 0 < b.length && (r.nTFoot = b[0], fa(r.aoFooter, r.nTFoot));
          if (g.aaData) for (k = 0; k < g.aaData.length; k++) {
            R(r, g.aaData[k]);
          } else (r.bDeferLoading || "dom" == D(r)) && pa(r, f(r.nTBody).children("tr"));
          r.aiDisplay = r.aiDisplayMaster.slice();
          r.bInitialised = !0;
          !1 === n && ja(r);
        };

        g.bStateSave ? (C.bStateSave = !0, E(r, "aoDrawCallback", Ba, "state_save"), Ob(r, g, e)) : e();
      }
    });
    b = null;
    return this;
  },
      C,
      t,
      x,
      cb = {},
      Rb = /[\r\n\u2028]/g,
      Ea = /<.*?>/g,
      cc = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
      dc = /(\/|\.|\*|\+|\?|\||\(|\)|\[|\]|\{|\}|\\|\$|\^|\-)/g,
      bb = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,
      P = function P(a) {
    return a && !0 !== a && "-" !== a ? !1 : !0;
  },
      Sb = function Sb(a) {
    var b = parseInt(a, 10);
    return !isNaN(b) && isFinite(a) ? b : null;
  },
      Tb = function Tb(a, b) {
    cb[b] || (cb[b] = new RegExp(Ua(b), "g"));
    return "string" === typeof a && "." !== b ? a.replace(/\./g, "").replace(cb[b], ".") : a;
  },
      db = function db(a, b, c) {
    var d = "string" === typeof a;
    if (P(a)) return !0;
    b && d && (a = Tb(a, b));
    c && d && (a = a.replace(bb, ""));
    return !isNaN(parseFloat(a)) && isFinite(a);
  },
      Ub = function Ub(a, b, c) {
    return P(a) ? !0 : P(a) || "string" === typeof a ? db(a.replace(Ea, ""), b, c) ? !0 : null : null;
  },
      J = function J(a, b, c) {
    var d = [],
        e = 0,
        h = a.length;
    if (c !== p) for (; e < h; e++) {
      a[e] && a[e][b] && d.push(a[e][b][c]);
    } else for (; e < h; e++) {
      a[e] && d.push(a[e][b]);
    }
    return d;
  },
      la = function la(a, b, c, d) {
    var e = [],
        h = 0,
        g = b.length;
    if (d !== p) for (; h < g; h++) {
      a[b[h]][c] && e.push(a[b[h]][c][d]);
    } else for (; h < g; h++) {
      e.push(a[b[h]][c]);
    }
    return e;
  },
      Z = function Z(a, b) {
    var c = [];

    if (b === p) {
      b = 0;
      var d = a;
    } else d = b, b = a;

    for (a = b; a < d; a++) {
      c.push(a);
    }

    return c;
  },
      Vb = function Vb(a) {
    for (var b = [], c = 0, d = a.length; c < d; c++) {
      a[c] && b.push(a[c]);
    }

    return b;
  },
      ta = function ta(a) {
    a: {
      if (!(2 > a.length)) {
        var b = a.slice().sort();

        for (var c = b[0], d = 1, e = b.length; d < e; d++) {
          if (b[d] === c) {
            b = !1;
            break a;
          }

          c = b[d];
        }
      }

      b = !0;
    }

    if (b) return a.slice();
    b = [];
    e = a.length;
    var h,
        g = 0;
    d = 0;

    a: for (; d < e; d++) {
      c = a[d];

      for (h = 0; h < g; h++) {
        if (b[h] === c) continue a;
      }

      b.push(c);
      g++;
    }

    return b;
  };

  q.util = {
    throttle: function throttle(a, b) {
      var c = b !== p ? b : 200,
          d,
          e;
      return function () {
        var b = this,
            g = +new Date(),
            f = arguments;
        d && g < d + c ? (clearTimeout(e), e = setTimeout(function () {
          d = p;
          a.apply(b, f);
        }, c)) : (d = g, a.apply(b, f));
      };
    },
    escapeRegex: function escapeRegex(a) {
      return a.replace(dc, "\\$1");
    }
  };

  var F = function F(a, b, c) {
    a[b] !== p && (a[c] = a[b]);
  },
      da = /\[.*?\]$/,
      X = /\(\)$/,
      Ua = q.util.escapeRegex,
      ya = f("<div>")[0],
      $b = ya.textContent !== p,
      bc = /<.*?>/g,
      Sa = q.util.throttle,
      Wb = [],
      G = Array.prototype,
      ec = function ec(a) {
    var b,
        c = q.settings,
        d = f.map(c, function (a, b) {
      return a.nTable;
    });

    if (a) {
      if (a.nTable && a.oApi) return [a];

      if (a.nodeName && "table" === a.nodeName.toLowerCase()) {
        var e = f.inArray(a, d);
        return -1 !== e ? [c[e]] : null;
      }

      if (a && "function" === typeof a.settings) return a.settings().toArray();
      "string" === typeof a ? b = f(a) : a instanceof f && (b = a);
    } else return [];

    if (b) return b.map(function (a) {
      e = f.inArray(this, d);
      return -1 !== e ? c[e] : null;
    }).toArray();
  };

  var v = function v(a, b) {
    if (!(this instanceof v)) return new v(a, b);

    var c = [],
        d = function d(a) {
      (a = ec(a)) && c.push.apply(c, a);
    };

    if (f.isArray(a)) for (var e = 0, h = a.length; e < h; e++) {
      d(a[e]);
    } else d(a);
    this.context = ta(c);
    b && f.merge(this, b);
    this.selector = {
      rows: null,
      cols: null,
      opts: null
    };
    v.extend(this, this, Wb);
  };

  q.Api = v;
  f.extend(v.prototype, {
    any: function any() {
      return 0 !== this.count();
    },
    concat: G.concat,
    context: [],
    count: function count() {
      return this.flatten().length;
    },
    each: function each(a) {
      for (var b = 0, c = this.length; b < c; b++) {
        a.call(this, this[b], b, this);
      }

      return this;
    },
    eq: function eq(a) {
      var b = this.context;
      return b.length > a ? new v(b[a], this[a]) : null;
    },
    filter: function filter(a) {
      var b = [];
      if (G.filter) b = G.filter.call(this, a, this);else for (var c = 0, d = this.length; c < d; c++) {
        a.call(this, this[c], c, this) && b.push(this[c]);
      }
      return new v(this.context, b);
    },
    flatten: function flatten() {
      var a = [];
      return new v(this.context, a.concat.apply(a, this.toArray()));
    },
    join: G.join,
    indexOf: G.indexOf || function (a, b) {
      b = b || 0;

      for (var c = this.length; b < c; b++) {
        if (this[b] === a) return b;
      }

      return -1;
    },
    iterator: function iterator(a, b, c, d) {
      var e = [],
          h,
          g,
          f = this.context,
          l,
          n = this.selector;
      "string" === typeof a && (d = c, c = b, b = a, a = !1);
      var m = 0;

      for (h = f.length; m < h; m++) {
        var q = new v(f[m]);

        if ("table" === b) {
          var u = c.call(q, f[m], m);
          u !== p && e.push(u);
        } else if ("columns" === b || "rows" === b) u = c.call(q, f[m], this[m], m), u !== p && e.push(u);else if ("column" === b || "column-rows" === b || "row" === b || "cell" === b) {
          var t = this[m];
          "column-rows" === b && (l = Fa(f[m], n.opts));
          var x = 0;

          for (g = t.length; x < g; x++) {
            u = t[x], u = "cell" === b ? c.call(q, f[m], u.row, u.column, m, x) : c.call(q, f[m], u, m, x, l), u !== p && e.push(u);
          }
        }
      }

      return e.length || d ? (a = new v(f, a ? e.concat.apply([], e) : e), b = a.selector, b.rows = n.rows, b.cols = n.cols, b.opts = n.opts, a) : this;
    },
    lastIndexOf: G.lastIndexOf || function (a, b) {
      return this.indexOf.apply(this.toArray.reverse(), arguments);
    },
    length: 0,
    map: function map(a) {
      var b = [];
      if (G.map) b = G.map.call(this, a, this);else for (var c = 0, d = this.length; c < d; c++) {
        b.push(a.call(this, this[c], c));
      }
      return new v(this.context, b);
    },
    pluck: function pluck(a) {
      return this.map(function (b) {
        return b[a];
      });
    },
    pop: G.pop,
    push: G.push,
    reduce: G.reduce || function (a, b) {
      return mb(this, a, b, 0, this.length, 1);
    },
    reduceRight: G.reduceRight || function (a, b) {
      return mb(this, a, b, this.length - 1, -1, -1);
    },
    reverse: G.reverse,
    selector: null,
    shift: G.shift,
    slice: function slice() {
      return new v(this.context, this);
    },
    sort: G.sort,
    splice: G.splice,
    toArray: function toArray() {
      return G.slice.call(this);
    },
    to$: function to$() {
      return f(this);
    },
    toJQuery: function toJQuery() {
      return f(this);
    },
    unique: function unique() {
      return new v(this.context, ta(this));
    },
    unshift: G.unshift
  });

  v.extend = function (a, b, c) {
    if (c.length && b && (b instanceof v || b.__dt_wrapper)) {
      var d,
          e = function e(a, b, c) {
        return function () {
          var d = b.apply(a, arguments);
          v.extend(d, d, c.methodExt);
          return d;
        };
      };

      var h = 0;

      for (d = c.length; h < d; h++) {
        var g = c[h];
        b[g.name] = "function" === g.type ? e(a, g.val, g) : "object" === g.type ? {} : g.val;
        b[g.name].__dt_wrapper = !0;
        v.extend(a, b[g.name], g.propExt);
      }
    }
  };

  v.register = t = function t(a, b) {
    if (f.isArray(a)) for (var c = 0, d = a.length; c < d; c++) {
      v.register(a[c], b);
    } else {
      d = a.split(".");
      var e = Wb,
          h;
      a = 0;

      for (c = d.length; a < c; a++) {
        var g = (h = -1 !== d[a].indexOf("()")) ? d[a].replace("()", "") : d[a];

        a: {
          var k = 0;

          for (var l = e.length; k < l; k++) {
            if (e[k].name === g) {
              k = e[k];
              break a;
            }
          }

          k = null;
        }

        k || (k = {
          name: g,
          val: {},
          methodExt: [],
          propExt: [],
          type: "object"
        }, e.push(k));
        a === c - 1 ? (k.val = b, k.type = "function" === typeof b ? "function" : f.isPlainObject(b) ? "object" : "other") : e = h ? k.methodExt : k.propExt;
      }
    }
  };

  v.registerPlural = x = function x(a, b, c) {
    v.register(a, c);
    v.register(b, function () {
      var a = c.apply(this, arguments);
      return a === this ? this : a instanceof v ? a.length ? f.isArray(a[0]) ? new v(a.context, a[0]) : a[0] : p : a;
    });
  };

  var fc = function fc(a, b) {
    if ("number" === typeof a) return [b[a]];
    var c = f.map(b, function (a, b) {
      return a.nTable;
    });
    return f(c).filter(a).map(function (a) {
      a = f.inArray(this, c);
      return b[a];
    }).toArray();
  };

  t("tables()", function (a) {
    return a ? new v(fc(a, this.context)) : this;
  });
  t("table()", function (a) {
    a = this.tables(a);
    var b = a.context;
    return b.length ? new v(b[0]) : a;
  });
  x("tables().nodes()", "table().node()", function () {
    return this.iterator("table", function (a) {
      return a.nTable;
    }, 1);
  });
  x("tables().body()", "table().body()", function () {
    return this.iterator("table", function (a) {
      return a.nTBody;
    }, 1);
  });
  x("tables().header()", "table().header()", function () {
    return this.iterator("table", function (a) {
      return a.nTHead;
    }, 1);
  });
  x("tables().footer()", "table().footer()", function () {
    return this.iterator("table", function (a) {
      return a.nTFoot;
    }, 1);
  });
  x("tables().containers()", "table().container()", function () {
    return this.iterator("table", function (a) {
      return a.nTableWrapper;
    }, 1);
  });
  t("draw()", function (a) {
    return this.iterator("table", function (b) {
      "page" === a ? S(b) : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0), V(b, !1 === a));
    });
  });
  t("page()", function (a) {
    return a === p ? this.page.info().page : this.iterator("table", function (b) {
      Xa(b, a);
    });
  });
  t("page.info()", function (a) {
    if (0 === this.context.length) return p;
    a = this.context[0];
    var b = a._iDisplayStart,
        c = a.oFeatures.bPaginate ? a._iDisplayLength : -1,
        d = a.fnRecordsDisplay(),
        e = -1 === c;
    return {
      page: e ? 0 : Math.floor(b / c),
      pages: e ? 1 : Math.ceil(d / c),
      start: b,
      end: a.fnDisplayEnd(),
      length: c,
      recordsTotal: a.fnRecordsTotal(),
      recordsDisplay: d,
      serverSide: "ssp" === D(a)
    };
  });
  t("page.len()", function (a) {
    return a === p ? 0 !== this.context.length ? this.context[0]._iDisplayLength : p : this.iterator("table", function (b) {
      Va(b, a);
    });
  });

  var Xb = function Xb(a, b, c) {
    if (c) {
      var d = new v(a);
      d.one("draw", function () {
        c(d.ajax.json());
      });
    }

    if ("ssp" == D(a)) V(a, b);else {
      K(a, !0);
      var e = a.jqXHR;
      e && 4 !== e.readyState && e.abort();
      va(a, [], function (c) {
        qa(a);
        c = wa(a, c);

        for (var d = 0, e = c.length; d < e; d++) {
          R(a, c[d]);
        }

        V(a, b);
        K(a, !1);
      });
    }
  };

  t("ajax.json()", function () {
    var a = this.context;
    if (0 < a.length) return a[0].json;
  });
  t("ajax.params()", function () {
    var a = this.context;
    if (0 < a.length) return a[0].oAjaxData;
  });
  t("ajax.reload()", function (a, b) {
    return this.iterator("table", function (c) {
      Xb(c, !1 === b, a);
    });
  });
  t("ajax.url()", function (a) {
    var b = this.context;

    if (a === p) {
      if (0 === b.length) return p;
      b = b[0];
      return b.ajax ? f.isPlainObject(b.ajax) ? b.ajax.url : b.ajax : b.sAjaxSource;
    }

    return this.iterator("table", function (b) {
      f.isPlainObject(b.ajax) ? b.ajax.url = a : b.ajax = a;
    });
  });
  t("ajax.url().load()", function (a, b) {
    return this.iterator("table", function (c) {
      Xb(c, !1 === b, a);
    });
  });

  var eb = function eb(a, b, c, d, e) {
    var h = [],
        g,
        k,
        l;
    var n = typeof b;
    b && "string" !== n && "function" !== n && b.length !== p || (b = [b]);
    n = 0;

    for (k = b.length; n < k; n++) {
      var m = b[n] && b[n].split && !b[n].match(/[\[\(:]/) ? b[n].split(",") : [b[n]];
      var q = 0;

      for (l = m.length; q < l; q++) {
        (g = c("string" === typeof m[q] ? f.trim(m[q]) : m[q])) && g.length && (h = h.concat(g));
      }
    }

    a = C.selector[a];
    if (a.length) for (n = 0, k = a.length; n < k; n++) {
      h = a[n](d, e, h);
    }
    return ta(h);
  },
      fb = function fb(a) {
    a || (a = {});
    a.filter && a.search === p && (a.search = a.filter);
    return f.extend({
      search: "none",
      order: "current",
      page: "all"
    }, a);
  },
      gb = function gb(a) {
    for (var b = 0, c = a.length; b < c; b++) {
      if (0 < a[b].length) return a[0] = a[b], a[0].length = 1, a.length = 1, a.context = [a.context[b]], a;
    }

    a.length = 0;
    return a;
  },
      Fa = function Fa(a, b) {
    var c = [],
        d = a.aiDisplay;
    var e = a.aiDisplayMaster;
    var h = b.search;
    var g = b.order;
    b = b.page;
    if ("ssp" == D(a)) return "removed" === h ? [] : Z(0, e.length);
    if ("current" == b) for (g = a._iDisplayStart, a = a.fnDisplayEnd(); g < a; g++) {
      c.push(d[g]);
    } else if ("current" == g || "applied" == g) {
      if ("none" == h) c = e.slice();else if ("applied" == h) c = d.slice();else {
        if ("removed" == h) {
          var k = {};
          g = 0;

          for (a = d.length; g < a; g++) {
            k[d[g]] = null;
          }

          c = f.map(e, function (a) {
            return k.hasOwnProperty(a) ? null : a;
          });
        }
      }
    } else if ("index" == g || "original" == g) for (g = 0, a = a.aoData.length; g < a; g++) {
      "none" == h ? c.push(g) : (e = f.inArray(g, d), (-1 === e && "removed" == h || 0 <= e && "applied" == h) && c.push(g));
    }
    return c;
  },
      gc = function gc(a, b, c) {
    var d;
    return eb("row", b, function (b) {
      var e = Sb(b),
          g = a.aoData;
      if (null !== e && !c) return [e];
      d || (d = Fa(a, c));
      if (null !== e && -1 !== f.inArray(e, d)) return [e];
      if (null === b || b === p || "" === b) return d;
      if ("function" === typeof b) return f.map(d, function (a) {
        var c = g[a];
        return b(a, c._aData, c.nTr) ? a : null;
      });

      if (b.nodeName) {
        e = b._DT_RowIndex;
        var k = b._DT_CellIndex;
        if (e !== p) return g[e] && g[e].nTr === b ? [e] : [];
        if (k) return g[k.row] && g[k.row].nTr === b.parentNode ? [k.row] : [];
        e = f(b).closest("*[data-dt-row]");
        return e.length ? [e.data("dt-row")] : [];
      }

      if ("string" === typeof b && "#" === b.charAt(0) && (e = a.aIds[b.replace(/^#/, "")], e !== p)) return [e.idx];
      e = Vb(la(a.aoData, d, "nTr"));
      return f(e).filter(b).map(function () {
        return this._DT_RowIndex;
      }).toArray();
    }, a, c);
  };

  t("rows()", function (a, b) {
    a === p ? a = "" : f.isPlainObject(a) && (b = a, a = "");
    b = fb(b);
    var c = this.iterator("table", function (c) {
      return gc(c, a, b);
    }, 1);
    c.selector.rows = a;
    c.selector.opts = b;
    return c;
  });
  t("rows().nodes()", function () {
    return this.iterator("row", function (a, b) {
      return a.aoData[b].nTr || p;
    }, 1);
  });
  t("rows().data()", function () {
    return this.iterator(!0, "rows", function (a, b) {
      return la(a.aoData, b, "_aData");
    }, 1);
  });
  x("rows().cache()", "row().cache()", function (a) {
    return this.iterator("row", function (b, c) {
      b = b.aoData[c];
      return "search" === a ? b._aFilterData : b._aSortData;
    }, 1);
  });
  x("rows().invalidate()", "row().invalidate()", function (a) {
    return this.iterator("row", function (b, c) {
      ea(b, c, a);
    });
  });
  x("rows().indexes()", "row().index()", function () {
    return this.iterator("row", function (a, b) {
      return b;
    }, 1);
  });
  x("rows().ids()", "row().id()", function (a) {
    for (var b = [], c = this.context, d = 0, e = c.length; d < e; d++) {
      for (var h = 0, g = this[d].length; h < g; h++) {
        var f = c[d].rowIdFn(c[d].aoData[this[d][h]]._aData);
        b.push((!0 === a ? "#" : "") + f);
      }
    }

    return new v(c, b);
  });
  x("rows().remove()", "row().remove()", function () {
    var a = this;
    this.iterator("row", function (b, c, d) {
      var e = b.aoData,
          h = e[c],
          g,
          f;
      e.splice(c, 1);
      var l = 0;

      for (g = e.length; l < g; l++) {
        var n = e[l];
        var m = n.anCells;
        null !== n.nTr && (n.nTr._DT_RowIndex = l);
        if (null !== m) for (n = 0, f = m.length; n < f; n++) {
          m[n]._DT_CellIndex.row = l;
        }
      }

      ra(b.aiDisplayMaster, c);
      ra(b.aiDisplay, c);
      ra(a[d], c, !1);
      0 < b._iRecordsDisplay && b._iRecordsDisplay--;
      Wa(b);
      c = b.rowIdFn(h._aData);
      c !== p && delete b.aIds[c];
    });
    this.iterator("table", function (a) {
      for (var b = 0, d = a.aoData.length; b < d; b++) {
        a.aoData[b].idx = b;
      }
    });
    return this;
  });
  t("rows.add()", function (a) {
    var b = this.iterator("table", function (b) {
      var c,
          d = [];
      var g = 0;

      for (c = a.length; g < c; g++) {
        var f = a[g];
        f.nodeName && "TR" === f.nodeName.toUpperCase() ? d.push(pa(b, f)[0]) : d.push(R(b, f));
      }

      return d;
    }, 1),
        c = this.rows(-1);
    c.pop();
    f.merge(c, b);
    return c;
  });
  t("row()", function (a, b) {
    return gb(this.rows(a, b));
  });
  t("row().data()", function (a) {
    var b = this.context;
    if (a === p) return b.length && this.length ? b[0].aoData[this[0]]._aData : p;
    var c = b[0].aoData[this[0]];
    c._aData = a;
    f.isArray(a) && c.nTr.id && Q(b[0].rowId)(a, c.nTr.id);
    ea(b[0], this[0], "data");
    return this;
  });
  t("row().node()", function () {
    var a = this.context;
    return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null;
  });
  t("row.add()", function (a) {
    a instanceof f && a.length && (a = a[0]);
    var b = this.iterator("table", function (b) {
      return a.nodeName && "TR" === a.nodeName.toUpperCase() ? pa(b, a)[0] : R(b, a);
    });
    return this.row(b[0]);
  });

  var hc = function hc(a, b, c, d) {
    var e = [],
        h = function h(b, c) {
      if (f.isArray(b) || b instanceof f) for (var d = 0, g = b.length; d < g; d++) {
        h(b[d], c);
      } else b.nodeName && "tr" === b.nodeName.toLowerCase() ? e.push(b) : (d = f("<tr><td/></tr>").addClass(c), f("td", d).addClass(c).html(b)[0].colSpan = W(a), e.push(d[0]));
    };

    h(c, d);
    b._details && b._details.detach();
    b._details = f(e);
    b._detailsShow && b._details.insertAfter(b.nTr);
  },
      hb = function hb(a, b) {
    var c = a.context;
    c.length && (a = c[0].aoData[b !== p ? b : a[0]]) && a._details && (a._details.remove(), a._detailsShow = p, a._details = p);
  },
      Yb = function Yb(a, b) {
    var c = a.context;
    c.length && a.length && (a = c[0].aoData[a[0]], a._details && ((a._detailsShow = b) ? a._details.insertAfter(a.nTr) : a._details.detach(), ic(c[0])));
  },
      ic = function ic(a) {
    var b = new v(a),
        c = a.aoData;
    b.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
    0 < J(c, "_details").length && (b.on("draw.dt.DT_details", function (d, e) {
      a === e && b.rows({
        page: "current"
      }).eq(0).each(function (a) {
        a = c[a];
        a._detailsShow && a._details.insertAfter(a.nTr);
      });
    }), b.on("column-visibility.dt.DT_details", function (b, e, f, g) {
      if (a === e) for (e = W(e), f = 0, g = c.length; f < g; f++) {
        b = c[f], b._details && b._details.children("td[colspan]").attr("colspan", e);
      }
    }), b.on("destroy.dt.DT_details", function (d, e) {
      if (a === e) for (d = 0, e = c.length; d < e; d++) {
        c[d]._details && hb(b, d);
      }
    }));
  };

  t("row().child()", function (a, b) {
    var c = this.context;
    if (a === p) return c.length && this.length ? c[0].aoData[this[0]]._details : p;
    !0 === a ? this.child.show() : !1 === a ? hb(this) : c.length && this.length && hc(c[0], c[0].aoData[this[0]], a, b);
    return this;
  });
  t(["row().child.show()", "row().child().show()"], function (a) {
    Yb(this, !0);
    return this;
  });
  t(["row().child.hide()", "row().child().hide()"], function () {
    Yb(this, !1);
    return this;
  });
  t(["row().child.remove()", "row().child().remove()"], function () {
    hb(this);
    return this;
  });
  t("row().child.isShown()", function () {
    var a = this.context;
    return a.length && this.length ? a[0].aoData[this[0]]._detailsShow || !1 : !1;
  });

  var jc = /^([^:]+):(name|visIdx|visible)$/,
      Zb = function Zb(a, b, c, d, e) {
    c = [];
    d = 0;

    for (var f = e.length; d < f; d++) {
      c.push(I(a, e[d], b));
    }

    return c;
  },
      kc = function kc(a, b, c) {
    var d = a.aoColumns,
        e = J(d, "sName"),
        h = J(d, "nTh");
    return eb("column", b, function (b) {
      var g = Sb(b);
      if ("" === b) return Z(d.length);
      if (null !== g) return [0 <= g ? g : d.length + g];

      if ("function" === typeof b) {
        var l = Fa(a, c);
        return f.map(d, function (c, d) {
          return b(d, Zb(a, d, 0, 0, l), h[d]) ? d : null;
        });
      }

      var n = "string" === typeof b ? b.match(jc) : "";
      if (n) switch (n[2]) {
        case "visIdx":
        case "visible":
          g = parseInt(n[1], 10);

          if (0 > g) {
            var m = f.map(d, function (a, b) {
              return a.bVisible ? b : null;
            });
            return [m[m.length + g]];
          }

          return [ba(a, g)];

        case "name":
          return f.map(e, function (a, b) {
            return a === n[1] ? b : null;
          });

        default:
          return [];
      }
      if (b.nodeName && b._DT_CellIndex) return [b._DT_CellIndex.column];
      g = f(h).filter(b).map(function () {
        return f.inArray(this, h);
      }).toArray();
      if (g.length || !b.nodeName) return g;
      g = f(b).closest("*[data-dt-column]");
      return g.length ? [g.data("dt-column")] : [];
    }, a, c);
  };

  t("columns()", function (a, b) {
    a === p ? a = "" : f.isPlainObject(a) && (b = a, a = "");
    b = fb(b);
    var c = this.iterator("table", function (c) {
      return kc(c, a, b);
    }, 1);
    c.selector.cols = a;
    c.selector.opts = b;
    return c;
  });
  x("columns().header()", "column().header()", function (a, b) {
    return this.iterator("column", function (a, b) {
      return a.aoColumns[b].nTh;
    }, 1);
  });
  x("columns().footer()", "column().footer()", function (a, b) {
    return this.iterator("column", function (a, b) {
      return a.aoColumns[b].nTf;
    }, 1);
  });
  x("columns().data()", "column().data()", function () {
    return this.iterator("column-rows", Zb, 1);
  });
  x("columns().dataSrc()", "column().dataSrc()", function () {
    return this.iterator("column", function (a, b) {
      return a.aoColumns[b].mData;
    }, 1);
  });
  x("columns().cache()", "column().cache()", function (a) {
    return this.iterator("column-rows", function (b, c, d, e, f) {
      return la(b.aoData, f, "search" === a ? "_aFilterData" : "_aSortData", c);
    }, 1);
  });
  x("columns().nodes()", "column().nodes()", function () {
    return this.iterator("column-rows", function (a, b, c, d, e) {
      return la(a.aoData, e, "anCells", b);
    }, 1);
  });
  x("columns().visible()", "column().visible()", function (a, b) {
    var c = this,
        d = this.iterator("column", function (b, c) {
      if (a === p) return b.aoColumns[c].bVisible;
      var d = b.aoColumns,
          e = d[c],
          h = b.aoData,
          n;

      if (a !== p && e.bVisible !== a) {
        if (a) {
          var m = f.inArray(!0, J(d, "bVisible"), c + 1);
          d = 0;

          for (n = h.length; d < n; d++) {
            var q = h[d].nTr;
            b = h[d].anCells;
            q && q.insertBefore(b[c], b[m] || null);
          }
        } else f(J(b.aoData, "anCells", c)).detach();

        e.bVisible = a;
      }
    });
    a !== p && this.iterator("table", function (d) {
      ha(d, d.aoHeader);
      ha(d, d.aoFooter);
      d.aiDisplay.length || f(d.nTBody).find("td[colspan]").attr("colspan", W(d));
      Ba(d);
      c.iterator("column", function (c, d) {
        A(c, null, "column-visibility", [c, d, a, b]);
      });
      (b === p || b) && c.columns.adjust();
    });
    return d;
  });
  x("columns().indexes()", "column().index()", function (a) {
    return this.iterator("column", function (b, c) {
      return "visible" === a ? ca(b, c) : c;
    }, 1);
  });
  t("columns.adjust()", function () {
    return this.iterator("table", function (a) {
      aa(a);
    }, 1);
  });
  t("column.index()", function (a, b) {
    if (0 !== this.context.length) {
      var c = this.context[0];
      if ("fromVisible" === a || "toData" === a) return ba(c, b);
      if ("fromData" === a || "toVisible" === a) return ca(c, b);
    }
  });
  t("column()", function (a, b) {
    return gb(this.columns(a, b));
  });

  var lc = function lc(a, b, c) {
    var d = a.aoData,
        e = Fa(a, c),
        h = Vb(la(d, e, "anCells")),
        g = f([].concat.apply([], h)),
        k,
        l = a.aoColumns.length,
        n,
        m,
        q,
        u,
        t,
        v;
    return eb("cell", b, function (b) {
      var c = "function" === typeof b;

      if (null === b || b === p || c) {
        n = [];
        m = 0;

        for (q = e.length; m < q; m++) {
          for (k = e[m], u = 0; u < l; u++) {
            t = {
              row: k,
              column: u
            }, c ? (v = d[k], b(t, I(a, k, u), v.anCells ? v.anCells[u] : null) && n.push(t)) : n.push(t);
          }
        }

        return n;
      }

      if (f.isPlainObject(b)) return b.column !== p && b.row !== p && -1 !== f.inArray(b.row, e) ? [b] : [];
      c = g.filter(b).map(function (a, b) {
        return {
          row: b._DT_CellIndex.row,
          column: b._DT_CellIndex.column
        };
      }).toArray();
      if (c.length || !b.nodeName) return c;
      v = f(b).closest("*[data-dt-row]");
      return v.length ? [{
        row: v.data("dt-row"),
        column: v.data("dt-column")
      }] : [];
    }, a, c);
  };

  t("cells()", function (a, b, c) {
    f.isPlainObject(a) && (a.row === p ? (c = a, a = null) : (c = b, b = null));
    f.isPlainObject(b) && (c = b, b = null);
    if (null === b || b === p) return this.iterator("table", function (b) {
      return lc(b, a, fb(c));
    });
    var d = c ? {
      page: c.page,
      order: c.order,
      search: c.search
    } : {},
        e = this.columns(b, d),
        h = this.rows(a, d),
        g,
        k,
        l,
        n;
    d = this.iterator("table", function (a, b) {
      a = [];
      g = 0;

      for (k = h[b].length; g < k; g++) {
        for (l = 0, n = e[b].length; l < n; l++) {
          a.push({
            row: h[b][g],
            column: e[b][l]
          });
        }
      }

      return a;
    }, 1);
    d = c && c.selected ? this.cells(d, c) : d;
    f.extend(d.selector, {
      cols: b,
      rows: a,
      opts: c
    });
    return d;
  });
  x("cells().nodes()", "cell().node()", function () {
    return this.iterator("cell", function (a, b, c) {
      return (a = a.aoData[b]) && a.anCells ? a.anCells[c] : p;
    }, 1);
  });
  t("cells().data()", function () {
    return this.iterator("cell", function (a, b, c) {
      return I(a, b, c);
    }, 1);
  });
  x("cells().cache()", "cell().cache()", function (a) {
    a = "search" === a ? "_aFilterData" : "_aSortData";
    return this.iterator("cell", function (b, c, d) {
      return b.aoData[c][a][d];
    }, 1);
  });
  x("cells().render()", "cell().render()", function (a) {
    return this.iterator("cell", function (b, c, d) {
      return I(b, c, d, a);
    }, 1);
  });
  x("cells().indexes()", "cell().index()", function () {
    return this.iterator("cell", function (a, b, c) {
      return {
        row: b,
        column: c,
        columnVisible: ca(a, c)
      };
    }, 1);
  });
  x("cells().invalidate()", "cell().invalidate()", function (a) {
    return this.iterator("cell", function (b, c, d) {
      ea(b, c, a, d);
    });
  });
  t("cell()", function (a, b, c) {
    return gb(this.cells(a, b, c));
  });
  t("cell().data()", function (a) {
    var b = this.context,
        c = this[0];
    if (a === p) return b.length && c.length ? I(b[0], c[0].row, c[0].column) : p;
    ob(b[0], c[0].row, c[0].column, a);
    ea(b[0], c[0].row, "data", c[0].column);
    return this;
  });
  t("order()", function (a, b) {
    var c = this.context;
    if (a === p) return 0 !== c.length ? c[0].aaSorting : p;
    "number" === typeof a ? a = [[a, b]] : a.length && !f.isArray(a[0]) && (a = Array.prototype.slice.call(arguments));
    return this.iterator("table", function (b) {
      b.aaSorting = a.slice();
    });
  });
  t("order.listener()", function (a, b, c) {
    return this.iterator("table", function (d) {
      Qa(d, a, b, c);
    });
  });
  t("order.fixed()", function (a) {
    if (!a) {
      var b = this.context;
      b = b.length ? b[0].aaSortingFixed : p;
      return f.isArray(b) ? {
        pre: b
      } : b;
    }

    return this.iterator("table", function (b) {
      b.aaSortingFixed = f.extend(!0, {}, a);
    });
  });
  t(["columns().order()", "column().order()"], function (a) {
    var b = this;
    return this.iterator("table", function (c, d) {
      var e = [];
      f.each(b[d], function (b, c) {
        e.push([c, a]);
      });
      c.aaSorting = e;
    });
  });
  t("search()", function (a, b, c, d) {
    var e = this.context;
    return a === p ? 0 !== e.length ? e[0].oPreviousSearch.sSearch : p : this.iterator("table", function (e) {
      e.oFeatures.bFilter && ia(e, f.extend({}, e.oPreviousSearch, {
        sSearch: a + "",
        bRegex: null === b ? !1 : b,
        bSmart: null === c ? !0 : c,
        bCaseInsensitive: null === d ? !0 : d
      }), 1);
    });
  });
  x("columns().search()", "column().search()", function (a, b, c, d) {
    return this.iterator("column", function (e, h) {
      var g = e.aoPreSearchCols;
      if (a === p) return g[h].sSearch;
      e.oFeatures.bFilter && (f.extend(g[h], {
        sSearch: a + "",
        bRegex: null === b ? !1 : b,
        bSmart: null === c ? !0 : c,
        bCaseInsensitive: null === d ? !0 : d
      }), ia(e, e.oPreviousSearch, 1));
    });
  });
  t("state()", function () {
    return this.context.length ? this.context[0].oSavedState : null;
  });
  t("state.clear()", function () {
    return this.iterator("table", function (a) {
      a.fnStateSaveCallback.call(a.oInstance, a, {});
    });
  });
  t("state.loaded()", function () {
    return this.context.length ? this.context[0].oLoadedState : null;
  });
  t("state.save()", function () {
    return this.iterator("table", function (a) {
      Ba(a);
    });
  });

  q.versionCheck = q.fnVersionCheck = function (a) {
    var b = q.version.split(".");
    a = a.split(".");

    for (var c, d, e = 0, f = a.length; e < f; e++) {
      if (c = parseInt(b[e], 10) || 0, d = parseInt(a[e], 10) || 0, c !== d) return c > d;
    }

    return !0;
  };

  q.isDataTable = q.fnIsDataTable = function (a) {
    var b = f(a).get(0),
        c = !1;
    if (a instanceof q.Api) return !0;
    f.each(q.settings, function (a, e) {
      a = e.nScrollHead ? f("table", e.nScrollHead)[0] : null;
      var d = e.nScrollFoot ? f("table", e.nScrollFoot)[0] : null;
      if (e.nTable === b || a === b || d === b) c = !0;
    });
    return c;
  };

  q.tables = q.fnTables = function (a) {
    var b = !1;
    f.isPlainObject(a) && (b = a.api, a = a.visible);
    var c = f.map(q.settings, function (b) {
      if (!a || a && f(b.nTable).is(":visible")) return b.nTable;
    });
    return b ? new v(c) : c;
  };

  q.camelToHungarian = L;
  t("$()", function (a, b) {
    b = this.rows(b).nodes();
    b = f(b);
    return f([].concat(b.filter(a).toArray(), b.find(a).toArray()));
  });
  f.each(["on", "one", "off"], function (a, b) {
    t(b + "()", function () {
      var a = Array.prototype.slice.call(arguments);
      a[0] = f.map(a[0].split(/\s/), function (a) {
        return a.match(/\.dt\b/) ? a : a + ".dt";
      }).join(" ");
      var d = f(this.tables().nodes());
      d[b].apply(d, a);
      return this;
    });
  });
  t("clear()", function () {
    return this.iterator("table", function (a) {
      qa(a);
    });
  });
  t("settings()", function () {
    return new v(this.context, this.context);
  });
  t("init()", function () {
    var a = this.context;
    return a.length ? a[0].oInit : null;
  });
  t("data()", function () {
    return this.iterator("table", function (a) {
      return J(a.aoData, "_aData");
    }).flatten();
  });
  t("destroy()", function (a) {
    a = a || !1;
    return this.iterator("table", function (b) {
      var c = b.nTableWrapper.parentNode,
          d = b.oClasses,
          e = b.nTable,
          h = b.nTBody,
          g = b.nTHead,
          k = b.nTFoot,
          l = f(e);
      h = f(h);
      var n = f(b.nTableWrapper),
          m = f.map(b.aoData, function (a) {
        return a.nTr;
      }),
          p;
      b.bDestroying = !0;
      A(b, "aoDestroyCallback", "destroy", [b]);
      a || new v(b).columns().visible(!0);
      n.off(".DT").find(":not(tbody *)").off(".DT");
      f(z).off(".DT-" + b.sInstance);
      e != g.parentNode && (l.children("thead").detach(), l.append(g));
      k && e != k.parentNode && (l.children("tfoot").detach(), l.append(k));
      b.aaSorting = [];
      b.aaSortingFixed = [];
      Aa(b);
      f(m).removeClass(b.asStripeClasses.join(" "));
      f("th, td", g).removeClass(d.sSortable + " " + d.sSortableAsc + " " + d.sSortableDesc + " " + d.sSortableNone);
      h.children().detach();
      h.append(m);
      g = a ? "remove" : "detach";
      l[g]();
      n[g]();
      !a && c && (c.insertBefore(e, b.nTableReinsertBefore), l.css("width", b.sDestroyWidth).removeClass(d.sTable), (p = b.asDestroyStripes.length) && h.children().each(function (a) {
        f(this).addClass(b.asDestroyStripes[a % p]);
      }));
      c = f.inArray(b, q.settings);
      -1 !== c && q.settings.splice(c, 1);
    });
  });
  f.each(["column", "row", "cell"], function (a, b) {
    t(b + "s().every()", function (a) {
      var c = this.selector.opts,
          e = this;
      return this.iterator(b, function (d, f, k, l, n) {
        a.call(e[b](f, "cell" === b ? k : c, "cell" === b ? c : p), f, k, l, n);
      });
    });
  });
  t("i18n()", function (a, b, c) {
    var d = this.context[0];
    a = U(a)(d.oLanguage);
    a === p && (a = b);
    c !== p && f.isPlainObject(a) && (a = a[c] !== p ? a[c] : a._);
    return a.replace("%d", c);
  });
  q.version = "1.10.20";
  q.settings = [];
  q.models = {};
  q.models.oSearch = {
    bCaseInsensitive: !0,
    sSearch: "",
    bRegex: !1,
    bSmart: !0
  };
  q.models.oRow = {
    nTr: null,
    anCells: null,
    _aData: [],
    _aSortData: null,
    _aFilterData: null,
    _sFilterRow: null,
    _sRowStripe: "",
    src: null,
    idx: -1
  };
  q.models.oColumn = {
    idx: null,
    aDataSort: null,
    asSorting: null,
    bSearchable: null,
    bSortable: null,
    bVisible: null,
    _sManualType: null,
    _bAttrSrc: !1,
    fnCreatedCell: null,
    fnGetData: null,
    fnSetData: null,
    mData: null,
    mRender: null,
    nTh: null,
    nTf: null,
    sClass: null,
    sContentPadding: null,
    sDefaultContent: null,
    sName: null,
    sSortDataType: "std",
    sSortingClass: null,
    sSortingClassJUI: null,
    sTitle: null,
    sType: null,
    sWidth: null,
    sWidthOrig: null
  };
  q.defaults = {
    aaData: null,
    aaSorting: [[0, "asc"]],
    aaSortingFixed: [],
    ajax: null,
    aLengthMenu: [10, 25, 50, 100],
    aoColumns: null,
    aoColumnDefs: null,
    aoSearchCols: [],
    asStripeClasses: null,
    bAutoWidth: !0,
    bDeferRender: !1,
    bDestroy: !1,
    bFilter: !0,
    bInfo: !0,
    bLengthChange: !0,
    bPaginate: !0,
    bProcessing: !1,
    bRetrieve: !1,
    bScrollCollapse: !1,
    bServerSide: !1,
    bSort: !0,
    bSortMulti: !0,
    bSortCellsTop: !1,
    bSortClasses: !0,
    bStateSave: !1,
    fnCreatedRow: null,
    fnDrawCallback: null,
    fnFooterCallback: null,
    fnFormatNumber: function fnFormatNumber(a) {
      return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands);
    },
    fnHeaderCallback: null,
    fnInfoCallback: null,
    fnInitComplete: null,
    fnPreDrawCallback: null,
    fnRowCallback: null,
    fnServerData: null,
    fnServerParams: null,
    fnStateLoadCallback: function fnStateLoadCallback(a) {
      try {
        return JSON.parse((-1 === a.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + a.sInstance + "_" + location.pathname));
      } catch (b) {}
    },
    fnStateLoadParams: null,
    fnStateLoaded: null,
    fnStateSaveCallback: function fnStateSaveCallback(a, b) {
      try {
        (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + a.sInstance + "_" + location.pathname, JSON.stringify(b));
      } catch (c) {}
    },
    fnStateSaveParams: null,
    iStateDuration: 7200,
    iDeferLoading: null,
    iDisplayLength: 10,
    iDisplayStart: 0,
    iTabIndex: 0,
    oClasses: {},
    oLanguage: {
      oAria: {
        sSortAscending: ": activate to sort column ascending",
        sSortDescending: ": activate to sort column descending"
      },
      oPaginate: {
        sFirst: "First",
        sLast: "Last",
        sNext: "Next",
        sPrevious: "Previous"
      },
      sEmptyTable: "No data available in table",
      sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
      sInfoEmpty: "Showing 0 to 0 of 0 entries",
      sInfoFiltered: "(filtered from _MAX_ total entries)",
      sInfoPostFix: "",
      sDecimal: "",
      sThousands: ",",
      sLengthMenu: "Show _MENU_ entries",
      sLoadingRecords: "Loading...",
      sProcessing: "Processing...",
      sSearch: "Search:",
      sSearchPlaceholder: "",
      sUrl: "",
      sZeroRecords: "No matching records found"
    },
    oSearch: f.extend({}, q.models.oSearch),
    sAjaxDataProp: "data",
    sAjaxSource: null,
    sDom: "lfrtip",
    searchDelay: null,
    sPaginationType: "simple_numbers",
    sScrollX: "",
    sScrollXInner: "",
    sScrollY: "",
    sServerMethod: "GET",
    renderer: null,
    rowId: "DT_RowId"
  };
  H(q.defaults);
  q.defaults.column = {
    aDataSort: null,
    iDataSort: -1,
    asSorting: ["asc", "desc"],
    bSearchable: !0,
    bSortable: !0,
    bVisible: !0,
    fnCreatedCell: null,
    mData: null,
    mRender: null,
    sCellType: "td",
    sClass: "",
    sContentPadding: "",
    sDefaultContent: null,
    sName: "",
    sSortDataType: "std",
    sTitle: null,
    sType: null,
    sWidth: null
  };
  H(q.defaults.column);
  q.models.oSettings = {
    oFeatures: {
      bAutoWidth: null,
      bDeferRender: null,
      bFilter: null,
      bInfo: null,
      bLengthChange: null,
      bPaginate: null,
      bProcessing: null,
      bServerSide: null,
      bSort: null,
      bSortMulti: null,
      bSortClasses: null,
      bStateSave: null
    },
    oScroll: {
      bCollapse: null,
      iBarWidth: 0,
      sX: null,
      sXInner: null,
      sY: null
    },
    oLanguage: {
      fnInfoCallback: null
    },
    oBrowser: {
      bScrollOversize: !1,
      bScrollbarLeft: !1,
      bBounding: !1,
      barWidth: 0
    },
    ajax: null,
    aanFeatures: [],
    aoData: [],
    aiDisplay: [],
    aiDisplayMaster: [],
    aIds: {},
    aoColumns: [],
    aoHeader: [],
    aoFooter: [],
    oPreviousSearch: {},
    aoPreSearchCols: [],
    aaSorting: null,
    aaSortingFixed: [],
    asStripeClasses: null,
    asDestroyStripes: [],
    sDestroyWidth: 0,
    aoRowCallback: [],
    aoHeaderCallback: [],
    aoFooterCallback: [],
    aoDrawCallback: [],
    aoRowCreatedCallback: [],
    aoPreDrawCallback: [],
    aoInitComplete: [],
    aoStateSaveParams: [],
    aoStateLoadParams: [],
    aoStateLoaded: [],
    sTableId: "",
    nTable: null,
    nTHead: null,
    nTFoot: null,
    nTBody: null,
    nTableWrapper: null,
    bDeferLoading: !1,
    bInitialised: !1,
    aoOpenRows: [],
    sDom: null,
    searchDelay: null,
    sPaginationType: "two_button",
    iStateDuration: 0,
    aoStateSave: [],
    aoStateLoad: [],
    oSavedState: null,
    oLoadedState: null,
    sAjaxSource: null,
    sAjaxDataProp: null,
    bAjaxDataGet: !0,
    jqXHR: null,
    json: p,
    oAjaxData: p,
    fnServerData: null,
    aoServerParams: [],
    sServerMethod: null,
    fnFormatNumber: null,
    aLengthMenu: null,
    iDraw: 0,
    bDrawing: !1,
    iDrawError: -1,
    _iDisplayLength: 10,
    _iDisplayStart: 0,
    _iRecordsTotal: 0,
    _iRecordsDisplay: 0,
    oClasses: {},
    bFiltered: !1,
    bSorted: !1,
    bSortCellsTop: null,
    oInit: null,
    aoDestroyCallback: [],
    fnRecordsTotal: function fnRecordsTotal() {
      return "ssp" == D(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length;
    },
    fnRecordsDisplay: function fnRecordsDisplay() {
      return "ssp" == D(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length;
    },
    fnDisplayEnd: function fnDisplayEnd() {
      var a = this._iDisplayLength,
          b = this._iDisplayStart,
          c = b + a,
          d = this.aiDisplay.length,
          e = this.oFeatures,
          f = e.bPaginate;
      return e.bServerSide ? !1 === f || -1 === a ? b + d : Math.min(b + a, this._iRecordsDisplay) : !f || c > d || -1 === a ? d : c;
    },
    oInstance: null,
    sInstance: null,
    iTabIndex: 0,
    nScrollHead: null,
    nScrollFoot: null,
    aLastSort: [],
    oPlugins: {},
    rowIdFn: null,
    rowId: null
  };
  q.ext = C = {
    buttons: {},
    classes: {},
    builder: "-source-",
    errMode: "alert",
    feature: [],
    search: [],
    selector: {
      cell: [],
      column: [],
      row: []
    },
    internal: {},
    legacy: {
      ajax: null
    },
    pager: {},
    renderer: {
      pageButton: {},
      header: {}
    },
    order: {},
    type: {
      detect: [],
      search: {},
      order: {}
    },
    _unique: 0,
    fnVersionCheck: q.fnVersionCheck,
    iApiIndex: 0,
    oJUIClasses: {},
    sVersion: q.version
  };
  f.extend(C, {
    afnFiltering: C.search,
    aTypes: C.type.detect,
    ofnSearch: C.type.search,
    oSort: C.type.order,
    afnSortData: C.order,
    aoFeatures: C.feature,
    oApi: C.internal,
    oStdClasses: C.classes,
    oPagination: C.pager
  });
  f.extend(q.ext.classes, {
    sTable: "dataTable",
    sNoFooter: "no-footer",
    sPageButton: "paginate_button",
    sPageButtonActive: "current",
    sPageButtonDisabled: "disabled",
    sStripeOdd: "odd",
    sStripeEven: "even",
    sRowEmpty: "dataTables_empty",
    sWrapper: "dataTables_wrapper",
    sFilter: "dataTables_filter",
    sInfo: "dataTables_info",
    sPaging: "dataTables_paginate paging_",
    sLength: "dataTables_length",
    sProcessing: "dataTables_processing",
    sSortAsc: "sorting_asc",
    sSortDesc: "sorting_desc",
    sSortable: "sorting",
    sSortableAsc: "sorting_asc_disabled",
    sSortableDesc: "sorting_desc_disabled",
    sSortableNone: "sorting_disabled",
    sSortColumn: "sorting_",
    sFilterInput: "",
    sLengthSelect: "",
    sScrollWrapper: "dataTables_scroll",
    sScrollHead: "dataTables_scrollHead",
    sScrollHeadInner: "dataTables_scrollHeadInner",
    sScrollBody: "dataTables_scrollBody",
    sScrollFoot: "dataTables_scrollFoot",
    sScrollFootInner: "dataTables_scrollFootInner",
    sHeaderTH: "",
    sFooterTH: "",
    sSortJUIAsc: "",
    sSortJUIDesc: "",
    sSortJUI: "",
    sSortJUIAscAllowed: "",
    sSortJUIDescAllowed: "",
    sSortJUIWrapper: "",
    sSortIcon: "",
    sJUIHeader: "",
    sJUIFooter: ""
  });
  var Pb = q.ext.pager;
  f.extend(Pb, {
    simple: function simple(a, b) {
      return ["previous", "next"];
    },
    full: function full(a, b) {
      return ["first", "previous", "next", "last"];
    },
    numbers: function numbers(a, b) {
      return [ka(a, b)];
    },
    simple_numbers: function simple_numbers(a, b) {
      return ["previous", ka(a, b), "next"];
    },
    full_numbers: function full_numbers(a, b) {
      return ["first", "previous", ka(a, b), "next", "last"];
    },
    first_last_numbers: function first_last_numbers(a, b) {
      return ["first", ka(a, b), "last"];
    },
    _numbers: ka,
    numbers_length: 7
  });
  f.extend(!0, q.ext.renderer, {
    pageButton: {
      _: function _(a, b, c, d, e, h) {
        var g = a.oClasses,
            k = a.oLanguage.oPaginate,
            l = a.oLanguage.oAria.paginate || {},
            n,
            m,
            q = 0,
            t = function t(b, d) {
          var p,
              r = g.sPageButtonDisabled,
              u = function u(b) {
            Xa(a, b.data.action, !0);
          };

          var w = 0;

          for (p = d.length; w < p; w++) {
            var v = d[w];

            if (f.isArray(v)) {
              var x = f("<" + (v.DT_el || "div") + "/>").appendTo(b);
              t(x, v);
            } else {
              n = null;
              m = v;
              x = a.iTabIndex;

              switch (v) {
                case "ellipsis":
                  b.append('<span class="ellipsis">&#x2026;</span>');
                  break;

                case "first":
                  n = k.sFirst;
                  0 === e && (x = -1, m += " " + r);
                  break;

                case "previous":
                  n = k.sPrevious;
                  0 === e && (x = -1, m += " " + r);
                  break;

                case "next":
                  n = k.sNext;
                  e === h - 1 && (x = -1, m += " " + r);
                  break;

                case "last":
                  n = k.sLast;
                  e === h - 1 && (x = -1, m += " " + r);
                  break;

                default:
                  n = v + 1, m = e === v ? g.sPageButtonActive : "";
              }

              null !== n && (x = f("<a>", {
                "class": g.sPageButton + " " + m,
                "aria-controls": a.sTableId,
                "aria-label": l[v],
                "data-dt-idx": q,
                tabindex: x,
                id: 0 === c && "string" === typeof v ? a.sTableId + "_" + v : null
              }).html(n).appendTo(b), $a(x, {
                action: v
              }, u), q++);
            }
          }
        };

        try {
          var v = f(b).find(y.activeElement).data("dt-idx");
        } catch (mc) {}

        t(f(b).empty(), d);
        v !== p && f(b).find("[data-dt-idx=" + v + "]").focus();
      }
    }
  });
  f.extend(q.ext.type.detect, [function (a, b) {
    b = b.oLanguage.sDecimal;
    return db(a, b) ? "num" + b : null;
  }, function (a, b) {
    if (a && !(a instanceof Date) && !cc.test(a)) return null;
    b = Date.parse(a);
    return null !== b && !isNaN(b) || P(a) ? "date" : null;
  }, function (a, b) {
    b = b.oLanguage.sDecimal;
    return db(a, b, !0) ? "num-fmt" + b : null;
  }, function (a, b) {
    b = b.oLanguage.sDecimal;
    return Ub(a, b) ? "html-num" + b : null;
  }, function (a, b) {
    b = b.oLanguage.sDecimal;
    return Ub(a, b, !0) ? "html-num-fmt" + b : null;
  }, function (a, b) {
    return P(a) || "string" === typeof a && -1 !== a.indexOf("<") ? "html" : null;
  }]);
  f.extend(q.ext.type.search, {
    html: function html(a) {
      return P(a) ? a : "string" === typeof a ? a.replace(Rb, " ").replace(Ea, "") : "";
    },
    string: function string(a) {
      return P(a) ? a : "string" === typeof a ? a.replace(Rb, " ") : a;
    }
  });

  var Da = function Da(a, b, c, d) {
    if (0 !== a && (!a || "-" === a)) return -Infinity;
    b && (a = Tb(a, b));
    a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, "")));
    return 1 * a;
  };

  f.extend(C.type.order, {
    "date-pre": function datePre(a) {
      a = Date.parse(a);
      return isNaN(a) ? -Infinity : a;
    },
    "html-pre": function htmlPre(a) {
      return P(a) ? "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + "";
    },
    "string-pre": function stringPre(a) {
      return P(a) ? "" : "string" === typeof a ? a.toLowerCase() : a.toString ? a.toString() : "";
    },
    "string-asc": function stringAsc(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    },
    "string-desc": function stringDesc(a, b) {
      return a < b ? 1 : a > b ? -1 : 0;
    }
  });
  Ha("");
  f.extend(!0, q.ext.renderer, {
    header: {
      _: function _(a, b, c, d) {
        f(a.nTable).on("order.dt.DT", function (e, f, g, k) {
          a === f && (e = c.idx, b.removeClass(c.sSortingClass + " " + d.sSortAsc + " " + d.sSortDesc).addClass("asc" == k[e] ? d.sSortAsc : "desc" == k[e] ? d.sSortDesc : c.sSortingClass));
        });
      },
      jqueryui: function jqueryui(a, b, c, d) {
        f("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(f("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI)).appendTo(b);
        f(a.nTable).on("order.dt.DT", function (e, f, g, k) {
          a === f && (e = c.idx, b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass("asc" == k[e] ? d.sSortAsc : "desc" == k[e] ? d.sSortDesc : c.sSortingClass), b.find("span." + d.sSortIcon).removeClass(d.sSortJUIAsc + " " + d.sSortJUIDesc + " " + d.sSortJUI + " " + d.sSortJUIAscAllowed + " " + d.sSortJUIDescAllowed).addClass("asc" == k[e] ? d.sSortJUIAsc : "desc" == k[e] ? d.sSortJUIDesc : c.sSortingClassJUI));
        });
      }
    }
  });

  var ib = function ib(a) {
    return "string" === typeof a ? a.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : a;
  };

  q.render = {
    number: function number(a, b, c, d, e) {
      return {
        display: function display(f) {
          if ("number" !== typeof f && "string" !== typeof f) return f;
          var g = 0 > f ? "-" : "",
              h = parseFloat(f);
          if (isNaN(h)) return ib(f);
          h = h.toFixed(c);
          f = Math.abs(h);
          h = parseInt(f, 10);
          f = c ? b + (f - h).toFixed(c).substring(2) : "";
          return g + (d || "") + h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) + f + (e || "");
        }
      };
    },
    text: function text() {
      return {
        display: ib,
        filter: ib
      };
    }
  };
  f.extend(q.ext.internal, {
    _fnExternApiFunc: Qb,
    _fnBuildAjax: va,
    _fnAjaxUpdate: qb,
    _fnAjaxParameters: zb,
    _fnAjaxUpdateDraw: Ab,
    _fnAjaxDataSrc: wa,
    _fnAddColumn: Ia,
    _fnColumnOptions: ma,
    _fnAdjustColumnSizing: aa,
    _fnVisibleToColumnIndex: ba,
    _fnColumnIndexToVisible: ca,
    _fnVisbleColumns: W,
    _fnGetColumns: oa,
    _fnColumnTypes: Ka,
    _fnApplyColumnDefs: nb,
    _fnHungarianMap: H,
    _fnCamelToHungarian: L,
    _fnLanguageCompat: Ga,
    _fnBrowserDetect: lb,
    _fnAddData: R,
    _fnAddTr: pa,
    _fnNodeToDataIndex: function _fnNodeToDataIndex(a, b) {
      return b._DT_RowIndex !== p ? b._DT_RowIndex : null;
    },
    _fnNodeToColumnIndex: function _fnNodeToColumnIndex(a, b, c) {
      return f.inArray(c, a.aoData[b].anCells);
    },
    _fnGetCellData: I,
    _fnSetCellData: ob,
    _fnSplitObjNotation: Na,
    _fnGetObjectDataFn: U,
    _fnSetObjectDataFn: Q,
    _fnGetDataMaster: Oa,
    _fnClearTable: qa,
    _fnDeleteIndex: ra,
    _fnInvalidate: ea,
    _fnGetRowElements: Ma,
    _fnCreateTr: La,
    _fnBuildHead: pb,
    _fnDrawHead: ha,
    _fnDraw: S,
    _fnReDraw: V,
    _fnAddOptionsHtml: sb,
    _fnDetectHeader: fa,
    _fnGetUniqueThs: ua,
    _fnFeatureHtmlFilter: ub,
    _fnFilterComplete: ia,
    _fnFilterCustom: Db,
    _fnFilterColumn: Cb,
    _fnFilter: Bb,
    _fnFilterCreateSearch: Ta,
    _fnEscapeRegex: Ua,
    _fnFilterData: Eb,
    _fnFeatureHtmlInfo: xb,
    _fnUpdateInfo: Hb,
    _fnInfoMacros: Ib,
    _fnInitialise: ja,
    _fnInitComplete: xa,
    _fnLengthChange: Va,
    _fnFeatureHtmlLength: tb,
    _fnFeatureHtmlPaginate: yb,
    _fnPageChange: Xa,
    _fnFeatureHtmlProcessing: vb,
    _fnProcessingDisplay: K,
    _fnFeatureHtmlTable: wb,
    _fnScrollDraw: na,
    _fnApplyToChildren: N,
    _fnCalculateColumnWidths: Ja,
    _fnThrottle: Sa,
    _fnConvertToWidth: Jb,
    _fnGetWidestNode: Kb,
    _fnGetMaxLenString: Lb,
    _fnStringToCss: B,
    _fnSortFlatten: Y,
    _fnSort: rb,
    _fnSortAria: Nb,
    _fnSortListener: Za,
    _fnSortAttachListener: Qa,
    _fnSortingClasses: Aa,
    _fnSortData: Mb,
    _fnSaveState: Ba,
    _fnLoadState: Ob,
    _fnSettingsFromNode: Ca,
    _fnLog: O,
    _fnMap: M,
    _fnBindAction: $a,
    _fnCallbackReg: E,
    _fnCallbackFire: A,
    _fnLengthOverflow: Wa,
    _fnRenderer: Ra,
    _fnDataSource: D,
    _fnRowAttributes: Pa,
    _fnExtend: ab,
    _fnCalculateEnd: function _fnCalculateEnd() {}
  });
  f.fn.dataTable = q;
  q.$ = f;
  f.fn.dataTableSettings = q.settings;
  f.fn.dataTableExt = q.ext;

  f.fn.DataTable = function (a) {
    return f(this).dataTable(a).api();
  };

  f.each(q, function (a, b) {
    f.fn.DataTable[a] = b;
  });
  return f.fn.dataTable;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/assets/packs/jquery.slimscroll.min.js":
/*!***************************************************!*\
  !*** ./app/assets/packs/jquery.slimscroll.min.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.8
 *
 */
(function (e) {
  e.fn.extend({
    slimScroll: function slimScroll(f) {
      var a = e.extend({
        width: "auto",
        height: "250px",
        size: "7px",
        color: "#000",
        position: "right",
        distance: "1px",
        start: "top",
        opacity: .4,
        alwaysVisible: !1,
        disableFadeOut: !1,
        railVisible: !1,
        railColor: "#333",
        railOpacity: .2,
        railDraggable: !0,
        railClass: "slimScrollRail",
        barClass: "slimScrollBar",
        wrapperClass: "slimScrollDiv",
        allowPageScroll: !1,
        wheelStep: 20,
        touchScrollStep: 200,
        borderRadius: "7px",
        railBorderRadius: "7px"
      }, f);
      this.each(function () {
        function v(d) {
          if (r) {
            d = d || window.event;
            var c = 0;
            d.wheelDelta && (c = -d.wheelDelta / 120);
            d.detail && (c = d.detail / 3);
            e(d.target || d.srcTarget || d.srcElement).closest("." + a.wrapperClass).is(b.parent()) && n(c, !0);
            d.preventDefault && !k && d.preventDefault();
            k || (d.returnValue = !1);
          }
        }

        function n(d, g, e) {
          k = !1;
          var f = b.outerHeight() - c.outerHeight();
          g && (g = parseInt(c.css("top")) + d * parseInt(a.wheelStep) / 100 * c.outerHeight(), g = Math.min(Math.max(g, 0), f), g = 0 < d ? Math.ceil(g) : Math.floor(g), c.css({
            top: g + "px"
          }));
          l = parseInt(c.css("top")) / (b.outerHeight() - c.outerHeight());
          g = l * (b[0].scrollHeight - b.outerHeight());
          e && (g = d, d = g / b[0].scrollHeight * b.outerHeight(), d = Math.min(Math.max(d, 0), f), c.css({
            top: d + "px"
          }));
          b.scrollTop(g);
          b.trigger("slimscrolling", ~~g);
          w();
          p();
        }

        function x() {
          u = Math.max(b.outerHeight() / b[0].scrollHeight * b.outerHeight(), 30);
          c.css({
            height: u + "px"
          });
          var a = u == b.outerHeight() ? "none" : "block";
          c.css({
            display: a
          });
        }

        function w() {
          x();
          clearTimeout(B);
          l == ~~l ? (k = a.allowPageScroll, C != l && b.trigger("slimscroll", 0 == ~~l ? "top" : "bottom")) : k = !1;
          C = l;
          u >= b.outerHeight() ? k = !0 : (c.stop(!0, !0).fadeIn("fast"), a.railVisible && m.stop(!0, !0).fadeIn("fast"));
        }

        function p() {
          a.alwaysVisible || (B = setTimeout(function () {
            a.disableFadeOut && r || y || z || (c.fadeOut("slow"), m.fadeOut("slow"));
          }, 1E3));
        }

        var r,
            y,
            z,
            B,
            A,
            u,
            l,
            C,
            k = !1,
            b = e(this);

        if (b.parent().hasClass(a.wrapperClass)) {
          var q = b.scrollTop(),
              c = b.siblings("." + a.barClass),
              m = b.siblings("." + a.railClass);
          x();

          if (e.isPlainObject(f)) {
            if ("height" in f && "auto" == f.height) {
              b.parent().css("height", "auto");
              b.css("height", "auto");
              var h = b.parent().parent().height();
              b.parent().css("height", h);
              b.css("height", h);
            } else "height" in f && (h = f.height, b.parent().css("height", h), b.css("height", h));

            if ("scrollTo" in f) q = parseInt(a.scrollTo);else if ("scrollBy" in f) q += parseInt(a.scrollBy);else if ("destroy" in f) {
              c.remove();
              m.remove();
              b.unwrap();
              return;
            }
            n(q, !1, !0);
          }
        } else if (!(e.isPlainObject(f) && "destroy" in f)) {
          a.height = "auto" == a.height ? b.parent().height() : a.height;
          q = e("<div></div>").addClass(a.wrapperClass).css({
            position: "relative",
            overflow: "hidden",
            width: a.width,
            height: a.height
          });
          b.css({
            overflow: "hidden",
            width: a.width,
            height: a.height
          });
          var m = e("<div></div>").addClass(a.railClass).css({
            width: a.size,
            height: "100%",
            position: "absolute",
            top: 0,
            display: a.alwaysVisible && a.railVisible ? "block" : "none",
            "border-radius": a.railBorderRadius,
            background: a.railColor,
            opacity: a.railOpacity,
            zIndex: 90
          }),
              c = e("<div></div>").addClass(a.barClass).css({
            background: a.color,
            width: a.size,
            position: "absolute",
            top: 0,
            opacity: a.opacity,
            display: a.alwaysVisible ? "block" : "none",
            "border-radius": a.borderRadius,
            BorderRadius: a.borderRadius,
            MozBorderRadius: a.borderRadius,
            WebkitBorderRadius: a.borderRadius,
            zIndex: 99
          }),
              h = "right" == a.position ? {
            right: a.distance
          } : {
            left: a.distance
          };
          m.css(h);
          c.css(h);
          b.wrap(q);
          b.parent().append(c);
          b.parent().append(m);
          a.railDraggable && c.bind("mousedown", function (a) {
            var b = e(document);
            z = !0;
            t = parseFloat(c.css("top"));
            pageY = a.pageY;
            b.bind("mousemove.slimscroll", function (a) {
              currTop = t + a.pageY - pageY;
              c.css("top", currTop);
              n(0, c.position().top, !1);
            });
            b.bind("mouseup.slimscroll", function (a) {
              z = !1;
              p();
              b.unbind(".slimscroll");
            });
            return !1;
          }).bind("selectstart.slimscroll", function (a) {
            a.stopPropagation();
            a.preventDefault();
            return !1;
          });
          m.hover(function () {
            w();
          }, function () {
            p();
          });
          c.hover(function () {
            y = !0;
          }, function () {
            y = !1;
          });
          b.hover(function () {
            r = !0;
            w();
            p();
          }, function () {
            r = !1;
            p();
          });
          b.bind("touchstart", function (a, b) {
            a.originalEvent.touches.length && (A = a.originalEvent.touches[0].pageY);
          });
          b.bind("touchmove", function (b) {
            k || b.originalEvent.preventDefault();
            b.originalEvent.touches.length && (n((A - b.originalEvent.touches[0].pageY) / a.touchScrollStep, !0), A = b.originalEvent.touches[0].pageY);
          });
          x();
          "bottom" === a.start ? (c.css({
            top: b.outerHeight() - c.outerHeight()
          }), n(0, !0)) : "top" !== a.start && (n(e(a.start).position().top, null, !0), a.alwaysVisible || c.hide());
          window.addEventListener ? (this.addEventListener("DOMMouseScroll", v, !1), this.addEventListener("mousewheel", v, !1)) : document.attachEvent("onmousewheel", v);
        }
      });
      return this;
    }
  });
  e.fn.extend({
    slimscroll: e.fn.slimScroll
  });
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))))

/***/ }),

/***/ "./app/assets/packs/ladda.jquery.min.js":
/*!**********************************************!*\
  !*** ./app/assets/packs/ladda.jquery.min.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Ladda for jQuery
 * http://lab.hakim.se/ladda
 * MIT licensed
 *
 * Copyright (C) 2015 Hakim El Hattab, http://hakim.se
 */
!function (a, i) {
  "use strict";

  if (void 0 === i) return console.error("jQuery required for Ladda.jQuery");
  var t = [];
  (i = i.extend(i, {
    ladda: function ladda(i) {
      "stopAll" === i && a.stopAll();
    }
  })).fn = i.extend(i.fn, {
    ladda: function ladda(d) {
      var e = t.slice.call(arguments, 1);
      if ("bind" === d) e.unshift(i(this).selector), a.bind.apply(a, e);else {
        if ("isLoading" === d) return i(this).data("ladda").isLoading();
        i(this).each(function () {
          var t,
              n = i(this);
          void 0 === d ? n.data("ladda", a.create(this)) : (t = n.data("ladda"))[d].apply(t, e);
        });
      }
      return this;
    }
  });
}(this.Ladda, this.jQuery);

/***/ }),

/***/ "./app/assets/packs/moment.min.js":
/*!****************************************!*\
  !*** ./app/assets/packs/moment.min.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {!function (e, t) {
   true ? module.exports = t() : undefined;
}(this, function () {
  "use strict";

  var e, i;

  function c() {
    return e.apply(null, arguments);
  }

  function o(e) {
    return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e);
  }

  function u(e) {
    return null != e && "[object Object]" === Object.prototype.toString.call(e);
  }

  function l(e) {
    return void 0 === e;
  }

  function d(e) {
    return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e);
  }

  function h(e) {
    return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e);
  }

  function f(e, t) {
    var n,
        s = [];

    for (n = 0; n < e.length; ++n) {
      s.push(t(e[n], n));
    }

    return s;
  }

  function m(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }

  function _(e, t) {
    for (var n in t) {
      m(t, n) && (e[n] = t[n]);
    }

    return m(t, "toString") && (e.toString = t.toString), m(t, "valueOf") && (e.valueOf = t.valueOf), e;
  }

  function y(e, t, n, s) {
    return Ot(e, t, n, s, !0).utc();
  }

  function g(e) {
    return null == e._pf && (e._pf = {
      empty: !1,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: !1,
      invalidMonth: null,
      invalidFormat: !1,
      userInvalidated: !1,
      iso: !1,
      parsedDateParts: [],
      meridiem: null,
      rfc2822: !1,
      weekdayMismatch: !1
    }), e._pf;
  }

  function p(e) {
    if (null == e._isValid) {
      var t = g(e),
          n = i.call(t.parsedDateParts, function (e) {
        return null != e;
      }),
          s = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
      if (e._strict && (s = s && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return s;
      e._isValid = s;
    }

    return e._isValid;
  }

  function v(e) {
    var t = y(NaN);
    return null != e ? _(g(t), e) : g(t).userInvalidated = !0, t;
  }

  i = Array.prototype.some ? Array.prototype.some : function (e) {
    for (var t = Object(this), n = t.length >>> 0, s = 0; s < n; s++) {
      if (s in t && e.call(this, t[s], s, t)) return !0;
    }

    return !1;
  };
  var r = c.momentProperties = [];

  function w(e, t) {
    var n, s, i;
    if (l(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), l(t._i) || (e._i = t._i), l(t._f) || (e._f = t._f), l(t._l) || (e._l = t._l), l(t._strict) || (e._strict = t._strict), l(t._tzm) || (e._tzm = t._tzm), l(t._isUTC) || (e._isUTC = t._isUTC), l(t._offset) || (e._offset = t._offset), l(t._pf) || (e._pf = g(t)), l(t._locale) || (e._locale = t._locale), 0 < r.length) for (n = 0; n < r.length; n++) {
      l(i = t[s = r[n]]) || (e[s] = i);
    }
    return e;
  }

  var t = !1;

  function M(e) {
    w(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === t && (t = !0, c.updateOffset(this), t = !1);
  }

  function S(e) {
    return e instanceof M || null != e && null != e._isAMomentObject;
  }

  function D(e) {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
  }

  function k(e) {
    var t = +e,
        n = 0;
    return 0 !== t && isFinite(t) && (n = D(t)), n;
  }

  function a(e, t, n) {
    var s,
        i = Math.min(e.length, t.length),
        r = Math.abs(e.length - t.length),
        a = 0;

    for (s = 0; s < i; s++) {
      (n && e[s] !== t[s] || !n && k(e[s]) !== k(t[s])) && a++;
    }

    return a + r;
  }

  function Y(e) {
    !1 === c.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e);
  }

  function n(i, r) {
    var a = !0;
    return _(function () {
      if (null != c.deprecationHandler && c.deprecationHandler(null, i), a) {
        for (var e, t = [], n = 0; n < arguments.length; n++) {
          if (e = "", "object" == typeof arguments[n]) {
            for (var s in e += "\n[" + n + "] ", arguments[0]) {
              e += s + ": " + arguments[0][s] + ", ";
            }

            e = e.slice(0, -2);
          } else e = arguments[n];

          t.push(e);
        }

        Y(i + "\nArguments: " + Array.prototype.slice.call(t).join("") + "\n" + new Error().stack), a = !1;
      }

      return r.apply(this, arguments);
    }, r);
  }

  var s,
      O = {};

  function T(e, t) {
    null != c.deprecationHandler && c.deprecationHandler(e, t), O[e] || (Y(t), O[e] = !0);
  }

  function x(e) {
    return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e);
  }

  function b(e, t) {
    var n,
        s = _({}, e);

    for (n in t) {
      m(t, n) && (u(e[n]) && u(t[n]) ? (s[n] = {}, _(s[n], e[n]), _(s[n], t[n])) : null != t[n] ? s[n] = t[n] : delete s[n]);
    }

    for (n in e) {
      m(e, n) && !m(t, n) && u(e[n]) && (s[n] = _({}, s[n]));
    }

    return s;
  }

  function P(e) {
    null != e && this.set(e);
  }

  c.suppressDeprecationWarnings = !1, c.deprecationHandler = null, s = Object.keys ? Object.keys : function (e) {
    var t,
        n = [];

    for (t in e) {
      m(e, t) && n.push(t);
    }

    return n;
  };
  var W = {};

  function H(e, t) {
    var n = e.toLowerCase();
    W[n] = W[n + "s"] = W[t] = e;
  }

  function R(e) {
    return "string" == typeof e ? W[e] || W[e.toLowerCase()] : void 0;
  }

  function C(e) {
    var t,
        n,
        s = {};

    for (n in e) {
      m(e, n) && (t = R(n)) && (s[t] = e[n]);
    }

    return s;
  }

  var F = {};

  function L(e, t) {
    F[e] = t;
  }

  function U(e, t, n) {
    var s = "" + Math.abs(e),
        i = t - s.length;
    return (0 <= e ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + s;
  }

  var N = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
      G = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
      V = {},
      E = {};

  function I(e, t, n, s) {
    var i = s;
    "string" == typeof s && (i = function i() {
      return this[s]();
    }), e && (E[e] = i), t && (E[t[0]] = function () {
      return U(i.apply(this, arguments), t[1], t[2]);
    }), n && (E[n] = function () {
      return this.localeData().ordinal(i.apply(this, arguments), e);
    });
  }

  function A(e, t) {
    return e.isValid() ? (t = j(t, e.localeData()), V[t] = V[t] || function (s) {
      var e,
          i,
          t,
          r = s.match(N);

      for (e = 0, i = r.length; e < i; e++) {
        E[r[e]] ? r[e] = E[r[e]] : r[e] = (t = r[e]).match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "");
      }

      return function (e) {
        var t,
            n = "";

        for (t = 0; t < i; t++) {
          n += x(r[t]) ? r[t].call(e, s) : r[t];
        }

        return n;
      };
    }(t), V[t](e)) : e.localeData().invalidDate();
  }

  function j(e, t) {
    var n = 5;

    function s(e) {
      return t.longDateFormat(e) || e;
    }

    for (G.lastIndex = 0; 0 <= n && G.test(e);) {
      e = e.replace(G, s), G.lastIndex = 0, n -= 1;
    }

    return e;
  }

  var Z = /\d/,
      z = /\d\d/,
      $ = /\d{3}/,
      q = /\d{4}/,
      J = /[+-]?\d{6}/,
      B = /\d\d?/,
      Q = /\d\d\d\d?/,
      X = /\d\d\d\d\d\d?/,
      K = /\d{1,3}/,
      ee = /\d{1,4}/,
      te = /[+-]?\d{1,6}/,
      ne = /\d+/,
      se = /[+-]?\d+/,
      ie = /Z|[+-]\d\d:?\d\d/gi,
      re = /Z|[+-]\d\d(?::?\d\d)?/gi,
      ae = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
      oe = {};

  function ue(e, n, s) {
    oe[e] = x(n) ? n : function (e, t) {
      return e && s ? s : n;
    };
  }

  function le(e, t) {
    return m(oe, e) ? oe[e](t._strict, t._locale) : new RegExp(de(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, s, i) {
      return t || n || s || i;
    })));
  }

  function de(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }

  var he = {};

  function ce(e, n) {
    var t,
        s = n;

    for ("string" == typeof e && (e = [e]), d(n) && (s = function s(e, t) {
      t[n] = k(e);
    }), t = 0; t < e.length; t++) {
      he[e[t]] = s;
    }
  }

  function fe(e, i) {
    ce(e, function (e, t, n, s) {
      n._w = n._w || {}, i(e, n._w, n, s);
    });
  }

  var me = 0,
      _e = 1,
      ye = 2,
      ge = 3,
      pe = 4,
      ve = 5,
      we = 6,
      Me = 7,
      Se = 8;

  function De(e) {
    return ke(e) ? 366 : 365;
  }

  function ke(e) {
    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
  }

  I("Y", 0, 0, function () {
    var e = this.year();
    return e <= 9999 ? "" + e : "+" + e;
  }), I(0, ["YY", 2], 0, function () {
    return this.year() % 100;
  }), I(0, ["YYYY", 4], 0, "year"), I(0, ["YYYYY", 5], 0, "year"), I(0, ["YYYYYY", 6, !0], 0, "year"), H("year", "y"), L("year", 1), ue("Y", se), ue("YY", B, z), ue("YYYY", ee, q), ue("YYYYY", te, J), ue("YYYYYY", te, J), ce(["YYYYY", "YYYYYY"], me), ce("YYYY", function (e, t) {
    t[me] = 2 === e.length ? c.parseTwoDigitYear(e) : k(e);
  }), ce("YY", function (e, t) {
    t[me] = c.parseTwoDigitYear(e);
  }), ce("Y", function (e, t) {
    t[me] = parseInt(e, 10);
  }), c.parseTwoDigitYear = function (e) {
    return k(e) + (68 < k(e) ? 1900 : 2e3);
  };
  var Ye,
      Oe = Te("FullYear", !0);

  function Te(t, n) {
    return function (e) {
      return null != e ? (be(this, t, e), c.updateOffset(this, n), this) : xe(this, t);
    };
  }

  function xe(e, t) {
    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
  }

  function be(e, t, n) {
    e.isValid() && !isNaN(n) && ("FullYear" === t && ke(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Pe(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
  }

  function Pe(e, t) {
    if (isNaN(e) || isNaN(t)) return NaN;
    var n,
        s = (t % (n = 12) + n) % n;
    return e += (t - s) / 12, 1 === s ? ke(e) ? 29 : 28 : 31 - s % 7 % 2;
  }

  Ye = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
    var t;

    for (t = 0; t < this.length; ++t) {
      if (this[t] === e) return t;
    }

    return -1;
  }, I("M", ["MM", 2], "Mo", function () {
    return this.month() + 1;
  }), I("MMM", 0, 0, function (e) {
    return this.localeData().monthsShort(this, e);
  }), I("MMMM", 0, 0, function (e) {
    return this.localeData().months(this, e);
  }), H("month", "M"), L("month", 8), ue("M", B), ue("MM", B, z), ue("MMM", function (e, t) {
    return t.monthsShortRegex(e);
  }), ue("MMMM", function (e, t) {
    return t.monthsRegex(e);
  }), ce(["M", "MM"], function (e, t) {
    t[_e] = k(e) - 1;
  }), ce(["MMM", "MMMM"], function (e, t, n, s) {
    var i = n._locale.monthsParse(e, s, n._strict);

    null != i ? t[_e] = i : g(n).invalidMonth = e;
  });
  var We = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
      He = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
  var Re = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

  function Ce(e, t) {
    var n;
    if (!e.isValid()) return e;
    if ("string" == typeof t) if (/^\d+$/.test(t)) t = k(t);else if (!d(t = e.localeData().monthsParse(t))) return e;
    return n = Math.min(e.date(), Pe(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e;
  }

  function Fe(e) {
    return null != e ? (Ce(this, e), c.updateOffset(this, !0), this) : xe(this, "Month");
  }

  var Le = ae;
  var Ue = ae;

  function Ne() {
    function e(e, t) {
      return t.length - e.length;
    }

    var t,
        n,
        s = [],
        i = [],
        r = [];

    for (t = 0; t < 12; t++) {
      n = y([2e3, t]), s.push(this.monthsShort(n, "")), i.push(this.months(n, "")), r.push(this.months(n, "")), r.push(this.monthsShort(n, ""));
    }

    for (s.sort(e), i.sort(e), r.sort(e), t = 0; t < 12; t++) {
      s[t] = de(s[t]), i[t] = de(i[t]);
    }

    for (t = 0; t < 24; t++) {
      r[t] = de(r[t]);
    }

    this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i");
  }

  function Ge(e) {
    var t = new Date(Date.UTC.apply(null, arguments));
    return e < 100 && 0 <= e && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t;
  }

  function Ve(e, t, n) {
    var s = 7 + t - n;
    return -((7 + Ge(e, 0, s).getUTCDay() - t) % 7) + s - 1;
  }

  function Ee(e, t, n, s, i) {
    var r,
        a,
        o = 1 + 7 * (t - 1) + (7 + n - s) % 7 + Ve(e, s, i);
    return o <= 0 ? a = De(r = e - 1) + o : o > De(e) ? (r = e + 1, a = o - De(e)) : (r = e, a = o), {
      year: r,
      dayOfYear: a
    };
  }

  function Ie(e, t, n) {
    var s,
        i,
        r = Ve(e.year(), t, n),
        a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
    return a < 1 ? s = a + Ae(i = e.year() - 1, t, n) : a > Ae(e.year(), t, n) ? (s = a - Ae(e.year(), t, n), i = e.year() + 1) : (i = e.year(), s = a), {
      week: s,
      year: i
    };
  }

  function Ae(e, t, n) {
    var s = Ve(e, t, n),
        i = Ve(e + 1, t, n);
    return (De(e) - s + i) / 7;
  }

  I("w", ["ww", 2], "wo", "week"), I("W", ["WW", 2], "Wo", "isoWeek"), H("week", "w"), H("isoWeek", "W"), L("week", 5), L("isoWeek", 5), ue("w", B), ue("ww", B, z), ue("W", B), ue("WW", B, z), fe(["w", "ww", "W", "WW"], function (e, t, n, s) {
    t[s.substr(0, 1)] = k(e);
  });
  I("d", 0, "do", "day"), I("dd", 0, 0, function (e) {
    return this.localeData().weekdaysMin(this, e);
  }), I("ddd", 0, 0, function (e) {
    return this.localeData().weekdaysShort(this, e);
  }), I("dddd", 0, 0, function (e) {
    return this.localeData().weekdays(this, e);
  }), I("e", 0, 0, "weekday"), I("E", 0, 0, "isoWeekday"), H("day", "d"), H("weekday", "e"), H("isoWeekday", "E"), L("day", 11), L("weekday", 11), L("isoWeekday", 11), ue("d", B), ue("e", B), ue("E", B), ue("dd", function (e, t) {
    return t.weekdaysMinRegex(e);
  }), ue("ddd", function (e, t) {
    return t.weekdaysShortRegex(e);
  }), ue("dddd", function (e, t) {
    return t.weekdaysRegex(e);
  }), fe(["dd", "ddd", "dddd"], function (e, t, n, s) {
    var i = n._locale.weekdaysParse(e, s, n._strict);

    null != i ? t.d = i : g(n).invalidWeekday = e;
  }), fe(["d", "e", "E"], function (e, t, n, s) {
    t[s] = k(e);
  });
  var je = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
  var Ze = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
  var ze = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
  var $e = ae;
  var qe = ae;
  var Je = ae;

  function Be() {
    function e(e, t) {
      return t.length - e.length;
    }

    var t,
        n,
        s,
        i,
        r,
        a = [],
        o = [],
        u = [],
        l = [];

    for (t = 0; t < 7; t++) {
      n = y([2e3, 1]).day(t), s = this.weekdaysMin(n, ""), i = this.weekdaysShort(n, ""), r = this.weekdays(n, ""), a.push(s), o.push(i), u.push(r), l.push(s), l.push(i), l.push(r);
    }

    for (a.sort(e), o.sort(e), u.sort(e), l.sort(e), t = 0; t < 7; t++) {
      o[t] = de(o[t]), u[t] = de(u[t]), l[t] = de(l[t]);
    }

    this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i");
  }

  function Qe() {
    return this.hours() % 12 || 12;
  }

  function Xe(e, t) {
    I(e, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), t);
    });
  }

  function Ke(e, t) {
    return t._meridiemParse;
  }

  I("H", ["HH", 2], 0, "hour"), I("h", ["hh", 2], 0, Qe), I("k", ["kk", 2], 0, function () {
    return this.hours() || 24;
  }), I("hmm", 0, 0, function () {
    return "" + Qe.apply(this) + U(this.minutes(), 2);
  }), I("hmmss", 0, 0, function () {
    return "" + Qe.apply(this) + U(this.minutes(), 2) + U(this.seconds(), 2);
  }), I("Hmm", 0, 0, function () {
    return "" + this.hours() + U(this.minutes(), 2);
  }), I("Hmmss", 0, 0, function () {
    return "" + this.hours() + U(this.minutes(), 2) + U(this.seconds(), 2);
  }), Xe("a", !0), Xe("A", !1), H("hour", "h"), L("hour", 13), ue("a", Ke), ue("A", Ke), ue("H", B), ue("h", B), ue("k", B), ue("HH", B, z), ue("hh", B, z), ue("kk", B, z), ue("hmm", Q), ue("hmmss", X), ue("Hmm", Q), ue("Hmmss", X), ce(["H", "HH"], ge), ce(["k", "kk"], function (e, t, n) {
    var s = k(e);
    t[ge] = 24 === s ? 0 : s;
  }), ce(["a", "A"], function (e, t, n) {
    n._isPm = n._locale.isPM(e), n._meridiem = e;
  }), ce(["h", "hh"], function (e, t, n) {
    t[ge] = k(e), g(n).bigHour = !0;
  }), ce("hmm", function (e, t, n) {
    var s = e.length - 2;
    t[ge] = k(e.substr(0, s)), t[pe] = k(e.substr(s)), g(n).bigHour = !0;
  }), ce("hmmss", function (e, t, n) {
    var s = e.length - 4,
        i = e.length - 2;
    t[ge] = k(e.substr(0, s)), t[pe] = k(e.substr(s, 2)), t[ve] = k(e.substr(i)), g(n).bigHour = !0;
  }), ce("Hmm", function (e, t, n) {
    var s = e.length - 2;
    t[ge] = k(e.substr(0, s)), t[pe] = k(e.substr(s));
  }), ce("Hmmss", function (e, t, n) {
    var s = e.length - 4,
        i = e.length - 2;
    t[ge] = k(e.substr(0, s)), t[pe] = k(e.substr(s, 2)), t[ve] = k(e.substr(i));
  });
  var et,
      tt = Te("Hours", !0),
      nt = {
    calendar: {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L"
    },
    longDateFormat: {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A"
    },
    invalidDate: "Invalid date",
    ordinal: "%d",
    dayOfMonthOrdinalParse: /\d{1,2}/,
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    },
    months: He,
    monthsShort: Re,
    week: {
      dow: 0,
      doy: 6
    },
    weekdays: je,
    weekdaysMin: ze,
    weekdaysShort: Ze,
    meridiemParse: /[ap]\.?m?\.?/i
  },
      st = {},
      it = {};

  function rt(e) {
    return e ? e.toLowerCase().replace("_", "-") : e;
  }

  function at(e) {
    var t = null;
    if (!st[e] && "undefined" != typeof module && module && module.exports) try {
      t = et._abbr, !(function webpackMissingModule() { var e = new Error("Cannot find module 'undefined'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), ot(t);
    } catch (e) {}
    return st[e];
  }

  function ot(e, t) {
    var n;
    return e && ((n = l(t) ? lt(e) : ut(e, t)) ? et = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), et._abbr;
  }

  function ut(e, t) {
    if (null !== t) {
      var n,
          s = nt;
      if (t.abbr = e, null != st[e]) T("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), s = st[e]._config;else if (null != t.parentLocale) if (null != st[t.parentLocale]) s = st[t.parentLocale]._config;else {
        if (null == (n = at(t.parentLocale))) return it[t.parentLocale] || (it[t.parentLocale] = []), it[t.parentLocale].push({
          name: e,
          config: t
        }), null;
        s = n._config;
      }
      return st[e] = new P(b(s, t)), it[e] && it[e].forEach(function (e) {
        ut(e.name, e.config);
      }), ot(e), st[e];
    }

    return delete st[e], null;
  }

  function lt(e) {
    var t;
    if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return et;

    if (!o(e)) {
      if (t = at(e)) return t;
      e = [e];
    }

    return function (e) {
      for (var t, n, s, i, r = 0; r < e.length;) {
        for (t = (i = rt(e[r]).split("-")).length, n = (n = rt(e[r + 1])) ? n.split("-") : null; 0 < t;) {
          if (s = at(i.slice(0, t).join("-"))) return s;
          if (n && n.length >= t && a(i, n, !0) >= t - 1) break;
          t--;
        }

        r++;
      }

      return et;
    }(e);
  }

  function dt(e) {
    var t,
        n = e._a;
    return n && -2 === g(e).overflow && (t = n[_e] < 0 || 11 < n[_e] ? _e : n[ye] < 1 || n[ye] > Pe(n[me], n[_e]) ? ye : n[ge] < 0 || 24 < n[ge] || 24 === n[ge] && (0 !== n[pe] || 0 !== n[ve] || 0 !== n[we]) ? ge : n[pe] < 0 || 59 < n[pe] ? pe : n[ve] < 0 || 59 < n[ve] ? ve : n[we] < 0 || 999 < n[we] ? we : -1, g(e)._overflowDayOfYear && (t < me || ye < t) && (t = ye), g(e)._overflowWeeks && -1 === t && (t = Me), g(e)._overflowWeekday && -1 === t && (t = Se), g(e).overflow = t), e;
  }

  function ht(e, t, n) {
    return null != e ? e : null != t ? t : n;
  }

  function ct(e) {
    var t,
        n,
        s,
        i,
        r,
        a = [];

    if (!e._d) {
      var o, u;

      for (o = e, u = new Date(c.now()), s = o._useUTC ? [u.getUTCFullYear(), u.getUTCMonth(), u.getUTCDate()] : [u.getFullYear(), u.getMonth(), u.getDate()], e._w && null == e._a[ye] && null == e._a[_e] && function (e) {
        var t, n, s, i, r, a, o, u;
        if (null != (t = e._w).GG || null != t.W || null != t.E) r = 1, a = 4, n = ht(t.GG, e._a[me], Ie(Tt(), 1, 4).year), s = ht(t.W, 1), ((i = ht(t.E, 1)) < 1 || 7 < i) && (u = !0);else {
          r = e._locale._week.dow, a = e._locale._week.doy;
          var l = Ie(Tt(), r, a);
          n = ht(t.gg, e._a[me], l.year), s = ht(t.w, l.week), null != t.d ? ((i = t.d) < 0 || 6 < i) && (u = !0) : null != t.e ? (i = t.e + r, (t.e < 0 || 6 < t.e) && (u = !0)) : i = r;
        }
        s < 1 || s > Ae(n, r, a) ? g(e)._overflowWeeks = !0 : null != u ? g(e)._overflowWeekday = !0 : (o = Ee(n, s, i, r, a), e._a[me] = o.year, e._dayOfYear = o.dayOfYear);
      }(e), null != e._dayOfYear && (r = ht(e._a[me], s[me]), (e._dayOfYear > De(r) || 0 === e._dayOfYear) && (g(e)._overflowDayOfYear = !0), n = Ge(r, 0, e._dayOfYear), e._a[_e] = n.getUTCMonth(), e._a[ye] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) {
        e._a[t] = a[t] = s[t];
      }

      for (; t < 7; t++) {
        e._a[t] = a[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
      }

      24 === e._a[ge] && 0 === e._a[pe] && 0 === e._a[ve] && 0 === e._a[we] && (e._nextDay = !0, e._a[ge] = 0), e._d = (e._useUTC ? Ge : function (e, t, n, s, i, r, a) {
        var o = new Date(e, t, n, s, i, r, a);
        return e < 100 && 0 <= e && isFinite(o.getFullYear()) && o.setFullYear(e), o;
      }).apply(null, a), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ge] = 24), e._w && void 0 !== e._w.d && e._w.d !== i && (g(e).weekdayMismatch = !0);
    }
  }

  var ft = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      mt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      _t = /Z|[+-]\d\d(?::?\d\d)?/,
      yt = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
      gt = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
      pt = /^\/?Date\((\-?\d+)/i;

  function vt(e) {
    var t,
        n,
        s,
        i,
        r,
        a,
        o = e._i,
        u = ft.exec(o) || mt.exec(o);

    if (u) {
      for (g(e).iso = !0, t = 0, n = yt.length; t < n; t++) {
        if (yt[t][1].exec(u[1])) {
          i = yt[t][0], s = !1 !== yt[t][2];
          break;
        }
      }

      if (null == i) return void (e._isValid = !1);

      if (u[3]) {
        for (t = 0, n = gt.length; t < n; t++) {
          if (gt[t][1].exec(u[3])) {
            r = (u[2] || " ") + gt[t][0];
            break;
          }
        }

        if (null == r) return void (e._isValid = !1);
      }

      if (!s && null != r) return void (e._isValid = !1);

      if (u[4]) {
        if (!_t.exec(u[4])) return void (e._isValid = !1);
        a = "Z";
      }

      e._f = i + (r || "") + (a || ""), kt(e);
    } else e._isValid = !1;
  }

  var wt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

  function Mt(e, t, n, s, i, r) {
    var a = [function (e) {
      var t = parseInt(e, 10);
      {
        if (t <= 49) return 2e3 + t;
        if (t <= 999) return 1900 + t;
      }
      return t;
    }(e), Re.indexOf(t), parseInt(n, 10), parseInt(s, 10), parseInt(i, 10)];
    return r && a.push(parseInt(r, 10)), a;
  }

  var St = {
    UT: 0,
    GMT: 0,
    EDT: -240,
    EST: -300,
    CDT: -300,
    CST: -360,
    MDT: -360,
    MST: -420,
    PDT: -420,
    PST: -480
  };

  function Dt(e) {
    var t,
        n,
        s,
        i = wt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim());

    if (i) {
      var r = Mt(i[4], i[3], i[2], i[5], i[6], i[7]);
      if (t = i[1], n = r, s = e, t && Ze.indexOf(t) !== new Date(n[0], n[1], n[2]).getDay() && (g(s).weekdayMismatch = !0, !(s._isValid = !1))) return;
      e._a = r, e._tzm = function (e, t, n) {
        if (e) return St[e];
        if (t) return 0;
        var s = parseInt(n, 10),
            i = s % 100;
        return (s - i) / 100 * 60 + i;
      }(i[8], i[9], i[10]), e._d = Ge.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), g(e).rfc2822 = !0;
    } else e._isValid = !1;
  }

  function kt(e) {
    if (e._f !== c.ISO_8601) {
      if (e._f !== c.RFC_2822) {
        e._a = [], g(e).empty = !0;
        var t,
            n,
            s,
            i,
            r,
            a,
            o,
            u,
            l = "" + e._i,
            d = l.length,
            h = 0;

        for (s = j(e._f, e._locale).match(N) || [], t = 0; t < s.length; t++) {
          i = s[t], (n = (l.match(le(i, e)) || [])[0]) && (0 < (r = l.substr(0, l.indexOf(n))).length && g(e).unusedInput.push(r), l = l.slice(l.indexOf(n) + n.length), h += n.length), E[i] ? (n ? g(e).empty = !1 : g(e).unusedTokens.push(i), a = i, u = e, null != (o = n) && m(he, a) && he[a](o, u._a, u, a)) : e._strict && !n && g(e).unusedTokens.push(i);
        }

        g(e).charsLeftOver = d - h, 0 < l.length && g(e).unusedInput.push(l), e._a[ge] <= 12 && !0 === g(e).bigHour && 0 < e._a[ge] && (g(e).bigHour = void 0), g(e).parsedDateParts = e._a.slice(0), g(e).meridiem = e._meridiem, e._a[ge] = function (e, t, n) {
          var s;
          if (null == n) return t;
          return null != e.meridiemHour ? e.meridiemHour(t, n) : (null != e.isPM && ((s = e.isPM(n)) && t < 12 && (t += 12), s || 12 !== t || (t = 0)), t);
        }(e._locale, e._a[ge], e._meridiem), ct(e), dt(e);
      } else Dt(e);
    } else vt(e);
  }

  function Yt(e) {
    var t,
        n,
        s,
        i,
        r = e._i,
        a = e._f;
    return e._locale = e._locale || lt(e._l), null === r || void 0 === a && "" === r ? v({
      nullInput: !0
    }) : ("string" == typeof r && (e._i = r = e._locale.preparse(r)), S(r) ? new M(dt(r)) : (h(r) ? e._d = r : o(a) ? function (e) {
      var t, n, s, i, r;
      if (0 === e._f.length) return g(e).invalidFormat = !0, e._d = new Date(NaN);

      for (i = 0; i < e._f.length; i++) {
        r = 0, t = w({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[i], kt(t), p(t) && (r += g(t).charsLeftOver, r += 10 * g(t).unusedTokens.length, g(t).score = r, (null == s || r < s) && (s = r, n = t));
      }

      _(e, n || t);
    }(e) : a ? kt(e) : l(n = (t = e)._i) ? t._d = new Date(c.now()) : h(n) ? t._d = new Date(n.valueOf()) : "string" == typeof n ? (s = t, null === (i = pt.exec(s._i)) ? (vt(s), !1 === s._isValid && (delete s._isValid, Dt(s), !1 === s._isValid && (delete s._isValid, c.createFromInputFallback(s)))) : s._d = new Date(+i[1])) : o(n) ? (t._a = f(n.slice(0), function (e) {
      return parseInt(e, 10);
    }), ct(t)) : u(n) ? function (e) {
      if (!e._d) {
        var t = C(e._i);
        e._a = f([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function (e) {
          return e && parseInt(e, 10);
        }), ct(e);
      }
    }(t) : d(n) ? t._d = new Date(n) : c.createFromInputFallback(t), p(e) || (e._d = null), e));
  }

  function Ot(e, t, n, s, i) {
    var r,
        a = {};
    return !0 !== n && !1 !== n || (s = n, n = void 0), (u(e) && function (e) {
      if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
      var t;

      for (t in e) {
        if (e.hasOwnProperty(t)) return !1;
      }

      return !0;
    }(e) || o(e) && 0 === e.length) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = i, a._l = n, a._i = e, a._f = t, a._strict = s, (r = new M(dt(Yt(a))))._nextDay && (r.add(1, "d"), r._nextDay = void 0), r;
  }

  function Tt(e, t, n, s) {
    return Ot(e, t, n, s, !1);
  }

  c.createFromInputFallback = n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
  }), c.ISO_8601 = function () {}, c.RFC_2822 = function () {};
  var xt = n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
    var e = Tt.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : v();
  }),
      bt = n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
    var e = Tt.apply(null, arguments);
    return this.isValid() && e.isValid() ? this < e ? this : e : v();
  });

  function Pt(e, t) {
    var n, s;
    if (1 === t.length && o(t[0]) && (t = t[0]), !t.length) return Tt();

    for (n = t[0], s = 1; s < t.length; ++s) {
      t[s].isValid() && !t[s][e](n) || (n = t[s]);
    }

    return n;
  }

  var Wt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

  function Ht(e) {
    var t = C(e),
        n = t.year || 0,
        s = t.quarter || 0,
        i = t.month || 0,
        r = t.week || 0,
        a = t.day || 0,
        o = t.hour || 0,
        u = t.minute || 0,
        l = t.second || 0,
        d = t.millisecond || 0;
    this._isValid = function (e) {
      for (var t in e) {
        if (-1 === Ye.call(Wt, t) || null != e[t] && isNaN(e[t])) return !1;
      }

      for (var n = !1, s = 0; s < Wt.length; ++s) {
        if (e[Wt[s]]) {
          if (n) return !1;
          parseFloat(e[Wt[s]]) !== k(e[Wt[s]]) && (n = !0);
        }
      }

      return !0;
    }(t), this._milliseconds = +d + 1e3 * l + 6e4 * u + 1e3 * o * 60 * 60, this._days = +a + 7 * r, this._months = +i + 3 * s + 12 * n, this._data = {}, this._locale = lt(), this._bubble();
  }

  function Rt(e) {
    return e instanceof Ht;
  }

  function Ct(e) {
    return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
  }

  function Ft(e, n) {
    I(e, 0, 0, function () {
      var e = this.utcOffset(),
          t = "+";
      return e < 0 && (e = -e, t = "-"), t + U(~~(e / 60), 2) + n + U(~~e % 60, 2);
    });
  }

  Ft("Z", ":"), Ft("ZZ", ""), ue("Z", re), ue("ZZ", re), ce(["Z", "ZZ"], function (e, t, n) {
    n._useUTC = !0, n._tzm = Ut(re, e);
  });
  var Lt = /([\+\-]|\d\d)/gi;

  function Ut(e, t) {
    var n = (t || "").match(e);
    if (null === n) return null;
    var s = ((n[n.length - 1] || []) + "").match(Lt) || ["-", 0, 0],
        i = 60 * s[1] + k(s[2]);
    return 0 === i ? 0 : "+" === s[0] ? i : -i;
  }

  function Nt(e, t) {
    var n, s;
    return t._isUTC ? (n = t.clone(), s = (S(e) || h(e) ? e.valueOf() : Tt(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + s), c.updateOffset(n, !1), n) : Tt(e).local();
  }

  function Gt(e) {
    return 15 * -Math.round(e._d.getTimezoneOffset() / 15);
  }

  function Vt() {
    return !!this.isValid() && this._isUTC && 0 === this._offset;
  }

  c.updateOffset = function () {};

  var Et = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
      It = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

  function At(e, t) {
    var n,
        s,
        i,
        r = e,
        a = null;
    return Rt(e) ? r = {
      ms: e._milliseconds,
      d: e._days,
      M: e._months
    } : d(e) ? (r = {}, t ? r[t] = e : r.milliseconds = e) : (a = Et.exec(e)) ? (n = "-" === a[1] ? -1 : 1, r = {
      y: 0,
      d: k(a[ye]) * n,
      h: k(a[ge]) * n,
      m: k(a[pe]) * n,
      s: k(a[ve]) * n,
      ms: k(Ct(1e3 * a[we])) * n
    }) : (a = It.exec(e)) ? (n = "-" === a[1] ? -1 : (a[1], 1), r = {
      y: jt(a[2], n),
      M: jt(a[3], n),
      w: jt(a[4], n),
      d: jt(a[5], n),
      h: jt(a[6], n),
      m: jt(a[7], n),
      s: jt(a[8], n)
    }) : null == r ? r = {} : "object" == typeof r && ("from" in r || "to" in r) && (i = function (e, t) {
      var n;
      if (!e.isValid() || !t.isValid()) return {
        milliseconds: 0,
        months: 0
      };
      t = Nt(t, e), e.isBefore(t) ? n = Zt(e, t) : ((n = Zt(t, e)).milliseconds = -n.milliseconds, n.months = -n.months);
      return n;
    }(Tt(r.from), Tt(r.to)), (r = {}).ms = i.milliseconds, r.M = i.months), s = new Ht(r), Rt(e) && m(e, "_locale") && (s._locale = e._locale), s;
  }

  function jt(e, t) {
    var n = e && parseFloat(e.replace(",", "."));
    return (isNaN(n) ? 0 : n) * t;
  }

  function Zt(e, t) {
    var n = {
      milliseconds: 0,
      months: 0
    };
    return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
  }

  function zt(s, i) {
    return function (e, t) {
      var n;
      return null === t || isNaN(+t) || (T(i, "moment()." + i + "(period, number) is deprecated. Please use moment()." + i + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), n = e, e = t, t = n), $t(this, At(e = "string" == typeof e ? +e : e, t), s), this;
    };
  }

  function $t(e, t, n, s) {
    var i = t._milliseconds,
        r = Ct(t._days),
        a = Ct(t._months);
    e.isValid() && (s = null == s || s, a && Ce(e, xe(e, "Month") + a * n), r && be(e, "Date", xe(e, "Date") + r * n), i && e._d.setTime(e._d.valueOf() + i * n), s && c.updateOffset(e, r || a));
  }

  At.fn = Ht.prototype, At.invalid = function () {
    return At(NaN);
  };
  var qt = zt(1, "add"),
      Jt = zt(-1, "subtract");

  function Bt(e, t) {
    var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
        s = e.clone().add(n, "months");
    return -(n + (t - s < 0 ? (t - s) / (s - e.clone().add(n - 1, "months")) : (t - s) / (e.clone().add(n + 1, "months") - s))) || 0;
  }

  function Qt(e) {
    var t;
    return void 0 === e ? this._locale._abbr : (null != (t = lt(e)) && (this._locale = t), this);
  }

  c.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", c.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
  var Xt = n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
    return void 0 === e ? this.localeData() : this.locale(e);
  });

  function Kt() {
    return this._locale;
  }

  function en(e, t) {
    I(0, [e, e.length], 0, t);
  }

  function tn(e, t, n, s, i) {
    var r;
    return null == e ? Ie(this, s, i).year : ((r = Ae(e, s, i)) < t && (t = r), function (e, t, n, s, i) {
      var r = Ee(e, t, n, s, i),
          a = Ge(r.year, 0, r.dayOfYear);
      return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this;
    }.call(this, e, t, n, s, i));
  }

  I(0, ["gg", 2], 0, function () {
    return this.weekYear() % 100;
  }), I(0, ["GG", 2], 0, function () {
    return this.isoWeekYear() % 100;
  }), en("gggg", "weekYear"), en("ggggg", "weekYear"), en("GGGG", "isoWeekYear"), en("GGGGG", "isoWeekYear"), H("weekYear", "gg"), H("isoWeekYear", "GG"), L("weekYear", 1), L("isoWeekYear", 1), ue("G", se), ue("g", se), ue("GG", B, z), ue("gg", B, z), ue("GGGG", ee, q), ue("gggg", ee, q), ue("GGGGG", te, J), ue("ggggg", te, J), fe(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, s) {
    t[s.substr(0, 2)] = k(e);
  }), fe(["gg", "GG"], function (e, t, n, s) {
    t[s] = c.parseTwoDigitYear(e);
  }), I("Q", 0, "Qo", "quarter"), H("quarter", "Q"), L("quarter", 7), ue("Q", Z), ce("Q", function (e, t) {
    t[_e] = 3 * (k(e) - 1);
  }), I("D", ["DD", 2], "Do", "date"), H("date", "D"), L("date", 9), ue("D", B), ue("DD", B, z), ue("Do", function (e, t) {
    return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
  }), ce(["D", "DD"], ye), ce("Do", function (e, t) {
    t[ye] = k(e.match(B)[0]);
  });
  var nn = Te("Date", !0);
  I("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), H("dayOfYear", "DDD"), L("dayOfYear", 4), ue("DDD", K), ue("DDDD", $), ce(["DDD", "DDDD"], function (e, t, n) {
    n._dayOfYear = k(e);
  }), I("m", ["mm", 2], 0, "minute"), H("minute", "m"), L("minute", 14), ue("m", B), ue("mm", B, z), ce(["m", "mm"], pe);
  var sn = Te("Minutes", !1);
  I("s", ["ss", 2], 0, "second"), H("second", "s"), L("second", 15), ue("s", B), ue("ss", B, z), ce(["s", "ss"], ve);
  var rn,
      an = Te("Seconds", !1);

  for (I("S", 0, 0, function () {
    return ~~(this.millisecond() / 100);
  }), I(0, ["SS", 2], 0, function () {
    return ~~(this.millisecond() / 10);
  }), I(0, ["SSS", 3], 0, "millisecond"), I(0, ["SSSS", 4], 0, function () {
    return 10 * this.millisecond();
  }), I(0, ["SSSSS", 5], 0, function () {
    return 100 * this.millisecond();
  }), I(0, ["SSSSSS", 6], 0, function () {
    return 1e3 * this.millisecond();
  }), I(0, ["SSSSSSS", 7], 0, function () {
    return 1e4 * this.millisecond();
  }), I(0, ["SSSSSSSS", 8], 0, function () {
    return 1e5 * this.millisecond();
  }), I(0, ["SSSSSSSSS", 9], 0, function () {
    return 1e6 * this.millisecond();
  }), H("millisecond", "ms"), L("millisecond", 16), ue("S", K, Z), ue("SS", K, z), ue("SSS", K, $), rn = "SSSS"; rn.length <= 9; rn += "S") {
    ue(rn, ne);
  }

  function on(e, t) {
    t[we] = k(1e3 * ("0." + e));
  }

  for (rn = "S"; rn.length <= 9; rn += "S") {
    ce(rn, on);
  }

  var un = Te("Milliseconds", !1);
  I("z", 0, 0, "zoneAbbr"), I("zz", 0, 0, "zoneName");
  var ln = M.prototype;

  function dn(e) {
    return e;
  }

  ln.add = qt, ln.calendar = function (e, t) {
    var n = e || Tt(),
        s = Nt(n, this).startOf("day"),
        i = c.calendarFormat(this, s) || "sameElse",
        r = t && (x(t[i]) ? t[i].call(this, n) : t[i]);
    return this.format(r || this.localeData().calendar(i, this, Tt(n)));
  }, ln.clone = function () {
    return new M(this);
  }, ln.diff = function (e, t, n) {
    var s, i, r;
    if (!this.isValid()) return NaN;
    if (!(s = Nt(e, this)).isValid()) return NaN;

    switch (i = 6e4 * (s.utcOffset() - this.utcOffset()), t = R(t)) {
      case "year":
        r = Bt(this, s) / 12;
        break;

      case "month":
        r = Bt(this, s);
        break;

      case "quarter":
        r = Bt(this, s) / 3;
        break;

      case "second":
        r = (this - s) / 1e3;
        break;

      case "minute":
        r = (this - s) / 6e4;
        break;

      case "hour":
        r = (this - s) / 36e5;
        break;

      case "day":
        r = (this - s - i) / 864e5;
        break;

      case "week":
        r = (this - s - i) / 6048e5;
        break;

      default:
        r = this - s;
    }

    return n ? r : D(r);
  }, ln.endOf = function (e) {
    return void 0 === (e = R(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"));
  }, ln.format = function (e) {
    e || (e = this.isUtc() ? c.defaultFormatUtc : c.defaultFormat);
    var t = A(this, e);
    return this.localeData().postformat(t);
  }, ln.from = function (e, t) {
    return this.isValid() && (S(e) && e.isValid() || Tt(e).isValid()) ? At({
      to: this,
      from: e
    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
  }, ln.fromNow = function (e) {
    return this.from(Tt(), e);
  }, ln.to = function (e, t) {
    return this.isValid() && (S(e) && e.isValid() || Tt(e).isValid()) ? At({
      from: this,
      to: e
    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
  }, ln.toNow = function (e) {
    return this.to(Tt(), e);
  }, ln.get = function (e) {
    return x(this[e = R(e)]) ? this[e]() : this;
  }, ln.invalidAt = function () {
    return g(this).overflow;
  }, ln.isAfter = function (e, t) {
    var n = S(e) ? e : Tt(e);
    return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = R(l(t) ? "millisecond" : t)) ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf());
  }, ln.isBefore = function (e, t) {
    var n = S(e) ? e : Tt(e);
    return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = R(l(t) ? "millisecond" : t)) ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf());
  }, ln.isBetween = function (e, t, n, s) {
    return ("(" === (s = s || "()")[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === s[1] ? this.isBefore(t, n) : !this.isAfter(t, n));
  }, ln.isSame = function (e, t) {
    var n,
        s = S(e) ? e : Tt(e);
    return !(!this.isValid() || !s.isValid()) && ("millisecond" === (t = R(t || "millisecond")) ? this.valueOf() === s.valueOf() : (n = s.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()));
  }, ln.isSameOrAfter = function (e, t) {
    return this.isSame(e, t) || this.isAfter(e, t);
  }, ln.isSameOrBefore = function (e, t) {
    return this.isSame(e, t) || this.isBefore(e, t);
  }, ln.isValid = function () {
    return p(this);
  }, ln.lang = Xt, ln.locale = Qt, ln.localeData = Kt, ln.max = bt, ln.min = xt, ln.parsingFlags = function () {
    return _({}, g(this));
  }, ln.set = function (e, t) {
    if ("object" == typeof e) for (var n = function (e) {
      var t = [];

      for (var n in e) {
        t.push({
          unit: n,
          priority: F[n]
        });
      }

      return t.sort(function (e, t) {
        return e.priority - t.priority;
      }), t;
    }(e = C(e)), s = 0; s < n.length; s++) {
      this[n[s].unit](e[n[s].unit]);
    } else if (x(this[e = R(e)])) return this[e](t);
    return this;
  }, ln.startOf = function (e) {
    switch (e = R(e)) {
      case "year":
        this.month(0);

      case "quarter":
      case "month":
        this.date(1);

      case "week":
      case "isoWeek":
      case "day":
      case "date":
        this.hours(0);

      case "hour":
        this.minutes(0);

      case "minute":
        this.seconds(0);

      case "second":
        this.milliseconds(0);
    }

    return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this;
  }, ln.subtract = Jt, ln.toArray = function () {
    var e = this;
    return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()];
  }, ln.toObject = function () {
    var e = this;
    return {
      years: e.year(),
      months: e.month(),
      date: e.date(),
      hours: e.hours(),
      minutes: e.minutes(),
      seconds: e.seconds(),
      milliseconds: e.milliseconds()
    };
  }, ln.toDate = function () {
    return new Date(this.valueOf());
  }, ln.toISOString = function (e) {
    if (!this.isValid()) return null;
    var t = !0 !== e,
        n = t ? this.clone().utc() : this;
    return n.year() < 0 || 9999 < n.year() ? A(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : x(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", A(n, "Z")) : A(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
  }, ln.inspect = function () {
    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
    var e = "moment",
        t = "";
    this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
    var n = "[" + e + '("]',
        s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
        i = t + '[")]';
    return this.format(n + s + "-MM-DD[T]HH:mm:ss.SSS" + i);
  }, ln.toJSON = function () {
    return this.isValid() ? this.toISOString() : null;
  }, ln.toString = function () {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }, ln.unix = function () {
    return Math.floor(this.valueOf() / 1e3);
  }, ln.valueOf = function () {
    return this._d.valueOf() - 6e4 * (this._offset || 0);
  }, ln.creationData = function () {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    };
  }, ln.year = Oe, ln.isLeapYear = function () {
    return ke(this.year());
  }, ln.weekYear = function (e) {
    return tn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
  }, ln.isoWeekYear = function (e) {
    return tn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
  }, ln.quarter = ln.quarters = function (e) {
    return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3);
  }, ln.month = Fe, ln.daysInMonth = function () {
    return Pe(this.year(), this.month());
  }, ln.week = ln.weeks = function (e) {
    var t = this.localeData().week(this);
    return null == e ? t : this.add(7 * (e - t), "d");
  }, ln.isoWeek = ln.isoWeeks = function (e) {
    var t = Ie(this, 1, 4).week;
    return null == e ? t : this.add(7 * (e - t), "d");
  }, ln.weeksInYear = function () {
    var e = this.localeData()._week;

    return Ae(this.year(), e.dow, e.doy);
  }, ln.isoWeeksInYear = function () {
    return Ae(this.year(), 1, 4);
  }, ln.date = nn, ln.day = ln.days = function (e) {
    if (!this.isValid()) return null != e ? this : NaN;
    var t,
        n,
        s = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    return null != e ? (t = e, n = this.localeData(), e = "string" != typeof t ? t : isNaN(t) ? "number" == typeof (t = n.weekdaysParse(t)) ? t : null : parseInt(t, 10), this.add(e - s, "d")) : s;
  }, ln.weekday = function (e) {
    if (!this.isValid()) return null != e ? this : NaN;
    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return null == e ? t : this.add(e - t, "d");
  }, ln.isoWeekday = function (e) {
    if (!this.isValid()) return null != e ? this : NaN;

    if (null != e) {
      var t = (n = e, s = this.localeData(), "string" == typeof n ? s.weekdaysParse(n) % 7 || 7 : isNaN(n) ? null : n);
      return this.day(this.day() % 7 ? t : t - 7);
    }

    return this.day() || 7;
    var n, s;
  }, ln.dayOfYear = function (e) {
    var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
    return null == e ? t : this.add(e - t, "d");
  }, ln.hour = ln.hours = tt, ln.minute = ln.minutes = sn, ln.second = ln.seconds = an, ln.millisecond = ln.milliseconds = un, ln.utcOffset = function (e, t, n) {
    var s,
        i = this._offset || 0;
    if (!this.isValid()) return null != e ? this : NaN;

    if (null != e) {
      if ("string" == typeof e) {
        if (null === (e = Ut(re, e))) return this;
      } else Math.abs(e) < 16 && !n && (e *= 60);

      return !this._isUTC && t && (s = Gt(this)), this._offset = e, this._isUTC = !0, null != s && this.add(s, "m"), i !== e && (!t || this._changeInProgress ? $t(this, At(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, c.updateOffset(this, !0), this._changeInProgress = null)), this;
    }

    return this._isUTC ? i : Gt(this);
  }, ln.utc = function (e) {
    return this.utcOffset(0, e);
  }, ln.local = function (e) {
    return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Gt(this), "m")), this;
  }, ln.parseZone = function () {
    if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);else if ("string" == typeof this._i) {
      var e = Ut(ie, this._i);
      null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
    }
    return this;
  }, ln.hasAlignedHourOffset = function (e) {
    return !!this.isValid() && (e = e ? Tt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0);
  }, ln.isDST = function () {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }, ln.isLocal = function () {
    return !!this.isValid() && !this._isUTC;
  }, ln.isUtcOffset = function () {
    return !!this.isValid() && this._isUTC;
  }, ln.isUtc = Vt, ln.isUTC = Vt, ln.zoneAbbr = function () {
    return this._isUTC ? "UTC" : "";
  }, ln.zoneName = function () {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }, ln.dates = n("dates accessor is deprecated. Use date instead.", nn), ln.months = n("months accessor is deprecated. Use month instead", Fe), ln.years = n("years accessor is deprecated. Use year instead", Oe), ln.zone = n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (e, t) {
    return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
  }), ln.isDSTShifted = n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
    if (!l(this._isDSTShifted)) return this._isDSTShifted;
    var e = {};

    if (w(e, this), (e = Yt(e))._a) {
      var t = e._isUTC ? y(e._a) : Tt(e._a);
      this._isDSTShifted = this.isValid() && 0 < a(e._a, t.toArray());
    } else this._isDSTShifted = !1;

    return this._isDSTShifted;
  });
  var hn = P.prototype;

  function cn(e, t, n, s) {
    var i = lt(),
        r = y().set(s, t);
    return i[n](r, e);
  }

  function fn(e, t, n) {
    if (d(e) && (t = e, e = void 0), e = e || "", null != t) return cn(e, t, n, "month");
    var s,
        i = [];

    for (s = 0; s < 12; s++) {
      i[s] = cn(e, s, n, "month");
    }

    return i;
  }

  function mn(e, t, n, s) {
    "boolean" == typeof e ? d(t) && (n = t, t = void 0) : (t = e, e = !1, d(n = t) && (n = t, t = void 0)), t = t || "";
    var i,
        r = lt(),
        a = e ? r._week.dow : 0;
    if (null != n) return cn(t, (n + a) % 7, s, "day");
    var o = [];

    for (i = 0; i < 7; i++) {
      o[i] = cn(t, (i + a) % 7, s, "day");
    }

    return o;
  }

  hn.calendar = function (e, t, n) {
    var s = this._calendar[e] || this._calendar.sameElse;
    return x(s) ? s.call(t, n) : s;
  }, hn.longDateFormat = function (e) {
    var t = this._longDateFormat[e],
        n = this._longDateFormat[e.toUpperCase()];

    return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function (e) {
      return e.slice(1);
    }), this._longDateFormat[e]);
  }, hn.invalidDate = function () {
    return this._invalidDate;
  }, hn.ordinal = function (e) {
    return this._ordinal.replace("%d", e);
  }, hn.preparse = dn, hn.postformat = dn, hn.relativeTime = function (e, t, n, s) {
    var i = this._relativeTime[n];
    return x(i) ? i(e, t, n, s) : i.replace(/%d/i, e);
  }, hn.pastFuture = function (e, t) {
    var n = this._relativeTime[0 < e ? "future" : "past"];
    return x(n) ? n(t) : n.replace(/%s/i, t);
  }, hn.set = function (e) {
    var t, n;

    for (n in e) {
      x(t = e[n]) ? this[n] = t : this["_" + n] = t;
    }

    this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
  }, hn.months = function (e, t) {
    return e ? o(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || We).test(t) ? "format" : "standalone"][e.month()] : o(this._months) ? this._months : this._months.standalone;
  }, hn.monthsShort = function (e, t) {
    return e ? o(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[We.test(t) ? "format" : "standalone"][e.month()] : o(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
  }, hn.monthsParse = function (e, t, n) {
    var s, i, r;
    if (this._monthsParseExact) return function (e, t, n) {
      var s,
          i,
          r,
          a = e.toLocaleLowerCase();
      if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s) {
        r = y([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[s] = this.months(r, "").toLocaleLowerCase();
      }
      return n ? "MMM" === t ? -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i : null : -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i : null : "MMM" === t ? -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i : -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i : null : -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i : -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i : null;
    }.call(this, e, t, n);

    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++) {
      if (i = y([2e3, s]), n && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[s] || (r = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[s] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[s].test(e)) return s;
      if (n && "MMM" === t && this._shortMonthsParse[s].test(e)) return s;
      if (!n && this._monthsParse[s].test(e)) return s;
    }
  }, hn.monthsRegex = function (e) {
    return this._monthsParseExact ? (m(this, "_monthsRegex") || Ne.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (m(this, "_monthsRegex") || (this._monthsRegex = Ue), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
  }, hn.monthsShortRegex = function (e) {
    return this._monthsParseExact ? (m(this, "_monthsRegex") || Ne.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (m(this, "_monthsShortRegex") || (this._monthsShortRegex = Le), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
  }, hn.week = function (e) {
    return Ie(e, this._week.dow, this._week.doy).week;
  }, hn.firstDayOfYear = function () {
    return this._week.doy;
  }, hn.firstDayOfWeek = function () {
    return this._week.dow;
  }, hn.weekdays = function (e, t) {
    return e ? o(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : o(this._weekdays) ? this._weekdays : this._weekdays.standalone;
  }, hn.weekdaysMin = function (e) {
    return e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
  }, hn.weekdaysShort = function (e) {
    return e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
  }, hn.weekdaysParse = function (e, t, n) {
    var s, i, r;
    if (this._weekdaysParseExact) return function (e, t, n) {
      var s,
          i,
          r,
          a = e.toLocaleLowerCase();
      if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s) {
        r = y([2e3, 1]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(r, "").toLocaleLowerCase();
      }
      return n ? "dddd" === t ? -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : null : "ddd" === t ? -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : null : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : null : "dddd" === t ? -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : null : "ddd" === t ? -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : null : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : null;
    }.call(this, e, t, n);

    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) {
      if (i = y([2e3, 1]).day(s), n && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(i, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[s] || (r = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[s] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[s].test(e)) return s;
      if (n && "ddd" === t && this._shortWeekdaysParse[s].test(e)) return s;
      if (n && "dd" === t && this._minWeekdaysParse[s].test(e)) return s;
      if (!n && this._weekdaysParse[s].test(e)) return s;
    }
  }, hn.weekdaysRegex = function (e) {
    return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || Be.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (m(this, "_weekdaysRegex") || (this._weekdaysRegex = $e), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
  }, hn.weekdaysShortRegex = function (e) {
    return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || Be.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (m(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = qe), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
  }, hn.weekdaysMinRegex = function (e) {
    return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || Be.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (m(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Je), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
  }, hn.isPM = function (e) {
    return "p" === (e + "").toLowerCase().charAt(0);
  }, hn.meridiem = function (e, t, n) {
    return 11 < e ? n ? "pm" : "PM" : n ? "am" : "AM";
  }, ot("en", {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function ordinal(e) {
      var t = e % 10;
      return e + (1 === k(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
    }
  }), c.lang = n("moment.lang is deprecated. Use moment.locale instead.", ot), c.langData = n("moment.langData is deprecated. Use moment.localeData instead.", lt);
  var _n = Math.abs;

  function yn(e, t, n, s) {
    var i = At(t, n);
    return e._milliseconds += s * i._milliseconds, e._days += s * i._days, e._months += s * i._months, e._bubble();
  }

  function gn(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e);
  }

  function pn(e) {
    return 4800 * e / 146097;
  }

  function vn(e) {
    return 146097 * e / 4800;
  }

  function wn(e) {
    return function () {
      return this.as(e);
    };
  }

  var Mn = wn("ms"),
      Sn = wn("s"),
      Dn = wn("m"),
      kn = wn("h"),
      Yn = wn("d"),
      On = wn("w"),
      Tn = wn("M"),
      xn = wn("y");

  function bn(e) {
    return function () {
      return this.isValid() ? this._data[e] : NaN;
    };
  }

  var Pn = bn("milliseconds"),
      Wn = bn("seconds"),
      Hn = bn("minutes"),
      Rn = bn("hours"),
      Cn = bn("days"),
      Fn = bn("months"),
      Ln = bn("years");
  var Un = Math.round,
      Nn = {
    ss: 44,
    s: 45,
    m: 45,
    h: 22,
    d: 26,
    M: 11
  };
  var Gn = Math.abs;

  function Vn(e) {
    return (0 < e) - (e < 0) || +e;
  }

  function En() {
    if (!this.isValid()) return this.localeData().invalidDate();
    var e,
        t,
        n = Gn(this._milliseconds) / 1e3,
        s = Gn(this._days),
        i = Gn(this._months);
    t = D((e = D(n / 60)) / 60), n %= 60, e %= 60;
    var r = D(i / 12),
        a = i %= 12,
        o = s,
        u = t,
        l = e,
        d = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
        h = this.asSeconds();
    if (!h) return "P0D";

    var c = h < 0 ? "-" : "",
        f = Vn(this._months) !== Vn(h) ? "-" : "",
        m = Vn(this._days) !== Vn(h) ? "-" : "",
        _ = Vn(this._milliseconds) !== Vn(h) ? "-" : "";

    return c + "P" + (r ? f + r + "Y" : "") + (a ? f + a + "M" : "") + (o ? m + o + "D" : "") + (u || l || d ? "T" : "") + (u ? _ + u + "H" : "") + (l ? _ + l + "M" : "") + (d ? _ + d + "S" : "");
  }

  var In = Ht.prototype;
  return In.isValid = function () {
    return this._isValid;
  }, In.abs = function () {
    var e = this._data;
    return this._milliseconds = _n(this._milliseconds), this._days = _n(this._days), this._months = _n(this._months), e.milliseconds = _n(e.milliseconds), e.seconds = _n(e.seconds), e.minutes = _n(e.minutes), e.hours = _n(e.hours), e.months = _n(e.months), e.years = _n(e.years), this;
  }, In.add = function (e, t) {
    return yn(this, e, t, 1);
  }, In.subtract = function (e, t) {
    return yn(this, e, t, -1);
  }, In.as = function (e) {
    if (!this.isValid()) return NaN;
    var t,
        n,
        s = this._milliseconds;
    if ("month" === (e = R(e)) || "year" === e) return t = this._days + s / 864e5, n = this._months + pn(t), "month" === e ? n : n / 12;

    switch (t = this._days + Math.round(vn(this._months)), e) {
      case "week":
        return t / 7 + s / 6048e5;

      case "day":
        return t + s / 864e5;

      case "hour":
        return 24 * t + s / 36e5;

      case "minute":
        return 1440 * t + s / 6e4;

      case "second":
        return 86400 * t + s / 1e3;

      case "millisecond":
        return Math.floor(864e5 * t) + s;

      default:
        throw new Error("Unknown unit " + e);
    }
  }, In.asMilliseconds = Mn, In.asSeconds = Sn, In.asMinutes = Dn, In.asHours = kn, In.asDays = Yn, In.asWeeks = On, In.asMonths = Tn, In.asYears = xn, In.valueOf = function () {
    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * k(this._months / 12) : NaN;
  }, In._bubble = function () {
    var e,
        t,
        n,
        s,
        i,
        r = this._milliseconds,
        a = this._days,
        o = this._months,
        u = this._data;
    return 0 <= r && 0 <= a && 0 <= o || r <= 0 && a <= 0 && o <= 0 || (r += 864e5 * gn(vn(o) + a), o = a = 0), u.milliseconds = r % 1e3, e = D(r / 1e3), u.seconds = e % 60, t = D(e / 60), u.minutes = t % 60, n = D(t / 60), u.hours = n % 24, o += i = D(pn(a += D(n / 24))), a -= gn(vn(i)), s = D(o / 12), o %= 12, u.days = a, u.months = o, u.years = s, this;
  }, In.clone = function () {
    return At(this);
  }, In.get = function (e) {
    return e = R(e), this.isValid() ? this[e + "s"]() : NaN;
  }, In.milliseconds = Pn, In.seconds = Wn, In.minutes = Hn, In.hours = Rn, In.days = Cn, In.weeks = function () {
    return D(this.days() / 7);
  }, In.months = Fn, In.years = Ln, In.humanize = function (e) {
    if (!this.isValid()) return this.localeData().invalidDate();
    var t,
        n,
        s,
        i,
        r,
        a,
        o,
        u,
        l,
        d,
        h,
        c = this.localeData(),
        f = (n = !e, s = c, i = At(t = this).abs(), r = Un(i.as("s")), a = Un(i.as("m")), o = Un(i.as("h")), u = Un(i.as("d")), l = Un(i.as("M")), d = Un(i.as("y")), (h = r <= Nn.ss && ["s", r] || r < Nn.s && ["ss", r] || a <= 1 && ["m"] || a < Nn.m && ["mm", a] || o <= 1 && ["h"] || o < Nn.h && ["hh", o] || u <= 1 && ["d"] || u < Nn.d && ["dd", u] || l <= 1 && ["M"] || l < Nn.M && ["MM", l] || d <= 1 && ["y"] || ["yy", d])[2] = n, h[3] = 0 < +t, h[4] = s, function (e, t, n, s, i) {
      return i.relativeTime(t || 1, !!n, e, s);
    }.apply(null, h));
    return e && (f = c.pastFuture(+this, f)), c.postformat(f);
  }, In.toISOString = En, In.toString = En, In.toJSON = En, In.locale = Qt, In.localeData = Kt, In.toIsoString = n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", En), In.lang = Xt, I("X", 0, 0, "unix"), I("x", 0, 0, "valueOf"), ue("x", se), ue("X", /[+-]?\d+(\.\d{1,3})?/), ce("X", function (e, t, n) {
    n._d = new Date(1e3 * parseFloat(e, 10));
  }), ce("x", function (e, t, n) {
    n._d = new Date(k(e));
  }), c.version = "2.22.1", e = Tt, c.fn = ln, c.min = function () {
    return Pt("isBefore", [].slice.call(arguments, 0));
  }, c.max = function () {
    return Pt("isAfter", [].slice.call(arguments, 0));
  }, c.now = function () {
    return Date.now ? Date.now() : +new Date();
  }, c.utc = y, c.unix = function (e) {
    return Tt(1e3 * e);
  }, c.months = function (e, t) {
    return fn(e, t, "months");
  }, c.isDate = h, c.locale = ot, c.invalid = v, c.duration = At, c.isMoment = S, c.weekdays = function (e, t, n) {
    return mn(e, t, n, "weekdays");
  }, c.parseZone = function () {
    return Tt.apply(null, arguments).parseZone();
  }, c.localeData = lt, c.isDuration = Rt, c.monthsShort = function (e, t) {
    return fn(e, t, "monthsShort");
  }, c.weekdaysMin = function (e, t, n) {
    return mn(e, t, n, "weekdaysMin");
  }, c.defineLocale = ut, c.updateLocale = function (e, t) {
    if (null != t) {
      var n,
          s,
          i = nt;
      null != (s = at(e)) && (i = s._config), (n = new P(t = b(i, t))).parentLocale = st[e], st[e] = n, ot(e);
    } else null != st[e] && (null != st[e].parentLocale ? st[e] = st[e].parentLocale : null != st[e] && delete st[e]);

    return st[e];
  }, c.locales = function () {
    return s(st);
  }, c.weekdaysShort = function (e, t, n) {
    return mn(e, t, n, "weekdaysShort");
  }, c.normalizeUnits = R, c.relativeTimeRounding = function (e) {
    return void 0 === e ? Un : "function" == typeof e && (Un = e, !0);
  }, c.relativeTimeThreshold = function (e, t) {
    return void 0 !== Nn[e] && (void 0 === t ? Nn[e] : (Nn[e] = t, "s" === e && (Nn.ss = t - 1), !0));
  }, c.calendarFormat = function (e, t) {
    var n = e.diff(t, "days", !0);
    return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
  }, c.prototype = ln, c.HTML5_FMT = {
    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
    DATE: "YYYY-MM-DD",
    TIME: "HH:mm",
    TIME_SECONDS: "HH:mm:ss",
    TIME_MS: "HH:mm:ss.SSS",
    WEEK: "YYYY-[W]WW",
    MONTH: "YYYY-MM"
  }, c;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./app/assets/packs/nprogress.js":
/*!***************************************!*\
  !*** ./app/assets/packs/nprogress.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */
;

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function () {
  var NProgress = {};
  NProgress.version = '0.2.0';
  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'linear',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleSpeed: 200,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };
  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */

  NProgress.configure = function (options) {
    var key, value;

    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };
  /**
   * Last number.
   */


  NProgress.status = null;
  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function (n) {
    var started = NProgress.isStarted();
    n = clamp(n, Settings.minimum, 1);
    NProgress.status = n === 1 ? null : n;
    var progress = NProgress.render(!started),
        bar = progress.querySelector(Settings.barSelector),
        speed = Settings.speed,
        ease = Settings.easing;
    progress.offsetWidth;
    /* Repaint */

    queue(function (next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS(); // Add transition

      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, {
          transition: 'none',
          opacity: 1
        });
        progress.offsetWidth;
        /* Repaint */

        setTimeout(function () {
          css(progress, {
            transition: 'all ' + speed + 'ms linear',
            opacity: 0
          });
          setTimeout(function () {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });
    return this;
  };

  NProgress.isStarted = function () {
    return typeof NProgress.status === 'number';
  };
  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */


  NProgress.start = function () {
    if (!NProgress.status) NProgress.set(0);

    var work = function work() {
      setTimeout(function () {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();
    return this;
  };
  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */


  NProgress.done = function (force) {
    if (!force && !NProgress.status) return this;
    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };
  /**
   * Increments by a random amount.
   */


  NProgress.inc = function (amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else if (n > 1) {
      return;
    } else {
      if (typeof amount !== 'number') {
        if (n >= 0 && n < 0.2) {
          amount = 0.1;
        } else if (n >= 0.2 && n < 0.5) {
          amount = 0.04;
        } else if (n >= 0.5 && n < 0.8) {
          amount = 0.02;
        } else if (n >= 0.8 && n < 0.99) {
          amount = 0.005;
        } else {
          amount = 0;
        }
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function () {
    return NProgress.inc();
  };
  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */


  (function () {
    var initial = 0,
        current = 0;

    NProgress.promise = function ($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;
      $promise.always(function () {
        current--;

        if (current === 0) {
          initial = 0;
          NProgress.done();
        } else {
          NProgress.set((initial - current) / initial);
        }
      });
      return this;
    };
  })();
  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */


  NProgress.render = function (fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');
    addClass(document.documentElement, 'nprogress-busy');
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;
    var bar = progress.querySelector(Settings.barSelector),
        perc = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent = document.querySelector(Settings.parent),
        spinner;
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };
  /**
   * Removes the element. Opposite of render().
   */


  NProgress.remove = function () {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };
  /**
   * Checks if the progress bar is rendered.
   */


  NProgress.isRendered = function () {
    return !!document.getElementById('nprogress');
  };
  /**
   * Determine which positioning CSS rule to use.
   */


  NProgress.getPositioningCSS = function () {
    // Sniff on document.body.style
    var bodyStyle = document.body.style; // Sniff prefixes

    var vendorPrefix = 'WebkitTransform' in bodyStyle ? 'Webkit' : 'MozTransform' in bodyStyle ? 'Moz' : 'msTransform' in bodyStyle ? 'ms' : 'OTransform' in bodyStyle ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };
  /**
   * Helpers
   */


  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }
  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */


  function toBarPerc(n) {
    return (-1 + n) * 100;
  }
  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */


  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = {
        transform: 'translate3d(' + toBarPerc(n) + '%,0,0)'
      };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = {
        transform: 'translate(' + toBarPerc(n) + '%,0)'
      };
    } else {
      barCSS = {
        'margin-left': toBarPerc(n) + '%'
      };
    }

    barCSS.transition = 'all ' + speed + 'ms ' + ease;
    return barCSS;
  }
  /**
   * (Internal) Queues a function to be executed.
   */


  var queue = function () {
    var pending = [];

    function next() {
      var fn = pending.shift();

      if (fn) {
        fn(next);
      }
    }

    return function (fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  }();
  /**
   * (Internal) Applies css properties to an element, similar to the jQuery
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it
   * does not perform any manipulation of values prior to setting styles.
   */


  var css = function () {
    var cssPrefixes = ['Webkit', 'O', 'Moz', 'ms'],
        cssProps = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function (match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;
      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;

      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function (element, properties) {
      var args = arguments,
          prop,
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    };
  }();
  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */


  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }
  /**
   * (Internal) Adds a class to an element.
   */


  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;
    if (hasClass(oldList, name)) return; // Trim the opening space.

    element.className = newList.substring(1);
  }
  /**
   * (Internal) Removes a class from an element.
   */


  function removeClass(element, name) {
    var oldList = classList(element),
        newList;
    if (!hasClass(element, name)) return; // Replace the class name.

    newList = oldList.replace(' ' + name + ' ', ' '); // Trim the opening and closing spaces.

    element.className = newList.substring(1, newList.length - 1);
  }
  /**
   * (Internal) Gets a space separated list of the class names on the element.
   * The list is wrapped with a single space on each end to facilitate finding
   * matches within the list.
   */


  function classList(element) {
    return (' ' + (element && element.className || '') + ' ').replace(/\s+/gi, ' ');
  }
  /**
   * (Internal) Removes an element from the DOM.
   */


  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});

/***/ }),

/***/ "./app/assets/packs/select2.full.min.js":
/*!**********************************************!*\
  !*** ./app/assets/packs/select2.full.min.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! Select2 4.0.6-rc.1 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function (a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (a) {
  var b = function () {
    if (a && a.fn && a.fn.select2 && a.fn.select2.amd) var b = a.fn.select2.amd;
    var b;
    return function () {
      if (!b || !b.requirejs) {
        b ? c = b : b = {};
        var a, c, d;
        !function (b) {
          function e(a, b) {
            return v.call(a, b);
          }

          function f(a, b) {
            var c,
                d,
                e,
                f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o = b && b.split("/"),
                p = t.map,
                q = p && p["*"] || {};

            if (a) {
              for (a = a.split("/"), g = a.length - 1, t.nodeIdCompat && x.test(a[g]) && (a[g] = a[g].replace(x, "")), "." === a[0].charAt(0) && o && (n = o.slice(0, o.length - 1), a = n.concat(a)), k = 0; k < a.length; k++) {
                if ("." === (m = a[k])) a.splice(k, 1), k -= 1;else if (".." === m) {
                  if (0 === k || 1 === k && ".." === a[2] || ".." === a[k - 1]) continue;
                  k > 0 && (a.splice(k - 1, 2), k -= 2);
                }
              }

              a = a.join("/");
            }

            if ((o || q) && p) {
              for (c = a.split("/"), k = c.length; k > 0; k -= 1) {
                if (d = c.slice(0, k).join("/"), o) for (l = o.length; l > 0; l -= 1) {
                  if ((e = p[o.slice(0, l).join("/")]) && (e = e[d])) {
                    f = e, h = k;
                    break;
                  }
                }
                if (f) break;
                !i && q && q[d] && (i = q[d], j = k);
              }

              !f && i && (f = i, h = j), f && (c.splice(0, h, f), a = c.join("/"));
            }

            return a;
          }

          function g(a, c) {
            return function () {
              var d = w.call(arguments, 0);
              return "string" != typeof d[0] && 1 === d.length && d.push(null), _o.apply(b, d.concat([a, c]));
            };
          }

          function h(a) {
            return function (b) {
              return f(b, a);
            };
          }

          function i(a) {
            return function (b) {
              r[a] = b;
            };
          }

          function j(a) {
            if (e(s, a)) {
              var c = s[a];
              delete s[a], u[a] = !0, n.apply(b, c);
            }

            if (!e(r, a) && !e(u, a)) throw new Error("No " + a);
            return r[a];
          }

          function k(a) {
            var b,
                c = a ? a.indexOf("!") : -1;
            return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a];
          }

          function l(a) {
            return a ? k(a) : [];
          }

          function m(a) {
            return function () {
              return t && t.config && t.config[a] || {};
            };
          }

          var n,
              _o,
              p,
              q,
              r = {},
              s = {},
              t = {},
              u = {},
              v = Object.prototype.hasOwnProperty,
              w = [].slice,
              x = /\.js$/;

          p = function p(a, b) {
            var c,
                d = k(a),
                e = d[0],
                g = b[1];
            return a = d[1], e && (e = f(e, g), c = j(e)), e ? a = c && c.normalize ? c.normalize(a, h(g)) : f(a, g) : (a = f(a, g), d = k(a), e = d[0], a = d[1], e && (c = j(e))), {
              f: e ? e + "!" + a : a,
              n: a,
              pr: e,
              p: c
            };
          }, q = {
            require: function require(a) {
              return g(a);
            },
            exports: function exports(a) {
              var b = r[a];
              return void 0 !== b ? b : r[a] = {};
            },
            module: function module(a) {
              return {
                id: a,
                uri: "",
                exports: r[a],
                config: m(a)
              };
            }
          }, n = function n(a, c, d, f) {
            var h,
                k,
                m,
                n,
                o,
                t,
                v,
                w = [],
                x = typeof d;

            if (f = f || a, t = l(f), "undefined" === x || "function" === x) {
              for (c = !c.length && d.length ? ["require", "exports", "module"] : c, o = 0; o < c.length; o += 1) {
                if (n = p(c[o], t), "require" === (k = n.f)) w[o] = q.require(a);else if ("exports" === k) w[o] = q.exports(a), v = !0;else if ("module" === k) h = w[o] = q.module(a);else if (e(r, k) || e(s, k) || e(u, k)) w[o] = j(k);else {
                  if (!n.p) throw new Error(a + " missing " + k);
                  n.p.load(n.n, g(f, !0), i(k), {}), w[o] = r[k];
                }
              }

              m = d ? d.apply(r[a], w) : void 0, a && (h && h.exports !== b && h.exports !== r[a] ? r[a] = h.exports : m === b && v || (r[a] = m));
            } else a && (r[a] = d);
          }, a = c = _o = function o(a, c, d, e, f) {
            if ("string" == typeof a) return q[a] ? q[a](c) : j(p(a, l(c)).f);

            if (!a.splice) {
              if (t = a, t.deps && _o(t.deps, t.callback), !c) return;
              c.splice ? (a = c, c = d, d = null) : a = b;
            }

            return c = c || function () {}, "function" == typeof d && (d = e, e = f), e ? n(b, a, c, d) : setTimeout(function () {
              n(b, a, c, d);
            }, 4), _o;
          }, _o.config = function (a) {
            return _o(a);
          }, a._defined = r, d = function d(a, b, c) {
            if ("string" != typeof a) throw new Error("See almond README: incorrect module build, no module name");
            b.splice || (c = b, b = []), e(r, a) || e(s, a) || (s[a] = [a, b, c]);
          }, d.amd = {
            jQuery: !0
          };
        }(), b.requirejs = a, b.require = c, b.define = d;
      }
    }(), b.define("almond", function () {}), b.define("jquery", [], function () {
      var b = a || $;
      return null == b && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), b;
    }), b.define("select2/utils", ["jquery"], function (a) {
      function b(a) {
        var b = a.prototype,
            c = [];

        for (var d in b) {
          "function" == typeof b[d] && "constructor" !== d && c.push(d);
        }

        return c;
      }

      var c = {};
      c.Extend = function (a, b) {
        function c() {
          this.constructor = a;
        }

        var d = {}.hasOwnProperty;

        for (var e in b) {
          d.call(b, e) && (a[e] = b[e]);
        }

        return c.prototype = b.prototype, a.prototype = new c(), a.__super__ = b.prototype, a;
      }, c.Decorate = function (a, c) {
        function d() {
          var b = Array.prototype.unshift,
              d = c.prototype.constructor.length,
              e = a.prototype.constructor;
          d > 0 && (b.call(arguments, a.prototype.constructor), e = c.prototype.constructor), e.apply(this, arguments);
        }

        function e() {
          this.constructor = d;
        }

        var f = b(c),
            g = b(a);
        c.displayName = a.displayName, d.prototype = new e();

        for (var h = 0; h < g.length; h++) {
          var i = g[h];
          d.prototype[i] = a.prototype[i];
        }

        for (var j = function j(a) {
          var b = function b() {};

          (a in d.prototype) && (b = d.prototype[a]);
          var e = c.prototype[a];
          return function () {
            return Array.prototype.unshift.call(arguments, b), e.apply(this, arguments);
          };
        }, k = 0; k < f.length; k++) {
          var l = f[k];
          d.prototype[l] = j(l);
        }

        return d;
      };

      var d = function d() {
        this.listeners = {};
      };

      d.prototype.on = function (a, b) {
        this.listeners = this.listeners || {}, a in this.listeners ? this.listeners[a].push(b) : this.listeners[a] = [b];
      }, d.prototype.trigger = function (a) {
        var b = Array.prototype.slice,
            c = b.call(arguments, 1);
        this.listeners = this.listeners || {}, null == c && (c = []), 0 === c.length && c.push({}), c[0]._type = a, a in this.listeners && this.invoke(this.listeners[a], b.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments);
      }, d.prototype.invoke = function (a, b) {
        for (var c = 0, d = a.length; c < d; c++) {
          a[c].apply(this, b);
        }
      }, c.Observable = d, c.generateChars = function (a) {
        for (var b = "", c = 0; c < a; c++) {
          b += Math.floor(36 * Math.random()).toString(36);
        }

        return b;
      }, c.bind = function (a, b) {
        return function () {
          a.apply(b, arguments);
        };
      }, c._convertData = function (a) {
        for (var b in a) {
          var c = b.split("-"),
              d = a;

          if (1 !== c.length) {
            for (var e = 0; e < c.length; e++) {
              var f = c[e];
              f = f.substring(0, 1).toLowerCase() + f.substring(1), f in d || (d[f] = {}), e == c.length - 1 && (d[f] = a[b]), d = d[f];
            }

            delete a[b];
          }
        }

        return a;
      }, c.hasScroll = function (b, c) {
        var d = a(c),
            e = c.style.overflowX,
            f = c.style.overflowY;
        return (e !== f || "hidden" !== f && "visible" !== f) && ("scroll" === e || "scroll" === f || d.innerHeight() < c.scrollHeight || d.innerWidth() < c.scrollWidth);
      }, c.escapeMarkup = function (a) {
        var b = {
          "\\": "&#92;",
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
          "/": "&#47;"
        };
        return "string" != typeof a ? a : String(a).replace(/[&<>"'\/\\]/g, function (a) {
          return b[a];
        });
      }, c.appendMany = function (b, c) {
        if ("1.7" === a.fn.jquery.substr(0, 3)) {
          var d = a();
          a.map(c, function (a) {
            d = d.add(a);
          }), c = d;
        }

        b.append(c);
      }, c.__cache = {};
      var e = 0;
      return c.GetUniqueElementId = function (a) {
        var b = a.getAttribute("data-select2-id");
        return null == b && (a.id ? (b = a.id, a.setAttribute("data-select2-id", b)) : (a.setAttribute("data-select2-id", ++e), b = e.toString())), b;
      }, c.StoreData = function (a, b, d) {
        var e = c.GetUniqueElementId(a);
        c.__cache[e] || (c.__cache[e] = {}), c.__cache[e][b] = d;
      }, c.GetData = function (b, d) {
        var e = c.GetUniqueElementId(b);
        return d ? c.__cache[e] && null != c.__cache[e][d] ? c.__cache[e][d] : a(b).data(d) : c.__cache[e];
      }, c.RemoveData = function (a) {
        var b = c.GetUniqueElementId(a);
        null != c.__cache[b] && delete c.__cache[b];
      }, c;
    }), b.define("select2/results", ["jquery", "./utils"], function (a, b) {
      function c(a, b, d) {
        this.$element = a, this.data = d, this.options = b, c.__super__.constructor.call(this);
      }

      return b.Extend(c, b.Observable), c.prototype.render = function () {
        var b = a('<ul class="select2-results__options" role="tree"></ul>');
        return this.options.get("multiple") && b.attr("aria-multiselectable", "true"), this.$results = b, b;
      }, c.prototype.clear = function () {
        this.$results.empty();
      }, c.prototype.displayMessage = function (b) {
        var c = this.options.get("escapeMarkup");
        this.clear(), this.hideLoading();
        var d = a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
            e = this.options.get("translations").get(b.message);
        d.append(c(e(b.args))), d[0].className += " select2-results__message", this.$results.append(d);
      }, c.prototype.hideMessages = function () {
        this.$results.find(".select2-results__message").remove();
      }, c.prototype.append = function (a) {
        this.hideLoading();
        var b = [];
        if (null == a.results || 0 === a.results.length) return void (0 === this.$results.children().length && this.trigger("results:message", {
          message: "noResults"
        }));
        a.results = this.sort(a.results);

        for (var c = 0; c < a.results.length; c++) {
          var d = a.results[c],
              e = this.option(d);
          b.push(e);
        }

        this.$results.append(b);
      }, c.prototype.position = function (a, b) {
        b.find(".select2-results").append(a);
      }, c.prototype.sort = function (a) {
        return this.options.get("sorter")(a);
      }, c.prototype.highlightFirstItem = function () {
        var a = this.$results.find(".select2-results__option[aria-selected]"),
            b = a.filter("[aria-selected=true]");
        b.length > 0 ? b.first().trigger("mouseenter") : a.first().trigger("mouseenter"), this.ensureHighlightVisible();
      }, c.prototype.setClasses = function () {
        var c = this;
        this.data.current(function (d) {
          var e = a.map(d, function (a) {
            return a.id.toString();
          });
          c.$results.find(".select2-results__option[aria-selected]").each(function () {
            var c = a(this),
                d = b.GetData(this, "data"),
                f = "" + d.id;
            null != d.element && d.element.selected || null == d.element && a.inArray(f, e) > -1 ? c.attr("aria-selected", "true") : c.attr("aria-selected", "false");
          });
        });
      }, c.prototype.showLoading = function (a) {
        this.hideLoading();
        var b = this.options.get("translations").get("searching"),
            c = {
          disabled: !0,
          loading: !0,
          text: b(a)
        },
            d = this.option(c);
        d.className += " loading-results", this.$results.prepend(d);
      }, c.prototype.hideLoading = function () {
        this.$results.find(".loading-results").remove();
      }, c.prototype.option = function (c) {
        var d = document.createElement("li");
        d.className = "select2-results__option";
        var e = {
          role: "treeitem",
          "aria-selected": "false"
        };
        c.disabled && (delete e["aria-selected"], e["aria-disabled"] = "true"), null == c.id && delete e["aria-selected"], null != c._resultId && (d.id = c._resultId), c.title && (d.title = c.title), c.children && (e.role = "group", e["aria-label"] = c.text, delete e["aria-selected"]);

        for (var f in e) {
          var g = e[f];
          d.setAttribute(f, g);
        }

        if (c.children) {
          var h = a(d),
              i = document.createElement("strong");
          i.className = "select2-results__group";
          a(i);
          this.template(c, i);

          for (var j = [], k = 0; k < c.children.length; k++) {
            var l = c.children[k],
                m = this.option(l);
            j.push(m);
          }

          var n = a("<ul></ul>", {
            "class": "select2-results__options select2-results__options--nested"
          });
          n.append(j), h.append(i), h.append(n);
        } else this.template(c, d);

        return b.StoreData(d, "data", c), d;
      }, c.prototype.bind = function (c, d) {
        var e = this,
            f = c.id + "-results";
        this.$results.attr("id", f), c.on("results:all", function (a) {
          e.clear(), e.append(a.data), c.isOpen() && (e.setClasses(), e.highlightFirstItem());
        }), c.on("results:append", function (a) {
          e.append(a.data), c.isOpen() && e.setClasses();
        }), c.on("query", function (a) {
          e.hideMessages(), e.showLoading(a);
        }), c.on("select", function () {
          c.isOpen() && (e.setClasses(), e.highlightFirstItem());
        }), c.on("unselect", function () {
          c.isOpen() && (e.setClasses(), e.highlightFirstItem());
        }), c.on("open", function () {
          e.$results.attr("aria-expanded", "true"), e.$results.attr("aria-hidden", "false"), e.setClasses(), e.ensureHighlightVisible();
        }), c.on("close", function () {
          e.$results.attr("aria-expanded", "false"), e.$results.attr("aria-hidden", "true"), e.$results.removeAttr("aria-activedescendant");
        }), c.on("results:toggle", function () {
          var a = e.getHighlightedResults();
          0 !== a.length && a.trigger("mouseup");
        }), c.on("results:select", function () {
          var a = e.getHighlightedResults();

          if (0 !== a.length) {
            var c = b.GetData(a[0], "data");
            "true" == a.attr("aria-selected") ? e.trigger("close", {}) : e.trigger("select", {
              data: c
            });
          }
        }), c.on("results:previous", function () {
          var a = e.getHighlightedResults(),
              b = e.$results.find("[aria-selected]"),
              c = b.index(a);

          if (!(c <= 0)) {
            var d = c - 1;
            0 === a.length && (d = 0);
            var f = b.eq(d);
            f.trigger("mouseenter");
            var g = e.$results.offset().top,
                h = f.offset().top,
                i = e.$results.scrollTop() + (h - g);
            0 === d ? e.$results.scrollTop(0) : h - g < 0 && e.$results.scrollTop(i);
          }
        }), c.on("results:next", function () {
          var a = e.getHighlightedResults(),
              b = e.$results.find("[aria-selected]"),
              c = b.index(a),
              d = c + 1;

          if (!(d >= b.length)) {
            var f = b.eq(d);
            f.trigger("mouseenter");
            var g = e.$results.offset().top + e.$results.outerHeight(!1),
                h = f.offset().top + f.outerHeight(!1),
                i = e.$results.scrollTop() + h - g;
            0 === d ? e.$results.scrollTop(0) : h > g && e.$results.scrollTop(i);
          }
        }), c.on("results:focus", function (a) {
          a.element.addClass("select2-results__option--highlighted");
        }), c.on("results:message", function (a) {
          e.displayMessage(a);
        }), a.fn.mousewheel && this.$results.on("mousewheel", function (a) {
          var b = e.$results.scrollTop(),
              c = e.$results.get(0).scrollHeight - b + a.deltaY,
              d = a.deltaY > 0 && b - a.deltaY <= 0,
              f = a.deltaY < 0 && c <= e.$results.height();
          d ? (e.$results.scrollTop(0), a.preventDefault(), a.stopPropagation()) : f && (e.$results.scrollTop(e.$results.get(0).scrollHeight - e.$results.height()), a.preventDefault(), a.stopPropagation());
        }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (c) {
          var d = a(this),
              f = b.GetData(this, "data");
          if ("true" === d.attr("aria-selected")) return void (e.options.get("multiple") ? e.trigger("unselect", {
            originalEvent: c,
            data: f
          }) : e.trigger("close", {}));
          e.trigger("select", {
            originalEvent: c,
            data: f
          });
        }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (c) {
          var d = b.GetData(this, "data");
          e.getHighlightedResults().removeClass("select2-results__option--highlighted"), e.trigger("results:focus", {
            data: d,
            element: a(this)
          });
        });
      }, c.prototype.getHighlightedResults = function () {
        return this.$results.find(".select2-results__option--highlighted");
      }, c.prototype.destroy = function () {
        this.$results.remove();
      }, c.prototype.ensureHighlightVisible = function () {
        var a = this.getHighlightedResults();

        if (0 !== a.length) {
          var b = this.$results.find("[aria-selected]"),
              c = b.index(a),
              d = this.$results.offset().top,
              e = a.offset().top,
              f = this.$results.scrollTop() + (e - d),
              g = e - d;
          f -= 2 * a.outerHeight(!1), c <= 2 ? this.$results.scrollTop(0) : (g > this.$results.outerHeight() || g < 0) && this.$results.scrollTop(f);
        }
      }, c.prototype.template = function (b, c) {
        var d = this.options.get("templateResult"),
            e = this.options.get("escapeMarkup"),
            f = d(b, c);
        null == f ? c.style.display = "none" : "string" == typeof f ? c.innerHTML = e(f) : a(c).append(f);
      }, c;
    }), b.define("select2/keys", [], function () {
      return {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        DELETE: 46
      };
    }), b.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (a, b, c) {
      function d(a, b) {
        this.$element = a, this.options = b, d.__super__.constructor.call(this);
      }

      return b.Extend(d, b.Observable), d.prototype.render = function () {
        var c = a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
        return this._tabindex = 0, null != b.GetData(this.$element[0], "old-tabindex") ? this._tabindex = b.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), c.attr("title", this.$element.attr("title")), c.attr("tabindex", this._tabindex), this.$selection = c, c;
      }, d.prototype.bind = function (a, b) {
        var d = this,
            e = (a.id, a.id + "-results");
        this.container = a, this.$selection.on("focus", function (a) {
          d.trigger("focus", a);
        }), this.$selection.on("blur", function (a) {
          d._handleBlur(a);
        }), this.$selection.on("keydown", function (a) {
          d.trigger("keypress", a), a.which === c.SPACE && a.preventDefault();
        }), a.on("results:focus", function (a) {
          d.$selection.attr("aria-activedescendant", a.data._resultId);
        }), a.on("selection:update", function (a) {
          d.update(a.data);
        }), a.on("open", function () {
          d.$selection.attr("aria-expanded", "true"), d.$selection.attr("aria-owns", e), d._attachCloseHandler(a);
        }), a.on("close", function () {
          d.$selection.attr("aria-expanded", "false"), d.$selection.removeAttr("aria-activedescendant"), d.$selection.removeAttr("aria-owns"), d.$selection.focus(), window.setTimeout(function () {
            d.$selection.focus();
          }, 0), d._detachCloseHandler(a);
        }), a.on("enable", function () {
          d.$selection.attr("tabindex", d._tabindex);
        }), a.on("disable", function () {
          d.$selection.attr("tabindex", "-1");
        });
      }, d.prototype._handleBlur = function (b) {
        var c = this;
        window.setTimeout(function () {
          document.activeElement == c.$selection[0] || a.contains(c.$selection[0], document.activeElement) || c.trigger("blur", b);
        }, 1);
      }, d.prototype._attachCloseHandler = function (c) {
        a(document.body).on("mousedown.select2." + c.id, function (c) {
          var d = a(c.target),
              e = d.closest(".select2");
          a(".select2.select2-container--open").each(function () {
            a(this), this != e[0] && b.GetData(this, "element").select2("close");
          });
        });
      }, d.prototype._detachCloseHandler = function (b) {
        a(document.body).off("mousedown.select2." + b.id);
      }, d.prototype.position = function (a, b) {
        b.find(".selection").append(a);
      }, d.prototype.destroy = function () {
        this._detachCloseHandler(this.container);
      }, d.prototype.update = function (a) {
        throw new Error("The `update` method must be defined in child classes.");
      }, d;
    }), b.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (a, b, c, d) {
      function e() {
        e.__super__.constructor.apply(this, arguments);
      }

      return c.Extend(e, b), e.prototype.render = function () {
        var a = e.__super__.render.call(this);

        return a.addClass("select2-selection--single"), a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), a;
      }, e.prototype.bind = function (a, b) {
        var c = this;

        e.__super__.bind.apply(this, arguments);

        var d = a.id + "-container";
        this.$selection.find(".select2-selection__rendered").attr("id", d).attr("role", "textbox").attr("aria-readonly", "true"), this.$selection.attr("aria-labelledby", d), this.$selection.on("mousedown", function (a) {
          1 === a.which && c.trigger("toggle", {
            originalEvent: a
          });
        }), this.$selection.on("focus", function (a) {}), this.$selection.on("blur", function (a) {}), a.on("focus", function (b) {
          a.isOpen() || c.$selection.focus();
        });
      }, e.prototype.clear = function () {
        var a = this.$selection.find(".select2-selection__rendered");
        a.empty(), a.removeAttr("title");
      }, e.prototype.display = function (a, b) {
        var c = this.options.get("templateSelection");
        return this.options.get("escapeMarkup")(c(a, b));
      }, e.prototype.selectionContainer = function () {
        return a("<span></span>");
      }, e.prototype.update = function (a) {
        if (0 === a.length) return void this.clear();
        var b = a[0],
            c = this.$selection.find(".select2-selection__rendered"),
            d = this.display(b, c);
        c.empty().append(d), c.attr("title", b.title || b.text);
      }, e;
    }), b.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (a, b, c) {
      function d(a, b) {
        d.__super__.constructor.apply(this, arguments);
      }

      return c.Extend(d, b), d.prototype.render = function () {
        var a = d.__super__.render.call(this);

        return a.addClass("select2-selection--multiple"), a.html('<ul class="select2-selection__rendered"></ul>'), a;
      }, d.prototype.bind = function (b, e) {
        var f = this;
        d.__super__.bind.apply(this, arguments), this.$selection.on("click", function (a) {
          f.trigger("toggle", {
            originalEvent: a
          });
        }), this.$selection.on("click", ".select2-selection__choice__remove", function (b) {
          if (!f.options.get("disabled")) {
            var d = a(this),
                e = d.parent(),
                g = c.GetData(e[0], "data");
            f.trigger("unselect", {
              originalEvent: b,
              data: g
            });
          }
        });
      }, d.prototype.clear = function () {
        var a = this.$selection.find(".select2-selection__rendered");
        a.empty(), a.removeAttr("title");
      }, d.prototype.display = function (a, b) {
        var c = this.options.get("templateSelection");
        return this.options.get("escapeMarkup")(c(a, b));
      }, d.prototype.selectionContainer = function () {
        return a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
      }, d.prototype.update = function (a) {
        if (this.clear(), 0 !== a.length) {
          for (var b = [], d = 0; d < a.length; d++) {
            var e = a[d],
                f = this.selectionContainer(),
                g = this.display(e, f);
            f.append(g), f.attr("title", e.title || e.text), c.StoreData(f[0], "data", e), b.push(f);
          }

          var h = this.$selection.find(".select2-selection__rendered");
          c.appendMany(h, b);
        }
      }, d;
    }), b.define("select2/selection/placeholder", ["../utils"], function (a) {
      function b(a, b, c) {
        this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c);
      }

      return b.prototype.normalizePlaceholder = function (a, b) {
        return "string" == typeof b && (b = {
          id: "",
          text: b
        }), b;
      }, b.prototype.createPlaceholder = function (a, b) {
        var c = this.selectionContainer();
        return c.html(this.display(b)), c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), c;
      }, b.prototype.update = function (a, b) {
        var c = 1 == b.length && b[0].id != this.placeholder.id;
        if (b.length > 1 || c) return a.call(this, b);
        this.clear();
        var d = this.createPlaceholder(this.placeholder);
        this.$selection.find(".select2-selection__rendered").append(d);
      }, b;
    }), b.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], function (a, b, c) {
      function d() {}

      return d.prototype.bind = function (a, b, c) {
        var d = this;
        a.call(this, b, c), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (a) {
          d._handleClear(a);
        }), b.on("keypress", function (a) {
          d._handleKeyboardClear(a, b);
        });
      }, d.prototype._handleClear = function (a, b) {
        if (!this.options.get("disabled")) {
          var d = this.$selection.find(".select2-selection__clear");

          if (0 !== d.length) {
            b.stopPropagation();
            var e = c.GetData(d[0], "data"),
                f = this.$element.val();
            this.$element.val(this.placeholder.id);
            var g = {
              data: e
            };
            if (this.trigger("clear", g), g.prevented) return void this.$element.val(f);

            for (var h = 0; h < e.length; h++) {
              if (g = {
                data: e[h]
              }, this.trigger("unselect", g), g.prevented) return void this.$element.val(f);
            }

            this.$element.trigger("change"), this.trigger("toggle", {});
          }
        }
      }, d.prototype._handleKeyboardClear = function (a, c, d) {
        d.isOpen() || c.which != b.DELETE && c.which != b.BACKSPACE || this._handleClear(c);
      }, d.prototype.update = function (b, d) {
        if (b.call(this, d), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === d.length)) {
          var e = a('<span class="select2-selection__clear">&times;</span>');
          c.StoreData(e[0], "data", d), this.$selection.find(".select2-selection__rendered").prepend(e);
        }
      }, d;
    }), b.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (a, b, c) {
      function d(a, b, c) {
        a.call(this, b, c);
      }

      return d.prototype.render = function (b) {
        var c = a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
        this.$searchContainer = c, this.$search = c.find("input");
        var d = b.call(this);
        return this._transferTabIndex(), d;
      }, d.prototype.bind = function (a, d, e) {
        var f = this;
        a.call(this, d, e), d.on("open", function () {
          f.$search.trigger("focus");
        }), d.on("close", function () {
          f.$search.val(""), f.$search.removeAttr("aria-activedescendant"), f.$search.trigger("focus");
        }), d.on("enable", function () {
          f.$search.prop("disabled", !1), f._transferTabIndex();
        }), d.on("disable", function () {
          f.$search.prop("disabled", !0);
        }), d.on("focus", function (a) {
          f.$search.trigger("focus");
        }), d.on("results:focus", function (a) {
          f.$search.attr("aria-activedescendant", a.id);
        }), this.$selection.on("focusin", ".select2-search--inline", function (a) {
          f.trigger("focus", a);
        }), this.$selection.on("focusout", ".select2-search--inline", function (a) {
          f._handleBlur(a);
        }), this.$selection.on("keydown", ".select2-search--inline", function (a) {
          if (a.stopPropagation(), f.trigger("keypress", a), f._keyUpPrevented = a.isDefaultPrevented(), a.which === c.BACKSPACE && "" === f.$search.val()) {
            var d = f.$searchContainer.prev(".select2-selection__choice");

            if (d.length > 0) {
              var e = b.GetData(d[0], "data");
              f.searchRemoveChoice(e), a.preventDefault();
            }
          }
        });
        var g = document.documentMode,
            h = g && g <= 11;
        this.$selection.on("input.searchcheck", ".select2-search--inline", function (a) {
          if (h) return void f.$selection.off("input.search input.searchcheck");
          f.$selection.off("keyup.search");
        }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (a) {
          if (h && "input" === a.type) return void f.$selection.off("input.search input.searchcheck");
          var b = a.which;
          b != c.SHIFT && b != c.CTRL && b != c.ALT && b != c.TAB && f.handleSearch(a);
        });
      }, d.prototype._transferTabIndex = function (a) {
        this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1");
      }, d.prototype.createPlaceholder = function (a, b) {
        this.$search.attr("placeholder", b.text);
      }, d.prototype.update = function (a, b) {
        var c = this.$search[0] == document.activeElement;

        if (this.$search.attr("placeholder", ""), a.call(this, b), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), c) {
          this.$element.find("[data-select2-tag]").length ? this.$element.focus() : this.$search.focus();
        }
      }, d.prototype.handleSearch = function () {
        if (this.resizeSearch(), !this._keyUpPrevented) {
          var a = this.$search.val();
          this.trigger("query", {
            term: a
          });
        }

        this._keyUpPrevented = !1;
      }, d.prototype.searchRemoveChoice = function (a, b) {
        this.trigger("unselect", {
          data: b
        }), this.$search.val(b.text), this.handleSearch();
      }, d.prototype.resizeSearch = function () {
        this.$search.css("width", "25px");
        var a = "";
        if ("" !== this.$search.attr("placeholder")) a = this.$selection.find(".select2-selection__rendered").innerWidth();else {
          a = .75 * (this.$search.val().length + 1) + "em";
        }
        this.$search.css("width", a);
      }, d;
    }), b.define("select2/selection/eventRelay", ["jquery"], function (a) {
      function b() {}

      return b.prototype.bind = function (b, c, d) {
        var e = this,
            f = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"],
            g = ["opening", "closing", "selecting", "unselecting", "clearing"];
        b.call(this, c, d), c.on("*", function (b, c) {
          if (-1 !== a.inArray(b, f)) {
            c = c || {};
            var d = a.Event("select2:" + b, {
              params: c
            });
            e.$element.trigger(d), -1 !== a.inArray(b, g) && (c.prevented = d.isDefaultPrevented());
          }
        });
      }, b;
    }), b.define("select2/translation", ["jquery", "require"], function (a, b) {
      function c(a) {
        this.dict = a || {};
      }

      return c.prototype.all = function () {
        return this.dict;
      }, c.prototype.get = function (a) {
        return this.dict[a];
      }, c.prototype.extend = function (b) {
        this.dict = a.extend({}, b.all(), this.dict);
      }, c._cache = {}, c.loadPath = function (a) {
        if (!(a in c._cache)) {
          var d = b(a);
          c._cache[a] = d;
        }

        return new c(c._cache[a]);
      }, c;
    }), b.define("select2/diacritics", [], function () {
      return {
        "Ⓐ": "A",
        "Ａ": "A",
        "À": "A",
        "Á": "A",
        "Â": "A",
        "Ầ": "A",
        "Ấ": "A",
        "Ẫ": "A",
        "Ẩ": "A",
        "Ã": "A",
        "Ā": "A",
        "Ă": "A",
        "Ằ": "A",
        "Ắ": "A",
        "Ẵ": "A",
        "Ẳ": "A",
        "Ȧ": "A",
        "Ǡ": "A",
        "Ä": "A",
        "Ǟ": "A",
        "Ả": "A",
        "Å": "A",
        "Ǻ": "A",
        "Ǎ": "A",
        "Ȁ": "A",
        "Ȃ": "A",
        "Ạ": "A",
        "Ậ": "A",
        "Ặ": "A",
        "Ḁ": "A",
        "Ą": "A",
        "Ⱥ": "A",
        "Ɐ": "A",
        "Ꜳ": "AA",
        "Æ": "AE",
        "Ǽ": "AE",
        "Ǣ": "AE",
        "Ꜵ": "AO",
        "Ꜷ": "AU",
        "Ꜹ": "AV",
        "Ꜻ": "AV",
        "Ꜽ": "AY",
        "Ⓑ": "B",
        "Ｂ": "B",
        "Ḃ": "B",
        "Ḅ": "B",
        "Ḇ": "B",
        "Ƀ": "B",
        "Ƃ": "B",
        "Ɓ": "B",
        "Ⓒ": "C",
        "Ｃ": "C",
        "Ć": "C",
        "Ĉ": "C",
        "Ċ": "C",
        "Č": "C",
        "Ç": "C",
        "Ḉ": "C",
        "Ƈ": "C",
        "Ȼ": "C",
        "Ꜿ": "C",
        "Ⓓ": "D",
        "Ｄ": "D",
        "Ḋ": "D",
        "Ď": "D",
        "Ḍ": "D",
        "Ḑ": "D",
        "Ḓ": "D",
        "Ḏ": "D",
        "Đ": "D",
        "Ƌ": "D",
        "Ɗ": "D",
        "Ɖ": "D",
        "Ꝺ": "D",
        "Ǳ": "DZ",
        "Ǆ": "DZ",
        "ǲ": "Dz",
        "ǅ": "Dz",
        "Ⓔ": "E",
        "Ｅ": "E",
        "È": "E",
        "É": "E",
        "Ê": "E",
        "Ề": "E",
        "Ế": "E",
        "Ễ": "E",
        "Ể": "E",
        "Ẽ": "E",
        "Ē": "E",
        "Ḕ": "E",
        "Ḗ": "E",
        "Ĕ": "E",
        "Ė": "E",
        "Ë": "E",
        "Ẻ": "E",
        "Ě": "E",
        "Ȅ": "E",
        "Ȇ": "E",
        "Ẹ": "E",
        "Ệ": "E",
        "Ȩ": "E",
        "Ḝ": "E",
        "Ę": "E",
        "Ḙ": "E",
        "Ḛ": "E",
        "Ɛ": "E",
        "Ǝ": "E",
        "Ⓕ": "F",
        "Ｆ": "F",
        "Ḟ": "F",
        "Ƒ": "F",
        "Ꝼ": "F",
        "Ⓖ": "G",
        "Ｇ": "G",
        "Ǵ": "G",
        "Ĝ": "G",
        "Ḡ": "G",
        "Ğ": "G",
        "Ġ": "G",
        "Ǧ": "G",
        "Ģ": "G",
        "Ǥ": "G",
        "Ɠ": "G",
        "Ꞡ": "G",
        "Ᵹ": "G",
        "Ꝿ": "G",
        "Ⓗ": "H",
        "Ｈ": "H",
        "Ĥ": "H",
        "Ḣ": "H",
        "Ḧ": "H",
        "Ȟ": "H",
        "Ḥ": "H",
        "Ḩ": "H",
        "Ḫ": "H",
        "Ħ": "H",
        "Ⱨ": "H",
        "Ⱶ": "H",
        "Ɥ": "H",
        "Ⓘ": "I",
        "Ｉ": "I",
        "Ì": "I",
        "Í": "I",
        "Î": "I",
        "Ĩ": "I",
        "Ī": "I",
        "Ĭ": "I",
        "İ": "I",
        "Ï": "I",
        "Ḯ": "I",
        "Ỉ": "I",
        "Ǐ": "I",
        "Ȉ": "I",
        "Ȋ": "I",
        "Ị": "I",
        "Į": "I",
        "Ḭ": "I",
        "Ɨ": "I",
        "Ⓙ": "J",
        "Ｊ": "J",
        "Ĵ": "J",
        "Ɉ": "J",
        "Ⓚ": "K",
        "Ｋ": "K",
        "Ḱ": "K",
        "Ǩ": "K",
        "Ḳ": "K",
        "Ķ": "K",
        "Ḵ": "K",
        "Ƙ": "K",
        "Ⱪ": "K",
        "Ꝁ": "K",
        "Ꝃ": "K",
        "Ꝅ": "K",
        "Ꞣ": "K",
        "Ⓛ": "L",
        "Ｌ": "L",
        "Ŀ": "L",
        "Ĺ": "L",
        "Ľ": "L",
        "Ḷ": "L",
        "Ḹ": "L",
        "Ļ": "L",
        "Ḽ": "L",
        "Ḻ": "L",
        "Ł": "L",
        "Ƚ": "L",
        "Ɫ": "L",
        "Ⱡ": "L",
        "Ꝉ": "L",
        "Ꝇ": "L",
        "Ꞁ": "L",
        "Ǉ": "LJ",
        "ǈ": "Lj",
        "Ⓜ": "M",
        "Ｍ": "M",
        "Ḿ": "M",
        "Ṁ": "M",
        "Ṃ": "M",
        "Ɱ": "M",
        "Ɯ": "M",
        "Ⓝ": "N",
        "Ｎ": "N",
        "Ǹ": "N",
        "Ń": "N",
        "Ñ": "N",
        "Ṅ": "N",
        "Ň": "N",
        "Ṇ": "N",
        "Ņ": "N",
        "Ṋ": "N",
        "Ṉ": "N",
        "Ƞ": "N",
        "Ɲ": "N",
        "Ꞑ": "N",
        "Ꞥ": "N",
        "Ǌ": "NJ",
        "ǋ": "Nj",
        "Ⓞ": "O",
        "Ｏ": "O",
        "Ò": "O",
        "Ó": "O",
        "Ô": "O",
        "Ồ": "O",
        "Ố": "O",
        "Ỗ": "O",
        "Ổ": "O",
        "Õ": "O",
        "Ṍ": "O",
        "Ȭ": "O",
        "Ṏ": "O",
        "Ō": "O",
        "Ṑ": "O",
        "Ṓ": "O",
        "Ŏ": "O",
        "Ȯ": "O",
        "Ȱ": "O",
        "Ö": "O",
        "Ȫ": "O",
        "Ỏ": "O",
        "Ő": "O",
        "Ǒ": "O",
        "Ȍ": "O",
        "Ȏ": "O",
        "Ơ": "O",
        "Ờ": "O",
        "Ớ": "O",
        "Ỡ": "O",
        "Ở": "O",
        "Ợ": "O",
        "Ọ": "O",
        "Ộ": "O",
        "Ǫ": "O",
        "Ǭ": "O",
        "Ø": "O",
        "Ǿ": "O",
        "Ɔ": "O",
        "Ɵ": "O",
        "Ꝋ": "O",
        "Ꝍ": "O",
        "Ƣ": "OI",
        "Ꝏ": "OO",
        "Ȣ": "OU",
        "Ⓟ": "P",
        "Ｐ": "P",
        "Ṕ": "P",
        "Ṗ": "P",
        "Ƥ": "P",
        "Ᵽ": "P",
        "Ꝑ": "P",
        "Ꝓ": "P",
        "Ꝕ": "P",
        "Ⓠ": "Q",
        "Ｑ": "Q",
        "Ꝗ": "Q",
        "Ꝙ": "Q",
        "Ɋ": "Q",
        "Ⓡ": "R",
        "Ｒ": "R",
        "Ŕ": "R",
        "Ṙ": "R",
        "Ř": "R",
        "Ȑ": "R",
        "Ȓ": "R",
        "Ṛ": "R",
        "Ṝ": "R",
        "Ŗ": "R",
        "Ṟ": "R",
        "Ɍ": "R",
        "Ɽ": "R",
        "Ꝛ": "R",
        "Ꞧ": "R",
        "Ꞃ": "R",
        "Ⓢ": "S",
        "Ｓ": "S",
        "ẞ": "S",
        "Ś": "S",
        "Ṥ": "S",
        "Ŝ": "S",
        "Ṡ": "S",
        "Š": "S",
        "Ṧ": "S",
        "Ṣ": "S",
        "Ṩ": "S",
        "Ș": "S",
        "Ş": "S",
        "Ȿ": "S",
        "Ꞩ": "S",
        "Ꞅ": "S",
        "Ⓣ": "T",
        "Ｔ": "T",
        "Ṫ": "T",
        "Ť": "T",
        "Ṭ": "T",
        "Ț": "T",
        "Ţ": "T",
        "Ṱ": "T",
        "Ṯ": "T",
        "Ŧ": "T",
        "Ƭ": "T",
        "Ʈ": "T",
        "Ⱦ": "T",
        "Ꞇ": "T",
        "Ꜩ": "TZ",
        "Ⓤ": "U",
        "Ｕ": "U",
        "Ù": "U",
        "Ú": "U",
        "Û": "U",
        "Ũ": "U",
        "Ṹ": "U",
        "Ū": "U",
        "Ṻ": "U",
        "Ŭ": "U",
        "Ü": "U",
        "Ǜ": "U",
        "Ǘ": "U",
        "Ǖ": "U",
        "Ǚ": "U",
        "Ủ": "U",
        "Ů": "U",
        "Ű": "U",
        "Ǔ": "U",
        "Ȕ": "U",
        "Ȗ": "U",
        "Ư": "U",
        "Ừ": "U",
        "Ứ": "U",
        "Ữ": "U",
        "Ử": "U",
        "Ự": "U",
        "Ụ": "U",
        "Ṳ": "U",
        "Ų": "U",
        "Ṷ": "U",
        "Ṵ": "U",
        "Ʉ": "U",
        "Ⓥ": "V",
        "Ｖ": "V",
        "Ṽ": "V",
        "Ṿ": "V",
        "Ʋ": "V",
        "Ꝟ": "V",
        "Ʌ": "V",
        "Ꝡ": "VY",
        "Ⓦ": "W",
        "Ｗ": "W",
        "Ẁ": "W",
        "Ẃ": "W",
        "Ŵ": "W",
        "Ẇ": "W",
        "Ẅ": "W",
        "Ẉ": "W",
        "Ⱳ": "W",
        "Ⓧ": "X",
        "Ｘ": "X",
        "Ẋ": "X",
        "Ẍ": "X",
        "Ⓨ": "Y",
        "Ｙ": "Y",
        "Ỳ": "Y",
        "Ý": "Y",
        "Ŷ": "Y",
        "Ỹ": "Y",
        "Ȳ": "Y",
        "Ẏ": "Y",
        "Ÿ": "Y",
        "Ỷ": "Y",
        "Ỵ": "Y",
        "Ƴ": "Y",
        "Ɏ": "Y",
        "Ỿ": "Y",
        "Ⓩ": "Z",
        "Ｚ": "Z",
        "Ź": "Z",
        "Ẑ": "Z",
        "Ż": "Z",
        "Ž": "Z",
        "Ẓ": "Z",
        "Ẕ": "Z",
        "Ƶ": "Z",
        "Ȥ": "Z",
        "Ɀ": "Z",
        "Ⱬ": "Z",
        "Ꝣ": "Z",
        "ⓐ": "a",
        "ａ": "a",
        "ẚ": "a",
        "à": "a",
        "á": "a",
        "â": "a",
        "ầ": "a",
        "ấ": "a",
        "ẫ": "a",
        "ẩ": "a",
        "ã": "a",
        "ā": "a",
        "ă": "a",
        "ằ": "a",
        "ắ": "a",
        "ẵ": "a",
        "ẳ": "a",
        "ȧ": "a",
        "ǡ": "a",
        "ä": "a",
        "ǟ": "a",
        "ả": "a",
        "å": "a",
        "ǻ": "a",
        "ǎ": "a",
        "ȁ": "a",
        "ȃ": "a",
        "ạ": "a",
        "ậ": "a",
        "ặ": "a",
        "ḁ": "a",
        "ą": "a",
        "ⱥ": "a",
        "ɐ": "a",
        "ꜳ": "aa",
        "æ": "ae",
        "ǽ": "ae",
        "ǣ": "ae",
        "ꜵ": "ao",
        "ꜷ": "au",
        "ꜹ": "av",
        "ꜻ": "av",
        "ꜽ": "ay",
        "ⓑ": "b",
        "ｂ": "b",
        "ḃ": "b",
        "ḅ": "b",
        "ḇ": "b",
        "ƀ": "b",
        "ƃ": "b",
        "ɓ": "b",
        "ⓒ": "c",
        "ｃ": "c",
        "ć": "c",
        "ĉ": "c",
        "ċ": "c",
        "č": "c",
        "ç": "c",
        "ḉ": "c",
        "ƈ": "c",
        "ȼ": "c",
        "ꜿ": "c",
        "ↄ": "c",
        "ⓓ": "d",
        "ｄ": "d",
        "ḋ": "d",
        "ď": "d",
        "ḍ": "d",
        "ḑ": "d",
        "ḓ": "d",
        "ḏ": "d",
        "đ": "d",
        "ƌ": "d",
        "ɖ": "d",
        "ɗ": "d",
        "ꝺ": "d",
        "ǳ": "dz",
        "ǆ": "dz",
        "ⓔ": "e",
        "ｅ": "e",
        "è": "e",
        "é": "e",
        "ê": "e",
        "ề": "e",
        "ế": "e",
        "ễ": "e",
        "ể": "e",
        "ẽ": "e",
        "ē": "e",
        "ḕ": "e",
        "ḗ": "e",
        "ĕ": "e",
        "ė": "e",
        "ë": "e",
        "ẻ": "e",
        "ě": "e",
        "ȅ": "e",
        "ȇ": "e",
        "ẹ": "e",
        "ệ": "e",
        "ȩ": "e",
        "ḝ": "e",
        "ę": "e",
        "ḙ": "e",
        "ḛ": "e",
        "ɇ": "e",
        "ɛ": "e",
        "ǝ": "e",
        "ⓕ": "f",
        "ｆ": "f",
        "ḟ": "f",
        "ƒ": "f",
        "ꝼ": "f",
        "ⓖ": "g",
        "ｇ": "g",
        "ǵ": "g",
        "ĝ": "g",
        "ḡ": "g",
        "ğ": "g",
        "ġ": "g",
        "ǧ": "g",
        "ģ": "g",
        "ǥ": "g",
        "ɠ": "g",
        "ꞡ": "g",
        "ᵹ": "g",
        "ꝿ": "g",
        "ⓗ": "h",
        "ｈ": "h",
        "ĥ": "h",
        "ḣ": "h",
        "ḧ": "h",
        "ȟ": "h",
        "ḥ": "h",
        "ḩ": "h",
        "ḫ": "h",
        "ẖ": "h",
        "ħ": "h",
        "ⱨ": "h",
        "ⱶ": "h",
        "ɥ": "h",
        "ƕ": "hv",
        "ⓘ": "i",
        "ｉ": "i",
        "ì": "i",
        "í": "i",
        "î": "i",
        "ĩ": "i",
        "ī": "i",
        "ĭ": "i",
        "ï": "i",
        "ḯ": "i",
        "ỉ": "i",
        "ǐ": "i",
        "ȉ": "i",
        "ȋ": "i",
        "ị": "i",
        "į": "i",
        "ḭ": "i",
        "ɨ": "i",
        "ı": "i",
        "ⓙ": "j",
        "ｊ": "j",
        "ĵ": "j",
        "ǰ": "j",
        "ɉ": "j",
        "ⓚ": "k",
        "ｋ": "k",
        "ḱ": "k",
        "ǩ": "k",
        "ḳ": "k",
        "ķ": "k",
        "ḵ": "k",
        "ƙ": "k",
        "ⱪ": "k",
        "ꝁ": "k",
        "ꝃ": "k",
        "ꝅ": "k",
        "ꞣ": "k",
        "ⓛ": "l",
        "ｌ": "l",
        "ŀ": "l",
        "ĺ": "l",
        "ľ": "l",
        "ḷ": "l",
        "ḹ": "l",
        "ļ": "l",
        "ḽ": "l",
        "ḻ": "l",
        "ſ": "l",
        "ł": "l",
        "ƚ": "l",
        "ɫ": "l",
        "ⱡ": "l",
        "ꝉ": "l",
        "ꞁ": "l",
        "ꝇ": "l",
        "ǉ": "lj",
        "ⓜ": "m",
        "ｍ": "m",
        "ḿ": "m",
        "ṁ": "m",
        "ṃ": "m",
        "ɱ": "m",
        "ɯ": "m",
        "ⓝ": "n",
        "ｎ": "n",
        "ǹ": "n",
        "ń": "n",
        "ñ": "n",
        "ṅ": "n",
        "ň": "n",
        "ṇ": "n",
        "ņ": "n",
        "ṋ": "n",
        "ṉ": "n",
        "ƞ": "n",
        "ɲ": "n",
        "ŉ": "n",
        "ꞑ": "n",
        "ꞥ": "n",
        "ǌ": "nj",
        "ⓞ": "o",
        "ｏ": "o",
        "ò": "o",
        "ó": "o",
        "ô": "o",
        "ồ": "o",
        "ố": "o",
        "ỗ": "o",
        "ổ": "o",
        "õ": "o",
        "ṍ": "o",
        "ȭ": "o",
        "ṏ": "o",
        "ō": "o",
        "ṑ": "o",
        "ṓ": "o",
        "ŏ": "o",
        "ȯ": "o",
        "ȱ": "o",
        "ö": "o",
        "ȫ": "o",
        "ỏ": "o",
        "ő": "o",
        "ǒ": "o",
        "ȍ": "o",
        "ȏ": "o",
        "ơ": "o",
        "ờ": "o",
        "ớ": "o",
        "ỡ": "o",
        "ở": "o",
        "ợ": "o",
        "ọ": "o",
        "ộ": "o",
        "ǫ": "o",
        "ǭ": "o",
        "ø": "o",
        "ǿ": "o",
        "ɔ": "o",
        "ꝋ": "o",
        "ꝍ": "o",
        "ɵ": "o",
        "ƣ": "oi",
        "ȣ": "ou",
        "ꝏ": "oo",
        "ⓟ": "p",
        "ｐ": "p",
        "ṕ": "p",
        "ṗ": "p",
        "ƥ": "p",
        "ᵽ": "p",
        "ꝑ": "p",
        "ꝓ": "p",
        "ꝕ": "p",
        "ⓠ": "q",
        "ｑ": "q",
        "ɋ": "q",
        "ꝗ": "q",
        "ꝙ": "q",
        "ⓡ": "r",
        "ｒ": "r",
        "ŕ": "r",
        "ṙ": "r",
        "ř": "r",
        "ȑ": "r",
        "ȓ": "r",
        "ṛ": "r",
        "ṝ": "r",
        "ŗ": "r",
        "ṟ": "r",
        "ɍ": "r",
        "ɽ": "r",
        "ꝛ": "r",
        "ꞧ": "r",
        "ꞃ": "r",
        "ⓢ": "s",
        "ｓ": "s",
        "ß": "s",
        "ś": "s",
        "ṥ": "s",
        "ŝ": "s",
        "ṡ": "s",
        "š": "s",
        "ṧ": "s",
        "ṣ": "s",
        "ṩ": "s",
        "ș": "s",
        "ş": "s",
        "ȿ": "s",
        "ꞩ": "s",
        "ꞅ": "s",
        "ẛ": "s",
        "ⓣ": "t",
        "ｔ": "t",
        "ṫ": "t",
        "ẗ": "t",
        "ť": "t",
        "ṭ": "t",
        "ț": "t",
        "ţ": "t",
        "ṱ": "t",
        "ṯ": "t",
        "ŧ": "t",
        "ƭ": "t",
        "ʈ": "t",
        "ⱦ": "t",
        "ꞇ": "t",
        "ꜩ": "tz",
        "ⓤ": "u",
        "ｕ": "u",
        "ù": "u",
        "ú": "u",
        "û": "u",
        "ũ": "u",
        "ṹ": "u",
        "ū": "u",
        "ṻ": "u",
        "ŭ": "u",
        "ü": "u",
        "ǜ": "u",
        "ǘ": "u",
        "ǖ": "u",
        "ǚ": "u",
        "ủ": "u",
        "ů": "u",
        "ű": "u",
        "ǔ": "u",
        "ȕ": "u",
        "ȗ": "u",
        "ư": "u",
        "ừ": "u",
        "ứ": "u",
        "ữ": "u",
        "ử": "u",
        "ự": "u",
        "ụ": "u",
        "ṳ": "u",
        "ų": "u",
        "ṷ": "u",
        "ṵ": "u",
        "ʉ": "u",
        "ⓥ": "v",
        "ｖ": "v",
        "ṽ": "v",
        "ṿ": "v",
        "ʋ": "v",
        "ꝟ": "v",
        "ʌ": "v",
        "ꝡ": "vy",
        "ⓦ": "w",
        "ｗ": "w",
        "ẁ": "w",
        "ẃ": "w",
        "ŵ": "w",
        "ẇ": "w",
        "ẅ": "w",
        "ẘ": "w",
        "ẉ": "w",
        "ⱳ": "w",
        "ⓧ": "x",
        "ｘ": "x",
        "ẋ": "x",
        "ẍ": "x",
        "ⓨ": "y",
        "ｙ": "y",
        "ỳ": "y",
        "ý": "y",
        "ŷ": "y",
        "ỹ": "y",
        "ȳ": "y",
        "ẏ": "y",
        "ÿ": "y",
        "ỷ": "y",
        "ẙ": "y",
        "ỵ": "y",
        "ƴ": "y",
        "ɏ": "y",
        "ỿ": "y",
        "ⓩ": "z",
        "ｚ": "z",
        "ź": "z",
        "ẑ": "z",
        "ż": "z",
        "ž": "z",
        "ẓ": "z",
        "ẕ": "z",
        "ƶ": "z",
        "ȥ": "z",
        "ɀ": "z",
        "ⱬ": "z",
        "ꝣ": "z",
        "Ά": "Α",
        "Έ": "Ε",
        "Ή": "Η",
        "Ί": "Ι",
        "Ϊ": "Ι",
        "Ό": "Ο",
        "Ύ": "Υ",
        "Ϋ": "Υ",
        "Ώ": "Ω",
        "ά": "α",
        "έ": "ε",
        "ή": "η",
        "ί": "ι",
        "ϊ": "ι",
        "ΐ": "ι",
        "ό": "ο",
        "ύ": "υ",
        "ϋ": "υ",
        "ΰ": "υ",
        "ω": "ω",
        "ς": "σ"
      };
    }), b.define("select2/data/base", ["../utils"], function (a) {
      function b(a, c) {
        b.__super__.constructor.call(this);
      }

      return a.Extend(b, a.Observable), b.prototype.current = function (a) {
        throw new Error("The `current` method must be defined in child classes.");
      }, b.prototype.query = function (a, b) {
        throw new Error("The `query` method must be defined in child classes.");
      }, b.prototype.bind = function (a, b) {}, b.prototype.destroy = function () {}, b.prototype.generateResultId = function (b, c) {
        var d = b.id + "-result-";
        return d += a.generateChars(4), null != c.id ? d += "-" + c.id.toString() : d += "-" + a.generateChars(4), d;
      }, b;
    }), b.define("select2/data/select", ["./base", "../utils", "jquery"], function (a, b, c) {
      function d(a, b) {
        this.$element = a, this.options = b, d.__super__.constructor.call(this);
      }

      return b.Extend(d, a), d.prototype.current = function (a) {
        var b = [],
            d = this;
        this.$element.find(":selected").each(function () {
          var a = c(this),
              e = d.item(a);
          b.push(e);
        }), a(b);
      }, d.prototype.select = function (a) {
        var b = this;
        if (a.selected = !0, c(a.element).is("option")) return a.element.selected = !0, void this.$element.trigger("change");
        if (this.$element.prop("multiple")) this.current(function (d) {
          var e = [];
          a = [a], a.push.apply(a, d);

          for (var f = 0; f < a.length; f++) {
            var g = a[f].id;
            -1 === c.inArray(g, e) && e.push(g);
          }

          b.$element.val(e), b.$element.trigger("change");
        });else {
          var d = a.id;
          this.$element.val(d), this.$element.trigger("change");
        }
      }, d.prototype.unselect = function (a) {
        var b = this;

        if (this.$element.prop("multiple")) {
          if (a.selected = !1, c(a.element).is("option")) return a.element.selected = !1, void this.$element.trigger("change");
          this.current(function (d) {
            for (var e = [], f = 0; f < d.length; f++) {
              var g = d[f].id;
              g !== a.id && -1 === c.inArray(g, e) && e.push(g);
            }

            b.$element.val(e), b.$element.trigger("change");
          });
        }
      }, d.prototype.bind = function (a, b) {
        var c = this;
        this.container = a, a.on("select", function (a) {
          c.select(a.data);
        }), a.on("unselect", function (a) {
          c.unselect(a.data);
        });
      }, d.prototype.destroy = function () {
        this.$element.find("*").each(function () {
          b.RemoveData(this);
        });
      }, d.prototype.query = function (a, b) {
        var d = [],
            e = this;
        this.$element.children().each(function () {
          var b = c(this);

          if (b.is("option") || b.is("optgroup")) {
            var f = e.item(b),
                g = e.matches(a, f);
            null !== g && d.push(g);
          }
        }), b({
          results: d
        });
      }, d.prototype.addOptions = function (a) {
        b.appendMany(this.$element, a);
      }, d.prototype.option = function (a) {
        var d;
        a.children ? (d = document.createElement("optgroup"), d.label = a.text) : (d = document.createElement("option"), void 0 !== d.textContent ? d.textContent = a.text : d.innerText = a.text), void 0 !== a.id && (d.value = a.id), a.disabled && (d.disabled = !0), a.selected && (d.selected = !0), a.title && (d.title = a.title);

        var e = c(d),
            f = this._normalizeItem(a);

        return f.element = d, b.StoreData(d, "data", f), e;
      }, d.prototype.item = function (a) {
        var d = {};
        if (null != (d = b.GetData(a[0], "data"))) return d;
        if (a.is("option")) d = {
          id: a.val(),
          text: a.text(),
          disabled: a.prop("disabled"),
          selected: a.prop("selected"),
          title: a.prop("title")
        };else if (a.is("optgroup")) {
          d = {
            text: a.prop("label"),
            children: [],
            title: a.prop("title")
          };

          for (var e = a.children("option"), f = [], g = 0; g < e.length; g++) {
            var h = c(e[g]),
                i = this.item(h);
            f.push(i);
          }

          d.children = f;
        }
        return d = this._normalizeItem(d), d.element = a[0], b.StoreData(a[0], "data", d), d;
      }, d.prototype._normalizeItem = function (a) {
        a !== Object(a) && (a = {
          id: a,
          text: a
        }), a = c.extend({}, {
          text: ""
        }, a);
        var b = {
          selected: !1,
          disabled: !1
        };
        return null != a.id && (a.id = a.id.toString()), null != a.text && (a.text = a.text.toString()), null == a._resultId && a.id && null != this.container && (a._resultId = this.generateResultId(this.container, a)), c.extend({}, b, a);
      }, d.prototype.matches = function (a, b) {
        return this.options.get("matcher")(a, b);
      }, d;
    }), b.define("select2/data/array", ["./select", "../utils", "jquery"], function (a, b, c) {
      function d(a, b) {
        var c = b.get("data") || [];
        d.__super__.constructor.call(this, a, b), this.addOptions(this.convertToOptions(c));
      }

      return b.Extend(d, a), d.prototype.select = function (a) {
        var b = this.$element.find("option").filter(function (b, c) {
          return c.value == a.id.toString();
        });
        0 === b.length && (b = this.option(a), this.addOptions(b)), d.__super__.select.call(this, a);
      }, d.prototype.convertToOptions = function (a) {
        function d(a) {
          return function () {
            return c(this).val() == a.id;
          };
        }

        for (var e = this, f = this.$element.find("option"), g = f.map(function () {
          return e.item(c(this)).id;
        }).get(), h = [], i = 0; i < a.length; i++) {
          var j = this._normalizeItem(a[i]);

          if (c.inArray(j.id, g) >= 0) {
            var k = f.filter(d(j)),
                l = this.item(k),
                m = c.extend(!0, {}, j, l),
                n = this.option(m);
            k.replaceWith(n);
          } else {
            var o = this.option(j);

            if (j.children) {
              var p = this.convertToOptions(j.children);
              b.appendMany(o, p);
            }

            h.push(o);
          }
        }

        return h;
      }, d;
    }), b.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (a, b, c) {
      function d(a, b) {
        this.ajaxOptions = this._applyDefaults(b.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), d.__super__.constructor.call(this, a, b);
      }

      return b.Extend(d, a), d.prototype._applyDefaults = function (a) {
        var b = {
          data: function data(a) {
            return c.extend({}, a, {
              q: a.term
            });
          },
          transport: function transport(a, b, d) {
            var e = c.ajax(a);
            return e.then(b), e.fail(d), e;
          }
        };
        return c.extend({}, b, a, !0);
      }, d.prototype.processResults = function (a) {
        return a;
      }, d.prototype.query = function (a, b) {
        function d() {
          var d = f.transport(f, function (d) {
            var f = e.processResults(d, a);
            e.options.get("debug") && window.console && console.error && (f && f.results && c.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), b(f);
          }, function () {
            "status" in d && (0 === d.status || "0" === d.status) || e.trigger("results:message", {
              message: "errorLoading"
            });
          });
          e._request = d;
        }

        var e = this;
        null != this._request && (c.isFunction(this._request.abort) && this._request.abort(), this._request = null);
        var f = c.extend({
          type: "GET"
        }, this.ajaxOptions);
        "function" == typeof f.url && (f.url = f.url.call(this.$element, a)), "function" == typeof f.data && (f.data = f.data.call(this.$element, a)), this.ajaxOptions.delay && null != a.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(d, this.ajaxOptions.delay)) : d();
      }, d;
    }), b.define("select2/data/tags", ["jquery"], function (a) {
      function b(b, c, d) {
        var e = d.get("tags"),
            f = d.get("createTag");
        void 0 !== f && (this.createTag = f);
        var g = d.get("insertTag");
        if (void 0 !== g && (this.insertTag = g), b.call(this, c, d), a.isArray(e)) for (var h = 0; h < e.length; h++) {
          var i = e[h],
              j = this._normalizeItem(i),
              k = this.option(j);

          this.$element.append(k);
        }
      }

      return b.prototype.query = function (a, b, c) {
        function d(a, f) {
          for (var g = a.results, h = 0; h < g.length; h++) {
            var i = g[h],
                j = null != i.children && !d({
              results: i.children
            }, !0);
            if ((i.text || "").toUpperCase() === (b.term || "").toUpperCase() || j) return !f && (a.data = g, void c(a));
          }

          if (f) return !0;
          var k = e.createTag(b);

          if (null != k) {
            var l = e.option(k);
            l.attr("data-select2-tag", !0), e.addOptions([l]), e.insertTag(g, k);
          }

          a.results = g, c(a);
        }

        var e = this;
        if (this._removeOldTags(), null == b.term || null != b.page) return void a.call(this, b, c);
        a.call(this, b, d);
      }, b.prototype.createTag = function (b, c) {
        var d = a.trim(c.term);
        return "" === d ? null : {
          id: d,
          text: d
        };
      }, b.prototype.insertTag = function (a, b, c) {
        b.unshift(c);
      }, b.prototype._removeOldTags = function (b) {
        this._lastTag;
        this.$element.find("option[data-select2-tag]").each(function () {
          this.selected || a(this).remove();
        });
      }, b;
    }), b.define("select2/data/tokenizer", ["jquery"], function (a) {
      function b(a, b, c) {
        var d = c.get("tokenizer");
        void 0 !== d && (this.tokenizer = d), a.call(this, b, c);
      }

      return b.prototype.bind = function (a, b, c) {
        a.call(this, b, c), this.$search = b.dropdown.$search || b.selection.$search || c.find(".select2-search__field");
      }, b.prototype.query = function (b, c, d) {
        function e(b) {
          var c = g._normalizeItem(b);

          if (!g.$element.find("option").filter(function () {
            return a(this).val() === c.id;
          }).length) {
            var d = g.option(c);
            d.attr("data-select2-tag", !0), g._removeOldTags(), g.addOptions([d]);
          }

          f(c);
        }

        function f(a) {
          g.trigger("select", {
            data: a
          });
        }

        var g = this;
        c.term = c.term || "";
        var h = this.tokenizer(c, this.options, e);
        h.term !== c.term && (this.$search.length && (this.$search.val(h.term), this.$search.focus()), c.term = h.term), b.call(this, c, d);
      }, b.prototype.tokenizer = function (b, c, d, e) {
        for (var f = d.get("tokenSeparators") || [], g = c.term, h = 0, i = this.createTag || function (a) {
          return {
            id: a.term,
            text: a.term
          };
        }; h < g.length;) {
          var j = g[h];

          if (-1 !== a.inArray(j, f)) {
            var k = g.substr(0, h),
                l = a.extend({}, c, {
              term: k
            }),
                m = i(l);
            null != m ? (e(m), g = g.substr(h + 1) || "", h = 0) : h++;
          } else h++;
        }

        return {
          term: g
        };
      }, b;
    }), b.define("select2/data/minimumInputLength", [], function () {
      function a(a, b, c) {
        this.minimumInputLength = c.get("minimumInputLength"), a.call(this, b, c);
      }

      return a.prototype.query = function (a, b, c) {
        if (b.term = b.term || "", b.term.length < this.minimumInputLength) return void this.trigger("results:message", {
          message: "inputTooShort",
          args: {
            minimum: this.minimumInputLength,
            input: b.term,
            params: b
          }
        });
        a.call(this, b, c);
      }, a;
    }), b.define("select2/data/maximumInputLength", [], function () {
      function a(a, b, c) {
        this.maximumInputLength = c.get("maximumInputLength"), a.call(this, b, c);
      }

      return a.prototype.query = function (a, b, c) {
        if (b.term = b.term || "", this.maximumInputLength > 0 && b.term.length > this.maximumInputLength) return void this.trigger("results:message", {
          message: "inputTooLong",
          args: {
            maximum: this.maximumInputLength,
            input: b.term,
            params: b
          }
        });
        a.call(this, b, c);
      }, a;
    }), b.define("select2/data/maximumSelectionLength", [], function () {
      function a(a, b, c) {
        this.maximumSelectionLength = c.get("maximumSelectionLength"), a.call(this, b, c);
      }

      return a.prototype.query = function (a, b, c) {
        var d = this;
        this.current(function (e) {
          var f = null != e ? e.length : 0;
          if (d.maximumSelectionLength > 0 && f >= d.maximumSelectionLength) return void d.trigger("results:message", {
            message: "maximumSelected",
            args: {
              maximum: d.maximumSelectionLength
            }
          });
          a.call(d, b, c);
        });
      }, a;
    }), b.define("select2/dropdown", ["jquery", "./utils"], function (a, b) {
      function c(a, b) {
        this.$element = a, this.options = b, c.__super__.constructor.call(this);
      }

      return b.Extend(c, b.Observable), c.prototype.render = function () {
        var b = a('<span class="select2-dropdown"><span class="select2-results"></span></span>');
        return b.attr("dir", this.options.get("dir")), this.$dropdown = b, b;
      }, c.prototype.bind = function () {}, c.prototype.position = function (a, b) {}, c.prototype.destroy = function () {
        this.$dropdown.remove();
      }, c;
    }), b.define("select2/dropdown/search", ["jquery", "../utils"], function (a, b) {
      function c() {}

      return c.prototype.render = function (b) {
        var c = b.call(this),
            d = a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');
        return this.$searchContainer = d, this.$search = d.find("input"), c.prepend(d), c;
      }, c.prototype.bind = function (b, c, d) {
        var e = this;
        b.call(this, c, d), this.$search.on("keydown", function (a) {
          e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented();
        }), this.$search.on("input", function (b) {
          a(this).off("keyup");
        }), this.$search.on("keyup input", function (a) {
          e.handleSearch(a);
        }), c.on("open", function () {
          e.$search.attr("tabindex", 0), e.$search.focus(), window.setTimeout(function () {
            e.$search.focus();
          }, 0);
        }), c.on("close", function () {
          e.$search.attr("tabindex", -1), e.$search.val(""), e.$search.blur();
        }), c.on("focus", function () {
          c.isOpen() || e.$search.focus();
        }), c.on("results:all", function (a) {
          if (null == a.query.term || "" === a.query.term) {
            e.showSearch(a) ? e.$searchContainer.removeClass("select2-search--hide") : e.$searchContainer.addClass("select2-search--hide");
          }
        });
      }, c.prototype.handleSearch = function (a) {
        if (!this._keyUpPrevented) {
          var b = this.$search.val();
          this.trigger("query", {
            term: b
          });
        }

        this._keyUpPrevented = !1;
      }, c.prototype.showSearch = function (a, b) {
        return !0;
      }, c;
    }), b.define("select2/dropdown/hidePlaceholder", [], function () {
      function a(a, b, c, d) {
        this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c, d);
      }

      return a.prototype.append = function (a, b) {
        b.results = this.removePlaceholder(b.results), a.call(this, b);
      }, a.prototype.normalizePlaceholder = function (a, b) {
        return "string" == typeof b && (b = {
          id: "",
          text: b
        }), b;
      }, a.prototype.removePlaceholder = function (a, b) {
        for (var c = b.slice(0), d = b.length - 1; d >= 0; d--) {
          var e = b[d];
          this.placeholder.id === e.id && c.splice(d, 1);
        }

        return c;
      }, a;
    }), b.define("select2/dropdown/infiniteScroll", ["jquery"], function (a) {
      function b(a, b, c, d) {
        this.lastParams = {}, a.call(this, b, c, d), this.$loadingMore = this.createLoadingMore(), this.loading = !1;
      }

      return b.prototype.append = function (a, b) {
        this.$loadingMore.remove(), this.loading = !1, a.call(this, b), this.showLoadingMore(b) && this.$results.append(this.$loadingMore);
      }, b.prototype.bind = function (b, c, d) {
        var e = this;
        b.call(this, c, d), c.on("query", function (a) {
          e.lastParams = a, e.loading = !0;
        }), c.on("query:append", function (a) {
          e.lastParams = a, e.loading = !0;
        }), this.$results.on("scroll", function () {
          var b = a.contains(document.documentElement, e.$loadingMore[0]);

          if (!e.loading && b) {
            e.$results.offset().top + e.$results.outerHeight(!1) + 50 >= e.$loadingMore.offset().top + e.$loadingMore.outerHeight(!1) && e.loadMore();
          }
        });
      }, b.prototype.loadMore = function () {
        this.loading = !0;
        var b = a.extend({}, {
          page: 1
        }, this.lastParams);
        b.page++, this.trigger("query:append", b);
      }, b.prototype.showLoadingMore = function (a, b) {
        return b.pagination && b.pagination.more;
      }, b.prototype.createLoadingMore = function () {
        var b = a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
            c = this.options.get("translations").get("loadingMore");
        return b.html(c(this.lastParams)), b;
      }, b;
    }), b.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (a, b) {
      function c(b, c, d) {
        this.$dropdownParent = d.get("dropdownParent") || a(document.body), b.call(this, c, d);
      }

      return c.prototype.bind = function (a, b, c) {
        var d = this,
            e = !1;
        a.call(this, b, c), b.on("open", function () {
          d._showDropdown(), d._attachPositioningHandler(b), e || (e = !0, b.on("results:all", function () {
            d._positionDropdown(), d._resizeDropdown();
          }), b.on("results:append", function () {
            d._positionDropdown(), d._resizeDropdown();
          }));
        }), b.on("close", function () {
          d._hideDropdown(), d._detachPositioningHandler(b);
        }), this.$dropdownContainer.on("mousedown", function (a) {
          a.stopPropagation();
        });
      }, c.prototype.destroy = function (a) {
        a.call(this), this.$dropdownContainer.remove();
      }, c.prototype.position = function (a, b, c) {
        b.attr("class", c.attr("class")), b.removeClass("select2"), b.addClass("select2-container--open"), b.css({
          position: "absolute",
          top: -999999
        }), this.$container = c;
      }, c.prototype.render = function (b) {
        var c = a("<span></span>"),
            d = b.call(this);
        return c.append(d), this.$dropdownContainer = c, c;
      }, c.prototype._hideDropdown = function (a) {
        this.$dropdownContainer.detach();
      }, c.prototype._attachPositioningHandler = function (c, d) {
        var e = this,
            f = "scroll.select2." + d.id,
            g = "resize.select2." + d.id,
            h = "orientationchange.select2." + d.id,
            i = this.$container.parents().filter(b.hasScroll);
        i.each(function () {
          b.StoreData(this, "select2-scroll-position", {
            x: a(this).scrollLeft(),
            y: a(this).scrollTop()
          });
        }), i.on(f, function (c) {
          var d = b.GetData(this, "select2-scroll-position");
          a(this).scrollTop(d.y);
        }), a(window).on(f + " " + g + " " + h, function (a) {
          e._positionDropdown(), e._resizeDropdown();
        });
      }, c.prototype._detachPositioningHandler = function (c, d) {
        var e = "scroll.select2." + d.id,
            f = "resize.select2." + d.id,
            g = "orientationchange.select2." + d.id;
        this.$container.parents().filter(b.hasScroll).off(e), a(window).off(e + " " + f + " " + g);
      }, c.prototype._positionDropdown = function () {
        var b = a(window),
            c = this.$dropdown.hasClass("select2-dropdown--above"),
            d = this.$dropdown.hasClass("select2-dropdown--below"),
            e = null,
            f = this.$container.offset();
        f.bottom = f.top + this.$container.outerHeight(!1);
        var g = {
          height: this.$container.outerHeight(!1)
        };
        g.top = f.top, g.bottom = f.top + g.height;
        var h = {
          height: this.$dropdown.outerHeight(!1)
        },
            i = {
          top: b.scrollTop(),
          bottom: b.scrollTop() + b.height()
        },
            j = i.top < f.top - h.height,
            k = i.bottom > f.bottom + h.height,
            l = {
          left: f.left,
          top: g.bottom
        },
            m = this.$dropdownParent;
        "static" === m.css("position") && (m = m.offsetParent());
        var n = m.offset();
        l.top -= n.top, l.left -= n.left, c || d || (e = "below"), k || !j || c ? !j && k && c && (e = "below") : e = "above", ("above" == e || c && "below" !== e) && (l.top = g.top - n.top - h.height), null != e && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + e), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + e)), this.$dropdownContainer.css(l);
      }, c.prototype._resizeDropdown = function () {
        var a = {
          width: this.$container.outerWidth(!1) + "px"
        };
        this.options.get("dropdownAutoWidth") && (a.minWidth = a.width, a.position = "relative", a.width = "auto"), this.$dropdown.css(a);
      }, c.prototype._showDropdown = function (a) {
        this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown();
      }, c;
    }), b.define("select2/dropdown/minimumResultsForSearch", [], function () {
      function a(b) {
        for (var c = 0, d = 0; d < b.length; d++) {
          var e = b[d];
          e.children ? c += a(e.children) : c++;
        }

        return c;
      }

      function b(a, b, c, d) {
        this.minimumResultsForSearch = c.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), a.call(this, b, c, d);
      }

      return b.prototype.showSearch = function (b, c) {
        return !(a(c.data.results) < this.minimumResultsForSearch) && b.call(this, c);
      }, b;
    }), b.define("select2/dropdown/selectOnClose", ["../utils"], function (a) {
      function b() {}

      return b.prototype.bind = function (a, b, c) {
        var d = this;
        a.call(this, b, c), b.on("close", function (a) {
          d._handleSelectOnClose(a);
        });
      }, b.prototype._handleSelectOnClose = function (b, c) {
        if (c && null != c.originalSelect2Event) {
          var d = c.originalSelect2Event;
          if ("select" === d._type || "unselect" === d._type) return;
        }

        var e = this.getHighlightedResults();

        if (!(e.length < 1)) {
          var f = a.GetData(e[0], "data");
          null != f.element && f.element.selected || null == f.element && f.selected || this.trigger("select", {
            data: f
          });
        }
      }, b;
    }), b.define("select2/dropdown/closeOnSelect", [], function () {
      function a() {}

      return a.prototype.bind = function (a, b, c) {
        var d = this;
        a.call(this, b, c), b.on("select", function (a) {
          d._selectTriggered(a);
        }), b.on("unselect", function (a) {
          d._selectTriggered(a);
        });
      }, a.prototype._selectTriggered = function (a, b) {
        var c = b.originalEvent;
        c && c.ctrlKey || this.trigger("close", {
          originalEvent: c,
          originalSelect2Event: b
        });
      }, a;
    }), b.define("select2/i18n/en", [], function () {
      return {
        errorLoading: function errorLoading() {
          return "The results could not be loaded.";
        },
        inputTooLong: function inputTooLong(a) {
          var b = a.input.length - a.maximum,
              c = "Please delete " + b + " character";
          return 1 != b && (c += "s"), c;
        },
        inputTooShort: function inputTooShort(a) {
          return "Please enter " + (a.minimum - a.input.length) + " or more characters";
        },
        loadingMore: function loadingMore() {
          return "Loading more results…";
        },
        maximumSelected: function maximumSelected(a) {
          var b = "You can only select " + a.maximum + " item";
          return 1 != a.maximum && (b += "s"), b;
        },
        noResults: function noResults() {
          return "No results found";
        },
        searching: function searching() {
          return "Searching…";
        }
      };
    }), b.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C) {
      function D() {
        this.reset();
      }

      return D.prototype.apply = function (l) {
        if (l = a.extend(!0, {}, this.defaults, l), null == l.dataAdapter) {
          if (null != l.ajax ? l.dataAdapter = o : null != l.data ? l.dataAdapter = n : l.dataAdapter = m, l.minimumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, r)), l.maximumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, s)), l.maximumSelectionLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, t)), l.tags && (l.dataAdapter = j.Decorate(l.dataAdapter, p)), null == l.tokenSeparators && null == l.tokenizer || (l.dataAdapter = j.Decorate(l.dataAdapter, q)), null != l.query) {
            var C = b(l.amdBase + "compat/query");
            l.dataAdapter = j.Decorate(l.dataAdapter, C);
          }

          if (null != l.initSelection) {
            var D = b(l.amdBase + "compat/initSelection");
            l.dataAdapter = j.Decorate(l.dataAdapter, D);
          }
        }

        if (null == l.resultsAdapter && (l.resultsAdapter = c, null != l.ajax && (l.resultsAdapter = j.Decorate(l.resultsAdapter, x)), null != l.placeholder && (l.resultsAdapter = j.Decorate(l.resultsAdapter, w)), l.selectOnClose && (l.resultsAdapter = j.Decorate(l.resultsAdapter, A))), null == l.dropdownAdapter) {
          if (l.multiple) l.dropdownAdapter = u;else {
            var E = j.Decorate(u, v);
            l.dropdownAdapter = E;
          }

          if (0 !== l.minimumResultsForSearch && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, z)), l.closeOnSelect && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, B)), null != l.dropdownCssClass || null != l.dropdownCss || null != l.adaptDropdownCssClass) {
            var F = b(l.amdBase + "compat/dropdownCss");
            l.dropdownAdapter = j.Decorate(l.dropdownAdapter, F);
          }

          l.dropdownAdapter = j.Decorate(l.dropdownAdapter, y);
        }

        if (null == l.selectionAdapter) {
          if (l.multiple ? l.selectionAdapter = e : l.selectionAdapter = d, null != l.placeholder && (l.selectionAdapter = j.Decorate(l.selectionAdapter, f)), l.allowClear && (l.selectionAdapter = j.Decorate(l.selectionAdapter, g)), l.multiple && (l.selectionAdapter = j.Decorate(l.selectionAdapter, h)), null != l.containerCssClass || null != l.containerCss || null != l.adaptContainerCssClass) {
            var G = b(l.amdBase + "compat/containerCss");
            l.selectionAdapter = j.Decorate(l.selectionAdapter, G);
          }

          l.selectionAdapter = j.Decorate(l.selectionAdapter, i);
        }

        if ("string" == typeof l.language) if (l.language.indexOf("-") > 0) {
          var H = l.language.split("-"),
              I = H[0];
          l.language = [l.language, I];
        } else l.language = [l.language];

        if (a.isArray(l.language)) {
          var J = new k();
          l.language.push("en");

          for (var K = l.language, L = 0; L < K.length; L++) {
            var M = K[L],
                N = {};

            try {
              N = k.loadPath(M);
            } catch (a) {
              try {
                M = this.defaults.amdLanguageBase + M, N = k.loadPath(M);
              } catch (a) {
                l.debug && window.console && console.warn && console.warn('Select2: The language file for "' + M + '" could not be automatically loaded. A fallback will be used instead.');
                continue;
              }
            }

            J.extend(N);
          }

          l.translations = J;
        } else {
          var O = k.loadPath(this.defaults.amdLanguageBase + "en"),
              P = new k(l.language);
          P.extend(O), l.translations = P;
        }

        return l;
      }, D.prototype.reset = function () {
        function b(a) {
          function b(a) {
            return l[a] || a;
          }

          return a.replace(/[^\u0000-\u007E]/g, b);
        }

        function c(d, e) {
          if ("" === a.trim(d.term)) return e;

          if (e.children && e.children.length > 0) {
            for (var f = a.extend(!0, {}, e), g = e.children.length - 1; g >= 0; g--) {
              null == c(d, e.children[g]) && f.children.splice(g, 1);
            }

            return f.children.length > 0 ? f : c(d, f);
          }

          var h = b(e.text).toUpperCase(),
              i = b(d.term).toUpperCase();
          return h.indexOf(i) > -1 ? e : null;
        }

        this.defaults = {
          amdBase: "./",
          amdLanguageBase: "./i18n/",
          closeOnSelect: !0,
          debug: !1,
          dropdownAutoWidth: !1,
          escapeMarkup: j.escapeMarkup,
          language: C,
          matcher: c,
          minimumInputLength: 0,
          maximumInputLength: 0,
          maximumSelectionLength: 0,
          minimumResultsForSearch: 0,
          selectOnClose: !1,
          sorter: function sorter(a) {
            return a;
          },
          templateResult: function templateResult(a) {
            return a.text;
          },
          templateSelection: function templateSelection(a) {
            return a.text;
          },
          theme: "default",
          width: "resolve"
        };
      }, D.prototype.set = function (b, c) {
        var d = a.camelCase(b),
            e = {};
        e[d] = c;

        var f = j._convertData(e);

        a.extend(!0, this.defaults, f);
      }, new D();
    }), b.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (a, b, c, d) {
      function e(b, e) {
        if (this.options = b, null != e && this.fromElement(e), this.options = c.apply(this.options), e && e.is("input")) {
          var f = a(this.get("amdBase") + "compat/inputData");
          this.options.dataAdapter = d.Decorate(this.options.dataAdapter, f);
        }
      }

      return e.prototype.fromElement = function (a) {
        var c = ["select2"];
        null == this.options.multiple && (this.options.multiple = a.prop("multiple")), null == this.options.disabled && (this.options.disabled = a.prop("disabled")), null == this.options.language && (a.prop("lang") ? this.options.language = a.prop("lang").toLowerCase() : a.closest("[lang]").prop("lang") && (this.options.language = a.closest("[lang]").prop("lang"))), null == this.options.dir && (a.prop("dir") ? this.options.dir = a.prop("dir") : a.closest("[dir]").prop("dir") ? this.options.dir = a.closest("[dir]").prop("dir") : this.options.dir = "ltr"), a.prop("disabled", this.options.disabled), a.prop("multiple", this.options.multiple), d.GetData(a[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), d.StoreData(a[0], "data", d.GetData(a[0], "select2Tags")), d.StoreData(a[0], "tags", !0)), d.GetData(a[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), a.attr("ajax--url", d.GetData(a[0], "ajaxUrl")), d.StoreData(a[0], "ajax-Url", d.GetData(a[0], "ajaxUrl")));
        var e = {};
        e = b.fn.jquery && "1." == b.fn.jquery.substr(0, 2) && a[0].dataset ? b.extend(!0, {}, a[0].dataset, d.GetData(a[0])) : d.GetData(a[0]);
        var f = b.extend(!0, {}, e);
        f = d._convertData(f);

        for (var g in f) {
          b.inArray(g, c) > -1 || (b.isPlainObject(this.options[g]) ? b.extend(this.options[g], f[g]) : this.options[g] = f[g]);
        }

        return this;
      }, e.prototype.get = function (a) {
        return this.options[a];
      }, e.prototype.set = function (a, b) {
        this.options[a] = b;
      }, e;
    }), b.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (a, b, c, d) {
      var e = function e(a, d) {
        null != c.GetData(a[0], "select2") && c.GetData(a[0], "select2").destroy(), this.$element = a, this.id = this._generateId(a), d = d || {}, this.options = new b(d, a), e.__super__.constructor.call(this);
        var f = a.attr("tabindex") || 0;
        c.StoreData(a[0], "old-tabindex", f), a.attr("tabindex", "-1");
        var g = this.options.get("dataAdapter");
        this.dataAdapter = new g(a, this.options);
        var h = this.render();

        this._placeContainer(h);

        var i = this.options.get("selectionAdapter");
        this.selection = new i(a, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, h);
        var j = this.options.get("dropdownAdapter");
        this.dropdown = new j(a, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, h);
        var k = this.options.get("resultsAdapter");
        this.results = new k(a, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
        var l = this;
        this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (a) {
          l.trigger("selection:update", {
            data: a
          });
        }), a.addClass("select2-hidden-accessible"), a.attr("aria-hidden", "true"), this._syncAttributes(), c.StoreData(a[0], "select2", this), a.data("select2", this);
      };

      return c.Extend(e, c.Observable), e.prototype._generateId = function (a) {
        var b = "";
        return b = null != a.attr("id") ? a.attr("id") : null != a.attr("name") ? a.attr("name") + "-" + c.generateChars(2) : c.generateChars(4), b = b.replace(/(:|\.|\[|\]|,)/g, ""), b = "select2-" + b;
      }, e.prototype._placeContainer = function (a) {
        a.insertAfter(this.$element);

        var b = this._resolveWidth(this.$element, this.options.get("width"));

        null != b && a.css("width", b);
      }, e.prototype._resolveWidth = function (a, b) {
        var c = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

        if ("resolve" == b) {
          var d = this._resolveWidth(a, "style");

          return null != d ? d : this._resolveWidth(a, "element");
        }

        if ("element" == b) {
          var e = a.outerWidth(!1);
          return e <= 0 ? "auto" : e + "px";
        }

        if ("style" == b) {
          var f = a.attr("style");
          if ("string" != typeof f) return null;

          for (var g = f.split(";"), h = 0, i = g.length; h < i; h += 1) {
            var j = g[h].replace(/\s/g, ""),
                k = j.match(c);
            if (null !== k && k.length >= 1) return k[1];
          }

          return null;
        }

        return b;
      }, e.prototype._bindAdapters = function () {
        this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container);
      }, e.prototype._registerDomEvents = function () {
        var b = this;
        this.$element.on("change.select2", function () {
          b.dataAdapter.current(function (a) {
            b.trigger("selection:update", {
              data: a
            });
          });
        }), this.$element.on("focus.select2", function (a) {
          b.trigger("focus", a);
        }), this._syncA = c.bind(this._syncAttributes, this), this._syncS = c.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
        var d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        null != d ? (this._observer = new d(function (c) {
          a.each(c, b._syncA), a.each(c, b._syncS);
        }), this._observer.observe(this.$element[0], {
          attributes: !0,
          childList: !0,
          subtree: !1
        })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", b._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", b._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", b._syncS, !1));
      }, e.prototype._registerDataEvents = function () {
        var a = this;
        this.dataAdapter.on("*", function (b, c) {
          a.trigger(b, c);
        });
      }, e.prototype._registerSelectionEvents = function () {
        var b = this,
            c = ["toggle", "focus"];
        this.selection.on("toggle", function () {
          b.toggleDropdown();
        }), this.selection.on("focus", function (a) {
          b.focus(a);
        }), this.selection.on("*", function (d, e) {
          -1 === a.inArray(d, c) && b.trigger(d, e);
        });
      }, e.prototype._registerDropdownEvents = function () {
        var a = this;
        this.dropdown.on("*", function (b, c) {
          a.trigger(b, c);
        });
      }, e.prototype._registerResultsEvents = function () {
        var a = this;
        this.results.on("*", function (b, c) {
          a.trigger(b, c);
        });
      }, e.prototype._registerEvents = function () {
        var a = this;
        this.on("open", function () {
          a.$container.addClass("select2-container--open");
        }), this.on("close", function () {
          a.$container.removeClass("select2-container--open");
        }), this.on("enable", function () {
          a.$container.removeClass("select2-container--disabled");
        }), this.on("disable", function () {
          a.$container.addClass("select2-container--disabled");
        }), this.on("blur", function () {
          a.$container.removeClass("select2-container--focus");
        }), this.on("query", function (b) {
          a.isOpen() || a.trigger("open", {}), this.dataAdapter.query(b, function (c) {
            a.trigger("results:all", {
              data: c,
              query: b
            });
          });
        }), this.on("query:append", function (b) {
          this.dataAdapter.query(b, function (c) {
            a.trigger("results:append", {
              data: c,
              query: b
            });
          });
        }), this.on("keypress", function (b) {
          var c = b.which;
          a.isOpen() ? c === d.ESC || c === d.TAB || c === d.UP && b.altKey ? (a.close(), b.preventDefault()) : c === d.ENTER ? (a.trigger("results:select", {}), b.preventDefault()) : c === d.SPACE && b.ctrlKey ? (a.trigger("results:toggle", {}), b.preventDefault()) : c === d.UP ? (a.trigger("results:previous", {}), b.preventDefault()) : c === d.DOWN && (a.trigger("results:next", {}), b.preventDefault()) : (c === d.ENTER || c === d.SPACE || c === d.DOWN && b.altKey) && (a.open(), b.preventDefault());
        });
      }, e.prototype._syncAttributes = function () {
        this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {});
      }, e.prototype._syncSubtree = function (a, b) {
        var c = !1,
            d = this;

        if (!a || !a.target || "OPTION" === a.target.nodeName || "OPTGROUP" === a.target.nodeName) {
          if (b) {
            if (b.addedNodes && b.addedNodes.length > 0) for (var e = 0; e < b.addedNodes.length; e++) {
              var f = b.addedNodes[e];
              f.selected && (c = !0);
            } else b.removedNodes && b.removedNodes.length > 0 && (c = !0);
          } else c = !0;
          c && this.dataAdapter.current(function (a) {
            d.trigger("selection:update", {
              data: a
            });
          });
        }
      }, e.prototype.trigger = function (a, b) {
        var c = e.__super__.trigger,
            d = {
          open: "opening",
          close: "closing",
          select: "selecting",
          unselect: "unselecting",
          clear: "clearing"
        };

        if (void 0 === b && (b = {}), a in d) {
          var f = d[a],
              g = {
            prevented: !1,
            name: a,
            args: b
          };
          if (c.call(this, f, g), g.prevented) return void (b.prevented = !0);
        }

        c.call(this, a, b);
      }, e.prototype.toggleDropdown = function () {
        this.options.get("disabled") || (this.isOpen() ? this.close() : this.open());
      }, e.prototype.open = function () {
        this.isOpen() || this.trigger("query", {});
      }, e.prototype.close = function () {
        this.isOpen() && this.trigger("close", {});
      }, e.prototype.isOpen = function () {
        return this.$container.hasClass("select2-container--open");
      }, e.prototype.hasFocus = function () {
        return this.$container.hasClass("select2-container--focus");
      }, e.prototype.focus = function (a) {
        this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}));
      }, e.prototype.enable = function (a) {
        this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != a && 0 !== a.length || (a = [!0]);
        var b = !a[0];
        this.$element.prop("disabled", b);
      }, e.prototype.data = function () {
        this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
        var a = [];
        return this.dataAdapter.current(function (b) {
          a = b;
        }), a;
      }, e.prototype.val = function (b) {
        if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == b || 0 === b.length) return this.$element.val();
        var c = b[0];
        a.isArray(c) && (c = a.map(c, function (a) {
          return a.toString();
        })), this.$element.val(c).trigger("change");
      }, e.prototype.destroy = function () {
        this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", c.GetData(this.$element[0], "old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), c.RemoveData(this.$element[0]), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null;
      }, e.prototype.render = function () {
        var b = a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
        return b.attr("dir", this.options.get("dir")), this.$container = b, this.$container.addClass("select2-container--" + this.options.get("theme")), c.StoreData(b[0], "element", this.$element), b;
      }, e;
    }), b.define("select2/compat/utils", ["jquery"], function (a) {
      function b(b, c, d) {
        var e,
            f,
            g = [];
        e = a.trim(b.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function () {
          0 === this.indexOf("select2-") && g.push(this);
        })), e = a.trim(c.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function () {
          0 !== this.indexOf("select2-") && null != (f = d(this)) && g.push(f);
        })), b.attr("class", g.join(" "));
      }

      return {
        syncCssClasses: b
      };
    }), b.define("select2/compat/containerCss", ["jquery", "./utils"], function (a, b) {
      function c(a) {
        return null;
      }

      function d() {}

      return d.prototype.render = function (d) {
        var e = d.call(this),
            f = this.options.get("containerCssClass") || "";
        a.isFunction(f) && (f = f(this.$element));
        var g = this.options.get("adaptContainerCssClass");

        if (g = g || c, -1 !== f.indexOf(":all:")) {
          f = f.replace(":all:", "");
          var h = g;

          g = function g(a) {
            var b = h(a);
            return null != b ? b + " " + a : a;
          };
        }

        var i = this.options.get("containerCss") || {};
        return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), e.css(i), e.addClass(f), e;
      }, d;
    }), b.define("select2/compat/dropdownCss", ["jquery", "./utils"], function (a, b) {
      function c(a) {
        return null;
      }

      function d() {}

      return d.prototype.render = function (d) {
        var e = d.call(this),
            f = this.options.get("dropdownCssClass") || "";
        a.isFunction(f) && (f = f(this.$element));
        var g = this.options.get("adaptDropdownCssClass");

        if (g = g || c, -1 !== f.indexOf(":all:")) {
          f = f.replace(":all:", "");
          var h = g;

          g = function g(a) {
            var b = h(a);
            return null != b ? b + " " + a : a;
          };
        }

        var i = this.options.get("dropdownCss") || {};
        return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), e.css(i), e.addClass(f), e;
      }, d;
    }), b.define("select2/compat/initSelection", ["jquery"], function (a) {
      function b(a, b, c) {
        c.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = c.get("initSelection"), this._isInitialized = !1, a.call(this, b, c);
      }

      return b.prototype.current = function (b, c) {
        var d = this;
        if (this._isInitialized) return void b.call(this, c);
        this.initSelection.call(null, this.$element, function (b) {
          d._isInitialized = !0, a.isArray(b) || (b = [b]), c(b);
        });
      }, b;
    }), b.define("select2/compat/inputData", ["jquery", "../utils"], function (a, b) {
      function c(a, b, c) {
        this._currentData = [], this._valueSeparator = c.get("valueSeparator") || ",", "hidden" === b.prop("type") && c.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), a.call(this, b, c);
      }

      return c.prototype.current = function (b, c) {
        function d(b, c) {
          var e = [];
          return b.selected || -1 !== a.inArray(b.id, c) ? (b.selected = !0, e.push(b)) : b.selected = !1, b.children && e.push.apply(e, d(b.children, c)), e;
        }

        for (var e = [], f = 0; f < this._currentData.length; f++) {
          var g = this._currentData[f];
          e.push.apply(e, d(g, this.$element.val().split(this._valueSeparator)));
        }

        c(e);
      }, c.prototype.select = function (b, c) {
        if (this.options.get("multiple")) {
          var d = this.$element.val();
          d += this._valueSeparator + c.id, this.$element.val(d), this.$element.trigger("change");
        } else this.current(function (b) {
          a.map(b, function (a) {
            a.selected = !1;
          });
        }), this.$element.val(c.id), this.$element.trigger("change");
      }, c.prototype.unselect = function (a, b) {
        var c = this;
        b.selected = !1, this.current(function (a) {
          for (var d = [], e = 0; e < a.length; e++) {
            var f = a[e];
            b.id != f.id && d.push(f.id);
          }

          c.$element.val(d.join(c._valueSeparator)), c.$element.trigger("change");
        });
      }, c.prototype.query = function (a, b, c) {
        for (var d = [], e = 0; e < this._currentData.length; e++) {
          var f = this._currentData[e],
              g = this.matches(b, f);
          null !== g && d.push(g);
        }

        c({
          results: d
        });
      }, c.prototype.addOptions = function (c, d) {
        var e = a.map(d, function (a) {
          return b.GetData(a[0], "data");
        });

        this._currentData.push.apply(this._currentData, e);
      }, c;
    }), b.define("select2/compat/matcher", ["jquery"], function (a) {
      function b(b) {
        function c(c, d) {
          var e = a.extend(!0, {}, d);
          if (null == c.term || "" === a.trim(c.term)) return e;

          if (d.children) {
            for (var f = d.children.length - 1; f >= 0; f--) {
              var g = d.children[f];
              b(c.term, g.text, g) || e.children.splice(f, 1);
            }

            if (e.children.length > 0) return e;
          }

          return b(c.term, d.text, d) ? e : null;
        }

        return c;
      }

      return b;
    }), b.define("select2/compat/query", [], function () {
      function a(a, b, c) {
        c.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), a.call(this, b, c);
      }

      return a.prototype.query = function (a, b, c) {
        b.callback = c, this.options.get("query").call(null, b);
      }, a;
    }), b.define("select2/dropdown/attachContainer", [], function () {
      function a(a, b, c) {
        a.call(this, b, c);
      }

      return a.prototype.position = function (a, b, c) {
        c.find(".dropdown-wrapper").append(b), b.addClass("select2-dropdown--below"), c.addClass("select2-container--below");
      }, a;
    }), b.define("select2/dropdown/stopPropagation", [], function () {
      function a() {}

      return a.prototype.bind = function (a, b, c) {
        a.call(this, b, c);
        var d = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
        this.$dropdown.on(d.join(" "), function (a) {
          a.stopPropagation();
        });
      }, a;
    }), b.define("select2/selection/stopPropagation", [], function () {
      function a() {}

      return a.prototype.bind = function (a, b, c) {
        a.call(this, b, c);
        var d = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
        this.$selection.on(d.join(" "), function (a) {
          a.stopPropagation();
        });
      }, a;
    }), function (c) {
      "function" == typeof b.define && b.define.amd ? b.define("jquery-mousewheel", ["jquery"], c) :  true ? module.exports = c : undefined;
    }(function (a) {
      function b(b) {
        var g = b || window.event,
            h = i.call(arguments, 1),
            j = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0;

        if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
          if (1 === g.deltaMode) {
            var q = a.data(this, "mousewheel-line-height");
            j *= q, m *= q, l *= q;
          } else if (2 === g.deltaMode) {
            var r = a.data(this, "mousewheel-page-height");
            j *= r, m *= r, l *= r;
          }

          if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || n < f) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
            var s = this.getBoundingClientRect();
            o = b.clientX - s.left, p = b.clientY - s.top;
          }

          return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h);
        }
      }

      function c() {
        f = null;
      }

      function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 == 0;
      }

      var e,
          f,
          g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
          h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
          i = Array.prototype.slice;
      if (a.event.fixHooks) for (var j = g.length; j;) {
        a.event.fixHooks[g[--j]] = a.event.mouseHooks;
      }
      var k = a.event.special.mousewheel = {
        version: "3.1.12",
        setup: function setup() {
          if (this.addEventListener) for (var c = h.length; c;) {
            this.addEventListener(h[--c], b, !1);
          } else this.onmousewheel = b;
          a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this));
        },
        teardown: function teardown() {
          if (this.removeEventListener) for (var c = h.length; c;) {
            this.removeEventListener(h[--c], b, !1);
          } else this.onmousewheel = null;
          a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height");
        },
        getLineHeight: function getLineHeight(b) {
          var c = a(b),
              d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
          return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16;
        },
        getPageHeight: function getPageHeight(b) {
          return a(b).height();
        },
        settings: {
          adjustOldDeltas: !0,
          normalizeOffset: !0
        }
      };
      a.fn.extend({
        mousewheel: function mousewheel(a) {
          return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
        },
        unmousewheel: function unmousewheel(a) {
          return this.unbind("mousewheel", a);
        }
      });
    }), b.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function (a, b, c, d, e) {
      if (null == a.fn.select2) {
        var f = ["open", "close", "destroy"];

        a.fn.select2 = function (b) {
          if ("object" == typeof (b = b || {})) return this.each(function () {
            var d = a.extend(!0, {}, b);
            new c(a(this), d);
          }), this;

          if ("string" == typeof b) {
            var d,
                g = Array.prototype.slice.call(arguments, 1);
            return this.each(function () {
              var a = e.GetData(this, "select2");
              null == a && window.console && console.error && console.error("The select2('" + b + "') method was called on an element that is not using Select2."), d = a[b].apply(a, g);
            }), a.inArray(b, f) > -1 ? this : d;
          }

          throw new Error("Invalid arguments for Select2: " + b);
        };
      }

      return null == a.fn.select2.defaults && (a.fn.select2.defaults = d), c;
    }), {
      define: b.define,
      require: b.require
    };
  }(),
      c = b.require("jquery.select2");

  return a.fn.select2.amd = b, c;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))))

/***/ }),

/***/ "./app/assets/packs/simplebar.min.js":
/*!*******************************************!*\
  !*** ./app/assets/packs/simplebar.min.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * SimpleBar.js - v5.1.0
 * Scrollbars, simpler.
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat from a fork by Jonathan Nicol
 * Under MIT License
 */
!function (t, e) {
   true ? module.exports = e() : undefined;
}(this, function () {
  "use strict";

  var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

  function e(t, e) {
    return t(e = {
      exports: {}
    }, e.exports), e.exports;
  }

  var r,
      n,
      i,
      o = "object",
      s = function s(t) {
    return t && t.Math == Math && t;
  },
      a = s(typeof globalThis == o && globalThis) || s(typeof window == o && window) || s(typeof self == o && self) || s(typeof t == o && t) || Function("return this")(),
      c = function c(t) {
    try {
      return !!t();
    } catch (t) {
      return !0;
    }
  },
      l = !c(function () {
    return 7 != Object.defineProperty({}, "a", {
      get: function get() {
        return 7;
      }
    }).a;
  }),
      u = {}.propertyIsEnumerable,
      f = Object.getOwnPropertyDescriptor,
      h = {
    f: f && !u.call({
      1: 2
    }, 1) ? function (t) {
      var e = f(this, t);
      return !!e && e.enumerable;
    } : u
  },
      d = function d(t, e) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: e
    };
  },
      p = {}.toString,
      v = function v(t) {
    return p.call(t).slice(8, -1);
  },
      g = "".split,
      y = c(function () {
    return !Object("z").propertyIsEnumerable(0);
  }) ? function (t) {
    return "String" == v(t) ? g.call(t, "") : Object(t);
  } : Object,
      b = function b(t) {
    if (null == t) throw TypeError("Can't call method on " + t);
    return t;
  },
      m = function m(t) {
    return y(b(t));
  },
      x = function x(t) {
    return "object" == typeof t ? null !== t : "function" == typeof t;
  },
      E = function E(t, e) {
    if (!x(t)) return t;
    var r, n;
    if (e && "function" == typeof (r = t.toString) && !x(n = r.call(t))) return n;
    if ("function" == typeof (r = t.valueOf) && !x(n = r.call(t))) return n;
    if (!e && "function" == typeof (r = t.toString) && !x(n = r.call(t))) return n;
    throw TypeError("Can't convert object to primitive value");
  },
      w = {}.hasOwnProperty,
      O = function O(t, e) {
    return w.call(t, e);
  },
      _ = a.document,
      S = x(_) && x(_.createElement),
      A = function A(t) {
    return S ? _.createElement(t) : {};
  },
      k = !l && !c(function () {
    return 7 != Object.defineProperty(A("div"), "a", {
      get: function get() {
        return 7;
      }
    }).a;
  }),
      L = Object.getOwnPropertyDescriptor,
      M = {
    f: l ? L : function (t, e) {
      if (t = m(t), e = E(e, !0), k) try {
        return L(t, e);
      } catch (t) {}
      if (O(t, e)) return d(!h.f.call(t, e), t[e]);
    }
  },
      T = function T(t) {
    if (!x(t)) throw TypeError(String(t) + " is not an object");
    return t;
  },
      j = Object.defineProperty,
      R = {
    f: l ? j : function (t, e, r) {
      if (T(t), e = E(e, !0), T(r), k) try {
        return j(t, e, r);
      } catch (t) {}
      if ("get" in r || "set" in r) throw TypeError("Accessors not supported");
      return "value" in r && (t[e] = r.value), t;
    }
  },
      W = l ? function (t, e, r) {
    return R.f(t, e, d(1, r));
  } : function (t, e, r) {
    return t[e] = r, t;
  },
      z = function z(t, e) {
    try {
      W(a, t, e);
    } catch (r) {
      a[t] = e;
    }

    return e;
  },
      C = e(function (t) {
    var e = a["__core-js_shared__"] || z("__core-js_shared__", {});
    (t.exports = function (t, r) {
      return e[t] || (e[t] = void 0 !== r ? r : {});
    })("versions", []).push({
      version: "3.2.1",
      mode: "global",
      copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)"
    });
  }),
      N = C("native-function-to-string", Function.toString),
      I = a.WeakMap,
      D = "function" == typeof I && /native code/.test(N.call(I)),
      P = 0,
      V = Math.random(),
      F = function F(t) {
    return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++P + V).toString(36);
  },
      B = C("keys"),
      H = function H(t) {
    return B[t] || (B[t] = F(t));
  },
      q = {},
      $ = a.WeakMap;

  if (D) {
    var X = new $(),
        Y = X.get,
        G = X.has,
        U = X.set;
    r = function r(t, e) {
      return U.call(X, t, e), e;
    }, n = function n(t) {
      return Y.call(X, t) || {};
    }, i = function i(t) {
      return G.call(X, t);
    };
  } else {
    var Q = H("state");
    q[Q] = !0, r = function r(t, e) {
      return W(t, Q, e), e;
    }, n = function n(t) {
      return O(t, Q) ? t[Q] : {};
    }, i = function i(t) {
      return O(t, Q);
    };
  }

  var K = {
    set: r,
    get: n,
    has: i,
    enforce: function enforce(t) {
      return i(t) ? n(t) : r(t, {});
    },
    getterFor: function getterFor(t) {
      return function (e) {
        var r;
        if (!x(e) || (r = n(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
        return r;
      };
    }
  },
      J = e(function (t) {
    var e = K.get,
        r = K.enforce,
        n = String(N).split("toString");
    C("inspectSource", function (t) {
      return N.call(t);
    }), (t.exports = function (t, e, i, o) {
      var s = !!o && !!o.unsafe,
          c = !!o && !!o.enumerable,
          l = !!o && !!o.noTargetGet;
      "function" == typeof i && ("string" != typeof e || O(i, "name") || W(i, "name", e), r(i).source = n.join("string" == typeof e ? e : "")), t !== a ? (s ? !l && t[e] && (c = !0) : delete t[e], c ? t[e] = i : W(t, e, i)) : c ? t[e] = i : z(e, i);
    })(Function.prototype, "toString", function () {
      return "function" == typeof this && e(this).source || N.call(this);
    });
  }),
      Z = a,
      tt = function tt(t) {
    return "function" == typeof t ? t : void 0;
  },
      et = function et(t, e) {
    return arguments.length < 2 ? tt(Z[t]) || tt(a[t]) : Z[t] && Z[t][e] || a[t] && a[t][e];
  },
      rt = Math.ceil,
      nt = Math.floor,
      it = function it(t) {
    return isNaN(t = +t) ? 0 : (t > 0 ? nt : rt)(t);
  },
      ot = Math.min,
      st = function st(t) {
    return t > 0 ? ot(it(t), 9007199254740991) : 0;
  },
      at = Math.max,
      ct = Math.min,
      lt = function lt(t) {
    return function (e, r, n) {
      var i,
          o = m(e),
          s = st(o.length),
          a = function (t, e) {
        var r = it(t);
        return r < 0 ? at(r + e, 0) : ct(r, e);
      }(n, s);

      if (t && r != r) {
        for (; s > a;) {
          if ((i = o[a++]) != i) return !0;
        }
      } else for (; s > a; a++) {
        if ((t || a in o) && o[a] === r) return t || a || 0;
      }

      return !t && -1;
    };
  },
      ut = {
    includes: lt(!0),
    indexOf: lt(!1)
  }.indexOf,
      ft = function ft(t, e) {
    var r,
        n = m(t),
        i = 0,
        o = [];

    for (r in n) {
      !O(q, r) && O(n, r) && o.push(r);
    }

    for (; e.length > i;) {
      O(n, r = e[i++]) && (~ut(o, r) || o.push(r));
    }

    return o;
  },
      ht = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
      dt = ht.concat("length", "prototype"),
      pt = {
    f: Object.getOwnPropertyNames || function (t) {
      return ft(t, dt);
    }
  },
      vt = {
    f: Object.getOwnPropertySymbols
  },
      gt = et("Reflect", "ownKeys") || function (t) {
    var e = pt.f(T(t)),
        r = vt.f;
    return r ? e.concat(r(t)) : e;
  },
      yt = function yt(t, e) {
    for (var r = gt(e), n = R.f, i = M.f, o = 0; o < r.length; o++) {
      var s = r[o];
      O(t, s) || n(t, s, i(e, s));
    }
  },
      bt = /#|\.prototype\./,
      mt = function mt(t, e) {
    var r = Et[xt(t)];
    return r == Ot || r != wt && ("function" == typeof e ? c(e) : !!e);
  },
      xt = mt.normalize = function (t) {
    return String(t).replace(bt, ".").toLowerCase();
  },
      Et = mt.data = {},
      wt = mt.NATIVE = "N",
      Ot = mt.POLYFILL = "P",
      _t = mt,
      St = M.f,
      At = function At(t, e) {
    var r,
        n,
        i,
        o,
        s,
        c = t.target,
        l = t.global,
        u = t.stat;
    if (r = l ? a : u ? a[c] || z(c, {}) : (a[c] || {}).prototype) for (n in e) {
      if (o = e[n], i = t.noTargetGet ? (s = St(r, n)) && s.value : r[n], !_t(l ? n : c + (u ? "." : "#") + n, t.forced) && void 0 !== i) {
        if (typeof o == typeof i) continue;
        yt(o, i);
      }

      (t.sham || i && i.sham) && W(o, "sham", !0), J(r, n, o, t);
    }
  },
      kt = function kt(t) {
    if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
    return t;
  },
      Lt = function Lt(t, e, r) {
    if (kt(t), void 0 === e) return t;

    switch (r) {
      case 0:
        return function () {
          return t.call(e);
        };

      case 1:
        return function (r) {
          return t.call(e, r);
        };

      case 2:
        return function (r, n) {
          return t.call(e, r, n);
        };

      case 3:
        return function (r, n, i) {
          return t.call(e, r, n, i);
        };
    }

    return function () {
      return t.apply(e, arguments);
    };
  },
      Mt = function Mt(t) {
    return Object(b(t));
  },
      Tt = Array.isArray || function (t) {
    return "Array" == v(t);
  },
      jt = !!Object.getOwnPropertySymbols && !c(function () {
    return !String(Symbol());
  }),
      Rt = a.Symbol,
      Wt = C("wks"),
      zt = function zt(t) {
    return Wt[t] || (Wt[t] = jt && Rt[t] || (jt ? Rt : F)("Symbol." + t));
  },
      Ct = zt("species"),
      Nt = function Nt(t, e) {
    var r;
    return Tt(t) && ("function" != typeof (r = t.constructor) || r !== Array && !Tt(r.prototype) ? x(r) && null === (r = r[Ct]) && (r = void 0) : r = void 0), new (void 0 === r ? Array : r)(0 === e ? 0 : e);
  },
      It = [].push,
      Dt = function Dt(t) {
    var e = 1 == t,
        r = 2 == t,
        n = 3 == t,
        i = 4 == t,
        o = 6 == t,
        s = 5 == t || o;
    return function (a, c, l, u) {
      for (var f, h, d = Mt(a), p = y(d), v = Lt(c, l, 3), g = st(p.length), b = 0, m = u || Nt, x = e ? m(a, g) : r ? m(a, 0) : void 0; g > b; b++) {
        if ((s || b in p) && (h = v(f = p[b], b, d), t)) if (e) x[b] = h;else if (h) switch (t) {
          case 3:
            return !0;

          case 5:
            return f;

          case 6:
            return b;

          case 2:
            It.call(x, f);
        } else if (i) return !1;
      }

      return o ? -1 : n || i ? i : x;
    };
  },
      Pt = {
    forEach: Dt(0),
    map: Dt(1),
    filter: Dt(2),
    some: Dt(3),
    every: Dt(4),
    find: Dt(5),
    findIndex: Dt(6)
  },
      Vt = function Vt(t, e) {
    var r = [][t];
    return !r || !c(function () {
      r.call(null, e || function () {
        throw 1;
      }, 1);
    });
  },
      Ft = Pt.forEach,
      Bt = Vt("forEach") ? function (t) {
    return Ft(this, t, arguments.length > 1 ? arguments[1] : void 0);
  } : [].forEach;

  At({
    target: "Array",
    proto: !0,
    forced: [].forEach != Bt
  }, {
    forEach: Bt
  });
  var Ht = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };

  for (var qt in Ht) {
    var $t = a[qt],
        Xt = $t && $t.prototype;
    if (Xt && Xt.forEach !== Bt) try {
      W(Xt, "forEach", Bt);
    } catch (t) {
      Xt.forEach = Bt;
    }
  }

  var Yt = !("undefined" == typeof window || !window.document || !window.document.createElement),
      Gt = zt("species"),
      Ut = Pt.filter;
  At({
    target: "Array",
    proto: !0,
    forced: !function (t) {
      return !c(function () {
        var e = [];
        return (e.constructor = {})[Gt] = function () {
          return {
            foo: 1
          };
        }, 1 !== e[t](Boolean).foo;
      });
    }("filter")
  }, {
    filter: function filter(t) {
      return Ut(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });

  var Qt = Object.keys || function (t) {
    return ft(t, ht);
  },
      Kt = l ? Object.defineProperties : function (t, e) {
    T(t);

    for (var r, n = Qt(e), i = n.length, o = 0; i > o;) {
      R.f(t, r = n[o++], e[r]);
    }

    return t;
  },
      Jt = et("document", "documentElement"),
      Zt = H("IE_PROTO"),
      te = function te() {},
      _ee = function ee() {
    var t,
        e = A("iframe"),
        r = ht.length;

    for (e.style.display = "none", Jt.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), _ee = t.F; r--;) {
      delete _ee.prototype[ht[r]];
    }

    return _ee();
  },
      re = Object.create || function (t, e) {
    var r;
    return null !== t ? (te.prototype = T(t), r = new te(), te.prototype = null, r[Zt] = t) : r = _ee(), void 0 === e ? r : Kt(r, e);
  };

  q[Zt] = !0;
  var ne = zt("unscopables"),
      ie = Array.prototype;
  null == ie[ne] && W(ie, ne, re(null));

  var oe,
      se,
      ae,
      ce = function ce(t) {
    ie[ne][t] = !0;
  },
      le = {},
      ue = !c(function () {
    function t() {}

    return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype;
  }),
      fe = H("IE_PROTO"),
      he = Object.prototype,
      de = ue ? Object.getPrototypeOf : function (t) {
    return t = Mt(t), O(t, fe) ? t[fe] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? he : null;
  },
      pe = zt("iterator"),
      ve = !1;

  [].keys && ("next" in (ae = [].keys()) ? (se = de(de(ae))) !== Object.prototype && (oe = se) : ve = !0), null == oe && (oe = {}), O(oe, pe) || W(oe, pe, function () {
    return this;
  });

  var ge = {
    IteratorPrototype: oe,
    BUGGY_SAFARI_ITERATORS: ve
  },
      ye = R.f,
      be = zt("toStringTag"),
      me = function me(t, e, r) {
    t && !O(t = r ? t : t.prototype, be) && ye(t, be, {
      configurable: !0,
      value: e
    });
  },
      xe = ge.IteratorPrototype,
      Ee = function Ee() {
    return this;
  },
      we = Object.setPrototypeOf || ("__proto__" in {} ? function () {
    var t,
        e = !1,
        r = {};

    try {
      (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(r, []), e = r instanceof Array;
    } catch (t) {}

    return function (r, n) {
      return T(r), function (t) {
        if (!x(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
      }(n), e ? t.call(r, n) : r.__proto__ = n, r;
    };
  }() : void 0),
      Oe = ge.IteratorPrototype,
      _e = ge.BUGGY_SAFARI_ITERATORS,
      Se = zt("iterator"),
      Ae = function Ae() {
    return this;
  },
      ke = function ke(t, e, r, n, i, o, s) {
    !function (t, e, r) {
      var n = e + " Iterator";
      t.prototype = re(xe, {
        next: d(1, r)
      }), me(t, n, !1), le[n] = Ee;
    }(r, e, n);

    var a,
        c,
        l,
        u = function u(t) {
      if (t === i && g) return g;
      if (!_e && t in p) return p[t];

      switch (t) {
        case "keys":
        case "values":
        case "entries":
          return function () {
            return new r(this, t);
          };
      }

      return function () {
        return new r(this);
      };
    },
        f = e + " Iterator",
        h = !1,
        p = t.prototype,
        v = p[Se] || p["@@iterator"] || i && p[i],
        g = !_e && v || u(i),
        y = "Array" == e && p.entries || v;

    if (y && (a = de(y.call(new t())), Oe !== Object.prototype && a.next && (de(a) !== Oe && (we ? we(a, Oe) : "function" != typeof a[Se] && W(a, Se, Ae)), me(a, f, !0))), "values" == i && v && "values" !== v.name && (h = !0, g = function g() {
      return v.call(this);
    }), p[Se] !== g && W(p, Se, g), le[e] = g, i) if (c = {
      values: u("values"),
      keys: o ? g : u("keys"),
      entries: u("entries")
    }, s) for (l in c) {
      !_e && !h && l in p || J(p, l, c[l]);
    } else At({
      target: e,
      proto: !0,
      forced: _e || h
    }, c);
    return c;
  },
      Le = K.set,
      Me = K.getterFor("Array Iterator"),
      Te = ke(Array, "Array", function (t, e) {
    Le(this, {
      type: "Array Iterator",
      target: m(t),
      index: 0,
      kind: e
    });
  }, function () {
    var t = Me(this),
        e = t.target,
        r = t.kind,
        n = t.index++;
    return !e || n >= e.length ? (t.target = void 0, {
      value: void 0,
      done: !0
    }) : "keys" == r ? {
      value: n,
      done: !1
    } : "values" == r ? {
      value: e[n],
      done: !1
    } : {
      value: [n, e[n]],
      done: !1
    };
  }, "values");

  le.Arguments = le.Array, ce("keys"), ce("values"), ce("entries");
  var je = Object.assign,
      Re = !je || c(function () {
    var t = {},
        e = {},
        r = Symbol();
    return t[r] = 7, "abcdefghijklmnopqrst".split("").forEach(function (t) {
      e[t] = t;
    }), 7 != je({}, t)[r] || "abcdefghijklmnopqrst" != Qt(je({}, e)).join("");
  }) ? function (t, e) {
    for (var r = Mt(t), n = arguments.length, i = 1, o = vt.f, s = h.f; n > i;) {
      for (var a, c = y(arguments[i++]), u = o ? Qt(c).concat(o(c)) : Qt(c), f = u.length, d = 0; f > d;) {
        a = u[d++], l && !s.call(c, a) || (r[a] = c[a]);
      }
    }

    return r;
  } : je;
  At({
    target: "Object",
    stat: !0,
    forced: Object.assign !== Re
  }, {
    assign: Re
  });

  var We = zt("toStringTag"),
      ze = "Arguments" == v(function () {
    return arguments;
  }()),
      Ce = function Ce(t) {
    var e, r, n;
    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = function (t, e) {
      try {
        return t[e];
      } catch (t) {}
    }(e = Object(t), We)) ? r : ze ? v(e) : "Object" == (n = v(e)) && "function" == typeof e.callee ? "Arguments" : n;
  },
      Ne = {};

  Ne[zt("toStringTag")] = "z";
  var Ie = "[object z]" !== String(Ne) ? function () {
    return "[object " + Ce(this) + "]";
  } : Ne.toString,
      De = Object.prototype;
  Ie !== De.toString && J(De, "toString", Ie, {
    unsafe: !0
  });

  var Pe = "\t\n\x0B\f\r  \xE1\u0161\u20AC\xE2\u20AC\u20AC\xE2\u20AC\x81\xE2\u20AC\u201A\xE2\u20AC\u0192\xE2\u20AC\u201E\xE2\u20AC\u2026\xE2\u20AC\u2020\xE2\u20AC\u2021\xE2\u20AC\u02C6\xE2\u20AC\u2030\xE2\u20AC\u0160\xE2\u20AC\xAF\xE2\x81\u0178\xE3\u20AC\u20AC\u2028\u2029\uFEFF",
      Ve = "[" + Pe + "]",
      Fe = RegExp("^" + Ve + Ve + "*"),
      Be = RegExp(Ve + Ve + "*$"),
      He = function He(t) {
    return function (e) {
      var r = String(b(e));
      return 1 & t && (r = r.replace(Fe, "")), 2 & t && (r = r.replace(Be, "")), r;
    };
  },
      qe = {
    start: He(1),
    end: He(2),
    trim: He(3)
  }.trim,
      $e = a.parseInt,
      Xe = /^[+-]?0[Xx]/,
      Ye = 8 !== $e(Pe + "08") || 22 !== $e(Pe + "0x16") ? function (t, e) {
    var r = qe(String(t));
    return $e(r, e >>> 0 || (Xe.test(r) ? 16 : 10));
  } : $e;

  At({
    global: !0,
    forced: parseInt != Ye
  }, {
    parseInt: Ye
  });

  var Ge = function Ge(t) {
    return function (e, r) {
      var n,
          i,
          o = String(b(e)),
          s = it(r),
          a = o.length;
      return s < 0 || s >= a ? t ? "" : void 0 : (n = o.charCodeAt(s)) < 55296 || n > 56319 || s + 1 === a || (i = o.charCodeAt(s + 1)) < 56320 || i > 57343 ? t ? o.charAt(s) : n : t ? o.slice(s, s + 2) : i - 56320 + (n - 55296 << 10) + 65536;
    };
  },
      Ue = {
    codeAt: Ge(!1),
    charAt: Ge(!0)
  },
      Qe = Ue.charAt,
      Ke = K.set,
      Je = K.getterFor("String Iterator");

  ke(String, "String", function (t) {
    Ke(this, {
      type: "String Iterator",
      string: String(t),
      index: 0
    });
  }, function () {
    var t,
        e = Je(this),
        r = e.string,
        n = e.index;
    return n >= r.length ? {
      value: void 0,
      done: !0
    } : (t = Qe(r, n), e.index += t.length, {
      value: t,
      done: !1
    });
  });

  var Ze = function Ze(t, e, r) {
    for (var n in e) {
      J(t, n, e[n], r);
    }

    return t;
  },
      tr = !c(function () {
    return Object.isExtensible(Object.preventExtensions({}));
  }),
      er = e(function (t) {
    var e = R.f,
        r = F("meta"),
        n = 0,
        i = Object.isExtensible || function () {
      return !0;
    },
        o = function o(t) {
      e(t, r, {
        value: {
          objectID: "O" + ++n,
          weakData: {}
        }
      });
    },
        s = t.exports = {
      REQUIRED: !1,
      fastKey: function fastKey(t, e) {
        if (!x(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;

        if (!O(t, r)) {
          if (!i(t)) return "F";
          if (!e) return "E";
          o(t);
        }

        return t[r].objectID;
      },
      getWeakData: function getWeakData(t, e) {
        if (!O(t, r)) {
          if (!i(t)) return !0;
          if (!e) return !1;
          o(t);
        }

        return t[r].weakData;
      },
      onFreeze: function onFreeze(t) {
        return tr && s.REQUIRED && i(t) && !O(t, r) && o(t), t;
      }
    };

    q[r] = !0;
  }),
      rr = (er.REQUIRED, er.fastKey, er.getWeakData, er.onFreeze, zt("iterator")),
      nr = Array.prototype,
      ir = zt("iterator"),
      or = function or(t, e, r, n) {
    try {
      return n ? e(T(r)[0], r[1]) : e(r);
    } catch (e) {
      var i = t["return"];
      throw void 0 !== i && T(i.call(t)), e;
    }
  },
      sr = e(function (t) {
    var e = function e(t, _e2) {
      this.stopped = t, this.result = _e2;
    };

    (t.exports = function (t, r, n, i, o) {
      var s,
          a,
          c,
          l,
          u,
          f,
          h,
          d = Lt(r, n, i ? 2 : 1);
      if (o) s = t;else {
        if ("function" != typeof (a = function (t) {
          if (null != t) return t[ir] || t["@@iterator"] || le[Ce(t)];
        }(t))) throw TypeError("Target is not iterable");

        if (void 0 !== (h = a) && (le.Array === h || nr[rr] === h)) {
          for (c = 0, l = st(t.length); l > c; c++) {
            if ((u = i ? d(T(f = t[c])[0], f[1]) : d(t[c])) && u instanceof e) return u;
          }

          return new e(!1);
        }

        s = a.call(t);
      }

      for (; !(f = s.next()).done;) {
        if ((u = or(s, d, f.value, i)) && u instanceof e) return u;
      }

      return new e(!1);
    }).stop = function (t) {
      return new e(!0, t);
    };
  }),
      ar = function ar(t, e, r) {
    if (!(t instanceof e)) throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
    return t;
  },
      cr = zt("iterator"),
      lr = !1;

  try {
    var ur = 0,
        fr = {
      next: function next() {
        return {
          done: !!ur++
        };
      },
      "return": function _return() {
        lr = !0;
      }
    };
    fr[cr] = function () {
      return this;
    }, Array.from(fr, function () {
      throw 2;
    });
  } catch (t) {}

  var hr = function hr(t, e, r, n, i) {
    var o = a[t],
        s = o && o.prototype,
        l = o,
        u = n ? "set" : "add",
        f = {},
        h = function h(t) {
      var e = s[t];
      J(s, t, "add" == t ? function (t) {
        return e.call(this, 0 === t ? 0 : t), this;
      } : "delete" == t ? function (t) {
        return !(i && !x(t)) && e.call(this, 0 === t ? 0 : t);
      } : "get" == t ? function (t) {
        return i && !x(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
      } : "has" == t ? function (t) {
        return !(i && !x(t)) && e.call(this, 0 === t ? 0 : t);
      } : function (t, r) {
        return e.call(this, 0 === t ? 0 : t, r), this;
      });
    };

    if (_t(t, "function" != typeof o || !(i || s.forEach && !c(function () {
      new o().entries().next();
    })))) l = r.getConstructor(e, t, n, u), er.REQUIRED = !0;else if (_t(t, !0)) {
      var d = new l(),
          p = d[u](i ? {} : -0, 1) != d,
          v = c(function () {
        d.has(1);
      }),
          g = function (t, e) {
        if (!e && !lr) return !1;
        var r = !1;

        try {
          var n = {};
          n[cr] = function () {
            return {
              next: function next() {
                return {
                  done: r = !0
                };
              }
            };
          }, t(n);
        } catch (t) {}

        return r;
      }(function (t) {
        new o(t);
      }),
          y = !i && c(function () {
        for (var t = new o(), e = 5; e--;) {
          t[u](e, e);
        }

        return !t.has(-0);
      });

      g || ((l = e(function (e, r) {
        ar(e, l, t);

        var i = function (t, e, r) {
          var n, i;
          return we && "function" == typeof (n = e.constructor) && n !== r && x(i = n.prototype) && i !== r.prototype && we(t, i), t;
        }(new o(), e, l);

        return null != r && sr(r, i[u], i, n), i;
      })).prototype = s, s.constructor = l), (v || y) && (h("delete"), h("has"), n && h("get")), (y || p) && h(u), i && s.clear && delete s.clear;
    }
    return f[t] = l, At({
      global: !0,
      forced: l != o
    }, f), me(l, t), i || r.setStrong(l, t, n), l;
  },
      dr = er.getWeakData,
      pr = K.set,
      vr = K.getterFor,
      gr = Pt.find,
      yr = Pt.findIndex,
      br = 0,
      mr = function mr(t) {
    return t.frozen || (t.frozen = new xr());
  },
      xr = function xr() {
    this.entries = [];
  },
      Er = function Er(t, e) {
    return gr(t.entries, function (t) {
      return t[0] === e;
    });
  };

  xr.prototype = {
    get: function get(t) {
      var e = Er(this, t);
      if (e) return e[1];
    },
    has: function has(t) {
      return !!Er(this, t);
    },
    set: function set(t, e) {
      var r = Er(this, t);
      r ? r[1] = e : this.entries.push([t, e]);
    },
    "delete": function _delete(t) {
      var e = yr(this.entries, function (e) {
        return e[0] === t;
      });
      return ~e && this.entries.splice(e, 1), !!~e;
    }
  };

  var wr = {
    getConstructor: function getConstructor(t, e, r, n) {
      var i = t(function (t, o) {
        ar(t, i, e), pr(t, {
          type: e,
          id: br++,
          frozen: void 0
        }), null != o && sr(o, t[n], t, r);
      }),
          o = vr(e),
          s = function s(t, e, r) {
        var n = o(t),
            i = dr(T(e), !0);
        return !0 === i ? mr(n).set(e, r) : i[n.id] = r, t;
      };

      return Ze(i.prototype, {
        "delete": function _delete(t) {
          var e = o(this);
          if (!x(t)) return !1;
          var r = dr(t);
          return !0 === r ? mr(e)["delete"](t) : r && O(r, e.id) && delete r[e.id];
        },
        has: function has(t) {
          var e = o(this);
          if (!x(t)) return !1;
          var r = dr(t);
          return !0 === r ? mr(e).has(t) : r && O(r, e.id);
        }
      }), Ze(i.prototype, r ? {
        get: function get(t) {
          var e = o(this);

          if (x(t)) {
            var r = dr(t);
            return !0 === r ? mr(e).get(t) : r ? r[e.id] : void 0;
          }
        },
        set: function set(t, e) {
          return s(this, t, e);
        }
      } : {
        add: function add(t) {
          return s(this, t, !0);
        }
      }), i;
    }
  },
      Or = (e(function (t) {
    var e,
        r = K.enforce,
        n = !a.ActiveXObject && "ActiveXObject" in a,
        i = Object.isExtensible,
        o = function o(t) {
      return function () {
        return t(this, arguments.length ? arguments[0] : void 0);
      };
    },
        s = t.exports = hr("WeakMap", o, wr, !0, !0);

    if (D && n) {
      e = wr.getConstructor(o, "WeakMap", !0), er.REQUIRED = !0;
      var c = s.prototype,
          l = c["delete"],
          u = c.has,
          f = c.get,
          h = c.set;
      Ze(c, {
        "delete": function _delete(t) {
          if (x(t) && !i(t)) {
            var n = r(this);
            return n.frozen || (n.frozen = new e()), l.call(this, t) || n.frozen["delete"](t);
          }

          return l.call(this, t);
        },
        has: function has(t) {
          if (x(t) && !i(t)) {
            var n = r(this);
            return n.frozen || (n.frozen = new e()), u.call(this, t) || n.frozen.has(t);
          }

          return u.call(this, t);
        },
        get: function get(t) {
          if (x(t) && !i(t)) {
            var n = r(this);
            return n.frozen || (n.frozen = new e()), u.call(this, t) ? f.call(this, t) : n.frozen.get(t);
          }

          return f.call(this, t);
        },
        set: function set(t, n) {
          if (x(t) && !i(t)) {
            var o = r(this);
            o.frozen || (o.frozen = new e()), u.call(this, t) ? h.call(this, t, n) : o.frozen.set(t, n);
          } else h.call(this, t, n);

          return this;
        }
      });
    }
  }), zt("iterator")),
      _r = zt("toStringTag"),
      Sr = Te.values;

  for (var Ar in Ht) {
    var kr = a[Ar],
        Lr = kr && kr.prototype;

    if (Lr) {
      if (Lr[Or] !== Sr) try {
        W(Lr, Or, Sr);
      } catch (t) {
        Lr[Or] = Sr;
      }
      if (Lr[_r] || W(Lr, _r, Ar), Ht[Ar]) for (var Mr in Te) {
        if (Lr[Mr] !== Te[Mr]) try {
          W(Lr, Mr, Te[Mr]);
        } catch (t) {
          Lr[Mr] = Te[Mr];
        }
      }
    }
  }

  var Tr = "Expected a function",
      jr = NaN,
      Rr = "[object Symbol]",
      Wr = /^\s+|\s+$/g,
      zr = /^[-+]0x[0-9a-f]+$/i,
      Cr = /^0b[01]+$/i,
      Nr = /^0o[0-7]+$/i,
      Ir = parseInt,
      Dr = "object" == typeof t && t && t.Object === Object && t,
      Pr = "object" == typeof self && self && self.Object === Object && self,
      Vr = Dr || Pr || Function("return this")(),
      Fr = Object.prototype.toString,
      Br = Math.max,
      Hr = Math.min,
      qr = function qr() {
    return Vr.Date.now();
  };

  function $r(t, e, r) {
    var n,
        i,
        o,
        s,
        a,
        c,
        l = 0,
        u = !1,
        f = !1,
        h = !0;
    if ("function" != typeof t) throw new TypeError(Tr);

    function d(e) {
      var r = n,
          o = i;
      return n = i = void 0, l = e, s = t.apply(o, r);
    }

    function p(t) {
      var r = t - c;
      return void 0 === c || r >= e || r < 0 || f && t - l >= o;
    }

    function v() {
      var t = qr();
      if (p(t)) return g(t);
      a = setTimeout(v, function (t) {
        var r = e - (t - c);
        return f ? Hr(r, o - (t - l)) : r;
      }(t));
    }

    function g(t) {
      return a = void 0, h && n ? d(t) : (n = i = void 0, s);
    }

    function y() {
      var t = qr(),
          r = p(t);

      if (n = arguments, i = this, c = t, r) {
        if (void 0 === a) return function (t) {
          return l = t, a = setTimeout(v, e), u ? d(t) : s;
        }(c);
        if (f) return a = setTimeout(v, e), d(c);
      }

      return void 0 === a && (a = setTimeout(v, e)), s;
    }

    return e = Yr(e) || 0, Xr(r) && (u = !!r.leading, o = (f = "maxWait" in r) ? Br(Yr(r.maxWait) || 0, e) : o, h = "trailing" in r ? !!r.trailing : h), y.cancel = function () {
      void 0 !== a && clearTimeout(a), l = 0, n = c = i = a = void 0;
    }, y.flush = function () {
      return void 0 === a ? s : g(qr());
    }, y;
  }

  function Xr(t) {
    var e = typeof t;
    return !!t && ("object" == e || "function" == e);
  }

  function Yr(t) {
    if ("number" == typeof t) return t;
    if (function (t) {
      return "symbol" == typeof t || function (t) {
        return !!t && "object" == typeof t;
      }(t) && Fr.call(t) == Rr;
    }(t)) return jr;

    if (Xr(t)) {
      var e = "function" == typeof t.valueOf ? t.valueOf() : t;
      t = Xr(e) ? e + "" : e;
    }

    if ("string" != typeof t) return 0 === t ? t : +t;
    t = t.replace(Wr, "");
    var r = Cr.test(t);
    return r || Nr.test(t) ? Ir(t.slice(2), r ? 2 : 8) : zr.test(t) ? jr : +t;
  }

  var Gr = function Gr(t, e, r) {
    var n = !0,
        i = !0;
    if ("function" != typeof t) throw new TypeError(Tr);
    return Xr(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), $r(t, e, {
      leading: n,
      maxWait: e,
      trailing: i
    });
  },
      Ur = "Expected a function",
      Qr = NaN,
      Kr = "[object Symbol]",
      Jr = /^\s+|\s+$/g,
      Zr = /^[-+]0x[0-9a-f]+$/i,
      tn = /^0b[01]+$/i,
      en = /^0o[0-7]+$/i,
      rn = parseInt,
      nn = "object" == typeof t && t && t.Object === Object && t,
      on = "object" == typeof self && self && self.Object === Object && self,
      sn = nn || on || Function("return this")(),
      an = Object.prototype.toString,
      cn = Math.max,
      ln = Math.min,
      un = function un() {
    return sn.Date.now();
  };

  function fn(t) {
    var e = typeof t;
    return !!t && ("object" == e || "function" == e);
  }

  function hn(t) {
    if ("number" == typeof t) return t;
    if (function (t) {
      return "symbol" == typeof t || function (t) {
        return !!t && "object" == typeof t;
      }(t) && an.call(t) == Kr;
    }(t)) return Qr;

    if (fn(t)) {
      var e = "function" == typeof t.valueOf ? t.valueOf() : t;
      t = fn(e) ? e + "" : e;
    }

    if ("string" != typeof t) return 0 === t ? t : +t;
    t = t.replace(Jr, "");
    var r = tn.test(t);
    return r || en.test(t) ? rn(t.slice(2), r ? 2 : 8) : Zr.test(t) ? Qr : +t;
  }

  var dn = function dn(t, e, r) {
    var n,
        i,
        o,
        s,
        a,
        c,
        l = 0,
        u = !1,
        f = !1,
        h = !0;
    if ("function" != typeof t) throw new TypeError(Ur);

    function d(e) {
      var r = n,
          o = i;
      return n = i = void 0, l = e, s = t.apply(o, r);
    }

    function p(t) {
      var r = t - c;
      return void 0 === c || r >= e || r < 0 || f && t - l >= o;
    }

    function v() {
      var t = un();
      if (p(t)) return g(t);
      a = setTimeout(v, function (t) {
        var r = e - (t - c);
        return f ? ln(r, o - (t - l)) : r;
      }(t));
    }

    function g(t) {
      return a = void 0, h && n ? d(t) : (n = i = void 0, s);
    }

    function y() {
      var t = un(),
          r = p(t);

      if (n = arguments, i = this, c = t, r) {
        if (void 0 === a) return function (t) {
          return l = t, a = setTimeout(v, e), u ? d(t) : s;
        }(c);
        if (f) return a = setTimeout(v, e), d(c);
      }

      return void 0 === a && (a = setTimeout(v, e)), s;
    }

    return e = hn(e) || 0, fn(r) && (u = !!r.leading, o = (f = "maxWait" in r) ? cn(hn(r.maxWait) || 0, e) : o, h = "trailing" in r ? !!r.trailing : h), y.cancel = function () {
      void 0 !== a && clearTimeout(a), l = 0, n = c = i = a = void 0;
    }, y.flush = function () {
      return void 0 === a ? s : g(un());
    }, y;
  },
      pn = "Expected a function",
      vn = "__lodash_hash_undefined__",
      gn = "[object Function]",
      yn = "[object GeneratorFunction]",
      bn = /^\[object .+?Constructor\]$/,
      mn = "object" == typeof t && t && t.Object === Object && t,
      xn = "object" == typeof self && self && self.Object === Object && self,
      En = mn || xn || Function("return this")();

  var wn = Array.prototype,
      On = Function.prototype,
      _n = Object.prototype,
      Sn = En["__core-js_shared__"],
      An = function () {
    var t = /[^.]+$/.exec(Sn && Sn.keys && Sn.keys.IE_PROTO || "");
    return t ? "Symbol(src)_1." + t : "";
  }(),
      kn = On.toString,
      Ln = _n.hasOwnProperty,
      Mn = _n.toString,
      Tn = RegExp("^" + kn.call(Ln).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      jn = wn.splice,
      Rn = Vn(En, "Map"),
      Wn = Vn(Object, "create");

  function zn(t) {
    var e = -1,
        r = t ? t.length : 0;

    for (this.clear(); ++e < r;) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }

  function Cn(t) {
    var e = -1,
        r = t ? t.length : 0;

    for (this.clear(); ++e < r;) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }

  function Nn(t) {
    var e = -1,
        r = t ? t.length : 0;

    for (this.clear(); ++e < r;) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }

  function In(t, e) {
    for (var r, n, i = t.length; i--;) {
      if ((r = t[i][0]) === (n = e) || r != r && n != n) return i;
    }

    return -1;
  }

  function Dn(t) {
    return !(!Bn(t) || (e = t, An && An in e)) && (function (t) {
      var e = Bn(t) ? Mn.call(t) : "";
      return e == gn || e == yn;
    }(t) || function (t) {
      var e = !1;
      if (null != t && "function" != typeof t.toString) try {
        e = !!(t + "");
      } catch (t) {}
      return e;
    }(t) ? Tn : bn).test(function (t) {
      if (null != t) {
        try {
          return kn.call(t);
        } catch (t) {}

        try {
          return t + "";
        } catch (t) {}
      }

      return "";
    }(t));
    var e;
  }

  function Pn(t, e) {
    var r,
        n,
        i = t.__data__;
    return ("string" == (n = typeof (r = e)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? i["string" == typeof e ? "string" : "hash"] : i.map;
  }

  function Vn(t, e) {
    var r = function (t, e) {
      return null == t ? void 0 : t[e];
    }(t, e);

    return Dn(r) ? r : void 0;
  }

  function Fn(t, e) {
    if ("function" != typeof t || e && "function" != typeof e) throw new TypeError(pn);

    var r = function r() {
      var n = arguments,
          i = e ? e.apply(this, n) : n[0],
          o = r.cache;
      if (o.has(i)) return o.get(i);
      var s = t.apply(this, n);
      return r.cache = o.set(i, s), s;
    };

    return r.cache = new (Fn.Cache || Nn)(), r;
  }

  function Bn(t) {
    var e = typeof t;
    return !!t && ("object" == e || "function" == e);
  }

  zn.prototype.clear = function () {
    this.__data__ = Wn ? Wn(null) : {};
  }, zn.prototype["delete"] = function (t) {
    return this.has(t) && delete this.__data__[t];
  }, zn.prototype.get = function (t) {
    var e = this.__data__;

    if (Wn) {
      var r = e[t];
      return r === vn ? void 0 : r;
    }

    return Ln.call(e, t) ? e[t] : void 0;
  }, zn.prototype.has = function (t) {
    var e = this.__data__;
    return Wn ? void 0 !== e[t] : Ln.call(e, t);
  }, zn.prototype.set = function (t, e) {
    return this.__data__[t] = Wn && void 0 === e ? vn : e, this;
  }, Cn.prototype.clear = function () {
    this.__data__ = [];
  }, Cn.prototype["delete"] = function (t) {
    var e = this.__data__,
        r = In(e, t);
    return !(r < 0) && (r == e.length - 1 ? e.pop() : jn.call(e, r, 1), !0);
  }, Cn.prototype.get = function (t) {
    var e = this.__data__,
        r = In(e, t);
    return r < 0 ? void 0 : e[r][1];
  }, Cn.prototype.has = function (t) {
    return In(this.__data__, t) > -1;
  }, Cn.prototype.set = function (t, e) {
    var r = this.__data__,
        n = In(r, t);
    return n < 0 ? r.push([t, e]) : r[n][1] = e, this;
  }, Nn.prototype.clear = function () {
    this.__data__ = {
      hash: new zn(),
      map: new (Rn || Cn)(),
      string: new zn()
    };
  }, Nn.prototype["delete"] = function (t) {
    return Pn(this, t)["delete"](t);
  }, Nn.prototype.get = function (t) {
    return Pn(this, t).get(t);
  }, Nn.prototype.has = function (t) {
    return Pn(this, t).has(t);
  }, Nn.prototype.set = function (t, e) {
    return Pn(this, t).set(t, e), this;
  }, Fn.Cache = Nn;

  var Hn = Fn,
      qn = function () {
    if ("undefined" != typeof Map) return Map;

    function t(t, e) {
      var r = -1;
      return t.some(function (t, n) {
        return t[0] === e && (r = n, !0);
      }), r;
    }

    return function () {
      function e() {
        this.__entries__ = [];
      }

      return Object.defineProperty(e.prototype, "size", {
        get: function get() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.get = function (e) {
        var r = t(this.__entries__, e),
            n = this.__entries__[r];
        return n && n[1];
      }, e.prototype.set = function (e, r) {
        var n = t(this.__entries__, e);
        ~n ? this.__entries__[n][1] = r : this.__entries__.push([e, r]);
      }, e.prototype["delete"] = function (e) {
        var r = this.__entries__,
            n = t(r, e);
        ~n && r.splice(n, 1);
      }, e.prototype.has = function (e) {
        return !!~t(this.__entries__, e);
      }, e.prototype.clear = function () {
        this.__entries__.splice(0);
      }, e.prototype.forEach = function (t, e) {
        void 0 === e && (e = null);

        for (var r = 0, n = this.__entries__; r < n.length; r++) {
          var i = n[r];
          t.call(e, i[1], i[0]);
        }
      }, e;
    }();
  }(),
      $n = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
      Xn = "undefined" != typeof global && global.Math === Math ? global : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
      Yn = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(Xn) : function (t) {
    return setTimeout(function () {
      return t(Date.now());
    }, 1e3 / 60);
  },
      Gn = 2;

  var Un = 20,
      Qn = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      Kn = "undefined" != typeof MutationObserver,
      Jn = function () {
    function t() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function (t, e) {
        var r = !1,
            n = !1,
            i = 0;

        function o() {
          r && (r = !1, t()), n && a();
        }

        function s() {
          Yn(o);
        }

        function a() {
          var t = Date.now();

          if (r) {
            if (t - i < Gn) return;
            n = !0;
          } else r = !0, n = !1, setTimeout(s, e);

          i = t;
        }

        return a;
      }(this.refresh.bind(this), Un);
    }

    return t.prototype.addObserver = function (t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, t.prototype.removeObserver = function (t) {
      var e = this.observers_,
          r = e.indexOf(t);
      ~r && e.splice(r, 1), !e.length && this.connected_ && this.disconnect_();
    }, t.prototype.refresh = function () {
      this.updateObservers_() && this.refresh();
    }, t.prototype.updateObservers_ = function () {
      var t = this.observers_.filter(function (t) {
        return t.gatherActive(), t.hasActive();
      });
      return t.forEach(function (t) {
        return t.broadcastActive();
      }), t.length > 0;
    }, t.prototype.connect_ = function () {
      $n && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Kn ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, t.prototype.disconnect_ = function () {
      $n && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, t.prototype.onTransitionEnd_ = function (t) {
      var e = t.propertyName,
          r = void 0 === e ? "" : e;
      Qn.some(function (t) {
        return !!~r.indexOf(t);
      }) && this.refresh();
    }, t.getInstance = function () {
      return this.instance_ || (this.instance_ = new t()), this.instance_;
    }, t.instance_ = null, t;
  }(),
      Zn = function Zn(t, e) {
    for (var r = 0, n = Object.keys(e); r < n.length; r++) {
      var i = n[r];
      Object.defineProperty(t, i, {
        value: e[i],
        enumerable: !1,
        writable: !1,
        configurable: !0
      });
    }

    return t;
  },
      ti = function ti(t) {
    return t && t.ownerDocument && t.ownerDocument.defaultView || Xn;
  },
      ei = ai(0, 0, 0, 0);

  function ri(t) {
    return parseFloat(t) || 0;
  }

  function ni(t) {
    for (var e = [], r = 1; r < arguments.length; r++) {
      e[r - 1] = arguments[r];
    }

    return e.reduce(function (e, r) {
      return e + ri(t["border-" + r + "-width"]);
    }, 0);
  }

  function ii(t) {
    var e = t.clientWidth,
        r = t.clientHeight;
    if (!e && !r) return ei;

    var n = ti(t).getComputedStyle(t),
        i = function (t) {
      for (var e = {}, r = 0, n = ["top", "right", "bottom", "left"]; r < n.length; r++) {
        var i = n[r],
            o = t["padding-" + i];
        e[i] = ri(o);
      }

      return e;
    }(n),
        o = i.left + i.right,
        s = i.top + i.bottom,
        a = ri(n.width),
        c = ri(n.height);

    if ("border-box" === n.boxSizing && (Math.round(a + o) !== e && (a -= ni(n, "left", "right") + o), Math.round(c + s) !== r && (c -= ni(n, "top", "bottom") + s)), !function (t) {
      return t === ti(t).document.documentElement;
    }(t)) {
      var l = Math.round(a + o) - e,
          u = Math.round(c + s) - r;
      1 !== Math.abs(l) && (a -= l), 1 !== Math.abs(u) && (c -= u);
    }

    return ai(i.left, i.top, a, c);
  }

  var oi = "undefined" != typeof SVGGraphicsElement ? function (t) {
    return t instanceof ti(t).SVGGraphicsElement;
  } : function (t) {
    return t instanceof ti(t).SVGElement && "function" == typeof t.getBBox;
  };

  function si(t) {
    return $n ? oi(t) ? function (t) {
      var e = t.getBBox();
      return ai(0, 0, e.width, e.height);
    }(t) : ii(t) : ei;
  }

  function ai(t, e, r, n) {
    return {
      x: t,
      y: e,
      width: r,
      height: n
    };
  }

  var ci = function () {
    function t(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = ai(0, 0, 0, 0), this.target = t;
    }

    return t.prototype.isActive = function () {
      var t = si(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, t.prototype.broadcastRect = function () {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, t;
  }(),
      li = function li(t, e) {
    var r,
        n,
        i,
        o,
        s,
        a,
        c,
        l = (n = (r = e).x, i = r.y, o = r.width, s = r.height, a = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, c = Object.create(a.prototype), Zn(c, {
      x: n,
      y: i,
      width: o,
      height: s,
      top: i,
      right: n + o,
      bottom: s + i,
      left: n
    }), c);
    Zn(this, {
      target: t,
      contentRect: l
    });
  },
      ui = function () {
    function t(t, e, r) {
      if (this.activeObservations_ = [], this.observations_ = new qn(), "function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = e, this.callbackCtx_ = r;
    }

    return t.prototype.observe = function (t) {
      if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");

      if ("undefined" != typeof Element && Element instanceof Object) {
        if (!(t instanceof ti(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
        var e = this.observations_;
        e.has(t) || (e.set(t, new ci(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, t.prototype.unobserve = function (t) {
      if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");

      if ("undefined" != typeof Element && Element instanceof Object) {
        if (!(t instanceof ti(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
        var e = this.observations_;
        e.has(t) && (e["delete"](t), e.size || this.controller_.removeObserver(this));
      }
    }, t.prototype.disconnect = function () {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, t.prototype.gatherActive = function () {
      var t = this;
      this.clearActive(), this.observations_.forEach(function (e) {
        e.isActive() && t.activeObservations_.push(e);
      });
    }, t.prototype.broadcastActive = function () {
      if (this.hasActive()) {
        var t = this.callbackCtx_,
            e = this.activeObservations_.map(function (t) {
          return new li(t.target, t.broadcastRect());
        });
        this.callback_.call(t, e, t), this.clearActive();
      }
    }, t.prototype.clearActive = function () {
      this.activeObservations_.splice(0);
    }, t.prototype.hasActive = function () {
      return this.activeObservations_.length > 0;
    }, t;
  }(),
      fi = "undefined" != typeof WeakMap ? new WeakMap() : new qn(),
      hi = function t(e) {
    if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function.");
    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
    var r = Jn.getInstance(),
        n = new ui(e, r, this);
    fi.set(this, n);
  };

  ["observe", "unobserve", "disconnect"].forEach(function (t) {
    hi.prototype[t] = function () {
      var e;
      return (e = fi.get(this))[t].apply(e, arguments);
    };
  });
  var di = void 0 !== Xn.ResizeObserver ? Xn.ResizeObserver : hi,
      pi = null,
      vi = null;

  function gi() {
    if (null === pi) {
      if ("undefined" == typeof document) return pi = 0;
      var t = document.body,
          e = document.createElement("div");
      e.classList.add("simplebar-hide-scrollbar"), t.appendChild(e);
      var r = e.getBoundingClientRect().right;
      t.removeChild(e), pi = r;
    }

    return pi;
  }

  Yt && window.addEventListener("resize", function () {
    vi !== window.devicePixelRatio && (vi = window.devicePixelRatio, pi = null);
  });

  var yi = function yi(t) {
    return function (e, r, n, i) {
      kt(r);
      var o = Mt(e),
          s = y(o),
          a = st(o.length),
          c = t ? a - 1 : 0,
          l = t ? -1 : 1;
      if (n < 2) for (;;) {
        if (c in s) {
          i = s[c], c += l;
          break;
        }

        if (c += l, t ? c < 0 : a <= c) throw TypeError("Reduce of empty array with no initial value");
      }

      for (; t ? c >= 0 : a > c; c += l) {
        c in s && (i = r(i, s[c], c, o));
      }

      return i;
    };
  },
      bi = {
    left: yi(!1),
    right: yi(!0)
  }.left;

  At({
    target: "Array",
    proto: !0,
    forced: Vt("reduce")
  }, {
    reduce: function reduce(t) {
      return bi(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
  var mi = R.f,
      xi = Function.prototype,
      Ei = xi.toString,
      wi = /^\s*function ([^ (]*)/;
  !l || "name" in xi || mi(xi, "name", {
    configurable: !0,
    get: function get() {
      try {
        return Ei.call(this).match(wi)[1];
      } catch (t) {
        return "";
      }
    }
  });

  var Oi,
      _i,
      Si = function Si() {
    var t = T(this),
        e = "";
    return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e;
  },
      Ai = RegExp.prototype.exec,
      ki = String.prototype.replace,
      Li = Ai,
      Mi = (Oi = /a/, _i = /b*/g, Ai.call(Oi, "a"), Ai.call(_i, "a"), 0 !== Oi.lastIndex || 0 !== _i.lastIndex),
      Ti = void 0 !== /()??/.exec("")[1];

  (Mi || Ti) && (Li = function Li(t) {
    var e,
        r,
        n,
        i,
        o = this;
    return Ti && (r = new RegExp("^" + o.source + "$(?!\\s)", Si.call(o))), Mi && (e = o.lastIndex), n = Ai.call(o, t), Mi && n && (o.lastIndex = o.global ? n.index + n[0].length : e), Ti && n && n.length > 1 && ki.call(n[0], r, function () {
      for (i = 1; i < arguments.length - 2; i++) {
        void 0 === arguments[i] && (n[i] = void 0);
      }
    }), n;
  });
  var ji = Li;
  At({
    target: "RegExp",
    proto: !0,
    forced: /./.exec !== ji
  }, {
    exec: ji
  });

  var Ri = zt("species"),
      Wi = !c(function () {
    var t = /./;
    return t.exec = function () {
      var t = [];
      return t.groups = {
        a: "7"
      }, t;
    }, "7" !== "".replace(t, "$<a>");
  }),
      zi = !c(function () {
    var t = /(?:)/,
        e = t.exec;

    t.exec = function () {
      return e.apply(this, arguments);
    };

    var r = "ab".split(t);
    return 2 !== r.length || "a" !== r[0] || "b" !== r[1];
  }),
      Ci = function Ci(t, e, r, n) {
    var i = zt(t),
        o = !c(function () {
      var e = {};
      return e[i] = function () {
        return 7;
      }, 7 != ""[t](e);
    }),
        s = o && !c(function () {
      var e = !1,
          r = /a/;
      return r.exec = function () {
        return e = !0, null;
      }, "split" === t && (r.constructor = {}, r.constructor[Ri] = function () {
        return r;
      }), r[i](""), !e;
    });

    if (!o || !s || "replace" === t && !Wi || "split" === t && !zi) {
      var a = /./[i],
          l = r(i, ""[t], function (t, e, r, n, i) {
        return e.exec === ji ? o && !i ? {
          done: !0,
          value: a.call(e, r, n)
        } : {
          done: !0,
          value: t.call(r, e, n)
        } : {
          done: !1
        };
      }),
          u = l[0],
          f = l[1];
      J(String.prototype, t, u), J(RegExp.prototype, i, 2 == e ? function (t, e) {
        return f.call(t, this, e);
      } : function (t) {
        return f.call(t, this);
      }), n && W(RegExp.prototype[i], "sham", !0);
    }
  },
      Ni = Ue.charAt,
      Ii = function Ii(t, e, r) {
    return e + (r ? Ni(t, e).length : 1);
  },
      Di = function Di(t, e) {
    var r = t.exec;

    if ("function" == typeof r) {
      var n = r.call(t, e);
      if ("object" != typeof n) throw TypeError("RegExp exec method returned something other than an Object or null");
      return n;
    }

    if ("RegExp" !== v(t)) throw TypeError("RegExp#exec called on incompatible receiver");
    return ji.call(t, e);
  };

  Ci("match", 1, function (t, e, r) {
    return [function (e) {
      var r = b(this),
          n = null == e ? void 0 : e[t];
      return void 0 !== n ? n.call(e, r) : new RegExp(e)[t](String(r));
    }, function (t) {
      var n = r(e, t, this);
      if (n.done) return n.value;
      var i = T(t),
          o = String(this);
      if (!i.global) return Di(i, o);
      var s = i.unicode;
      i.lastIndex = 0;

      for (var a, c = [], l = 0; null !== (a = Di(i, o));) {
        var u = String(a[0]);
        c[l] = u, "" === u && (i.lastIndex = Ii(o, st(i.lastIndex), s)), l++;
      }

      return 0 === l ? null : c;
    }];
  });
  var Pi = Math.max,
      Vi = Math.min,
      Fi = Math.floor,
      Bi = /\$([$&'`]|\d\d?|<[^>]*>)/g,
      Hi = /\$([$&'`]|\d\d?)/g;
  Ci("replace", 2, function (t, e, r) {
    return [function (r, n) {
      var i = b(this),
          o = null == r ? void 0 : r[t];
      return void 0 !== o ? o.call(r, i, n) : e.call(String(i), r, n);
    }, function (t, i) {
      var o = r(e, t, this, i);
      if (o.done) return o.value;
      var s = T(t),
          a = String(this),
          c = "function" == typeof i;
      c || (i = String(i));
      var l = s.global;

      if (l) {
        var u = s.unicode;
        s.lastIndex = 0;
      }

      for (var f = [];;) {
        var h = Di(s, a);
        if (null === h) break;
        if (f.push(h), !l) break;
        "" === String(h[0]) && (s.lastIndex = Ii(a, st(s.lastIndex), u));
      }

      for (var d, p = "", v = 0, g = 0; g < f.length; g++) {
        h = f[g];

        for (var y = String(h[0]), b = Pi(Vi(it(h.index), a.length), 0), m = [], x = 1; x < h.length; x++) {
          m.push(void 0 === (d = h[x]) ? d : String(d));
        }

        var E = h.groups;

        if (c) {
          var w = [y].concat(m, b, a);
          void 0 !== E && w.push(E);
          var O = String(i.apply(void 0, w));
        } else O = n(y, a, b, m, E, i);

        b >= v && (p += a.slice(v, b) + O, v = b + y.length);
      }

      return p + a.slice(v);
    }];

    function n(t, r, n, i, o, s) {
      var a = n + t.length,
          c = i.length,
          l = Hi;
      return void 0 !== o && (o = Mt(o), l = Bi), e.call(s, l, function (e, s) {
        var l;

        switch (s.charAt(0)) {
          case "$":
            return "$";

          case "&":
            return t;

          case "`":
            return r.slice(0, n);

          case "'":
            return r.slice(a);

          case "<":
            l = o[s.slice(1, -1)];
            break;

          default:
            var u = +s;
            if (0 === u) return e;

            if (u > c) {
              var f = Fi(u / 10);
              return 0 === f ? e : f <= c ? void 0 === i[f - 1] ? s.charAt(1) : i[f - 1] + s.charAt(1) : e;
            }

            l = i[u - 1];
        }

        return void 0 === l ? "" : l;
      });
    }
  });

  var qi = function qi(t) {
    return Array.prototype.reduce.call(t, function (t, e) {
      var r = e.name.match(/data-simplebar-(.+)/);

      if (r) {
        var n = r[1].replace(/\W+(.)/g, function (t, e) {
          return e.toUpperCase();
        });

        switch (e.value) {
          case "true":
            t[n] = !0;
            break;

          case "false":
            t[n] = !1;
            break;

          case void 0:
            t[n] = !0;
            break;

          default:
            t[n] = e.value;
        }
      }

      return t;
    }, {});
  };

  function $i(t) {
    return t && t.ownerDocument && t.ownerDocument.defaultView ? t.ownerDocument.defaultView : window;
  }

  function Xi(t) {
    return t && t.ownerDocument ? t.ownerDocument : document;
  }

  var Yi = function () {
    function t(e, r) {
      var n = this;
      this.onScroll = function () {
        var t = $i(n.el);
        n.scrollXTicking || (t.requestAnimationFrame(n.scrollX), n.scrollXTicking = !0), n.scrollYTicking || (t.requestAnimationFrame(n.scrollY), n.scrollYTicking = !0);
      }, this.scrollX = function () {
        n.axis.x.isOverflowing && (n.showScrollbar("x"), n.positionScrollbar("x")), n.scrollXTicking = !1;
      }, this.scrollY = function () {
        n.axis.y.isOverflowing && (n.showScrollbar("y"), n.positionScrollbar("y")), n.scrollYTicking = !1;
      }, this.onMouseEnter = function () {
        n.showScrollbar("x"), n.showScrollbar("y");
      }, this.onMouseMove = function (t) {
        n.mouseX = t.clientX, n.mouseY = t.clientY, (n.axis.x.isOverflowing || n.axis.x.forceVisible) && n.onMouseMoveForAxis("x"), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && n.onMouseMoveForAxis("y");
      }, this.onMouseLeave = function () {
        n.onMouseMove.cancel(), (n.axis.x.isOverflowing || n.axis.x.forceVisible) && n.onMouseLeaveForAxis("x"), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && n.onMouseLeaveForAxis("y"), n.mouseX = -1, n.mouseY = -1;
      }, this.onWindowResize = function () {
        n.scrollbarWidth = n.getScrollbarWidth(), n.hideNativeScrollbar();
      }, this.hideScrollbars = function () {
        n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect(), n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect(), n.isWithinBounds(n.axis.y.track.rect) || (n.axis.y.scrollbar.el.classList.remove(n.classNames.visible), n.axis.y.isVisible = !1), n.isWithinBounds(n.axis.x.track.rect) || (n.axis.x.scrollbar.el.classList.remove(n.classNames.visible), n.axis.x.isVisible = !1);
      }, this.onPointerEvent = function (t) {
        var e, r;
        n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect(), n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect(), (n.axis.x.isOverflowing || n.axis.x.forceVisible) && (e = n.isWithinBounds(n.axis.x.track.rect)), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && (r = n.isWithinBounds(n.axis.y.track.rect)), (e || r) && (t.preventDefault(), t.stopPropagation(), "mousedown" === t.type && (e && (n.axis.x.scrollbar.rect = n.axis.x.scrollbar.el.getBoundingClientRect(), n.isWithinBounds(n.axis.x.scrollbar.rect) ? n.onDragStart(t, "x") : n.onTrackClick(t, "x")), r && (n.axis.y.scrollbar.rect = n.axis.y.scrollbar.el.getBoundingClientRect(), n.isWithinBounds(n.axis.y.scrollbar.rect) ? n.onDragStart(t, "y") : n.onTrackClick(t, "y"))));
      }, this.drag = function (e) {
        var r = n.axis[n.draggedAxis].track,
            i = r.rect[n.axis[n.draggedAxis].sizeAttr],
            o = n.axis[n.draggedAxis].scrollbar,
            s = n.contentWrapperEl[n.axis[n.draggedAxis].scrollSizeAttr],
            a = parseInt(n.elStyles[n.axis[n.draggedAxis].sizeAttr], 10);
        e.preventDefault(), e.stopPropagation();
        var c = (("y" === n.draggedAxis ? e.pageY : e.pageX) - r.rect[n.axis[n.draggedAxis].offsetAttr] - n.axis[n.draggedAxis].dragOffset) / (i - o.size) * (s - a);
        "x" === n.draggedAxis && (c = n.isRtl && t.getRtlHelpers().isRtlScrollbarInverted ? c - (i + o.size) : c, c = n.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -c : c), n.contentWrapperEl[n.axis[n.draggedAxis].scrollOffsetAttr] = c;
      }, this.onEndDrag = function (t) {
        var e = Xi(n.el),
            r = $i(n.el);
        t.preventDefault(), t.stopPropagation(), n.el.classList.remove(n.classNames.dragging), e.removeEventListener("mousemove", n.drag, !0), e.removeEventListener("mouseup", n.onEndDrag, !0), n.removePreventClickId = r.setTimeout(function () {
          e.removeEventListener("click", n.preventClick, !0), e.removeEventListener("dblclick", n.preventClick, !0), n.removePreventClickId = null;
        });
      }, this.preventClick = function (t) {
        t.preventDefault(), t.stopPropagation();
      }, this.el = e, this.minScrollbarWidth = 20, this.options = Object.assign({}, t.defaultOptions, {}, r), this.classNames = Object.assign({}, t.defaultOptions.classNames, {}, this.options.classNames), this.axis = {
        x: {
          scrollOffsetAttr: "scrollLeft",
          sizeAttr: "width",
          scrollSizeAttr: "scrollWidth",
          offsetSizeAttr: "offsetWidth",
          offsetAttr: "left",
          overflowAttr: "overflowX",
          dragOffset: 0,
          isOverflowing: !0,
          isVisible: !1,
          forceVisible: !1,
          track: {},
          scrollbar: {}
        },
        y: {
          scrollOffsetAttr: "scrollTop",
          sizeAttr: "height",
          scrollSizeAttr: "scrollHeight",
          offsetSizeAttr: "offsetHeight",
          offsetAttr: "top",
          overflowAttr: "overflowY",
          dragOffset: 0,
          isOverflowing: !0,
          isVisible: !1,
          forceVisible: !1,
          track: {},
          scrollbar: {}
        }
      }, this.removePreventClickId = null, t.instances.has(this.el) || (this.recalculate = Gr(this.recalculate.bind(this), 64), this.onMouseMove = Gr(this.onMouseMove.bind(this), 64), this.hideScrollbars = dn(this.hideScrollbars.bind(this), this.options.timeout), this.onWindowResize = dn(this.onWindowResize.bind(this), 64, {
        leading: !0
      }), t.getRtlHelpers = Hn(t.getRtlHelpers), this.init());
    }

    t.getRtlHelpers = function () {
      var e = document.createElement("div");
      e.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
      var r = e.firstElementChild;
      document.body.appendChild(r);
      var n = r.firstElementChild;
      r.scrollLeft = 0;
      var i = t.getOffset(r),
          o = t.getOffset(n);
      r.scrollLeft = 999;
      var s = t.getOffset(n);
      return {
        isRtlScrollingInverted: i.left !== o.left && o.left - s.left != 0,
        isRtlScrollbarInverted: i.left !== o.left
      };
    }, t.getOffset = function (t) {
      var e = t.getBoundingClientRect(),
          r = Xi(t),
          n = $i(t);
      return {
        top: e.top + (n.pageYOffset || r.documentElement.scrollTop),
        left: e.left + (n.pageXOffset || r.documentElement.scrollLeft)
      };
    };
    var e = t.prototype;
    return e.init = function () {
      t.instances.set(this.el, this), Yt && (this.initDOM(), this.scrollbarWidth = this.getScrollbarWidth(), this.recalculate(), this.initListeners());
    }, e.initDOM = function () {
      var t = this;
      Xi(this.el);
      if (Array.prototype.filter.call(this.el.children, function (e) {
        return e.classList.contains(t.classNames.wrapper);
      }).length) this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper), this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector("." + this.classNames.contentWrapper), this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl), this.offsetEl = this.el.querySelector("." + this.classNames.offset), this.maskEl = this.el.querySelector("." + this.classNames.mask), this.placeholderEl = this.findChild(this.wrapperEl, "." + this.classNames.placeholder), this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl), this.axis.x.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.horizontal), this.axis.y.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.vertical);else {
        for (this.wrapperEl = document.createElement("div"), this.contentWrapperEl = document.createElement("div"), this.offsetEl = document.createElement("div"), this.maskEl = document.createElement("div"), this.contentEl = document.createElement("div"), this.placeholderEl = document.createElement("div"), this.heightAutoObserverWrapperEl = document.createElement("div"), this.heightAutoObserverEl = document.createElement("div"), this.wrapperEl.classList.add(this.classNames.wrapper), this.contentWrapperEl.classList.add(this.classNames.contentWrapper), this.offsetEl.classList.add(this.classNames.offset), this.maskEl.classList.add(this.classNames.mask), this.contentEl.classList.add(this.classNames.contentEl), this.placeholderEl.classList.add(this.classNames.placeholder), this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl); this.el.firstChild;) {
          this.contentEl.appendChild(this.el.firstChild);
        }

        this.contentWrapperEl.appendChild(this.contentEl), this.offsetEl.appendChild(this.contentWrapperEl), this.maskEl.appendChild(this.offsetEl), this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl), this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl), this.wrapperEl.appendChild(this.maskEl), this.wrapperEl.appendChild(this.placeholderEl), this.el.appendChild(this.wrapperEl);
      }

      if (!this.axis.x.track.el || !this.axis.y.track.el) {
        var e = document.createElement("div"),
            r = document.createElement("div");
        e.classList.add(this.classNames.track), r.classList.add(this.classNames.scrollbar), e.appendChild(r), this.axis.x.track.el = e.cloneNode(!0), this.axis.x.track.el.classList.add(this.classNames.horizontal), this.axis.y.track.el = e.cloneNode(!0), this.axis.y.track.el.classList.add(this.classNames.vertical), this.el.appendChild(this.axis.x.track.el), this.el.appendChild(this.axis.y.track.el);
      }

      this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar), this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar), this.options.autoHide || (this.axis.x.scrollbar.el.classList.add(this.classNames.visible), this.axis.y.scrollbar.el.classList.add(this.classNames.visible)), this.el.setAttribute("data-simplebar", "init");
    }, e.initListeners = function () {
      var t = this,
          e = $i(this.el);
      this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach(function (e) {
        t.el.addEventListener(e, t.onPointerEvent, !0);
      }), ["touchstart", "touchend", "touchmove"].forEach(function (e) {
        t.el.addEventListener(e, t.onPointerEvent, {
          capture: !0,
          passive: !0
        });
      }), this.el.addEventListener("mousemove", this.onMouseMove), this.el.addEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl.addEventListener("scroll", this.onScroll), e.addEventListener("resize", this.onWindowResize);
      var r = !1,
          n = e.ResizeObserver || di;
      this.resizeObserver = new n(function () {
        r && t.recalculate();
      }), this.resizeObserver.observe(this.el), this.resizeObserver.observe(this.contentEl), e.requestAnimationFrame(function () {
        r = !0;
      }), this.mutationObserver = new e.MutationObserver(this.recalculate), this.mutationObserver.observe(this.contentEl, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    }, e.recalculate = function () {
      var t = $i(this.el);
      this.elStyles = t.getComputedStyle(this.el), this.isRtl = "rtl" === this.elStyles.direction;
      var e = this.heightAutoObserverEl.offsetHeight <= 1,
          r = this.heightAutoObserverEl.offsetWidth <= 1,
          n = this.contentEl.offsetWidth,
          i = this.contentWrapperEl.offsetWidth,
          o = this.elStyles.overflowX,
          s = this.elStyles.overflowY;
      this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft, this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft;
      var a = this.contentEl.scrollHeight,
          c = this.contentEl.scrollWidth;
      this.contentWrapperEl.style.height = e ? "auto" : "100%", this.placeholderEl.style.width = r ? n + "px" : "auto", this.placeholderEl.style.height = a + "px";
      var l = this.contentWrapperEl.offsetHeight;
      this.axis.x.isOverflowing = c > n, this.axis.y.isOverflowing = a > l, this.axis.x.isOverflowing = "hidden" !== o && this.axis.x.isOverflowing, this.axis.y.isOverflowing = "hidden" !== s && this.axis.y.isOverflowing, this.axis.x.forceVisible = "x" === this.options.forceVisible || !0 === this.options.forceVisible, this.axis.y.forceVisible = "y" === this.options.forceVisible || !0 === this.options.forceVisible, this.hideNativeScrollbar();
      var u = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
          f = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
      this.axis.x.isOverflowing = this.axis.x.isOverflowing && c > i - f, this.axis.y.isOverflowing = this.axis.y.isOverflowing && a > l - u, this.axis.x.scrollbar.size = this.getScrollbarSize("x"), this.axis.y.scrollbar.size = this.getScrollbarSize("y"), this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px", this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px", this.positionScrollbar("x"), this.positionScrollbar("y"), this.toggleTrackVisibility("x"), this.toggleTrackVisibility("y");
    }, e.getScrollbarSize = function (t) {
      if (void 0 === t && (t = "y"), !this.axis[t].isOverflowing) return 0;
      var e,
          r = this.contentEl[this.axis[t].scrollSizeAttr],
          n = this.axis[t].track.el[this.axis[t].offsetSizeAttr],
          i = n / r;
      return e = Math.max(~~(i * n), this.options.scrollbarMinSize), this.options.scrollbarMaxSize && (e = Math.min(e, this.options.scrollbarMaxSize)), e;
    }, e.positionScrollbar = function (e) {
      if (void 0 === e && (e = "y"), this.axis[e].isOverflowing) {
        var r = this.contentWrapperEl[this.axis[e].scrollSizeAttr],
            n = this.axis[e].track.el[this.axis[e].offsetSizeAttr],
            i = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
            o = this.axis[e].scrollbar,
            s = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
            a = (s = "x" === e && this.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -s : s) / (r - i),
            c = ~~((n - o.size) * a);
        c = "x" === e && this.isRtl && t.getRtlHelpers().isRtlScrollbarInverted ? c + (n - o.size) : c, o.el.style.transform = "x" === e ? "translate3d(" + c + "px, 0, 0)" : "translate3d(0, " + c + "px, 0)";
      }
    }, e.toggleTrackVisibility = function (t) {
      void 0 === t && (t = "y");
      var e = this.axis[t].track.el,
          r = this.axis[t].scrollbar.el;
      this.axis[t].isOverflowing || this.axis[t].forceVisible ? (e.style.visibility = "visible", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "scroll") : (e.style.visibility = "hidden", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "hidden"), this.axis[t].isOverflowing ? r.style.display = "block" : r.style.display = "none";
    }, e.hideNativeScrollbar = function () {
      this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + this.scrollbarWidth + "px" : 0, this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + this.scrollbarWidth + "px" : 0;
    }, e.onMouseMoveForAxis = function (t) {
      void 0 === t && (t = "y"), this.axis[t].track.rect = this.axis[t].track.el.getBoundingClientRect(), this.axis[t].scrollbar.rect = this.axis[t].scrollbar.el.getBoundingClientRect(), this.isWithinBounds(this.axis[t].scrollbar.rect) ? this.axis[t].scrollbar.el.classList.add(this.classNames.hover) : this.axis[t].scrollbar.el.classList.remove(this.classNames.hover), this.isWithinBounds(this.axis[t].track.rect) ? (this.showScrollbar(t), this.axis[t].track.el.classList.add(this.classNames.hover)) : this.axis[t].track.el.classList.remove(this.classNames.hover);
    }, e.onMouseLeaveForAxis = function (t) {
      void 0 === t && (t = "y"), this.axis[t].track.el.classList.remove(this.classNames.hover), this.axis[t].scrollbar.el.classList.remove(this.classNames.hover);
    }, e.showScrollbar = function (t) {
      void 0 === t && (t = "y");
      var e = this.axis[t].scrollbar.el;
      this.axis[t].isVisible || (e.classList.add(this.classNames.visible), this.axis[t].isVisible = !0), this.options.autoHide && this.hideScrollbars();
    }, e.onDragStart = function (t, e) {
      void 0 === e && (e = "y");
      var r = Xi(this.el),
          n = $i(this.el),
          i = this.axis[e].scrollbar,
          o = "y" === e ? t.pageY : t.pageX;
      this.axis[e].dragOffset = o - i.rect[this.axis[e].offsetAttr], this.draggedAxis = e, this.el.classList.add(this.classNames.dragging), r.addEventListener("mousemove", this.drag, !0), r.addEventListener("mouseup", this.onEndDrag, !0), null === this.removePreventClickId ? (r.addEventListener("click", this.preventClick, !0), r.addEventListener("dblclick", this.preventClick, !0)) : (n.clearTimeout(this.removePreventClickId), this.removePreventClickId = null);
    }, e.onTrackClick = function (t, e) {
      var r = this;

      if (void 0 === e && (e = "y"), this.options.clickOnTrack) {
        var n = $i(this.el);
        this.axis[e].scrollbar.rect = this.axis[e].scrollbar.el.getBoundingClientRect();
        var i = this.axis[e].scrollbar.rect[this.axis[e].offsetAttr],
            o = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
            s = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
            a = ("y" === e ? this.mouseY - i : this.mouseX - i) < 0 ? -1 : 1,
            c = -1 === a ? s - o : s + o;
        !function t() {
          var i, o;
          -1 === a ? s > c && (s -= 40, r.contentWrapperEl.scrollTo(((i = {})[r.axis[e].offsetAttr] = s, i)), n.requestAnimationFrame(t)) : s < c && (s += 40, r.contentWrapperEl.scrollTo(((o = {})[r.axis[e].offsetAttr] = s, o)), n.requestAnimationFrame(t));
        }();
      }
    }, e.getContentElement = function () {
      return this.contentEl;
    }, e.getScrollElement = function () {
      return this.contentWrapperEl;
    }, e.getScrollbarWidth = function () {
      try {
        return "none" === getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style ? 0 : gi();
      } catch (t) {
        return gi();
      }
    }, e.removeListeners = function () {
      var t = this,
          e = $i(this.el);
      this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach(function (e) {
        t.el.removeEventListener(e, t.onPointerEvent, !0);
      }), ["touchstart", "touchend", "touchmove"].forEach(function (e) {
        t.el.removeEventListener(e, t.onPointerEvent, {
          capture: !0,
          passive: !0
        });
      }), this.el.removeEventListener("mousemove", this.onMouseMove), this.el.removeEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onWindowResize), this.mutationObserver.disconnect(), this.resizeObserver.disconnect(), this.recalculate.cancel(), this.onMouseMove.cancel(), this.hideScrollbars.cancel(), this.onWindowResize.cancel();
    }, e.unMount = function () {
      this.removeListeners(), t.instances["delete"](this.el);
    }, e.isWithinBounds = function (t) {
      return this.mouseX >= t.left && this.mouseX <= t.left + t.width && this.mouseY >= t.top && this.mouseY <= t.top + t.height;
    }, e.findChild = function (t, e) {
      var r = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector;
      return Array.prototype.filter.call(t.children, function (t) {
        return r.call(t, e);
      })[0];
    }, t;
  }();

  return Yi.defaultOptions = {
    autoHide: !0,
    forceVisible: !1,
    clickOnTrack: !0,
    classNames: {
      contentEl: "simplebar-content",
      contentWrapper: "simplebar-content-wrapper",
      offset: "simplebar-offset",
      mask: "simplebar-mask",
      wrapper: "simplebar-wrapper",
      placeholder: "simplebar-placeholder",
      scrollbar: "simplebar-scrollbar",
      track: "simplebar-track",
      heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
      heightAutoObserverEl: "simplebar-height-auto-observer",
      visible: "simplebar-visible",
      horizontal: "simplebar-horizontal",
      vertical: "simplebar-vertical",
      hover: "simplebar-hover",
      dragging: "simplebar-dragging"
    },
    scrollbarMinSize: 25,
    scrollbarMaxSize: 0,
    timeout: 1e3
  }, Yi.instances = new WeakMap(), Yi.initDOMLoadedElements = function () {
    document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.removeEventListener("load", this.initDOMLoadedElements), Array.prototype.forEach.call(document.querySelectorAll('[data-simplebar]:not([data-simplebar="init"])'), function (t) {
      Yi.instances.has(t) || new Yi(t, qi(t.attributes));
    });
  }, Yi.removeObserver = function () {
    this.globalObserver.disconnect();
  }, Yi.initHtmlApi = function () {
    this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this), "undefined" != typeof MutationObserver && (this.globalObserver = new MutationObserver(Yi.handleMutations), this.globalObserver.observe(document, {
      childList: !0,
      subtree: !0
    })), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements));
  }, Yi.handleMutations = function (t) {
    t.forEach(function (t) {
      Array.prototype.forEach.call(t.addedNodes, function (t) {
        1 === t.nodeType && (t.hasAttribute("data-simplebar") ? !Yi.instances.has(t) && new Yi(t, qi(t.attributes)) : Array.prototype.forEach.call(t.querySelectorAll('[data-simplebar]:not([data-simplebar="init"])'), function (t) {
          !Yi.instances.has(t) && new Yi(t, qi(t.attributes));
        }));
      }), Array.prototype.forEach.call(t.removedNodes, function (t) {
        1 === t.nodeType && (t.hasAttribute('[data-simplebar="init"]') ? Yi.instances.has(t) && Yi.instances.get(t).unMount() : Array.prototype.forEach.call(t.querySelectorAll('[data-simplebar="init"]'), function (t) {
          Yi.instances.has(t) && Yi.instances.get(t).unMount();
        }));
      });
    });
  }, Yi.getOptions = qi, Yt && Yi.initHtmlApi(), Yi;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/assets/packs/sleek_bundle.js":
/*!******************************************!*\
  !*** ./app/assets/packs/sleek_bundle.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, $, jQuery) {(function (global, factory) {
   true ? factory(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) : undefined;
})(this, function (jquery) {
  "use strict";

  jquery = jquery && jquery.hasOwnProperty("default") ? jquery["default"] : jquery;
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};

  function unwrapExports(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && typeof navigator !== "undefined";

  var timeoutDuration = function () {
    var longerTimeoutBrowsers = ["Edge", "Trident", "Firefox"];

    for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
      if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
        return 1;
      }
    }

    return 0;
  }();

  function microtaskDebounce(fn) {
    var called = false;
    return function () {
      if (called) {
        return;
      }

      called = true;
      window.Promise.resolve().then(function () {
        called = false;
        fn();
      });
    };
  }

  function taskDebounce(fn) {
    var scheduled = false;
    return function () {
      if (!scheduled) {
        scheduled = true;
        setTimeout(function () {
          scheduled = false;
          fn();
        }, timeoutDuration);
      }
    };
  }

  var supportsMicroTasks = isBrowser && window.Promise;
  var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

  function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === "[object Function]";
  }

  function getStyleComputedProperty(element, property) {
    if (element.nodeType !== 1) {
      return [];
    }

    var window = element.ownerDocument.defaultView;
    var css = window.getComputedStyle(element, null);
    return property ? css[property] : css;
  }

  function getParentNode(element) {
    if (element.nodeName === "HTML") {
      return element;
    }

    return element.parentNode || element.host;
  }

  function getScrollParent(element) {
    if (!element) {
      return document.body;
    }

    switch (element.nodeName) {
      case "HTML":
      case "BODY":
        return element.ownerDocument.body;

      case "#document":
        return element.body;
    }

    var _getStyleComputedProp = getStyleComputedProperty(element),
        overflow = _getStyleComputedProp.overflow,
        overflowX = _getStyleComputedProp.overflowX,
        overflowY = _getStyleComputedProp.overflowY;

    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      return element;
    }

    return getScrollParent(getParentNode(element));
  }

  function getReferenceNode(reference) {
    return reference && reference.referenceNode ? reference.referenceNode : reference;
  }

  var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
  var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

  function isIE(version) {
    if (version === 11) {
      return isIE11;
    }

    if (version === 10) {
      return isIE10;
    }

    return isIE11 || isIE10;
  }

  function getOffsetParent(element) {
    if (!element) {
      return document.documentElement;
    }

    var noOffsetParent = isIE(10) ? document.body : null;
    var offsetParent = element.offsetParent || null;

    while (offsetParent === noOffsetParent && element.nextElementSibling) {
      offsetParent = (element = element.nextElementSibling).offsetParent;
    }

    var nodeName = offsetParent && offsetParent.nodeName;

    if (!nodeName || nodeName === "BODY" || nodeName === "HTML") {
      return element ? element.ownerDocument.documentElement : document.documentElement;
    }

    if (["TH", "TD", "TABLE"].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, "position") === "static") {
      return getOffsetParent(offsetParent);
    }

    return offsetParent;
  }

  function isOffsetContainer(element) {
    var nodeName = element.nodeName;

    if (nodeName === "BODY") {
      return false;
    }

    return nodeName === "HTML" || getOffsetParent(element.firstElementChild) === element;
  }

  function getRoot(node) {
    if (node.parentNode !== null) {
      return getRoot(node.parentNode);
    }

    return node;
  }

  function findCommonOffsetParent(element1, element2) {
    if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
      return document.documentElement;
    }

    var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
    var start = order ? element1 : element2;
    var end = order ? element2 : element1;
    var range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    var commonAncestorContainer = range.commonAncestorContainer;

    if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
      if (isOffsetContainer(commonAncestorContainer)) {
        return commonAncestorContainer;
      }

      return getOffsetParent(commonAncestorContainer);
    }

    var element1root = getRoot(element1);

    if (element1root.host) {
      return findCommonOffsetParent(element1root.host, element2);
    } else {
      return findCommonOffsetParent(element1, getRoot(element2).host);
    }
  }

  function getScroll(element) {
    var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "top";
    var upperSide = side === "top" ? "scrollTop" : "scrollLeft";
    var nodeName = element.nodeName;

    if (nodeName === "BODY" || nodeName === "HTML") {
      var html = element.ownerDocument.documentElement;
      var scrollingElement = element.ownerDocument.scrollingElement || html;
      return scrollingElement[upperSide];
    }

    return element[upperSide];
  }

  function includeScroll(rect, element) {
    var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var scrollTop = getScroll(element, "top");
    var scrollLeft = getScroll(element, "left");
    var modifier = subtract ? -1 : 1;
    rect.top += scrollTop * modifier;
    rect.bottom += scrollTop * modifier;
    rect.left += scrollLeft * modifier;
    rect.right += scrollLeft * modifier;
    return rect;
  }

  function getBordersSize(styles, axis) {
    var sideA = axis === "x" ? "Left" : "Top";
    var sideB = sideA === "Left" ? "Right" : "Bottom";
    return parseFloat(styles["border" + sideA + "Width"], 10) + parseFloat(styles["border" + sideB + "Width"], 10);
  }

  function getSize(axis, body, html, computedStyle) {
    return Math.max(body["offset" + axis], body["scroll" + axis], html["client" + axis], html["offset" + axis], html["scroll" + axis], isIE(10) ? parseInt(html["offset" + axis]) + parseInt(computedStyle["margin" + (axis === "Height" ? "Top" : "Left")]) + parseInt(computedStyle["margin" + (axis === "Height" ? "Bottom" : "Right")]) : 0);
  }

  function getWindowSizes(document) {
    var body = document.body;
    var html = document.documentElement;
    var computedStyle = isIE(10) && getComputedStyle(html);
    return {
      height: getSize("Height", body, html, computedStyle),
      width: getSize("Width", body, html, computedStyle)
    };
  }

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var defineProperty = function defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };

  var _extends = Object.assign || function (target) {
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

  function getClientRect(offsets) {
    return _extends({}, offsets, {
      right: offsets.left + offsets.width,
      bottom: offsets.top + offsets.height
    });
  }

  function getBoundingClientRect(element) {
    var rect = {};

    try {
      if (isIE(10)) {
        rect = element.getBoundingClientRect();
        var scrollTop = getScroll(element, "top");
        var scrollLeft = getScroll(element, "left");
        rect.top += scrollTop;
        rect.left += scrollLeft;
        rect.bottom += scrollTop;
        rect.right += scrollLeft;
      } else {
        rect = element.getBoundingClientRect();
      }
    } catch (e) {}

    var result = {
      left: rect.left,
      top: rect.top,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };
    var sizes = element.nodeName === "HTML" ? getWindowSizes(element.ownerDocument) : {};
    var width = sizes.width || element.clientWidth || result.width;
    var height = sizes.height || element.clientHeight || result.height;
    var horizScrollbar = element.offsetWidth - width;
    var vertScrollbar = element.offsetHeight - height;

    if (horizScrollbar || vertScrollbar) {
      var styles = getStyleComputedProperty(element);
      horizScrollbar -= getBordersSize(styles, "x");
      vertScrollbar -= getBordersSize(styles, "y");
      result.width -= horizScrollbar;
      result.height -= vertScrollbar;
    }

    return getClientRect(result);
  }

  function getOffsetRectRelativeToArbitraryNode(children, parent) {
    var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var isIE10 = isIE(10);
    var isHTML = parent.nodeName === "HTML";
    var childrenRect = getBoundingClientRect(children);
    var parentRect = getBoundingClientRect(parent);
    var scrollParent = getScrollParent(children);
    var styles = getStyleComputedProperty(parent);
    var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
    var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

    if (fixedPosition && isHTML) {
      parentRect.top = Math.max(parentRect.top, 0);
      parentRect.left = Math.max(parentRect.left, 0);
    }

    var offsets = getClientRect({
      top: childrenRect.top - parentRect.top - borderTopWidth,
      left: childrenRect.left - parentRect.left - borderLeftWidth,
      width: childrenRect.width,
      height: childrenRect.height
    });
    offsets.marginTop = 0;
    offsets.marginLeft = 0;

    if (!isIE10 && isHTML) {
      var marginTop = parseFloat(styles.marginTop, 10);
      var marginLeft = parseFloat(styles.marginLeft, 10);
      offsets.top -= borderTopWidth - marginTop;
      offsets.bottom -= borderTopWidth - marginTop;
      offsets.left -= borderLeftWidth - marginLeft;
      offsets.right -= borderLeftWidth - marginLeft;
      offsets.marginTop = marginTop;
      offsets.marginLeft = marginLeft;
    }

    if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== "BODY") {
      offsets = includeScroll(offsets, parent);
    }

    return offsets;
  }

  function getViewportOffsetRectRelativeToArtbitraryNode(element) {
    var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var html = element.ownerDocument.documentElement;
    var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    var width = Math.max(html.clientWidth, window.innerWidth || 0);
    var height = Math.max(html.clientHeight, window.innerHeight || 0);
    var scrollTop = !excludeScroll ? getScroll(html) : 0;
    var scrollLeft = !excludeScroll ? getScroll(html, "left") : 0;
    var offset = {
      top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
      left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
      width: width,
      height: height
    };
    return getClientRect(offset);
  }

  function isFixed(element) {
    var nodeName = element.nodeName;

    if (nodeName === "BODY" || nodeName === "HTML") {
      return false;
    }

    if (getStyleComputedProperty(element, "position") === "fixed") {
      return true;
    }

    var parentNode = getParentNode(element);

    if (!parentNode) {
      return false;
    }

    return isFixed(parentNode);
  }

  function getFixedPositionOffsetParent(element) {
    if (!element || !element.parentElement || isIE()) {
      return document.documentElement;
    }

    var el = element.parentElement;

    while (el && getStyleComputedProperty(el, "transform") === "none") {
      el = el.parentElement;
    }

    return el || document.documentElement;
  }

  function getBoundaries(popper, reference, padding, boundariesElement) {
    var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var boundaries = {
      top: 0,
      left: 0
    };
    var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

    if (boundariesElement === "viewport") {
      boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
    } else {
      var boundariesNode = void 0;

      if (boundariesElement === "scrollParent") {
        boundariesNode = getScrollParent(getParentNode(reference));

        if (boundariesNode.nodeName === "BODY") {
          boundariesNode = popper.ownerDocument.documentElement;
        }
      } else if (boundariesElement === "window") {
        boundariesNode = popper.ownerDocument.documentElement;
      } else {
        boundariesNode = boundariesElement;
      }

      var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

      if (boundariesNode.nodeName === "HTML" && !isFixed(offsetParent)) {
        var _getWindowSizes = getWindowSizes(popper.ownerDocument),
            height = _getWindowSizes.height,
            width = _getWindowSizes.width;

        boundaries.top += offsets.top - offsets.marginTop;
        boundaries.bottom = height + offsets.top;
        boundaries.left += offsets.left - offsets.marginLeft;
        boundaries.right = width + offsets.left;
      } else {
        boundaries = offsets;
      }
    }

    padding = padding || 0;
    var isPaddingNumber = typeof padding === "number";
    boundaries.left += isPaddingNumber ? padding : padding.left || 0;
    boundaries.top += isPaddingNumber ? padding : padding.top || 0;
    boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
    boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
    return boundaries;
  }

  function getArea(_ref) {
    var width = _ref.width,
        height = _ref.height;
    return width * height;
  }

  function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
    var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    if (placement.indexOf("auto") === -1) {
      return placement;
    }

    var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
    var rects = {
      top: {
        width: boundaries.width,
        height: refRect.top - boundaries.top
      },
      right: {
        width: boundaries.right - refRect.right,
        height: boundaries.height
      },
      bottom: {
        width: boundaries.width,
        height: boundaries.bottom - refRect.bottom
      },
      left: {
        width: refRect.left - boundaries.left,
        height: boundaries.height
      }
    };
    var sortedAreas = Object.keys(rects).map(function (key) {
      return _extends({
        key: key
      }, rects[key], {
        area: getArea(rects[key])
      });
    }).sort(function (a, b) {
      return b.area - a.area;
    });
    var filteredAreas = sortedAreas.filter(function (_ref2) {
      var width = _ref2.width,
          height = _ref2.height;
      return width >= popper.clientWidth && height >= popper.clientHeight;
    });
    var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
    var variation = placement.split("-")[1];
    return computedPlacement + (variation ? "-" + variation : "");
  }

  function getReferenceOffsets(state, popper, reference) {
    var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
    return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
  }

  function getOuterSizes(element) {
    var window = element.ownerDocument.defaultView;
    var styles = window.getComputedStyle(element);
    var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
    var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
    var result = {
      width: element.offsetWidth + y,
      height: element.offsetHeight + x
    };
    return result;
  }

  function getOppositePlacement(placement) {
    var hash = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash[matched];
    });
  }

  function getPopperOffsets(popper, referenceOffsets, placement) {
    placement = placement.split("-")[0];
    var popperRect = getOuterSizes(popper);
    var popperOffsets = {
      width: popperRect.width,
      height: popperRect.height
    };
    var isHoriz = ["right", "left"].indexOf(placement) !== -1;
    var mainSide = isHoriz ? "top" : "left";
    var secondarySide = isHoriz ? "left" : "top";
    var measurement = isHoriz ? "height" : "width";
    var secondaryMeasurement = !isHoriz ? "height" : "width";
    popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;

    if (placement === secondarySide) {
      popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
    } else {
      popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
    }

    return popperOffsets;
  }

  function find(arr, check) {
    if (Array.prototype.find) {
      return arr.find(check);
    }

    return arr.filter(check)[0];
  }

  function findIndex(arr, prop, value) {
    if (Array.prototype.findIndex) {
      return arr.findIndex(function (cur) {
        return cur[prop] === value;
      });
    }

    var match = find(arr, function (obj) {
      return obj[prop] === value;
    });
    return arr.indexOf(match);
  }

  function runModifiers(modifiers, data, ends) {
    var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, "name", ends));
    modifiersToRun.forEach(function (modifier) {
      if (modifier["function"]) {
        console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
      }

      var fn = modifier["function"] || modifier.fn;

      if (modifier.enabled && isFunction(fn)) {
        data.offsets.popper = getClientRect(data.offsets.popper);
        data.offsets.reference = getClientRect(data.offsets.reference);
        data = fn(data, modifier);
      }
    });
    return data;
  }

  function update() {
    if (this.state.isDestroyed) {
      return;
    }

    var data = {
      instance: this,
      styles: {},
      arrowStyles: {},
      attributes: {},
      flipped: false,
      offsets: {}
    };
    data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);
    data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);
    data.originalPlacement = data.placement;
    data.positionFixed = this.options.positionFixed;
    data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
    data.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute";
    data = runModifiers(this.modifiers, data);

    if (!this.state.isCreated) {
      this.state.isCreated = true;
      this.options.onCreate(data);
    } else {
      this.options.onUpdate(data);
    }
  }

  function isModifierEnabled(modifiers, modifierName) {
    return modifiers.some(function (_ref) {
      var name = _ref.name,
          enabled = _ref.enabled;
      return enabled && name === modifierName;
    });
  }

  function getSupportedPropertyName(property) {
    var prefixes = [false, "ms", "Webkit", "Moz", "O"];
    var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

    for (var i = 0; i < prefixes.length; i++) {
      var prefix = prefixes[i];
      var toCheck = prefix ? "" + prefix + upperProp : property;

      if (typeof document.body.style[toCheck] !== "undefined") {
        return toCheck;
      }
    }

    return null;
  }

  function destroy() {
    this.state.isDestroyed = true;

    if (isModifierEnabled(this.modifiers, "applyStyle")) {
      this.popper.removeAttribute("x-placement");
      this.popper.style.position = "";
      this.popper.style.top = "";
      this.popper.style.left = "";
      this.popper.style.right = "";
      this.popper.style.bottom = "";
      this.popper.style.willChange = "";
      this.popper.style[getSupportedPropertyName("transform")] = "";
    }

    this.disableEventListeners();

    if (this.options.removeOnDestroy) {
      this.popper.parentNode.removeChild(this.popper);
    }

    return this;
  }

  function getWindow(element) {
    var ownerDocument = element.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView : window;
  }

  function attachToScrollParents(scrollParent, event, callback, scrollParents) {
    var isBody = scrollParent.nodeName === "BODY";
    var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
    target.addEventListener(event, callback, {
      passive: true
    });

    if (!isBody) {
      attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
    }

    scrollParents.push(target);
  }

  function setupEventListeners(reference, options, state, updateBound) {
    state.updateBound = updateBound;
    getWindow(reference).addEventListener("resize", state.updateBound, {
      passive: true
    });
    var scrollElement = getScrollParent(reference);
    attachToScrollParents(scrollElement, "scroll", state.updateBound, state.scrollParents);
    state.scrollElement = scrollElement;
    state.eventsEnabled = true;
    return state;
  }

  function enableEventListeners() {
    if (!this.state.eventsEnabled) {
      this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
    }
  }

  function removeEventListeners(reference, state) {
    getWindow(reference).removeEventListener("resize", state.updateBound);
    state.scrollParents.forEach(function (target) {
      target.removeEventListener("scroll", state.updateBound);
    });
    state.updateBound = null;
    state.scrollParents = [];
    state.scrollElement = null;
    state.eventsEnabled = false;
    return state;
  }

  function disableEventListeners() {
    if (this.state.eventsEnabled) {
      cancelAnimationFrame(this.scheduleUpdate);
      this.state = removeEventListeners(this.reference, this.state);
    }
  }

  function isNumeric(n) {
    return n !== "" && !isNaN(parseFloat(n)) && isFinite(n);
  }

  function setStyles(element, styles) {
    Object.keys(styles).forEach(function (prop) {
      var unit = "";

      if (["width", "height", "top", "right", "bottom", "left"].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
        unit = "px";
      }

      element.style[prop] = styles[prop] + unit;
    });
  }

  function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(function (prop) {
      var value = attributes[prop];

      if (value !== false) {
        element.setAttribute(prop, attributes[prop]);
      } else {
        element.removeAttribute(prop);
      }
    });
  }

  function applyStyle(data) {
    setStyles(data.instance.popper, data.styles);
    setAttributes(data.instance.popper, data.attributes);

    if (data.arrowElement && Object.keys(data.arrowStyles).length) {
      setStyles(data.arrowElement, data.arrowStyles);
    }

    return data;
  }

  function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
    var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);
    var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
    popper.setAttribute("x-placement", placement);
    setStyles(popper, {
      position: options.positionFixed ? "fixed" : "absolute"
    });
    return options;
  }

  function getRoundedOffsets(data, shouldRound) {
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;
    var round = Math.round,
        floor = Math.floor;

    var noRound = function noRound(v) {
      return v;
    };

    var referenceWidth = round(reference.width);
    var popperWidth = round(popper.width);
    var isVertical = ["left", "right"].indexOf(data.placement) !== -1;
    var isVariation = data.placement.indexOf("-") !== -1;
    var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
    var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
    var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
    var verticalToInteger = !shouldRound ? noRound : round;
    return {
      left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
      top: verticalToInteger(popper.top),
      bottom: verticalToInteger(popper.bottom),
      right: horizontalToInteger(popper.right)
    };
  }

  var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

  function computeStyle(data, options) {
    var x = options.x,
        y = options.y;
    var popper = data.offsets.popper;
    var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
      return modifier.name === "applyStyle";
    }).gpuAcceleration;

    if (legacyGpuAccelerationOption !== undefined) {
      console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
    }

    var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
    var offsetParent = getOffsetParent(data.instance.popper);
    var offsetParentRect = getBoundingClientRect(offsetParent);
    var styles = {
      position: popper.position
    };
    var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
    var sideA = x === "bottom" ? "top" : "bottom";
    var sideB = y === "right" ? "left" : "right";
    var prefixedProperty = getSupportedPropertyName("transform");
    var left = void 0,
        top = void 0;

    if (sideA === "bottom") {
      if (offsetParent.nodeName === "HTML") {
        top = -offsetParent.clientHeight + offsets.bottom;
      } else {
        top = -offsetParentRect.height + offsets.bottom;
      }
    } else {
      top = offsets.top;
    }

    if (sideB === "right") {
      if (offsetParent.nodeName === "HTML") {
        left = -offsetParent.clientWidth + offsets.right;
      } else {
        left = -offsetParentRect.width + offsets.right;
      }
    } else {
      left = offsets.left;
    }

    if (gpuAcceleration && prefixedProperty) {
      styles[prefixedProperty] = "translate3d(" + left + "px, " + top + "px, 0)";
      styles[sideA] = 0;
      styles[sideB] = 0;
      styles.willChange = "transform";
    } else {
      var invertTop = sideA === "bottom" ? -1 : 1;
      var invertLeft = sideB === "right" ? -1 : 1;
      styles[sideA] = top * invertTop;
      styles[sideB] = left * invertLeft;
      styles.willChange = sideA + ", " + sideB;
    }

    var attributes = {
      "x-placement": data.placement
    };
    data.attributes = _extends({}, attributes, data.attributes);
    data.styles = _extends({}, styles, data.styles);
    data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
    return data;
  }

  function isModifierRequired(modifiers, requestingName, requestedName) {
    var requesting = find(modifiers, function (_ref) {
      var name = _ref.name;
      return name === requestingName;
    });
    var isRequired = !!requesting && modifiers.some(function (modifier) {
      return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
    });

    if (!isRequired) {
      var _requesting = "`" + requestingName + "`";

      var requested = "`" + requestedName + "`";
      console.warn(requested + " modifier is required by " + _requesting + " modifier in order to work, be sure to include it before " + _requesting + "!");
    }

    return isRequired;
  }

  function arrow(data, options) {
    var _data$offsets$arrow;

    if (!isModifierRequired(data.instance.modifiers, "arrow", "keepTogether")) {
      return data;
    }

    var arrowElement = options.element;

    if (typeof arrowElement === "string") {
      arrowElement = data.instance.popper.querySelector(arrowElement);

      if (!arrowElement) {
        return data;
      }
    } else {
      if (!data.instance.popper.contains(arrowElement)) {
        console.warn("WARNING: `arrow.element` must be child of its popper element!");
        return data;
      }
    }

    var placement = data.placement.split("-")[0];
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;
    var isVertical = ["left", "right"].indexOf(placement) !== -1;
    var len = isVertical ? "height" : "width";
    var sideCapitalized = isVertical ? "Top" : "Left";
    var side = sideCapitalized.toLowerCase();
    var altSide = isVertical ? "left" : "top";
    var opSide = isVertical ? "bottom" : "right";
    var arrowElementSize = getOuterSizes(arrowElement)[len];

    if (reference[opSide] - arrowElementSize < popper[side]) {
      data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
    }

    if (reference[side] + arrowElementSize > popper[opSide]) {
      data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
    }

    data.offsets.popper = getClientRect(data.offsets.popper);
    var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;
    var css = getStyleComputedProperty(data.instance.popper);
    var popperMarginSide = parseFloat(css["margin" + sideCapitalized], 10);
    var popperBorderSide = parseFloat(css["border" + sideCapitalized + "Width"], 10);
    var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;
    sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
    data.arrowElement = arrowElement;
    data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ""), _data$offsets$arrow);
    return data;
  }

  function getOppositeVariation(variation) {
    if (variation === "end") {
      return "start";
    } else if (variation === "start") {
      return "end";
    }

    return variation;
  }

  var placements = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"];
  var validPlacements = placements.slice(3);

  function clockwise(placement) {
    var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var index = validPlacements.indexOf(placement);
    var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
    return counter ? arr.reverse() : arr;
  }

  var BEHAVIORS = {
    FLIP: "flip",
    CLOCKWISE: "clockwise",
    COUNTERCLOCKWISE: "counterclockwise"
  };

  function flip(data, options) {
    if (isModifierEnabled(data.instance.modifiers, "inner")) {
      return data;
    }

    if (data.flipped && data.placement === data.originalPlacement) {
      return data;
    }

    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
    var placement = data.placement.split("-")[0];
    var placementOpposite = getOppositePlacement(placement);
    var variation = data.placement.split("-")[1] || "";
    var flipOrder = [];

    switch (options.behavior) {
      case BEHAVIORS.FLIP:
        flipOrder = [placement, placementOpposite];
        break;

      case BEHAVIORS.CLOCKWISE:
        flipOrder = clockwise(placement);
        break;

      case BEHAVIORS.COUNTERCLOCKWISE:
        flipOrder = clockwise(placement, true);
        break;

      default:
        flipOrder = options.behavior;
    }

    flipOrder.forEach(function (step, index) {
      if (placement !== step || flipOrder.length === index + 1) {
        return data;
      }

      placement = data.placement.split("-")[0];
      placementOpposite = getOppositePlacement(placement);
      var popperOffsets = data.offsets.popper;
      var refOffsets = data.offsets.reference;
      var floor = Math.floor;
      var overlapsRef = placement === "left" && floor(popperOffsets.right) > floor(refOffsets.left) || placement === "right" && floor(popperOffsets.left) < floor(refOffsets.right) || placement === "top" && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === "bottom" && floor(popperOffsets.top) < floor(refOffsets.bottom);
      var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
      var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
      var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
      var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
      var overflowsBoundaries = placement === "left" && overflowsLeft || placement === "right" && overflowsRight || placement === "top" && overflowsTop || placement === "bottom" && overflowsBottom;
      var isVertical = ["top", "bottom"].indexOf(placement) !== -1;
      var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === "start" && overflowsLeft || isVertical && variation === "end" && overflowsRight || !isVertical && variation === "start" && overflowsTop || !isVertical && variation === "end" && overflowsBottom);
      var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === "start" && overflowsRight || isVertical && variation === "end" && overflowsLeft || !isVertical && variation === "start" && overflowsBottom || !isVertical && variation === "end" && overflowsTop);
      var flippedVariation = flippedVariationByRef || flippedVariationByContent;

      if (overlapsRef || overflowsBoundaries || flippedVariation) {
        data.flipped = true;

        if (overlapsRef || overflowsBoundaries) {
          placement = flipOrder[index + 1];
        }

        if (flippedVariation) {
          variation = getOppositeVariation(variation);
        }

        data.placement = placement + (variation ? "-" + variation : "");
        data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
        data = runModifiers(data.instance.modifiers, data, "flip");
      }
    });
    return data;
  }

  function keepTogether(data) {
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;
    var placement = data.placement.split("-")[0];
    var floor = Math.floor;
    var isVertical = ["top", "bottom"].indexOf(placement) !== -1;
    var side = isVertical ? "right" : "bottom";
    var opSide = isVertical ? "left" : "top";
    var measurement = isVertical ? "width" : "height";

    if (popper[side] < floor(reference[opSide])) {
      data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
    }

    if (popper[opSide] > floor(reference[side])) {
      data.offsets.popper[opSide] = floor(reference[side]);
    }

    return data;
  }

  function toValue(str, measurement, popperOffsets, referenceOffsets) {
    var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
    var value = +split[1];
    var unit = split[2];

    if (!value) {
      return str;
    }

    if (unit.indexOf("%") === 0) {
      var element = void 0;

      switch (unit) {
        case "%p":
          element = popperOffsets;
          break;

        case "%":
        case "%r":
        default:
          element = referenceOffsets;
      }

      var rect = getClientRect(element);
      return rect[measurement] / 100 * value;
    } else if (unit === "vh" || unit === "vw") {
      var size = void 0;

      if (unit === "vh") {
        size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      } else {
        size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      }

      return size / 100 * value;
    } else {
      return value;
    }
  }

  function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
    var offsets = [0, 0];
    var useHeight = ["right", "left"].indexOf(basePlacement) !== -1;
    var fragments = offset.split(/(\+|\-)/).map(function (frag) {
      return frag.trim();
    });
    var divider = fragments.indexOf(find(fragments, function (frag) {
      return frag.search(/,|\s/) !== -1;
    }));

    if (fragments[divider] && fragments[divider].indexOf(",") === -1) {
      console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
    }

    var splitRegex = /\s*,\s*|\s+/;
    var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];
    ops = ops.map(function (op, index) {
      var measurement = (index === 1 ? !useHeight : useHeight) ? "height" : "width";
      var mergeWithPrevious = false;
      return op.reduce(function (a, b) {
        if (a[a.length - 1] === "" && ["+", "-"].indexOf(b) !== -1) {
          a[a.length - 1] = b;
          mergeWithPrevious = true;
          return a;
        } else if (mergeWithPrevious) {
          a[a.length - 1] += b;
          mergeWithPrevious = false;
          return a;
        } else {
          return a.concat(b);
        }
      }, []).map(function (str) {
        return toValue(str, measurement, popperOffsets, referenceOffsets);
      });
    });
    ops.forEach(function (op, index) {
      op.forEach(function (frag, index2) {
        if (isNumeric(frag)) {
          offsets[index] += frag * (op[index2 - 1] === "-" ? -1 : 1);
        }
      });
    });
    return offsets;
  }

  function offset(data, _ref) {
    var offset = _ref.offset;
    var placement = data.placement,
        _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;
    var basePlacement = placement.split("-")[0];
    var offsets = void 0;

    if (isNumeric(+offset)) {
      offsets = [+offset, 0];
    } else {
      offsets = parseOffset(offset, popper, reference, basePlacement);
    }

    if (basePlacement === "left") {
      popper.top += offsets[0];
      popper.left -= offsets[1];
    } else if (basePlacement === "right") {
      popper.top += offsets[0];
      popper.left += offsets[1];
    } else if (basePlacement === "top") {
      popper.left += offsets[0];
      popper.top -= offsets[1];
    } else if (basePlacement === "bottom") {
      popper.left += offsets[0];
      popper.top += offsets[1];
    }

    data.popper = popper;
    return data;
  }

  function preventOverflow(data, options) {
    var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

    if (data.instance.reference === boundariesElement) {
      boundariesElement = getOffsetParent(boundariesElement);
    }

    var transformProp = getSupportedPropertyName("transform");
    var popperStyles = data.instance.popper.style;
    var top = popperStyles.top,
        left = popperStyles.left,
        transform = popperStyles[transformProp];
    popperStyles.top = "";
    popperStyles.left = "";
    popperStyles[transformProp] = "";
    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);
    popperStyles.top = top;
    popperStyles.left = left;
    popperStyles[transformProp] = transform;
    options.boundaries = boundaries;
    var order = options.priority;
    var popper = data.offsets.popper;
    var check = {
      primary: function primary(placement) {
        var value = popper[placement];

        if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
          value = Math.max(popper[placement], boundaries[placement]);
        }

        return defineProperty({}, placement, value);
      },
      secondary: function secondary(placement) {
        var mainSide = placement === "right" ? "left" : "top";
        var value = popper[mainSide];

        if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
          value = Math.min(popper[mainSide], boundaries[placement] - (placement === "right" ? popper.width : popper.height));
        }

        return defineProperty({}, mainSide, value);
      }
    };
    order.forEach(function (placement) {
      var side = ["left", "top"].indexOf(placement) !== -1 ? "primary" : "secondary";
      popper = _extends({}, popper, check[side](placement));
    });
    data.offsets.popper = popper;
    return data;
  }

  function shift(data) {
    var placement = data.placement;
    var basePlacement = placement.split("-")[0];
    var shiftvariation = placement.split("-")[1];

    if (shiftvariation) {
      var _data$offsets = data.offsets,
          reference = _data$offsets.reference,
          popper = _data$offsets.popper;
      var isVertical = ["bottom", "top"].indexOf(basePlacement) !== -1;
      var side = isVertical ? "left" : "top";
      var measurement = isVertical ? "width" : "height";
      var shiftOffsets = {
        start: defineProperty({}, side, reference[side]),
        end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
      };
      data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
    }

    return data;
  }

  function hide(data) {
    if (!isModifierRequired(data.instance.modifiers, "hide", "preventOverflow")) {
      return data;
    }

    var refRect = data.offsets.reference;
    var bound = find(data.instance.modifiers, function (modifier) {
      return modifier.name === "preventOverflow";
    }).boundaries;

    if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
      if (data.hide === true) {
        return data;
      }

      data.hide = true;
      data.attributes["x-out-of-boundaries"] = "";
    } else {
      if (data.hide === false) {
        return data;
      }

      data.hide = false;
      data.attributes["x-out-of-boundaries"] = false;
    }

    return data;
  }

  function inner(data) {
    var placement = data.placement;
    var basePlacement = placement.split("-")[0];
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;
    var isHoriz = ["left", "right"].indexOf(basePlacement) !== -1;
    var subtractLength = ["top", "left"].indexOf(basePlacement) === -1;
    popper[isHoriz ? "left" : "top"] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? "width" : "height"] : 0);
    data.placement = getOppositePlacement(placement);
    data.offsets.popper = getClientRect(popper);
    return data;
  }

  var modifiers = {
    shift: {
      order: 100,
      enabled: true,
      fn: shift
    },
    offset: {
      order: 200,
      enabled: true,
      fn: offset,
      offset: 0
    },
    preventOverflow: {
      order: 300,
      enabled: true,
      fn: preventOverflow,
      priority: ["left", "right", "top", "bottom"],
      padding: 5,
      boundariesElement: "scrollParent"
    },
    keepTogether: {
      order: 400,
      enabled: true,
      fn: keepTogether
    },
    arrow: {
      order: 500,
      enabled: true,
      fn: arrow,
      element: "[x-arrow]"
    },
    flip: {
      order: 600,
      enabled: true,
      fn: flip,
      behavior: "flip",
      padding: 5,
      boundariesElement: "viewport",
      flipVariations: false,
      flipVariationsByContent: false
    },
    inner: {
      order: 700,
      enabled: false,
      fn: inner
    },
    hide: {
      order: 800,
      enabled: true,
      fn: hide
    },
    computeStyle: {
      order: 850,
      enabled: true,
      fn: computeStyle,
      gpuAcceleration: true,
      x: "bottom",
      y: "right"
    },
    applyStyle: {
      order: 900,
      enabled: true,
      fn: applyStyle,
      onLoad: applyStyleOnLoad,
      gpuAcceleration: undefined
    }
  };
  var Defaults = {
    placement: "bottom",
    positionFixed: false,
    eventsEnabled: true,
    removeOnDestroy: false,
    onCreate: function onCreate() {},
    onUpdate: function onUpdate() {},
    modifiers: modifiers
  };

  var Popper = function () {
    function Popper(reference, popper) {
      var _this = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      classCallCheck(this, Popper);

      this.scheduleUpdate = function () {
        return requestAnimationFrame(_this.update);
      };

      this.update = debounce(this.update.bind(this));
      this.options = _extends({}, Popper.Defaults, options);
      this.state = {
        isDestroyed: false,
        isCreated: false,
        scrollParents: []
      };
      this.reference = reference && reference.jquery ? reference[0] : reference;
      this.popper = popper && popper.jquery ? popper[0] : popper;
      this.options.modifiers = {};
      Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
        _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
      });
      this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
        return _extends({
          name: name
        }, _this.options.modifiers[name]);
      }).sort(function (a, b) {
        return a.order - b.order;
      });
      this.modifiers.forEach(function (modifierOptions) {
        if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
          modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
        }
      });
      this.update();
      var eventsEnabled = this.options.eventsEnabled;

      if (eventsEnabled) {
        this.enableEventListeners();
      }

      this.state.eventsEnabled = eventsEnabled;
    }

    createClass(Popper, [{
      key: "update",
      value: function update$$1() {
        return update.call(this);
      }
    }, {
      key: "destroy",
      value: function destroy$$1() {
        return destroy.call(this);
      }
    }, {
      key: "enableEventListeners",
      value: function enableEventListeners$$1() {
        return enableEventListeners.call(this);
      }
    }, {
      key: "disableEventListeners",
      value: function disableEventListeners$$1() {
        return disableEventListeners.call(this);
      }
    }]);
    return Popper;
  }();

  Popper.Utils = (typeof window !== "undefined" ? window : global).PopperUtils;
  Popper.placements = placements;
  Popper.Defaults = Defaults;
  var bootstrap = createCommonjsModule(function (module, exports) {
    (function (global, factory) {
      factory(exports, jquery, Popper);
    })(commonjsGlobal, function (exports, $, Popper) {
      $ = $ && $.hasOwnProperty("default") ? $["default"] : $;
      Popper = Popper && Popper.hasOwnProperty("default") ? Popper["default"] : Popper;

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }

        return obj;
      }

      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);

        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
          keys.push.apply(keys, symbols);
        }

        return keys;
      }

      function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};

          if (i % 2) {
            ownKeys(Object(source), true).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }

        return target;
      }

      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
      }

      var TRANSITION_END = "transitionend";
      var MAX_UID = 1e6;
      var MILLISECONDS_MULTIPLIER = 1e3;

      function toType(obj) {
        return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
      }

      function getSpecialTransitionEndEvent() {
        return {
          bindType: TRANSITION_END,
          delegateType: TRANSITION_END,
          handle: function handle(event) {
            if ($(event.target).is(this)) {
              return event.handleObj.handler.apply(this, arguments);
            }

            return undefined;
          }
        };
      }

      function transitionEndEmulator(duration) {
        var _this = this;

        var called = false;
        $(this).one(Util.TRANSITION_END, function () {
          called = true;
        });
        setTimeout(function () {
          if (!called) {
            Util.triggerTransitionEnd(_this);
          }
        }, duration);
        return this;
      }

      function setTransitionEndSupport() {
        $.fn.emulateTransitionEnd = transitionEndEmulator;
        $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
      }

      var Util = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function getUID(prefix) {
          do {
            prefix += ~~(Math.random() * MAX_UID);
          } while (document.getElementById(prefix));

          return prefix;
        },
        getSelectorFromElement: function getSelectorFromElement(element) {
          var selector = element.getAttribute("data-target");

          if (!selector || selector === "#") {
            var hrefAttr = element.getAttribute("href");
            selector = hrefAttr && hrefAttr !== "#" ? hrefAttr.trim() : "";
          }

          try {
            return document.querySelector(selector) ? selector : null;
          } catch (err) {
            return null;
          }
        },
        getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
          if (!element) {
            return 0;
          }

          var transitionDuration = $(element).css("transition-duration");
          var transitionDelay = $(element).css("transition-delay");
          var floatTransitionDuration = parseFloat(transitionDuration);
          var floatTransitionDelay = parseFloat(transitionDelay);

          if (!floatTransitionDuration && !floatTransitionDelay) {
            return 0;
          }

          transitionDuration = transitionDuration.split(",")[0];
          transitionDelay = transitionDelay.split(",")[0];
          return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
        },
        reflow: function reflow(element) {
          return element.offsetHeight;
        },
        triggerTransitionEnd: function triggerTransitionEnd(element) {
          $(element).trigger(TRANSITION_END);
        },
        supportsTransitionEnd: function supportsTransitionEnd() {
          return Boolean(TRANSITION_END);
        },
        isElement: function isElement(obj) {
          return (obj[0] || obj).nodeType;
        },
        typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
          for (var property in configTypes) {
            if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
              var expectedTypes = configTypes[property];
              var value = config[property];
              var valueType = value && Util.isElement(value) ? "element" : toType(value);

              if (!new RegExp(expectedTypes).test(valueType)) {
                throw new Error(componentName.toUpperCase() + ": " + ('Option "' + property + '" provided type "' + valueType + '" ') + ('but expected type "' + expectedTypes + '".'));
              }
            }
          }
        },
        findShadowRoot: function findShadowRoot(element) {
          if (!document.documentElement.attachShadow) {
            return null;
          }

          if (typeof element.getRootNode === "function") {
            var root = element.getRootNode();
            return root instanceof ShadowRoot ? root : null;
          }

          if (element instanceof ShadowRoot) {
            return element;
          }

          if (!element.parentNode) {
            return null;
          }

          return Util.findShadowRoot(element.parentNode);
        },
        jQueryDetection: function jQueryDetection() {
          if (typeof $ === "undefined") {
            throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
          }

          var version = $.fn.jquery.split(" ")[0].split(".");
          var minMajor = 1;
          var ltMajor = 2;
          var minMinor = 9;
          var minPatch = 1;
          var maxMajor = 4;

          if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
            throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
          }
        }
      };
      Util.jQueryDetection();
      setTransitionEndSupport();
      var NAME = "alert";
      var VERSION = "4.4.1";
      var DATA_KEY = "bs.alert";
      var EVENT_KEY = "." + DATA_KEY;
      var DATA_API_KEY = ".data-api";
      var JQUERY_NO_CONFLICT = $.fn[NAME];
      var Selector = {
        DISMISS: '[data-dismiss="alert"]'
      };
      var Event = {
        CLOSE: "close" + EVENT_KEY,
        CLOSED: "closed" + EVENT_KEY,
        CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
      };
      var ClassName = {
        ALERT: "alert",
        FADE: "fade",
        SHOW: "show"
      };

      var Alert = function () {
        function Alert(element) {
          this._element = element;
        }

        var _proto = Alert.prototype;

        _proto.close = function close(element) {
          var rootElement = this._element;

          if (element) {
            rootElement = this._getRootElement(element);
          }

          var customEvent = this._triggerCloseEvent(rootElement);

          if (customEvent.isDefaultPrevented()) {
            return;
          }

          this._removeElement(rootElement);
        };

        _proto.dispose = function dispose() {
          $.removeData(this._element, DATA_KEY);
          this._element = null;
        };

        _proto._getRootElement = function _getRootElement(element) {
          var selector = Util.getSelectorFromElement(element);
          var parent = false;

          if (selector) {
            parent = document.querySelector(selector);
          }

          if (!parent) {
            parent = $(element).closest("." + ClassName.ALERT)[0];
          }

          return parent;
        };

        _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
          var closeEvent = $.Event(Event.CLOSE);
          $(element).trigger(closeEvent);
          return closeEvent;
        };

        _proto._removeElement = function _removeElement(element) {
          var _this = this;

          $(element).removeClass(ClassName.SHOW);

          if (!$(element).hasClass(ClassName.FADE)) {
            this._destroyElement(element);

            return;
          }

          var transitionDuration = Util.getTransitionDurationFromElement(element);
          $(element).one(Util.TRANSITION_END, function (event) {
            return _this._destroyElement(element, event);
          }).emulateTransitionEnd(transitionDuration);
        };

        _proto._destroyElement = function _destroyElement(element) {
          $(element).detach().trigger(Event.CLOSED).remove();
        };

        Alert._jQueryInterface = function _jQueryInterface(config) {
          return this.each(function () {
            var $element = $(this);
            var data = $element.data(DATA_KEY);

            if (!data) {
              data = new Alert(this);
              $element.data(DATA_KEY, data);
            }

            if (config === "close") {
              data[config](this);
            }
          });
        };

        Alert._handleDismiss = function _handleDismiss(alertInstance) {
          return function (event) {
            if (event) {
              event.preventDefault();
            }

            alertInstance.close(this);
          };
        };

        _createClass(Alert, null, [{
          key: "VERSION",
          get: function get() {
            return VERSION;
          }
        }]);

        return Alert;
      }();

      $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
      $.fn[NAME] = Alert._jQueryInterface;
      $.fn[NAME].Constructor = Alert;

      $.fn[NAME].noConflict = function () {
        $.fn[NAME] = JQUERY_NO_CONFLICT;
        return Alert._jQueryInterface;
      };

      var NAME$1 = "button";
      var VERSION$1 = "4.4.1";
      var DATA_KEY$1 = "bs.button";
      var EVENT_KEY$1 = "." + DATA_KEY$1;
      var DATA_API_KEY$1 = ".data-api";
      var JQUERY_NO_CONFLICT$1 = $.fn[NAME$1];
      var ClassName$1 = {
        ACTIVE: "active",
        BUTTON: "btn",
        FOCUS: "focus"
      };
      var Selector$1 = {
        DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
        DATA_TOGGLES: '[data-toggle="buttons"]',
        DATA_TOGGLE: '[data-toggle="button"]',
        DATA_TOGGLES_BUTTONS: '[data-toggle="buttons"] .btn',
        INPUT: 'input:not([type="hidden"])',
        ACTIVE: ".active",
        BUTTON: ".btn"
      };
      var Event$1 = {
        CLICK_DATA_API: "click" + EVENT_KEY$1 + DATA_API_KEY$1,
        FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1),
        LOAD_DATA_API: "load" + EVENT_KEY$1 + DATA_API_KEY$1
      };

      var Button = function () {
        function Button(element) {
          this._element = element;
        }

        var _proto = Button.prototype;

        _proto.toggle = function toggle() {
          var triggerChangeEvent = true;
          var addAriaPressed = true;
          var rootElement = $(this._element).closest(Selector$1.DATA_TOGGLES)[0];

          if (rootElement) {
            var input = this._element.querySelector(Selector$1.INPUT);

            if (input) {
              if (input.type === "radio") {
                if (input.checked && this._element.classList.contains(ClassName$1.ACTIVE)) {
                  triggerChangeEvent = false;
                } else {
                  var activeElement = rootElement.querySelector(Selector$1.ACTIVE);

                  if (activeElement) {
                    $(activeElement).removeClass(ClassName$1.ACTIVE);
                  }
                }
              } else if (input.type === "checkbox") {
                if (this._element.tagName === "LABEL" && input.checked === this._element.classList.contains(ClassName$1.ACTIVE)) {
                  triggerChangeEvent = false;
                }
              } else {
                triggerChangeEvent = false;
              }

              if (triggerChangeEvent) {
                input.checked = !this._element.classList.contains(ClassName$1.ACTIVE);
                $(input).trigger("change");
              }

              input.focus();
              addAriaPressed = false;
            }
          }

          if (!(this._element.hasAttribute("disabled") || this._element.classList.contains("disabled"))) {
            if (addAriaPressed) {
              this._element.setAttribute("aria-pressed", !this._element.classList.contains(ClassName$1.ACTIVE));
            }

            if (triggerChangeEvent) {
              $(this._element).toggleClass(ClassName$1.ACTIVE);
            }
          }
        };

        _proto.dispose = function dispose() {
          $.removeData(this._element, DATA_KEY$1);
          this._element = null;
        };

        Button._jQueryInterface = function _jQueryInterface(config) {
          return this.each(function () {
            var data = $(this).data(DATA_KEY$1);

            if (!data) {
              data = new Button(this);
              $(this).data(DATA_KEY$1, data);
            }

            if (config === "toggle") {
              data[config]();
            }
          });
        };

        _createClass(Button, null, [{
          key: "VERSION",
          get: function get() {
            return VERSION$1;
          }
        }]);

        return Button;
      }();

      $(document).on(Event$1.CLICK_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
        var button = event.target;

        if (!$(button).hasClass(ClassName$1.BUTTON)) {
          button = $(button).closest(Selector$1.BUTTON)[0];
        }

        if (!button || button.hasAttribute("disabled") || button.classList.contains("disabled")) {
          event.preventDefault();
        } else {
          var inputBtn = button.querySelector(Selector$1.INPUT);

          if (inputBtn && (inputBtn.hasAttribute("disabled") || inputBtn.classList.contains("disabled"))) {
            event.preventDefault();
            return;
          }

          Button._jQueryInterface.call($(button), "toggle");
        }
      }).on(Event$1.FOCUS_BLUR_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
        var button = $(event.target).closest(Selector$1.BUTTON)[0];
        $(button).toggleClass(ClassName$1.FOCUS, /^focus(in)?$/.test(event.type));
      });
      $(window).on(Event$1.LOAD_DATA_API, function () {
        var buttons = [].slice.call(document.querySelectorAll(Selector$1.DATA_TOGGLES_BUTTONS));

        for (var i = 0, len = buttons.length; i < len; i++) {
          var button = buttons[i];
          var input = button.querySelector(Selector$1.INPUT);

          if (input.checked || input.hasAttribute("checked")) {
            button.classList.add(ClassName$1.ACTIVE);
          } else {
            button.classList.remove(ClassName$1.ACTIVE);
          }
        }

        buttons = [].slice.call(document.querySelectorAll(Selector$1.DATA_TOGGLE));

        for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
          var _button = buttons[_i];

          if (_button.getAttribute("aria-pressed") === "true") {
            _button.classList.add(ClassName$1.ACTIVE);
          } else {
            _button.classList.remove(ClassName$1.ACTIVE);
          }
        }
      });
      $.fn[NAME$1] = Button._jQueryInterface;
      $.fn[NAME$1].Constructor = Button;

      $.fn[NAME$1].noConflict = function () {
        $.fn[NAME$1] = JQUERY_NO_CONFLICT$1;
        return Button._jQueryInterface;
      };

      var NAME$2 = "carousel";
      var VERSION$2 = "4.4.1";
      var DATA_KEY$2 = "bs.carousel";
      var EVENT_KEY$2 = "." + DATA_KEY$2;
      var DATA_API_KEY$2 = ".data-api";
      var JQUERY_NO_CONFLICT$2 = $.fn[NAME$2];
      var ARROW_LEFT_KEYCODE = 37;
      var ARROW_RIGHT_KEYCODE = 39;
      var TOUCHEVENT_COMPAT_WAIT = 500;
      var SWIPE_THRESHOLD = 40;
      var Default = {
        interval: 5e3,
        keyboard: true,
        slide: false,
        pause: "hover",
        wrap: true,
        touch: true
      };
      var DefaultType = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
      };
      var Direction = {
        NEXT: "next",
        PREV: "prev",
        LEFT: "left",
        RIGHT: "right"
      };
      var Event$2 = {
        SLIDE: "slide" + EVENT_KEY$2,
        SLID: "slid" + EVENT_KEY$2,
        KEYDOWN: "keydown" + EVENT_KEY$2,
        MOUSEENTER: "mouseenter" + EVENT_KEY$2,
        MOUSELEAVE: "mouseleave" + EVENT_KEY$2,
        TOUCHSTART: "touchstart" + EVENT_KEY$2,
        TOUCHMOVE: "touchmove" + EVENT_KEY$2,
        TOUCHEND: "touchend" + EVENT_KEY$2,
        POINTERDOWN: "pointerdown" + EVENT_KEY$2,
        POINTERUP: "pointerup" + EVENT_KEY$2,
        DRAG_START: "dragstart" + EVENT_KEY$2,
        LOAD_DATA_API: "load" + EVENT_KEY$2 + DATA_API_KEY$2,
        CLICK_DATA_API: "click" + EVENT_KEY$2 + DATA_API_KEY$2
      };
      var ClassName$2 = {
        CAROUSEL: "carousel",
        ACTIVE: "active",
        SLIDE: "slide",
        RIGHT: "carousel-item-right",
        LEFT: "carousel-item-left",
        NEXT: "carousel-item-next",
        PREV: "carousel-item-prev",
        ITEM: "carousel-item",
        POINTER_EVENT: "pointer-event"
      };
      var Selector$2 = {
        ACTIVE: ".active",
        ACTIVE_ITEM: ".active.carousel-item",
        ITEM: ".carousel-item",
        ITEM_IMG: ".carousel-item img",
        NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
        INDICATORS: ".carousel-indicators",
        DATA_SLIDE: "[data-slide], [data-slide-to]",
        DATA_RIDE: '[data-ride="carousel"]'
      };
      var PointerType = {
        TOUCH: "touch",
        PEN: "pen"
      };

      var Carousel = function () {
        function Carousel(element, config) {
          this._items = null;
          this._interval = null;
          this._activeElement = null;
          this._isPaused = false;
          this._isSliding = false;
          this.touchTimeout = null;
          this.touchStartX = 0;
          this.touchDeltaX = 0;
          this._config = this._getConfig(config);
          this._element = element;
          this._indicatorsElement = this._element.querySelector(Selector$2.INDICATORS);
          this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
          this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

          this._addEventListeners();
        }

        var _proto = Carousel.prototype;

        _proto.next = function next() {
          if (!this._isSliding) {
            this._slide(Direction.NEXT);
          }
        };

        _proto.nextWhenVisible = function nextWhenVisible() {
          if (!document.hidden && $(this._element).is(":visible") && $(this._element).css("visibility") !== "hidden") {
            this.next();
          }
        };

        _proto.prev = function prev() {
          if (!this._isSliding) {
            this._slide(Direction.PREV);
          }
        };

        _proto.pause = function pause(event) {
          if (!event) {
            this._isPaused = true;
          }

          if (this._element.querySelector(Selector$2.NEXT_PREV)) {
            Util.triggerTransitionEnd(this._element);
            this.cycle(true);
          }

          clearInterval(this._interval);
          this._interval = null;
        };

        _proto.cycle = function cycle(event) {
          if (!event) {
            this._isPaused = false;
          }

          if (this._interval) {
            clearInterval(this._interval);
            this._interval = null;
          }

          if (this._config.interval && !this._isPaused) {
            this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
          }
        };

        _proto.to = function to(index) {
          var _this = this;

          this._activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);

          var activeIndex = this._getItemIndex(this._activeElement);

          if (index > this._items.length - 1 || index < 0) {
            return;
          }

          if (this._isSliding) {
            $(this._element).one(Event$2.SLID, function () {
              return _this.to(index);
            });
            return;
          }

          if (activeIndex === index) {
            this.pause();
            this.cycle();
            return;
          }

          var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

          this._slide(direction, this._items[index]);
        };

        _proto.dispose = function dispose() {
          $(this._element).off(EVENT_KEY$2);
          $.removeData(this._element, DATA_KEY$2);
          this._items = null;
          this._config = null;
          this._element = null;
          this._interval = null;
          this._isPaused = null;
          this._isSliding = null;
          this._activeElement = null;
          this._indicatorsElement = null;
        };

        _proto._getConfig = function _getConfig(config) {
          config = _objectSpread2({}, Default, {}, config);
          Util.typeCheckConfig(NAME$2, config, DefaultType);
          return config;
        };

        _proto._handleSwipe = function _handleSwipe() {
          var absDeltax = Math.abs(this.touchDeltaX);

          if (absDeltax <= SWIPE_THRESHOLD) {
            return;
          }

          var direction = absDeltax / this.touchDeltaX;
          this.touchDeltaX = 0;

          if (direction > 0) {
            this.prev();
          }

          if (direction < 0) {
            this.next();
          }
        };

        _proto._addEventListeners = function _addEventListeners() {
          var _this2 = this;

          if (this._config.keyboard) {
            $(this._element).on(Event$2.KEYDOWN, function (event) {
              return _this2._keydown(event);
            });
          }

          if (this._config.pause === "hover") {
            $(this._element).on(Event$2.MOUSEENTER, function (event) {
              return _this2.pause(event);
            }).on(Event$2.MOUSELEAVE, function (event) {
              return _this2.cycle(event);
            });
          }

          if (this._config.touch) {
            this._addTouchEventListeners();
          }
        };

        _proto._addTouchEventListeners = function _addTouchEventListeners() {
          var _this3 = this;

          if (!this._touchSupported) {
            return;
          }

          var start = function start(event) {
            if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
              _this3.touchStartX = event.originalEvent.clientX;
            } else if (!_this3._pointerEvent) {
              _this3.touchStartX = event.originalEvent.touches[0].clientX;
            }
          };

          var move = function move(event) {
            if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
              _this3.touchDeltaX = 0;
            } else {
              _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
            }
          };

          var end = function end(event) {
            if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
              _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
            }

            _this3._handleSwipe();

            if (_this3._config.pause === "hover") {
              _this3.pause();

              if (_this3.touchTimeout) {
                clearTimeout(_this3.touchTimeout);
              }

              _this3.touchTimeout = setTimeout(function (event) {
                return _this3.cycle(event);
              }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
            }
          };

          $(this._element.querySelectorAll(Selector$2.ITEM_IMG)).on(Event$2.DRAG_START, function (e) {
            return e.preventDefault();
          });

          if (this._pointerEvent) {
            $(this._element).on(Event$2.POINTERDOWN, function (event) {
              return start(event);
            });
            $(this._element).on(Event$2.POINTERUP, function (event) {
              return end(event);
            });

            this._element.classList.add(ClassName$2.POINTER_EVENT);
          } else {
            $(this._element).on(Event$2.TOUCHSTART, function (event) {
              return start(event);
            });
            $(this._element).on(Event$2.TOUCHMOVE, function (event) {
              return move(event);
            });
            $(this._element).on(Event$2.TOUCHEND, function (event) {
              return end(event);
            });
          }
        };

        _proto._keydown = function _keydown(event) {
          if (/input|textarea/i.test(event.target.tagName)) {
            return;
          }

          switch (event.which) {
            case ARROW_LEFT_KEYCODE:
              event.preventDefault();
              this.prev();
              break;

            case ARROW_RIGHT_KEYCODE:
              event.preventDefault();
              this.next();
              break;
          }
        };

        _proto._getItemIndex = function _getItemIndex(element) {
          this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(Selector$2.ITEM)) : [];
          return this._items.indexOf(element);
        };

        _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
          var isNextDirection = direction === Direction.NEXT;
          var isPrevDirection = direction === Direction.PREV;

          var activeIndex = this._getItemIndex(activeElement);

          var lastItemIndex = this._items.length - 1;
          var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

          if (isGoingToWrap && !this._config.wrap) {
            return activeElement;
          }

          var delta = direction === Direction.PREV ? -1 : 1;
          var itemIndex = (activeIndex + delta) % this._items.length;
          return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
        };

        _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
          var targetIndex = this._getItemIndex(relatedTarget);

          var fromIndex = this._getItemIndex(this._element.querySelector(Selector$2.ACTIVE_ITEM));

          var slideEvent = $.Event(Event$2.SLIDE, {
            relatedTarget: relatedTarget,
            direction: eventDirectionName,
            from: fromIndex,
            to: targetIndex
          });
          $(this._element).trigger(slideEvent);
          return slideEvent;
        };

        _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
          if (this._indicatorsElement) {
            var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(Selector$2.ACTIVE));
            $(indicators).removeClass(ClassName$2.ACTIVE);

            var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

            if (nextIndicator) {
              $(nextIndicator).addClass(ClassName$2.ACTIVE);
            }
          }
        };

        _proto._slide = function _slide(direction, element) {
          var _this4 = this;

          var activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);

          var activeElementIndex = this._getItemIndex(activeElement);

          var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

          var nextElementIndex = this._getItemIndex(nextElement);

          var isCycling = Boolean(this._interval);
          var directionalClassName;
          var orderClassName;
          var eventDirectionName;

          if (direction === Direction.NEXT) {
            directionalClassName = ClassName$2.LEFT;
            orderClassName = ClassName$2.NEXT;
            eventDirectionName = Direction.LEFT;
          } else {
            directionalClassName = ClassName$2.RIGHT;
            orderClassName = ClassName$2.PREV;
            eventDirectionName = Direction.RIGHT;
          }

          if (nextElement && $(nextElement).hasClass(ClassName$2.ACTIVE)) {
            this._isSliding = false;
            return;
          }

          var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

          if (slideEvent.isDefaultPrevented()) {
            return;
          }

          if (!activeElement || !nextElement) {
            return;
          }

          this._isSliding = true;

          if (isCycling) {
            this.pause();
          }

          this._setActiveIndicatorElement(nextElement);

          var slidEvent = $.Event(Event$2.SLID, {
            relatedTarget: nextElement,
            direction: eventDirectionName,
            from: activeElementIndex,
            to: nextElementIndex
          });

          if ($(this._element).hasClass(ClassName$2.SLIDE)) {
            $(nextElement).addClass(orderClassName);
            Util.reflow(nextElement);
            $(activeElement).addClass(directionalClassName);
            $(nextElement).addClass(directionalClassName);
            var nextElementInterval = parseInt(nextElement.getAttribute("data-interval"), 10);

            if (nextElementInterval) {
              this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
              this._config.interval = nextElementInterval;
            } else {
              this._config.interval = this._config.defaultInterval || this._config.interval;
            }

            var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
            $(activeElement).one(Util.TRANSITION_END, function () {
              $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName$2.ACTIVE);
              $(activeElement).removeClass(ClassName$2.ACTIVE + " " + orderClassName + " " + directionalClassName);
              _this4._isSliding = false;
              setTimeout(function () {
                return $(_this4._element).trigger(slidEvent);
              }, 0);
            }).emulateTransitionEnd(transitionDuration);
          } else {
            $(activeElement).removeClass(ClassName$2.ACTIVE);
            $(nextElement).addClass(ClassName$2.ACTIVE);
            this._isSliding = false;
            $(this._element).trigger(slidEvent);
          }

          if (isCycling) {
            this.cycle();
          }
        };

        Carousel._jQueryInterface = function _jQueryInterface(config) {
          return this.each(function () {
            var data = $(this).data(DATA_KEY$2);

            var _config = _objectSpread2({}, Default, {}, $(this).data());

            if (typeof config === "object") {
              _config = _objectSpread2({}, _config, {}, config);
            }

            var action = typeof config === "string" ? config : _config.slide;

            if (!data) {
              data = new Carousel(this, _config);
              $(this).data(DATA_KEY$2, data);
            }

            if (typeof config === "number") {
              data.to(config);
            } else if (typeof action === "string") {
              if (typeof data[action] === "undefined") {
                throw new TypeError('No method named "' + action + '"');
              }

              data[action]();
            } else if (_config.interval && _config.ride) {
              data.pause();
              data.cycle();
            }
          });
        };

        Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
          var selector = Util.getSelectorFromElement(this);

          if (!selector) {
            return;
          }

          var target = $(selector)[0];

          if (!target || !$(target).hasClass(ClassName$2.CAROUSEL)) {
            return;
          }

          var config = _objectSpread2({}, $(target).data(), {}, $(this).data());

          var slideIndex = this.getAttribute("data-slide-to");

          if (slideIndex) {
            config.interval = false;
          }

          Carousel._jQueryInterface.call($(target), config);

          if (slideIndex) {
            $(target).data(DATA_KEY$2).to(slideIndex);
          }

          event.preventDefault();
        };

        _createClass(Carousel, null, [{
          key: "VERSION",
          get: function get() {
            return VERSION$2;
          }
        }, {
          key: "Default",
          get: function get() {
            return Default;
          }
        }]);

        return Carousel;
      }();

      $(document).on(Event$2.CLICK_DATA_API, Selector$2.DATA_SLIDE, Carousel._dataApiClickHandler);
      $(window).on(Event$2.LOAD_DATA_API, function () {
        var carousels = [].slice.call(document.querySelectorAll(Selector$2.DATA_RIDE));

        for (var i = 0, len = carousels.length; i < len; i++) {
          var $carousel = $(carousels[i]);

          Carousel._jQueryInterface.call($carousel, $carousel.data());
        }
      });
      $.fn[NAME$2] = Carousel._jQueryInterface;
      $.fn[NAME$2].Constructor = Carousel;

      $.fn[NAME$2].noConflict = function () {
        $.fn[NAME$2] = JQUERY_NO_CONFLICT$2;
        return Carousel._jQueryInterface;
      };

      var NAME$3 = "collapse";
      var VERSION$3 = "4.4.1";
      var DATA_KEY$3 = "bs.collapse";
      var EVENT_KEY$3 = "." + DATA_KEY$3;
      var DATA_API_KEY$3 = ".data-api";
      var JQUERY_NO_CONFLICT$3 = $.fn[NAME$3];
      var Default$1 = {
        toggle: true,
        parent: ""
      };
      var DefaultType$1 = {
        toggle: "boolean",
        parent: "(string|element)"
      };
      var Event$3 = {
        SHOW: "show" + EVENT_KEY$3,
        SHOWN: "shown" + EVENT_KEY$3,
        HIDE: "hide" + EVENT_KEY$3,
        HIDDEN: "hidden" + EVENT_KEY$3,
        CLICK_DATA_API: "click" + EVENT_KEY$3 + DATA_API_KEY$3
      };
      var ClassName$3 = {
        SHOW: "show",
        COLLAPSE: "collapse",
        COLLAPSING: "collapsing",
        COLLAPSED: "collapsed"
      };
      var Dimension = {
        WIDTH: "width",
        HEIGHT: "height"
      };
      var Selector$3 = {
        ACTIVES: ".show, .collapsing",
        DATA_TOGGLE: '[data-toggle="collapse"]'
      };

      var Collapse = function () {
        function Collapse(element, config) {
          this._isTransitioning = false;
          this._element = element;
          this._config = this._getConfig(config);
          this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + element.id + '"],' + ('[data-toggle="collapse"][data-target="#' + element.id + '"]')));
          var toggleList = [].slice.call(document.querySelectorAll(Selector$3.DATA_TOGGLE));

          for (var i = 0, len = toggleList.length; i < len; i++) {
            var elem = toggleList[i];
            var selector = Util.getSelectorFromElement(elem);
            var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
              return foundElem === element;
            });

            if (selector !== null && filterElement.length > 0) {
              this._selector = selector;

              this._triggerArray.push(elem);
            }
          }

          this._parent = this._config.parent ? this._getParent() : null;

          if (!this._config.parent) {
            this._addAriaAndCollapsedClass(this._element, this._triggerArray);
          }

          if (this._config.toggle) {
            this.toggle();
          }
        }

        var _proto = Collapse.prototype;

        _proto.toggle = function toggle() {
          if ($(this._element).hasClass(ClassName$3.SHOW)) {
            this.hide();
          } else {
            this.show();
          }
        };

        _proto.show = function show() {
          var _this = this;

          if (this._isTransitioning || $(this._element).hasClass(ClassName$3.SHOW)) {
            return;
          }

          var actives;
          var activesData;

          if (this._parent) {
            actives = [].slice.call(this._parent.querySelectorAll(Selector$3.ACTIVES)).filter(function (elem) {
              if (typeof _this._config.parent === "string") {
                return elem.getAttribute("data-parent") === _this._config.parent;
              }

              return elem.classList.contains(ClassName$3.COLLAPSE);
            });

            if (actives.length === 0) {
              actives = null;
            }
          }

          if (actives) {
            activesData = $(actives).not(this._selector).data(DATA_KEY$3);

            if (activesData && activesData._isTransitioning) {
              return;
            }
          }

          var startEvent = $.Event(Event$3.SHOW);
          $(this._element).trigger(startEvent);

          if (startEvent.isDefaultPrevented()) {
            return;
          }

          if (actives) {
            Collapse._jQueryInterface.call($(actives).not(this._selector), "hide");

            if (!activesData) {
              $(actives).data(DATA_KEY$3, null);
            }
          }

          var dimension = this._getDimension();

          $(this._element).removeClass(ClassName$3.COLLAPSE).addClass(ClassName$3.COLLAPSING);
          this._element.style[dimension] = 0;

          if (this._triggerArray.length) {
            $(this._triggerArray).removeClass(ClassName$3.COLLAPSED).attr("aria-expanded", true);
          }

          this.setTransitioning(true);

          var complete = function complete() {
            $(_this._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).addClass(ClassName$3.SHOW);
            _this._element.style[dimension] = "";

            _this.setTransitioning(false);

            $(_this._element).trigger(Event$3.SHOWN);
          };

          var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
          var scrollSize = "scroll" + capitalizedDimension;
          var transitionDuration = Util.getTransitionDurationFromElement(this._element);
          $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
          this._element.style[dimension] = this._element[scrollSize] + "px";
        };

        _proto.hide = function hide() {
          var _this2 = this;

          if (this._isTransitioning || !$(this._element).hasClass(ClassName$3.SHOW)) {
            return;
          }

          var startEvent = $.Event(Event$3.HIDE);
          $(this._element).trigger(startEvent);

          if (startEvent.isDefaultPrevented()) {
            return;
          }

          var dimension = this._getDimension();

          this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
          Util.reflow(this._element);
          $(this._element).addClass(ClassName$3.COLLAPSING).removeClass(ClassName$3.COLLAPSE).removeClass(ClassName$3.SHOW);
          var triggerArrayLength = this._triggerArray.length;

          if (triggerArrayLength > 0) {
            for (var i = 0; i < triggerArrayLength; i++) {
              var trigger = this._triggerArray[i];
              var selector = Util.getSelectorFromElement(trigger);

              if (selector !== null) {
                var $elem = $([].slice.call(document.querySelectorAll(selector)));

                if (!$elem.hasClass(ClassName$3.SHOW)) {
                  $(trigger).addClass(ClassName$3.COLLAPSED).attr("aria-expanded", false);
                }
              }
            }
          }

          this.setTransitioning(true);

          var complete = function complete() {
            _this2.setTransitioning(false);

            $(_this2._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).trigger(Event$3.HIDDEN);
          };

          this._element.style[dimension] = "";
          var transitionDuration = Util.getTransitionDurationFromElement(this._element);
          $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        };

        _proto.setTransitioning = function setTransitioning(isTransitioning) {
          this._isTransitioning = isTransitioning;
        };

        _proto.dispose = function dispose() {
          $.removeData(this._element, DATA_KEY$3);
          this._config = null;
          this._parent = null;
          this._element = null;
          this._triggerArray = null;
          this._isTransitioning = null;
        };

        _proto._getConfig = function _getConfig(config) {
          config = _objectSpread2({}, Default$1, {}, config);
          config.toggle = Boolean(config.toggle);
          Util.typeCheckConfig(NAME$3, config, DefaultType$1);
          return config;
        };

        _proto._getDimension = function _getDimension() {
          var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
          return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
        };

        _proto._getParent = function _getParent() {
          var _this3 = this;

          var parent;

          if (Util.isElement(this._config.parent)) {
            parent = this._config.parent;

            if (typeof this._config.parent.jquery !== "undefined") {
              parent = this._config.parent[0];
            }
          } else {
            parent = document.querySelector(this._config.parent);
          }

          var selector = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
          var children = [].slice.call(parent.querySelectorAll(selector));
          $(children).each(function (i, element) {
            _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
          });
          return parent;
        };

        _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
          var isOpen = $(element).hasClass(ClassName$3.SHOW);

          if (triggerArray.length) {
            $(triggerArray).toggleClass(ClassName$3.COLLAPSED, !isOpen).attr("aria-expanded", isOpen);
          }
        };

        Collapse._getTargetFromElement = function _getTargetFromElement(element) {
          var selector = Util.getSelectorFromElement(element);
          return selector ? document.querySelector(selector) : null;
        };

        Collapse._jQueryInterface = function _jQueryInterface(config) {
          return this.each(function () {
            var $this = $(this);
            var data = $this.data(DATA_KEY$3);

            var _config = _objectSpread2({}, Default$1, {}, $this.data(), {}, typeof config === "object" && config ? config : {});

            if (!data && _config.toggle && /show|hide/.test(config)) {
              _config.toggle = false;
            }

            if (!data) {
              data = new Collapse(this, _config);
              $this.data(DATA_KEY$3, data);
            }

            if (typeof config === "string") {
              if (typeof data[config] === "undefined") {
                throw new TypeError('No method named "' + config + '"');
              }

              data[config]();
            }
          });
        };

        _createClass(Collapse, null, [{
          key: "VERSION",
          get: function get() {
            return VERSION$3;
          }
        }, {
          key: "Default",
          get: function get() {
            return Default$1;
          }
        }]);

        return Collapse;
      }();

      $(document).on(Event$3.CLICK_DATA_API, Selector$3.DATA_TOGGLE, function (event) {
        if (event.currentTarget.tagName === "A") {
          event.preventDefault();
        }

        var $trigger = $(this);
        var selector = Util.getSelectorFromElement(this);
        var selectors = [].slice.call(document.querySelectorAll(selector));
        $(selectors).each(function () {
          var $target = $(this);
          var data = $target.data(DATA_KEY$3);
          var config = data ? "toggle" : $trigger.data();

          Collapse._jQueryInterface.call($target, config);
        });
      });
      $.fn[NAME$3] = Collapse._jQueryInterface;
      $.fn[NAME$3].Constructor = Collapse;

      $.fn[NAME$3].noConflict = function () {
        $.fn[NAME$3] = JQUERY_NO_CONFLICT$3;
        return Collapse._jQueryInterface;
      };

      var NAME$4 = "dropdown";
      var VERSION$4 = "4.4.1";
      var DATA_KEY$4 = "bs.dropdown";
      var EVENT_KEY$4 = "." + DATA_KEY$4;
      var DATA_API_KEY$4 = ".data-api";
      var JQUERY_NO_CONFLICT$4 = $.fn[NAME$4];
      var ESCAPE_KEYCODE = 27;
      var SPACE_KEYCODE = 32;
      var TAB_KEYCODE = 9;
      var ARROW_UP_KEYCODE = 38;
      var ARROW_DOWN_KEYCODE = 40;
      var RIGHT_MOUSE_BUTTON_WHICH = 3;
      var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
      var Event$4 = {
        HIDE: "hide" + EVENT_KEY$4,
        HIDDEN: "hidden" + EVENT_KEY$4,
        SHOW: "show" + EVENT_KEY$4,
        SHOWN: "shown" + EVENT_KEY$4,
        CLICK: "click" + EVENT_KEY$4,
        CLICK_DATA_API: "click" + EVENT_KEY$4 + DATA_API_KEY$4,
        KEYDOWN_DATA_API: "keydown" + EVENT_KEY$4 + DATA_API_KEY$4,
        KEYUP_DATA_API: "keyup" + EVENT_KEY$4 + DATA_API_KEY$4
      };
      var ClassName$4 = {
        DISABLED: "disabled",
        SHOW: "show",
        DROPUP: "dropup",
        DROPRIGHT: "dropright",
        DROPLEFT: "dropleft",
        MENURIGHT: "dropdown-menu-right",
        MENULEFT: "dropdown-menu-left",
        POSITION_STATIC: "position-static"
      };
      var Selector$4 = {
        DATA_TOGGLE: '[data-toggle="dropdown"]',
        FORM_CHILD: ".dropdown form",
        MENU: ".dropdown-menu",
        NAVBAR_NAV: ".navbar-nav",
        VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
      };
      var AttachmentMap = {
        TOP: "top-start",
        TOPEND: "top-end",
        BOTTOM: "bottom-start",
        BOTTOMEND: "bottom-end",
        RIGHT: "right-start",
        RIGHTEND: "right-end",
        LEFT: "left-start",
        LEFTEND: "left-end"
      };
      var Default$2 = {
        offset: 0,
        flip: true,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null
      };
      var DefaultType$2 = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)"
      };

      var Dropdown = function () {
        function Dropdown(element, config) {
          this._element = element;
          this._popper = null;
          this._config = this._getConfig(config);
          this._menu = this._getMenuElement();
          this._inNavbar = this._detectNavbar();

          this._addEventListeners();
        }

        var _proto = Dropdown.prototype;

        _proto.toggle = function toggle() {
          if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED)) {
            return;
          }

          var isActive = $(this._menu).hasClass(ClassName$4.SHOW);

          Dropdown._clearMenus();

          if (isActive) {
            return;
          }

          this.show(true);
        };

        _proto.show = function show(usePopper) {
          if (usePopper === void 0) {
            usePopper = false;
          }

          if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || $(this._menu).hasClass(ClassName$4.SHOW)) {
            return;
          }

          var relatedTarget = {
            relatedTarget: this._element
          };
          var showEvent = $.Event(Event$4.SHOW, relatedTarget);

          var parent = Dropdown._getParentFromElement(this._element);

          $(parent).trigger(showEvent);

          if (showEvent.isDefaultPrevented()) {
            return;
          }

          if (!this._inNavbar && usePopper) {
            if (typeof Popper === "undefined") {
              throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
            }

            var referenceElement = this._element;

            if (this._config.reference === "parent") {
              referenceElement = parent;
            } else if (Util.isElement(this._config.reference)) {
              referenceElement = this._config.reference;

              if (typeof this._config.reference.jquery !== "undefined") {
                referenceElement = this._config.reference[0];
              }
            }

            if (this._config.boundary !== "scrollParent") {
              $(parent).addClass(ClassName$4.POSITION_STATIC);
            }

            this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
          }

          if ("ontouchstart" in document.documentElement && $(parent).closest(Selector$4.NAVBAR_NAV).length === 0) {
            $(document.body).children().on("mouseover", null, $.noop);
          }

          this._element.focus();

          this._element.setAttribute("aria-expanded", true);

          $(this._menu).toggleClass(ClassName$4.SHOW);
          $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.SHOWN, relatedTarget));
        };

        _proto.hide = function hide() {
          if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || !$(this._menu).hasClass(ClassName$4.SHOW)) {
            return;
          }

          var relatedTarget = {
            relatedTarget: this._element
          };
          var hideEvent = $.Event(Event$4.HIDE, relatedTarget);

          var parent = Dropdown._getParentFromElement(this._element);

          $(parent).trigger(hideEvent);

          if (hideEvent.isDefaultPrevented()) {
            return;
          }

          if (this._popper) {
            this._popper.destroy();
          }

          $(this._menu).toggleClass(ClassName$4.SHOW);
          $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
        };

        _proto.dispose = function dispose() {
          $.removeData(this._element, DATA_KEY$4);
          $(this._element).off(EVENT_KEY$4);
          this._element = null;
          this._menu = null;

          if (this._popper !== null) {
            this._popper.destroy();

            this._popper = null;
          }
        };

        _proto.update = function update() {
          this._inNavbar = this._detectNavbar();

          if (this._popper !== null) {
            this._popper.scheduleUpdate();
          }
        };

        _proto._addEventListeners = function _addEventListeners() {
          var _this = this;

          $(this._element).on(Event$4.CLICK, function (event) {
            event.preventDefault();
            event.stopPropagation();

            _this.toggle();
          });
        };

        _proto._getConfig = function _getConfig(config) {
          config = _objectSpread2({}, this.constructor.Default, {}, $(this._element).data(), {}, config);
          Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
          return config;
        };

        _proto._getMenuElement = function _getMenuElement() {
          if (!this._menu) {
            var parent = Dropdown._getParentFromElement(this._element);

            if (parent) {
              this._menu = parent.querySelector(Selector$4.MENU);
            }
          }

          return this._menu;
        };

        _proto._getPlacement = function _getPlacement() {
          var $parentDropdown = $(this._element.parentNode);
          var placement = AttachmentMap.BOTTOM;

          if ($parentDropdown.hasClass(ClassName$4.DROPUP)) {
            placement = AttachmentMap.TOP;

            if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
              placement = AttachmentMap.TOPEND;
            }
          } else if ($parentDropdown.hasClass(ClassName$4.DROPRIGHT)) {
            placement = AttachmentMap.RIGHT;
          } else if ($parentDropdown.hasClass(ClassName$4.DROPLEFT)) {
            placement = AttachmentMap.LEFT;
          } else if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
            placement = AttachmentMap.BOTTOMEND;
          }

          return placement;
        };

        _proto._detectNavbar = function _detectNavbar() {
          return $(this._element).closest(".navbar").length > 0;
        };

        _proto._getOffset = function _getOffset() {
          var _this2 = this;

          var offset = {};

          if (typeof this._config.offset === "function") {
            offset.fn = function (data) {
              data.offsets = _objectSpread2({}, data.offsets, {}, _this2._config.offset(data.offsets, _this2._element) || {});
              return data;
            };
          } else {
            offset.offset = this._config.offset;
          }

          return offset;
        };

        _proto._getPopperConfig = function _getPopperConfig() {
          var popperConfig = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: {
                enabled: this._config.flip
              },
              preventOverflow: {
                boundariesElement: this._config.boundary
              }
            }
          };

          if (this._config.display === "static") {
            popperConfig.modifiers.applyStyle = {
              enabled: false
            };
          }

          return _objectSpread2({}, popperConfig, {}, this._config.popperConfig);
        };

        Dropdown._jQueryInterface = function _jQueryInterface(config) {
          return this.each(function () {
            var data = $(this).data(DATA_KEY$4);

            var _config = typeof config === "object" ? config : null;

            if (!data) {
              data = new Dropdown(this, _config);
              $(this).data(DATA_KEY$4, data);
            }

            if (typeof config === "string") {
              if (typeof data[config] === "undefined") {
                throw new TypeError('No method named "' + config + '"');
              }

              data[config]();
            }
          });
        };

        Dropdown._clearMenus = function _clearMenus(event) {
          if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === "keyup" && event.which !== TAB_KEYCODE)) {
            return;
          }

          var toggles = [].slice.call(document.querySelectorAll(Selector$4.DATA_TOGGLE));

          for (var i = 0, len = toggles.length; i < len; i++) {
            var parent = Dropdown._getParentFromElement(toggles[i]);

            var context = $(toggles[i]).data(DATA_KEY$4);
            var relatedTarget = {
              relatedTarget: toggles[i]
            };

            if (event && event.type === "click") {
              relatedTarget.clickEvent = event;
            }

            if (!context) {
              continue;
            }

            var dropdownMenu = context._menu;

            if (!$(parent).hasClass(ClassName$4.SHOW)) {
              continue;
            }

            if (event && (event.type === "click" && /input|textarea/i.test(event.target.tagName) || event.type === "keyup" && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
              continue;
            }

            var hideEvent = $.Event(Event$4.HIDE, relatedTarget);
            $(parent).trigger(hideEvent);

            if (hideEvent.isDefaultPrevented()) {
              continue;
            }

            if ("ontouchstart" in document.documentElement) {
              $(document.body).children().off("mouseover", null, $.noop);
            }

            toggles[i].setAttribute("aria-expanded", "false");

            if (context._popper) {
              context._popper.destroy();
            }

            $(dropdownMenu).removeClass(ClassName$4.SHOW);
            $(parent).removeClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
          }
        };

        Dropdown._getParentFromElement = function _getParentFromElement(element) {
          var parent;
          var selector = Util.getSelectorFromElement(element);

          if (selector) {
            parent = document.querySelector(selector);
          }

          return parent || element.parentNode;
        };

        Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
          if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $(event.target).closest(Selector$4.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
            return;
          }

          event.preventDefault();
          event.stopPropagation();

          if (this.disabled || $(this).hasClass(ClassName$4.DISABLED)) {
            return;
          }

          var parent = Dropdown._getParentFromElement(this);

          var isActive = $(parent).hasClass(ClassName$4.SHOW);

          if (!isActive && event.which === ESCAPE_KEYCODE) {
            return;
          }

          if (!isActive || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
            if (event.which === ESCAPE_KEYCODE) {
              var toggle = parent.querySelector(Selector$4.DATA_TOGGLE);
              $(toggle).trigger("focus");
            }

            $(this).trigger("click");
            return;
          }

          var items = [].slice.call(parent.querySelectorAll(Selector$4.VISIBLE_ITEMS)).filter(function (item) {
            return $(item).is(":visible");
          });

          if (items.length === 0) {
            return;
          }

          var index = items.indexOf(event.target);

          if (event.which === ARROW_UP_KEYCODE && index > 0) {
            index--;
          }

          if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
            index++;
          }

          if (index < 0) {
            index = 0;
          }

          items[index].focus();
        };

        _createClass(Dropdown, null, [{
          key: "VERSION",
          get: function get() {
            return VERSION$4;
          }
        }, {
          key: "Default",
          get: function get() {
            return Default$2;
          }
        }, {
          key: "DefaultType",
          get: function get() {
            return DefaultType$2;
          }
        }]);

        return Dropdown;
      }();

      $(document).on(Event$4.KEYDOWN_DATA_API, Selector$4.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event$4.KEYDOWN_DATA_API, Selector$4.MENU, Dropdown._dataApiKeydownHandler).on(Event$4.CLICK_DATA_API + " " + Event$4.KEYUP_DATA_API, Dropdown._clearMenus).on(Event$4.CLICK_DATA_API, Selector$4.DATA_TOGGLE, function (event) {
        event.preventDefault();
        event.stopPropagation();

        Dropdown._jQueryInterface.call($(this), "toggle");
      }).on(Event$4.CLICK_DATA_API, Selector$4.FORM_CHILD, function (e) {
        e.stopPropagation();
      });
      $.fn[NAME$4] = Dropdown._jQueryInterface;
      $.fn[NAME$4].Constructor = Dropdown;

      $.fn[NAME$4].noConflict = function () {
        $.fn[NAME$4] = JQUERY_NO_CONFLICT$4;
        return Dropdown._jQueryInterface;
      };

      var NAME$5 = "modal";
      var VERSION$5 = "4.4.1";
      var DATA_KEY$5 = "bs.modal";
      var EVENT_KEY$5 = "." + DATA_KEY$5;
      var DATA_API_KEY$5 = ".data-api";
      var JQUERY_NO_CONFLICT$5 = $.fn[NAME$5];
      var ESCAPE_KEYCODE$1 = 27;
      var Default$3 = {
        backdrop: true,
        keyboard: true,
        focus: true,
        show: true
      };
      var DefaultType$3 = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
      };
      var Event$5 = {
        HIDE: "hide" + EVENT_KEY$5,
        HIDE_PREVENTED: "hidePrevented" + EVENT_KEY$5,
        HIDDEN: "hidden" + EVENT_KEY$5,
        SHOW: "show" + EVENT_KEY$5,
        SHOWN: "shown" + EVENT_KEY$5,
        FOCUSIN: "focusin" + EVENT_KEY$5,
        RESIZE: "resize" + EVENT_KEY$5,
        CLICK_DISMISS: "click.dismiss" + EVENT_KEY$5,
        KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY$5,
        MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY$5,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY$5,
        CLICK_DATA_API: "click" + EVENT_KEY$5 + DATA_API_KEY$5
      };
      var ClassName$5 = {
        SCROLLABLE: "modal-dialog-scrollable",
        SCROLLBAR_MEASURER: "modal-scrollbar-measure",
        BACKDROP: "modal-backdrop",
        OPEN: "modal-open",
        FADE: "fade",
        SHOW: "show",
        STATIC: "modal-static"
      };
      var Selector$5 = {
        DIALOG: ".modal-dialog",
        MODAL_BODY: ".modal-body",
        DATA_TOGGLE: '[data-toggle="modal"]',
        DATA_DISMISS: '[data-dismiss="modal"]',
        FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        STICKY_CONTENT: ".sticky-top"
      };

      var Modal = function () {
        function Modal(element, config) {
          this._config = this._getConfig(config);
          this._element = element;
          this._dialog = element.querySelector(Selector$5.DIALOG);
          this._backdrop = null;
          this._isShown = false;
          this._isBodyOverflowing = false;
          this._ignoreBackdropClick = false;
          this._isTransitioning = false;
          this._scrollbarWidth = 0;
        }

        var _proto = Modal.prototype;

        _proto.toggle = function toggle(relatedTarget) {
          return this._isShown ? this.hide() : this.show(relatedTarget);
        };

        _proto.show = function show(relatedTarget) {
          var _this = this;

          if (this._isShown || this._isTransitioning) {
            return;
          }

          if ($(this._element).hasClass(ClassName$5.FADE)) {
            this._isTransitioning = true;
          }

          var showEvent = $.Event(Event$5.SHOW, {
            relatedTarget: relatedTarget
          });
          $(this._element).trigger(showEvent);

          if (this._isShown || showEvent.isDefaultPrevented()) {
            return;
          }

          this._isShown = true;

          this._checkScrollbar();

          this._setScrollbar();

          this._adjustDialog();

          this._setEscapeEvent();

          this._setResizeEvent();

          $(this._element).on(Event$5.CLICK_DISMISS, Selector$5.DATA_DISMISS, function (event) {
            return _this.hide(event);
          });
          $(this._dialog).on(Event$5.MOUSEDOWN_DISMISS, function () {
            $(_this._element).one(Event$5.MOUSEUP_DISMISS, function (event) {
              if ($(event.target).is(_this._element)) {
                _this._ignoreBackdropClick = true;
              }
            });
          });

          this._showBackdrop(function () {
            return _this._showElement(relatedTarget);
          });
        };

        _proto.hide = function hide(event) {
          var _this2 = this;

          if (event) {
            event.preventDefault();
          }

          if (!this._isShown || this._isTransitioning) {
            return;
          }

          var hideEvent = $.Event(Event$5.HIDE);
          $(this._element).trigger(hideEvent);

          if (!this._isShown || hideEvent.isDefaultPrevented()) {
            return;
          }

          this._isShown = false;
          var transition = $(this._element).hasClass(ClassName$5.FADE);

          if (transition) {
            this._isTransitioning = true;
          }

          this._setEscapeEvent();

          this._setResizeEvent();

          $(document).off(Event$5.FOCUSIN);
          $(this._element).removeClass(ClassName$5.SHOW);
          $(this._element).off(Event$5.CLICK_DISMISS);
          $(this._dialog).off(Event$5.MOUSEDOWN_DISMISS);

          if (transition) {
            var transitionDuration = Util.getTransitionDurationFromElement(this._element);
            $(this._element).one(Util.TRANSITION_END, function (event) {
              return _this2._hideModal(event);
            }).emulateTransitionEnd(transitionDuration);
          } else {
            this._hideModal();
          }
        };

        _proto.dispose = function dispose() {
          [window, this._element, this._dialog].forEach(function (htmlElement) {
            return $(htmlElement).off(EVENT_KEY$5);
          });
          $(document).off(Event$5.FOCUSIN);
          $.removeData(this._element, DATA_KEY$5);
          this._config = null;
          this._element = null;
          this._dialog = null;
          this._backdrop = null;
          this._isShown = null;
          this._isBodyOverflowing = null;
          this._ignoreBackdropClick = null;
          this._isTransitioning = null;
          this._scrollbarWidth = null;
        };

        _proto.handleUpdate = function handleUpdate() {
          this._adjustDialog();
        };

        _proto._getConfig = function _getConfig(config) {
          config = _objectSpread2({}, Default$3, {}, config);
          Util.typeCheckConfig(NAME$5, config, DefaultType$3);
          return config;
        };

        _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
          var _this3 = this;

          if (this._config.backdrop === "static") {
            var hideEventPrevented = $.Event(Event$5.HIDE_PREVENTED);
            $(this._element).trigger(hideEventPrevented);

            if (hideEventPrevented.defaultPrevented) {
              return;
            }

            this._element.classList.add(ClassName$5.STATIC);

            var modalTransitionDuration = Util.getTransitionDurationFromElement(this._element);
            $(this._element).one(Util.TRANSITION_END, function () {
              _this3._element.classList.remove(ClassName$5.STATIC);
            }).emulateTransitionEnd(modalTransitionDuration);

            this._element.focus();
          } else {
            this.hide();
          }
        };

        _proto._showElement = function _showElement(relatedTarget) {
          var _this4 = this;

          var transition = $(this._element).hasClass(ClassName$5.FADE);
          var modalBody = this._dialog ? this._dialog.querySelector(Selector$5.MODAL_BODY) : null;

          if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
            document.body.appendChild(this._element);
          }

          this._element.style.display = "block";

          this._element.removeAttribute("aria-hidden");

          this._element.setAttribute("aria-modal", true);

          if ($(this._dialog).hasClass(ClassName$5.SCROLLABLE) && modalBody) {
            modalBody.scrollTop = 0;
          } else {
            this._element.scrollTop = 0;
          }

          if (transition) {
            Util.reflow(this._element);
          }

          $(this._element).addClass(ClassName$5.SHOW);

          if (this._config.focus) {
            this._enforceFocus();
          }

          var shownEvent = $.Event(Event$5.SHOWN, {
            relatedTarget: relatedTarget
          });

          var transitionComplete = function transitionComplete() {
            if (_this4._config.focus) {
              _this4._element.focus();
            }

            _this4._isTransitioning = false;
            $(_this4._element).trigger(shownEvent);
          };

          if (transition) {
            var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
            $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
          } else {
            transitionComplete();
          }
        };

        _proto._enforceFocus = function _enforceFocus() {
          var _this5 = this;

          $(document).off(Event$5.FOCUSIN).on(Event$5.FOCUSIN, function (event) {
            if (document !== event.target && _this5._element !== event.target && $(_this5._element).has(event.target).length === 0) {
              _this5._element.focus();
            }
          });
        };

        _proto._setEscapeEvent = function _setEscapeEvent() {
          var _this6 = this;

          if (this._isShown && this._config.keyboard) {
            $(this._element).on(Event$5.KEYDOWN_DISMISS, function (event) {
              if (event.which === ESCAPE_KEYCODE$1) {
                _this6._triggerBackdropTransition();
              }
            });
          } else if (!this._isShown) {
            $(this._element).off(Event$5.KEYDOWN_DISMISS);
          }
        };

        _proto._setResizeEvent = function _setResizeEvent() {
          var _this7 = this;

          if (this._isShown) {
            $(window).on(Event$5.RESIZE, function (event) {
              return _this7.handleUpdate(event);
            });
          } else {
            $(window).off(Event$5.RESIZE);
          }
        };

        _proto._hideModal = function _hideModal() {
          var _this8 = this;

          this._element.style.display = "none";

          this._element.setAttribute("aria-hidden", true);

          this._element.removeAttribute("aria-modal");

          this._isTransitioning = false;

          this._showBackdrop(function () {
            $(document.body).removeClass(ClassName$5.OPEN);

            _this8._resetAdjustments();

            _this8._resetScrollbar();

            $(_this8._element).trigger(Event$5.HIDDEN);
          });
        };

        _proto._removeBackdrop = function _removeBackdrop() {
          if (this._backdrop) {
            $(this._backdrop).remove();
            this._backdrop = null;
          }
        };

        _proto._showBackdrop = function _showBackdrop(callback) {
          var _this9 = this;

          var animate = $(this._element).hasClass(ClassName$5.FADE) ? ClassName$5.FADE : "";

          if (this._isShown && this._config.backdrop) {
            this._backdrop = document.createElement("div");
            this._backdrop.className = ClassName$5.BACKDROP;

            if (animate) {
              this._backdrop.classList.add(animate);
            }

            $(this._backdrop).appendTo(document.body);
            $(this._element).on(Event$5.CLICK_DISMISS, function (event) {
              if (_this9._ignoreBackdropClick) {
                _this9._ignoreBackdropClick = false;
                return;
              }

              if (event.target !== event.currentTarget) {
                return;
              }

              _this9._triggerBackdropTransition();
            });

            if (animate) {
              Util.reflow(this._backdrop);
            }

            $(this._backdrop).addClass(ClassName$5.SHOW);

            if (!callback) {
              return;
            }

            if (!animate) {
              callback();
              return;
            }

            var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
            $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
          } else if (!this._isShown && this._backdrop) {
            $(this._backdrop).removeClass(ClassName$5.SHOW);

            var callbackRemove = function callbackRemove() {
              _this9._removeBackdrop();

              if (callback) {
                callback();
              }
            };

            if ($(this._element).hasClass(ClassName$5.FADE)) {
              var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

              $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
            } else {
              callbackRemove();
            }
          } else if (callback) {
            callback();
          }
        };

        _proto._adjustDialog = function _adjustDialog() {
          var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

          if (!this._isBodyOverflowing && isModalOverflowing) {
            this._element.style.paddingLeft = this._scrollbarWidth + "px";
          }

          if (this._isBodyOverflowing && !isModalOverflowing) {
            this._element.style.paddingRight = this._scrollbarWidth + "px";
          }
        };

        _proto._resetAdjustments = function _resetAdjustments() {
          this._element.style.paddingLeft = "";
          this._element.style.paddingRight = "";
        };

        _proto._checkScrollbar = function _checkScrollbar() {
          var rect = document.body.getBoundingClientRect();
          this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
          this._scrollbarWidth = this._getScrollbarWidth();
        };

        _proto._setScrollbar = function _setScrollbar() {
          var _this10 = this;

          if (this._isBodyOverflowing) {
            var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
            var stickyContent = [].slice.call(document.querySelectorAll(Selector$5.STICKY_CONTENT));
            $(fixedContent).each(function (index, element) {
              var actualPadding = element.style.paddingRight;
              var calculatedPadding = $(element).css("padding-right");
              $(element).data("padding-right", actualPadding).css("padding-right", parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
            });
            $(stickyContent).each(function (index, element) {
              var actualMargin = element.style.marginRight;
              var calculatedMargin = $(element).css("margin-right");
              $(element).data("margin-right", actualMargin).css("margin-right", parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
            });
            var actualPadding = document.body.style.paddingRight;
            var calculatedPadding = $(document.body).css("padding-right");
            $(document.body).data("padding-right", actualPadding).css("padding-right", parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
          }

          $(document.body).addClass(ClassName$5.OPEN);
        };

        _proto._resetScrollbar = function _resetScrollbar() {
          var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
          $(fixedContent).each(function (index, element) {
            var padding = $(element).data("padding-right");
            $(element).removeData("padding-right");
            element.style.paddingRight = padding ? padding : "";
          });
          var elements = [].slice.call(document.querySelectorAll("" + Selector$5.STICKY_CONTENT));
          $(elements).each(function (index, element) {
            var margin = $(element).data("margin-right");

            if (typeof margin !== "undefined") {
              $(element).css("margin-right", margin).removeData("margin-right");
            }
          });
          var padding = $(document.body).data("padding-right");
          $(document.body).removeData("padding-right");
          document.body.style.paddingRight = padding ? padding : "";
        };

        _proto._getScrollbarWidth = function _getScrollbarWidth() {
          var scrollDiv = document.createElement("div");
          scrollDiv.className = ClassName$5.SCROLLBAR_MEASURER;
          document.body.appendChild(scrollDiv);
          var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
          document.body.removeChild(scrollDiv);
          return scrollbarWidth;
        };

        Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
          return this.each(function () {
            var data = $(this).data(DATA_KEY$5);

            var _config = _objectSpread2({}, Default$3, {}, $(this).data(), {}, typeof config === "object" && config ? config : {});

            if (!data) {
              data = new Modal(this, _config);
              $(this).data(DATA_KEY$5, data);
            }

            if (typeof config === "string") {
              if (typeof data[config] === "undefined") {
                throw new TypeError('No method named "' + config + '"');
              }

              data[config](relatedTarget);
            } else if (_config.show) {
              data.show(relatedTarget);
            }
          });
        };

        _createClass(Modal, null, [{
          key: "VERSION",
          get: function get() {
            return VERSION$5;
          }
        }, {
          key: "Default",
          get: function get() {
            return Default$3;
          }
        }]);

        return Modal;
      }();

      $(document).on(Event$5.CLICK_DATA_API, Selector$5.DATA_TOGGLE, function (event) {
        var _this11 = this;

        var target;
        var selector = Util.getSelectorFromElement(this);

        if (selector) {
          target = document.querySelector(selector);
        }

        var config = $(target).data(DATA_KEY$5) ? "toggle" : _objectSpread2({}, $(target).data(), {}, $(this).data());

        if (this.tagName === "A" || this.tagName === "AREA") {
          event.preventDefault();
        }

        var $target = $(target).one(Event$5.SHOW, function (showEvent) {
          if (showEvent.isDefaultPrevented()) {
            return;
          }

          $target.one(Event$5.HIDDEN, function () {
            if ($(_this11).is(":visible")) {
              _this11.focus();
            }
          });
        });

        Modal._jQueryInterface.call($(target), config, this);
      });
      $.fn[NAME$5] = Modal._jQueryInterface;
      $.fn[NAME$5].Constructor = Modal;

      $.fn[NAME$5].noConflict = function () {
        $.fn[NAME$5] = JQUERY_NO_CONFLICT$5;
        return Modal._jQueryInterface;
      };

      var uriAttrs = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"];
      var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
      var DefaultWhitelist = {
        "*": ["class", "dir", "id", "lang", "role", ARIA_ATTRIBUTE_PATTERN],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
      };
      var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
      var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

      function allowedAttribute(attr, allowedAttributeList) {
        var attrName = attr.nodeName.toLowerCase();

        if (allowedAttributeList.indexOf(attrName) !== -1) {
          if (uriAttrs.indexOf(attrName) !== -1) {
            return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
          }

          return true;
        }

        var regExp = allowedAttributeList.filter(function (attrRegex) {
          return attrRegex instanceof RegExp;
        });

        for (var i = 0, l = regExp.length; i < l; i++) {
          if (attrName.match(regExp[i])) {
            return true;
          }
        }

        return false;
      }

      function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
        if (unsafeHtml.length === 0) {
          return unsafeHtml;
        }

        if (sanitizeFn && typeof sanitizeFn === "function") {
          return sanitizeFn(unsafeHtml);
        }

        var domParser = new window.DOMParser();
        var createdDocument = domParser.parseFromString(unsafeHtml, "text/html");
        var whitelistKeys = Object.keys(whiteList);
        var elements = [].slice.call(createdDocument.body.querySelectorAll("*"));

        var _loop = function _loop(i, len) {
          var el = elements[i];
          var elName = el.nodeName.toLowerCase();

          if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
            el.parentNode.removeChild(el);
            return "continue";
          }

          var attributeList = [].slice.call(el.attributes);
          var whitelistedAttributes = [].concat(whiteList["*"] || [], whiteList[elName] || []);
          attributeList.forEach(function (attr) {
            if (!allowedAttribute(attr, whitelistedAttributes)) {
              el.removeAttribute(attr.nodeName);
            }
          });
        };

        for (var i = 0, len = elements.length; i < len; i++) {
          var _ret = _loop(i);

          if (_ret === "continue") continue;
        }

        return createdDocument.body.innerHTML;
      }

      var NAME$6 = "tooltip";
      var VERSION$6 = "4.4.1";
      var DATA_KEY$6 = "bs.tooltip";
      var EVENT_KEY$6 = "." + DATA_KEY$6;
      var JQUERY_NO_CONFLICT$6 = $.fn[NAME$6];
      var CLASS_PREFIX = "bs-tooltip";
      var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", "g");
      var DISALLOWED_ATTRIBUTES = ["sanitize", "whiteList", "sanitizeFn"];
      var DefaultType$4 = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object",
        popperConfig: "(null|object)"
      };
      var AttachmentMap$1 = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
      };
      var Default$4 = {
        animation: true,
        template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: false,
        selector: false,
        placement: "top",
        offset: 0,
        container: false,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        sanitize: true,
        sanitizeFn: null,
        whiteList: DefaultWhitelist,
        popperConfig: null
      };
      var HoverState = {
        SHOW: "show",
        OUT: "out"
      };
      var Event$6 = {
        HIDE: "hide" + EVENT_KEY$6,
        HIDDEN: "hidden" + EVENT_KEY$6,
        SHOW: "show" + EVENT_KEY$6,
        SHOWN: "shown" + EVENT_KEY$6,
        INSERTED: "inserted" + EVENT_KEY$6,
        CLICK: "click" + EVENT_KEY$6,
        FOCUSIN: "focusin" + EVENT_KEY$6,
        FOCUSOUT: "focusout" + EVENT_KEY$6,
        MOUSEENTER: "mouseenter" + EVENT_KEY$6,
        MOUSELEAVE: "mouseleave" + EVENT_KEY$6
      };
      var ClassName$6 = {
        FADE: "fade",
        SHOW: "show"
      };
      var Selector$6 = {
        TOOLTIP: ".tooltip",
        TOOLTIP_INNER: ".tooltip-inner",
        ARROW: ".arrow"
      };
      var Trigger = {
        HOVER: "hover",
        FOCUS: "focus",
        CLICK: "click",
        MANUAL: "manual"
      };

      var Tooltip = function () {
        function Tooltip(element, config) {
          if (typeof Popper === "undefined") {
            throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
          }

          this._isEnabled = true;
          this._timeout = 0;
          this._hoverState = "";
          this._activeTrigger = {};
          this._popper = null;
          this.element = element;
          this.config = this._getConfig(config);
          this.tip = null;

          this._setListeners();
        }

        var _proto = Tooltip.prototype;

        _proto.enable = function enable() {
          this._isEnabled = true;
        };

        _proto.disable = function disable() {
          this._isEnabled = false;
        };

        _proto.toggleEnabled = function toggleEnabled() {
          this._isEnabled = !this._isEnabled;
        };

        _proto.toggle = function toggle(event) {
          if (!this._isEnabled) {
            return;
          }

          if (event) {
            var dataKey = this.constructor.DATA_KEY;
            var context = $(event.currentTarget).data(dataKey);

            if (!context) {
              context = new this.constructor(event.currentTarget, this._getDelegateConfig());
              $(event.currentTarget).data(dataKey, context);
            }

            context._activeTrigger.click = !context._activeTrigger.click;

            if (context._isWithActiveTrigger()) {
              context._enter(null, context);
            } else {
              context._leave(null, context);
            }
          } else {
            if ($(this.getTipElement()).hasClass(ClassName$6.SHOW)) {
              this._leave(null, this);

              return;
            }

            this._enter(null, this);
          }
        };

        _proto.dispose = function dispose() {
          clearTimeout(this._timeout);
          $.removeData(this.element, this.constructor.DATA_KEY);
          $(this.element).off(this.constructor.EVENT_KEY);
          $(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler);

          if (this.tip) {
            $(this.tip).remove();
          }

          this._isEnabled = null;
          this._timeout = null;
          this._hoverState = null;
          this._activeTrigger = null;

          if (this._popper) {
            this._popper.destroy();
          }

          this._popper = null;
          this.element = null;
          this.config = null;
          this.tip = null;
        };

        _proto.show = function show() {
          var _this = this;

          if ($(this.element).css("display") === "none") {
            throw new Error("Please use show on visible elements");
          }

          var showEvent = $.Event(this.constructor.Event.SHOW);

          if (this.isWithContent() && this._isEnabled) {
            $(this.element).trigger(showEvent);
            var shadowRoot = Util.findShadowRoot(this.element);
            var isInTheDom = $.contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

            if (showEvent.isDefaultPrevented() || !isInTheDom) {
              return;
            }

            var tip = this.getTipElement();
            var tipId = Util.getUID(this.constructor.NAME);
            tip.setAttribute("id", tipId);
            this.element.setAttribute("aria-describedby", tipId);
            this.setContent();

            if (this.config.animation) {
              $(tip).addClass(ClassName$6.FADE);
            }

            var placement = typeof this.config.placement === "function" ? this.config.placement.call(this, tip, this.element) : this.config.placement;

            var attachment = this._getAttachment(placement);

            this.addAttachmentClass(attachment);

            var container = this._getContainer();

            $(tip).data(this.constructor.DATA_KEY, this);

            if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
              $(tip).appendTo(container);
            }

            $(this.element).trigger(this.constructor.Event.INSERTED);
            this._popper = new Popper(this.element, tip, this._getPopperConfig(attachment));
            $(tip).addClass(ClassName$6.SHOW);

            if ("ontouchstart" in document.documentElement) {
              $(document.body).children().on("mouseover", null, $.noop);
            }

            var complete = function complete() {
              if (_this.config.animation) {
                _this._fixTransition();
              }

              var prevHoverState = _this._hoverState;
              _this._hoverState = null;
              $(_this.element).trigger(_this.constructor.Event.SHOWN);

              if (prevHoverState === HoverState.OUT) {
                _this._leave(null, _this);
              }
            };

            if ($(this.tip).hasClass(ClassName$6.FADE)) {
              var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
              $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
            } else {
              complete();
            }
          }
        };

        _proto.hide = function hide(callback) {
          var _this2 = this;

          var tip = this.getTipElement();
          var hideEvent = $.Event(this.constructor.Event.HIDE);

          var complete = function complete() {
            if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
              tip.parentNode.removeChild(tip);
            }

            _this2._cleanTipClass();

            _this2.element.removeAttribute("aria-describedby");

            $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

            if (_this2._popper !== null) {
              _this2._popper.destroy();
            }

            if (callback) {
              callback();
            }
          };

          $(this.element).trigger(hideEvent);

          if (hideEvent.isDefaultPrevented()) {
            return;
          }

          $(tip).removeClass(ClassName$6.SHOW);

          if ("ontouchstart" in document.documentElement) {
            $(document.body).children().off("mouseover", null, $.noop);
          }

          this._activeTrigger[Trigger.CLICK] = false;
          this._activeTrigger[Trigger.FOCUS] = false;
          this._activeTrigger[Trigger.HOVER] = false;

          if ($(this.tip).hasClass(ClassName$6.FADE)) {
            var transitionDuration = Util.getTransitionDurationFromElement(tip);
            $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
          } else {
            complete();
          }

          this._hoverState = "";
        };

        _proto.update = function update() {
          if (this._popper !== null) {
            this._popper.scheduleUpdate();
          }
        };

        _proto.isWithContent = function isWithContent() {
          return Boolean(this.getTitle());
        };

        _proto.addAttachmentClass = function addAttachmentClass(attachment) {
          $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
        };

        _proto.getTipElement = function getTipElement() {
          this.tip = this.tip || $(this.config.template)[0];
          return this.tip;
        };

        _proto.setContent = function setContent() {
          var tip = this.getTipElement();
          this.setElementContent($(tip.querySelectorAll(Selector$6.TOOLTIP_INNER)), this.getTitle());
          $(tip).removeClass(ClassName$6.FADE + " " + ClassName$6.SHOW);
        };

        _proto.setElementContent = function setElementContent($element, content) {
          if (typeof content === "object" && (content.nodeType || content.jquery)) {
            if (this.config.html) {
              if (!$(content).parent().is($element)) {
                $element.empty().append(content);
              }
            } else {
              $element.text($(content).text());
            }

            return;
          }

          if (this.config.html) {
            if (this.config.sanitize) {
              content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
            }

            $element.html(content);
          } else {
            $element.text(content);
          }
        };

        _proto.getTitle = function getTitle() {
          var title = this.element.getAttribute("data-original-title");

          if (!title) {
            title = typeof this.config.title === "function" ? this.config.title.call(this.element) : this.config.title;
          }

          return title;
        };

        _proto._getPopperConfig = function _getPopperConfig(attachment) {
          var _this3 = this;

          var defaultBsConfig = {
            placement: attachment,
            modifiers: {
              offset: this._getOffset(),
              flip: {
                behavior: this.config.fallbackPlacement
              },
              arrow: {
                element: Selector$6.ARROW
              },
              preventOverflow: {
                boundariesElement: this.config.boundary
              }
            },
            onCreate: function onCreate(data) {
              if (data.originalPlacement !== data.placement) {
                _this3._handlePopperPlacementChange(data);
              }
            },
            onUpdate: function onUpdate(data) {
              return _this3._handlePopperPlacementChange(data);
            }
          };
          return _objectSpread2({}, defaultBsConfig, {}, this.config.popperConfig);
        };

        _proto._getOffset = function _getOffset() {
          var _this4 = this;

          var offset = {};

          if (typeof this.config.offset === "function") {
            offset.fn = function (data) {
              data.offsets = _objectSpread2({}, data.offsets, {}, _this4.config.offset(data.offsets, _this4.element) || {});
              return data;
            };
          } else {
            offset.offset = this.config.offset;
          }

          return offset;
        };

        _proto._getContainer = function _getContainer() {
          if (this.config.container === false) {
            return document.body;
          }

          if (Util.isElement(this.config.container)) {
            return $(this.config.container);
          }

          return $(document).find(this.config.container);
        };

        _proto._getAttachment = function _getAttachment(placement) {
          return AttachmentMap$1[placement.toUpperCase()];
        };

        _proto._setListeners = function _setListeners() {
          var _this5 = this;

          var triggers = this.config.trigger.split(" ");
          triggers.forEach(function (trigger) {
            if (trigger === "click") {
              $(_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
                return _this5.toggle(event);
              });
            } else if (trigger !== Trigger.MANUAL) {
              var eventIn = trigger === Trigger.HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
              var eventOut = trigger === Trigger.HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
              $(_this5.element).on(eventIn, _this5.config.selector, function (event) {
                return _this5._enter(event);
              }).on(eventOut, _this5.config.selector, function (event) {
                return _this5._leave(event);
              });
            }
          });

          this._hideModalHandler = function () {
            if (_this5.element) {
              _this5.hide();
            }
          };

          $(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler);

          if (this.config.selector) {
            this.config = _objectSpread2({}, this.config, {
              trigger: "manual",
              selector: ""
            });
          } else {
            this._fixTitle();
          }
        };

        _proto._fixTitle = function _fixTitle() {
          var titleType = typeof this.element.getAttribute("data-original-title");

          if (this.element.getAttribute("title") || titleType !== "string") {
            this.element.setAttribute("data-original-title", this.element.getAttribute("title") || "");
            this.element.setAttribute("title", "");
          }
        };

        _proto._enter = function _enter(event, context) {
          var dataKey = this.constructor.DATA_KEY;
          context = context || $(event.currentTarget).data(dataKey);

          if (!context) {
            context = new this.constructor(event.currentTarget, this._getDelegateConfig());
            $(event.currentTarget).data(dataKey, context);
          }

          if (event) {
            context._activeTrigger[event.type === "focusin" ? Trigger.FOCUS : Trigger.HOVER] = true;
          }

          if ($(context.getTipElement()).hasClass(ClassName$6.SHOW) || context._hoverState === HoverState.SHOW) {
            context._hoverState = HoverState.SHOW;
            return;
          }

          clearTimeout(context._timeout);
          context._hoverState = HoverState.SHOW;

          if (!context.config.delay || !context.config.delay.show) {
            context.show();
            return;
          }

          context._timeout = setTimeout(function () {
            if (context._hoverState === HoverState.SHOW) {
              context.show();
            }
          }, context.config.delay.show);
        };

        _proto._leave = function _leave(event, context) {
          var dataKey = this.constructor.DATA_KEY;
          context = context || $(event.currentTarget).data(dataKey);

          if (!context) {
            context = new this.constructor(event.currentTarget, this._getDelegateConfig());
            $(event.currentTarget).data(dataKey, context);
          }

          if (event) {
            context._activeTrigger[event.type === "focusout" ? Trigger.FOCUS : Trigger.HOVER] = false;
          }

          if (context._isWithActiveTrigger()) {
            return;
          }

          clearTimeout(context._timeout);
          context._hoverState = HoverState.OUT;

          if (!context.config.delay || !context.config.delay.hide) {
            context.hide();
            return;
          }

          context._timeout = setTimeout(function () {
            if (context._hoverState === HoverState.OUT) {
              context.hide();
            }
          }, context.config.delay.hide);
        };

        _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
          for (var trigger in this._activeTrigger) {
            if (this._activeTrigger[trigger]) {
              return true;
            }
          }

          return false;
        };

        _proto._getConfig = function _getConfig(config) {
          var dataAttributes = $(this.element).data();
          Object.keys(dataAttributes).forEach(function (dataAttr) {
            if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
              delete dataAttributes[dataAttr];
            }
          });
          config = _objectSpread2({}, this.constructor.Default, {}, dataAttributes, {}, typeof config === "object" && config ? config : {});

          if (typeof config.delay === "number") {
            config.delay = {
              show: config.delay,
              hide: config.delay
            };
          }

          if (typeof config.title === "number") {
            config.title = config.title.toString();
          }

          if (typeof config.content === "number") {
            config.content = config.content.toString();
          }

          Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

          if (config.sanitize) {
            config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
          }

          return config;
        };

        _proto._getDelegateConfig = function _getDelegateConfig() {
          var config = {};

          if (this.config) {
            for (var key in this.config) {
              if (this.constructor.Default[key] !== this.config[key]) {
                config[key] = this.config[key];
              }
            }
          }

          return config;
        };

        _proto._cleanTipClass = function _cleanTipClass() {
          var $tip = $(this.getTipElement());
          var tabClass = $tip.attr("class").match(BSCLS_PREFIX_REGEX);

          if (tabClass !== null && tabClass.length) {
            $tip.removeClass(tabClass.join(""));
          }
        };

        _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
          var popperInstance = popperData.instance;
          this.tip = popperInstance.popper;

          this._cleanTipClass();

          this.addAttachmentClass(this._getAttachment(popperData.placement));
        };

        _proto._fixTransition = function _fixTransition() {
          var tip = this.getTipElement();
          var initConfigAnimation = this.config.animation;

          if (tip.getAttribute("x-placement") !== null) {
            return;
          }

          $(tip).removeClass(ClassName$6.FADE);
          this.config.animation = false;
          this.hide();
          this.show();
          this.config.animation = initConfigAnimation;
        };

        Tooltip._jQueryInterface = function _jQueryInterface(config) {
          return this.each(function () {
            var data = $(this).data(DATA_KEY$6);

            var _config = typeof config === "object" && config;

            if (!data && /dispose|hide/.test(config)) {
              return;
            }

            if (!data) {
              data = new Tooltip(this, _config);
              $(this).data(DATA_KEY$6, data);
            }

            if (typeof config === "string") {
              if (typeof data[config] === "undefined") {
                throw new TypeError('No method named "' + config + '"');
              }

              data[config]();
            }
          });
        };

        _createClass(Tooltip, null, [{
          key: "VERSION",
          get: function get() {
            return VERSION$6;
          }
        }, {
          key: "Default",
          get: function get() {
            return Default$4;
          }
        }, {
          key: "NAME",
          get: function get() {
            return NAME$6;
          }
        }, {
          key: "DATA_KEY",
          get: function get() {
            return DATA_KEY$6;
          }
        }, {
          key: "Event",
          get: function get() {
            return Event$6;
          }
        }, {
          key: "EVENT_KEY",
          get: function get() {
            return EVENT_KEY$6;
          }
        }, {
          key: "DefaultType",
          get: function get() {
            return DefaultType$4;
          }
        }]);

        return Tooltip;
      }();

      $.fn[NAME$6] = Tooltip._jQueryInterface;
      $.fn[NAME$6].Constructor = Tooltip;

      $.fn[NAME$6].noConflict = function () {
        $.fn[NAME$6] = JQUERY_NO_CONFLICT$6;
        return Tooltip._jQueryInterface;
      };

      var NAME$7 = "popover";
      var VERSION$7 = "4.4.1";
      var DATA_KEY$7 = "bs.popover";
      var EVENT_KEY$7 = "." + DATA_KEY$7;
      var JQUERY_NO_CONFLICT$7 = $.fn[NAME$7];
      var CLASS_PREFIX$1 = "bs-popover";
      var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", "g");

      var Default$5 = _objectSpread2({}, Tooltip.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
      });

      var DefaultType$5 = _objectSpread2({}, Tooltip.DefaultType, {
        content: "(string|element|function)"
      });

      var ClassName$7 = {
        FADE: "fade",
        SHOW: "show"
      };
      var Selector$7 = {
        TITLE: ".popover-header",
        CONTENT: ".popover-body"
      };
      var Event$7 = {
        HIDE: "hide" + EVENT_KEY$7,
        HIDDEN: "hidden" + EVENT_KEY$7,
        SHOW: "show" + EVENT_KEY$7,
        SHOWN: "shown" + EVENT_KEY$7,
        INSERTED: "inserted" + EVENT_KEY$7,
        CLICK: "click" + EVENT_KEY$7,
        FOCUSIN: "focusin" + EVENT_KEY$7,
        FOCUSOUT: "focusout" + EVENT_KEY$7,
        MOUSEENTER: "mouseenter" + EVENT_KEY$7,
        MOUSELEAVE: "mouseleave" + EVENT_KEY$7
      };

      var Popover = function (_Tooltip) {
        _inheritsLoose(Popover, _Tooltip);

        function Popover() {
          return _Tooltip.apply(this, arguments) || this;
        }

        var _proto = Popover.prototype;

        _proto.isWithContent = function isWithContent() {
          return this.getTitle() || this._getContent();
        };

        _proto.addAttachmentClass = function addAttachmentClass(attachment) {
          $(this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
        };

        _proto.getTipElement = function getTipElement() {
          this.tip = this.tip || $(this.config.template)[0];
          return this.tip;
        };

        _proto.setContent = function setContent() {
          var $tip = $(this.getTipElement());
          this.setElementContent($tip.find(Selector$7.TITLE), this.getTitle());

          var content = this._getContent();

          if (typeof content === "function") {
            content = content.call(this.element);
          }

          this.setElementContent($tip.find(Selector$7.CONTENT), content);
          $tip.removeClass(ClassName$7.FADE + " " + ClassName$7.SHOW);
        };

        _proto._getContent = function _getContent() {
          return this.element.getAttribute("data-content") || this.config.content;
        };

        _proto._cleanTipClass = function _cleanTipClass() {
          var $tip = $(this.getTipElement());
          var tabClass = $tip.attr("class").match(BSCLS_PREFIX_REGEX$1);

          if (tabClass !== null && tabClass.length > 0) {
            $tip.removeClass(tabClass.join(""));
          }
        };

        Popover._jQueryInterface = function _jQueryInterface(config) {
          return this.each(function () {
            var data = $(this).data(DATA_KEY$7);

            var _config = typeof config === "object" ? config : null;

            if (!data && /dispose|hide/.test(config)) {
              return;
            }

            if (!data) {
              data = new Popover(this, _config);
              $(this).data(DATA_KEY$7, data);
            }

            if (typeof config === "string") {
              if (typeof data[config] === "undefined") {
                throw new TypeError('No method named "' + config + '"');
              }

              data[config]();
            }
          });
        };

        _createClass(Popover, null, [{
          key: "VERSION",
          get: function get() {
            return VERSION$7;
          }
        }, {
          key: "Default",
          get: function get() {
            return Default$5;
          }
        }, {
          key: "NAME",
          get: function get() {
            return NAME$7;
          }
        }, {
          key: "DATA_KEY",
          get: function get() {
            return DATA_KEY$7;
          }
        }, {
          key: "Event",
          get: function get() {
            return Event$7;
          }
        }, {
          key: "EVENT_KEY",
          get: function get() {
            return EVENT_KEY$7;
          }
        }, {
          key: "DefaultType",
          get: function get() {
            return DefaultType$5;
          }
        }]);

        return Popover;
      }(Tooltip);

      $.fn[NAME$7] = Popover._jQueryInterface;
      $.fn[NAME$7].Constructor = Popover;

      $.fn[NAME$7].noConflict = function () {
        $.fn[NAME$7] = JQUERY_NO_CONFLICT$7;
        return Popover._jQueryInterface;
      };

      var NAME$8 = "scrollspy";
      var VERSION$8 = "4.4.1";
      var DATA_KEY$8 = "bs.scrollspy";
      var EVENT_KEY$8 = "." + DATA_KEY$8;
      var DATA_API_KEY$6 = ".data-api";
      var JQUERY_NO_CONFLICT$8 = $.fn[NAME$8];
      var Default$6 = {
        offset: 10,
        method: "auto",
        target: ""
      };
      var DefaultType$6 = {
        offset: "number",
        method: "string",
        target: "(string|element)"
      };
      var Event$8 = {
        ACTIVATE: "activate" + EVENT_KEY$8,
        SCROLL: "scroll" + EVENT_KEY$8,
        LOAD_DATA_API: "load" + EVENT_KEY$8 + DATA_API_KEY$6
      };
      var ClassName$8 = {
        DROPDOWN_ITEM: "dropdown-item",
        DROPDOWN_MENU: "dropdown-menu",
        ACTIVE: "active"
      };
      var Selector$8 = {
        DATA_SPY: '[data-spy="scroll"]',
        ACTIVE: ".active",
        NAV_LIST_GROUP: ".nav, .list-group",
        NAV_LINKS: ".nav-link",
        NAV_ITEMS: ".nav-item",
        LIST_ITEMS: ".list-group-item",
        DROPDOWN: ".dropdown",
        DROPDOWN_ITEMS: ".dropdown-item",
        DROPDOWN_TOGGLE: ".dropdown-toggle"
      };
      var OffsetMethod = {
        OFFSET: "offset",
        POSITION: "position"
      };

      var ScrollSpy = function () {
        function ScrollSpy(element, config) {
          var _this = this;

          this._element = element;
          this._scrollElement = element.tagName === "BODY" ? window : element;
          this._config = this._getConfig(config);
          this._selector = this._config.target + " " + Selector$8.NAV_LINKS + "," + (this._config.target + " " + Selector$8.LIST_ITEMS + ",") + (this._config.target + " " + Selector$8.DROPDOWN_ITEMS);
          this._offsets = [];
          this._targets = [];
          this._activeTarget = null;
          this._scrollHeight = 0;
          $(this._scrollElement).on(Event$8.SCROLL, function (event) {
            return _this._process(event);
          });
          this.refresh();

          this._process();
        }

        var _proto = ScrollSpy.prototype;

        _proto.refresh = function refresh() {
          var _this2 = this;

          var autoMethod = this._scrollElement === this._scrollElement.window ? OffsetMethod.OFFSET : OffsetMethod.POSITION;
          var offsetMethod = this._config.method === "auto" ? autoMethod : this._config.method;
          var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
          this._offsets = [];
          this._targets = [];
          this._scrollHeight = this._getScrollHeight();
          var targets = [].slice.call(document.querySelectorAll(this._selector));
          targets.map(function (element) {
            var target;
            var targetSelector = Util.getSelectorFromElement(element);

            if (targetSelector) {
              target = document.querySelector(targetSelector);
            }

            if (target) {
              var targetBCR = target.getBoundingClientRect();

              if (targetBCR.width || targetBCR.height) {
                return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
              }
            }

            return null;
          }).filter(function (item) {
            return item;
          }).sort(function (a, b) {
            return a[0] - b[0];
          }).forEach(function (item) {
            _this2._offsets.push(item[0]);

            _this2._targets.push(item[1]);
          });
        };

        _proto.dispose = function dispose() {
          $.removeData(this._element, DATA_KEY$8);
          $(this._scrollElement).off(EVENT_KEY$8);
          this._element = null;
          this._scrollElement = null;
          this._config = null;
          this._selector = null;
          this._offsets = null;
          this._targets = null;
          this._activeTarget = null;
          this._scrollHeight = null;
        };

        _proto._getConfig = function _getConfig(config) {
          config = _objectSpread2({}, Default$6, {}, typeof config === "object" && config ? config : {});

          if (typeof config.target !== "string") {
            var id = $(config.target).attr("id");

            if (!id) {
              id = Util.getUID(NAME$8);
              $(config.target).attr("id", id);
            }

            config.target = "#" + id;
          }

          Util.typeCheckConfig(NAME$8, config, DefaultType$6);
          return config;
        };

        _proto._getScrollTop = function _getScrollTop() {
          return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
        };

        _proto._getScrollHeight = function _getScrollHeight() {
          return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        };

        _proto._getOffsetHeight = function _getOffsetHeight() {
          return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
        };

        _proto._process = function _process() {
          var scrollTop = this._getScrollTop() + this._config.offset;

          var scrollHeight = this._getScrollHeight();

          var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

          if (this._scrollHeight !== scrollHeight) {
            this.refresh();
          }

          if (scrollTop >= maxScroll) {
            var target = this._targets[this._targets.length - 1];

            if (this._activeTarget !== target) {
              this._activate(target);
            }

            return;
          }

          if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
            this._activeTarget = null;

            this._clear();

            return;
          }

          var offsetLength = this._offsets.length;

          for (var i = offsetLength; i--;) {
            var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === "undefined" || scrollTop < this._offsets[i + 1]);

            if (isActiveTarget) {
              this._activate(this._targets[i]);
            }
          }
        };

        _proto._activate = function _activate(target) {
          this._activeTarget = target;

          this._clear();

          var queries = this._selector.split(",").map(function (selector) {
            return selector + '[data-target="' + target + '"],' + selector + '[href="' + target + '"]';
          });

          var $link = $([].slice.call(document.querySelectorAll(queries.join(","))));

          if ($link.hasClass(ClassName$8.DROPDOWN_ITEM)) {
            $link.closest(Selector$8.DROPDOWN).find(Selector$8.DROPDOWN_TOGGLE).addClass(ClassName$8.ACTIVE);
            $link.addClass(ClassName$8.ACTIVE);
          } else {
            $link.addClass(ClassName$8.ACTIVE);
            $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_LINKS + ", " + Selector$8.LIST_ITEMS).addClass(ClassName$8.ACTIVE);
            $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_ITEMS).children(Selector$8.NAV_LINKS).addClass(ClassName$8.ACTIVE);
          }

          $(this._scrollElement).trigger(Event$8.ACTIVATE, {
            relatedTarget: target
          });
        };

        _proto._clear = function _clear() {
          [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
            return node.classList.contains(ClassName$8.ACTIVE);
          }).forEach(function (node) {
            return node.classList.remove(ClassName$8.ACTIVE);
          });
        };

        ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
          return this.each(function () {
            var data = $(this).data(DATA_KEY$8);

            var _config = typeof config === "object" && config;

            if (!data) {
              data = new ScrollSpy(this, _config);
              $(this).data(DATA_KEY$8, data);
            }

            if (typeof config === "string") {
              if (typeof data[config] === "undefined") {
                throw new TypeError('No method named "' + config + '"');
              }

              data[config]();
            }
          });
        };

        _createClass(ScrollSpy, null, [{
          key: "VERSION",
          get: function get() {
            return VERSION$8;
          }
        }, {
          key: "Default",
          get: function get() {
            return Default$6;
          }
        }]);

        return ScrollSpy;
      }();

      $(window).on(Event$8.LOAD_DATA_API, function () {
        var scrollSpys = [].slice.call(document.querySelectorAll(Selector$8.DATA_SPY));
        var scrollSpysLength = scrollSpys.length;

        for (var i = scrollSpysLength; i--;) {
          var $spy = $(scrollSpys[i]);

          ScrollSpy._jQueryInterface.call($spy, $spy.data());
        }
      });
      $.fn[NAME$8] = ScrollSpy._jQueryInterface;
      $.fn[NAME$8].Constructor = ScrollSpy;

      $.fn[NAME$8].noConflict = function () {
        $.fn[NAME$8] = JQUERY_NO_CONFLICT$8;
        return ScrollSpy._jQueryInterface;
      };

      var NAME$9 = "tab";
      var VERSION$9 = "4.4.1";
      var DATA_KEY$9 = "bs.tab";
      var EVENT_KEY$9 = "." + DATA_KEY$9;
      var DATA_API_KEY$7 = ".data-api";
      var JQUERY_NO_CONFLICT$9 = $.fn[NAME$9];
      var Event$9 = {
        HIDE: "hide" + EVENT_KEY$9,
        HIDDEN: "hidden" + EVENT_KEY$9,
        SHOW: "show" + EVENT_KEY$9,
        SHOWN: "shown" + EVENT_KEY$9,
        CLICK_DATA_API: "click" + EVENT_KEY$9 + DATA_API_KEY$7
      };
      var ClassName$9 = {
        DROPDOWN_MENU: "dropdown-menu",
        ACTIVE: "active",
        DISABLED: "disabled",
        FADE: "fade",
        SHOW: "show"
      };
      var Selector$9 = {
        DROPDOWN: ".dropdown",
        NAV_LIST_GROUP: ".nav, .list-group",
        ACTIVE: ".active",
        ACTIVE_UL: "> li > .active",
        DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        DROPDOWN_TOGGLE: ".dropdown-toggle",
        DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
      };

      var Tab = function () {
        function Tab(element) {
          this._element = element;
        }

        var _proto = Tab.prototype;

        _proto.show = function show() {
          var _this = this;

          if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName$9.ACTIVE) || $(this._element).hasClass(ClassName$9.DISABLED)) {
            return;
          }

          var target;
          var previous;
          var listElement = $(this._element).closest(Selector$9.NAV_LIST_GROUP)[0];
          var selector = Util.getSelectorFromElement(this._element);

          if (listElement) {
            var itemSelector = listElement.nodeName === "UL" || listElement.nodeName === "OL" ? Selector$9.ACTIVE_UL : Selector$9.ACTIVE;
            previous = $.makeArray($(listElement).find(itemSelector));
            previous = previous[previous.length - 1];
          }

          var hideEvent = $.Event(Event$9.HIDE, {
            relatedTarget: this._element
          });
          var showEvent = $.Event(Event$9.SHOW, {
            relatedTarget: previous
          });

          if (previous) {
            $(previous).trigger(hideEvent);
          }

          $(this._element).trigger(showEvent);

          if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
            return;
          }

          if (selector) {
            target = document.querySelector(selector);
          }

          this._activate(this._element, listElement);

          var complete = function complete() {
            var hiddenEvent = $.Event(Event$9.HIDDEN, {
              relatedTarget: _this._element
            });
            var shownEvent = $.Event(Event$9.SHOWN, {
              relatedTarget: previous
            });
            $(previous).trigger(hiddenEvent);
            $(_this._element).trigger(shownEvent);
          };

          if (target) {
            this._activate(target, target.parentNode, complete);
          } else {
            complete();
          }
        };

        _proto.dispose = function dispose() {
          $.removeData(this._element, DATA_KEY$9);
          this._element = null;
        };

        _proto._activate = function _activate(element, container, callback) {
          var _this2 = this;

          var activeElements = container && (container.nodeName === "UL" || container.nodeName === "OL") ? $(container).find(Selector$9.ACTIVE_UL) : $(container).children(Selector$9.ACTIVE);
          var active = activeElements[0];
          var isTransitioning = callback && active && $(active).hasClass(ClassName$9.FADE);

          var complete = function complete() {
            return _this2._transitionComplete(element, active, callback);
          };

          if (active && isTransitioning) {
            var transitionDuration = Util.getTransitionDurationFromElement(active);
            $(active).removeClass(ClassName$9.SHOW).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
          } else {
            complete();
          }
        };

        _proto._transitionComplete = function _transitionComplete(element, active, callback) {
          if (active) {
            $(active).removeClass(ClassName$9.ACTIVE);
            var dropdownChild = $(active.parentNode).find(Selector$9.DROPDOWN_ACTIVE_CHILD)[0];

            if (dropdownChild) {
              $(dropdownChild).removeClass(ClassName$9.ACTIVE);
            }

            if (active.getAttribute("role") === "tab") {
              active.setAttribute("aria-selected", false);
            }
          }

          $(element).addClass(ClassName$9.ACTIVE);

          if (element.getAttribute("role") === "tab") {
            element.setAttribute("aria-selected", true);
          }

          Util.reflow(element);

          if (element.classList.contains(ClassName$9.FADE)) {
            element.classList.add(ClassName$9.SHOW);
          }

          if (element.parentNode && $(element.parentNode).hasClass(ClassName$9.DROPDOWN_MENU)) {
            var dropdownElement = $(element).closest(Selector$9.DROPDOWN)[0];

            if (dropdownElement) {
              var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(Selector$9.DROPDOWN_TOGGLE));
              $(dropdownToggleList).addClass(ClassName$9.ACTIVE);
            }

            element.setAttribute("aria-expanded", true);
          }

          if (callback) {
            callback();
          }
        };

        Tab._jQueryInterface = function _jQueryInterface(config) {
          return this.each(function () {
            var $this = $(this);
            var data = $this.data(DATA_KEY$9);

            if (!data) {
              data = new Tab(this);
              $this.data(DATA_KEY$9, data);
            }

            if (typeof config === "string") {
              if (typeof data[config] === "undefined") {
                throw new TypeError('No method named "' + config + '"');
              }

              data[config]();
            }
          });
        };

        _createClass(Tab, null, [{
          key: "VERSION",
          get: function get() {
            return VERSION$9;
          }
        }]);

        return Tab;
      }();

      $(document).on(Event$9.CLICK_DATA_API, Selector$9.DATA_TOGGLE, function (event) {
        event.preventDefault();

        Tab._jQueryInterface.call($(this), "show");
      });
      $.fn[NAME$9] = Tab._jQueryInterface;
      $.fn[NAME$9].Constructor = Tab;

      $.fn[NAME$9].noConflict = function () {
        $.fn[NAME$9] = JQUERY_NO_CONFLICT$9;
        return Tab._jQueryInterface;
      };

      var NAME$a = "toast";
      var VERSION$a = "4.4.1";
      var DATA_KEY$a = "bs.toast";
      var EVENT_KEY$a = "." + DATA_KEY$a;
      var JQUERY_NO_CONFLICT$a = $.fn[NAME$a];
      var Event$a = {
        CLICK_DISMISS: "click.dismiss" + EVENT_KEY$a,
        HIDE: "hide" + EVENT_KEY$a,
        HIDDEN: "hidden" + EVENT_KEY$a,
        SHOW: "show" + EVENT_KEY$a,
        SHOWN: "shown" + EVENT_KEY$a
      };
      var ClassName$a = {
        FADE: "fade",
        HIDE: "hide",
        SHOW: "show",
        SHOWING: "showing"
      };
      var DefaultType$7 = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
      };
      var Default$7 = {
        animation: true,
        autohide: true,
        delay: 500
      };
      var Selector$a = {
        DATA_DISMISS: '[data-dismiss="toast"]'
      };

      var Toast = function () {
        function Toast(element, config) {
          this._element = element;
          this._config = this._getConfig(config);
          this._timeout = null;

          this._setListeners();
        }

        var _proto = Toast.prototype;

        _proto.show = function show() {
          var _this = this;

          var showEvent = $.Event(Event$a.SHOW);
          $(this._element).trigger(showEvent);

          if (showEvent.isDefaultPrevented()) {
            return;
          }

          if (this._config.animation) {
            this._element.classList.add(ClassName$a.FADE);
          }

          var complete = function complete() {
            _this._element.classList.remove(ClassName$a.SHOWING);

            _this._element.classList.add(ClassName$a.SHOW);

            $(_this._element).trigger(Event$a.SHOWN);

            if (_this._config.autohide) {
              _this._timeout = setTimeout(function () {
                _this.hide();
              }, _this._config.delay);
            }
          };

          this._element.classList.remove(ClassName$a.HIDE);

          Util.reflow(this._element);

          this._element.classList.add(ClassName$a.SHOWING);

          if (this._config.animation) {
            var transitionDuration = Util.getTransitionDurationFromElement(this._element);
            $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
          } else {
            complete();
          }
        };

        _proto.hide = function hide() {
          if (!this._element.classList.contains(ClassName$a.SHOW)) {
            return;
          }

          var hideEvent = $.Event(Event$a.HIDE);
          $(this._element).trigger(hideEvent);

          if (hideEvent.isDefaultPrevented()) {
            return;
          }

          this._close();
        };

        _proto.dispose = function dispose() {
          clearTimeout(this._timeout);
          this._timeout = null;

          if (this._element.classList.contains(ClassName$a.SHOW)) {
            this._element.classList.remove(ClassName$a.SHOW);
          }

          $(this._element).off(Event$a.CLICK_DISMISS);
          $.removeData(this._element, DATA_KEY$a);
          this._element = null;
          this._config = null;
        };

        _proto._getConfig = function _getConfig(config) {
          config = _objectSpread2({}, Default$7, {}, $(this._element).data(), {}, typeof config === "object" && config ? config : {});
          Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
          return config;
        };

        _proto._setListeners = function _setListeners() {
          var _this2 = this;

          $(this._element).on(Event$a.CLICK_DISMISS, Selector$a.DATA_DISMISS, function () {
            return _this2.hide();
          });
        };

        _proto._close = function _close() {
          var _this3 = this;

          var complete = function complete() {
            _this3._element.classList.add(ClassName$a.HIDE);

            $(_this3._element).trigger(Event$a.HIDDEN);
          };

          this._element.classList.remove(ClassName$a.SHOW);

          if (this._config.animation) {
            var transitionDuration = Util.getTransitionDurationFromElement(this._element);
            $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
          } else {
            complete();
          }
        };

        Toast._jQueryInterface = function _jQueryInterface(config) {
          return this.each(function () {
            var $element = $(this);
            var data = $element.data(DATA_KEY$a);

            var _config = typeof config === "object" && config;

            if (!data) {
              data = new Toast(this, _config);
              $element.data(DATA_KEY$a, data);
            }

            if (typeof config === "string") {
              if (typeof data[config] === "undefined") {
                throw new TypeError('No method named "' + config + '"');
              }

              data[config](this);
            }
          });
        };

        _createClass(Toast, null, [{
          key: "VERSION",
          get: function get() {
            return VERSION$a;
          }
        }, {
          key: "DefaultType",
          get: function get() {
            return DefaultType$7;
          }
        }, {
          key: "Default",
          get: function get() {
            return Default$7;
          }
        }]);

        return Toast;
      }();

      $.fn[NAME$a] = Toast._jQueryInterface;
      $.fn[NAME$a].Constructor = Toast;

      $.fn[NAME$a].noConflict = function () {
        $.fn[NAME$a] = JQUERY_NO_CONFLICT$a;
        return Toast._jQueryInterface;
      };

      exports.Alert = Alert;
      exports.Button = Button;
      exports.Carousel = Carousel;
      exports.Collapse = Collapse;
      exports.Dropdown = Dropdown;
      exports.Modal = Modal;
      exports.Popover = Popover;
      exports.Scrollspy = ScrollSpy;
      exports.Tab = Tab;
      exports.Toast = Toast;
      exports.Tooltip = Tooltip;
      exports.Util = Util;
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
    });
  });
  unwrapExports(bootstrap);
  $(document).ready(function () {
    var sidebarScrollbar = $(".sidebar-scrollbar");

    if (sidebarScrollbar.length != 0) {
      sidebarScrollbar.slimScroll({
        opacity: 0,
        height: "100%",
        color: "#808080",
        size: "5px",
        touchScrollStep: 50
      }).mouseover(function () {
        $(this).next(".slimScrollBar").css("opacity", .5);
      });
    }

    if ($(window).width() < 768) {
      $(".sidebar-toggle").on("click", function () {
        $("body").css("overflow", "hidden");
        $("body").prepend('<div class="mobile-sticky-body-overlay"></div>');
      });
      $(document).on("click", ".mobile-sticky-body-overlay", function (e) {
        $(this).remove();
        $("#body").removeClass("sidebar-mobile-in").addClass("sidebar-mobile-out");
        $("body").css("overflow", "auto");
      });
    }

    var sidebar = $(".sidebar");

    if (sidebar.length != 0) {
      $(".sidebar .nav > .has-sub > a").click(function () {
        $(this).parent().siblings().removeClass("expand");
        $(this).parent().toggleClass("expand");
      });
      $(".sidebar .nav > .has-sub .has-sub > a").click(function () {
        $(this).parent().toggleClass("expand");
      });
    }

    if ($(window).width() < 768) {
      $(document).on("click", ".sidebar-toggle", function (e) {
        e.preventDefault();
        var min = "sidebar-mobile-in",
            min_out = "sidebar-mobile-out",
            body = "#body";
        $(body).hasClass(min) ? $(body).removeClass(min).addClass(min_out) : $(body).addClass(min).removeClass(min_out);
      });
    }

    var body = $("#body");

    if ($(window).width() >= 768) {
      if (typeof window.isMinified === "undefined") {
        window.isMinified = false;
      }

      if (typeof window.isCollapsed === "undefined") {
        window.isCollapsed = false;
      }

      $("#sidebar-toggler").on("click", function () {
        if (body.hasClass("sidebar-fixed-offcanvas") || body.hasClass("sidebar-static-offcanvas")) {
          $(this).addClass("sidebar-offcanvas-toggle").removeClass("sidebar-toggle");

          if (window.isCollapsed === false) {
            body.addClass("sidebar-collapse");
            window.isCollapsed = true;
            window.isMinified = false;
          } else {
            body.removeClass("sidebar-collapse");
            body.addClass("sidebar-collapse-out");
            setTimeout(function () {
              body.removeClass("sidebar-collapse-out");
            }, 300);
            window.isCollapsed = false;
          }
        }

        if (body.hasClass("sidebar-fixed") || body.hasClass("sidebar-static")) {
          $(this).addClass("sidebar-toggle").removeClass("sidebar-offcanvas-toggle");

          if (window.isMinified === false) {
            body.removeClass("sidebar-collapse sidebar-minified-out").addClass("sidebar-minified");
            window.isMinified = true;
            window.isCollapsed = false;
          } else {
            body.removeClass("sidebar-minified");
            body.addClass("sidebar-minified-out");
            window.isMinified = false;
          }
        }
      });
    }

    if ($(window).width() >= 768 && $(window).width() < 992) {
      if (body.hasClass("sidebar-fixed") || body.hasClass("sidebar-static")) {
        body.removeClass("sidebar-collapse sidebar-minified-out").addClass("sidebar-minified");
        window.isMinified = true;
      }
    }

    function todoCheckAll() {
      var mdis = document.querySelectorAll(".todo-single-item .mdi");
      mdis.forEach(function (fa) {
        fa.addEventListener("click", function (e) {
          e.stopPropagation();
          e.target.parentElement.classList.toggle("finished");
        });
      });
    }

    if (document.querySelector("#todo")) {
      var list = document.querySelector("#todo-list"),
          todoInput = document.querySelector("#todo-input"),
          todoInputForm = todoInput.querySelector("form"),
          item = todoInputForm.querySelector("input");
      document.querySelector("#add-task").addEventListener("click", function (e) {
        e.preventDefault();
        todoInput.classList.toggle("d-block");
        item.focus();
      });
      todoInputForm.addEventListener("submit", function (e) {
        e.preventDefault();

        if (item.value.length <= 0) {
          return;
        }

        list.innerHTML = '<div class="todo-single-item d-flex flex-row justify-content-between">' + '<i class="mdi"></i>' + "<span>" + item.value + "</span>" + '<span class="badge badge-primary">Today</span>' + "</div>" + list.innerHTML;
        item.value = "";
        todoInput.classList.toggle("d-block");
        todoCheckAll();
      });
      todoCheckAll();
    }

    var rightSidebarIn = "right-sidebar-in";
    var rightSidebarOut = "right-sidebar-out";
    $(".nav-right-sidebar .nav-link").on("click", function () {
      if (!body.hasClass(rightSidebarIn)) {
        body.addClass(rightSidebarIn).removeClass(rightSidebarOut);
      } else if ($(this).hasClass("show")) {
        body.addClass(rightSidebarOut).removeClass(rightSidebarIn);
      }
    });
    $(".card-right-sidebar .close").on("click", function () {
      body.removeClass(rightSidebarIn).addClass(rightSidebarOut);
    });

    if ($(window).width() <= 1024) {
      var togglerInClass = "right-sidebar-toggoler-in";
      var togglerOutClass = "right-sidebar-toggoler-out";
      body.addClass(togglerOutClass);
      $(".btn-right-sidebar-toggler").on("click", function () {
        if (body.hasClass(togglerOutClass)) {
          body.addClass(togglerInClass).removeClass(togglerOutClass);
        } else {
          body.addClass(togglerOutClass).removeClass(togglerInClass);
        }
      });
    }
  });
  $(document).ready(function () {
    var dual = document.getElementById("dual-line");

    if (dual !== null) {
      var urChart = new Chart(dual, {
        type: "line",
        data: {
          labels: ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
          datasets: [{
            label: "Old",
            pointRadius: 4,
            pointBackgroundColor: "rgba(255,255,255,1)",
            pointBorderWidth: 2,
            fill: false,
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: "#fdc506",
            data: [0, 4, 3, 5.5, 3, 4.7, 0]
          }, {
            label: "New",
            fill: false,
            pointRadius: 4,
            pointBackgroundColor: "rgba(255,255,255,1)",
            pointBorderWidth: 2,
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: "#4c84ff",
            data: [0, 2, 4.3, 3.8, 5.2, 1.8, 2.2]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: {
              right: 10
            }
          },
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              gridLines: {
                drawBorder: false,
                display: false
              },
              ticks: {
                display: false,
                beginAtZero: true
              },
              barPercentage: 1.8,
              categoryPercentage: .2
            }],
            yAxes: [{
              gridLines: {
                drawBorder: false,
                display: false
              },
              ticks: {
                display: false,
                beginAtZero: true
              }
            }]
          },
          tooltips: {
            titleFontColor: "#888",
            bodyFontColor: "#555",
            titleFontSize: 12,
            bodyFontSize: 14,
            backgroundColor: "rgba(256,256,256,0.95)",
            displayColors: true,
            borderColor: "rgba(220, 220, 220, 0.9)",
            borderWidth: 2
          }
        }
      });
    }

    var dual3 = document.getElementById("dual-line3");

    if (dual3 !== null) {
      var urdChart = new Chart(dual3, {
        type: "line",
        data: {
          labels: ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
          datasets: [{
            label: "Old",
            pointRadius: 4,
            pointBackgroundColor: "#fec400",
            pointBorderWidth: 2,
            fill: false,
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: "#fcdf80",
            data: [0, 4, 3, 5.5, 3, 4.7, 0]
          }, {
            label: "New",
            fill: false,
            pointRadius: 4,
            pointBackgroundColor: "#fec400",
            pointBorderWidth: 2,
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: "#ffffff",
            data: [0, 2, 4.3, 3.8, 5.2, 1.8, 2.2]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          layout: {
            padding: {
              right: 10
            }
          },
          scales: {
            xAxes: [{
              gridLines: {
                drawBorder: false,
                display: false
              },
              ticks: {
                display: false,
                beginAtZero: true
              },
              barPercentage: 1.8,
              categoryPercentage: .2
            }],
            yAxes: [{
              gridLines: {
                drawBorder: false,
                display: false
              },
              ticks: {
                display: false,
                beginAtZero: true
              }
            }]
          },
          tooltips: {
            enabled: true
          }
        }
      });
    }

    var ctx = document.getElementById("linechart");

    if (ctx !== null) {
      var chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [{
            label: "",
            backgroundColor: "transparent",
            borderColor: "rgb(82, 136, 255)",
            data: [100, 11e3, 1e4, 14e3, 11e3, 17e3, 14500, 18e3, 5e3, 23e3, 14e3, 19e3],
            lineTension: .3,
            pointRadius: 5,
            pointBackgroundColor: "rgba(255,255,255,1)",
            pointHoverBackgroundColor: "rgba(255,255,255,1)",
            pointBorderWidth: 2,
            pointHoverRadius: 8,
            pointHoverBorderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          layout: {
            padding: {
              right: 10
            }
          },
          scales: {
            xAxes: [{
              gridLines: {
                display: false
              }
            }],
            yAxes: [{
              gridLines: {
                display: true,
                color: "#eee",
                zeroLineColor: "#eee"
              },
              ticks: {
                callback: function callback(value) {
                  var ranges = [{
                    divider: 1e6,
                    suffix: "M"
                  }, {
                    divider: 1e4,
                    suffix: "k"
                  }];

                  function formatNumber(n) {
                    for (var i = 0; i < ranges.length; i++) {
                      if (n >= ranges[i].divider) {
                        return (n / ranges[i].divider).toString() + ranges[i].suffix;
                      }
                    }

                    return n;
                  }

                  return formatNumber(value);
                }
              }
            }]
          },
          tooltips: {
            callbacks: {
              title: function title(tooltipItem, data) {
                return data["labels"][tooltipItem[0]["index"]];
              },
              label: function label(tooltipItem, data) {
                return "$" + data["datasets"][0]["data"][tooltipItem["index"]];
              }
            },
            responsive: true,
            intersect: false,
            enabled: true,
            titleFontColor: "#888",
            bodyFontColor: "#555",
            titleFontSize: 12,
            bodyFontSize: 18,
            backgroundColor: "rgba(256,256,256,0.95)",
            xPadding: 20,
            yPadding: 10,
            displayColors: false,
            borderColor: "rgba(220, 220, 220, 0.9)",
            borderWidth: 2,
            caretSize: 10,
            caretPadding: 15
          }
        }
      });
    }

    var lchart1 = document.getElementById("linechart1");

    if (lchart1 !== null) {
      var urChart = new Chart(lchart1, {
        type: "line",
        data: {
          labels: ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
          datasets: [{
            label: "Old",
            pointRadius: 0,
            pointBackgroundColor: "rgba(255,255,255,1)",
            pointBorderWidth: 2,
            fill: false,
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: "#fcdf80",
            data: [0, 5, 2.5, 9.5, 3.3, 8, 0]
          }, {
            label: "New",
            fill: false,
            pointRadius: 0,
            pointBackgroundColor: "rgba(255,255,255,1)",
            pointBorderWidth: 2,
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: "#4c84ff",
            data: [0, 2, 6, 5, 8.5, 3, 3.8]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              gridLines: {
                drawBorder: false,
                display: false
              },
              ticks: {
                display: false,
                beginAtZero: true
              },
              barPercentage: 1.8,
              categoryPercentage: .2
            }],
            yAxes: [{
              gridLines: {
                drawBorder: false,
                display: false
              },
              ticks: {
                display: false,
                beginAtZero: true
              }
            }]
          },
          tooltips: {
            enabled: false
          }
        }
      });
    }

    var lchart2 = document.getElementById("linechart2");

    if (lchart2 !== null) {
      var urChart2 = new Chart(lchart2, {
        type: "line",
        data: {
          labels: ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
          datasets: [{
            label: "Old",
            pointRadius: 0,
            pointBackgroundColor: "rgba(255,255,255,1)",
            pointBorderWidth: 2,
            fill: false,
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: "#fcdf80",
            data: [0, 5, 2.5, 9.5, 3.3, 8, 0]
          }, {
            label: "New",
            fill: false,
            pointRadius: 0,
            pointBackgroundColor: "rgba(255,255,255,1)",
            pointBorderWidth: 2,
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: "#ffffff",
            data: [0, 2, 6, 5, 8.5, 3, 3.8]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              gridLines: {
                drawBorder: false,
                display: false
              },
              ticks: {
                display: false,
                beginAtZero: true
              },
              barPercentage: 1.8,
              categoryPercentage: .2
            }],
            yAxes: [{
              gridLines: {
                drawBorder: false,
                display: false
              },
              ticks: {
                display: false,
                beginAtZero: true
              }
            }]
          },
          tooltips: {
            enabled: false
          }
        }
      });
    }

    var area = document.getElementById("area-chart");

    if (area !== null) {
      var areaChart = new Chart(area, {
        type: "line",
        data: {
          labels: ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
          datasets: [{
            label: "New",
            pointHitRadius: 10,
            pointRadius: 0,
            fill: true,
            backgroundColor: "rgba(76, 132, 255, 0.9)",
            borderColor: "rgba(76, 132, 255, 0.9)",
            data: [0, 4, 2, 6.5, 3, 4.7, 0]
          }, {
            label: "Old",
            pointHitRadius: 10,
            pointRadius: 0,
            fill: true,
            backgroundColor: "rgba(253, 197, 6, 0.9)",
            borderColor: "rgba(253, 197, 6, 1)",
            data: [0, 2, 4.3, 3.8, 5.2, 1.8, 2.2]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          layout: {
            padding: {
              right: 10
            }
          },
          scales: {
            xAxes: [{
              gridLines: {
                drawBorder: false,
                display: false
              },
              ticks: {
                display: false,
                beginAtZero: true
              },
              barPercentage: 1.8,
              categoryPercentage: .2
            }],
            yAxes: [{
              gridLines: {
                drawBorder: false,
                display: false
              },
              ticks: {
                display: false,
                beginAtZero: true
              }
            }]
          },
          tooltips: {
            titleFontColor: "#888",
            bodyFontColor: "#555",
            titleFontSize: 12,
            bodyFontSize: 14,
            backgroundColor: "rgba(256,256,256,0.95)",
            displayColors: true,
            borderColor: "rgba(220, 220, 220, 0.9)",
            borderWidth: 2
          }
        }
      });
    }

    var area1 = document.getElementById("areaChart1");

    if (area1 !== null) {
      var areaChart = new Chart(area1, {
        type: "line",
        data: {
          labels: ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
          datasets: [{
            label: "New",
            pointRadius: .1,
            fill: true,
            lineTension: .3,
            backgroundColor: "rgba(76, 132, 255, 0.9)",
            borderColor: "rgba(76, 132, 255, 0.9)",
            data: [0, 5, 2.5, 9, 3.5, 6.5, 0]
          }, {
            label: "Old",
            pointRadius: .1,
            fill: true,
            lineTension: .3,
            backgroundColor: "rgba(253, 197, 6, 0.9)",
            borderColor: "rgba(253, 197, 6, 1)",
            data: [0, 2, 5.5, 2.6, 5.7, 4, 2.8]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              gridLines: {
                drawBorder: false,
                display: false
              },
              ticks: {
                display: false,
                beginAtZero: true
              },
              barPercentage: 1.8,
              categoryPercentage: .2
            }],
            yAxes: [{
              gridLines: {
                drawBorder: false,
                display: false
              },
              ticks: {
                display: false,
                beginAtZero: true
              }
            }]
          },
          tooltips: {
            enabled: false
          }
        }
      });
    }

    var area2 = document.getElementById("areaChart2");

    if (area2 !== null) {
      var areaChart = new Chart(area2, {
        type: "line",
        data: {
          labels: ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
          datasets: [{
            label: "New",
            pointRadius: .1,
            fill: true,
            lineTension: .6,
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            borderColor: "rgba(255, 255, 255,0)",
            data: [0, 5, 2.5, 9, 3.5, 6.5, 0]
          }, {
            label: "Old",
            pointRadius: .1,
            fill: true,
            lineTension: .6,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderColor: "rgba(255, 255, 255, 0)",
            data: [0, 2, 5.5, 2.6, 5.7, 4, 2.8]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              gridLines: {
                drawBorder: false,
                display: false
              },
              ticks: {
                display: false,
                beginAtZero: true
              },
              barPercentage: 1.8,
              categoryPercentage: .2
            }],
            yAxes: [{
              gridLines: {
                drawBorder: false,
                display: false
              },
              ticks: {
                display: false,
                beginAtZero: true
              }
            }]
          },
          tooltips: {
            enabled: false
          }
        }
      });
    }

    var area3 = document.getElementById("area-chart3");

    if (area3 !== null) {
      var areaChart3 = new Chart(area3, {
        type: "line",
        data: {
          labels: ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
          datasets: [{
            label: "New",
            pointHitRadius: 10,
            pointRadius: 0,
            fill: true,
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            borderColor: "rgba(255, 255, 255,0)",
            data: [0, 4, 2, 6.5, 3, 4.7, 0]
          }, {
            label: "Old",
            pointHitRadius: 10,
            pointRadius: 0,
            fill: true,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderColor: "rgba(255, 255, 255, 0)",
            data: [0, 2, 4.3, 3.8, 5.2, 1.8, 2.2]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          layout: {
            padding: {
              right: 10
            }
          },
          scales: {
            xAxes: [{
              gridLines: {
                drawBorder: false,
                display: false
              },
              ticks: {
                display: false,
                beginAtZero: true
              },
              barPercentage: 1.8,
              categoryPercentage: .2
            }],
            yAxes: [{
              gridLines: {
                drawBorder: false,
                display: false
              },
              ticks: {
                display: false,
                beginAtZero: true
              }
            }]
          },
          tooltips: {
            enabled: true
          }
        }
      });
    }

    var line = document.getElementById("line");

    if (line !== null) {
      line = line.getContext("2d");
      var gradientFill = line.createLinearGradient(0, 120, 0, 0);
      gradientFill.addColorStop(0, "rgba(41,204,151,0.10196)");
      gradientFill.addColorStop(1, "rgba(41,204,151,0.30196)");
      var lChart = new Chart(line, {
        type: "line",
        data: {
          labels: ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
          datasets: [{
            label: "Rev",
            lineTension: 0,
            pointRadius: 4,
            pointBackgroundColor: "rgba(255,255,255,1)",
            pointBorderWidth: 2,
            fill: true,
            backgroundColor: gradientFill,
            borderColor: "#29cc97",
            borderWidth: 2,
            data: [0, 4, 3, 5.5, 3, 4.7, 1]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          layout: {
            padding: {
              right: 10
            }
          },
          scales: {
            xAxes: [{
              gridLines: {
                drawBorder: false,
                display: false
              },
              ticks: {
                display: false,
                beginAtZero: true
              },
              barPercentage: 1.8,
              categoryPercentage: .2
            }],
            yAxes: [{
              gridLines: {
                drawBorder: false,
                display: false
              },
              ticks: {
                display: false,
                beginAtZero: true
              }
            }]
          },
          tooltips: {
            titleFontColor: "#888",
            bodyFontColor: "#555",
            titleFontSize: 12,
            bodyFontSize: 14,
            backgroundColor: "rgba(256,256,256,0.95)",
            displayColors: true,
            borderColor: "rgba(220, 220, 220, 0.9)",
            borderWidth: 2
          }
        }
      });
    }

    var doughnut = document.getElementById("doChart");

    if (doughnut !== null) {
      var myDoughnutChart = new Chart(doughnut, {
        type: "doughnut",
        data: {
          labels: ["completed", "unpaid", "pending", "canceled"],
          datasets: [{
            label: ["completed", "unpaid", "pending", "canceled"],
            data: [4100, 2500, 1800, 2300],
            backgroundColor: ["#4c84ff", "#29cc97", "#8061ef", "#fec402"],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          cutoutPercentage: 75,
          tooltips: {
            callbacks: {
              title: function title(tooltipItem, data) {
                return "Order : " + data["labels"][tooltipItem[0]["index"]];
              },
              label: function label(tooltipItem, data) {
                return data["datasets"][0]["data"][tooltipItem["index"]];
              }
            },
            titleFontColor: "#888",
            bodyFontColor: "#555",
            titleFontSize: 12,
            bodyFontSize: 14,
            backgroundColor: "rgba(256,256,256,0.95)",
            displayColors: true,
            borderColor: "rgba(220, 220, 220, 0.9)",
            borderWidth: 2
          }
        }
      });
    }

    var polar = document.getElementById("polar");

    if (polar !== null) {
      var configPolar = {
        data: {
          datasets: [{
            data: [43, 23, 53, 33, 55],
            backgroundColor: ["rgba(41,204,151,0.5)", "rgba(254,88,101,0.5)", "rgba(128,97,239,0.5)", "rgba(254,196,0,0.5)", "rgba(76,132,255,0.5)"],
            label: ""
          }],
          labels: ["Total Sales", "Rejected", "Completed", "Pending", "Reserve"]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            position: "right",
            display: false
          },
          layout: {
            padding: {
              top: 10,
              bottom: 10,
              right: 10,
              left: 10
            }
          },
          title: {
            display: false,
            text: "Chart.js Polar Area Chart"
          },
          scale: {
            ticks: {
              beginAtZero: true,
              fontColor: "#1b223c",
              fontSize: 12,
              stepSize: 10,
              max: 60
            },
            reverse: false
          },
          animation: {
            animateRotate: false,
            animateScale: true
          },
          tooltips: {
            titleFontColor: "#888",
            bodyFontColor: "#555",
            titleFontSize: 12,
            bodyFontSize: 14,
            backgroundColor: "rgba(256,256,256,0.95)",
            displayColors: true,
            borderColor: "rgba(220, 220, 220, 0.9)",
            borderWidth: 2
          }
        }
      };
      window.myPolarArea = Chart.PolarArea(polar, configPolar);
    }

    var radar = document.getElementById("radar");

    if (radar !== null) {
      var myRadar = new Chart(radar, {
        type: "radar",
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          datasets: [{
            label: "Current Year",
            backgroundColor: "rgba(76,132,255,0.2)",
            borderColor: "#4c84ff",
            pointBorderWidth: 2,
            pointRadius: 4,
            pointBorderColor: "rgba(76,132,255,1)",
            pointBackgroundColor: "#ffffff",
            data: [25, 31, 43, 48, 21, 36, 23, 12, 33, 36, 28, 55]
          }, {
            label: "Previous Year",
            backgroundColor: "rgba(41, 204, 151, 0.2)",
            borderColor: "#29cc97",
            pointBorderWidth: 2,
            pointRadius: 4,
            pointBorderColor: "#29cc97",
            pointBackgroundColor: "#ffffff",
            data: [45, 77, 22, 12, 56, 43, 71, 23, 54, 19, 32, 55]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          title: {
            display: false,
            text: "Chart.js Radar Chart"
          },
          layout: {
            padding: {
              top: 10,
              bottom: 10,
              right: 10,
              left: 10
            }
          },
          scale: {
            ticks: {
              beginAtZero: true,
              fontColor: "#1b223c",
              fontSize: 12,
              stepSize: 10,
              max: 60
            }
          },
          tooltips: {
            titleFontColor: "#888",
            bodyFontColor: "#555",
            titleFontSize: 12,
            bodyFontSize: 14,
            backgroundColor: "rgba(256,256,256,0.95)",
            displayColors: true,
            borderColor: "rgba(220, 220, 220, 0.9)",
            borderWidth: 2
          }
        }
      });
    }

    var cUser = document.getElementById("currentUser");

    if (cUser !== null) {
      var myUChart = new Chart(cUser, {
        type: "bar",
        data: {
          labels: ["1h", "10 m", "50 m", "30 m", "40 m", "20 m", "30 m", "25 m", "20 m", "5 m", "10 m"],
          datasets: [{
            label: "signup",
            data: [15, 30, 27, 43, 39, 18, 42, 25, 13, 18, 59],
            backgroundColor: "#4c84ff"
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              gridLines: {
                drawBorder: true,
                display: false
              },
              ticks: {
                fontColor: "#8a909d",
                fontFamily: "Roboto, sans-serif",
                display: false,
                beginAtZero: true,
                callback: function callback(tick, index, array) {
                  return index % 2 ? "" : tick;
                }
              },
              barPercentage: 1.8,
              categoryPercentage: .2
            }],
            yAxes: [{
              gridLines: {
                drawBorder: true,
                display: true,
                color: "#eee",
                zeroLineColor: "#eee"
              },
              ticks: {
                fontColor: "#8a909d",
                fontFamily: "Roboto, sans-serif",
                display: true,
                beginAtZero: true
              }
            }]
          },
          tooltips: {
            mode: "index",
            titleFontColor: "#888",
            bodyFontColor: "#555",
            titleFontSize: 12,
            bodyFontSize: 15,
            backgroundColor: "rgba(256,256,256,0.95)",
            displayColors: true,
            xPadding: 10,
            yPadding: 7,
            borderColor: "rgba(220, 220, 220, 0.9)",
            borderWidth: 2,
            caretSize: 6,
            caretPadding: 5
          }
        }
      });
    }

    var acquisition = document.getElementById("acquisition");

    if (acquisition !== null) {
      var acqData = [{
        first: [100, 180, 44, 75, 150, 66, 70],
        second: [144, 44, 177, 76, 23, 189, 12],
        third: [44, 167, 102, 123, 183, 88, 134]
      }, {
        first: [144, 44, 110, 5, 123, 89, 12],
        second: [22, 123, 45, 130, 112, 54, 181],
        third: [55, 44, 144, 75, 155, 166, 70]
      }, {
        first: [134, 80, 123, 65, 171, 33, 22],
        second: [44, 144, 77, 76, 123, 89, 112],
        third: [156, 23, 165, 88, 112, 54, 181]
      }];
      var configAcq = {
        type: "line",
        data: {
          labels: ["4 Jan", "5 Jan", "6 Jan", "7 Jan", "8 Jan", "9 Jan", "10 Jan"],
          datasets: [{
            label: "Referral",
            backgroundColor: "rgb(76, 132, 255)",
            borderColor: "rgba(76, 132, 255,0)",
            data: acqData[0].first,
            lineTension: .3,
            pointBackgroundColor: "rgba(76, 132, 255,0)",
            pointHoverBackgroundColor: "rgba(76, 132, 255,1)",
            pointHoverRadius: 3,
            pointHitRadius: 30,
            pointBorderWidth: 2,
            pointStyle: "rectRounded"
          }, {
            label: "Direct",
            backgroundColor: "rgb(254, 196, 0)",
            borderColor: "rgba(254, 196, 0,0)",
            data: acqData[0].second,
            lineTension: .3,
            pointBackgroundColor: "rgba(254, 196, 0,0)",
            pointHoverBackgroundColor: "rgba(254, 196, 0,1)",
            pointHoverRadius: 3,
            pointHitRadius: 30,
            pointBorderWidth: 2,
            pointStyle: "rectRounded"
          }, {
            label: "Social",
            backgroundColor: "rgb(41, 204, 151)",
            borderColor: "rgba(41, 204, 151,0)",
            data: acqData[0].third,
            lineTension: .3,
            pointBackgroundColor: "rgba(41, 204, 151,0)",
            pointHoverBackgroundColor: "rgba(41, 204, 151,1)",
            pointHoverRadius: 3,
            pointHitRadius: 30,
            pointBorderWidth: 2,
            pointStyle: "rectRounded"
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              gridLines: {
                display: false
              }
            }],
            yAxes: [{
              gridLines: {
                display: true,
                color: "#eee",
                zeroLineColor: "#eee"
              },
              ticks: {
                beginAtZero: true,
                stepSize: 50,
                max: 200
              }
            }]
          },
          tooltips: {
            mode: "index",
            titleFontColor: "#888",
            bodyFontColor: "#555",
            titleFontSize: 12,
            bodyFontSize: 15,
            backgroundColor: "rgba(256,256,256,0.95)",
            displayColors: true,
            xPadding: 20,
            yPadding: 10,
            borderColor: "rgba(220, 220, 220, 0.9)",
            borderWidth: 2,
            caretSize: 10,
            caretPadding: 15
          }
        }
      };
      var ctx = document.getElementById("acquisition").getContext("2d");
      var lineAcq = new Chart(ctx, configAcq);
      document.getElementById("acqLegend").innerHTML = lineAcq.generateLegend();
      var items = document.querySelectorAll("#user-acquisition .nav-tabs .nav-item");
      items.forEach(function (item, index) {
        item.addEventListener("click", function () {
          configAcq.data.datasets[0].data = acqData[index].first;
          configAcq.data.datasets[1].data = acqData[index].second;
          configAcq.data.datasets[2].data = acqData[index].third;
          lineAcq.update();
        });
      });
    }

    var activity = document.getElementById("activity");

    if (activity !== null) {
      var activityData = [{
        first: [0, 65, 52, 115, 98, 165, 125],
        second: [45, 38, 100, 87, 152, 187, 85]
      }, {
        first: [0, 65, 77, 33, 49, 100, 100],
        second: [88, 33, 20, 44, 111, 140, 77]
      }, {
        first: [0, 40, 77, 55, 33, 116, 50],
        second: [55, 32, 20, 55, 111, 134, 66]
      }, {
        first: [0, 44, 22, 77, 33, 151, 99],
        second: [60, 32, 120, 55, 19, 134, 88]
      }];
      var config = {
        type: "line",
        data: {
          labels: ["4 Jan", "5 Jan", "6 Jan", "7 Jan", "8 Jan", "9 Jan", "10 Jan"],
          datasets: [{
            label: "Active",
            backgroundColor: "transparent",
            borderColor: "rgb(82, 136, 255)",
            data: activityData[0].first,
            lineTension: 0,
            pointRadius: 5,
            pointBackgroundColor: "rgba(255,255,255,1)",
            pointHoverBackgroundColor: "rgba(255,255,255,1)",
            pointBorderWidth: 2,
            pointHoverRadius: 7,
            pointHoverBorderWidth: 1
          }, {
            label: "Inactive",
            backgroundColor: "transparent",
            borderColor: "rgb(255, 199, 15)",
            data: activityData[0].second,
            lineTension: 0,
            borderDash: [10, 5],
            borderWidth: 1,
            pointRadius: 5,
            pointBackgroundColor: "rgba(255,255,255,1)",
            pointHoverBackgroundColor: "rgba(255,255,255,1)",
            pointBorderWidth: 2,
            pointHoverRadius: 7,
            pointHoverBorderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              gridLines: {
                display: false
              },
              ticks: {
                fontColor: "#8a909d"
              }
            }],
            yAxes: [{
              gridLines: {
                fontColor: "#8a909d",
                fontFamily: "Roboto, sans-serif",
                display: true,
                color: "#eee",
                zeroLineColor: "#eee"
              },
              ticks: {
                stepSize: 50,
                fontColor: "#8a909d",
                fontFamily: "Roboto, sans-serif"
              }
            }]
          },
          tooltips: {
            mode: "index",
            intersect: false,
            titleFontColor: "#888",
            bodyFontColor: "#555",
            titleFontSize: 12,
            bodyFontSize: 15,
            backgroundColor: "rgba(256,256,256,0.95)",
            displayColors: true,
            xPadding: 10,
            yPadding: 7,
            borderColor: "rgba(220, 220, 220, 0.9)",
            borderWidth: 2,
            caretSize: 6,
            caretPadding: 5
          }
        }
      };
      var ctx = document.getElementById("activity").getContext("2d");
      var myLine = new Chart(ctx, config);
      var items = document.querySelectorAll("#user-activity .nav-tabs .nav-item");
      items.forEach(function (item, index) {
        item.addEventListener("click", function () {
          config.data.datasets[0].data = activityData[index].first;
          config.data.datasets[1].data = activityData[index].second;
          myLine.update();
        });
      });
    }

    var hbar1 = document.getElementById("hbar1");

    if (hbar1 !== null) {
      var hbChart1 = new Chart(hbar1, {
        type: "horizontalBar",
        data: {
          labels: ["India", "USA", "Turkey"],
          datasets: [{
            label: "signup",
            data: [18, 13, 9.5],
            backgroundColor: "#4c84ff"
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              gridLines: {
                drawBorder: false,
                display: true,
                color: "#eee",
                zeroLineColor: "#eee",
                tickMarkLength: 3
              },
              ticks: {
                display: true,
                beginAtZero: true,
                fontFamily: "Roboto, sans-serif",
                fontColor: "#8a909d",
                callback: function callback(value) {
                  return value + " %";
                }
              }
            }],
            yAxes: [{
              gridLines: {
                drawBorder: false,
                display: false
              },
              ticks: {
                display: true,
                beginAtZero: false,
                fontFamily: "Roboto, sans-serif",
                fontColor: "#8a909d",
                fontSize: 14
              },
              barPercentage: 1.6,
              categoryPercentage: .2
            }]
          },
          tooltips: {
            mode: "index",
            titleFontColor: "#888",
            bodyFontColor: "#555",
            titleFontSize: 12,
            bodyFontSize: 15,
            backgroundColor: "rgba(256,256,256,0.95)",
            displayColors: true,
            xPadding: 10,
            yPadding: 7,
            borderColor: "rgba(220, 220, 220, 0.9)",
            borderWidth: 2,
            caretSize: 6,
            caretPadding: 5
          }
        }
      });
    }

    var hbar2 = document.getElementById("hbar2");

    if (hbar2 !== null) {
      var hbChart2 = new Chart(hbar2, {
        type: "horizontalBar",
        data: {
          labels: ["Florida", "Poland", "UK"],
          datasets: [{
            label: "signup",
            data: [7.5, 4.6, 4],
            backgroundColor: "#4c84ff"
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              gridLines: {
                drawBorder: false,
                display: true,
                color: "#eee",
                zeroLineColor: "#eee",
                tickMarkLength: 3
              },
              ticks: {
                display: true,
                beginAtZero: true,
                fontFamily: "Roboto, sans-serif",
                fontColor: "#8a909d",
                max: 20,
                callback: function callback(value) {
                  return value + "%";
                }
              }
            }],
            yAxes: [{
              gridLines: {
                drawBorder: false,
                display: false
              },
              ticks: {
                display: true,
                beginAtZero: false,
                fontFamily: "Roboto, sans-serif",
                fontColor: "#8a909d",
                fontSize: 14
              },
              barPercentage: 1.6,
              categoryPercentage: .2
            }]
          },
          tooltips: {
            mode: "index",
            titleFontColor: "#888",
            bodyFontColor: "#555",
            titleFontSize: 12,
            bodyFontSize: 15,
            backgroundColor: "rgba(256,256,256,0.95)",
            displayColors: true,
            xPadding: 10,
            yPadding: 7,
            borderColor: "rgba(220, 220, 220, 0.9)",
            borderWidth: 2,
            caretSize: 6,
            caretPadding: 5
          }
        }
      });
    }

    var deviceChart = document.getElementById("deviceChart");

    if (deviceChart !== null) {
      var mydeviceChart = new Chart(deviceChart, {
        type: "doughnut",
        data: {
          labels: ["Desktop", "Tablet", "Mobile"],
          datasets: [{
            label: ["Desktop", "Tablet", "Mobile"],
            data: [6e4, 15e3, 25e3],
            backgroundColor: ["rgba(76, 132, 255, 1)", "rgba(76, 132, 255, 0.85)", "rgba(76, 132, 255, 0.70)"],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          cutoutPercentage: 75,
          tooltips: {
            callbacks: {
              title: function title(tooltipItem, data) {
                return data["labels"][tooltipItem[0]["index"]];
              },
              label: function label(tooltipItem, data) {
                return data["datasets"][0]["data"][tooltipItem["index"]] + " Sessions";
              }
            },
            titleFontColor: "#888",
            bodyFontColor: "#555",
            titleFontSize: 12,
            bodyFontSize: 15,
            backgroundColor: "rgba(256,256,256,0.95)",
            displayColors: true,
            xPadding: 10,
            yPadding: 7,
            borderColor: "rgba(220, 220, 220, 0.9)",
            borderWidth: 2,
            caretSize: 6,
            caretPadding: 5
          }
        }
      });
    }
  });
  var barX = document.getElementById("barChart");

  if (barX !== null) {
    var myChart = new Chart(barX, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "signup",
          data: [5, 6, 4.5, 5.5, 3, 6, 4.5, 6, 8, 3, 5.5, 4],
          backgroundColor: "#4c84ff"
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {
              drawBorder: false,
              display: false
            },
            ticks: {
              display: false,
              beginAtZero: true
            },
            barPercentage: 1.8,
            categoryPercentage: .2
          }],
          yAxes: [{
            gridLines: {
              drawBorder: false,
              display: false
            },
            ticks: {
              display: false,
              beginAtZero: true
            }
          }]
        },
        tooltips: {
          titleFontColor: "#888",
          bodyFontColor: "#555",
          titleFontSize: 12,
          bodyFontSize: 15,
          backgroundColor: "rgba(256,256,256,0.95)",
          displayColors: false,
          borderColor: "rgba(220, 220, 220, 0.9)",
          borderWidth: 2
        }
      }
    });
  }

  var bar1 = document.getElementById("barChart1");

  if (bar1 !== null) {
    var myChart = new Chart(bar1, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
          label: "signup",
          data: [5, 7.5, 5.5, 6.5, 4, 9],
          backgroundColor: "#4c84ff"
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {
              drawBorder: false,
              display: false
            },
            ticks: {
              display: false,
              beginAtZero: true
            },
            barPercentage: 1.8,
            categoryPercentage: .2
          }],
          yAxes: [{
            gridLines: {
              drawBorder: false,
              display: false
            },
            ticks: {
              display: false,
              beginAtZero: true
            }
          }]
        },
        tooltips: {
          enabled: false
        }
      }
    });
  }

  var bar2 = document.getElementById("barChart2");

  if (bar2 !== null) {
    var myChart2 = new Chart(bar2, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
          label: "signup",
          data: [5, 7.5, 5.5, 6.5, 4, 9],
          backgroundColor: "#ffffff"
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {
              drawBorder: false,
              display: false
            },
            ticks: {
              display: false,
              beginAtZero: true
            },
            barPercentage: 1.8,
            categoryPercentage: .2
          }],
          yAxes: [{
            gridLines: {
              drawBorder: false,
              display: false
            },
            ticks: {
              display: false,
              beginAtZero: true
            }
          }]
        },
        tooltips: {
          enabled: false
        }
      }
    });
  }

  var bar3 = document.getElementById("barChart3");

  if (bar3 !== null) {
    var bar_Chart = new Chart(bar3, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "signup",
          data: [5, 6, 4.5, 5.5, 3, 6, 4.5, 6, 8, 3, 5.5, 4],
          backgroundColor: "#ffffff"
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {
              drawBorder: false,
              display: false
            },
            ticks: {
              display: false,
              beginAtZero: true
            },
            barPercentage: 1.8,
            categoryPercentage: .2
          }],
          yAxes: [{
            gridLines: {
              drawBorder: false,
              display: false
            },
            ticks: {
              display: false,
              beginAtZero: true
            }
          }]
        },
        tooltips: {
          enabled: true
        }
      }
    });
  }

  var gline1 = document.getElementById("gline1");

  if (gline1 !== null) {
    gline1 = gline1.getContext("2d");
    var gradientFill = gline1.createLinearGradient(0, 120, 0, 0);
    gradientFill.addColorStop(0, "rgba(41,204,151,0.10196)");
    gradientFill.addColorStop(1, "rgba(41,204,151,0.30196)");
    var lChart = new Chart(gline1, {
      type: "line",
      data: {
        labels: ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
        datasets: [{
          label: "Rev",
          lineTension: 0,
          pointRadius: .1,
          pointBackgroundColor: "rgba(255,255,255,1)",
          pointBorderWidth: 2,
          fill: true,
          backgroundColor: gradientFill,
          borderColor: "#29cc97",
          borderWidth: 2,
          data: [0, 5.5, 4, 9, 4, 7, 4.7]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {
              drawBorder: false,
              display: false
            },
            ticks: {
              display: false,
              beginAtZero: true
            },
            barPercentage: 1.8,
            categoryPercentage: .2
          }],
          yAxes: [{
            gridLines: {
              drawBorder: false,
              display: false
            },
            ticks: {
              display: false,
              beginAtZero: true
            }
          }]
        },
        tooltips: {
          enabled: false
        }
      }
    });
  }

  var gline2 = document.getElementById("gline2");

  if (gline2 !== null) {
    gline2 = gline2.getContext("2d");
    var gradientFill = gline2.createLinearGradient(0, 90, 0, 0);
    gradientFill.addColorStop(0, "rgba(255,255,255,0.10196)");
    gradientFill.addColorStop(1, "rgba(255,255,255,0.30196)");
    var lChart2 = new Chart(gline2, {
      type: "line",
      data: {
        labels: ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
        datasets: [{
          label: "Rev",
          lineTension: 0,
          pointRadius: .1,
          pointBackgroundColor: "rgba(255,255,255,1)",
          pointBorderWidth: 2,
          fill: true,
          backgroundColor: gradientFill,
          borderColor: "#ffffff",
          borderWidth: 2,
          data: [0, 5.5, 4, 9, 4, 7, 4.7]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {
              drawBorder: false,
              display: false
            },
            ticks: {
              display: false,
              beginAtZero: true
            },
            barPercentage: 1.8,
            categoryPercentage: .2
          }],
          yAxes: [{
            gridLines: {
              drawBorder: false,
              display: false
            },
            ticks: {
              display: false,
              beginAtZero: true
            }
          }]
        },
        tooltips: {
          enabled: false
        }
      }
    });
  }

  var gline3 = document.getElementById("line3");

  if (gline3 !== null) {
    gline3 = gline3.getContext("2d");
    var gradientFill = gline3.createLinearGradient(0, 90, 0, 0);
    gradientFill.addColorStop(0, "rgba(255,255,255,0.10196)");
    gradientFill.addColorStop(1, "rgba(255,255,255,0.30196)");
    var lChart3 = new Chart(gline3, {
      type: "line",
      data: {
        labels: ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
        datasets: [{
          label: "Rev",
          lineTension: 0,
          pointRadius: 4,
          pointBackgroundColor: "#29cc97",
          pointBorderWidth: 2,
          fill: true,
          backgroundColor: gradientFill,
          borderColor: "#ffffff",
          borderWidth: 2,
          data: [0, 4, 3, 5.5, 3, 4.7, 1]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            right: 10
          }
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {
              drawBorder: false,
              display: false
            },
            ticks: {
              display: false,
              beginAtZero: true
            },
            barPercentage: 1.8,
            categoryPercentage: .2
          }],
          yAxes: [{
            gridLines: {
              drawBorder: false,
              display: false
            },
            ticks: {
              display: false,
              beginAtZero: true
            }
          }]
        },
        tooltips: {
          enabled: true
        }
      }
    });
  }

  var acquisition3 = document.getElementById("bar3");

  if (acquisition3 !== null) {
    var acChart3 = new Chart(acquisition3, {
      type: "bar",
      data: {
        labels: ["4 Jan", "5 Jan", "6 Jan", "7 Jan", "8 Jan", "9 Jan", "10 Jan"],
        datasets: [{
          label: "Referral",
          backgroundColor: "rgb(76, 132, 255)",
          borderColor: "rgba(76, 132, 255,0)",
          data: [78, 90, 70, 75, 45, 52, 22],
          pointBackgroundColor: "rgba(76, 132, 255,0)",
          pointHoverBackgroundColor: "rgba(76, 132, 255,1)",
          pointHoverRadius: 3,
          pointHitRadius: 30
        }, {
          label: "Direct",
          backgroundColor: "rgb(254, 196, 0)",
          borderColor: "rgba(254, 196, 0,0)",
          data: [88, 115, 80, 96, 65, 77, 38],
          pointBackgroundColor: "rgba(254, 196, 0,0)",
          pointHoverBackgroundColor: "rgba(254, 196, 0,1)",
          pointHoverRadius: 3,
          pointHitRadius: 30
        }, {
          label: "Social",
          backgroundColor: "rgb(41, 204, 151)",
          borderColor: "rgba(41, 204, 151,0)",
          data: [103, 135, 102, 116, 83, 97, 55],
          pointBackgroundColor: "rgba(41, 204, 151,0)",
          pointHoverBackgroundColor: "rgba(41, 204, 151,1)",
          pointHoverRadius: 3,
          pointHitRadius: 30
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            }
          }],
          yAxes: [{
            gridLines: {
              display: true
            },
            ticks: {
              beginAtZero: true,
              stepSize: 50,
              fontColor: "#8a909d",
              fontFamily: "Roboto, sans-serif",
              max: 200
            }
          }]
        },
        tooltips: {}
      }
    });
    document.getElementById("customLegend").innerHTML = acChart3.generateLegend();
  }

  var mstat = document.getElementById("mstat");

  if (mstat !== null) {
    var msdChart = new Chart(mstat, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
          label: "Old",
          pointRadius: 4,
          pointBackgroundColor: "rgba(255,255,255,1)",
          pointBorderWidth: 2,
          fill: true,
          lineTension: 0,
          backgroundColor: "rgba(66,208,163,0.2)",
          borderWidth: 2.5,
          borderColor: "#42d0a3",
          data: [1e4, 17500, 2e3, 11e3, 19e3, 10500, 18e3]
        }, {
          label: "New",
          pointRadius: 4,
          pointBackgroundColor: "rgba(255,255,255,1)",
          pointBorderWidth: 2,
          fill: true,
          lineTension: 0,
          backgroundColor: "rgba(76,132,255,0.2)",
          borderWidth: 2.5,
          borderColor: "#4c84ff",
          data: [2e3, 11500, 1e4, 14e3, 11e3, 16800, 14500]
        }]
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {
              drawBorder: true,
              display: false
            },
            ticks: {
              display: true,
              beginAtZero: true,
              fontFamily: "Roboto, sans-serif",
              fontColor: "#8a909d"
            }
          }],
          yAxes: [{
            gridLines: {
              drawBorder: true,
              display: true
            },
            ticks: {
              callback: function callback(value) {
                var ranges = [{
                  divider: 1e6,
                  suffix: "M"
                }, {
                  divider: 1e3,
                  suffix: "k"
                }];

                function formatNumber(n) {
                  for (var i = 0; i < ranges.length; i++) {
                    if (n >= ranges[i].divider) {
                      return (n / ranges[i].divider).toString() + ranges[i].suffix;
                    }
                  }

                  return n;
                }

                return formatNumber(value);
              },
              stepSize: 5e3,
              fontColor: "#8a909d",
              fontFamily: "Roboto, sans-serif",
              beginAtZero: true
            }
          }]
        },
        tooltips: {
          enabled: true
        }
      }
    });
  }

  var worldMap = $("#world");

  if (worldMap.length !== 0) {
    worldMap.vectorMap({
      map: "world_mill",
      backgroundColor: "transparent",
      zoomOnScroll: false,
      regionStyle: {
        initial: {
          fill: "#e4e4e4",
          "fill-opacity": .9,
          stroke: "none",
          "stroke-width": 0,
          "stroke-opacity": 0
        }
      },
      markerStyle: {
        initial: {
          stroke: "transparent"
        },
        hover: {
          stroke: "rgba(112, 112, 112, 0.30)"
        }
      },
      markers: [{
        latLng: [54.673629, -62.347026],
        name: "America",
        style: {
          fill: "limegreen"
        }
      }, {
        latLng: [62.466943, 11.797592],
        name: "Europe",
        style: {
          fill: "orange"
        }
      }, {
        latLng: [23.956725, -8.768815],
        name: "Africa",
        style: {
          fill: "red"
        }
      }, {
        latLng: [-21.943369, 123.102198],
        name: "Australia",
        style: {
          fill: "royalblue"
        }
      }]
    });
  }

  var mapData2 = {
    IN: 19e3,
    US: 13e3,
    TR: 9500,
    DO: 7500,
    PL: 4600,
    UK: 4e3
  };
  var analyticWorldMap = $("#analytic-world");

  if (analyticWorldMap.length != 0) {
    analyticWorldMap.vectorMap({
      map: "world_mill",
      backgroundColor: "transparent",
      zoomOnScroll: false,
      regionStyle: {
        initial: {
          fill: "#e4e4e4",
          "fill-opacity": .9,
          stroke: "none",
          "stroke-width": 0,
          "stroke-opacity": 0
        }
      },
      series: {
        regions: [{
          values: mapData2,
          scale: ["#6a9ef9", "#b6d0ff"],
          normalizeFunction: "polynomial"
        }]
      }
    });
  }

  var demoWorldMap = $("#demoworld");

  if (demoWorldMap.length != 0) {
    demoWorldMap.vectorMap({
      map: "world_mill",
      backgroundColor: "transparent",
      regionStyle: {
        initial: {
          fill: "#9c9c9c"
        }
      }
    });
  }

  $(document).ready(function () {
    // var searchInput = $("#search-input");
    // if (searchInput.length != 0) {
    //     SimpleJekyllSearch.init({
    //         searchInput: document.getElementById("search-input"),
    //         resultsContainer: document.getElementById("search-results"),
    //         dataSource: "/assets/data/search.json",
    //         searchResultTemplate: '<li><div class="link"><a href="{link}">{label}</a></div><div class="location">{location}</div></li>',
    //         noResultsText: "<li>No results found</li>",
    //         limit: 10,
    //         fuzzy: true
    //     })
    // }
    var dataScrollHeight = $("[data-scroll-height]");

    function scrollWithBigMedia(media) {
      if (media.matches) {
        dataScrollHeight.each(function () {
          var scrollHeight = $(this).attr("data-scroll-height");
          $(this).css({
            height: scrollHeight + "px",
            overflow: "hidden"
          });
        });
        $(".slim-scroll").slimScroll({
          opacity: 0,
          height: "100%",
          color: "#999",
          size: "5px",
          touchScrollStep: 50
        }).mouseover(function () {
          $(this).next(".slimScrollBar").css("opacity", .4);
        });
      } else {
        dataScrollHeight.css({
          height: "auto",
          overflow: "auto"
        });
      }
    }

    if (dataScrollHeight.length != 0) {
      var media = window.matchMedia("(min-width: 992px)");
      scrollWithBigMedia(media);
      media.addListener(scrollWithBigMedia);
    }

    var chatLeftContent = $("#chat-left-content");

    if (chatLeftContent.length != 0) {
      chatLeftContent.slimScroll({});
    }

    var chatRightContent = $("#chat-right-content");

    if (chatRightContent.length != 0) {
      chatRightContent.slimScroll({});
    }

    var tooltip = $('[data-toggle="tooltip"]');

    if (tooltip.length != 0) {
      tooltip.tooltip({
        container: "body",
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
      });
    }

    var popover = $('[data-toggle="popover"]');

    if (popover.length != 0) {
      popover.popover();
    }

    var multipleSelect = $(".js-example-basic-multiple");

    if (multipleSelect.length != 0) {
      multipleSelect.select2();
    }

    var laddaButton = $(".ladda-button");

    if (laddaButton.length != 0) {
      Ladda.bind(".ladda-button", {
        timeout: 5e3
      });
      Ladda.bind(".progress-demo button", {
        callback: function callback(instance) {
          var progress = 0;
          var interval = setInterval(function () {
            progress = Math.min(progress + Math.random() * .1, 1);
            instance.setProgress(progress);

            if (progress === 1) {
              instance.stop();
              clearInterval(interval);
            }
          }, 200);
        }
      });
    }

    var toaster = $("#toaster");

    function callToaster(positionClass) {
      toastr.options = {
        closeButton: true,
        debug: false,
        newestOnTop: false,
        progressBar: true,
        positionClass: positionClass,
        preventDuplicates: false,
        onclick: null,
        showDuration: "300",
        hideDuration: "1000",
        timeOut: "5000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut"
      };
      toastr.success("Welcome to Sleek Dashboard", "Howdy!");
    }

    if (toaster.length != 0) {
      if (document.dir != "rtl") {
        callToaster("toast-top-right");
      } else {
        callToaster("toast-top-left");
      }
    }

    NProgress.done();
    $(".slim-scroll-right-sidebar-2").slimScroll({
      opacity: 0,
      height: "100%",
      color: "#999",
      size: "5px",
      touchScrollStep: 50
    }).mouseover(function () {
      $(this).next(".slimScrollBar").css("opacity", .4);
    });
    var circle = $(".circle");
    var gray = "#f5f6fa";

    if (circle.length != 0) {
      circle.circleProgress({
        lineCap: "round",
        startAngle: 4.8,
        emptyFill: [gray]
      });
    }
  });
  $(function () {
    if ($("#recent-orders").length != 0) {
      var start = moment().subtract(29, "days");
      var end = moment();

      var cb = function cb(start, end) {
        $("#recent-orders .date-range-report span").html(start.format("ll") + " - " + end.format("ll"));
      };

      $("#recent-orders .date-range-report").daterangepicker({
        startDate: start,
        endDate: end,
        opens: "left",
        ranges: {
          Today: [moment(), moment()],
          Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
          "Last 7 Days": [moment().subtract(6, "days"), moment()],
          "Last 30 Days": [moment().subtract(29, "days"), moment()],
          "This Month": [moment().startOf("month"), moment().endOf("month")],
          "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
        }
      }, cb);
      cb(start, end);
    }

    if ($("#user-activity").length != 0) {
      var start = moment().subtract(1, "days");
      var end = moment().subtract(1, "days");

      var cb = function cb(start, end) {
        $("#user-activity .date-range-report span").html(start.format("ll") + " - " + end.format("ll"));
      };

      $("#user-activity .date-range-report").daterangepicker({
        startDate: start,
        endDate: end,
        opens: "left",
        ranges: {
          Today: [moment(), moment()],
          Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
          "Last 7 Days": [moment().subtract(6, "days"), moment()],
          "Last 30 Days": [moment().subtract(29, "days"), moment()],
          "This Month": [moment().startOf("month"), moment().endOf("month")],
          "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
        }
      }, cb);
      cb(start, end);
    }

    if ($("#analytics-country").length != 0) {
      var start = moment();
      var end = moment();

      var cb = function cb(start, end) {
        $("#analytics-country .date-range-report span").html(start.format("ll") + " - " + end.format("ll"));
      };

      $("#analytics-country .date-range-report").daterangepicker({
        startDate: start,
        endDate: end,
        opens: "left",
        ranges: {
          Today: [moment(), moment()],
          Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
          "Last 7 Days": [moment().subtract(6, "days"), moment()],
          "Last 30 Days": [moment().subtract(29, "days"), moment()],
          "This Month": [moment().startOf("month"), moment().endOf("month")],
          "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
        }
      }, cb);
      cb(start, end);
    }

    if ($("#page-views").length != 0) {
      var start = moment();
      var end = moment();

      var cb = function cb(start, end) {
        $("#page-views .date-range-report span").html(start.format("ll") + " - " + end.format("ll"));
      };

      $("#page-views .date-range-report").daterangepicker({
        startDate: start,
        endDate: end,
        opens: "left",
        ranges: {
          Today: [moment(), moment()],
          Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
          "Last 7 Days": [moment().subtract(6, "days"), moment()],
          "Last 30 Days": [moment().subtract(29, "days"), moment()],
          "This Month": [moment().startOf("month"), moment().endOf("month")],
          "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
        }
      }, cb);
      cb(start, end);
    }

    if ($("#activity-user").length != 0) {
      var start = moment();
      var end = moment();

      var cb = function cb(start, end) {
        $("#activity-user .date-range-report span").html(start.format("ll") + " - " + end.format("ll"));
      };

      $("#activity-user .date-range-report").daterangepicker({
        startDate: start,
        endDate: end,
        opens: "left",
        ranges: {
          Today: [moment(), moment()],
          Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
          "Last 7 Days": [moment().subtract(6, "days"), moment()],
          "Last 30 Days": [moment().subtract(29, "days"), moment()],
          "This Month": [moment().startOf("month"), moment().endOf("month")],
          "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
        }
      }, cb);
      cb(start, end);
    }
  });

  (function () {
    $(document).ready(function () {
      var currentOptions = {
        headerType: "header-fixed",
        headerBackground: "header-light",
        navigationType: "sidebar-fixed",
        navigationBackground: "sidebar-dark",
        direction: "ltr"
      };

      function getOptions() {
        return JSON.parse(localStorage.getItem("optionsObject"));
      }

      function setOptions(propertyName, propertyValue) {
        var optionsCopy = Object.assign({}, currentOptions);
        optionsCopy[propertyName] = propertyValue;
        localStorage.setItem("optionsObject", JSON.stringify(optionsCopy));
      }

      if (getOptions() != null) {
        currentOptions = getOptions();
      } else {
        localStorage.setItem("optionsObject", JSON.stringify(currentOptions));
      }

      function clearOptions() {
        localStorage.removeItem("optionsObject");
      }

      if (getOptions() != null) {
        currentOptions = getOptions();
      } else {
        localStorage.setItem("optionsObject", JSON.stringify(currentOptions));
      }

      $(".right-sidebar-in").on("click", function () {
        jQuery(".right-sidebar-container-2").addClass("right-sidebar-2-visible");
      });
      $(".btn-close-right-sidebar-2").on("click", function () {
        jQuery(".right-sidebar-container-2").removeClass("right-sidebar-2-visible");
      });
      var body = jQuery("#body");
      var header_static = jQuery(".header-static-to");
      var header_fixed = jQuery(".header-fixed-to");
      header_static.click(function () {
        jQuery(this).addClass("btn-right-sidebar-2-active");
        header_fixed.removeClass("btn-right-sidebar-2-active");
        body.removeClass("header-fixed");
        body.addClass("header-static");
        setOptions("headerType", "header-static");
      });

      if (currentOptions.headerType === "header-static") {
        header_static.trigger("click");
      }

      header_fixed.click(function () {
        jQuery(this).addClass("btn-right-sidebar-2-active");
        header_static.removeClass("btn-right-sidebar-2-active");
        body.removeClass("header-static");
        body.addClass("header-fixed");
        setOptions("headerType", "header-fixed");
      });

      if (currentOptions.headerType === "header-fixed") {
        header_fixed.trigger("click");
      }

      if ($(window).width() > 750) {
        $("#sidebar-option-select").change(function () {
          var optionSelected = $(this).find("option:selected");
          var valueSelected = optionSelected.val();

          if (valueSelected === "sidebar-fixed") {
            body.removeClass("sidebar-fixed-offcanvas sidebar-static sidebar-static-offcanvas sidebar-collapse sidebar-collapse-out sidebar-minified sidebar-minified-out").addClass("sidebar-fixed");
            window.isMinified = false;
            window.isCollapsed = false;
            setOptions("navigationType", "sidebar-fixed");
          }

          if (valueSelected === "sidebar-fixed-minified") {
            body.removeClass("sidebar-fixed-offcanvas sidebar-static sidebar-static-offcanvas sidebar-collapse sidebar-collapse-out sidebar-minified sidebar-minified-out").addClass("sidebar-fixed sidebar-minified");
            window.isMinified = true;
            window.isCollapsed = false;
            setOptions("navigationType", "sidebar-fixed-minified");
          }

          if (valueSelected === "sidebar-fixed-offcanvas") {
            body.removeClass("sidebar-static sidebar-static-offcanvas sidebar-collapse-out sidebar-minified sidebar-minified-out sidebar-fixed").addClass("sidebar-fixed-offcanvas sidebar-collapse");
            window.isCollapsed = true;
            window.isMinified = false;
            setOptions("navigationType", "sidebar-fixed-offcanvas");
          }

          if (valueSelected === "sidebar-static") {
            body.removeClass("sidebar-fixed-offcanvas sidebar-static-offcanvas sidebar-collapse sidebar-collapse-out sidebar-minified-out sidebar-fixed").addClass("sidebar-static");
            window.isMinified = false;
            window.isCollapsed = false;
            setOptions("navigationType", "sidebar-static");
          }

          if (valueSelected === "sidebar-static-minified") {
            body.removeClass("sidebar-fixed-offcanvas sidebar-static-offcanvas sidebar-collapse sidebar-collapse-out sidebar-minified-out sidebar-fixed").addClass("sidebar-static sidebar-minified");
            window.isMinified = true;
            window.isCollapsed = false;
            setOptions("navigationType", "sidebar-static-minified");
          }

          if (valueSelected === "sidebar-static-offcanvas") {
            body.removeClass("sidebar-fixed-offcanvas sidebar-static sidebar-collapse-out sidebar-minified sidebar-minified-out sidebar-fixed").addClass("sidebar-static-offcanvas sidebar-collapse");
            window.isCollapsed = true;
            window.isMinified = false;
            setOptions("navigationType", "sidebar-static-offcanvas");
          }
        });

        if (currentOptions.navigationType === "sidebar-fixed") {
          $("#sidebar-option-select").val("sidebar-fixed").change();
        }

        if (currentOptions.navigationType === "sidebar-fixed-minified") {
          $("#sidebar-option-select").val("sidebar-fixed-minified").change();
        }

        if (currentOptions.navigationType === "sidebar-fixed-offcanvas") {
          $("#sidebar-option-select").val("sidebar-fixed-offcanvas").change();
        }

        if (currentOptions.navigationType === "sidebar-static") {
          $("#sidebar-option-select").val("sidebar-static").change();
        }

        if (currentOptions.navigationType === "sidebar-static-minified") {
          $("#sidebar-option-select").val("sidebar-static-minified").change();
        }

        if (currentOptions.navigationType === "sidebar-static-offcanvas") {
          $("#sidebar-option-select").val("sidebar-static-offcanvas").change();
        }
      }

      var header_dark = jQuery(".header-dark-to");
      var header_light = jQuery(".header-light-to");
      header_dark.click(function () {
        jQuery(this).addClass("btn-right-sidebar-2-active");
        header_light.removeClass("btn-right-sidebar-2-active");
        body.removeClass("header-light").addClass("header-dark");
        setOptions("headerBackground", "header-dark");
      });

      if (currentOptions.headerBackground === "header-dark") {
        header_dark.trigger("click");
      }

      header_light.click(function () {
        jQuery(this).addClass("btn-right-sidebar-2-active");
        header_dark.removeClass("btn-right-sidebar-2-active");
        body.removeClass("header-dark").addClass("header-light");
        setOptions("headerBackground", "header-light");
      });

      if (currentOptions.headerBackground === "header-light") {
        header_light.trigger("click");
      }

      var sidebar_dark = jQuery(".sidebar-dark-to");
      var sidebar_light = jQuery(".sidebar-light-to");
      sidebar_dark.click(function () {
        jQuery(this).addClass("btn-right-sidebar-2-active");
        sidebar_light.removeClass("btn-right-sidebar-2-active");
        body.removeClass("sidebar-light").addClass("sidebar-dark");
        setOptions("navigationBackground", "sidebar-dark");
      });

      if (currentOptions.navigationBackground === "sidebar-dark") {
        sidebar_dark.trigger("click");
      }

      sidebar_light.click(function () {
        jQuery(this).addClass("btn-right-sidebar-2-active");
        sidebar_dark.removeClass("btn-right-sidebar-2-active");
        body.removeClass("sidebar-dark").addClass("sidebar-light");
        setOptions("navigationBackground", "sidebar-light");
      });

      if (currentOptions.navigationBackground === "sidebar-light") {
        sidebar_light.trigger("click");
      }

      var ltr = jQuery(".ltr-to");
      var rtl = jQuery(".rtl-to");
      ltr.click(function () {
        jQuery(this).addClass("btn-right-sidebar-2-active");
        rtl.removeClass("btn-right-sidebar-2-active");
        $("html").attr("dir", "ltr");
        $("#sleek-css").attr("href", "assets/css/sleek.css");
        window.dir = "ltr";
        setOptions("direction", "ltr");
      });

      if (currentOptions.direction === "ltr") {
        ltr.trigger("click");
      }

      rtl.click(function () {
        jQuery(this).addClass("btn-right-sidebar-2-active");
        ltr.removeClass("btn-right-sidebar-2-active");
        $("html").attr("dir", "rtl");
        $("#sleek-css").attr("href", "assets/css/sleek.rtl.css");
        window.dir = "rtl";
        setOptions("direction", "rtl");
      });

      if (currentOptions.direction === "rtl") {
        rtl.trigger("click");
      }

      $("#reset-options").click(function () {
        clearOptions();
        location.reload();
      });
    });
  })();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))))

/***/ }),

/***/ "./app/assets/packs/spin.min.js":
/*!**************************************!*\
  !*** ./app/assets/packs/spin.min.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (t, i) {
   true ? module.exports = i() : undefined;
}(this, function () {
  "use strict";

  function t(t, i) {
    var e,
        o = document.createElement(t || "div");

    for (e in i) {
      o[e] = i[e];
    }

    return o;
  }

  function i(t) {
    for (var i = 1, e = arguments.length; i < e; i++) {
      t.appendChild(arguments[i]);
    }

    return t;
  }

  function e(t, i, e, o) {
    var n = ["opacity", i, ~~(100 * t), e, o].join("-"),
        r = .01 + e / o * 100,
        s = Math.max(1 - (1 - t) / i * (100 - r), t),
        a = l.substring(0, l.indexOf("Animation")).toLowerCase(),
        c = a && "-" + a + "-" || "";
    return d[n] || (p.insertRule("@" + c + "keyframes " + n + "{0%{opacity:" + s + "}" + r + "%{opacity:" + t + "}" + (r + .01) + "%{opacity:1}" + (r + i) % 100 + "%{opacity:" + t + "}100%{opacity:" + s + "}}", p.cssRules.length), d[n] = 1), n;
  }

  function o(t, i) {
    var e,
        o,
        n = t.style;

    for (i = i.charAt(0).toUpperCase() + i.slice(1), o = 0; o < c.length; o++) {
      if (e = c[o] + i, void 0 !== n[e]) return e;
    }

    if (void 0 !== n[i]) return i;
  }

  function n(t, i) {
    for (var e in i) {
      t.style[o(t, e) || e] = i[e];
    }

    return t;
  }

  function r(t) {
    for (var i = 1; i < arguments.length; i++) {
      var e = arguments[i];

      for (var o in e) {
        void 0 === t[o] && (t[o] = e[o]);
      }
    }

    return t;
  }

  function s(t, i) {
    return "string" == typeof t ? t : t[i % t.length];
  }

  function a(t) {
    this.opts = r(t || {}, a.defaults, u);
  }

  var l,
      c = ["webkit", "Moz", "ms", "O"],
      d = {},
      p = function () {
    var e = t("style", {
      type: "text/css"
    });
    return i(document.getElementsByTagName("head")[0], e), e.sheet || e.styleSheet;
  }(),
      u = {
    lines: 12,
    length: 7,
    width: 5,
    radius: 10,
    rotate: 0,
    corners: 1,
    color: "#000",
    direction: 1,
    speed: 1,
    trail: 100,
    opacity: .25,
    fps: 20,
    zIndex: 2e9,
    className: "spinner",
    top: "50%",
    left: "50%",
    position: "absolute"
  };

  a.defaults = {}, r(a.prototype, {
    spin: function spin(i) {
      this.stop();
      var e = this,
          o = e.opts,
          r = e.el = n(t(0, {
        className: o.className
      }), {
        position: o.position,
        width: 0,
        zIndex: o.zIndex
      });
      o.radius, o.length, o.width;

      if (n(r, {
        left: o.left,
        top: o.top
      }), i && i.insertBefore(r, i.firstChild || null), r.setAttribute("role", "progressbar"), e.lines(r, e.opts), !l) {
        var s,
            a = 0,
            c = (o.lines - 1) * (1 - o.direction) / 2,
            d = o.fps,
            p = d / o.speed,
            u = (1 - o.opacity) / (p * o.trail / 100),
            f = p / o.lines;
        !function t() {
          a++;

          for (var i = 0; i < o.lines; i++) {
            s = Math.max(1 - (a + (o.lines - i) * f) % p * u, o.opacity), e.opacity(r, i * o.direction + c, s, o);
          }

          e.timeout = e.el && setTimeout(t, ~~(1e3 / d));
        }();
      }

      return e;
    },
    stop: function stop() {
      var t = this.el;
      return t && (clearTimeout(this.timeout), t.parentNode && t.parentNode.removeChild(t), this.el = void 0), this;
    },
    lines: function lines(o, r) {
      function a(i, e) {
        return n(t(), {
          position: "absolute",
          width: r.length + r.width + "px",
          height: r.width + "px",
          background: i,
          boxShadow: e,
          transformOrigin: "left",
          transform: "rotate(" + ~~(360 / r.lines * d + r.rotate) + "deg) translate(" + r.radius + "px,0)",
          borderRadius: (r.corners * r.width >> 1) + "px"
        });
      }

      for (var c, d = 0, p = (r.lines - 1) * (1 - r.direction) / 2; d < r.lines; d++) {
        c = n(t(), {
          position: "absolute",
          top: 1 + ~(r.width / 2) + "px",
          transform: r.hwaccel ? "translate3d(0,0,0)" : "",
          opacity: r.opacity,
          animation: l && e(r.opacity, r.trail, p + d * r.direction, r.lines) + " " + 1 / r.speed + "s linear infinite"
        }), r.shadow && i(c, n(a("#000", "0 0 4px #000"), {
          top: "2px"
        })), i(o, i(c, a(s(r.color, d), "0 0 1px rgba(0,0,0,.1)")));
      }

      return o;
    },
    opacity: function opacity(t, i, e) {
      i < t.childNodes.length && (t.childNodes[i].style.opacity = e);
    }
  });
  var f = n(t("group"), {
    behavior: "url(#default#VML)"
  });
  return !o(f, "transform") && f.adj ? function () {
    function e(i, e) {
      return t("<" + i + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', e);
    }

    p.addRule(".spin-vml", "behavior:url(#default#VML)"), a.prototype.lines = function (t, o) {
      function r() {
        return n(e("group", {
          coordsize: d + " " + d,
          coordorigin: -c + " " + -c
        }), {
          width: d,
          height: d
        });
      }

      function a(t, a, l) {
        i(u, i(n(r(), {
          rotation: 360 / o.lines * t + "deg",
          left: ~~a
        }), i(n(e("roundrect", {
          arcsize: o.corners
        }), {
          width: c,
          height: o.width,
          left: o.radius,
          top: -o.width >> 1,
          filter: l
        }), e("fill", {
          color: s(o.color, t),
          opacity: o.opacity
        }), e("stroke", {
          opacity: 0
        }))));
      }

      var l,
          c = o.length + o.width,
          d = 2 * c,
          p = 2 * -(o.width + o.length) + "px",
          u = n(r(), {
        position: "absolute",
        top: p,
        left: p
      });
      if (o.shadow) for (l = 1; l <= o.lines; l++) {
        a(l, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
      }

      for (l = 1; l <= o.lines; l++) {
        a(l);
      }

      return i(t, u);
    }, a.prototype.opacity = function (t, i, e, o) {
      var n = t.firstChild;
      o = o.shadow && o.lines || 0, n && i + o < n.childNodes.length && (n = (n = (n = n.childNodes[i + o]) && n.firstChild) && n.firstChild) && (n.opacity = e);
    };
  }() : l = o(f, "animation"), a;
});

/***/ }),

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

/***/ }),

/***/ "./app/assets/packs/toastr.min.js":
/*!****************************************!*\
  !*** ./app/assets/packs/toastr.min.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function (e) {
  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_RESULT__ = (function (e) {
    return function () {
      function t(e, t, n) {
        return g({
          type: O.error,
          iconClass: m().iconClasses.error,
          message: e,
          optionsOverride: n,
          title: t
        });
      }

      function n(t, n) {
        return t || (t = m()), v = e("#" + t.containerId), v.length ? v : (n && (v = d(t)), v);
      }

      function o(e, t, n) {
        return g({
          type: O.info,
          iconClass: m().iconClasses.info,
          message: e,
          optionsOverride: n,
          title: t
        });
      }

      function s(e) {
        C = e;
      }

      function i(e, t, n) {
        return g({
          type: O.success,
          iconClass: m().iconClasses.success,
          message: e,
          optionsOverride: n,
          title: t
        });
      }

      function a(e, t, n) {
        return g({
          type: O.warning,
          iconClass: m().iconClasses.warning,
          message: e,
          optionsOverride: n,
          title: t
        });
      }

      function r(e, t) {
        var o = m();
        v || n(o), u(e, o, t) || l(o);
      }

      function c(t) {
        var o = m();
        return v || n(o), t && 0 === e(":focus", t).length ? void h(t) : void (v.children().length && v.remove());
      }

      function l(t) {
        for (var n = v.children(), o = n.length - 1; o >= 0; o--) {
          u(e(n[o]), t);
        }
      }

      function u(t, n, o) {
        var s = !(!o || !o.force) && o.force;
        return !(!t || !s && 0 !== e(":focus", t).length) && (t[n.hideMethod]({
          duration: n.hideDuration,
          easing: n.hideEasing,
          complete: function complete() {
            h(t);
          }
        }), !0);
      }

      function d(t) {
        return v = e("<div/>").attr("id", t.containerId).addClass(t.positionClass), v.appendTo(e(t.target)), v;
      }

      function p() {
        return {
          tapToDismiss: !0,
          toastClass: "toast",
          containerId: "toast-container",
          debug: !1,
          showMethod: "fadeIn",
          showDuration: 300,
          showEasing: "swing",
          onShown: void 0,
          hideMethod: "fadeOut",
          hideDuration: 1e3,
          hideEasing: "swing",
          onHidden: void 0,
          closeMethod: !1,
          closeDuration: !1,
          closeEasing: !1,
          closeOnHover: !0,
          extendedTimeOut: 1e3,
          iconClasses: {
            error: "toast-error",
            info: "toast-info",
            success: "toast-success",
            warning: "toast-warning"
          },
          iconClass: "toast-info",
          positionClass: "toast-top-right",
          timeOut: 5e3,
          titleClass: "toast-title",
          messageClass: "toast-message",
          escapeHtml: !1,
          target: "body",
          closeHtml: '<button type="button">&times;</button>',
          closeClass: "toast-close-button",
          newestOnTop: !0,
          preventDuplicates: !1,
          progressBar: !1,
          progressClass: "toast-progress",
          rtl: !1
        };
      }

      function f(e) {
        C && C(e);
      }

      function g(t) {
        function o(e) {
          return null == e && (e = ""), e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }

        function s() {
          c(), u(), d(), p(), g(), C(), l(), i();
        }

        function i() {
          var e = "";

          switch (t.iconClass) {
            case "toast-success":
            case "toast-info":
              e = "polite";
              break;

            default:
              e = "assertive";
          }

          I.attr("aria-live", e);
        }

        function a() {
          E.closeOnHover && I.hover(H, D), !E.onclick && E.tapToDismiss && I.click(b), E.closeButton && j && j.click(function (e) {
            e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && e.cancelBubble !== !0 && (e.cancelBubble = !0), E.onCloseClick && E.onCloseClick(e), b(!0);
          }), E.onclick && I.click(function (e) {
            E.onclick(e), b();
          });
        }

        function r() {
          I.hide(), I[E.showMethod]({
            duration: E.showDuration,
            easing: E.showEasing,
            complete: E.onShown
          }), E.timeOut > 0 && (k = setTimeout(b, E.timeOut), F.maxHideTime = parseFloat(E.timeOut), F.hideEta = new Date().getTime() + F.maxHideTime, E.progressBar && (F.intervalId = setInterval(x, 10)));
        }

        function c() {
          t.iconClass && I.addClass(E.toastClass).addClass(y);
        }

        function l() {
          E.newestOnTop ? v.prepend(I) : v.append(I);
        }

        function u() {
          if (t.title) {
            var e = t.title;
            E.escapeHtml && (e = o(t.title)), M.append(e).addClass(E.titleClass), I.append(M);
          }
        }

        function d() {
          if (t.message) {
            var e = t.message;
            E.escapeHtml && (e = o(t.message)), B.append(e).addClass(E.messageClass), I.append(B);
          }
        }

        function p() {
          E.closeButton && (j.addClass(E.closeClass).attr("role", "button"), I.prepend(j));
        }

        function g() {
          E.progressBar && (q.addClass(E.progressClass), I.prepend(q));
        }

        function C() {
          E.rtl && I.addClass("rtl");
        }

        function O(e, t) {
          if (e.preventDuplicates) {
            if (t.message === w) return !0;
            w = t.message;
          }

          return !1;
        }

        function b(t) {
          var n = t && E.closeMethod !== !1 ? E.closeMethod : E.hideMethod,
              o = t && E.closeDuration !== !1 ? E.closeDuration : E.hideDuration,
              s = t && E.closeEasing !== !1 ? E.closeEasing : E.hideEasing;
          if (!e(":focus", I).length || t) return clearTimeout(F.intervalId), I[n]({
            duration: o,
            easing: s,
            complete: function complete() {
              h(I), clearTimeout(k), E.onHidden && "hidden" !== P.state && E.onHidden(), P.state = "hidden", P.endTime = new Date(), f(P);
            }
          });
        }

        function D() {
          (E.timeOut > 0 || E.extendedTimeOut > 0) && (k = setTimeout(b, E.extendedTimeOut), F.maxHideTime = parseFloat(E.extendedTimeOut), F.hideEta = new Date().getTime() + F.maxHideTime);
        }

        function H() {
          clearTimeout(k), F.hideEta = 0, I.stop(!0, !0)[E.showMethod]({
            duration: E.showDuration,
            easing: E.showEasing
          });
        }

        function x() {
          var e = (F.hideEta - new Date().getTime()) / F.maxHideTime * 100;
          q.width(e + "%");
        }

        var E = m(),
            y = t.iconClass || E.iconClass;

        if ("undefined" != typeof t.optionsOverride && (E = e.extend(E, t.optionsOverride), y = t.optionsOverride.iconClass || y), !O(E, t)) {
          T++, v = n(E, !0);
          var k = null,
              I = e("<div/>"),
              M = e("<div/>"),
              B = e("<div/>"),
              q = e("<div/>"),
              j = e(E.closeHtml),
              F = {
            intervalId: null,
            hideEta: null,
            maxHideTime: null
          },
              P = {
            toastId: T,
            state: "visible",
            startTime: new Date(),
            options: E,
            map: t
          };
          return s(), r(), a(), f(P), E.debug && console && console.log(P), I;
        }
      }

      function m() {
        return e.extend({}, p(), b.options);
      }

      function h(e) {
        v || (v = n()), e.is(":visible") || (e.remove(), e = null, 0 === v.children().length && (v.remove(), w = void 0));
      }

      var v,
          C,
          w,
          T = 0,
          O = {
        error: "error",
        info: "info",
        success: "success",
        warning: "warning"
      },
          b = {
        clear: r,
        remove: c,
        error: t,
        getContainer: n,
        info: o,
        options: {},
        subscribe: s,
        success: i,
        version: "2.1.4",
        warning: a
      };
      return b;
    }();
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}(__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js"));

/***/ }),

/***/ "./app/assets/stylesheets/application.scss":
/*!*************************************************!*\
  !*** ./app/assets/stylesheets/application.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./application.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./app/assets/stylesheets/application.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === "object" && typeof module !== "undefined" ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (exports) {
  "use strict";

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var sparkMd5 = createCommonjsModule(function (module, exports) {
    (function (factory) {
      {
        module.exports = factory();
      }
    })(function (undefined) {
      var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

      function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      }

      function md5blk(s) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }

        return md5blks;
      }

      function md5blk_array(a) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }

        return md5blks;
      }

      function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk(s.substring(i - 64, i)));
        }

        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }

        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= a[i] << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function rhex(n) {
        var s = "",
            j;

        for (j = 0; j < 4; j += 1) {
          s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        }

        return s;
      }

      function hex(x) {
        var i;

        for (i = 0; i < x.length; i += 1) {
          x[i] = rhex(x[i]);
        }

        return x.join("");
      }

      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") ;

      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
          function clamp(val, length) {
            val = val | 0 || 0;

            if (val < 0) {
              return Math.max(val + length, 0);
            }

            return Math.min(val, length);
          }

          ArrayBuffer.prototype.slice = function (from, to) {
            var length = this.byteLength,
                begin = clamp(from, length),
                end = length,
                num,
                target,
                targetArray,
                sourceArray;

            if (to !== undefined) {
              end = clamp(to, length);
            }

            if (begin > end) {
              return new ArrayBuffer(0);
            }

            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
          };
        })();
      }

      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }

        return str;
      }

      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
            buff = new ArrayBuffer(length),
            arr = new Uint8Array(buff),
            i;

        for (i = 0; i < length; i += 1) {
          arr[i] = str.charCodeAt(i);
        }

        return returnUInt8Array ? arr : buff;
      }

      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }

      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }

      function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;

        for (x = 0; x < length - 1; x += 2) {
          bytes.push(parseInt(hex.substr(x, 2), 16));
        }

        return String.fromCharCode.apply(String, bytes);
      }

      function SparkMD5() {
        this.reset();
      }

      SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this;
      };

      SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length,
            i;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }

        this._buff = this._buff.substring(i - 64);
        return this;
      };

      SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            i,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.prototype.reset = function () {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.prototype.getState = function () {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash
        };
      };

      SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };

      SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };

      SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
            tmp,
            lo,
            hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(this._hash, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };

      SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw);
      };

      SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      SparkMD5.ArrayBuffer = function () {
        this.reset();
      };

      SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
            length = buff.length,
            i;
        this._length += arr.byteLength;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }

        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i,
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };

      SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
      };

      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

      SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      return SparkMD5;
    });
  });

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;

  var FileChecksum = function () {
    createClass(FileChecksum, null, [{
      key: "create",
      value: function create(file, callback) {
        var instance = new FileChecksum(file);
        instance.create(callback);
      }
    }]);

    function FileChecksum(file) {
      classCallCheck(this, FileChecksum);
      this.file = file;
      this.chunkSize = 2097152;
      this.chunkCount = Math.ceil(this.file.size / this.chunkSize);
      this.chunkIndex = 0;
    }

    createClass(FileChecksum, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        this.callback = callback;
        this.md5Buffer = new sparkMd5.ArrayBuffer();
        this.fileReader = new FileReader();
        this.fileReader.addEventListener("load", function (event) {
          return _this.fileReaderDidLoad(event);
        });
        this.fileReader.addEventListener("error", function (event) {
          return _this.fileReaderDidError(event);
        });
        this.readNextChunk();
      }
    }, {
      key: "fileReaderDidLoad",
      value: function fileReaderDidLoad(event) {
        this.md5Buffer.append(event.target.result);

        if (!this.readNextChunk()) {
          var binaryDigest = this.md5Buffer.end(true);
          var base64digest = btoa(binaryDigest);
          this.callback(null, base64digest);
        }
      }
    }, {
      key: "fileReaderDidError",
      value: function fileReaderDidError(event) {
        this.callback("Error reading " + this.file.name);
      }
    }, {
      key: "readNextChunk",
      value: function readNextChunk() {
        if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0) {
          var start = this.chunkIndex * this.chunkSize;
          var end = Math.min(start + this.chunkSize, this.file.size);
          var bytes = fileSlice.call(this.file, start, end);
          this.fileReader.readAsArrayBuffer(bytes);
          this.chunkIndex++;
          return true;
        } else {
          return false;
        }
      }
    }]);
    return FileChecksum;
  }();

  function getMetaValue(name) {
    var element = findElement(document.head, 'meta[name="' + name + '"]');

    if (element) {
      return element.getAttribute("content");
    }
  }

  function findElements(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    var elements = root.querySelectorAll(selector);
    return toArray$1(elements);
  }

  function findElement(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    return root.querySelector(selector);
  }

  function dispatchEvent(element, type) {
    var eventInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var disabled = element.disabled;
    var bubbles = eventInit.bubbles,
        cancelable = eventInit.cancelable,
        detail = eventInit.detail;
    var event = document.createEvent("Event");
    event.initEvent(type, bubbles || true, cancelable || true);
    event.detail = detail || {};

    try {
      element.disabled = false;
      element.dispatchEvent(event);
    } finally {
      element.disabled = disabled;
    }

    return event;
  }

  function toArray$1(value) {
    if (Array.isArray(value)) {
      return value;
    } else if (Array.from) {
      return Array.from(value);
    } else {
      return [].slice.call(value);
    }
  }

  var BlobRecord = function () {
    function BlobRecord(file, checksum, url) {
      var _this = this;

      classCallCheck(this, BlobRecord);
      this.file = file;
      this.attributes = {
        filename: file.name,
        content_type: file.type || "application/octet-stream",
        byte_size: file.size,
        checksum: checksum
      };
      this.xhr = new XMLHttpRequest();
      this.xhr.open("POST", url, true);
      this.xhr.responseType = "json";
      this.xhr.setRequestHeader("Content-Type", "application/json");
      this.xhr.setRequestHeader("Accept", "application/json");
      this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      var csrfToken = getMetaValue("csrf-token");

      if (csrfToken != undefined) {
        this.xhr.setRequestHeader("X-CSRF-Token", csrfToken);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobRecord, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(JSON.stringify({
          blob: this.attributes
        }));
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        if (this.status >= 200 && this.status < 300) {
          var response = this.response;
          var direct_upload = response.direct_upload;
          delete response.direct_upload;
          this.attributes = response;
          this.directUploadData = direct_upload;
          this.callback(null, this.toJSON());
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var result = {};

        for (var key in this.attributes) {
          result[key] = this.attributes[key];
        }

        return result;
      }
    }, {
      key: "status",
      get: function get$$1() {
        return this.xhr.status;
      }
    }, {
      key: "response",
      get: function get$$1() {
        var _xhr = this.xhr,
            responseType = _xhr.responseType,
            response = _xhr.response;

        if (responseType == "json") {
          return response;
        } else {
          return JSON.parse(response);
        }
      }
    }]);
    return BlobRecord;
  }();

  var BlobUpload = function () {
    function BlobUpload(blob) {
      var _this = this;

      classCallCheck(this, BlobUpload);
      this.blob = blob;
      this.file = blob.file;
      var _blob$directUploadDat = blob.directUploadData,
          url = _blob$directUploadDat.url,
          headers = _blob$directUploadDat.headers;
      this.xhr = new XMLHttpRequest();
      this.xhr.open("PUT", url, true);
      this.xhr.responseType = "text";

      for (var key in headers) {
        this.xhr.setRequestHeader(key, headers[key]);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobUpload, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(this.file.slice());
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        var _xhr = this.xhr,
            status = _xhr.status,
            response = _xhr.response;

        if (status >= 200 && status < 300) {
          this.callback(null, response);
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status);
      }
    }]);
    return BlobUpload;
  }();

  var id = 0;

  var DirectUpload = function () {
    function DirectUpload(file, url, delegate) {
      classCallCheck(this, DirectUpload);
      this.id = ++id;
      this.file = file;
      this.url = url;
      this.delegate = delegate;
    }

    createClass(DirectUpload, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        FileChecksum.create(this.file, function (error, checksum) {
          if (error) {
            callback(error);
            return;
          }

          var blob = new BlobRecord(_this.file, checksum, _this.url);
          notify(_this.delegate, "directUploadWillCreateBlobWithXHR", blob.xhr);
          blob.create(function (error) {
            if (error) {
              callback(error);
            } else {
              var upload = new BlobUpload(blob);
              notify(_this.delegate, "directUploadWillStoreFileWithXHR", upload.xhr);
              upload.create(function (error) {
                if (error) {
                  callback(error);
                } else {
                  callback(null, blob.toJSON());
                }
              });
            }
          });
        });
      }
    }]);
    return DirectUpload;
  }();

  function notify(object, methodName) {
    if (object && typeof object[methodName] == "function") {
      for (var _len = arguments.length, messages = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        messages[_key - 2] = arguments[_key];
      }

      return object[methodName].apply(object, messages);
    }
  }

  var DirectUploadController = function () {
    function DirectUploadController(input, file) {
      classCallCheck(this, DirectUploadController);
      this.input = input;
      this.file = file;
      this.directUpload = new DirectUpload(this.file, this.url, this);
      this.dispatch("initialize");
    }

    createClass(DirectUploadController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = this.input.name;
        this.input.insertAdjacentElement("beforebegin", hiddenInput);
        this.dispatch("start");
        this.directUpload.create(function (error, attributes) {
          if (error) {
            hiddenInput.parentNode.removeChild(hiddenInput);

            _this.dispatchError(error);
          } else {
            hiddenInput.value = attributes.signed_id;
          }

          _this.dispatch("end");

          callback(error);
        });
      }
    }, {
      key: "uploadRequestDidProgress",
      value: function uploadRequestDidProgress(event) {
        var progress = event.loaded / event.total * 100;

        if (progress) {
          this.dispatch("progress", {
            progress: progress
          });
        }
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        detail.file = this.file;
        detail.id = this.directUpload.id;
        return dispatchEvent(this.input, "direct-upload:" + name, {
          detail: detail
        });
      }
    }, {
      key: "dispatchError",
      value: function dispatchError(error) {
        var event = this.dispatch("error", {
          error: error
        });

        if (!event.defaultPrevented) {
          alert(error);
        }
      }
    }, {
      key: "directUploadWillCreateBlobWithXHR",
      value: function directUploadWillCreateBlobWithXHR(xhr) {
        this.dispatch("before-blob-request", {
          xhr: xhr
        });
      }
    }, {
      key: "directUploadWillStoreFileWithXHR",
      value: function directUploadWillStoreFileWithXHR(xhr) {
        var _this2 = this;

        this.dispatch("before-storage-request", {
          xhr: xhr
        });
        xhr.upload.addEventListener("progress", function (event) {
          return _this2.uploadRequestDidProgress(event);
        });
      }
    }, {
      key: "url",
      get: function get$$1() {
        return this.input.getAttribute("data-direct-upload-url");
      }
    }]);
    return DirectUploadController;
  }();

  var inputSelector = "input[type=file][data-direct-upload-url]:not([disabled])";

  var DirectUploadsController = function () {
    function DirectUploadsController(form) {
      classCallCheck(this, DirectUploadsController);
      this.form = form;
      this.inputs = findElements(form, inputSelector).filter(function (input) {
        return input.files.length;
      });
    }

    createClass(DirectUploadsController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var controllers = this.createDirectUploadControllers();

        var startNextController = function startNextController() {
          var controller = controllers.shift();

          if (controller) {
            controller.start(function (error) {
              if (error) {
                callback(error);

                _this.dispatch("end");
              } else {
                startNextController();
              }
            });
          } else {
            callback();

            _this.dispatch("end");
          }
        };

        this.dispatch("start");
        startNextController();
      }
    }, {
      key: "createDirectUploadControllers",
      value: function createDirectUploadControllers() {
        var controllers = [];
        this.inputs.forEach(function (input) {
          toArray$1(input.files).forEach(function (file) {
            var controller = new DirectUploadController(input, file);
            controllers.push(controller);
          });
        });
        return controllers;
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return dispatchEvent(this.form, "direct-uploads:" + name, {
          detail: detail
        });
      }
    }]);
    return DirectUploadsController;
  }();

  var processingAttribute = "data-direct-uploads-processing";
  var submitButtonsByForm = new WeakMap();
  var started = false;

  function start() {
    if (!started) {
      started = true;
      document.addEventListener("click", didClick, true);
      document.addEventListener("submit", didSubmitForm);
      document.addEventListener("ajax:before", didSubmitRemoteElement);
    }
  }

  function didClick(event) {
    var target = event.target;

    if ((target.tagName == "INPUT" || target.tagName == "BUTTON") && target.type == "submit" && target.form) {
      submitButtonsByForm.set(target.form, target);
    }
  }

  function didSubmitForm(event) {
    handleFormSubmissionEvent(event);
  }

  function didSubmitRemoteElement(event) {
    if (event.target.tagName == "FORM") {
      handleFormSubmissionEvent(event);
    }
  }

  function handleFormSubmissionEvent(event) {
    var form = event.target;

    if (form.hasAttribute(processingAttribute)) {
      event.preventDefault();
      return;
    }

    var controller = new DirectUploadsController(form);
    var inputs = controller.inputs;

    if (inputs.length) {
      event.preventDefault();
      form.setAttribute(processingAttribute, "");
      inputs.forEach(disable);
      controller.start(function (error) {
        form.removeAttribute(processingAttribute);

        if (error) {
          inputs.forEach(enable);
        } else {
          submitForm(form);
        }
      });
    }
  }

  function submitForm(form) {
    var button = submitButtonsByForm.get(form) || findElement(form, "input[type=submit], button[type=submit]");

    if (button) {
      var _button = button,
          disabled = _button.disabled;
      button.disabled = false;
      button.focus();
      button.click();
      button.disabled = disabled;
    } else {
      button = document.createElement("input");
      button.type = "submit";
      button.style.display = "none";
      form.appendChild(button);
      button.click();
      form.removeChild(button);
    }

    submitButtonsByForm.delete(form);
  }

  function disable(input) {
    input.disabled = true;
  }

  function enable(input) {
    input.disabled = false;
  }

  function autostart() {
    if (window.ActiveStorage) {
      start();
    }
  }

  setTimeout(autostart, 1);
  exports.start = start;
  exports.DirectUpload = DirectUpload;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js":
/*!******************************************************************!*\
  !*** ./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery, module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*
Unobtrusive JavaScript
https://github.com/rails/rails/blob/main/actionview/app/assets/javascripts
Released under the MIT license
 */
;
(function () {
  var context = this;
  (function () {
    (function () {
      this.Rails = {
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',
        buttonClickSelector: {
          selector: 'button[data-remote]:not([form]), button[data-confirm]:not([form])',
          exclude: 'form button'
        },
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form:not([data-turbo=true])',
        formInputClickSelector: 'form:not([data-turbo=true]) input[type=submit], form:not([data-turbo=true]) input[type=image], form:not([data-turbo=true]) button[type=submit], form:not([data-turbo=true]) button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
        formDisableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
        formEnableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
        fileInputSelector: 'input[name][type=file]:not([disabled])',
        linkDisableSelector: 'a[data-disable-with], a[data-disable]',
        buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]'
      };
    }).call(this);
  }).call(context);
  var Rails = context.Rails;
  (function () {
    (function () {
      var nonce;
      nonce = null;

      Rails.loadCSPNonce = function () {
        var ref;
        return nonce = (ref = document.querySelector("meta[name=csp-nonce]")) != null ? ref.content : void 0;
      };

      Rails.cspNonce = function () {
        return nonce != null ? nonce : Rails.loadCSPNonce();
      };
    }).call(this);
    (function () {
      var expando, m;
      m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;

      Rails.matches = function (element, selector) {
        if (selector.exclude != null) {
          return m.call(element, selector.selector) && !m.call(element, selector.exclude);
        } else {
          return m.call(element, selector);
        }
      };

      expando = '_ujsData';

      Rails.getData = function (element, key) {
        var ref;
        return (ref = element[expando]) != null ? ref[key] : void 0;
      };

      Rails.setData = function (element, key, value) {
        if (element[expando] == null) {
          element[expando] = {};
        }

        return element[expando][key] = value;
      };

      Rails.$ = function (selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
      };
    }).call(this);
    (function () {
      var $, csrfParam, csrfToken;
      $ = Rails.$;

      csrfToken = Rails.csrfToken = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-token]');
        return meta && meta.content;
      };

      csrfParam = Rails.csrfParam = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-param]');
        return meta && meta.content;
      };

      Rails.CSRFProtection = function (xhr) {
        var token;
        token = csrfToken();

        if (token != null) {
          return xhr.setRequestHeader('X-CSRF-Token', token);
        }
      };

      Rails.refreshCSRFTokens = function () {
        var param, token;
        token = csrfToken();
        param = csrfParam();

        if (token != null && param != null) {
          return $('form input[name="' + param + '"]').forEach(function (input) {
            return input.value = token;
          });
        }
      };
    }).call(this);
    (function () {
      var CustomEvent, fire, matches, preventDefault;
      matches = Rails.matches;
      CustomEvent = window.CustomEvent;

      if (typeof CustomEvent !== 'function') {
        CustomEvent = function CustomEvent(event, params) {
          var evt;
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };

        CustomEvent.prototype = window.Event.prototype;
        preventDefault = CustomEvent.prototype.preventDefault;

        CustomEvent.prototype.preventDefault = function () {
          var result;
          result = preventDefault.call(this);

          if (this.cancelable && !this.defaultPrevented) {
            Object.defineProperty(this, 'defaultPrevented', {
              get: function get() {
                return true;
              }
            });
          }

          return result;
        };
      }

      fire = Rails.fire = function (obj, name, data) {
        var event;
        event = new CustomEvent(name, {
          bubbles: true,
          cancelable: true,
          detail: data
        });
        obj.dispatchEvent(event);
        return !event.defaultPrevented;
      };

      Rails.stopEverything = function (e) {
        fire(e.target, 'ujs:everythingStopped');
        e.preventDefault();
        e.stopPropagation();
        return e.stopImmediatePropagation();
      };

      Rails.delegate = function (element, selector, eventType, handler) {
        return element.addEventListener(eventType, function (e) {
          var target;
          target = e.target;

          while (!(!(target instanceof Element) || matches(target, selector))) {
            target = target.parentNode;
          }

          if (target instanceof Element && handler.call(target, e) === false) {
            e.preventDefault();
            return e.stopPropagation();
          }
        });
      };
    }).call(this);
    (function () {
      var AcceptHeaders, CSRFProtection, createXHR, cspNonce, fire, prepareOptions, processResponse;
      cspNonce = Rails.cspNonce, CSRFProtection = Rails.CSRFProtection, fire = Rails.fire;
      AcceptHeaders = {
        '*': '*/*',
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      };

      Rails.ajax = function (options) {
        var xhr;
        options = prepareOptions(options);
        xhr = createXHR(options, function () {
          var ref, response;
          response = processResponse((ref = xhr.response) != null ? ref : xhr.responseText, xhr.getResponseHeader('Content-Type'));

          if (Math.floor(xhr.status / 100) === 2) {
            if (typeof options.success === "function") {
              options.success(response, xhr.statusText, xhr);
            }
          } else {
            if (typeof options.error === "function") {
              options.error(response, xhr.statusText, xhr);
            }
          }

          return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : void 0;
        });

        if (options.beforeSend != null && !options.beforeSend(xhr, options)) {
          return false;
        }

        if (xhr.readyState === XMLHttpRequest.OPENED) {
          return xhr.send(options.data);
        }
      };

      prepareOptions = function prepareOptions(options) {
        options.url = options.url || location.href;
        options.type = options.type.toUpperCase();

        if (options.type === 'GET' && options.data) {
          if (options.url.indexOf('?') < 0) {
            options.url += '?' + options.data;
          } else {
            options.url += '&' + options.data;
          }
        }

        if (AcceptHeaders[options.dataType] == null) {
          options.dataType = '*';
        }

        options.accept = AcceptHeaders[options.dataType];

        if (options.dataType !== '*') {
          options.accept += ', */*; q=0.01';
        }

        return options;
      };

      createXHR = function createXHR(options, done) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open(options.type, options.url, true);
        xhr.setRequestHeader('Accept', options.accept);

        if (typeof options.data === 'string') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        }

        if (!options.crossDomain) {
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
          CSRFProtection(xhr);
        }

        xhr.withCredentials = !!options.withCredentials;

        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            return done(xhr);
          }
        };

        return xhr;
      };

      processResponse = function processResponse(response, type) {
        var parser, script;

        if (typeof response === 'string' && typeof type === 'string') {
          if (type.match(/\bjson\b/)) {
            try {
              response = JSON.parse(response);
            } catch (error) {}
          } else if (type.match(/\b(?:java|ecma)script\b/)) {
            script = document.createElement('script');
            script.setAttribute('nonce', cspNonce());
            script.text = response;
            document.head.appendChild(script).parentNode.removeChild(script);
          } else if (type.match(/\b(xml|html|svg)\b/)) {
            parser = new DOMParser();
            type = type.replace(/;.+/, '');

            try {
              response = parser.parseFromString(response, type);
            } catch (error) {}
          }
        }

        return response;
      };

      Rails.href = function (element) {
        return element.href;
      };

      Rails.isCrossDomain = function (url) {
        var e, originAnchor, urlAnchor;
        originAnchor = document.createElement('a');
        originAnchor.href = location.href;
        urlAnchor = document.createElement('a');

        try {
          urlAnchor.href = url;
          return !((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host || originAnchor.protocol + '//' + originAnchor.host === urlAnchor.protocol + '//' + urlAnchor.host);
        } catch (error) {
          e = error;
          return true;
        }
      };
    }).call(this);
    (function () {
      var matches, toArray;
      matches = Rails.matches;

      toArray = function toArray(e) {
        return Array.prototype.slice.call(e);
      };

      Rails.serializeElement = function (element, additionalParam) {
        var inputs, params;
        inputs = [element];

        if (matches(element, 'form')) {
          inputs = toArray(element.elements);
        }

        params = [];
        inputs.forEach(function (input) {
          if (!input.name || input.disabled) {
            return;
          }

          if (matches(input, 'fieldset[disabled] *')) {
            return;
          }

          if (matches(input, 'select')) {
            return toArray(input.options).forEach(function (option) {
              if (option.selected) {
                return params.push({
                  name: input.name,
                  value: option.value
                });
              }
            });
          } else if (input.checked || ['radio', 'checkbox', 'submit'].indexOf(input.type) === -1) {
            return params.push({
              name: input.name,
              value: input.value
            });
          }
        });

        if (additionalParam) {
          params.push(additionalParam);
        }

        return params.map(function (param) {
          if (param.name != null) {
            return encodeURIComponent(param.name) + "=" + encodeURIComponent(param.value);
          } else {
            return param;
          }
        }).join('&');
      };

      Rails.formElements = function (form, selector) {
        if (matches(form, 'form')) {
          return toArray(form.elements).filter(function (el) {
            return matches(el, selector);
          });
        } else {
          return toArray(form.querySelectorAll(selector));
        }
      };
    }).call(this);
    (function () {
      var allowAction, fire, stopEverything;
      fire = Rails.fire, stopEverything = Rails.stopEverything;

      Rails.handleConfirm = function (e) {
        if (!allowAction(this)) {
          return stopEverything(e);
        }
      };

      Rails.confirm = function (message, element) {
        return confirm(message);
      };

      allowAction = function allowAction(element) {
        var answer, callback, message;
        message = element.getAttribute('data-confirm');

        if (!message) {
          return true;
        }

        answer = false;

        if (fire(element, 'confirm')) {
          try {
            answer = Rails.confirm(message, element);
          } catch (error) {}

          callback = fire(element, 'confirm:complete', [answer]);
        }

        return answer && callback;
      };
    }).call(this);
    (function () {
      var disableFormElement, disableFormElements, disableLinkElement, enableFormElement, enableFormElements, enableLinkElement, formElements, getData, isXhrRedirect, matches, setData, stopEverything;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, stopEverything = Rails.stopEverything, formElements = Rails.formElements;

      Rails.handleDisabledElement = function (e) {
        var element;
        element = this;

        if (element.disabled) {
          return stopEverything(e);
        }
      };

      Rails.enableElement = function (e) {
        var element;

        if (e instanceof Event) {
          if (isXhrRedirect(e)) {
            return;
          }

          element = e.target;
        } else {
          element = e;
        }

        if (matches(element, Rails.linkDisableSelector)) {
          return enableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formEnableSelector)) {
          return enableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return enableFormElements(element);
        }
      };

      Rails.disableElement = function (e) {
        var element;
        element = e instanceof Event ? e.target : e;

        if (matches(element, Rails.linkDisableSelector)) {
          return disableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formDisableSelector)) {
          return disableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return disableFormElements(element);
        }
      };

      disableLinkElement = function disableLinkElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          setData(element, 'ujs:enable-with', element.innerHTML);
          element.innerHTML = replacement;
        }

        element.addEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', true);
      };

      enableLinkElement = function enableLinkElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          element.innerHTML = originalText;
          setData(element, 'ujs:enable-with', null);
        }

        element.removeEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', null);
      };

      disableFormElements = function disableFormElements(form) {
        return formElements(form, Rails.formDisableSelector).forEach(disableFormElement);
      };

      disableFormElement = function disableFormElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          if (matches(element, 'button')) {
            setData(element, 'ujs:enable-with', element.innerHTML);
            element.innerHTML = replacement;
          } else {
            setData(element, 'ujs:enable-with', element.value);
            element.value = replacement;
          }
        }

        element.disabled = true;
        return setData(element, 'ujs:disabled', true);
      };

      enableFormElements = function enableFormElements(form) {
        return formElements(form, Rails.formEnableSelector).forEach(enableFormElement);
      };

      enableFormElement = function enableFormElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          if (matches(element, 'button')) {
            element.innerHTML = originalText;
          } else {
            element.value = originalText;
          }

          setData(element, 'ujs:enable-with', null);
        }

        element.disabled = false;
        return setData(element, 'ujs:disabled', null);
      };

      isXhrRedirect = function isXhrRedirect(event) {
        var ref, xhr;
        xhr = (ref = event.detail) != null ? ref[0] : void 0;
        return (xhr != null ? xhr.getResponseHeader("X-Xhr-Redirect") : void 0) != null;
      };
    }).call(this);
    (function () {
      var stopEverything;
      stopEverything = Rails.stopEverything;

      Rails.handleMethod = function (e) {
        var csrfParam, csrfToken, form, formContent, href, link, method;
        link = this;
        method = link.getAttribute('data-method');

        if (!method) {
          return;
        }

        href = Rails.href(link);
        csrfToken = Rails.csrfToken();
        csrfParam = Rails.csrfParam();
        form = document.createElement('form');
        formContent = "<input name='_method' value='" + method + "' type='hidden' />";

        if (csrfParam != null && csrfToken != null && !Rails.isCrossDomain(href)) {
          formContent += "<input name='" + csrfParam + "' value='" + csrfToken + "' type='hidden' />";
        }

        formContent += '<input type="submit" />';
        form.method = 'post';
        form.action = href;
        form.target = link.target;
        form.innerHTML = formContent;
        form.style.display = 'none';
        document.body.appendChild(form);
        form.querySelector('[type="submit"]').click();
        return stopEverything(e);
      };
    }).call(this);
    (function () {
      var ajax,
          fire,
          getData,
          isCrossDomain,
          isRemote,
          matches,
          serializeElement,
          setData,
          stopEverything,
          slice = [].slice;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, fire = Rails.fire, stopEverything = Rails.stopEverything, ajax = Rails.ajax, isCrossDomain = Rails.isCrossDomain, serializeElement = Rails.serializeElement;

      isRemote = function isRemote(element) {
        var value;
        value = element.getAttribute('data-remote');
        return value != null && value !== 'false';
      };

      Rails.handleRemote = function (e) {
        var button, data, dataType, element, method, url, withCredentials;
        element = this;

        if (!isRemote(element)) {
          return true;
        }

        if (!fire(element, 'ajax:before')) {
          fire(element, 'ajax:stopped');
          return false;
        }

        withCredentials = element.getAttribute('data-with-credentials');
        dataType = element.getAttribute('data-type') || 'script';

        if (matches(element, Rails.formSubmitSelector)) {
          button = getData(element, 'ujs:submit-button');
          method = getData(element, 'ujs:submit-button-formmethod') || element.method;
          url = getData(element, 'ujs:submit-button-formaction') || element.getAttribute('action') || location.href;

          if (method.toUpperCase() === 'GET') {
            url = url.replace(/\?.*$/, '');
          }

          if (element.enctype === 'multipart/form-data') {
            data = new FormData(element);

            if (button != null) {
              data.append(button.name, button.value);
            }
          } else {
            data = serializeElement(element, button);
          }

          setData(element, 'ujs:submit-button', null);
          setData(element, 'ujs:submit-button-formmethod', null);
          setData(element, 'ujs:submit-button-formaction', null);
        } else if (matches(element, Rails.buttonClickSelector) || matches(element, Rails.inputChangeSelector)) {
          method = element.getAttribute('data-method');
          url = element.getAttribute('data-url');
          data = serializeElement(element, element.getAttribute('data-params'));
        } else {
          method = element.getAttribute('data-method');
          url = Rails.href(element);
          data = element.getAttribute('data-params');
        }

        ajax({
          type: method || 'GET',
          url: url,
          data: data,
          dataType: dataType,
          beforeSend: function beforeSend(xhr, options) {
            if (fire(element, 'ajax:beforeSend', [xhr, options])) {
              return fire(element, 'ajax:send', [xhr]);
            } else {
              fire(element, 'ajax:stopped');
              return false;
            }
          },
          success: function success() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:success', args);
          },
          error: function error() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:error', args);
          },
          complete: function complete() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:complete', args);
          },
          crossDomain: isCrossDomain(url),
          withCredentials: withCredentials != null && withCredentials !== 'false'
        });
        return stopEverything(e);
      };

      Rails.formSubmitButtonClick = function (e) {
        var button, form;
        button = this;
        form = button.form;

        if (!form) {
          return;
        }

        if (button.name) {
          setData(form, 'ujs:submit-button', {
            name: button.name,
            value: button.value
          });
        }

        setData(form, 'ujs:formnovalidate-button', button.formNoValidate);
        setData(form, 'ujs:submit-button-formaction', button.getAttribute('formaction'));
        return setData(form, 'ujs:submit-button-formmethod', button.getAttribute('formmethod'));
      };

      Rails.preventInsignificantClick = function (e) {
        var data, insignificantMetaClick, link, metaClick, method, nonPrimaryMouseClick;
        link = this;
        method = (link.getAttribute('data-method') || 'GET').toUpperCase();
        data = link.getAttribute('data-params');
        metaClick = e.metaKey || e.ctrlKey;
        insignificantMetaClick = metaClick && method === 'GET' && !data;
        nonPrimaryMouseClick = e.button != null && e.button !== 0;

        if (nonPrimaryMouseClick || insignificantMetaClick) {
          return e.stopImmediatePropagation();
        }
      };
    }).call(this);
    (function () {
      var $, CSRFProtection, delegate, disableElement, enableElement, fire, formSubmitButtonClick, getData, handleConfirm, handleDisabledElement, handleMethod, handleRemote, loadCSPNonce, preventInsignificantClick, refreshCSRFTokens;
      fire = Rails.fire, delegate = Rails.delegate, getData = Rails.getData, $ = Rails.$, refreshCSRFTokens = Rails.refreshCSRFTokens, CSRFProtection = Rails.CSRFProtection, loadCSPNonce = Rails.loadCSPNonce, enableElement = Rails.enableElement, disableElement = Rails.disableElement, handleDisabledElement = Rails.handleDisabledElement, handleConfirm = Rails.handleConfirm, preventInsignificantClick = Rails.preventInsignificantClick, handleRemote = Rails.handleRemote, formSubmitButtonClick = Rails.formSubmitButtonClick, handleMethod = Rails.handleMethod;

      if (typeof jQuery !== "undefined" && jQuery !== null && jQuery.ajax != null) {
        if (jQuery.rails) {
          throw new Error('If you load both jquery_ujs and rails-ujs, use rails-ujs only.');
        }

        jQuery.rails = Rails;
        jQuery.ajaxPrefilter(function (options, originalOptions, xhr) {
          if (!options.crossDomain) {
            return CSRFProtection(xhr);
          }
        });
      }

      Rails.start = function () {
        if (window._rails_loaded) {
          throw new Error('rails-ujs has already been loaded!');
        }

        window.addEventListener('pageshow', function () {
          $(Rails.formEnableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
          return $(Rails.linkDisableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
        });
        delegate(document, Rails.linkDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.linkDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.linkClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.linkClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.linkClickSelector, 'click', handleConfirm);
        delegate(document, Rails.linkClickSelector, 'click', disableElement);
        delegate(document, Rails.linkClickSelector, 'click', handleRemote);
        delegate(document, Rails.linkClickSelector, 'click', handleMethod);
        delegate(document, Rails.buttonClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.buttonClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleConfirm);
        delegate(document, Rails.buttonClickSelector, 'click', disableElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleRemote);
        delegate(document, Rails.inputChangeSelector, 'change', handleDisabledElement);
        delegate(document, Rails.inputChangeSelector, 'change', handleConfirm);
        delegate(document, Rails.inputChangeSelector, 'change', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', handleDisabledElement);
        delegate(document, Rails.formSubmitSelector, 'submit', handleConfirm);
        delegate(document, Rails.formSubmitSelector, 'submit', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', function (e) {
          return setTimeout(function () {
            return disableElement(e);
          }, 13);
        });
        delegate(document, Rails.formSubmitSelector, 'ajax:send', disableElement);
        delegate(document, Rails.formSubmitSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.formInputClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.formInputClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.formInputClickSelector, 'click', handleConfirm);
        delegate(document, Rails.formInputClickSelector, 'click', formSubmitButtonClick);
        document.addEventListener('DOMContentLoaded', refreshCSRFTokens);
        document.addEventListener('DOMContentLoaded', loadCSPNonce);
        return window._rails_loaded = true;
      };

      if (window.Rails === Rails && fire(document, 'rails:attachBindings')) {
        Rails.start();
      }
    }).call(this);
  }).call(this);

  if (( false ? undefined : _typeof(module)) === "object" && module.exports) {
    module.exports = Rails;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (Rails),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./app/assets/stylesheets/application.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./app/assets/stylesheets/application.scss ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n  ╷\n1 │ @import '~bootstrap/scss/bootstrap';\n  │         ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  ╵\n  app/assets/stylesheets/application.scss 1:9  root stylesheet");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })

/******/ });
//# sourceMappingURL=application-3b4717a5db44320e4150.js.map