import React, { useEffect } from 'react';
import AppLayout from '../components/AppLayout';
import authService from '../lib/api/auth';
import rebbitLogo from '../rebbitLogo.png';
import Post from '../components/PostCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsAsync } from '../lib/store/reducers/posts';
import PostCard from '../components/PostCard';

const Home = () => {
    const { loading, posts } = useSelector((state) => state.posts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPostsAsync());
    }, []);

    return (
        <AppLayout>
            <div>
                <div className="flex gap-4 flex-col justify-between">
                    {loading === 'pending' && (
                        <div className="text-center">
                            <h1>Loading...</h1>
                        </div>
                    )}

                    {posts && posts.map((post) => <PostCard post={post} />)}
                </div>
            </div>
        </AppLayout>
    );
};

export default Home;
