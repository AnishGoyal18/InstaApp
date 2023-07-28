import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';
import LeftSidebar from '../../components/LeftSidebar';
import Profile from '../../components/Profile';
import axios from 'axios';

const UserProfilePage = () => {
    const [profileInfo, setProfileInfo] = useState(null);
    const router = useRouter();
    const { username } = router.query;
    console.log(username)

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const profileResponse = await axios.get(`https://api.unsplash.com/users/${username}`, {
                    params: {
                        client_id: 'FmhKyxys06arPYQwQiC3-YsPxMaTI-G2oRicCb1YzAk',
                    },
                });

                const postsResponse = await axios.get(`https://api.unsplash.com/users/${username}/photos`, {
                    params: {
                        client_id: 'FmhKyxys06arPYQwQiC3-YsPxMaTI-G2oRicCb1YzAk',
                    },
                });
                console.log(postsResponse.data)
                const res = {
                    id: profileResponse.data?.id,
                    username: profileResponse.data?.instagram_username,
                    name: profileResponse.data?.name,
                    bio: profileResponse.data?.bio,
                    profileUrl: profileResponse.data?.profile_image.small,
                    followers: profileResponse.data?.followers_count,
                    following: profileResponse.data?.following_count,
                    postCount: postsResponse.data?.length,
                    posts: postsResponse.data?.map((post) => ({
                        id: post.id,
                        username: post.user?.instagram_username,
                        profileUrl: post.user?.profile_image?.small,
                        location: post.user?.location,
                        imageUrl: post.urls?.regular,
                        description: post.alt_description,
                        likes: post.likes,
                    })),
                };

                if (res == null) router.back();
                setProfileInfo(res);
                console.log(res);
            } catch (error) {
                console.error('Error fetching profile:', error);
                router.back();
            }
        };

        if (username) {
            fetchProfile();
        }
    }, [username]);

    return (
        <div className={styles.layout}>
            <LeftSidebar />
            <Profile profileInfo={profileInfo} />
        </div>
    );
};

export default UserProfilePage;
