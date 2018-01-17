// import Editor from './components/text-editor.js';
// import Toolbox from './components/toolbox.js';

// class FlatEditor {

//   constructor() {
//     this.editors = {};
//     this.currentEditor = null;
//     this._toolbox = null;
//   }

//   setCurrentEditor(current) {
//     if(this.currentEditor === current) return false;

//     for(var [id, editor] of Object.entries(this.editors)) {
//       editor.deactivate();
//     }
//     this.currentEditor = current;
//     if(this.currentEditor) {
//       current.activate();
//       this._toolbox.show();
//     } else {
//       this._toolbox.hide();
//     }
//   }


//   init(config) {
//     const me = this;

//     const editables = document.querySelectorAll('[retama-editable]');
//     for(var editable of editables) {
//       var editor = new Editor(editable, this);
//       this.editors[editor.id] = editor;
//     }
//     this._toolbox = new Toolbox(this);
//     document.addEventListener('mousedown', function(evt){
//       me.setCurrentEditor(null);
//     });
//   }
// }

// window.FlatEditor = new FlatEditor();