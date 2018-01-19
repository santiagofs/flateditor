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


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _editor = __webpack_require__(1);

var _editor2 = _interopRequireDefault(_editor);

var _toolbox = __webpack_require__(3);

var _toolbox2 = _interopRequireDefault(_toolbox);

var _util = __webpack_require__(5);

var Util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextEditor = function () {
  function TextEditor(config) {
    _classCallCheck(this, TextEditor);

    this.editors = {};
    this.currentEditor = null;
    this._toolbox = new _toolbox2.default(this);

    this._enabled = true;

    var me = this;
    document.addEventListener('mousedown', function (evt) {
      if (evt.target.getAttribute('retama-editable')) return false;
      me.setCurrentEditor(null);
    });
  }

  _createClass(TextEditor, [{
    key: 'setCurrentEditor',
    value: function setCurrentEditor(current) {
      if (this.currentEditor === current) return false;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.entries(this.editors)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2),
              id = _step$value[0],
              editor = _step$value[1];

          editor.deactivate();
        }
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

      this.currentEditor = current;
      if (this.currentEditor) {
        current.activate();
        this._toolbox.show();
      } else {
        this._toolbox.hide();
      }
    }
  }, {
    key: '_testElement',
    value: function _testElement(elem) {
      if (Util.isDomElement(elem)) return elem;
      var test = document.querySelector(elem);
      if (test) return test;
      return null;
    }
  }, {
    key: '_create',
    value: function _create(elem) {
      var editor = new _editor2.default(this._testElement(elem), this);
      this.editors[editor.id] = editor;
      return editor;
    }
  }, {
    key: 'create',
    value: function create(selector) {
      var elem = this._testElement(selector);
      if (!elem) return null;
      return this._create(elem);
    }
  }, {
    key: 'gather',
    value: function gather(selector) {
      var me = this;
      selector || (selector = '[retama-editable]');

      var editables = document.querySelectorAll(selector);
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = editables[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var editable = _step2.value;

          this._create(editable);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: 'enabled',
    get: function get() {
      return this._enabled;
    },
    set: function set(bool) {
      this._enabled = bool;
      if (!this._enabled) this.setCurrentEditor(null);
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = Object.entries(this.editors)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _step3$value = _slicedToArray(_step3.value, 2),
              id = _step3$value[0],
              editor = _step3$value[1];

          editor.enabled = bool;
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }]);

  return TextEditor;
}();

window.RetamaTextEditor = new TextEditor();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _content = __webpack_require__(2);

var _content2 = _interopRequireDefault(_content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Editor = function () {
  _createClass(Editor, [{
    key: 'activate',
    value: function activate() {
      this._elem.classList.add('active');
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this._elem.classList.remove('active');
    }
  }, {
    key: '_onMouseDown',
    value: function _onMouseDown(evt) {
      if (this._tE) this._tE.setCurrentEditor(this);
    }
  }, {
    key: '_setEvents',
    value: function _setEvents() {
      var me = this;
      if (this._enabled) {
        this._elem.setAttribute('contenteditable', true);
        this._elem.addEventListener("mousedown", this._mouseDownHandler, true);
      } else {
        this._elem.setAttribute('contenteditable', false);
        this._elem.removeEventListener("mousedown", this._mouseDownHandler);
      }
    }
  }, {
    key: 'format',
    value: function format(cmd, value) {
      this._content.format(cmd, value);
      this._elem.focus();
    }
  }, {
    key: 'enabled',
    get: function get() {
      return this._enabled;
    },
    set: function set(bool) {
      this._enabled = bool;
      this._setEvents();
    }
  }, {
    key: 'content',
    get: function get() {
      return this._content;
    }
  }, {
    key: 'id',
    get: function get() {
      return this._id;
    }
  }]);

  function Editor(elem, tE) {
    _classCallCheck(this, Editor);

    this._tE = tE;
    this._elem = elem;

    var id = this._elem.getAttribute('retama-editable');
    this._id = id ? id : '_' + Math.random().toString(36).substr(2, 9);
    this._elem.setAttribute('retama-editable', this._id);

    this._mouseDownHandler = this._onMouseDown.bind(this);
    this._content = new _content2.default(this._elem);
    this.enabled = tE.enabled;
  }

  return Editor;
}();

exports.default = Editor;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var supportedExecComands = ['formatBlock', 'bold'];

var Content = function () {
  _createClass(Content, [{
    key: 'insertTag',
    value: function insertTag() {
      this._elem.focus();
      var sel = window.getSelection();
      if (sel.getRangeAt && sel.rangeCount) {
        var range = sel.getRangeAt(0);
        console.log(range);
        // range.deleteContents();
      }
      console.log(sel);
    }
  }, {
    key: '_selectElementContent',
    value: function _selectElementContent(elem) {
      var range = document.createRange();
      range.selectNodeContents(elem);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }, {
    key: 'format',
    value: function format(cmd, value) {
      console.log(cmd, value);
      if (supportedExecComands.indexOf(cmd) !== -1) {
        document.execCommand(cmd, false, value);
      }
    }
  }, {
    key: 'data',
    set: function set(data) {
      if (!data) {
        //data = 'Click here to start editing';
      }
      this._elem.innerHTML = data;
    },
    get: function get() {
      return this._elem.innerHTML;
    }
  }]);

  function Content(elem) {
    _classCallCheck(this, Content);

    this._elem = elem;
    this._data = '';
    this.data = this._elem.innerHTML;
  }

  return Content;
}();

// var Content = function (content) {
//   var me = this;

//   var createTestDiv = () => {
//     var contentTest = document.getElementById('tE-content-test');
//     if(!contentTest) {
//       var testDiv = document.createElement('div');
//       testDiv.setAttribute('id', "tE-content-test");
//       testDiv.style.display = 'none';
//       contentTest = document.body.appendChild(testDiv);
//     }
//     return contentTest;
//   };

//   var parseContent = (content) => {
//     // var tester = createTestDiv();
//     // tester.innerHTML = content;
//     // if(tester.children.length > 1) throw 'Content must have a single root element';
//     // if(tester.children.length === 0) { // we only have a text node or nothing at all
//     //   var outer = document.createElement('div');
//     //   outer.innerHTML = content.trim();
//     //   tester.innerHTML = '';
//     //   tester.appendChild(outer);
//     // }
//     // return tester.innerHTML;
//     console.log('tthe content', content);
//     if(!content) {
//       content = 'Click here to start editing';
//     }

//     return content;
//   };
//   me.content = parseContent(content);

//   var getContent = () => {
//     return me.content;
//   };


//   return {
//     getContent
//   };

// };

exports.default = Content;

// _pasteHtmlAtCaret(html, selectPastedContent) {
//   var sel, range;
//   if (window.getSelection) {
//       // IE9 and non-IE
//       sel = window.getSelection();
//       if (sel.getRangeAt && sel.rangeCount) {
//           range = sel.getRangeAt(0);
//           range.deleteContents();

//           // Range.createContextualFragment() would be useful here but is
//           // only relatively recently standardized and is not supported in
//           // some browsers (IE9, for one)
//           var el = document.createElement("div");
//           el.innerHTML = html;
//           var frag = document.createDocumentFragment(), node, lastNode;
//           while ( (node = el.firstChild) ) {
//               lastNode = frag.appendChild(node);
//           }
//           var firstNode = frag.firstChild;
//           range.insertNode(frag);

//           // Preserve the selection
//           if (lastNode) {
//               range = range.cloneRange();
//               range.setStartAfter(lastNode);
//               if (selectPastedContent) {
//                   range.setStartBefore(firstNode);
//               } else {
//                   range.collapse(true);
//               }
//               sel.removeAllRanges();
//               sel.addRange(range);
//           }
//       }
//   } else if ( (sel = document.selection) && sel.type != "Control") {
//       // IE < 9
//       var originalRange = sel.createRange();
//       originalRange.collapse(true);
//       sel.createRange().pasteHTML(html);
//       var range = sel.createRange();
//       range.setEndPoint("StartToStart", originalRange);
//       range.select();
//   }
// }

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _icons = __webpack_require__(4);

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var toolboxItems = {
  'h1': { cmd: 'formatBlock', value: 'h1', content: '<span>H1</span>' },
  'h2': { cmd: 'formatBlock', value: 'h2', content: '<span>H2</span>' },
  'h3': { cmd: 'formatBlock', value: 'h3', content: '<span>H3</span>' },
  'h4': { cmd: 'formatBlock', value: 'h4', content: '<span>H4</span>' },
  'p': { cmd: 'formatBlock', value: 'p', content: _icons2.default.paragraph },
  'b': { cmd: 'bold', value: '', content: _icons2.default.bold }
};

var Toolbox = function () {
  _createClass(Toolbox, [{
    key: 'addMenuItemEvents',
    value: function addMenuItemEvents(item) {
      var me = this;
      item.addEventListener('mousedown', function (evt) {
        if (!me._tE.enabled) return;

        evt.preventDefault();
        evt.stopPropagation();
        var cmd = this.getAttribute('fe-cmd');
        var value = this.getAttribute('fe-value');
        me._tE.currentEditor.format(cmd, value);

        //var cmd = this.target
        //tE.currentEditor.content.insertTag(item.getAttribute('fe-selector'));
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

      document.body.appendChild(this._toolbox);
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

  function Toolbox(tE) {
    _classCallCheck(this, Toolbox);

    this._tE = tE;
    this.create();
  }

  return Toolbox;
}();

exports.default = Toolbox;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var icons = {
  'paragraph': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M408 32H177.531C88.948 32 16.045 103.335 16 191.918 15.956 280.321 87.607 352 176 352v104c0 13.255 10.745 24 24 24h32c13.255 0 24-10.745 24-24V112h32v344c0 13.255 10.745 24 24 24h32c13.255 0 24-10.745 24-24V112h40c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24z"/></svg>',
  'bold': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M304.793 243.891c33.639-18.537 53.657-54.16 53.657-95.693 0-48.236-26.25-87.626-68.626-104.179C265.138 34.01 240.849 32 209.661 32H24c-8.837 0-16 7.163-16 16v33.049c0 8.837 7.163 16 16 16h33.113v318.53H24c-8.837 0-16 7.163-16 16V464c0 8.837 7.163 16 16 16h195.69c24.203 0 44.834-1.289 66.866-7.584C337.52 457.193 376 410.647 376 350.014c0-52.168-26.573-91.684-71.207-106.123zM142.217 100.809h67.444c16.294 0 27.536 2.019 37.525 6.717 15.828 8.479 24.906 26.502 24.906 49.446 0 35.029-20.32 56.79-53.029 56.79h-76.846V100.809zm112.642 305.475c-10.14 4.056-22.677 4.907-31.409 4.907h-81.233V281.943h84.367c39.645 0 63.057 25.38 63.057 63.057.001 28.425-13.66 52.483-34.782 61.284z"/></svg>',
  'plus': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 294.2v-76.4c0-13.3-10.7-24-24-24H286.2V56c0-13.3-10.7-24-24-24h-76.4c-13.3 0-24 10.7-24 24v137.8H24c-13.3 0-24 10.7-24 24v76.4c0 13.3 10.7 24 24 24h137.8V456c0 13.3 10.7 24 24 24h76.4c13.3 0 24-10.7 24-24V318.2H424c13.3 0 24-10.7 24-24z"/></svg>',
  'move': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352.201 425.775l-79.196 79.196c-9.373 9.373-24.568 9.373-33.941 0l-79.196-79.196c-15.119-15.119-4.411-40.971 16.971-40.97h51.162L228 284H127.196v51.162c0 21.382-25.851 32.09-40.971 16.971L7.029 272.937c-9.373-9.373-9.373-24.569 0-33.941L86.225 159.8c15.119-15.119 40.971-4.411 40.971 16.971V228H228V127.196h-51.23c-21.382 0-32.09-25.851-16.971-40.971l79.196-79.196c9.373-9.373 24.568-9.373 33.941 0l79.196 79.196c15.119 15.119 4.411 40.971-16.971 40.971h-51.162V228h100.804v-51.162c0-21.382 25.851-32.09 40.97-16.971l79.196 79.196c9.373 9.373 9.373 24.569 0 33.941L425.773 352.2c-15.119 15.119-40.971 4.411-40.97-16.971V284H284v100.804h51.23c21.382 0 32.09 25.851 16.971 40.971z"/></svg>',
  'moveV': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M214.059 377.941H168V134.059h46.059c21.382 0 32.09-25.851 16.971-40.971L144.971 7.029c-9.373-9.373-24.568-9.373-33.941 0L24.971 93.088c-15.119 15.119-4.411 40.971 16.971 40.971H88v243.882H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.568 9.373 33.941 0l86.059-86.059c15.12-15.119 4.412-40.971-16.97-40.971z"/></svg>',
  'moveH': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M377.941 169.941V216H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.568 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296h243.882v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.568 0-33.941l-86.059-86.059c-15.119-15.12-40.971-4.412-40.971 16.97z"/></svg>',
  'cog': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M444.788 291.1l42.616 24.599c4.867 2.809 7.126 8.618 5.459 13.985-11.07 35.642-29.97 67.842-54.689 94.586a12.016 12.016 0 0 1-14.832 2.254l-42.584-24.595a191.577 191.577 0 0 1-60.759 35.13v49.182a12.01 12.01 0 0 1-9.377 11.718c-34.956 7.85-72.499 8.256-109.219.007-5.49-1.233-9.403-6.096-9.403-11.723v-49.184a191.555 191.555 0 0 1-60.759-35.13l-42.584 24.595a12.016 12.016 0 0 1-14.832-2.254c-24.718-26.744-43.619-58.944-54.689-94.586-1.667-5.366.592-11.175 5.459-13.985L67.212 291.1a193.48 193.48 0 0 1 0-70.199l-42.616-24.599c-4.867-2.809-7.126-8.618-5.459-13.985 11.07-35.642 29.97-67.842 54.689-94.586a12.016 12.016 0 0 1 14.832-2.254l42.584 24.595a191.577 191.577 0 0 1 60.759-35.13V25.759a12.01 12.01 0 0 1 9.377-11.718c34.956-7.85 72.499-8.256 109.219-.007 5.49 1.233 9.403 6.096 9.403 11.723v49.184a191.555 191.555 0 0 1 60.759 35.13l42.584-24.595a12.016 12.016 0 0 1 14.832 2.254c24.718 26.744 43.619 58.944 54.689 94.586 1.667 5.366-.592 11.175-5.459 13.985L444.788 220.9a193.485 193.485 0 0 1 0 70.2zM336 256c0-44.112-35.888-80-80-80s-80 35.888-80 80 35.888 80 80 80 80-35.888 80-80z"/></svg>',
  'trash': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M192 188v216c0 6.627-5.373 12-12 12h-24c-6.627 0-12-5.373-12-12V188c0-6.627 5.373-12 12-12h24c6.627 0 12 5.373 12 12zm100-12h-24c-6.627 0-12 5.373-12 12v216c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12V188c0-6.627-5.373-12-12-12zm132-96c13.255 0 24 10.745 24 24v12c0 6.627-5.373 12-12 12h-20v336c0 26.51-21.49 48-48 48H80c-26.51 0-48-21.49-48-48V128H12c-6.627 0-12-5.373-12-12v-12c0-13.255 10.745-24 24-24h74.411l34.018-56.696A48 48 0 0 1 173.589 0h100.823a48 48 0 0 1 41.16 23.304L349.589 80H424zm-269.611 0h139.223L276.16 50.913A6 6 0 0 0 271.015 48h-94.028a6 6 0 0 0-5.145 2.913L154.389 80zM368 128H80v330a6 6 0 0 0 6 6h276a6 6 0 0 0 6-6V128z"/></svg>',
  'bars': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/></svg>',
  'columns': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z"/></svg>',
  'chevronUp': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"/></svg>'
};

exports.default = icons;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var getElementParents = function getElementParents(el) {
  var els = [];
  while (el) {
    els.push(el);
    el = el.parentNode;
  }
  if (els[els.length - 1] === document) els.pop();

  return els;
};

var findRootsBySelector = function findRootsBySelector(selector) {
  var roots = [];
};

var isDomElement = function isDomElement(obj) {
  try {
    //Using W3 DOM2 (works for FF, Opera and Chrome)
    return obj instanceof HTMLElement;
  } catch (e) {
    //Browsers not supporting W3 DOM2 don't have HTMLElement and
    //an exception is thrown and we end up here. Testing some
    //properties that all elements have (works on IE7)
    return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" && obj.nodeType === 1 && _typeof(obj.style) === "object" && _typeof(obj.ownerDocument) === "object";
  }
};

exports.getElementParents = getElementParents;
exports.isDomElement = isDomElement;

/***/ })
/******/ ]);