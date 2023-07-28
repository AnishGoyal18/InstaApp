import React from 'react'
import { PiDotsThreeBold } from 'react-icons/pi';
import { SlBubble } from 'react-icons/sl';
import { BsBookmark, BsHeart, BsSend } from 'react-icons/bs';
import { MdVerified } from 'react-icons/md';
import { useRouter } from 'next/router';
import styles from '../styles/Post.module.css';

const Post = ({ postInfo }) => {
  const { id, username, profileUrl, location, imageUrl, likes, description } = postInfo;
  const router = useRouter();

  const handleProfileClick = async () => {
    router.push(`/profile/${username}`)
  };

  return (
    <div className={styles.post}>
      <div className={styles.post_header}>
        <div className={styles.userInfo}>
          <img src={profileUrl} alt={'user'} onClick={() => handleProfileClick()} />
          <div className={styles.user}>
            <div className={styles.user_verified}>
              <div className={styles.username} onClick={() => handleProfileClick()}>{username}</div>
              <MdVerified className={styles.icon} />
            </div>
            <div className={styles.location}>{location}</div>
          </div>
        </div>
        <div className={styles.menu_dots}>
          <PiDotsThreeBold />
        </div>
      </div>
      <img src={imageUrl} alt={'alt'} className={styles.post_img} />
      <div className={styles.post_footer}>
        <div className={styles.icons}>
          <div className={styles.inner_icons}>
            <BsHeart />
            <SlBubble />
            <BsSend />
          </div>
          <BsBookmark />
        </div>
        <div>{likes} likes</div>
        <div className={styles.description}>
          <div onClick={() => handleProfileClick()}> {username}</div>
          <div>{description?.length <= 70 ? description : description?.substring(0, 70) + '...'}</div>
        </div>
      </div>
    </div >
  );
};

export default Post