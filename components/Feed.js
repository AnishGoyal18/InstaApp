import React from 'react';
import styles from '../styles/Feed.module.css';
import Statusbar from './Statusbar';
import Post from '../components/Post';
import InfiniteScroll from 'react-infinite-scroll-component';
import { usePostsContext } from '../contexts/PostsContext';
import Navbar from './Navbar';

const Feed = () => {
    const { allPosts, setAllPosts, page, setPage } = usePostsContext();
    const handleLoadMore = () => {
        setPage((prev) => prev + 1);
    };

    return (
        <div className={styles.feed}>
            <Navbar />
            <Statusbar />
            <InfiniteScroll
                dataLength={allPosts.length}
                next={handleLoadMore}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                {allPosts.map((postInfo) => (
                    <Post key={postInfo.id} postInfo={postInfo} />
                ))}
            </InfiniteScroll>
        </div>
    );
};

export default Feed;
