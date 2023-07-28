import React, { useState } from 'react';
import styles from '../styles/Profile.module.css';
import { MdVerified } from 'react-icons/md';
import { HiOutlineSwitchHorizontal } from 'react-icons/hi';
import Post from './Post';
import GridPost from './GridPost';

const Profile = ({ profileInfo }) => {
    const { username, name, bio, profileUrl, followers, following, postCount, posts } = profileInfo || {};
    const [postView, setPostView] = useState('grid');

    const handlePostView = () => {
        setPostView((prev) => (prev === 'grid' ? 'list' : 'grid'));
    };

    return (
        <div className={styles.profile}>
            <div className={styles.profile_header}>
                <div className={styles.profile_image}>
                    <img src={profileUrl} alt={'user'} />
                </div>
                <div className={styles.profile_info}>
                    <div className={styles.user}>
                        <div className={styles.username}>{username ? username : 'User'}</div>
                        <MdVerified className={styles.icon} />
                    </div>
                    <div className={styles.follow}>
                        <span>{followers ? followers : '0'} followers</span>
                        <span>{following ? following : '0'} following</span>
                    </div>
                </div>
            </div>
            <div className={styles.bio}>{bio ? bio : 'User not found'}</div>
            <div className={styles.posts_count}>{postCount ? postCount : '0'} posts</div>
            <div className={styles.bttn} onClick={() => handlePostView()}>
                <HiOutlineSwitchHorizontal />
            </div>

            {postView === 'grid' ? (
                <div className={styles.gridView}>
                    {posts &&
                        posts.map((postInfo) => (
                            <GridPost key={postInfo.id} postInfo={postInfo} />
                        ))}
                </div>
            ) : (
                <div className={styles.listView}>
                    {posts &&
                        posts.map((postInfo) => (
                            <Post key={postInfo.id} postInfo={postInfo} />
                        ))}
                </div>
            )}
        </div>
    );
};

export default Profile;
