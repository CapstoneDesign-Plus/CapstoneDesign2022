import { useEffect, useState } from "react";
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import {UserDTO} from './dto';

interface TicketShopState {
  authenticated: boolean
}

const TicketShop : React.FC<TicketShopState> = ({authenticated})=> {

  const [,updateComponent] = useState({});
  const [ticketClass, setTicketClass] = useState('A');
  const [point, setPoint] = useState(0);
  let user : UserDTO;


  useEffect(()=>{
    (async()=>{
      const res = await axios.get('/api/v1/user/get/profile');

      if(res.status == 200){
        user = res.data; 
        setPoint(user.point || 0);
      }
    })().catch();
  });

  const onClickBuy = async () => {
    const res = await axios.post('/api/v1/ticket/create', {
      owner: user.email,
      tclass: ticketClass
    });
    if(res.status === 200){
      updateComponent({});
    }
  }

  const onClickBorrow = async () => {
    const res = await axios.get(`/api/v1/user/point?email=${user.email}&delta=100`);
    if(res.status === 200){
      updateComponent({});
    }
  }

  if(!authenticated) return <Navigate to='/login'></Navigate>

  return <div>
    <p>You have {point} points!</p>
    <p>Ticket Class to buy : <input type="text" defaultValue={ticketClass} 
    onChange={({target:{value}})=>{setTicketClass(value)}} /></p>
    <button onClick={onClickBuy}>Buy</button>
    <button onClick={onClickBorrow}>Borrow</button>
  </div>
}

export default TicketShop;
