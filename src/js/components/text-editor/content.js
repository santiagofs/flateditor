var supportedExecComands = [
  'formatBlock',
  'bold',
];

class Content {

  set data(data) {
    if(!data) {
      data = 'Click here to start editing';
    }
    this._elem.innerHTML = data;
  }
  get data() {
    return this._elem.innerHTML;
  }

  insertTag() {
    this._elem.focus();
    var sel = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      var range = sel.getRangeAt(0);
      console.log(range);
      // range.deleteContents();
    }
    console.log(sel);
  }

  _selectElementContent (elem) {
    var range = document.createRange();
    range.selectNodeContents(elem);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }

  format(cmd, value) {
    console.log(cmd, value);
    if(supportedExecComands.indexOf(cmd) !== -1) {
      console.log('exec!!');
      document.execCommand(cmd, false, value);
    }
  }

  constructor(elem) {
    this._elem = elem;
    this._data = '';
    this.data = this._elem.innerHTML;
  }

}

// var Content = function (content) {
//   var me = this;

//   var createTestDiv = () => {
//     var contentTest = document.getElementById('tE-content-test');
//     if(!contentTest) {
//       var testDiv = document.createElement('div');
//       testDiv.setAttribute('id', "tE-content-test");
//       testDiv.style.display = 'none';
//       contentTest = document.body.appendChild(testDiv);
//     }
//     return contentTest;
//   };

//   var parseContent = (content) => {
//     // var tester = createTestDiv();
//     // tester.innerHTML = content;
//     // if(tester.children.length > 1) throw 'Content must have a single root element';
//     // if(tester.children.length === 0) { // we only have a text node or nothing at all
//     //   var outer = document.createElement('div');
//     //   outer.innerHTML = content.trim();
//     //   tester.innerHTML = '';
//     //   tester.appendChild(outer);
//     // }
//     // return tester.innerHTML;
//     console.log('tthe content', content);
//     if(!content) {
//       content = 'Click here to start editing';
//     }

//     return content;
//   };
//   me.content = parseContent(content);

//   var getContent = () => {
//     return me.content;
//   };


//   return {
//     getContent
//   };

// };

export default Content;


// _pasteHtmlAtCaret(html, selectPastedContent) {
//   var sel, range;
//   if (window.getSelection) {
//       // IE9 and non-IE
//       sel = window.getSelection();
//       if (sel.getRangeAt && sel.rangeCount) {
//           range = sel.getRangeAt(0);
//           range.deleteContents();

//           // Range.createContextualFragment() would be useful here but is
//           // only relatively recently standardized and is not supported in
//           // some browsers (IE9, for one)
//           var el = document.createElement("div");
//           el.innerHTML = html;
//           var frag = document.createDocumentFragment(), node, lastNode;
//           while ( (node = el.firstChild) ) {
//               lastNode = frag.appendChild(node);
//           }
//           var firstNode = frag.firstChild;
//           range.insertNode(frag);

//           // Preserve the selection
//           if (lastNode) {
//               range = range.cloneRange();
//               range.setStartAfter(lastNode);
//               if (selectPastedContent) {
//                   range.setStartBefore(firstNode);
//               } else {
//                   range.collapse(true);
//               }
//               sel.removeAllRanges();
//               sel.addRange(range);
//           }
//       }
//   } else if ( (sel = document.selection) && sel.type != "Control") {
//       // IE < 9
//       var originalRange = sel.createRange();
//       originalRange.collapse(true);
//       sel.createRange().pasteHTML(html);
//       var range = sel.createRange();
//       range.setEndPoint("StartToStart", originalRange);
//       range.select();
//   }
// }