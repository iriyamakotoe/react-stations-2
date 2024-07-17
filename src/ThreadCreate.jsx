import React, {useRef, useState} from 'react'
import Header from './Header';

export const ThreadCreate = () => {
  const header = {text: 'トップに戻る', url: '/'};
  const thread_title = useRef(null);
  const [state,setState] = useState('');
  const threadPost = () => {
    const requestOptions = {
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({title: thread_title.current.value})
    };
    fetch('https://railway.bulletinboard.techtrain.dev/threads',requestOptions)
    .then(res => {
      if(res.ok)
        setState('スレッド作成しました！');
    })
    .catch(err => setState(err.message))
  }
  return <>
      <Header header={header} />
      <main>
        <section>
        <h2>スレッド新規作成</h2>
        <p><input id="thread_title" type="text" ref={thread_title} /></p>
        <p><button onClick={threadPost}>作成</button></p>
        <p id="post_status">{state}</p>
        </section>
      </main>
  </>
}

export default ThreadCreate