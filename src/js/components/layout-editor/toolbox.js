import icons from '../icons';
class Toolbox {

  _createButton (cmd, content) {
    var btn = document.createElement('a');
    btn.innerHTML = content;
    btn.addEventListener('mousedown', (evt) => {
      if(retamaTextEditor!==undefined) retamaTextEditor.setCurrentEditor(null);
      this[cmd](evt);
    });
    return btn;
  }

  _move() {

  }
  _edit() {

  }
  _delete() {

  }
  _selectParent(evt) {
    evt.stopPropagation();
    this._parent.selectParent();
  }
  _columns() {
    this._parent.addLayout('columns');
  }

  _rows(evt) {
    evt.stopPropagation();
    this._parent.addLayout('rows');
  }

  create() {
    var me = this;
    this._toolbox = document.createElement('div');
    this._toolbox.classList.add('lE-toolbox');

    this._moveButton = this._createButton ('_move', icons.move);
    this._toolbox.appendChild(this._moveButton);

    this._editButton = this._createButton ('_edit', icons.cog);
    this._toolbox.appendChild(this._editButton);

    this._rowsButton = this._createButton('_rows', icons.bars);
    this._toolbox.appendChild(this._rowsButton);

    this._columnsButton = this._createButton('_columns', icons.columns);
    this._toolbox.appendChild(this._columnsButton);

    this._deleteButton = this._createButton ('_delete', icons.trash);
    this._toolbox.appendChild(this._deleteButton);

    this._parentButton = this._createButton('_selectParent', icons.chevronUp);
    this._toolbox.appendChild(this._parentButton);

  }

  addTo(parent) {
    this._parent = parent;
    this._moveButton.style.display = this._parent.movable ? '' : 'none';
    this._editButton.style.display = this._parent.editable ? '' : 'none';
    this._deleteButton.style.display = this._parent.deletable ? '' : 'none';
    this._parentButton.style.display = this._parent.parent ? '' : 'none';

    this._parent._elem.insertBefore(this._toolbox, this._parent._elem.firstChild);
  }
  detach() {
    console.log('detach');
    if(!this._parent) return;
    this._parent._elem.removeChild(this._toolbox);
  }

  constructor(lE) {
    this.lE = lE;
    this.create();
    this._parent = null;
  }

}

export default Toolbox;