import{s as u,R as m,a as p,j as t,b as e,B as n,G as i,L as s,C as x,c as l,d as o,i as h}from"./index.f2519aec.js";import"./lodash.f70a6700.js";const g=u.div`
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-weight: bolder;
  color: #000000;

  .title {
    font-size: 20px;
    align-self: flex-start;
  }
  .name {
    font-size: 30px;
  }
  .email {
    font-size: 20px;
  }
  .coin_box {
    border-style: solid;
    border-color: #b1d6a8;
    border-radius: 20px;
    padding: 0px 10px;
    width: 90%;
    height: 105px;
    display: flex;
    justify-content: center;
  }
  .coin_title {
    font-size: 20px;
    margin: 0 auto;
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
  }
  .coin_content {
    font-size: 25px;
    display: flex;
    justify-content: space-between;
  }
  .coin_btn {
    width: 80px;
    height: 35px;
    font-weight: bolder;
    font-size: 15px;
    color: #49663c;
  }
  .btn-group {
    margin: auto 5px;
    display: flex;
    justify-content: center;
  }
  .btn {
    color: #49663c;
    width: 190px;
    height: 70px;
    font-weight: bolder;
    font-size: 20px;
  }
  .coin {
    width: 30px;
    height: 30px;
  }
`;function y(){const[a,r]=m(p);async function c(){return await h.get("v1/user/auth/logout")}const d=()=>{a!=null&&c().then(()=>{r(null),console.log("Logout Complete!")})};return t(g,{children:[e(n,{className:"title",sx:{display:"flex",alignItems:"flex-end",mt:3,ml:2},children:"\uB9C8\uC774\uD398\uC774\uC9C0"}),e(n,{sx:{display:"flex",alignItems:"flex-end",mt:5},children:t(i,{container:!0,spacing:2,sx:{margin:0},children:[e(i,{className:"name",item:!0,xs:12,sm:12,children:a.username}),e(i,{className:"email",item:!0,xs:12,sm:12,children:a.email}),e(n,{className:"coin_box",sx:{display:"flex",alignItems:"flex-start",margin:"auto",mt:3,ml:1},children:t(i,{container:!0,spacing:2,style:{margin:0},children:[e(i,{className:"coin_title",item:!0,xs:12,children:"\uC794\uC5EC\uC7AC\uD654"}),e(i,{className:"coin_content",item:!0,xs:8,children:t(n,{sx:{display:"flex",alignItems:"left"},children:[e("img",{className:"coin",alt:"coin",src:"\\images\\coin.png"}),"\xA0",a.point]})}),e(i,{item:!0,xs:4,children:e(s,{to:"/Charge",children:e(x,{className:"coin_btn",label:"\uCDA9 \uC804",clickable:!0,component:"a",href:"#",color:"primary"})})})]})}),t(n,{children:[t(l,{className:"btn-group",sx:{display:"flex",alignItems:"flex-start"},style:{marginTop:"50px"},children:[e(s,{to:"/ChangeNickname",children:e(o,{className:"btn",variant:"contained",color:"primary",sx:{borderTopLeftRadius:20,borderBottomLeftRadius:0},children:"\uB2C9\uB124\uC784 \uBCC0\uACBD"})}),e(s,{to:"/ChangePassword",children:e(o,{className:"btn",variant:"contained",color:"primary",sx:{borderTopRightRadius:20,borderBottomRightRadius:0},children:"\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD"})})]}),t(l,{className:"btn-group",sx:{mt:0},children:[e(s,{to:"/BuyList",children:e(o,{className:"btn",variant:"contained",color:"primary",sx:{borderTopLeftRadius:0,borderBottomLeftRadius:20},children:"\uAD6C\uB9E4 \uB0B4\uC5ED"})}),e(o,{className:"btn",variant:"contained",color:"primary",onClick:d,sx:{borderTopRightRadius:0,borderBottomRightRadius:20},children:"\uB85C\uADF8\uC544\uC6C3"})]})]})]})})]})}export{y as default};
