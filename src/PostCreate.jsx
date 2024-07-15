import React, {useState, useCallback, useEffect} from 'react'

export const PostCreate = (props) => {
  // 親コンポーネントから受け取った関数を使って、inputの値を渡す
  const handleClick = (event) => {
    const title = document.getElementById("post_title").value;
    props.handleClick(title);
  };
  return <>
        <h2>投稿フォーム</h2>
        <p><label><input type="text" id="post_title" /></label></p>
        <p><button onClick={handleClick}>作成</button></p>
  </>
}

export default PostCreate