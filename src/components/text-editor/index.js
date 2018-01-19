import Editor from './editor.js';
import Toolbox from './toolbox.js';
import * as Util from '../util';


class TextEditor {

  constructor(config) {
    this.editors = {};
    this.currentEditor = null;
    this._toolbox = new Toolbox(this);

    this._enabled = true;

    const me = this;
    document.addEventListener('mousedown', function(evt){
      if(evt.target.getAttribute('retama-editable')) return false;
      me.setCurrentEditor(null);
    });
  }

  get enabled() { return this._enabled;}
  set enabled(bool) {
    this._enabled = bool;
    if(!this._enabled) this.setCurrentEditor(null);
    for(var [id, editor] of Object.entries(this.editors)) {
      editor.enabled = bool;
    }
  }

  setCurrentEditor(current) {
    if(this.currentEditor === current) return false;

    for(var [id, editor] of Object.entries(this.editors)) {
      editor.deactivate();
    }
    this.currentEditor = current;
    if(this.currentEditor) {
      current.activate();
      this._toolbox.show();
    } else {
      this._toolbox.hide();
    }
  }

  _testElement (elem) {
    if(Util.isDomElement(elem)) return elem;
    var test = document.querySelector(elem);
    if(test) return test;
    return null;
  }
  _create (elem) {
    var editor = new Editor(this._testElement(elem), this);
    this.editors[editor.id] = editor;
    return editor;
  }

  create(selector) {
    var elem = this._testElement(selector);
    if(!elem) return null;
    return this._create(elem);
  }


  gather(selector) {
    const me = this;
    selector || (selector = '[retama-editable]');

    const editables = document.querySelectorAll(selector);
    for(var editable of editables) {
      this._create(editable);
    }


  }
}

window.RetamaTextEditor = new TextEditor();