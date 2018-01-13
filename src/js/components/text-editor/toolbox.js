import icons from '../icons';
const toolboxItems = {
  'h1': { cmd: 'formatBlock', value: 'h1', content: '<span>H1</span>' },
  'h2': { cmd: 'formatBlock', value: 'h2', content: '<span>H2</span>' },
  'h3': { cmd: 'formatBlock', value: 'h3', content: '<span>H3</span>' },
  'h4': { cmd: 'formatBlock', value: 'h4', content: '<span>H4</span>' },
  'p': { cmd: 'formatBlock', value: 'p', content: icons.paragraph },
  'b': { cmd: 'bold', value: '', content: icons.bold },
};

class Toolbox {


  addMenuItemEvents(item){
    var me = this;
    item.addEventListener('mousedown', function(evt){
      evt.preventDefault();
      evt.stopPropagation();
      var cmd = this.getAttribute('fe-cmd');
      var value = this.getAttribute('fe-value');
      me.tE.currentEditor.format(cmd, value);

      //var cmd = this.target
      //tE.currentEditor.content.insertTag(item.getAttribute('fe-selector'));
      //
      return false;
    });
  }

  create() {
    var me = this;
    this._toolbox = document.createElement('div');
    this._toolbox.classList.add('fe-toolbox');

    for (var [key, value] of Object.entries(toolboxItems)) {
      var item = document.createElement('a');
      item.setAttribute('fe-value', value.value);
      item.setAttribute('fe-cmd', value.cmd);
      item.innerHTML = value.content;
      //item.setAttribute('unselectable', 'on');
      me.addMenuItemEvents(item);
      this._toolbox.appendChild(item);
    }
    document.body.appendChild(this._toolbox);
  }

  show() {
    this._toolbox.classList.add('show');
  }
  hide() {
    this._toolbox.classList.remove('show');
  }

  constructor(tE) {
    this.tE = tE;
    this.create();
  }

}

export default Toolbox;