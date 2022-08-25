
export default function getView(parent = document) {
  return function(selectorQuery){
    return parseView(
      parent.querySelector(selectorQuery),
      parent
    );
  }
}

/**
 * 
 * @param {Element} el 
 * @param {Element} parent 
 * @returns 
 */
function parseView(el, parent = document){
  if(!el) throw Error('element is Null');

  return {
    source: el,
    select: getView(el),
    /**
     * @param {string} text 
     */
    setText(text) {
      this.source.innerHTML = text;
    },
    registerEvent(eventName, callback){
      this.source.addEventListener(eventName, callback)
    },
    getValue() {
      return this.source.value;
    },
    /**
     * 
     * @param {Element} element 
     */
    createAndAppendView(element) {
      this.source.appendChild(element);
      return parseView(element, this.source);
    },

    setAttr(key, value) {
      this.source.setAttribute(key, value);
    }
  }
}