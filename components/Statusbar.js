import React from 'react';
import styles from '../styles/Statusbar.module.css';
import { usePostsContext } from '../contexts/PostsContext';

const Statusbar = () => {
    const { allPosts, setAllPosts } = usePostsContext();
    return (
        <div className={styles.statusbar}>
            <div className={styles.stories}>
                {allPosts.reverse().slice(0, 8).map((story) => (
                    <div key={story.id} className={styles.story}>
                        <img src={story.profileUrl} alt={story.username} />
                        <span>{story.username?.slice(0, 8)}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Statusbar;
