import Editor from './components/editor.js';
import Toolbox from './components/toolbox.js';

class FlatEditor {

  constructor() {
    this.editors = [];
    this.currentEditor = null;
  }

  setCurrentEditor(current) {
    for(var editor of this.editors) {
      editor.deactivate();
    }
    this.currentEditor = current;
    current.activate();
  }

  unsetCurrentEditor() {
    //this.currentEditor = null;
  }

  init(config) {
    const editables = document.querySelectorAll('[fe-editable]');
    for(var editor of editables) {
      this.editors.push(new Editor(editor, this));
    }
    var toolbox = new Toolbox(this);
  }
}

window.FlatEditor = new FlatEditor();