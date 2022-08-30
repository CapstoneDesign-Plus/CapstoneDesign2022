import { UserDTO } from "@/types/dto";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



export default function UserContent() {

  const [content, setContent] = useState<UserDTO>();

  const { userId } = useParams();

  useEffect(() => {

    (async () => {
      const res = await fetch(`/api/v1/user/get/${ userId }`);
  
      if(res.status != 200) throw Error('error');
  
      setContent(await res.json());
    })().catch();

  }, []);

  return <div>
    <p>Email - {content?.email}</p>
    <p>Point - {content?.point}</p>
    <p>Ticket - {content?.tickets}</p>
    <p>Class - {content?.uclass}</p>
    <p>Username - {content?.username}</p>
  </div>

}