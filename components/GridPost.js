import React from 'react'
import styles from '../styles/GridPost.module.css';
import { PiDotsThreeBold } from 'react-icons/pi';

function GridPost({ postInfo }) {
    const { id, username, profileUrl, location, imageUrl, likes, description } = postInfo;

    return (
        <div className={styles.grid_post}>
            <div className={styles.post_header}>
                <div className={styles.userInfo}>
                    <img src={profileUrl} alt={'user'} />
                    <div className={styles.user}>
                        <div className={styles.username} onClick={() => handleProfileClick()}>{username}</div>
                        <div className={styles.location}>{location}</div>
                    </div>
                </div>
                <div className={styles.menu_dots}>
                    <PiDotsThreeBold />
                </div>
            </div>
            <img src={postInfo.imageUrl} alt={'alt'} className={styles.post_img} />
            <div>{likes} likes</div>
            <div className={styles.description}>
                <div>{username}</div>
                <div>{description?.length <= 35 ? description : description?.substring(0, 35) + '...'}</div>
            </div>
        </div>
    )
}

export default GridPost