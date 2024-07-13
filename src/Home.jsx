import Header from './Header';
import ThreadsList from './ThreadsList';

function Home() {
  const header = {text: 'スレッドをたてる', url: '/threads/new'};
  return (
    <>
      <Header header={header} />
      <ThreadsList />
    </>
  )
}

export default Home
