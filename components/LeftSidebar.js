import React from 'react';
import styles from '../styles/LeftSidebar.module.css';
import { BiAddToQueue, BiCompass, BiHeart, BiHomeAlt, BiMenu, BiMessage, BiPlay, BiSearch, BiUser } from 'react-icons/bi';
import { useRouter } from 'next/router';

const LeftSidebar = () => {
    const router = useRouter();
    return (
        <div className={styles.left_sidebar}>
            <div className={styles.inner_left_sidebar}>
                <div className={styles.logo} onClick={() => router.push('/')}>Instagram</div>
                <div className={styles.navigation}>
                    <ul>
                        <li onClick={() => router.push('/')}>
                            <BiHomeAlt />
                            <span>Home</span>
                        </li>
                        <li>
                            <BiSearch />
                            <span>Search</span>
                        </li>
                        <li>
                            <BiCompass />
                            <span>Explore</span>
                        </li>
                        <li>
                            <BiPlay />
                            <span>Reels</span>
                        </li>
                        <li>
                            <BiMessage />
                            <span>Messages</span>
                        </li>
                        <li>
                            <BiHeart />
                            <span>Notifications</span>
                        </li>
                        <li>
                            <BiAddToQueue />
                            <span>Create</span>
                        </li>
                        <li>
                            <BiUser />
                            <span>Profile</span>
                        </li>
                        <li>
                            <BiMenu />
                            <span>More</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;

