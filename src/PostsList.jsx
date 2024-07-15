import React, {useState, useCallback, useEffect} from 'react'
import { useParams } from "react-router-dom";
import Header from './Header';
// import PostCreate from './PostCreate';

export const PostsList = () => {
  console.log('PostsList');
  const header = {text: 'トップに戻る', url: '/'};
  const urlParameters = useParams();
  const [posts, setPosts] = useState([]);
  const [createPost, setcreatePost] = useState('');
  // const childToParent = useCallback((data) => {
  //   console.log('new post',data);
  //   setcreatePost(data);
  // },[])
  const newPost = () => {
    const title = document.getElementById("post_title").value;
    const requestOptions = {
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({post: title})
    };
    fetch('https://railway.bulletinboard.techtrain.dev/threads/'+ urlParameters.id +'/posts',requestOptions)
    .then(res => res.json())
    .then(json => setcreatePost(json.post))
  }
  useEffect(() => {
    fetch('https://railway.bulletinboard.techtrain.dev/threads/'+ urlParameters.id +'/posts?offset=0')
      .then(res => res.json())
      .then(json => setPosts(json.posts))
      console.log('fetch');
  },[createPost])
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
        <p><label><input type="text" id="post_title" /></label></p>
        <p><button onClick={newPost}>作成</button></p>


        {/* <PostCreate urlParameters={urlParameters} childToParent={childToParent} /> */}
      </section>
    </main>
  </>
}

export default PostsList
