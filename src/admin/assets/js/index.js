
/**
 * 
 * @param {String} selectorQuery 
 * @returns 
 */
function buildApp(selectorQuery) {
  const application = document.querySelector(selectorQuery);
  if(!application) throw Error('No app matched Query');

  return {
    /**
     * @type {Element}
     */
    application,
    /**
     * 
     * @param {String} sQuery 
     * @returns {Element}
     */
    select(sQuery) {
      return this.application.querySelector(sQuery);
    }
  }
}

const app = buildApp('#app');

//get user button
app.select('btn_get_users').addEventListener('click', async ()=> {
  
})