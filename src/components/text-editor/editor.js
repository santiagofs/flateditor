import Content from './content.js';

class Editor {

  activate() {
    this._elem.classList.add('active');
  }

  deactivate() {
    this._elem.classList.remove('active');
  }

  _onMouseDown(evt) {
    if(this._tE) this._tE.setCurrentEditor(this);
  }
  _setEvents () {
    const me = this;
    if(this._enabled) {
      this._elem.setAttribute('contenteditable',true);
      this._elem.addEventListener("mousedown", this._mouseDownHandler, true);
    } else {
      this._elem.setAttribute('contenteditable',false);
      this._elem.removeEventListener("mousedown", this._mouseDownHandler);
    }

  }

  get enabled() {
    return this._enabled;
  }
  set enabled(bool) {
    this._enabled = bool;
    this._setEvents();
  }

  get content() {
    return this._content;
  }

  get id() {
    return this._id;
  }

  format(cmd, value) {
    this._content.format(cmd,value);
    this._elem.focus();
  }



  constructor(elem, tE) {

    this._tE = tE;
    this._elem = elem;

    const id = this._elem.getAttribute('retama-editable');
    this._id = id ? id : '_' + Math.random().toString(36).substr(2, 9);
    this._elem.setAttribute('retama-editable', this._id);

    this._mouseDownHandler = this._onMouseDown.bind(this);
    this._content = new Content(this._elem);
    this.enabled = tE.enabled;

  }
}

export default Editor;