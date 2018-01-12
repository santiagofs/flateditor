import Editor from './text-editor/editor.js';
import Toolbox from './text-editor/toolbox.js';

class TextEditor {

  constructor(config) {
    this.editors = {};
    this.currentEditor = null;
    this._toolbox = new Toolbox(this);

    const me = this;
    document.addEventListener('mousedown', function(evt){
      me.setCurrentEditor(null);
    });
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

  _create (elem) {
    var editor = new Editor(elem, this);
    this.editors[editor.id] = editor;
    return editor;
  }

  create(selector) {
    var elems = document.querySelectorAll(selector);
    if(!elems.length) return null;

    return this._create(elems[0]);

  }


  gather(selector) {
    const me = this;
    selector || (selector = '[efs-editable]');

    const editables = document.querySelectorAll(selector);
    for(var editable of editables) {
      this._create(editable);
    }


  }
}

window.efsTextEditor = new TextEditor();