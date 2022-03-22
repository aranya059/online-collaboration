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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/assets/packs/datatable-configure.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ })

/******/ });
//# sourceMappingURL=datatable-configure-b4e281cbc0721a9fe226.js.map