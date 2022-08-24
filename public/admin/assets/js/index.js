import getView from "./view.js";

const app = getView()('#app');

const info = app.select('#info');

const userTable = app.select('#user_table');

const btn_user = app.select('#btn_get_users');

btn_user.registerEvent('click', async (e) => {
  const res = await fetch('/api/v1/user/range?page=1&per=10');

  if(res.status != 200) throw Error('Status Error');

  const data = await res.json();

  info.setText(`
    <tr><td>현재 페이지</td><td>${data.currentPage}</td></tr>
    <tr><td>전체 사용자 수</td><td>${data.totalCount}</td></tr>
    <tr><td>페이지 당 사용자 수</td><td>${data.countPerPage}</td></tr>
    <tr><td>받아온 사용자 수</td><td>${data.values.length}</td></tr>
  `);

  userTable.setText(
    data.values.reduce((prev, cur) => {
      return prev + `<tr><td>${cur.email}</td><td>${cur.tickets}</td></tr>`
    }, "")
  )
})