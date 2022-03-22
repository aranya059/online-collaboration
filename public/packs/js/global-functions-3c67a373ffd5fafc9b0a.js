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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/assets/packs/global-functions.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ })

/******/ });
//# sourceMappingURL=global-functions-3c67a373ffd5fafc9b0a.js.map