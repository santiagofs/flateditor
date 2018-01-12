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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _toolbox = __webpack_require__(1);

var _toolbox2 = _interopRequireDefault(_toolbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LayoutEditor = function () {
  function LayoutEditor() {
    _classCallCheck(this, LayoutEditor);

    this._toolbox = new _toolbox2.default(this);
  }

  _createClass(LayoutEditor, [{
    key: 'gather',
    value: function gather() {
      var layouts = document.querySelectorAll('[efs-layout]');
      console.log('layouts', layouts);
      var layout = layouts[0];
      var me = this;
      layout.addEventListener('mouseover', function (evt) {
        me._toolbox.addTo(layout);
      });
      layout.addEventListener('mouseout', function (evt) {
        me._toolbox.detach();
      });
    }
  }]);

  return LayoutEditor;
}();

window.efsLayoutEditor = new LayoutEditor();

exports.default = LayoutEditor;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var toolboxItems = {
  'h1': { cmd: 'formatBlock', value: 'h1', content: '<span>H1</span>' },
  'h2': { cmd: 'formatBlock', value: 'h2', content: '<span>H2</span>' },
  'h3': { cmd: 'formatBlock', value: 'h3', content: '<span>H3</span>' },
  'h4': { cmd: 'formatBlock', value: 'h4', content: '<span>H4</span>' },
  'p': { cmd: 'formatBlock', value: 'p', content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M408 32H177.531C88.948 32 16.045 103.335 16 191.918 15.956 280.321 87.607 352 176 352v104c0 13.255 10.745 24 24 24h32c13.255 0 24-10.745 24-24V112h32v344c0 13.255 10.745 24 24 24h32c13.255 0 24-10.745 24-24V112h40c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24z"/></svg>' },
  'b': { cmd: 'bold', value: '', content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M304.793 243.891c33.639-18.537 53.657-54.16 53.657-95.693 0-48.236-26.25-87.626-68.626-104.179C265.138 34.01 240.849 32 209.661 32H24c-8.837 0-16 7.163-16 16v33.049c0 8.837 7.163 16 16 16h33.113v318.53H24c-8.837 0-16 7.163-16 16V464c0 8.837 7.163 16 16 16h195.69c24.203 0 44.834-1.289 66.866-7.584C337.52 457.193 376 410.647 376 350.014c0-52.168-26.573-91.684-71.207-106.123zM142.217 100.809h67.444c16.294 0 27.536 2.019 37.525 6.717 15.828 8.479 24.906 26.502 24.906 49.446 0 35.029-20.32 56.79-53.029 56.79h-76.846V100.809zm112.642 305.475c-10.14 4.056-22.677 4.907-31.409 4.907h-81.233V281.943h84.367c39.645 0 63.057 25.38 63.057 63.057.001 28.425-13.66 52.483-34.782 61.284z"/></svg>' }
};

var Toolbox = function () {
  _createClass(Toolbox, [{
    key: 'addMenuItemEvents',
    value: function addMenuItemEvents(item) {
      var me = this;
      item.addEventListener('mousedown', function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        var cmd = this.getAttribute('fe-cmd');
        var value = this.getAttribute('fe-value');
        me.lE.currenlEditor.format(cmd, value);

        //var cmd = this.target
        //lE.currenlEditor.content.insertTag(item.getAttribute('fe-selector'));
        //
        return false;
      });
    }
  }, {
    key: 'create',
    value: function create() {
      var me = this;
      this._toolbox = document.createElement('div');
      this._toolbox.classList.add('fe-toolbox');

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.entries(toolboxItems)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2),
              key = _step$value[0],
              value = _step$value[1];

          var item = document.createElement('a');
          item.setAttribute('fe-value', value.value);
          item.setAttribute('fe-cmd', value.cmd);
          item.innerHTML = value.content;
          //item.setAttribute('unselectable', 'on');
          me.addMenuItemEvents(item);
          this._toolbox.appendChild(item);
        }
        //document.body.appendChild(this._toolbox);
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: 'addTo',
    value: function addTo(parent) {
      this._parent = parent;
      this._parent.appendChild(this._toolbox);
      show();
    }
  }, {
    key: 'detach',
    value: function detach() {
      //this._parent.removeChild(this._toolbox);
    }
  }, {
    key: 'show',
    value: function show() {
      this._toolbox.classList.add('show');
    }
  }, {
    key: 'hide',
    value: function hide() {
      this._toolbox.classList.remove('show');
    }
  }]);

  function Toolbox(lE) {
    _classCallCheck(this, Toolbox);

    this.lE = lE;
    this.create();
  }

  return Toolbox;
}();

exports.default = Toolbox;

/***/ })
/******/ ]);