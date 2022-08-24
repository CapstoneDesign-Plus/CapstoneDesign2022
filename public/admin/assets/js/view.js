
/**
 * @param {Element} parent 
 * @returns 
 */
export default function getView(parent = document) {
  /**
   * @param {string} selector
   */
  return function(selector) {
    /**
     * @type {Element}
     */
    const view = parent.querySelector(selector);

    if(!view) throw Error('no view');

    return {
      source: view,
      select: getView(view),
      /**
       * @param {string} text 
       */
      setText(text) {
        this.source.innerHTML = text;
      },
      registerEvent(eventName, callback){
        this.source.addEventListener(eventName, callback)
      }
    }
  }
}