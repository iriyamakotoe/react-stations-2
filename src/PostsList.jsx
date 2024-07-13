import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import Header from './Header';

export const PostsList = () => {
    const header = {text: 'トップに戻る', url: '/'};
    const urlParameters = useParams();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://railway.bulletinboard.techtrain.dev/threads/'+ urlParameters.id +'/posts?offset=0')
      .then(res => res.json())
      .then(json => setPosts(json.posts))
  },[])
  const listItems = posts.map((obj) =>
    <li key={obj.id}>{obj.post=='' ? '（タイトルなし）'
      : obj.post}</li>
  );
  return <>
    <Header header={header} />
    <main>
        <section>
          {posts.length
            ? <ul className='threadList'>{listItems}</ul>
            : <p>投稿はありません。</p>
          }
    </section>
    </main>
  </>
}

export default PostsList
