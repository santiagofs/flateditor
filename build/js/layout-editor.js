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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _layout = __webpack_require__(2);

var _layout2 = _interopRequireDefault(_layout);

var _util = __webpack_require__(0);

var Util = _interopRequireWildcard(_util);

var _toolbox = __webpack_require__(3);

var _toolbox2 = _interopRequireDefault(_toolbox);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LayoutEditor = function () {
  _createClass(LayoutEditor, [{
    key: '_findRoot',
    value: function _findRoot(elem) {
      if (Util.isDomElement(elem)) return elem;
      var test = document.querySelector(elem);
      if (test) return test;
      throw 'RetamaLayoutEditor: root element not found';
    }
  }, {
    key: 'current',
    get: function get() {
      return this._current;
    },
    set: function set(layout) {
      if (this._current) this._current.deselect();
      this._current = layout;
    }
  }]);

  function LayoutEditor(elem) {
    _classCallCheck(this, LayoutEditor);

    this._root = this._findRoot(elem);
    this._layout = new _layout2.default(this._root, this);
    this._toolbox = new _toolbox2.default(this);
    this._current = null;

    var me = this;
    document.addEventListener('mousedown', function (evt) {
      var parents = Util.getElementParents(evt.target);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = parents[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _elem = _step.value;

          if (_elem.getAttribute('retama-layout')) return false;
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

      me._toolbox.detach();
      me.current = null;
    });
  }

  // create(elem) {
  //   const layout = new LayoutEditor(elem, this);


  // }
  // gather() {
  //   const layouts = document.querySelectorAll('[retama-layout]');
  //     console.log('layouts', layouts);
  //     const layout = layouts[0];

  // }


  return LayoutEditor;
}();

window.retamaLayoutEditor = LayoutEditor;

exports.default = LayoutEditor;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // layout modes:
// rows: contains other layouts vertically
// columns: contains other layouts horizontally / columns
// content: contains only one element and it's editable

// ---
// freeze mode:  prevent dragging / deleting / changing content

// posible actions:
// be moved, if the parent is another layout
// deleted, if the parent is another layout
// add columns, rows, if it acts as a layout container
// content to be edited, if it acts as a content container
//


var _util = __webpack_require__(0);

var Util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Layout = function () {
  _createClass(Layout, [{
    key: '_calculateIndent',
    value: function _calculateIndent() {
      var parents = Util.getElementParents(this._elem);
      //const layouts =
      var indent = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = parents[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var parent = _step.value;

          if (parent.getAttribute('retama-layout')) indent++;
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

      this._indent = indent;
    }
  }, {
    key: '_addEvents',
    value: function _addEvents() {
      var me = this;
      this._elem.addEventListener('mousedown', function (evt) {
        evt.stopPropagation();
        me.select();
        me._lE._toolbox.addTo(me);
      });
      this._elem.addEventListener('mouseleave', function (evt) {
        // const el = evt.toElement || evt.relatedTarget;
        // if(Util.getElementParents(el).indexOf(this) !== -1) return;
        //me._toolbox.detach();
      });
    }
  }, {
    key: '_createEditor',
    value: function _createEditor() {
      var editorElem = document.createElement('div');
      var editor = retamaTextEditor.create(editorElem);
      return editor;
    }
  }, {
    key: '_createLayout',
    value: function _createLayout() {
      var layoutElem = document.createElement('div');
      var layout = new Layout(layoutElem, this._lE, this);
      return layout;
    }
  }, {
    key: '_addContent',
    value: function _addContent(elems, position) {
      if (elems.length !== undefined) {
        // hack!!!
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = elems[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var elem = _step2.value;

            this._addContent(elem, position);
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
      } else {
        this._elem.appendChild(elems);
      }
    }
  }, {
    key: '_replaceContent',
    value: function _replaceContent(obj) {
      this._elem.innerHTML = '';
      this._addContent(obj);
    }
  }, {
    key: '_getContent',
    value: function _getContent() {
      return this._elem.querySelectorAll('[retama-layout], [retama-editable]');
    }
  }, {
    key: '_init',
    value: function _init() {

      if (!this._elem.classList.contains('retama-layout')) this._elem.classList.add('retama-layout');
      this._elem.classList.add('indent-' + this._indent);

      var currentPosition = window.getComputedStyle(this._elem, null).getPropertyValue("position");
      if (['relative', 'absolute', 'fixed'].indexOf(currentPosition) === -1) {
        this._elem.classList.add('relative');
      }

      //if(!this._elem.getAttribute('retama-layout')) this._elem.setAttribute('retama-layout', 'content');
      // check the contents
      // layouts can have 3 different types of content (only a single type, not a combination of them)
      // - other layouts => this layout acts as a layout container: can add other layout containers
      // - editable content => this layout acts as a content container: can be transformed
      // - other content => cannot add content, but can be moved on its parent if has a layout parent

      var children = this._elem.children;
      if (!children.length) {
        this._replaceContent(this._createEditor()._elem);
        this.mode = 'content';
      }
    }
  }, {
    key: 'selectParent',
    value: function selectParent() {
      if (!this._parent) return false;
      this._parent.select();
      this._lE._toolbox.addTo(this._parent);
    }
  }, {
    key: 'select',
    value: function select() {
      this._elem.classList.add('selected');
      this._lE.current = this;
    }
  }, {
    key: 'deselect',
    value: function deselect() {
      this._elem.classList.remove('selected');
    }
  }, {
    key: 'addLayout',
    value: function addLayout(mode, position) {
      if (!this.editable) return false;

      var layoutNew = this._createLayout();

      if (this.mode === 'content') {
        var layoutOriginal = this._createLayout();

        layoutOriginal._replaceContent(this._getContent());
        this._addContent(layoutOriginal._elem);
        this.mode = mode;
      }
      this._addContent(layoutNew._elem);
    }
  }, {
    key: 'movable',
    get: function get() {
      return this._parent !== null && !this._freezed;
    }
  }, {
    key: 'deletable',
    get: function get() {
      return this._parent !== null && !this._freezed;
    }
  }, {
    key: 'editable',
    get: function get() {
      return true;
    }
  }, {
    key: 'mode',
    get: function get() {
      return this._mode;
    },
    set: function set(mode) {
      this._mode = mode;
      this._elem.setAttribute('retama-layout', mode);
      this._elem.classList.remove('content', 'rows', 'columns');
      this._elem.classList.add(mode);
    }
  }, {
    key: 'parent',
    get: function get() {
      return this._parent;
    }
  }]);

  function Layout(elem, lE, parent) {
    _classCallCheck(this, Layout);

    this._elem = elem;
    this._lE = lE;
    this._parent = parent || null;
    this._freezed = false;
    this._indent = this._parent ? this._parent._indent + 1 : 0;

    this._init();
    this._addEvents();
  }

  return Layout;
}();

exports.default = Layout;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _icons = __webpack_require__(4);

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Toolbox = function () {
  _createClass(Toolbox, [{
    key: '_createButton',
    value: function _createButton(cmd, content) {
      var _this = this;

      var btn = document.createElement('a');
      btn.innerHTML = content;
      btn.addEventListener('mousedown', function (evt) {
        if (retamaTextEditor !== undefined) retamaTextEditor.setCurrentEditor(null);
        _this[cmd](evt);
      });
      return btn;
    }
  }, {
    key: '_move',
    value: function _move() {}
  }, {
    key: '_edit',
    value: function _edit() {}
  }, {
    key: '_delete',
    value: function _delete() {}
  }, {
    key: '_selectParent',
    value: function _selectParent(evt) {
      evt.stopPropagation();
      this._parent.selectParent();
    }
  }, {
    key: '_columns',
    value: function _columns() {
      this._parent.addLayout('columns');
    }
  }, {
    key: '_rows',
    value: function _rows(evt) {
      evt.stopPropagation();
      this._parent.addLayout('rows');
    }
  }, {
    key: 'create',
    value: function create() {
      var me = this;
      this._toolbox = document.createElement('div');
      this._toolbox.classList.add('lE-toolbox');

      this._moveButton = this._createButton('_move', _icons2.default.move);
      this._toolbox.appendChild(this._moveButton);

      this._editButton = this._createButton('_edit', _icons2.default.cog);
      this._toolbox.appendChild(this._editButton);

      this._rowsButton = this._createButton('_rows', _icons2.default.bars);
      this._toolbox.appendChild(this._rowsButton);

      this._columnsButton = this._createButton('_columns', _icons2.default.columns);
      this._toolbox.appendChild(this._columnsButton);

      this._deleteButton = this._createButton('_delete', _icons2.default.trash);
      this._toolbox.appendChild(this._deleteButton);

      this._parentButton = this._createButton('_selectParent', _icons2.default.chevronUp);
      this._toolbox.appendChild(this._parentButton);
    }
  }, {
    key: 'addTo',
    value: function addTo(parent) {
      this._parent = parent;
      this._moveButton.style.display = this._parent.movable ? '' : 'none';
      this._editButton.style.display = this._parent.editable ? '' : 'none';
      this._deleteButton.style.display = this._parent.deletable ? '' : 'none';
      this._parentButton.style.display = this._parent.parent ? '' : 'none';

      this._parent._elem.insertBefore(this._toolbox, this._parent._elem.firstChild);
    }
  }, {
    key: 'detach',
    value: function detach() {
      console.log('detach');
      if (!this._parent) return;
      this._parent._elem.removeChild(this._toolbox);
    }
  }]);

  function Toolbox(lE) {
    _classCallCheck(this, Toolbox);

    this.lE = lE;
    this.create();
    this._parent = null;
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
  'cog': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M444.788 291.1l42.616 24.599c4.867 2.809 7.126 8.618 5.459 13.985-11.07 35.642-29.97 67.842-54.689 94.586a12.016 12.016 0 0 1-14.832 2.254l-42.584-24.595a191.577 191.577 0 0 1-60.759 35.13v49.182a12.01 12.01 0 0 1-9.377 11.718c-34.956 7.85-72.499 8.256-109.219.007-5.49-1.233-9.403-6.096-9.403-11.723v-49.184a191.555 191.555 0 0 1-60.759-35.13l-42.584 24.595a12.016 12.016 0 0 1-14.832-2.254c-24.718-26.744-43.619-58.944-54.689-94.586-1.667-5.366.592-11.175 5.459-13.985L67.212 291.1a193.48 193.48 0 0 1 0-70.199l-42.616-24.599c-4.867-2.809-7.126-8.618-5.459-13.985 11.07-35.642 29.97-67.842 54.689-94.586a12.016 12.016 0 0 1 14.832-2.254l42.584 24.595a191.577 191.577 0 0 1 60.759-35.13V25.759a12.01 12.01 0 0 1 9.377-11.718c34.956-7.85 72.499-8.256 109.219-.007 5.49 1.233 9.403 6.096 9.403 11.723v49.184a191.555 191.555 0 0 1 60.759 35.13l42.584-24.595a12.016 12.016 0 0 1 14.832 2.254c24.718 26.744 43.619 58.944 54.689 94.586 1.667 5.366-.592 11.175-5.459 13.985L444.788 220.9a193.485 193.485 0 0 1 0 70.2zM336 256c0-44.112-35.888-80-80-80s-80 35.888-80 80 35.888 80 80 80 80-35.888 80-80z"/></svg>',
  'trash': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M192 188v216c0 6.627-5.373 12-12 12h-24c-6.627 0-12-5.373-12-12V188c0-6.627 5.373-12 12-12h24c6.627 0 12 5.373 12 12zm100-12h-24c-6.627 0-12 5.373-12 12v216c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12V188c0-6.627-5.373-12-12-12zm132-96c13.255 0 24 10.745 24 24v12c0 6.627-5.373 12-12 12h-20v336c0 26.51-21.49 48-48 48H80c-26.51 0-48-21.49-48-48V128H12c-6.627 0-12-5.373-12-12v-12c0-13.255 10.745-24 24-24h74.411l34.018-56.696A48 48 0 0 1 173.589 0h100.823a48 48 0 0 1 41.16 23.304L349.589 80H424zm-269.611 0h139.223L276.16 50.913A6 6 0 0 0 271.015 48h-94.028a6 6 0 0 0-5.145 2.913L154.389 80zM368 128H80v330a6 6 0 0 0 6 6h276a6 6 0 0 0 6-6V128z"/></svg>',
  'bars': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/></svg>',
  'columns': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z"/></svg>',
  'chevronUp': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"/></svg>'
};

exports.default = icons;

/***/ })
/******/ ]);