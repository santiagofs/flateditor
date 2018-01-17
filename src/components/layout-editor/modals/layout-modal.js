import Icons from '../../icons';
import Modal from '../../modal/index';

const modalContent = document.createElement('div');
modalContent.classList.add('layout-modal');
modalContent.setAttribute('id', 'layout-modal');

const description = document.createElement('p');
description.innerHTML = 'Choose what do you want to add:';
modalContent.appendChild(description);

const cells = document.createElement('div');
cells.classList.add('cells');

const leftCell = document.createElement('label');
leftCell.classList.add('cell', 'left-cell');
const leftImg = document.createElement('div');
leftImg.classList.add('img');
leftImg.innerHTML = Icons.bars;
const leftCaption = document.createElement('div');
leftCaption.innerHTML = '<input name="mode" type="radio" value="rows" checked="checked"> <span>Rows</span>';
leftCell.appendChild(leftImg);
leftCell.appendChild(leftCaption);
cells.appendChild(leftCell);

const rightCell = document.createElement('label');
rightCell.classList.add('cell', 'right-cell');
const rightImg = document.createElement('div');
rightImg.classList.add('img');
rightImg.innerHTML = Icons.columns;
const rightCaption = document.createElement('div');
rightCaption.innerHTML = '<input name="mode" type="radio" value="columns"> <span>Columns</span>';
rightCell.appendChild(rightImg);
rightCell.appendChild(rightCaption);
cells.appendChild(rightCell);

modalContent.appendChild(cells);


class LayoutModal extends Modal {
  constructor() {
    super();
    this.content = modalContent.outerHTML;
    this.title = 'Select Layout';
    console.log('child title', this.title);
  }
}

export default new LayoutModal();
//export default modalContent.outerHTML;