import Toolbox from './toolbox';
import Layout from './layout';
import * as Util from '../util';
import { through } from 'event-stream';

class LayoutEditor {


  _findRoot(elem) {
    if(Util.isDomElement(elem)) return elem;
    var test = document.querySelector(elem);
    if(test) return test;
    throw 'RetamaLayoutEditor: root element not found';
  }

  constructor(elem) {
    this._toolbox = new Toolbox(this);
    this._root = this._findRoot(elem);
    this._layout = new Layout(this._root, this);
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