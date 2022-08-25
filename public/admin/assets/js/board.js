
import getView from "./view.js";

export default function setupBoard({
  selectorQuery,
  getUrl,
  getRecord,
  onRecordClick
}) {

  const container = getView()(selectorQuery);
  
  const pageInput = container.createAndAppendView(
    document.createElement('input')
  );
  pageInput.setAttr('type','number');
  pageInput.setAttr('value','1');

  const perInput = container.createAndAppendView(
    document.createElement('input')
  );
  perInput.setAttr('type', 'number');
  perInput.setAttr('value', '10');

  
  const getBtn = container.createAndAppendView(
    document.createElement('button')
  )
  getBtn.setText('조회하기');

  const info = container.createAndAppendView(
    document.createElement('table')
  );
    
  const table = container.createAndAppendView(
    document.createElement('table')
  );

  const contentDiv = container.createAndAppendView(
    document.createElement('div')
  );

  table.registerEvent('click', (e)=>{
    /**
     * @type {Element} 
     */
    let t = e.target;

    if(t.nodeName !== "TABLE"){
      while(t.nodeName !== "TR"){
        t = t.parentElement;
      }
      onRecordClick(contentDiv, t);
    }
  })

  getBtn.registerEvent('click', async (e) => {
    const res = await fetch(getUrl(
      pageInput.getValue(),
      perInput.getValue()
    ));

    if(res.status != 200) throw Error('error!');

    const data = await res.json();

    info.setText(`
      <tr><td>현재 페이지</td><td>${data.currentPage}</td></tr>
      <tr><td>전체 데이터 수</td><td>${data.totalCount}</td></tr>
      <tr><td>페이지 당 데이터 수</td><td>${data.countPerPage}</td></tr>
      <tr><td>받아온 데이터 수</td><td>${data.values.length}</td></tr>
    `)

    table.setText(
      data.values.reduce((prev, cur) => {
        return prev + `<tr>${ getRecord(cur) }</tr>`
      }, "")
    );
  })
}