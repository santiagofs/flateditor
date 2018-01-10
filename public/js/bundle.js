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


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _editor = __webpack_require__(1);

var _editor2 = _interopRequireDefault(_editor);

var _toolbox = __webpack_require__(3);

var _toolbox2 = _interopRequireDefault(_toolbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FlatEditor = function () {
  function FlatEditor() {
    _classCallCheck(this, FlatEditor);

    this.editors = [];
    this.currentEditor = null;
  }

  _createClass(FlatEditor, [{
    key: 'setCurrentEditor',
    value: function setCurrentEditor(current) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.editors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var editor = _step.value;

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
      current.activate();
    }
  }, {
    key: 'unsetCurrentEditor',
    value: function unsetCurrentEditor() {
      //this.currentEditor = null;
    }
  }, {
    key: 'init',
    value: function init(config) {
      var editables = document.querySelectorAll('[fe-editable]');
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = editables[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var editor = _step2.value;

          this.editors.push(new _editor2.default(editor, this));
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

      var toolbox = new _toolbox2.default(this);
    }
  }]);

  return FlatEditor;
}();

window.FlatEditor = new FlatEditor();

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
      console.log('activate');
      this._elem.classList.add('active');
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this._elem.classList.remove('active');
    }
  }, {
    key: '_setEvents',
    value: function _setEvents() {
      var me = this;
      this._elem.setAttribute('contenteditable', true);
      this._elem.addEventListener("click", function (event) {
        if (me._fE) me._fE.setCurrentEditor(me);
      }, true);
      this._elem.addEventListener("blur", function (event) {
        if (me._fE) me._fE.unsetCurrentEditor(me);
      }, true);
    }
  }, {
    key: 'content',
    get: function get() {
      return this._content;
    }
  }]);

  function Editor(elem, fE) {
    _classCallCheck(this, Editor);

    this._fE = fE;
    this._elem = elem;

    this._setEvents();

    this._content = new _content2.default(this._elem);
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
    key: 'data',
    set: function set(data) {
      if (!data) {
        data = 'Click here to start editing';
      }
      this._elem.innerHTML = data;
    },
    get: function get() {
      return this._elem.innerHTML;
    }
  }]);

  function Content(elem) {
    _classCallCheck(this, Content);

    console.log(elem);
    this._elem = elem;
    this._data = '';
    this.data = this._elem.innerHTML;
  }

  return Content;
}();

// var Content = function (content) {
//   var me = this;

//   var createTestDiv = () => {
//     var contentTest = document.getElementById('fE-content-test');
//     if(!contentTest) {
//       var testDiv = document.createElement('div');
//       testDiv.setAttribute('id', "fE-content-test");
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
var Toolbox = function Toolbox(fE) {
  var me = this;

  var create = function create() {
    var toolbox = document.createElement('div');
    toolbox.classList.add('fe-toolbox');

    var item = document.createElement('button');
    item.setAttribute('fe-selector', 'h1');
    item.innerHTML = 'H1';
    item.setAttribute('unselectable', 'on');
    item.addEventListener('click', function () {
      console.log(fE);
      fE.currentEditor.content.insertTag(item.getAttribute('fe-selector'));
      return false;
    });

    toolbox.appendChild(item);
    document.body.appendChild(toolbox);
  };

  create();
};

exports.default = Toolbox;

/***/ })
/******/ ]);