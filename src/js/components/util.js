const getElementParents = (el) => {
  var els = [];
  while (el) {
      els.unshift(el);
      el = el.parentNode;
  }
  return els;
};


const findRootsBySelector = (selector) => {
  const roots = [];

};

const isDomElement = (obj) => {
    try {
      //Using W3 DOM2 (works for FF, Opera and Chrome)
      return obj instanceof HTMLElement;
    }
    catch(e){
      //Browsers not supporting W3 DOM2 don't have HTMLElement and
      //an exception is thrown and we end up here. Testing some
      //properties that all elements have (works on IE7)
      return (typeof obj==="object") &&
        (obj.nodeType===1) && (typeof obj.style === "object") &&
        (typeof obj.ownerDocument ==="object");
    }

};

export {getElementParents, isDomElement};