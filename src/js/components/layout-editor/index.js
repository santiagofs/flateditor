import Layout from './layout';
import * as Util from '../util';
import Toolbox from './toolbox';

class LayoutEditor {


  _findRoot(elem) {
    if(Util.isDomElement(elem)) return elem;
    var test = document.querySelector(elem);
    if(test) return test;
    throw 'RetamaLayoutEditor: root element not found';
  }
  
  get current() {
    return this._current;
  }

  set current(layout) {
    if(this._current) this._current.deselect();
    this._current = layout;
  }


  constructor(elem) {
    this._root = this._findRoot(elem);
    this._layout = new Layout(this._root, this);
    this._toolbox = new Toolbox(this);
    this._current = null;

    const me = this;
    document.addEventListener('mousedown', function(evt){
      const parents = Util.getElementParents(evt.target);
      for(const elem of parents) {
        if(elem.getAttribute('retama-layout')) return false;
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
}
window.retamaLayoutEditor = LayoutEditor;

export default LayoutEditor;