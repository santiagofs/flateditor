const toolboxItems = {
  'h1': { cmd: 'formatBlock', value: 'h1', content: '<span>H1</span>' },
  'h2': { cmd: 'formatBlock', value: 'h2', content: '<span>H2</span>' },
  'h3': { cmd: 'formatBlock', value: 'h3', content: '<span>H3</span>' },
  'h4': { cmd: 'formatBlock', value: 'h4', content: '<span>H4</span>' },
  'p': { cmd: 'formatBlock', value: 'p', content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M408 32H177.531C88.948 32 16.045 103.335 16 191.918 15.956 280.321 87.607 352 176 352v104c0 13.255 10.745 24 24 24h32c13.255 0 24-10.745 24-24V112h32v344c0 13.255 10.745 24 24 24h32c13.255 0 24-10.745 24-24V112h40c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24z"/></svg>' },
  'b': { cmd: 'bold', value: '', content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M304.793 243.891c33.639-18.537 53.657-54.16 53.657-95.693 0-48.236-26.25-87.626-68.626-104.179C265.138 34.01 240.849 32 209.661 32H24c-8.837 0-16 7.163-16 16v33.049c0 8.837 7.163 16 16 16h33.113v318.53H24c-8.837 0-16 7.163-16 16V464c0 8.837 7.163 16 16 16h195.69c24.203 0 44.834-1.289 66.866-7.584C337.52 457.193 376 410.647 376 350.014c0-52.168-26.573-91.684-71.207-106.123zM142.217 100.809h67.444c16.294 0 27.536 2.019 37.525 6.717 15.828 8.479 24.906 26.502 24.906 49.446 0 35.029-20.32 56.79-53.029 56.79h-76.846V100.809zm112.642 305.475c-10.14 4.056-22.677 4.907-31.409 4.907h-81.233V281.943h84.367c39.645 0 63.057 25.38 63.057 63.057.001 28.425-13.66 52.483-34.782 61.284z"/></svg>' },
};

class Toolbox {


  addMenuItemEvents(item){
    var me = this;
    item.addEventListener('mousedown', function(evt){
      evt.preventDefault();
      evt.stopPropagation();
      var cmd = this.getAttribute('fe-cmd');
      var value = this.getAttribute('fe-value');
      me.lE.currenlEditor.format(cmd, value);

      //var cmd = this.target
      //lE.currenlEditor.content.insertTag(item.getAttribute('fe-selector'));
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
    //document.body.appendChild(this._toolbox);
  }

  addTo(parent) {
    this._parent = parent;
    this._parent.appendChild(this._toolbox);
    show();
  }
  detach() {
    //this._parent.removeChild(this._toolbox);
  }

  show() {
    this._toolbox.classList.add('show');
  }
  hide() {
    this._toolbox.classList.remove('show');
  }

  constructor(lE) {
    this.lE = lE;
    this.create();
  }

}

export default Toolbox;