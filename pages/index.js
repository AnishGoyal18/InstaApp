import Head from 'next/head';
import { PostsContextProvider } from './contexts/PostsContext';
import styles from '../styles/Home.module.css';
import LeftSidebar from '../components/LeftSidebar';
import Feed from '../components/Feed';
import RightSidebar from '../components/RightSidebar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <PostsContextProvider>
          <div className={styles.layout}>
            <LeftSidebar />
            <Feed />
            <RightSidebar />
          </div>
        </PostsContextProvider>
      </main>

    </div>
  )
}
