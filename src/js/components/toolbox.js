const Toolbox = function(fE) {
  var me = this;

  var create = () => {
    var toolbox = document.createElement('div');
    toolbox.classList.add('fe-toolbox');

    var item = document.createElement('button');
    item.setAttribute('fe-selector', 'h1');
    item.innerHTML = 'H1';
    item.setAttribute('unselectable', 'on');
    item.addEventListener('click', function(){
      console.log(fE);
      fE.currentEditor.content.insertTag(item.getAttribute('fe-selector'));
      return false;
    });

    toolbox.appendChild(item);
    document.body.appendChild(toolbox);


  };

  create();



};

export default Toolbox;