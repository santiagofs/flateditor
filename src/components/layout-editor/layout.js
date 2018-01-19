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
import LayoutModal from './modals/layout-modal';

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

  get sortable() {
    if(!this._sortable) return null;
    return !this._sortable.option("disabled")
  }
  set sortable(mode) {
    if(mode) {
      if(this._elem.children < 2) return false;
      this._sortable = Sortable.create(this._elem);
    } else {
      if(!this._sortable) return null;
      this._sortable.destroy();
      delete this._sortable;
    }

  }

  _addEvents() {
    const me = this;
    this._elem.addEventListener('mousedown', function(evt){
      evt.stopPropagation();
      me.select();
      me._lE._toolbox.addTo(me);
    });
    this._elem.addEventListener('mouseleave', function(evt){
      // const el = evt.toElement || evt.relatedTarget;
      // if(Util.getElementParents(el).indexOf(this) !== -1) return;
      //me._toolbox.detach();
    });
  }
  _createEditor() {
    var editorElem = document.createElement('div');
    var editor = RetamaTextEditor.create(editorElem);
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
  }

  selectParent() {
    if(!this._parent) return false;
    this._parent.select();
    this._lE._toolbox.addTo(this._parent);
  }
  select() {
    this._elem.classList.add('selected');
    this._lE.current = this; // first, so we disable events first;
    if(this._parent) this._parent.sortable = true;

  }
  deselect() {
    if(this._parent) this._parent.sortable = false;
    this._elem.classList.remove('selected');
  }

  get movable() {
    if((this._parent === null) ||this._freezed) return false;
    return this._parent.mode;
  }
  get deletable() {
    return ((this._parent !== null) && !this._freezed);
  }
  get editable() {
    return this.mode === 'content';
  }
  get configurable() {
    return false;
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
  get parent() {
    return this._parent;
  }

  _addLayout(mode) {
    // if(!this.editable) return false;
    // console.log('test');
    const layoutNew = this._createLayout();

    if(this.mode === 'content') {
      const layoutOriginal = this._createLayout();
      layoutOriginal._replaceContent(this._getContent());
      this._addContent(layoutOriginal._elem);
      this.mode = mode;
    }

    this._addContent(layoutNew._elem);

    //this._makeSortable();

  }
  addLayout() {
    if(this.mode === 'content') {
      const me = this;
      LayoutModal.show(function(){
        const options = LayoutModal.element.getElementsByTagName('input');
        for(let i=0; i<options.length; i++) {
          if(options[i].checked) {
            me._addLayout(options[i].value);
            break;
          }
        }
      });
    } else {
      this._addLayout(this.mode);
    }
  }

  removeLayout() {
    if(!this.editable) return false;
    this._elem.parentNode.removeChild(this._elem);
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