import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import Header from './Header';
import PostCreate from './PostCreate';

export const PostsList = () => {
  const header = {text: 'トップに戻る', url: '/'};
  const urlParameters = useParams();
  const [posts, setPosts] = useState([{saved: false}]);
  useEffect(() => {
    fetch('https://railway.bulletinboard.techtrain.dev/threads/'+ urlParameters.id +'/posts?offset=0')
      .then(res => res.json())
      .then(json => setPosts(json.posts))
  },[])
  console.log(posts);
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

        <h2>投稿フォーム</h2>
        <PostCreate urlParameters={urlParameters} />
      </section>
    </main>
  </>
}

export default PostsList
