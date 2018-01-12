import Toolbox from './layout-editor/toolbox';

class LayoutEditor {

  constructor() {
    this._toolbox = new Toolbox(this);


  }

  gather() {
    const layouts = document.querySelectorAll('[efs-layout]');
    console.log('layouts', layouts)
    const layout = layouts[0];
    const me = this;
    layout.addEventListener('mouseover', function(evt){
      me._toolbox.addTo(layout);
    });
    layout.addEventListener('mouseout', function(evt){
      me._toolbox.detach();
    });
  }
}
window.efsLayoutEditor = new LayoutEditor();

export default LayoutEditor;

