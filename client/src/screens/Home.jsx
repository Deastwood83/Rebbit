import React, { useEffect } from 'react';
import AppLayout from '../components/AppLayout';
import authService from '../lib/api/auth';
import rebbitLogo from '../rebbitLogo.png';
import Post from '../components/Post';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsAsync } from '../lib/store/reducers/posts';

const Home = () => {
    const { loading, posts } = useSelector((state) => state.posts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPostsAsync());
    }, []);

    return (
        <AppLayout>
            <div className="max-w-[1000px] mx-auto px-8 flex  justify-center h-full text-[#EC7357]">
                <p></p>
                <h2>
                    {' '}
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Libero maxime dolores, ea consectetur est ipsum possimus
                    quia itaque soluta perspiciatis alias nihil, sed
                    voluptatibus commodi recusandae. Nihil velit veritatis
                    omnis.
                </h2>
                <div className="flex flex-wrap items-center justify-center">
                    <img
                        src={rebbitLogo}
                        alt="Rebbit Logo"
                        className="mx-auto"
                    />
                </div>
            </div>
            <div>
                <div className="flex flex-col justify-between">
                    {loading === 'pending' && (
                        <div className="text-center">
                            <h1>Loading...</h1>
                        </div>
                    )}

                    {posts && posts.map((post) => <Post post={post} />)}
                </div>
            </div>
        </AppLayout>
    );
};

export default Home;
