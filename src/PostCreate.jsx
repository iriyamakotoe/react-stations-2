import React, {useState, useCallback, useEffect} from 'react'

export const PostCreate = (props) => {
  const [createPost, setcreatePost] = useState('');
  const newPost = () => {
    const title = document.getElementById("post_title").value;
    const requestOptions = {
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({post: title})
    };
    fetch('https://railway.bulletinboard.techtrain.dev/threads/'+ props.urlParameters.id +'/posts',requestOptions)
    .then(res => res.json())
    .then(json => setcreatePost(json.post))
  }
  // const data = [{id: 'a56f455d-aa7e-4963-a56f-9fb94e15097f', post: 'test'}];
  // console.log(data)
  return <>
    <p><label><input type="text" id="post_title" /></label></p>
    <p><button onClick={() => props.childToParent(newPost)}>作成</button></p>
  </>
}

export default PostCreate