import { NoticeDTO } from "./dto";
import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

interface NoticeEditorProps {
  authenticated: boolean,
}

const NoticeEditor : React.FC<NoticeEditorProps> = ({ authenticated })=> {
  
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [header, setHeader] = useState('');
  const [updatedId, setUpdatedId] = useState(-1);

  const { noticeId } = useParams();

  const isUpdate = noticeId !== 'new';

  if(isUpdate) {
    const id = parseInt(noticeId as string);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
      (async ()=>{
        const res = await axios.get(`/api/v1/notice/get/${id}`);

        if(res.status == 200){
          const article : NoticeDTO = res.data;

          setContent(article.content);
          setHeader(article.header);
          setTitle(article.title);
        }

      })().catch();
    },[]);
  }

  const onClickSubmit = (isUpdate ? async ()=> {
    const res = await axios.put('/api/v1/notice/update', {
      identifier: noticeId,
      content,
      header,
      title
    });

    if(res.status == 200){
      setUpdatedId(parseInt(noticeId as string));
    }

  } : async ()=> {
    const res = await axios.post('/api/v1/notice/post', {
      content,
      header,
      title
    });

    if(res.status == 200) {
      setUpdatedId(res.data.identifier);
    }
  });

  if(updatedId != -1){
    return <Navigate to={`/notice/${updatedId}`}></Navigate>
  }

  if(!authenticated) return <Navigate to='/login'></Navigate>

  return <div>
    <p>Header - <input type="text" defaultValue={header} onChange={({target: {value}})=> {setHeader(value)}} /></p>
    <p>Title - <input type="text" defaultValue={title} onChange={({target: {value}})=> {setTitle(value)}} /></p>
    <div>
      <textarea defaultValue={content} cols={ 30 } rows={ 10 } onChange={({target: {value}})=>{setContent(value)}}>
        
      </textarea>
    </div>
    <button onClick={onClickSubmit}>Send</button>
  </div>
}

export default NoticeEditor;