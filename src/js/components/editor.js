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

  _setEvents () {
    const me = this;
    this._elem.setAttribute('contenteditable',true);
    this._elem.addEventListener("click", function( event ) {
      if(me._fE) me._fE.setCurrentEditor(me);
    }, true);
    this._elem.addEventListener("blur", function( event ) {
      if(me._fE) me._fE.unsetCurrentEditor(me);
    }, true);
  }

  constructor(elem, fE) {

    this._fE = fE;
    this._elem = elem;

    this._setEvents();

    this._content = new Content(this._elem);

  }
}

export default Editor;