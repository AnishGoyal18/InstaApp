import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const postsContext = createContext();

export function PostsContextProvider({ children }) {
    const [allPosts, setAllPosts] = useState([]);
    const [page, setPage] = useState(1);

    const fetchPosts = async (pageNo) => {
        try {
            const response = await axios.get(`/api/posts?page=${pageNo}`);
            const newPosts = response.data;
            setAllPosts((prev) => [...prev, ...newPosts]);
        } catch (error) {
            console.error('Error fetching photos:', error);
        }
    };

    useEffect(() => {
        fetchPosts(page);
    }, [page]);

    return (
        <postsContext.Provider value={{ allPosts, setAllPosts, page, setPage }}>
            {children}
        </postsContext.Provider>
    )
}

export function usePostsContext() {
    return useContext(postsContext);
}