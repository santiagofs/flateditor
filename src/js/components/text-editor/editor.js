import Content from './content.js';

class Editor {

  activate() {
    console.log('activate');
    this._elem.classList.add('active');
  }

  deactivate() {
    this._elem.classList.remove('active');
  }

  get content() {
    return this._content;
  }

  get id() {
    return this._id;
  }

  format(cmd, value) {
    this._content.format(cmd,value);
    console.log(this._elem);
    this._elem.focus();
  }

  _setEvents () {
    const me = this;
    this._elem.setAttribute('contenteditable',true);
    this._elem.addEventListener("mousedown", function( evt ) {
      evt.stopPropagation();
      if(me._tE) me._tE.setCurrentEditor(me);
    }, true);
  }

  constructor(elem, tE) {

    this._tE = tE;
    this._elem = elem;

    const id = this._elem.getAttribute('fe-editable');
    this._id = id ? id : '_' + Math.random().toString(36).substr(2, 9);
    this._elem.setAttribute('fe-editable', this._id);

    this._setEvents();

    this._content = new Content(this._elem);

  }
}

export default Editor;