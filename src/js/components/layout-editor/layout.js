// layout modes:
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

import * as Util from '../util';

class Layout {

  _calculateIndent() {
    const parents = Util.getElementParents(this._elem);
    //const layouts =
    let indent = 0;
    for(const parent of parents) {
      if(parent.getAttribute('retama-layout')) indent++;
    }
    this._indent = indent;
  }


  _addEvents() {
    const me = this;
    this._elem.addEventListener('mouseenter', function(evt){
      me._lE._toolbox.addTo(me);
    });
    this._elem.addEventListener('mouseleave', function(evt){
      // const el = evt.toElement || evt.relatedTarget;
      // if(Util.getElementParents(el).indexOf(this) !== -1) return;
      me._lE._toolbox.detach();
    });
  }
  _createEditor() {
    var editorElem = document.createElement('div');
    var editor = retamaTextEditor.create(editorElem);
    return editor;
  }
  _createLayout() {
    var layoutElem = document.createElement('div');
    var layout = new Layout(layoutElem, this._lE, this);
    return layout;
  }


  _addContent(elems, position) {
    if(elems.length !== undefined) { // hack!!!
      for(const elem of elems) {
        this._addContent(elem, position);
      }
    } else {
      this._elem.appendChild(elems);
    }
  }
  _replaceContent(obj) {
    console.log(obj)
    this._elem.innerHTML = '';
    this._addContent(obj);
  }
  _getContent() {
    return this._elem.querySelectorAll('[retama-layout], [retama-editable]');
  }

  _init() {

    if(!this._elem.classList.contains('retama-layout')) this._elem.classList.add('retama-layout');
    this._elem.classList.add('indent-'+this._indent);

    const currentPosition = window.getComputedStyle(this._elem, null).getPropertyValue("position");
    if(['relative', 'absolute', 'fixed'].indexOf(currentPosition) === -1) {
      this._elem.classList.add('relative');
    }

    //if(!this._elem.getAttribute('retama-layout')) this._elem.setAttribute('retama-layout', 'content');
    // check the contents
    // layouts can have 3 different types of content (only a single type, not a combination of them)
    // - other layouts => this layout acts as a layout container: can add other layout containers
    // - editable content => this layout acts as a content container: can be transformed
    // - other content => cannot add content, but can be moved on its parent if has a layout parent

    const children = this._elem.children;
    if(!children.length) {
      this._replaceContent(this._createEditor()._elem);
      this.mode = 'content';
    }


    // const layouts = children.filter()
    // for(const child of children) {

    // }


  }


  get movable() {
    return ((this._parent !== null) && !this._freezed);
  }
  get deletable() {
    return ((this._parent !== null) && !this._freezed);
  }
  get editable() {
    return true;
  }

  get mode() {
    return this._mode;
  }

  set mode(mode) {
    this._mode = mode;
    this._elem.setAttribute('retama-layout', mode);
    this._elem.classList.remove('content', 'rows', 'columns');
    this._elem.classList.add(mode);
  }

  addLayout(mode, position) {
    if(!this.editable) return false;

    const layoutNew = this._createLayout();


    if(this.mode === 'content') {
      const layoutOriginal = this._createLayout();

      layoutOriginal._replaceContent(this._getContent());
      this._replaceContent(layoutOriginal._elem);
      this.mode = mode;
    }
    this._addContent(layoutNew._elem);

  }

  constructor(elem, lE, parent) {
    this._elem = elem;
    this._lE = lE;
    this._parent = parent || null;
    this._freezed = false;
    this._indent = this._parent ? this._parent._indent + 1 : 0;

    this._init();
    this._addEvents();
  }

}

export default Layout;