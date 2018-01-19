class Modal {

  cancel() {
    this.hide();
  }
  ok() {
    this._callback();
    this.hide();
  }
  _create() {
    var me = this;

    this._backdrop = document.createElement('div');
    this._backdrop.classList.add('retama-modal-backdrop');
    this._backdrop.addEventListener('mousedown', (evt)=>{
      evt.stopPropagation();
    });

    this._window = document.createElement('div');
    this._window.classList.add('retama-modal-window');

    this._header = document.createElement('header');
    this._header.classList.add('retama-modal-header');
    this._heading = document.createElement('h4');
    this._heading.innerHTML = 'Modal Heading';
    this._header.appendChild(this._heading);

    this._content = document.createElement('div');
    this._content.classList.add('retama-modal-content');

    this._footer = document.createElement('footer');
    this._footer.classList.add('retama-modal-footer');

    this._okButton = document.createElement('a');
    this._okButton.innerHTML = 'OK';
    this._okButton.classList.add('retama-modal-btn', 'retama-modal-btn-ok');
    this._okButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      if(this._callback) {
        this.ok();
      } else {
        this.cancel();
      }
    });

    this._cancelButton = document.createElement('a');
    this._cancelButton.innerHTML = 'Cancel';
    this._cancelButton.classList.add('retama-modal-btn', 'retama-modal-btn-cancel');
    this._cancelButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      this.cancel();
    });


    this._footer.appendChild(this._cancelButton);
    this._footer.appendChild(this._okButton);

    this._window.appendChild(this._header);
    this._window.appendChild(this._content);
    this._window.appendChild(this._footer);

    this._backdrop.appendChild(this._window);

    document.body.appendChild(this._backdrop);
  }

  show(callback) {
    this._callback = callback || null;
    // this._content.innerHTML = content || '';
    // this._heading.innerHTML = caption || '';
    document.body.classList.add('retama-modal');
  }
  hide() {
    document.body.classList.remove('retama-modal');
    // this._content.innerHTML = '';
    // this._callback = null;
    // this._heading.innerHTML = '';
  }

  get title() {
    return this._heading.innerHTML;
  }
  set title(title) {
    this._heading.innerHTML = title;
  }

  get content() {
    return this._content.innerHTML;
  }
  set content(content) {
    this._content.innerHTML = content;
  }

  get element() {
    return this._content;
  }

  constructor() {
    this._create();
  }
}

window.RetamaModal = new Modal();

export default Modal;