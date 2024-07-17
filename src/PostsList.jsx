import React, {memo, useState, useEffect, useCallback} from 'react'
import { useParams } from "react-router-dom";
import Header from './Header';
import PostCreate from './PostCreate';

export const PostsList = memo(() => {
  console.log('PostsList');
  const header = {text: 'トップに戻る', url: '/'};
  const urlParameters = useParams();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts()
  },[])
  const fetchPosts = useCallback(() => {
    fetch('https://railway.bulletinboard.techtrain.dev/threads/'+ urlParameters.id +'/posts?offset=0')
      .then(res => res.json())
      .then(json => setPosts(json.posts))
  },[])
  const handleClick = (title) => {
    const requestOptions = {
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({post: title})
    };
    fetch('https://railway.bulletinboard.techtrain.dev/threads/'+ urlParameters.id +'/posts',requestOptions)
    .then( res => {
      if(res.ok)
        fetchPosts()
    })
    .catch(err => console.log(err.message))
  }
  const listItems = posts.map((obj) =>
    <li key={obj.id}>{obj.post=='' ? '（タイトルなし）'
      : obj.post}</li>
  );

  return <>
    <Header header={header} />
    <main>
      <section>
        <h2>投稿一覧</h2>
          {posts.length
            ? <ul className='threadList'>{listItems}</ul>
            : <p>投稿はありません。</p>
          }
        <PostCreate urlParameters={urlParameters} handleClick={handleClick} />
      </section>
    </main>
  </>
})

export default PostsList
