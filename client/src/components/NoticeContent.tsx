
import React, { useEffect, useState } from 'react';
import { PromiseFn } from 'react-async'
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface NoticeData {
  content: string,
}

export default function NoticeContent() {

  const { noticeId } = useParams();

  const [content, setContent] = useState('');

  useEffect(()=>{
    (async () => {
      const res = await axios.get(`/api/v1/notice/get/${noticeId}`);

      if(res.status != 200) throw Error('error');

      setContent(res.data.content);

    })().catch();
  })
  return <div>
    {content}
  </div>
}