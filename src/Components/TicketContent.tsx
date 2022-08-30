import { TicketDTO } from "@/types/dto";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";



export default function TicketContent() {

  const [content, setContent] = useState<TicketDTO>();

  const { state } = useLocation();

  useEffect(() => {
  
    (async () => {
      const res = await fetch('/api/v1/ticket/get',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            identifier: (state as any).id
          })
      });
  
      if(res.status != 200) throw Error('error');
  
      setContent(await res.json());

    })().catch();

  }, []);

  return <div>
    <p>{content?.owner}</p>
    <p>{content?.price}</p>
    <p>{content?.identifier}</p>
    <p>{content?.state}</p>
    <p>{content?.tclass}</p>
  </div>

}