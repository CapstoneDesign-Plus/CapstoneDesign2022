
import React, {Component, Fragment} from 'react';
import { PromiseFn, useAsync } from 'react-async'
import { useParams } from 'react-router-dom';

interface NoticeData {
  content: string,
}

const loadNotice : PromiseFn<NoticeData> = async ({noticeId}) => {
  const res = await fetch(`/api/v1/notice/get/${noticeId}`);

  if(res.status != 200) throw Error('error');

  return await res.json() as NoticeData;
}


export default function() {

  const { noticeId } = useParams();
  
  const { data: notice, error, isLoading } = useAsync<NoticeData>({
    promiseFn: loadNotice,
    noticeId,
  });
  
  if (isLoading) return <div>"Loading..."</div>
  if (error) return <div>`Something went wrong: ${error.message}`</div>
  if (notice)
    return (
      <div>
        {notice.content}
      </div>
    )
  return <div>

  </div>
}