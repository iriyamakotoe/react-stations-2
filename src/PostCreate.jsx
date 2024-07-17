import React, {useRef} from 'react'

export const PostCreate = (props) => {
  console.log('PostCreate');
  const post_title = useRef(null);
  const handleClick = () => {
    props.handleClick(post_title.current.value);
  }
  return <>
        <h2>投稿フォーム</h2>
        <p><label><input type="text" id="post_title" ref={post_title} /></label></p>
        <p><button onClick={handleClick}>作成</button></p>
  </>
}

export default PostCreate