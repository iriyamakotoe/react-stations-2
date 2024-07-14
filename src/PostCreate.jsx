export const PostCreate = (props) => {
  const newPost = () => {
    const title = document.getElementById("post_title").value;
    const requestOptions = {
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({post: title})
    };
    fetch('https://railway.bulletinboard.techtrain.dev/threads/'+ props.urlParameters.id +'/posts',requestOptions)
    .then( res => res.ok
      ? console.log('post success!')
      : console.log('post error!')
    );
  }
  return <>
    <p><label><input type="text" id="post_title" /></label></p>
    <p><button onClick={newPost}>作成</button></p>
  </>
}

export default PostCreate