import Header from './Header';

export const ThreadCreate = () => {
  const header = {text: 'トップに戻る', url: '/'};
  const threadPost = () => {
    const title = document.getElementById("thread_title").value;
    const requestOptions = {
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({title: title})
    };
    fetch('https://railway.bulletinboard.techtrain.dev/threads',requestOptions);
  }
  return <>
      <Header header={header} />
      <main>
        <section>
        <h2>スレッド新規作成</h2>
        <p><input type="text" id="thread_title" /></p>
        <p><button onClick={threadPost}>作成</button></p>
        </section>
      </main>
  </>
}

export default ThreadCreate