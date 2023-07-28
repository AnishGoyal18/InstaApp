import React from 'react';
import styles from '../styles/RightSidebar.module.css';
import { BiAddToQueue, BiCompass, BiHeart, BiHomeAlt, BiMenu, BiMessage, BiPlay, BiSearch, BiUser } from 'react-icons/bi';
import { usePostsContext } from '../contexts/PostsContext';

const RightSidebar = () => {
    const { allPosts, setAllPosts } = usePostsContext();

    return (
        <div className={styles.right_sidebar}>
            <div className={styles.users}>
                <div className={styles.heading}>Suggestions for you</div>
                {allPosts.reverse().map((user) => (
                    <div key={user.id} className={styles.usercard}>
                        <div className={styles.user}>
                            <img src={user.profileUrl} alt={user.username} />
                            <span>{'@' + user.username?.slice(0, 14)}</span>
                        </div>
                        <div className={styles.follow}>Follow</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RightSidebar;

