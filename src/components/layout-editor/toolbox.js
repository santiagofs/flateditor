import icons from '../icons';
class Toolbox {

  _createButton (cmd, content) {
    var btn = document.createElement('a');
    btn.innerHTML = content;
    // btn.addEventListener('mousedown', (evt) => {
    //   if(RetamaTextEditor!==undefined) RetamaTextEditor.setCurrentEditor(null);
    //   this[cmd](evt);
    // });
    btn.classList.add(cmd);
    return btn;
  }

  _move(evt) {
    evt.stopPropagation();
    //this._parent._parent._sortable.option('disabled', false);
  }
  _edit() {

  }
  _config() {

  }
  _delete(evt) {
    evt.stopPropagation();
    this._parent.removeLayout();
    //this._calcVisibleButtons();
  }
  _selectParent(evt) {
    evt.stopPropagation();
    this._parent.selectParent();
  }
  _add(evt) {
    evt.stopPropagation();
    this._parent.addLayout();
    this._calcVisibleButtons();
  }


  create() {
    var me = this;
    this._toolbox = document.createElement('div');
    this._toolbox.classList.add('lE-toolbox');

    this._moveButton = this._createButton ('_move', icons.move);
    this._moveButton.addEventListener('mousedown', this._moveHandler);
    this._toolbox.appendChild(this._moveButton);

    this._editButton = this._createButton('_edit', icons.pencil);
    this._editButton.addEventListener('mousedown', this._editHandler);
    this._toolbox.appendChild(this._editButton);

    this._addButton = this._createButton('_add', icons.plus);
    this._addButton.addEventListener('mousedown', this._addHandler);
    this._toolbox.appendChild(this._addButton);

    this._deleteButton = this._createButton ('_delete', icons.trash);
    this._deleteButton.addEventListener('mousedown', this._deleteHandler);
    this._toolbox.appendChild(this._deleteButton);


    this._configButton = this._createButton ('_config', icons.cog);
    this._toolbox.appendChild(this._configButton);

    this._parentButton = this._createButton('_selectParent', icons.chevronUp);
    this._parentButton.addEventListener('mousedown', this._selectParentHandler);
    this._toolbox.appendChild(this._parentButton);
  }

  _calcVisibleButtons() {
    this._moveButton.style.display = this._parent.movable ? '' : 'none';
    this._moveButton.innerHTML = this._parent.movable === 'rows' ? icons.moveV : icons.moveH;
    this._editButton.style.display = this._parent.editable ? '' : 'none';
    this._configButton.style.display = this._parent.configurable ? '' : 'none';
    this._deleteButton.style.display = this._parent.deletable ? '' : 'none';
    this._parentButton.style.display = this._parent.parent ? '' : 'none';

    //this._addButton.style.display = this._parent.mode !== 'content' ? '' : 'none';
    //this._columnsButton.style.display = this._parent.mode !== 'rows' ? '' : 'none';
    //this._rowsButton.style.display = this._parent.mode !== 'columns' ? '' : 'none';
  }

  addTo(parent) {
    this._parent = parent;
    this._calcVisibleButtons();
    this._parent._elem.insertBefore(this._toolbox, this._parent._elem.firstChild);
  }
  detach() {
    if(!this._parent) return;
    this._parent._elem.removeChild(this._toolbox);
    this._parent = null;
  }

  constructor(lE) {
    this.lE = lE;
    this._addHandler = this._add.bind(this);
    this._moveHandler = this._move.bind(this);
    this._deleteHandler = this._delete.bind(this);
    this._configHandler = this._config.bind(this);
    this._selectParentHandler = this._selectParent.bind(this);
    this._editHandler = this._edit.bind(this);

    this.create();
    this._parent = null;


  }

}

export default Toolbox;