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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Modal = function () {
  _createClass(Modal, [{
    key: 'cancel',
    value: function cancel() {
      this.hide();
    }
  }, {
    key: 'ok',
    value: function ok() {
      this._callback();
      this.hide();
    }
  }, {
    key: '_create',
    value: function _create() {
      var _this = this;

      var me = this;

      this._backdrop = document.createElement('div');
      this._backdrop.classList.add('retama-modal-backdrop');
      this._backdrop.addEventListener('mousedown', function (evt) {
        evt.stopPropagation();
      });

      this._window = document.createElement('div');
      this._window.classList.add('retama-modal-window');

      this._header = document.createElement('header');
      this._header.classList.add('retama-modal-header');
      this._heading = document.createElement('h4');
      this._heading.innerHTML = 'Modal Heading';
      this._header.appendChild(this._heading);

      this._content = document.createElement('div');
      this._content.classList.add('retama-modal-content');

      this._footer = document.createElement('footer');
      this._footer.classList.add('retama-modal-footer');

      this._okButton = document.createElement('a');
      this._okButton.innerHTML = 'OK';
      this._okButton.classList.add('retama-modal-btn', 'retama-modal-btn-ok');
      this._okButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        if (_this._callback) {
          _this.ok();
        } else {
          _this.cancel();
        }
      });

      this._cancelButton = document.createElement('a');
      this._cancelButton.innerHTML = 'Cancel';
      this._cancelButton.classList.add('retama-modal-btn', 'retama-modal-btn-cancel');
      this._cancelButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        _this.cancel();
      });

      this._footer.appendChild(this._cancelButton);
      this._footer.appendChild(this._okButton);

      this._window.appendChild(this._header);
      this._window.appendChild(this._content);
      this._window.appendChild(this._footer);

      this._backdrop.appendChild(this._window);

      document.body.appendChild(this._backdrop);
    }
  }, {
    key: 'show',
    value: function show(callback) {
      this._callback = callback || null;
      // this._content.innerHTML = content || '';
      // this._heading.innerHTML = caption || '';
      document.body.classList.add('retama-modal');
    }
  }, {
    key: 'hide',
    value: function hide() {
      document.body.classList.remove('retama-modal');
      // this._content.innerHTML = '';
      // this._callback = null;
      // this._heading.innerHTML = '';
    }
  }, {
    key: 'title',
    get: function get() {
      return this._heading.innerHTML;
    },
    set: function set(title) {
      console.log('super title', title);
      this._heading.innerHTML = title;
    }
  }, {
    key: 'content',
    get: function get() {
      return this._content.innerHTML;
    },
    set: function set(content) {
      this._content.innerHTML = content;
    }
  }, {
    key: 'element',
    get: function get() {
      return this._content;
    }
  }]);

  function Modal() {
    _classCallCheck(this, Modal);

    this._create();
  }

  return Modal;
}();

window.RetamaModal = new Modal();

exports.default = Modal;

/***/ })
/******/ ]);