import React, {useState, useEffect} from 'react'
import ThreadsList from './ThreadsList';
import './threads.css'

export const ThreadsListContainer = () => {
  const [threads, setThreads] = useState([]);
  useEffect(() => {
    fetch('https://railway.bulletinboard.techtrain.dev/threads?offset=0')
      .then(res => res.json())
      .then(json => setThreads(json))
  },[])
  const listItems = threads.map((obj) =>
    <li>{obj.title}</li>
  );
  return <>
      <main>
        <section>
        <h2>新着スレッド</h2>
        <ThreadsList threads={threads}/>
        </section>
      </main>
  </>
}

export default ThreadsListContainer
