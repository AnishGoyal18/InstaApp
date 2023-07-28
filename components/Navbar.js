import React from 'react'
import styles from '../styles/Navbar.module.css';
import { BiHeart, BiHomeAlt, BiMessage } from 'react-icons/bi';

function Navbar() {
    return (
        <div className={styles.navbar}>
            <div onClick={() => router.push('/')}>
                {/* <BiHomeAlt /> */}
                <span>Instagram</span>
            </div>
            <div className={styles.icons}>
                <BiHeart />
                <BiMessage />
            </div>
        </div>
    )
}

export default Navbar