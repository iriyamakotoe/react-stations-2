import Header from './Header';
import ThreadsListContainer from './ThreadsListContainer';

function Home() {
  const header = {text: 'スレッドをたてる', url: '/threads/new'};
  return (
    <>
      <Header header={header} />
      <ThreadsListContainer />
    </>
  )
}

export default Home
