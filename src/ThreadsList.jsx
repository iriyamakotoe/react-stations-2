import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

export const ThreadsList = () => {
  const [threads, setThreads] = useState([]);
  useEffect(() => {
    fetch('https://railway.bulletinboard.techtrain.dev/threads?offset=0')
      .then(res => res.json())
      .then(json => setThreads(json))
  },[])
  const listItems = threads.map((obj) =>
    <li key={obj.id}><Link to={'/threads/' + obj.id}>{obj.title}</Link></li>
  );
  return <>
      <main>
        <section>
        <h2>新着スレッド</h2>
        <ul className='threadList'>{listItems}</ul>
        </section>
      </main>
  </>
}

export default ThreadsList